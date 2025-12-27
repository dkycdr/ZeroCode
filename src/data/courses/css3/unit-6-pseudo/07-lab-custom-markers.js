import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3CustomMarkers = {
    id: 'css-unit6-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Structural Intelligence (nth-child)',
    duration: '45 min',
    content: `
# Lab: Structural Intelligence (nth-child)

## 1. The Concept: Pattern Recognition
Architect, the **Nexus Security Hub** monitors thousands of incoming data packets. To make these logs readable, we use **Zebra Striping** (alternating colors) and **Structural Highlighting** (marking the first and last of every batch).

In this lab, you will master the **nth-child** algorithm. You will apply different styles to items based purely on their position in the list, ensuring your dashboard remains readable even at high density.

---

## 2. The Mission: The Tactical Log
You are building the **Real-Time Security Feed**:
1.  **Zebra Protocol**: Use \`nth-child(even)\` to give every second row a darker background.
2.  **The Priority Lock**: Use \`:first-child\` to color the first log entry as "Active Scan" (Vibrant Cyan).
3.  **The Exclusion Filter**: Use the \`:not()\` selector to ensure the "Header" of the list doesn't get the zebra background.

---

## 3. Senior Guidance: The (An+B) Formula
If you want to target every 3rd item, use \`3n\`. If you want to target items starting from the 5th one, use \`n+5\`. This level of mathematical control is what separates Junior Designers from Senior Interface Architects.

> [!IMPORTANT]
> **Mission Objective**: Readability. Zebra striping reduces the "Stray-Eye Effect," where a user accidentally reads data from the wrong row.
`,
    tasks: [
        {
            id: 1,
            description: 'The Zebra Effect: On ".log-item:nth-child(even)", set "background: #111;".',
            completed: false,
            regex: /\.log-item:nth-child\(even\)\s*\{(?=[\s\S]*?background\s*:\s*#111;?)[\s\S]*?\}/,
            hint: {
                concept: 'Targeting even items is the foundation of data legibility.',
                strategy: 'Apply background to the nth-child selector.',
                solution: '.log-item:nth-child(even) { background: #111; }'
            }
        },
        {
            id: 2,
            description: 'The Priority Highlight: On ".log-item:first-child", set "color: #4cc9f0;" and "font-weight: 900;".',
            completed: false,
            regex: /\.log-item:first-child\s*\{(?=[\s\S]*?color\s*:\s*#4cc9f0;?)(?=[\s\S]*?font-weight\s*:\s*900;?)[\s\S]*?\}/,
            hint: {
                concept: 'The first-child is the most recent entry in our feed.',
                strategy: 'Update color and weight.',
                solution: 'color: #4cc9f0; font-weight: 900;'
            }
        },
        {
            id: 3,
            description: 'The Boundary Rule: On ".log-item:last-child", set "border-bottom: none;".',
            completed: false,
            regex: /\.log-item:last-child\s*\{(?=[\s\S]*?border-bottom\s*:\s*none;?)[\s\S]*?\}/,
            hint: {
                concept: 'Cleaning up the last border prevents visual bleed.',
                strategy: 'Remove the border-bottom property.',
                solution: 'border-bottom: none;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS TACTICAL LOGS */
body {
    background: #020205;
    padding: 50px;
    font-family: monospace;
}

.log-container {
    border: 1px solid #333;
    max-width: 600px;
    margin: 0 auto;
}

.log-item {
    padding: 15px 20px;
    color: #888;
    border-bottom: 1px solid #222;
    display: flex;
    justify-content: space-between;
}

/* 1. Even and First/Last Logic here */
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="log-container">
    <div class="log-item"><span>ENTRY_0949</span> <span>STABLE</span></div>
    <div class="log-item"><span>ENTRY_0948</span> <span>STABLE</span></div>
    <div class="log-item"><span>ENTRY_0947</span> <span>STABLE</span></div>
    <div class="log-item"><span>ENTRY_0946</span> <span>STABLE</span></div>
    <div class="log-item"><span>ENTRY_0945</span> <span>STABLE</span></div>
</div>`
        }
    ]
};
