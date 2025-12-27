import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc6Media = {
    id: 'html5-u1-doc-6-media',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Images & Media Assets',
    duration: '20 min read',
    content: `
# Deep Dive: Images & Media Assets

## 1. The Image Tag (\`<img>\`)

Images are **Void Elements** (Self-closing). They don't have a closing tag.

\`\`\`html
<img src="cat.jpg" alt="A cute cat">
\`\`\`

---

## 2. Format Strategy: JPG vs PNG vs SVG

A Senior Developer knows which format to pick.

| Format | Best For | Pros | Cons |
| :--- | :--- | :--- | :--- |
| **JPG** | Photos (People, Nature) | Small file size, Good blending | No transparency, compression artifacts |
| **PNG** | Logos, UI Icons | Transparency support, Crisp lines | Large file size for photos |
| **SVG** | Icons, Logos, Vectors | Infinite scaling (Vector), Tiny size | Hard to create (needs Illustrator/Figma) |
| **GIF** | Simple Animations | It moves! | Terrible quality, huge file size. Use Video instead. |

---

## 3. The Alt Text Responsibility

**Alt (Alternative) Text** is mandatory.
It displays if the image fails to load, and it is spoken by Screen Readers.

**The Golden Rule**: Describe the *content* or *function*, not the mechanics.

*   ❌ \`alt="image.png"\` (Useless)
*   ❌ \`alt="picture of a dog"\` (Lazy)
*   ✅ \`alt="Golden Retriever catching a frisbee in the park"\` (Descriptive)
*   ✅ \`alt=""\` (Empty string - Use ONLY for purely decorative patterns with no meaning)

---

## 4. Lazy Loading (Performance)

Images are heavy. Loading 50 images at once kills mobile data.
Use the native \`loading\` attribute.

\`\`\`html
<img src="heavy-photo.jpg" alt="..." loading="lazy">
\`\`\`

This tells the browser: **"Don't download this image until the user scrolls near it."**

---

## 5. Figures and Captions

If an image needs a visibly written caption, don't just use a \`<p>\` tag below it. Use proper semantics.

\`\`\`html
<figure>
    <img src="chart.png" alt="Bar chart showing Q3 growth">
    <figcaption>Fig 1. Sales Growth in 2024</figcaption>
</figure>
\`\`\`

> [!IMPORTANT]
> **Broken Images**: A broken image icon is the most unprofessional thing a user can see. Always double-check your **File Paths** (Unit 1.4) and ensure your filenames (case-sensitive on Linux servers!) match exactly.
`
};
