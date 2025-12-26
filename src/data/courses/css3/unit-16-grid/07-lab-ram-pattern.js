import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3RAMPattern = {
    id: 'css-unit16-lesson-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 3: RAM Pattern (Responsive Cards)',
    duration: '20 min',
    content: `
## The Mission
Create a card layout that "Just Works" on every screen size without a single \`@media\` query.
Use the **RAM** pattern.

**Task:**
Use \`repeat(auto-fit, minmax(250px, 1fr))\`.
`,
    tasks: [
        {
            id: 1,
            description: 'Set display: grid and gap 20px.',
            completed: false,
            regex: /\.cards\s*\{[\s\S]*?display\s*:\s*grid\s*;?[\s\S]*?gap\s*:\s*20px\s*;?[\s\S]*?\}/
        },
        {
            id: 2,
            description: 'Implement the RAM pattern: repeat(auto-fit, minmax(250px, 1fr)).',
            completed: false,
            regex: /\.cards\s*\{[\s\S]*?grid-template-columns\s*:\s*repeat\(auto-fit,\s*minmax\(250px,\s*1fr\)\)\s*;?[\s\S]*?\}/
        },
        {
            id: 3,
            description: 'Set min-height for cards to 200px.',
            completed: false,
            regex: /\.card\s*\{[\s\S]*?min-height\s*:\s*200px\s*;?[\s\S]*?\}/
        }
    ],
    files: [
        {
            name: 'style.css',
            language: 'css',
            content: `.cards {
    /* TODO: RAM Pattern */

}

.card {
    background: white;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    /* TODO: Size */
}`
        },
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="cards">
    <div class="card">A</div>
    <div class="card">B</div>
    <div class="card">C</div>
</div>`
        }
    ]
};
