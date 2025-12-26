import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizStructure = {
    id: 'html5-u1-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 1 Assessment: Structural Engineering',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the "Parent" of the <title> tag?',
            options: [
                '<body>',
                '<head>',
                '<html>',
                '<meta>'
            ],
            correctIndex: 1,
            explanation: '<title> always lives inside the <head> tag.'
        },
        {
            id: 'q2',
            question: 'Which heading structure is correct for accessibility?',
            options: [
                '<h1> -> <h4> -> <h2>',
                '<h1> -> <h2> -> <h3>',
                '<h3> -> <h2> -> <h1>',
                'Use <b> for everything'
            ],
            correctIndex: 1,
            explanation: 'Headings must follow a logical hierarchy, like a book outline (H1, then H2, then H3).'
        },
        {
            id: 'q3',
            question: 'What happens if you type multiple spaces in your HTML code?',
            options: [
                'They are all displayed on screen',
                'The browser collapses them into a single space',
                'The browser deletes the text',
                'It creates a syntax error'
            ],
            correctIndex: 1,
            explanation: 'This is "Whitespace Collapsing". Browsers ignore extra spaces unless you use &nbsp; or <pre>.'
        },
        {
            id: 'q4',
            question: 'If you are in "index.html" and want to link to "about.html" in the SAME folder, what is the path?',
            options: [
                'href="/about.html"',
                'href="pages/about.html"',
                'href="./about.html" (or just "about.html")',
                'href="../about.html"'
            ],
            correctIndex: 2,
            explanation: './ means "current directory".'
        },
        {
            id: 'q5',
            question: 'What does "target=_blank" do?',
            options: [
                'Opens the link in a new tab',
                'Downloads the file',
                'Opens a blank page',
                'Refreshes the current page'
            ],
            correctIndex: 0,
            explanation: '_blank tells the browser to create a new tab/window.'
        },
        {
            id: 'q6',
            question: 'Which image format is best for a colorful photograph?',
            options: [
                'SVG',
                'GIF',
                'PNG',
                'JPG'
            ],
            correctIndex: 3,
            explanation: 'JPG is optimized for photographs (complex colors). PNG is better for graphics with flat colors or transparency.'
        },
        {
            id: 'q7',
            question: 'Why should you NOT use "Click Here" for link text?',
            options: [
                'It is rude',
                'It is too short',
                'It gives no context to Screen Readers or Search Engines',
                'It is deprecated in HTML5'
            ],
            correctIndex: 2,
            explanation: 'Accessibility/SEO Rule: Text should describe the destination (e.g., "Download Report").'
        },
        {
            id: 'q8',
            question: 'What is the correct Alt Text strategy for a decorative background swirl?',
            options: [
                'alt="blue swirl pattern"',
                'alt="decoration"',
                'alt="" (Empty string)',
                'No alt attribute at all'
            ],
            correctIndex: 2,
            explanation: 'An empty alt="" tells screen readers to purely ignore the image as decoration. Missing alt is invalid.'
        }
    ]
};
