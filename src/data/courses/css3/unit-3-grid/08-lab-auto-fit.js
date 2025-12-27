import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4AutoFit = {
    id: 'css-unit3-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Liquid Dashboard (Auto-Fit)',
    duration: '40 min',
    content: `
# Lab: The Liquid Dashboard (Auto-Fit)

## 1. The Concept: Zero-Breakpoint Response
Architect, you are being deployed to the **Nexus Mobile Fleet**. Your dashboard must work on everything from a massive 4K command monitor to a tiny mobile wrist-unit. 

In this lab, you will master the "Holy Grail" of modern CSS: the **auto-fit** pattern. You will build a layout that automatically creates as many columns as will fit, and then wraps them without requiring a single Media Query.

---

## 2. The Mission: The Adaptive Fleet
You must build the **Active Vessel Monitor**:
1.  **Dynamic Generation**: Use \`repeat(auto-fit, ...)\` so the browser decides the column count.
2.  **Safety Limits**: Use \`minmax(250px, 1fr)\` so the cards never get too skinny to read.
3.  **Visual Alignment**: Ensure the entire grid is perfectly centered horizontally if there is extra space.

---

## 3. Senior Guidance: The Logic of Magic
When you use \`auto-fit\`, the browser calculates: *"Can I fit another 250px column here?"*
- If YES: It adds the column.
- If NO: It takes the remaining space and stretches the existing columns (\`1fr\`) to fill it. 
This is why it is called "Fluidity."

> [!CAUTION]
> **Performance Warning**: Always set a reasonable \`min\` value in \`minmax\`. If you set it to \`0px\`, the browser might try to create thousands of columns, which will crash the rendering engine.
`,
    tasks: [
        {
            id: 1,
            description: 'The Magic Grid: On ".vessel-grid", use "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));".',
            completed: false,
            regex: /\.vessel-grid\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*repeat\(\s*auto-fit\s*,\s*minmax\(\s*280px\s*,\s*1fr\s*\)\s*\);?)[\s\S]*?\}/,
            hint: {
                concept: 'Auto-fit is the secret to responsive design without media queries.',
                strategy: 'This will create a dynamic number of columns that are at least 280px wide.',
                solution: 'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));'
            }
        },
        {
            id: 2,
            description: 'The Horizontal Anchor: Center the whole grid lattice using "justify-content: center;".',
            completed: false,
            regex: /\.vessel-grid\s*\{(?=[\s\S]*?justify-content\s*:\s*center;?)[\s\S]*?\}/,
            hint: {
                concept: 'This centers the entire grid tracks within the parent container.',
                strategy: 'Apply it to the parent .vessel-grid.',
                solution: 'justify-content: center;'
            }
        },
        {
            id: 3,
            description: 'The Perfect Gutter: Add "gap: 25px;".',
            completed: false,
            regex: /\.vessel-grid\s*\{(?=[\s\S]*?gap\s*:\s*25px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Spacing keeps the vessel data clear and distinct.',
                strategy: 'Apply the gap property.',
                solution: 'gap: 25px;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS FLEET MONITOR */
body {
    background: #000;
    padding: 40px;
    font-family: 'Inter', sans-serif;
}

/* 1, 2, 3. Build the Magic Responsive Grid here */
.vessel-grid {
    display: grid;
    max-width: 1400px;
    margin: 0 auto;
}

.vessel-card {
    background: #111;
    border-bottom: 3px solid #4cc9f0;
    padding: 30px;
}

.vessel-card h3 {
    color: white;
    margin: 0 0 10px 0;
    font-size: 16px;
}

.vessel-card .status {
    color: #4cc9f0;
    font-family: monospace;
    font-size: 12px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="vessel-grid">
    <div class="vessel-card">
        <h3>VOYAGER_01</h3>
        <span class="status">STATION: MARS_ORBIT</span>
    </div>
    <div class="vessel-card">
        <h3>VOYAGER_02</h3>
        <span class="status">STATION: TITAN_BASE</span>
    </div>
    <div class="vessel-card">
        <h3>STRIKER_X</h3>
        <span class="status">STATION: DEEP_SPACE</span>
    </div>
    <div class="vessel-card">
        <h3>CARGO_049</h3>
        <span class="status">STATION: EARTH_DOCK</span>
    </div>
</div>`
        }
    ]
};
