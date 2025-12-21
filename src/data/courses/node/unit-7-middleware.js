import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7Middleware = {
    id: 'node-unit-7',
    title: 'Unit 7: Middleware Architecture',
    description: 'The secret sauce of Express. Learn how to intercept requests, validate data, and handle errors globally using the Middleware Pipeline.',
    items: [
        // PART 1: DEEP DIVES
        {
            id: 'node-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Pipeline Pattern 🚇',
            duration: '15 min read',
            content: `
# Deep Dive: The Pipeline Pattern 🚇

## 1. The Onion Model
Imagine a request traveling through layers.
1.  **Logging Layer**: Records "Request came in".
2.  **Security Layer**: Checks "Is user logged in?".
3.  **Body Parsing**: Converts JSON.
4.  **Route Handler**: Your business logic.

## 2. next()
The Magic Key.
If a middleware function does not call \`next()\` (or send a response), the request **hangs forever**.
You must either pass the baton or finish the race.

## 3. Order Matters
\`\`\`javascript
app.use(auth);
app.use(publicRoutes); // Wait, auth ran first! Access blocked!
\`\`\`
Always define middleware in logical order: Global Utilities -> Auth -> Routes -> Error Handling.
            `
        },
        {
            id: 'node-7-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Error Handling Middleware 🚨',
            duration: '15 min read',
            content: `
# Deep Dive: Error Handling Middleware 🚨

## 1. The 4 Arguments
Standard middleware has 3 args: \`(req, res, next)\`.
Error middleware has **4 args**: \`(err, req, res, next)\`.
Express detects the argument count to identify it as an error handler.

## 2. Catching Errors
If you call \`next(new Error('Boom'))\`, it skips all normal middleware and jumps straight to the **Error Middleware**.

## 3. Centralized Handling
Instead of writing try/catch in every route, propagate errors to one global handler that logs them and sends a standard JSON response.
            `
        },
        {
            id: 'node-7-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Third Party Middleware 📦',
            duration: '10 min read',
            content: `
# Deep Dive: Third Party Middleware 📦

## 1. Morgan
HTTP request logger. Prints \`GET / 200 5.3ms\` to console.
Essential for debugging.

## 2. Helmet
Sets security headers (Content-Security-Policy, X-Frame-Options) to prevent attacks.

## 3. CORS
Handling Cross-Origin headers automatically.
            `
        },
        {
            id: 'node-7-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Route Level vs App Level 🎯',
            duration: '10 min read',
            content: `
# Deep Dive: Route Level vs App Level 🎯

## 1. App Level (Global)
\`app.use(logger)\`
Runs on EVERY request. Good for logging, parsing.

## 2. Route Level (Specific)
\`app.get('/private', authMiddleware, handler)\`
Runs ONLY for this specific route. Good for permissions.

## 3. Router Level
\`router.use(auth)\`
Runs for all routes attached to that router instance (e.g., all \`/api/admin/*\` routes).
            `
        },

        // PART 2: LABORATORIES
        {
            id: 'node-7-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Logger',
            duration: '15 min',
            content: `
# Lab 1: The Logger

Write your first custom middleware.

## The Mission
1.  **Function**: \`log(req, res, next)\`.
2.  **Log**: Time + Method + URL.
3.  **Next**: Call \`next()\` to let the request continue.

## The Trap
Run the code without \`next()\`. See the browser spin.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define middleware function.',
                    completed: false,
                    regex: /function\s+\w+\s*\(\s*req\s*,\s*res\s*,\s*next\s*\)/
                },
                {
                    id: 2,
                    description: 'Log details.',
                    completed: false,
                    regex: /console\.log/
                },
                {
                    id: 3,
                    description: 'Call next().',
                    completed: false,
                    regex: /next\s*\(\s*\)/
                }
            ],
            files: [
                {
                    name: 'app.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();

// Task 1: Custom Middleware
const logger = (req, res, next) => {
    // Task 2: Log
    
    // Task 3: Continue
    
};

app.use(logger);

app.get('/', (req, res) => res.send("Hi"));

app.listen(3000);
`
                }
            ]
        },
        {
            id: 'node-7-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Auth Guard',
            duration: '20 min',
            content: `
# Lab 2: Auth Guard

Protect a route.

## The Mission
1.  **Check**: Look for \`req.headers.authorization\`.
2.  **Deny**: If missing or wrong, \`res.status(401).send()\`.
3.  **Allow**: If correct, call \`next()\`.
4.  **Attach**: Add it to \`/secret\`.

## The Secret
For this lab, we check if the token is "secret123".
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Check logic.',
                    completed: false,
                    regex: /if\s*\(\s*.*authorization\s*===?\s*['"]secret123['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Return 401 on fail.',
                    completed: false,
                    regex: /res\.status\s*\(\s*401\s*\)/
                },
                {
                    id: 3,
                    description: 'Apply to route.',
                    completed: false,
                    regex: /app\.get\s*\(\s*['"]\/secret['"]\s*,\s*auth/
                }
            ],
            files: [
                {
                    name: 'auth.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();

const auth = (req, res, next) => {
    // Task 1: Check header
    if (req.headers.authorization === 'secret123') {
        next();
    } else {
        // Task 2: Deny
        
    }
};

// Task 3: Protect this route
app.get('/secret', (req, res) => res.send("Secrets"));

app.listen(3000);
`
                }
            ]
        },
        {
            id: 'node-7-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Data Validation',
            duration: '25 min',
            content: `
# Lab 3: Data Validation

Validate POST data before it reaches the handler.

## The Mission
1.  **Middleware**: Checks \`req.body.email\`.
2.  **Logic**: Must include "@".
3.  **Reject**: 400 Bad Request if invalid.
4.  **Pass**: If valid, proceed.

## Benefits
Keeps your controllers (route handlers) clean. They can assume data is valid.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Validation logic.',
                    completed: false,
                    regex: /includes\s*\(\s*['"]@['"]\s*\)/
                },
                {
                    id: 2,
                    description: '400 response.',
                    completed: false,
                    regex: /res\.status\s*\(\s*400\s*\)/
                }
            ],
            files: [
                {
                    name: 'validate.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();
app.use(express.json());

const validateEmail = (req, res, next) => {
    const { email } = req.body;
    
    // Task 1: Check if email has @
    if (email && email.includes('@')) {
        next();
    } else {
        // Task 2: Error
        
    }
};

app.post('/register', validateEmail, (req, res) => {
    res.send("Registered!");
});
`
                }
            ]
        },
        {
            id: 'node-7-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Global Error Handler',
            duration: '20 min',
            content: `
# Lab 4: Global Error Handler

Catch 'em all.

## The Mission
1.  **Throw**: A route triggers an error: \`throw new Error('Oops')\`.
2.  **Define**: Handler with 4 arguments \`(err, req, res, next)\`.
3.  **Place**: MUST be defined **after** all routes.

## Express Rule
If you define the error handler before the routes, it won't catch anything.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Route throwing error.',
                    completed: false,
                    regex: /throw\s+new\s+Error/
                },
                {
                    id: 2,
                    description: 'Handler signature (4 args).',
                    completed: false,
                    regex: /\(\s*err\s*,\s*req\s*,\s*res\s*,\s*next\s*\)/
                },
                {
                    id: 3,
                    description: 'Send 500 status.',
                    completed: false,
                    regex: /res\.status\s*\(\s*500\s*\)/
                }
            ],
            files: [
                {
                    name: 'errors.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();

app.get('/broken', (req, res) => {
    // Task 1: Break it
});

// Task 2 & 3: Global Handler
app.use((err, req, res, next) => {
    console.error(err.message);
    res.json({ error: "Something broke!" });
});
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-7-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Middleware Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'How many arguments/parameters does an Error Handling Middleware function have?',
                    options: [
                        '2 (req, res)',
                        '3 (req, res, next)',
                        '4 (err, req, res, next)',
                        '1 (err)'
                    ],
                    correctIndex: 2,
                    explanation: 'Express distinguishes error handlers by the presence of 4 defined arguments in the function signature.'
                },
                {
                    id: 'q2',
                    question: 'If you fail to call next() in a middleware, what happens?',
                    options: [
                        'The request times out (hangs)',
                        'It automatically goes to the next one',
                        'It returns 404',
                        'It returns 200 OK'
                    ],
                    correctIndex: 0,
                    explanation: 'The request stays stuck in that middleware function indefinitely until the client times out.'
                },
                {
                    id: 'q3',
                    question: 'Where should you place Global Error handling middleware?',
                    options: [
                        'At the very top',
                        'Before the routes',
                        'At the very bottom (after routes)',
                        'Inside the routes'
                    ],
                    correctIndex: 2,
                    explanation: 'It acts as a specific catch bucket. Routes must run first to possibly generate errors or call next(err).'
                },
                {
                    id: 'q4',
                    question: 'What happens if you define middleware AFTER a route handler that sends a response?',
                    options: [
                        'It runs anyway',
                        'It never runs for that route',
                        'It throws an error',
                        'It runs in parallel'
                    ],
                    correctIndex: 1,
                    explanation: 'Once res.send() is called, the response is finished. The pipeline usually stops unless next() was incorrectly called.'
                },
                {
                    id: 'q5',
                    question: 'Why split checks into middleware?',
                    options: [
                        'To make file size smaller',
                        'Separation of Concerns and Reusability',
                        'It makes code faster',
                        'It is required by law'
                    ],
                    correctIndex: 1,
                    explanation: 'You can reuse an authentication check across 50 different routes without rewriting the code.'
                }
            ]
        }
    ]
};
