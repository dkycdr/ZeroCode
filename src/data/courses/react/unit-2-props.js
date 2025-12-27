import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2Props = {
    id: 'react-unit-2',
    title: 'Props - The Data Flow',
    description: 'Data in React flows like a waterfall: Downwards. Master Props, Component Composition, and the Children prop to build flexible UI systems.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Unidirectional Flow 🌊',
            duration: '20 min read',
            content: `
# Deep Dive: The Unidirectional Flow 🌊

## 1. The Waterfall Model
React enforces a strictly **One-Way Data Flow** (Unidirectional).
*   **Parent** passes data to **Child**.
*   **Child** reads data.
*   **Child** CANNOT modify data.
*   **Child** CANNOT send data back up (directly).

**Why?**
This makes debugging easy. If a Child has the wrong data, you know exactly where it came from: The Parent. In two-way binding systems (like old Angular or Vue), data jumps around unpredictably, causing "Spaghetti Code".

## 2. Props are Read-Only (Immutable)
A component must act like a **Pure Function** with respect to its props.
\`\`\`javascript
// IMPURE (Bad) - Modifying inputs
function withdraw(account, amount) {
    account.total -= amount;
}

// PURE (Good) - Returns new calculation
function calculateRemaining(total, amount) {
    return total - amount;
}
\`\`\`
React components are the same. You receive props, you render UI. You never change the props.

## 3. "Props Drilling"
Sometimes you need to pass data from a Great-Grandparent to a Great-Grandchild.
> Main -> Dashboard -> Sidebar -> UserProfile -> Avatar

You have to pass the \`user\` prop through every single layer.
This is called **Props Drilling**.
It is annoying, but it is explicit. We will learn how to solve this later with **Context API**.
            `
        },
        {
            id: 'react-2-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Destructuring & Defaults 🛠️',
            duration: '15 min read',
            content: `
# Deep Dive: Destructuring & Defaults 🛠️

## 1. The Old Way vs The New Way
In the dark ages (2015), we did this:
\`\`\`javascript
function Card(props) {
    return <h1>{props.title}</h1>;
}
\`\`\`

Now, we almost ALWAYS destructure immediately:
\`\`\`javascript
function Card({ title, price }) {
    return <h1>{title}: \${price}</h1>;
}
\`\`\`
This serves as self-documentation. Developers can see exactly what the component needs just by looking at the first line.

## 2. Default Values
What if the parent forgets to pass a prop?
We use ES6 Default Parameters.

\`\`\`javascript
function Button({ type = "primary", label = "Click Me" }) {
    // If 'type' is undefined, it becomes "primary".
    return <button className={type}>{label}</button>;
}
\`\`\`

## 3. Spreading Props
Sometimes you want to pass *everything* down.
\`\`\`javascript
function FancyButton(props) {
    // Passes className, onClick, id, style, etc.
    return <button className="fancy" {...props} />;
}
\`\`\`
Use this with caution. It reduces clarity but increases flexibility.
            `
        },
        {
            id: 'react-2-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Children Prop 👶',
            duration: '20 min read',
            content: `
# Deep Dive: The Children Prop 👶

## 1. Composition vs Inheritance
In Class-based OOP (Java/C#), you extend classes to reuse logic.
*   \`class Dialog extends Window\`
*   \`class WelcomeDialog extends Dialog\`

In React, we use **Composition**. We put things *inside* other things.
Everything that you put between the opening and closing tags of a component is passed as a special prop called \`children\`.

## 2. The Slot Pattern
Think of a \`Layout\` component. It doesn't know what it will contain.
\`\`\`jsx
function Layout({ children }) {
    return (
        <div className="container">
            <Sidebar />
            <main>{children}</main>
        </div>
    );
}
\`\`\`
You can put *anything* inside logic:
\`\`\`jsx
<Layout>
    <h1>Home Page</h1>
    <p>Welcome...</p>
</Layout>
\`\`\`

## 3. Multiple "Slots"
What if you need a "Header" slot and a "Footer" slot?
A component can accept regular props that happen to be React Elements!
\`\`\`jsx
<Page
    header={<Navbar />}
    content={<Feed />}
    sidebar={<Adverts />}
/>
\`\`\`
            `
        },
        {
            id: 'react-2-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Rendering Lists 📋',
            duration: '25 min read',
            content: `
# Deep Dive: Rendering Lists 📋

## 1. JavaScript Map
React doesn't have a special \`v-for\` or \`ng-repeat\` directive. It just uses JavaScript.
The most common way to transform data into UI is \`Array.prototype.map()\`.

\`map()\` takes an array of Data X and turns it into an array of UI Y.

## 2. The "Key" Prop
When rendering a list, React needs to distinguish between items to update them efficiently.
*   If you delete item #2, React needs to know *which* element to remove from the DOM.
*   Without keys, React has to re-render the whole list (Slow + Buggy).

**Rules of Keys**:
1.  **Unique**: Keys must be unique among siblings.
2.  **Stable**: Do not use \`Math.random()\` or array index (if the list can change order). Use ID from database.

\`\`\`jsx
{users.map(user => (
    <UserCard key={user.id} name={user.name} />
))}
\`\`\`
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Passing Props',
            duration: '20 min',
            content: `
# Lab 1: Passing Props

We have a reusable \`Badge\` component.
Right now it is static. We need to make it dynamic.

## The Mission
1.  **Destructure**: Update \`Badge\` to accept \`{ text, color }\` properties.
2.  **Bind**: Use \`style={{ backgroundColor: color }}\` to apply the color.
3.  **Render**: Inside \`App\`, render a "New" badge (Green) and a "Sale" badge (Red).

## Code Snippet
\`\`\`jsx
function Badge({ text, color }) {
    return <span style={{ backgroundColor: color }}>{text}</span>;
}
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Component: Update Badge to destructure { text, color }.',
                    completed: false,
                    regex: /function\s+Badge\s*\(\s*{\s*text\s*,\s*color\s*}\s*\)/
                },
                {
                    id: 2,
                    description: 'Style: Apply inline style={{ backgroundColor: color }}.',
                    completed: false,
                    regex: /style\s*=\s*{\s*{\s*backgroundColor:\s*color\s*}\s*}/
                },
                {
                    id: 3,
                    description: 'Render: Use <Badge text="New" color="green" />.',
                    completed: false,
                    regex: /<Badge\s+text=["']New["']\s+color=["']green["']\s*\/>/
                }
            ],
            files: [
                {
                    name: 'App.jsx',
                    language: 'javascript',
                    content: `// Reusable Badge Component

// Task 1: Add props to Badge
function Badge() {
    // Task 2: Use props in style and text
    return <span className='badge'>static</span>;
}

export default function App() {
    return (
        <div>
            <h1>Shop</h1>
            {/* Task 3: Render two Badges */}
            
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-2-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Default Props',
            duration: '20 min',
            content: `
# Lab 2: Default Props

We are building a \`Button\` component.
Most buttons are "blue" and say "Click". We don't want to repeat that every time.

## The Mission
1.  **Defaults**: Set default values: \`label = "Submit"\` and \`variant = "primary"\`.
2.  **Usage**: In \`App\`, render one button without props (uses defaults).
3.  **Usage**: Render another button with \`label="Cancel"\` and \`variant="danger"\`.

## Syntax
\`\`\`javascript
function Button({ label = "Default", variant = "main" }) { ... }
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Defaults: Set default params label="Submit", variant="primary".',
                    completed: false,
                    regex: /function\s+Button\s*\(\s*{\s*label\s*=\s*['"]Submit['"]\s*,\s*variant\s*=\s*['"]primary['"]\s*}\s*\)/
                },
                {
                    id: 2,
                    description: 'Render Default: <Button />.',
                    completed: false,
                    regex: /<Button\s*\/>/
                },
                {
                    id: 3,
                    description: 'Render Custom: <Button label="Cancel" variant="danger" />.',
                    completed: false,
                    regex: /<Button\s+label=["']Cancel['"]\s+variant=["']danger['"]\s*\/>/
                }
            ],
            files: [
                {
                    name: 'App.jsx',
                    language: 'javascript',
                    content: `// Intelligent Button

// Task 1: Define defaults
function Button({ label, variant }) {
    return <button className={variant}>{label}</button>;
}

export default function App() {
    return (
        <div>
            {/* Task 2: Default Button */}
            

            {/* Task 3: Danger Button */}
            
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-2-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Children Prop',
            duration: '25 min',
            content: `
# Lab 3: The Children Prop

We need a \`Card\` container. It shouldn't care what is inside it.
It just provides a white box with a shadow.

## The Mission
1.  **Prop**: Accept the \`children\` prop in \`Card\`.
2.  **Render**: Place \`{children}\` inside the div.
3.  **Use**: In \`App\`, pass an \`h2\` and a \`p\` *inside* the opening and closing tags of \`Card\`.

## Visualization
\`\`\`jsx
<Card>
    <h2>Title</h2> {/* This becomes children */}
</Card>
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Prop: Destructure { children } in Card.',
                    completed: false,
                    regex: /function\s+Card\s*\(\s*{\s*children\s*}\s*\)/
                },
                {
                    id: 2,
                    description: 'Inject: Render {children} inside the div.',
                    completed: false,
                    regex: /<div\s+className=['"]card['"]>\s*{\s*children\s*}\s*<\/div>/
                },
                {
                    id: 3,
                    description: 'Usage: Nest <h2> and <p> inside <Card> tags.',
                    completed: false,
                    regex: /<Card>\s*<h2>[\s\S]*<\/h2>\s*<p>[\s\S]*<\/p>\s*<\/Card>/
                }
            ],
            files: [
                {
                    name: 'App.jsx',
                    language: 'javascript',
                    content: `// Wrapper Component

// Task 1 & 2: Implement Card
function Card() {
    return (
        <div className="card">
            {/* TODO: Render children here */}
        </div>
    );
}

export default function App() {
    return (
        <main>
            {/* Task 3: Use Card with content inside */}
            
        </main>
    );
}
`
                }
            ]
        },
        {
            id: 'react-2-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Rendering Lists',
            duration: '30 min',
            content: `
# Lab 4: Rendering Lists

We have an array of \`users\`. We want to generate a list of \`<li>\` elements.
We must use the \`map\` function and provide a unique \`key\`.

## The Mission
1.  **Map**: Iterate over \`users.map()\`.
2.  **Return**: For each user, return an \`<li>{user.name}</li>\`.
3.  **Key**: Add \`key={user.id}\` to the \`<li>\`.

## Data
\`\`\`javascript
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
]
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Map: Use users.map(user => ...).',
                    completed: false,
                    regex: /users\.map\s*\(\s*user\s*=>/
                },
                {
                    id: 2,
                    description: 'Key: Add key={user.id} to the list item.',
                    completed: false,
                    regex: /<li\s+key\s*=\s*{\s*user\.id\s*}/
                },
                {
                    id: 3,
                    description: 'Content: Render user.name inside li.',
                    completed: false,
                    regex: /{\s*user\.name\s*}/
                }
            ],
            files: [
                {
                    name: 'App.jsx',
                    language: 'javascript',
                    content: `// Dynamic Lists
const users = [
    { id: 101, name: 'Neo' },
    { id: 102, name: 'Trinity' },
    { id: 103, name: 'Morpheus' }
];

export default function UserList() {
    return (
        <ul>
            {/* Task 1, 2, 3: Map users to <li> elements */}
            {/* Remember the KEY! */}
            
        </ul>
    );
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'react-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Props Master Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Can a Child component modify its own Props?',
                    options: [
                        'Yes, any time',
                        'Yes, but only if the parent allows it',
                        'No, Props are Read-Only (Immutable)',
                        'Only in TypeScript'
                    ],
                    correctIndex: 2,
                    explanation: 'Props are snapshots of data sent by the Parent. Changing them violates the React One-Way Data Flow.'
                },
                {
                    id: 'q2',
                    question: 'Which is the correct way to pass a number "5" as a prop?',
                    options: [
                        'value="5"',
                        'value={5}',
                        'value=(5)',
                        'value=[5]'
                    ],
                    correctIndex: 1,
                    explanation: 'Curly braces `{}` are used to embed JavaScript expressions, including Numbers and Booleans.'
                },
                {
                    id: 'q3',
                    question: 'What is the "children" prop used for?',
                    options: [
                        'To pass data to child components',
                        'To identify the age of the component',
                        'To render content passed *between* the opening and closing tags',
                        'To find the child elements in the DOM'
                    ],
                    correctIndex: 2,
                    explanation: '`children` allows for component composition, letting you nest arbitrary content inside another component.'
                },
                {
                    id: 'q4',
                    question: 'When rendering a list with map(), why do we need a "key"?',
                    options: [
                        'To styling the list',
                        'To sort the list',
                        'To help React identify which items have changed, added, or removed',
                        'It is optional'
                    ],
                    correctIndex: 2,
                    explanation: 'Keys provide identity to stable elements across re-renders, optimizing DOM updates.'
                },
                {
                    id: 'q5',
                    question: 'What is the modern alternative to `props.name`?',
                    options: [
                        'this.name',
                        'const name = props',
                        'Destructuring: `function Comp({ name })`',
                        'Hooks'
                    ],
                    correctIndex: 2,
                    explanation: 'Destructuring in the function signature is the standard pattern in modern React.'
                }
            ]
        }
    ]
};
