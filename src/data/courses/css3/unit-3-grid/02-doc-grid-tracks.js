import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2GridTracks = {
    id: 'css-unit3-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Creating Dimensions (Tracks & The fr Unit)',
    duration: '25 min read',
    content: `
# Deep Dive: Creating Dimensions (Tracks & The fr Unit)

## 1. The Core Concept: Defining the Lattice
Architect, once you have activated the Grid Engine, the lattice is initially empty. To build the **Nexus AI Command Center**, you must define exactly how many columns and rows your grid should have.

In legacy CSS, we usedPercentages (%) or Pixels (px). But percentages are difficult because they don't account for gutters (gaps). In the modern era, we use the **Fractional Unit (fr)**.

---

## 2. Visual: The fr Distribution
The \`fr\` unit represents a "fraction of the available space." It is the most powerful tool in the Grid Architect's kit.

\`\`\`text
grid-template-columns: 1fr 2fr 1fr;
\`\`\`

If your container is 1000px wide:
1. The browser calculates: 1 + 2 + 1 = **4 parts**.
2. 1000 / 4 = **250px per part**.
3. Result: [ 250px ] [ 500px ] [ 250px ]

---

## 3. Professional Syntax: \`repeat()\` and \`minmax()\`
Writing \`1fr 1fr 1fr 1fr 1fr 1fr\` is tedious and prone to human error. Senior Architects use functions to keep their code "DRY" (Don't Repeat Yourself).

### The \`repeat()\` Function
\`\`\`css
/* Create 12 equal columns for a standard design system */
grid-template-columns: repeat(12, 1fr);
\`\`\`

### The \`minmax()\` Safety Valve
Sometimes, you want a column to be flexible but **never** smaller than a certain size.
\`\`\`css
/* Column stays 1fr, but will never shrink below 200px */
grid-template-columns: repeat(3, minmax(200px, 1fr));
\`\`\`

---

## 4. Machine Logic: The Sizing Algorithm
When the browser calculates a Grid, it follows this priority list:
1.  **Fixed Sizes**: Pixels (\`px\`) and ems are calculated first. They are "Hard Walls."
2.  **Intrinsic Content**: \`min-content\` or \`max-content\` look at the actual text/images inside.
3.  **The Remainder**: The \`fr\` units look at whatever space is left over and divide it among themselves.

---

## 5. Mental Model: The Magnetic Lattice
Imagine a cage made of magnetic bars.
- The **Rows** and **Columns** are the bars.
- When the container grows, the bars "stretch" to stay attached to the walls.
- The \`fr\` unit is the strength of the magnet. A \`2fr\` bar pulls twice as hard as a \`1fr\` bar.

---

## 6. Global Standards: The 12-Column Grid
Most professional design systems (like Bootstrap or Tailwind) are based on a 12-column grid. Why 12? Because 12 is divisible by 2, 3, 4, and 6. It gives you maximum flexibility for any type of dashboard layout.

---

## 7. Senior Architect's Guidance: Spacing with \`gap\`
In Unit 1, we learned about margins. In CSS Grid, we use **\`gap\` (or \`grid-gap\`)**.
- It creates space between tracks.
- It does **not** add space to the outer edges of the container.
- It is much easier to manage than \`margin\` because you don't have to worry about the "Last-Child" problem.

> [!IMPORTANT]
> **Mission Objective**: Total Precision. Your goal is to define a grid where every column has a purpose. Use \`fr\` for fluid content and \`px\` for fixed utilities (like sidebars).

> [!TIP]
> **Pro Tip**: You can name your grid lines! Instead of just using line numbers (1, 2, 3), you can write: \`grid-template-columns: [main-start] 1fr [main-end]\`. This makes your code self-documenting for other architects.

> [!CAUTION]
> **Performance Note**: Try to avoid creating thousands of identical tracks using \`repeat(1000, 1fr)\`. While Grid is fast, extreme lattice complexity can slow down the browser's painting cycle on mobile devices.
`
};
