import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3RAMPattern = {
    id: 'css-unit16-doc-ram',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The RAM Pattern',
    duration: '20 min read',
    content: `
# Deep Dive: The RAM Pattern

**R**epeat, **A**uto, **M**inmax.
This is the "Holy Grail" of responsive CSS. It allows cards to automatically stack and resize without writing a single \`@media\` query.

## 1. The Code
\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
\`\`\`

## 2. The Math Breakdown

### \`minmax(250px, 1fr)\`
*   "I want to be **at least** 250px wide."
*   "But if there is extra space, I will stretch (\`1fr\`) to fill it."

### \`auto-fit\` vs \`auto-fill\`
This is where 90% of developers get stuck.

*   **auto-fill**: "I will keep creating empty columns even if I have no items to put in them." (Good for preservation of structure).
*   **auto-fit**: "If I have empty columns, I will zero them out and give the space back to the existing items." (Good for expanding cards).

## 3. Visualizing the Behavior
Imagine a container is **900px** wide.
*   **Math**: 900 / 250 = 3.6.
*   **Result**: It fits **3 columns**.
*   **Leftover**: 900 - (3 * 250) = 150px.
*   **The \`1fr\` Magic**: That 150px is divided by 3 (50px each) and added to the cards.
*   **Final Width**: Each card is 300px.

If you resize the window to **400px**:
*   400 / 250 = 1.6. -> Fits 1 column.
*   The card stretches to full 400px.
*   **Zero Media Queries.**
`
};
