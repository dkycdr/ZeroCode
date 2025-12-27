import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2BlockVsInline = {
    id: 'css-unit11-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Block & Inline Axis',
    duration: '35 min read',
    content: `
# Deep Dive: The Block & Inline Axis (Spatial Logic)

## 1. The Scenario: The Navigator's Compass
Architect, to master logical properties, you must discard your old compass that only knows "North-South-East-West." In the modern web ecosystem, we utilize two primary axes that rotate dynamically based on the flow of text: the **Inline Axis** and the **Block Axis**.

Imagine you are designing an interface system for the **Nexus AI** that can rotate 90 degrees for technical vertical displays. If you rely on fixed terms like "Width" and "Height," your design logic will collapse the moment the orientation shifts. In this unit, we map the new spatial reality used by premium browser engines.

---

## 2. Machine Logic: The Two Master Axes

### A. Inline Axis (The Character Sequence)
This is the direction in which characters are placed to form a sentence.
- **English/Latin**: Flows from Left to Right (Horizontal).
- **Arabic/Hebrew**: Flows from Right to Left (Horizontal).
- **Traditional Japanese/Chinese**: Can flow from Top to Bottom (Vertical).

### B. Block Axis (The Element Stack)
This is the direction in which blocks of content (like paragraphs or divs) are stacked.
- **English**: Stacks from Top to Bottom.
- **Traditional Vertical Asian Text**: Stacks from Right to Left.

---

## 3. Visual: Navigation Across Axes
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    subgraph Horizontal ["Standard Mode (LTR)"]
        H_Inline["Inline Axis: Horizontal (L ➔ R)"]
        H_Block["Block Axis: Vertical (T ➔ B)"]
    end
    
    subgraph Vertical ["Vertical Writing Mode"]
        V_Inline["Inline Axis: Vertical (T ➔ B)"]
        V_Block["Block Axis: Horizontal (R ➔ L)"]
    end
    
    style H_Inline fill:#4cc9f0,stroke:#333
    style V_Inline fill:#4cc9f0,stroke:#333
    style H_Block fill:#f72585,stroke:#333
    style V_Block fill:#f72585,stroke:#333
    style Horizontal fill:#1a1a1e,stroke:#333
    style Vertical fill:#1a1a1e,stroke:#333
\`\`\`

</div>

---

## 4. Dimension Mapping Protocol
| Legacy Concept | Elite Logical Concept | Functional Logic |
| :--- | :--- | :--- |
| **width** | \`inline-size\` | Size along the flow of text characters. |
| **height** | \`block-size\` | Size along the stack of content blocks. |

If you define \`inline-size: 100%\`, the element will always fill the width of the text line, whether that line is flowing horizontally or vertically.

---

## 5. Senior Architect's Decision: Intent-Based Sizing
Adopt \`inline-size\` and \`block-size\` as your new professional standard. Why? Because it communicates **Design Intent** rather than simple geometry.

For example, if you want a button to always have enough room to breathe without becoming too long for a single line of text, you define \`max-inline-size: 250px\`. If the interface theme shifts to a vertical layout, that constraint remains functionally and semantically valid.

---

## 6. Mental Model: The Cursor vs. The Keyboard
- **Inline** is the direction the cursor moves as you type each letter.
- **Block** is the direction the cursor teleports when you hit the "Enter" key to start a new paragraph.

---

## 7. The Checklist of Spatial Maturity
- [ ] Use \`inline-size\` instead of \`width\` for responsive containers.
- [ ] Use \`block-size\` instead of \`height\` for structural modules.
- [ ] Implement \`margin-inline: auto\` for center-aligning blocks horizontally.

> [!IMPORTANT]
> **Logic Protocol**: For most websites today (LTR), \`inline-size\` equals \`width\` and \`block-size\` equals \`height\`. However, mastering these terms prepares you for a future where interfaces are fluid across languages and hardware orientations.

> [!TIP]
> **Pro Tip**: Use \`min-inline-size\` on card components to ensure they never shrink smaller than their internal content, regardless of the writing mode applied.

> [!CAUTION]
> **Measurement Drift**: Be aware that \`max-width: 100%\` and \`max-inline-size: 100%\` behave identically in horizontal modes but will diverge if a vertical writing mode is introduced.
`
};
