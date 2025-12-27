import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labNewsArticle = {
    id: 'html5-u1-lab-2-news',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Daily Bugle (Text Structure)',
    duration: '25 min',
    content: `
# Lab: The Daily Bugle (Text Structure)

## The Assignment
You are the **Editor-in-Chief** at the Daily Bugle.
A junior reporter sent you raw text - no HTML structure at all!

## Your Mission
Transform the blob of text into a properly formatted newspaper article.

1. Add proper heading hierarchy (H1, H2)
2. Wrap text blocks in paragraphs
3. Add emphasis to key phrases
4. Use semantic HTML for quotes

`,
    tasks: [
        {
            id: 1,
            description: 'Create the Main Headline with <h1>',
            completed: false,
            regex: /<h1>\s*Spider-Man Saves the City Again\s*<\/h1>/i,
            hint: {
                concept: 'Heading Hierarchy',
                strategy: 'H1 is for the main headline of the page.',
                solution: '<h1>Spider-Man Saves the City Again</h1>'
            }
        },
        {
            id: 2,
            description: 'Create the Sub-Headline with <h2>',
            completed: false,
            regex: /<h2>\s*Hero Stops Train in Queens\s*<\/h2>/i,
            hint: {
                concept: 'Sub-Heading',
                strategy: 'H2 is for secondary headlines under H1.',
                solution: '<h2>Hero Stops Train in Queens</h2>'
            }
        },
        {
            id: 3,
            description: 'Wrap the first story paragraph in <p> tags',
            completed: false,
            regex: /<p>\s*Yesterday afternoon, friendly neighborhood[\s\S]*?<\/p>/i,
            hint: {
                concept: 'Paragraph Element',
                strategy: 'Each distinct text block should be in its own <p>.',
                solution: '<p>Yesterday afternoon, friendly neighborhood...</p>'
            }
        },
        {
            id: 4,
            description: 'Wrap the quote in <blockquote> and <p>',
            completed: false,
            regex: /<blockquote>[\s\S]*<p>[\s\S]*miracle[\s\S]*<\/p>[\s\S]*<\/blockquote>/i,
            hint: {
                concept: 'Blockquote Element',
                strategy: 'Use <blockquote> for quoted content from external sources.',
                solution: '<blockquote>\n    <p>"It was a miracle..."</p>\n</blockquote>'
            }
        },
        {
            id: 5,
            description: 'Use <strong> to emphasize "Spectacular"',
            completed: false,
            regex: /<strong>\s*Spectacular\s*<\/strong>/i,
            hint: {
                concept: 'Strong Emphasis',
                strategy: '<strong> indicates important text, displayed bold.',
                solution: 'It was truly <strong>Spectacular</strong> to witness.'
            }
        },
        {
            id: 6,
            description: 'Use <em> to emphasize "miracle"',
            completed: false,
            regex: /<em>\s*miracle\s*<\/em>/i,
            hint: {
                concept: 'Emphasis Element',
                strategy: '<em> adds emphasis, typically displayed italic.',
                solution: 'It was a <em>miracle</em>'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!-- ============================================
    THE DAILY BUGLE
    Refactor this raw text into proper HTML!
    Don't delete the text, just wrap it in tags!
============================================ -->

Spider-Man Saves the City Again

Hero Stops Train in Queens

Yesterday afternoon, friendly neighborhood Spider-Man prevented a catastrophic train derailment in Queens. Witnesses say the hero used his webs to slow the runaway train just inches before the end of the track. It was truly Spectacular to witness.

"It was a miracle," said one bystander. "I've never seen anything like it." The city plans to give him a key to the city next Tuesday.
`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { 
    font-family: 'Times New Roman', serif; 
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px; 
    background: #fffef0;
}
h1 { 
    font-size: 2.5em; 
    border-bottom: 3px double black; 
    margin-bottom: 0;
}
h2 { 
    font-style: italic; 
    color: #555; 
    margin-top: 5px;
}
p { line-height: 1.8; font-size: 1.1em; }
blockquote {
    border-left: 4px solid #333;
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
}`
        }
    ]
};
