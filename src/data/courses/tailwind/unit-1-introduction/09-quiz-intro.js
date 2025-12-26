import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Intro = {
    id: 'tailwind-1-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 1 Assessment',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the default pixel value of padding "p-4"?',
            options: [
                '4px',
                '8px',
                '16px',
                '12px'
            ],
            correctIndex: 2,
            explanation: 'Tailwind spacing scale is 4px per unit. 4 * 4px = 16px (1rem).'
        },
        {
            id: 'q2',
            question: 'How do you apply a class layout with Flexbox?',
            options: [
                'display-flex',
                'flex',
                'flexbox',
                'layout-flex'
            ],
            correctIndex: 1,
            explanation: 'The class `flex` sets `display: flex`. Additional utilities like `flex-col` or `justify-center` control behavior.'
        },
        {
            id: 'q3',
            question: 'What happens to unused Tailwind classes in production?',
            options: [
                'They remain in the bundle',
                'They are tree-shaken (removed)',
                'They are hidden via CSS',
                'They cause errors'
            ],
            correctIndex: 1,
            explanation: 'The JIT engine scans your HTML and only generates the CSS for the classes you actually used.'
        },
        {
            id: 'q4',
            question: 'Which class makes an element completely round (circle)?',
            options: [
                'radius-full',
                'circle',
                'rounded-full',
                'round-lg'
            ],
            correctIndex: 2,
            explanation: '`rounded-full` applies a large border-radius (9999px), making square elements perfect circles.'
        },
        {
            id: 'q5',
            question: 'How would you write a custom width of 500px using arbitrary values?',
            options: [
                'w-500',
                'w-500px',
                'w-[500px]',
                'width-[500px]'
            ],
            correctIndex: 2,
            explanation: 'Square brackets `[]` allow you to break out of the design system and apply arbitrary CSS values on the fly.'
        }
    ]
};
