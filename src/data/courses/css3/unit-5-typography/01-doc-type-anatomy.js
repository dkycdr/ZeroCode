import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1TypeAnatomy = {
    id: 'css-unit5-info-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Anatomy of Type',
    duration: '25 min read',
    content: `
# Deep Dive: The Anatomy of Type

## 1. The Core Concept: The Voice of the Machine
Architect, typography is not just choosing a "Pretty Font." It is the most critical element of the **Nexus AI User Experience**. 95% of the web is information. If your typography is poor, your information fails to reach the destination.

Types carry "Emotional Weight." Some feel industrial and cold; others feel human and welcoming. As an Elite Architect, you must choose fonts that align with the mission objectives.

---

## 2. Visual: The Type Classifications
In the CSS engine, we categorize fonts into five primary families:

\`\`\`mermaid
graph LR
    subgraph Sans_Serif [1. Sans-Serif]
        S1["Inter"] --- S2["Roboto"]
    end
    subgraph Serif [2. Serif]
        R1["Merriweather"] --- R2["Playfair"]
    end
    subgraph Monospace [3. Monospace]
        M1["JetBrains Mono"] --- M2["Fira Code"]
    end
    
    style Sans_Serif fill:#111,stroke:#4cc9f0
    style Serif fill:#111,stroke:#f72585
    style Monospace fill:#111,stroke:#4895ef
\`\`\`

---

## 3. The Glossary of the Architect
1.  **Serif**: Small "Feet" or strokes at the end of letters. Excellent for long-form reading on paper.
2.  **Sans-Serif**: No feet. Clean, modern, and high-legibility on digital screens (The Nexus AI Standard).
3.  **Monospace**: Every letter takes up the exact same width. Essential for code editors and technical data tables.
4.  **Baseline**: The invisible line where all letters sit.
5.  **X-Height**: The height of the lowercase letter 'x'. A taller x-height usually means better legibility at small sizes.

---

## 4. Machine Logic: The Font-Stack Protocol
Web Fonts can fail. A server might be down, or a user might be offline. You must always provide a **Font Stack** (Fallback Strategy).

\`\`\`css
/* High-Priority / Fallback / System-Default */
font-family: 'Inter', 'Helvetica', sans-serif;
\`\`\`

---

## 5. Mental Model: The Uniform
Think of Typography as the "Uniform" of your content.
- **Sans-Serif** is a modern flight suit. Functional, breathable, and sleek.
- **Serif** is a formal tuxedo. Traditional, prestigious, and rigid.
- **Monospace** is a toolkit. Every item is in its place, perfectly measured.

---

## 6. Senior Architect's Decision: Readability vs. Legibility
- **Legibility**: Can the user distinguish one letter from another? (e.g., Is that an 'I' or a '1'?)
- **Readability**: How easy is it to read an entire paragraph? 
A font might be highly *legible* (clear letters) but low *readability* if the spacing is too tight or the strokes are too thin.

---

## 7. The Standard: The 8pt Grid for Type
In professional UI development, we don't use random numbers for sizing. We use steps of 4 or 8.
- 12px (Small/Caption)
- 16px (Base/Body)
- 24px (Sub-headline)
- 32px (Headline)
- 48px+ (Hero)

> [!IMPORTANT]
> **Mission Objective**: Communication above Decoration. Never sacrifice the user's ability to read data for a "cool" font.

> [!TIP]
> **Pro Tip**: When building a dashboard, use a **Monospace** font for numbers. This prevents the numbers from "Jumping" or shifting horizontally when they change (e.g., 1.11 vs 8.88), ensuring your data tables stay perfectly aligned.

> [!CAUTION]
> **Performance Note**: Every font weight you load (Light, Regular, Bold) adds weight to your website. Load only the weights you absolutely need for the design.
`
};
