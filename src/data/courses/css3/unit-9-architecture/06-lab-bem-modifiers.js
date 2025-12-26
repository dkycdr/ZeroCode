import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2BemModifiers = {
    id: 'css-unit9-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: BEM Modifiers (Variants)',
    duration: '20 min',
    content: `
# Lab: BEM Modifiers (Variants)

## 1. The Concept: The Delta Protocol
Architect, in a massive system, we often have the same component with different "States" or "Moods." For example, a button that is red for "Critical Failure" or a smaller version for a tight sidebar.

Instead of building a new component from scratch (\`.btn-danger\`), we use a **Modifier** (\`.nexus-btn--critical\`). A modifier only changes the **Delta**—the specific properties that differ from the base version—while inheriting all the structural heavy-lifting from the base class.

---

## 2. The Mission: The Button Matrix
You must enhance the base \`.nexus-btn\` component with two specialized variants.

### Performance Parameters:
1.  **Critical State**: Create \`.nexus-btn--critical\` which changes the background to a warning red (\`#ff0055\`) and adds a subtle pulse glow (\`box-shadow\`).
2.  **Compact Tier**: Create \`.nexus-btn--small\` which scales the font-size to \`11px\` and the padding to \`6px 12px\`.
3.  **Composition Logic**: Observe the HTML: \`<button class="nexus-btn nexus-btn--critical">\`. We never use a modifier without its base Block class.

---

## 3. Machine Logic: Accumulative Logic
When an element has both classes, the browser merges their styles. The structure remains intact from the base class, but the modifier's property definitions take precedence because they appear later in the cascade. This is "State Mapping" in its purest form.

---

## 4. Architectural Rules
> [!IMPORTANT]
> **No Duplication**: Do not repeat base styles inside a modifier. If \`.nexus-btn\` already has \`border-radius\`, do not re-declare it in the modifier unless you are changing its value.

> [!TIP]
> **Semantic States**: Name modifiers by their function (\`--active\`, \`--disabled\`, \`--loading\`) rather than their appearance (\`--red\`, \`--blue\`). This keeps the code future-proof.
`,
    tasks: [
        {
            id: 1,
            description: 'The Critical Modifier: Create ".nexus-btn--critical" and set "background-color: #ff0055;" and "box-shadow: 0 0 10px #ff0055;".',
            completed: false,
            regex: /\.nexus-btn--critical\s*\{(?=[\s\S]*?background-color\s*:\s*#ff0055;?)(?=[\s\S]*?box-shadow\s*:\s*0\s+0\s+10px\s+#ff0055;?)[\s\S]*?\}/,
            hint: {
                concept: 'Modifiers only change the specific properties needed for the variant.',
                strategy: 'Open the critical modifier block (two hyphens).',
                solution: '.nexus-btn--critical { background-color: #ff0055; box-shadow: 0 0 10px #ff0055; }'
            }
        },
        {
            id: 2,
            description: 'The Compact Modifier: Create ".nexus-btn--small" and set "font-size: 11px;" and "padding: 6px 12px;".',
            completed: false,
            regex: /\.nexus-btn--small\s*\{(?=[\s\S]*?font-size\s*:\s*11px;?)(?=[\s\S]*?padding\s*:\s*6px\s+12px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Modifiers can scale down a component while preserving its proportions.',
                strategy: 'Update size properties in the small modifier.',
                solution: '.nexus-btn--small { font-size: 11px; padding: 6px 12px; }'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS BUTTON ENGINE - CORE */
.nexus-btn {
    display: inline-block;
    padding: 12px 24px;
    background-color: #333;
    color: white;
    font-size: 14px;
    letter-spacing: 1px;
    text-decoration: none;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-family: monospace;
    transition: 0.2s ease;
}

/* TODO: Implement Modifiers below */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div style="background: #000; padding: 60px; height: 100vh; display: flex; gap: 20px; align-items: center;">
    <button class="nexus-btn">SCAN_CORE</button>
    
    <!-- Apply variants here -->
    <button class="nexus-btn nexus-btn--critical nexus-btn--small">PURGE_DATA</button>
</div>`
        }
    ]
};
