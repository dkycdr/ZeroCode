import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3StructuralSelection = {
    id: 'css-unit6-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Structural selection (The Math of Logic)',
    duration: '25 min read',
    content: `
# Deep Dive: Structural selection (The Math of Logic)

## 1. The Core Concept: Pattern Detection
Architect, when managing the **Nexus AI Data Center**, you will often encounter long lists of identical elements—server logs, user rows, or chart segments. Manually adding a class like \`.last-item\` or \`.even-row\` to every element is a maintenance nightmare.

**Structural Pseudo-classes** allow the CSS engine to perform "Pattern Matching" based on the element's position in the DOM tree. It is pure mathematical logic applied to design.

---

## 2. Visual: The Selector Lattice
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    Parent[Parent Container]
    Parent --> C1["1. :first-child"]
    Parent --> C2["2. :nth-child(2)"]
    Parent --> C3["3. :nth-child(odd)"]
    Parent --> C4["4. :last-child"]
    
    style C1 fill:#f72585,stroke:#333
    style C4 fill:#4cc9f0,stroke:#333
\`\`\`

</div>

---

## 3. The Power of \`nth-child()\`
This is the most versatile structural tool. It accepts three types of values:
1.  **Integers**: \`:nth-child(3)\` targets exactly the 3rd item.
2.  **Keywords**: \`:nth-child(even)\` and \`:nth-child(odd)\`. The foundation of "Zebra Striping."
3.  **Functions (An+B)**: The Senior Architect's weapon.
    - \`2n\`: Every 2nd item (same as even).
    - \`3n\`: Every 3rd item.
    - \`3n + 1\`: Every 3rd item, starting at the 1st.

---

## 4. Machine Logic: \`nth-child\` vs \`nth-of-type\`
This is a common point of failure for juniors.
- **:nth-child(2)**: Looks at the 2nd child of the parent, *no matter what its tag is*. If the first child is an \`<h1>\` and the second is a \`<p>\`, this targets the \`<p>\`.
- **:nth-of-type(2)**: Looks specifically for the 2nd instance of a **specific tag**. 
- **Senior Rule**: If your parent container has a mix of different tags (H1, DIV, P), use \`nth-of-type\`.

---

## 5. Mental Model: The Production Line
Imagine a production line of robot parts.
- \`:first-child\` is the leader of the line.
- \`:last-child\` is the quality inspector at the end.
- \`:nth-child(even)\` are the robots on the "Left Shift."
- \`:nth-child(odd)\` are the robots on the "Right Shift."

---

## 6. Senior Architect's Decision: \`:only-child\`
This is a powerful "Defensive CSS" tool.
- If a container only has **one** item, you might want to center it and make it huge.
- If it has **multiple** items, you want them in a grid.
\`\`\`css
.card:only-child {
    font-size: 2rem;
    text-align: center;
}
\`\`\`
This ensures your layout looks intentional even if the data state is limited.

---

## 7. Real-World Logic: Removing Borders
A classic professional move is removing the border from the last item in a list to prevent "Double-Bordering":
\`\`\`css
.list-item {
    border-bottom: 1px solid #333;
}

.list-item:last-child {
    border-bottom: none; /* The clean finish */
}
\`\`\`

> [!IMPORTANT]
> **Mission Objective**: Scalability. Your CSS should be able to handle 1 item or 10,000 items without you having to change your selectors.

> [!TIP]
> **Pro Tip**: You can count from the bottom using **\`:nth-last-child()\`**. 
> \`:nth-last-child(-n+3)\` targets the **last three** items in a list. Perfect for highlighting recent logs!

> [!CAUTION]
> **Performance Note**: While structural selectors are powerful, very complex formulas (e.g., \`nth-child(5n+7)\`) inside massive tables can slightly increase the "Recalculate Style" time in the browser. Use them wisely in high-frequency data views.
`
};
