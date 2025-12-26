import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4LogicalShorthands = {
    id: 'css-unit11-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Logical Shorthands',
    duration: '35 min read',
    content: `
# Deep Dive: Logical Shorthands (Efficiency Redefined)

## 1. The Scenario: The Spacing Crisis
Architect, how many times have you written code like this just to apply horizontal padding to a container?
\`\`\`css
.nexus-container {
    padding-left: 20px;
    padding-right: 20px;
}
\`\`\`
Or perhaps you use the traditional shorthand: \`padding: 0 20px;\`.

**The Fatal Flaw**: When using \`padding: 0 20px;\`, you are forced to define values for Top and Bottom (0) even if you didn't want to. If another style was already providing top padding, you've just overwritten it. In this dive, we master **Logical Shorthands**—the fastest, cleanest way to manage spacing without the risk of collateral style damage.

---

## 2. Machine Logic: Axis-Based Delegation
Logical properties allow us to target twin sides of a component simultaneously through axis delegation.

### A. The Inline Shorthand (Horizontal Focus)
Targets the Start and End of the text flow simultaneously.
- **Properties**: \`margin-inline\`, \`padding-inline\`, \`border-inline\`.
- **Logic**: Writing \`margin-inline: 20px;\` applies margin to both the Left and Right (in LTR) automatically.

### B. The Block Shorthand (Vertical Focus)
Targets the Start and End of the content stack simultaneously.
- **Properties**: \`margin-block\`, \`padding-block\`, \`border-block\`.
- **Logic**: Targets the Top and Bottom simultaneously. Critical for maintaining consistent **Vertical Rhythm**.

---

## 3. Visual: Property Grouping Map
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    subgraph Block_System ["Block Axis (T/B)"]
        B1["block-start (Top)"]
        B2["block-end (Bottom)"]
    end
    
    subgraph Inline_System ["Inline Axis (L/R)"]
        I1["inline-start (Left)"]
        I2["inline-end (Right)"]
    end
    
    SH_Block["Shorthand: margin-block"] -.-> B1 & B2
    SH_Inline["Shorthand: margin-inline"] -.-> I1 & I2
    
    style SH_Block fill:#f72585,stroke:#333
    style SH_Inline fill:#4cc9f0,stroke:#333
    style Block_System fill:#1a1a1e,stroke:#333
    style Inline_System fill:#1a1a1e,stroke:#333
\`\`\`

</div>

---

## 4. Logical Shorthand Matrix
| Targeted Sides | Legacy Physical Method | Elite Logical Shorthand |
| :--- | :--- | :--- |
| **Top & Bottom** | \`margin-top\` + \`-bottom\` | \`margin-block: 20px;\` |
| **Left & Right** | \`margin-left\` + \`-right\` | \`margin-inline: 20px;\` |
| **Start Side Only** | \`margin-left\` (LTR) | \`margin-inline-start: 10px;\` |
| **End Side Only** | \`margin-right\` (LTR) | \`margin-inline-end: 10px;\` |

---

## 5. Senior Architect's Decision: Declarative Integrity
Why do Senior Architects at Nexus prioritize these shorthands? Because they are **Declarative**.
When I see \`padding-inline: 40px;\`, I immediately understand your intent: you want horizontal separation from the content, regardless of the language or device orientation.

Furthermore, this prevents the common error of accidentally nuking Top/Bottom padding that was inherited from a global utility class. Your code becomes modular and robust.

---

## 6. Mental Model: The Clamping Hands
- **margin-inline** is like two hands pressing in on the sides of a box.
- **margin-block** is like two hands pressing down on the top and up from the bottom of a box.
You don't need to specify each hand separately; the axis command moves them in unison.

---

## 7. The Checklist of Precision
- [ ] Cease using \`margin: 0 auto;\`. Transition to the more descriptive \`margin-inline: auto;\`.
- [ ] Use \`padding-block\` to establish consistent vertical breathing space in article sections.
- [ ] Use \`border-inline-start\` to create sleek accent lines for blockquotes or sidebar items.

> [!IMPORTANT]
> **Syntax Protocol**: If you provide two values to a shorthand (e.g., \`margin-inline: 10px 40px;\`), the first value targets the **Start** and the second value targets the **End**.

> [!TIP]
> **Pro Tip**: To create buttons that feel uniform across languages, use \`padding-inline: 1.5rem;\`. The button will maintain perfect proportions whether it contains Latin characters or high-density Kanji.

> [!NOTE]
> **Fun Fact**: These shorthands were nearly named \`margin-x\` and \`margin-y\` (following mathematical convention). However, typographers argued that X and Y lose meaning in vertical writing modes, leading to the selection of "Inline" and "Block" as the final global standard.
`
};
