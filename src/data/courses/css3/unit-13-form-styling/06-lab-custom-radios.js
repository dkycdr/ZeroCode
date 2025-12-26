import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2CustomRadios = {
    id: 'css-unit13-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Custom Card Radios',
    duration: '25 min',
    content: `
# Lab: Custom Card Radios (The Input Hack)

## 1. The Concept: Semantic Cards
Architect, standard radio buttons are often too small and difficult to interact with on high-density touch displays. Using the **Input Hack**, we can transform them into large, high-fidelity "Action Cards."

By linking a label to a hidden radio input, the entire card becomes the hit area. Clicking the card toggles the hidden state, allowing us to build premium selection interfaces while maintaining the underlying form's simplicity.

---

## 2. The Mission: The Tier Selector
Build a **Nexus AI Tier Selector**. Each option should look like a professional data card that illuminates when selected.

### Deployment Parameters:
1.  **Ghost Protocol**: Completely hide the native radio inputs using \`display: none;\`.
2.  **Card Foundation**: Style the \`<label>\` as a block card with a dark background and a subtle border.
3.  **The Glow Trigger**: When the hidden input is \`:checked\`, change the sibling label's border to the neon cyan (\`#4cc9f0\`).
4.  **Active UI**: Also update the \`color\` and add a subtle \`box-shadow\` to the label when active.

---

## 3. Machine Logic: Structural Linkage
Because the label follows the input in the DOM, we can use the \`+\` (Adjacent Sibling Selector). The logic flows like this: *"If an input is checked, find the label immediately next to it and apply these premium styles."*

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Hit Area**: One of the greatest benefits of this pattern is the massive increase in the "Clickable Area." This significantly improves the Accessibility score for mobile users.

> [!TIP]
> **Transitions**: Apply \`transition: all 0.3s ease-out;\` to the label to make the switch between cards feel smooth and reactive.
`,
    tasks: [
        {
            id: 1,
            description: 'The Ghost Protocol: Hide all "input[type="radio"]" using "display: none;".',
            completed: false,
            regex: /input\[type=['"]radio['"]\]\s*\{(?=[\s\S]*?display\s*:\s*none;?)[\s\S]*?\}/,
            hint: {
                concept: 'We hide the browser-default radio since we are styling the label instead.',
                strategy: 'Target the specific radio type in CSS.',
                solution: 'display: none;'
            }
        },
        {
            id: 2,
            description: 'The Card Base: Set "label" to "display: block;", "border: 2px solid #1a1a1e;", and "padding: 24px;".',
            completed: false,
            regex: /label\s*\{(?=[\s\S]*?display\s*:\s*block;?)(?=[\s\S]*?border\s*:\s*2px\s+solid\s+#1a1a1e;?)(?=[\s\S]*?padding\s*:\s*24px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Labels must be blocks to behave as cards.',
                strategy: 'Update the label properties.',
                solution: 'display: block; border: 2px solid #1a1a1e; padding: 24px;'
            }
        },
        {
            id: 3,
            description: 'The Active State: When "input:checked + label", change "border-color: #4cc9f0;" and "color: #4cc9f0;".',
            completed: false,
            regex: /input:checked\s*\+\s*label\s*\{(?=[\s\S]*?border-color\s*:\s*#4cc9f0;?)(?=[\s\S]*?color\s*:\s*#4cc9f0;?)[\s\S]*?\}/,
            hint: {
                concept: 'The :checked pseudo-class targets the hidden input’s state.',
                strategy: 'Use the adjacent sibling selector (+).',
                solution: 'border-color: #4cc9f0; color: #4cc9f0;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS TIER SELECTOR - CUSTOM RADIO ENGINE */
body {
    background: #000;
    padding: 100px;
    font-family: 'Space Mono', monospace;
}

/* 1. Eliminate native controls */

/* 2. Transform labels into interactive cards */
label {
    background: #0a0a0f;
    color: #666;
    margin-bottom: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.25s ease;
}

label:hover {
    border-color: #333;
}

/* 3. Implement the checked state logic below */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="tier-selector">
    <input type="radio" name="tier" id="lite">
    <label for="lite">
        <strong>LITE_ACCESS</strong><br>
        <small>1.2 GFLOPs / Sec</small>
    </label>

    <input type="radio" name="tier" id="pro" checked>
    <label for="pro">
        <strong>PRO_MAINFRAME</strong><br>
        <small>4.8 GFLOPs / Sec</small>
    </label>

    <input type="radio" name="tier" id="elite">
    <label for="elite">
        <strong>ELITE_ARCHITECT</strong><br>
        <small>Unlimited Compute</small>
    </label>
</div>`
        }
    ]
};
