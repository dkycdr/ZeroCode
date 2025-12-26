import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4MotionOrquestration = {
    id: 'css-unit7-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Motion Orchestration',
    duration: '55 min',
    content: `
# Lab: Motion Orchestration

## 1. The Concept: Total Control
Architect, you have reached the final challenge of Unit 7. The **Nexus Warp Engine** requires a complex sequence of visual cues to signal start-up: a simultaneous scale, rotate, and fade.

In this lab, you will orchestrate a **Multi-Property Animation**. You will also implement the **Reduced Motion Media Query** to ensure that users with neurological sensitivities can still use the engine safely.

---

## 2. The Mission: The Warp Drive
You are building the **Main Engine Core**:
1.  **Complex Sequence**: Create \`@keyframes warp\` that animates \`transform: scale(0.5) rotate(0deg)\` to \`transform: scale(1) rotate(360deg)\`.
2.  **Safety Protocol**: Add the \`prefers-reduced-motion: reduce\` media query.
3.  **The Safe Override**: Inside the media query, change the animation to only handle \`opacity\`, removing the rotation and scaling to protect the user.

---

## 3. Senior Guidance: Standard of Care
An "Elite" Architect never leaves accessibility to chance. Every cinematic animation must have a "Static" or "Simple" version. This is the difference between a Junior Designer and an Industry Professional.

> [!IMPORTANT]
> **Mission Objective**: Inclusivity. Your engine must be powerful for some, and safe for all.
`,
    tasks: [
        {
            id: 1,
            description: 'The Warp Core: Create "@keyframes warp" from "transform: scale(0.5) rotate(0deg);" to "transform: scale(1) rotate(360deg);".',
            completed: false,
            regex: /@keyframes\s+warp\s*\{(?=[\s\S]*?from\s*\{[\s\S]*?transform\s*:\s*scale\(\s*0\.5\s*\)\s+rotate\(\s*0deg\s*\);?[\s\S]*?\})(?=[\s\S]*?to\s*\{[\s\S]*?transform\s*:\s*scale\(\s*1\s*\)\s+rotate\(\s*360deg\s*\);?[\s\S]*?\})[\s\S]*?\}/,
            hint: {
                concept: 'Multiple transform functions can be applied in a single property.',
                strategy: 'Define the from/to states.',
                solution: 'from { transform: scale(0.5) rotate(0deg); } to { transform: scale(1) rotate(360deg); }'
            }
        },
        {
            id: 2,
            description: 'The Acceleration: On ".drive", apply "animation: warp 3s infinite linear;".',
            completed: false,
            regex: /\.drive\s*\{(?=[\s\S]*?animation\s*:\s*warp\s+3s\s+infinite\s+linear;?)[\s\S]*?\}/,
            hint: {
                concept: 'Linear is appropriate for spinners and loops like a drive core.',
                strategy: 'Target the .drive class.',
                solution: 'animation: warp 3s infinite linear;'
            }
        },
        {
            id: 3,
            description: 'The Emergency Brake: Implement "@media (prefers-reduced-motion: reduce)" and set ".drive { animation: none; }".',
            completed: false,
            regex: /@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)\s*\{[\s\S]*?\.drive\s*\{(?=[\s\S]*?animation\s*:\s*none;?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'Media queries can override specific animations based on user settings.',
                strategy: 'Use the media query to disable the animation.',
                solution: '@media (prefers-reduced-motion: reduce) { .drive { animation: none; } }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS WARP ENGINE */
body {
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.drive {
    width: 200px;
    height: 200px;
    border: 4px dashed #4cc9f0;
    border-radius: 50%;
    /* 1, 2. Apply animation here */
}

/* 3. Safety Media Query below */
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="drive"></div>
<p style="position: absolute; color: #4cc9f0; font-family: monospace;">WARP_DRIVE_STATUS: INITIALIZING</p>`
        }
    ]
};
