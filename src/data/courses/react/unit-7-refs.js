import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7Refs = {
    id: 'react-unit-7',
    title: 'Refs & Portals - Breaking the Rules',
    description: 'Sometimes you need to break out of the data flow. Learn to access the DOM directly with Refs and teleport components with Portals.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: useRef vs useState 🥊',
            duration: '20 min read',
            content: `
# Deep Dive: useRef vs useState 🥊

## 1. The Mutable Box
\`useState\` triggers a re-render when you change it.
\`useRef\` is just a plain JavaScript object: \`{ current: ... }\`.
Changing \`ref.current\` does **NOT** trigger a re-render.

## 2. When to use which?
*   **useState**: If the data affects the **Visual UI** (e.g., input text, loading spinner, list items).
*   **useRef**: If the data is "behind the scenes" (e.g., Timer IDs, previous values, DOM elements).

## 3. Persistence
Like State, a Ref value **persists** between renders.
Regular variables (\`let x = 0\`) reset every time the component function runs.
Refs stay the same.
            `
        },
        {
            id: 'react-7-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Accessing the DOM 🕸️',
            duration: '20 min read',
            content: `
# Deep Dive: Accessing the DOM 🕸️

## 1. The Virtual DOM vs Real DOM
React works on the Virtual DOM. It tries to abstract the Real DOM away from you.
But sometimes, you need to:
*   Focus an input.
*   Scroll to a specific position.
*   Measure an element's width.
*   Integrate with 3rd party non-React libraries (like D3.js or Leaflet).

## 2. The Ref Attribute
\`\`\`jsx
const myInput = useRef(null);
return <input ref={myInput} />;
\`\`\`
After React builds the DOM, it sets \`myInput.current\` to be the actual HTML Input Element.
You can then call \`myInput.current.focus()\`.

## 3. Safety First
Always check if \`ref.current\` exists before using it.
The Ref is \`null\` during the very first render pass (before the DOM is created).
            `
        },
        {
            id: 'react-7-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Forwarding Refs ⏩',
            duration: '25 min read',
            content: `
# Deep Dive: Forwarding Refs ⏩

## 1. The Problem
You create a custom \`<MyInput />\` component.
The parent wants to focus it.
\`<MyInput ref={inputRef} />\` -> **FAILS**.
React does NOT automatically pass \`ref\` to children. It's not a prop.

## 2. The Solution: forwardRef
You must wrap your child component in \`forwardRef\`.
\`\`\`jsx
const MyInput = forwardRef((props, ref) => {
    return <input ref={ref} {...props} />;
});
\`\`\`
Now the parent accesses the underlying DOM node directly through your component.
            `
        },
        {
            id: 'react-7-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Portals 🌀',
            duration: '15 min read',
            content: `
# Deep Dive: Portals 🌀

## 1. The Z-Index War
You have a Modal inside a Sidebar inside a Card.
The Card has \`overflow: hidden\`.
Your Modal gets clipped! It cannot appear on top of everything.

## 2. Teleportation
\`createPortal\` lets you render a component into a **different part of the DOM** than where it is defined in the React tree.
Usually, we render Modals into \`document.body\` or a special \`#modal-root\` div.

## 3. Event Bubbling
Even though the DOM node is far away, **Events still bubble up** the React Tree hierarchy!
A click in the Portal will still trigger \`onClick\` in the Parent component. Magic.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-7-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Render Counter',
            duration: '20 min',
            content: `
# Lab 1: The Render Counter

We want to know how many times the component has rendered.
If we use \`useState\`, updating the count would trigger *another* user render -> Infinite Loop.
We MUST use \`useRef\`.

## The Mission
1.  **Ref**: \`const count = useRef(0)\`.
2.  **Effect**: \`useEffect\` (no deps or all deps) -> \`count.current++\`.
3.  **Display**: Show \`count.current\`.

## Note
In Strict Mode, this might double-count. That is expected behavior in Dev.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Ref: Create useRef(0).',
                    completed: false,
                    regex: /useRef\s*\(\s*0\s*\)/
                },
                {
                    id: 2,
                    description: 'Update: Increment current in useEffect.',
                    completed: false,
                    regex: /count\.current\s*\+\+|count\.current\s*\+=\s*1/
                },
                {
                    id: 3,
                    description: 'Render: Display count.current.',
                    completed: false,
                    regex: /{\s*count\.current\s*}/
                }
            ],
            files: [
                {
                    name: 'RenderTracker.jsx',
                    language: 'javascript',
                    content: `import { useRef, useEffect, useState } from 'react';

export default function RenderTracker() {
    const [text, setText] = useState('');
    // Task 1: Create Ref
    

    useEffect(() => {
        // Task 2: Increment Ref
        
    });

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <p>Renders: {/* Task 3 */}</p>
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-7-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Auto-Focus Input',
            duration: '20 min',
            content: `
# Lab 2: Auto-Focus Input

When the user clicks "Search", programmatically focus the input box.

## The Mission
1.  **Ref**: \`inputRef = useRef(null)\`.
2.  **Bind**: \`<input ref={inputRef} />\`.
3.  **Action**: Button click calls \`inputRef.current.focus()\`.

## DOM API
\`focus()\` is a standard DOM method on HTMLInputElement.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Ref: Create null ref.',
                    completed: false,
                    regex: /useRef\s*\(\s*null\s*\)/
                },
                {
                    id: 2,
                    description: 'Bind: Attach to input.',
                    completed: false,
                    regex: /<input\s+ref\s*=\s*{\s*inputRef\s*}/
                },
                {
                    id: 3,
                    description: 'Action: Call focus() on click.',
                    completed: false,
                    regex: /inputRef\.current\.focus\s*\(\s*\)/
                }
            ],
            files: [
                {
                    name: 'SearchFocus.jsx',
                    language: 'javascript',
                    content: `import { useRef } from 'react';

export default function SearchFocus() {
    // Task 1: Ref
    

    const handleSearchClick = () => {
        // Task 3: Focus
        
    };

    return (
        <div>
            {/* Task 2: Bind Ref */}
            <input placeholder="Search..." />
            <button onClick={handleSearchClick}>🔍 Focus</button>
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-7-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Video Player Control',
            duration: '25 min',
            content: `
# Lab 3: Video Player Control

Control a \`<video>\` element (HTML5 Media API) from React buttons.

## The Mission
1.  **Ref**: Attach ref to \`<video>\`.
2.  **Play**: \`videoRef.current.play()\`.
3.  **Pause**: \`videoRef.current.pause()\`.

## Safety
Check if \`videoRef.current\` exists before calling methods, just in case.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Ref: Attach to video tag.',
                    completed: false,
                    regex: /<video\s+ref\s*=\s*{\s*videoRef\s*}/
                },
                {
                    id: 2,
                    description: 'Play: Call .play().',
                    completed: false,
                    regex: /videoRef\.current\.play\s*\(\s*\)/
                },
                {
                    id: 3,
                    description: 'Pause: Call .pause().',
                    completed: false,
                    regex: /videoRef\.current\.pause\s*\(\s*\)/
                }
            ],
            files: [
                {
                    name: 'VideoPlayer.jsx',
                    language: 'javascript',
                    content: `import { useRef } from 'react';

export default function VideoPlayer() {
    const videoRef = useRef(null);

    return (
        <div>
            {/* Task 1: Attach Ref */}
            <video width="250" src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            
            <div>
                {/* Task 2 & 3: Controls */}
                <button onClick={() => {}}>Play</button>
                <button onClick={() => {}}>Pause</button>
            </div>
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-7-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Portal Modal',
            duration: '30 min',
            content: `
# Lab 4: The Portal Modal

Render a modal overlay directly into the \`document.body\`.

## The Mission
1.  **Import**: \`createPortal\` from \`react-dom\`.
2.  **Return**: Instead of JSX, return \`createPortal(JSX, document.body)\`.
3.  **Condition**: Only render if \`isOpen\` is true.

## Best Practice
Usually, you create a \`<div id="modal-root"></div>\` in your index.html, but \`document.body\` works for this lab.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import: createPortal.',
                    completed: false,
                    regex: /import\s*{\s*createPortal\s*}\s*from\s*['"]react-dom['"]/
                },
                {
                    id: 2,
                    description: 'Portal: Use createPortal call.',
                    completed: false,
                    regex: /createPortal\s*\(\s*<div/
                },
                {
                    id: 3,
                    description: 'Target: document.body.',
                    completed: false,
                    regex: /createPortal\s*\(.*,\s*document\.body\s*\)/
                }
            ],
            files: [
                {
                    name: 'Modal.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';
// Task 1: Import createPortal here

function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    // Task 2 & 3: Return Portal
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

export default function App() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(true)}>Open Modal</button>
            <Modal isOpen={show} onClose={() => setShow(false)}>
                <h1>Hello from Body!</h1>
            </Modal>
        </div>
    );
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'react-7-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Refs & Portals Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Does changing ref.current trigger a re-render?',
                    options: [
                        'Yes, always',
                        'No, never',
                        'Only in Strict Mode',
                        'Only if usage is inside JSX'
                    ],
                    correctIndex: 1,
                    explanation: 'Refs are for data that is not needed for rendering. Changing them is a silent operation to React.'
                },
                {
                    id: 'q2',
                    question: 'When is the ref.current value first available?',
                    options: [
                        'During the render phase',
                        'Immediately when the component mounts',
                        'After the component mounts (commit phase)',
                        'Before the component mounts'
                    ],
                    correctIndex: 2,
                    explanation: 'React sets the ref only after the DOM node has been created. Initially, it is likely null.'
                },
                {
                    id: 'q3',
                    question: 'What is the primary use case for createPortal?',
                    options: [
                        'To fetch data from another server',
                        'To render a component outside of its parent DOM hierarchy (like Modals)',
                        'To improve performance',
                        'To clone a component'
                    ],
                    correctIndex: 1,
                    explanation: 'Portals allow you to visually break out of containers (z-index issues) while keeping logical component hierarchy.'
                },
                {
                    id: 'q4',
                    question: 'How do you pass a ref to a child component?',
                    options: [
                        'Just add ref={myRef} to the child tag',
                        'Wrap the child component in React.forwardRef',
                        'Use Context',
                        'You cannot pass refs'
                    ],
                    correctIndex: 1,
                    explanation: 'Custom components do not accept `ref` by default. You must explicitly opt-in using forwardRef.'
                },
                {
                    id: 'q5',
                    question: 'Which is a valid reason to use a Ref?',
                    options: [
                        'To store the user typed value in an input',
                        'To perform an animation on a DOM element directly',
                        'To toggle a boolean for conditional rendering',
                        'To pass data to a sibling'
                    ],
                    correctIndex: 1,
                    explanation: 'Animation libraries often need direct DOM access. Inputs should usually be Controlled (State), but Refs are valid for unmanaged heavy media interactions.'
                }
            ]
        }
    ]
};
