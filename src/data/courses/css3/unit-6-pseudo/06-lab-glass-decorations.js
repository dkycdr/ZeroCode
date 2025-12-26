import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2GlassDecorations = {
    id: 'css-unit6-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Glass Decorations (::before)',
    duration: '45 min',
    content: `
# Lab: Glass Decorations (::before)

## 1. The Concept: Layered Depth
Architect, the **Nexus AI Premium Hub** uses a design aesthetic called **Glassmorphism**. This involves translucent layers, subtle highlights, and a sense of depth.

In this lab, you will use the \`::before\` element to create a "Glow Streak" across a card. This streak won't be a separate tag in the HTML—it will be a decorative shadow of the card itself. This is how you build "Elite" interfaces without bloated code.

---

## 2. The Mission: The Shimmering Data Card
You are building the **Vortex Module Interface**:
1.  **The Glow Base**: Use \`::before\` on \`.glass-card\`.
2.  **Dimension Polish**: Give it a \`width: 100%\` and \`height: 2px\`.
3.  **Visual Alignment**: Place it at the very top of the card (\`top: 0\`) and give it a vibrant cyan color to act as a "Power Line."

---

## 3. Senior Guidance: Content-Empty Logic
Never forget: \`content: "";\` is the battery for your pseudo-elements. If you forget it, your glow will not appear, even if your color and size are perfect.

> [!TIP]
> **Pro Tip**: Set \`pointer-events: none;\` on all purely decorative pseudo-elements. You don't want a "Glow Streak" to stop the user from being able to click the button underneath it!
`,
    tasks: [
        {
            id: 1,
            description: 'The Glow Foundation: On ".glass-card::before", set "content: \'\';" and "position: absolute;".',
            completed: false,
            regex: /\.glass-card::before\s*\{(?=[\s\S]*?content\s*:\s*(['"])\1;?)(?=[\s\S]*?position\s*:\s*absolute;?)[\s\S]*?\}/,
            hint: {
                concept: 'We need an empty content string to activate the element.',
                strategy: 'Both content and position are required for this decorative line.',
                solution: 'content: ""; position: absolute;'
            }
        },
        {
            id: 2,
            description: 'The Power Line: Set ".glass-card::before" to "width: 100%;", "height: 2px;", and "background-color: #4cc9f0;".',
            completed: false,
            regex: /\.glass-card::before\s*\{(?=[\s\S]*?width\s*:\s*100%;?)(?=[\s\S]*?height\s*:\s*2px;?)(?=[\s\S]*?background-color\s*:\s*#4cc9f0;?)[\s\S]*?\}/,
            hint: {
                concept: 'We are making a thin line that spans the full width.',
                strategy: 'Update height and color.',
                solution: 'width: 100%; height: 2px; background-color: #4cc9f0;'
            }
        },
        {
            id: 3,
            description: 'The Top Anchor: Set ".glass-card::before" to "top: 0;" and "left: 0;".',
            completed: false,
            regex: /\.glass-card::before\s*\{(?=[\s\S]*?top\s*:\s*0;?)(?=[\s\S]*?left\s*:\s*0;?)[\s\S]*?\}/,
            hint: {
                concept: 'This locks the glow streak to the upper edge of the card.',
                strategy: 'Use top/left properties.',
                solution: 'top: 0; left: 0;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS GLASSMOPRHISM SYSTEM */
body {
    background: #000;
    display: flex;
    justify-content: center;
    padding-top: 100px;
}

.glass-card {
    position: relative;
    width: 350px;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    padding: 30px;
    box-sizing: border-box;
}

/* 1, 2, 3. Add the decorative Glow Line below */
.glass-card::before {
    /* Implementation here */
}

h3 {
    margin: 0;
    letter-spacing: 2px;
}

p {
    color: #888;
    font-size: 14px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="glass-card">
    <h3>VORTEX_MODULE</h3>
    <p>Status: Synchronizing with neural lattice. All subsystems nominal.</p>
</div>`
        }
    ]
};
