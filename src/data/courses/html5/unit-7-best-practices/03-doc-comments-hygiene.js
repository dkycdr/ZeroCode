import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Comments = {
    id: 'html5-u7-doc-3-comments',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Comments & File Hygiene',
    duration: '10 min read',
    content: `
# Commenting Strategy

## Explain "Why", not "What".
Your code usually explains "What" it is doing (a \\\`header\\\` tag is obviously a header).
Use comments to explain confusing decisions.

*   ❌ \\\`<!-- Header Section -->\\\` (Noise. I can see the tag.)
*   ✅ \\\`<!-- Fixed position to keep navigation visible on scroll -->\\\` (Helpful context.)

## Lowercase Standard
HTML is case-insensitive, but **uppercase is screaming**.
Professional teams strictly use lowercase for tags and attributes.
*   ❌ \\\`<DIV CLASS="BOX">\\\`
*   ✅ \\\`<div class="box">\\\`
`
};

