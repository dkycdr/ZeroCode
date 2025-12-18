// Node.js & Express - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const nodeCourse = {
    id: 'node',
    title: 'Node.js & Express',
    description: 'Build server-side applications and REST APIs with Node.js and Express.',
    
    units: [
        // ============================================
        // UNIT 1: Node.js Fundamentals
        // ============================================
        {
            id: 'node-unit-1',
            title: 'Node.js Fundamentals',
            description: 'Understand Node.js and server-side JavaScript',
            items: [
                {
                    id: 'node-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is Node.js?',
                    duration: '10 min read',
                    content: `
# What is Node.js?

## JavaScript Outside the Browser

**Node.js** is a JavaScript runtime that lets you run JavaScript on servers, not just browsers.

\`\`\`
Browser JavaScript → Runs in Chrome, Firefox, Safari
Node.js JavaScript → Runs on servers, your computer, anywhere!
\`\`\`

## Why Node.js?

| Feature | Benefit |
|---------|---------|
| **Same Language** | Use JavaScript for frontend AND backend |
| **Non-blocking I/O** | Handle thousands of connections efficiently |
| **NPM** | Largest package ecosystem (2M+ packages) |
| **Fast** | Built on Chrome's V8 engine |
| **Full-stack** | One language for entire application |

## What Can You Build?

- 🌐 **Web Servers** - REST APIs, GraphQL
- 🔌 **Real-time Apps** - Chat, gaming, collaboration
- 🛠️ **CLI Tools** - npm, webpack, eslint
- 📱 **Desktop Apps** - VS Code, Slack, Discord
- 🤖 **Automation** - Scripts, bots, scrapers

## Node.js vs Browser JavaScript

| Feature | Browser | Node.js |
|---------|---------|---------|
| DOM | ✅ | ❌ |
| window object | ✅ | ❌ |
| File system | ❌ | ✅ |
| HTTP server | ❌ | ✅ |
| global object | window | global |

## Who Uses Node.js?

Netflix, PayPal, LinkedIn, Uber, NASA, and millions more!

> 💡 Node.js is the most popular backend technology (Stack Overflow Survey)
                    `
                },
                {
                    id: 'node-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Node.js Basics',
                    duration: '20 min',
                    content: `
# Node.js Basics

## Running Node.js

\`\`\`bash
# Check version
node --version

# Run a file
node app.js

# Interactive mode (REPL)
node
> console.log("Hello!")
\`\`\`

## Global Objects

\`\`\`javascript
// __dirname - current directory path
console.log(__dirname);
// /Users/john/projects/myapp

// __filename - current file path
console.log(__filename);
// /Users/john/projects/myapp/app.js

// process - info about current process
console.log(process.env.NODE_ENV);
console.log(process.argv);
console.log(process.cwd());

// global - like window in browser
global.myVar = "Hello";
\`\`\`

## Modules (CommonJS)

\`\`\`javascript
// math.js - Export
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };
// or
exports.add = add;
exports.subtract = subtract;

// app.js - Import
const math = require('./math');
console.log(math.add(2, 3)); // 5

// Destructuring import
const { add, subtract } = require('./math');
\`\`\`

## ES Modules (Modern)

\`\`\`javascript
// package.json: "type": "module"

// math.js
export const add = (a, b) => a + b;
export default function multiply(a, b) { return a * b; }

// app.js
import multiply, { add } from './math.js';
\`\`\`

## Built-in Modules

\`\`\`javascript
const fs = require('fs');      // File system
const path = require('path');  // Path utilities
const http = require('http');  // HTTP server
const os = require('os');      // Operating system
const crypto = require('crypto'); // Cryptography
\`\`\`

---

## Your Mission
Create a simple Node.js application with modules.
                    `,
                    tasks: [
                        { id: 1, description: 'Create a function and export it: module.exports = { functionName } (line 8 in utils.js)', completed: false, regex: /module\.exports\s*=/ },
                        { id: 2, description: 'Import the module: const utils = require("./utils") (line 1 in app.js)', completed: false, regex: /const\s+\w+\s*=\s*require\s*\(\s*["']\.\/utils["']\s*\)/ },
                        { id: 3, description: 'Use __dirname to log current directory (line 5 in app.js)', completed: false, regex: /console\.log\s*\(\s*__dirname\s*\)/ },
                        { id: 4, description: 'Use process.argv to get command line arguments (line 8 in app.js)', completed: false, regex: /process\.argv/ }
                    ],
                    files: [
                        { name: 'app.js', language: 'javascript', content: `// Node.js Basics

// 1. Import utils module


// 2. Log current directory


// 3. Get command line arguments


// 4. Use the imported function
console.log("Hello from Node.js!");
` },
                        { name: 'utils.js', language: 'javascript', content: `// Create utility functions

function greet(name) {
    return \`Hello, \${name}!\`;
}

function add(a, b) {
    return a + b;
}

// Export the functions

` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "node-basics",
    "version": "1.0.0",
    "main": "app.js"
}` }
                    ]
                },
                {
                    id: 'node-1-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'File System Operations',
                    duration: '20 min',
                    content: `
# File System (fs) Module

## Reading Files

\`\`\`javascript
const fs = require('fs');

// Synchronous (blocking)
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

// Asynchronous (non-blocking) - Callback
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// Asynchronous - Promises
const fsPromises = require('fs').promises;

async function readFile() {
    const data = await fsPromises.readFile('file.txt', 'utf8');
    console.log(data);
}
\`\`\`

## Writing Files

\`\`\`javascript
// Write (overwrites)
fs.writeFileSync('output.txt', 'Hello World!');

// Append
fs.appendFileSync('log.txt', 'New log entry\\n');

// Async write
fs.writeFile('output.txt', 'Hello!', (err) => {
    if (err) throw err;
    console.log('File saved!');
});
\`\`\`

## Working with Directories

\`\`\`javascript
// Create directory
fs.mkdirSync('new-folder');
fs.mkdirSync('nested/folders', { recursive: true });

// Read directory
const files = fs.readdirSync('.');
console.log(files);

// Check if exists
if (fs.existsSync('file.txt')) {
    console.log('File exists!');
}

// Delete
fs.unlinkSync('file.txt');  // Delete file
fs.rmdirSync('folder');     // Delete empty directory
\`\`\`

## Path Module

\`\`\`javascript
const path = require('path');

path.join('folder', 'file.txt');     // 'folder/file.txt'
path.resolve('file.txt');            // '/full/path/to/file.txt'
path.basename('/path/to/file.txt');  // 'file.txt'
path.dirname('/path/to/file.txt');   // '/path/to'
path.extname('file.txt');            // '.txt'
\`\`\`

---

## Your Mission
Create a file manager script.
                    `,
                    tasks: [
                        { id: 1, description: 'Import fs module: const fs = require("fs") (line 1)', completed: false, regex: /const\s+fs\s*=\s*require\s*\(\s*["']fs["']\s*\)/ },
                        { id: 2, description: 'Read a file: fs.readFileSync("data.txt", "utf8") (line 5)', completed: false, regex: /fs\.readFileSync\s*\(/ },
                        { id: 3, description: 'Write to a file: fs.writeFileSync("output.txt", content) (line 10)', completed: false, regex: /fs\.writeFileSync\s*\(/ },
                        { id: 4, description: 'Check if file exists: fs.existsSync("file.txt") (line 15)', completed: false, regex: /fs\.existsSync\s*\(/ }
                    ],
                    files: [
                        { name: 'fileManager.js', language: 'javascript', content: `// File System Operations

// 1. Import fs module


// 2. Read data.txt file


// 3. Write to output.txt


// 4. Check if a file exists


console.log("File operations complete!");
` },
                        { name: 'data.txt', language: 'text', content: `Hello from data.txt!
This is sample data.
Line 3 of the file.` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "file-manager",
    "version": "1.0.0"
}` }
                    ]
                },
                {
                    id: 'node-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Node.js Basics Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is Node.js?',
                            options: ['A JavaScript framework', 'A JavaScript runtime for servers', 'A database', 'A browser'],
                            correctIndex: 1,
                            explanation: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine that lets you run JavaScript on servers.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you import a module in Node.js (CommonJS)?',
                            options: ['import module', 'require("module")', 'include module', 'load("module")'],
                            correctIndex: 1,
                            explanation: 'CommonJS uses require() to import modules. ES Modules use import/export syntax.'
                        },
                        {
                            id: 'q3',
                            question: 'What does __dirname contain?',
                            options: ['Current file name', 'Current directory path', 'Home directory', 'Root directory'],
                            correctIndex: 1,
                            explanation: '__dirname contains the absolute path of the directory containing the current file.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 2: HTTP & Express Basics
        // ============================================
        {
            id: 'node-unit-2',
            title: 'HTTP & Express Basics',
            description: 'Create web servers with Node.js and Express',
            items: [
                {
                    id: 'node-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'HTTP Server',
                    duration: '20 min',
                    content: `
# Creating HTTP Servers

## Basic HTTP Server

\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
\`\`\`

## Request Object

\`\`\`javascript
const server = http.createServer((req, res) => {
    console.log(req.method);  // GET, POST, etc.
    console.log(req.url);     // /path
    console.log(req.headers); // Request headers
});
\`\`\`

## Routing (Manual)

\`\`\`javascript
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.end('Home Page');
    } else if (req.url === '/about' && req.method === 'GET') {
        res.end('About Page');
    } else if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify([{ id: 1, name: 'John' }]));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});
\`\`\`

## Why Express?

The built-in http module is low-level. Express provides:
- Easy routing
- Middleware support
- Request/response helpers
- Static file serving
- Template engines

---

## Your Mission
Create a basic HTTP server.
                    `,
                    tasks: [
                        { id: 1, description: 'Import http module: const http = require("http") (line 1)', completed: false, regex: /const\s+http\s*=\s*require\s*\(\s*["']http["']\s*\)/ },
                        { id: 2, description: 'Create server: http.createServer((req, res) => { ... }) (line 3)', completed: false, regex: /http\.createServer\s*\(/ },
                        { id: 3, description: 'Send response: res.end("Hello World!") (line 6)', completed: false, regex: /res\.end\s*\(/ },
                        { id: 4, description: 'Listen on port: server.listen(3000, callback) (line 10)', completed: false, regex: /server\.listen\s*\(\s*3000/ }
                    ],
                    files: [
                        { name: 'server.js', language: 'javascript', content: `// Create HTTP Server

// 1. Import http module


// 2. Create server with request handler
const server = // http.createServer(...)

// 3. Send response in the handler


// 4. Listen on port 3000

` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "http-server",
    "version": "1.0.0",
    "scripts": {
        "start": "node server.js"
    }
}` },
                        { name: 'README.md', language: 'markdown', content: `# HTTP Server

Run: node server.js
Visit: http://localhost:3000` }
                    ]
                },
                {
                    id: 'node-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Express.js Basics',
                    duration: '25 min',
                    content: `
# Express.js - Web Framework for Node.js

## Installation

\`\`\`bash
npm init -y
npm install express
\`\`\`

## Basic Express Server

\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
\`\`\`

## Routing

\`\`\`javascript
// GET request
app.get('/users', (req, res) => {
    res.json([{ id: 1, name: 'John' }]);
});

// POST request
app.post('/users', (req, res) => {
    res.status(201).json({ message: 'User created' });
});

// PUT request
app.put('/users/:id', (req, res) => {
    res.json({ message: \`User \${req.params.id} updated\` });
});

// DELETE request
app.delete('/users/:id', (req, res) => {
    res.json({ message: \`User \${req.params.id} deleted\` });
});
\`\`\`

## Route Parameters

\`\`\`javascript
// /users/123
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(\`User ID: \${userId}\`);
});

// /products/electronics/phones
app.get('/products/:category/:type', (req, res) => {
    const { category, type } = req.params;
    res.json({ category, type });
});
\`\`\`

## Query Parameters

\`\`\`javascript
// /search?q=javascript&page=2
app.get('/search', (req, res) => {
    const { q, page } = req.query;
    res.json({ query: q, page: page || 1 });
});
\`\`\`

## Response Methods

\`\`\`javascript
res.send('Text');           // Send text
res.json({ key: 'value' }); // Send JSON
res.status(404).send('Not Found'); // Set status
res.redirect('/other-page'); // Redirect
res.sendFile('/path/to/file.html'); // Send file
\`\`\`

---

## Your Mission
Create an Express server with routes.
                    `,
                    tasks: [
                        { id: 1, description: 'Import express: const express = require("express") (line 1)', completed: false, regex: /const\s+express\s*=\s*require\s*\(\s*["']express["']\s*\)/ },
                        { id: 2, description: 'Create app: const app = express() (line 2)', completed: false, regex: /const\s+app\s*=\s*express\s*\(\s*\)/ },
                        { id: 3, description: 'Create GET route: app.get("/", (req, res) => { ... }) (line 5)', completed: false, regex: /app\.get\s*\(\s*["']\/["']/ },
                        { id: 4, description: 'Create route with params: app.get("/users/:id", ...) (line 10)', completed: false, regex: /app\.get\s*\(\s*["']\/users\/:id["']/ },
                        { id: 5, description: 'Start server: app.listen(3000, callback) (line 20)', completed: false, regex: /app\.listen\s*\(\s*3000/ }
                    ],
                    files: [
                        { name: 'app.js', language: 'javascript', content: `// Express.js Server

// 1. Import express


// 2. Create app


// 3. Create home route (GET /)


// 4. Create users route with parameter (GET /users/:id)


// 5. Create API route (GET /api/products)
app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Laptop', price: 999 },
        { id: 2, name: 'Phone', price: 699 }
    ]);
});

// 6. Start server

` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "express-app",
    "version": "1.0.0",
    "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
    },
    "dependencies": {
        "express": "^4.18.2"
    }
}` },
                        { name: 'README.md', language: 'markdown', content: `# Express App

## Setup
npm install

## Run
npm start

## Endpoints
- GET / - Home page
- GET /users/:id - Get user by ID
- GET /api/products - Get all products` }
                    ]
                },
                {
                    id: 'node-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Express Basics Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is Express.js?',
                            options: ['A database', 'A web framework for Node.js', 'A frontend library', 'A testing tool'],
                            correctIndex: 1,
                            explanation: 'Express.js is a minimal and flexible web framework for Node.js that provides features for web and mobile applications.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you access URL parameters in Express?',
                            options: ['req.body', 'req.params', 'req.query', 'req.url'],
                            correctIndex: 1,
                            explanation: 'req.params contains route parameters (e.g., /users/:id), while req.query contains query string parameters.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 3: Middleware
        // ============================================
        {
            id: 'node-unit-3',
            title: 'Middleware',
            description: 'Understand and create Express middleware',
            items: [
                {
                    id: 'node-3-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Understanding Middleware',
                    duration: '25 min',
                    content: `
# Express Middleware

## What is Middleware?

Middleware functions have access to request (req), response (res), and next function. They can:
- Execute code
- Modify req/res objects
- End the request-response cycle
- Call next middleware

\`\`\`
Request → Middleware 1 → Middleware 2 → Route Handler → Response
\`\`\`

## Basic Middleware

\`\`\`javascript
// Middleware function
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next(); // Pass to next middleware
};

// Use middleware
app.use(logger);
\`\`\`

## Built-in Middleware

\`\`\`javascript
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));
\`\`\`

## Third-Party Middleware

\`\`\`javascript
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

app.use(cors());           // Enable CORS
app.use(helmet());         // Security headers
app.use(morgan('dev'));    // Request logging
\`\`\`

## Route-Specific Middleware

\`\`\`javascript
const auth = (req, res, next) => {
    if (req.headers.authorization) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

// Apply to specific route
app.get('/protected', auth, (req, res) => {
    res.json({ message: 'Secret data' });
});

// Apply to all routes starting with /api
app.use('/api', auth);
\`\`\`

## Error Handling Middleware

\`\`\`javascript
// Error handler (4 parameters)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Trigger error
app.get('/error', (req, res, next) => {
    next(new Error('Test error'));
});
\`\`\`

---

## Your Mission
Create custom middleware.
                    `,
                    tasks: [
                        { id: 1, description: 'Create logger middleware: const logger = (req, res, next) => { ... } (line 5)', completed: false, regex: /const\s+logger\s*=\s*\(\s*req\s*,\s*res\s*,\s*next\s*\)\s*=>/ },
                        { id: 2, description: 'Call next() in middleware to continue (line 8)', completed: false, regex: /next\s*\(\s*\)/ },
                        { id: 3, description: 'Use middleware: app.use(logger) (line 12)', completed: false, regex: /app\.use\s*\(\s*logger\s*\)/ },
                        { id: 4, description: 'Add express.json() middleware for parsing JSON (line 15)', completed: false, regex: /app\.use\s*\(\s*express\.json\s*\(\s*\)\s*\)/ },
                        { id: 5, description: 'Create auth middleware that checks for authorization header (line 20)', completed: false, regex: /const\s+auth\s*=.*req\.headers\.authorization/ }
                    ],
                    files: [
                        { name: 'app.js', language: 'javascript', content: `const express = require('express');
const app = express();

// 1. Create logger middleware


// 2. Use logger middleware


// 3. Add JSON parsing middleware


// 4. Create auth middleware


// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Home' });
});

app.get('/protected', auth, (req, res) => {
    res.json({ message: 'Secret data!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ error: err.message });
});

app.listen(3000, () => console.log('Server running'));
` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "middleware-demo",
    "dependencies": {
        "express": "^4.18.2"
    }
}` },
                        { name: 'README.md', language: 'markdown', content: `# Middleware Demo

Test endpoints:
- GET / - Public route
- GET /protected - Requires Authorization header` }
                    ]
                },
                {
                    id: 'node-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Middleware Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does next() do in middleware?',
                            options: ['Ends the response', 'Passes control to next middleware', 'Restarts the server', 'Logs an error'],
                            correctIndex: 1,
                            explanation: 'next() passes control to the next middleware function in the stack.'
                        },
                        {
                            id: 'q2',
                            question: 'What does express.json() do?',
                            options: ['Sends JSON response', 'Parses JSON request bodies', 'Validates JSON', 'Creates JSON files'],
                            correctIndex: 1,
                            explanation: 'express.json() is middleware that parses incoming JSON request bodies and makes them available on req.body.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 4: REST API
        // ============================================
        {
            id: 'node-unit-4',
            title: 'Building REST APIs',
            description: 'Create RESTful APIs with Express',
            items: [
                {
                    id: 'node-4-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'REST API Principles',
                    duration: '10 min read',
                    content: `
# REST API Principles

## What is REST?

**REST** (Representational State Transfer) is an architectural style for designing APIs.

## REST Principles

1. **Stateless** - Each request contains all info needed
2. **Client-Server** - Separation of concerns
3. **Uniform Interface** - Consistent URL patterns
4. **Resource-Based** - URLs represent resources

## HTTP Methods

| Method | Purpose | Example |
|--------|---------|---------|
| GET | Read data | GET /users |
| POST | Create data | POST /users |
| PUT | Update (replace) | PUT /users/1 |
| PATCH | Update (partial) | PATCH /users/1 |
| DELETE | Delete data | DELETE /users/1 |

## URL Design

\`\`\`
✅ Good REST URLs:
GET    /users          - Get all users
GET    /users/123      - Get user 123
POST   /users          - Create user
PUT    /users/123      - Update user 123
DELETE /users/123      - Delete user 123
GET    /users/123/orders - Get orders for user 123

❌ Bad URLs:
GET /getUsers
GET /getUserById?id=123
POST /createUser
GET /deleteUser/123
\`\`\`

## HTTP Status Codes

| Code | Meaning | Use Case |
|------|---------|----------|
| 200 | OK | Successful GET/PUT |
| 201 | Created | Successful POST |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Invalid input |
| 401 | Unauthorized | Not authenticated |
| 403 | Forbidden | Not authorized |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Something went wrong |

## Response Format

\`\`\`json
// Success
{
    "success": true,
    "data": { "id": 1, "name": "John" }
}

// Error
{
    "success": false,
    "error": "User not found"
}

// List with pagination
{
    "success": true,
    "data": [...],
    "pagination": {
        "page": 1,
        "limit": 10,
        "total": 100
    }
}
\`\`\`
                    `
                },
                {
                    id: 'node-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'CRUD API',
                    duration: '30 min',
                    content: `
# Building a CRUD API

## Complete CRUD Example

\`\`\`javascript
const express = require('express');
const app = express();
app.use(express.json());

// In-memory database
let users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
];

// GET all users
app.get('/api/users', (req, res) => {
    res.json({ success: true, data: users });
});

// GET single user
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }
    res.json({ success: true, data: user });
});

// POST create user
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ success: false, error: 'Name and email required' });
    }
    const newUser = {
        id: users.length + 1,
        name,
        email
    };
    users.push(newUser);
    res.status(201).json({ success: true, data: newUser });
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json({ success: true, data: user });
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ success: false, error: 'User not found' });
    }
    users.splice(index, 1);
    res.status(204).send();
});
\`\`\`

---

## Your Mission
Build a complete CRUD API for products.
                    `,
                    tasks: [
                        { id: 1, description: 'Create GET /api/products route to return all products (line 15)', completed: false, regex: /app\.get\s*\(\s*["']\/api\/products["']/ },
                        { id: 2, description: 'Create GET /api/products/:id route to return single product (line 20)', completed: false, regex: /app\.get\s*\(\s*["']\/api\/products\/:id["']/ },
                        { id: 3, description: 'Create POST /api/products route to add new product (line 30)', completed: false, regex: /app\.post\s*\(\s*["']\/api\/products["']/ },
                        { id: 4, description: 'Create PUT /api/products/:id route to update product (line 45)', completed: false, regex: /app\.put\s*\(\s*["']\/api\/products\/:id["']/ },
                        { id: 5, description: 'Create DELETE /api/products/:id route to delete product (line 55)', completed: false, regex: /app\.delete\s*\(\s*["']\/api\/products\/:id["']/ }
                    ],
                    files: [
                        { name: 'app.js', language: 'javascript', content: `const express = require('express');
const app = express();
app.use(express.json());

// In-memory database
let products = [
    { id: 1, name: 'Laptop', price: 999, stock: 50 },
    { id: 2, name: 'Phone', price: 699, stock: 100 },
    { id: 3, name: 'Tablet', price: 499, stock: 30 }
];

// 1. GET all products


// 2. GET single product by ID


// 3. POST create new product


// 4. PUT update product


// 5. DELETE product


app.listen(3000, () => console.log('API running on port 3000'));
` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "crud-api",
    "scripts": {
        "start": "node app.js"
    },
    "dependencies": {
        "express": "^4.18.2"
    }
}` },
                        { name: 'test.http', language: 'text', content: `### Get all products
GET http://localhost:3000/api/products

### Get single product
GET http://localhost:3000/api/products/1

### Create product
POST http://localhost:3000/api/products
Content-Type: application/json

{
    "name": "Headphones",
    "price": 199,
    "stock": 75
}

### Update product
PUT http://localhost:3000/api/products/1
Content-Type: application/json

{
    "price": 899
}

### Delete product
DELETE http://localhost:3000/api/products/3` }
                    ]
                },
                {
                    id: 'node-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'REST API Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Which HTTP method is used to create a new resource?',
                            options: ['GET', 'POST', 'PUT', 'DELETE'],
                            correctIndex: 1,
                            explanation: 'POST is used to create new resources. GET reads, PUT updates, DELETE removes.'
                        },
                        {
                            id: 'q2',
                            question: 'What status code should be returned after successful creation?',
                            options: ['200 OK', '201 Created', '204 No Content', '301 Redirect'],
                            correctIndex: 1,
                            explanation: '201 Created indicates that a new resource was successfully created.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 5: Authentication
        // ============================================
        {
            id: 'node-unit-5',
            title: 'Authentication',
            description: 'Implement JWT authentication',
            items: [
                {
                    id: 'node-5-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'JWT Authentication',
                    duration: '30 min',
                    content: `
# JWT Authentication

## What is JWT?

**JWT** (JSON Web Token) is a secure way to transmit information between parties as a JSON object.

\`\`\`
Header.Payload.Signature
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.abc123signature
\`\`\`

## JWT Structure

1. **Header** - Algorithm & token type
2. **Payload** - User data (claims)
3. **Signature** - Verification

## Installation

\`\`\`bash
npm install jsonwebtoken bcryptjs
\`\`\`

## Creating Tokens

\`\`\`javascript
const jwt = require('jsonwebtoken');

const SECRET = 'your-secret-key';

// Create token
const token = jwt.sign(
    { userId: 1, email: 'john@example.com' },
    SECRET,
    { expiresIn: '24h' }
);

// Verify token
try {
    const decoded = jwt.verify(token, SECRET);
    console.log(decoded); // { userId: 1, email: '...', iat: ..., exp: ... }
} catch (err) {
    console.log('Invalid token');
}
\`\`\`

## Password Hashing

\`\`\`javascript
const bcrypt = require('bcryptjs');

// Hash password
const hash = await bcrypt.hash('password123', 10);

// Compare password
const isMatch = await bcrypt.compare('password123', hash);
\`\`\`

## Auth Middleware

\`\`\`javascript
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    
    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};
\`\`\`

## Complete Auth Flow

\`\`\`javascript
// Register
app.post('/auth/register', async (req, res) => {
    const { email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    // Save user with hashed password
    res.status(201).json({ message: 'User created' });
});

// Login
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '24h' });
    res.json({ token });
});

// Protected route
app.get('/profile', authMiddleware, (req, res) => {
    res.json({ user: req.user });
});
\`\`\`

---

## Your Mission
Implement JWT authentication.
                    `,
                    tasks: [
                        { id: 1, description: 'Import jwt: const jwt = require("jsonwebtoken") (line 2)', completed: false, regex: /const\s+jwt\s*=\s*require\s*\(\s*["']jsonwebtoken["']\s*\)/ },
                        { id: 2, description: 'Create token: jwt.sign({ userId }, SECRET, { expiresIn: "24h" }) (line 25)', completed: false, regex: /jwt\.sign\s*\(/ },
                        { id: 3, description: 'Verify token: jwt.verify(token, SECRET) (line 35)', completed: false, regex: /jwt\.verify\s*\(/ },
                        { id: 4, description: 'Create auth middleware that checks Authorization header (line 15)', completed: false, regex: /req\.headers\.authorization/ },
                        { id: 5, description: 'Hash password: bcrypt.hash(password, 10) (line 45)', completed: false, regex: /bcrypt\.hash\s*\(/ }
                    ],
                    files: [
                        { name: 'app.js', language: 'javascript', content: `const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

const SECRET = 'your-super-secret-key';
let users = [];

// Auth middleware
const authMiddleware = (req, res, next) => {
    // Get token from Authorization header
    // Verify token
    // Set req.user
    // Call next() or return 401
};

// Register
app.post('/auth/register', async (req, res) => {
    const { email, password } = req.body;
    
    // Check if user exists
    // Hash password
    // Save user
    // Return success
});

// Login
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;
    
    // Find user
    // Compare password
    // Create token
    // Return token
});

// Protected route
app.get('/profile', authMiddleware, (req, res) => {
    res.json({ user: req.user });
});

app.listen(3000, () => console.log('Auth server running'));
` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "jwt-auth",
    "dependencies": {
        "express": "^4.18.2",
        "jsonwebtoken": "^9.0.0",
        "bcryptjs": "^2.4.3"
    }
}` },
                        { name: 'test.http', language: 'text', content: `### Register
POST http://localhost:3000/auth/register
Content-Type: application/json

{
    "email": "john@example.com",
    "password": "password123"
}

### Login
POST http://localhost:3000/auth/login
Content-Type: application/json

{
    "email": "john@example.com",
    "password": "password123"
}

### Get Profile (add token from login response)
GET http://localhost:3000/profile
Authorization: Bearer YOUR_TOKEN_HERE` }
                    ]
                },
                {
                    id: 'node-5-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Authentication Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is JWT?',
                            options: ['JavaScript Web Tool', 'JSON Web Token', 'Java Web Technology', 'JSON Web Transfer'],
                            correctIndex: 1,
                            explanation: 'JWT stands for JSON Web Token, a compact way to securely transmit information between parties.'
                        },
                        {
                            id: 'q2',
                            question: 'Why should passwords be hashed?',
                            options: ['To make them shorter', 'To encrypt them reversibly', 'To store them securely (one-way)', 'To make them readable'],
                            correctIndex: 2,
                            explanation: 'Hashing is one-way encryption. Even if the database is compromised, passwords cannot be recovered.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 6: Database Integration
        // ============================================
        {
            id: 'node-unit-6',
            title: 'Database Integration',
            description: 'Connect Express to databases',
            items: [
                {
                    id: 'node-6-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Database Options',
                    duration: '8 min read',
                    content: `
# Database Options for Node.js

## SQL Databases

### PostgreSQL
\`\`\`javascript
// Using pg
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const result = await pool.query('SELECT * FROM users');
\`\`\`

### MySQL
\`\`\`javascript
// Using mysql2
const mysql = require('mysql2/promise');
const connection = await mysql.createConnection(process.env.DATABASE_URL);

const [rows] = await connection.execute('SELECT * FROM users');
\`\`\`

## NoSQL Databases

### MongoDB
\`\`\`javascript
// Using mongoose
const mongoose = require('mongoose');
await mongoose.connect(process.env.MONGODB_URI);

const User = mongoose.model('User', { name: String, email: String });
const users = await User.find();
\`\`\`

## ORMs (Object-Relational Mapping)

### Prisma (Recommended)
\`\`\`javascript
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const users = await prisma.user.findMany();
const user = await prisma.user.create({ data: { name: 'John' } });
\`\`\`

### Sequelize
\`\`\`javascript
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL);

const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});
\`\`\`

## Choosing a Database

| Database | Best For |
|----------|----------|
| PostgreSQL | Complex queries, relations |
| MySQL | Traditional web apps |
| MongoDB | Flexible schemas, documents |
| SQLite | Small apps, prototypes |
| Redis | Caching, sessions |
                    `
                },
                {
                    id: 'node-6-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Express with Database',
                    duration: '25 min',
                    content: `
# Express with Database

## Project Structure

\`\`\`
project/
├── src/
│   ├── routes/
│   │   └── users.js
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── User.js
│   ├── middleware/
│   │   └── auth.js
│   └── app.js
├── .env
└── package.json
\`\`\`

## Environment Variables

\`\`\`javascript
// .env
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb
JWT_SECRET=your-secret-key
PORT=3000

// Load with dotenv
require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;
\`\`\`

## Router Organization

\`\`\`javascript
// routes/users.js
const express = require('express');
const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);
\`\`\`

## Controller Pattern

\`\`\`javascript
// controllers/userController.js
const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
\`\`\`

---

## Your Mission
Organize an Express app with proper structure.
                    `,
                    tasks: [
                        { id: 1, description: 'Create router: const router = express.Router() (line 3 in routes/users.js)', completed: false, regex: /const\s+router\s*=\s*express\.Router\s*\(\s*\)/ },
                        { id: 2, description: 'Define route: router.get("/", getAllUsers) (line 5)', completed: false, regex: /router\.get\s*\(\s*["']\/["']/ },
                        { id: 3, description: 'Export router: module.exports = router (line 15)', completed: false, regex: /module\.exports\s*=\s*router/ },
                        { id: 4, description: 'Use router in app: app.use("/api/users", userRoutes) (line 5 in app.js)', completed: false, regex: /app\.use\s*\(\s*["']\/api\/users["']\s*,\s*\w+\s*\)/ },
                        { id: 5, description: 'Load env variables: require("dotenv").config() (line 1 in app.js)', completed: false, regex: /require\s*\(\s*["']dotenv["']\s*\)\.config\s*\(\s*\)/ }
                    ],
                    files: [
                        { name: 'app.js', language: 'javascript', content: `// Load environment variables


const express = require('express');
const app = express();

app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');

// Use routes


app.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
});
` },
                        { name: 'routes/users.js', language: 'javascript', content: `const express = require('express');
// Create router


const { getAllUsers, createUser } = require('../controllers/userController');

// Define routes


// Export router

` },
                        { name: 'controllers/userController.js', language: 'javascript', content: `// User Controller

exports.getAllUsers = async (req, res) => {
    try {
        // Get users from database
        const users = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' }
        ];
        res.json({ success: true, data: users });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        // Create user in database
        const user = { id: Date.now(), name, email };
        res.status(201).json({ success: true, data: user });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
` },
                        { name: '.env', language: 'text', content: `PORT=3000
DATABASE_URL=postgresql://localhost:5432/mydb
JWT_SECRET=your-secret-key` }
                    ]
                },
                {
                    id: 'node-6-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Database Integration Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is an ORM?',
                            options: ['Object-Relational Mapping', 'Online Resource Manager', 'Object Request Model', 'Operational Resource Module'],
                            correctIndex: 0,
                            explanation: 'ORM (Object-Relational Mapping) lets you interact with databases using objects instead of raw SQL.'
                        },
                        {
                            id: 'q2',
                            question: 'Why use environment variables?',
                            options: ['To make code faster', 'To store sensitive data securely', 'To add comments', 'To format code'],
                            correctIndex: 1,
                            explanation: 'Environment variables keep sensitive data (API keys, database URLs) out of your code and version control.'
                        }
                    ]
                }
            ]
        }
    ]
};

export default nodeCourse;
