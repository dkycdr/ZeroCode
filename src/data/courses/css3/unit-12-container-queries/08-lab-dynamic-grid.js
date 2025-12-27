import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4DynamicGrid = {
    id: 'css-unit12-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Dynamic Auto-Grid',
    duration: '30 min',
    content: `
# Lab: The Dynamic Auto-Grid (Contextual Density)

## 1. The Concept: Responsive Mesh
Architect, one of the most powerful applications of Container Queries is managing **Grid Density**. 

Using standard Media Queries, a 3-column grid would remain 3 columns wide on desktop even if it was placed inside a narrow modal or a small slide-out panel. This creates a "smushed" and unreadable interface.

We will engineer a **Dynamic Data-Mesh** that adjusts its column count based on its available container width. This ensures that the same grid module always provides the optimal data density, whether it's full-screen or tucked into a widget slot.

---

## 2. The Mission: The Nexus Data Mesh
Refactor the \`.nexus-grid\` to dynamically shift between 1, 2, and 3 columns based on the width of the \`.grid-wrapper\`.

### Deployment Parameters:
1.  **Context Establishment**: Set \`container-type: inline-size;\` on the \`.grid-wrapper\`.
2.  **Base Layer**: Configure the \`.nexus-grid\` to default to a single column (\`1fr\`).
3.  **The Mid Threshold**: Create a query for \`min-width: 400px\` that shifts the grid to **2 columns** (\`repeat(2, 1fr)\`).
4.  **The Elite Threshold**: Create a second query for \`min-width: 700px\` that expands the grid to **3 columns** (\`repeat(3, 1fr)\`).

---

## 3. Machine Logic: Adaptive Step-Down
As the container shrinks, the browser drops the column count based on your defined breakpoints. This happens independently of the phone or desktop window size. It is a **"Self-Correcting"** layout.

---

## 4. Senior Architect's Guidance
> [!IMPORTANT]
> **Avoid Conflict**: Ensure your grid breakpoints are logical and provide enough room for the content within each cell. A 3-column grid at 400px would likely be too cramped.

> [!TIP]
> **Flexibility**: Use \`gap: 20px;\` to maintain consistent breathing space between your data nodes regardless of how many columns are active.
`,
    tasks: [
        {
            id: 1,
            description: 'The Mesh Context: Register ".grid-wrapper" as a container using "inline-size".',
            completed: false,
            regex: /\.grid-wrapper\s*\{(?=[\s\S]*?container-type\s*:\s*inline-size;?)[\s\S]*?\}/,
            hint: {
                concept: 'Container queries require a declared containment context to function.',
                strategy: 'Apply property to the wrapper element.',
                solution: 'container-type: inline-size;'
            }
        },
        {
            id: 2,
            description: 'The Base Stack: In ".nexus-grid", set "grid-template-columns: 1fr;".',
            completed: false,
            regex: /\.nexus-grid\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*1fr;?)[\s\S]*?\}/,
            hint: {
                concept: 'Start with the simplest, narrowest layout as the base.',
                strategy: 'Define the single-column template.',
                solution: 'grid-template-columns: 1fr;'
            }
        },
        {
            id: 3,
            description: 'The Mid Shift: Create an "@container" query for min-width: 400px and set ".nexus-grid" to 2 columns.',
            completed: false,
            regex: /@container\s*\(\min-width\s*:\s*400px\s*\)\s*\{[\s\S]*?\.nexus-grid\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*repeat\(2,\s*1fr\);?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'The query triggers the expansion to multi-column layout.',
                strategy: 'Add the 2-column repeat syntax inside the first @container block.',
                solution: 'grid-template-columns: repeat(2, 1fr);'
            }
        },
        {
            id: 4,
            description: 'The Elite Shift: Create an "@container" query for min-width: 700px and set ".nexus-grid" to 3 columns.',
            completed: false,
            regex: /@container\s*\(\min-width\s*:\s*700px\s*\)\s*\{[\s\S]*?\.nexus-grid\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*repeat\(3,\s*1fr\);?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'At high container widths, the grid expands to its full density.',
                strategy: 'Add the 3-column repeat syntax inside the second @container block.',
                solution: 'grid-template-columns: repeat(3, 1fr);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS DATA MESH - DYNAMIC DENSITY ENGINE */
body {
    background: #05050a;
}

.grid-wrapper {
    /* 1. Register the context below */

}

.nexus-grid {
    display: grid;
    gap: 20px;
    padding: 20px;
    /* 2. Implement base 1-column layout below */

}

.data-node {
    background: #0a0a0f;
    border: 1px solid #1a1a1e;
    color: #4cc9f0;
    padding: 30px;
    text-align: center;
    font-family: 'Space Mono', monospace;
    border-radius: 4px;
}

/* 3 & 4. Implement adaptive container queries below */

`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="test-environment">
    <div class="grid-wrapper" style="width: 100%; max-width: 800px; margin: auto; padding-top: 50px;">
        <div class="nexus-grid">
            <div class="data-node">NODE_01</div>
            <div class="data-node">NODE_02</div>
            <div class="data-node">NODE_03</div>
            <div class="data-node">NODE_04</div>
            <div class="data-node">NODE_05</div>
            <div class="data-node">NODE_06</div>
        </div>
    </div>
</div>`
        }
    ]
};
