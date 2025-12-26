import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3AdvancedCalc = {
    id: 'css-unit8-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Dynamic Math (calc() + var())',
    duration: '25 min read',
    content: `
# Deep Dive: Dynamic Math (calc() + var())

## 1. The Core Concept: The Computational UI
Architect, variables are not just static buckets for colors. They are "Live Data." When you combine CSS Variables with the **\`calc()\`** function, you create a layout that can calculate its own dimensions in real-time.

In the **Nexus AI Logic Module**, we use this to create "Responsive Math"—spacings and sizes that grow or shrink based on a single "Master Variable."

---

## 2. Visual: The Calculation Chain
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph LR
    Master["--grid-unit: 8px"] --> Step1["--gap: calc(var(--grid-unit) * 2)"]
    Step1 --> Step2["--pad: calc(var(--grid-unit) * 4)"]
    Step2 --> Component["Interface Result"]
    
    style Master fill:#4cc9f0,stroke:#333
    style Component fill:#111,stroke:#eee
\`\`\`

</div>

---

## 3. The Unitless Magic
One of the most powerful features of CSS Variables is that they can be **unitless numbers**. 
- You store a number (\`--scale: 2\`).
- You multiply it by a unit (\`calc(var(--scale) * 1rem)\`).
- **Result**: \`2rem\`.
- This allows you to use the same variable for both a font-size multiplier and a padding multiplier.

---

## 4. Machine Logic: The Dynamic Grid
Imagine a dashboard with a sidebar.
\`\`\`css
:root {
    --sidebar-width: 250px;
    --content-width: calc(100vw - var(--sidebar-width));
}

.main-content {
    width: var(--content-width);
}
\`\`\`
If the sidebar expands to 300px, the content width **automatically** recalibrates itself. No media queries needed.

---

## 5. Mental Model: The Lever
Imagine a physical lever.
- **The Variable** is the position of the lever.
- **The Calc Function** is the gear system connected to it.
When you move the lever, the gears turn, and 10 different parts of the machine move in perfect synchronization.

---

## 6. Senior Architect's Guidance: Aspect Ratio Logic
You can use variables to enforce specific shapes:
\`\`\`css
.square-card {
    --size: 200px;
    width: var(--size);
    height: var(--size);
}
\`\`\`
If you update \`--size\` once, your card remains a perfect square. This is "Intelligent Design" that prevents visual bugs.

---

## 7. Real-World Case: Type Scaling
In professional design systems, we often use a "Scale Factor" variable:
\`\`\`css
:root {
    --base-size: 1rem;
    --scale-ratio: 1.25; /* Major Third */
    
    --h3: calc(var(--base-size) * var(--scale-ratio));
    --h2: calc(var(--h3) * var(--scale-ratio));
    --h1: calc(var(--h2) * var(--scale-ratio));
}
\`\`\`
By changing the \`--scale-ratio\` from 1.25 to 1.5, you can instantly make your entire typography hierarchy "bolder" and more aggressive.

> [!IMPORTANT]
> **Mission Objective**: Mathematical Harmony. Your layout should not be a collection of random numbers, but a series of calculated relationships.

> [!TIP]
> **Pro Tip**: You can perform division and subtraction too! 
> \`--center: calc(50% - (var(--width) / 2));\` is a classic way to manually center an absolutely positioned element.

> [!CAUTION]
> **Logic Pitfall**: Always put spaces around operators (+, -, *, /) inside a \`calc()\` function. 
> \`calc(100% - var(--gap))\` works. \`calc(100%-var(--gap))\` will break in many browsers.
`
};
