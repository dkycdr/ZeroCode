import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3RAMPattern = {
    id: 'css-unit16-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The RAM Pattern',
    duration: '20 min read',
    content: `
# Deep Dive: The RAM Pattern 🐏

## 1. The Holy Grail of Responsive Design
**R.A.M.** stands for **Repeat, Auto, Minmax**.
It is the only line of CSS you need to build a gallery that looks good on iPhone, iPad, and Desktop *without a single Media Query*.

\`\`\`css
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
\`\`\`

## 2. Breaking the Algorithm
How does the browser think?
1.  **minmax(200px, 1fr)**: "I need to be *at least* 200px wide. If there's extra space, I'll grow."
2.  **auto-fit**: "How many 200px boxes fit in this screen width?"
    - Screen = 400px? -> Fit 2 boxes.
    - Screen = 1000px? -> Fit 5 boxes.
3.  **repeat()**: "Do this calculation for me automatically."

## 3. Auto-Fill vs Auto-Fit
- **Auto-Fit**: If you have 2 items on a huge screen, they stretch to fill the whole width. (Usually better).
- **Auto-Fill**: If you have 2 items, it keeps creating "Ghost Columns" to fill the space.

> [!IMPORTANT]
> **Mission Objective**: Memorize this line. It is the most powerful tool in the Grid arsenal.
`
};
