import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3ComponentTokens = {
    id: 'css-unit8-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Component Tokenization',
    duration: '45 min',
    content: `
# Lab: Component Tokenization

## 1. The Concept: Local Logic
Architect, while global variables are great for colors, sometimes we need variables that only exist inside a specific component. This is called **Local Scoping**.

In this lab, you will build a **Nexus Status Card**. You will define variables *inside* the \`.card\` class itself. This allows you to create variations (e.g., a "Danger" card) by simply changing the local variable value.

---

## 2. The Mission: The Modular Card
1.  **Local Definition**: Inside \`.card\`, define \`--card-accent: #4cc9f0;\` and \`--card-bg: #111;\`.
2.  **Implementation**: Use these local variables for the card's border and background.
3.  **Variant Protocol**: Target \`.card.danger\` and override \`--card-accent\` to \`#f72585; \` (Vibrant Pink).

---

## 3. Senior Guidance: The Power of Override
Notice that you don't have to redefine \`border: 2px solid ...\` for the danger card. You only change the **Variable**. The CSS rule remains the same, but it's now drinking from a "Red" bucket instead of a "Cyan" bucket. This is the ultimate peak of DRY (Don't Repeat Yourself) CSS.

> [!IMPORTANT]
> **Mission Objective**: Modularity. Your components should be "Self-Contained," carrying their own styling logic within their local scope.
`,
    tasks: [
        {
            id: 1,
            description: 'The Local Scope: Inside ".card", define "--accent: #4cc9f0;" and "--bg: #111;".',
            completed: false,
            regex: /\.card\s*\{(?=[\s\S]*?--accent\s*:\s*#4cc9f0;?)(?=[\s\S]*?--bg\s*:\s*#111;?)[\s\S]*?\}/,
            hint: {
                concept: 'Defining variables inside a class limits their scope to that element and its children.',
                strategy: 'Update the .card rule.',
                solution: '--accent: #4cc9f0; --bg: #111;'
            }
        },
        {
            id: 2,
            description: 'The Token Apply: Set ".card" to "border: 2px solid var(--accent);" and "background: var(--bg);".',
            completed: false,
            regex: /\.card\s*\{(?=[\s\S]*?border\s*:\s*2px\s+solid\s+var\(--accent\);?)(?=[\s\S]*?background\s*:\s*var\(--bg\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Use the local tokens to style the card components.',
                strategy: 'Apply border and background.',
                solution: 'border: 2px solid var(--accent); background: var(--bg);'
            }
        },
        {
            id: 3,
            description: 'The Variant Shift: On ".card.danger", override "--accent: #f72585;".',
            completed: false,
            regex: /\.card\.danger\s*\{(?=[\s\S]*?--accent\s*:\s*#f72585;?)[\s\S]*?\}/,
            hint: {
                concept: 'By only overriding the variable, we leverage all the other card styles automatically.',
                strategy: 'Update the --accent token in the specialized class.',
                solution: '.card.danger { --accent: #f72585; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS COMPONENT SYSTEM */
body {
    background: #000;
    color: white;
    padding: 60px;
    display: flex;
    gap: 30px;
}

.card {
    width: 200px;
    padding: 30px;
    /* 1. Define Local Tokens */
    /* 2. Apply Local Tokens */
}

/* 3. Logic for Danger Variant */


h3 { margin: 0; color: var(--accent); }
p { font-size: 14px; opacity: 0.7; }
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="card">
    <h3>STABLE</h3>
    <p>All sectors normal.</p>
</div>

<div class="card danger">
    <h3>WARNING</h3>
    <p>Leak detected in sector 7.</p>
</div>`
        }
    ]
};
