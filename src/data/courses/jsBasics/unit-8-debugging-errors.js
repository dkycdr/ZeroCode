import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit8DebuggingErrors = {
    id: 'js-unit-8',
    title: 'Debugging - The Detective',
    description: 'Bugs are inevitable. Learn to solve them. Master Stack Traces, Breakpoints, and Try/Catch.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-8-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Stack Trace 🔍',
            duration: '20 min read',
            content: `
# Deep Dive: The Stack Trace 🔍

## Reading the Crime Scene

When an error occurs, JS prints a **Stack Trace**.
It is a list of functions that were active when the crash happened.

\`\`\`text
Uncaught TypeError: Cannot read property 'map' of undefined
    at renderList (app.js:15:10)  <-- CRASH LOCATION
    at fetchData (app.js:25:5)   <-- CALLER
    at init (app.js:30:1)        <-- ENTRY POINT
\`\`\`

## How to Read
1.  **Read the Error Message**: "Cannot read property 'map'". -> You tried to use .map on something that wasn't an array (likely undefined).
2.  **Look closely at the Top Line**: \`app.js:15:10\`.
    *   Line 15.
    *   Character 10.
            `
        },
        {
            id: 'js-8-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Try / Catch / Finally 🥅',
            duration: '25 min read',
            content: `
# Deep Dive: Try / Catch / Finally 🥅

## Defensive Programming
Sometimes we know code *might* fail (e.g., Network Request, User Input).
We don't want the whole app to turn white (white screen of death).

\`\`\`javascript
try {
    // Dangerous Code (e.g. JSON.parse(badString))
    risky();
} catch (error) {
    // Safety Net
    console.error("Caught it:", error.message);
} finally {
    // Cleanup (Runs always)
    stopSpinner();
}
\`\`\`

**Rule**: Use Try/Catch for **Unpredictable** errors (IO, Network). Don't use it to hide your own logic bugs.
            `
        },
        {
            id: 'js-8-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Common Error Types 🦠',
            duration: '20 min read',
            content: `
# Deep Dive: Common Error Types 🦠

## 1. ReferenceError
*   **Cause**: Referring to a variable that doesn't exist.
*   **Msg**: "x is not defined".

## 2. TypeError (The Most Common)
*   **Cause**: Treating a value as the wrong type.
*   **Msg**: "x is not a function" (You tried to call a number?).
*   **Msg**: "Cannot read property of null" (You tried \`null.name\`).

## 3. SyntaxError
*   **Cause**: You typed code V8 can't parse.
*   **Msg**: "Unexpected token }".
            `
        },
        {
            id: 'js-8-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The "debugger" Keyword 🛑',
            duration: '15 min read',
            content: `
# Deep Dive: The "debugger" Keyword 🛑

You can pause time.
If you write \`debugger;\` in your code and the DevTools are open, the browser **Freezes** execution at that line.
You can then:
*   Hover over variables to see values.
*   Step forward line-by-line.
*   See the Call Stack.

This is 100x more powerful than \`console.log\`.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-8-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Crash',
            duration: '20 min',
            content: `
# Lab 1: The Crash

Simulate a crash.

## The Mission
1.  \`const user = null\`.
2.  Try to access \`user.name\`.
3.  Observe the TypeError.
4.  (In this lab, wrap it in a function so we can see the stack).

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Crash: Access user.name on null.',
                    completed: false,
                    regex: /user\.name/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const user = null;
function crash() {
    // TODO: Causes Error
    console.log(user.name); 
}
crash();
`
                }
            ]
        },
        {
            id: 'js-8-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Safety Net',
            duration: '25 min',
            content: `
# Lab 2: The Safety Net

Prevent the crash.

## The Mission
1.  Wrap the dangerous code in \`try { ... }\`.
2.  Add \`catch(err) { ... }\`.
3.  Log "Saved!".

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Try: Wrap code.',
                    completed: false,
                    regex: /try\s*\{/
                },
                {
                    id: 2,
                    description: 'Catch: Log "Saved!".',
                    completed: false,
                    regex: /catch\s*\(\s*\w+\s*\)\s*\{[\s\S]*Saved!/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const user = null;

// TODO: Wrap in Try/Catch
console.log(user.name);
`
                }
            ]
        },
        {
            id: 'js-8-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Throwing Errors',
            duration: '20 min',
            content: `
# Lab 3: Throwing Errors

You can create your own errors.

## The Mission
1.  Check if \`age < 18\`.
2.  If true, \`throw new Error("Too young")\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Throw: throw new Error("Too young").',
                    completed: false,
                    regex: /throw\s+new\s+Error\s*\(\s*["']Too young["']\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `let age = 10;
// TODO: Guard
`
                }
            ]
        },
        {
            id: 'js-8-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Finally Cleanup',
            duration: '15 min',
            content: `
# Lab 4: Finally Cleanup

## The Mission
1.  Add a \`finally\` block after catch.
2.  Log "Cleanup complete".

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Finally: Log "Cleanup complete".',
                    completed: false,
                    regex: /finally\s*\{[\s\S]*Cleanup complete/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `try {
    throw new Error("Oops");
} catch (e) {
    console.log(e);
}
// TODO: Add finally
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-8-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Debug Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which block executes regardless of error or success?',
                    options: [
                        'ensure',
                        'always',
                        'finally',
                        'catch'
                    ],
                    correctIndex: 2,
                    explanation: 'Finally is guaranteed to run. Useful for closing loose connections.'
                },
                {
                    id: 'q2',
                    question: 'What does "Uncaught TypeError" mean?',
                    options: [
                        'You made a typo',
                        'You tried to perform an invalid operation on a type (e.g. read property of null)',
                        'The computer is hot',
                        'Network fail'
                    ],
                    correctIndex: 1,
                    explanation: 'The most common runtime error.'
                },
                {
                    id: 'q3',
                    question: 'How do you pause code execution in Chrome via code?',
                    options: [
                        'pause();',
                        'stop();',
                        'debugger;',
                        'wait();'
                    ],
                    correctIndex: 2,
                    explanation: 'It triggers a breakpoint in the DevTools.'
                },
                {
                    id: 'q4',
                    question: 'What information does a Stack Trace provide?',
                    options: [
                        'Memory usage',
                        'The sequence of function calls leading to the error',
                        'Database queries',
                        'User history'
                    ],
                    correctIndex: 1,
                    explanation: 'It shows the path the CPU took to get to the crash site.'
                },
                {
                    id: 'q5',
                    question: 'Should you wrap EVERYTHING in try/catch?',
                    options: [
                        'Yes, it is safer',
                        'No, only predictable failure points (I/O)',
                        'Never',
                        'Only on Tuesdays'
                    ],
                    correctIndex: 1,
                    explanation: 'Global try/catch swallows bugs and makes debugging harder. Only catch what you can handle.'
                }
            ]
        }
    ]
};
