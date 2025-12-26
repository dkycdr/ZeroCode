import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3ValidationVisuals = {
    id: 'css-unit13-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Validation Feedback',
    duration: '25 min',
    content: `
# Lab: Validation Feedback (State Detection)

## 1. The Concept: Real-Time Verification
Architect, providing immediate feedback when a user enters correct information is a powerful way to reduce "Form Fatigue." Using the **\`:valid\`** pseudo-class, we can trigger visual rewards—like a glowing checkmark—the moment a requirement is satisfied.

No JavaScript is required for this interaction. We rely on the browser's native HTML5 validation engine to toggle the CSS states for us.

---

## 2. The Mission: The Verified Sync Input
Construct a **Verified Data Input** for the Nexus Interface that illuminates a checkmark upon successful input.

### Deployment Parameters:
1.  **Icon Stealth**: Initially hide the \`.status-icon\` by setting \`opacity: 0\` and \`transform: scale(0)\`.
2.  **The Success Signal**: When the input is in the \`:valid\` state, change its border to neon green (\`#00ff41\`).
3.  **The Icon Reveal**: Use the sibling selector (\`input:valid ~ .status-icon\`) to reveal the icon by returning its \`opacity\` to **1** and \`scale\` to **1**.
4.  **Bouncy Animation**: Apply a \`cubic-bezier\` transition to the icon to make it "pop" into existence.

---

## 3. Machine Logic: The Validity Query
As the user types, the browser checks the text against the \`type="email"\` and \`required\` attributes. The moment the internal "valid" flag flips to true, the CSS selector matches, and the icon is projected into the UI.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Selective Feedback**: Remember to handle the empty state. You may want to ensure the success signal only appears if the input is not empty (\`:not(:placeholder-shown)\`).

> [!TIP]
> **Contrast**: Use a high-contrast green for the success state to ensure it is immediately recognizable against the dark Nexus theme.
`,
    tasks: [
        {
            id: 1,
            description: 'The Ghost Icon: On ".status-icon", set "opacity: 0;" and "transform: scale(0);".',
            completed: false,
            regex: /\.status-icon\s*\{(?=[\s\S]*?opacity\s*:\s*0;?)(?=[\s\S]*?transform\s*:\s*scale\(0\);?)[\s\S]*?\}/,
            hint: {
                concept: 'The icon should be visually absent until the valid state is triggered.',
                strategy: 'Use opacity and scale for a smooth entry later.',
                solution: 'opacity: 0; transform: scale(0);'
            }
        },
        {
            id: 2,
            description: 'The Green Signal: In "input:valid", set "border-color: #00ff41;".',
            completed: false,
            regex: /input:valid\s*\{(?=[\s\S]*?border-color\s*:\s*#00ff41;?)[\s\S]*?\}/,
            hint: {
                concept: 'This provides a color-coded reward for a correct field.',
                strategy: 'Update the input state style.',
                solution: 'border-color: #00ff41;'
            }
        },
        {
            id: 3,
            description: 'The Reveal Logic: When "input:valid ~ .status-icon", set "opacity: 1;" and "transform: scale(1);".',
            completed: false,
            regex: /input:valid\s*~\s*\.status-icon\s*\{(?=[\s\S]*?opacity\s*:\s*1;?)(?=[\s\S]*?transform\s*:\s*scale\(1\);?)[\s\S]*?\}/,
            hint: {
                concept: 'The ~ (General Sibling Selector) allows the input to control the icon after it.',
                strategy: 'Create the combined state selector.',
                solution: 'opacity: 1; transform: scale(1);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS VERIFICATION ENGINE */
body {
    background: #000;
    padding: 100px;
}

.input-wrapper {
    position: relative;
    max-width: 400px;
}

input {
    width: 100%;
    padding: 16px;
    background: #0a0a0f;
    border: 1px solid #1a1a1e;
    color: #fff;
    font-family: 'Space Mono', monospace;
    transition: all 0.3s ease;
    border-radius: 4px;
    outline: none;
}

.status-icon {
    position: absolute;
    right: 16px;
    top: 18px;
    color: #00ff41;
    font-weight: bold;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    /* 1. Hide the icon initially */

}

/* 2 & 3. Implement the success signal and reveal logic below */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="input-wrapper">
    <input type="email" required placeholder="ENTER_SYNC_EMAIL">
    <span class="status-icon">VERIFIED_✓</span>
</div>`
        }
    ]
};
