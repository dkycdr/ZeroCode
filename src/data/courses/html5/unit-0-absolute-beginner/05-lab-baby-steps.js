import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lesson1BabySteps = {
    id: 'html5-u0-lab-1-basics',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Your First HTML Page',
    duration: '25 min',
    content: `
# Lab: Your First HTML Page

## The Assignment
Welcome to the **ZeroCode Web Academy**!
Your first mission: build a complete HTML page from scratch.

## The Blueprint

Every HTML page follows this structure:

\`\`\`html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <!-- Visible content here -->
    </body>
</html>
\`\`\`

## Your Mission

Build a personal introduction page with:
1. Proper document structure
2. Your name as the main heading
3. A paragraph about yourself
4. A list of 3 hobbies
5. A link to ZeroCode
`,
    tasks: [
        {
            id: 1,
            description: 'Add <!DOCTYPE html> at the very top',
            completed: false,
            regex: /^\s*<!DOCTYPE\s+html>/im,
            hint: {
                concept: 'DOCTYPE Declaration',
                strategy: 'This must be the first line of every HTML file.',
                solution: '<!DOCTYPE html>'
            }
        },
        {
            id: 2,
            description: 'Create <html> and <head> structure',
            completed: false,
            regex: /<!DOCTYPE\s+html>\s*\n\s*<html>\s*\n\s*<head>/im,
            hint: {
                concept: 'Document Structure',
                strategy: 'HTML wraps everything. Head contains metadata.',
                solution: '<!DOCTYPE html>\n<html>\n    <head>'
            }
        },
        {
            id: 3,
            description: 'Add a <title> inside <head>',
            completed: false,
            regex: /<head>\s*[\s\S]*<title>\s*[^<]{1,}\s*<\/title>/i,
            hint: {
                concept: 'Page Title',
                strategy: 'Title shows in the browser tab.',
                solution: '<title>My First Website</title>'
            }
        },
        {
            id: 4,
            description: 'Add <body> after closing </head>',
            completed: false,
            regex: /<\/head>\s*\n\s*<body>/im,
            hint: {
                concept: 'Body Element',
                strategy: 'Body contains all visible content.',
                solution: '</head>\n    <body>'
            }
        },
        {
            id: 5,
            description: 'Add <h1> with your name',
            completed: false,
            regex: /<body>\s*[\s\S]*<h1>\s*[^<]{1,}\s*<\/h1>/i,
            hint: {
                concept: 'Heading Element',
                strategy: 'H1 is the main heading. Use only one per page.',
                solution: '<h1>Your Name Here</h1>'
            }
        },
        {
            id: 6,
            description: 'Add a <p> paragraph about yourself',
            completed: false,
            regex: /<p>\s*[\s\S]{10,}\s*<\/p>/i,
            hint: {
                concept: 'Paragraph Element',
                strategy: 'P wraps blocks of text.',
                solution: '<p>I am learning HTML at ZeroCode!</p>'
            }
        },
        {
            id: 7,
            description: 'Add a <ul> list with 3 <li> items',
            completed: false,
            regex: /<ul>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>[\s\S]*<\/ul>/i,
            hint: {
                concept: 'Unordered List',
                strategy: 'UL wraps LI items to create bullet points.',
                solution: '<ul>\n    <li>Hobby 1</li>\n    <li>Hobby 2</li>\n    <li>Hobby 3</li>\n</ul>'
            }
        },
        {
            id: 8,
            description: 'Add a link to ZeroCode with href attribute',
            completed: false,
            regex: /<a\s+href\s*=\s*["']https?:\/\/.*zerocode.*["']\s*>\s*[^<]{1,}\s*<\/a>/i,
            hint: {
                concept: 'Anchor Element',
                strategy: 'Use href attribute to specify the destination URL.',
                solution: '<a href="https://zerocode.ac.id">Visit ZeroCode</a>'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!-- ============================================
ZEROCODE WEB ACADEMY
Mission: Build Your First HTML Page
============================================ -->

<!-- STEP 1: DOCTYPE goes here -->


<!-- STEP 2-4: html, head, title, body structure -->


<!-- STEP 5-8: Your content goes inside body -->


`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { font-family: sans-serif; padding: 20px; background: #f0f0f0; }
h1 { color: #333; }
p { line-height: 1.6; }
a { color: #007bff; }
`
        }
    ]
};
