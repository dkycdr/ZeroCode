import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3UtilityVsComponent = {
    id: 'css-unit9-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Utility vs Component Logic',
    duration: '35 min read',
    content: `
# Deep Dive: Utility vs Component Logic

## 1. The Core Concept: The Great Technical Schism
Architect, in the world of modern engineering, a "Battle of Faith" exists regarding how to write CSS. 
1.  **Component-First (BEM)**: Believes CSS should describe **What it is** (Semantics).
2.  **Utility-First (Tailwind style)**: Believes CSS should describe **What it does** (Function).

At **Nexus AI**, we do not choose sides blindly. A Senior Architect must master both ideologies and know which tool to draw for which problem.

---

## 2. Machine Logic: The Comparison Matrix

| Feature | Component-First (BEM) | Utility-First (Atomic) |
| :--- | :--- | :--- |
| **Focus** | Reusable Molecules | Single-purpose atoms |
| **Example** | \`.user-card { ... }\` | \`.p-4 .bg-white .rounded\` |
| **HTML Quality** | Pristine / Semantic | "Class Soup" / Complex |
| **Refactor Speed** | High (Edit 1 CSS file) | Low (Edit many HTML tags) |
| **Design Speed**| Moderate (Switch contexts) | Rapid (Stay in HTML) |

---

## 3. Visual: Efficiency Models
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    subgraph Component_Model ["Component Logic: Definition -> Instances"]
        C1["Definition: .card"] --> C2["Instance A"]
        C1 --> C3["Instance B"]
        C1 --> C4["Instance C"]
    end
    
    subgraph Utility_Model ["Utility Logic: Composition -> Node"]
        U1["Node (HTML Element)"]
        U1 --> U2[".p-4 (Padding)"]
        U1 --> U3[".bg-cyan (Background)"]
        U1 --> U4[".uppercase (Type)"]
    end
    
    style Component_Model fill:#1a1a1e,stroke:#4cc9f0
    style Utility_Model fill:#1a1a1e,stroke:#f72585
\`\`\`

</div>

---

## 4. The Nexus AI Strategy: The Hybrid Architecture
The most intelligent strategy for a Senior Architect is the **Hybrid Approach**.

1.  **Use Components (BEM)** for high-level "Organisms" that repeat frequently (Buttons, Cards, Inputs, Modals).
2.  **Use Utilities** for one-off spacing adjustments and micro-layout corrections (Margins, Text alignment, Display toggles).

**Example of Senior Hybrid Logic:**
\`\`\`html
<!-- BEM for structure + Utility for situational spacing -->
<div class="profile-card mt-10"> 
    <h2 class="profile-card__name text-center">Senior Architect</h2>
</div>
\`\`\`

---

## 5. Mental Model: The Pre-Fabricated House
- **Component-First** is buying a pre-built kitchen module. It’s high quality, and if you want to change the cabinet color, you do it at the factory.
- **Utility-First** is building a kitchen from individual bricks and planks. It takes more time to manage each brick, but you have infinite flexibility to make every shelf a different size.

---

## 6. Senior Architect's Guidance: Cognitive Load
Your primary consideration shouldn't be "typing speed," but **Cognitive Load**. 
- If your team has to memorize 5,000 utility classes to build a single page, you might be over-complicating. 
- If your team has to navigate 50 nested CSS files to change a font size, you are also over-complicating. 
The Nexus standard is to find the point of highest maintainability.

---

## 7. The Checklist of Methodology
- [ ] Use BEM to build a **Shared UI Library** (Core Design System).
- [ ] Use Utilities for rapid **Prototyping** and situational layout fixes.
- [ ] Never mix the logic (Avoid \`.p-4__title\`). Keep utilities as standalone classes.

> [!IMPORTANT]
> **Industrial Consistency**: Whatever methodology you choose, consistency is the priority. Mixing two styles randomly without a clear rulebook is a recipe for a **Maintenance Nightmare**.

> [!TIP]
> **Pro Tip**: Use the **"Refactor Signal"**. If you see 10 elements using the exact same set of 8 utility classes, that is a clear signal that those styles should be extracted into a single BEM component.

> [!CAUTION]
> **Performance Pitfall**: While Utility CSS generates smaller final bundles, it can make your HTML significantly larger. For extremely large pages, "Class Soup" can actually affect parsing performance.
`
};
