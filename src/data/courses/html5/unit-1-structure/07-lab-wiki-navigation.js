import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab7Wiki = {
    id: 'html5-u1-lab-3-wiki',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Wiki Linker',
    duration: '25 min',
    content: `
# Lab: The Wiki Linker

## The Assignment
You are building a navigation system for a small Wiki.
The files are organized in folders, so you must use **Relative Paths**.

## File Structure
\`\`\`text
/root
  ├── index.html (YOU ARE HERE)
  └── /articles
       └── space.html
       └── ocean.html
       └── tech.html
\`\`\`

## Your Mission
Create a proper navigation menu linking to all articles.

`,
    tasks: [
        {
            id: 1,
            description: 'Create a link to Space article: articles/space.html',
            completed: false,
            regex: /<a\s+[^>]*href=["']articles\/space\.html["'][^>]*>/i,
            hint: {
                concept: 'Relative Paths (Child Folder)',
                strategy: 'To go INTO a folder, just write folder/file.',
                solution: '<a href="articles/space.html">Space</a>'
            }
        },
        {
            id: 2,
            description: 'Create a link to Ocean article: articles/ocean.html',
            completed: false,
            regex: /<a\s+[^>]*href=["']articles\/ocean\.html["'][^>]*>/i,
            hint: {
                concept: 'Consistent Path Structure',
                strategy: 'Same pattern: folder/filename.html',
                solution: '<a href="articles/ocean.html">Ocean</a>'
            }
        },
        {
            id: 3,
            description: 'Create a link to Tech article: articles/tech.html',
            completed: false,
            regex: /<a\s+[^>]*href=["']articles\/tech\.html["'][^>]*>/i,
            hint: {
                concept: 'Path Practice',
                strategy: 'Repeat the pattern for consistency.',
                solution: '<a href="articles/tech.html">Tech</a>'
            }
        },
        {
            id: 4,
            description: 'Add target="_blank" to open Google in new tab',
            completed: false,
            regex: /<a\s+[^>]*href=["'][^"']*google[^"']*["'][^>]*target=["']_blank["'][^>]*>/i,
            hint: {
                concept: 'External Links',
                strategy: 'target="_blank" opens link in a new browser tab.',
                solution: '<a href="https://google.com" target="_blank">Google</a>'
            }
        },
        {
            id: 5,
            description: 'Wrap navigation links in a <nav> element',
            completed: false,
            regex: /<nav>[\s\S]*<a[\s\S]*<\/nav>/i,
            hint: {
                concept: 'Semantic Navigation',
                strategy: '<nav> tells browsers this is a navigation section.',
                solution: '<nav>\\n    <ul>\\n        <li><a href="...">...</a></li>\\n    </ul>\\n</nav>'
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
    <title>Wiki Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>📚 Mini Wiki</h1>
    
    <!-- ============================================
        BUILD THE NAVIGATION
        Create links to all 3 articles in the articles/ folder
    ============================================ -->
    
    <ul>
        <li><!-- TODO: Link to Space --></li>
        <li><!-- TODO: Link to Ocean --></li>
        <li><!-- TODO: Link to Tech --></li>
        <li><!-- TODO: External link to Google with target="_blank" -->
            <a href="https://google.com">Google</a>
        </li>
    </ul>
    
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { 
    font-family: -apple-system, sans-serif; 
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px;
    background: #1a1a2e;
    color: #eee;
}
h1 { color: #00ff41; }
nav { background: #16213e; padding: 15px; border-radius: 8px; }
ul { list-style: none; padding: 0; }
li { margin: 10px 0; }
a { 
    color: #00b4d8; 
    text-decoration: none; 
    font-size: 1.1em;
}
a:hover { color: #00ff41; }`
        }
    ]
};
