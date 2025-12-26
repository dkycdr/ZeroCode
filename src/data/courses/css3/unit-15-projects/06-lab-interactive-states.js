import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6Interactive = {
    id: 'css-unit15-lab-interactive',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 4: Micro-Interactions',
    duration: '25 min',
    content: `
# Alive Interfaces

A static interface feels dead.
We use **Pseudo-classes** to breathe life into the card.

## Goals
1.  **Lift**: The card should slightly float up on hover.
2.  **Button**: The "Follow" button should darken on hover.
3.  **Active**: The button should shrink slightly when clicked (Feedback).

## Tech Stack
*   \`:hover\`
*   \`:active\`
*   \`transition\`
    `,
    tasks: [
        {
            id: 1,
            description: 'Card Lift: Add transform: translateY(-5px) on .card:hover.',
            completed: false,
            regex: /\.card:hover\s*\{[\s\S]*?transform\s*:\s*translateY\(-5px\)/
        },
        {
            id: 2,
            description: 'Button Press: Add transform: scale(0.95) on .btn:active.',
            completed: false,
            regex: /\.btn:active\s*\{[\s\S]*?transform\s*:\s*scale\(0\.95\)/
        },
        {
            id: 3,
            description: 'Smoothness: Add transition: all 0.2s to both .card and .btn.',
            completed: false,
            regex: /transition\s*:\s*all\s+0\.2s/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `
<div class="card">
    <h2>Interactive Card</h2>
    <p>Hover me, click the button.</p>
    <button class="btn">Follow Me</button>
</div>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #e0e7ff;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
    /* TODO: Transition */
    
}

/* TODO: Card Hover */


.btn {
    background: #4f46e5;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1rem;
    /* TODO: Transition */
    
}

.btn:hover {
    background: #4338ca;
}

/* TODO: Button Active */
`
        }
    ]
};
