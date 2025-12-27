import { CONTENT_TYPES } from '../../index';

export const doc3Svg = {
    id: 'html5-unit-4-doc-svg',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Scalable Vector Graphics (SVG)',
    description: 'Why JPG/PNG get blurry, and why SVG stays crisp forever. Code your graphics.',
    content: `
# SVG: Graphics as Code

SVG (Scalable Vector Graphics) is an XML-based image format. Unlike pixels (Raster), Vectors are math. They look sharp on a Nokia 3310 and an 8K TV.

## Embedding SVGs: Two Ways

### 1. As an Image (Standard)
Good for complex illustrations where you don't need interaction.
\`\`\`html
<img src="logo.svg" alt="Company Logo">
\`\`\`

### 2. Inline SVG (The Power User Way)
Pasting the SVG code directly into your HTML. This allows you to **change its color with CSS!**

\`\`\`html
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
\`\`\`

Now you can do this in CSS:
\`\`\`css
svg:hover circle {
  fill: blue; /* Changes color instantly */
}
\`\`\`

## Why Use SVG?
1.  **Infinite Scaling**: Never blurry.
2.  **Small File Size**: It's just text!
3.  **Animatable**: You can animate paths with CSS or JS.
4.  **Accessible**: You can add \`<title>\` and \`<desc>\` inside the SVG itself.
    `
};
