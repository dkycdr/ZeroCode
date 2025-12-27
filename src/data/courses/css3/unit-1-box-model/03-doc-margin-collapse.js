import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3MarginCollapse = {
    id: 'css-unit1-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Invisible Collision (Margin Collapse)',
    duration: '15 min read',
    content: `
# Deep Dive: The Invisible Collision (Margin Collapse)

## 1. The Core Concept: Block Axis Overlap
Have you ever put two boxes on top of each other, each with a \`margin-block: 20px\`, but the distance between them stayed **20px** instead of becoming 40px? That is **Margin Collapse**. 

The browser decides that instead of adding space together on the **Block Axis**, the largest margin wins.

---

## 2. Visual: Physical Collision
\`\`\`text
[ Box A ]  margin-block-end: 30px
   |
   | (Collision Zone: Only 30px survives)
   |
[ Box B ]  margin-block-start: 20px
\`\`\`

---

## 3. Machine Logic: The Rules of Behavior
1.  **Block Axis Only**: This only happens for Top and Bottom (Block) margins. Inline (Left and Right) margins always add together.
2.  **Parent-Child Leak**: If a child box has a block margin, and the parent has no padding or border, that margin will leak out and affect the parent instead of pushing the child down.
3.  **Positive vs Negative**: If one margin is 50px and the other is -20px, the result is 30px. If both are positive, the larger one wins.

---

## 4. Senior Architect's Brief: Avoiding Confusion
At Nexus AI, we often avoid this confusion by using Flexbox/Grid Gap or by adding small amounts of padding to containers. Understanding collapse helps you debug why a section suddenly jumps down without an obvious reason.

> [!CAUTION]
> **Architect Warning**: Margin collapse does not occur if an element is a Flex item, a Grid item, or positioned as \`absolute\`.

> [!TIP]
> **Pro Tip**: To stop margins from leaking, adding \`overflow: hidden\` or \`padding: 1px\` to the parent container acts as a seal that stops the leakage.
`
};
