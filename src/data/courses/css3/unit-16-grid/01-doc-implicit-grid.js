import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1ImplicitGrid = {
    id: 'css-unit16-doc-implicit',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Invisible Grid',
    duration: '15 min read',
    content: `
# Deep Dive: The Invisible Grid (Implicit vs Explicit)

## 1. The Algorithm
Most tutorials teach you to define rows and columns.
\`grid-template-columns: 100px 100px;\`
\`grid-template-rows: 100px 100px;\`

**But what happens if you add a 5th item?**
The browser creates a new row automatically. This is the **Implicit Grid**.

## 2. Controlling the Ghost Tracks
You can style these "accidentally created" tracks using \`grid-auto-rows\` and \`grid-auto-columns\`.

\`\`\`css
.container {
    display: grid;
    /* Explicit: I want 3 columns */
    grid-template-columns: 1fr 1fr 1fr;
    
    /* Implicit: If I add more items, make their rows 200px tall */
    grid-auto-rows: 200px; 
}
\`\`\`

## 3. The Flow Direction
By default, the algorithm places items in **Rows**.
If you run out of space, it makes a new Row.

You can change this axis:
\`\`\`css
grid-auto-flow: column;
\`\`\`
Now, new items will spawn explicitly to the **Right**, creating new columns endlessly (like Trello or Instagram Stories).

> [!IMPORTANT]
> **Production Tip**: Always set \`grid-auto-rows\` if you are loading data from an API (e.g., unlimited News Feed). Otherwise, new rows might collapse to 0 height or content height, breaking your rhythm.
`
};
