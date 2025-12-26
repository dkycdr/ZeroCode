import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3AreaSpanning = {
    id: 'css-unit3-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Control Panel (Spanning)',
    duration: '50 min',
    content: `
# Lab: The Control Panel (Spanning)

## 1. The Concept: Multi-Cell Sovereignty
Architect, not every dashboard module is the same size. The **Main Neural Map** needs a massive amount of visual space, while the **Status Logs** only need a small sidebar.

In this lab, you will master **Spanning**. You will take a single grid item and force it to cover multiple columns and rows. You will also use the **Negative Line Number (-1)** trick to ensure your header always covers the full width of any monitor.

---

## 2. The Mission: The Asymmetric Shell
You are building the **Central Control Interface**:
1.  **Full-Width Header**: Make the \`.header\` span from line 1 to the very last line (-1).
2.  **The Neural Expansion**: Make the \`.neural-map\` span 2 columns and 2 rows so it dominates the view.
3.  **Horizontal Leveling**: Perfectly center the text inside your modular cards using the Grid alignment system.

---

## 3. Senior Guidance: Span vs. Line Numbers
You have two choices:
- \`grid-column: 1 / 4;\` (Explicitly naming the start and end lines).
- \`grid-column: span 3;\` (Telling the item to grow by 3 cells from its current position).
As a professional, use \`span\` when you want your items to be flexible, and use line numbers when you have a specific, fixed position in mind.

> [!CAUTION]
> **Logic Warning**: If you span an item into an occupied cell, the browser will shift the other items away to accommodate it.
`,
    tasks: [
        {
            id: 1,
            description: 'The Full Span: On ".header", set "grid-column: 1 / -1;".',
            completed: false,
            regex: /\.header\s*\{(?=[\s\S]*?grid-column\s*:\s*1\s*\/\s*-1;?)[\s\S]*?\}/,
            hint: {
                concept: '-1 always refers to the final line of the grid.',
                strategy: 'This ensures the header spans the entire width regardless of column count.',
                solution: 'grid-column: 1 / -1;'
            }
        },
        {
            id: 2,
            description: 'The Giant Map: On ".neural-map", set "grid-column: span 2;" and "grid-row: span 2;".',
            completed: false,
            regex: /\.neural-map\s*\{(?=[\s\S]*?grid-column\s*:\s*span\s+2;?)(?=[\s\S]*?grid-row\s*:\s*span\s+2;?)[\s\S]*?\}/,
            hint: {
                concept: 'Span tells the item to occupy multiple cells in either direction.',
                strategy: 'Apply both column and row spanning.',
                solution: 'grid-column: span 2; grid-row: span 2;'
            }
        },
        {
            id: 3,
            description: 'The Center Lock: On ".control-card", set "display: grid;" and "place-items: center;".',
            completed: false,
            regex: /\.control-card\s*\{(?=[\s\S]*?display\s*:\s*grid;?)(?=[\s\S]*?place-items\s*:\s*center;?)[\s\S]*?\}/,
            hint: {
                concept: 'Place-items is the ultimate shorthand for 2D centering.',
                strategy: 'Every card internal content will now be perfectly centered.',
                solution: 'display: grid; place-items: center;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS CONTROL PANEL */
body {
    background: #020205;
    padding: 50px;
    color: white;
}

.interface-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 100px);
    gap: 15px;
}

.control-card {
    background: #111;
    border: 1px solid #333;
    font-family: monospace;
    font-size: 12px;
}

.header {
    background: #4cc9f0;
    color: black;
    font-weight: 900;
    padding: 10px;
    /* 1. Span full width */
}

/* 2. Expand this map module */
.neural-map {
    border: 2px solid #f72585;
    background: #1a1a1a;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="interface-grid">
    <div class="control-card header">NEXUS_OS_v2.0_INTERFACE</div>
    
    <div class="control-card neural-map">NEURAL_MAP_VIEW</div>
    
    <div class="control-card">LOG_001</div>
    <div class="control-card">LOG_002</div>
    <div class="control-card">LOG_003</div>
    <div class="control-card">LOG_004</div>
    <div class="control-card">SYSTEM_STABLE</div>
</div>`
        }
    ]
};
