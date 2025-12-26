import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3TransitionsAnimations = {
    id: 'css-unit7-info-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Transitions vs. Keyframes',
    duration: '35 min read',
    content: `
# Deep Dive: Transitions vs. Keyframes

## 1. The Core Concept: Passive vs. Active Motion
Architect, in the **Nexus AI Engine**, we have two ways to create motion. 
1.  **Transitions**: "A to B" motion. Reacts when a property *changes*.
2.  **Animations (Keyframes)**: "A to B to C to D" motion. Moves *autonomously* without needing a user to trigger a change.

Choosing the wrong tool for the job leads to messy, unreadable CSS.

---

## 2. Visual: The Motion Logic Path
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    Trigger{"Is it user triggered?"}
    Trigger -->|Yes| T["Use Transitions"]
    Trigger -->|No| A["Use @keyframes"]
    
    T --> Simple["State change: Hover/Focus"]
    A --> Complex["Complex loops or multi-step"]
    
    style T fill:#4cc9f0,stroke:#333
    style A fill:#f72585,stroke:#333
\`\`\`

</div>

---

## 3. The Transition Engine (A -> B)
Optimal for interaction feedback.
\`\`\`css
.nav-link {
    transition: color 0.3s ease, transform 0.3s ease-out;
}
\`\`\`
- **Constraint**: You cannot "Loop" a transition. It only happens once when the state changes.
- **Strength**: Smoothly handles "Interruption." If the user moves their mouse away halfway through the transition, the browser reverses it naturally.

---

## 4. The Keyframe Engine (A -> B -> C)
The \`@keyframes\` rule defines the "Timeline" of the animation.
\`\`\`css
@keyframes pulse {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 0.5; }
}

.status-ring {
    animation: pulse 2s infinite ease-in-out;
}
\`\`\`
- **Strength**: Can create infinite loops and complex multi-stage movement.
- **Weakness**: Does not handle interruption as gracefully as transitions.

---

## 5. Machine Logic: The Shorthand Syntax
To keep the Nexus stylesheet clean, Senior Architects use shorthands:
- **Transition**: \`property | duration | timing | delay\`
- **Animation**: \`name | duration | timing | delay | iteration | direction | fill-mode\`

---

## 6. Mental Model: The Elastic Band vs. The Movie
- **Transition** is an elastic band. You pull it (The Mouse), and it stretches. You let go, and it snaps back.
- **Animation** is a movie tape. Once you hit play, it follows its pre-determined track frame by frame.

---

## 7. Senior Architect's Decision: \`animation-fill-mode\`
This is a critical property that beginners often ignore.
- **none**: The element snaps back to its original state immediately after the animation ends.
- **forwards**: The element stays in its final animated state.
- **backwards**: The element applies the first frame's styles before the animation even starts (during the delay).
- **both**: Combines both behaviors. (The Nexus Standard for loaders).

---

## 8. Summary Table
| Feature | Transitions | Keyframe Animations |
| :--- | :--- | :--- |
| **Complexity** | Simple (A to B) | High (Infinite stages) |
| **Triggers** | Pseudoclasses (:hover, etc) | On page load or logic change |
| **Looping** | Not possible | Infinite or specific count |
| **Maintenance** | Very Low | Moderate |

> [!IMPORTANT]
> **Mission Objective**: Efficiency. Use transitions for 90% of your interactions. Reserve @keyframes for loaders, ambient status effects, and entrance animations.

> [!TIP]
> **Pro Tip**: You can trigger a CSS Animation using JavaScript by simply adding a class to an element. \`element.classList.add('animate-reveal')\`. This is the professional way to sync motion with logic.

> [!CAUTION]
> **Logic Pitfall**: Don't use \`transition: all\`. This forces the browser to check *every* property for changes. Be specific: \`transition: transform 0.2s, opacity 0.2s\`.
`
};
