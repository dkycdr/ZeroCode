import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Subgrid = {
    id: 'css-unit16-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Subgrid',
    duration: '15 min read',
    content: `
# Deep Dive: Subgrid (Family Inheritance)

## 1. The Theory: Grid Bloodlines
Standard Grid has a limitation: **Grid Layout stops at the child.**
The Grandchild doesn't know about the Grandparent's grid lines. This makes it impossible to align headings inside multiple different cards... until now.

**Subgrid** allows a child element to say: "I won't define my own rows. I will use my parent's rows."

## 2. Visual: The Alignment Problem
Without Subgrid, card contents are isolated:
\`\`\`mermaid
graph TD
    CardA[Card A Header (1 Line)] --- CardB[Card B Header (3 Lines)]
    CardA --x Misaligned -- CardB
\`\`\`

With **Subgrid**, they share the same track:
\`\`\`css
.card {
    display: grid;
    grid-template-rows: subgrid; /* Pass the grid down */
    grid-row: span 3; /* Reserve 3 rows for Image, Title, Text */
}
\`\`\`

## 3. Senior Guidance
Use this when you have a list of cards where some have short titles and some have long titles, but you want the "Read More" buttons to always align at the bottom.

> [!CAUTION]
> **Compatibility Check**: Subgrid is a modern feature. Always check *CanIUse* before putting it in a production banking app.
`
};
