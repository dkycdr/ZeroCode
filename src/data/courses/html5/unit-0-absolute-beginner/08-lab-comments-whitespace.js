import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lesson4Hygiene = {
    id: 'html5-u0-lab-4-clean',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Code Hygiene & Secret Messages',
    duration: '15 min',
    content: `
# Lab: Code Hygiene & Secret Messages

## The Assignment
Good code is **readable** code. Other developers (and future YOU) need to understand it.

Your mission: clean up messy code and add helpful comments.

## HTML Comments

Comments are invisible to users but help developers:

\`\`\`html
<!-- This is a comment -->
<!-- TODO: Fix this later -->
\`\`\`

## Code Hygiene Rules

1. **Indentation**: Nested elements should be indented (4 spaces)
2. **Whitespace**: Separate sections with blank lines
3. **Comments**: Explain *why*, not *what*

`,
    tasks: [
        {
            id: 1,
            description: 'Add a comment "Main Navigation" above the header',
            completed: false,
            regex: /<!--\s*Main Navigation\s*-->/i,
            hint: {
                concept: 'HTML Comments',
                strategy: 'Comments start with <!-- and end with -->.',
                solution: '<!-- Main Navigation -->'
            }
        },
        {
            id: 2,
            description: 'Fix indentation - nav links should be indented inside <nav>',
            completed: false,
            regex: /<nav>\s*\n\s{4,}<a/i,
            hint: {
                concept: 'Code Indentation',
                strategy: 'Add 4 spaces before child elements.',
                solution: '<nav>\n    <a href="#">Home</a>'
            }
        },
        {
            id: 3,
            description: 'Add a comment "Copyright Info" above the footer',
            completed: false,
            regex: /<!--\s*Copyright Info\s*-->/i,
            hint: {
                concept: 'Section Comments',
                strategy: 'Add comments to mark major page sections.',
                solution: '<!-- Copyright Info -->'
            }
        },
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!-- ============================================
    CODE HYGIENE TRAINING
    Clean up this messy code!
============================================ -->

<header>
<nav>
<a href="#">Home</a>
<a href="#">About</a>
</nav>
</header>

<footer>
<p>&copy; 2024</p>
</footer>
`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { background: #222; color: #fff; font-family: monospace; padding: 20px; }
nav a { color: #00ff41; margin-right: 15px; text-decoration: none; }
footer { margin-top: 40px; color: #666; }
`
        }
    ]
};
