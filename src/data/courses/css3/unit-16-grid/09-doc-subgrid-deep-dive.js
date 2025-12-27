import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc5Subgrid = {
    id: 'css-unit16-doc-subgrid',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Subgrid (2024)',
    duration: '20 min read',
    content: `
# Deep Dive: Subgrid (The Inheritance)

## 1. The Problem
Classic Grid has a hard boundary.
If you have a customized grid on a Parent, the Children are just **blocks** inside a cell.
The Grandchildren have **NO IDEA** that the Parent Grid exists.

**Result:** You cannot align "Card Title 1" with "Card Title 2" if they are in different cards.

## 2. The Solution: \`grid-template-rows: subgrid\`
Subgrid pokes a hole in the container, allowing tracks to pass through.

\`\`\`css
.card {
    /* I am a child of .grid */
    display: grid;
    grid-row: span 3; /* Stick to 3 rows of the parent */
    grid-template-rows: subgrid; /* USE those 3 rows exactly! */
}
\`\`\`

## 3. When to use it?
**Complex Card Alignments**.
When you want the H3, the Paragraph, and the Button of *every card* to align horizontally perfectly, regardless of how much text is in the paragraph.

> [!CAUTION]
> **Browser Support**: As of 2024, Subgrid is widely supported in Firefox, Safari, and Chrome (recent). Always check \`@supports\` for critical layouts.
`
};
