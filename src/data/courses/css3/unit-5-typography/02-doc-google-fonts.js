import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2GoogleFonts = {
    id: 'css-unit5-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Google Fonts Pipeline',
    duration: '25 min read',
    content: `
# Deep Dive: The Google Fonts Pipeline

## 1. The Core Concept: The Global Library
Architect, most system fonts (Arial, Times New Roman) are boring. To create a premium "Pro" feel for the **Nexus AI Cloud**, we use **Web Fonts**. Google Fonts is the world's largest, most reliable distributor of these assets.

But loading external fonts comes with a cost: **Latency**. If you don't handle the pipeline correctly, your website will look "Broken" for 2 seconds while the font downloads.

---

## 2. Visual: The Loading Sequence
\`\`\`mermaid
sequenceDiagram
    Browser->>Google: Request CSS for 'Inter'
    Google-->>Browser: Return CSS with @font-face URLs
    Browser->>Google: Request WOFF2 Font File
    Google-->>Browser: Return Binary Font Data
    Browser->>UI: Render with Final Typeface
\`\`\`

---

## 3. Implementation Methods
There are two ways to connect to the Google Font server:

### Method A: The HTML <link> (Recommended)
\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap">
\`\`\`
- **Why?**: The \`preconnect\` tag tells the browser to start opening the connection to Google *before* it even reads the font request. This saves ~200ms of loading time.

### Method B: The CSS @import
\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
\`\`\`
- **Why?**: Convenient, but slower because the browser has to download your CSS file *first*, read the @import, and then start the font download.

---

## 4. Machine Logic: The \`display=swap\` Secret
In the URL above, you see \`&display=swap\`. This is a critical performance setting. 
- It tells the browser: "Use a system font (Arial) immediately so the user can read the text, and then **Swap** it for the Google Font once it finishes downloading."
- This prevents the "Flash of Invisible Text" (FOIT).

---

## 5. Mental Model: The Courier
Imagine you are waiting for a specific brand of coffee (The Font).
- **Without Swap**: You stare at an empty cup until the courier arrives.
- **With Swap**: You drink water (System Font) while you wait. When the courier arrives, you pour the coffee into the cup. You are never left with an empty cup.

---

## 6. Senior Architect's Guidance: Self-Hosting
For ultra-high-performance projects, Senior Architects often **Self-Host** fonts.
- You download the \`.woff2\` files and put them in your own \`/assets/fonts/\` folder.
- **Why?**: Zero reliance on 3rd-party servers. 100% control over caching. Better privacy (GDPR compliance).

---

## 7. The WOFF2 Standard
Web Open Font Format 2 (WOFF2) is the current industry standard. It uses a high-compression algorithm that is ~30% smaller than the original WOFF, saving data for mobile users and speeding up the Nexus interface.

> [!IMPORTANT]
> **Mission Objective**: Speed. A font that takes 5 seconds to load is a failure. Always use \`display: swap\` and load only the minimum required weights (e.g., 400 and 700).

> [!TIP]
> **Pro Tip**: Use the **variable** versions of fonts when available on Google Fonts (e.g., Inter Variable). A single variable font file contains *every* weight (100 to 900) and is often smaller than two individual static font files.

> [!CAUTION]
> **Logic Pitfall**: Don't load 10 different font families. Each family adds a new network request. Stick to 1 or 2 families for a cohesive, professional design.
`
};
