import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2OperatorsExpressions = {
    id: 'js-unit-2',
    title: 'Operators & Expressions - The Calculator',
    description: 'Data is useless if you can\'t manipulate it. Master System Arithmetic, Comparison logic, and Type Coercion.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Expressions vs Statements 📐',
            duration: '20 min read',
            content: `
# Deep Dive: Expressions vs Statements 📐

To speak JavaScript fluent, you must understand the grammar.

## 1. Expressions (The Answer)
An **Expression** is any code that *boils down to a value*. If you can print it in \`console.log()\`, it's an expression.
*   \`5 + 5\` -> Evaluates to \`10\`.
*   \`"A" + "B"\` -> Evaluates to \`"AB"\`.
*   \`x > 10\` -> Evaluates to \`true\`.
*   \`user.age\` -> Evaluates to \`25\`.

## 2. Statements (The Command)
A **Statement** is an instruction to *do something*. It doesn't necessarily produce a value.
*   \`let x = 10;\` (Variable Declaration).
*   \`if (true) { ... }\` (Control Flow).
*   \`for (iter) { ... }\` (Loop).

**Rule**: You cannot put a Statement inside a variable.
\`let x = if (true) ...\` // Syntax Error!
            `
        },
        {
            id: 'js-2-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Modulo Operator (%) 🍕',
            duration: '15 min read',
            content: `
# Deep Dive: The Modulo Operator (%) 🍕

## The Remainder Tool
Everyone knows \`+\`, \`-\`, \`*\`, \`/\`.
The \`%\` (Modulo) operator produces the **Remainder** of a division.

### Visual Example
Imagine 10 coins. You divide them among 3 people.
*   Person 1 gets 3.
*   Person 2 gets 3.
*   Person 3 gets 3.
*   **Leftover**: 1 coin.
*   So: \`10 % 3 = 1\`.

### Use Cases
1.  **Even/Odd**:
    *   \`number % 2 === 0\` -> Even.
    *   \`number % 2 === 1\` -> Odd.
2.  **Cyclical Logic**:
    *   Traffic lights (0, 1, 2, 0, 1, 2...).
    *   \`currentStep % totalSteps\`.
            `
        },
        {
            id: 'js-2-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Equality Trap (== vs ===) ⚖️',
            duration: '25 min read',
            content: `
# Deep Dive: The Equality Trap (== vs ===) ⚖️

JavaScript has two judges.

## 1. Loose Equality (\`==\`) - The "Chill" Judge
This operator attempts to convert types before comparing (Type Coercion).
*   \`"5" == 5\` -> **True**.
*   \`false == 0\` -> **True**.
*   \`null == undefined\` -> **True**.

**Warning**: This "Chill" behavior creates unpredictable bugs. "Why is my string equal to zero?!"

## 2. Strict Equality (\`===\`) - The "Strict" Judge
This operator checks **Value** AND **Type**.
*   \`"5" === 5\` -> **False** (String is not Number).
*   \`false === 0\` -> **False** (Boolean is not Number).

**The Golden Rule**: Always, always use \`===\` and \`!==\`. Forget the other one exists.
            `
        },
        {
            id: 'js-2-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Logical Gates (&&, ||) 🚪',
            duration: '20 min read',
            content: `
# Deep Dive: Logical Gates (&&, ||) 🚪

## 1. AND (\`&&\`) - The Strict Guard
*   "I need ID **AND** Ticket."
*   If *either* is missing, the result is False.
*   \`true && true\` = **True**.
*   \`true && false\` = **False**.

## 2. OR (\`||\`) - The Optimist
*   "Cash **OR** Credit".
*   If *either* is present, the result is True.
*   \`false || true\` = **True**.
*   \`false || false\` = **False**.

## 3. NOT (\`!\`) - The Rebel
*   Flips the value.
*   \`!true\` = **False**.
*   \`!false\` = **True**.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Mathematician',
            duration: '20 min',
            content: `
# Lab 1: The Mathematician

We need to calculate expenses.

## The Mission
1.  **Add**: \`cost1\` (10) + \`cost2\` (20).
2.  **Multiply**: Result * 1.1 (Tax).
3.  **Round**: But wait, we haven't learned Objects yet. Just print the raw result.

## Challenge
Do it all in one expression variable \`total\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Setup: Create costs "c1=10" and "c2=20".',
                    completed: false,
                    regex: /c1\s*=\s*10[\s\S]*c2\s*=\s*20/
                },
                {
                    id: 2,
                    description: 'Calculate: const total = (c1 + c2) * 1.1',
                    completed: false,
                    regex: /const\s+total\s*=\s*\(\s*c1\s*\+\s*c2\s*\)\s*\*\s*1\.1/
                },
                {
                    id: 3,
                    description: 'Log: Print "total".',
                    completed: false,
                    regex: /console\.log\s*\(\s*total\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Invoice Calc
// TODO...
`
                }
            ]
        },
        {
            id: 'js-2-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Security Gate',
            duration: '25 min',
            content: `
# Lab 2: The Security Gate

We need to verify a user's password.

## The Mission
1.  **Store**: \`const password = "admin"\`.
2.  **Input**: \`const input = "admin"\`.
3.  **Check**: \`const isMatch = (password === input)\`.
4.  **Log**: Print the boolean result.

## Critical
Use Triple Equals (\`===\`).

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Variables: password "admin" and input "admin".',
                    completed: false,
                    regex: /password\s*=\s*["']admin["'][\s\S]*input\s*=\s*["']admin["']/
                },
                {
                    id: 2,
                    description: 'Compare: const isMatch = password === input.',
                    completed: false,
                    regex: /const\s+isMatch\s*=\s*password\s*===\s*input/
                },
                {
                    id: 3,
                    description: 'Log: Print "isMatch".',
                    completed: false,
                    regex: /console\.log\s*\(\s*isMatch\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Login logic
// TODO...
`
                }
            ]
        },
        {
            id: 'js-2-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Club Bouncer',
            duration: '25 min',
            content: `
# Lab 3: The Club Bouncer

We need to check ID AND Ticket.

## The Mission
1.  Variables: \`age = 20\`, \`hasTicket = true\`.
2.  Logic: \`const canEnter = (age >= 18) && (hasTicket === true)\`.
3.  Log the result.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Variables: age=20, hasTicket=true.',
                    completed: false,
                    regex: /age\s*=\s*20[\s\S]*hasTicket\s*=\s*true/
                },
                {
                    id: 2,
                    description: 'Logic: Check age >= 18 AND hasTicket.',
                    completed: false,
                    regex: /const\s+canEnter\s*=\s*age\s*>=\s*18\s*&&\s*hasTicket/
                },
                {
                    id: 3,
                    description: 'Log: Print "canEnter".',
                    completed: false,
                    regex: /console\.log\s*\(\s*canEnter\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Gate Logic
// TODO...
`
                }
            ]
        },
        {
            id: 'js-2-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Detective (Typeof)',
            duration: '20 min',
            content: `
# Lab 4: The Detective (Typeof)

Sometimes data comes in messy. We need to check what it is.

## The Mission
1.  Check the type of \`"Hello"\`.
2.  Check the type of \`123\`.
3.  Check the type of \`true\`.
4.  Log them all.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Log: typeof "Hello".',
                    completed: false,
                    regex: /console\.log\s*\(\s*typeof\s*["']Hello["']\s*\)/
                },
                {
                    id: 2,
                    description: 'Log: typeof 123.',
                    completed: false,
                    regex: /console\.log\s*\(\s*typeof\s*123\s*\)/
                },
                {
                    id: 3,
                    description: 'Log: typeof true.',
                    completed: false,
                    regex: /console\.log\s*\(\s*typeof\s*true\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Type Checking
// TODO...
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Operator Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the specific output of "5" == 5?',
                    options: [
                        'true',
                        'false',
                        'error',
                        'undefined'
                    ],
                    correctIndex: 0,
                    explanation: 'Double equals allows Type Coercion. The string is converted to a number, so they match.'
                },
                {
                    id: 'q2',
                    question: 'What is the specific output of "5" === 5?',
                    options: [
                        'true',
                        'false',
                        'error',
                        'depends on browser'
                    ],
                    correctIndex: 1,
                    explanation: 'Triple equals checks TYPE. String !== Number, so it returns false.'
                },
                {
                    id: 'q3',
                    question: 'What is the remainder of 10 % 3?',
                    options: [
                        '3.33',
                        '3',
                        '1',
                        '0'
                    ],
                    correctIndex: 2,
                    explanation: '10 / 3 = 3 with 1 left over.'
                },
                {
                    id: 'q4',
                    question: 'Which operator means "OR"?',
                    options: [
                        '&&',
                        '||',
                        '??',
                        '!!'
                    ],
                    correctIndex: 1,
                    explanation: '|| is the logical OR operator.'
                },
                {
                    id: 'q5',
                    question: 'What determines if something is an Expression?',
                    options: [
                        'It has a semicolon',
                        'It resolves to a value',
                        'It is long',
                        'It uses math'
                    ],
                    correctIndex: 1,
                    explanation: 'Expressions produce values (e.g. 1+1). Statements perform actions (e.g. loops).'
                }
            ]
        }
    ]
};
