import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lesson3Debugging = {
    id: 'html5-u0-lab-3-debug',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Bug Hunter - Fix the Broken Tags',
    duration: '20 min',
    content: `
# Lab: Bug Hunter - Fix the Broken Tags

## The Assignment
Welcome to **Debug Training**!
Real developers spend 50% of their time fixing broken code.

Your mission: find and fix 4 common HTML bugs.

## Common Bugs to Spot

1. **Missing Closing Tag**: \`<p>Text\` (Where is the \`</p>\`?)
2. **Spelling Errors**: \`<scrpt>\` instead of \`<script>\`
3. **Unquoted Attributes**: \`<a href=google.com>\` (Dangerous!)
4. **Invalid Tags**: \`<pg>\` doesn't exist - use \`<p>\`

`,
    tasks: [
        {
            id: 1,
            description: 'Fix the unclosed <h2> tag - add </h2>',
            completed: false,
            regex: /<h2>Welcome back<\/h2>/i,
            hint: {
                concept: 'Closing Tags',
                strategy: 'Most HTML tags need a closing tag with a slash.',
                solution: '<h2>Welcome back</h2>'
            }
        },
        {
            id: 2,
            description: 'Fix the image src attribute - add quotes around the value',
            completed: false,
            regex: /<img\s+src="avatar\.png"/i,
            hint: {
                concept: 'Attribute Values',
                strategy: 'Attribute values should always be wrapped in quotes.',
                solution: '<img src="avatar.png">'
            }
        },
        {
            id: 3,
            description: 'Fix the misspelled <pg> tag - change to <p>',
            completed: false,
            regex: /<p>This text is important\.?<\/p>/i,
            hint: {
                concept: 'Valid HTML Tags',
                strategy: '<pg> is not a valid HTML tag. Use <p> for paragraphs.',
                solution: '<p>This text is important</p>'
            }
        },
        {
            id: 4,
            description: 'Fix the broken link href - add quotes around the URL',
            completed: false,
            regex: /<a\s+href="\/profile">/i,
            hint: {
            concept: 'Link Attributes',
            strategy: 'The href value needs quotes to work properly.',
            solution: '<a href="/profile">Go to Profile</a>'
        }
        }
    ],
files: [
    {
        name: 'index.html',
        language: 'html',
        content: `<!-- ============================================
    BUG HUNTER TRAINING
    Find and fix 4 errors!
============================================ -->

<!-- Bug 1: Missing closing tag -->
<h2>Welcome back

<!-- Bug 2 & 3: Unquoted attribute + Invalid tag -->
<div class="profile">
    <img src=avatar.png>
    <pg>This text is important</pg>
</div>

<!-- Bug 4: Unquoted href -->
<a href=/profile>Go to Profile</a>
`
    },
    {
        name: 'style.css',
        language: 'css',
        content: `body { padding: 20px; font-family: sans-serif; }
.profile { border: 1px solid #ccc; padding: 10px; margin: 10px 0; }
img { width: 50px; height: 50px; border-radius: 50%; }
`
    }
]
};
