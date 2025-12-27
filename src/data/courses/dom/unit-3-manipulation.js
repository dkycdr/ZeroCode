
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Manipulation = {
    id: 'dom-unit-3',
    title: 'Unit 3: Manipulation',
    description: 'God Mode. Create, Destroy, and Modify elements.',
    items: [
        // 1. Deep Dive
        {
            id: 'dom-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Creating Elements 🏗️',
            duration: '15 min read',
            content: `
# Deep Dive: Creating Elements 🏗️

## 1. The 3-Step Process
To add something new:
1.  **Create**: \`const div = document.createElement("div");\`
2.  **Modify**: \`div.className = "box"; div.innerText = "Hi";\`
3.  **Append**: \`document.body.appendChild(div);\`

## 2. Classes
Don't manipulate \`style\` directly if you can avoid it. Toggle classes instead.
*   \`el.classList.add("active")\`
*   \`el.classList.remove("active")\`
*   \`el.classList.toggle("active")\`

## 3. Removal
*   \`el.remove()\`: The modern way.
*   \`parent.removeChild(child)\`: The old way.
            `
        },
        // Lab
        {
            id: 'dom-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Element Factory',
            duration: '25 min',
            content: `
# Lab 1: Element Factory

Create a new notification bubble and add it to the page.

## The Mission
1.  **Create**: Make a new \`div\`.
2.  **Class**: Add the class "alert" using \`classList.add\`.
3.  **Content**: Set text to "Saved Successfully".
4.  **Insert**: Append it to the \`#app\` container.

## Syntax
\`\`\`javascript
const el = document.createElement("tag");
container.appendChild(el);
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create: const div = document.createElement("div")',
                    completed: false,
                    regex: /const\s+div\s*=\s*document\.createElement\s*\(\s*['"]div['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Class: div.classList.add("alert")',
                    completed: false,
                    regex: /div\.classList\.add\s*\(\s*['"]alert['"]\s*\)/
                },
                {
                    id: 3,
                    description: 'Text: div.innerText = "Saved Successfully"',
                    completed: false,
                    regex: /div\.(innerText|textContent)\s*=\s*['"]Saved Successfully['"]/
                },
                {
                    id: 4,
                    description: 'Append: document.getElementById("app").appendChild(div)',
                    completed: false,
                    regex: /\.appendChild\s*\(\s*div\s*\)/
                }
            ],
            files: [
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// Lab 3: Manipulation

// 1. Create Div


// 2. Add Class


// 3. Set Text


// 4. Append to #app
`
                },
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<div id="app"></div>`
                }
            ]
        },
        // Quiz
        {
            id: 'dom-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Manipulation Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which method adds a CSS class without deleting others?',
                    options: ['className = "new"', 'classList.push()', 'classList.add()', 'style.class = "new"'],
                    correctIndex: 2,
                    explanation: 'classList.add() appends the class. properties like className string overwrite the entire attribute.'
                }
            ]
        }
    ]
};
