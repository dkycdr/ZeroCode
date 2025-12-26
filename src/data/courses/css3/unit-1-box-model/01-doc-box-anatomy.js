import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1BoxAnatomy = {
    id: 'css-unit1-info-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Anatomy of a Box (The 4 Layers)',
    duration: '15 min read',
    content: `
# Deep Dive: Anatomy of a Box (The 4 Layers)

## 1. The Core Concept: Everything is a Rectangle
Architect, inside browser engines like **Blink** (Chrome) or **WebKit** (Safari), every element is a rectangle. Even if you see a circle, it is actually a square box with its corners clipped by a radius. Mastering this logic is the first step toward advanced layout architecture.

---

## 2. Visual: The Spatial Layers
Imagine a box as a house with a yard and a fence:
\`\`\`mermaid
graph TD
    Margin[Margin: The Yard - Outside space] --> Border[Border: The Fence - Physical wall]
    Border --> Padding[Padding: The Porch - Inside space]
    Padding --> Content[Content: The House - Where the data lives]
    
    style Content fill:#4cc9f0,stroke:#333
    style Padding fill:#f72585,stroke:#333
    style Border fill:#4895ef,stroke:#333
    style Margin fill:#fff,stroke:#ccc,stroke-dasharray: 5 5
\`\`\`

---

## 3. The Modern Shift: Physical vs. Logical
Traditional CSS uses **Physical Properties** (Top, Bottom, Left, Right). However, senior architects at Nexus AI use **Logical Properties** (Block, Inline).

- **Block Axis**: The direction in which blocks are stacked (usually top-to-bottom).
- **Inline Axis**: The direction in which text flows (usually left-to-right).

| Physical | Logical | Analogy |
| :--- | :--- | :--- |
| **Top / Bottom** | **Block-Start / Block-End** | The floors of a building. |
| **Left / Right** | **Inline-Start / Inline-End** | The words on a page. |

---

## 4. Machine Logic: The Painting Order
The browser paints these layers from the inside out:

1.  **Content**: Where your text or images sit.
2.  **Padding**: The breathing room inside the box. It shares the same background color as the content.
3.  **Border**: The physical line around the padding. It consumes physical space in the layout.
4.  **Margin**: The force field around the outside. It pushes other boxes away and is always transparent.

---

## 5. Senior Architect's Brief: Flow-Relative Spacing
By using logical properties like \`margin-block-start\` instead of \`margin-top\`, your layout automatically adapts if the system switches to a Right-to-Left (RTL) language or a vertical writing mode.

> [!IMPORTANT]
> **Mission Objective**: Understanding this anatomy prevents common beginner issues such as unexpected box dimensions. Always prefer Logical Properties for future-proof designs.

> [!TIP]
> **Pro Tip**: Use the **DevTools Computed Tab**. It provides a colored map of any element's Box Model, showing precisely where every pixel of padding and margin is located.
`
};
