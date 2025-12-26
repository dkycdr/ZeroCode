import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3AccessibilitySSR = {
    id: 'tailwind-4-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Accessibility (SSR) ♿',
    duration: '10 min read',
    content: `
# Deep Dive: Accessibility (SSR) ♿

## 1. The Invisible Content
Screen Readers (for the blind) read the HTML, not the screen.
Sometimes you need to explain something that is visually obvious but verbally missing.

**The Solution: \`sr-only\`**
This class hides the element visually, but keeps it "visible" to screen readers.

\`\`\`html
<button>
  <svg>...</svg> <!-- Visual Icon -->
  <span class="sr-only">Close Menu</span> <!-- Verbal Description -->
</button>
\`\`\`

## 2. ARIA Attributes
Tailwind styles things, but it doesn't add logic.
If you build a Modal, YOU must add:
*   \`role="dialog"\`
*   \`aria-modal="true"\`
*   \`aria-labelledby="modal-title"\`

A pretty modal that traps keyboard focus is useless if the screen reader doesn't know it's a modal.
    `
};
