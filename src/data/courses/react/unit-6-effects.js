import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6Effects = {
    id: 'react-unit-6',
    title: 'Effects & Lifecycle - The Outside World',
    description: 'React components are pure... until they aren\'t. Master useEffect to talk to APIs, set up subscriptions, and handle the "Side Effects" of your UI.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Pure Functions vs Side Effects 🧪',
            duration: '20 min read',
            content: `
# Deep Dive: Pure Functions vs Side Effects 🧪

## 1. The Ideal Component
In a perfect world, a component is a Pure Function:
\`UI = f(State)\`
Input -> Output. No surprises. No network calls. No DOM manipulation.

## 2. The Reality
We need to fetch data. We need to connect to chat servers. We need to change the document title.
These are **Side Effects** (they affect things *outside* the function).

## 3. The Escape Hatch: useEffect
\`useEffect\` is the designated zone for Side Effects.
React runs it **AFTER** the DOM has been updated.
This ensures your UI is visible to the user before expensive operations start.
            `
        },
        {
            id: 'react-6-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Dependency Array 🔗',
            duration: '25 min read',
            content: `
# Deep Dive: The Dependency Array 🔗

## 1. When to Run?
*   **No Array**: Runs after *Every* Render. (Dangerous)
*   **Empty Array []**: Runs *Once* on Mount. (Like \`componentDidMount\`)
*   **[prop, state]**: Runs when *Prop* OR *State* changes.

## 2. Stale Closures
If you use a variable inside the effect but forget to put it in the dependency array, the effect will "remember" the old version of that variable forever.
**Rule**: If you read it inside the effect, you MUST include it in the array.

## 3. Infinite Loops
\`\`\`javascript
useEffect(() => {
    setCount(count + 1); // Triggers re-render
}, [count]);             // Re-render triggers effect
\`\`\`
This creates a death spiral. Be careful!
            `
        },
        {
            id: 'react-6-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Cleanup Functions 🧹',
            duration: '20 min read',
            content: `
# Deep Dive: Cleanup Functions 🧹

## 1. Leaving No Trace
When a component is removed from the screen (Unmounted), we must clean up.
*   Stop Intervals.
*   Disconnect WebSockets.
*   Remove Event Listeners.

## 2. How to Clean Up
Return a **function** from your effect.
\`\`\`javascript
useEffect(() => {
    const timer = setInterval(...);
    return () => clearInterval(timer); // Cleanup
}, []);
\`\`\`

## 3. React Strict Mode
In Development (Strict Mode), React runs your effect **Twice** (Mount -> Unmount -> Mount).
This is intentional! It forces you to verify that your cleanup logic works correctly.
            `
        },
        {
            id: 'react-6-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Data Fetching Patterns 📡',
            duration: '25 min read',
            content: `
# Deep Dive: Data Fetching Patterns 📡

## 1. Race Conditions
If you fetch data for ID=1, then quickly switch to ID=2.
The network is slow. ID=2 arrives first. Then ID=1 arrives and overwrites it.
You are now viewing User 2, but seeing User 1's data.

## 2. The "Ignore" Pattern
\`\`\`javascript
useEffect(() => {
    let ignore = false;
    fetchData().then(res => {
        if (!ignore) setData(res);
    });
    return () => { ignore = true; };
}, [id]);
\`\`\`
This prevents "stale" responses from overwriting fresh ones.

## 3. Libraries
In production, we rarely write raw \`fetch\` in \`useEffect\`.
We use libraries like **TanStack Query** (React Query) or **SWR**. They handle caching, deduping, and race conditions automatically.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-6-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Document Title',
            duration: '15 min',
            content: `
# Lab 1: The Document Title

Synchronize the browser tab title with your state.

## The Mission
1.  **Effect**: Use \`useEffect\`.
2.  **Logic**: Set \`document.title = \`Count: \${count}\`\`.
3.  **Dependency**: Re-run whenever \`count\` changes.

## Context
Visiting a page should update the tab name.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import: Import useEffect.',
                    completed: false,
                    regex: /import\s*{\s*[\s\S]*useEffect[\s\S]*}\s*from\s*['"]react['"]/
                },
                {
                    id: 2,
                    description: 'Effect: document.title assignment.',
                    completed: false,
                    regex: /document\.title\s*=\s*`.*`|document\.title\s*=\s*(['"]).*\1/
                },
                {
                    id: 3,
                    description: 'Dependency: Add [count] array.',
                    completed: false,
                    regex: /useEffect\s*\(\s*.*,\s*\[\s*count\s*\]\s*\)/
                }
            ],
            files: [
                {
                    name: 'TitleSync.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

export default function TitleSync() {
    const [count, setCount] = useState(0);

    // Task 1, 2, 3: Sync document.title
    

    return (
        <button onClick={() => setCount(c => c + 1)}>
            Count: {count}
        </button>
    );
}
`
                }
            ]
        },
        {
            id: 'react-6-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Fetch on Mount',
            duration: '25 min',
            content: `
# Lab 2: Fetch on Mount

Retrieve a list of "Todos" when the component loads.

## The Mission
1.  **State**: \`todos\` array.
2.  **Fetch**: Fetch \`https://jsonplaceholder.typicode.com/todos?_limit=5\`.
3.  **Dependency**: Empty array \`[]\` (Run once).
4.  **Render**: List the titles.

## Async Inside Effect
Remember, the effect function cannot be async. Define an async function *inside* it, or use \`.then\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Effect: Run fetch only on mount.',
                    completed: false,
                    regex: /useEffect\s*\(\s*.*,\s*\[\s*\]\s*\)/
                },
                {
                    id: 2,
                    description: 'Fetch: Call API correctly.',
                    completed: false,
                    regex: /fetch\s*\(['"]https:\/\/jsonplaceholder/
                },
                {
                    id: 3,
                    description: 'State: Update todos with result.',
                    completed: false,
                    regex: /setTodos\s*\(\s*data\s*\)/
                }
            ],
            files: [
                {
                    name: 'TodoList.jsx',
                    language: 'javascript',
                    content: `import { useState, useEffect } from 'react';

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    // Task 1 & 2: Fetch Data
    

    return (
        <ul>
            {/* Task 3: Render (already done for you, strictly checking logic) */}
            {todos.map(t => <li key={t.id}>{t.title}</li>)}
        </ul>
    );
}
`
                }
            ]
        },
        {
            id: 'react-6-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Window Resize (Cleanup)',
            duration: '25 min',
            content: `
# Lab 3: Window Resize (Cleanup)

Track the window width. We need an Event Listener.
But we MUST clean it up to avoid memory leaks.

## The Mission
1.  **Setup**: \`window.addEventListener('resize', updateWidth)\`.
2.  **Cleanup**: Return function calling \`removeEventListener\`.
3.  **Empty Array**: Only set up once.

## Memory Leaks
If you navigate away and come back 10 times, without cleanup, you will have 10 listeners running!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Setup: Add event listener.',
                    completed: false,
                    regex: /window\.addEventListener\s*\(\s*['"]resize['"]/
                },
                {
                    id: 2,
                    description: 'Cleanup: Return removeEventListener.',
                    completed: false,
                    regex: /return\s*\(\s*\)\s*=>\s*window\.removeEventListener/
                },
                {
                    id: 3,
                    description: 'Dependency: Ensure it runs once.',
                    completed: false,
                    regex: /,\s*\[\s*\]\s*\)/
                }
            ],
            files: [
                {
                    name: 'WindowTracker.jsx',
                    language: 'javascript',
                    content: `import { useState, useEffect } from 'react';

export default function WindowTracker() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        
        // Task 1: Add Listener
        

        // Task 2: Cleanup Function
        
    }, []); // Task 3

    return <h1>Width: {width}px</h1>;
}
`
                }
            ]
        },
        {
            id: 'react-6-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Countdown',
            duration: '30 min',
            content: `
# Lab 4: The Countdown

Create a timer that counts down from 10.
This requires \`setInterval\` and proper dependency management.

## The Mission
1.  **Interval**: \`setInterval\` runs every 1000ms.
2.  **Update**: \`setCount(c => c - 1)\` (Functional Update!).
3.  **Cleanup**: \`clearInterval\`.

## Functional Update
Why \`c => c - 1\`?
If you use \`count - 1\`, the closure captures the *initial* value.
Functional updates always get the *latest* value.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Timer: setInterval every 1000ms.',
                    completed: false,
                    regex: /setInterval\s*\(/
                },
                {
                    id: 2,
                    description: 'Update: Use functional update pattern.',
                    completed: false,
                    regex: /setCount\s*\(\s*[a-zA-Z]+\s*=>\s*[a-zA-Z]+\s*-\s*1\s*\)/
                },
                {
                    id: 3,
                    description: 'Cleanup: clearInterval.',
                    completed: false,
                    regex: /clearInterval\s*\(.*\)/
                }
            ],
            files: [
                {
                    name: 'Countdown.jsx',
                    language: 'javascript',
                    content: `import { useState, useEffect } from 'react';

export default function Countdown() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        // Task 1: Interval
        
        // Task 2: Update logic inside
        
        // Task 3: Cleanup
    }, []);

    return <h1>T-Minus: {count}</h1>;
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'react-6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Effects & Lifecycle Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'When does an effect with an empty dependency array [] run?',
                    options: [
                        'On every render',
                        'Only once, immediately after the component mounts',
                        'When the component unmounts',
                        'Never'
                    ],
                    correctIndex: 1,
                    explanation: 'The empty array tells React "I depend on nothing from props or state", so it only needs to run the setup once.'
                },
                {
                    id: 'q2',
                    question: 'How do you perform cleanup (like removing a listener)?',
                    options: [
                        'Call clean() inside the effect',
                        'Use the useCleanup hook',
                        'Return a function from the useEffect callback',
                        'It happens automatically'
                    ],
                    correctIndex: 2,
                    explanation: 'The function returned by the effect is the "Cleanup Function". React calls it before unmounting or re-running the effect.'
                },
                {
                    id: 'q3',
                    question: 'Why does your API call run TWICE in development?',
                    options: [
                        'Because of a bug in your code',
                        'Because of React Strict Mode',
                        'Because the network is slow',
                        'Because you forgot the dependency array'
                    ],
                    correctIndex: 1,
                    explanation: 'Strict Mode intentionally mounts -> unmounts -> mounts components to ensure your cleanup logic is correct and handled idempotently.'
                },
                {
                    id: 'q4',
                    question: 'If you use a variable "userId" inside useEffect, what must you do?',
                    options: [
                        'Declare it as a global variable',
                        'Add it to the dependency array',
                        'Use useRef',
                        'Nothing'
                    ],
                    correctIndex: 1,
                    explanation: 'React Rule: All reactive values read inside an Effect must be declared as dependencies.'
                },
                {
                    id: 'q5',
                    question: 'What happens if you omit the dependency array entirely?',
                    options: [
                        'It runs once',
                        'It throws an error',
                        'It runs after every single render',
                        'It never runs'
                    ],
                    correctIndex: 2,
                    explanation: 'Without the array, React assumes the effect depends on everything, so it re-runs on every update.'
                }
            ]
        }
    ]
};
