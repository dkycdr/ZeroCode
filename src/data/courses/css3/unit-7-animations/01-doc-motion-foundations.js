import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1MotionFoundations = {
    id: 'css-unit7-info-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Motion Foundations (The Compositor)',
    duration: '25 min read',
    content: `
# Deep Dive: Motion Foundations (The Compositor)

## 1. The Core Concept: Performance First
Architect, in the **Nexus AI Cloud Console**, motion is not just for decoration. It is a functional tool used to guide the user's attention. However, "Bad" animations can cause lag, drain battery, and ruin the professional feel of your interface.

To build "Elite" animations, you must understand how the browser actually renders pixels. You shouldn't just animate properties—you should animate **efficiently**.

---

## 2. Visual: The Rendering Pipeline
Most CSS properties trigger a "Relayout" or "Repaint" of the page. Only a few are sent directly to the GPU (Graphics Card).

<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    JS["1. JavaScript"] --> Style["2. Style Calculation"]
    Style --> Layout["3. Layout / Reflow"]
    Layout --> Paint["4. Paint"]
    Paint --> Composite["5. Composite - GPU"]
    
    style Layout fill:#f72585,stroke:#333
    style Paint fill:#f72585,stroke:#333
    style Composite fill:#4cc9f0,stroke:#333
\`\`\`

</div>

---

## 3. The "Elite" Checklist: Properties to Animate
As a Senior Architect, you should only animate properties that skip the **Layout** and **Paint** steps. These are "Composite-Only" properties:

1.  **transform**: translate, scale, rotate, skew.
2.  **opacity**: making things fade in/out.
3.  **filter**: (occasionally) for blurs and brightness.

*If you animate \`margin-left\` or \`width\`, you are forcing the browser to recalculate the entire page layout 60 times per second. This is a performance failure.*

---

## 4. Machine Logic: The Compositor Layer
When you apply a \`transform\`, the browser often moves that element onto its own "Layer." 
- Imagine the website is a stack of glass panes. 
- Most elements are on the bottom pane. 
- Your animated element gets its own pane on top.
- Moving the top pane is mathematically "Cheap" for the Graphics Card.

---

## 5. Mental Model: The Hand-Drawn Cartoon
- **Layout/Paint**: Is like redrawing every frame of the cartoon by hand. It's slow and exhausting.
- **Compositing**: Is like having a drawing on a transparent sheet and just sliding it across the background. Fast and effortless.

---

## 6. Senior Architect's Decision: \`will-change\`
CSS provides a property called \`will-change: transform;\`. 
- **Warning**: Do not use this as a "Magic Fix" for everything. 
- It tells the browser: "I am about to move this item, please prepare the GPU." 
- If you put it on every item, the browser will run out of memory. Only use it on elements that are constantly animating.

---

## 7. The 60FPS Goal
Human eyes perceive movement as "Smooth" when it happens at 60 frames per second (60FPS). 
- You have exactly **16.6 milliseconds** to finish all your CSS calculations and GPU work before the next frame is due. 
- By using \`transform\` and \`opacity\`, you ensure you always stay within this 16ms budget.

> [!IMPORTANT]
> **Mission Objective**: Structural Fluidity. Always prioritize performance over complex visual effects. A slightly less complex, smooth animation is better than a complex, jerky one.

> [!TIP]
> **Pro Tip**: Use the **Layers** panel in Chrome DevTools to see exactly which elements has its own GPU layer. If your page isLagging, you might have too many layers!

> [!CAUTION]
> **Performance Pitfall**: Animating \`box-shadow\` is extremely heavy on the CPU/GPU. If you need a glowing pulse effect, try animating a pseudo-element (\`::after\`) with a background-color and opacity instead.
`
};
