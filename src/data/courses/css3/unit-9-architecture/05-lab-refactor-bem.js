import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1RefactorBem = {
    id: 'css-unit9-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Legacy Refactor (BEM)',
    duration: '45 min',
    content: `
# Lab: Legacy Refactor (BEM)

## 1. The Concept: Structural Decoupling
Architect, you have inherited a legacy codebase from a junior engineer. They wrote "Structural" CSS, such as: \`.nav ul li a\`.

**The Fatal Flaw**: If the design team decides to change the \`ul\` to a \`div\` or move the link to a different container, the navigation styles will collapse instantly. The code is "Glued" to the HTML structure. In this lab, you will perform **Structural Uncoupling** using BEM, ensuring your styles remain rock-solid regardless of HTML changes.

---

## 2. The Mission: The Nexus Navigation Purge
You must rebuild the navigation system from a nested, brittle structure into a flat, independent BEM architecture.

### Deployment Parameters:
1.  **Block Definition**: Define the \`.nav-console\` container.
2.  **Element Sovereignty**: Target the \`.nav-console__link\` directly. You must **NOT** use nested selectors like \`.nav-console a\`.
3.  **Visual Alignment**: Use Flexbox inside the Block to align the elements.
4.  **Flat Specificity**: Ensure every selector uses exactly one class to achieve predictable cascading.

---

## 3. Senior Guidance: Transparency of Intent
In the Nexus environment, every element must have its "Home" (Block) clearly identified in its name. This allows any engineer to look at \`.nav-console__link\` and know exactly where its logic is stored without searching.

---

## 4. Architectural Alerts
> [!IMPORTANT]
> **No Descendants**: Never write \`.parent .child { ... }\` in BEM. Every element is a first-class citizen targeted via its own unique class.

> [!TIP]
> **Performance**: Single class selectors like \`.nav-console__link\` are processed significantly faster by the browser's rendering engine than long structural selectors.
`,
    tasks: [
        {
            id: 1,
            description: 'The Command Block: Style ".nav-console" with "background-color: #05050a;", "display: flex;", and "gap: 20px;".',
            completed: false,
            regex: /\.nav-console\s*\{(?=[\s\S]*?background-color\s*:\s*#05050a;?)(?=[\s\S]*?display\s*:\s*flex;?)(?=[\s\S]*?gap\s*:\s*20px;?)[\s\S]*?\}/,
            hint: {
                concept: 'The Block defines the environment for its elements.',
                strategy: 'Target .nav-console and apply layout properties.',
                solution: '.nav-console { background-color: #05050a; display: flex; gap: 20px; }'
            }
        },
        {
            id: 2,
            description: 'The Link Molecule: Target ".nav-console__link" (NOT "a"). Set "color: #4cc9f0;", "text-decoration: none;", and "font-family: monospace;".',
            completed: false,
            regex: /\.nav-console__link\s*\{(?=[\s\S]*?color\s*:\s*#4cc9f0;?)(?=[\s\S]*?text-decoration\s*:\s*none;?)(?=[\s\S]*?font-family\s*:\s*monospace;?)[\s\S]*?\}/,
            hint: {
                concept: 'Targeting elements directly ensures styles don\'t "leak" or break during structural changes.',
                strategy: 'Open a rule for .nav-console__link.',
                solution: '.nav-console__link { color: #4cc9f0; text-decoration: none; font-family: monospace; }'
            }
        },
        {
            id: 3,
            description: 'The Clean Reset: On ".nav-console__item", set "list-style: none;" and "padding: 10px;".',
            completed: false,
            regex: /\.nav-console__item\s*\{(?=[\s\S]*?list-style\s*:\s*none;?)(?=[\s\S]*?padding\s*:\s*10px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Every intermediate container in BEM should be treated as an element.',
                strategy: 'Target the item element.',
                solution: '.nav-console__item { list-style: none; padding: 10px; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS UNIT 9: ARCHITECTURAL PURGE */

/* 1. Define the Command Block (.nav-console) */


/* 2. Define the Link Molecule (.nav-console__link) */


/* 3. Define the List Item (.nav-console__item) */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<nav class="nav-console">
    <li class="nav-console__item">
        <a href="#" class="nav-console__link">ARCHIVE_01</a>
    </li>
    <li class="nav-console__item">
        <a href="#" class="nav-console__link">SYSTEM_DRIVE</a>
    </li>
    <li class="nav-console__item">
        <a href="#" class="nav-console__link">CORE_STATUS</a>
    </li>
</nav>`
        }
    ]
};
