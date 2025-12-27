import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1CSSOM = {
    id: 'css-unit0-info-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Engine Behind the UI (CSSOM)',
    duration: '15 min read',
    content: `
# Deep Dive: The Engine Behind the UI (CSSOM)

## 1. The Core Concept: How Code Becomes Pixels
Architect, welcome to the Core Engine room. When you write CSS, the browser doesn't just "look" at it and draw a color. It has to translate your human-readable text into a complex mathematical structure it can actually calculate. 

Think of it like a **Blueprint**. You write the instructions, but the browser builds the **3D Model** in its memory before it starts building the actual house. This model is called the **CSS Object Model (CSSOM)**.

---

## 2. Visual: The Pipeline
\`\`\`mermaid
graph LR
    HTML[HTML File] --> DOM[DOM Tree]
    CSS[CSS File] --> CSSOM[CSSOM Tree]
    DOM & CSSOM --> Render[Render Tree]
    Render --> Layout[Layout Calculation]
    Layout --> Paint[Pixel Painting]
    
    style CSSOM fill:#f72585,stroke:#333,stroke-width:2px
    style Render fill:#4cc9f0,stroke:#333,stroke-width:2px
\`\`\`

---

## 3. Machine Logic: The CSSOM Process
The browser follows a very specific sequence to understand your styles:

1.  **Bytes to Characters**: The browser reads your \`.css\` file as raw data.
2.  **Tokens to Nodes**: It breaks the text into recognizable chunks (like "color" or "blue").
3.  **The Tree**: It organizes these chunks into a "Tree" structure. Because styles "cascade" (flow down), a style set on the \`body\` element automatically flows down to every element inside it.

---

## 4. Senior Architect's Brief: Why Should You Care?
- **CSS is Render-Blocking**: This is critical. The browser will refuse to show **anything** (just a white screen) until it has finished building the CSSOM. This ensures users don't see a broken, ugly page for a split second.
- **Complexity Matters**: The more complex your selectors are (e.g., \`div > ul > li > a\`), the harder the browser has to work to find that element and apply the style.

> [!IMPORTANT]
> **Mission Objective**: Efficiency is priority #1. By writing clean, simple CSS, you help the browser render pages faster for millions of Nexus AI users.

> [!TIP]
> **Pro Tip**: You can see this process in action! Open your browser's Developer Tools, go to the **Performance** tab, and look for "Recalculate Style." That is the exact moment the CSSOM is being built.
`
};
