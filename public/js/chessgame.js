const socket = io();

// socket.emit("churan");
// socket.on("churan papdi",()=>{
//     console.log("churan papdi recieved");
    
// })

const chess  =new Chess();
const boardElement = document.querySelector(".chessboard");

const roleDisplay = document.querySelector(".role-display");
const turnDisplayElement = document.getElementById("turn-display");

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () =>{
    const board = chess.board();
    boardElement.innerHTML="";
    // console.log(board);
    turnDisplayElement.innerText = `${chess.turn() === 'w' ? "White's" : "Black's"} Turn`;
    
    board.forEach((row,rowindex) => {
        row.forEach((square,squareindex)=>{
            console.log(square);
            const squareElement = document.createElement("div");
            squareElement.classList.add("square",
                ((rowindex + squareindex)%2 === 0 ? "light":"dark" )
            );
            
            squareElement.dataset.row = rowindex;
            squareElement.dataset.col = squareindex;

            if(square){
                const pieceElement = document.createElement("div");
                pieceElement.classList.add("piece",square.color === 'w'?"white":"black")

                pieceElement.innerText=getPieceUnicode(square);

                pieceElement.draggable = playerRole === square.color;

                pieceElement.addEventListener("dragstart",(e)=>{
                    if(pieceElement.draggable){
                        draggedPiece = pieceElement;
                        sourceSquare = {row: rowindex, col:squareindex};
                        e.dataTransfer.setData("text/plain","")
                    }
                })

                pieceElement.addEventListener("dragend",()=>{
                    draggedPiece=null;
                    sourceSquare=null;
                })

                squareElement.appendChild(pieceElement); 
            }

            squareElement.addEventListener("dragover",function(e){
                e.preventDefault();
            });

            squareElement.addEventListener("drop",(e)=>{
                e.preventDefault();
                if(draggedPiece){
                    const targetSource = {
                        row:parseInt(squareElement.dataset.row),
                        col:parseInt(squareElement.dataset.col)
                    };

                    handleMove(sourceSquare,targetSource);
                }
            })
            boardElement.appendChild(squareElement);
        })

    });

}

const handleMove = (source,target) =>{ 
    const move = {
        from: `${String.fromCharCode(97+source.col)}${8 - source.row}`,
        to: `${String.fromCharCode(97+target.col)}${8 - target.row}`,
        promotion: 'q'
    }

    socket.emit("move",move);
}

const getPieceUnicode = (square) =>{
    const unicodePieces = {
        K: "♔",
        k: "♚",
        Q: "♕",
        q: "♛",
        R: "♖",
        r: "♜",
        B: "♗",
        b: "♝",
        N: "♘",
        n: "♞",
        P: "♙",
        p: "♟"
     
    }

    const key = square.color==='w'?square.type.toUpperCase() : square.type ;
    return unicodePieces[key] || "";
}

socket.on("playerRole",(role)=>{
    playerRole =role;
    roleDisplay.innerText= `${role}`
    renderBoard();
})
socket.on("spectatorRole",()=>{
    playerRole =null;
    roleDisplay.innerText="Spectator";
    renderBoard();
})
socket.on("boardState",(fen)=>{
    chess.load(fen);
    renderBoard();
})

socket.on("move",(move)=>{
    chess.move(move);
    renderBoard();
})
renderBoard();