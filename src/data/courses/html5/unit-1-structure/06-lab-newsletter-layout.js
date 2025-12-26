import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6Newsletter = {
    id: 'html5-u1-lab-1-newsletter',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Newsletter Layout',
    duration: '25 min',
    content: `
# Lab: The Newsletter Layout

## The Assignment
You are coding an email newsletter for **Tech Daily**.
Email clients are old-school, so proper HTML structure matters!

## Your Mission
1. Create a proper header with the newsletter title
2. Add publication date with appropriate formatting
3. Structure the main story with semantic markup
4. Use emphasis tags for important content

`,
    tasks: [
        {
            id: 1,
            description: 'Create <h1>Tech Daily</h1> as the main heading',
            completed: false,
            regex: /<h1[^>]*>\s*Tech Daily\s*<\/h1>/i,
            hint: {
                concept: 'Main Heading',
                strategy: 'H1 is the most important heading on the page.',
                solution: '<h1>Tech Daily</h1>'
            }
        },
        {
            id: 2,
            description: 'Add the date inside <small> tags within a paragraph',
            completed: false,
            regex: /<small>[\s\S]*?<\/small>/i,
            hint: {
                concept: 'Small Text Element',
                strategy: '<small> makes text smaller, often used for dates/fine print.',
                solution: '<p><small>December 26, 2024</small></p>'
            }
        },
        {
            id: 3,
            description: 'Wrap the main story in an <article> tag',
            completed: false,
            regex: /<article>[\s\S]*?<\/article>/i,
            hint: {
                concept: 'Semantic Article',
                strategy: '<article> represents a self-contained piece of content.',
                solution: '<article>\n    <p>Story content...</p>\n</article>'
            }
        },
        {
            id: 4,
            description: 'Use <strong> for the phrase "AI Revolution"',
            completed: false,
            regex: /<strong[^>]*>\s*AI Revolution\s*<\/strong>/i,
            hint: {
                concept: 'Strong Emphasis',
                strategy: '<strong> indicates important text with bold styling.',
                solution: '<strong>AI Revolution</strong>'
            }
        },
        {
            id: 5,
            description: 'Add a <footer> with copyright information',
            completed: false,
            regex: /<footer>[\s\S]*?<\/footer>/i,
            hint: {
                concept: 'Footer Element',
                strategy: '<footer> contains information about the author/copyright.',
                solution: '<footer>\\n    <p>&copy; 2024 Tech Daily</p>\\n</footer>'
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
    <title>Tech Daily Newsletter</title>
</head>
<body>
    <!-- ============================================
        TECH DAILY NEWSLETTER
        Build the structure step by step!
    ============================================ -->
    
    <!-- TODO: Step 1 - Main heading -->
    
    <!-- TODO: Step 2 - Date with <small> -->
    
    <!-- TODO: Step 3 - Article wrapper -->
    <p>Welcome to the issue regarding the AI Revolution. This week we explore how artificial intelligence is transforming every industry.</p>
    
    <!-- TODO: Step 4 - Add emphasis to "AI Revolution" above -->
    
    <!-- TODO: Step 5 - Footer with copyright -->
    
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { 
    font-family: Georgia, serif; 
    max-width: 600px; 
    margin: 0 auto; 
    padding: 20px; 
    background: #f5f5f5; 
}
h1 { 
    color: #1a1a2e; 
    border-bottom: 3px solid #16213e; 
}
article { 
    background: white; 
    padding: 20px; 
    margin: 20px 0; 
}
footer { 
    text-align: center; 
    color: #666; 
    font-size: 0.9em; 
}`
        }
    ]
};
