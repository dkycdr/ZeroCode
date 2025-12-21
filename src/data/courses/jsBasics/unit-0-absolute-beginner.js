import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit0AbsoluteBeginner = {
    id: 'js-unit-0',
    title: 'Absolute Beginner - The First Spark',
    description: 'Welcome to the "Brain" of the web. Understand how JavaScript brings the dead pixel skeleton to life. Master the Console and the V8 Engine.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-0-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Nervous System 🧠',
            duration: '20 min read',
            content: `
# Deep Dive: The Nervous System 🧠

## 1. The 3D Perspective (Dunia Nyata)

To understand web development, you must visualize a Human Body:

*   **HTML (The Bones)**: It gives **Structure**. Without it, you are just a blob of jelly.
*   **CSS (The Skin & Clothes)**: It gives **Appearance**. Without it, you are a terrifying skeleton.
*   **JavaScript (The Nervous System)**: It gives **Life**.
    *   Without JS, the body is a statue. Beautiful, but dead.
    *   With JS, the eyes blink, the arms move, and the brain reacts to a pinch.

---

## 2. The Language of Interaction

HTML is **Passive**. It sits there and waits to be read.
JavaScript is **Active**. It reads the user.

*   **Clicking a Button?** That's a nerve signal sent to the brain.
*   **Fetching Data?** That's the brain recalling a memory.
*   **Animating a Menu?** That's a muscle expanding and contracting.

---

## 3. Real World Use Case (Aplikasi Nyata) 🌍

*   **Twitter/X**: When you click "Like", the heart turns red instantly without reloading the page. That's JS modifying the HTML/CSS in real-time.
*   **Google Maps**: Dragging the map to see new areas. That's JS fetching new images and painting them on the canvas.
*   **Netflix**: The video player controls, the timeline, the volume slider. All pure JavaScript.

---

## Summary

You are not just a "Coder". You are a **Neurosurgeon**. You are wiring up the brain of the application.
            `
        },
        {
            id: 'js-0-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Inside the Engine (V8) ⚙️',
            duration: '25 min read',
            content: `
# Deep Dive: Inside the Engine (V8) ⚙️

## The Machine under the Hood

When you write \`console.log("Hello")\`, your computer doesn't actually understand English. It only understands Zeros and Ones (\`010101\`).

So how does it work?

### 1. The Engine (The Chef)
Browsers have a dedicated engine to read your code.
*   **Chrome**: Uses **V8** (Created by Google).
*   **Firefox**: Uses **SpiderMonkey**.
*   **Safari**: Uses **JavaScriptCore**.

### 2. Just-In-Time (JIT) Compilation
JavaScript is unique. It is a **JIT Compiled** language.

1.  **Parsing**: V8 reads your text file string-by-string.
2.  **AST (Abstract Syntax Tree)**: It turns your code into a Tree Structure.
    *   \`x = 10\` becomes \`Assignment(Variable(x), Value(10))\`.
3.  **Ignition (Interpreter)**: It turns the Tree into Bytecode (Machine Instructions) and runs it immediately.
4.  **TurboFan (Optimizer)**: If you run a function 1000 times, V8 notices. "Hey, this code is hot!" using the TurboFan compiler to optimize it into highly efficient binary code.

---

## Why does this matter?

Because JavaScript is **Fast**.
Older versions were slow interpreters. Modern V8 is nearly as fast as C++ for many tasks because of this sophisticated pipeline.

---

## Visualization
\`\`\`text
[ Source Code ]  ->  [ Parser ]  ->  [ AST ]  ->  [ Ignition (Bytecode) ]  ->  [ TurboFan (Optimized Machine Code) ]
\`\`\`
            `
        },
        {
            id: 'js-0-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Console Ecosystem 🖥️',
            duration: '20 min read',
            content: `
# Deep Dive: The Console Ecosystem 🖥️

## The Developer's Cockpit

The \`console\` object is your window into the running mind of the application. Most beginners only know \`log\`, but there is so much more.

### 1. console.log() (Standard Output)
The bread and butter. Prints text, numbers, or objects.
> "System is online."

### 2. console.warn() (Yellow Alert) ⚠️
Used for "Non-Fatal" issues.
*   Deprecated API usage.
*   Slow network requests.
*   Retrying a connection.
*   *Visually*: Prints with a **Yellow** background and a warning icon.

### 3. console.error() (Red Alert) 🚨
Used for "Fatal" issues.
*   Server 500 Crash.
*   Null Pointer Exception.
*   Payment Failed.
*   *Visually*: Prints with a **Red** background and creates a stack trace.

### 4. console.table() (The spreadsheet) 📊
If you have an array of objects, \`console.table(users)\` prints a beautiful, sortable Excel-like table in the console.

\`\`\`javascript
const users = [{name: "A", age: 10}, {name: "B", age: 20}];
console.table(users);
\`\`\`

---

## Summary
Treat your console logs like a professional pilot's dashboard. Don't spam "here", "test", "working". Use semantic levels (Info, Warn, Error).
            `
        },
        {
            id: 'js-0-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Call Stack 📚',
            duration: '25 min read',
            content: `
# Deep Dive: The Call Stack 📚

## Single Threaded Nature
JavaScript is **Single Threaded**. It has **One Brain**.
It can only do **One Thing at a Time**.

If you tell it to calculate Pi to the billionth decimal, the entire webpage freezes. You cannot click buttons, scroll, or close the tab. This is "Blocking the Main Thread".

## The Stack (LIFO: Last In, First Out)
Think of a stack of plates.
1.  You execute Function A. (Put Plate A on table).
2.  Function A calls Function B. (Put Plate B on top of A).
3.  Function B finishes. (Remove Plate B).
4.  Function A finishes. (Remove Plate A).

### Code Example
\`\`\`javascript
function multiply(x, y) {
    return x * y;
}

function printSquare(n) {
    let s = multiply(n, n);
    console.log(s);
}

printSquare(5);
\`\`\`

### Step-by-Step Visualization
1.  **Push** \`printSquare(5)\`.
2.  Inside \`printSquare\`: **Push** \`multiply(5, 5)\`.
3.  Inside \`multiply\`: Calculate 25. Return.
4.  **Pop** \`multiply\`. Stack is back to \`printSquare\`.
5.  **Push** \`console.log(25)\`.
6.  **Pop** \`console.log\`.
7.  **Pop** \`printSquare\`.
8.  **Stack Empty**.

If you call a function that calls itself (Recursion) forever, you get a **Stack Overflow**. You ran out of plate space.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-0-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Hello World',
            duration: '15 min',
            content: `
# Lab 1: Hello World

The tradition of every programmer since the 1970s.
We need to verify that we have successfully connected to the V8 Engine.

## The Mission
1.  **Print**: Use \`console.log\` to print "Hello World".
2.  **Verify**: Observe the output in the terminal.

## Execution Flow
\`\`\`text
CODE: console.log("Hello World");
   │
   └─── ENGINE: Looks up "console" object.
   │    Found "log" method.
   │    Argument is String pointer "Hello World".
   │
   └─── STDOUT: Pushes characters to display buffer.
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Wake Up: Print the exact string "Hello World" to the console.',
                    completed: false,
                    regex: /(?:^|[\n\r;])\s*console\.log\s*\(\s*["']Hello World["']\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Verification of Life
// TODO: Print "Hello World"
`
                }
            ]
        },
        {
            id: 'js-0-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Calculator',
            duration: '20 min',
            content: `
# Lab 2: The Calculator

Computers are fundamentally calculators.
We can perform arithmetic directly inside the log statement.

## The Mission
1.  **Addition**: Calculate \`10 + 5\`.
2.  **Division**: Calculate \`100 / 4\`.
3.  **Complex**: Calculate \`(50 * 2) - 10\`.

## Common Pitfalls
*   **Quotes**: \`console.log("10 + 5")\` prints the *text* "10 + 5".
*   **No Quotes**: \`console.log(10 + 5)\` prints the *result* 15.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Sum: Calculate 10 + 5.',
                    completed: false,
                    regex: /console\.log\s*\(\s*10\s*\+\s*5\s*\)/
                },
                {
                    id: 2,
                    description: 'Divide: Calculate 100 / 4.',
                    completed: false,
                    regex: /console\.log\s*\(\s*100\s*\/\s*4\s*\)/
                },
                {
                    id: 3,
                    description: 'Complex: Calculate (50 * 2) - 10.',
                    completed: false,
                    regex: /console\.log\s*\(\s*\(\s*50\s*\*\s*2\s*\)\s*-\s*10\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Math Test

// Task 1: 10 plus 5
// TODO...

// Task 2: 100 divided by 4
// TODO...

// Task 3: (50 times 2) minus 10
// TODO...
`
                }
            ]
        },
        {
            id: 'js-0-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: String Formatting',
            duration: '20 min',
            content: `
# Lab 3: String Formatting

Sometimes we need to join words together. This is called **Concatenation**.
"Java" + "Script" = "JavaScript".

## The Mission
1.  **Join**: Combine "Web" + " " + "Development".
2.  **Mix**: Combine "Level: " + 1. (String + Number).

## Execution Logic
When you add a String and a Number, JavaScript converts the Number to a String.
\`"Level: " + 1\` -> \`"Level: " + "1"\` -> \`"Level: 1"\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Concat: Log "Web" + " " + "Development".',
                    completed: false,
                    regex: /console\.log\s*\(\s*["']Web["']\s*\+\s*["']\s+["']\s*\+\s*["']Development["']\s*\)/
                },
                {
                    id: 2,
                    description: 'Mix: Log "Level: " + 1.',
                    completed: false,
                    regex: /console\.log\s*\(\s*["']Level:\s*["']\s*\+\s*1\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// String Builder

// Task 1: "Web Development"
// TODO...

// Task 2: "Level: 1"
// TODO...
`
                }
            ]
        },
        {
            id: 'js-0-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: System Diagnostics',
            duration: '25 min',
            content: `
# Lab 4: System Diagnostics

You are writing the startup sequence for a Spaceship.
We need to test our different alert levels.

## The Mission
1.  **Info**: Log "Systems coming online...".
2.  **Warn**: Warn "Fuel levels low (15%)".
3.  **Error**: Error "Engine 3 connection failed!".

## Visual Distinction
In the browser console:
*   **Log**: White/Black text.
*   **Warn**: Yellow background.
*   **Error**: Red background + Stack Trace.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Status: Use console.log for "Systems coming online...".',
                    completed: false,
                    regex: /console\.log\s*\(\s*["']Systems coming online\.\.\.["']\s*\)/
                },
                {
                    id: 2,
                    description: 'Warning: Use console.warn for "Fuel levels low (15%)".',
                    completed: false,
                    regex: /console\.warn\s*\(\s*["']Fuel levels low \(15%\)["']\s*\)/
                },
                {
                    id: 3,
                    description: 'Critical: Use console.error for "Engine 3 connection failed!".',
                    completed: false,
                    regex: /console\.error\s*\(\s*["']Engine 3 connection failed!["']\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Spaceship Diagnostics Module

// Task 1: Normal Status
// TODO...

// Task 2: Fuel Warning
// TODO...

// Task 3: Engine Error
// TODO...
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-0-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Spark Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'If HTML is the "Bones", and CSS is the "Skin", what is JavaScript?',
                    options: [
                        'The Brain & Nervous System',
                        'The Clothes',
                        'The Soul',
                        'The Database'
                    ],
                    correctIndex: 0,
                    explanation: 'JavaScript provides the logic, reaction, and behavior of the application.'
                },
                {
                    id: 'q2',
                    question: 'What is "V8"?',
                    options: [
                        'A car engine',
                        'A tomato juice',
                        'The name of the JavaScript Engine inside Google Chrome',
                        'A syntax error'
                    ],
                    correctIndex: 2,
                    explanation: 'V8 is the open-source high-performance engine that powers Chrome and Node.js.'
                },
                {
                    id: 'q3',
                    question: 'Which console command should be used for a critical failure (like a crash)?',
                    options: [
                        'console.log',
                        'console.alert',
                        'console.warn',
                        'console.error'
                    ],
                    correctIndex: 3,
                    explanation: 'console.error provides distinct visual styling (Red) and often includes a stack trace.'
                },
                {
                    id: 'q4',
                    question: 'JavaScript is "Single Threaded". What does this mean?',
                    options: [
                        'It is very thin',
                        'It can only execute one command at a time (One brain)',
                        'It uses sewing threads',
                        'It runs on one computer only'
                    ],
                    correctIndex: 1,
                    explanation: 'JS has a single call stack. Heavy computations can block the main thread and freeze the UI.'
                },
                {
                    id: 'q5',
                    question: 'What is the result of adding "10" (String) + 10 (Number)?',
                    options: [
                        '20',
                        '1010',
                        'Error',
                        'undefined'
                    ],
                    correctIndex: 1,
                    explanation: 'JavaScript performs type coercion, converting the number to a string and concatenating them.'
                }
            ]
        }
    ]
};
