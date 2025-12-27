import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4ResponsiveAuditing = {
    id: 'css-unit14-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Responsive Auditing',
    duration: '25 min read',
    content: `
# Deep Dive: Responsive Auditing (Mobile Excellence)

## 1. The Scenario: The Mobile-First Pivot
Architect, as we finalize the **HyperCar Launch Site**, we must face the data: **70% of car enthusiasts will view this site on a mobile device.** 

A design that looks "Elite" on a 32-inch monitor might feel cramped, slow, or broken on a 6-inch phone screen. We must perform a **Responsive Audit** to ensure the luxury experience translates perfectly across the "Device Spectrum."

---

## 2. Machine Logic: The Refactoring Strategy
When we move to mobile, we don't just "shrink" things. We often change the fundamental layout logic:

1.  **Grid Deconstruction**: Multi-column Bento grids should collapse into a single vertical stream.
2.  **Typography Recalibration**: An \`8rem\` heading is too wide for a phone. We pivot to viewport units or smaller static sizes.
3.  **Interaction Efficiency**: Mouse-hover effects should be disabled or replaced with persistent states, as touchscreens don't have a "hover" state.
4.  **Navigation Simplification**: Complex horizontal links are hidden behind a "Hamburger" or simplified to a single "CTA" (Call to Action).

---

## 3. Visual: Layout Divergence
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    subgraph Desktop ["> 1024px"]
        D1["3-Col Grid"]
        D2["Horizontal Nav"]
        D3["8rem Text"]
    end
    
    subgraph Mobile ["< 768px"]
        M1["1-Col Stack"]
        M2["Sticky Button Only"]
        M3["4rem Text"]
    end
    
    D1 -.-> M1
    D2 -.-> M2
    D3 -.-> M3
    
    style Desktop fill:#1a1a1e,stroke:#333
    style Mobile fill:#1a1a1e,stroke:#333
    style M1 fill:#f72585,stroke:#333
\`\`\`

</div>

---

## 4. Senior Architect's Decision: Touch Targets
In the **Nexus Design System**, mobile excellence is defined by **Thumb-Driven Design**. We ensure that every button (like the "Order Now" button) is at least **48px tall**, providing a large enough hit area for a human thumb to press without error. We also prioritize vertical scrolling over horizontal swiping, as it is the most natural motion for users.

---

## 5. Mental Model: The Transformer
Imagine the Launch Site as a **Transformer**. 
- On Desktop, it's a wide, powerful armored vehicle (Bento Grid, wide nav).
- On Mobile, it transforms into a tall, nimble scout (Single column, simplified nav).
- It's the same machine (the same CSS file), but it changes its orientation to survive in its current environment.

---

## 6. The Checklist of Mobile Polish
- [ ] Reset all \`grid-column: span X\` to \`auto\` inside mobile queries to prevent layout breakage.
- [ ] Audit all \`padding\` and \`margins\`; mobile devices need tighter spacing (e.g., \`20px\` instead of \`100px\`).
- [ ] Verify that \`scroll-snap\` still works correctly with smaller sections.

> [!IMPORTANT]
> **Performance Protocol**: Mobile devices have weaker CPUs. Avoid extremely heavy background images or excessive blur filters if the mobile experience feels "choppy."

> [!TIP]
> **Utility Classes**: Use \`.hidden-mobile\` or \`.hidden-desktop\` utility classes sparingly to hide or reveal component variations designed specifically for that device.
`
};
