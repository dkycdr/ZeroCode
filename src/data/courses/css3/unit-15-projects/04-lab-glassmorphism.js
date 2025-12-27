import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Glass = {
    id: 'css-unit15-lab-glass',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 2: Glassmorphism Aesthetic',
    duration: '30 min',
    content: `
# The "Glass" Look

Glassmorphism is a popular trend that makes UI look like frosted glass.
It relies on background blur and semi-transparent colors.

## The Recipe
1.  **Background**: Semi-transparent white (\`rgba(255, 255, 255, 0.7)\`).
2.  **Filter**: \`backdrop-filter: blur(10px)\`.
3.  **Border**: A thin formatting border to define edges.

## Task
Apply these styles to the \`.card\` class to make it float above the colorful background.
    `,
    tasks: [
        {
            id: 1,
            description: 'Set card background to rgba(255, 255, 255, 0.25).',
            completed: false,
            regex: /\.card\s*\{[\s\S]*?background\s*:\s*rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.25\s*\)/
        },
        {
            id: 2,
            description: 'Apply backdrop-filter: blur(12px).',
            completed: false,
            regex: /\.card\s*\{[\s\S]*?backdrop-filter\s*:\s*blur\(\s*12px\s*\)/
        },
        {
            id: 3,
            description: 'Add a subtle border: 1px solid rgba(255, 255, 255, 0.3).',
            completed: false,
            regex: /\.card\s*\{[\s\S]*?border\s*:\s*1px\s+solid\s+rgba\(\s*255\s*,\s*255\s*,\s*255\s*,\s*0\.3\s*\)/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `
<main>
    <div class="circle-1"></div>
    <div class="circle-2"></div>
    
    <article class="card">
        <h2>Glass UI</h2>
        <p>Floating on top of the world.</p>
    </article>
</main>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #4f46e5, #9333ea); /* Vibrant Background */
    font-family: sans-serif;
    color: white;
}

/* Background Decor Blob 1 */
.circle-1 {
    position: absolute;
    width: 300px;
    height: 300px;
    background: #f472b6;
    border-radius: 50%;
    top: 20%;
    left: 20%;
    filter: blur(50px);
}

/* Background Decor Blob 2 */
.circle-2 {
    position: absolute;
    width: 200px;
    height: 200px;
    background: #22d3ee;
    border-radius: 50%;
    bottom: 20%;
    right: 20%;
    filter: blur(40px);
}

.card {
    width: 300px;
    padding: 2rem;
    border-radius: 24px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    text-align: center;
    
    /* TODO: Add Glass Effect Here */
    
}

h2 { margin-top: 0; }`
        }
    ]
};
