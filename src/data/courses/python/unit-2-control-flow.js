import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2ControlFlow = {
    id: 'py-unit-2',
    title: 'Control Flow',
    description: 'Master logic with If/Else, Loops, and Comparison Operators.',
    items: [
        {
            id: 'py-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Comparisons',
            duration: '10 min read',
            content: `
# Comparison Operators

- \`==\`: Equal to
- \`!=\`: Not equal to
- \`>\`: Greater than
- \`<\`: Less than
- \`>=\`: Greater or equal
- \`<=\`: Less or equal

Result is always a **boolean**.
            `
        },
        {
            id: 'py-2-2',
            type: CONTENT_TYPES.LESSON,
            title: 'If / Else',
            duration: '20 min',
            content: `
# If Statements

Control what code runs based on conditions. Note the **colon** and **indentation**.

\`\`\`python
if age >= 18:
    print("Adult")
else:
    print("Minor")
\`\`\`

---

## Your Mission
1. Variable \`score\` = 85.
2. If score > 50, print "Pass".
3. Else, print "Fail".
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define score',
                    completed: false,
                    regex: /score\s*=\s*85/
                },
                {
                    id: 2,
                    description: 'If condition',
                    completed: false,
                    regex: /if\s+score\s*>\s*50:/
                },
                {
                    id: 3,
                    description: 'Else block',
                    completed: false,
                    regex: /else:/
                }
            ],
            files: [
                {
                    name: 'logic.py',
                    language: 'python',
                    content: `score = 85
# Write if/else here`
                }
            ]
        },
        {
            id: 'py-2-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Logical Operators',
            duration: '10 min read',
            content: `
# Logic

Combine conditions with English words (no \`&&\` or \`||\` here!).

- **and**: Both must be true.
- **or**: At least one must be true.
- **not**: Inverts the boolean.

\`\`\`python
if is_weekend and not is_raining:
    print("Go outside")
\`\`\`
            `
        },
        {
            id: 'py-2-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Complex Logic',
            duration: '20 min',
            content: `
# Access Control

Simulate a login check.

---

## Your Mission
1. \`admin\` = True, \`logged_in\` = True.
2. If \`admin and logged_in\`, print "Access Granted".
3. Else, print "Access Denied".
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Variables defined',
                    completed: false,
                    regex: /admin\s*=\s*True/
                },
                {
                    id: 2,
                    description: 'Check both conditions',
                    completed: false,
                    regex: /if\s+admin\s+and\s+logged_in:/
                },
                {
                    id: 3,
                    description: 'Print Access Granted',
                    completed: false,
                    regex: /print\s*\(\s*['"]Access Granted['"]\s*\)/
                }
            ],
            files: [
                {
                    name: 'auth.py',
                    language: 'python',
                    content: `admin = True
logged_in = True
`
                }
            ]
        },
        {
            id: 'py-2-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'While Loops',
            duration: '15 min read',
            content: `
# While Loops

Run code **while** a condition is true.

\`\`\`python
count = 5
while count > 0:
    print(count)
    count = count - 1  # Or count -= 1
\`\`\`

**Warning**: Avoid infinite loops (loops that never become False)!
            `
        },
        {
            id: 'py-2-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Counting Down',
            duration: '20 min',
            content: `
# Rocket Launch

Create a countdown loop.

---

## Your Mission
1. \`t_minus\` starts at 10.
2. While \`t_minus\` > 0, print the number.
3. Decrement \`t_minus\` by 1 each time.
4. After loop, print "Blastoff!".
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Initialize t_minus',
                    completed: false,
                    regex: /t_minus\s*=\s*10/
                },
                {
                    id: 2,
                    description: 'While loop',
                    completed: false,
                    regex: /while\s+t_minus\s*>\s*0:/
                },
                {
                    id: 3,
                    description: 'Decrement',
                    completed: false,
                    regex: /t_minus\s*-=\s*1|t_minus\s*=\s*t_minus\s*-\s*1/
                },
                {
                    id: 4,
                    description: 'Blastoff outside loop',
                    completed: false,
                    regex: /print\s*\(\s*['"]Blastoff!['"]\s*\)/
                }
            ],
            files: [
                {
                    name: 'launch.py',
                    language: 'python',
                    content: `t_minus = 10
`
                }
            ]
        },
        {
            id: 'py-2-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'For Loops & Range',
            duration: '15 min read',
            content: `
# For Loops

Iterate over a sequence.

## The \`range()\` Function
Generates numbers.
- \`range(5)\`: 0, 1, 2, 3, 4 (Stops BEFORE 5)
- \`range(1, 4)\`: 1, 2, 3

\`\`\`python
for i in range(3):
    print(f"Loop {i}")
\`\`\`
            `
        },
        {
            id: 'py-2-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Summing Numbers',
            duration: '20 min',
            content: `
# Aggregation

Calculate the sum of numbers from 1 to 5 using a loop.

---

## Your Mission
1. \`total\` = 0.
2. Loop \`i\` in \`range(1, 6)\` (so it includes 5).
3. Add \`i\` to \`total\`.
4. Print \`total\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Initialize total',
                    completed: false,
                    regex: /total\s*=\s*0/
                },
                {
                    id: 2,
                    description: 'Range includes 5',
                    completed: false,
                    regex: /range\s*\(\s*1\s*,\s*6\s*\)/
                },
                {
                    id: 3,
                    description: 'Add to total',
                    completed: false,
                    regex: /total\s*\+=\s*i/
                }
            ],
            files: [
                {
                    name: 'sum.py',
                    language: 'python',
                    content: `total = 0
`
                }
            ]
        },
        {
            id: 'py-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Control Flow Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the "Not Equal" operator?',
                    options: ['<>', '!=', '!==', 'not ='],
                    correctIndex: 1,
                    explanation: '`!=` checks if two values are not equal.'
                },
                {
                    id: 'q2',
                    question: 'What series does range(3) generate?',
                    options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'],
                    correctIndex: 1,
                    explanation: '`range(n)` starts at 0 and goes up to n-1.'
                },
                {
                    id: 'q3',
                    question: 'Which keyword stops a loop immediately?',
                    options: ['stop', 'exit', 'break', 'return'],
                    correctIndex: 2,
                    explanation: '`break` exits the nearest enclosing loop.'
                }
            ]
        }
    ]
};
