import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1CoreUtilities = {
    id: 'tailwind-u1-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 1 Quiz: Core Utilities Mastery',
    duration: '6 min',
    questions: [
        {
            id: 'q1',
            question: 'Which class creates a font size of 24px (1.5rem)?',
            options: [
                'text-lg',
                'text-xl',
                'text-2xl',
                'text-3xl'
            ],
            correctIndex: 2,
            explanation: 'text-2xl = 1.5rem (24px). The scale is: text-xl (20px), text-2xl (24px), text-3xl (30px).'
        },
        {
            id: 'q2',
            question: 'What is the pixel value of p-6?',
            options: [
                '16px',
                '20px',
                '24px',
                '32px'
            ],
            correctIndex: 2,
            explanation: 'p-6 = 1.5rem = 24px. Tailwind uses a base-4 scale where 1 unit = 4px, so 6 units = 24px.'
        },
        {
            id: 'q3',
            question: 'How do you center a block element horizontally?',
            options: [
                'mx-center',
                'mx-auto',
                'margin-auto',
                'center'
            ],
            correctIndex: 1,
            explanation: 'mx-auto sets margin-left and margin-right to auto, centering the block element horizontally.'
        },
        {
            id: 'q4',
            question: 'Which class creates 50% opacity on a blue background?',
            options: [
                'bg-blue-500-50',
                'bg-blue-500/50',
                'bg-blue-50%',
                'opacity-blue-50'
            ],
            correctIndex: 1,
            explanation: 'Use slash notation for opacity: bg-blue-500/50 creates blue background at 50% opacity.'
        },
        {
            id: 'q5',
            question: 'What does leading-relaxed control?',
            options: [
                'Letter spacing',
                'Word spacing',
                'Line height',
                'Text alignment'
            ],
            correctIndex: 2,
            explanation: 'Leading (from "leading" in typography) controls line-height. "leading-relaxed" = 1.625 line height.'
        },
        {
            id: 'q6',
            question: 'Which is the correct way to add 16px horizontal gap between flex children?',
            options: [
                'gap-4',
                'gap-x-4',
                'space-x-4',
                'Both A and B'
            ],
            correctIndex: 3,
            explanation: 'Both gap-4 (all directions) and gap-x-4 (horizontal only) add 16px gap in flexbox/grid. gap-4 = 1rem = 16px.'
        },
        {
            id: 'q7',
            question: 'What is the difference between w-full and w-screen?',
            options: [
                'No difference, they are the same',
                'w-full = 100% of parent, w-screen = 100vw',
                'w-full = 100vw, w-screen = 100% of parent',
                'w-screen is deprecated'
            ],
            correctIndex: 1,
            explanation: 'w-full = width: 100% (relative to parent), w-screen = width: 100vw (relative to viewport).'
        },
        {
            id: 'q8',
            question: 'How do you create negative top margin of 16px?',
            options: [
                'mt--4',
                '-mt-4',
                'mt-minus-4',
                'margin-top-negative-4'
            ],
            correctIndex: 1,
            explanation: 'Negative margins use a dash prefix: -mt-4 = margin-top: -1rem (-16px).'
        }
    ]
};
