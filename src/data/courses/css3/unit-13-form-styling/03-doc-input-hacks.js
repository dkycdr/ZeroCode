import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3InputHacks = {
    id: 'css-unit13-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Input Hack',
    duration: '35 min read',
    content: `
# Deep Dive: The Input Hack (Custom Switches)

## 1. The Scenario: The iOS Toggle
Architect, have you ever wondered how developers build those sleek, sliding "Toggle Switches"? They aren't native HTML elements. They are a clever "CSS Hack" built using the humble **Checkbox**.

The standard checkbox is visually boring. To build the **Nexus System Toggle**, we hide the actual checkbox and use a linked \`<label>\` as the target for our professional styling.

---

## 2. Machine Logic: The Label-Input Bridge
When a \`<label>\` is correctly linked to an \`<input>\` via the \`for\` and \`id\` attributes, clicking the label triggers the input. This is the foundation of the hack.

### The 4-Step Architecture:
1.  **Ghost the Input**: Set the checkbox to \`opacity: 0\` and \`position: absolute\`. It remains functional but invisible.
2.  **Architect the Track**: Style the label to look like a "Pill" (the background rail).
3.  **Forge the Thumb**: Use \`label::after\` to create a circular "Thumb" or knob.
4.  **Inject the Logic**: Use the \`:checked\` pseudo-class and the \`+\` (Adjacent Sibling) selector to move the thumb.

\`\`\`css
/* When the checkbox is ON, move the label's circle knob */
input:checked + label::after {
  transform: translateX(100%);
  background: #4cc9f0;
}
\`\`\`

---

## 3. Visual: The Switch Breakdown
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    A["Invisible Checkbox"]
    A -- linked via for/id --> B["Visible Label (The Track)"]
    B -- holds --> C["label::after (The Knob)"]
    
    subgraph States
        S1[":checked OFF (Knob at 0px)"]
        S2[":checked ON (Knob at 30px)"]
    end
    
    style B fill:#1a1a1e,stroke:#333
    style C fill:#4cc9f0,stroke:#333
    style S2 fill:#4cc9f0,stroke:#000
\`\`\`

</div>

---

## 4. Senior Architect's Decision: Semantic Integrity
Why do we perform this "Hack" instead of just using a \`<div>\` with a JavaScript click handler? **Accessibility**.
By using a real Checkbox, Screen Readers understand that this is a toggleable setting. Keyboard users can focus it and tap "Space" to flip the switch. You get the "Elite Pro" aesthetics without sacrificing the web's universal accessibility standards.

---

## 5. Mental Model: The Puppeteer
- **The Checkbox** is the Puppeteer. It holds the "State" (On or Off) but stays behind the curtain.
- **The Label** is the Puppet. It does all the visual dancing and moving based on the strings pulled by the Puppeteer's \`:checked\` state.

---

## 6. The Checklist of Custom Controls
- [ ] Link \`id\` and \`for\` perfectly.
- [ ] Ensure the label has \`display: inline-block\` or \`flex\` so its dimensions can be styled.
- [ ] Use \`transition: transform 0.3s cubic-bezier(...)\` for that premium, snappy feeling.

> [!IMPORTANT]
> **Pointer Logic**: Set \`cursor: pointer\` on the label. Users expect interactive toggles to show a hand cursor on hover.

> [!TIP]
> **No-JS Tabs**: This same "Input Hack" can be used to build tabbed navigation or accordions without a single line of JavaScript.
`
};
