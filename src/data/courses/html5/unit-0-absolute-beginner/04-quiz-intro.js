import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizAbsoluteBeginner = {
    id: 'html5-0-quiz',
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
        }
    ]
};
