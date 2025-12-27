import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Semantics = {
    id: 'css-unit15-lab-structure',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 1: The Semantic Skeleton',
    duration: '20 min',
    content: `
# The Skeleton

A professional component starts with accessible HTML.
We will avoid "div soup".

## The Blueprint
1.  **Container**: Use \`<article>\` (Self-contained content).
2.  **Image**: Use \`<figure>\` for the wrapper and \`<img>\` inside.
3.  **Details**: Use \`<header>\` for the name/role.

## Task
Replace the generic divs with the tags above.
    `,
    tasks: [
        {
            id: 1,
            description: 'Change the outer div to <article class="card">.',
            completed: false,
            regex: /<article[^>]*class=["']card["'][^>]*>/
        },
        {
            id: 2,
            description: 'Wrap the image in a <figure class="avatar-wrapper">.',
            completed: false,
            regex: /<figure[^>]*class=["']avatar-wrapper["'][^>]*>[\s\S]*?<img/
        },
        {
            id: 3,
            description: 'Use <h2> for the Name (Jane Doe).',
            completed: false,
            regex: /<h2[^>]*>Jane Doe<\/h2>/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `
<!-- TODO: Refactor this generic HTML -->
<div class="card">
    <div class="avatar-wrapper">
        <img src="https://placehold.co/400x400" alt="Jane Doe Profile" class="avatar">
    </div>
    <div class="info">
        <h3>Jane Doe</h3> <!-- Should be H2 -->
        <p>Senior Frontend Engineer</p>
    </div>
</div>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `/* Basic Reset */
* { box-sizing: border-box; }
body {
    font-family: 'Inter', sans-serif;
    background: #e2e8f0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
`
        }
    ]
};
