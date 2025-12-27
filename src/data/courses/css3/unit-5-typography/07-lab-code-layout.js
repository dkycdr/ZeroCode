import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3CodeLayout = {
    id: 'css-unit5-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Code Specialist (Monospace)',
    duration: '45 min',
    content: `
# Lab: The Code Specialist (Monospace)

## 1. The Concept: Logical Alignment
Architect, for technical logs and raw data in the **Nexus AI Engine**, standard fonts won't work. We need **Monospace** fonts where every character is exactly the same width. This allows us to align columns of data horizontally without using tables.

In this lab, you will build a **Raw Data Terminal**. You will master the \`font-family\` stack for monospace and learn how to control the specific line-height needed for technical readability.

---

## 2. The Mission: The Terminal View
1.  **Monospace Switch**: Set the \`.code-block\` to use a high-quality Monospace stack.
2.  **Tabular Alignment**: Ensure the text doesn't look "Cramped" by setting a generous \`line-height\`.
3.  **Color Coding**: Use a distinct color for headlines in the code to differentiate them from the data.

---

## 3. Senior Guidance: The Monospace Stack
Always provide fallbacks:
\`font-family: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;\`. 
Monospace fonts are especially sensitive to screen smoothing. If your code looks "Blurry," trying dropping the font-size slightly or switching to a lighter weight.

> [!IMPORTANT]
> **Mission Objective**: Total Alignment. In a monospace environment, 10 characters should take up exactly the same width as any other 10 characters on any line.
`,
    tasks: [
        {
            id: 1,
            description: 'The Toolset: On ".code-block", set "font-family: monospace;".',
            completed: false,
            regex: /\.code-block\s*\{(?=[\s\S]*?font-family\s*:\s*monospace;?)[\s\S]*?\}/,
            hint: {
                concept: 'Monospace is the generic keyword for non-proportional fonts.',
                strategy: 'Update .code-block rule.',
                solution: 'font-family: monospace;'
            }
        },
        {
            id: 2,
            description: 'The Data Breath: On ".code-block", set "line-height: 1.8;".',
            completed: false,
            regex: /\.code-block\s*\{(?=[\s\S]*?line-height\s*:\s*1\.8;?)[\s\S]*?\}/,
            hint: {
                concept: 'Technical data often needs more vertical space to prevent misreading.',
                strategy: 'Increase the line-height.',
                solution: 'line-height: 1.8;'
            }
        },
        {
            id: 3,
            description: 'The Key Highlight: On ".key", set "color: #f72585;" and "font-weight: bold;".',
            completed: false,
            regex: /\.key\s*\{(?=[\s\S]*?color\s*:\s*#f72585;?)(?=[\s\S]*?font-weight\s*:\s*bold;?)[\s\S]*?\}/,
            hint: {
                concept: 'Hierarchy in data is achieved through color and weight.',
                strategy: 'Target the .key span.',
                solution: 'color: #f72585; font-weight: bold;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS_RAW_DATA_VIEWER */
body {
    background: #000;
    padding: 40px;
}

.code-block {
    background: #111;
    border: 1px solid #333;
    padding: 30px;
    color: #4cc9f0;
}

/* 3. Style the data keys */
.key {
    text-transform: uppercase;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="code-block">
    <div><span class="key">PROCESS_ID:</span> 0049-X</div>
    <div><span class="key">MEMORY_MAP:</span> 0xFA4922</div>
    <div><span class="key">TEMP_CORE:</span> 34.2 degrees C</div>
    <div><span class="key">STATUS:</span> OPERATIONAL</div>
</div>`
        }
    ]
};
