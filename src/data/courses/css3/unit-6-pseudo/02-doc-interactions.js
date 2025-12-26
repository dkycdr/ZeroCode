import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Interactions = {
    id: 'css-unit6-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Interaction States (The Logic of Behavior)',
    duration: '25 min read',
    content: `
# Deep Dive: Interaction States (The Logic of Behavior)

## 1. The Core Concept: The Interface Conversation
Architect, a static website is a monologue. A world-class interface like the **Nexus AI Console** is a **Dialogue**. When a user moves their mouse, clicks a button, or tabs through a form, the interface must respond instantly to acknowledge their action.

**Pseudo-classes** are the "Sensors" of CSS. They allow you to apply styles based on the *state* of an element—is it being hovered? Is it active? Is it broken?

---

## 2. Visual: The Cycle of a Click
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    L[1. :link / :visited] --> H[2. :hover]
    H --> A[3. :active]
    A --> F[4. :focus]
    
    style H fill:#4cc9f0,stroke:#333
    style A fill:#f72585,stroke:#333
\`\`\`

</div>

---

## 3. The Critical States
1.  **:hover**: When the user's cursor is over the element. Essential for "Affordance" (showing that something is clickable).
2.  **:active**: The exact moment the mouse button is pressed. Provides "Tactile Feedback."
3.  **:focus**: When the element is selected via Keyboard (Tab key). This is the **most important** state for accessibility.
4.  **:focus-within**: A powerful modern state that detects if *any* child of the element has focus. Perfect for highlighting whole form sections.

---

## 4. Machine Logic: The LVHA Ordering
CSS follows the cascade. If you write your interaction states in the wrong order, they won't work. The professional standard is **LVHA**:
- **L**ink
- **V**isited
- **H**over
- **A**ctive
*If you put :hover before :visited, the user won't see the hover effect on links they have already clicked!*

---

## 5. Mental Model: The Door Handle
- **:hover** is the handle glowing when you reach for it.
- **:active** is the "Click" sound as you turn the handle.
- **:focus** is the handle being highlighted by a spotlight so you know which door you are standing in front of.

---

## 6. Senior Architect's Decision: :focus-visible
Traditionally, \`:focus\` adds an outline around buttons when you click them, which some designers hate. 
- **:focus-visible** is the "Smart Focus." 
- It only shows the outline if the user is using a **Keyboard** (Tab). 
- It hides the outline if they are using a **Mouse**. This is the secret to a professional, clean aesthetic that remains 100% accessible.

---

## 7. Form Logic: :required, :valid, :invalid
The Nexus system uses these sensors to provide instant validation.
\`\`\`css
input:invalid {
    border-color: red;
    background: #fee;
}
\`\`\`
This tells the user their data is wrong before they even hit "Submit."

> [!IMPORTANT]
> **Mission Objective**: Feedback Loops. A user should never have to wonder "Did I click that?" or "Where is my cursor?" Every interaction must have a visual reaction.

> [!TIP]
> **Pro Tip**: Use the \`:empty\` pseudo-class to hide notification badges or alerts if they don't have any text inside them. This prevents empty boxes from cluttering your dashboard.

> [!CAUTION]
> **Accessibility Pitfall**: NEVER remove the focus outline (\`outline: none\`) without providing a clearly visible alternative. If a keyboard user loses their focus ring, your website becomes a trap they cannot escape.
`
};
