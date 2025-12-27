
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Intro = {
    id: 'dom-unit-1',
    title: 'Unit 1: Selecting Elements',
    description: 'The Bridge between HTML and JavaScript. Learn to grab elements.',
    items: [
        // 1. Deep Dive
        {
            id: 'dom-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The DOM Tree 🌳',
            duration: '10 min read',
            content: `
# Deep Dive: The DOM Tree 🌳

## 1. What is the DOM?
The **Document Object Model** is a tree structure representation of your HTML.
JavaScript doesn't see "tags", it sees **Nodes**.

## 2. Selection Methods
*   \`getElementById("id")\`: Fast, specific.
*   \`getElementsByClassName("class")\`: Returns a live HTMLCollection (Old school).
*   \`querySelector(".class")\`: Returns the **first** match.
*   \`querySelectorAll(".class")\`: Returns a **NodeList** of all matches.

## 3. NodeList vs Array
A NodeList looks like an array, but it's not. You often need to convert it using \`Array.from()\` to map over it.
            `
        },
        // Lab
        {
            id: 'dom-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Selector',
            duration: '20 min',
            content: `
# Lab 1: The Selector

Practice selecting elements using modern methods.

## The Mission
1.  **Select ID**: Get the \`#main-title\`.
2.  **Select Class**: Get the first \`.card\` using \`querySelector\`.
3.  **Select All**: Get all \`.btn\` elements using \`querySelectorAll\`.
4.  **Change Text**: Update the title's \`innerText\` to "DOM Master".

## Syntax
\`\`\`javascript
const el = document.querySelector("#id");
el.innerText = "New Text";
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Select ID: const title = document.getElementById("main-title")',
                    completed: false,
                    regex: /const\s+title\s*=\s*document\.getElementById\s*\(\s*['"]main-title['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Select First Class: const card = document.querySelector(".card")',
                    completed: false,
                    regex: /const\s+card\s*=\s*document\.querySelector\s*\(\s*['"]\.card['"]\s*\)/
                },
                {
                    id: 3,
                    description: 'Select All: const btns = document.querySelectorAll(".btn")',
                    completed: false,
                    regex: /const\s+btns\s*=\s*document\.querySelectorAll\s*\(\s*['"]\.btn['"]\s*\)/
                },
                {
                    id: 4,
                    description: 'Manipulation: title.innerText = "DOM Master"',
                    completed: false,
                    regex: /title\.(innerText|textContent)\s*=\s*['"]DOM Master['"]/
                }
            ],
            files: [
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// Lab 1: DOM Selection

// 1. Select the title by ID


// 2. Select the first card


// 3. Select all buttons


// 4. Change title text
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!-- Lab HTML (Read Only) -->
<h1 id="main-title">Hello DOM</h1>
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<button class="btn">Click</button>
<button class="btn">Click</button>
`
                }
            ]
        },
        // Quiz
        {
            id: 'dom-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Selection Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which method returns a NodeList?',
                    options: ['getElementById', 'querySelector', 'querySelectorAll', 'search'],
                    correctIndex: 2,
                    explanation: 'querySelectorAll returns a static NodeList containing all matching elements.'
                }
            ]
        }
    ]
};
