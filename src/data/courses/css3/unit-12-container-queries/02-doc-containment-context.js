import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2ContainmentContext = {
    id: 'css-unit12-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Defining The Context',
    duration: '35 min read',
    content: `
# Deep Dive: Defining The Context (Container Registration)

## 1. The Scenario: The Invisible Boundary
Architect, before a component can query how much space it has, a parent element must "raise its hand" and announce itself as a **Container**. By default, the browser doesn't calculate the dimensions of every element in the background for querying (as this would be a performance disaster).

We must explicitly declare a **Containment Context** on the parent.

---

## 2. Machine Logic: The \`container-type\`
To register a container in the **Nexus AI Dashboard**, we use the \`container-type\` property.

\`\`\`css
.nexus-sidebar {
    /* "I am a container. My children can query my horizontal size." */
    container-type: inline-size;
}
\`\`\`

### Available Modes:
1.  **inline-size (Elite Standard)**: The container calculates its width along the inline axis. This is the most common and robust mode for responsive layouts.
2.  **size**: The container calculates both width AND height. **Warning**: This can be dangerous as it stops the container from growing naturally with its content (intrinsic sizing).

---

## 3. The Naming Protocol: \`container-name\`
If you have nested containers, a child element might accidentally query its immediate parent when you actually wanted it to query a distant grandparent. To solve this, we provide a **Namespace**.

\`\`\`css
.main-layout {
    container-type: inline-size;
    container-name: dashboard;
}

.card {
    /* Specific query to the dashboard container, skipping closer contexts */
    @container dashboard (min-width: 700px) { ... }
}
\`\`\`

---

## 4. Visual: The Containment Tree
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    A["Parent: .wrapper [container-type: inline-size]"] 
    A --> B["Child: .card"]
    B --> C["@container (min-width: 300px)"]
    
    style A fill:#4cc9f0,stroke:#333
    style B fill:#1a1a1e,stroke:#333
    style C fill:#f72585,stroke:#333
\`\`\`

</div>

---

## 5. Senior Architect's Decision: Explicit Contexts
In a professional design system, we don't turn every \`div\` into a container. We only designate key structural boundaries (Grid columns, Sidebar slots, Modal bodies) as containers. This maintains high rendering performance while providing all the contextual data our components need.

---

## 6. Mental Model: The Surveillance Camera
- **Standard Elements** are "blind." They have no idea how big they are compared to their neighbors.
- **Containers** are elements that have had a "Surveillance Camera" (Containment Context) installed. They constantly monitor their own boundaries so they can report back to any inquisitive children inside.

---

## 7. The Checklist of Precision
- [ ] Assign \`container-type\` to the element *wrapping* your component, not the component itself.
- [ ] Prefer \`inline-size\` to ensure vertical flexibility remains intact.
- [ ] Use \`container-name\` if your architecture contains multiple layers of nested containment.

> [!IMPORTANT]
> **Performance Note**: The browser's layout engine works slightly harder for containment contexts. Only register containers where strictly necessary for responsive logic.

> [!TIP]
> **Pro Tip**: Use the **Container Query** debugger in Chrome DevTools (Elements panel) to visualize which elements are acting as containers in your live view.
`
};
