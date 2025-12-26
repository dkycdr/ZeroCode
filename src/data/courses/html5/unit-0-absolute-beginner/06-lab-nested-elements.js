import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lesson2Nesting = {
    id: 'html5-u0-lab-2-nesting',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Nesting Doll Strategy',
    duration: '20 min',
    content: `
# Lab: The Nesting Doll Strategy

## The Assignment
HTML elements are like Russian Nesting Dolls. You can put tags INSIDE other tags.
But you must follow the **Last In, First Out** rule.

Your mission: fix a broken page where the nesting is all wrong.

## The Golden Rule

### ✅ Correct Nesting
\`\`\`html
<div>
    <p>I am inside the div</p>
</div>
\`\`\`

### ❌ WRONG Nesting
\`\`\`html
<div>
    <p>I am broken</div>
</p>
\`\`\`

## Your Mission
1. Move the \`<h1>\` INSIDE the \`<header>\`
2. Move the \`<button>\` INSIDE the \`<div class="card">\`
3. Fix the \`<ul>\` so that \`<li>\` items are properly nested

`,
    tasks: [
        {
            id: 1,
            description: 'Fix the Header nesting - move <h1> inside <header>',
            completed: false,
            regex: /<header>\s*[\s\S]*<h1>[\s\S]*<\/h1>\s*[\s\S]*<\/header>/im,
            hint: {
                concept: 'Parent-Child Relationship',
                strategy: 'The h1 must be between <header> and </header>.',
                solution: '<header>\\n    <h1>My Site</h1>\\n</header>'
            }
        },
        {
            id: 2,
            description: 'Fix the Card nesting - move <button> inside the card div',
            completed: false,
            regex: /<div\s+class="card">\s*[\s\S]*<button>[\s\S]*<\/button>\s*[\s\S]*<\/div>/im,
            hint: {
                concept: 'Element Placement',
                strategy: 'Button should be between <div class="card"> and </div>.',
                solution: '<div class="card">\\n    <p>Click "Buy Now"</p>\\n    <button>Buy Now</button>\\n</div>'
            }
        },
        {
            id: 3,
            description: 'Fix the List nesting - both <li> items inside <ul>',
            completed: false,
            regex: /<ul>\s*<li>Item 1<\/li>\s*<li>Item 2<\/li>\s*<\/ul>/im,
            hint: {
                concept: 'List Structure',
                strategy: 'All <li> items must be direct children of <ul>.',
                solution: '<ul>\\n    <li>Item 1</li>\\n    <li>Item 2</li>\\n</ul>'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!-- ============================================
    BROKEN CODE - FIX THE NESTING!
============================================ -->

<!-- Problem 1: H1 is outside header -->
<h1>My Site</h1>
<header>
</header>

<!-- Problem 2: Button is outside card -->
<div class="card">
    <p>Click "Buy Now"</p>
</div>
<button>Buy Now</button>

<!-- Problem 3: List items are not properly nested -->
<li>Item 1</li>
<ul>
    <li>Item 2</li>
</ul>
`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `.card { border: 2px solid #333; padding: 20px; background: white; margin: 20px 0; }
header { background: #333; color: white; padding: 10px; }
button { background: #007bff; color: white; padding: 10px 20px; border: none; cursor: pointer; }
`
        }
    ]
};
