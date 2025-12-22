
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit13Capstone = {
    id: 'node-unit-13',
    title: 'Capstone: Realtime Chat API',
    description: 'Build a production-ready Realtime Chat Backend using Express, Socket.io, and a File-based Database.',
    items: [
        {
            id: 'node-13-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Project Brief: ChatServer 3000 💬',
            duration: '15 min read',
            content: `
# Project Brief: ChatServer 3000 💬

## The Client
A social network needs a backend for their new "Rooms" feature.
Users should be able to join a room and send messages in real-time.

## Requirements
1.  **REST API**:
    *   \`GET /rooms\`: List all active rooms.
    *   \`POST /rooms\`: Create a new room.
2.  **Realtime (WebSocket)**:
    *   Event \`join\`: User joins a room.
    *   Event \`message\`: User sends a message. Broadcast to room.
3.  **Persistence**:
    *   Save messages to a JSON file so they survive server restarts.

## Tech Stack
*   **Express**: For the REST API.
*   **Socket.io**: For real-time communication.
*   **fs/promises**: For file persistence.
            `
        },
        {
            id: 'node-13-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 1: The Express Server',
            duration: '30 min',
            content: `
# Phase 1: The Express Server

Set up the HTTP server and the REST endpoints.

## The Mission
1.  **Setup**: Initialize Express and HTTP server.
2.  **Middleware**: Use \`express.json()\`, \`cors()\`.
3.  **Routes**: Implement \`GET /rooms\` and \`POST /rooms\`.

## Syntax
\`\`\`javascript
const app = express();
const server = http.createServer(app);
server.listen(3000);
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import: express, http, cors.',
                    completed: false,
                    regex: /require\s*\(\s*['"]express['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Middleware: app.use(express.json()).',
                    completed: false,
                    regex: /app\.use\s*\(\s*express\.json\s*\(\s*\)\s*\)/
                },
                {
                    id: 3,
                    description: 'REST: app.get("/rooms").',
                    completed: false,
                    regex: /app\.get\s*\(\s*['"]\/rooms['"]/
                }
            ],
            files: [
                {
                    name: 'server.js',
                    language: 'javascript',
                    content: `const express = require('express');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

// TODO: Middleware

// TODO: Routes

const PORT = 3000;
server.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});
`
                }
            ]
        },
        {
            id: 'node-13-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Phase 2: Socket.io Integration',
            duration: '40 min',
            content: `
# Phase 2: Socket.io Integration

Enable real-time bidirectional communication.

## The Mission
1.  **Init**: Attach Socket.io to the HTTP server.
2.  **Connection**: Log when a user connects.
3.  **Join Room**: Listen for \`join_room\` event.
4.  **Message**: Listen for \`send_message\` and broadcast to room.

## Syntax
\`\`\`javascript
io.on('connection', (socket) => {
    socket.on('event', (data) => { ... });
    socket.to(room).emit('event', data);
});
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import: socket.io.',
                    completed: false,
                    regex: /require\s*\(\s*['"]socket\.io['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Init: new Server(server).',
                    completed: false,
                    regex: /new\s+Server\s*\(\s*server/
                },
                {
                    id: 3,
                    description: 'Join: socket.join(room).',
                    completed: false,
                    regex: /socket\.join\s*\(/
                },
                {
                    id: 4,
                    description: 'Broadcast: .to(room).emit().',
                    completed: false,
                    regex: /\.to\s*\(\s*\w+\s*\)\.emit/
                }
            ],
            files: [
                {
                    name: 'socket-logic.js',
                    language: 'javascript',
                    content: `const { Server } = require('socket.io');

function setupSockets(httpServer) {
    const io = new Server(httpServer, {
        cors: { origin: "*" }
    });

    io.on('connection', (socket) => {
        console.log('User Connected:', socket.id);

        // TODO: Handle 'join_room'
        
        // TODO: Handle 'send_message'
        
        socket.on('disconnect', () => {
            console.log('User Disconnected');
        });
    });
}

module.exports = setupSockets;
`
                }
            ]
        },
        {
            id: 'node-13-project',
            type: CONTENT_TYPES.PROJECT,
            title: 'Final Assembly',
            duration: '60 min',
            description: 'Connect the Database (Filesystem), REST API, and Sockets.',
            content: `
# Final Assembly

Connect all the pieces.

## The Mission
1.  **Database**: Create \`db.json\` to store messages.
2.  **Save**: When a message comes in via Socket, write it to \`db.json\`.
3.  **Load**: When a user joins a room, read from \`db.json\` and emit history.

## Starter Code
We provided the file structure. You write the logic.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Read: fs.readFile("db.json").',
                    completed: false,
                    regex: /fs\.readFile\s*\(/
                },
                {
                    id: 2,
                    description: 'Write: fs.writeFile("db.json").',
                    completed: false,
                    regex: /fs\.writeFile\s*\(/
                },
                {
                    id: 3,
                    description: 'Parse/Stringify: JSON handling.',
                    completed: false,
                    regex: /JSON\.(parse|stringify)/
                }
            ],
            starterFiles: [
                {
                    name: 'server.js',
                    language: 'javascript',
                    content: `const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());

const DB_PATH = path.join(__dirname, 'db.json');

// --- 1. REST API ---
app.get('/rooms', async (req, res) => {
    // TODO: Return list of active rooms from DB
});

// --- 2. SOCKETS ---
io.on('connection', (socket) => {
    
    socket.on('join_room', async (room) => {
        socket.join(room);
        // TODO: Load history from DB and emit 'history'
    });

    socket.on('send_message', async (data) => {
        // TODO: Save to DB
        // TODO: Broadcast to room
    });

});

server.listen(3000, () => console.log("Chat Server Running on 3000"));`
                },
                {
                    name: 'db.json',
                    language: 'json',
                    content: `{
    "rooms": {
        "general": []
    }
}`
                }
            ]
        }
    ]
};
