import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Project = {
    id: 'css3-15-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Project Quiz',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'Why do we use "overflow: hidden" on the card with rounded corners?',
            options: [
                'To hide the text',
                'Because the square image would stick out of the rounded corners otherwise',
                'To make the shadow visible',
                'It is required for Flexbox'
            ],
            correctIndex: 1,
            explanation: 'If distinct child elements (like an image) have square corners, they will bleed outside the parent\'s border-radius unless overflow is hidden.'
        },
        {
            id: 'q2',
            question: 'In Mobile-First design, what is the default flex-direction?',
            options: [
                'row (Side by side)',
                'column (Stacked)',
                'row-reverse',
                'It depends on the phone'
            ],
            correctIndex: 1,
            explanation: 'Mobile screens are narrow, so we usually stack elements vertically (column) by default.'
        },
        {
            id: 'q3',
            question: 'What is the purpose of max-width: 500px?',
            options: [
                'To make the card exactly 500px always',
                'To prevent the card from getting too wide on large screens, while allowing it to shrink on small screens',
                'To make the text bold',
                'To center the card'
            ],
            correctIndex: 1,
            explanation: 'max-width ensures legibility on desktop while remaining fluid (width: 100%) on mobile.'
        }
    ]
};
