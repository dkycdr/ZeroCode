import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Margins = {
    id: 'css-unit1-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Yard and Distance (Margins)',
    duration: '30 min',
    content: `
# Lab: The Yard and Distance (Margins)

## 1. The Theory: Personal Space
Margins are the invisible force fields around elements.
- **Padding**: Spacing INSIDE the border (Like fat).
- **Margin**: Spacing OUTSIDE the border (Like personal space).

## 2. The Trap: Margin Collapse 💥
If you have two paragraphs:
- Paragraph A has \`margin-bottom: 20px\`.
- Paragraph B has \`margin-top: 20px\`.
- Total distance? **20px** (They overlap/collapse). Not 40px!

## 3. Mission Instructions
We need to separate the dashboard modules.
**Step 1**: Use **Margin** to push the header down by **40px**.
**Step 2**: Separate the side-by-side modules with a **20px** gap.
**Step 3**: Center the entire container in the middle of the screen using the **Auto Margin** trick.
`,
    tasks: [
        {
            id: 1,
            description: 'Step 1: Set `margin-block-end: 40px;` on `.header-section`.',
            completed: false,
            regex: /\.header-section\s*\{(?=[\s\S]*?margin-block-end\s*:\s*40px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Logical Margins (Block)',
                strategy: 'margin-block-end is the modern equivalent of margin-bottom for standard writing modes.',
                solution: 'margin-block-end: 40px;'
            }
        },
        {
            id: 2,
            description: 'Step 2: Add `margin-inline-end: 20px;` to `.module-left`.',
            completed: false,
            regex: /\.module-left\s*\{(?=[\s\S]*?margin-inline-end\s*:\s*20px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Logical Margins (Inline)',
                strategy: 'margin-inline-end replaces margin-right for left-to-right text.',
                solution: 'margin-inline-end: 20px;'
            }
        },
        {
            id: 3,
            description: 'Step 3: Set `margin-inline: auto;` on `.main-container`.',
            completed: false,
            regex: /\.main-container\s*\{(?=[\s\S]*?margin-inline\s*:\s*auto;?)[\s\S]*?\}/,
            hint: {
                concept: 'Axis Centering',
                strategy: 'margin-inline: auto centers the element on the horizontal axis.',
                solution: 'margin-inline: auto;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `:root {
    --accent: #4cc9f0;
}

body {
    background: #000;
    color: white;
    margin: 0;
}

.main-container {
    width: 800px;
    background: #111;
    min-height: 100vh;
    padding: 40px;
    
    /* --- STEP 3: CENTER THE CONTAINER --- */
    /* TODO: Set margin-inline to auto */
    
}

.header-section {
    border-bottom: 1px solid #333;
    
    /* --- STEP 1: PUSH CONTENT DOWN --- */
    /* TODO: Set margin-block-end to 40px */
    
}

.layout {
    display: flex;
}

.module-left, .module-right {
    background: #1a1a1e;
    padding: 20px;
    flex: 1;
}

/* --- STEP 2: CREATE A GAP --- */
.module-left {
    /* TODO: Set margin-inline-end to 20px */
    
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="main-container">
    <div class="header-section">
        <h1>NEXUS_COMMAND_CENTER</h1>
    </div>
    
    <div class="layout">
        <div class="module-left">
            <h3>LOG_A</h3>
            <p>Scanning sectors...</p>
        </div>
        <div class="module-right">
            <h3>LOG_B</h3>
            <p>Secure connection established.</p>
        </div>
    </div>
</div>`
        }
    ]
};
