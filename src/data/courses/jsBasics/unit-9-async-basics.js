import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit9AsyncBasics = {
    id: 'js-unit-9',
    title: 'Async Basics - The Waiter',
    description: 'The web is slow. Don\'t freeze the browser. Master Promises, Async / Await, and Data Fetching.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-9-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Restaurant (Event Loop) 🍽️',
            duration: '25 min read',
            content: `
# Deep Dive: The Restaurant (Event Loop) 🍽️

## 1. Synchronous (Fast Food Queue) 🚶‍♂️
*   **Process**: Order -> Wait -> Receive -> Next Person.
*   **Problem**: If one burger takes 10 mins, everyone behind waits. The app "Freezes".

## 2. Asynchronous (Sit-Down Restaurant) 👔
*   **Process**:
    1.  You Order (Call API).
    2.  Waiter leaves (The "Event Loop").
    3.  You chat with your friends (App remains interactive).
    4.  Waiter returns with food (Callback Execution).

## 3. The Queue
Functions like \`setTimeout\` or \`fetch\` are sent to the "Web APIs" area. They leave the main thread.
When they finish, they join the "Callback Queue".
The Event Loop constantly checks: "Is the Stack empty? Yes? Okay, let the first person in the Queue enter."
            `
        },
        {
            id: 'js-9-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Promises (Ticket #42) 🎫',
            duration: '20 min read',
            content: `
# Deep Dive: Promises (Ticket #42) 🎫

A **Promise** is a receipt.
"I don't have your data yet, but here is a Promise that I will give it to you later."

## 3 States
1.  **Pending**: The Ticket. (Waiting for kitchen).
2.  **Resolved (Fulfilled)**: The Food. (Success).
3.  **Rejected**: "We ran out of steak". (Error).

## Consuming Promises
\`\`\`javascript
fetchData()
    .then(data => console.log(data))  // Success
    .catch(err => console.error(err)) // Fail
\`\`\`
            `
        },
        {
            id: 'js-9-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Async / Await (The Chef) 👨‍🍳',
            duration: '25 min read',
            content: `
# Deep Dive: Async / Await (The Chef) 👨‍🍳

Using \`.then()\` can get messy ("Callback Hell").
Modern JS allows us to write Async code that *looks* Synchronous.

## The Keywords
*   **async**: "This function contains operations that take time."
*   **await**: "Pause execution HERE until the Promise resolves."

\`\`\`javascript
async function serve() {
    console.log("Ordering...");
    const food = await cookOrder(); // Pauses line, DOES NOT freeze UI
    console.log("Eating", food);
}
\`\`\`

This is nearly universally preferred over raw Promises.
            `
        },
        {
            id: 'js-9-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Fetch API 📡',
            duration: '20 min read',
            content: `
# Deep Dive: The Fetch API 📡

How do we get data from a server (e.g., User Profile)?
We use \`fetch\`.

## The "Two Await" Dance
Fetch is weird. It has two steps.
1.  **Step 1**: Connect to Server and get headers. (\`await fetch()\`).
2.  **Step 2**: Download the Body (JSON) and parse it. (\`await res.json()\`).

\`\`\`javascript
const res = await fetch("https://api.com/user");
const data = await res.json(); // Don't forget this!
\`\`\`
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-9-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Kitchen Timer (SetTimeout)',
            duration: '20 min',
            content: `
# Lab 1: The Kitchen Timer (SetTimeout)

Simulate a delay.

## The Mission
1.  Log "Ordering".
2.  Use \`setTimeout\` to log "Served" after 2000ms.
3.  Log "Waiting...".

## Expected Output
Notice the order in the console:
1.  Ordering
2.  Waiting...
3.  Served (2 seconds later).

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Start: Log "Ordering".',
                    completed: false,
                    regex: /console\.log\s*\(\s*["']Ordering["']\s*\)/
                },
                {
                    id: 2,
                    description: 'Timeout: setTimeout(() => log "Served", 2000).',
                    completed: false,
                    regex: /setTimeout\s*\(\s*\(?\s*\)?\s*=>[\s\S]*?Served[\s\S]*?,\s*2000\s*\)/
                },
                {
                    id: 3,
                    description: 'End: Log "Waiting...".',
                    completed: false,
                    regex: /console\.log\s*\(\s*["']Waiting\.\.\.["']\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Async Simulation
// TODO...
`
                }
            ]
        },
        {
            id: 'js-9-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Promise',
            duration: '25 min',
            content: `
# Lab 2: The Promise

Create a Promise manually.

## The Mission
1.  Create function \`checkServer()\`.
2.  Return \`new Promise((resolve, reject) => { ... })\`.
3.  Inside: \`resolve("Online")\`.
4.  Call it and usage \`.then(msg => log(msg))\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define: return new Promise.',
                    completed: false,
                    regex: /return\s+new\s+Promise/
                },
                {
                    id: 2,
                    description: 'Resolve: call resolve("Online").',
                    completed: false,
                    regex: /resolve\s*\(\s*["']Online["']\s*\)/
                },
                {
                    id: 3,
                    description: 'Consume: checkServer().then(...)',
                    completed: false,
                    regex: /\.then\s*\(/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `function checkServer() {
    // TODO: Return Promise
}

// TODO: Consume
`
                }
            ]
        },
        {
            id: 'js-9-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Async/Await Refactor',
            duration: '25 min',
            content: `
# Lab 3: Async/Await Refactor

Rewrite the previous code to look cleaner.

## The Mission
1.  Create \`async function init()\`.
2.  Inside: \`const status = await checkServer()\`.
3.  Log status.
4.  Call \`init()\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Async: Define async function init.',
                    completed: false,
                    regex: /async\s+function\s+init/
                },
                {
                    id: 2,
                    description: 'Await: const status = await checkServer().',
                    completed: false,
                    regex: /const\s+status\s*=\s*await\s+checkServer/
                },
                {
                    id: 3,
                    description: 'Log: status.',
                    completed: false,
                    regex: /console\.log\s*\(\s*status\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Assume checkServer exists...
async function init() {
    // TODO: Await
}
`
                }
            ]
        },
        {
            id: 'js-9-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Fetch Chain',
            duration: '30 min',
            content: `
# Lab 4: The Fetch Chain

Get data from the real internet.

## The Mission
1.  URL: \`"https://api.github.com/users/google"\`.
2.  Create async function.
3.  \`await fetch(url)\`.
4.  \`await res.json()\`.
5.  Log \`data.bio\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Fetch: const res = await fetch(url).',
                    completed: false,
                    regex: /const\s+res\s*=\s*await\s+fetch/
                },
                {
                    id: 2,
                    description: 'Parse: const data = await res.json().',
                    completed: false,
                    regex: /const\s+data\s*=\s*await\s+res\.json/
                },
                {
                    id: 3,
                    description: 'Log: data.bio.',
                    completed: false,
                    regex: /console\.log\s*\(\s*data\.bio\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const url = "https://api.github.com/users/google";
// TODO: Fetch
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-9-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Async Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is "Callback Hell"?',
                    options: [
                        'A phone number',
                        'Deeply nested callbacks (indentation pyramid) making code unreadable',
                        'A syntax error',
                        'A timeout'
                    ],
                    correctIndex: 1,
                    explanation: 'Promises were invented specifically to solve this nesting problem.'
                },
                {
                    id: 'q2',
                    question: 'What does "await" do?',
                    options: [
                        'Stops the server',
                        'Pauses the execution of the ASYNC function until the Promise resolves',
                        'Waits for 1 second',
                        'Refreshes the page'
                    ],
                    correctIndex: 1,
                    explanation: 'It yields execution to the event loop, then resumes on the next line when data is ready.'
                },
                {
                    id: 'q3',
                    question: 'Why do we need "res.json()"?',
                    options: [
                        'To connect to internet',
                        'Because "fetch" returns a raw HTTP stream. We need to explicitly read the body as JSON',
                        'It is optional',
                        'To send data'
                    ],
                    correctIndex: 1,
                    explanation: 'The body stream can only be read once.'
                },
                {
                    id: 'q4',
                    question: 'Can you use "await" inside a normal function?',
                    options: [
                        'Yes',
                        'No, only inside functions marked with "async"',
                        'Only in loops',
                        'Only in Chrome'
                    ],
                    correctIndex: 1,
                    explanation: 'Syntax Error: await is only valid in async functions.'
                },
                {
                    id: 'q5',
                    question: 'What happens if a Promise fails (rejects)?',
                    options: [
                        'The code stops',
                        'It throws an error that can be caught with .catch() or try/catch',
                        'It returns null',
                        'It retries'
                    ],
                    correctIndex: 1,
                    explanation: 'Always handle your errors.'
                }
            ]
        }
    ]
};
