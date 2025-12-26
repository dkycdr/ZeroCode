import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1InvisibleLayer = {
    id: 'css-unit6-info-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Invisible Layer (::before & ::after)',
    duration: '25 min read',
    content: `
# Deep Dive: The Invisible Layer (::before & ::after)

## 1. The Core Concept: DOM Alchemy
Architect, until now, you have been styling elements that explicitly exist in your HTML. But in a high-fidelity system like the **Nexus AI Dashboard**, we often need decorative elements—glows, icon modifiers, or structural streaks—that don't belong in the semantic HTML.

**Pseudo-elements** allow you to create "Fake" elements directly in CSS. They aren't in the HTML, but they appear on the screen as if they were. This keeps your HTML clean and focuses your design logic in one place.

---

## 2. Visual: The Pseudo Wrapper
Every element in CSS can have two "Shadow" children.

<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    B[::before] --> E["Actual Element (Content)"]
    E --> A[::after]
    
    style B fill:#f72585,stroke:#333
    style A fill:#4cc9f0,stroke:#333
    style E fill:#111,stroke:#eee
\`\`\`

</div>

---

## 3. The Mandatory Fuel: \`content\`
A pseudo-element is invisible and non-existent until you give it a **\`content\`** property. Even if you just want a decorative circle, you must provide an empty string:

\`\`\`css
.button::after {
    content: ""; /* The key that unlocks the element */
    width: 10px;
    height: 10px;
    background: red;
}
\`\`\`

---

## 4. Machine Logic: The Positioning Ritual
Most professional use-cases for \`::before\` and \`::after\` involve **Absolute Positioning**. 
1.  Set the parent to \`position: relative;\`.
2.  Set the pseudo-element to \`position: absolute;\`.
3.  Target its location with \`top\`, \`left\`, etc. 

This allows you to "Layer" decorations precisely over or under your text.

---

## 5. Mental Model: The Costume
Imagine an actor (The HTML Element) walking onto a stage.
- **::before** is a hat the actor puts on.
- **::after** is a cape the actor wears.
The actor is the same person (The semantic HTML), but they now have visual extensions that didn't exist when they were backstage.

---

## 6. Senior Architect's Decision: Decorative vs. Semantic
- **USE Pseudo-elements** for: Icons, decorative borders, tooltip arrows, overlays.
- **AVOID Pseudo-elements** for: Important text, buttons, or links. Screen readers sometimes ignore pseudo-content, or it becomes impossible for users to copy-paste the text.

---

## 7. Real-World Scenario: The Status Pulse
The **Nexus AI Pulse Indicator** uses a pseudo-element to create a "Rippling" effect around a status dot. 
- The HTML is just a single \`<div>\`. 
- The \`::after\` is a larger circle that expands and fades using an animation. This ensures the pulsing effect doesn't clutter the actual status data logic.

> [!IMPORTANT]
> **Mission Objective**: HTML Purity. Your goal is to move all "Visual Noise" (circles, lines, underlines) out of the HTML and into pseudo-elements.

> [!TIP]
> **Pro Tip**: You can use the \`attr()\` function inside \`content\`. 
> \`content: attr(data-label);\` allows you to pull text directly from the HTML and display it as a pseudo-element. This is how professional "Tooltip" engines are built.

> [!CAUTION]
> **Logic Pitfall**: Remember that \`::before\` and \`::after\` are **Inline** by default. If you want them to have a width or height, you must change them to \`display: block;\` or \`display: inline-block;\`.
`
};
