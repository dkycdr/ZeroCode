import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4ListsGrouping = {
    id: 'html5-u1-doc-4-lists',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Concept: Grouping & Lists',
    duration: '10 min read',
    content: `
# Grouping & Lists

## 1. Lists are Everywhere
Look at a navigation bar. Look at a product grid. Look at a comments section.
They are all **Lists**.

*   \`<ul>\` (Unordered List): Bullet points. Order doesn't matter (Ingredients).
*   \`<ol>\` (Ordered List): Numbers. Order matters (Recipe Steps, Leaderboard).
*   \`<dl>\` (Description List): Key-Value pairs (Dictionary terms, Metadata).

## 2. The Universal Wrapper: <div> and <span>
*   \`<div>\`: Block-level wrapper. Used to group big chunks (Layout sections).
*   \`<span>\`: Inline-level wrapper. Used to target specific words in a sentence for styling.

\`\`\`html
<div class="user-card">
    <h3>John Doe</h3>
    <p>Role: <span class="highlight">Admin</span></p>
</div>
\`\`\`

## 3. The Horizontal Rule <hr>
It's not just a line. It represents a **thematic break** or scene change in the document.
`
};
