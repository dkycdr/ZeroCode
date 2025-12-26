import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3TypeHierarchy = {
    id: 'css-unit5-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Typographic Hierarchy (Scale & Balance)',
    duration: '25 min read',
    content: `
# Deep Dive: Typographic Hierarchy (Scale & Balance)

## 1. The Core Concept: Directing the Eye
Architect, in a data-heavy environment like the **Nexus AI Command Center**, the user shouldn't have to "Search" for the most important information. The typography should **tell** them what to read first.

This is achieved through **Hierarchy**. We use Size, Weight, and Color to create a path for the user's eyes to follow.

---

## 2. Visual: The Golden Scales
\`\`\`mermaid
graph TD
    H1["Headline: 3rem / Extra Bold / High Contrast"] --> H2["Sub-header: 1.5rem / Medium / Muted Color"]
    H2 --> P["Body: 1rem / Regular / Legible Spacing"]
    P --> C["Caption: 0.75rem / Semi-bold / Monospace"]
\`\`\`

---

## 3. The Tools of Command
1.  **Font Weight**: Using \`font-weight: 900\` for headers creates a "Massive" presence.
2.  **Line Height**: Body text should usually have a \`line-height\` of **1.5 to 1.6**. If the lines are too close, the eye gets lost.
3.  **Letter Spacing**: Small caps or tech-headers often look better with a tiny bit of \`letter-spacing: 1px\`.
4.  **Color Contrast**: Crucial for accessibility. Your text must be dark enough on a light background (or vice-versa) to be readable by everyone.

---

## 4. Machine Logic: The Modular Scale
Professional Architects use a **Mathematical Scale** for their font-sizes. Instead of picking numbers like 14px, 19px, 22px... we use a multiplier.

**Example: The Major Second (1.125)**:
- Base: 16px
- Large: 16 * 1.125 = 18px
- XL: 18 * 1.125 = 20.25px
This creates a "Harmonic" relationship between different levels of text that feels naturally "Correct" to the human brain.

---

## 5. Mental Model: The Orchestra
Imagine an orchestra.
- The **H1** is the booming drum. It commands attention.
- The **Body Text** is the violin section. It carries the melody and the story.
- The **Captions** are the subtle flutes. There when you need them, but they don't fight for space.
If every instrument plays at maximum volume (all text is Giant/Bold), the result is **Noise**, not music.

---

## 6. Senior Architect's Guidance: Line Length (Measure)
A common mistake in dashboard design is letting body text span the full width of a wide monitor. 
- **The Golden Rule**: 45 to 75 characters per line is the "Sweet Spot" for reading.
- Use \`max-width: 65ch;\` on your paragraph tags to automatically stop them from getting too wide, making the text feel premium and professional.

---

## 7. Vertical Rhythm
Typography is as much about the space *between* lines as the letters themselves.
- Ensure your \`margin-bottom\` on headers is consistent. 
- A standard professional "Nexus" pattern is to have more space **above** a header than **below** it. This "Clusters" the header with the content it belongs to.

> [!IMPORTANT]
> **Mission Objective**: Guidance. Your typography should act as a map. The user should be able to scan your page in 2 seconds and understand the basic structure.

> [!TIP]
> **Pro Tip**: Use **HSL colors** for your muted text (e.g., \`hsl(200, 10%, 60%)\`) instead of pure black/white. This gives the text a subtle "Tint" that matches your brand colors, making the interface feel integrated and high-tech.

> [!CAUTION]
> **Hierarchy Check**: Never skip levels. Don't put an \`<h3>\` directly after a page title without an \`<h2>\`. It breaks the logical "Outline" of the page for users with screen readers.
`
};
