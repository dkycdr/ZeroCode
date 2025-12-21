import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit10BestPractices = {
    id: 'js-unit-10',
    title: 'Best Practices - The Zen Master',
    description: 'Code is read more often than it is written. Learn clean code, naming conventions, and the "Early Return" pattern.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-10-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Coding for Humans 🧘',
            duration: '20 min read',
            content: `
# Deep Dive: Coding for Humans 🧘

## The Rule
**"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."** - Martin Fowler.

## 1. Naming is Hard (But Important)
*   **Bad**: \`let d = 10; // Days\`
*   **Good**: \`const daysUntilDeadline = 10;\`

## 2. Magic Numbers
Don't use raw numbers in logic.
*   **Bad**: \`if (status === 2)\`
*   **Good**:
    \`\`\`javascript
    const STATUS_ACTIVE = 2;
    if (status === STATUS_ACTIVE)
    \`\`\`
            `
        },
        {
            id: 'js-10-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Guard Clauses (Early Return) 🚪',
            duration: '25 min read',
            content: `
# Deep Dive: Guard Clauses (Early Return) 🚪

## The Pyramid of Doom
Nested if-statements are hard to read.

\`\`\`javascript
function login(user) {
    if (user) {
        if (user.isAdmin) {
            return "Success";
        }
    }
}
\`\`\`

## Flattening
Handle the **Negative Cases First**.

\`\`\`javascript
function login(user) {
    if (!user) return; // Guard 1
    if (!user.isAdmin) return; // Guard 2
    return "Success"; // Happy Path at root level
}
\`\`\`
            `
        },
        {
            id: 'js-10-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: DRY (Don\'t Repeat Yourself) 🧩',
            duration: '20 min read',
            content: `
# Deep Dive: DRY (Don't Repeat Yourself) 🧩

## The Smell
If you see the exact same 3 lines of code in two places, you have a problem.
If you need to change logic later, you have to change it in two places (and you will forget one).

## The Fix
Extract it into a Helper Function or a Variable.
*   **WET**: Write Everything Twice (Bad).
*   **DRY**: Don't Repeat Yourself (Good).
            `
        },
        {
            id: 'js-10-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Modern vs Legacy 🦖',
            duration: '15 min read',
            content: `
# Deep Dive: Modern vs Legacy 🦖

## Check yourself
1.  Are you using \`var\`? -> Switch to \`const\`.
2.  Are you using \`function()\` for simple logic? -> Switch to Arrows \`=>\`.
3.  Are you concatenating strings? -> Switch to Template Literals.
4.  Are you looping with \`for(i=0)\`? -> Switch to \`.map()\` or \`.forEach()\`.

Coding cleanliness evolves. Stay current.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-10-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Rename',
            duration: '20 min',
            content: `
# Lab 1: The Rename

Fix this messy code.

## The Mission
1.  Rename \`t\` to \`taxRate\`.
2.  Rename \`p\` to \`price\`.
3.  Make sure logic still works.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Rename: t -> taxRate.',
                    completed: false,
                    regex: /taxRate/
                },
                {
                    id: 2,
                    description: 'Rename: p -> price.',
                    completed: false,
                    regex: /price/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `let t = 0.1; // Rename me
let p = 100; // Rename me
console.log(p * t);
`
                }
            ]
        },
        {
            id: 'js-10-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Guard Clause',
            duration: '25 min',
            content: `
# Lab 2: The Guard Clause

Flatten the logic.

## The Mission
1.  Refactor \`checkAccess\`.
2.  If \`age < 18\`, return false immediately.
3.  Remove the \`else\` block.
4.  Return true at the end.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Guard: if (age < 18) return false.',
                    completed: false,
                    regex: /if\s*\(\s*age\s*<\s*18\s*\)\s*return\s+false/
                },
                {
                    id: 2,
                    description: 'Flat: return true (no else).',
                    completed: false,
                    regex: /^return\s+true/m
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `function checkAccess(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
`
                }
            ]
        },
        {
            id: 'js-10-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Modern Arrows',
            duration: '20 min',
            content: `
# Lab 3: Modern Arrows

Compress the code.

## The Mission
1.  Convert \`double\` function to a one-line Arrow.
2.  Use implicit return.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Arrow: const double = n => n * 2.',
                    completed: false,
                    regex: /const\s+double\s*=\s*\(?\s*n\s*\)?\s*=>\s*n\s*\*\s*2/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `function double(n) {
    return n * 2;
}
`
                }
            ]
        },
        {
            id: 'js-10-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Magic Numbers',
            duration: '25 min',
            content: `
# Lab 4: Magic Numbers

Clarify the context.

## The Mission
1.  Create \`const MAX_USERS = 5\`.
2.  Replace the definition \`5\` with the constant.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Constant: const MAX_USERS = 5.',
                    completed: false,
                    regex: /const\s+MAX_USERS\s*=\s*5/
                },
                {
                    id: 2,
                    description: 'Use: if (count > MAX_USERS).',
                    completed: false,
                    regex: /if\s*\(\s*count\s*>\s*MAX_USERS\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `let count = 6;
// What is 5?
if (count > 5) {
    console.log("Full");
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-10-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Zen Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is a "Magic Number"?',
                    options: [
                        'A lucky number',
                        'A hardcoded number in code with no context (e.g. 86400)',
                        'A memory address',
                        'A dynamic variable'
                    ],
                    correctIndex: 1,
                    explanation: 'Always assign numbers to named constants so people know WHAT they represent (e.g. SECONDS_IN_DAY).'
                },
                {
                    id: 'q2',
                    question: 'How does "Early Return" help?',
                    options: [
                        'It makes code faster',
                        'It reduces nesting indentation (The Arrow Shape) making code more readable',
                        'It creates bugs',
                        'It uses less memory'
                    ],
                    correctIndex: 1,
                    explanation: 'Flat code is better than nested code.'
                },
                {
                    id: 'q3',
                    question: 'What does DRY stand for?',
                    options: [
                        'Do Repeat Yourself',
                        'Don\'t Repeat Yourself',
                        'Data Run Yaml',
                        'Don\'t Run Yarn'
                    ],
                    correctIndex: 1,
                    explanation: 'Single Source of Truth. If logic changes, you update it in one place.'
                },
                {
                    id: 'q4',
                    question: 'Which variable name is best?',
                    options: [
                        'n',
                        'nm',
                        'userName',
                        's_name_str'
                    ],
                    correctIndex: 2,
                    explanation: 'CamelCase, descriptive but concise.'
                },
                {
                    id: 'q5',
                    question: 'Is concise code always better?',
                    options: [
                        'Yes, always',
                        'No, readability is more important than shortness',
                        'Only in Python',
                        'Only in CSS'
                    ],
                    correctIndex: 1,
                    explanation: 'Code Golf (shortest code possible) is fun, but bad for production. Find the balance.'
                }
            ]
        }
    ]
};
