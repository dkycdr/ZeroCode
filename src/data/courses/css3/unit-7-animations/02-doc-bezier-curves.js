import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2BezierCurves = {
    id: 'css-unit7-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Bezier Curves & Timing Physics',
    duration: '25 min read',
    content: `
# Deep Dive: Bezier Curves & Timing Physics

## 1. The Core Concept: Natural Motion
Architect, nothing in the real world moves at a constant, robotic speed. When you open a heavy door, it starts slow, speeds up, and then slows down as it opens. This is called **Easing**.

In the **Nexus AI Interface**, we use **Cubic Bezier Curves** to mathematically define how an animation speeds up or slows down over time. This makes the interface feel "Alive" and premium.

---

## 2. Visual: The Acceleration Graph
A Cubic Bezier curve is defined by 4 coordinates.

<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    Start["Time: 0 / Value: 0"] --> P1["Handle 1: Control Point"]
    P1 --> P2["Handle 2: Control Point"]
    P2 --> End["Time: 1 / Value: 1"]
    
    style Start fill:#eee,stroke:#333
    style End fill:#4cc9f0,stroke:#333
    style P1 fill:#f72585
    style P2 fill:#f72585
\`\`\`

</div>

---

## 3. The Standard Timing Functions
1.  **linear**: Constant speed. Extremely robotic. Avoid for most UI elements.
2.  **ease-in**: Starts slow, then speeds up. Good for things *exiting* the screen.
3.  **ease-out**: Starts fast, then slows down. Best for things *entering* the screen (snappy and responsive).
4.  **ease-in-out**: Slow start, fast middle, slow end. Perfect for loops or background glows.

---

## 4. Machine Logic: The \`cubic-bezier()\` Syntax
If the standard functions aren't snappy enough for the Nexus console, you can define your own curve:
\`\`\`css
/* (x1, y1, x2, y2) */
transition-timing-function: cubic-bezier(0.68, -0.6, 0.32, 1.6);
\`\`\`
- This specific curve creates an **Anticipation** (pulls back before moving) and an **Overshoot** (goes slightly past the target before settling). This is used in high-end dashboards to give elements "Weight."

---

## 5. Mental Model: The Sports Car vs. The Train
- **Linear** is a train on a track. It just goes until it stops.
- **Ease-out** is a sports car braking at a red light. It starts fast and comes to a graceful, controlled stop.
- **Cubic-Bezier (Overshoot)** is a spring. It bounces slightly before coming to rest.

---

## 6. Senior Architect's Guidance: Snappiness
For professional UI, avoid long durations like \`1s\`. 
- **The Sweet Spot**: 200ms to 400ms. 
- Anything longer than 500ms makes the user feel like they are "Waiting" for the interface to load. 
- A fast, eased animation (\`300ms ease-out\`) feels much faster and more responsive than no animation at all.

---

## 7. Interaction Timing: The Hover Logic
A common "Elite" pattern is to have different timings for the mouse moving IN vs. moving OUT.
\`\`\`css
.button {
    /* Fast when the mouse enters (feels responsive) */
    transition: transform 0.2s ease-out;
}

.button:hover {
    transform: scale(1.1);
    /* Slightly slower when the mouse leaves (feels graceful) */
    transition: transform 0.4s ease-in;
}
\`\`\`

> [!IMPORTANT]
> **Mission Objective**: Intentionality. Every ease and every millisecond must be chosen to make the user feel in control of the machine.

> [!TIP]
> **Pro Tip**: Use a site like **cubic-bezier.com** to visually draw your curves before pasting the numbers into your CSS.

> [!CAUTION]
> **Physics Pitfall**: Avoid "Bouncing" everything. Overshoots are great for buttons or small alerts, but using them on large layout containers can make the interface feel unstable and "Jiggly."
`
};
