import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Accessibility = {
    id: 'tailwind-3-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Focus Rings 🎯',
    duration: '10 min read',
    content: `
# Deep Dive: Focus Rings 🎯

## 1. The Keyboard User
Not everyone uses a mouse. Power users and people with motor disabilities tab through your site.
If you remove the outline (\`outline-none\`) without replacing it, **you have blinded them**.

## 2. The Modern Ring
Browser default outlines are ugly.
Tailwind lets you create custom, high-contrast rings using box-shadows.

**The "Offset" Technique:**
To make a ring stand out on any background color, use an offset (a gap).

\`\`\`html
<!-- A blue ring, with a 2px white gap between ring and button -->
<button class="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Submit
</button>
\`\`\`
This works on white backgrounds AND colored backgrounds.

> [!NOTE]
> Tailwind's \`ring\` utility uses \`box-shadow\`, so it follows the border-radius of the element perfectly.
    `
};
