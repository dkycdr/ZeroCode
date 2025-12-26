import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4VariableFonts = {
    id: 'css-unit5-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Global Style (Variable Fonts)',
    duration: '50 min',
    content: `
# Lab: The Global Style (Variable Fonts)

## 1. The Concept: Infinite Flexibility
Architect, you are entering the final stage of Unit 5. Static fonts (one file for 400, one for 700) are becoming obsolete. We now use **Variable Fonts**.

A single Variable Font file allows you to set **any** weight between 100 and 900. You are no longer limited to "Bold" or "Regular"—you can have "Weight 452" if that is what looks best on the screen. This gives you absolute control over the **Nexus AI Aesthetic**.

---

## 2. The Mission: The Fluid Brand
You must implement a high-performance variable font setup:
1.  **Global Import**: Add the Google Font link for "Inter" Variable.
2.  **Total Control**: Set the \`h2\` weight to an ultra-precise \`550\`.
3.  **Adaptive Emphasis**: Change the weight to \`200\` (Thin) inside a hovering state to create a modern interactive effect.

---

## 3. Senior Guidance: The Memory Benefit
Variable fonts are not just for design; they are for **Performance**. By loading one variable file (e.g., 50kb), you get every weight. Loading three separate static files (400, 500, 700) would cost you ~150kb. You are saving bandwidth for the mission.

> [!CAUTION]
> **Syntax Warning**: To use variable weights, you must use the \`font-weight\` property with a numeric value. Do NOT use keywords like 'bold' or 'normal' if you want precise control.
`,
    tasks: [
        {
            id: 1,
            description: 'The Variable Hook: In "style.css", the @import is provided. Set "h1" to "font-weight: 850;".',
            completed: false,
            regex: /h1\s*\{(?=[\s\S]*?font-weight\s*:\s*850;?)[\s\S]*?\}/,
            hint: {
                concept: 'Numeric weights allow for intermediate thicknesses between standard bold and regular.',
                strategy: 'Update the h1 weight.',
                solution: 'font-weight: 850;'
            }
        },
        {
            id: 2,
            description: 'The Precise Body: Set "p" to "font-weight: 420;".',
            completed: false,
            regex: /p\s*\{(?=[\s\S]*?font-weight\s*:\s*420;?)[\s\S]*?\}/,
            hint: {
                concept: '420 is slightly heavier than standard 400, better for readability on dark backgrounds.',
                strategy: 'Update p weight.',
                solution: 'font-weight: 420;'
            }
        },
        {
            id: 3,
            description: 'The Hover Shift: Target "button:hover" and set its "font-weight: 700;".',
            completed: false,
            regex: /button:hover\s*\{(?=[\s\S]*?font-weight\s*:\s*700;?)[\s\S]*?\}/,
            hint: {
                concept: 'Variable fonts allow for smooth hovering transitions between weights.',
                strategy: 'Use the :hover pseudo-class.',
                solution: 'button:hover { font-weight: 700; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS_VARIABLE_SYSTEM */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

body {
    background: #000;
    color: white;
    font-family: 'Inter', sans-serif;
    padding: 60px;
}

h1 {
    color: #4cc9f0;
    margin: 0;
}

p {
    font-size: 1.1rem;
    line-height: 1.7;
}

button {
    background: transparent;
    border: 1px solid #4cc9f0;
    color: #4cc9f0;
    padding: 10px 20px;
    cursor: pointer;
    transition: font-weight 0.2s ease;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<h1>VARIABLE_CORE</h1>
<p>Unlike traditional fonts, variable fonts allow us to adjust the 'physical' appearance of letters on a sliding scale. This is the ultimate tool for a responsive interface.</p>
<button>INITIALIZE_DASHBOARD</button>`
        }
    ]
};
