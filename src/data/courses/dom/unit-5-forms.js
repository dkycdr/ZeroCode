
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Forms = {
    id: 'dom-unit-5',
    title: 'Unit 5: Forms & Inputs',
    description: 'Capture Data. Validation, Values, and Change events.',
    items: [
        // 1. Deep Dive
        {
            id: 'dom-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Thinking in Inputs ⌨️',
            duration: '15 min read',
            content: `
# Deep Dive: Thinking in Inputs ⌨️

## 1. Reading Values
*   **Most Elements**: Use \`innerText\`.
*   **Inputs**: Use \`value\`.
\`\`\`javascript
const name = input.value;
\`\`\`

## 2. Live Feedback (Input Event)
The \`input\` event fires **every time** a character is typed. Perfect for live search or validation.
The \`change\` event fires only when you **blur** (unfocus) the input.

## 3. Form Submission
Always listen to the \`submit\` event on the **<form>**, not the click event on the button.
Why? Because users can submit by pressing "Enter".
            `
        },
        // Lab
        {
            id: 'dom-5-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Live Validator',
            duration: '25 min',
            content: `
# Lab 1: Live Validator

Validate a password field as the user types.

## The Mission
1.  **Listen**: Add an \`input\` listener to \`#password\`.
2.  **Length Check**: If \`value.length < 8\`, add class "invalid" to the input.
3.  **Correct**: If length >= 8, remove class "invalid" and add "valid".
4.  **Feedback**: Update the \`#msg\` span with "Weak" or "Strong".

## Syntax
\`\`\`javascript
input.addEventListener("input", (e) => {
    const val = e.target.value;
});
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Listen: input.addEventListener("input", ...)',
                    completed: false,
                    regex: /addEventListener\s*\(\s*['"]input['"]/
                },
                {
                    id: 2,
                    description: 'Invalid: if (val.length < 8) classList.add("invalid")',
                    completed: false,
                    regex: /classList\.add\s*\(\s*['"]invalid['"]\s*\)/
                },
                {
                    id: 3,
                    description: 'Valid: else classList.add("valid")',
                    completed: false,
                    regex: /classList\.add\s*\(\s*['"]valid['"]\s*\)/
                },
                {
                    id: 4,
                    description: 'Feedback: msg.innerText = "Strong"',
                    completed: false,
                    regex: /msg\.(innerText|textContent)\s*=\s*['"]Strong['"]/
                }
            ],
            files: [
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// Lab 5: Forms

// 1. Select Elements


// 2. Listen to Input


// 3. Validation Logic
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<input type="password" id="password" placeholder="Password">
<span id="msg"></span>
<style>
    .invalid { border: 2px solid red; }
    .valid { border: 2px solid green; }
</style>`
                }
            ]
        },
        // Quiz
        {
            id: 'dom-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Forms Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which property gives you the text inside an input field?',
                    options: ['innerText', 'textContent', 'value', 'html'],
                    correctIndex: 2,
                    explanation: 'Input elements use the "value" property. Others use innerText.'
                }
            ]
        }
    ]
};
