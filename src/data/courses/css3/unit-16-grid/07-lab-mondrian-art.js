import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Mondrian = {
    id: 'css-unit16-lab-mondrian',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 3: Mondrian Art (Placement)',
    duration: '45 min',
    content: `
# Modernist Canvas (Piet Mondrian)

CSS Grid is not just for layouts; it's a coordinate system.
We will recreate a "De Stijl" art piece using Explicit Line Placement.

## The Challenge
1.  We have a 4x4 Grid.
2.  You must place the colored blocks exactly where the Artist specifies.
3.  **No HTML changes allowed**. Only CSS.

## Coordinates
*   **Red Block**: Top-Right corner (span 2 cols).
*   **Blue Block**: Bottom-Left.
*   **Yellow Block**: Center-Right.
*   **Black Divider**: A thin line spanning the middle.
    `,
    tasks: [
        {
            id: 1,
            description: 'Red Block: Place at grid-column 3 / 5 and grid-row 1 / 3.',
            completed: false,
            regex: /\.block-red\s*\{[\s\S]*?grid-column\s*:\s*3\s*\/\s*5\s*;\s*grid-row\s*:\s*1\s*\/\s*3\s*;[\s\S]*?\}/
        },
        {
            id: 2,
            description: 'Blue Block: Place at bottom-left (col 1, row 4).',
            completed: false,
            regex: /\.block-blue\s*\{[\s\S]*?grid-column\s*:\s*1\s*;[\s\S]*?grid-row\s*:\s*4\s*;[\s\S]*?\}/
        },
        {
            id: 3,
            description: 'Yellow Block: Span 2 columns in the middle (col 2 / 4, row 2).',
            completed: false,
            regex: /\.block-yellow\s*\{[\s\S]*?grid-column\s*:\s*2\s*\/\s*4\s*;[\s\S]*?\}/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="canvas">
    <div class="block block-red"></div>
    <div class="block block-white-1"></div>
    <div class="block block-yellow"></div>
    <div class="block block-blue"></div>
    <div class="block block-white-2"></div>
    <!-- Decor Elements -->
    <div class="line-horizontal"></div>
    <div class="line-vertical"></div>
</div>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #f0f0f0;
}

.canvas {
    width: 400px;
    height: 400px;
    background: white;
    border: 10px solid #111;
    box-shadow: 20px 20px 0px rgba(0,0,0,0.1);
    
    /* 4x4 Explicit Grid */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 0; /* Mondrian uses black borders, but we simulate with borders on blocks */
    position: relative;
    overflow: hidden;
}

.block {
    border: 4px solid #111;
    /* Box-sizing ensures borders don't break grid sizing */
    box-sizing: border-box; 
}

/* --- COLORS --- */
.block-red {
    background: #E30022;
    /* TODO: Place Top Right (Span 2) */
    
    z-index: 2;
}

.block-blue {
    background: #0078D7;
    /* TODO: Place Bottom Left */
    
}

.block-yellow {
    background: #FFD700;
    /* TODO: Place Middle */
    
}

.block-white-1 {
    background: #fff;
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}
.block-white-2 {
    background: #fff;
    grid-column: 2 / 5;
    grid-row: 3 / 5;
}

/* ABSOLUTE OVERLAY IN GRID */
.line-horizontal {
    grid-column: 1 / 5;
    grid-row: 2 / 3;
    height: 10px;
    background: #111;
    align-self: end; /* Bottom of row 2 */
    margin-bottom: -5px; /* Centering hack */
    z-index: 5;
}
`
        }
    ]
};
