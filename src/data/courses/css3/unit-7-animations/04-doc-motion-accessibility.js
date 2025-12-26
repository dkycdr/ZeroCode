import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4MotionAccessibility = {
    id: 'css-unit7-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Motion Accessibility (Reduced Motion)',
    duration: '35 min read',
    content: `
# Deep Dive: Motion Accessibility (Reduced Motion)

## 1. The Core Concept: Inclusive Kinesis
Architect, for some users, large-scale animations (pulsing, sliding, spinning) can cause physical illness, vertigo, or migraines. As an Elite Architect of the **Nexus Network**, our mission is to ensure everybody can access the data, regardless of their neurological sensitivities.

**Motion Accessibility** isn't about removing all animations; it's about providing a safe alternative for those who need it.

---

## 2. Visual: The Accessibility Handshake
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    OS["User System Setting"] -->|prefers-reduced-motion| CSS["CSS Media Query"]
    CSS -->|Matches| Minimal["Disable or Simplify Motion"]
    CSS -->|No Match| Full["Full Cinematic Experience"]
    
    style Minimal fill:#4cc9f0,stroke:#333
    style Full fill:#f72585,stroke:#333
\`\`\`

</div>

---

## 3. The Media Query: \`prefers-reduced-motion\`
This is a high-level media query that reads the user's Operating System settings (macOS, Windows, iOS, Android).

\`\`\`css
/* The standard motion */
.hero-reveal {
    animation: slideIn 1s cubic-bezier(0.2, 1, 0.3, 1);
}

/* The accessible override */
@media (prefers-reduced-motion: reduce) {
    .hero-reveal {
        animation: none; /* Kill the movement */
        opacity: 1;      /* Ensure it's still visible */
        transition: opacity 0.3s ease; /* Maybe just a gentle fade instead */
    }
}
\`\`\`

---

## 4. Senior Strategy: Motion vs. Meaning
1.  **Decorative Motion**: Spinning backgrounds, parallax, bouncing text. **REDUCE** or **REMOVE**.
2.  **Functional Motion**: A green checkmark appearing after a successful login. **KEEP** but **SIMPLIFY** (e.g., change a "Pop-in" to a "Fade-in").

---

## 5. Machine Logic: The CSS Variable Approach
A professional way to handle this in large systems like Nexus is using CSS Variables:
\`\`\`css
:root {
    --animation-duration: 0.4s;
}

@media (prefers-reduced-motion: reduce) {
    :root {
        --animation-duration: 0s; /* Globally kills all duration */
    }
}

.card {
    transition: transform var(--animation-duration) ease;
}
\`\`\`

---

## 6. Mental Model: The Volume Control
- **Full Motion** is the music playing through loud speakers. It's immersive and exciting.
- **Reduced Motion** is the volume being turned down. The music is still playing (the content is still there), but it doesn't overwhelm the listener's senses.

---

## 7. Senior Architect's Decision: Perspective Motion
Animating properties like \`perspective\` or large \`translateY\` shifts over a large part of the screen is the most common trigger for motion sickness. 
- Avoid full-screen background slides.
- If you use them, always provide a fallback immediately.

---

## 8. Summary Checklist
- [ ] Check contrast ratios for accessibility (Recall Unit 5).
- [ ] Implement \`prefers-reduced-motion\` for all keyframe animations.
- [ ] Use fades (\`opacity\`) as a safe alternative to movements (\`transform\`).
- [ ] Test your UI by enabling "Reduced Motion" in your own computer's settings.

> [!IMPORTANT]
> **Mission Objective**: Ethical Engineering. We build for human beings, not just for browsers. Accessibility is a requirement, never an "Optional Feature."

> [!TIP]
> **Pro Tip**: In Chrome DevTools, you can simulate \`prefers-reduced-motion: reduce\` without changing your system settings. Go to **Rendering** tab -> **Emulate CSS media feature prefers-reduced-motion**.

> [!CAUTION]
> **Safety Warning**: Never use \`animation-duration: 0s\` if your animation is purely used to reveal content. If you set duration to 0, the item might stay hidden (\`opacity: 0\`) forever! Always pair a duration reset with an opacity reset.
`
};
