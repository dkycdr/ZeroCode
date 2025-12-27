import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3CardGrid = {
    id: 'css-unit2-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Dynamic Archive (Wrapping)',
    duration: '50 min',
    content: `
# Lab: The Dynamic Archive (Wrapping)

## 1. The Concept: Responsive Continuity
Architect, we have hundreds of incoming data packets representing "Neural Memories" from the cloud. If we put them all in one long line, the user would have to scroll horizontally for miles—which is a major UI failure.

In this lab, you will master the **Wrapping Protocol**. You will learn how to make a layout that "flows" like liquid. When the screen gets too narrow, the items will intelligently jump to a new row.

---

## 2. The Mission: The Self-Organizing Grid
You are building the **Neural Memory Archive**. Your objective is to create a multi-line grid of cards:
1.  **Wrap Protocol**: Enable \`flex-wrap: wrap\` so the items can breathe.
2.  **Space Alignment**: Use \`align-content\` to manage the "vertical space" between the different rows of cards.
3.  **Growth Control**: Ensure every card has a minimum size but can expand slightly to fill the row perfectly.

---

## 3. Senior Guidance: The 3-Step Grid
Professional Flexbox grids follow a specific 3-step sequence:
1. **Container**: \`display: flex; flex-wrap: wrap;\`
2. **Spacing**: \`gap: 20px;\`
3. **Children**: Use \`flex: 1 1 250px;\` (which means: grow if possible, shrink if needed, but aim for 250px).

> [!CAUTION]
> **Logic Switch**: Remember that \`align-items\` moves items inside the row, but \`align-content\` moves the ROWS themselves. If you only have one row, \`align-content\` will do absolutely nothing!
`,
    tasks: [
        {
            id: 1,
            description: 'The Reservoir: Target the ".archive-grid", set "display: flex;" and "flex-wrap: wrap;".',
            completed: false,
            regex: /\.archive-grid\s*\{(?=[\s\S]*?display\s*:\s*flex;?)(?=[\s\S]*?flex-wrap\s*:\s*wrap;?)[\s\S]*?\}/,
            hint: {
                concept: 'Without wrap, items will just exit the screen boundaries.',
                strategy: 'Apply both properties to the parent container.',
                solution: 'display: flex; flex-wrap: wrap;'
            }
        },
        {
            id: 2,
            description: 'The Multi-Line Balance: Set "align-content: flex-start;" on the grid and a "gap: 20px;".',
            completed: false,
            regex: /\.archive-grid\s*\{(?=[\s\S]*?align-content\s*:\s*flex-start;?)(?=[\s\S]*?gap\s*:\s*20px;?)[\s\S]*?\}/,
            hint: {
                concept: 'align-content flex-start packs all rows at the top of the container.',
                strategy: 'This prevents weird giant gaps between your rows if the container has a large height.',
                solution: 'align-content: flex-start; gap: 20px;'
            }
        },
        {
            id: 3,
            description: 'The Card Elasticity: Target ".memory-card" and set its sizing using "flex: 1 1 200px;".',
            completed: false,
            regex: /\.memory-card\s*\{(?=[\s\S]*?flex\s*:\s*1\s+1\s+200px;?)[\s\S]*?\}/,
            hint: {
                concept: 'The shorthand (Grow, Shrink, Basis) is the professional way to size items.',
                strategy: 'Grow: 1 (Yes), Shrink: 1 (Yes), Basis: 200px (The ideal size).',
                solution: 'flex: 1 1 200px;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS NEURAL ARCHIVE */
body {
    background-color: #030303;
    padding: 60px;
    color: white;
}

/* 1, 2. Setup the wrapping container */
.archive-grid {
    min-height: 80vh;
    border: 1px dashed #444;
    padding: 20px;
}

/* 3. Setup the individual cards */
.memory-card {
    background: #111;
    border: 1px solid #333;
    padding: 25px;
    min-height: 150px;
    border-radius: 4px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

.memory-card h5 {
    color: #4cc9f0;
    margin: 0 0 10px 0;
    font-family: monospace;
}

.memory-card p {
    font-size: 13px;
    color: #777;
    margin: 0;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="archive-grid">
    <div class="memory-card">
        <h5>MEM_SCAN_001</h5>
        <p>Neural density at 98%. Integrity stable. Encryption keys active.</p>
    </div>
    <div class="memory-card">
        <h5>MEM_SCAN_002</h5>
        <p>Data fragment detected. Attempting reconstructive handshake...</p>
    </div>
    <div class="memory-card">
        <h5>MEM_SCAN_003</h5>
        <p>Simulation parameters updated. Running recursive query.</p>
    </div>
    <div class="memory-card">
        <h5>MEM_SCAN_004</h5>
        <p>Alert: Buffer overflow in sector 4. Rerouting traffic.</p>
    </div>
    <div class="memory-card">
        <h5>MEM_SCAN_005</h5>
        <p>System idle. All neural paths cleared for deployment.</p>
    </div>
</div>`
        }
    ]
};
