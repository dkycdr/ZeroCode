import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab2MultiColumn = {
    id: 'css-unit3-lesson-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Grid System (Repeat)',
    duration: '45 min',
    content: `
# Lab: The Grid System (Repeat)

## 1. The Concept: Industrial Scaling
Architect, a single dashboard is easy. But the **Nexus AI Data Warehouse** contains thousands of modular information cards. To manage this scale, you cannot manually write \`1fr 1fr 1fr...\` for every column.

In this lab, you will master the **repeat()** function. You will create a professional 12-column grid system—the same standard used by the world's most elite software engineering teams.

---

## 2. The Mission: The 12-Column Array
Your objective is to build a scalable grid for the **Warehouse Analytics Panel**:
1.  **Industrial Scaling**: Use the \`repeat()\` function to create 12 equal fractional columns.
2.  **Vertical Tracks**: Define a specific height for your rows using \`grid-template-rows: 200px 300px;\`.
3.  **Precision Placement**: Place the "Analytics Guard" module into column 5 so it aligns with the rest of our security interface.

---

## 3. Senior Guidance: Why 12?
As a Senior Architect, you should know that 12 is a "Perfect Number" for layout. It allows you to easily create layouts with 2 columns (6+6), 3 columns (4+4+4), or 4 columns (3+3+3+3). It is the foundation of modern responsiveness.

> [!TIP]
> **Pro Tip**: If you want your grid to feel premium, use a \`gap\` that is divisible by 4 (e.g., 16px, 20px, 24px). This follows the "8pt Grid System" used by professional UI designers.
`,
    tasks: [
        {
            id: 1,
            description: 'The 12-Column System: On ".warehouse-grid", use "grid-template-columns: repeat(12, 1fr);".',
            completed: false,
            regex: /\.warehouse-grid\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*repeat\(\s*12\s*,\s*1fr\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'repeat() is a shortcut to avoid manual typing.',
                strategy: 'Update the grid-template-columns property.',
                solution: 'grid-template-columns: repeat(12, 1fr);'
            }
        },
        {
            id: 2,
            description: 'The Tiered Rows: Set "grid-template-rows: 200px 300px;".',
            completed: false,
            regex: /\.warehouse-grid\s*\{(?=[\s\S]*?grid-template-rows\s*:\s*200px\s+300px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Explicit rows define a fixed height for your grid lines.',
                strategy: 'The first row will be 200px, the second will be 300px.',
                solution: 'grid-template-rows: 200px 300px;'
            }
        },
        {
            id: 3,
            description: 'The Precise Alignment: Target ".analytics-guard" and set its "grid-column-start" to "5".',
            completed: false,
            regex: /\.analytics-guard\s*\{(?=[\s\S]*?grid-column-start\s*:\s*5;?)[\s\S]*?\}/,
            hint: {
                concept: 'You can move items to specific line numbers.',
                strategy: 'Use the grid-column-start property.',
                solution: 'grid-column-start: 5;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS WAREHOUSE ANALYTICS */
body {
    background: #000;
    padding: 30px;
}

.warehouse-grid {
    display: grid;
    gap: 15px;
    border: 1px dashed #444;
}

.analytics-card {
    background: #111;
    border: 1px solid #333;
    color: #888;
    padding: 15px;
    font-size: 11px;
}

/* 3. Shift this card to the 5th column */
.analytics-guard {
    border: 1px solid #f72585;
    color: #f72585;
    font-weight: bold;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="warehouse-grid">
    <div class="analytics-card">UNIT_001</div>
    <div class="analytics-card">UNIT_002</div>
    <div class="analytics-card">UNIT_003</div>
    <div class="analytics-card">UNIT_004</div>
    <div class="analytics-card analytics-guard">SECURITY_WATCHDOG_V4</div>
</div>`
        }
    ]
};
