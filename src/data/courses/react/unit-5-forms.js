import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Forms = {
    id: 'react-unit-5',
    title: 'Forms & Validation - Handling User Input',
    description: 'Forms are how users talk to your app. Master Controlled Components, Multi-Input Handling, and robust Validation patterns.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'react-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Controlled vs Uncontrolled 🎛️',
            duration: '20 min read',
            content: `
# Deep Dive: Controlled vs Uncontrolled 🎛️

## 1. Uncontrolled (The HTML Way)
In standard HTML, inputs remember their own values. You access them via the DOM (e.g., \`document.getElementById\`).
This is "Uncontrolled" because React doesn't control the value.
\`\`\`jsx
<input type="text" /> // React has no idea what is in here
\`\`\`

## 2. Controlled (The React Way)
In React, we want state to be the Single Source of Truth.
\`\`\`jsx
<input 
  value={text}            // 1. React pushes state to input
  onChange={handleChange} // 2. Input pushes changes to React
/>
\`\`\`
It is a bi-directional loop. The input cannot display anything that React doesn't explicitly allow.

## 3. Why Controlled?
*   **Instant Validation**: Check password strength *while* they type.
*   **Formatting**: Force phone numbers to look like (555) 123-4567.
*   **Disabling**: Disable the "Submit" button if the email is invalid.
            `
        },
        {
            id: 'react-5-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Handling Multiple Inputs 🐙',
            duration: '20 min read',
            content: `
# Deep Dive: Handling Multiple Inputs 🐙

## 1. The Naive Approach
Creating state for every single field is tedious.
\`\`\`javascript
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
// ... 20 more lines ...
\`\`\`

## 2. The Object Approach
Use a single object for the entire form.
\`\`\`javascript
const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
});
\`\`\`

## 3. The Dynamic Handler
We can write a single \`handleChange\` function for ALL inputs using Computed Property Names.
\`\`\`javascript
function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,       // Keep other fields (spread)
        [name]: value  // Update only this field
    }));
}
\`\`\`
Now you just ensure your inputs have a \`name\` attribute that matches the state key.
\`<input name="email" value={formData.email} onChange={handleChange} />\`
            `
        },
        {
            id: 'react-5-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Form Validation Patterns ✅',
            duration: '25 min read',
            content: `
# Deep Dive: Form Validation Patterns ✅

## 1. Validation Types
*   **On Change**: Validate as the user types (e.g., Password strength). Good for immediate feedback.
*   **On Blur**: Validate when the user leaves the field (e.g., Email checks). Less annoying.
*   **On Submit**: Validate everything when they click "Sign Up". The final gatekeeper.

## 2. Managing Errors
You typically need a parallel state object for errors.
\`\`\`javascript
const [form, setForm] = useState({ code: '' });
const [errors, setErrors] = useState({ code: '' });

// Check
if (form.code.length < 5) {
    setErrors({ code: 'Too short!' });
}
\`\`\`

## 3. Disable Submit
If \`Object.keys(errors).length > 0\`, disable the button.
            `
        },
        {
            id: 'react-5-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Libraries (React Hook Form) 📚',
            duration: '15 min read',
            content: `
# Deep Dive: Libraries (React Hook Form) 📚

## 1. The Performance Problem
With Controlled Components, typing one character triggers a re-render of the entire form.
For huge forms (100+ fields), this is slow.

## 2. Enter React Hook Form
Libraries like **React Hook Form** use Uncontrolled Components (Refs) under the hood to completely eliminate re-renders while typing.
They only trigger a re-render when you need it (like displaying an error).

## 3. Professional Standard
While we learn Controlled Components to understand React, in professional production apps, you will almost *always* use a library like **React Hook Form**, **Formik**, or **TanStack Form**.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'react-5-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Simple Controlled Input',
            duration: '20 min',
            content: `
# Lab 1: Simple Controlled Input

Create a single input that tracks the user's name.

## The Mission
1.  **State**: \`name\` initialized to \`""\`.
2.  **Input**: controlled by \`name\`.
3.  **Display**: "Hello, {name}" in an h1 tag.

## Code
\`\`\`jsx
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'State: Initialize name state.',
                    completed: false,
                    regex: /useState\s*\(\s*['"]['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Input: Bind value and onChange.',
                    completed: false,
                    regex: /<input\s+value\s*=\s*{\s*name\s*}\s+onChange\s*=/
                },
                {
                    id: 3,
                    description: 'Display: Show greeting.',
                    completed: false,
                    regex: /<h1>\s*Hello,\s*{\s*name\s*}\s*<\/h1>/
                }
            ],
            files: [
                {
                    name: 'NameForm.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

export default function NameForm() {
    // Task 1: Component State
    
    return (
        <div>
            {/* Task 2: Input */}
            
            {/* Task 3: Greeting */}
            
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-5-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Handling Multiple Inputs',
            duration: '30 min',
            content: `
# Lab 2: Handling Multiple Inputs

Manage a Login form (email + password) using a single state object.

## The Mission
1.  **State**: \`formData\` object with \`email\` and \`password\`.
2.  **Change Handler**: Generic function using \`[e.target.name]\`.
3.  **Inputs**: Two inputs with correct \`name\` attributes.

## Computed Properties
\`[name]: value\` allows dynamic key assignment.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'State: Object with email and password.',
                    completed: false,
                    regex: /useState\s*\(\s*{\s*email:\s*['"]['"],\s*password:\s*['"]['"]\s*}\s*\)/
                },
                {
                    id: 2,
                    description: 'Handler: Use [e.target.name].',
                    completed: false,
                    regex: /\[\s*e\.target\.name\s*\]:\s*e\.target\.value/
                },
                {
                    id: 3,
                    description: 'Inputs: Assign name="email" and name="password".',
                    completed: false,
                    regex: /name=['"]email['"][\s\S]*name=['"]password['"]/
                }
            ],
            files: [
                {
                    name: 'LoginForm.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

export default function LoginForm() {
    // Task 1: State Object
    const [formData, setFormData] = useState({ email: '', password: '' });

    // Task 2: Generic Handler
    const handleChange = (e) => {
        // Implement computed property logic here
    };

    return (
        <form>
            {/* Task 3: Inputs with name attributes */}
            <input name="email" value={formData.email} onChange={handleChange} />
            <br />
            <input name="password" value={formData.password} onChange={handleChange} />
        </form>
    );
}
`
                }
            ]
        },
        {
            id: 'react-5-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Validation Logic',
            duration: '30 min',
            content: `
# Lab 3: Validation Logic

Don't let them submit if the password is too short!

## The Mission
1.  **State**: \`password\` and \`error\`.
2.  **Validate**: On change, if password < 8 chars, set error "Too short". Else clear error.
3.  **UI**: Show error message in red if it exists.

## Logic
\`\`\`javascript
if (val.length < 8) setError("Too short");
else setError("");
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Logic: Check length in handler.',
                    completed: false,
                    regex: /if\s*\(\s*val\.length\s*<\s*8\s*\)/
                },
                {
                    id: 2,
                    description: 'State: Set Error message.',
                    completed: false,
                    regex: /setError\s*\(\s*['"]Too short/
                },
                {
                    id: 3,
                    description: 'UI: Render error div conditionally.',
                    completed: false,
                    regex: /{\s*error\s*&&\s*<div/
                }
            ],
            files: [
                {
                    name: 'PasswordReset.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

export default function PasswordReset() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const val = e.target.value;
        setPassword(val);
        
        // Task 1 & 2: Validation Logic
        
    };

    return (
        <div>
            <input value={password} onChange={handleChange} />
            {/* Task 3: Show Error */}
            
        </div>
    );
}
`
                }
            ]
        },
        {
            id: 'react-5-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Form Submission',
            duration: '25 min',
            content: `
# Lab 4: Form Submission

Prevent the browser refresh!

## The Mission
1.  **Form**: Wrap inputs in \`<form>\`.
2.  **Submit**: Add \`onSubmit={handleSubmit}\` to the form tag.
3.  **Prevent**: Call \`e.preventDefault()\` in the handler.
4.  **Alert**: Display "Submitted: " + value.

## Why?
HTML Forms reload the page by default in the old web. In SPA (Single Page Apps), we must prevent this to preserve state.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Tag: Use <form onSubmit={...}>.',
                    completed: false,
                    regex: /<form\s+onSubmit\s*=\s*{\s*handleSubmit\s*}/
                },
                {
                    id: 2,
                    description: 'Handler: e.preventDefault().',
                    completed: false,
                    regex: /e\.preventDefault\s*\(\s*\)/
                },
                {
                    id: 3,
                    description: 'Action: Alert the value.',
                    completed: false,
                    regex: /alert\s*\(/
                }
            ],
            files: [
                {
                    name: 'Signup.jsx',
                    language: 'javascript',
                    content: `import { useState } from 'react';

export default function Signup() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        // Task 2: Prevent Default
        
        // Task 3: Alert
    };

    return (
        // Task 1: Form Tag
        <div onSubmit={handleSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <button type="submit">Sign Up</button>
        </div>
    );
}
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'react-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Forms Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What makes an input "Controlled" in React?',
                    options: [
                        'It has a name attribute',
                        'It is inside a form tag',
                        'Its value is controlled by React State',
                        'It uses useRef'
                    ],
                    correctIndex: 2,
                    explanation: 'Controlled means React State is the single source of truth for the input value.'
                },
                {
                    id: 'q2',
                    question: 'Why do we need e.preventDefault() on form submission?',
                    options: [
                        'To prevent spam',
                        'To prevent the browser from reloading the page',
                        'To validate the data',
                        'To encrypt the data'
                    ],
                    correctIndex: 1,
                    explanation: 'The default browser behavior for forms is to send a GET/POST request and reload the page. React apps need to stay on the same page.'
                },
                {
                    id: 'q3',
                    question: 'When handling multiple inputs, what does [e.target.name] do?',
                    options: [
                        'It creates an array',
                        'It looks up the name in a database',
                        'It accesses the property dynamically based on the input name',
                        'It causes an error'
                    ],
                    correctIndex: 2,
                    explanation: 'This is ES6 Computed Property Name syntax, allowing you to update the correct key in the state object dynamically.'
                },
                {
                    id: 'q4',
                    question: 'When is the best time to run validation feedback?',
                    options: [
                        'Never',
                        'Only on submit',
                        'It depends on UX specific needs (onBlur or onChange)',
                        'After the data is saved'
                    ],
                    correctIndex: 2,
                    explanation: 'There is no single correct answer, but usually a mix. OnBlur is good for fields like email, onChange is good for password strength.'
                },
                {
                    id: 'q5',
                    question: 'Why might you use a library like React Hook Form over standard Controlled Components?',
                    options: [
                        'It is easier to learn',
                        'It improves performance by reducing re-renders (Uncontrolled)',
                        'It looks better',
                        'It works without JavaScript'
                    ],
                    correctIndex: 1,
                    explanation: 'For large forms, updating state on every keystroke can be slow. Libraries often use refs to bypass this.'
                }
            ]
        }
    ]
};
