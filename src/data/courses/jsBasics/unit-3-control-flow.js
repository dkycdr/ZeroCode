import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3ControlFlow = {
    id: 'js-unit-3',
    title: 'Control Flow - The Traffic Policeman',
    description: 'Code shouldn\'t just run straight down. Learn to branch left or right using If, Else, Switch, and Ternary.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Fork in the Road 🍴',
            duration: '20 min read',
            content: `
# Deep Dive: The Fork in the Road 🍴

## Linear vs Non-Linear

*   **Linear**: Code runs Line 1 -> Line 2 -> Line 3.
*   **Branching**: Code runs Line 1. Checks condition. Maybe jumps to Line 50.

## The "If" Statement

\`\`\`javascript
if (isHungry) {
   eat();
} else {
   work();
}
\`\`\`

The code inside the \`{ ... }\` block is **Conditional Code**. It might never run.

## Machine Logic
The CPU checks the "Condition" inside \`()\`.
*   If **True**: Jump INSIDE the block.
*   If **False**: Jump OVER the block.
            `
        },
        {
            id: 'js-3-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Truthy & Falsy 👻',
            duration: '25 min read',
            content: `
# Deep Dive: Truthy & Falsy 👻

JavaScript tries to be helpful. Even if you don't use a real Boolean (\`true/false\`), it tries to guess.

## The 6 Falsy Values
If you put these in an \`if()\`, they count as **False**.
1.  \`false\`
2.  \`0\` (Zero)
3.  \`""\` (Empty String)
4.  \`null\`
5.  \`undefined\`
6.  \`NaN\` (Not a Number)

## Everything else is Truthy
*   \`"0"\` (String with zero) -> **True**!
*   \`[]\` (Empty Array) -> **True**!
*   \`{}\` (Empty Object) -> **True**!
*   \`-1\` (Negative Number) -> **True**!

**Senior Warning**: Be careful checking \`if (score)\`. If score is 0, it fails, even though 0 might be a valid score.
            `
        },
        {
            id: 'js-3-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Switch Statement 🎛️',
            duration: '20 min read',
            content: `
# Deep Dive: The Switch Statement 🎛️

If you have 20 conditions, writing 20 \`else if\` blocks is messy.
The \`switch\` is designed for "Pattern Matching".

\`\`\`javascript
switch(role) {
    case "ADMIN":
        grantAccess();
        break;
    case "USER":
        limitAccess();
        break;
    default:
        kickOut();
}
\`\`\`

## The "Break" Keyword
Critical! If you forget \`break\`, the code **Falls Through**.
It will execute the Admin code AND the User code.
            `
        },
        {
            id: 'js-3-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Ternary Operator ⚡',
            duration: '15 min read',
            content: `
# Deep Dive: The Ternary Operator ⚡

This is the only operator with 3 parts.
It is an inline \`if/else\`.

## Anatomy
\`condition ? value_if_true : value_if_false\`

## Example
\`\`\`javascript
let type = (age >= 18) ? "Adult" : "Child";
\`\`\`

## Use Cases
*   Great for assigning variables.
*   Great for React Conditional Rendering.
*   **Bad** for complex logic. Don't nest them!
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Bouncer',
            duration: '20 min',
            content: `
# Lab 1: The Bouncer

Simple Age Check.

## The Mission
1.  Variable: \`age = 15\`.
2.  If \`age < 18\`, log "Too young".
3.  Else, log "Welcome".

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Check: if (age < 18) log "Too young".',
                    completed: false,
                    regex: /if\s*\(\s*age\s*<\s*18\s*\)\s*\{[\s\S]*?console\.log\s*\(\s*["']Too young["']\s*\)/
                },
                {
                    id: 2,
                    description: 'Else: log "Welcome".',
                    completed: false,
                    regex: /else\s*\{[\s\S]*?console\.log\s*\(\s*["']Welcome["']\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `let age = 15;

// TODO: Logic
`
                }
            ]
        },
        {
            id: 'js-3-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Traffic Light',
            duration: '25 min',
            content: `
# Lab 2: The Traffic Light

Multiple conditions.

## The Mission
1.  Variable \`light = "yellow"\`.
2.  If green -> "Go".
3.  Else If yellow -> "Slow".
4.  Else (red) -> "Stop".

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Green: If light is "green", log "Go".',
                    completed: false,
                    regex: /if\s*\(\s*light\s*===\s*["']green["']\s*\)/
                },
                {
                    id: 2,
                    description: 'Yellow: Else If light is "yellow", log "Slow".',
                    completed: false,
                    regex: /else\s+if\s*\(\s*light\s*===\s*["']yellow["']\s*\)/
                },
                {
                    id: 3,
                    description: 'Red: Else log "Stop".',
                    completed: false,
                    regex: /else\s*\{[\s\S]*?Stop/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `let light = "yellow";

// TODO: Traffic Logic
`
                }
            ]
        },
        {
            id: 'js-3-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Menu (Switch)',
            duration: '25 min',
            content: `
# Lab 3: The Menu (Switch)

Handle a user selection.

## The Mission
1.  Switch on \`option\`.
2.  Case 1: Log "Start". Break.
3.  Case 2: Log "Settings". Break.
4.  Default: Log "Invalid".

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Switch: Start switch statement on "option".',
                    completed: false,
                    regex: /switch\s*\(\s*option\s*\)/
                },
                {
                    id: 2,
                    description: 'Case 1: log "Start" and break.',
                    completed: false,
                    regex: /case\s*1\s*:[\s\S]*?Start[\s\S]*?break/
                },
                {
                    id: 3,
                    description: 'Case 2: log "Settings" and break.',
                    completed: false,
                    regex: /case\s*2\s*:[\s\S]*?Settings[\s\S]*?break/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `let option = 1;

// TODO: Switch
`
                }
            ]
        },
        {
            id: 'js-3-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Quick Mode (Ternary)',
            duration: '15 min',
            content: `
# Lab 4: Quick Mode (Ternary)

Assign a variable in one line.

## The Mission
1.  Variable \`isOnline = true\`.
2.  Create \`status\`.
3.  If online, "Connected". Else "Offline".
4.  Use Ternary \`?\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Ternary: const status = isOnline ? "Connected" : "Offline".',
                    completed: false,
                    regex: /const\s+status\s*=\s*isOnline\s*\?\s*["']Connected["']\s*:\s*["']Offline["']/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `let isOnline = true;

// TODO: Define status
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Flow Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which of the following values is "Falsy"?',
                    options: [
                        '"0" (String)',
                        '0 (Number)',
                        '[] (Array)',
                        '-1 (Number)'
                    ],
                    correctIndex: 1,
                    explanation: 'The number 0 is Falsy. The String "0" is Truthy!'
                },
                {
                    id: 'q2',
                    question: 'What happens if you forget "break" in a switch statement?',
                    options: [
                        'Syntax Error',
                        'It executes the next case automatically (Fallthrough)',
                        'It stops',
                        'It restarts'
                    ],
                    correctIndex: 1,
                    explanation: 'Fallthrough is a common bug where multiple cases execute unintentionally.'
                },
                {
                    id: 'q3',
                    question: 'What is the syntax for Ternary?',
                    options: [
                        'if ? then : else',
                        'condition ? trueVal : falseVal',
                        'condition : trueVal ? falseVal',
                        'check ? result'
                    ],
                    correctIndex: 1,
                    explanation: 'Condition ? IfTrue : IfFalse.'
                },
                {
                    id: 'q4',
                    question: 'Can you nest "if" statements?',
                    options: [
                        'Yes',
                        'No',
                        'Only 2 levels deep',
                        'Only in functions'
                    ],
                    correctIndex: 0,
                    explanation: 'Yes, but be careful. Too much nesting creates "The Pyramid of Doom" which is hard to read.'
                },
                {
                    id: 'q5',
                    question: 'Does "else" require a condition?',
                    options: [
                        'Yes',
                        'No',
                        'Sometimes',
                        'Only if using else if'
                    ],
                    correctIndex: 1,
                    explanation: 'Else is the "Catch All". If nothing above was true, Else runs.'
                }
            ]
        }
    ]
};
