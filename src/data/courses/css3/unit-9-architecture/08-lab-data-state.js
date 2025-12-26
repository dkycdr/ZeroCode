import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4DataState = {
    id: 'css-unit9-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Behavioral State Logic',
    duration: '45 min',
    content: `
# Lab: Behavioral State Logic (Data Attributes)

## 1. The Concept: Semantic Reactive States
Architect, while BEM modifiers (like \`.btn--loading\`) are powerful, they can become rigid when states change rapidly via JavaScript. There is a high-performance alternative used in elite administrative dashboards: **Data Attributes (\`data-*\`)**.

Instead of toggling complex class strings, we modify a single HTML attribute, and our CSS reacts to that semantic change automatically. This creates a clean "API-like" relationship between your logic and your styles.

---

## 2. The Mission: The Neural Sync Toggle
You must build a **Sync Data Controller** that reacts to system activity:
1.  **State Detection**: Use the attribute selector \`[data-state="processing"]\` to target the component when it is active.
2.  **Visual Lock**: When processing, the button must dim (opacity), change the cursor to \`wait\`, and trigger a scaling animation.
3.  **Encapsulation**: Ensure the state logic is scoped to the \`.nexus-controller\` BEM block to prevent global style leakage.

---

## 3. Machine Logic: Attribute Specificity
The browser treats \`.nexus-controller[data-state="processing"]\` as a highly specific selector. The moment JavaScript removes the attribute or changes it to \`idle\`, the styles vanish. This is significantly cleaner than managing a list of five different classes in your JavaScript logic.

---

## 4. Senior Guidance: Semantic Logic
> [!IMPORTANT]
> **Intent vs Appearance**: Data attributes should describe the **Meaning** of the state (\`processing\`, \`error\`, \`success\`) rather than the effect (\`dimmed\`, \`red\`, \`green\`).

> [!TIP]
> **QA Efficiency**: Using Data Attributes makes automated testing (End-to-End) much easier for your team, as tests can reliably query for specific states without worrying about CSS class changes.
`,
    tasks: [
        {
            id: 1,
            description: 'The Processing Signal: Target ".nexus-controller" with the attribute "[data-state="processing"]".',
            completed: false,
            regex: /\.nexus-controller\[\s*data-state\s*=\s*['"]processing['"]\s*\]\s*\{[\s\S]*?\}/,
            hint: {
                concept: 'Attribute selectors use square brackets [].',
                strategy: 'Combine the class and attribute: .class[attr="val"].',
                solution: '.nexus-controller[data-state="processing"] { }'
            }
        },
        {
            id: 2,
            description: 'The Interaction Brake: Inside the processing state, set "opacity: 0.6;", "pointer-events: none;", and "cursor: wait;".',
            completed: false,
            regex: /\.nexus-controller\[\s*data-state\s*=\s*['"]processing['"]\s*\]\s*\{(?=[\s\S]*?opacity\s*:\s*0\.6;?)(?=[\s\S]*?pointer-events\s*:\s*none;?)(?=[\s\S]*?cursor\s*:\s*wait;?)[\s\S]*?\}/,
            hint: {
                concept: 'Pointer-events: none is the ultimate way to disable clicks in CSS.',
                strategy: 'Apply these properties to the processing selector.',
                solution: 'opacity: 0.6; pointer-events: none; cursor: wait;'
            }
        },
        {
            id: 3,
            description: 'The Kinetic Feedback: Still in the processing state, apply "animation: status-pulse 1.5s infinite ease-in-out;".',
            completed: false,
            regex: /\.nexus-controller\[\s*data-state\s*=\s*['"]processing['"]\s*\]\s*\{(?=[\s\S]*?animation\s*:\s*status-pulse\s+1\.5s\s+infinite\s+ease-in-out;?)[\s\S]*?\}/,
            hint: {
                concept: 'Animations confirm to the user that a background process is active.',
                strategy: 'Reference the provided keyframe.',
                solution: 'animation: status-pulse 1.5s infinite ease-in-out;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS CONTROLLER - STATE LOGIC */
@keyframes status-pulse {
    0% { transform: scale(1); filter: brightness(1); }
    50% { transform: scale(1.02); filter: brightness(1.2); }
    100% { transform: scale(1); filter: brightness(1); }
}

.nexus-controller {
    background: #4cc9f0;
    color: #05050a;
    border: none;
    padding: 16px 32px;
    font-family: monospace;
    font-weight: bold;
    letter-spacing: 2px;
    border-radius: 2px;
    cursor: pointer;
    transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* TODO: Implement Reactive State Logic below */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div style="background: #000; height: 100vh; display: flex; justify-content: center; align-items: center; flex-direction: column;">
    <!-- Toggle the data-state from "processing" to "idle" to see the reaction -->
    <button class="nexus-controller" data-state="processing">
        INITIALIZING_NEURAL_LINK
    </button>
    <p style="color: #4cc9f0; margin-top: 20px; font-family: monospace; font-size: 10px; opacity: 0.5;">
        THREAD_ACTIVE // STATE: PROCESSING
    </p>
</div>`
        }
    ]
};
