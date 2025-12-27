import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Overflow = {
    id: 'css-unit1-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Controlling the Spill (Overflow)',
    duration: '15 min read',
    content: `
# Deep Dive: Controlling the Spill (Overflow)

## 1. The Core Concept: Container Limits
If you pour 2 liters of water into a 1-liter bottle, it spills. In web development, if your content is larger than the box containing it, it "spills" outside. The \`overflow\` property is your control valve for these situations.

---

## 2. Visual: Containment Modes
\`\`\`mermaid
graph TD
    Content[Large Data Flux] --> Container{Target Box}
    Container -->|Visible| V[Spills Out: Default]
    Container -->|Hidden| H[Cut Off: Invisible]
    Container -->|Scroll| S[Adds Scrollbars]
    Container -->|Auto| A[Scrollbar only if needed]
    
    style H fill:#f8d7da,stroke:#721c24
    style A fill:#d4edda,stroke:#155724
\`\`\`

---

## 3. Machine Logic: Controlling the Axis
You can control the spill on specific directions:
- \`overflow-inline\` (\`overflow-x\`): Controls horizontal spills (necessary for wide data tables).
- \`overflow-block\` (\`overflow-y\`): Controls vertical spills (necessary for chat boxes or logs).

---

## 4. Senior Architect's Brief: Design Cleanliness
Use \`overflow: hidden\` for elements with animations to prevent items from peeking out prematurely. Use \`overflow-y: auto\` for dashboard areas where data may grow beyond the initial view.

> [!IMPORTANT]
> **Mission Objective**: Never allow an unintentional horizontal scroll on your main page. It is a sign of an unoptimized layout.

> [!TIP]
> **Pro Tip**: Use \`overflow-wrap: break-word\` if your box contains long machine logs or URLs that might pierce through container boundaries.
`
};
