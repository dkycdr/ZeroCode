import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1TooltipEngine = {
    id: 'css-unit6-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Tooltip Engine (::after)',
    duration: '45 min',
    content: `
# Lab: The Tooltip Engine (::after)

## 1. The Concept: Semantic Context
Architect, the **Nexus AI Operations Map** is full of cryptic icons. We cannot display text labels for everything or the UI would be cluttered. Instead, we use **Tooltips**—text that appears only when the user hovers over an element.

In this lab, you will build a **Pure CSS Tooltip Engine**. You will use \`::after\` to create the text box and the \`attr()\` function to dynamically pull the label from the HTML.

---

## 2. The Mission: The Interactive Legend
You must build tooltips for the **System Status Icons**:
1.  **Pseudo Activation**: Enable the \`::after\` element on the \`.tooltip\` class.
2.  **Dynamic Content**: Use \`content: attr(data-tooltip);\` to fetch the text label.
3.  **Interaction Shield**: Ensure the tooltip is hidden by default (\`opacity: 0\`) and only appears during the \`:hover\` state.

---

## 3. Senior Guidance: Z-Index and Stacking
When creating tooltips, the pseudo-element must always be "Higher" than the rest of the interface. 
- Ensure your \`.tooltip\` parent has \`position: relative;\`.
- Ensure your \`::after\` has \`z-index: 10;\`.
- Use \`pointer-events: none;\` on the tooltip so it doesn't accidentally block the user from clicking the icon underneath it.

> [!IMPORTANT]
> **Mission Objective**: Performance. A CSS-based tooltip system is faster and more reliable than a JavaScript-based one.
`,
    tasks: [
        {
            id: 1,
            description: 'The Shadow Element: Initialize ".tooltip::after" with "content: attr(data-tooltip);".',
            completed: false,
            regex: /\.tooltip::after\s*\{(?=[\s\S]*?content\s*:\s*attr\(\s*data-tooltip\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'attr() pulls the value of a data-attribute from the HTML element.',
                strategy: 'Add this to the .tooltip::after selector.',
                solution: 'content: attr(data-tooltip);'
            }
        },
        {
            id: 2,
            description: 'The Absolute Lock: On ".tooltip::after", set "position: absolute;", "bottom: 120%;", and "left: 50%;".',
            completed: false,
            regex: /\.tooltip::after\s*\{(?=[\s\S]*?position\s*:\s*absolute;?)(?=[\s\S]*?bottom\s*:\s*120%;?)(?=[\s\S]*?left\s*:\s*50%;?)[\s\S]*?\}/,
            hint: {
                concept: 'Absolute positioning relative to the parent puts the tooltip exactly where we want it.',
                strategy: 'Update the positioning properties.',
                solution: 'position: absolute; bottom: 120%; left: 50%;'
            }
        },
        {
            id: 3,
            description: 'The Stealth State: Set ".tooltip::after" to "opacity: 0;" and then "opacity: 1;" inside ".tooltip:hover::after".',
            completed: false,
            regex: /\.tooltip::after\s*\{[\s\S]*?opacity\s*:\s*0;?[\s\S]*?\}[\s\S]*?\.tooltip:hover::after\s*\{(?=[\s\S]*?opacity\s*:\s*1;?)[\s\S]*?\}/,
            hint: {
                concept: 'Interaction states can control individual pseudo-elements.',
                strategy: 'Hide it first, then reveal it on hover.',
                solution: '.tooltip::after { opacity: 0; } .tooltip:hover::after { opacity: 1; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS TOOLTIP SYSTEM */
body {
    background: #05050a;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.icon-container {
    display: flex;
    gap: 40px;
}

.tooltip {
    position: relative;
    width: 60px;
    height: 60px;
    background: #111;
    border: 1px solid #333;
    display: grid;
    place-items: center;
    color: #4cc9f0;
    cursor: help;
}

/* 1, 2, 3. Build the Tooltip Engine below */
.tooltip::after {
    background: #4cc9f0;
    color: black;
    padding: 8px 12px;
    font-size: 12px;
    border-radius: 4px;
    white-space: nowrap;
    transform: translateX(-50%);
    pointer-events: none;
    transition: opacity 0.2s ease;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="icon-container">
    <div class="tooltip" data-tooltip="CORE_STABILITY: 99.4%">⚛️</div>
    <div class="tooltip" data-tooltip="WAVE_SIGNAL: OPTIMAL">📡</div>
    <div class="tooltip" data-tooltip="POWER_RESERVE: 84%">⚡</div>
</div>`
        }
    ]
};
