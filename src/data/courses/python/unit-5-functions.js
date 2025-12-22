import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Functions = {
    id: 'py-unit-5',
    title: 'Functions & Modules',
    description: 'Write reusable logic with Functions and organize code with Modules.',
    items: [
        {
            id: 'py-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Defining Functions',
            duration: '10 min read',
            content: `
# Functions

Use \`def\` keyword.

\`\`\`python
def greet(name):
    return f"Hello, {name}"

msg = greet("Alice")
\`\`\`
            `
        },
        {
            id: 'py-5-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Area Calculator',
            duration: '20 min',
            content: `
# Rectangle Area

Write a function to calculate area.

---

## Your Mission
1. Define function \`area(w, h)\`.
2. Return \`w * h\`.
3. Call it with \`10, 5\` and print results.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define function',
                    completed: false,
                    regex: /def\s+area\s*\(\s*w\s*,\s*h\s*\):/
                },
                {
                    id: 2,
                    description: 'Return product',
                    completed: false,
                    regex: /return\s+w\s*\*\s*h/
                },
                {
                    id: 3,
                    description: 'Call and print',
                    completed: false,
                    regex: /print\s*\(\s*area\s*\(\s*10\s*,\s*5\s*\)\s*\)/
                }
            ],
            files: [
                {
                    name: 'calc.py',
                    language: 'python',
                    content: `# Define function area`
                }
            ]
        },
        {
            id: 'py-5-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Scope',
            duration: '15 min read',
            content: `
# Variable Scope

- **Local**: Defined inside a function. Only visible there.
- **Global**: Defined at top level. Visible everywhere.

\`\`\`python
x = 10 # Global

def test():
    y = 5 # Local
    print(x) # Works
    
print(y) # Error!
\`\`\`
            `
        },
        {
            id: 'py-5-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Scope Practice',
            duration: '15 min',
            content: `
# Local Variables

Prove that local variables are isolated.

---

## Your Mission
1. Define function \`secret()\`.
2. Inside, define \`code = 1234\`.
3. Try to print \`code\` **outside** the function (it will error, which is expected/simulated).
*Wait, to pass the test, simply define the function correctly.*
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define secret function',
                    completed: false,
                    regex: /def\s+secret\(\):/
                },
                {
                    id: 2,
                    description: 'Define local code',
                    completed: false,
                    regex: /code\s*=\s*1234/
                }
            ],
            files: [
                {
                    name: 'scope.py',
                    language: 'python',
                    content: `# Scope Test`
                }
            ]
        },
        {
            id: 'py-5-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Modules',
            duration: '15 min read',
            content: `
# Importing Modules

Python has a "Batteries Included" standard library.

\`\`\`python
import math
print(math.sqrt(16)) # 4.0

import random
print(random.randint(1, 10))
\`\`\`
            `
        },
        {
            id: 'py-5-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Random Number',
            duration: '15 min',
            content: `
# Dice Roll

Simulate a dice roll.

---

## Your Mission
1. \`import random\`.
2. Generate random int between 1 and 6 using \`randint\`.
3. Print it.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import random',
                    completed: false,
                    regex: /import\s+random/
                },
                {
                    id: 2,
                    description: 'Use randint(1, 6)',
                    completed: false,
                    regex: /random\.randint\s*\(\s*1\s*,\s*6\s*\)/
                },
                {
                    id: 3,
                    description: 'Print result',
                    completed: false,
                    regex: /print/
                }
            ],
            files: [
                {
                    name: 'dice.py',
                    language: 'python',
                    content: `# Dice Roll`
                }
            ]
        },
        {
            id: 'py-5-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Lambda Functions',
            duration: '10 min read',
            content: `
# Lambdas

Small, anonymous functions. One line only.

\`\`\`python
square = lambda x: x * x
print(square(5)) # 25
\`\`\`
            `
        },
        {
            id: 'py-5-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Sorting with Lambda',
            duration: '20 min',
            content: `
# Custom Sort

Sort a list of points based on the **Y** value (the second number).

---

## Your Mission
1. \`points = [(1, 9), (2, 5), (3, 1)]\`.
2. \`points.sort(key=lambda p: p[1])\`.
3. Print \`points\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define points',
                    completed: false,
                    regex: /points\s*=\s*\[.*\]/
                },
                {
                    id: 2,
                    description: 'Sort with lambda key',
                    completed: false,
                    regex: /sort\s*\(\s*key\s*=\s*lambda\s+p\s*:\s*p\[1\]\s*\)/
                },
                {
                    id: 3,
                    description: 'Print sorted',
                    completed: false,
                    regex: /print\s*\(\s*points\s*\)/
                }
            ],
            files: [
                {
                    name: 'sort.py',
                    language: 'python',
                    content: `points = [(1, 9), (2, 5), (3, 1)]
# Sort by Y value`
                }
            ]
        },
        {
            id: 'py-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Functions Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which keyword defines a function?',
                    options: ['function', 'def', 'func', 'define'],
                    correctIndex: 1,
                    explanation: '`def` is short for define.'
                },
                {
                    id: 'q2',
                    question: 'What is a lambda?',
                    options: ['A module', 'A variable', 'An anonymous single-line function', 'A loop'],
                    correctIndex: 2,
                    explanation: 'Lambdas are concise functions used for short operations like sorting keys.'
                },
                {
                    id: 'q3',
                    question: 'How do you generate a random number?',
                    options: ['Math.random()', 'random.rand()', 'import random; random.randint()', 'randint()'],
                    correctIndex: 2,
                    explanation: 'You must import the `random` module first.'
                }
            ]
        }
    ]
};
