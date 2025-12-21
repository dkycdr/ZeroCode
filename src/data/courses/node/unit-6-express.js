import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6Express = {
    id: 'node-unit-6',
    title: 'Unit 6: The Express Framework',
    description: 'Stop writing boilerplate. Learn Express.js, the standard framework for Node, to build robust APIs with 90% less code.',
    items: [
        // PART 1: DEEP DIVES
        {
            id: 'node-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Why Express? 🚂',
            duration: '15 min read',
            content: `
# Deep Dive: Why Express? 🚂

## 1. The Wrapper
Express wraps the raw \`http\` module.
*   **Raw Node**: \`if (req.url === '/users' && req.method === 'GET') ...\`
*   **Express**: \`app.get('/users', ...)\`

## 2. Key Features
*   **Routing**: Clean, readable syntax.
*   **Middleware**: Pipeline architecture (like LEGO blocks).
*   **Extensions**: \`res.json()\`, \`res.status()\`, \`req.body\` (with parsers).

## 3. The Object Model
*   **app**: The main application factory.
*   **req**: Enhanced version of http.IncomingMessage.
*   **res**: Enhanced version of http.ServerResponse.
            `
        },
        {
            id: 'node-6-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Request Anatomy in Express 🔍',
            duration: '15 min read',
            content: `
# Deep Dive: Request Anatomy in Express 🔍

## 1. req.params (Path Variables)
Route: \`/users/:id\`
URL: \`/users/500\`
Access: \`req.params.id\` -> "500"

## 2. req.query (Search)
Route: \`/search\`
URL: \`/search?q=pizza&sort=price\`
Access: \`req.query.q\` -> "pizza"

## 3. req.body (Payload)
Needs Middleware: \`app.use(express.json())\`
Content: The parsed JSON object sent by the client.
            `
        },
        {
            id: 'node-6-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Response Helpers 📤',
            duration: '10 min read',
            content: `
# Deep Dive: Response Helpers 📤

## 1. res.send() vs res.json()
*   \`res.send()\`: Smart. If you pass an object, it sends JSON. If string, sends HTML/Text.
*   \`res.json()\`: Explicit. Forces JSON header and formatting.

## 2. Chaining
Use fluent chaining for status codes:
\`res.status(404).json({ error: 'Not Found' });\`

## 3. res.sendFile()
Sends a file from the disk (handling 404s and streams internally).
            `
        },
        {
            id: 'node-6-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Static Files 📁',
            duration: '10 min read',
            content: `
# Deep Dive: Static Files 📁

## 1. The Concept
You don't want to write a route for EVERY image and CSS file.
\`app.get('/style.css', ...)\` -> No!

## 2. express.static
Middleware that checks a folder. If the file exists, it sends it and stops the request.
\`app.use(express.static('public'));\`

## 3. Strategy
Put all logos, scripts, and styles in \`public/\`.
            `
        },

        // PART 2: LABORATORIES
        {
            id: 'node-6-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Hello Express',
            duration: '15 min',
            content: `
# Lab 1: Hello Express

Initializing an app and creating the first route.

## The Mission
1.  **Import & Init**: \`express()\`.
2.  **Route**: \`app.get('/'\`.
3.  **Response**: Send "Hello Express".
4.  **Listen**: Port 3000.

## Note
In Replit/Sandbox environments, sometimes you don't control the port, but for local tasks assume 3000.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Initialize app.',
                    completed: false,
                    regex: /const\s+app\s*=\s*express\s*\(\s*\)/
                },
                {
                    id: 2,
                    description: 'Define GET route.',
                    completed: false,
                    regex: /app\.get\s*\(\s*['"]\/['"]/
                },
                {
                    id: 3,
                    description: 'Send response.',
                    completed: false,
                    regex: /res\.send\s*\(/
                }
            ],
            files: [
                {
                    name: 'app.js',
                    language: 'javascript',
                    content: `const express = require('express');

// Task 1: Init

// Task 2: Route

// Task 4: Listen
app.listen(3000, () => console.log('Running'));
`
                }
            ]
        },
        {
            id: 'node-6-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Dynamic Routes',
            duration: '20 min',
            content: `
# Lab 2: Dynamic Routes

Capture Ids from the URL using params.

## The Mission
1.  **Route**: \`/users/:id\`.
2.  **Logic**: Access \`req.params.id\`.
3.  **Respond**: "User Profile [ID]".

## Colon Syntax
The \`:\` tells Express "This part is a variable".
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define ID parameter.',
                    completed: false,
                    regex: /app\.get\s*\(\s*['"]\/users\/:id['"]/
                },
                {
                    id: 2,
                    description: 'Access params.',
                    completed: false,
                    regex: /req\.params\.id/
                }
            ],
            files: [
                {
                    name: 'users.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();

// Task 1: Route with :id

    // Task 2: Get the ID
    const id = null; 
    
    // Respond
    res.send(\`User Profile \${id}\`);

app.listen(3000);
`
                }
            ]
        },
        {
            id: 'node-6-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Handling JSON POST',
            duration: '25 min',
            content: `
# Lab 3: Handling JSON POST

Accept data from a client.

## The Mission
1.  **Middleware**: \`app.use(express.json())\`. **CRITICAL**.
2.  **POST Route**: \`/api/data\`.
3.  **Log**: \`req.body\`.
4.  **Echo**: Send the body back.

## Without Middleware
If you forget the middleware, \`req.body\` will be \`undefined\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Use JSON middleware.',
                    completed: false,
                    regex: /app\.use\s*\(\s*express\.json\s*\(\s*\)\s*\)/
                },
                {
                    id: 2,
                    description: 'POST Route.',
                    completed: false,
                    regex: /app\.post\s*\(/
                },
                {
                    id: 3,
                    description: 'Access req.body.',
                    completed: false,
                    regex: /req\.body/
                }
            ],
            files: [
                {
                    name: 'post.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();

// Task 1: Middleware

// Task 2: POST Route
app.post('/api/data', (req, res) => {
    // Task 3: Access data
    const data = null;
    
    res.json({ received: data });
});
`
                }
            ]
        },
        {
            id: 'node-6-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Query Parameters',
            duration: '20 min',
            content: `
# Lab 4: Query Parameters

Implement a search endpoint using query strings.
\`/search?q=javascript&limit=10\`

## The Mission
1.  **Route**: \`/search\`.
2.  **Destructure**: \`q\` and \`limit\` from \`req.query\`.
3.  **Logic**: If no \`q\`, return error.

## Optional Data
Unlike params, query strings are usually optional filters.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Access req.query.',
                    completed: false,
                    regex: /req\.query/
                },
                {
                    id: 2,
                    description: 'Validation logic.',
                    completed: false,
                    regex: /if\s*\(\s*!q\s*\)/
                }
            ],
            files: [
                {
                    name: 'search.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    // Task 1: Get 'q' from query
    
    // Task 2: Validate
    if (false) {
        return res.status(400).json({ error: "Missing query" });
    }
    
    res.json({ results: ["Result 1", "Result 2"] });
});
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Express Basics Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is essential to read JSON body data in Express?',
                    options: [
                        'Nothing, it works automatically',
                        'app.use(JSON.parse)',
                        'app.use(express.json())',
                        'req.parseBody()'
                    ],
                    correctIndex: 2,
                    explanation: 'Express requires the built-in json body parser middleware to transform raw streams into the req.body object.'
                },
                {
                    id: 'q2',
                    question: 'How do you define a route parameter named "slug"?',
                    options: [
                        'app.get("/posts/$slug")',
                        'app.get("/posts/:slug")',
                        'app.get("/posts/{slug}")',
                        'app.get("/posts/*")'
                    ],
                    correctIndex: 1,
                    explanation: 'The colon determines the variable part of the path.'
                },
                {
                    id: 'q3',
                    question: 'What does res.json() do that res.send() might not?',
                    options: [
                        'It is faster',
                        'It strictly sets the Content-Type header to application/json and converts non-objects',
                        'It encrypts the data',
                        'It saves to the database'
                    ],
                    correctIndex: 1,
                    explanation: 'res.json() ensures the correct MIME type is sent, which is crucial for API clients.'
                },
                {
                    id: 'q4',
                    question: 'Where can you find URL variables like ?page=1?',
                    options: [
                        'req.params',
                        'req.body',
                        'req.query',
                        'req.search'
                    ],
                    correctIndex: 2,
                    explanation: 'Query strings (after the ?) are parsed into the req.query object.'
                },
                {
                    id: 'q5',
                    question: 'Which method serves a folder of images and CSS automatically?',
                    options: [
                        'express.static()',
                        'express.files()',
                        'express.public()',
                        'express.serve()'
                    ],
                    correctIndex: 0,
                    explanation: 'express.static("folderName") creates a middleware that handles file serving logic.'
                }
            ]
        }
    ]
};
