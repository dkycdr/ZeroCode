import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Lists = {
    id: 'react-unit-4',
    title: 'Lists & Keys - Rendering Collections',
    description: 'Data rarely comes alone. Learn to render Lists, master the Key prop, and handle Conditional Rendering logic.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Map Method 🗺️',
            duration: '15 min read',
            content: `
# Deep Dive: The Map Method 🗺️

## 1. Transforming Data
In other frameworks, you might use special syntax like \`ng-repeat\` or \`v-for\`.
In React, we just use JavaScript. The Transformation Tool of choice is \`Array.map\`.

## 2. How Map Works
Map takes an array of X and returns an array of Y (of the same length).
\`\`\`javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); 
// doubled is [2, 4, 6]
\`\`\`

In React, we map Data to JSX:
\`\`\`jsx
const names = ["Alice", "Bob"];
const items = names.map(name => <li>{name}</li>);
// items is [ <li>Alice</li>, <li>Bob</li> ]
\`\`\`
React automatically knows how to render an Array of Elements.

## 3. Why not forEach?
\`forEach\` returns \`undefined\`. It is for side-effects.
\`map\` returns a \`new array\`.
JSX expressions inside \`{}\` expect a return value to render. That's why \`{ items.forEach(...) }\` renders nothing, but \`{ items.map(...) }\` renders UI.
            `
        },
        {
            id: 'react-4-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The "Key" Prop 🔑',
            duration: '25 min read',
            content: `
# Deep Dive: The "Key" Prop 🔑

## 1. The Identity Problem
Imagine a list of 100 items. You delete the first one.
*   **Without Keys**: React sees 99 items. It compares Index 0 (Old) vs Index 0 (New). They are different. It re-renders EVERY item. 
*   **With Keys**: React sees "Item #1 is gone". It removes that one DOM node. It leaves the other 99 alone.

## 2. Choosing a Key
A key must be:
1.  **Unique** among siblings.
2.  **Stable** (doesn't change over time).

## 3. The "Index as Key" Anti-Pattern ⚠️
\`\`\`jsx
// BAD
{items.map((item, index) => <li key={index}>{item}</li>)}
\`\`\`
If you reorder the list, the indexes change. React will think "Item 0 is now different" instead of "Item 0 moved". This destroys state (like input values) inside the list items.
**Always use database IDs**: \`key={user.id}\`.
            `
        },
        {
            id: 'react-4-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Conditional Rendering 101 🚦',
            duration: '20 min read',
            content: `
# Deep Dive: Conditional Rendering 101 🚦

## 1. The Ternary Operator
The \`if-else\` statement is a statement, not an expression. It cannot be used inside \`{}\`.
We use the Ternary Operator \`condition ? true : false\`.
\`\`\`jsx
{isLoggedIn ? <UserMenu /> : <LoginBtn />}
\`\`\`

## 2. Short-Circuiting (&&)
If you only want to render something if True, and nothing if False:
\`\`\`jsx
{unreadCount > 0 && <Badge>{unreadCount}</Badge>}
\`\`\`
*   If \`unreadCount > 0\` is true, it renders the right side.
*   If false, it returns \`false\` (which React ignores).

**Warning**: Be careful with \`0\`.
\`\`\`jsx
{count && <h1>{count}</h1>} 
\`\`\`
If count is \`0\`, JavaScript renders \`0\` in the UI!
**Fix**: \`{count > 0 && ...}\` or \`{!!count && ...}\`.

## 3. Returning Null
If a component wants to render *nothing*, it should return \`null\`.
React ignores \`null\`, \`false\`, and \`undefined\` in the output.
            `
        },
        {
            id: 'react-4-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Filtering & Sorting 🔍',
            duration: '20 min read',
            content: `
# Deep Dive: Filtering & Sorting 🔍

## 1. Derived State
You rarely need to put "Filtered List" in state.
If you have \`users\` (State) and \`searchQuery\` (State), the filtered list is **Derived**.
\`\`\`javascript
const filteredUsers = users.filter(u => u.name.includes(query));
\`\`\`
Calculate this during render. It ensures the list is always in sync with the data.

## 2. Immutability with Sort
\`Array.prototype.sort()\` mutates the array in place.
❌ **Bad**: \`users.sort(...)\` (Modifies state directly!)
✅ **Good**: \`[...users].sort(...)\` (Create copy, then sort).

## 3. Filter then Map
A common pattern:
\`\`\`jsx
{products
    .filter(p => p.price > 100)
    .sort((a, b) => a.price - b.price)
    .map(p => <Product key={p.id} data={p} />)
}
\`\`\`
Process the data pipeline before converting to JSX.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Simple List',
            duration: '20 min',
            content: `
# Lab 1: The Simple List

We have an array of string categories. Render them as buttons.

## The Mission
1.  **Data**: \`['React', 'Vue', 'Svelte']\`.
2.  **Map**: Convert to \`<button>\`.
3.  **Key**: Since strings are unique here, use the string itself as the key.

## Syntax
\`\`\`jsx
{items.map(item => <Element key={item} />)}
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Data: Define categories array.',
                    completed: false,
                    regex: /const\s+categories\s*=\s*\[/
                },
                {
                    id: 2,
                    description: 'Map: categories.map(cat => ...).',
                    completed: false,
                    regex: /categories\.map\s*\(/
                },
                {
                    id: 3,
                    description: 'Render: Return button with key={cat}.',
                    completed: false,
                    regex: /<button\s+key\s*=\s*{\s*cat\s*}\s*>\s*{\s*cat\s*}\s*<\/button>/
                }
            ],
            files: [
                {
                    name: 'CategoryList.jsx',
                    language: 'javascript',
                    content: `// Simple List Rendering
const categories = ['Electronics', 'Clothing', 'Books'];

export default function CategoryList() {
    return (
        <div className="flex-row">
            {/* Task 1, 2, 3: Map categories to buttons */}
            
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-4-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Complex List with ID',
            duration: '25 min',
            content: `
# Lab 2: Complex List with ID

We have a list of User Objects. We must use the ID for the key.

## The Mission
1.  **Data**: Array of objects \`{ id: 1, name: "Alice", role: "Admin" }\`.
2.  **Render**: A \`div\` for each user showing Name and Role.
3.  **Key**: Use \`user.id\`. Do NOT use index.

## Object Access
Access properties like normal JS: \`user.name\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Map: users.map(user => ...).',
                    completed: false,
                    regex: /users\.map\s*\(\s*user\s*=>/
                },
                {
                    id: 2,
                    description: 'Key: Use user.id.',
                    completed: false,
                    regex: /key\s*=\s*{\s*user\.id\s*}/
                },
                {
                    id: 3,
                    description: 'Display: Show name and role.',
                    completed: false,
                    regex: /{\s*user\.name\s*}[\s\S]*{\s*user\.role\s*}/
                }
            ],
            files: [
                {
                    name: 'UserList.jsx',
                    language: 'javascript',
                    content: `// Object List Rendering
const users = [
    { id: 101, name: 'Alice', role: 'Admin' },
    { id: 102, name: 'Bob', role: 'User' },
    { id: 103, name: 'Charlie', role: 'User' }
];

export default function UserList() {
    return (
        <div className="grid">
            {/* TODO: Map users to cards */}
            
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-4-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Conditional UI',
            duration: '25 min',
            content: `
# Lab 3: Conditional UI

We need to show different UI states based on props.

## The Mission
1.  **Loading**: If \`isLoading\` is true, render \`<div>Loading...</div>\`.
2.  **Error**: If \`error\` exists, render \`<div className="error">{error}</div>\`.
3.  **Success**: Otherwise, render the \`content\`.

## Pattern: Guard Clauses
\`\`\`jsx
if (isLoading) return <Loader />;
if (error) return <Error msg={error} />;
return <Content />;
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Loading: if (isLoading) return Loading.',
                    completed: false,
                    regex: /if\s*\(\s*isLoading\s*\)\s*return\s*<div/
                },
                {
                    id: 2,
                    description: 'Error: if (isError) return Error.',
                    completed: false,
                    regex: /if\s*\(\s*isError\s*\)\s*return\s*<div/
                },
                {
                    id: 3,
                    description: 'Content: Render data.',
                    completed: false,
                    regex: /return\s*<h1>\s*{\s*title\s*}\s*<\/h1>/
                }
            ],
            files: [
                {
                    name: 'StatusCard.jsx',
                    language: 'javascript',
                    content: `// Conditional Rendering

export default function StatusCard({ isLoading, isError, title }) {
    // Task 1: Check Loading
    
    // Task 2: Check Error
    
    // Task 3: Render Content
    return <h1>{title}</h1>;
}
`
                }
            ]
        },
        {
            id: 'react-4-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Filtered List',
            duration: '30 min',
            content: `
# Lab 4: Filtered List

We will create a searchable list.
This combines State (for the query) and Lists (for the display).

## The Mission
1.  **State**: \`query\` string.
2.  **Filter**: Create \`filteredItems\` variable that filters \`allItems\` based on \`query\`.
3.  **Render**: Map the \`filteredItems\`.

## Filtering Logic
\`item.toLowerCase().includes(query.toLowerCase())\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'State: Search query state.',
                    completed: false,
                    regex: /useState\s*\(\s*['"]['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Filter: Derive filteredItems.',
                    completed: false,
                    regex: /items\.filter\s*\(/
                },
                {
                    id: 3,
                    description: 'Map: Render filteredItems, not items.',
                    completed: false,
                    regex: /filteredItems\.map\s*\(/
                }
            ],
            files: [
                {
                    name: 'SearchList.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

export default function SearchList() {
    // Task 1: Query State
    
    // Task 2: Filter Logic
    const filteredItems = items; // Change this!

    return (
        <div>
            <input placeholder="Search..." />
            <ul>
                {/* Task 3: Render Filtered Items */}
                {filteredItems.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'react-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'React Lists Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why does React require a "key" prop for lists?',
                    options: [
                        'To styling purposes',
                        'To track item identity across re-renders',
                        'To sort the array',
                        'It is required by HTML'
                    ],
                    correctIndex: 1,
                    explanation: 'Keys help React identify which items have changed, are added, or are removed, optimizing the DOM updates.'
                },
                {
                    id: 'q2',
                    question: 'Why is using the Array Index as a key (key={index}) considered an Anti-Pattern?',
                    options: [
                        'It is too fast',
                        'It causes syntax errors',
                        'If the list order changes, React mixes up component state',
                        'Indexes start at 0 but keys must start at 1'
                    ],
                    correctIndex: 2,
                    explanation: 'If items are inserted/reordered, the index of an item changes. React will reuse the wrong DOM node/state for that item.'
                },
                {
                    id: 'q3',
                    question: 'What does this render: {width && <Box />} if width is 0?',
                    options: [
                        'Nothing (null)',
                        'The Box component',
                        'The number 0',
                        'An error'
                    ],
                    correctIndex: 2,
                    explanation: 'In JavaScript `0 && anything` returns `0`. React renders the number 0. Use `width > 0` or `!!width` to fix.'
                },
                {
                    id: 'q4',
                    question: 'Which array method is best for transforming data into JSX?',
                    options: [
                        'forEach()',
                        'map()',
                        'reduce()',
                        'filter()'
                    ],
                    correctIndex: 1,
                    explanation: '`map()` returns a new array of elements, which is exactly what JSX expects.'
                },
                {
                    id: 'q5',
                    question: 'Where should you filter a list based on state?',
                    options: [
                        'Inside useEffect',
                        'Inside the render (function body) as a derived variable',
                        'Inside the JSX return statement',
                        'In the database'
                    ],
                    correctIndex: 1,
                    explanation: 'Calculating it during render ensures it is always fresh. It is fast enough for most lists.'
                }
            ]
        }
    ]
};
