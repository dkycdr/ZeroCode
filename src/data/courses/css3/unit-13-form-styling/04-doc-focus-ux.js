import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4FocusUX = {
    id: 'css-unit13-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Focus UX & Accessibility',
    duration: '25 min read',
    content: `
# Deep Dive: Focus UX & Accessibility (The Professional Glow)

## 1. The Scenario: The Lost Cursor
Architect, imagine a user navigating the **Nexus AI Dashboard** using only their keyboard (often power users or those with motor impairments). As they press the "Tab" key, a "Focus Ring" moves from one field to the next.

If you lazily write \`outline: none;\` to remove the default browser ring without providing an alternative, you have effectively "blinded" the user. They no longer know which input is active.

---

## 2. Machine Logic: The \`:focus-visible\` Strategy
Modern CSS provides the \`:focus-visible\` pseudo-class. This allows you to apply a custom glow only when the user is using a keyboard, preventing the "ugly" ring from appearing when a mouse user clicks a button.

### The Elite Glow Recipe:
\`\`\`css
input:focus-visible {
  /* 1. Remove the default OS outline */
  outline: none;
  
  /* 2. Create a professional, branded glow */
  box-shadow: 0 0 0 4px rgba(76, 201, 240, 0.3);
  border-color: #4cc9f0;
  
  /* 3. Smooth the entry */
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}
\`\`\`

---

## 3. Focus-Within: Parent Intelligence
Sometimes, you want to highlight the **entire card** or group containing the input. 

\`\`\`css
.form-group:focus-within {
    border-color: #4cc9f0;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
\`\`\`
This makes the user feel "locked in" to the task, improving cognitive focus.

---

## 4. Visual: Focus State Evolution
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph LR
    A["Standard State (Dim)"] --> B["Hover State (Subtle)"]
    B --> C["Focus State (GLOW)"]
    
    style A fill:#1a1a1e,stroke:#333
    style B fill:#333,stroke:#444
    style C fill:#4cc9f0,stroke:#222
\`\`\`

</div>

---

## 5. Senior Architect's Decision: Accessibility is Non-Negotiable
In a "Pro" codebase, Accessibility (a11y) is not an afterthought; it is a core performance metric. A high-fidelity focus state is more than just a "Pretty Glow"—it is a navigational beacon. By ensuring every interactive element in the Nexus Console has a clear, accessible focus state, we ensure the system is usable by everyone, including power users who navigate at high speeds using keyboard shortcuts.

---

## 6. Mental Model: The Spotlight
- **The Mouse** is like a finger pointing at things.
- **The Tab Key** is like a "Spotlight" roaming the room. If the spotlight doesn't have a bulb (Focus State), the room stays dark, and you can't see what you're interacting with.

---

## 7. The Checklist of Navigational Beacon
- [ ] Never use \`outline: none\` without a \`box-shadow\` or alternative border replacement.
- [ ] Use \`:focus-within\` for complex components like data-tables or multi-field cards.
- [ ] Ensure the contrast ratio of your focus state is at least **3:1** against the background.

> [!IMPORTANT]
> **Safety Protocol**: Always test your forms by tabbing through the entire page. If you lose track of where you are for even a second, your focus UX has failed.

> [!TIP]
> **Offsetring**: Use \`outline-offset: 4px;\` to create a ring that "floats" around the element, giving it a more modern, spacious aesthetic.
`
};
