import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1PhysicalVsLogical = {
    id: 'css-unit11-info-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Physical vs Logical',
    duration: '35 min read',
    content: `
# Deep Dive: Physical vs Logical (Directional Independence)

## 1. The Scenario: The Global Interface
Architect, welcome to the **Nexus AI Localization Department**. Imagine your interface has become a global phenomenon. Today, you have users in London reading from Left-to-Right (LTR). Tomorrow, you scale to Dubai (Arabic) or Tel Aviv (Hebrew), where users read from Right-to-Left (RTL).

In the legacy era, supporting RTL required writing entirely separate CSS files just to flip \`margin-left\` to \`margin-right\`. For a codebase with 10,000 lines, this was a maintenance catastrophe.

**Logical Properties** solve this forever. We will stop thinking about the "Physical" orientation of the screen (Left/Right) and begin thinking about the "Logical" intent of the content (Start/End).

---

## 2. Machine Logic: The Directional Shift
The difference between Physical and Logical properties is one of **Intent**.

### A. Physical Properties (Legacy)
Bound to the hard-coded orientation of the hardware.
- \`margin-left\`: Always on the left side of the screen, regardless of context.
- \`padding-right\`: Always on the right side of the screen.

### B. Logical Properties (Modern)
Bound to the flow of information and writing mode.
- \`margin-inline-start\`: In English, this is the Left side. In Arabic, it automatically becomes the Right side.
- \`padding-inline-end\`: Always located at the terminus of a text line.

---

## 3. Visual: Multi-Directional Mapping
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    subgraph LTR ["LTR (English / Latin)"]
        S1["inline-start: LEFT"] --> C1["Content Flow"] --> E1["inline-end: RIGHT"]
    end
    
    subgraph RTL ["RTL (Arabic / Hebrew)"]
        S2["inline-start: RIGHT"] --> C2["Content Flow"] --> E2["inline-end: LEFT"]
    end
    
    style S1 fill:#4cc9f0,stroke:#333
    style S2 fill:#4cc9f0,stroke:#333
    style E1 fill:#f72585,stroke:#333
    style E2 fill:#f72585,stroke:#333
    style LTR fill:#1a1a1e,stroke:#333
    style RTL fill:#1a1a1e,stroke:#333
\`\`\`

</div>

---

## 4. Logical Mapping Table
| Physical Aspect | Legacy Property | Logical Elite Property |
| :--- | :--- | :--- |
| **Horizontal Start** | \`left\` | \`inline-start\` |
| **Horizontal End** | \`right\` | \`inline-end\` |
| **Vertical Start** | \`top\` | \`block-start\` |
| **Vertical End** | \`bottom\` | \`block-end\` |

---

## 5. Senior Architect's Decision: Future-Proofing
At Nexus, we build systems that are **Direction-Agnostic**. We do not write code twice. By using \`margin-inline-start: 30px\`, we issue a high-level command: *"Provide space at the beginning of the user's reading line."*

The browser detects the user's language via the \`dir="rtl"\` attribute on the HTML tag and reposition the margins automatically. This is **Intelligent Styling**.

---

## 6. Mental Model: The Train Tracks
Think of text as a train.
- **Physical properties** are like saying "Put a station at the West side of the map."
- **Logical properties** are like saying "Put a station at the Departure point."
If the train reverses direction (RTL), the "Departure point" moves, but your instruction remains logically valid.

---

## 7. The Checklist of Global Scalability
- [ ] Replace \`width\` with \`inline-size\`.
- [ ] Replace \`height\` with \`block-size\`.
- [ ] Replace \`text-align: left\` with \`text-align: start\`.
- [ ] Audit all hard-coded \`margin-left/right\` for potential logical replacements.

> [!IMPORTANT]
> **Architecture Note**: Logical properties aren't just for foreign languages. They are also for modern designs where text might flow vertically (as seen in traditional East Asian typography or creative vertical poster layouts).

> [!TIP]
> **Pro Tip**: Cross-browser support for logical properties has been robust since 2018 (Chrome 69+, Safari 12+). There is virtually no risk in adopting these as your primary standard for new high-scale projects.

> [!CAUTION]
> **Mixed Modes**: Avoid mixing physical and logical properties in the same declaration block (e.g., using both \`margin-left\` and \`margin-inline-start\`). This can lead to unpredictable cascading overrides.
`
};
