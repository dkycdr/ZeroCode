import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5Responsive = {
    id: 'css-unit15-lab-responsive',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 3: Responsive Adaptation',
    duration: '35 min',
    content: `
# Layout Morphing

A responsive component changes its **shape**, not just its size.
*   **Mobile**: Tall & Narrow (Stacked).
*   **Desktop**: Wide & Horizontal (Row).

## Task
1.  On Mobile: \`flex-direction: column\`.
2.  On Desktop (\`min-width: 600px\`): \`flex-direction: row\`.
3.  Adjust the alignment of text (Center on mobile, Left on desktop).
    `,
    tasks: [
        {
            id: 1,
            description: 'Mobile Default: Set .card to flex-direction column and text-align center.',
            completed: false,
            regex: /\.card\s*\{[\s\S]*?flex-direction\s*:\s*column[\s\S]*?text-align\s*:\s*center/
        },
        {
            id: 2,
            description: 'Desktop Query: At min-width 600px, set .card to flex-direction row.',
            completed: false,
            regex: /@media\s*\(\s*min-width\s*:\s*600px\s*\)\s*\{[\s\S]*?\.card\s*\{[\s\S]*?flex-direction\s*:\s*row/
        },
        {
            id: 3,
            description: 'Desktop Alignment: Inside query, set text-align: left for the card info.',
            completed: false,
            regex: /@media\s*\(\s*min-width\s*:\s*600px\s*\)\s*\{[\s\S]*?text-align\s*:\s*left/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `
<article class="card">
    <img src="https://placehold.co/150" class="avatar">
    <div class="info">
        <h2>John Developer</h2>
        <p>Building things for the web.</p>
    </div>
</article>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f8fafc;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    display: flex;
    gap: 1.5rem;
    align-items: center;
    
    /* TODO: Default Mobile Styles */
    
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

/* TODO: Desktop Styles */
@media (min-width: 600px) {
    
}`
        }
    ]
};
