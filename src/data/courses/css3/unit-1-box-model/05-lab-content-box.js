import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1ContentBox = {
    id: 'css-unit1-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Legacy Trap (Content-Box)',
    duration: '30 min',
    content: `
# Lab: The Legacy Trap (Content-Box)

## 1. The Theory: Geometric Chaos 📐
In the early days of the web, this calculation was law:
**Total Width = Width + Padding + Border**.

If you set \`width: 300px\` and \`padding: 20px\`, the box physically grew to **340px**. 

Modern layouts use **Logical Properties** (\`inline-size\` instead of \`width\`), but even then, \`box-sizing: content-box\` can cause the same "inflation" issues.

## 2. Why it Matters
We call this "Content-Box" because the dimension property only controls the safe inside zone (the content), not the actual physical footprint.

## 3. Mission Instructions
We found an old module from System v1.0. Let's replicate the "Broken" behavior so you understand why we moved away from it.
**Step 1**: Lock the content width (inline-size) to **300px**.
**Step 2**: Add a massive **30px** padding using logical properties.
**Step 3**: Add a solid white border.
**Observation**: Watch the box grow beyond its intended size.
`,
    tasks: [
        {
            id: 1,
            description: 'Step 1: Set `.legacy-card` inline-size to `300px`.',
            completed: false,
            regex: /\.legacy-card\s*\{(?=[\s\S]*?inline-size\s*:\s*300px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Legacy Sizing',
                strategy: 'Use inline-size (the logical equivalent of width).',
                solution: 'inline-size: 300px;'
            }
        },
        {
            id: 2,
            description: 'Step 2: Add `padding-inline: 30px;` to explode the size.',
            completed: false,
            regex: /\.legacy-card\s*\{(?=[\s\S]*?padding-inline\s*:\s*30px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Inflation',
                strategy: 'Padding adds to the OUTSIDE of the inline-size in this mode.',
                solution: 'padding-inline: 30px;'
            }
        },
        {
            id: 3,
            description: 'Step 3: Add `border: 5px solid #fff;`.',
            completed: false,
            regex: /\.legacy-card\s*\{(?=[\s\S]*?border\s*:\s*5px\s+solid\s+[^;]+;?)[\s\S]*?\}/,
            hint: {
                concept: 'Final Layer',
                strategy: 'Borders also add to total width.',
                solution: 'border: 5px solid #fff;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS_v1.0 LEGACY ARCHITECTURE */

.legacy-card {
    background: #1a1a1e;
    color: #e0e0e0;
    box-sizing: content-box; /* The Legacy Mode */
    
    /* --- STEP 1: SET SIZE --- */
    /* TODO: Set inline-size to 300px */

    /* --- STEP 2: ADD PADDING --- */
    /* TODO: Add padding-inline of 30px */

    /* --- STEP 3: ADD BORDER --- */
    /* TODO: Add 5px solid white border */
    
}

.container {
    padding: 100px;
    background: #000;
    height: 100vh;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="container">
    <div class="legacy-card">
        <h3>LEGACY_SYSTEM_ALERT</h3>
        <p>This box is breaking the dashboard bounds. It's supposed to be 300px total, but the old model pushed it outward.</p>
    </div>
</div>`
        }
    ]
};
