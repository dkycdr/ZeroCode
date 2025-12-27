import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit8Rest = {
    id: 'node-unit-8',
    title: 'Unit 8: REST API Design',
    description: 'Design professional APIs. Learn the rules of REST, proper status codes, and structuring responses for scale.',
    items: [
        // PART 1: DEEP DIVES
        {
            id: 'node-8-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: What is REST? 🏛️',
            duration: '20 min read',
            content: `
# Deep Dive: What is REST? 🏛️

## 1. REpresentational State Transfer
It's an architectural style, not a protocol.
Rules:
*   **Stateless**: Server stores no session context between requests (Tokens > Sessions).
*   **Resource Based**: Everything is a "Resource" (User, Product, Order).
*   **Uniform Interface**: Consistent URLs and Methods.

## 2. Resource Naming
✅ **Good**: \`/users\`, \`/users/123\`, \`/users/123/posts\` (Nouns, Plural)
❌ **Bad**: \`/getUsers\`, \`/createUser\`, \`/update-client-info\` (Verbs)

The **HTTP Method** acts as the verb.
*   GET /users (Get all)
*   POST /users (Create)
            `
        },
        {
            id: 'node-8-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Status Codes 🚦',
            duration: '15 min read',
            content: `
# Deep Dive: Status Codes 🚦

Don't just return 200 for everything.

## Success
*   **200 OK**: General success.
*   **201 Created**: Successful POST.
*   **204 No Content**: Successful DELETE (nothing to return).

## Client Errors
*   **400 Bad Request**: Validation failed / Missing fields.
*   **401 Unauthorized**: Who are you? (Missing Token).
*   **403 Forbidden**: I know who you are, but you can't do this (Admin only).
*   **404 Not Found**: ID doesn't exist.

## Server Errors
*   **500 Internal Server Error**: Bug in code.
            `
        },
        {
            id: 'node-8-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Idempotency 🔁',
            duration: '10 min read',
            content: `
# Deep Dive: Idempotency 🔁

## 1. Definition
An operation is idempotent if doing it multiple times has the SAME effect as doing it once.

## 2. Examples
*   **PUT (Replace)**: Idempotent. Setting age=20 twice results in age=20.
*   **DELETE**: Idempotent. Deleting ID 5 twice results in it being gone (2nd call might 404, but state is same).
*   **POST (create)**: **NOT** Idempotent. Doing it twice creates 2 records.
            `
        },
        {
            id: 'node-8-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: JSON Standards 📄',
            duration: '10 min read',
            content: `
# Deep Dive: JSON Standards 📄

## 1. Envelope or No Envelope?
Should you wrap data?
\`{ "data": [ ... ] }\` vs \`[ ... ]\`.
Wrapping is safer for future expansion (adding "meta" or "pagination" fields).

## 2. Naming
Use **camelCase** for JSON keys (\`firstName\`), matching JS.
Avoid snake_case unless interacting with legacy Python/PHP systems.
            `
        },

        // PART 2: LABORATORIES
        {
            id: 'node-8-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: CRUD Controller',
            duration: '30 min',
            content: `
# Lab 1: CRUD Controller

Implement a full CRUD (Create, Read, Update, Delete) for a "Todos" resource.

## The Mission
1.  **GET /todos**: List all.
2.  **POST /todos**: Add one (201).
3.  **PUT /todos/:id**: Update one.
4.  **DELETE /todos/:id**: Remove one (204).

## In-Memory DB
Use a simple array \`let todos = []\` for storage.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'GET route.',
                    completed: false,
                    regex: /app\.get\s*\(\s*['"]\/todos['"]/
                },
                {
                    id: 2,
                    description: 'POST route (201 status).',
                    completed: false,
                    regex: /res\.status\s*\(\s*201\s*\)/
                },
                {
                    id: 3,
                    description: 'DELETE route (204 status).',
                    completed: false,
                    regex: /res\.sendStatus\s*\(\s*204\s*\)/
                }
            ],
            files: [
                {
                    name: 'crud.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

// Task 1: GET
app.get('/todos', (req, res) => res.json(todos));

// Task 2: POST
app.post('/todos', (req, res) => {
    todos.push(req.body);
    // Send 201
});

// Task 3: DELETE
app.delete('/todos/:id', (req, res) => {
    // Logic to remove
    todos = todos.filter(t => t.id !== req.params.id);
    // Send 204
});
`
                }
            ]
        },
        {
            id: 'node-8-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Status Codes Drill',
            duration: '20 min',
            content: `
# Lab 2: Status Codes Drill

Fix the status codes in this broken API.

## The Mission
1.  **POST**: Currently returns 200. Change to **201**.
2.  **Not Found**: Currently returns 200 with "error". Change to **404**.
3.  **Unauthorized**: Currently returns 500. Change to **401**.

## Semantics
Clients rely on these codes to know if they should retry, login, or show an error.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Fix Creation status.',
                    completed: false,
                    regex: /status\s*\(\s*201\s*\)/
                },
                {
                    id: 2,
                    description: 'Fix Not Found status.',
                    completed: false,
                    regex: /status\s*\(\s*404\s*\)/
                },
                {
                    id: 3,
                    description: 'Fix Auth status.',
                    completed: false,
                    regex: /status\s*\(\s*401\s*\)/
                }
            ],
            files: [
                {
                    name: 'status.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();

app.post('/items', (req, res) => {
    // Task 1: Created
    res.status(200).json({ id: 1 }); 
});

app.get('/items/:id', (req, res) => {
    // Task 2: Not Found
    if (!found) return res.status(200).json({ error: "Missing" });
});

app.get('/admin', (req, res) => {
    // Task 3: Forbidden/Unauthorized
    if (!admin) return res.status(500).send("Go away");
});
`
                }
            ]
        },
        {
            id: 'node-8-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: API Filtering & Padding',
            duration: '25 min',
            content: `
# Lab 3: API Filtering & Sorting

Implement query params for a list endpoint.

## The Mission
1.  **Filter**: \`?role=admin\`.
2.  **Sort**: \`?sort=name\`.
3.  **Logic**: Filter array before returning.

## Real World
Never return the ENTIRE database table. Always support filtering.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Implement role filter.',
                    completed: false,
                    regex: /filter\s*\(.*role/
                },
                {
                    id: 2,
                    description: 'Implement sorting.',
                    completed: false,
                    regex: /sort\s*\(/
                }
            ],
            files: [
                {
                    name: 'filter.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();

const users = [
    { name: "Bob", role: "user" },
    { name: "Alice", role: "admin" }
];

app.get('/users', (req, res) => {
    let result = users;
    const { role, sort } = req.query;

    // Task 1: Filter
    if (role) {
        
    }

    // Task 2: Sort
    if (sort === 'name') {
        
    }

    res.json(result);
});
`
                }
            ]
        },
        {
            id: 'node-8-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: MVC Structure',
            duration: '15 min',
            content: `
# Lab 4: MVC Structure

Refactor the monolithic app into Model-View-Controller (or Router-Controller).

## The Mission
1.  **Router**: Define routes in \`routes.js\`.
2.  **Controller**: Logic in \`controller.js\`.
3.  **App**: Import router in \`app.js\`.

## Logic Separation
The \`app.js\` should only care about config. The routes care about paths. The controllers care about logic.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Export Router.',
                    completed: false,
                    regex: /module\.exports\s*=\s*router/
                },
                {
                    id: 2,
                    description: 'Import and Use Router.',
                    completed: false,
                    regex: /app\.use\s*\(\s*['"]\/api['"]\s*,\s*router\s*\)/
                }
            ],
            files: [
                {
                    name: 'routes.js',
                    language: 'javascript',
                    content: `const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/', controller.list);
// Task 1: Export
`
                },
                {
                    name: 'app.js',
                    language: 'javascript',
                    content: `const express = require('express');
const app = express();
const router = require('./routes');

// Task 2: Mount router at /api
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-8-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'REST Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which is a REST-compliant URL for retrieving user 13?',
                    options: [
                        'GET /getUser?id=13',
                        'GET /users/13',
                        'POST /users/get/13',
                        'GET /api/13'
                    ],
                    correctIndex: 1,
                    explanation: 'REST uses nouns (Resources) and IDs in the path. GET indicates retrieval.'
                },
                {
                    id: 'q2',
                    question: 'Which status code means "Created"?',
                    options: [
                        '200',
                        '201',
                        '202',
                        '204'
                    ],
                    correctIndex: 1,
                    explanation: '201 Created is the specific success code for POST requests that result in a new resource.'
                },
                {
                    id: 'q3',
                    question: 'What is the correct HTTP verb for deleting a resource?',
                    options: [
                        'REMOVE',
                        'DELETE',
                        'CLEAR',
                        'KILL'
                    ],
                    correctIndex: 1,
                    explanation: 'DELETE is the standard method.'
                },
                {
                    id: 'q4',
                    question: 'Is REST a strict protocol?',
                    options: [
                        'Yes, enforced by the compiler',
                        'No, it is an architectural style/convention',
                        'Yes, defined by TCP/IP',
                        'Only in Node.js'
                    ],
                    correctIndex: 1,
                    explanation: 'You can technically break REST rules (like using GET to delete), but you shouldn\'t.'
                },
                {
                    id: 'q5',
                    question: 'Which status code represents "Forbidden" (Authenticated but no permission)?',
                    options: [
                        '401',
                        '403',
                        '404',
                        '500'
                    ],
                    correctIndex: 1,
                    explanation: '401 is "I don\'t know you". 403 is "I know you, but you represent a security risk or lack permission".'
                }
            ]
        }
    ]
};
