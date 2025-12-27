import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Portfolio = {
    id: 'html5-u8-lab-portfolio',
    type: CONTENT_TYPES.LESSON,
    title: 'Capstone: The Developer Portfolio',
    duration: '45 min',
    content: `
# Your Digital Resume

This is the project that gets you hired.
A clean, semantic, single-page portfolio.

## Architecture
1.  **#about**: A brief intro.
2.  **#work**: A grid of projects (using \`<article>\`).
3.  **#contact**: A simple \`mailto:\` link.

## Tasks
1.  Create a Project Card in the \`#work\` section. It must be an \`<article>\`.
2.  Inside the card, add an \`<h3>\` for the project title.
3.  Add a footer with a copyright notice (\`&copy; 2024\`).
    `,
    tasks: [
        {
            id: 1,
            description: 'Create an <article class="card"> inside #work.',
            completed: false,
            regex: /<section[^>]*id=["']work["'][^>]*>[\s\S]*?<article[^>]*class=["'].*?card.*?["'][^>]*>/i
        },
        {
            id: 2,
            description: 'Add an <h3>Title</h3> inside the article.',
            completed: false,
            regex: /<article[^>]*>[\s\S]*?<h3[^>]*>[\s\S]*?<\/h3>[\s\S]*?<\/article>/i
        },
        {
            id: 3,
            description: 'Add a footer with "&copy; 2024".',
            completed: false,
            regex: /<footer[^>]*>[\s\S]*?&copy;\s*2024[\s\S]*?<\/footer>/i
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html lang="en">
<body>
    <nav>
        <a href="#about">About</a>
        <a href="#work">Work</a>
    </nav>

    <section id="about">
        <h1>Hi, I'm a Developer.</h1>
    </section>

    <section id="work">
        <!-- TODO: Add your project cards here -->
    </section>

    <!-- TODO: Add Footer -->
</body>
</html>`
        }
    ]
};
