import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizProject = {
    id: 'css-unit15-quiz-mastery',
    type: CONTENT_TYPES.QUIZ,
    title: 'Component Architect Assessment',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the "Atomic Design" methodology?',
            options: [
                'A way to split CSS into many files',
                'Building UIs from small reusable parts (Atoms) up to complex pages',
                'A scientific naming convention for variables',
                'Designing for atomic clocks'
            ],
            correctIndex: 1,
            explanation: 'Atomic Design breaks interfaces into Atoms, Molecules, Organisms, Templates, and Pages.'
        },
        {
            id: 'q2',
            question: 'Why should you use CSS Variables like --card-bg?',
            options: [
                'They make the website faster',
                'So you can change the theme (color) in one place instead of many',
                'Browsers require them for modern layout',
                'They fix z-index issues'
            ],
            correctIndex: 1,
            explanation: 'Variables allow for centralized theme management and easy maintenance.'
        },
        {
            id: 'q3',
            question: 'Which is the most semantic tag for a self-contained card component like a user profile?',
            options: ['<div>', '<section>', '<article>', '<span>'],
            correctIndex: 2,
            explanation: '<article> represents a self-contained composition which is intended to be independently distributable or reusable.'
        },
        {
            id: 'q4',
            question: 'To switch a Flexbox card from Vertical (Mobile) to Horizontal (Desktop), what property do you change?',
            options: ['display: grid', 'flex-wrap: wrap', 'flex-direction', 'justify-content'],
            correctIndex: 2,
            explanation: 'Changing flex-direction from column to row is the standard pattern for this morph.'
        },
        {
            id: 'q5',
            question: 'What does "backdrop-filter: blur(10px)" do?',
            options: [
                'Blurs the element itself',
                'Blurs everything BEHIND the element (Glass effect)',
                'Blurs the text inside the element',
                'Removes the background image'
            ],
            correctIndex: 1,
            explanation: 'backdrop-filter applies effects to the area behind the element, crucial for glassomorphism.'
        }
    ]
};
