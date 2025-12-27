import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3VerticalText = {
    id: 'css-unit11-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Vertical Writing Modes',
    duration: '25 min',
    content: `
# Lab: Vertical Text Layout (Writing Modes)

## 1. The Concept: Breaking the Plane
Architect, an Elite UI design occasionally requires unconventional typographic orientations. We will construct a **Vertical Branding Banner** where text flows natively from top to bottom.

Rather than rotating the element with a rigid CSS \`transform\`, we will utilize the **\`writing-mode\`** property. The advantage? The browser engine treats the text as a native vertical stream, ensuring logical spacing, easy text selection, and structural layout integrity that doesn't collapse on neighboring elements.

---

## 2. The Mission: The Nexus Edge Banner
You are building a promotional sidebar banner for the **Nexus AI Marketplace** that must sit flush against the edge of the screen.

### Deployment Parameters:
1.  **Rotation Logic**: Configure the \`.edge-banner\` to use \`writing-mode: vertical-rl;\` (Right-to-Left block flow).
2.  **Logical Sizing**: Set \`inline-size: 350px;\`. In this vertical mode, this represents the visual **Height**.
3.  **Cross Sizing**: Set \`block-size: 70px;\`. In this vertical mode, this represents the visual **Width**.
4.  **Polish**: Center the text using Flexbox and apply the signature Nexus contrast.

---

## 3. Machine Logic: The Axis Flip
Once you activate a vertical writing mode, the static terms "Width" and "Height" become logically inconsistent. However, **\`inline-size\`** always aligns with the direction of the text flow. Since the text flows vertically, \`inline-size\` is the height. This is the **Dimension-Agnostic** mindset required for high-scale internationalization.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Block Direction**: In \`vertical-rl\`, new lines (if they exist) will appear to the left of the previous line. This is why it is defined as Right-to-Left block flow.

> [!TIP]
> **Creative Use Cases**: Vertical writing modes are ideal for sidebar navigation, branding labels, or Y-axis annotations in complex technical data visualizations.
`,
    tasks: [
        {
            id: 1,
            description: 'The Flow Lock: On ".edge-banner", add "writing-mode: vertical-rl;".',
            completed: false,
            regex: /\.edge-banner\s*\{(?=[\s\S]*?writing-mode\s*:\s*vertical-rl;?)[\s\S]*?\}/,
            hint: {
                concept: 'writing-mode reorients the fundamental flow of content within the element.',
                strategy: 'Apply the vertical-rl value to transform the text stream.',
                solution: 'writing-mode: vertical-rl;'
            }
        },
        {
            id: 2,
            description: 'The Logical Length: Set "inline-size: 350px;".',
            completed: false,
            regex: /\.edge-banner\s*\{(?=[\s\S]*?inline-size\s*:\s*350px;?)[\s\S]*?\}/,
            hint: {
                concept: 'In vertical modes, inline-size maps to the vertical dimension (visual height).',
                strategy: 'Update the inline-size property.',
                solution: 'inline-size: 350px;'
            }
        },
        {
            id: 3,
            description: 'The Logical Width: Set "block-size: 70px;".',
            completed: false,
            regex: /\.edge-banner\s*\{(?=[\s\S]*?block-size\s*:\s*70px;?)[\s\S]*?\}/,
            hint: {
                concept: 'block-size maps to the thickness of the content stack (visual width in vertical mode).',
                strategy: 'Update the block-size property.',
                solution: 'block-size: 70px;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS EDGE BANNER - VERTICAL TYPOGRAPHY ENGINE */
.edge-banner {
    background: #4cc9f0;
    color: #000;
    font-weight: bold;
    font-family: 'Space Mono', monospace;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 2px;
    border-right: 4px solid #f72585;
    
    /* 1, 2, 3. Configure vertical writing mode and logical dimensions below */

}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div style="background: #000; height: 100vh; padding: 50px; display: flex; align-items: flex-start;">
    <div class="edge-banner">
        50%_OFF_GEN_CORE_UPGRADES
    </div>
</div>`
        }
    ]
};
