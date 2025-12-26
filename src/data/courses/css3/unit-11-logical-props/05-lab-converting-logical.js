import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1ConvertingLogical = {
    id: 'css-unit11-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Converting to Logical',
    duration: '25 min',
    content: `
# Lab: Converting to Logical (RTL Readiness)

## 1. The Concept: Directional Neutrality
Architect, in this lab you will modernize a legacy navigation button component. The flaw in the current implementation is its rigid use of \`margin-right\` to separate the icon from the text.

If this interface is rendered in a Right-to-Left (RTL) language (e.g., Arabic), the icon will collide with the text because the physical margin is on the "wrong" side. We will refactor these physical properties into **Logical Properties** so they automatically pivot based on the user's language direction.

---

## 2. The Mission: The Universal Action Button
Refactor the styles for the \`.nexus-btn\` and \`.nexus-btn__icon\` to support the **Nexus AI Global System**.

### Deployment Parameters:
1.  **Logical Alignment**: Replace \`text-align: left\` with \`text-align: start\` on the button container.
2.  **Logical Terminal Spacing**: Convert \`margin-right: 16px\` on the icon to \`margin-inline-end: 16px\`.
3.  **Logical Block Offset**: Convert \`margin-top: 2px\` on the icon to \`margin-block-start: 2px\:.
4.  **The Validation**: Observe the HTML file; we are using the \`dir="rtl"\` attribute. If your logic is correct, the icon will automatically shift to the right side of the text without a single line of extra CSS!

---

## 3. Machine Logic: Automated Flipping
The browser engine detects the \`dir="rtl"\` flag. Upon encountering \`margin-inline-end\`, it performs a real-time calculation: *"This is an RTL environment; the 'End' of the text line is on the LEFT. Therefore, apply the margin to the left."*

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **No Physical Leaks**: Avoid mixing physical (\`margin-left\`) and logical (\`margin-inline-start\`) properties on the same element. This creates inheritance conflicts that are difficult to debug in large-scale applications.

> [!TIP]
> **Reading Flow**: Remember that \`start\` is always the direction from which the user begins reading. Use this as your primary compass for UI alignment.
`,
    tasks: [
        {
            id: 1,
            description: 'The Neutral Align: In ".nexus-btn", convert "text-align: left;" to "text-align: start;".',
            completed: false,
            regex: /\.nexus-btn\s*\{(?=[\s\S]*?text-align\s*:\s*start;?)[\s\S]*?\}/,
            hint: {
                concept: 'Start represents the beginning of the reading flow (Left in LTR, Right in RTL).',
                strategy: 'Update the text-align property.',
                solution: 'text-align: start;'
            }
        },
        {
            id: 2,
            description: 'The End Gap: In ".nexus-btn__icon", replace "margin-right: 16px;" with "margin-inline-end: 16px;".',
            completed: false,
            regex: /\.nexus-btn__icon\s*\{(?=[\s\S]*?margin-inline-end\s*:\s*16px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Inline-end targets the side following the content within the current text flow.',
                strategy: 'Replace physical right margin with logical inline-end.',
                solution: 'margin-inline-end: 16px;'
            }
        },
        {
            id: 3,
            description: 'The Block Offset: In ".nexus-btn__icon", replace "margin-top: 2px;" with "margin-block-start: 2px;".',
            completed: false,
            regex: /\.nexus-btn__icon\s*\{(?=[\s\S]*?margin-block-start\s*:\s*2px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Block-start corresponds to the top in traditional horizontal layouts.',
                strategy: 'Replace physical top margin with logical block-start.',
                solution: 'margin-block-start: 2px;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS GLOBAL ACTION BUTTON */
.nexus-btn {
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    background: #4cc9f0;
    color: #000;
    border: none;
    cursor: pointer;
    font-family: 'Space Mono', monospace;
    font-weight: bold;
    /* 1. Update text alignment to be direction-neutral */
    text-align: left;
}

.nexus-btn__icon {
    width: 20px;
    height: 20px;
    background: #000;
    border-radius: 2px;
    /* 2 & 3. Refactor physical spacing to logical spacing */
    margin-right: 16px;
    margin-top: 2px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div style="background: #000; height: 100vh; padding: 100px;">
    <!-- The dir="rtl" attribute triggers the logical flip -->
    <button class="nexus-btn" dir="rtl">
        <div class="nexus-btn__icon"></div>
        <span>INITIALIZE_GLOBAL_SYNC</span>
    </button>
</div>`
        }
    ]
};
