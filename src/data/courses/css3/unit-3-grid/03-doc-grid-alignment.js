import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3GridAlignment = {
    id: 'css-unit3-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Dimensional Control (Alignment & Spanning)',
    duration: '25 min read',
    content: `
# Deep Dive: Dimensional Control (Alignment & Spanning)

## 1. The Core Concept: Positioning in 2D
Architect, once you have built your grid's skeleton (the tracks), it is time to place the furniture. Unlike Flexbox, where items flow like water, Grid allows you to "Lock" an item into a specific area. 

You can make an item cover just one cell, or you can make it "Span" across multiple columns and rows—like a Header that covers the entire top of the screen.

---

<div style="max-width: 300px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    subgraph Grid ["Grid Structure"]
        L1["Line 1"] --- L2["Line 2"] --- L3["Line 3"] --- L4["Line 4"]
    end
    
    Item["Grid Item"]
    Item -->|Start at 1| L1
    Item -->|End at 4| L4
    
    style Item fill:#4cc9f0,stroke:#333
\`\`\`

</div>
*Result: This item spans 3 columns (from line 1 to 4).*

---

## 3. High-Performance Shorthands
Professional Architects don't write four separate properties for start/end lines. We use the **\`grid-column\`** and **\`grid-row\`** shorthands.

\`\`\`css
.header {
    /* Start at line 1, End at line 4 */
    grid-column: 1 / 4; 
    
    /* Alternate syntax: Start at 1, Span 3 columns */
    grid-column: 1 / span 3;
}
\`\`\`

---

## 4. Master-Level Alignment: \`place-items\`
Grid provides two separate sets of alignment controls:

1.  **Grid Alignment (The Container)**: How the whole grid lattice is positioned inside the parent box (if there is extra room).
    - \`justify-content\` / \`align-content\`
2.  **Item Alignment (The Cell)**: How an individual element sits inside its own "Cage" (the cell).
    - \`justify-items\` (Horizontal)
    - \`align-items\` (Vertical)
    - \`place-items: center center;\` (The ultimate shorthand for 2D centering).

---

## 5. Under the Hood: The "Dense" Packing
What happens if your grid has holes? If you have small items and big items, sometimes the browser leaves an empty cell.
You can tell the browser to be "aggressive" using **\`grid-auto-flow: dense;\`**. 
- The engine will look back through the grid and fit smaller items into empty holes, even if they appear later in the HTML source code. 
- *Caution: This can confuse screen readers!*

---

## 6. Mental Model: The Chessboard
Imagine a chessboard. 
- **Spanning**: Moving a piece so it occupies 4 squares instead of 1.
- **Alignment**: Placing a pawn exactly in the center of its square, or pushing it into the top-left corner of its square.

---

## 7. Senior Architect's Decision: Overlapping
In CSS Grid, you can place two items into the same cell. 
- Unlike standard block flows, they won't push each other away.
- They will stack on top of each other (using \`z-index\` to decide who is in front).
- This is perfect for building **Hero Sections** with text on top of images without using \`position: absolute\`.

> [!IMPORTANT]
> **Mission Objective**: Structural Integrity. Never rely on the browser to "guess" where your header belongs. Use explicit line numbers or the \`span\` keyword to define your layout's boundaries.

> [!TIP]
> **Pro Tip**: You can use negative line numbers! \`-1\` always refers to the very last line of the grid, no matter how many columns you have. \`grid-column: 1 / -1\` will always span the full width.

> [!CAUTION]
> **Accessibility Warning**: While you *can* move items around visually using Grid, you should never use it to fix a bad HTML structure. Keep your HTML logical so users without CSS (text-only browsers) can still understand your content.
`
};
