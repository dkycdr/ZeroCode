import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3MediaObject = {
    id: 'css-unit9-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Media Object',
    duration: '35 min',
    content: `
# Lab: The Media Object (Pattern Mastery)

## 1. The Concept: The LEGO of the Web
Architect, in the world of professional engineering, there is one pattern that repeats more than any other: **The Media Object**. (Used by X, Facebook, Amazon, and the Nexus Dashboard).

This pattern consists of a fixed image/icon on one side and a flexible text block on the other. The challenge is ensuring the text block scales perfectly regardless of length. In this lab, you will build this core building block using **Pure BEM Architecture**.

---

## 2. The Mission: Neural Profile Entry
You are building the **Citizen Identity Card** for the Nexus Registry:
1.  **Block Logic**: Define the \`.nexus-profile\` container.
2.  **Atomic Elements**:
    - \`.nexus-profile__avatar\`: The identification visual.
    - \`.nexus-profile__body\`: The data container (must use \`flex: 1\`).
3.  **The Variant**: Implement a \`.nexus-profile--active\` modifier that adds a neon border to signify a live session.

---

## 3. Machine Logic: Structural Integrity
By using BEM (\`nexus-profile__avatar\`), we ensure that this avatar's styles never "clash" with an avatar in a different block (like \`.sidebar__avatar\`). This is **Simulated Encapsulation**—keeping your styles safe from the global scope.

---

## 4. Senior Guidance: Defensive Layout
> [!IMPORTANT]
> **No Magic Widths**: Never give the \`__body\` element a fixed width. Use \`flex: 1;\` so it can automatically fill the remaining viewport space.

> [!TIP]
> **Alignment Strategy**: Use \`align-items: flex-start;\` for text-heavy lists (like emails) and \`align-items: center;\` for compact headers.
`,
    tasks: [
        {
            id: 1,
            description: 'The Identity Block: On ".nexus-profile", set "display: flex;" and "align-items: center;".',
            completed: false,
            regex: /\.nexus-profile\s*\{(?=[\s\S]*?display\s*:\s*flex;?)(?=[\s\S]*?align-items\s*:\s*center;?)[\s\S]*?\}/,
            hint: {
                concept: 'Flexbox is the modern engine for Media Objects.',
                strategy: 'Target the main block.',
                solution: '.nexus-profile { display: flex; align-items: center; }'
            }
        },
        {
            id: 2,
            description: 'The Fluid Body: On ".nexus-profile__body", set "flex: 1;" and "padding-left: 20px;".',
            completed: false,
            regex: /\.nexus-profile__body\s*\{(?=[\s\S]*?flex\s*:\s*1;?)(?=[\s\S]*?padding-left\s*:\s*20px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Flex: 1 allows the element to grow and fill empty space.',
                strategy: 'Target the body element.',
                solution: '.nexus-profile__body { flex: 1; padding-left: 20px; }'
            }
        },
        {
            id: 3,
            description: 'The Active Mood: Create ".nexus-profile--active" and set "border: 1px solid #4cc9f0;" and "box-shadow: 0 0 15px rgba(76, 201, 240, 0.3);".',
            completed: false,
            regex: /\.nexus-profile--active\s*\{(?=[\s\S]*?border\s*:\s*1px\s+solid\s+#4cc9f0;?)(?=[\s\S]*?box-shadow\s*:\s*0\s+0\s+15px\s+rgba\(\s*76,\s*201,\s*240,\s*0\.3\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Modifiers change the state of the whole block.',
                strategy: 'Create the active modifier.',
                solution: '.nexus-profile--active { border: 1px solid #4cc9f0; box-shadow: 0 0 15px rgba(76, 201, 240, 0.3); }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS CITIZEN IDENTITY CARD */
body {
    background: #000;
    padding: 60px;
}

.nexus-profile {
    background: #111;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid #222;
    /* 1. Flex layout here */
}

.nexus-profile__avatar {
    width: 64px;
    height: 64px;
    background: #333;
    border-radius: 50%;
    overflow: hidden;
    flex-shrink: 0;
}

.nexus-profile__body {
    /* 2. Fluid layout here */
}

/* 3. Active variant here */

.nexus-profile__name {
    margin: 0;
    color: #eee;
    font-family: 'Inter', sans-serif;
    letter-spacing: 2px;
}

.nexus-profile__id {
    color: #4cc9f0;
    font-size: 11px;
    font-family: monospace;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="nexus-profile nexus-profile--active">
    <div class="nexus-profile__avatar">
        <img src="https://api.dicebear.com/7.x/pixel-art/svg?seed=Nexus" alt="AVATAR">
    </div>
    <div class="nexus-profile__body">
        <h3 class="nexus-profile__name">SYNERGY_DRIVE_01</h3>
        <span class="nexus-profile__id">ID: 9942-AX-8</span>
    </div>
</div>`
        }
    ]
};
