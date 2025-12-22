import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Lists = {
    id: 'py-unit-3',
    title: 'Data Structures: Lists',
    description: 'Manage collections of data using Lists (Arrays) and Tuples.',
    items: [
        {
            id: 'py-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Python Lists',
            duration: '10 min read',
            content: `
# Lists

Ordered, mutable collections. Equivalent to Arrays in other languages.

\`\`\`python
fruits = ["apple", "banana", "cherry"]
print(fruits[0]) # apple
\`\`\`

## Common Methods
- \`.append(item)\`: Add to end.
- \`.pop()\`: Remove from end.
- \`.remove(item)\`: Remove specific value.
            `
        },
        {
            id: 'py-3-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Managing a Todo List',
            duration: '20 min',
            content: `
# Todo List

Create and modify a list of tasks.

---

## Your Mission
1. Create list \`todos\` with "Sleep", "Eat".
2. Append "Code".
3. Print the **second** item (index 1).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create list',
                    completed: false,
                    regex: /todos\s*=\s*\[\s*['"]Sleep['"]\s*,\s*['"]Eat['"]\s*\]/
                },
                {
                    id: 2,
                    description: 'Append Code',
                    completed: false,
                    regex: /todos\.append\(\s*['"]Code['"]\s*\)/
                },
                {
                    id: 3,
                    description: 'Print index 1',
                    completed: false,
                    regex: /print\s*\(\s*todos\[1\]\s*\)/
                }
            ],
            files: [
                {
                    name: 'todos.py',
                    language: 'python',
                    content: `# List manipulation`
                }
            ]
        },
        {
            id: 'py-3-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Slicing Lists',
            duration: '15 min read',
            content: `
# Slicing

Extract parts of a list using \`[\start:end]\`.

\`\`\`python
nums = [0, 1, 2, 3, 4, 5]
print(nums[0:2]) # [0, 1] (Indices 0, 1)
print(nums[2:])  # [2, 3, 4, 5] (Index 2 to end)
print(nums[:-1]) # [0, 1, 2, 3, 4] (All except last)
\`\`\`
            `
        },
        {
            id: 'py-3-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Top 3 Scores',
            duration: '15 min',
            content: `
# Extracting Data

Get the top 3 scores from a sorted list.

---

## Your Mission
1. List \`scores\` is already provided.
2. Create \`top_three\` using slicing \`[:3]\`.
3. Print \`top_three\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Slice first 3',
                    completed: false,
                    regex: /top_three\s*=\s*scores\[:3\]/
                },
                {
                    id: 2,
                    description: 'Print result',
                    completed: false,
                    regex: /print\s*\(\s*top_three\s*\)/
                }
            ],
            files: [
                {
                    name: 'scores.py',
                    language: 'python',
                    content: `scores = [99, 95, 92, 88, 85, 70]
# Slice top 3`
                }
            ]
        },
        {
            id: 'py-3-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Tuples',
            duration: '10 min read',
            content: `
# Tuples

Tuples are **immutable** lists. Use parentheses \`()\`.
Once created, you cannot change them.

\`\`\`python
coords = (10, 20)
# coords[0] = 5  # ERROR!
\`\`\`
            `
        },
        {
            id: 'py-3-6',
            type: CONTENT_TYPES.LESSON,
            title: 'Using Tuples',
            duration: '15 min',
            content: `
# Coordinates

Store X and Y coordinates safely.

---

## Your Mission
1. Define tuple \`point\` = (5, 10).
2. Unpack it: \`x, y = point\`.
3. Print \`x\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define tuple',
                    completed: false,
                    regex: /point\s*=\s*\(\s*5\s*,\s*10\s*\)/
                },
                {
                    id: 2,
                    description: 'Unpack tuple',
                    completed: false,
                    regex: /x\s*,\s*y\s*=\s*point/
                },
                {
                    id: 3,
                    description: 'Print x',
                    completed: false,
                    regex: /print\s*\(\s*x\s*\)/
                }
            ],
            files: [
                {
                    name: 'coords.py',
                    language: 'python',
                    content: `# Tuples work`
                }
            ]
        },
        {
            id: 'py-3-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'List Comprehension',
            duration: '15 min read',
            content: `
# List Comprehension

The "Pythonic" concise way to create lists.
Syntax: \`[expression for item in list]\`

\`\`\`python
nums = [1, 2, 3]
squares = [x * x for x in nums] 
# Result: [1, 4, 9]
\`\`\`
            `
        },
        {
            id: 'py-3-8',
            type: CONTENT_TYPES.LESSON,
            title: 'Doubling Numbers',
            duration: '20 min',
            content: `
# One-Line Loops

Double every number in the list using comprehension.

---

## Your Mission
1. \`nums\` = [1, 2, 3, 4].
2. \`doubled\` = \`[n * 2 for n in nums]\`.
3. Print \`doubled\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define nums',
                    completed: false,
                    regex: /nums\s*=\s*\[.*\]/
                },
                {
                    id: 2,
                    description: 'List comprehension',
                    completed: false,
                    regex: /doubled\s*=\s*\[\s*n\s*\*\s*2\s+for\s+n\s+in\s+nums\s*\]/
                },
                {
                    id: 3,
                    description: 'Print result',
                    completed: false,
                    regex: /print\s*\(\s*doubled\s*\)/
                }
            ],
            files: [
                {
                    name: 'comprehension.py',
                    language: 'python',
                    content: `nums = [1, 2, 3, 4]
# Create doubled`
                }
            ]
        },
        {
            id: 'py-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Lists Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Are Python lists mutable?',
                    options: ['Yes', 'No'],
                    correctIndex: 0,
                    explanation: 'Yes, you can add, remove, and change items in a list.'
                },
                {
                    id: 'q2',
                    question: 'How do you access the LAST item directly?',
                    options: ['list[last]', 'list[-1]', 'list[len-1]', 'list.last()'],
                    correctIndex: 1,
                    explanation: 'Python lists support negative indexing. `-1` refers to the last item.'
                },
                {
                    id: 'q3',
                    question: 'Which bracket type is used for tuples?',
                    options: ['[]', '{}', '()', '<>'],
                    correctIndex: 2,
                    explanation: 'Parentheses `()` are used for tuples, while square brackets `[]` are for lists.'
                }
            ]
        }
    ]
};
