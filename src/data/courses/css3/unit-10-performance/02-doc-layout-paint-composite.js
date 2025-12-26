import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2LayoutPaintComposite = {
    id: 'css-unit10-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Layout, Paint, & Composite',
    duration: '35 min read',
    content: `
# Deep Dive: Layout, Paint, & Composite

## 1. The Scenario: The Bottleneck in the Machine
Architect, not all CSS properties are created equal in the eyes of the browser. Have you ever built an animation using \`margin-left\` and noticed the movement feels "jittery" or heavy? Then you switched to \`transform: translateX()\` and suddenly it was as smooth as silk?

This is not magic. It is the fundamental difference between staggering the **CPU** (Central Processing Unit) and harnessing the raw power of the **GPU** (Graphics Processing Unit). In this dive, we will dissect the computational cost of style to optimize the **Nexus AI Core**.

---

## 2. Machine Logic: The Rendering Hierarchy
Every time a property changes, the browser triggers a specific reaction chain. Some are cheap; others are exorbitant.

### A. The Heavyweight: Layout (Reflow)
This is the most expensive stage. The browser must recalculate the geometry (position and size) of **every** affected element on the page.
- **Triggers**: \`width\`, \`height\`, \`margin\`, \`padding\`, \`font-size\`, \`display\`, \`top/left/right/bottom\`.
- **Impact**: Changing the width of one element can shift 1,000 other elements below it. Total CPU exhaustion.

### B. The Middleweight: Paint (Repaint)
Geometry stays the same, but the pixels must be redrawn.
- **Triggers**: \`color\`, \`background-color\`, \`box-shadow\`, \`visibility\`.
- **Impact**: Lighter than Layout, but still consumes CPU cycles as the browser "re-inks" the layer surfaces.

### C. The Lightweight: Composite
The elite stage. The browser takes pre-rendered "textures" and moves them using the GPU.
- **Triggers**: \`transform\` (translate, scale, rotate) and \`opacity\`.
- **Impact**: Near zero cost. The GPU is mathematically optimized for these operations. This is the secret to 60 FPS (Frames Per Second).

---

## 3. Performance Matrix
| Stage | Example Properties | Resource Cost | Processing Unit |
| :--- | :--- | :--- | :--- |
| **Layout** | \`width\`, \`margin\`, \`top\` | 🔴 Critical | CPU |
| **Paint** | \`color\`, \`box-shadow\` | 🟡 Moderate | CPU |
| **Composite** | \`transform\`, \`opacity\` | 🟢 Negligible | GPU |

---

## 4. Visual: The Re-Render Flow
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    Trigger["CSS Property Change"] --> IsLayout{"Triggers Layout?"}
    
    IsLayout -- Yes --> L["Layout Step (Reflow)"]
    L --> P["Paint Step (Repaint)"]
    P --> C["Composite Step (Compositor)"]
    
    IsLayout -- No --> IsPaint{"Triggers Paint?"}
    IsPaint -- Yes --> P2["Paint Step (Repaint)"]
    P2 --> C2["Composite Step (Compositor)"]
    
    IsPaint -- No --> C3["Composite Step (Direct to GPU)"]
    
    style L fill:#f72585,stroke:#333
    style P fill:#ffd700,stroke:#333
    style P2 fill:#ffd700,stroke:#333
    style C3 fill:#4cc9f0,stroke:#333
\`\`\`

</div>

---

## 5. Senior Architect's Decision: Layout Thrashing
Beware of **Layout Thrashing** (Forced Synchronous Layout). This occurs when your JavaScript reads a layout value (like \`offsetHeight\`) and then immediately writes a change to the DOM in a fast loop.
- The browser is forced to pause, recalculate the layout to give you the accurate number, and then re-render.
- Doing this 60 times a second will cause the browser tab to "hang."
- **Solution**: Always batch your "Reads" first, then batch your "Writes."

---

## 6. Mental Model: The Architect vs. The Mover
- **Layout** is an Architect redrawing the entire blueprint because one room got 10cm wider. Every wall must be moved.
- **Paint** is a Painter changing the wallpaper. The walls stay where they are, but the surface needs work.
- **Composite** is a Mover picking up a finished painting and hanging it on a different wall. No drawing, no painting—just movement.

---

## 7. The Checklist of Fluidity
- [ ] Use \`transform\` for all movement and scaling.
- [ ] Use \`opacity\` for all visibility fades.
- [ ] Enable "Paint Flashing" in Chrome DevTools (Rendering tab) to see which areas of your UI are being re-painted unnecessarily.

> [!IMPORTANT]
> **Performance Rule**: Train your brain to ask: "Will this force the browser to recalculate geometry?" If yes, look for a GPU-accelerated alternative.

> [!TIP]
> **Pro Tip**: Use \`will-change: transform;\` on elements that animate frequently. This tells the browser to pre-promote the element to its own GPU layer, eliminating the "first frame" lag.

> [!CAUTION]
> **Memory Leak**: Don't use \`will-change\` on every element. Each GPU layer consumes video memory (VRAM). Too many layers can crash the browser on mobile devices.
`
};
