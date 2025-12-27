import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit8CustomHooks = {
    id: 'react-unit-8',
    title: 'Custom Hooks - The Magic of Reusability',
    description: 'Stop copy-pasting code. Learn to extract component logic into reusable functions effectively giving you Superpowers.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-8-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Power of Extraction 🧪',
            duration: '20 min read',
            content: `
# Deep Dive: The Power of Extraction 🧪

## 1. The DRY Principle
**D**on't **R**epeat **Y**ourself.
If you have the same \`useEffect\` logic in \`UserProfile.js\` and \`Dashboard.js\`, you have a problem.
*   If you fix a bug in one, you might forget the other.
*   Your components are cluttered with non-UI logic.

## 2. Functions with State
A Custom Hook is just a JavaScript function whose name starts with \`use\` and that calls other Hooks.
This is the magic: **It lets you share stateful logic, not state itself.**

## 3. Independent State
If Component A and Component B both use \`useCounter()\`:
*   They do **NOT** share the same counter variable.
*   Each call to the hook creates a completely independent sandboxed state for that component instance.
            `
        },
        {
            id: 'react-8-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The "use" Prefix 🏷️',
            duration: '15 min read',
            content: `
# Deep Dive: The "use" Prefix 🏷️

## 1. Why "use"?
React requires all hooks to start with \`use\` (e.g., \`useTheme\`, \`useUser\`).
This is not just for style this is for **Safety**.

## 2. Linting Rules
The internal linter looks for \`use\`. If it sees a function starting with \`use\`, it enforces the Rules of Hooks:
*   Don't call inside loops.
*   Don't call conditionally.

If you named your hook \`createTheme()\`, the linter would ignore it, and you might accidentally break your app by putting it inside an \`if\`.

## 3. Return Values
A Hook can return *anything*.
*   Single value: \`return width;\`
*   Array: \`return [val, setVal];\` (Like useState)
*   Object: \`return { data, loading };\` (Like libraries)
            `
        },
        {
            id: 'react-8-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Composing Hooks 🧱',
            duration: '20 min read',
            content: `
# Deep Dive: Composing Hooks 🧱

## 1. Hooks inside Hooks
Hooks are composable. You can build complex hooks out of simple ones.

**Example**:
1.  \`useToken()\` gets the auth token.
2.  \`useFetch()\` uses \`useToken()\` to add headers.
3.  \`useUser()\` uses \`useFetch()\` to get the profile.

## 2. Abstraction Layers
This allows you to create layers of abstraction.
*   **Low Level**: \`useLocalStorage\`, \`useEventListener\`.
*   **Mid Level**: \`useAuth\`, \`useTheme\`.
*   **High Level**: \`useDashboardData\`.

Your components become remarkably simple:
\`\`\`jsx
const { user } = useUser();
if (!user) return <Login />;
return <Dashboard />;
\`\`\`
            `
        },
        {
            id: 'react-8-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Array vs Object Return 📦',
            duration: '15 min read',
            content: `
# Deep Dive: Array vs Object Return 📦

## 1. Array Return
\`const [value, setValue] = MyHook()\`
*   **Pros**: You can name the variables whatever you want instantly.
*   **Cons**: Order matters. You can't skip the first item easily.
*   **Best For**: Hooks that act like built-in hooks (single value + setter).

## 2. Object Return
\`const { data, loading } = MyHook()\`
*   **Pros**: Order doesn't matter. You can pick what you need. Self-documenting keys.
*   **Cons**: You have to rename if you use it twice (\`data: userData\`).
*   **Best For**: Complex hooks with many values.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-8-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: useToggle',
            duration: '20 min',
            content: `
# Lab 1: useToggle

We use booleans everywhere (Modals, Menus, Checkboxes).
Let's abstract the "Switch" logic.

## The Mission
1.  **Create**: \`useToggle(initial)\`.
2.  **State**: \`useState(initial)\`.
3.  **Function**: \`toggle\` that flips the state.
4.  **Return**: \`[value, toggle]\`.

## Usage
\`const [isOn, toggleIsOn] = useToggle(false);\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Hook: Create function useToggle.',
                    completed: false,
                    regex: /function\s+useToggle\s*\(/
                },
                {
                    id: 2,
                    description: 'Logic: toggle function.',
                    completed: false,
                    regex: /setValue\s*\(\s*v\s*=>\s*!v\s*\)/
                },
                {
                    id: 3,
                    description: 'Return: [value, toggle].',
                    completed: false,
                    regex: /return\s*\[\s*value\s*,\s*toggle\s*\]/
                }
            ],
            files: [
                {
                    name: 'App.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

// Task 1: Create Custom Hook
function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    
    // Task 2: Toggle Logic
    
    // Task 3: Return Array
    return []; 
}

export default function App() {
    // Usage
    const [isOn, toggle] = useToggle(false);

    return (
        <button onClick={toggle}>
            {isOn ? 'ON' : 'OFF'}
        </button>
    );
}
`
                }
            ]
        },
        {
            id: 'react-8-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: useWindowWidth',
            duration: '25 min',
            content: `
# Lab 2: useWindowWidth

Remember the "Window Resize" lab from Unit 6?
Let's extract that logic so ANY component can know the width.

## The Mission
1.  **Extract**: Move the \`useEffect\` and state into \`useWindowWidth\`.
2.  **Return**: The \`width\` number.
3.  **Use**: Display width in App.

## Cleanup
Don't forget the \`removeEventListener\` in the extracted hook!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'State: useState in hook.',
                    completed: false,
                    regex: /const\s*\[\s*width\s*,\s*setWidth\s*\]\s*=/
                },
                {
                    id: 2,
                    description: 'Effect: Event Listener logic.',
                    completed: false,
                    regex: /window\.addEventListener\s*\(\s*['"]resize['"]/
                },
                {
                    id: 3,
                    description: 'Export: Return width.',
                    completed: false,
                    regex: /return\s*width/
                }
            ],
            files: [
                {
                    name: 'Responsive.jsx',
                    language: 'javascript',
                    content: `import { useState, useEffect } from 'react';

// Task 1: Create useWindowWidth hook
function useWindowWidth() {
    // Paste logic here
}

export default function Responsive() {
    // Task 3: Use the hook
    const width = 0;

    return <h1>Width: {width}px</h1>;
}
`
                }
            ]
        },
        {
            id: 'react-8-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: useFetch',
            duration: '30 min',
            content: `
# Lab 3: useFetch

Data fetching is the #1 candidate for custom hooks.

## The Mission
1.  **Args**: \`useFetch(url)\`.
2.  **State**: \`data\`, \`loading\`, \`error\`.
3.  **Effect**: Fetch \`url\` on mount or change.
4.  **Return**: Object \`{ data, loading, error }\`.

## Handling
Handle success (\`setData\`) and failure (\`setError\`).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'State: 3 state variables.',
                    completed: false,
                    regex: /useState\(null\).*useState\(true\).*useState\(null\)/s
                },
                {
                    id: 2,
                    description: 'Effect: Depend on url.',
                    completed: false,
                    regex: /useEffect\s*\(.*,\s*\[\s*url\s*\]\s*\)/s
                },
                {
                    id: 3,
                    description: 'Return: Object.',
                    completed: false,
                    regex: /return\s*{\s*data\s*,\s*loading\s*,\s*error\s*}/
                }
            ],
            files: [
                {
                    name: 'DataFetcher.jsx',
                    language: 'javascript',
                    content: `import { useState, useEffect } from 'react';

function useFetch(url) {
    // Task 1: State
    
    // Task 2: Effect
    
    // Task 3: Return
    return {};
}

export default function App() {
    const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/1');

    if (loading) return <p>Loading...</p>;
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
`
                }
            ]
        },
        {
            id: 'react-8-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: useLocalStorage',
            duration: '35 min',
            content: `
# Lab 4: useLocalStorage

Persist state to browser storage automatically.

## The Mission
1.  **Init**: Initialize state function -> read \`localStorage.getItem(key)\`.
2.  **Sync**: \`useEffect\` -> write \`localStorage.setItem(key, val)\`.
3.  **Signature**: \`useLocalStorage(key, initialValue)\`.

## Lazy Initialization
\`useState(() => { ... })\` ensures we only read from LocalStorage (slow) once on mount.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Read: Lazy state init.',
                    completed: false,
                    regex: /useState\s*\(\s*\(\s*\)\s*=>/
                },
                {
                    id: 2,
                    description: 'Write: useEffect write to storage.',
                    completed: false,
                    regex: /localStorage\.setItem\s*\(\s*key\s*,\s*JSON\.stringify/
                },
                {
                    id: 3,
                    description: 'Return: [value, setValue].',
                    completed: false,
                    regex: /return\s*\[\s*value\s*,\s*setValue\s*\]/
                }
            ],
            files: [
                {
                    name: 'StorageApp.jsx',
                    language: 'javascript',
                    content: `import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
    // Task 1: Get from storage or use initial
    const [value, setValue] = useState(initialValue);

    // Task 2: Sync to storage on change
    
    return [value, setValue];
}

export default function App() {
    const [name, setName] = useLocalStorage('user_name', 'Guest');

    return (
        <input value={name} onChange={e => setName(e.target.value)} />
    );
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'react-8-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Custom Hooks Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the ONLY requirement for a function to be considered a Custom Hook by React?',
                    options: [
                        'It must export default',
                        'It must start with "use" (e.g., useSomething)',
                        'It must return an array',
                        'It must use typescript'
                    ],
                    correctIndex: 1,
                    explanation: 'The "use" prefix allows the linter to verify that you are following the Rules of Hooks inside that function.'
                },
                {
                    id: 'q2',
                    question: 'Do two components using the same useCounter() hook share the same state?',
                    options: [
                        'Yes, it is global state',
                        'No, each call creates isolated state',
                        'Only if they are siblings',
                        'Yes, if the key is the same'
                    ],
                    correctIndex: 1,
                    explanation: 'Custom hooks reuse LOGIC, not STATE. It is exactly as if you copy-pasted the hook code into the component.'
                },
                {
                    id: 'q3',
                    question: 'Can a custom hook call other custom hooks?',
                    options: [
                        'No, only built-in hooks',
                        'Yes, hooks are composable',
                        'Only if they are in the same file',
                        'No, that causes loops'
                    ],
                    correctIndex: 1,
                    explanation: 'Composition is a key feature. You can build high-level hooks on top of low-level hooks.'
                },
                {
                    id: 'q4',
                    question: 'When should you return an Array from a hook?',
                    options: [
                        'When you want the user to be able to rename the return values easily',
                        'When you have more than 3 values',
                        'When you return an object',
                        'Never'
                    ],
                    correctIndex: 0,
                    explanation: 'Like `useState`, array destructuring `[val, setVal]` lets you name them `[name, setName]` or `[age, setAge]` easily.'
                },
                {
                    id: 'q5',
                    question: 'Why do we use Lazy Initialization (passing a function to useState) in useLocalStorage?',
                    options: [
                        'Because it is required',
                        'To improve performance by avoiding expensive LocalStorage reads on every render',
                        'To make it async',
                        'To clear the storage'
                    ],
                    correctIndex: 1,
                    explanation: '`localStorage.getItem` is synchronous and slow. We only want to run it once during the initial render.'
                }
            ]
        }
    ]
};
