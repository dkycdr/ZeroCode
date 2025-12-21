import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1VariablesDataTypes = {
    id: 'js-unit-1',
    title: 'Variables & Data Types - The Memory',
    description: 'Computers need to remember things. Learn how to store data in the Random Access Memory (RAM).',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Warehouse (RAM) 📦',
            duration: '20 min read',
            content: `
# Deep Dive: The Warehouse (RAM) 📦

## The Memory Palace

Imagine your computer's RAM as a massive Amazon Warehouse.
It has billions of shelves. Each shelf has a unique address (e.g., \`0x001\`).

When you write:
\`\`\`javascript
let age = 25;
\`\`\`

Here is what the Engine does:
1.  **Request**: "I need a box."
2.  **Label**: "Label this box 'age'."
3.  **Store**: "Put the number '25' inside it."
4.  **Reference**: In the future, when I ask for 'age', go find this specific box and tell me what is inside.

---

## 2. Declaration vs Assignment

*   **Declaration (Creating the Box)**: \`let age;\`
    *   The box exists, but it is empty (\`undefined\`).
*   **Assignment (Filling the Box)**: \`age = 25;\`
    *   Now it has a value.
*   **Initialization (Both)**: \`let age = 25;\`

---

## 3. Dynamic Typing (The Magic Box)
In languages like C++ or Java, a box is strictly shaped. A "Circle Box" cannot hold a "Square".
In JavaScript, variables are **Dynamic**.
*   You can put a Number in \`age\`.
*   Later, you can throw that out and put a String in \`age\`.
*   *Note: Just because you can, doesn't mean you should.*
            `
        },
        {
            id: 'js-1-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Var vs Let vs Const 🛡️',
            duration: '25 min read',
            content: `
# Deep Dive: Var vs Let vs Const 🛡️

## The History Lesson

*   **1995 - 2015 (\`var\`)**: The Wild West.
    *   \`var\` variables could be re-declared.
    *   They "leaked" out of if-statements.
    *   They caused millions of bugs.
*   **2015+ (\`let\` & \`const\`)**: Modern civilization.

---

## The Modern Standards

### 1. const (The Vault)
**Always default to \`const\`.**
*   It creates a **Read-Only** reference.
*   Once you set it, you cannot point it to something else.
*   It protects you from accidentally overwriting important data (like Math.PI or UserID).

### 2. let (The Backpack)
Use \`let\` ONLY when you know the value needs to change.
*   Counters (\`i++\`).
*   Scores (\`score = score + 10\`).
*   Toggles (\`isOpen = true\`).

### 3. var (The Zombie)
**Never use \`var\`.** It is kept in the language only so that websites built in 1999 still work.

---

## Scope Visualization
*   \`var\` ignores blocks \`{ ... }\`. It walks through walls.
*   \`let/const\` respect blocks. They stay inside their room.
            `
        },
        {
            id: 'js-1-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Primitive Types 🧬',
            duration: '20 min read',
            content: `
# Deep Dive: Primitive Types 🧬

JavaScript has 7 "Primitive" types. These are the atoms of the language. They are immutable (cannot be changed, only replaced).

## The Big 3
1.  **String**: Text. \`"Hello"\`.
2.  **Number**: Mathematics. \`10\`, \`3.14\`, \`-5\`. (JS only has one Number type, no separate Integers vs Floats).
3.  **Boolean**: Logic. \`true\` or \`false\`.

## The Empty Ones
4.  **Undefined**: The "Natural" empty. You created a variable but gave it no value.
5.  **Null**: The "Intentional" empty. You explicitly said: "This variable should be empty."

## The Weird Ones
6.  **Symbol**: Unique identifiers (Advanced).
7.  **BigInt**: Massive numbers for crypto/science (e.g. \`9007199254740991n\`).

---

## Everything else is an Object
Arrays, Functions, Dates... they are all Objects. We will cover them later.
            `
        },
        {
            id: 'js-1-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Template Literals 📜',
            duration: '15 min read',
            content: `
# Deep Dive: Template Literals 📜

## The Old Way (Concatenation)
Before 2015, adding variables to strings was a nightmare of plus signs and quotes:
\`\`\`javascript
var msg = "Hello " + firstName + ", you have " + points + " points.";
\`\`\`
It is hard to read and easy to break.

## The Modern Way (Interpolation)
We now use **Backticks** (\` \`).
Inside backticks, we can inject JS expressions using \`\${ ... }\`.
\`\`\`javascript
const msg = \`Hello \${firstName}, you have \${points} points.\`;
\`\`\`

## Bonus Power: Multi-line
Backticks also support multi-line strings without needing \`\\n\`.
\`\`\`javascript
const menu = \`
    1. Start
    2. Options
    3. Quit
\`;
\`\`\`
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Identity',
            duration: '20 min',
            content: `
# Lab 1: The Identity

We are building a User Registration system.
Some data is permanent (ID), other data is temporary (Draft Username).

## The Mission
1.  **Permanent**: Create a \`const\` variable \`userId\` with value \`101\`.
2.  **Temporary**: Create a \`let\` variable \`username\` with value \`"Guest"\`.

## Rules
*   Use \`const\` for IDs.
*   Use \`let\` for names.
*   Do NOT use \`var\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'ID: Create const "userId" = 101.',
                    completed: false,
                    regex: /const\s+userId\s*=\s*101/
                },
                {
                    id: 2,
                    description: 'User: Create let "username" = "Guest".',
                    completed: false,
                    regex: /let\s+username\s*=\s*["']Guest["']/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Registration Module

// Task 1: Create ID
// TODO...

// Task 2: Create Username
// TODO...
`
                }
            ]
        },
        {
            id: 'js-1-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Mutation',
            duration: '20 min',
            content: `
# Lab 2: The Mutation

The user has decided to sign up. We need to update their username.

## The Mission
1.  **Reassign**: Change the value of \`username\` to \`"Neo"\`. (Do not use \`let\` again, just the name).
2.  **Verify**: Log the new username.

## Common Pitfall
\`let username = "Neo"\` (Wrong).
This attempts to create a *new* variable with the same name. You just want to update the existing box.
Use \`username = "Neo"\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Update: Reassign variable "username" to "Neo".',
                    completed: false,
                    regex: /^username\s*=\s*["']Neo["']/m
                },
                {
                    id: 2,
                    description: 'Log: Print "username" to console.',
                    completed: false,
                    regex: /console\.log\s*\(\s*username\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `let username = "Guest";

// Task 1: Change to "Neo"
// TODO...

// Task 2: Log it
// TODO...
`
                }
            ]
        },
        {
            id: 'js-1-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Fail Safe',
            duration: '15 min',
            content: `
# Lab 3: The Fail Safe

Let's test the protection of \`const\`.
We have a \`serverUrl\` that must never change.

## The Mission
1.  **Declare**: \`const serverUrl = "google.com"\`.
2.  **Experiment**: Try to change it to \`"yahoo.com"\` and observe the crash.
3.  **Fix**: Comment out the crashing line so the code can run.

*Note: In this lab, we just write the declaration.*

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Declare: const serverUrl = "google.com".',
                    completed: false,
                    regex: /const\s+serverUrl\s*=\s*["']google\.com["']/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Configuration

// Task 1: Define Server
// TODO...

// serverUrl = "yahoo.com"; // This would crash!
`
                }
            ]
        },
        {
            id: 'js-1-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Dynamic String',
            duration: '25 min',
            content: `
# Lab 4: The Dynamic String

We need to generate a Welcome Email.
We have \`name\`, \`coins\`, and \`rank\`.

## The Mission
1.  **Declare**: \`name="Neo"\`, \`coins=10\`, \`rank="Novice"\`.
2.  **Template**: Create a string \`message\` using backticks.
    *   "Welcome Neo. Rank: Novice. Gold: 10."

## Syntax
\`\`\`javascript
\`Welcome \${name}.\`
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Setup: Create variables name (Neo), coins (10), rank (Novice).',
                    completed: false,
                    regex: /Neo[\s\S]*10[\s\S]*Novice/
                },
                {
                    id: 2,
                    description: 'Template: Create "const message" using backticks and ${} injection.',
                    completed: false,
                    regex: /const\s+message\s*=\s*`[\s\S]*\${name}[\s\S]*\${rank}[\s\S]*\${coins}[\s\S]*`/
                },
                {
                    id: 3,
                    description: 'Log: Print the message.',
                    completed: false,
                    regex: /console\.log\s*\(\s*message\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Email Generator

// Task 1: Variables
// TODO...

// Task 2: Create Message (Template Literal)
// TODO...

// Task 3: Send (Log)
// TODO...
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Memory Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which keyword should you use by DEFAULT in modern JavaScript?',
                    options: [
                        'val',
                        'var',
                        'let',
                        'const'
                    ],
                    correctIndex: 3,
                    explanation: 'Const is the safest. It guarantees the reference won\'t change. Use let only if you MUST change it.'
                },
                {
                    id: 'q2',
                    question: 'What happens if you try to reassign a "const" variable?',
                    options: [
                        'It updates successfully',
                        'It logs a warning',
                        'It throws a TypeError and crashes',
                        'It creates a copy'
                    ],
                    correctIndex: 2,
                    explanation: 'The engine enforces the immutability of the binding.'
                },
                {
                    id: 'q3',
                    question: 'What is the value of: let x; ?',
                    options: [
                        '0',
                        'null',
                        'undefined',
                        'false'
                    ],
                    correctIndex: 2,
                    explanation: 'An uninitialized variable is "undefined". The box is empty.'
                },
                {
                    id: 'q4',
                    question: 'Which is a valid Template Literal?',
                    options: [
                        '"Hello ${name}"',
                        "'Hello ${name}'",
                        '`Hello ${name}`',
                        '(Hello ${name})'
                    ],
                    correctIndex: 2,
                    explanation: 'Only backticks (`) support the ${} interpolation syntax.'
                },
                {
                    id: 'q5',
                    question: 'Which of these is NOT a primitive type?',
                    options: [
                        'String',
                        'Boolean',
                        'Array',
                        'Number'
                    ],
                    correctIndex: 2,
                    explanation: 'Arrays are Objects. They are collections, not atoms.'
                }
            ]
        }
    ]
};
