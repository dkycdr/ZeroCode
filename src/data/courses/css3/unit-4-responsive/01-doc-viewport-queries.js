import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1ViewportQueries = {
    id: 'css-unit4-info-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Viewport & Media Queries',
    duration: '25 min read',
    content: `
# Deep Dive: The Viewport & Media Queries

## 1. The Core Concept: The Digital Chameleon
Architect, in the early days of the web, we built "Fixed" layouts. We assumed every user had a 1024x768 monitor. Today, the **Nexus AI Network** is accessed from billions of devices—smartwatches, phones, foldables, and ultra-wide monitors.

To survive this fragmentation, your code must be "Aware." It must detect the environment and change its shape instantly. This is the essence of **Responsive Design**.

---

## 2. Visual: The Viewport Gatekeeper
Before you write a single line of CSS, you must tell the browser how to handle the "Zoom" level. This is done via the **Viewport Meta Tag**.

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

- **width=device-width**: Tells the browser, "Make the website as wide as the screen."
- **initial-scale=1.0**: Sets the initial zoom level to 100%. Without this, mobile phones will try to "Cheat" and render your site at 980px wide and then zoom out until the text is microscopic.

---

## 3. The Tool of Detection: Media Queries
A Media Query is an "If/Then" statement for the browser engine. It allows you to apply styles only when certain conditions are met.

\`\`\`css
/* General styles (The Base) */
.module { width: 100%; }

/* The Query: If the screen is wider than 768px... */
@media screen and (min-width: 768px) {
    .module { width: 50%; }
}
\`\`\`

---

## 4. Machine Logic: The "Screen" and "Print" Media
Did you know CSS can detect more than just size?
- **@media screen**: The standard for digital displays.
- **@media print**: Forces the browser to hide navbars and change colors for paper printing.
- **@media (prefers-color-scheme: dark)**: Detects if the user wants "Dark Mode" at the OS level.

---

## 5. Mental Model: The Transformer
Imagine a car that turns into a jet.
- On a narrow road (Phone), it is a compact car.
- On a wide runway (Desktop), it expands its wings (Gaps, Multi-columns).
The **Media Query** is the sensor that tells the car, "Environment has changed—deploy wings."

---

## 6. Senior Architect's Guidance: Avoid Device Targeting
Never name your breakpoints after specific devices (\`/* iPhone Styles */\`). 
- Why? Because next year, a new iPhone with a different resolution will be released, and your code will be obsolete. 
- Instead, name them after **Content Breakpoints**. Change the layout when the *content* starts to look bad or squeezed, not when a specific phone brand says so.

---

## 7. The Performance of Queries
Media queries are "Non-Blocking" but they do add to the CSS file size. 
- **Professional Standard**: Group your media queries at the bottom of your file or keep them nested inside their relevant selectors (if using a preprocessor like SASS). 
- Avoid repeating the same \`@media (min-width: 768px)\` block 50 times across your file; group related changes together.

> [!IMPORTANT]
> **Mission Objective**: Total Adaptability. Your goal is a layout that never shows a horizontal scrollbar. Horizontal scrolling is the ultimate failure of a Responsive Architect.

> [!TIP]
> **Pro Tip**: Use the **Device Emulator** in Chrome DevTools (Cmd+Shift+M). It allows you to drag the screen size and see exactly where your layout "breaks." That is where you should place your next Media Query.

> [!CAUTION]
> **Logic Pitfall**: Remember that Media Queries don't *replace* styles; they *cascade* over them. If you set \`color: red\` in the base and don't change it in the media query, it will stay red on all devices.
`
};
