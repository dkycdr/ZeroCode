import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit10Styling = {
    id: 'react-unit-10',
    title: 'Styling Patterns - Looking Good',
    description: 'React doesn\'t care how you style things. That implies you have infinite choices. Learn the 4 major patterns: Global CSS, Modules, CSS-in-JS, and Utility Classes.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-10-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Styling Evolution 🎨',
            duration: '20 min read',
            content: `
# Deep Dive: The Styling Evolution 🎨

## 1. Global CSS (The Old Way)
You import \`index.css\`. It applies to everything.
*   **Pros**: Simple, familiar.
*   **Cons**: Name collisions (\`.card\` conflicts with another \`.card\`), managing huge files.

## 2. Inline Styles
\`<div style={{ color: 'red' }}\`
*   **Pros**: Scoped, dynamic (js variables).
*   **Cons**: No pseudo-selectors (:hover), no media queries, messy code.

## 3. CSS Modules
\`import styles from './Button.module.css'\`
React renames your class \`.btn\` to \`.Button_btn__1x2y3\`.
*   **Pros**: Absolutely no name collisions.
*   **Cons**: Separate files to manage.

## 4. CSS-in-JS (Styled Components)
\`const Button = styled.button\`
Writing CSS directly inside JS files.
*   **Pros**: Dynamic, isolated, intuitive component API.
*   **Cons**: Performance overhead (runtime parsing), big bundle size.

## 5. Utility Classes (Tailwind)
\`<div className="bg-red-500 p-4">\`
*   **Pros**: Fast to write, no context switching, small bundle.
*   **Cons**: Markup looks "ugly" to some.
            `
        },
        {
            id: 'react-10-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Conditional Styling 🎭',
            duration: '15 min read',
            content: `
# Deep Dive: Conditional Styling 🎭

## 1. The Ternary Operator
Most common simple pattern.
\`style={{ color: isActive ? 'green' : 'red' }}\`

## 2. Template Literals
For classes.
\`className={\`btn \${isActive ? 'active' : ''}\`}\`

## 3. Classnames Utilities
Libraries like **clsx** or **classnames** help manage complex conditions.
\`cx('btn', { 'btn-active': isActive, 'btn-large': size === 'lg' })\`
This is cleaner than nested ternaries.
            `
        },
        {
            id: 'react-10-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: CSS Modules 🧩',
            duration: '15 min read',
            content: `
# Deep Dive: CSS Modules 🧩

## 1. How it works
You name your file \`Something.module.css\`.
You import it as a default object: \`import styles from './...'\`.
You use it: \`className={styles.myClass}\`.

## 2. Composition
You can still use global utility classes alongside modules!
\`className={\`\${styles.card} p-4 mb-2\`}\`

## 3. SASS/SCSS
CSS Modules works perfectly with Preprocessors like SASS.
\`Button.module.scss\` allows you to nest styles for cleaner organization.
            `
        },
        {
            id: 'react-10-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Styled Components Concept 💅',
            duration: '20 min read',
            content: `
# Deep Dive: Styled Components Concept 💅

## 1. The Idea
Why separate logic and style? A "Button Component" should define how it looks.

## 2. Dynamic Props
\`\`\`javascript
const Button = styled.button\`
  background: \${props => props.primary ? 'blue' : 'gray'};
  color: white;
\`;
\`\`\`
This lets you pass props directly to the CSS logic.

## 3. Server Components (Warning)
Modern React (RSC) prefers zero-runtime CSS (like Tailwind or CSS Modules).
Traditional CSS-in-JS libraries struggle with Server Components because they need JS to run in the browser to inject styles.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-10-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Inline Dynamic Styles',
            duration: '15 min',
            content: `
# Lab 1: Inline Dynamic Styles

Style a dynamic progress bar using Inline Styles.
This is the **best** use case for Inline Styles (highly dynamic values).

## The Mission
1.  **State**: \`progress\` (0-100).
2.  **Style**: Outer div (gray background). Inner div (blue background, width = \`progress%\`).
3.  **Animate**: Transition property.

## Dynamic Width
\`width: \`\${progress}%\` \`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Style: Object with dynamic width.',
                    completed: false,
                    regex: /style\s*=\s*{\s*\{\s*width:\s*`\${.*}%`\s*\}\s*}/
                },
                {
                    id: 2,
                    description: 'State: Control progress.',
                    completed: false,
                    regex: /width:/
                },
                {
                    id: 3,
                    description: 'Structure: Nested divs.',
                    completed: false,
                    regex: /<div.*<div/s
                }
            ],
            files: [
                {
                    name: 'ProgressBar.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

export default function ProgressBar() {
    const [progress, setProgress] = useState(50);

    return (
        <div>
            <input 
                type="range" 
                value={progress} 
                onChange={e => setProgress(e.target.value)} 
            />
            
            <div style={{ border: '1px solid black', width: '200px' }}>
                {/* Task 1, 2, 3: Inner Bar */}
                <div style={{ backgroundColor: 'blue', height: '20px' }} />
            </div>
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-10-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Conditional Classes',
            duration: '20 min',
            content: `
# Lab 2: Conditional Classes

Toggle a "Dark Mode" class on a card.
Use Template Literals string interpolation.

## The Mission
1.  **State**: \`isDark\` boolean.
2.  **Class**: If true -> \`card dark\`. If false -> \`card\`.
3.  **Template**: \`className={\`card \${isDark ? 'dark' : ''}\`}\`.

## Cleanliness
Watch out for spaces! \`card\${flag}\` becomes \`carddark\`. You need \`card \${flag}\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Logic: Template literal with ternary.',
                    completed: false,
                    regex: /className\s*=\s*{\s*`card\s*\${\s*isDark\s*\?\s*['"]dark['"]\s*:\s*['"]['"]\s*}\s*`\s*}/
                },
                {
                    id: 2,
                    description: 'State: Toggle logic.',
                    completed: false,
                    regex: /setIsDark\s*\(\s*d\s*=>\s*!d\s*\)/
                },
                {
                    id: 3,
                    description: 'Structure: Div with class.',
                    completed: false,
                    regex: /<div/
                }
            ],
            files: [
                {
                    name: 'ThemeCard.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';
import './styles.css'; 

export default function ThemeCard() {
    const [isDark, setIsDark] = useState(false);

    return (
        // Task 1: Conditional ClassName
        <div className="card">
            <h1>Dynamic Card</h1>
            <button onClick={() => setIsDark(d => !d)}>
                Toggle Theme
            </button>
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-10-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Reusable Button (Pseudo-CSS-Mod)',
            duration: '25 min',
            content: `
# Lab 3: Reusable Button

Create a button that accepts a \`variant\` prop ('primary' or 'secondary').
Apply the correct class based on the prop.
This simulates how UI libraries work.

## The Mission
1.  **Prop**: \`variant\` (default 'primary').
2.  **Logic**: \`className={\`btn btn-\${variant}\`}\`.
3.  **CSS**: Assume classes \`.btn-primary\` and \`.btn-secondary\` exist.

## Scalability
This pattern allows you to have unlimited variants (\`danger\`, \`success\`, \`outline\`) with 1 line of code.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Prop: Accept variant.',
                    completed: false,
                    regex: /function\s+Button\s*\(\s*{\s*variant/
                },
                {
                    id: 2,
                    description: 'Logic: Dynamic class string.',
                    completed: false,
                    regex: /className\s*=\s*{\s*`btn\s+btn-\${\s*variant\s*}\s*`\s*}/
                },
                {
                    id: 3,
                    description: 'Default: Set default param.',
                    completed: false,
                    regex: /variant\s*=\s*['"]primary['"]/
                }
            ],
            files: [
                {
                    name: 'Button.jsx',
                    language: 'javascript',
                    content: `
// Task 1 & 3: Props
export default function Button({ variant }) {
    return (
        // Task 2: Class Logic
        <button>
            Click Me
        </button>
    );
}
`
                }
            ]
        },
        {
            id: 'react-10-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Styles Object Pattern',
            duration: '20 min',
            content: `
# Lab 4: The Styles Object Pattern

Sometimes you want to organize inline styles without cluttering the JSX.
Define a \`styles\` object outside or inside the component.

## The Mission
1.  **Define**: \`const styles = { container: { ... }, text: { ... } }\`.
2.  **Apply**: \`style={styles.container}\`.
3.  **Merge**: \`style={{ ...styles.text, color: 'red' }}\`.

## React Native
This acts almost exactly like React Native \`StyleSheet\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define: Styles object.',
                    completed: false,
                    regex: /const\s+styles\s*=\s*{\s*[a-zA-Z]+:\s*{/
                },
                {
                    id: 2,
                    description: 'Apply: style={styles.prop}.',
                    completed: false,
                    regex: /style\s*=\s*{\s*styles\.[a-zA-Z]+\s*}/
                },
                {
                    id: 3,
                    description: 'Merge: Override property.',
                    completed: false,
                    regex: /style\s*=\s*{\s*\{\s*\.\.\.styles\.[a-zA-Z]+,\s*[a-zA-Z]+:/
                }
            ],
            files: [
                {
                    name: 'StyleObj.jsx',
                    language: 'javascript',
                    content: `
const styles = {
    card: {
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px'
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold'
    }
};

export default function StyleObj() {
    return (
        // Task 2: Apply styles
        <div>
            {/* Task 3: Merge styles (add color: blue) */}
            <h1>Hello World</h1>
        </div>
    );
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'react-10-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Styling Patterns Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the main drawback of standard Global CSS (index.css) in large React apps?',
                    options: [
                        'It is too slow',
                        'Naming collisions (e.g., .button affects all buttons)',
                        'React cannot read CSS files',
                        'It does not support colors'
                    ],
                    correctIndex: 1,
                    explanation: 'Global CSS has no scoping. A class named "card" created by developer A might accidentally ruin the style of a "card" created by developer B.'
                },
                {
                    id: 'q2',
                    question: 'What does CSS Modules do to solve naming collisions?',
                    options: [
                        'It deletes the classes',
                        'It automatically hashes/renames classes to be unique (e.g., .btn -> .btn_8x9z)',
                        'It puts all CSS in the head tag',
                        'It converts CSS to JavaScript'
                    ],
                    correctIndex: 1,
                    explanation: 'The build tool intercepts the import and transforms the class name into a globally unique string.'
                },
                {
                    id: 'q3',
                    question: 'How do you conditionally apply a class without a library?',
                    options: [
                        'Use an if statement in CSS',
                        'Use Template Literals: `class ${cond ? "active" : ""}`',
                        'You cannot',
                        'Use the "active" prop'
                    ],
                    correctIndex: 1,
                    explanation: 'Template literals allow you to construct the className string dynamically based on state.'
                },
                {
                    id: 'q4',
                    question: 'What is a benefit of Library-based styling (like Tailwind)?',
                    options: [
                        'Faster development speed once learned (Utility First)',
                        'Better separation of concerns',
                        'It is built into React',
                        'It uses XML'
                    ],
                    correctIndex: 0,
                    explanation: 'Utility classes remove the need to name things and switch context between CSS and JS files, speeding up iteration.'
                },
                {
                    id: 'q5',
                    question: 'When are Inline Styles (style={{...}}) most appropriate?',
                    options: [
                        'For everything',
                        'For highly dynamic values like coordinates, percentages, or user-customized colors',
                        'For responsive layouts',
                        'Never'
                    ],
                    correctIndex: 1,
                    explanation: 'Inline styles are bad for static styling (no pseudo-selectors, hard to read), but essential for values that change every frame or depend on exact JS numbers.'
                }
            ]
        }
    ]
};
