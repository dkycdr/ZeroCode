import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4BreakpointDashboard = {
    id: 'css-unit4-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Multi-Breakpoint Hub',
    duration: '60 min',
    content: `
# Lab: The Multi-Breakpoint Hub

## 1. The Concept: Total Environmental Awareness
Architect, this is the final simulation for Unit 4. You must now combine everything you have learned—**Mobile-First Strategy**, **Relative Units (rem)**, and **Multi-Stage Media Queries**—to build a dashboard that feels native on any screen size.

The **Nexus AI Command Hub** requires 3 distinct layouts:
- **Mobile**: Stacked vertically for narrow views.
- **Tablet**: A 2-column grid for medium widths.
- **Desktop**: A 4-column balanced grid for wide command centers.

---

## 2. The Mission: The Strategic Grid
1.  **Relative Foundation**: Use \`rem\` for all padding and margins to ensure accessibility.
2.  **Tablet Shift**: Trigger a 2-column grid at \`768px\`.
3.  **Desktop Expansion**: Trigger a 4-column grid at \`1200px\`.

---

## 3. Senior Guidance: The Breakpoint Hierarchy
Always order your media queries from **Smallest to Largest**. 
1.  Base (Mobile)
2.  768px (Tablet)
3.  1200px (Desktop)
This is because CSS reads from top to bottom. If you put the Tablet query *below* the Desktop query, the Desktop styles might accidentally override the specific Tablet layout.

> [!IMPORTANT]
> **Mission Objective**: Structural Integrity. Your dashboard should transition smoothly without "jittering" or overlapping content during the resize.
`,
    tasks: [
        {
            id: 1,
            description: 'The Accessible Base: On ".data-card", set "padding: 1.5rem;" and "margin-bottom: 2rem;".',
            completed: false,
            regex: /\.data-card\s*\{(?=[\s\S]*?padding\s*:\s*1\.5rem;?)(?=[\s\S]*?margin-bottom\s*:\s*2rem;?)[\s\S]*?\}/,
            hint: {
                concept: 'Using rem ensures your spacing scales if the user increases their browser font size.',
                strategy: 'Avoid pixels for these properties.',
                solution: 'padding: 1.5rem; margin-bottom: 2rem;'
            }
        },
        {
            id: 2,
            description: 'The Tablet Tier: Create a media query for "@media (min-width: 768px)" and set ".hub-grid" to "display: grid;" and "grid-template-columns: repeat(2, 1fr);".',
            completed: false,
            regex: /@media\s*\(\s*min-width\s*:\s*768px\s*\)\s*\{[\s\S]*?\.hub-grid\s*\{(?=[\s\S]*?display\s*:\s*grid;?)(?=[\s\S]*?grid-template-columns\s*:\s*repeat\(\s*2\s*,\s*1fr\s*\);?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'Tablet typically starts at 768px (iPad portrait width).',
                strategy: 'Create the 2-column layout here.',
                solution: 'grid-template-columns: repeat(2, 1fr);'
            }
        },
        {
            id: 3,
            description: 'The Desktop Tier: Create a media query for "@media (min-width: 1200px)" AND set ".hub-grid" to "grid-template-columns: repeat(4, 1fr);".',
            completed: false,
            regex: /@media\s*\(\s*min-width\s*:\s*1200px\s*\)\s*\{[\s\S]*?\.hub-grid\s*\{(?=[\s\S]*?grid-template-columns\s*:\s*repeat\(\s*4\s*,\s*1fr\s*\);?)[\s\S]*?\}[\s\S]*?\}/,
            hint: {
                concept: 'Desktop tier allows for maximum complexity.',
                strategy: 'Since the display: grid is already inherited from the 768px query, you only need to update the column count.',
                solution: 'grid-template-columns: repeat(4, 1fr);'
            }
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `/* NEXUS COMMAND HUB */
body {
    background: #000;
    color: white;
    font-family: 'Inter', sans-serif;
}

.hub-grid {
    padding: 2rem;
    gap: 1.5rem;
}

.data-card {
    background: #111;
    border: 1px solid #222;
}

.data-card h3 {
    color: #4cc9f0;
    font-size: 0.9rem;
    letter-spacing: 1px;
}

/* 2. Tablet Query (min-width: 768px) */

/* 3. Desktop Query (min-width: 1200px) */
`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="hub-grid">
    <div class="data-card"><h3>MEMORY_LOAD</h3></div>
    <div class="data-card"><h3>SIGNAL_STRENGTH</h3></div>
    <div class="data-card"><h3>ACTIVE_WORKERS</h3></div>
    <div class="data-card"><h3>GATEWAY_STATUS</h3></div>
</div>`
        }
    ]
};
