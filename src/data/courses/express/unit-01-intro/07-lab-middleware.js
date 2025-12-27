
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressLab3 = {
    id: 'express-1-lab-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 3: Custom Middleware Functions',
    duration: '25 min',
    content: `
# Lab 3: Custom Middleware Functions

In this lab, you'll create custom middleware functions to add logging and authentication to your Express application. Middleware is the secret sauce that makes Express powerful!

## Mission Briefing

Create middleware functions that:
1. Log every incoming request (method + URL)
2. Check for authorization headers
3. Protect certain routes

## The Theory: Middleware Signature

Every middleware has the same signature:
\`\`\`javascript
const myMiddleware = (req, res, next) => {
  // Do something
  next();  // Pass control to next middleware
};
\`\`\`

Call \`next()\` to continue the chain, or send a response to stop.

## Your Mission

Build logger and authentication middleware, then apply them to routes.
    `,
    tasks: [
        {
            id: 1,
            description: 'Create logger middleware function',
            completed: false,
            regex: /(const|function)\s+(logger|loggerMiddleware|requestLogger)/,
            hint: "const logger = (req, res, next) => { ... };"
        },
        {
            id: 2,
            description: 'Log req.method and req.url',
            completed: false,
            regex: /console\.log\([^)]*req\.method[^)]*req\.(url|path)/,
            hint: "console.log(`${req.method} ${req.url}`);"
        },
        {
            id: 3,
            description: 'Call next() in logger',
            completed: false,
            regex: /next\(\s*\)/,
            hint: "next();"
        },
        {
            id: 4,
            description: 'Use logger with app.use',
            completed: false,
            regex: /app\.use\(\s*(logger|loggerMiddleware|requestLogger)\s*\)/,
            hint: "app.use(logger);"
        },
        {
            id: 5,
            description: 'Create authenticate middleware',
            completed: false,
            regex: /(const|function)\s+(authenticate|auth|checkAuth)/,
            hint: "const authenticate = (req, res, next) => { ... };"
        },
        {
            id: 6,
            description: 'Check req.headers.authorization',
            completed: false,
            regex: /req\.headers\.authorization/,
            hint: "if (!req.headers.authorization) { ... }"
        },
        {
            id: 7,
            description: 'Return 401 status if no auth',
            completed: false,
            regex: /res\.status\(\s*401\s*\)/,
            hint: "return res.status(401).send('Unauthorized');"
        }
    ],
    files: [
        {
            name: 'server.js',
            language: 'javascript',
            content: `const express = require('express');
const app = express();

// TODO: Create logger middleware
//   - Log req.method and req.url
//   - Call next()

// TODO: Create authenticate middleware
//   - Check if req.headers.authorization exists
//   - If not, return res.status(401)
//   - If yes, call next()

// TODO: app.use(logger) - apply globally

// Public route (no auth needed)
app.get('/public', (req, res) => {
  res.send('Public data');
});

// TODO: Protected route with authenticate middleware
// app.get('/private', authenticate, (req, res) => { ... });

const PORT = 3000;
app.listen(PORT, () => console.log(\`Server on \${PORT}\`));
`
        }
    ]
};

export const expressLab4 = {
    id: 'express-1-lab-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 4: Serving Static Files',
    duration: '20 min',
    content: `
# Lab 4: Serving Static Files

In this lab, you'll configure Express to serve static files (HTML, CSS, images) and build a hybrid application with both static pages and API endpoints.

## Mission Briefing

Create an Express server that:
1. Serves static files from a 'public' folder
2. Provides JSON API endpoints
3. Handles 404 errors

## The Theory: express.static()

The \`express.static()\` middleware serves files from a directory:
\`\`\`javascript
app.use(express.static('public'));
\`\`\`

Now files in \`public/\` are accessible at the root URL.

## Your Mission

Configure static file serving and create a hybrid static + API server.
    `,
    tasks: [
        {
            id: 1,
            description: 'Use express.static for public folder',
            completed: false,
            regex: /express\.static\(\s*['"]public['"]\s*\)/,
            hint: "app.use(express.static('public'));"
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
            description: 'Create GET /api/data endpoint',
            completed: false,
            regex: /app\.get\(\s*['"]\/api\/data['"]\s*,/,
            hint: "app.get('/api/data', (req, res) => { ... });"
        },
        {
            id: 4,
            description: 'Send JSON response with res.json',
            completed: false,
            regex: /res\.json\(/,
            hint: "res.json({ message: 'API endpoint' });"
        },
        {
            id: 5,
            description: 'Create POST /api/data endpoint',
            completed: false,
            regex: /app\.post\(\s*['"]\/api\/data['"]\s*,/,
            hint: "app.post('/api/data', (req, res) => { ... });"
        },
        {
            id: 6,
            description: 'Set custom response header',
            completed: false,
            regex: /res\.(set|header)\(/,
            hint: "res.set('X-Custom-Header', 'value');"
        },
        {
            id: 7,
            description: 'Create 404 catch-all route',
            completed: false,
            regex: /app\.use\([^)]*404/,
            hint: "app.use((req, res) => { res.status(404).send('Not Found'); });"
        }
    ],
    files: [
        {
            name: 'server.js',
            language: 'javascript',
            content: `const express = require('express');
const app = express();

// TODO: Use express.static('public') to serve static files

// TODO: Use express.json() for parsing JSON

// TODO: GET /api/data - send JSON response

// TODO: POST /api/data - echo back req.body

// TODO: Set custom header like 'X-Powered-By'

// TODO: 404 handler (MUST be last)

const PORT = 3000;
app.listen(PORT, () => console.log(\`Server on \${PORT}\`));
`
        }
    ]
};
