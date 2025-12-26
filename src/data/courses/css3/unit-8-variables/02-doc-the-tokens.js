import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2TheTokens = {
    id: 'css-unit8-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Design Tokens (Semantic Architecture)',
    duration: '25 min read',
    content: `
# Deep Dive: Design Tokens (Semantic Architecture)

## 1. The Core Concept: Language of Intent
Architect, a common mistake in small projects is naming variables based on what they *look like* (e.g., \`--blue\`). In the **Nexus AI Design System**, we name variables based on what they *do*. This is called **Semantic Naming**.

If you name a variable \`--blue\`, and the client changes the brand to green, your code becomes a lie. If you name it \`--color-primary\`, the code stays true even if the color changes.

---

## 2. Visual: The Token Hierarchy
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    Primitive["1. Primitive: --blue-500"] --> Semantic["2. Semantic: --color-action"]
    Semantic --> Component["3. Component: --btn-bg"]
    
    style Primitive fill:#111,stroke:#eee
    style Semantic fill:#4cc9f0,stroke:#333
    style Component fill:#f72585,stroke:#333
\`\`\`

</div>

---

## 3. Tier 1: Primitive Tokens (The Paint)
These are your raw values. They describe the palette.
\`\`\`css
:root {
    --blue-100: #e3f2fd;
    --blue-500: #2196f3;
    --blue-900: #0d47a1;
}
\`\`\`

---

## 4. Tier 2: Semantic Tokens (The Purpose)
These map the paint to a function. This is where you switch colors for Dark Mode.
\`\`\`css
:root {
    --bg-app: var(--blue-900);
    --text-main: white;
    --border-dim: rgba(255,255,255,0.1);
}
\`\`\`

---

## 5. Tier 3: Component Tokens (The Specifics)
The ultimate level of control. Every component (Button, Card, Input) gets its own tokens that point to the semantic tier.
\`\`\`css
.nexus-button {
    --button-bg: var(--color-action);
    --button-pad: 12px 24px;
    
    background: var(--button-bg);
    padding: var(--button-pad);
}
\`\`\`

---

## 6. Mental Model: The Library Catalog
- **Primitive** is the ink.
- **Semantic** is the book title.
- **Component** is the specific page and line of text.
If you need to change the story, you change the page (Component), but the ink (Primitive) remains in the bottle ready for other books.

---

## 7. Senior Architect's Guidance: The "Safety" Fallback
In the Nexus system, we never use the primitive token directly in a component. We always go through the Semantic layer.
- **Why?** Because when we implement **Dark Mode** (Unit 8 Lab 2), we only have to change the Semantic layer, and every component in the system will follow automatically.

---

## 8. Summary Checklist
- [ ] Never name a variable based on its hex value (\`--red\`).
- [ ] Use a prefix for component variables (\`--card-\`, \`--nav-\`).
- [ ] Group your tokens logically (Colors, Spacing, Typography).
- [ ] Standardize your numeric scale (e.g., \`--space-1\`, \`--space-2\`).

> [!IMPORTANT]
> **Mission Objective**: Communication. A new developer joining the Nexus project should be able to read your variables and understand exactly where they should be used.

> [!TIP]
> **Pro Tip**: Use HSL for your primitive tokens. It allows you to create "Shades" (\`--blue-500\`, \`--blue-400\`) by only changing the Lightness value, which is much more efficient than picking hex codes.

> [!CAUTION]
> **Logic Pitfall**: Don't over-tokenize. You don't need a variable for every single \`margin: 2px\`. Only tokenize values that repeat or are part of the core brand identity.
`
};
