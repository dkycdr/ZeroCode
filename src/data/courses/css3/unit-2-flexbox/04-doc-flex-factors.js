import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4FlexFactors = {
    id: 'css-unit2-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Elastic Math (Grow, Shrink, Basis)',
    duration: '30 min read',
    content: `
# Deep Dive: Elastic Math (Grow, Shrink, Basis)

## 1. The Core Concept: The Sizing Algorithm
Architect, this is the final final level of Flexbox mastery. Up until now, we’ve treated our items like solid blocks of wood—moving them, stacking them, and wrapping them. 

But true Flexbox items aren't wood. They are **Living Cells**. They can expand to eat up extra space or shrink to avoid being crushed. This intelligence is controlled by three mathematical factors: **Grow**, **Shrink**, and **Basis**.

---

## 2. Visual: The Sizing Hierarchy
Imagine a pie. 
- **Flex Basis** is the size of the slice you *requested*.
- **Flex Grow** is how many extra pieces of leftover pie you get if no one else wants them.
- **Flex Shrink** is how much of your slice you are willing to give up if the pie tin is too small for everyone.

\`\`\`text
[ Request ] --> [ Space Left? ] --> [ Apply Grow Ratio ]
[ Request ] --> [ Too Small? ] --> [ Apply Shrink Ratio ]
\`\`\`

---

## 3. The Starting Point: \`flex-basis\`
This is the "Ideal Size" of an item before the browser does its math.
- It’s like a \`width\`, but better.
- If set to \`auto\`, it looks at the item's content.
- If set to a pixel value (e.g., \`200px\`), the browser tries its hardest to respect that number first.

---

## 4. The Expansion Logic: \`flex-grow\`
This is a **Weight/Ratio**.
- If Item A has \`flex-grow: 1\` and Item B has \`flex-grow: 2\`:
- When there is 300px of extra space, Item B will take 200px and Item A will take 100px.
- **Value 0 (Default)**: Items will stay their original size and let the space stay empty.

---

## 5. The Survival Logic: \`flex-shrink\`
This is the most misunderstood property in CSS. It tells the browser how "flexible" an item is when the container is too small (\`overflow\` state).
- **Value 1 (Default)**: Items are allowed to shrink.
- **Value 0**: The item becomes a "Hard Wall." It will **NEVER** shrink, even if it breaks the layout.
- **High Values**: Items with \`flex-shrink: 5\` will shrink much faster than items with \`flex-shrink: 1\`.

---

## 6. Under the Hood: The Shorthand Rule
Professional Senior Architects almost never write these properties separately. We use the **\`flex\` shorthand**. It’s cleaner, safer, and sets smart defaults.

\`\`\`css
/* flex: [grow] [shrink] [basis] */
.item {
    flex: 1 0 200px;
}
\`\`\`

### Common Patterns:
- **\`flex: 1\`**: (0 1 0%) The item will grow to fill ALL available space perfectly.
- **\`flex: 0 0 100px\`**: A fixed-size sidebar that never grows and never shrinks.
- **\`flex: auto\`**: (1 1 auto) Grows and shrinks naturally based on its content.

---

## 7. Mental Model: The Elastic Band
Imagine three people holding an elastic band. 
- Person A is strong (\`flex-grow: 5\`).
- Person B is weak (\`flex-grow: 1\`).
- When the band is stretched, Person A pulls most of the material toward them. 
- When the band is released, their original distance (\`flex-basis\`) is all that remains.

---

## 8. Senior Architect's Guidance: Fluid Boards
When building the **Nexus AI Analytics Panel**:
- Give the **Main Graph** \`flex: 3\`.
- Give the **Secondary Stats** \`flex: 1\`.
- This ensures the graph is always exactly 3 times larger than the stats, no matter if the user is on a Laptop, Tablet, or Ultra-Wide monitor.

> [!IMPORTANT]
> **Mission Objective**: Fluidity. Your interface should feel "alive"—smoothly adapting its proportions without any jerky jumps or hard-coded breakpoints.

> [!TIP]
> **Pro Tip**: Want an image to never shrink and stay a perfect circle? Use \`flex-shrink: 0\`. This prevents the "Squashed Avatar" bug that ruins so many profile pages.

> [!CAUTION]
> **Math Warning**: Flexbox math doesn't include margins! If you have \`flex: 1\` on two items but Item A has a 50px margin, Item A will physically look larger because the margin "pushed" the boundary before the grow math started.
`
};
