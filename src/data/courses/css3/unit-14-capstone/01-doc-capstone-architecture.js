import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1CapstoneArchitecture = {
    id: 'css-unit14-info-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Capstone Architecture',
    duration: '25 min read',
    content: `
# Deep Dive: Capstone Architecture (The Final Boss)

## 1. The Scenario: The Nexus HyperCar Launch
Architect, you have reached the final layer of the **Nexus Design System**. All your previous training—the Box Model, Flexbox, Grid, BEM, Performance, and Logical Properties—is about to be tested in a single, high-fidelity orchestration.

You are tasked with building the official launch site for the **Nexus HyperCar EV**. This isn't just a webpage; it is an immersive, high-performance "Single Page Application" (SPA) style interface that must feel buttery smooth and visually arresting.

---

## 2. Machine Logic: The Component Orchestration
A production-grade landing page is composed of several specialized layers working in harmony:

1.  **The Foundation (Global)**: CSS Variables for typography, spacing, and the "Neon" brand colors.
2.  **The Scroll Engine**: Utilizing \`scroll-snap\` to ensure the user is always perfectly centered on a content section.
3.  **The Visual Layer**: Implementing Glassmorphism, Backdrop-Filters, and Webkit-Strokes for a premium, automotive aesthetic.
4.  **The Layout Layer**: Using Grid "Bento" patterns for technical specs and Flexbox for the adaptive navigation.

---

## 3. Visual: Project Breakdown
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    A["Capstone: HyperCar Launch"]
    A --> B["Phase 1: Immersive Hero (Viewport & Snapping)"]
    A --> C["Phase 2: Data Bento (Grid & Areas)"]
    A --> D["Phase 3: Interactive Nav (Sticky & Hover)"]
    A --> E["Phase 4: Responsive Audit (Mobile Refactoring)"]
    
    style B fill:#4cc9f0,stroke:#333
    style C fill:#4cc9f0,stroke:#333
    style D fill:#4cc9f0,stroke:#333
    style E fill:#f72585,stroke:#333
\`\`\`

</div>

---

## 4. Senior Architect's Decision: Unified Engineering
In this capstone, we move away from "Learning CSS" and toward "Engineering an Interface." Every line of code must serve the user's focus. We will prioritize GPU-accelerated transforms, zero-reflow transitions, and semantic HTML structure to ensure the site is as fast as the car it represents.

---

## 5. Mental Model: The Orchestra
Think of your CSS properties as individual musicians.
- **Flexbox** handles the subtle seating arrangement of the strings.
- **Grid** provides the powerful, rhythmic brass section.
- **Variables** are the sheet music shared by everyone.
- **Animations** are the conductor, bringing the performance to life.

---

## 6. The Checklist of Excellence
- [ ] Establish a strict \`:root\` system before writing a single layout rule.
- [ ] Use BEM namespacing (\`hypercar-header\`, \`spec-card\`) to prevent scope leakage.
- [ ] Optimize all images and gradients for high-DPI displays.

> [!IMPORTANT]
> **Technical Requirement**: The capstone must achieve a 100/100 performance score in Lighthouse. Avoid expensive properties like \`filter\` on non-accelerated layers.

> [!TIP]
> **Architecture First**: Before coding, spend 5 minutes visualizing how the grid will collapse on a mobile screen. This "Mental Debugging" saves hours of refactoring later.
`
};
