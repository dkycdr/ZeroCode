import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4FontPerformance = {
    id: 'css-unit5-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Performance & Accessibility (Layout Shift)',
    duration: '35 min read',
    content: `
# Deep Dive: Performance & Accessibility (Layout Shift)

## 1. The Core Concept: The Invisible Penalty
Architect, a beautiful font can actually hurt your website's ranking on search engines if it causes **Cumulative Layout Shift (CLS)**. 

Imagine you are reading a paragraph using the system font "Arial." Suddenly, the premium "Inter" font finishes downloading, and the text "Jumps" slightly because "Inter" has a different width. The user loses their place. This is a poor user experience and a performance violation.

---

## 2. Visual: The Font-Display Strategies
\`\`\`mermaid
graph TD
    A[font-display: auto] -->|Browser Default| D[Flash of Invisible Text]
    B[font-display: swap] -->|Priority: Content| E[System font first, then swap]
    C[font-display: block] -->|Priority: Design| F[Wait up to 3s for font]
    
    style B fill:#4cc9f0,stroke:#333
\`\`\`

---

## 3. High-Performance Optimization: Subsetting
Most fonts come with thousands of characters (Greek, Cyrillic, Mathematical symbols). If the **Nexus AI English Portal** only needs Latin letters, why download the rest?

**Subsetting** allows you to strip away unused characters.
- Base Font File: 80kb
- Latin-Only Subset: 15kb
- **Result**: 80% reduction in data usage.

---

## 4. Machine Logic: Font Weight Management
Each "Weight" (Light, Thin, Semibold) is a **separate file**. 
If you use \`font-weight: 300\`, \`400\`, \`500\`, \`600\`, \`700\`, you are forcing the user to download 5 separate assets.
- **Senior Strategy**: Choose only two: **Regular (400)** for body and **Bold (700)** for prominence. This is enough for 99% of professional dashboards.

---

## 5. Accessibility: The "No-Contrast" Trap
Text is only useful if it can be seen. The WCAG standards require specific contrast ratios:
- **Level AA**: 4.5:1 ratio for normal text.
- **Large Text**: 3:1 ratio.
If you use a light grey text on a dark grey background in the Nexus console, you are excluding users with visual impairments.

---

## 6. Mental Model: The Stage Lights
- **Typography** is a performer on a stage.
- **Performance** is the stage crew making sure the lights turn on instantly.
- **Accessibility** is the ramp that allows every member of the audience to enter the theater.
You cannot have a successful show if the performer is beautiful but the doors are locked and the lights are off.

---

## 7. Advanced: \`font-size-adjust\`
This is a modern CSS property that helps fix Layout Shift. 
It tells the browser: "If the fallback font (Arial) is smaller than my main font (Inter), stretch the Arial letters slightly so they take up the same space." 
This makes the "Swap" invisible to the user.

---

## 8. Summary Checklist
- [ ] Always use \`font-display: swap;\`.
- [ ] Only load the specific weights you need.
- [ ] Check contrast ratios using browser DevTools (Inspect -> Accessibility tab).
- [ ] Subset your fonts to "Latin" for English-only projects.

> [!IMPORTANT]
> **Mission Objective**: Human-Centric Design. Performance and Accessibility are not "Tasks"—they are the foundation of your professional ethics as an Architect.

> [!TIP]
> **Pro Tip**: Use the **Lighthouse** tool in Chrome to audit your typography performance. It will tell you exactly if your fonts are causing layout shifts and how many milliseconds they are adding to your page load.

> [!CAUTION]
> **Legality Note**: Some fonts require specific licenses (EULA) to be used on the web. Always verify the license (Google Fonts are SIL Open Font License, which is safe) before deploying to production.
`
};
