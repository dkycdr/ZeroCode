import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4SubgridAlignment = {
    id: 'css-unit16-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 4: Subgrid Alignment',
    duration: '30 min',
    content: `
## The Mission
You have 3 cards. Card B has a very long title.
Normally, Card A's title would look disconnected because it's shorter.
Use **Subgrid** so *all titles share the same row height*, aligning perfectly.

**Task:**
1.  Set the parent grid to have auto-rows.
2.  Set the child (.card) to span 3 rows.
3.  Set the child's \`grid-template-rows\` to \`subgrid\`.
`,
    tasks: [
        {
            id: 1,
            description: 'Parent: Set grid-auto-rows to auto auto 1fr (Title, Subtitle, Body).',
            completed: false,
            regex: /\.grid\s*\{[\s\S]*?grid-auto-rows\s*:\s*auto\s+auto\s+1fr\s*;?[\s\S]*?\}/
        },
        {
            id: 2,
            description: 'Card: Set grid-row to span 3.',
            completed: false,
            regex: /\.card\s*\{[\s\S]*?grid-row\s*:\s*span\s+3\s*;?[\s\S]*?\}/
        },
        {
            id: 3,
            description: 'Card: Activate Subgrid on rows.',
            completed: false,
            regex: /\.card\s*\{[\s\S]*?grid-template-rows\s*:\s*subgrid\s*;?[\s\S]*?\}/
        },
        {
            id: 4,
            description: 'Card: Set display: grid (Subgrid requires the element to be a grid container too).',
            completed: false,
            regex: /\.card\s*\{[\s\S]*?display\s*:\s*grid\s*;?[\s\S]*?\}/
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* TODO: Row definitions for children to inherit */
    
}

.card {
    background: #eee;
    /* TODO: Connect to parent rows */
    
}`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="grid">
    <div class="card">
        <h3>Short</h3>
        <p>Content</p>
    </div>
    <div class="card">
        <h3>Very Long Title That Wraps</h3>
        <p>Content</p>
    </div>
</div>`
        }
    ]
};
