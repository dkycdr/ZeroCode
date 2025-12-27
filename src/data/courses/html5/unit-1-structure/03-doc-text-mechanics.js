import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3TextMechanics = {
    id: 'html5-u1-doc-3-text',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Concept: Semantic Text Mechanics',
    duration: '10 min read',
    content: `
# Semantic Text Mechanics

## 1. Bold vs Strong
They both look **bold**. But they mean different things.

*   \`<b>\`: "Stylistically offset". Use for keywords in a summary, or product names.
*   \`<strong>\`: "High Importance". Use for warnings (**Danger!**) or critical emphasis. Screen readers emphasize this with voice tone.

## 2. Italic vs Emphasis
*   \`<i>\`: "Alternate Voice". Use for technical terms, foreign words (*et cetera*), or ship names.
*   \`<em>\`: "Stress Emphasis". Use for changing the meaning of a sentence.
    *   "I *love* pizza" (Emphasize emotion).

## 3. Other Useful Text Tags
*   \`<small>\`: For "fine print" or legalese (Copyright text).
*   \`<mark>\`: For highlighting text (like a yellow marker).
*   \`<code>\`: For computer code snippets.
*   \`<blockquote>\`: For long quotes.

\`\`\`html
<p>The <strong>Warning</strong> sign said: <mark>Do not enter</mark>.</p>
\`\`\`

> [!NOTE]
> **Why bother?** Search engines rank pages higher when they understand *why* text is bold. Using \`<strong>\` tells Google "This is important".
`
};
