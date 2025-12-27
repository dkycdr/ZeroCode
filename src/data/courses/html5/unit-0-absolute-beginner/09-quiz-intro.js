import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizAbsoluteBeginner = {
    id: 'html5-u0-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 0 Assessment: The Foundation',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the correct way to wrap a paragraph?',
            options: [
                '<p>Text',
                '<paragraph>Text</paragraph>',
                '<p>Text</p>',
                '{p}Text{/p}'
            ],
            correctIndex: 2,
            explanation: 'Tags mostly come in pairs. <p> opens it, and </p> closes it.'
        },
        {
            id: 'q2',
            question: 'Where should the <title> tag go?',
            options: [
                'In the <body>',
                'In the <head>',
                'At the very END of the file',
                'Inside the <h1>'
            ],
            correctIndex: 1,
            explanation: '<title> is metadata (info about the page). Metadata always lives in the <head>.'
        },
        {
            id: 'q3',
            question: 'Which tag creates the largest heading?',
            options: ['<head>', '<h6>', '<heading>', '<h1>'],
            correctIndex: 3,
            explanation: '<h1> is the King Heading. <h6> is the smallest.'
        },
        {
            id: 'q4',
            question: 'What is semantic HTML?',
            options: [
                'Using <div> for everything',
                'Using tags that describe the meaning (like <nav> or <header>)',
                'Writing HTML in ALL CAPS',
                'Using AI to generate code'
            ],
            correctIndex: 1,
            explanation: 'Semantic = Meaning. You use the tag that best describes the content, not just a generic box.'
        },
        {
            id: 'q5',
            question: 'What is missing in this image tag? <img src="dog.jpg">',
            options: [
                'Nothing, it is fine',
                'A closing </img> tag',
                'The alt attribute',
                'The href attribute'
            ],
            correctIndex: 2,
            explanation: 'Images MUST have an `alt` attribute for accessibility. Also, <img> is self-closing, so it does not need </img>.'
        },
        {
            id: 'q6',
            question: 'Which attribute tells a link where to go?',
            options: [
                'src',
                'link',
                'href',
                'to'
            ],
            correctIndex: 2,
            explanation: 'href (Hypertext Reference) is the standard attribute for anchor tags.'
        },
        {
            id: 'q7',
            question: 'Why do we use the DOCTYPE declaration?',
            options: [
                'To make the page load faster',
                'To tell the browser which version of HTML we are using',
                'To link CSS files',
                'It is optional'
            ],
            correctIndex: 1,
            explanation: '<!DOCTYPE html> tells the browser to render in "Standards Mode" for HTML5.'
        },
        {
            id: 'q8',
            question: 'What happens if you nest tags incorrectly? (e.g. <b><i>Text</b></i>)',
            options: [
                'The computer explodes',
                'It is perfectly fine',
                'The browser might render it unexpectedly (Waterfall effect)',
                'The text turns red'
            ],
            correctIndex: 2,
            explanation: 'This is invalid nesting. Browsers try to fix it, but it causes unpredictable results ("Tag Soup").'
        }
    ]
};
