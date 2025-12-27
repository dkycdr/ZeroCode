import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Architecture = {
    id: 'css-unit0-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Nexus OS Architecture',
    duration: '20 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the primary job of the browser when building the CSSOM?',
            options: [
                'To download images from the server.',
                'To transform CSS text into a Tree data structure that the engine can understand.',
                'To delete unused JavaScript code.',
                'To check the spelling of your HTML text.'
            ],
            correctIndex: 1,
            explanation: 'The CSSOM (CSS Object Model) is the browser\'s internal map of your styles before it combines them with the HTML DOM.'
        },
        {
            id: 'q2',
            question: 'Which of these selectors has the highest level of Specificity?',
            options: [
                '.header .nav-link',
                '#main-header',
                'header nav a',
                'div.header'
            ],
            correctIndex: 1,
            explanation: 'An ID Selector (#) has a score of (1,0,0), which is much stronger than a class (0,1,0) or an element (0,0,1).'
        },
        {
            id: 'q3',
            question: 'In the Cascade, if two classes set different colors on the same element, which rule wins?',
            options: [
                'The class with the longest name.',
                'The class written first in the HTML file.',
                'The class written last in the CSS file (Order of Appearance).',
                'The colors will mix together.'
            ],
            correctIndex: 2,
            explanation: 'Since their specificity score is the same, the rule written last in the CSS file will override the previous one.'
        },
        {
            id: 'q4',
            question: 'Which property is typically NOT inherited from parent to child?',
            options: [
                'font-family',
                'color',
                'text-align',
                'padding'
            ],
            correctIndex: 3,
            explanation: 'Layout properties like padding, margin, and border are not inherited to prevent children elements from accidentally inheriting their container\'s geometry.'
        },
        {
            id: 'q5',
            question: 'Why is CSS considered Render-Blocking?',
            options: [
                'Because it drains the computer\'s battery.',
                'Because the browser pauses drawing pixels until the DOM and CSSOM are ready.',
                'Because it stops the server from sending more files.',
                'It is only for security reasons.'
            ],
            correctIndex: 1,
            explanation: 'To prevent a Flash of Unstyled Content, the browser waits for the CSS to be fully processed before painting the screen.'
        }
    ]
};
