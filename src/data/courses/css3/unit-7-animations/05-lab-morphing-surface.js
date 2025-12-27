import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1MorphingSurface = {
    id: 'css-unit7-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Morphing Surface (Transitions)',
    duration: '45 min',
    content: `
# Lab: The Morphing Surface (Transitions)

## 1. The Concept: Responsive Tactility
Architect, in the **Nexus AI Command Center**, every interaction must feel premium. A button shouldn't just "Instantly" change color—it should morph smoothly to provide tactile feedback to the engineer.

In this lab, you will master the **CSS Transition Engine**. You will select specific properties to animate to ensure maximum performance and create a professional "Eased" feel for the interface panels.

---

## 2. The Mission: The Panel Activation
You must build the **Active State** for the **Thermal Reactor Panel**:
1.  **Transition Sync**: Select \`background-color\`, \`transform\`, and \`border-color\` for transition.
2.  **Timing Discipline**: Set the duration to \`0.3s\` and use the \`ease-out\` timing function.
3.  **Interaction Trigger**: Apply a \`transform: scale(1.05)\` on the \`:hover\` state to make the panel "Pop" forward.

---

## 3. Senior Guidance: The "All" Trap
Avoid \`transition: all;\`. 
- **Reason**: It forces the browser to check every property on every frame, which can cause lag on complex dashboards.
- **Solution**: List your properties explicitly: \`transition: transform 0.3s, background 0.3s;\`.

> [!IMPORTANT]
> **Mission Objective**: Fluidity. The transition should be so smooth it feels like the panel is physically physically reacting to the user's touch.
`,
    tasks: [
        {
            id: 1,
            description: 'The Engine Hook: On ".panel", set "transition: transform 0.3s ease-out, background-color 0.3s ease-out;".',
            completed: false,
            regex: /\.panel\s*\{(?=[\s\S]*?transition\s*:\s*(?=[\s\S]*?transform\s+0\.3s\s+ease-out)(?=[\s\S]*?background-color\s+0\.3s\s+ease-out))[\s\S]*?\}/,
            hint: {
                concept: 'Defining specific properties for transitions is a Senior best practice.',
                strategy: 'Update the transition property on the base .panel class.',
                solution: 'transition: transform 0.3s ease-out, background-color 0.3s ease-out;'
            }
        },
        {
            id: 2,
            description: 'The Tactile Feedback: On ".panel:hover", set "transform: scale(1.05);".',
            completed: false,
            regex: /\.panel:hover\s*\{(?=[\s\S]*?transform\s*:\s*scale\(\s*1\.05\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Scale slightly increases the size without affecting siblings (Layout-friendly).',
                strategy: 'Target the hover state.',
                solution: 'transform: scale(1.05);'
            }
        },
        {
            id: 3,
            description: 'The Active Glow: On ".panel:hover", set "background-color: #1a1a2e;" and "border-color: #4cc9f0;".',
            completed: false,
            regex: /\.panel:hover\s*\{(?=[\s\S]*?background-color\s*:\s*#1a1a2e;?)(?=[\s\S]*?border-color\s*:\s*#4cc9f0;?)[\s\S]*?\}/,
            hint: {
                concept: 'Color changes combined with transforms create a high-fidelity feel.',
                strategy: 'Add these to the same .panel:hover rule.',
                solution: 'background-color: #1a1a2e; border-color: #4cc9f0;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS INTERFACE PANEL */
body {
    background: #05050a;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.panel {
    width: 300px;
    height: 150px;
    background-color: #111;
    border: 1px solid #333;
    padding: 20px;
    color: #eee;
    cursor: pointer;
    box-sizing: border-box;
    /* 1. Add Transitions below */
}

/* 2, 3. Add Hover States below */

h4 {
    margin: 0;
    color: #4cc9f0;
    letter-spacing: 1.5px;
}

p {
    font-size: 13px;
    color: #888;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="panel">
    <h4>THERMAL_REACTOR_04</h4>
    <p>Output: 4.2 GW. Stability: Nominal.</p>
</div>`
        }
    ]
};
