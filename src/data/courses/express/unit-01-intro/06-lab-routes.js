
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressLab2 = {
    id: 'express-1-lab-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 2: Building a REST API',
    duration: '30 min',
    content: `
# Lab 2: Building a REST API

In this lab, you'll build a complete CRUD (Create, Read, Update, Delete) API for managing users. This is the foundation of most backend applications.

## Mission Briefing

You're building a user management API with full CRUD operations. You'll use an in-memory array to store data (in production, you'd use a database).

## The Theory: REST API Patterns

REST (Representational State Transfer) follows predictable patterns:
- **GET /api/users** - List all users
- **GET /api/users/:id** - Get one user
- **POST /api/users** - Create new user
- **PUT /api/users/:id** - Update user
- **DELETE /api/users/:id** - Delete user

Each operation uses the appropriate HTTP method and status code.

## Your Mission

Build a complete REST API with all CRUD operations for user management.
    `,
    tasks: [
        {
            id: 1,
            description: 'Create users array for data storage',
            completed: false,
            regex: /(let|const)\s+users\s*=\s*\[\s*\]/,
            hint: "let users = [];"
        },
        {
            id: 2,
            description: 'Use express.json() middleware',
            completed: false,
            regex: /app\.use\(\s*express\.json\(\s*\)\s*\)/,
            hint: "app.use(express.json());"
        },
        {
            id: 3,
            description: 'GET /api/users - return all users',
            completed: false,
            regex: /app\.get\(\s*['"]\/api\/users['"]\s*,/,
            hint: "app.get('/api/users', (req, res) => { res.json(users); });"
        },
        {
            id: 4,
            description: 'GET /api/users/:id - return single user',
            completed: false,
            regex: /app\.get\(\s*['"]\/api\/users\/:id['"]\s*,/,
            hint: "app.get('/api/users/:id', (req, res) => { ... });"
        },
        {
            id: 5,
            description: 'Access route parameter with req.params.id',
            completed: false,
            regex: /req\.params\.id/,
            hint: "const user = users.find(u => u.id == req.params.id);"
        },
        {
            id: 6,
            description: 'POST /api/users - create new user',
            completed: false,
            regex: /app\.post\(\s*['"]\/api\/users['"]\s*,/,
            hint: "app.post('/api/users', (req, res) => { ... });"
        },
        {
            id: 7,
            description: 'Access request body with req.body',
            completed: false,
            regex: /req\.body/,
            hint: "const user = { id: Date.now(), ...req.body };"
        },
        {
            id: 8,
            description: 'DELETE /api/users/:id - delete user',
            completed: false,
            regex: /app\.delete\(\s*['"]\/api\/users\/:id['"]\s*,/,
            hint: "app.delete('/api/users/:id', (req, res) => { ... });"
        }
    ],
    files: [
        {
            name: 'server.js',
            language: 'javascript',
            content: `const express = require('express');
const app = express();

// TODO: Create users array = []

// TODO: Use express.json() middleware

// TODO: GET /api/users - return all users array

// TODO: GET /api/users/:id - find user by req.params.id

// TODO: POST /api/users - create user from req.body

// TODO: DELETE /api/users/:id - remove user

const PORT = 3000;
app.listen(PORT, () => console.log(\`API server on port \${PORT}\`));
`
        }
    ]
};
