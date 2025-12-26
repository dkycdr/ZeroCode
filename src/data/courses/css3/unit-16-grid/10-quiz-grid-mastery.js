import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizGridMastery = {
    id: 'css-unit16-quiz-mastery',
    type: CONTENT_TYPES.QUIZ,
    title: 'Grid Mastery Assessment',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'Which grid unit allows a track to expand and fill available space automatically?',
            options: ['px', 'rem', 'fr', '%'],
            correctIndex: 2,
            explanation: 'fr (fraction) calculates the remaining free space and distributes it.'
        },
        {
            id: 'q2',
            question: 'What is the "RAM Pattern" used for?',
            options: [
                'Creating strict 12-column layouts',
                'Making grids responsive without media queries',
                'Aligning items to the center',
                'Reordering items'
            ],
            correctIndex: 1,
            explanation: 'Repeat, Auto, Minmax lets columns wrap and resize fluidly based on available width.'
        },
        {
            id: 'q3',
            question: 'Which function keeps creating empty columns even if they are not filled?',
            options: ['repeat(auto-fit, ...)', 'repeat(auto-fill, ...)', 'repeat(infinite, ...)', 'repeat(dense, ...)'],
            correctIndex: 1,
            explanation: 'auto-fill preserves the track structure, auto-fit collapses empty tracks to zero.'
        },
        {
            id: 'q4',
            question: 'If you want to place an item in the top-left intersection of a Grid defined with Areas, and that area is named "header", what CSS do you use?',
            options: ['grid: header;', 'grid-area: header;', 'grid-position: header;', 'justify-area: header;'],
            correctIndex: 1,
            explanation: 'grid-area is the property to assign an element to a named zone.'
        },
        {
            id: 'q5',
            question: 'What does "grid-auto-flow: dense" do?',
            options: [
                'Compresses items to be smaller',
                'Backfills empty gaps with smaller items found later in the DOM',
                'Prevents items from wrapping',
                'Stack items vertically'
            ],
            correctIndex: 1,
            explanation: 'Dense flow attempts to fill holes in the grid by grabbing later items that fit, changing the visual order.'
        }
    ]
};
