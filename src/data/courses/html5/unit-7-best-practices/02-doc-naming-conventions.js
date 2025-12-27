import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Naming = {
    id: 'html5-u7-doc-2-naming',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Art of Naming Things',
    duration: '15 min read',
    content: `
# There are only two hard things in Science...
1. Cache Invalidation
2. **Naming Things**

## Semantic vs Visual Naming
Never name things based on how they look. Designs change. Meaning doesn't.

*   ❌ \`id="blue-box"\`: What if the designer changes it to red?
*   ✅ \`id="alert-box"\`: It is always an alert.

*   ❌ \`class="big-font"\`: Relative and vague.
*   ✅ \`class="hero-title"\`: Standard and structural.

## BEM (Block Element Modifier)
A naming convention used by pros (like Google, Uber).

\`\`\`css
.card {}             /* Block */
.card__image {}      /* Element (Job depends on Block) */
.card--featured {}   /* Modifier (Variation) */
\`\`\`
`
};
