
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Events = {
    id: 'dom-unit-4',
    title: 'Unit 4: Events',
    description: 'Make it interactive. Clicks, Keys, and Bubbling.',
    items: [
        // 1. Deep Dive
        {
            id: 'dom-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Event Bubbling 🫧',
            duration: '15 min read',
            content: `
# Deep Dive: Event Bubbling 🫧

## 1. The Bubble Up
When you click a button inside a div, the browser fires the click event on:
1.  The Button (Target)
2.  The Div (Parent)
3.  The Body
4.  The HTML

This is called **Bubbling**.

## 2. event.stopPropagation()
To stop the event from notifying parents, use \`e.stopPropagation()\`.

## 3. The Event Object (e)
The callback receives an object full of details.
*   \`e.target\`: The element that was actually clicked.
*   \`e.currentTarget\`: The element listening (the one with addEventListener).
*   \`e.preventDefault()\`: Stop forms from submitting.
            `
        },
        // Lab
        {
            id: 'dom-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Click Master',
            duration: '25 min',
            content: `
# Lab 1: Click Master

Handle clicks and stop default behaviors.

## The Mission
1.  **Listen**: Add a click listener to \`#submit-btn\`.
2.  **Prevent**: Stop the form from reloading using \`e.preventDefault()\`.
3.  **Log**: Log "Clicked" to the console.
4.  **Target**: Log the text of the button using \`e.target.innerText\`.

## Syntax
\`\`\`javascript
btn.addEventListener("click", (e) => {
    e.preventDefault();
});
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Select: const btn = document.getElementById("submit-btn")',
                    completed: false,
                    regex: /const\s+btn\s*=\s*document\.getElementById\s*\(\s*['"]submit-btn['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Listen: btn.addEventListener("click", (e) => { ... })',
                    completed: false,
                    regex: /btn\.addEventListener\s*\(\s*['"]click['"]\s*,\s*\(?\w+\)?\s*=>/
                },
                {
                    id: 3,
                    description: 'Prevent: e.preventDefault()',
                    completed: false,
                    regex: /\w+\.preventDefault\s*\(\s*\)/
                },
                {
                    id: 4,
                    description: 'Target access: console.log(e.target.innerText)',
                    completed: false,
                    regex: /console\.log\s*\(\s*\w+\.target\.innerText\s*\)/
                }
            ],
            files: [
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// Lab 4: Events

// 1. Select Button


// 2. Add Event Listener

`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<form>
    <button id="submit-btn" type="submit">Submit Me</button>
</form>`
                }
            ]
        },
        // Quiz
        {
            id: 'dom-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Events Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'How do you stop a link from navigating?',
                    options: ['e.stop()', 'e.preventDefault()', 'e.halt()', 'return false'],
                    correctIndex: 1,
                    explanation: 'preventDefault() stops the User Agent from performing the default action (like form submission or link navigation).'
                }
            ]
        }
    ]
};
