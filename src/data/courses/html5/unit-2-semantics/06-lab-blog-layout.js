import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labBlogLayout = {
    id: 'html5-u2-lab-2-blog',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Perfect Blog Post',
    duration: '25 min',
    content: `
# Lab: The Perfect Blog Post

## The Assignment
You are building a blog template for a high-traffic news site.
The structure must be **perfect** for SEO and Syndication (Apple News, RSS).

## The Blueprint
1. Wrap the entire post in an **\`<article>\`**
2. Inside the article, start with a **\`<header>\`** containing Title and Metadata
3. Use **\`<section>\`** tags for the content chapters
4. End the article with a **\`<footer>\`** containing the Author Bio

`,
    tasks: [
        {
            id: 1,
            description: 'Wrap everything in an <article> tag',
            completed: false,
            regex: /<article>[\s\S]*?<\/article>/i,
            hint: {
                concept: 'Semantic Article',
                strategy: '<article> represents a self-contained piece of content.',
                solution: '<article>\n    <!-- all blog content here -->\n</article>'
            }
        },
        {
            id: 2,
            description: 'Create an internal <header> for the Title',
            completed: false,
            regex: /<header>[\s\S]*?<h1>The Rise of AI<\/h1>[\s\S]*?<\/header>/i,
            hint: {
                concept: 'Article Header',
                strategy: '<header> inside <article> contains title and metadata.',
                solution: '<header>\n    <h1>The Rise of AI</h1>\n    <p>Published...</p>\n</header>'
            }
        },
        {
            id: 3,
            description: 'Wrap the "Introduction" chapter in a <section>',
            completed: false,
            regex: /<section>[\s\S]*?<h2>Introduction<\/h2>[\s\S]*?<\/section>/i,
            hint: {
                concept: 'Content Sections',
                strategy: '<section> groups related content with a heading.',
                solution: '<section>\n    <h2>Introduction</h2>\n    <p>...</p>\n</section>'
            }
        },
        {
            id: 4,
            description: 'Wrap the "Impact" chapter in a <section>',
            completed: false,
            regex: /<section>[\s\S]*?<h2>The Impact<\/h2>[\s\S]*?<\/section>/i,
            hint: {
                concept: 'Multiple Sections',
                strategy: 'Each chapter or major part gets its own <section>.',
                solution: '<section>\n    <h2>The Impact</h2>\n    <p>...</p>\n</section>'
            }
        },
        {
            id: 5,
            description: 'Use a <footer> for the Author Bio',
            completed: false,
            regex: /<footer>[\s\S]*?Written by AI[\s\S]*?<\/footer>/i,
            hint: {
                concept: 'Article Footer',
                strategy: '<footer> inside <article> contains author info.',
                solution: '<footer>\\n    <p>Written by AI Writer Bot.</p>\\n</footer>'
            }
        }
    ],
    files: [
        {
            name: 'post.html',
            language: 'html',
            content: `<!-- ============================================
    BUILD THE PERFECT BLOG POST
    Wrapper: <article>
    Intro: <header>
    Chapters: <section>
    Bio: <footer>
============================================ -->

    <h1>The Rise of AI</h1>
    <p>Published on Oct 24, 2024</p>

    <h2>Introduction</h2>
    <p>Artificial Intelligence is changing the world rapidly.</p>

    <h2>The Impact</h2>
    <p>Automation will create new jobs we can't even imagine yet.</p>

    <p>Written by AI Writer Bot.</p>
`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { font-family: Georgia, serif; max-width: 700px; margin: 0 auto; padding: 20px; }
article { background: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
header { border-bottom: 2px solid #333; margin-bottom: 20px; padding-bottom: 10px; }
section { margin: 25px 0; }
footer { border-top: 1px solid #ccc; margin-top: 30px; padding-top: 15px; font-style: italic; color: #666; }`
        }
    ]
};
