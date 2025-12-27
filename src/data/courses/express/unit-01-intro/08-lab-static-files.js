
import { CONTENT_TYPES } from '../../../curriculumStructure';

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
