import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Intro = {
    id: 'node-unit-1',
    title: 'Unit 1: Node.js Architecture & Internals',
    description: 'Understand the machinery under the hood. Learn how V8, libuv, and the Event Loop enable non-blocking asynchronous JavaScript.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES
        {
            id: 'node-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: V8 and The Runtime ⚙️',
            duration: '15 min read',
            content: `
# Deep Dive: V8 and The Runtime ⚙️

## 1. Introduction
Node.js is **NOT** a language. It is a **Runtime Environment** for JavaScript.
It allows you to run JS outside the browser (on your laptop, server, or IoT device).

## 2. The Engine: V8
At the core of Node.js is **V8**, the exact same engine that powers Google Chrome.
*   **Written in**: C++.
*   **Job**: Compiles JS code into native machine code (x86/ARM) at runtime (JIT Compilation).
*   **Performance**: Extremely fast execution.

## 3. The Missing Pieces
In the browser, you have \`window\`, \`document\`, and CSS.
In Node.js, these **do not exist**.
Instead, you get:
*   **fs**: Access to the hard drive.
*   **http**: Ability to act as a web server.
*   **os**: Low-level OS info.

## 4. Libuv & C++ Bindings
How does JS talk to the hard drive? It can't.
Node.js uses **C++ Bindings** to link JS functions to C++ functions.
**Libuv** is a C library that handles the heavy lifting (File System, Network, Thread Pool) asynchronously.
            `
        },
        {
            id: 'node-1-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Event Loop 🔄',
            duration: '25 min read',
            content: `
# Deep Dive: The Event Loop 🔄

## 1. Single Threaded?
You hear this often: "Node.js is single-threaded".
What does that mean?
*   **The Main Thread**: Executes your JS code line-by-line.
*   **The Background**: C++ (Libuv) has a pool of worker threads to handle heavy stuff (like reading a 1GB file).

## 2. The Loop Mechanics
Imagine a waiter (The Main Thread) in a restaurant.
1.  Customer A orders "File Read".
2.  Waiter passes ticket to Chef (Libuv Thread Pool).
3.  Waiter immediately goes to Customer B (Next line of code).
4.  Chef finishes "File Read" and rings bell (Callback/Promise).
5.  Waiter brings food to Customer A *when they are free*.

## 3. Blocking the Loop
If you calculate Pi to the billionth decimal in the Main Thread, the Waiter is busy. No one else gets served.
**Rule #1 in Node**: Don't block the Event Loop.
            `
        },
        {
            id: 'node-1-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Globals & Processes 🌍',
            duration: '15 min read',
            content: `
# Deep Dive: Globals & Processes 🌍

## 1. No Window
There is no \`window\`. There is \`global\`.
Anything attached to \`global\` is available everywhere.
*   \`global.setTimeout\`
*   \`global.console\`

## 2. The Process Object
The \`process\` object gives you control over the current Node.js instance.
*   \`process.env\`: Environment variables (API Keys, DB URLs).
*   \`process.argv\`: Command line arguments.
*   \`process.exit()\`: Kill the program.
*   \`process.cwd()\`: Current Working Directory.

## 3. __dirname vs __filename
(In CommonJS)
*   \`__dirname\`: Path to the *folder* containing the current file.
*   \`__filename\`: Absolute path to the *file* itself.
            `
        },
        {
            id: 'node-1-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: REPL & Debugging 🐞',
            duration: '10 min read',
            content: `
# Deep Dive: REPL & Debugging 🐞

## 1. The REPL
Read-Eval-Print Loop.
Type \`node\` in your terminal without arguments.
You enter an interactive JS shell. Useful for testing snippet logic quickly.

## 2. Debugging
You can debug Node apps just like Chrome.
Run: \`node --inspect app.js\`
Open \`chrome://inspect\` in your browser to attach the Chrome DevTools to your server!

## 3. Console Power
\`console.time()\` and \`console.timeEnd()\` are great for quick benchmarks.
\`console.dir(obj, { depth: null })\` prints deep objects fully.
            `
        },

        // PART 2: PRACTICAL LABS
        {
            id: 'node-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Hello Node',
            duration: '15 min',
            content: `
# Lab 1: Hello Node

Your first step into the backend. Write a script that logs system info.

## The Mission
1.  **Log**: "Hello Node".
2.  **Platform**: Log the OS platform using \`process.platform\`.
3.  **Dir**: Log the current directory using \`process.cwd()\`.

## Non-Blocking
Unlike \`alert()\` in the browser (which pauses everything), \`console.log\` in Node is extremely efficient.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Log "Hello Node" to console.',
                    completed: false,
                    regex: /console\.log\s*\(\s*['"]Hello Node['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Log the platform: process.platform.',
                    completed: false,
                    regex: /console\.log\s*\(\s*process\.platform\s*\)/
                },
                {
                    id: 3,
                    description: 'Log the directory: process.cwd().',
                    completed: false,
                    regex: /console\.log\s*\(\s*process\.cwd\(\)\s*\)/
                }
            ],
            files: [
                {
                    name: 'app.js',
                    language: 'javascript',
                    content: `// Task 1: Say Hello
console.log('Hello Node');

// Task 2: What OS is this?

// Task 3: Where are we?
`
                }
            ]
        },
        {
            id: 'node-1-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Environment Variables',
            duration: '20 min',
            content: `
# Lab 2: Environment Variables

Real apps keep secrets (API Keys, DB Passwords) in environment variables, not code.

## The Mission
1.  **Read**: Access \`process.env.USER_NAME\`.
2.  **Log**: Print "Hello [Name]".
3.  **Conditional**: If \`NODE_ENV\` is 'development', log "Dev Mode".

## Simulating Env Vars
In the terminal, you run:
\`USER_NAME=Dwiky NODE_ENV=development node app.js\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Capture process.env.USER_NAME.',
                    completed: false,
                    regex: /const\s+\w+\s*=\s*process\.env\.USER_NAME/
                },
                {
                    id: 2,
                    description: 'Check if process.env.NODE_ENV === "development".',
                    completed: false,
                    regex: /if\s*\(\s*process\.env\.NODE_ENV\s*===?\s*['"]development['"]\s*\)/
                }
            ],
            files: [
                {
                    name: 'config.js',
                    language: 'javascript',
                    content: `// Simulate pulling value from ENV
const user = process.env.USER_NAME;

console.log(\`Hello \${user}\`);

// Task 2: Check for Dev Mode
// if (process.env.NODE_ENV === 'development') ...
`
                }
            ]
        },
        {
            id: 'node-1-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Command Line Arguments',
            duration: '25 min',
            content: `
# Lab 3: Command Line Arguments

Build a mini CLI tool that adds two numbers passed as arguments.
\`node add.js 5 10\` -> Output: 15.

## The Data Structure
\`process.argv\` is an array.
Index 0: Node executable path.
Index 1: Script file path.
Index 2+: Your arguments!

## The Mission
1.  **Parse**: Get \`process.argv[2]\` and \`[3]\`.
2.  **Convert**: They are strings! Use \`parseInt\`.
3.  **Calculate**: Add them and log result.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Access arg 1 (index 2).',
                    completed: false,
                    regex: /process\.argv\[2\]/
                },
                {
                    id: 2,
                    description: 'Parse integers.',
                    completed: false,
                    regex: /parseInt\s*\(/
                },
                {
                    id: 3,
                    description: 'Log sum.',
                    completed: false,
                    regex: /console\.log\s*\(\s*(sum|res|.*)\s*\)/
                }
            ],
            files: [
                {
                    name: 'add.js',
                    language: 'javascript',
                    content: `// node add.js 5 10

const arg1 = process.argv[2];
const arg2 = process.argv[3];

if (!arg1 || !arg2) {
    console.log("Please provide two numbers");
} else {
    // Task 2: Parse and Add
    
    // Task 3: Log Result
}
`
                }
            ]
        },
        {
            id: 'node-1-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Path Module',
            duration: '15 min',
            content: `
# Lab 4: The Path Module

Operating systems use different slashes (\`/\` vs \`\\\`).
Never concat strings for paths. Use the built-in \`path\` module.

## The Mission
1.  **Import**: \`require('path')\`.
2.  **Join**: Combine \`__dirname\`, \`'files'\`, and \`'report.pdf'\`.
3.  **Parse**: Get the extension name of the resulting path.

## Why?
Code written with \`path.join\` works on Windows, Linux, and Mac automatically.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import path module.',
                    completed: false,
                    regex: /require\s*\(\s*['"]path['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Use path.join.',
                    completed: false,
                    regex: /path\.join\s*\(/
                },
                {
                    id: 3,
                    description: 'Use path.extname.',
                    completed: false,
                    regex: /path\.extname\s*\(/
                }
            ],
            files: [
                {
                    name: 'paths.js',
                    language: 'javascript',
                    content: `const path = require('path');

// Task 2: Create precise path
// Combine: __dirname, "data", "file.txt"
const fullPath = ''; 

console.log(fullPath);

// Task 3: Get extension
const ext = ''; 

console.log(ext);
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Node Internals Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What happens if you run a heavy calculation (like an infinite loop) on the Main Thread?',
                    options: [
                        'Node creates a new thread automatically',
                        'It blocks the Event Loop and the server freezes',
                        'It runs in the background',
                        'Nothing happens'
                    ],
                    correctIndex: 1,
                    explanation: 'Because Node is single-threaded, CPU-intensive tasks block the only thread available, stopping all other requests.'
                },
                {
                    id: 'q2',
                    question: 'Which object allows you to access environment variables?',
                    options: [
                        'window.env',
                        'global.env',
                        'process.env',
                        'sys.env'
                    ],
                    correctIndex: 2,
                    explanation: 'process.env is the standard way to access shell environment variables.'
                },
                {
                    id: 'q3',
                    question: 'Where does the V8 engine come from?',
                    options: [
                        'Firefox',
                        'Google Chrome Reference Implementation',
                        'Facebook',
                        'Microsoft'
                    ],
                    correctIndex: 1,
                    explanation: 'V8 is the open source engine developed by Google for Chrome.'
                },
                {
                    id: 'q4',
                    question: 'What is the correct way to construct file paths cross-platform?',
                    options: [
                        'String concatenation (+)',
                        'Template literals',
                        'path.join()',
                        'Manual slashes'
                    ],
                    correctIndex: 2,
                    explanation: 'path.join() handles the differences between Windows (backslashes) and Unix (forward slashes) automatically.'
                },
                {
                    id: 'q5',
                    question: 'Does Node.js have a "window" object?',
                    options: [
                        'Yes',
                        'No, it has "global"',
                        'Yes, but it is empty',
                        'Only in Express'
                    ],
                    correctIndex: 1,
                    explanation: 'Node.js is headless. There is no window or DOM. The top-level scope is "global".'
                }
            ]
        }
    ]
};
