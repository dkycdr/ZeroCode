import { CONTENT_TYPES } from '../../index';

export const doc1ImagesAdvanced = {
    id: 'html5-unit-4-doc-images',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Modern Image Formats & Responsive Design',
    description: 'Stop using basic img tags. Learn optimize images for 4K screens and slow connections.',
    content: `
# Beyond the Basic \`<img>\` Tag

In 2024+, simply dumping a JPEG into an \`<img>\` tag isn't enough. Users browse on phones, tablets, and 4K desktops. You need **Responsive Images**.

## 1. The \`srcset\` Attribute
Tells the browser: "Here are 3 versions of the same image, pick the best one for your screen size."

\`\`\`html
<img 
  src="photo-small.jpg" 
  srcset="photo-small.jpg 500w, photo-medium.jpg 1000w, photo-large.jpg 2000w" 
  alt="A beautiful landscape"
>
\`\`\`

*   \`500w\`: Tells the browser this image is 500 pixels wide.
*   **Browser Logic**: If the user is on a phone (375px wide), it downloads \`photo-small.jpg\`. If on a 4K monitor, it grabs \`photo-large.jpg\`. **Bandwidth saved.**

## 2. The \`picture\` Element (Art Direction)
Use this when you want to change the *content* or *aspect ratio* of an image depending on the device (e.g., a wide hero banner on desktop, but a square portrait on mobile).

\`\`\`html
<picture>
  <!-- Mobile: Square crop -->
  <source media="(max-width: 600px)" srcset="hero-square.jpg">
  
  <!-- Desktop: Wide crop -->
  <source media="(min-width: 601px)" srcset="hero-wide.jpg">
  
  <!-- Fallback -->
  <img src="hero-wide.jpg" alt="Hero banner">
</picture>
\`\`\`

## 3. Modern Formats: WebP & AVIF
WEBP and AVIF offer better quality at smaller file sizes than JPEG/PNG. Use \`<picture>\` to provide fallbacks for older browsers.

\`\`\`html
<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Fallback JPEG">
</picture>
\`\`\`

> [!TIP]
> **Always include \`alt\` text.** It's crucial for SEO and Screen Readers. If an image is purely decorative, use \`alt=""\`.
    `
};
