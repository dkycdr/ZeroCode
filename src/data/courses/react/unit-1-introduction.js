import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Introduction = {
    id: 'react-unit-1',
    title: 'Introduction to React - The Architecture',
    description: 'Master the fundamental shift from Imperative to Declarative programming. Understand the Virtual DOM, Component Composition, and the JSX compilation process.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The React Paradigm ⚛️',
            duration: '20 min read',
            content: `
# Deep Dive: The React Paradigm ⚛️

## 1. Imperative vs Declarative
To understand React, you must unlearn how you used to talk to the browser.
*   **Imperative (The Manager)**: You tell the browser *how* to do things, step-by-step.
    *   "Find the div with id 'app'. Create a h1. Set text to 'Hello'. Append h1 to div."
*   **Declarative (The Architect)**: You tell the browser *what* you want the end result to look like.
    *   "I want an 'app' div containing an h1 that says 'Hello'."

**Analogy**:
*   **Imperative**: You are driving a taxi. Turn left, stop at red light, turn right.
*   **Declarative**: You are using Uber. "Take me to the Airport." You don't care about the turn signals.

## 2. The Problem with the DOM
The DOM (Document Object Model) is slow.
Every time you touch the DOM (add a class, change text), the browser has to:
1.  **Recalculate layout** (Reflow).
2.  **Repaint pixels** (Repaint).

If you act like a "Manager" and micro-manage every update, the browser gets overwhelmed.

## 3. The React Solution: The "Shadow" DOM
React keeps a copy of the DOM in memory. This is called the **Virtual DOM**.
When you change data:
1.  React updates the Virtual DOM (Instant).
2.  React compares the new Virtual DOM with the old one (Diffing).
3.  React calculates the *minimum* number of changes needed for the Real DOM.
4.  React batch updates the Real DOM in one go.

> **Key Takeaway**: You write code as if you are re-rendering the entire page, but React only updates the text node that actually changed.
            `
        },
        {
            id: 'react-1-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Component Model 🧩',
            duration: '25 min read',
            content: `
# Deep Dive: The Component Model 🧩

## 1. Atomic Design
In the past, we separated technologies:
*   \`index.html\` (Structure)
*   \`style.css\` (Presentation)
*   \`script.js\` (Logic)

In React, we separate **Concerns** (Features):
*   \`Button.jsx\` (Structure + Presentation + Logic for a Button)
*   \`Navbar.jsx\` (Structure + Presentation + Logic for a Navbar)

## 2. The Component Tree
Your application is a Tree of components.
*   **Root** (App)
    *   **Header**
        *   **Logo**
        *   **Navigation**
    *   **MainContent**
        *   **Sidebar**
        *   **Feed**
            *   **Post**
            *   **Post**
    *   **Footer**

## 3. Single Responsibility Principle
A component should do **one thing**.
If your "Header" component is also managing the "User Login State" and fetching "Notifications", it is doing too much. Break it down.

## 4. Reusability
Because components are self-contained (they have their own HTML/CSS/JS), you can drop a \`<Button />\` anywhere in your app, and it will look and work exactly the same.
            `
        },
        {
            id: 'react-1-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: JSX Under the Hood ⚙️',
            duration: '20 min read',
            content: `
# Deep Dive: JSX Under the Hood ⚙️

## 1. It is NOT HTML
JSX stands for **JavaScript XML**. It looks like HTML, but it is syntactic sugar for JavaScript functions.

**JSX**:
\`\`\`jsx
const element = <h1 className="title">Hello</h1>;
\`\`\`

**What the Browser Actually Sees (Compiled)**:
\`\`\`javascript
const element = React.createElement(
    'h1', 
    { className: 'title' }, 
    'Hello'
);
\`\`\`

## 2. The Transpiler (Babel)
Browsers do not understand JSX. If you paste JSX into the Chrome Console, it will crash.
We need a **Transpiler** (like Babel) to convert our JSX into standard ES5/ES6 JavaScript that browsers can read.

## 3. Why not regular HTML?
*   **Power**: You can use full JavaScript power implies ({ Math.random() }) directly in your markup.
*   **Security**: React escapes any values embedded in JSX before rendering them. This prevents XSS (Cross-site Scripting) attacks. If a hacker tries to inject \`<script>alert('Hack')</script>\` into your comment section, React converts it to a plain string.
            `
        },
        {
            id: 'react-1-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Ecosystem & Setup 🌍',
            duration: '15 min read',
            content: `
# Deep Dive: The Ecosystem & Setup 🌍

## 1. Node.js & NPM
You cannot build modern React apps effectively with meaningful scale using just a \`<script>\` tag.
*   **Node.js**: The runtime that lets us run build tools outside the browser.
*   **NPM (Node Package Manager)**: The App Store for developers. We download React, Webpack, and other libraries from here.

## 2. Bundlers (Vite / Webpack)
React apps are made of hundreds of small files. Browsers struggle to download 500 files at once.
A **Bundler** takes your 500 files and stitches them together into one optimized file (e.g., \`bundle.js\`).
*   **Vite**: The modern standard. Extremely fast dev server.
*   **Webpack**: The legacy standard. Very powerful, but harder to configure.

## 3. Standard Folder Structure
*   \`/node_modules\`: The black hole. Contains thousands of library dependencies. Never touch this.
*   \`/public\`: Static assets (images, favicon, index.html basics).
*   \`/src\`: Your source code.
    *   \`/src/components\`: Your reusable UI blocks.
    *   \`/src/assets\`: Images/Fonts required by JS.
    *   \`App.jsx\`: The root component.
    *   \`main.jsx\`: The entry point where React attaches to the DOM.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Root & The Tree',
            duration: '20 min',
            content: `
# Lab 1: The Root & The Tree

Strictly speaking, React is just a library that pushes content into a \`div\`.
We need to create the "Root" of our application.

## The Mission
1.  **Import**: Get \`createRoot\` from \`react-dom/client\`.
2.  **Target**: Find the HTML element with id \`root\`.
3.  **Render**: Display an \`h1\` saying "System Online".

## Code Structure
\`\`\`javascript
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<h1>System Online</h1>);
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import: Extract { createRoot } from "react-dom/client".',
                    completed: false,
                    regex: /import\s*{\s*createRoot\s*}\s*from\s*['"]react-dom\/client['"]/
                },
                {
                    id: 2,
                    description: 'Root: Create root using createRoot(document.getElementById("root")).',
                    completed: false,
                    regex: /const\s+root\s*=\s*createRoot\s*\(\s*document\.getElementById\s*\(\s*['"]root['"]\s*\)\s*\)/
                },
                {
                    id: 3,
                    description: 'Render: Use root.render to show <h1>System Online</h1>.',
                    completed: false,
                    regex: /root\.render\s*\(\s*<h1>\s*System Online\s*<\/h1>\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// React Bootloader

// Task 1: Import createRoot
// TODO...

// Task 2: Create the Root connection
// TODO...

// Task 3: Render the initial UI
// TODO...
`
                }
            ]
        },
        {
            id: 'react-1-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: JSX Expressions',
            duration: '25 min',
            content: `
# Lab 2: JSX Expressions

JSX allows us to inject dynamic JavaScript/DATA into our HTML/UI.
We use **Curly Braces** \`{ }\` to open a portal to the JavaScript world.

## The Mission
1.  **Variables**: Create a const \`username = "Maverick"\`. Display it in an \`h2\`.
2.  **Math**: Display a \`p\` tag showing the result of \`10 * 10\`.
3.  **Classes**: Create a \`div\` with \`className="box"\`. (Remember: \`class\` is forbidden).

## Syntax
\`\`\`jsx
const name = "Neo";
const element = <div className="matrix">Hello {name}</div>;
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Variable: Create const username and render it inside <h2>{username}</h2>.',
                    completed: false,
                    regex: /<h2>\s*{\s*username\s*}\s*<\/h2>/
                },
                {
                    id: 2,
                    description: 'Math: Render a <p> containing {10 * 10}.',
                    completed: false,
                    regex: /<p>\s*{\s*10\s*\*\s*10\s*}\s*<\/p>/
                },
                {
                    id: 3,
                    description: 'Attribute: Create a <div className="box">.',
                    completed: false,
                    regex: /<div\s+className=["']box["']>/
                }
            ],
            files: [
                {
                    name: 'App.jsx',
                    language: 'javascript',
                    content: `// JSX Dynamic Content
const username = "Maverick";

// Task 1, 2, 3: Create the JSX elements
const element = (
    <div>
        {/* TODO: Add h2 with username */}
        
        {/* TODO: Add p with math calculation */}
        
        {/* TODO: Add div with className="box" */}
        
    </div>
);
`
                }
            ]
        },
        {
            id: 'react-1-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Functional Component',
            duration: '25 min',
            content: `
# Lab 3: The Functional Component

We don't just write loose JSX. We wrap it in **Components**.
A component is a Function that returns JSX.

## The Mission
1.  **Define**: Create a function named \`UserProfile\`.
2.  **Return**: It must return a \`div\`.
3.  **Export**: Export it as the default export.

## Rules
*   Component names MUST start with a **Capital Letter** (\`UserProfile\`, not \`userProfile\`).
*   It must return a single parent element (or a Fragment).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define: Create function UserProfile().',
                    completed: false,
                    regex: /function\s+UserProfile\s*\(\s*\)/
                },
                {
                    id: 2,
                    description: 'Return: Return a <div> containing text.',
                    completed: false,
                    regex: /return\s*\(\s*<div/
                },
                {
                    id: 3,
                    description: 'Export: export default UserProfile.',
                    completed: false,
                    regex: /export\s+default\s+UserProfile/
                }
            ],
            files: [
                {
                    name: 'UserProfile.jsx',
                    language: 'javascript',
                    content: `// Component Definition

// Task 1 & 2: Create the Component
// TODO...

// Task 3: Export it
// TODO...
`
                }
            ]
        },
        {
            id: 'react-1-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Component Composition',
            duration: '30 min',
            content: `
# Lab 4: Component Composition

The power of React comes from nesting components.
We will build a simple "Page" by combining a Header and a Footer.

## The Mission
1.  **Header**: Create a \`Header\` component returning \`<header>Top</header>\`.
2.  **Footer**: Create a \`Footer\` component returning \`<footer>Bottom</footer>\`.
3.  **App**: Create an \`App\` component that renders both \`<Header />\` and \`<Footer />\` wrapped in a Fragment \`< >\`.

## Composition Syntax
\`\`\`jsx
function App() {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    );
}
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Components: Define Header and Footer functions.',
                    completed: false,
                    regex: /function\s+Header[\s\S]*function\s+Footer/
                },
                {
                    id: 2,
                    description: 'Fragments: User explicit <Fragment> or short syntax <> in App.',
                    completed: false,
                    regex: /(?:<Fragment>|<>)/
                },
                {
                    id: 3,
                    description: 'Nest: Render <Header /> and <Footer /> inside App.',
                    completed: false,
                    regex: /<Header\s*\/>[\s\S]*<Footer\s*\/>/
                }
            ],
            files: [
                {
                    name: 'App.jsx',
                    language: 'javascript',
                    content: `// Component Composition

// Task 1: Define Helper Components
// function Header...
// function Footer...

// Task 2 & 3: Compose them in App
function App() {
    return (
        // TODO: Use Fragment and render Header + Footer
        null
    );
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'react-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Architecture Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Imperative programming focuses on ____, while Declarative focuses on ____.',
                    options: [
                        'What, Why',
                        'How, What',
                        'When, Where',
                        'Who, When'
                    ],
                    correctIndex: 1,
                    explanation: 'Imperative is about the steps (How). Declarative is about the result (What).'
                },
                {
                    id: 'q2',
                    question: 'Why does React use a "Virtual DOM"?',
                    options: [
                        'To make the code look prettier',
                        'Because browsers do not have a real DOM',
                        'To batch updates and minimize slow interaction with the real DOM',
                        'To allow Python code to run in the browser'
                    ],
                    correctIndex: 2,
                    explanation: 'The Real DOM is slow. The Virtual DOM allows React to calculate diffs in memory and update the real DOM efficiently.'
                },
                {
                    id: 'q3',
                    question: 'Which of the following is valid JSX?',
                    options: [
                        '<div class="box"></div>',
                        '<div className="box"></div>',
                        '<div className="box">',
                        '<div classname="box"></div>'
                    ],
                    correctIndex: 1,
                    explanation: 'We must use `className` (camelCase) and close all tags.'
                },
                {
                    id: 'q4',
                    question: 'Component names must start with...',
                    options: [
                        'A lowercase letter',
                        'A number',
                        'An underscore',
                        'A Capital Letter'
                    ],
                    correctIndex: 3,
                    explanation: 'React distinguishes custom components from HTML tags by checking the first letter. `<div />` is HTML, `<Div />` is a component.'
                },
                {
                    id: 'q5',
                    question: 'What is the purpose of Babel in the React ecosystem?',
                    options: [
                        'To bundle files',
                        'To transpile modern JS and JSX into browser-compatible JS',
                        'To style the application',
                        'To manage databases'
                    ],
                    correctIndex: 1,
                    explanation: 'Browsers cannot read JSX. Babel converts it into `React.createElement` calls.'
                }
            ]
        }
    ]
};
