import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2BorderBox = {
    id: 'css-unit1-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Elite Fix (Border-Box) 💎',
    duration: '25 min',
    content: `
# Lab: The Elite Fix (Border-Box) 💎

## 1. The Theory: Total Sizing Control
Architect, welcome to the modern era. We use **Border-Box** ("Absorb Inward").
- In this mode: \`width: 300px\` means the **TOTAL** width is 300px.
- If you add 50px of padding, the browser automatically shrinks the content area to keep the total size stable.

## 2. Why Professionals Use It
Imagine buying a 2-meter sofa.
- **Content-Box**: You add pillows, and the sofa grows to 3 meters. (Insane)
- **Border-Box**: You add pillows, the sitting space gets smaller, but the sofa stays 2 meters wide. (Correct)

## 3. Mission Instructions
**Step 1**: Cast the "Universal Spell" (\`*\`) to switch the entire engine to \`border-box\`.
**Step 2**: Set the card inline-size to **300px**.
**Step 3**: Add massive padding (**40px**) using logical properties.
**Observation**: The card stays perfectly 300px.
`,
    tasks: [
        {
            id: 1,
            description: 'Step 1: Set `box-sizing: border-box;` on the Universal Selector `*`.',
            completed: false,
            regex: /\*\s*\{(?=[\s\S]*?box-sizing\s*:\s*border-box;?)[\s\S]*?\}/,
            hint: {
                concept: 'The Magic Reset',
                strategy: 'The asterisk (*) selects everything.',
                solution: '* { box-sizing: border-box; }'
            }
        },
        {
            id: 2,
            description: 'Step 2: Set `.modern-card` inline-size to `300px`.',
            completed: false,
            regex: /\.modern-card\s*\{(?=[\s\S]*?inline-size\s*:\s*300px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Stable Size',
                strategy: 'Use inline-size (the logical equivalent of width).',
                solution: 'inline-size: 300px;'
            }
        },
        {
            id: 3,
            description: 'Step 3: Add `padding-inline: 40px;`.',
            completed: false,
            regex: /\.modern-card\s*\{(?=[\s\S]*?padding-inline\s*:\s*40px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Internal Absorption',
                strategy: 'In border-box mode, padding pushes inward, keeping the inline-size stable.',
                solution: 'padding-inline: 40px;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* --- STEP 1: THE ELITE RESET --- */
/* TODO: Select '*' and set box-sizing to border-box */


.modern-card {
    background: #00ff41;
    color: black;
    border: 10px solid #000;
    
    /* --- STEP 2 & 3: STABLE GEOMETRY --- */
    /* TODO: Set inline-size to 300px */
    /* TODO: Add padding-inline of 40px */

}

.container {
    padding: 100px;
    background: #050505;
    height: 100vh;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="container">
    <div class="modern-card">
        <h3>MODERN_PROTOCOL</h3>
        <p>Predictability initiated. This box is exactly 300px wide, including all borders and internal padding.</p>
    </div>
</div>`
        }
    ]
};
