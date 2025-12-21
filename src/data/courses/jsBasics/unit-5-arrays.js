import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Arrays = {
    id: 'js-unit-5',
    title: 'Arrays - The Collection',
    description: 'Manage lists of data. Learn to Add, Remove, Loop, and Filter items. Master High Order Functions.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Bookshelf (Index) 📚',
            duration: '20 min read',
            content: `
# Deep Dive: The Bookshelf (Index) 📚

## 1. 0-Based Indexing
Arrays are ordered lists.
The most confusing part for beginners is that we start counting at 0.
*   **Item 1**: Index 0.
*   **Item 2**: Index 1.
*   **Last Item**: Index \`length - 1\`.

## 2. Dynamic Sizing
In C++, an array has a fixed size (e.g., 10 slots).
In JavaScript, arrays are flexible.
*   You can start with 0 items.
*   Push 1,000,000 items.
*   The memory grows automatically.

## 3. Mixed Types
You can have an array like:
\`[1, "Hello", true, { id: 1 }]\`
This is valid, but usually a **Bad Practice**. Try to keep arrays consistent (All numbers, or All strings).
            `
        },
        {
            id: 'js-5-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Mutation vs Immutable 🧬',
            duration: '25 min read',
            content: `
# Deep Dive: Mutation vs Immutable 🧬

Some methods change the original array (**Mutator**).
Some methods return a new array and leave the old one alone (**Accessor**).

## 1. Mutators (Destructive)
*   \`push()\`: Adds to end.
*   \`pop()\`: Removes from end.
*   \`splice()\`: Cuts out a piece.
*   \`sort()\`: Reorders the original.

## 2. Accessors (Safe)
*   \`map()\`: Creates a TRANSFORMED copy.
*   \`filter()\`: Creates a FILTERED copy.
*   \`slice()\`: Copies a piece.

**Pro Tip**: In React/Modern JS, we prefer **Accessor** methods to avoid side effects.
            `
        },
        {
            id: 'js-5-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: High Order Functions (Map) ✨',
            duration: '25 min read',
            content: `
# Deep Dive: High Order Functions (Map) ✨

The \`for\` loop is effectively dead in modern JS.
We use \`.map()\`.

## The Concept
"Take this array, pass every item through a function, and give me a new array with the results."

\`\`\`javascript
const prices = [10, 20, 30];
const taxPrices = prices.map(price => price * 1.1);
// Result: [11, 22, 33]
\`\`\`

It is declarative, cleaner, and less error-prone than managing loop counters (\`i++\`).
            `
        },
        {
            id: 'js-5-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Reference Types 🔗',
            duration: '20 min read',
            content: `
# Deep Dive: Reference Types 🔗

Arrays are **Objects**.
When you assign an array to a variable, you are storing a **Pointer** (Address), not the data itself.

\`\`\`javascript
const a = [1, 2];
const b = a; // b points to the SAME array as a
b.push(3);
console.log(a); // [1, 2, 3] !!!
\`\`\`

This "Action at a distance" is a common bug.
To copy an array, use the Spread Operator: \`const b = [...a]\`.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-5-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Shopping Cart',
            duration: '20 min',
            content: `
# Lab 1: The Shopping Cart

Basic manipulation using Push/Pop.

## The Mission
1.  Create \`cart = ["Apple", "Banana"]\`.
2.  Add "Orange" to the end (\`push\`).
3.  Remove the last item (\`pop\`).
4.  Log the length.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Cart: Create ["Apple", "Banana"].',
                    completed: false,
                    regex: /cart\s*=\s*\[\s*["']Apple["']\s*,\s*["']Banana["']\s*\]/
                },
                {
                    id: 2,
                    description: 'Add: Push "Orange".',
                    completed: false,
                    regex: /cart\.push\s*\(\s*["']Orange["']\s*\)/
                },
                {
                    id: 3,
                    description: 'Remove: Pop the last item.',
                    completed: false,
                    regex: /cart\.pop\s*\(\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Cart Logic
// TODO...
`
                }
            ]
        },
        {
            id: 'js-5-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Transformer (Map)',
            duration: '25 min',
            content: `
# Lab 2: The Transformer (Map)

Convert USD to EUR.

## The Mission
1.  \`usd = [10, 20, 30]\`.
2.  Use \`.map()\` to multiply each by \`0.85\`.
3.  Store in \`eur\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Map: const eur = usd.map(val => val * 0.85).',
                    completed: false,
                    regex: /const\s+eur\s*=\s*usd\.map\s*\(\s*\(?\s*\w+\s*\)?\s*=>\s*\w+\s*\*\s*0\.85\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const usd = [10, 20, 30];

// TODO: Convert to EUR
`
                }
            ]
        },
        {
            id: 'js-5-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Filter',
            duration: '25 min',
            content: `
# Lab 3: The Filter

Remove failing grades.

## The Mission
1.  \`grades = [90, 50, 80, 40]\`.
2.  Use \`.filter()\` to keep items \`>= 70\`.
3.  Store in \`passing\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Filter: Keep grades >= 70.',
                    completed: false,
                    regex: /const\s+passing\s*=\s*grades\.filter\s*\(\s*\(?\s*\w+\s*\)?\s*=>\s*\w+\s*>=\s*70\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const grades = [90, 50, 80, 40];

// TODO: Filter passing only
`
                }
            ]
        },
        {
            id: 'js-5-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Spread Operator',
            duration: '20 min',
            content: `
# Lab 4: The Spread Operator

Merge two arrays cleanly.

## The Mission
1.  \`fruit = ["Apple"]\`.
2.  \`veg = ["Carrot"]\`.
3.  \`food = [...fruit, ...veg]\`.
4.  Log \`food\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Spread: const food = [...fruit, ...veg].',
                    completed: false,
                    regex: /const\s+food\s*=\s*\[\s*\.\.\.fruit\s*,\s*\.\.\.veg\s*\]/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const fruit = ["Apple"];
const veg = ["Carrot"];

// TODO: Merge
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Collection Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the "Spread Operator"?',
                    options: [
                        '...',
                        '+++',
                        '>>>',
                        'spread()'
                    ],
                    correctIndex: 0,
                    explanation: 'The three dots (...) expand an array into individual elements.'
                },
                {
                    id: 'q2',
                    question: 'Does .map() change the ORIGINAL array?',
                    options: [
                        'Yes',
                        'No',
                        'Only if you ask it to',
                        'Depends on the browser'
                    ],
                    correctIndex: 1,
                    explanation: 'No! Map creates a NEW array. This is improved safety (Immutability).'
                },
                {
                    id: 'q3',
                    question: 'If arr = [1, 2, 3], what is arr[3]?',
                    options: [
                        '3',
                        'undefined',
                        'Error',
                        '0'
                    ],
                    correctIndex: 1,
                    explanation: 'Index 3 is the 4th item. The array only has 3 items (indices 0, 1, 2).'
                },
                {
                    id: 'q4',
                    question: 'Which method removes the LAST item?',
                    options: [
                        'shift()',
                        'pop()',
                        'splice()',
                        'remove()'
                    ],
                    correctIndex: 1,
                    explanation: 'Pop removes from End. Shift removes from Start.'
                },
                {
                    id: 'q5',
                    question: 'What is a "Reference Type"?',
                    options: [
                        'A link to a website',
                        'When a variable holds the memory address (pointer) rather than the value itself',
                        'A documentation',
                        'A string'
                    ],
                    correctIndex: 1,
                    explanation: 'Objects and Arrays are reference types. Copying them copies the pointer, not the data.'
                }
            ]
        }
    ]
};
