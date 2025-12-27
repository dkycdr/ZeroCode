import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labSemanticRefactor = {
    id: 'html5-u2-lab-1-refactor',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Cleanup Crew (Refactoring Div Soup)',
    duration: '25 min',
    content: `
# Lab: The Cleanup Crew (Refactoring Div Soup)

## The Scenario
You just joined a startup. The previous developer built the homepage entirely out of \`<div>\` tags.
Google hates it. Screen readers can't read it.

## Your Mission
Refactor the "Div Soup" into proper Semantic HTML.

1. \`<div id="header">\` → **\`<header>\`**
2. \`<div id="nav">\` → **\`<nav>\`**
3. \`<div class="main-content">\` → **\`<main>\`**
4. \`<div class="sidebar">\` → **\`<aside>\`**
5. \`<div id="footer">\` → **\`<footer>\`**

`,
    tasks: [
        {
            id: 1,
            description: 'Convert the Header div to a <header> tag',
            completed: false,
            regex: /<header>[\s\S]*?<h1>ZeroCode Inc<\/h1>[\s\S]*?<\/header>/i,
            hint: {
                concept: 'Semantic Header',
                strategy: '<header> represents introductory content or navigation aids.',
                solution: '<header>\n    <h1>ZeroCode Inc</h1>\n</header>'
            }
        },
        {
            id: 2,
            description: 'Convert the Nav div to a <nav> tag',
            completed: false,
            regex: /<nav>[\s\S]*?<a href="#">Home<\/a>[\s\S]*?<\/nav>/i,
            hint: {
                concept: 'Semantic Navigation',
                strategy: '<nav> is for major navigation blocks.',
                solution: '<nav>\n    <ul>\n        <li><a href="#">Home</a></li>\n    </ul>\n</nav>'
            }
        },
        {
            id: 3,
            description: 'Convert the Main Content div to a <main> tag',
            completed: false,
            regex: /<main>[\s\S]*?<h2>Welcome to the Future<\/h2>[\s\S]*?<\/main>/i,
            hint: {
                concept: 'Semantic Main',
                strategy: '<main> contains the primary content of the page.',
                solution: '<main>\n    <h2>Welcome to the Future</h2>\n    <p>...</p>\n</main>'
            }
        },
        {
            id: 4,
            description: 'Convert the Sidebar div to an <aside> tag',
            completed: false,
            regex: /<aside>[\s\S]*?<h3>Related Links<\/h3>[\s\S]*?<\/aside>/i,
            hint: {
                concept: 'Semantic Aside',
                strategy: '<aside> is for tangentially related content (sidebars).',
                solution: '<aside>\n    <h3>Related Links</h3>\n</aside>'
            }
        },
        {
            id: 5,
            description: 'Convert the Footer div to a <footer> tag',
            completed: false,
            regex: /<footer>[\s\S]*?&copy; 2024 ZeroCode[\s\S]*?<\/footer>/i,
            hint: {
                concept: 'Semantic Footer',
                strategy: '<footer> contains information about the section or page.',
                solution: '<footer>\\n    <p>&copy; 2024 ZeroCode</p>\\n</footer>'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<body>

    <!-- REFACTOR: Use <header> -->
    <div id="header">
        <h1>ZeroCode Inc</h1>
    </div>

    <!-- REFACTOR: Use <nav> -->
    <div id="nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>

    <!-- REFACTOR: Use <main> -->
    <div class="main-content">
        <h2>Welcome to the Future</h2>
        <p>We build software that builds itself.</p>
    </div>

    <!-- REFACTOR: Use <aside> -->
    <div class="sidebar">
        <h3>Related Links</h3>
        <a href="#">Our Blog</a>
    </div>

    <!-- REFACTOR: Use <footer> -->
    <div id="footer">
        <p>&copy; 2024 ZeroCode. All Semantic Rights Reserved.</p>
    </div>

</body>
</html>`
        }
    ]
};
