import { CONTENT_TYPES } from '../../../curriculumStructure';

export const quizTables = {
    id: 'unit-5-quiz-tables',
    type: CONTENT_TYPES.QUIZ,
    title: 'Tables Quiz',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'If you have a row with 3 cells, and you use colspan="2" on the first cell, how many total cell tags should be in your code for that row?',
            options: ['1', '2', '3', '4'],
            correctIndex: 1,
            explanation: 'The first cell counts as 2 slots. You only need 1 more cell tag to fill the 3rd slot. Total tags = 2.'
        },
        {
            id: 'q2',
            question: 'Which CSS property removes the space between table cell borders?',
            options: ['border: none', 'border-spacing: 0', 'border-collapse: collapse', 'display: grid'],
            correctIndex: 2,
            explanation: 'border-collapse: collapse; merges adjacent borders into a single clean line.'
        },
        {
            id: 'q3',
            question: 'Why should you avoid using tables for webpage layout?',
            options: [
                'It is too hard to code',
                'Browsers do not support it anymore',
                'It hurts Accessibility (Screen Readers) and SEO',
                'Tables are only for numbers'
            ],
            correctIndex: 2,
            explanation: 'Tables confuse screen readers when used for layout (linearizing content incorrectly) and are difficult to make responsive.'
        },
        {
            id: 'q4',
            question: 'What is the correct scope to use for a vertical list of headers on the left side of a table?',
            options: ['scope="col"', 'scope="row"', 'scope="vertical"', 'scope="side"'],
            correctIndex: 1,
            explanation: 'scope="row" indicates that the header cell applies to the data cells in that same horizontal row.'
        },
        {
            id: 'q5',
            question: 'Where would you legally place the <caption> element?',
            options: [
                'Immediately after the opening <table> tag',
                'Inside the <thead>',
                'After the </table> tag',
                'Anywhere inside the table'
            ],
            correctIndex: 0,
            explanation: 'The <caption> must be the very first child of the <table> element.'
        }
    ]
};
