import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4AcceleratedOpacity = {
    id: 'css-unit10-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Accelerated Opacity',
    duration: '20 min',
    content: `
# Lab: Accelerated Opacity (Zero-Reflow States)

## 1. The Concept: Total Invisibility
Architect, many junior engineers use \`display: none\` to hide elements like modals or dropdowns. The fatal flaw? \`display: none\` removes the element entirely from the rendering tree. When you reveal it again, the browser must perform a heavy Layout and Paint calculation from scratch.

An **Elite Technique** is to use **\`opacity: 0\`** combined with **\`pointer-events: none\`**. This keeps the element in the GPU's memory (as a transparent layer), allowing it to "materialize" instantly without triggering a single layout recalculation (**Zero Reflow**).

---

## 2. The Mission: The Nexus Ghost Modal
You are building the **Neural Alert Overlay**. It must be fast, flicker-free, and high-performance.

### Deployment Parameters:
1.  **Invisible State**: On \`.nexus-modal.is-ghosted\`, set the opacity to 0 to hide the visual.
2.  **Interaction Lock**: On the same selector, ensure the user cannot interact with the hidden modal using \`pointer-events: none\`.
3.  **Kinetic Transition**: Apply a smooth, GPU-accelerated transition to the opacity property.

---

## 3. Machine Logic: The Composite Optimization
As long as an element has its own layer (triggered by opacity < 1 or transforms), the browser moves it to the GPU. By animating from 0 to 1, the GPU simply adjusts the pixel intensity without moving any surrounding elements. This is the fastest way to manifest an object on-screen.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Pointer Shield**: Without \`pointer-events: none\`, a transparent modal still blocks all mouse clicks for the content behind it. Never forget this property when using the opacity-hide technique.

> [!TIP]
> **Elite Combo**: For a premium feel, combine \`opacity\` with \`transform: scale(0.95) translate3d(0,0,0)\`. Since both are GPU-supported, your modal will "scale and fade" into view at a perfect 60 FPS.
`,
    tasks: [
        {
            id: 1,
            description: 'The Ghost State: On ".nexus-modal.is-ghosted", set "opacity: 0;".',
            completed: false,
            regex: /\.nexus-modal\.is-ghosted\s*\{(?=[\s\S]*?opacity\s*:\s*0;?)[\s\S]*?\}/,
            hint: {
                concept: 'Opacity 0 hides the element visually while keeping its layout footprint.',
                strategy: 'Apply opacity within the ghosted modifier.',
                solution: 'opacity: 0;'
            }
        },
        {
            id: 2,
            description: 'The Interaction Barrier: On ".nexus-modal.is-ghosted", set "pointer-events: none;".',
            completed: false,
            regex: /\.nexus-modal\.is-ghosted\s*\{(?=[\s\S]*?pointer-events\s*:\s*none;?)[\s\S]*?\}/,
            hint: {
                concept: 'pointer-events: none makes the element "invisible" to mouse interactions.',
                strategy: 'Add the pointer-events property.',
                solution: 'pointer-events: none;'
            }
        },
        {
            id: 3,
            description: 'The Fluid Protocol: On the base ".nexus-modal", set "transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);".',
            completed: false,
            regex: /\.nexus-modal\s*\{(?=[\s\S]*?transition\s*:\s*opacity\s+0\.5s\s+cubic-bezier\(0\.4,\s*0,\s*0\.2,\s*1\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Bezier curves provide a more organic feel to state transitions.',
                strategy: 'Add the transition property to the main block.',
                solution: 'transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS OVERLAY ENGINE - ACCELERATED STATES */
body {
    background: #000;
    color: #4cc9f0;
    padding: 60px;
    font-family: monospace;
}

.nexus-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    background: #0a0a0f;
    border: 1px solid #4cc9f0;
    padding: 40px;
    border-radius: 2px;
    text-align: center;
    box-shadow: 0 0 40px rgba(0,0,0,0.8);
    /* 3. Implement high-speed transition below */

}

/* 1 & 2. Implement the hidden logic below */
.nexus-modal.is-ghosted {

}

.nexus-btn {
    margin-top: 20px;
    background: #4cc9f0;
    color: #000;
    border: none;
    padding: 10px 24px;
    cursor: pointer;
    font-weight: bold;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="dashboard-preview">
    <p>> BACKGROUND_TELEMETRY_STREAMING...</p>
    <p>> CPU_LOAD: 12%</p>
    
    <!-- Remove 'is-ghosted' to reveal the modal -->
    <div class="nexus-modal is-ghosted">
        <h3>SECURE_GATEWAY</h3>
        <p>Biometric scan required for persistent log access.</p>
        <button class="nexus-btn">INITIATE_SCAN</button>
    </div>
</div>`
        }
    ]
};
