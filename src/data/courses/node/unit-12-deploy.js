import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit12Deploy = {
    id: 'node-unit-12',
    title: 'Unit 12: Production & Architecture',
    description: 'Go to market. Learn how to keep your Node.js app alive, scale it across CPU cores, and proxy it behind Nginx.',
    items: [
        // PART 1: INFO
        {
            id: 'node-12-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Process Manager (PM2) 💂',
            duration: '15 min read',
            content: `
# Deep Dive: The Process Manager (PM2) 💂

## 1. Do not use 'node app.js'
In production, if your app crashes, it dies.
**PM2** is a process manager that:
*   Auto-restarts crashes.
*   Runs in background (Daemon).
*   Logs management.

## 2. commands
\`pm2 start app.js\`
\`pm2 list\`
\`pm2 logs\`
\`pm2 monit\`
            `
        },
        {
            id: 'node-12-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Clustering & Threads 🧵',
            duration: '15 min read',
            content: `
# Deep Dive: Clustering & Threads 🧵

## 1. Single Core Limit
Node runs on 1 CPU core. If you have a 16-core server, 15 are idle.

## 2. The Cluster Module
You can fork the master process into **Workers** (one per core).
All workers listen to the same Port 3000.
The OS Load Balances traffic between them.
PM2 does this automatically with: \`pm2 start app.js -i max\`.
            `
        },

        // PART 2: LABS
        {
            id: 'node-12-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Clustering implementation',
            duration: '25 min',
            content: `
# Lab 1: Clustering implementation

Manually implement the cluster module.

## The Mission
1.  **Check**: \`cluster.isMaster\`.
2.  **Master**: Fork workers for each CPU.
3.  **Worker**: Run the server logic.

## Resilience
If a worker dies, the Master can spawn a new one!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import cluster & os.',
                    completed: false,
                    regex: /require\s*\(\s*['"]cluster['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Master logic: Fork.',
                    completed: false,
                    regex: /cluster\.fork\s*\(\s*\)/
                },
                {
                    id: 3,
                    description: 'Worker logic: Server.',
                    completed: false,
                    regex: /http\.createServer/
                }
            ],
            files: [
                {
                    name: 'cluster.js',
                    language: 'javascript',
                    content: `const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // Task 2: Fork for each CPU
    for (let i = 0; i < numCPUs; i++) {
        
    }
} else {
    // Task 3: Worker code
    http.createServer((req, res) => res.end("Hi")).listen(8000);
}
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-12-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Ops Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the main purpose of PM2?',
                    options: [
                        'To compile code',
                        'To keep the application running alive (restart on crash)',
                        'To format code',
                        'To run tests'
                    ],
                    correctIndex: 1,
                    explanation: 'PM2 is a production process manager that ensures high availability.'
                },
                {
                    id: 'q2',
                    question: 'Why do we need clustering in Node.js?',
                    options: [
                        'Because Node is slow',
                        'To utilize multicore systems since Node is single-threaded',
                        'To separate frontend and backend',
                        'To connect to databases'
                    ],
                    correctIndex: 1,
                    explanation: 'One Node process = One Core. Clustering allows us to scale vertically on the same machine.'
                }
            ]
        }
    ]
};
