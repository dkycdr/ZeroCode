import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit11WebSockets = {
    id: 'node-unit-11',
    title: 'Unit 11: Real-time with WebSockets',
    description: 'Break free from Request-Response. Learn how to build persistent, bidirectional connections for chat apps and live updates.',
    items: [
        // PART 1: INFORMATIONAL
        {
            id: 'node-11-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: HTTP vs WebSockets 🔌',
            duration: '15 min read',
            content: `
# Deep Dive: HTTP vs WebSockets 🔌

## 1. The HTTP Problem
HTTP is **Half-Duplex** and **Stateless**.
Client speaks, Server answers, Connection closes.
For a chat app, you'd have to Poll ("Any new messages?") every 1 second. Inefficient.

## 2. The WebSocket Upgrade
WebSockets start as HTTP ("Can we upgrade?"), then switch protocols to TCP socket.
**Full-Duplex**: Both Server and Client can speak anytime.
**Persistent**: Connection stays open.

## 3. Socket.io
Native \`ws\` module is hard.
**Socket.io** is the library of choice. It handles:
*   Auto-reconnection.
*   Fallbacks (Long-polling if WS blocked).
*   Rooms/Namespaces.
            `
        },

        // PART 2: LABS
        {
            id: 'node-11-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Socket.io Setup',
            duration: '20 min',
            content: `
# Lab 1: Socket.io Setup

Attach a Socket server to an HTTP server.

## The Mission
1.  **Import**: \`socket.io\`.
2.  **Attach**: \`new Server(httpServer)\`.
3.  **Listen**: \`io.on('connection', socket => ...)\`.

## Separation
You need the raw http server instance, not just the Express apps.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Initialize Socket.io Server.',
                    completed: false,
                    regex: /new\s+Server\s*\(\s*httpServer/
                },
                {
                    id: 2,
                    description: 'Listen for connection.',
                    completed: false,
                    regex: /io\.on\s*\(\s*['"]connection['"]/
                }
            ],
            files: [
                {
                    name: 'socket.js',
                    language: 'javascript',
                    content: `const { Server } = require('socket.io');
const httpServer = require('http').createServer();

// Task 1: Create IO
const io = null;

// Task 2: Handle connection
`
                }
            ]
        },
        {
            id: 'node-11-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Events & Broadcasting',
            duration: '25 min',
            content: `
# Lab 2: Events & Broadcasting

Send messages!

## The Mission
1.  **Client -> Server**: \`socket.on('msg')\`.
2.  **Server -> Client**: \`socket.emit('reply')\`.
3.  **Broadcast**: \`io.emit()\` sends to EVERYONE (Global chat).

## Diff
*   \`socket.emit\`: Only to sender.
*   \`socket.broadcast.emit\`: To everyone EXCEPT sender.
*   \`io.emit\`: To everyone INCLUDING sender.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Receive message.',
                    completed: false,
                    regex: /socket\.on\s*\(\s*['"]chat['"]/
                },
                {
                    id: 2,
                    description: 'Broadcast to all.',
                    completed: false,
                    regex: /io\.emit\s*\(\s*['"]chat['"]/
                }
            ],
            files: [
                {
                    name: 'chat.js',
                    language: 'javascript',
                    content: `// Inside connection handler...
io.on('connection', (socket) => {
    
    // Task 1: Listen for 'chat'
    socket.on('chat', (msg) => {
        // Task 2: Send to everyone
        
    });

});
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-11-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Realtime Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the "handshake" in WebSockets?',
                    options: [
                        'A security check',
                        'The initial HTTP request asking to Upgrade protocols',
                        'A physical handshake',
                        'Closing the connection'
                    ],
                    correctIndex: 1,
                    explanation: 'The connection starts as HTTP GET / with header Upgrade: websocket.'
                },
                {
                    id: 'q2',
                    question: 'How do you send a message to everyone EXCEPT the sender?',
                    options: [
                        'io.emit()',
                        'socket.emit()',
                        'socket.broadcast.emit()',
                        'socket.send()'
                    ],
                    correctIndex: 2,
                    explanation: 'Broadcast is useful for "User X has joined" notifications where X doesn\'t need to see it.'
                }
            ]
        }
    ]
};
