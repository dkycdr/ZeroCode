import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1GpuPromotion = {
    id: 'css-unit10-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: GPU Promotion (The Fast Path)',
    duration: '25 min',
    content: `
# Lab: GPU Promotion (The Fast Path)

## 1. The Concept: Breaking the Plane
Architect, you are tasked with optimizing a UI component that feels "heavy" or "jittery" when interacted with on lower-spec mobile devices. The issue is that the browser is attempting to repaint the entire screen every time the card shifts by even a single pixel.

We will implement **Layer Promotion**. By "lifting" this card into its own dedicated rendering layer handled directly by the GPU, we bypass the CPU's bottlenecks. This ensures a flawless 60 FPS interaction experience for the **Nexus AI**.

---

## 2. The Mission: Accelerating the Neural Card
Your objective is to promote the \`.neural-card\` component to its own GPU layer before user interaction even begins.

### Performance Parameters:
1.  **Predictive Hint**: Use \`will-change\` to inform the browser that a \`transform\` is imminent.
2.  **Legacy Promotion**: Implement the \`translateZ(0)\` hack to ensure hardware acceleration on older browser engines that don't support modern hints.
3.  **The Smooth State**: Apply a high-fidelity transition to the transform property.
4.  **Verification**: Observe the smoothness of the hover effect compared to standard non-accelerated rendering.

---

## 3. Machine Logic: Predictive VRAM Allocation
When you declare \`will-change\`, the browser pre-allocates Video RAM (VRAM) for that element. This eliminates the "First Frame Delay" that usually occurs when an element is suddenly moved for the first time.

---

## 4. Architectural Alerts
> [!CAUTION]
> **VRAM Saturation**: We are only optimizing one card here. In a production environment, never apply this to 1,000 items simultaneously, as it will crash the mobile browser's memory.

> [!TIP]
> **Inspector Skill**: Open Chrome DevTools -> **Layers** panel. You will see your card appear as a distinct 3D box in the stack once hardware acceleration is active.
`,
    tasks: [
        {
            id: 1,
            description: 'The GPU Hint: On ".neural-card", set "will-change: transform;".',
            completed: false,
            regex: /\.neural-card\s*\{(?=[\s\S]*?will-change\s*:\s*transform;?)[\s\S]*?\}/,
            hint: {
                concept: 'will-change informs the browser to optimize for a specific property ahead of time.',
                strategy: 'Add the property to the base card selector.',
                solution: 'will-change: transform;'
            }
        },
        {
            id: 2,
            description: 'The Promotion Hack: On ".neural-card", set "transform: translate3d(0, 0, 0);".',
            completed: false,
            regex: /\.neural-card\s*\{(?=[\s\S]*?transform\s*:\s*translate3d\(\s*0\s*,\s*0\s*,\s*0\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: '3D transforms force the browser to create a new GPU layer (Composition).',
                strategy: 'Update the transform property.',
                solution: 'transform: translate3d(0, 0, 0);'
            }
        },
        {
            id: 3,
            description: 'The Fluid Logic: On ".neural-card", set "transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);".',
            completed: false,
            regex: /\.neural-card\s*\{(?=[\s\S]*?transition\s*:\s*transform\s+0\.4s\s+cubic-bezier\(0\.4,\s*0,\s*0\.2,\s*1\);?)[\s\S]*?\}/,
            hint: {
                concept: 'A high-fidelity Bezier curve creates a more premium feel than linear motion.',
                strategy: 'Update the transition timing.',
                solution: 'transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS NEURAL CARD - HIGH SPEED RENDERING */
body {
    background: #000;
    padding: 60px;
    display: flex;
    justify-content: center;
}

.neural-card {
    width: 300px;
    height: 400px;
    background: #111;
    border: 1px solid #4cc9f0;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 0 20px rgba(76, 201, 240, 0.1);
    /* 1, 2, 3. Add Hardware Acceleration here */

}

.neural-card:hover {
    transform: translate3d(0, 0, 0) scale(1.05); /* Maintain layer promotion */
    border-color: #f72585;
    box-shadow: 0 0 30px rgba(247, 37, 133, 0.2);
}

.neural-card__title {
    padding: 30px;
    color: #4cc9f0;
    font-family: monospace;
    letter-spacing: 5px;
    text-align: center;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="neural-card">
    <div class="neural-card__title">DATA_CORE_PROMOTED</div>
</div>`
        }
    ]
};
