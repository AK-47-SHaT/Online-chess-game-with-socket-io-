<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-Time Chess Game</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
            line-height: 1.6;
            background-color: #0d1117;
            color: #c9d1d9;
            padding: 20px 40px;
            max-width: 800px;
            margin: 0 auto;
        }
        h1, h2, h3 {
            border-bottom: 1px solid #30363d;
            padding-bottom: 0.3em;
            color: #58a6ff;
        }
        h1 {
            font-size: 2.5em;
        }
        h2 {
            font-size: 2em;
        }
        h3 {
            font-size: 1.5em;
        }
        a {
            color: #58a6ff;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        code {
            font-family: ui-monospace, "Cascadia Mono", "Segoe UI Mono", "Liberation Mono", Menlo, Consolas, monospace;
            background-color: #161b22;
            padding: 0.2em 0.4em;
            border-radius: 6px;
            font-size: 85%;
        }
        pre {
            background-color: #161b22;
            padding: 16px;
            border-radius: 6px;
            overflow: auto;
        }
        pre code {
            padding: 0;
            background-color: transparent;
        }
        ul, ol {
            padding-left: 20px;
        }
        li {
            margin-bottom: 8px;
        }
        hr {
            border: 0;
            height: 1px;
            background-color: #30363d;
            margin: 24px 0;
        }
    </style>
</head>
<body>

    <h1>♟️ Real-Time Chess Game</h1>

    <h3><a href="https://online-chess-game-with-socket-io.onrender.com/">▶️ Play the Live Demo Here</a></h3>

    <hr>

    <h2>📖 About This Project</h2>
    <p>
        This is a real-time, multiplayer chess game built using <strong>Node.js</strong> and <strong>Socket.IO</strong>. It allows two people to play against each other while others can join to watch the match live.
    </p>
    <p>Player roles are assigned automatically upon joining:</p>
    <ul>
        <li><strong>1st Person:</strong> Assigned as <strong>White</strong>.</li>
        <li><strong>2nd Person:</strong> Assigned as <strong>Black</strong>.</li>
        <li><strong>Subsequent People:</strong> Join as <strong>Spectators</strong>.</li>
    </ul>

    <h3>Tech Stack:</h3>
    <ul>
        <li><strong>Backend:</strong> Node.js, Express</li>
        <li><strong>Real-Time:</strong> Socket.IO</li>
        <li><strong>Frontend:</strong> EJS, Tailwind CSS</li>
    </ul>

    <hr>

    <h2>🚀 How to Run Locally</h2>
    
    <h3>Step 1: Clone the Repository</h3>
    <pre><code>git clone https://github.com/AK-47-SHaT/Online-chess-game-with-socket-io-.git</code></pre>

    <h3>Step 2: Install Dependencies</h3>
    <pre><code>npm install</code></pre>

    <h3>Step 3: Start the Server</h3>
    <pre><code>node app.js</code></pre>

    <p>Now, open <code>http://localhost:3000</code> in your browser.</p>

</body>
</html>
