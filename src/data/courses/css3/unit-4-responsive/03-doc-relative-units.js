import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3RelativeUnits = {
    id: 'css-unit4-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Beyond Pixel Boundaries (Relative Units)',
    duration: '30 min read',
    content: `
# Deep Dive: Beyond Pixel Boundaries (Relative Units)

## 1. The Core Concept: The Death of the Pixel
Architect, the pixel (\`px\`) is a lie. On a modern Retina display, a "CSS Pixel" isn't even a single physical pixel on the screen. Worse, if you hardcode \`font-size: 16px\`, you are overwriting the user's browser settings. If a user with low vision has set their default font to 24px for accessibility, your website will "Ignore" them and stay at 16px.

To build a truly **Inclusive and Hybrid** interface for Nexus AI, we must move to **Relative Units**. Units that scale based on context.

---

## 2. Visual: The Hierarchy of Scale
\`\`\`mermaid
graph LR
    Root[html { font-size: 16px }] --> REM[rem: Scales with Root]
    Parent[div { font-size: 20px }] --> EM[em: Scales with Parent]
    Viewport[Window] --> VH[vh: Scales with Height]
    Viewport --> VW[vw: Scales with Width]
    
    style Root fill:#4cc9f0,stroke:#333
    style REM fill:#f72585,stroke:#333
\`\`\`

---

## 3. The Power Units: rem vs em
### The \`rem\` (Root em)
- **Reference**: The \`<html>\` element's font size.
- **Why use it?**: Global consistency. If you change the root font size, the *entire* website scales proportionally. This is the gold standard for \`font-size\`, \`padding\`, and \`margin\`.

### The \`em\`
- **Reference**: Its own or its parent's font size.
- **Why use it?**: Content-specific scaling. Use \`em\` for icons that should grow if the text next to them grows, or for padding inside a button that should scale with the button's text size.

---

## 4. The Viewport Units: vh and vw
- **\`1vw\`**: 1% of the viewport width.
- **\`1vh\`**: 1% of the viewport height.
- **Strategy**: Use these for layout-level elements. 
- *The Full-Screen Landing*: \`height: 100vh;\` ensures your hero section covers exactly the whole screen, no matter the device.

---

## 5. Machine Logic: The Calculation Layer
The browser engine does this math:
- User's Browser Default = 16px.
- Your CSS = \`padding: 2rem;\`
- **Calculation**: \`16 * 2 = 32px\`.
- If the user changes their browser to 20px, your padding automatically becomes 40px. This is "Fluid Accessibility."

---

## 6. Mental Model: The Rubber Band
- A **Pixel** is a steel rod. It never changes length.
- A **Rem** is a rubber band attached to a hook on the ceiling (The Root). If the hook moves, the band stretches.
- An **Em** is a rubber band attached to the person standing next to it (The Parent).

---

## 7. Senior Architect's Guidance: The 62.5% Trick
Many architects set the root font size to **62.5%**. 
\`\`\`css
html { font-size: 62.5%; } /* 10px / 16px = 0.625 */
\`\`\`
- This makes **1rem = 10px**. 
- It makes the math "Human Readable." Want 24px? Write \`2.4rem\`.
- *Caution*: Some older browser engines have rounding errors with this trick. Modern 2024 standards suggest just using 16px as the base and learning the 16-times table (1rem=16, 2rem=32, 1.5rem=24).

---

## 8. Summary Checklist
- [ ] Use \`rem\` for almost everything (typography, spacing).
- [ ] Use \`em\` sparingly for component-internal scaling (padding in buttons).
- [ ] Use \`vh/vw\` for full-screen structural elements.
- [ ] **Avoid \`px\`** for anything that contains text.

> [!IMPORTANT]
> **Mission Objective**: Total Inclusivity. Your interface should work for a 20-year-old pilot and an 80-year-old commander. Relative units are the only way to ensure accessibility at scale.

> [!CAUTION]
> **Vertical Pitfall**: Be careful with \`100vh\` on mobile browsers (Safari/Chrome on iOS/Android). The address bar often "hides" part of your 100vh content. Modern architects use \`height: 100svh;\` (Small Viewport Height) to account for browser UI.
`
};
