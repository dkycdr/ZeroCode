import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2MobileFirst = {
    id: 'css-unit4-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Breakpoint Strategy (Mobile-First)',
    duration: '25 min read',
    content: `
# Deep Dive: Breakpoint Strategy (Mobile-First)

## 1. The Core Concept: Designing from the Core
Architect, most beginners build for a Desktop first, and then "Fix" the layout for Mobile using \`max-width\` queries. This is the **Retrofit Approach**, and it is inefficient for the **Nexus AI Ecosystem**.

We use the **Mobile-First Approach**. We write the simplest possible CSS first (for the smallest screen) and then use \`min-width\` queries to add complexity as the screen gets larger.

---

## 2. Visual: The Progressive Enhancement
Think of it as adding layers to a technical drawing.

\`\`\`mermaid
graph TD
    Base[Base CSS: Mobile Stacked] --> T[min-width: 768px: Add 2-Column Grid]
    T --> D[min-width: 1200px: Add 4-Column Grid + Sidebar]
\`\`\`

---

## 3. Why Mobile-First Wins
1.  **Performance**: Phones are less powerful than computers. By putting mobile styles first, the phone doesn't have to "Undo" complex desktop styles. It just reads the base and stops.
2.  **Focus**: It forces you to prioritize the most important content. If it doesn't fit on a phone, do you really need it on a desktop?
3.  **Future-Proofing**: It is much easier to add complexity than to subtract it.

---

## 4. Machine Logic: \`min-width\` vs \`max-width\`
- **\`min-width: 768px\`**: "From 768px and up." This is the tool of Mobile-First.
- **\`max-width: 767px\`**: "From 767px and down." This is typically used for specific "fixes" or legacy overrides.

---

## 5. The Standard Breakpoint Chart
While we target content, these are the "Safe Zones" used by global design systems:

| Size | Range | Strategic Name |
| :--- | :--- | :--- |
| **Small** | 0px - 600px | Mobile (Portrait) |
| **Medium** | 600px - 900px | Tablets / Mobile (Landscape) |
| **Large** | 900px - 1200px | Laptops / Small Desktops |
| **Extra Large** | 1200px+ | Ultra-Wide Command Centers |

---

## 6. Mental Model: The Nesting Doll
Imagine a set of Matryoshka dolls.
- The **Smallest Doll** is your Mobile CSS. It is the heart.
- The **Middle Doll** fits *around* the small doll. It adds some paint and detail.
- The **Large Doll** fits around both. 
In CSS, the code inside a \`min-width\` query only "Wraps" around the previous code; it doesn't replace it unless you explicitly override a property.

---

## 7. Senior Architect's Decision: Logical Breakpoints
Don't add a breakpoint every 10 pixels. 
- **The Rule of 3**: Most professional sites only need 3 major breakpoints: Mobile, Tablet, and Desktop.
- Use **Containers** to cap your width. A common mistake is letting text span 3000px wide on an ultra-wide monitor. No human can read that. Use \`max-width: 1400px; margin: 0 auto;\` to keep your dashboard centered and readable.

> [!IMPORTANT]
> **Mission Objective**: Efficiency. Your base code (outside any media query) should be 100% functional and beautiful on a phone. The media queries are "Bonuses" for users with more screen real estate.

> [!TIP]
> **Pro Tip**: Always test on actual physical devices if possible. The emulator is good, but "Touch Targets" (buttons) feel different when you actually use your thumb. Make your buttons at least 44x44px for accessibility.

> [!CAUTION]
> **Logic Pitfall**: If you use both \`min-width\` and \`max-width\` in the same file, you can create "Dead Zones" where no styles apply (e.g., if you have a gap between 599px and 600px). Stick to one direction—usually \`min-width\`—for consistency.
`
};
