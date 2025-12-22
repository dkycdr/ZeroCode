
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressLab1 = {
    id: 'express-1-lab-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 1: Your First Express Server',
    duration: '20 min',
    content: `
# Lab 1: Your First Express Server

Welcome to your first Express.js lab! In this hands-on exercise, you'll create a basic Express server from scratch and learn the fundamental structure of an Express application.

## Mission Briefing

Your task is to build a simple web server that responds to different routes. This is the foundation of every Express application - understanding how to set up a server and define basic routes.

## The Theory: Express App Anatomy

An Express app follows a consistent structure:
1. **Import Express**: \`const express = require('express')\`
2. **Create app**: \`const app = express()\`
3. **Define routes**: \`app.get('/path', handler)\`
4. **Start server**: \`app.listen(port, callback)\`

Every route handler receives \`req\` (request) and \`res\` (response) objects.

## Your Mission

Create an Express server with multiple routes:
- \`/\` - Welcome message
- \`/about\` - About page
- \`/api/status\` - JSON status endpoint

Let's begin!
    `,
    tasks: [
        {
            id: 1,
            description: 'Import express module',
            completed: false,
            regex: /const\s+express\s*=\s*require\(\s*['"]express['"]\s*\)/,
            hint: "const express = require('express');"
        },
        {
            id: 2,
            description: 'Create Express app instance',
            completed: false,
            regex: /const\s+app\s*=\s*express\(\s*\)/,
            hint: "const app = express();"
        },
        {
            id: 3,
            description: 'Define PORT constant (3000)',
            completed: false,
            regex: /const\s+PORT\s*=\s*3000/,
            hint: "const PORT = 3000;"
        },
        {
            id: 4,
            description: 'Create GET route for /',
            completed: false,
            regex: /app\.get\(\s*['"]\/['"]\s*,/,
            hint: "app.get('/', (req, res) => { ... });"
        },
        {
            id: 5,
            description: 'Send "Welcome to Express!" from / route',
            completed: false,
            regex: /res\.send\(\s*['"]Welcome to Express!/,
            hint: "res.send('Welcome to Express!');"
        },
        {
            id: 6,
            description: 'Create GET route for /about',
            completed: false,
            regex: /app\.get\(\s*['"]\/about['"]\s*,/,
            hint: "app.get('/about', (req, res) => { ... });"
        },
        {
            id: 7,
            description: 'Start server with app.listen',
            completed: false,
            regex: /app\.listen\(\s*PORT/,
            hint: "app.listen(PORT, () => { console.log('Server running'); });"
        }
    ],
    files: [
        {
            name: 'server.js',
            language: 'javascript',
            content: `// TODO: Import express

// TODO: Create Express app

// TODO: Define PORT = 3000

// TODO: GET route for / - send "Welcome to Express!"

// TODO: GET route for /about - send "About Page"

// TODO: Start server with app.listen(PORT)
`
        }
    ]
};
