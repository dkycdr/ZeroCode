import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz2LayoutSystems = {
    id: 'tailwind-u2-quiz-2',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 2 Quiz: Layout Systems',
    duration: '6 min',
    questions: [
        {
            id: 'q1',
            question: 'Which Tailwind class enables Flexbox?',
            options: [
                'flexbox',
                'flex',
                'display-flex',
                'box-flex'
            ],
            correctIndex: 1,
            explanation: 'The "flex" class applies display: flex to enable Flexbox layout.'
        },
        {
            id: 'q2',
            question: 'How do you create 3 equal columns in CSS Grid?',
            options: [
                'grid-cols-3',
                'cols-3',
                'grid-columns-3',
                'columns-3'
            ],
            correctIndex: 0,
            explanation: 'grid-cols-3 creates a 3-column grid with equal width columns.'
        },
        {
            id: 'q3',
            question: 'Which class centers items both horizontally and vertically in Flexbox?',
            options: [
                'items-center justify-center',
                'center-items center-justify',
                'align-center justify-center',
                'items-middle justify-middle'
            ],
            correctIndex: 0,
            explanation: 'items-center aligns on cross axis (vertical), justify-center aligns on main axis (horizontal).'
        },
        {
            id: 'q4',
            question: 'What does "col-span-2" do in a grid?',
            options: [
                'Creates 2 columns',
                'Makes item span 2 columns',
                'Sets gap to 2',
                'Creates 2 rows'
            ],
            correctIndex: 1,
            explanation: 'col-span-2 makes a grid item span across 2 columns.'
        },
        {
            id: 'q5',
            question: 'Which positioning type is removed from document flow?',
            options: [
                'static',
                'relative',
                'absolute',
                'sticky'
            ],
            correctIndex: 2,
            explanation: 'absolute positioning removes the element from normal document flow and positions it relative to the nearest positioned ancestor.'
        },
        {
            id: 'q6',
            question: 'How do you make an element sticky at the top of the viewport?',
            options: [
                'fixed top-0',
                'sticky top-0',
                'absolute top-0',
                'relative top-0'
            ],
            correctIndex: 1,
            explanation: 'sticky top-0 makes an element stick to the top when scrolling reaches it.'
        },
        {
            id: 'q7',
            question: 'What does "justify-between" do in Flexbox?',
            options: [
                'Centers items',
                'Puts space between items with first/last at edges',
                'Evenly distributes space',
                'Aligns items to the end'
            ],
            correctIndex: 1,explanation: 'justify-between distributes items with equal space between them, pushing first and last items to the edges.'
        },
        {
            id: 'q8',
            question: 'How do you cover the entire viewport with fixed positioning?',
            options: [
                'fixed full',
                'fixed w-full h-full',
                'fixed inset-0',
                'fixed cover'
            ],
            correctIndex: 2,
            explanation: 'inset-0 sets top, right, bottom, and left to 0, covering the entire viewport with fixed positioning.'
        }
    ]
};
