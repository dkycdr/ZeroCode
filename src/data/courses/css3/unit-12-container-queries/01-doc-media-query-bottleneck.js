import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1MediaQueryBottleneck = {
    id: 'css-unit12-info-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Media Query Bottleneck',
    duration: '25 min read',
    content: `
# Deep Dive: The Media Query Bottleneck

## 1. The Scenario: The Broken Card Problem
Architect, imagine you have engineered a beautiful "Feature Card" component. Using traditional \`@media\` queries, you've optimized it for mobile (stacked) and desktop (horizontal).

Today, you decide to place this card inside a narrow **Sidebar** on the desktop version of the **Nexus Dashboard**.

**The Failure**: The browser window is 1440px wide (Desktop), so the Media Query tells the card: *"You are on a desktop, render yourself in Horizontal Mode!"*. But the Sidebar is only 300px wide. The card attempts to expand horizontally, shattering the sidebar's layout and overflowing the screen.

---

## 2. Machine Logic: Viewport vs. Context
Traditional Responsive Design is **Viewport-Centric**. It assumes that the size of the window dictates the size of your components.

In a modern, modular architecture, this assumption is fundamentally flawed. A component doesn't care how big the global window is; it only cares how much space its **Direct Parent** provides.

---

## 3. Visual: The Bottleneck Visualized
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    subgraph Viewport_1440px ["Global Viewport: 1440px (Desktop)"]
        A["Main Content Area (1100px)"]
        B["Sidebar (300px)"]
    end
    
    A --> C["Card: Horizontal Layout (Correct)"]
    B --> D["Card: Horizontal Layout (BROKEN)"]
    
    style D fill:#f72585,stroke:#333
    style C fill:#4cc9f0,stroke:#333
    style Viewport_1440px fill:#1a1a1e,stroke:#333
\`\`\`

</div>

---

## 4. The Elite Solution: Container Queries
**Container Queries** allow an element to query its parent container's dimensions instead of the global viewport.

This allows us to build **True Portable Components**. A card can now internalize its own responsiveness:
- *"If my parent is > 400px, I will be a Horizontal Card."*
- *"If my parent is < 400px, I will be a Stacked Card."*

This card will now look perfect in a mobile viewport, a desktop sidebar, or a narrow column in a grid—without you ever writing a single media query for it.

---

## 5. Senior Architect's Decision: Absolute Portability
By adopting Container Queries, you move from "Page-Based Design" to "Component-Based Engineering." Your UI library becomes a set of autonomous units that can be dropped into any layout slot in the **Nexus Network** and automatically provide the optimal visual density.

---

## 6. Mental Model: The Liquid Bottle
- **Media Queries** are like deciding how to pour water based on the size of the room you are in.
- **Container Queries** are like the water automatically taking the shape of whatever bottle (container) it is poured into. 

---

## 7. The Checklist of Component Autonomy
- [ ] Identify components that appear in multiple contextual sizes (cards, headers, nav-bars).
- [ ] Replace viewport-dependent logic with container-dependent logic using \`@container\`.
- [ ] Ensure the parent container has a defined **Containment Context** (covered in the next dive).

> [!IMPORTANT]
> **Architecture Note**: Container Queries represent the "Missing Piece" of the original Responsive Design prophecy. They enable the dream of truly reusable, drop-in components that are context-aware.

> [!TIP]
> **Pro Tip**: You don't have to choose one or the other. Use Media Queries for the global layout (the grid/sidebar structure) and Container Queries for the components living inside that structure.
`
};
