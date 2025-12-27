import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3StaggeredInterface = {
    id: 'css-unit7-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Staggered Entrance',
    duration: '50 min',
    content: `
# Lab: The Staggered Entrance

## 1. The Concept: Controlled Sequencing
Architect, when the **Nexus Dashboard** first loads, showing 20 widgets at once is overwhelming. A professional interface uses **Staggering**—revealing elements one after another in a waterfall effect.

In this lab, you will master **Animation Delay**. You will use the same animation for multiple elements but "Offset" their start times using structural pseudo-selectors (\`:nth-child\`). This creates a cinematic feeling of the system "Booting Up."

---

## 2. The Mission: The Component Boot-Up
You must animate the **Interface Grid Cells**:
1.  **Unified Entrance**: Define a \`reveal\` animation that fades from \`opacity: 0\` to \`1\`.
2.  **The Fill Protocol**: Use \`animation-fill-mode: forwards\` to ensure they stay visible after the animation.
3.  **The Waterfall**: Use \`nth-child\` to give the 2nd cell a \`0.2s\` delay and the 3rd cell a \`0.4s\` delay.

---

## 3. Senior Guidance: Transparency Discipline
When animating opacity from 0, your elements must start with \`opacity: 0\` in their base CSS. If you don't, they will flash on the screen briefly before the animation starts. This is a common amateur mistake.

> [!IMPORTANT]
> **Mission Objective**: Elegance. The stagger should be fast enough to feel snappy, but slow enough for the user's eye to follow the sequence.
`,
    tasks: [
        {
            id: 1,
            description: 'The Reveal Logic: Create "@keyframes reveal" that goes from "opacity: 0" to "opacity: 1".',
            completed: false,
            regex: /@keyframes\s+reveal\s*\{(?=[\s\S]*?from\s*\{[\s\S]*?opacity\s*:\s*0;?[\s\S]*?\})(?=[\s\S]*?to\s*\{[\s\S]*?opacity\s*:\s*1;?[\s\S]*?\})[\s\S]*?\}/,
            hint: {
                concept: 'from/to is an alias for 0%/100%.',
                strategy: 'Define the reveal sequence.',
                solution: '@keyframes reveal { from { opacity: 0; } to { opacity: 1; } }'
            }
        },
        {
            id: 2,
            description: 'The Base Apply: On ".cell", set "animation: reveal 0.5s forwards;".',
            completed: false,
            regex: /\.cell\s*\{(?=[\s\S]*?animation\s*:\s*reveal\s+0\.5s\s+forwards;?)[\s\S]*?\}/,
            hint: {
                concept: 'forwards ensures the element stays at 100% opacity.',
                strategy: 'Update .cell class.',
                solution: 'animation: reveal 0.5s forwards;'
            }
        },
        {
            id: 3,
            description: 'The Stagger: Set "animation-delay: 0.2s;" for ".cell:nth-child(2)" and "0.4s;" for ".cell:nth-child(3)".',
            completed: false,
            regex: /\.cell:nth-child\(2\)\s*\{(?=[\s\S]*?animation-delay\s*:\s*0\.2s;?)[\s\S]*?\}[\s\S]*?\.cell:nth-child\(3\)\s*\{(?=[\s\S]*?animation-delay\s*:\s*0\.4s;?)[\s\S]*?\}/,
            hint: {
                concept: 'Delay offsets the start relative to the page load.',
                strategy: 'Use nth-child to target specific cells.',
                solution: '.cell:nth-child(2) { animation-delay: 0.2s; } .cell:nth-child(3) { animation-delay: 0.4s; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS BOOT SEQUENCE */
body {
    background: #020205;
    padding: 60px;
    display: flex;
    gap: 20px;
}

.cell {
    width: 150px;
    height: 150px;
    background: #111;
    border: 1px solid #333;
    opacity: 0; /* Start hidden */
}

/* 1, 2. Keyframes and Base Animation here */

/* 3. nth-child staggering logic below */
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="cell"></div>
<div class="cell"></div>
<div class="cell"></div>`
        }
    ]
};
