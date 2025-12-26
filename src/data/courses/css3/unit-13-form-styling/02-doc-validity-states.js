import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2ValidityStates = {
    id: 'css-unit13-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Validity State Machines',
    duration: '35 min read',
    content: `
# Deep Dive: Validity State Machines (CSS Validation)

## 1. The Scenario: Zero-JS Validation
Architect, in the **Nexus AI Authentication** layer, we need real-time feedback for user input. Many developers reach for heavy JavaScript libraries to show a red border on an invalid email address. 

A Senior Architect knows that CSS has a built-in "State Machine" that monitors the health of an input without a single line of script. 

---

## 2. Machine Logic: The Validity Hooks
The browser engine constantly evaluates inputs based on their HTML5 attributes (e.g., \`type="email"\`, \`required\`, \`minlength\`). You can hook into these evaluations using pseudo-classes:

- **\`:valid\`**: Matches when the value satisfies all criteria.
- **\`:invalid\`**: Matches when the value fails (e.g., an email missing an "@" symbol).
- **\`:placeholder-shown\`**: Matches when the input is empty and the placeholder is visible.
- **\`:focus-within\`**: Powerfull hook applied to a *parent* container when the input inside it is active.

---

## 3. The Professional Multi-State Pattern
Showing a red border the moment a user starts typing is a "Negative UX" pattern. We use combining selectors to create intelligence.

\`\`\`css
/* Only show error if the user has typed something AND it is invalid */
input:not(:placeholder-shown):invalid {
    border-color: #f72585; /* Neon Pink Error */
    background-color: rgba(247, 37, 133, 0.05);
}
\`\`\`

---

## 4. Visual: Validation Flowchart
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    A["User Inputs Data"] --> B{Value Valid?}
    B -- Yes --> C[":valid state"]
    B -- No --> D{Empty?}
    D -- Yes --> E[":placeholder-shown"]
    D -- No --> F[":invalid state"]
    
    style C fill:#4cc9f0,stroke:#333
    style F fill:#f72585,stroke:#333
    style E fill:#444,stroke:#333
\`\`\`

</div>

---

## 5. Senior Architect's Decision: Seamless Feedback
In the **Nexus Network**, form feedback must be instantaneous but subtle. We use \`:valid\` to show a small green checkmark once a difficult requirement (like a complex password) is met. This provides positive reinforcement to the user, guiding them toward successful submission without intrusive popups or blocking JavaScript calls.

---

## 6. Mental Model: The Traffic Light
- **:placeholder-shown** is the "Neutral" state. No cars (data) are at the intersection yet.
- **:valid** is the "Green Light." The data is safe to proceed to the database.
- **:invalid** is the "Red Light." Stop, correct the data before moving forward.

---

## 7. The Checklist of Smart Forms
- [ ] Use semantic HTML types (\`email\`, \`tel\`, \`url\`) to trigger correct validity rules.
- [ ] Implement \`:focus-within\` on form groups to highlight the entire card when a user is typing.
- [ ] Pair \`:invalid\` with \`transition\` for smooth visual feedback.

> [!IMPORTANT]
> **Logic Protocol**: CSS validity is for visual feedback (UX), but it is NOT a replacement for backend security. Never trust CSS/HTML validation for actual data processing—always verify on the server.

> [!TIP]
> **The Checkmark Reveal**: Use the \`+\` (sibling) or \`~\` (general sibling) selector to show a "Checkmark" icon only when the preceding input matches \`:valid\`.
`
};
