import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit7DOM = {
    id: 'js-unit-7',
    title: 'DOM Manipulation - The Puppeteer',
    description: 'JavaScript lives in the browser. Learn to select HTML elements, change their style, and react to clicks. Master the Event Loop.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-7-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The DOM Tree 🌳',
            duration: '20 min read',
            content: `
# Deep Dive: The DOM Tree 🌳

## Document Object Model
When a browser loads HTML, it turns tags into **Objects**.
\`<div id="app">\` becomes \`document.getElementById("app")\`.

## The Hierarchy (Tree)
*   **Window**: The Browser Tab.
*   **Document**: The Page content.
*   **HTML**: The root.
    *   **Head**: Metadata.
    *   **Body**: Visible content.
        *   **Div**: A box.
            *   **H1**: A title.

## Nodes
Everything is a Node.
*   **Element Node**: The tag (\`<div>\`).
*   **Text Node**: The text inside ("Hello").
*   **Attribute Node**: The class (\`class="box"\`).
            `
        },
        {
            id: 'js-7-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Query Selector API 🔍',
            duration: '20 min read',
            content: `
# Deep Dive: Query Selector API 🔍

In the old days, we used \`getElementById\`, \`getElementsByClassName\`, etc.
Today, we use the Swiss Army Knife APIs.

## 1. querySelector("css-selector")
*   Finds the **FIRST** match.
*   Returns ONE Element (or null).
*   Usage: \`querySelector("#id")\`, \`querySelector(".class")\`.

## 2. querySelectorAll("css-selector")
*   Finds **ALL** matches.
*   Returns a **NodeList** (Array-like).
*   You must Loop through it (forEach) to change things.
            `
        },
        {
            id: 'js-7-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Event Flow (Bubbling) 🫧',
            duration: '25 min read',
            content: `
# Deep Dive: The Event Flow (Bubbling) 🫧

When you click a button inside a div, who handles the click?
Both of them.

## 1. Capture Phase (Down) ⬇️
The notification travels from Window -> Body -> Div -> Button.

## 2. Target Phase (Hit) 🎯
It hits the Button.

## 3. Bubbling Phase (Up) ⬆️
The notification travels BACK UP.
Button -> Div -> Body -> Window.

**Most event listeners listen to the Bubbling Phase.**
This means a click on a child also triggers a click on the parent.
            `
        },
        {
            id: 'js-7-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Styling (ClassList) 🎨',
            duration: '15 min read',
            content: `
# Deep Dive: Styling (ClassList) 🎨

## Don't use .style
Writing \`el.style.color = "red"\` adds inline styles. This is messy and hard to override.

## Use .classList
The pro way is to define classes in CSS, and toggle them in JS.

*   \`el.classList.add("active")\`: Turns it on.
*   \`el.classList.remove("active")\`: Turns it off.
*   \`el.classList.toggle("active")\`: Flips the switch.
*   \`el.classList.contains("active")\`: Checks status.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-7-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Query',
            duration: '20 min',
            content: `
# Lab 1: The Query

Select elements using CSS syntax.

## The Mission
1.  Select \`#title\` into \`const title\`.
2.  Select \`.box\` into \`const box\`. (First one).
3.  Log them.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'ID: Select "#title".',
                    completed: false,
                    regex: /const\s+title\s*=\s*document\.querySelector\s*\(\s*["']#title["']\s*\)/
                },
                {
                    id: 2,
                    description: 'Class: Select ".box".',
                    completed: false,
                    regex: /const\s+box\s*=\s*document\.querySelector\s*\(\s*["']\.box["']\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Selectors
// TODO...
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<h1 id="title">Hi</h1><div class="box"></div>`
                }
            ]
        },
        {
            id: 'js-7-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Content',
            duration: '20 min',
            content: `
# Lab 2: The Content

Change the text.

## The Mission
1.  Select \`h1\`.
2.  Change \`innerText\` to "Updated by JS!".
3.  Change \`style.color\` to "blue".

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Text: h1.innerText = "Updated by JS!".',
                    completed: false,
                    regex: /innerText\s*=\s*["']Updated by JS!["']/
                },
                {
                    id: 2,
                    description: 'Color: h1.style.color = "blue".',
                    completed: false,
                    regex: /style\.color\s*=\s*["']blue["']/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const h1 = document.querySelector("h1");
// TODO: Modify
`
                }
            ]
        },
        {
            id: 'js-7-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Listener',
            duration: '25 min',
            content: `
# Lab 3: The Listener

React to user input.

## The Mission
1.  Select \`button\`.
2.  Add event listener for "click".
3.  Inside, log "Clicked!".

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Listen: btn.addEventListener("click", ...).',
                    completed: false,
                    regex: /btn\.addEventListener\s*\(\s*["']click["']/
                },
                {
                    id: 2,
                    description: 'Log: Console log "Clicked!".',
                    completed: false,
                    regex: /console\.log\s*\(\s*["']Clicked!["']\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const btn = document.querySelector("button");
// TODO: Listen
`
                }
            ]
        },
        {
            id: 'js-7-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Class Toggle',
            duration: '25 min',
            content: `
# Lab 4: The Class Toggle

Making a Dark Mode toggle.

## The Mission
1.  Select body.
2.  On button click, \`classList.toggle("dark-mode")\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Toggle: body.classList.toggle("dark-mode").',
                    completed: false,
                    regex: /body\.classList\.toggle\s*\(\s*["']dark-mode["']\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const body = document.body;
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    // TODO: Toggle
});
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-7-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'DOM Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the "Bubbling Phase"?',
                    options: [
                        'When an event travels DOWN to the target',
                        'When an event travels UP from the target to the window',
                        'When bubbles appear',
                        'When an event is cancelled'
                    ],
                    correctIndex: 1,
                    explanation: 'Events bubble up like air bubbles in water. Target -> Parent -> Body -> Window.'
                },
                {
                    id: 'q2',
                    question: 'What does querySelector("#id") return if not found?',
                    options: [
                        'Error',
                        'undefined',
                        'null',
                        'empty array'
                    ],
                    correctIndex: 2,
                    explanation: 'It returns null. Always check before trying to access properties.'
                },
                {
                    id: 'q3',
                    question: 'Which is better for performance and maintenance?',
                    options: [
                        'element.style.color = "red"',
                        'element.classList.add("error")',
                        'element.setAttribute("style", "color: red")',
                        'element.css("color", "red")'
                    ],
                    correctIndex: 1,
                    explanation: 'ClassList keeps styling in CSS (Separation of Concerns) and is faster.'
                },
                {
                    id: 'q4',
                    question: 'What is the DOM?',
                    options: [
                        'Database Object Model',
                        'Document Object Model',
                        'Digital Ordinance Model',
                        'Display Only Mode'
                    ],
                    correctIndex: 1,
                    explanation: 'The standard interface for HTML manipulation.'
                },
                {
                    id: 'q5',
                    question: 'What happens if you use querySelectorAll?',
                    options: [
                        'You get one element',
                        'You get a NodeList (Array-like)',
                        'You get an error',
                        'You get a string'
                    ],
                    correctIndex: 1,
                    explanation: 'You receive a collection of nodes. You cannot set .style on the list directly; you must loop.'
                }
            ]
        }
    ]
};
