import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1GlobalPalette = {
    id: 'css-unit8-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Global Palette',
    duration: '45 min',
    content: `
# Lab: The Global Palette

## 1. The Concept: Design Sovereignty
Architect, the **Nexus AI Network** is expanding. We can no longer hardcode hex values like \`#4cc9f0\` into every element. We need to create a **Central Power Source** for our colors.

In this lab, you will initialize the **Root Token Protocol**. You will define your core brand colors inside the \`:root\` scope and then refactor your components to use these tokens. This is the first step in building a professional Design System.

---

## 2. The Mission: The Color Core
You must establish the **Nexus Color Matrix**:
1.  **Token Definition**: Define \`--nexus-primary: #4cc9f0;\` and \`--nexus-bg: #05050a;\` inside \`:root\`.
2.  **Implementation**: Use the \`var()\` function to apply these colors to the \`body\`.
3.  **Semantic Link**: Create a second variable \`--text-highlight\` that points to \`var(--nexus-primary)\`.

---

## 3. Senior Guidance: The Double-Dash
Why the double dash (\`--\`)? This is how the CSS engine distinguishes between standard properties (like \`color\`) and your own custom properties. Think of \`--\` as the "Reserved" prefix for your architectural decisions.

> [!IMPORTANT]
> **Mission Objective**: Centralization. Ensure no color hex code remains in your element selectors—they must all point to the root tokens.
`,
    tasks: [
        {
            id: 1,
            description: 'The Root Protocol: Inside ":root", define "--nexus-primary: #4cc9f0;" and "--nexus-bg: #05050a;".',
            completed: false,
            regex: /:root\s*\{(?=[\s\S]*?--nexus-primary\s*:\s*#4cc9f0;?)(?=[\s\S]*?--nexus-bg\s*:\s*#05050a;?)[\s\S]*?\}/,
            hint: {
                concept: ':root is a pseudo-class that matches the document root (html).',
                strategy: 'Open the :root block and define your tokens.',
                solution: ':root { --nexus-primary: #4cc9f0; --nexus-bg: #05050a; }'
            }
        },
        {
            id: 2,
            description: 'The Power Draw: On the "body", set "background-color: var(--nexus-bg);" and "color: var(--nexus-primary);".',
            completed: false,
            regex: /body\s*\{(?=[\s\S]*?background-color\s*:\s*var\(--nexus-bg\);?)(?=[\s\S]*?color\s*:\s*var\(--nexus-primary\);?)[\s\S]*?\}/,
            hint: {
                concept: 'var() fetches the value stored in a token.',
                strategy: 'Update background-color and color.',
                solution: 'background-color: var(--nexus-bg); color: var(--nexus-primary);'
            }
        },
        {
            id: 3,
            description: 'The Semantic Link: Inside ":root", define "--border-accent: var(--nexus-primary);".',
            completed: false,
            regex: /:root\s*\{(?=[\s\S]*?--border-accent\s*:\s*var\(--nexus-primary\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Linking variables allows you to change the secondary purpose by just re-mapping the link.',
                strategy: 'Define a new variable pointing to an existing one.',
                solution: '--border-accent: var(--nexus-primary);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS COLOR MATRIX */

/* 1, 3. Initialize Root Tokens below */

body {
    padding: 100px;
    font-family: 'Inter', sans-serif;
    /* 2. Apply Tokens here */
}

.box {
    width: 200px;
    height: 100px;
    border: 2px solid var(--border-accent);
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="box">NEXUS_CORE</div>`
        }
    ]
};
