// React.js Fundamentals - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const reactCourse = {
    id: 'react',
    title: 'React.js Fundamentals',
    description: 'Build modern user interfaces with React - the most popular JavaScript library for building UIs.',

    units: [
        // ============================================
        // UNIT 1: Introduction to React
        // ============================================
        {
            id: 'react-unit-1',
            title: 'Introduction to React',
            description: 'Understand what React is and why it matters',
            items: [
                {
                    id: 'react-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is React?',
                    duration: '5 min read',
                    content: `
# What is React?

**React** is a JavaScript library for building user interfaces, created by Facebook (now Meta) in 2013.

## Why React?

### The Problem with Vanilla JS
\`\`\`javascript
// Updating UI manually is painful
document.getElementById('count').textContent = newCount;
document.getElementById('list').innerHTML = items.map(i => \`<li>\${i}</li>\`).join('');
// What if count affects list? What if list affects something else?
// 😱 Spaghetti code!
\`\`\`

### The React Solution
\`\`\`jsx
function Counter() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
// React handles all the DOM updates automatically! ✨
\`\`\`

## Key Concepts

| Concept | Description |
|---------|-------------|
| **Components** | Reusable UI building blocks |
| **JSX** | HTML-like syntax in JavaScript |
| **Props** | Data passed to components |
| **State** | Data that changes over time |
| **Virtual DOM** | Efficient UI updates |

## Who Uses React?

- Facebook, Instagram, WhatsApp
- Netflix, Airbnb, Uber
- Discord, Dropbox, Reddit
- And thousands more!

> 💡 React is the #1 most wanted web framework according to Stack Overflow surveys.
                    `
                },
                {
                    id: 'react-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Your First Component',
                    duration: '20 min',
                    content: `
# Your First React Component

## What is a Component?

A component is a **reusable piece of UI**. Think of it like LEGO blocks - you build complex UIs by combining simple components.

## Function Components

\`\`\`jsx
function Welcome() {
    return <h1>Hello, ZeroCode!</h1>;
}
\`\`\`

## JSX - JavaScript + XML

JSX lets you write HTML-like code in JavaScript:

\`\`\`jsx
// This JSX:
const element = <h1 className="title">Hello</h1>;

// Becomes this JavaScript:
const element = React.createElement('h1', {className: 'title'}, 'Hello');
\`\`\`

## JSX Rules

1. **Return single element** - Wrap multiple elements in a parent or \`<>\`
2. **className not class** - \`class\` is reserved in JS
3. **camelCase attributes** - \`onClick\`, \`onChange\`, \`htmlFor\`
4. **Close all tags** - \`<img />\`, \`<br />\`

\`\`\`jsx
function Card() {
    return (
        <>
            <h2>Title</h2>
            <p>Description</p>
        </>
    );
}
\`\`\`

---

## Your Mission
Create your first React component!
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, create component: function Greeting() { return ... }', completed: false, regex: /function\s+Greeting\s*\(/ },
                        { id: 2, description: 'Inside Greeting return, add <h1>Hello ZeroCode!</h1>', completed: false, regex: /return\s*\(?[\s\S]*<h1>/ },
                        { id: 3, description: 'Inside Greeting return, add <p>Welcome to React</p> after h1', completed: false, regex: /<h1>[\s\S]*<\/h1>[\s\S]*<p>/ },
                        { id: 4, description: 'Wrap h1 and p with <> ... </> or <div> ... </div> because React needs 1 parent element', completed: false, regex: /(<>|<div)[\s\S]*<h1>[\s\S]*<p>[\s\S]*(<\/>|<\/div>)/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; justify-content: center; align-items: center; margin: 0; }
#root { background: white; padding: 40px 60px; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); text-align: center; }
h1 { color: #0a192f; margin: 0 0 10px 0; }
p { color: #666; margin: 0; }` },
                        { name: 'script.js', language: 'javascript', content: `// Create your first React component!

// 1. Create a Greeting function component


// Render it (don't modify this)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);
` }
                    ]
                },
                {
                    id: 'react-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'React Basics Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is JSX?',
                            options: ['A new programming language', 'HTML inside JavaScript', 'A CSS framework', 'A database'],
                            correctIndex: 1,
                            explanation: 'JSX is a syntax extension that lets you write HTML-like code in JavaScript.'
                        },
                        {
                            id: 'q2',
                            question: 'Why use className instead of class in JSX?',
                            options: ['It\'s faster', 'class is a reserved word in JavaScript', 'React requires it', 'It\'s more readable'],
                            correctIndex: 1,
                            explanation: 'class is a reserved keyword in JavaScript for defining classes.'
                        },
                        {
                            id: 'q3',
                            question: 'What must a React component return?',
                            options: ['A string', 'An array', 'A single JSX element', 'Nothing'],
                            correctIndex: 2,
                            explanation: 'Components must return a single JSX element (can use fragments to wrap multiple).'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 2: Props
        // ============================================
        {
            id: 'react-unit-2',
            title: 'Props - Passing Data',
            description: 'Learn how to pass data between components',
            items: [
                {
                    id: 'react-2-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding Props',
                    duration: '5 min read',
                    content: `
# Understanding Props

**Props** (short for properties) are how you pass data from parent to child components.

## The Concept

Think of props like function arguments:

\`\`\`javascript
// Regular function
function greet(name) {
    return "Hello, " + name;
}
greet("Alice");

// React component
function Greeting({ name }) {
    return <h1>Hello, {name}!</h1>;
}
<Greeting name="Alice" />
\`\`\`

## Props are Read-Only

⚠️ **Never modify props!** They flow one-way: parent > child.

\`\`\`jsx
// ❌ WRONG
function Bad({ count }) {
    count = count + 1;  // Don't do this!
}

// ✅ RIGHT - use state for changes
function Good({ initialCount }) {
    const [count, setCount] = useState(initialCount);
}
\`\`\`

## Common Props Patterns

\`\`\`jsx
// String
<Card title="Hello" />

// Number
<Counter start={10} />

// Boolean
<Button disabled={true} />
<Button disabled />  // shorthand for true

// Object
<User data={{ name: "Alice", age: 21 }} />

// Function
<Button onClick={() => alert('Clicked!')} />

// Children
<Card>
    <p>This is children prop!</p>
</Card>
\`\`\`
                    `
                },
                {
                    id: 'react-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Using Props',
                    duration: '20 min',
                    content: `
# Using Props in Components

## Receiving Props

\`\`\`jsx
// Method 1: Props object
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Method 2: Destructuring (preferred)
function Welcome({ name }) {
    return <h1>Hello, {name}!</h1>;
}

// Method 3: Multiple props
function Card({ title, description, image }) {
    return (
        <div>
            <img src={image} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
\`\`\`

## Default Props

\`\`\`jsx
function Button({ text = "Click me", color = "blue" }) {
    return <button style={{ background: color }}>{text}</button>;
}

<Button />                    // Uses defaults
<Button text="Submit" />      // Custom text, default color
\`\`\`

## Children Prop

\`\`\`jsx
function Card({ children }) {
    return <div className="card">{children}</div>;
}

<Card>
    <h2>Title</h2>
    <p>Any content here!</p>
</Card>
\`\`\`

---

## Your Mission
Create a reusable StudentCard component with props.
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, create component: function StudentCard({ name, major }) { ... }', completed: false, regex: /function\s+StudentCard\s*\(\s*\{/ },
                        { id: 2, description: 'In StudentCard parameter, destructure name prop: function StudentCard({ name, ... })', completed: false, regex: /\{\s*name[^}]*\}/ },
                        { id: 3, description: 'In StudentCard parameter, destructure major prop: function StudentCard({ name, major })', completed: false, regex: /\{\s*[^}]*major[^}]*\}/ },
                        { id: 4, description: 'In StudentCard return, display props: <h3>{name}</h3> and <p>{major}</p>', completed: false, regex: /\{name\}[\s\S]*\{major\}|\{major\}[\s\S]*\{name\}/ },
                        { id: 5, description: 'In App, use component: <StudentCard name="Alice" major="Software Engineering" />', completed: false, regex: /<StudentCard\s+[^>]*name=/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: 'Segoe UI', sans-serif; background: #f0f2f5; min-height: 100vh; padding: 40px; margin: 0; }
#root { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
.student-card { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); min-width: 250px; text-align: center; }
.student-card h3 { color: #0a192f; margin: 0 0 8px 0; }
.student-card p { color: #666; margin: 0; }
.student-card .major { color: #800000; font-weight: 600; }` },
                        { name: 'script.js', language: 'javascript', content: `// Create a reusable StudentCard component

// 1. Create StudentCard with name and major props


// 2. Render multiple cards with different data
function App() {
    return (
        <>
            {/* Use StudentCard here with different props */}
            
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
` }
                    ]
                },
                {
                    id: 'react-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Props Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Can you modify props inside a component?',
                            options: ['Yes, always', 'No, props are read-only', 'Only strings', 'Only with permission'],
                            correctIndex: 1,
                            explanation: 'Props are immutable. Use state if you need to change values.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you pass a number as a prop?',
                            options: ['count="5"', 'count={5}', 'count=5', '{count: 5}'],
                            correctIndex: 1,
                            explanation: 'Use curly braces {} for JavaScript expressions including numbers.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 3: State with useState
        // ============================================
        {
            id: 'react-unit-3',
            title: 'State with useState',
            description: 'Make your components interactive with state',
            items: [
                {
                    id: 'react-3-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding State',
                    duration: '5 min read',
                    content: `
# Understanding State

**State** is data that changes over time and triggers re-renders.

## Props vs State

| Props | State |
|-------|-------|
| Passed from parent | Managed within component |
| Read-only | Can be updated |
| Like function arguments | Like local variables |

## The useState Hook

\`\`\`jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    //     ↑        ↑              ↑
    //   value   setter      initial value
    
    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
\`\`\`

## How State Updates Work

1. User clicks button
2. \`setCount(count + 1)\` is called
3. React schedules a re-render
4. Component runs again with new state
5. UI updates to show new value

## State Update Rules

\`\`\`jsx
// ❌ Direct mutation doesn't work
count = count + 1;

// ✅ Use the setter function
setCount(count + 1);

// ✅ Functional update (safer for async)
setCount(prev => prev + 1);
\`\`\`
                    `
                },
                {
                    id: 'react-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Building a Counter',
                    duration: '20 min',
                    content: `
# Building an Interactive Counter

## Basic Counter

\`\`\`jsx
function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
        </div>
    );
}
\`\`\`

## Multiple State Variables

\`\`\`jsx
function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);
    
    // Each has its own setter
}
\`\`\`

## State with Objects

\`\`\`jsx
const [user, setUser] = useState({ name: '', age: 0 });

// Update one property (spread existing)
setUser({ ...user, name: 'Alice' });
\`\`\`

---

## Your Mission
Build a counter with increment, decrement, and reset.
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, useState is available from React (const { useState } = React;)', completed: false, regex: /useState/ },
                        { id: 2, description: 'In Counter, create state: const [count, setCount] = useState(0);', completed: false, regex: /useState\s*\(\s*0\s*\)/ },
                        { id: 3, description: 'In Counter, create increment function: const increment = () => setCount(count + 1);', completed: false, regex: /setCount\s*\([^)]*\+/ },
                        { id: 4, description: 'In Counter, create decrement function: const decrement = () => setCount(count - 1);', completed: false, regex: /setCount\s*\([^)]*-/ },
                        { id: 5, description: 'On button, add onClick: <button onClick={increment}>+</button>', completed: false, regex: /onClick\s*=\s*\{/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: 'Segoe UI', sans-serif; background: #0a192f; min-height: 100vh; display: flex; justify-content: center; align-items: center; margin: 0; }
.counter { background: white; padding: 40px 60px; border-radius: 20px; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
.counter h1 { font-size: 5rem; color: #0a192f; margin: 0 0 20px 0; }
.counter button { font-size: 1.5rem; padding: 10px 25px; margin: 0 10px; border: none; border-radius: 10px; cursor: pointer; transition: transform 0.2s; }
.counter button:hover { transform: scale(1.1); }
.counter button:first-of-type { background: #ff4444; color: white; }
.counter button:last-of-type { background: #44ff44; color: #333; }
.counter button:nth-of-type(2) { background: #ddd; color: #333; }` },
                        { name: 'script.js', language: 'javascript', content: `const { useState } = React;

// Build your counter component!
function Counter() {
    // 1. Create count state
    
    
    // 2. Create handler functions
    
    
    return (
        <div className="counter">
            {/* 3. Display count */}
            <h1>0</h1>
            
            {/* 4. Add buttons with onClick */}
            <button>-</button>
            <button>Reset</button>
            <button>+</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
` }
                    ]
                },
                {
                    id: 'react-3-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Form State',
                    duration: '20 min',
                    content: `
# Managing Form State

## Controlled Components

In React, form inputs are "controlled" by state:

\`\`\`jsx
function Form() {
    const [name, setName] = useState('');
    
    return (
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    );
}
\`\`\`

## The onChange Pattern

\`\`\`jsx
// Text input
<input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
/>

// Checkbox
<input
    type="checkbox"
    checked={isChecked}
    onChange={(e) => setIsChecked(e.target.checked)}
/>

// Select
<select value={option} onChange={(e) => setOption(e.target.value)}>
    <option value="a">A</option>
    <option value="b">B</option>
</select>
\`\`\`

## Form Submission

\`\`\`jsx
function Form() {
    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page reload
        console.log('Submitted:', email);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
}
\`\`\`

---

## Your Mission
Build a login form with controlled inputs.
                    `,
                    tasks: [
                        { id: 1, description: 'In LoginForm, create email state: const [email, setEmail] = useState("");', completed: false, regex: /useState\s*\(\s*['"]['"]\s*\)[\s\S]*email|email[\s\S]*useState\s*\(\s*['"]['"]\s*\)/ },
                        { id: 2, description: 'In LoginForm, create password state: const [password, setPassword] = useState("");', completed: false, regex: /useState\s*\(\s*['"]['"]\s*\)[\s\S]*password|password[\s\S]*useState\s*\(\s*['"]['"]\s*\)/ },
                        { id: 3, description: 'On email input, add value={email} for controlled input', completed: false, regex: /value\s*=\s*\{(email|password)\}/ },
                        { id: 4, description: 'On email input, add onChange={(e) => setEmail(e.target.value)}', completed: false, regex: /onChange\s*=\s*\{.*set(Email|Password)/ },
                        { id: 5, description: 'On form, add onSubmit={handleSubmit} to handle submission', completed: false, regex: /onSubmit\s*=\s*\{/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(135deg, #0a192f, #112240); min-height: 100vh; display: flex; justify-content: center; align-items: center; margin: 0; }
.login-form { background: white; padding: 40px; border-radius: 16px; width: 350px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
.login-form h2 { text-align: center; color: #0a192f; margin: 0 0 30px 0; }
.login-form input { width: 100%; padding: 12px; margin-bottom: 15px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; box-sizing: border-box; }
.login-form input:focus { border-color: #0a192f; outline: none; }
.login-form button { width: 100%; padding: 14px; background: #800000; color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: bold; cursor: pointer; }
.login-form button:hover { background: #600000; }` },
                        { name: 'script.js', language: 'javascript', content: `const { useState } = React;

function LoginForm() {
    // 1. Create state for email and password
    
    
    // 2. Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', { /* email, password */ });
    };
    
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2>🔐 ZeroCode Login</h2>
            
            {/* 3. Add controlled inputs */}
            <input
                type="email"
                placeholder="Email"
            />
            
            <input
                type="password"
                placeholder="Password"
            />
            
            <button type="submit">Sign In</button>
        </form>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginForm />);
` }
                    ]
                },
                {
                    id: 'react-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'State Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does useState return?',
                            options: ['Just the value', 'Just the setter', 'An array with [value, setter]', 'An object'],
                            correctIndex: 2,
                            explanation: 'useState returns an array: [currentValue, setterFunction]'
                        },
                        {
                            id: 'q2',
                            question: 'How do you update state correctly?',
                            options: ['count = count + 1', 'count++', 'setCount(count + 1)', 'state.count = count + 1'],
                            correctIndex: 2,
                            explanation: 'Always use the setter function to update state and trigger re-renders.'
                        },
                        {
                            id: 'q3',
                            question: 'What makes an input "controlled" in React?',
                            options: ['Using ref', 'Having value and onChange from state', 'Using defaultValue', 'Adding an id'],
                            correctIndex: 1,
                            explanation: 'Controlled inputs have their value managed by React state via value and onChange.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 4: useEffect & Final Project
        // ============================================
        {
            id: 'react-unit-4',
            title: 'useEffect & Side Effects',
            description: 'Handle side effects like API calls and subscriptions',
            items: [
                {
                    id: 'react-4-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding useEffect',
                    duration: '5 min read',
                    content: `
# Understanding useEffect

**useEffect** handles "side effects" - operations that happen outside React's render cycle.

## What are Side Effects?

- Fetching data from an API
- Setting up subscriptions
- Manually changing the DOM
- Timers (setTimeout, setInterval)
- Logging

## Basic Syntax

\`\`\`jsx
useEffect(() => {
    // Side effect code here
    console.log('Component rendered!');
});
\`\`\`

## Dependency Array

\`\`\`jsx
// Runs on EVERY render
useEffect(() => { });

// Runs ONCE on mount
useEffect(() => { }, []);

// Runs when 'count' changes
useEffect(() => { }, [count]);

// Runs when 'a' OR 'b' changes
useEffect(() => { }, [a, b]);
\`\`\`

## Cleanup Function

\`\`\`jsx
useEffect(() => {
    const timer = setInterval(() => {
        console.log('tick');
    }, 1000);
    
    // Cleanup runs before next effect or unmount
    return () => clearInterval(timer);
}, []);
\`\`\`
                    `
                },
                {
                    id: 'react-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Fetching Data',
                    duration: '25 min',
                    content: `
# Fetching Data with useEffect

## The Pattern

\`\`\`jsx
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        fetch('https://api.example.com/users')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);  // Empty array = run once on mount
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    
    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}
\`\`\`

## With Async/Await

\`\`\`jsx
useEffect(() => {
    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            setUsers(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    fetchData();
}, []);
\`\`\`

---

## Your Mission
Fetch and display a list of posts from an API.
                    `,
                    tasks: [
                        { id: 1, description: 'In PostList, create state: const [posts, setPosts] = useState([]); to store data', completed: false, regex: /useState\s*\(\s*\[\s*\]\s*\)/ },
                        { id: 2, description: 'In PostList, create loading state: const [loading, setLoading] = useState(true);', completed: false, regex: /useState\s*\(\s*true\s*\)/ },
                        { id: 3, description: 'In PostList, use useEffect with [] to fetch only once: useEffect(() => { ... }, []);', completed: false, regex: /useEffect\s*\([^)]*,\s*\[\s*\]\s*\)/ },
                        { id: 4, description: 'Inside useEffect, fetch data: fetch("https://jsonplaceholder.typicode.com/posts")', completed: false, regex: /fetch\s*\(/ },
                        { id: 5, description: 'In return, render list: posts.map(post => <div key={post.id}>{post.title}</div>)', completed: false, regex: /\.map\s*\(/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: 'Segoe UI', sans-serif; background: #f0f2f5; min-height: 100vh; padding: 40px; margin: 0; }
.posts { max-width: 600px; margin: 0 auto; }
.posts h1 { color: #0a192f; text-align: center; }
.post { background: white; padding: 20px; margin-bottom: 15px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.post h3 { color: #0a192f; margin: 0 0 10px 0; }
.post p { color: #666; margin: 0; line-height: 1.6; }
.loading { text-align: center; color: #666; font-size: 1.2rem; }` },
                        { name: 'script.js', language: 'javascript', content: `const { useState, useEffect } = React;

function Posts() {
    // 1. Create state for posts and loading
    
    
    // 2. Fetch data on mount
    useEffect(() => {
        // Fetch from: https://jsonplaceholder.typicode.com/posts?_limit=5
        
    }, []);
    
    // 3. Show loading state
    
    
    return (
        <div className="posts">
            <h1>📝 Latest Posts</h1>
            
            {/* 4. Map over posts */}
            
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Posts />);
` }
                    ]
                },
                {
                    id: 'react-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'useEffect Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'When does useEffect with [] run?',
                            options: ['Every render', 'Only on mount', 'Never', 'On unmount'],
                            correctIndex: 1,
                            explanation: 'Empty dependency array means "no dependencies" - runs once on mount.'
                        },
                        {
                            id: 'q2',
                            question: 'What is the cleanup function for?',
                            options: ['Deleting state', 'Canceling subscriptions/timers', 'Resetting props', 'Clearing the DOM'],
                            correctIndex: 1,
                            explanation: 'Cleanup prevents memory leaks by canceling ongoing operations.'
                        }
                    ]
                },
                {
                    id: 'react-4-project',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'Build a Todo App',
                    duration: '60 min',
                    difficulty: 'Intermediate',
                    description: 'Create a complete Todo application using React hooks.',
                    content: `
# 🎯 Project: React Todo App

## Overview
Build a fully functional Todo application that demonstrates your React skills.

## Requirements

### State Management
- [ ] Array of todos in state
- [ ] Input state for new todo
- [ ] Filter state (all/active/completed)

### Features
- [ ] Add new todos
- [ ] Toggle todo completion
- [ ] Delete todos
- [ ] Filter todos by status
- [ ] Show remaining count

### Components
- [ ] TodoApp (main container)
- [ ] TodoInput (add new)
- [ ] TodoList (display list)
- [ ] TodoItem (single todo)
- [ ] TodoFilter (filter buttons)

### Bonus
- [ ] Save to localStorage with useEffect
- [ ] Edit todo text
- [ ] Clear all completed
                    `,
                    tasks: [
                        { id: 1, description: 'Create todos state as array', completed: false, regex: /useState\s*\(\s*\[/ },
                        { id: 2, description: 'Create input state for new todo', completed: false, regex: /useState\s*\(\s*['"]['"]\s*\)/ },
                        { id: 3, description: 'Create addTodo function', completed: false, regex: /addTodo|handleAdd/ },
                        { id: 4, description: 'Create toggleTodo function', completed: false, regex: /toggleTodo|handleToggle/ },
                        { id: 5, description: 'Create deleteTodo function', completed: false, regex: /deleteTodo|handleDelete/ },
                        { id: 6, description: 'Map over todos to render list', completed: false, regex: /todos\.map/ },
                        { id: 7, description: 'Use key prop in list items', completed: false, regex: /key\s*=\s*\{/ }
                    ],
                    starterFiles: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="root"></div>
    <script type="text/babel" src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: 'Segoe UI', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; padding: 40px; margin: 0; }
.todo-app { max-width: 500px; margin: 0 auto; background: white; border-radius: 16px; padding: 30px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
.todo-app h1 { text-align: center; color: #0a192f; margin: 0 0 20px 0; }
.todo-input { display: flex; gap: 10px; margin-bottom: 20px; }
.todo-input input { flex: 1; padding: 12px; border: 2px solid #ddd; border-radius: 8px; font-size: 16px; }
.todo-input button { padding: 12px 24px; background: #800000; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; }
.todo-list { list-style: none; padding: 0; margin: 0; }
.todo-item { display: flex; align-items: center; padding: 15px; border-bottom: 1px solid #eee; gap: 15px; }
.todo-item.completed span { text-decoration: line-through; color: #999; }
.todo-item input[type="checkbox"] { width: 20px; height: 20px; }
.todo-item span { flex: 1; }
.todo-item button { background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; }
.todo-footer { display: flex; justify-content: space-between; margin-top: 20px; color: #666; font-size: 14px; }` },
                        { name: 'script.js', language: 'javascript', content: `const { useState } = React;

function TodoApp() {
    // Your code here!
    // 1. Create state for todos and input
    
    
    // 2. Create handler functions
    
    
    return (
        <div className="todo-app">
            <h1>✅ ZeroCode Todo</h1>
            
            {/* Input section */}
            <div className="todo-input">
                <input placeholder="What needs to be done?" />
                <button>Add</button>
            </div>
            
            {/* Todo list */}
            <ul className="todo-list">
                {/* Map over todos here */}
            </ul>
            
            {/* Footer */}
            <div className="todo-footer">
                <span>0 items left</span>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TodoApp />);
` }
                    ]
                },
                {
                    id: 'react-4-summary',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Course Complete!',
                    duration: '3 min read',
                    content: `
# 🎉 React Fundamentals Complete!

## What You Mastered

✅ Components & JSX
✅ Props for passing data
✅ State with useState
✅ Side effects with useEffect
✅ Controlled forms
✅ Lists and keys
✅ Event handling

## Key Takeaways

1. **Think in components** - Break UI into reusable pieces
2. **Props down, events up** - Data flows one way
3. **State triggers re-renders** - Always use setters
4. **useEffect for side effects** - API calls, subscriptions
5. **Keys for lists** - Help React track items

## What's Next?

- **TypeScript** - Add type safety to React
- **React Router** - Multi-page navigation
- **State Management** - Redux, Zustand, Context
- **Next.js** - Full-stack React framework

> "The best way to learn React is to build things with React." - Dan Abramov
                    `
                }
            ]
        }
    ]
};

export default reactCourse;
