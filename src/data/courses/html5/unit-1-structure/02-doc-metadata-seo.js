import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2MetadataSeo = {
    id: 'html5-u1-doc-2-metadata',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Metadata & SEO 🕵️‍♂️',
    duration: '10 min read',
    content: `
# Deep Dive: Metadata & SEO 🕵️‍♂️

## 1. The Invisible <head>
The \`<body>\` is what users see. The \`<head>\` is what **Robots** (Google, Facebook, Twitter) see.
It's the "Control Center" of your page.

## 2. Essential Tags for 2024
If you want a job, you need to know more than just \`<title>\`.

### A. The Viewport (Mobile Responsiveness)
\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`
WITHOUT this, an iPhone will render your site like a desktop monitor (zoomed out).
WITH this, it renders at the device's actual width.

### B. Open Graph (Social Cards)
Ever pasted a link in Discord or WhatsApp and seen a nice image card pop up? That's **Open Graph**.

\`\`\`html
<meta property="og:title" content="My Amazing Portfolio">
<meta property="og:description" content="Check out my projects built with HTML5">
<meta property="og:image" content="https://mysite.com/preview.jpg">
\`\`\`

## 3. Favicon (The Browser Tab Icon)
That tiny icon in the browser tab? It's crucial for brand recognition.

\`\`\`html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
\`\`\`

> [!TIP]
> **Pro Tip**: Use a site like **RealFaviconGenerator** to create icons for iOS, Android, and Windows tiles automatically. One \`.ico\` file is no longer enough for a PWA.
`
};
