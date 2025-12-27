
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2Traversal = {
    id: 'dom-unit-2',
    title: 'Unit 2: Traversal',
    description: 'Walk the tree. Parent, Child, and Sibling navigation.',
    items: [
        // 1. Deep Dive
        {
            id: 'dom-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Walking the DOM 🚶',
            duration: '10 min read',
            content: `
# Deep Dive: Walking the DOM 🚶

## 1. Relatives
Once you select an element, you can find its family.
*   **Up**: \`el.parentElement\` (or \`el.parentNode\`)
*   **Down**: \`el.children\` (HTMLCollection, ignores text nodes) or \`el.childNodes\` (Includes text/whitespace).
*   **Sideways**: \`el.nextElementSibling\` or \`el.previousElementSibling\`.

## 2. Closest
The \`closest(".selector")\` method searches **UP** the tree for the nearest ancestor matching the selector. It is extremely useful for Event Delegation.
            `
        },
        // Lab
        {
            id: 'dom-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Tree Walker',
            duration: '20 min',
            content: `
# Lab 1: Tree Walker

Navigate from a child to a parent without re-selecting.

## The Mission
1.  **Start**: Select the button with ID \`#action-btn\`.
2.  **Parent**: Access its parent div using \`.parentElement\`.
3.  **Color**: Change the parent's background color to "red".
4.  **Sibling**: Access the \`nextElementSibling\` of the parent.

## Syntax
\`\`\`javascript
const parent = child.parentElement;
parent.style.backgroundColor = "red";
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Select: const btn = document.getElementById("action-btn")',
                    completed: false,
                    regex: /const\s+btn\s*=\s*document\.getElementById\s*\(\s*['"]action-btn['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Parent: const container = btn.parentElement',
                    completed: false,
                    regex: /const\s+container\s*=\s*btn\.parentElement/
                },
                {
                    id: 3,
                    description: 'Style: container.style.backgroundColor = "red"',
                    completed: false,
                    regex: /container\.style\.backgroundColor\s*=\s*['"]red['"]/
                }
            ],
            files: [
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// Lab 2: Traversal

// 1. Select Button


// 2. Select Parent Container


// 3. Change Parent Color
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<div class="container">
    <button id="action-btn">Click Me</button>
</div>
<div class="next-box">Next</div>`
                }
            ]
        },
        // Quiz
        {
            id: 'dom-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Traversal Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which property ignores text nodes and only returns Elements?',
                    options: ['childNodes', 'children', 'nodes', 'childList'],
                    correctIndex: 1,
                    explanation: 'children returns an HTMLCollection of element nodes only, ignoring whitespace. childNodes returns everything (including text).'
                }
            ]
        }
    ]
};
