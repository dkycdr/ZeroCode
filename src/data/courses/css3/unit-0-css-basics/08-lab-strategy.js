import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Strategy = {
    id: 'css-unit0-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Final Deployment (Unit Strategy)',
    duration: '45 min',
    content: `
# Lab: The Final Deployment (Strategy)

## 1. The Theory: The Cascade 🌊
CSS stands for **Cascading** Style Sheets. Think of a waterfall.
1.  **Importance**: \`!important\` wins (Avoid this!).
2.  **Specificity**: ID > Class > Tag.
3.  **Source Order**: If specificity is equal, the LAST rule wins.

## 2. Specificity Scoring
- **ID**: 100 Points per ID.
- **Class**: 10 Points per Class.
- **Tag**: 1 Point per Tag.
- \`.btn.primary\` (20 points) beats \`.primary\` (10 points).

## 3. Mission Instructions
We have some "Legacy Code" causing bugs in the Main Control Panel.
**Step 1**: The body text is too bright. Change the global inheritance without breaking specific elements.
**Step 2**: The "Initialize" button is stuck on gray because of a specific legacy rule. Use a **Double Class** selector to overpower it.
**Step 3**: The module cards look sharp (edgy). Apply **Border Radius** to smooth them out.
`,
    tasks: [
        {
            id: 1,
            description: 'Step 1: Set `body` color to `#888`.',
            completed: false,
            regex: /body\s*\{(?=[\s\S]*?color\s*:\s*#888;?)[\s\S]*?\}/,
            hint: {
                concept: 'Inheritance',
                strategy: 'Setting color on body passes it down to all children that dont have their own color.',
                solution: 'body { color: #888; }'
            }
        },
        {
            id: 2,
            description: 'Step 2: Use selector `.control-panel .btn-override` and set `background-color: #d4af37;`',
            completed: false,
            regex: /\.control-panel\s+\.btn-override\s*\{(?=[\s\S]*?background-color\s*:\s*#d4af37;?)[\s\S]*?\}/,
            hint: {
                concept: 'Specificity (20 Points)',
                strategy: 'Parent Class (.control-panel) + Child Class (.btn-override) = 20 Points. This beats the legacy single class (10 Points).',
                solution: '.control-panel .btn-override { background-color: #d4af37; }'
            }
        },
        {
            id: 3,
            description: 'Step 3: On `.card-module`, set `border-radius: 8px;`',
            completed: false,
            regex: /\.card-module\s*\{(?=[\s\S]*?border-radius\s*:\s*8px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Visual Polish',
                strategy: 'Border radius softens the UI, making it friendlier.',
                solution: 'border-radius: 8px;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* --- STEP 1: FIX INHERITANCE --- */
body {
    background: #050505;
    /* TODO: Set text color to #888 (Gray) */
    
}

/* --- STEP 2: WIN THE SPECIFICITY BATTLE --- */
/* The legacy code below forces the button to be Dark Gray (#333).
   You need a stronger selector to turn it Gold (#d4af37). */

/* TODO: Target .btn-override BUT only inside .control-panel */


/* --- STEP 3: VISUAL POLISH --- */
.card-module {
    background: #1a1a1e;
    padding: 30px;
    border: 1px solid #333;
    /* TODO: Add border-radius: 8px */
    
}

/* !!! LEGACY CODE (DO NOT DELETE) !!! */
/* This rule has Specificity Score: 10 (1 Class) */
.btn-override {
    background-color: #333; 
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="control-panel">
    <div class="card-module">
        <h2>MASTER_CONTROLS</h2>
        <p>Current Security Level: OMEGA</p>
        
        <!-- This button needs to be GOLD, but it's stuck on Gray! -->
        <button class="btn-override">INITIALIZE_SERVER</button>
    </div>
</div>`
        }
    ]
};
