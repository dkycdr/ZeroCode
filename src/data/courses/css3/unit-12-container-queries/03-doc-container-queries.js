import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3ContainerQueries = {
    id: 'css-unit12-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The @container Rule',
    duration: '35 min read',
    content: `
# Deep Dive: The @container Rule (Responsive Logic)

## 1. The Scenario: The Shape-Shifting Module
Architect, now that you have registered a **Containment Context**, it is time to write the logic that allows your components to react. 

We will use the **\`@container\`** rule. It looks and feels nearly identical to a standard Media Query, but its "Source of Truth" has shifted from the global window to the local parent.

---

## 2. Machine Logic: Syntax & Execution
When you write an \`@container\` block, the browser interrogates the *nearest ancestor* with a declared \`container-type\`.

\`\`\`css
/* 1. The Container */
.nexus-slot {
  container-type: inline-size;
}

/* 2. The Logic */
@container (min-width: 500px) {
  .neural-card {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 30px;
  }
}
\`\`\`

### The Flow of Logic:
If the \`.nexus-slot\` is **600px wide**, the \`.neural-card\` expands into a two-column grid.
If the \`.nexus-slot\` is squeezed into a **300px sidebar**, the card ignores the query and remains in its default stacked (mobile) state.

---

## 3. The Power of "Multiple Contexts"
Because the card responds to the *container*, you can have two identical cards on the same screen that look completely different.
- **Card A** is in the Main Content (Wide Container) -> Looks like a "Desktop" card.
- **Card B** is in the Sidebar (Narrow Container) -> Looks like a "Mobile" card.

**Same Code, Different Realities.**

---

## 4. Visual: Contextual Transformation
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph LR
    subgraph Container_Large ["Layout Slot A (800px)"]
        A["Card Component"] --> B["Layout: Row"]
    end
    
    subgraph Container_Small ["Layout Slot B (300px)"]
        C["Card Component"] --> D["Layout: Stacked"]
    end
    
    style B fill:#4cc9f0,stroke:#333
    style D fill:#f72585,stroke:#333
    style Container_Large fill:#1a1a1e,stroke:#333
    style Container_Small fill:#1a1a1e,stroke:#333
\`\`\`

</div>

---

## 5. Senior Architect's Decision: Granular Control
In the **Nexus Design System**, we use Media Queries for the "Macro-Layout" (how the page behaves) and Container Queries for the "Micro-Layout" (how the component behaves). This separation of concerns allows us to update the global page layout without ever needing to worry about "breaking" the components inside.

---

## 6. Mental Model: The Smart Mirror
- **Media Queries** are like a mirror that shows your reflection based on the size of the room you're in.
- **Container Queries** are like a mirror that adjusts your reflection based on how close you are standing to it. It only cares about the immediate surroundings.

---

## 7. The Checklist of Responsive Precision
- [ ] Establish a base "Mobile-First" style for your component outside the query.
- [ ] Use \`@container\` for layout shifts (Flex/Grid) that depend on available width.
- [ ] Test the component by resizing its *parent* in DevTools, not the entire window.

> [!IMPORTANT]
> **Logic Priority**: A component can be subject to both a Media Query and a Container Query. Usually, the Container Query should handle internal layout while the Media Query handles external positioning.

> [!TIP]
> **Modern Syntax**: You can use the newer range syntax in container queries: \`@container (400px < width < 800px)\`. This is cleaner and more intuitive for Architect-level code.
`
};
