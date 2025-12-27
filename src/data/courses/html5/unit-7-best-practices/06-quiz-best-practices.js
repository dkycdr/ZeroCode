import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizBestPractices = {
    id: 'html5-u7-quiz-mastery',
    type: CONTENT_TYPES.QUIZ,
    title: 'Clean Code Certification',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'Why do we avoid "Visual Naming" like class="blue-button"?',
            options: [
                'Because blue is a bad color',
                'Because if the design changes to Red, the name becomes a lie',
                'Visual names are slower to load',
                'It is illegal in HTML5'
            ],
            correctIndex: 1,
            explanation: 'Names should describe Purpose (e.g., .btn-primary), not Appearance. Design changes often; purpose changes rarely.'
        },
        {
            id: 'q2',
            question: 'What does DRY stand for?',
            options: [
                'Do Repeat Yourself',
                'Don\'t Repeat Yourself',
                'Data Render Yield',
                'Div Row Yellow'
            ],
            correctIndex: 1,
            explanation: 'DRY means reusing code (via classes or functions) rather than copy-pasting duplicates.'
        },
        {
            id: 'q3',
            question: 'Which tag is written in the standard professional style?',
            options: [
                '<SECTION class="Hero">',
                '<section class="Hero">',
                '<section class="hero">',
                '<Section Class="hero">'
            ],
            correctIndex: 2,
            explanation: 'Standard Clean Code uses all-lowercase for tags, attributes, and class names (kebab-case).'
        },
        {
            id: 'q4',
            question: 'What is the primary purpose of indentation?',
            options: [
                'To make the file look pretty',
                'To visualize the parent-child nesting relationship',
                'To add whitespace for performance',
                'It is required by the compiler'
            ],
            correctIndex: 1,
            explanation: 'Indentation allows developers to instantly see the structure and hierarchy of the document.'
        }
    ]
};
