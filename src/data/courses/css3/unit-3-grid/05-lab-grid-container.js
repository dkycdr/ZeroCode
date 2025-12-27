import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1GridContainer = {
    id: 'css-unit3-lesson-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Initializing the Power Grid',
    duration: '40 min',
    content: `
# Lab: Initializing the Power Grid

## 1. The Concept: 2D Activation
Architect, we are moving beyond the 1D limitations of Flexbox. The **Nexus AI Main Operations Center** requires a rigid, multi-column dashboard that doesn't "shift" or "flow" unpredictably.

In this lab, you will activate the **Grid Engine** and define your first Explicit Grid. You will master the use of the **Fractional Unit (fr)** to create a perfectly balanced layout that automatically absorbs all available monitor space.

---

## 2. The Mission: The Operations Lattice
You are building the foundation for the **Mission Overview Panel**.
### Your Objectives:
1.  **Grid Activation**: Turn the \`.ops-container\` into a grid.
2.  **Lattice Definition**: Use \`grid-template-columns\` to create a 3-part layout: Left (1 part), Middle (2 parts), Right (1 part).
3.  **The Thermal Gap**: Ensure all modules have a structural \`gap\` so your data doesn't touch.

---

## 3. Senior Guidance: The Power of \`fr\`
Avoid using \`width: 25%\`. Why? Because if you have a 20px gap, \`25% + 25% + 25% + 25% + 20px\` is more than 100%, and your layout will break. 
The \`fr\` unit is smarter—it calculates the gap first, then divides the remaining space. It is mathematically impossible to break a layout using \`fr\` units.

> [!IMPORTANT]
> **Mission Objective**: Structural Perfection. Your goal is a 3-column system that remains perfectly balanced regardless of the user's screen resolution.
`,
    tasks: [
        {
            id: 1,
            description: 'The Activation: In "style.css", set ".ops-container" to "display: grid;".',
            completed: false,
            regex: /\.ops-container\s*\{(?=[\s\S]*?display\s*:\s*grid;?)[\s\S]*?\}/,
            hint: {
                concept: 'display: grid activates the 2D layout context.',
                strategy: 'Update the .ops-container class.',
                solution: 'display: grid;'
            }
        },
        {
            id: 2,
            description: 'The Column Protocol: Create 3 columns with the ratio 1:2:1 using "grid-template-columns: 1fr 2fr 1fr;".',
            completed: false,
            regex: /\.ops-container\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*1fr\s+2fr\s+1fr;?)[\s\S]*?\}/,
            hint: {
                concept: 'fr stands for fractional unit.',
                strategy: 'This creates 3 columns where the middle one is twice as wide as the outer ones.',
                solution: 'grid-template-columns: 1fr 2fr 1fr;'
            }
        },
        {
            id: 3,
            description: 'The Structural Gap: Add a "gap: 20px;" to the container.',
            completed: false,
            regex: /\.ops-container\s*\{(?=[\s\S]*?gap\s*:\s*20px;?)[\s\S]*?\}/,
            hint: {
                concept: 'Gap manages the space between both rows and columns.',
                strategy: 'Apply it to the parent container.',
                solution: 'gap: 20px;'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS OPS CENTER STYLES */
body {
    background: #020205;
    color: white;
    font-family: 'Inter', sans-serif;
    padding: 40px;
}

/* 1, 2, 3. Initialize the 3-column Grid here */
.ops-container {
    border: 1px solid #222;
    padding: 20px;
}

.module {
    background: #111;
    border: 1px solid #333;
    padding: 20px;
    min-height: 150px;
}

.module h4 {
    color: #4cc9f0;
    margin: 0 0 10px 0;
    font-size: 14px;
    letter-spacing: 1px;
}

.module p {
    color: #666;
    font-size: 12px;
}
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="ops-container">
    <div class="module">
        <h4>NAVIGATION_FEED</h4>
        <p>Current Course: Sector 7G. Velocity stable.</p>
    </div>
    
    <div class="module">
        <h4>NEURAL_PROCESSOR_CORE</h4>
        <p>Analyzing 10.4 billion data points per second. Efficiency at 99.4%.</p>
    </div>
    
    <div class="module">
        <h4>COMMS_ARRAY</h4>
        <p>Signal strength: Optimal. 0 packets lost.</p>
    </div>
</div>`
        }
    ]
};
