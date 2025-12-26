import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Inheritance = {
    id: 'css-unit0-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Bloodlines (Inheritance)',
    duration: '15 min read',
    content: `
# Deep Dive: Bloodlines (Inheritance)

## 1. The Core Concept: The Genetic Flow
Inheritance is the magic that allows a "Child" element to automatically receive styles from its "Parent" without you having to write a single extra line of code. It’s the "C" in **CSS** (Cascading Style Sheets).

Imagine you set the hair color of a Father—his children automatically get that same hair color unless they decide to dye it themselves later.

---

## 2. Visual: The Family Tree
\`\`\`mermaid
graph TD
    Parent[Parent: body { color: green }]
    Parent --> Child1[Child: section]
    Parent --> Child2[Child: div]
    Child1 --> GrandChild[GrandChild: p]
    
    style Parent fill:#4cc9f0,stroke:#333
    style GrandChild fill:#d4edda,stroke:#155724
\`\`\`
*Green color flows naturally from the Body down to the Paragraph.*

---

## 3. Machine Logic: What Flows?
Not all styles are shared. Browser designers were smart:
- **Inherited Styles**: Mostly related to text. Properties like \`color\`, \`font-family\`, and \`text-align\`. If you set a font on the \`body\`, your whole website will follow it.
- **Non-Inherited Styles**: Related to layout. Properties like \`margin\`, \`padding\`, \`border\`, and \`width\`. Imagine the chaos if setting a border on the \`body\` gave a border to every single paragraph.

---

## 4. Senior Architect's Brief: Efficiency
Use inheritance to your advantage. Don't repeat yourself (DRY). If you want to change the color of every piece of text on your dashboard, just change it at the highest level (the parent).

> [!IMPORTANT]
> **Mission Objective**: Understanding inheritance helps you avoid "CSS Bloat"—writing hundreds of lines of redundant code that the browser was already going to give you for free.

> [!TIP]
> **Pro Tip**: You can force a non-inherited property to follow its parent by using the \`inherit\` keyword (e.g., \`border: inherit;\`).
`
};
