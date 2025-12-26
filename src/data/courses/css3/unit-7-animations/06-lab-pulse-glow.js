import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2PulseGlow = {
    id: 'css-unit7-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Status Pulse (Keyframes)',
    duration: '45 min',
    content: `
# Lab: The Status Pulse (Keyframes)

## 1. The Concept: Ambient Awareness
Architect, some information in the **Nexus Monitoring Grid** is too important for a static indicator. We use **Ambient Motion** to signal that a process is running in the background.

In this lab, you will master the **@keyframes** engine. You will create a "Pulse" effect that loops forever, using opacity and scale to create a "Breathing" glow that doesn't distract the user but provides constant reassurance of system stability.

---

## 2. The Mission: The Heartbeat Indicator
You are building the **Global Data Sync Light**:
1.  **Keyframe Logic**: Define a \`@keyframes\` rule named \`pulse\`.
2.  **The Loop**: At \`0%\` set scale to 1, at \`50%\` set scale to 1.3, and at \`100%\` back to 1.
3.  **Deployment**: Apply the animation to the \`.status-dot\` with a duration of \`2s\` and set it to \`infinite\`.

---

## 3. Senior Guidance: Hardware Acceleration
To ensure this pulse runs at 60FPS even on old mobile devices, we only animate \`transform\` and \`opacity\`. Animate these two, and the browser will handle the work in its highly-optimized GPU path.

> [!TIP]
> **Pro Tip**: Use \`animation-timing-function: ease-in-out;\` for pulsing effects. This creates a natural "Breathe" where the movement slows down at the peaks and valleys of the scale.
`,
    tasks: [
        {
            id: 1,
            description: 'The Timeline: Create "@keyframes pulse" with steps for 0%, 50%, and 100%.',
            completed: false,
            regex: /@keyframes\s+pulse\s*\{(?=[\s\S]*?0%\s*\{[\s\S]*?\})(?=[\s\S]*?50%\s*\{[\s\S]*?\})(?=[\s\S]*?100%\s*\{[\s\S]*?\})[\s\S]*?\}/,
            hint: {
                concept: 'Keyframes define the states an element will pass through over time.',
                strategy: 'Open a @keyframes pulse block.',
                solution: '@keyframes pulse { 0% {...} 50% {...} 100% {...} }'
            }
        },
        {
            id: 2,
            description: 'The Scale Logic: Inside pulse, set "transform: scale(1);" at 0/100%, and "scale(1.3);" at 50%.',
            completed: false,
            regex: /@keyframes\s+pulse\s*\{(?=[\s\S]*?0%\s*\{[\s\S]*?transform\s*:\s*scale\(\s*1\s*\);?[\s\S]*?\})(?=[\s\S]*?50%\s*\{[\s\S]*?transform\s*:\s*scale\(\s*1\.3\s*\);?[\s\S]*?\})[\s\S]*?\}/,
            hint: {
                concept: 'Scale is a sub-property of transform. It is the gold standard for performance pulses.',
                strategy: 'Update the transform property in each step.',
                solution: '0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); }'
            }
        },
        {
            id: 3,
            description: 'The Infinite Engine: Apply "animation: pulse 2s infinite ease-in-out;" to ".status-dot".',
            completed: false,
            regex: /\.status-dot\s*\{(?=[\s\S]*?animation\s*:\s*pulse\s+2s\s+infinite\s+ease-in-out;?)[\s\S]*?\}/,
            hint: {
                concept: 'The animation shorthand combines name, duration, loop, and easing.',
                strategy: 'Target the .status-dot class.',
                solution: 'animation: pulse 2s infinite ease-in-out;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS PULSE INDICATOR */
body {
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.status-dot {
    width: 20px;
    height: 20px;
    background: #4cc9f0;
    border-radius: 50%;
    box-shadow: 0 0 15px #4cc9f0;
    /* 3. Apply animation here */
}

/* 1, 2. Define Keyframes below */
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="status-dot"></div>
<p style="color: #4cc9f0; margin-left: 15px; font-family: monospace;">NETWORK_STABLE</p>`
        }
    ]
};
