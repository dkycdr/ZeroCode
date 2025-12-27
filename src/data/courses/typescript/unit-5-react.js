
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5React = {
    id: 'ts-unit-5',
    title: 'Unit 5: React with TypeScript',
    description: 'The industry standard. Learn to type Props, Hooks, Events, and Generic Components to build bulletproof UIs.',
    items: [
        // =====================================================================
        // SECTION 1: TYPING COMPONENTS
        // =====================================================================
        {
            id: 'ts-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Components & Props ⚛️',
            duration: '20 min read',
            content: `
# Components & Props ⚛️

## The Old Way: \`React.FC\`
Historically, we used \`React.FunctionComponent\` or \`React.FC\`. 
It implicitly added \`children\`.
\`\`\`tsx
const Btn: React.FC<Props> = ({ label }) => <button>{label}</button>;
\`\`\`
**Verdict**: It's mostly fine, but explicit props are preferred now.

## The Modern Way
Type the props argument directly.
\`\`\`tsx
interface Props {
  label: string;
  onClick: () => void;
  // children?: React.ReactNode; // Add manually if needed
}

export default function Button({ label, onClick }: Props) {
  return <button onClick={onClick}>{label}</button>;
}
\`\`\`

## \`JSX.Element\` vs \`ReactNode\`
*   \`JSX.Element\`: A React Element (what \`<div />\` returns). Use this for function return types.
*   \`React.ReactNode\`: Anything React can render (string, number, null, JSX, Array). Use this for \`children\`.
            `
        },
        {
            id: 'ts-5-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Card Component',
            duration: '25 min',
            content: `
# Lab 1: The Card Component

We are building a reusable Card component.

## The Mission
1.  **Interface**: \`CardProps\`.
2.  **Props**: \`title\` (string) and \`children\` (ReactNode).
3.  **Component**: \`Card\` function.

## Why ReactNode?
If you use \`JSX.Element\` for children, you can't pass strings like \`<Card>Hello</Card>\`. 
\`ReactNode\` allows everything.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import ReactNode',
                    completed: false,
                    regex: /import.*ReactNode.*from\s*['"]react['"]/,
                    hint: 'Import { ReactNode } from "react".'
                },
                {
                    id: 2,
                    description: 'Define CardProps with children',
                    completed: false,
                    regex: /children\?:\s*ReactNode/,
                    hint: 'children is usually ReactNode.'
                },
                {
                    id: 3,
                    description: 'Destructure props in component',
                    completed: false,
                    regex: /function\s+Card\s*\(\s*\{\s*title\s*,\s*children\s*\}\s*:\s*CardProps\s*\)/,
                    hint: 'function Card({ title, children }: CardProps)'
                }
            ],
            files: [
                {
                    name: 'env.d.ts',
                    language: 'typescript',
                    content: `declare module 'react' {
    export type ReactNode = any;
    export function useState<T>(initial: T | (() => T)): [T, (v: T | ((prev: T) => T)) => void];
    export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
    export type ChangeEvent<T = any> = { target: T & { value: string } };
    export type FormEvent<T = any> = { preventDefault: () => void; target: T };
    export type MouseEvent<T = any> = { preventDefault: () => void; target: T };
}`
                },
                {
                    name: 'Card.tsx',
                    language: 'tsx',
                    content: `import { ReactNode } from 'react';

// 1. Define Props with children
// interface CardProps ...

// 2. Component
export function Card(props) {
    // TODO: Render title and children
    return <div className="card"></div>;
}
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc Card.tsx --jsx react
`
                }
            ]
        },

        // =====================================================================
        // SECTION 2: HOOKS
        // =====================================================================
        {
            id: 'ts-5-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Typing Hooks 🎣',
            duration: '20 min read',
            content: `
# Typing Hooks 🎣

## useState
TS infers simple values.
\`\`\`tsx
const [count, setCount] = useState(0); // number
\`\`\`

For complex values (or nulls), use Generics.
\`\`\`tsx
const [user, setUser] = useState<User | null>(null);
\`\`\`

## useRef
Two modes:
1.  **Mutable Value**: \`useRef<number>(0)\`. \`.current\` is mutable.
2.  **DOM Element**: \`useRef<HTMLDivElement>(null)\`. \`.current\` is Readonly (managed by React).

## useReducer
You usually define a discriminator union for Actions.
\`\`\`tsx
type Action = 
  | { type: "increment" } 
  | { type: "decrement" }
  | { type: "set"; payload: number };
\`\`\`
            `
        },
        {
            id: 'ts-5-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: User State',
            duration: '30 min',
            content: `
# Lab 2: User State

We need a component that loads a user. Initially, it's null.

## The Mission
1.  **Interface**: \`User\` { name: string }.
2.  **State**: \`useState<User | null>(null)\`.
3.  **Render**: Conditionally render "Loading..." or User Name.

## Optional Chaining
\`user?.name\` is your best friend when state is nullable.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define User interface',
                    completed: false,
                    regex: /interface\s+User/,
                    hint: 'Standard interface.'
                },
                {
                    id: 2,
                    description: 'Initialize state with generic',
                    completed: false,
                    regex: /useState\s*<\s*User\s*\|\s*null\s*>\s*\(\s*null\s*\)/,
                    hint: 'useState<User | null>(null)'
                },
                {
                    id: 3,
                    description: 'Safe access user name',
                    completed: false,
                    regex: /user\?\.name/,
                    hint: 'Use optional chaining.'
                }
            ],
            files: [
                {
                    name: 'env.d.ts',
                    language: 'typescript',
                    content: `declare module 'react' {
    export type ReactNode = any;
    export function useState<T>(initial: T | (() => T)): [T, (v: T | ((prev: T) => T)) => void];
    export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
    export type ChangeEvent<T = any> = { target: T & { value: string } };
    export type FormEvent<T = any> = { preventDefault: () => void; target: T };
    export type MouseEvent<T = any> = { preventDefault: () => void; target: T };
}`
                },
                {
                    name: 'Profile.tsx',
                    language: 'tsx',
                    content: `import { useState } from 'react';

// 1. Interface
interface User { name: string }

export function Profile() {
    // 2. Hook
    // TODO: Init user state (null initially)
    const [user, setUser] = useState(null); 

    const login = () => setUser({ name: "Alice" });

    return (
        <div>
            {/* 3. Render */}
            <h1>{user.name}</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc Profile.tsx --jsx react
`
                }
            ]
        },

        // =====================================================================
        // SECTION 3: EVENTS
        // =====================================================================
        {
            id: 'ts-5-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Event Handling 🖱️',
            duration: '15 min read',
            content: `
# Event Handling 🖱️

React wraps native events (SyntheticEvent).
You need to import types from 'react'.

## Common Events
1.  **Input Change**: \`ChangeEvent<HTMLInputElement>\`
2.  **Button Click**: \`MouseEvent<HTMLButtonElement>\`
3.  **Form Submit**: \`FormEvent<HTMLFormElement>\`

## Why Element Type matters?
\`HTMLInputElement\` has \`.value\`.
\`HTMLDivElement\` does not.
The generic \`<T>\` tells TS what \`e.target\` refers to.
            `
        },
        {
            id: 'ts-5-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Form',
            duration: '25 min',
            content: `
# Lab 3: The Form

Handle a text input change.

## The Mission
1.  **Function**: \`handleChange\`.
2.  **Param**: \`e: ChangeEvent<HTMLInputElement>\`.
3.  **Logic**: Console log \`e.target.value\`.

## Imports
Don't forget to import \`ChangeEvent\` from 'react'.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import ChangeEvent',
                    completed: false,
                    regex: /import.*ChangeEvent/,
                    hint: 'From "react".'
                },
                {
                    id: 2,
                    description: 'Type event parameter',
                    completed: false,
                    regex: /e\s*:\s*ChangeEvent\s*<\s*HTMLInputElement\s*>/,
                    hint: 'e: ChangeEvent<HTMLInputElement>'
                },
                {
                    id: 3,
                    description: 'Access target value',
                    completed: false,
                    regex: /e\.target\.value/,
                    hint: 'Standard React pattern.'
                }
            ],
            files: [
                {
                    name: 'env.d.ts',
                    language: 'typescript',
                    content: `declare module 'react' {
    export type ReactNode = any;
    export function useState<T>(initial: T | (() => T)): [T, (v: T | ((prev: T) => T)) => void];
    export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
    export type ChangeEvent<T = any> = { target: T & { value: string } };
    export type FormEvent<T = any> = { preventDefault: () => void; target: T };
    export type MouseEvent<T = any> = { preventDefault: () => void; target: T };
}`
                },
                {
                    name: 'Form.tsx',
                    language: 'tsx',
                    content: `import { useState } from 'react';

export function Form() {
    const [text, setText] = useState("");

    // TODO: Add type annotation
    const handleChange = (e) => {
        // TODO: Update state
    };

    return <input onChange={handleChange} value={text} />;
}
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc Form.tsx --jsx react
`
                }
            ]
        },

        // =====================================================================
        // SECTION 4: GENERIC COMPONENTS
        // =====================================================================
        {
            id: 'ts-5-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Generic Components 📦',
            duration: '20 min read',
            content: `
# Generic Components 📦

What if you want a List component that can render Users OR Products?
You need a Generic Prop.

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return <ul>{props.items.map(props.renderItem)}</ul>;
}

// Usage
<List<string> items={["A", "B"]} renderItem={(i) => <li>{i}</li>} />
\`\`\`

## Limitation
In Arrow Functions (\`const List = <T>...\`), the \`<T>\` conflicts with JSX tags.
**Fix**: Use \`<T,>\` (comma) or use \`function List<T>\`.
            `
        },
        {
            id: 'ts-5-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Generic List',
            duration: '35 min',
            content: `
# Lab 4: The Generic List

Build a generic \`<List />\` component.

## The Mission
1.  **Interface**: \`ListProps<T>\`.
2.  **Component**: \`function List<T>({ items }: ListProps<T>)\`.
3.  **Render**: Map over items and render JSON stringified.

## Constraint
Add \`extends { id: number }\` to ensure items have keys.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define generic ListProps<T>',
                    completed: false,
                    regex: /interface\s+ListProps\s*<\s*T/,
                    hint: 'Interface generic.'
                },
                {
                    id: 2,
                    description: 'Add id constraint',
                    completed: false,
                    regex: /T\s+extends\s*\{\s*id\s*:\s*number\s*\}/,
                    hint: 'Constraint for keying.'
                },
                {
                    id: 3,
                    description: 'Generic Component',
                    completed: false,
                    regex: /function\s+List\s*<\s*T/,
                    hint: 'Function generic.'
                }
            ],
            files: [
                {
                    name: 'env.d.ts',
                    language: 'typescript',
                    content: `declare module 'react' {
    export type ReactNode = any;
    export function useState<T>(initial: T | (() => T)): [T, (v: T | ((prev: T) => T)) => void];
    export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
    export type ChangeEvent<T = any> = { target: T & { value: string } };
    export type FormEvent<T = any> = { preventDefault: () => void; target: T };
    export type MouseEvent<T = any> = { preventDefault: () => void; target: T };
}`
                },
                {
                    name: 'List.tsx',
                    language: 'tsx',
                    content: `// 1. Props
interface ListProps<T> {
    items: T[];
}

// 2. Component
// 2. Component
function List(props) {
    // TODO: Map over items
    return <ul></ul>;
}
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc List.tsx --jsx react
`
                }
            ]
        },

        // =====================================================================
        // SECTION 5: MASTERY QUIZ
        // =====================================================================
        {
            id: 'ts-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 5 Mastery Check',
            duration: '20 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What type should you use for `children` prop?',
                    options: [
                        'string',
                        'JSX.Element',
                        'React.ReactNode',
                        'null'
                    ],
                    correctIndex: 2,
                    explanation: 'ReactNode is the most inclusive type, allowing strings, numbers, arrays, and elements.'
                },
                {
                    id: 'q2',
                    question: 'What is the type of the event object for an input change?',
                    options: [
                        'Event',
                        'InputEvent',
                        'ChangeEvent<HTMLInputElement>',
                        'MouseEvent'
                    ],
                    correctIndex: 2,
                    explanation: 'ChangeEvent is the specific React wrapper, and the generic specifies the DOM element type.'
                },
                {
                    id: 'q3',
                    question: 'Why do we use `useRef<HTMLDivElement>(null)` with null?',
                    options: [
                        'To clear memory',
                        'Because refs are lazily assigned after first render',
                        'It is required by TypeScript compiler',
                        'It is a mistake'
                    ],
                    correctIndex: 1,
                    explanation: 'Initially, before the DOM mounts, the ref is empty (null). Adding `| null` to the type correctly models this lifecycle.'
                },
                {
                    id: 'q4',
                    question: 'How do you define a Generic Arrow Component in .tsx?',
                    options: [
                        'const Comp = <T>(props) => ...',
                        'const Comp = <T,>(props) => ...',
                        'const Comp = <T extends {}>(props) => ...',
                        'Both B and C'
                    ],
                    correctIndex: 3,
                    explanation: 'The comma `<T,>` or constraint `<T extends {}>` prevents the compiler from confusing the generic with a starting JSX tag.'
                },
                {
                    id: 'q5',
                    question: 'What does `ComponentProps<"button">` do?',
                    options: [
                        'Creates a button component',
                        'Extracts all standard HTML attributes for a button (onClick, className, etc)',
                        'Returns the type of a button',
                        'Nothing'
                    ],
                    correctIndex: 1,
                    explanation: 'It is a utility type provided by React to get the props of a native element or custom component.'
                },
                {
                    id: 'q6',
                    question: 'Is `React.FC` necessary?',
                    options: [
                        'Yes, always use it',
                        'No, typing props directly is often preferred',
                        'It is deprecated',
                        'It is only for Classes'
                    ],
                    correctIndex: 1,
                    explanation: 'Many teams avoid FC because implicit children can be unintended. Explicit prop typing is cleaner.'
                }
            ]
        }
    ]
};
