import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Functions = {
    id: 'js-unit-4',
    title: 'Functions - The Factory Machine',
    description: 'Don\'t write the same code twice. Encapsulate logic in reusable machines. Master Arrow Functions, Scope, and Arguments.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Factory Machine 🏭',
            duration: '20 min read',
            content: `
# Deep Dive: The Factory Machine 🏭

## 1. Anatomy of the Machine
A function is a reusable block of code. Think of it as a Machine in a Factory.
*   **Input (Parameters)**: Raw materials (Wood, Nails).
*   **Body (Code)**: Processing logic (Hammering, Gluing).
*   **Output (Return)**: Final Product (Chair).

\`\`\`text
       +---------------+
Input->|   FUNCTION    |-> Output
       +---------------+
\`\`\`

## 2. DRY (Don't Repeat Yourself)
If you find yourself copy-pasting code, you are doing it wrong. Wrap it in a function.

## 3. The "Return" Keyword
When a function hits \`return\`, it **Stops**. Immediately.
It spits out the value to whoever called it.
If you don't return anything, it returns \`undefined\` by default.
            `
        },
        {
            id: 'js-4-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Scope (The Tinted Windows) 🕶️',
            duration: '25 min read',
            content: `
# Deep Dive: Scope (The Tinted Windows) 🕶️

## 1. Local Scope (The Bunker)
Variables created *inside* a function are **Private**.
The outside world cannot see them.
\`\`\`javascript
function secret() {
    let code = "1234";
}
console.log(code); // ERROR!
\`\`\`

## 2. Global Scope (The Sun)
Variables created *outside* are **Public**.
Functions can look OUT, but the outside cannot look IN.

## 3. The Scope Chain
When you ask for a variable, JS looks:
1.  **Local**: "Do I have it?"
2.  **Parent**: "Does my parent have it?"
3.  **Global**: "Is it in the global window?"
4.  **Error**: ReferenceError.
            `
        },
        {
            id: 'js-4-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Arrow Revolution (=>) 🏹',
            duration: '20 min read',
            content: `
# Deep Dive: The Arrow Revolution (=>) 🏹

## ES6 Syntax
In 2015, JavaScript got a facelift. The Arrow Function is the most popular feature.

### Old Way
\`\`\`javascript
const add = function(x, y) {
    return x + y;
};
\`\`\`

### New Way
\`\`\`javascript
const add = (x, y) => x + y;
\`\`\`

## Key Differences
1.  **Implicit Return**: If it's one line, you don't need \`{}\` or \`return\`. It just happens.
2.  **This Binding**: Arrow functions don't have their own \`this\`. They inherit it from the parent. (Crucial for React).
            `
        },
        {
            id: 'js-4-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: First Class Citizens 👑',
            duration: '20 min read',
            content: `
# Deep Dive: First Class Citizens 👑

In JavaScript, Functions are "First Class".
This means they are just **Values**, like Numbers or Strings.

## What you can do with them:
1.  Store them in variables.
2.  Pass them as arguments to *other* functions (Callbacks).
3.  Return them *from* other functions (Closures).

\`\`\`javascript
function run(action) {
    action(); // Executing the input!
}
\`\`\`
This feature enables the entire Event Driven architecture of the web.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Converter (Classic)',
            duration: '20 min',
            content: `
# Lab 1: The Converter (Classic)

We need a tool to convert temperature.

## The Mission
1.  Define a function \`toFahrenheit(c)\`.
2.  Formula: \`(c * 9/5) + 32\`.
3.  Return the result.
4.  Call it with 30 and log the result.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define: function toFahrenheit(c).',
                    completed: false,
                    regex: /function\s+toFahrenheit\s*\(\s*c\s*\)/
                },
                {
                    id: 2,
                    description: 'Return: return (c * 9/5) + 32.',
                    completed: false,
                    regex: /return\s*\(\s*c\s*\*\s*9\s*\/\s*5\s*\)\s*\+\s*32/
                },
                {
                    id: 3,
                    description: 'Call: Log toFahrenheit(30).',
                    completed: false,
                    regex: /console\.log\s*\(\s*toFahrenheit\s*\(\s*30\s*\)\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Temperature Converter
// TODO...
`
                }
            ]
        },
        {
            id: 'js-4-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Modern Syntax (Arrow)',
            duration: '20 min',
            content: `
# Lab 2: The Modern Syntax (Arrow)

Refactor the converter to use Arrow Syntax.

## The Mission
1.  Create \`const toCelsius\`.
2.  Use \`=>\` syntax.
3.  Make it a **One-Liner** (Implicit Return).
4.  Formula: \`(f - 32) * 5/9\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define: const toCelsius = (f) => ...',
                    completed: false,
                    regex: /const\s+toCelsius\s*=\s*\(?\s*f\s*\)?\s*=>/
                },
                {
                    id: 2,
                    description: 'Implicit: No curly braces {}. Simply (f - 32) * 5/9.',
                    completed: false,
                    regex: /=>\s*\(?\s*f\s*-\s*32\s*\)?\s*\*\s*5\s*\/\s*9/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// One Line Conversion
// TODO...
`
                }
            ]
        },
        {
            id: 'js-4-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Default Parameters',
            duration: '15 min',
            content: `
# Lab 3: Default Parameters

What if the user forgets to send data?

## The Mission
1.  Create \`function greet(name)\`.
2.  Set default for name = "Guest".
3.  Call \`greet("Neo")\` -> Hello Neo.
4.  Call \`greet()\` -> Hello Guest.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Default: function greet(name = "Guest").',
                    completed: false,
                    regex: /function\s+greet\s*\(\s*name\s*=\s*["']Guest["']\s*\)/
                },
                {
                    id: 2,
                    description: 'Log: "Hello " + name.',
                    completed: false,
                    regex: /console\.log\s*\(\s*["']Hello\s+["']\s*\+\s*name\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Greeter
// TODO...
`
                }
            ]
        },
        {
            id: 'js-4-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Scope Protection',
            duration: '25 min',
            content: `
# Lab 4: Scope Protection

Prove that variables are private.

## The Mission
1.  Global: \`let hero = "Batman"\`.
2.  Function: \`changeHero()\`.
3.  Inside: \`let hero = "Superman"\` (Shadowing).
4.  Log inside (Superman).
5.  Log outside (Batman).
This proves the inside variable did NOT overwrite the outside one.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Global: hero = "Batman".',
                    completed: false,
                    regex: /let\s+hero\s*=\s*["']Batman["']/
                },
                {
                    id: 2,
                    description: 'Shadow: Inside function, let hero = "Superman".',
                    completed: false,
                    regex: /function\s+changeHero[\s\S]*let\s+hero\s*=\s*["']Superman["']/
                },
                {
                    id: 3,
                    description: 'Verify: Log hero outside.',
                    completed: false,
                    regex: /changeHero\s*\(\s*\)[\s\S]*console\.log\s*\(\s*hero\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Scope Test
// TODO...
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Function Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is "Implicit Return"?',
                    options: [
                        'Returning undefined',
                        'When an Arrow Function returns a value without using the "return" keyword (One liner)',
                        'Returning null',
                        'A syntax error'
                    ],
                    correctIndex: 1,
                    explanation: 'Arrow functions like () => 5 automatically return 5.'
                },
                {
                    id: 'q2',
                    question: 'Can a function access variables defined outside of it?',
                    options: [
                        'Yes (Closure/Scope Chain)',
                        'No',
                        'Only if they are constant',
                        'Only if using var'
                    ],
                    correctIndex: 0,
                    explanation: 'Functions have access to their own scope, and all parent scopes up to the Global scope.'
                },
                {
                    id: 'q3',
                    question: 'What happens if you invoke a function "myFunc()" without passing required arguments?',
                    options: [
                        'The computer explodes',
                        'The arguments become "undefined"',
                        'The function is skipped',
                        'It waits for input'
                    ],
                    correctIndex: 1,
                    explanation: 'Missing arguments are undefined. This is why Default Parameters are useful.'
                },
                {
                    id: 'q4',
                    question: 'Which keyword creates a variable visible ONLY inside the block?',
                    options: [
                        'var',
                        'let / const',
                        'global',
                        'window'
                    ],
                    correctIndex: 1,
                    explanation: 'Let and Const are Block Scoped.'
                },
                {
                    id: 'q5',
                    question: 'What is a "Callback"?',
                    options: [
                        'A phone call',
                        'A function passed into another function as an argument, to be executed later',
                        'A return statement',
                        'A variable'
                    ],
                    correctIndex: 1,
                    explanation: 'Callbacks are the heart of async JS (e.g. onClick, setTimeout).'
                }
            ]
        }
    ]
};
