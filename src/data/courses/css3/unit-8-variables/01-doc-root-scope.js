import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1RootScope = {
    id: 'css-unit8-info-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Root Scope & Custom Properties',
    duration: '25 min read',
    content: `
# Deep Dive: The Root Scope & Custom Properties

## 1. The Core Concept: Centralized Intelligence
Architect, in a massive project like the **Nexus AI Dashboard**, manually changing the "Cyan" color across 500 CSS files is impossible. We need a way to store values once and reuse them everywhere. 

**CSS Variables** (officially known as **Custom Properties**) allow you to define "Tokens" of data. When you change the token at the top of your stylesheet, the entire interface updates instantly.

---

## 2. Visual: The Inheritance Waterfall
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    Root[":root (Global Scope)"] --> Dashboard[".dashboard-shell"]
    Dashboard --> Sidebar[".sidebar"]
    Dashboard --> Content[".main-view"]
    
    style Root fill:#4cc9f0,stroke:#333
    style Dashboard fill:#111,stroke:#eee
\`\`\`

</div>

---

## 3. The \`:root\` Protocol
The \`:root\` pseudo-class represents the highest possible level in your HTML (the \`<html>\` tag). By defining variables here, you make them available to **every** element on your site.

\`\`\`css
:root {
    --nexus-primary: #4cc9f0;
    --nexus-background: #05050a;
    --font-base: 16px;
}
\`\`\`

---

## 4. Machine Logic: The \`var()\` function
To use a variable, you wrap the name in the \`var()\` function.
\`\`\`css
.button {
    background-color: var(--nexus-primary);
    /* Fallback Logic */
    color: var(--button-text, white); 
}
\`\`\`
- **Fallback**: The second value inside \`var()\` is used if the variable itself is missing or broken. This is "Defensive CSS" for the Nexus engine.

---

## 5. Mental Model: The Shipping Container
- **Standard CSS** is like loose cargo on a ship. To change it, you have to move every piece individually.
- **CSS Variables** are shipping containers. You label the container (\`--primary-color\`). If you want to change the content, you just swap what's inside the container, and the ship carries it to every destination automatically.

---

## 6. Senior Architect's Guidance: Scope Overriding
Variables follow the **Cascade**. You can redefine a global variable inside a specific component to "Override" its value locally.
\`\`\`css
:root { --accent: blue; }

.warning-panel {
    --accent: red; /* Only this panel and its children see 'red' */
}

.title { color: var(--accent); }
\`\`\`
This allows for powerful "Theming" without creating hundreds of extra classes.

---

## 7. The Performance Paradox
Unlike SASS variables (which are deleted when you compile your code), CSS Variables live in the browser's memory.
- **Benefit**: They can be changed in real-time (by JS or media queries).
- **Caution**: Don't put thousands of variables on the \`*\` (universal) selector, as it can slow down the browser's style calculation. Always stick to \`:root\` or specific components.

> [!IMPORTANT]
> **Mission Objective**: Maintenance Sovereignty. Your goal is to be able to change the entire brand color of the Nexus platform in under 5 seconds by editing a single line of code.

> [!TIP]
> **Pro Tip**: You can use variables inside other variables! 
> \`--button-bg: var(--nexus-primary);\`. This creates a link between your "Brand Color" and your "UI Component," making the design system even more robust.

> [!CAUTION]
> **Logic Pitfall**: Variable names are **Case Sensitive**. \`--Nexus-Primary\` is not the same as \`--nexus-primary\`. Always use lowercase and hyphens for professional consistency.
`
};
