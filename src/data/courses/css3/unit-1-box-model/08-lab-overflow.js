import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Overflow = {
    id: 'css-unit1-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Containment Shield (Overflow)',
    duration: '30 min',
    content: `
# Lab: The Containment Shield (Overflow)

## 1. The Theory: The Bucket Problem
If you pour 2 liters of water into a 1-liter bucket, it spills. Code is the same.
- \`overflow: visible\`: The spill is messy (Default).
- \`overflow: hidden\`: Cut off the spill (Like a lid).
- \`overflow: auto\`: Add a scrollbar IF needed (Smart).

## 2. Mission Instructions
The Log Feed is overflowing its card.
**Step 1**: Lock the height of the log window to **200px** so it doesn't expand forever.
**Step 2**: Add **Auto Scroll** (\`overflow-y: auto\`) so we can scroll through the logs.
**Step 3**: Use \`overflow: hidden\` on the parent card to make sure no child elements poke out of the rounded corners.
`,
    tasks: [
        {
            id: 1,
            description: 'Step 1: Set `.terminal-window` size on the Block axis to `200px` (use height for now).',
            completed: false,
            regex: /\.terminal-window\s*\{(?=[\s\S]*?height\s*:\s*200px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Constraint',
                strategy: 'We must limit the block size (height) for overflow to trigger.',
                solution: 'height: 200px;'
            }
        },
        {
            id: 2,
            description: 'Step 2: Add `overflow-y: auto;` (or the logical `overflow-block: auto;`).',
            completed: false,
            regex: /\.terminal-window\s*\{(?=[\s\S]*?overflow-(y|block)\s*:\s*auto;?)[\s\S]*?\}/,
            hint: {
                concept: 'Scrolling',
                strategy: 'Auto means "scrollbar only if content exceeds the bucket size".',
                solution: 'overflow-block: auto;'
            }
        },
        {
            id: 3,
            description: 'Step 3: Set `overflow: hidden;` on `.terminal-card` to clip children.',
            completed: false,
            regex: /\.terminal-card\s*\{(?=[\s\S]*?overflow\s*:\s*hidden;?)[\s\S]*?\}/,
            hint: {
                concept: 'Clipping',
                strategy: 'This prevents children from spilling over the border-radius.',
                solution: 'overflow: hidden;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    background: #000;
    padding: 100px;
    font-family: monospace;
}

.terminal-card {
    background: #111;
    border-radius: 20px;
    border: 1px solid #333;
    padding: 20px;
    
    /* --- STEP 3: PROTECT THE BORDERS (CLIP) --- */
    /* TODO: Set overflow to hidden */
    
}

.terminal-window {
    background: #050505;
    color: #4cc9f0;
    padding: 15px;
    
    /* --- STEP 1: FIX HEIGHT --- */
    /* TODO: Set height to 200px */

    /* --- STEP 2: ENABLE SCROLLING --- */
    /* TODO: Set overflow-y to auto */
    
}

.log-entry {
    margin-bottom: 5px;
    border-bottom: 1px solid #222;
    padding-bottom: 5px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="terminal-card">
    <h2>SYSTEM_LOG_FEED</h2>
    <div class="terminal-window">
        <div class="log-entry">ENTRY_001: Neural core active.</div>
        <div class="log-entry">ENTRY_002: Handshake established.</div>
        <div class="log-entry">ENTRY_003: Buffer at 40%.</div>
        <div class="log-entry">ENTRY_004: Decrypting sectors...</div>
        <div class="log-entry">ENTRY_005: Security protocols verified.</div>
        <div class="log-entry">ENTRY_006: High-frequency data incoming.</div>
        <div class="log-entry">ENTRY_007: Simulation started.</div>
        <div class="log-entry">ENTRY_008: Processing neural loops.</div>
        <div class="log-entry">ENTRY_009: Sector A4 clear.</div>
        <div class="log-entry">ENTRY_010: Buffer at 95%. Scroll required.</div>
    </div>
</div>`
        }
    ]
};
