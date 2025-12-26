import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Variables = {
    id: 'css-unit15-doc-variables',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Setup: Theming with CSS Variables',
    duration: '10 min read',
    content: `
# Setup: Theming with CSS Variables

## 1. Why Variables?
If you write \`color: #3b82f6\` in 10 different places, changing the brand color to Purple later takes 10 edits.
If you use \`var(--brand-primary)\`, it takes **1 edit**.

## 2. Defining the Theme
We will define our design tokens in the \`:root\` (global scope) or the component host.

\`\`\`css
:root {
    /* Colors */
    --brand-primary: #6366f1; /* Indigo */
    --text-main: #1e293b;     /* Slate 800 */
    --text-muted: #64748b;    /* Slate 500 */
    
    /* Spacing */
    --spacing-md: 1.5rem;
    
    /* Radius */
    --radius-round: 50%;
    --radius-card: 16px;
}
\`\`\`

## 3. Usage
\`\`\`css
.button {
    background: var(--brand-primary);
    border-radius: var(--radius-card);
}
\`\`\`

This separates **Design Decisions** from **Implementation**.
`
};
