import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz2Layout = {
    id: 'tailwind-2-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 2 Assessment',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'Which class aligns items vertically in the center of a flex row?',
            options: [
                'justify-center',
                'align-middle',
                'items-center',
                'vertical-center'
            ],
            correctIndex: 2,
            explanation: '`items-*` controls the Cross Axis. In a row (default), that is the vertical axis.'
        },
        {
            id: 'q2',
            question: 'What does "md:flex" mean?',
            options: [
                'Apply flex only on tablet screens',
                'Apply flex on tablet screens AND larger',
                'Apply flex on screens smaller than tablet',
                'Apply medium flex spacing'
            ],
            correctIndex: 1,
            explanation: 'Tailwind is mobile-first. Breakpoints like `md:` apply to that screen size and everything larger.'
        },
        {
            id: 'q3',
            question: 'How do you make an element take up 2 columns in a grid?',
            options: [
                'grid-width-2',
                'col-2',
                'col-span-2',
                'span-2'
            ],
            correctIndex: 2,
            explanation: '`col-span-2` makes a grid item span across two columns.'
        },
        {
            id: 'q4',
            question: 'To position an element "absolute", what does the parent usually need?',
            options: [
                'static',
                'relative',
                'fixed',
                'absolute'
            ],
            correctIndex: 1,
            explanation: '`relative` on the parent creates a positioning context. Without it, `absolute` ignores the parent.'
        },
        {
            id: 'q5',
            question: 'What does "inset-0" do?',
            options: [
                'Sets margin to 0',
                'Sets padding to 0',
                'Sets top, right, bottom, left to 0',
                'Sets z-index to 0'
            ],
            correctIndex: 2,
            explanation: 'It is a shorthand for anchoring an absolute element to all four edges of its container.'
        }
    ]
};
