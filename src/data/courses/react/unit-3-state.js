import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3State = {
    id: 'react-unit-3',
    title: 'State & Events - The Heartbeat',
    description: 'Static sites are boring. Learn how to make components "alive" with useState, Handle Events, and manage Controlled Inputs.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: State vs Props 🧠',
            duration: '20 min read',
            content: `
# Deep Dive: State vs Props 🧠

## 1. The Core Difference
If **Props** are the "Configuration" (passed from outside), then **State** is the "Memory" (managed inside).
*   **Props**: \`read-only\`. Immutable. "The Boss told me to display this."
*   **State**: \`read-write\`. Mutable. "I am remembering that the user clicked me 5 times."

## 2. The Render Loop
When State changes, React reacts.
1.  You call \`setCount(5)\`.
2.  React marks the component as "Dirty".
3.  React calls your component function again.
4.  Your function returns new JSX showing "5".
5.  React updates the DOM.

> **Crucial**: You cannot modify local variables (\`let x = 0\`) and expect React to notice. React only watches \`useState\`.

## 3. Asynchronous Updates
Setting state is not instant.
\`\`\`javascript
const [count, setCount] = useState(0);
function click() {
    setCount(count + 1); // Request update
    console.log(count);  // Still prints 0!
}
\`\`\`
React batches updates for performance. It's like a waiter taking orders from the whole table before walking to the kitchen.
            `
        },
        {
            id: 'react-3-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Rules of Hooks 📜',
            duration: '15 min read',
            content: `
# Deep Dive: The Rules of Hooks 📜

## 1. Top Level Only
You must call Hooks (\`useState\`, \`useEffect\`) at the very top of your function.
❌ **Don't do this**:
\`\`\`javascript
if (condition) {
    const [user, setUser] = useState(); // ERROR
}
\`\`\`
**Why?** React relies on the order of hooks to track them. If you put a hook inside an \`if\`, the order changes, and React gets confused.

## 2. Only in React Functions
❌ **Don't do this**:
\`\`\`javascript
function regularFunction() {
    const [x, setX] = useState(0); // ERROR
}
\`\`\`
Hooks only work inside **Component Functions** (start with Capital) or **Custom Hooks** (start with \`use\`).

## 3. The Hook Prefix
All hooks start with \`use\`.
*   \`useState\`
*   \`useEffect\`
*   \`useContext\`
This is a naming convention enforced by linting rules.
            `
        },
        {
            id: 'react-3-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Controlled Components 🕹️',
            duration: '25 min read',
            content: `
# Deep Dive: Controlled Components 🕹️

## 1. Who owns the data?
In HTML, an input element manages its own state.
\`<input />\` remembers what you typed.

In React, we want **Single Source of Truth**.
We want React to control the input, not the DOM.

## 2. The Feedback Loop
1.  **State**: React holds the value (\`state = ""\`).
2.  **Pass**: React passes value to Input (\`value={state}\`).
3.  **Type**: User types a letter.
4.  **Event**: Input fires \`onChange\`.
5.  **Update**: We call \`setState(newValue)\`.
6.  **Loop**: React updates State -> Input shows new letter.

## 3. Why bother?
If React controls the input:
*   We can validate it instantly (Max length, Email format).
*   We can format it (Phone number masking).
*   We can disable the Submit button if it's empty.
            `
        },
        {
            id: 'react-3-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Lifting State Up 🏗️',
            duration: '20 min read',
            content: `
# Deep Dive: Lifting State Up 🏗️

## 1. Sibling Rivalry
What if Sibling A needs to know something about Sibling B?
Components cannot talk sideways.

**Scenario**:
*   \`<TemperatureInput />\` (User types 100°C)
*   \`<BoilingVerdict />\` (Needs to know if 100 >= 100)

## 2. The Solution
If two siblings need to share state, you must move the state **UP** to their common parent.
1.  **Parent** holds the state (\`temp\`).
2.  **Parent** passes \`temp\` down to both siblings.
3.  **Parent** passes \`setTemp\` down to Input.

Now they share the same data source. This is the bedrock of React architecture.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Counter (useState)',
            duration: '20 min',
            content: `
# Lab 1: The Counter (useState)

The "Hello World" of State. We need to track a number that changes.

## The Mission
1.  **Initialize**: property \`count\` to \`0\`.
2.  **Increment**: Button calls \`setCount(count + 1)\`.
3.  **Decrement**: Button calls \`setCount(count - 1)\`.

## Syntax
\`\`\`javascript
const [count, setCount] = useState(0);
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'State: Initialize [count, setCount] with 0.',
                    completed: false,
                    regex: /const\s*\[\s*count\s*,\s*setCount\s*\]\s*=\s*useState\s*\(\s*0\s*\)/
                },
                {
                    id: 2,
                    description: 'Events: Add onClick handlers for + and -.',
                    completed: false,
                    regex: /onClick\s*=\s*{\s*\(\s*\)\s*=>/
                },
                {
                    id: 3,
                    description: 'Logic: Update count correctly.',
                    completed: false,
                    regex: /setCount\s*\(\s*count\s*[+-]\s*1\s*\)/
                }
            ],
            files: [
                {
                    name: 'Counter.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

export default function Counter() {
    // Task 1: Create State
    
    return (
        <div>
            {/* Task 2 & 3: Add buttons and logic */}
            <h1>0</h1>
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-3-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Light Switch (Boolean)',
            duration: '20 min',
            content: `
# Lab 2: The Light Switch (Boolean)

State can be anything. Let's track a boolean flag.

## The Mission
1.  **State**: \`isOn\` initialized to \`false\`.
2.  **Style**: If \`isOn\` is true, div background is "yellow", else "black".
3.  **Toggle**: Button click flips the state (\`!isOn\`).

## Toggling
\`\`\`javascript
setIsOn(!isOn);
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'State: Initialize isOn to false.',
                    completed: false,
                    regex: /const\s*\[\s*isOn\s*,\s*setIsOn\s*\]\s*=\s*useState\s*\(\s*false\s*\)/
                },
                {
                    id: 2,
                    description: 'Toggle: setIsOn(!isOn) on click.',
                    completed: false,
                    regex: /setIsOn\s*\(\s*!isOn\s*\)/
                },
                {
                    id: 3,
                    description: 'Visual: Conditional styling based on state.',
                    completed: false,
                    regex: /backgroundColor:\s*isOn\s*\?\s*['"]yellow['"]\s*:\s*['"]black['"]/
                }
            ],
            files: [
                {
                    name: 'Switch.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

export default function Switch() {
    // Task 1: State
    
    return (
        <div style={{ /* Task 3: Color logic */ }}>
            {/* Task 2: Click to toggle */}
            <button>Toggle</button>
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-3-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Input (Generic Sync)',
            duration: '25 min',
            content: `
# Lab 3: The Input (Generic Sync)

We need to capture user text. This requires a Controlled Component.

## The Mission
1.  **State**: \`text\` initialized to empty string \`""\`.
2.  **Bind**: Input \`value={text}\`.
3.  **Sync**: Input \`onChange={e => setText(e.target.value)}\`.
4.  **Mirror**: Display the typed text in a \`p\` tag below.

## The Event Object
\`e.target.value\` contains the current text in the box.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'State: Create text state.',
                    completed: false,
                    regex: /const\s*\[\s*text\s*,\s*setText\s*\]\s*=\s*useState\s*\(\s*['"]['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Control: Add value={text} to input.',
                    completed: false,
                    regex: /<input[^>]*value\s*=\s*{\s*text\s*}/
                },
                {
                    id: 3,
                    description: 'Update: Add onChange handler.',
                    completed: false,
                    regex: /onChange\s*=\s*{\s*e\s*=>\s*setText\s*\(\s*e\.target\.value\s*\)\s*}/
                }
            ],
            files: [
                {
                    name: 'Mirror.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

export default function Mirror() {
    // Task 1: State
    
    return (
        <div>
            {/* Task 2 & 3: Controlled Input */}
            <input />
            
            <p>You typed: {/* Show text */}</p>
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-3-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Lifting State',
            duration: '30 min',
            content: `
# Lab 4: Lifting State

We have two buttons. We want to know how many times *either* was clicked.
The count must live in the Parent.

## The Mission
1.  **Parent**: Create \`count\` state in \`App\`.
2.  **Child**: Create \`Button\` component that accepts \`onClick\`.
3.  **Pass**: Pass \`() => setCount(c + 1)\` down to both buttons.
4.  **Display**: Show total count in Parent.

## Diagram
\`\`\`text
[ App (State: 5) ]
    |
    |-- [ Button (Click me) -> calls parent ]
    |
    |-- [ Button (Click me) -> calls parent ]
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Parent: Initialize state in App.',
                    completed: false,
                    regex: /function\s+App[\s\S]*useState/
                },
                {
                    id: 2,
                    description: 'Prop: Pass click handler to Clicker.',
                    completed: false,
                    regex: /<Clicker\s+handleClick\s*=/
                },
                {
                    id: 3,
                    description: 'Child: Use the prop in onClick.',
                    completed: false,
                    regex: /function\s+Clicker[\s\S]*onClick\s*=\s*{\s*handleClick\s*}/
                }
            ],
            files: [
                {
                    name: 'App.jsx',
                    language: 'javascript',
                    content: `// Lifting State Up

function Clicker({ handleClick }) {
    return <button onClick={handleClick}>Click Me (Child)</button>;
}

export default function App() {
    // Task 1: State here
    
    // Task 2: Pass down handler
    return (
        <div>
            <h1>Total Clicks: {0}</h1>
            <Clicker />
            <Clicker />
        </div>
    );
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'react-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'State Master Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the main difference between Props and State?',
                    options: [
                        'Props are mutable, State is immutable',
                        'Props are internal, State is external',
                        'Props are passed down (read-only), State is managed inside (read-write)',
                        'There is no difference'
                    ],
                    correctIndex: 2,
                    explanation: 'Props allows parents to control children. State allows children to control themselves.'
                },
                {
                    id: 'q2',
                    question: 'Which Hook is used to create state?',
                    options: [
                        'useData',
                        'useState',
                        'useMemory',
                        'createState'
                    ],
                    correctIndex: 1,
                    explanation: 'useState is the fundamental hook for adding reactivity to functional components.'
                },
                {
                    id: 'q3',
                    question: 'Why must we NOT modify state directly (e.g., count = 5)?',
                    options: [
                        'It causes a syntax error',
                        'React will yell at you',
                        'React will not be notified of the change and will not Re-render',
                        'The browser will crash'
                    ],
                    correctIndex: 2,
                    explanation: 'React relies on the setter function (`setCount`) to trigger the reconciliation (re-render) process.'
                },
                {
                    id: 'q4',
                    question: 'In a Controlled Input, what defines the value shown in the box?',
                    options: [
                        'What the user typed',
                        'The DOM',
                        'The React State passed to the `value` prop',
                        'The placeholder'
                    ],
                    correctIndex: 2,
                    explanation: 'The React State is the single source of truth. The input just reflects what React tells it to display.'
                },
                {
                    id: 'q5',
                    question: 'If two sibling components need to share data, what should you do?',
                    options: [
                        'Use LocalStorage',
                        'Duplicate the state in both',
                        'Lift the State Up to their closest common parent',
                        'Pass props sideways'
                    ],
                    correctIndex: 2,
                    explanation: 'Lifting State Up allows the parent to manage the data and pass it down to both children.'
                }
            ]
        }
    ]
};
