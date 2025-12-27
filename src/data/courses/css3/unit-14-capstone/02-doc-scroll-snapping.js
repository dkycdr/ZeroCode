import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2ScrollSnapping = {
    id: 'css-unit14-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Scroll Snapping',
    duration: '25 min read',
    content: `
# Deep Dive: Scroll Snapping (Viewport Engineering)

## 1. The Scenario: The App-Like Experience
Architect, for the **HyperCar Launch Site**, we want to move away from the traditional "infinite scroll" feeling of a blog. We want each section—Hero, Specs, Gallery—to feel like a distinct "Slide" that the user snaps to.

In the past, this required complex JavaScript scroll listeners. Today, we can achieve this with **CSS Scroll Snap**, which is smoother, more performant, and works natively with trackpads and touchscreens.

---

## 2. Machine Logic: The Container/Child Contract
Scroll snapping is a relationship between a **Scroll Container** (usually \`html\` or a \`main\` wrapper) and its **Snap Children**.

### The Container Settings:
\`\`\`css
html {
  /* 1. Force the scroll to happen on the Y axis */
  overflow-y: scroll;
  
  /* 2. Define the 'Snap Type' (Axis and Strictness) */
  scroll-snap-type: y mandatory;
}
\`\`\`
- **mandatory**: The browser *must* snap to a child. The user cannot stop in the middle.
- **proximity**: The browser only snaps if the user gets close to an edge.

### The Child Settings:
\`\`\`css
section {
  /* Define WHICH part of the child snaps to the container */
  scroll-snap-align: start;
}
\`\`\`

---

## 3. Visual: The Snap Cycle
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    A["User Scrolls Down"] --> B{Near Section Edge?}
    B -- Yes --> C["Snap! (Auto-align to Start)"]
    B -- No --> D["Normal Inertial Scroll"]
    
    style C fill:#4cc9f0,stroke:#333
    style A fill:#1a1a1e,stroke:#333
\`\`\`

</div>

---

## 4. Senior Architect's Decision: UX over Friction
While Scroll Snapping is visually impressive, it can be frustrating if misused. We only apply \`mandatory\` snapping when the content of each section is designed to fill exactly **100vh** (Full Viewport). This ensures the user always sees the complete "Story" we are trying to tell without information being cut off by the browser chrome.

---

## 5. Mental Model: The Magnet
- **The Container** is the refrigerator door. 
- **The Children** are magnets.
- **scroll-snap-type: mandatory** is a super-powerful magnet. As soon as you move a magnet near the door, it "clicks" into place. You can't leave it hovering an inch away.

---

## 6. The Checklist of Viewport Precision
- [ ] Set \`scroll-behavior: smooth;\` for an even better experience when using anchor links.
- [ ] Ensure sections use \`height: 100vh;\` (or \`100dvh\` for mobile) to prevent gaps.
- [ ] Check accessibility: Ensure users with scroll-sensitivity have an option to disable snapping (or use \`proximity\` as a safer middle ground).

> [!IMPORTANT]
> **Mobile Chrome Bug**: On mobile, the browser address bar resizing can break \`100vh\`. Use **\`100svh\`** (Small Viewport Height) or **\`100dvh\`** (Dynamic Viewport Height) for a more robust mobile experience.

> [!TIP]
> **Snap Stop**: Use \`scroll-snap-stop: always;\` to prevent users from "skipping" sections if they flick their mouse wheel too fast.
`
};
