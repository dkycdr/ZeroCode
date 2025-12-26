import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labDirectoryNav = {
    id: 'html5-u1-lab-4-paths',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Broken Links (Pathfinder)',
    duration: '30 min',
    content: `
# Lab: The Broken Links (Pathfinder)

## The Scenario
You've inherited a messy website from a developer who didn't understand **File Paths**.
Nothing works. The images are broken. The links go to nowhere.

## Your Map (Folder Structure)
\`\`\`text
root/
├── index.html (YOU ARE HERE)
├── about.html
├── contact.html
├── style.css
└── assets/
    ├── logo.png
    └── team/
        └── boss.jpg
\`\`\`

## Your Mission
Fix ALL 4 broken paths using **Relative Paths**.

`,
    tasks: [
        {
            id: 1,
            description: 'Fix the CSS Link - style.css is in the same folder',
            completed: false,
            regex: /<link\s+rel="stylesheet"\s+href="(\.\/)?style\.css"\s*\/?>/i,
            hint: {
                concept: 'Sibling File Path',
                strategy: 'Files in the same folder need no folder prefix.',
                solution: '<link rel="stylesheet" href="style.css">'
            }
        },
        {
            id: 2,
            description: 'Fix the About Link - about.html is in the same folder',
            completed: false,
            regex: /<a\s+href="(\.\/)?about\.html">/i,
            hint: {
                concept: 'Sibling File Link',
                strategy: 'Just the filename, no folder path needed.',
                solution: '<a href="about.html">About Us</a>'
            }
        },
        {
            id: 3,
            description: 'Fix the Logo Image - logo.png is in assets/ folder',
            completed: false,
            regex: /<img\s+src="assets\/logo\.png"/i,
            hint: {
                concept: 'Child Folder Path',
                strategy: 'Go INTO the folder: folder/file',
                solution: '<img src="assets/logo.png" alt="Logo">'
            }
        },
        {
            id: 4,
            description: 'Fix the Boss Image - boss.jpg is in assets/team/ folder',
            completed: false,
            regex: /<img\s+src="assets\/team\/boss\.jpg"/i,
            hint: {
                concept: 'Nested Folder Path',
                strategy: 'Go deeper: folder/subfolder/file',
                solution: '<img src="assets/team/boss.jpg" alt="CEO">'
            }
        },
        {
            id: 5,
            description: 'Add alt attributes to all images for accessibility',
            completed: false,
            regex: /<img[^>]+alt="[^"]+"/i,
            hint: {
                concept: 'Image Accessibility',
                strategy: 'Alt text describes the image for screen readers.',
                solution: '<img src="..." alt="Description of image">'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Pathfinder Corp</title>
    <!-- BROKEN: CSS is in the SAME folder, not 'css/' -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav>
        <!-- BROKEN: About is in the SAME folder, not 'pages/' -->
        <a href="pages/about.html">About Us</a>
        <a href="contact.html">Contact</a>
    </nav>

    <h1>🧭 Meet the Team</h1>
    
    <!-- BROKEN: Logo is in 'assets' folder -->
    <img src="logo.png">

    <div class="card">
        <!-- BROKEN: Boss is in 'assets/team' folder -->
        <img src="boss.jpg">
        <h3>Big Boss - CEO</h3>
    </div>
</body>
</html>
`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { 
    background: #0f0f23; 
    padding: 20px; 
    font-family: -apple-system, sans-serif;
    color: #ccc;
}
nav { margin-bottom: 20px; }
nav a { 
    margin-right: 15px; 
    text-decoration: none; 
    color: #00ff41; 
    font-weight: bold; 
}
h1 { color: #ffff66; }
img { 
    max-width: 200px; 
    border: 3px solid #333; 
    border-radius: 8px;
    display: block;
    margin: 10px 0;
}
.card { 
    background: #1a1a2e; 
    padding: 20px; 
    border-radius: 10px;
    display: inline-block;
}`
        }
    ]
};
