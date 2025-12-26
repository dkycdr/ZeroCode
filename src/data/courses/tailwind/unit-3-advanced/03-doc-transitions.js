import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Transitions = {
    id: 'tailwind-3-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Physics & Timing ⏱️',
    duration: '15 min read',
    content: `
# Deep Dive: Physics & Timing ⏱️

## 1. The "Uncanny Valley" of UI
Instant changes feel robotic and cheap.
Real objects don't teleport; they accelerate and decelerate.
Use \`transition\` to add physics to your UI.

## 2. Three Keys to Physics
1.  **Property**: What changes? (\`transition-colors\`, \`transition-transform\`).
2.  **Duration**: How long? (\`duration-200\` = 200ms).
3.  **Easing**: How does it move? (\`ease-out\`).

---

## 3. The Easing Cheatsheet
| Curve | Feel | Use For |
| :--- | :--- | :--- |
| **ease-out** | Fast start, slow end | **Entering** view (Modals, Dropdowns) |
| **ease-in** | Slow start, fast end | **Exiting** view (Deleting items) |
| **linear** | Robotics | Spinners, Loaders |

\`\`\`html
<button class="transform transition-transform duration-200 ease-out hover:scale-110">
  Pop!
</button>
\`\`\`
    `
};
