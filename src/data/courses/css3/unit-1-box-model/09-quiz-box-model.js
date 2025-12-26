import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1BoxModel = {
    id: 'css-unit1-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Nexus UI Shell Mechanics',
    duration: '20 min',
    questions: [
        {
            id: 'q1',
            question: 'Which Box Model layer acts as the "Fence" surrounding the padding?',
            options: [
                'Margin',
                'Border',
                'Content',
                'Background'
            ],
            correctIndex: 1,
            explanation: 'The Border is the physical wall that sits between the Padding (inside) and the Margin (outside).'
        },
        {
            id: 'q2',
            question: 'If you set box-sizing: border-box, what happens when you add padding to a fixed-width box?',
            options: [
                'The box becomes wider.',
                'The box becomes narrower.',
                'The total width stays the same, and the inner content area shrinks.',
                'The browser ignores the padding.'
            ],
            correctIndex: 2,
            explanation: 'Border-box forces the padding to be absorbed into the defined width, making layout sizing much more predictable.'
        },
        {
            id: 'q3',
            question: 'Margin Collapse occurs only in which axis?',
            options: [
                'Inline Axis (Horizontal)',
                'Block Axis (Vertical)',
                'Diagonal',
                'Z-Axis'
            ],
            correctIndex: 1,
            explanation: 'Margins only "collapse" or overlap on the Block axis (vertical in standard modes). Inline margins always add together.'
        },
        {
            id: 'q4',
            question: 'What is the purpose of setting overflow: hidden on a container?',
            options: [
                'To make the text invisible.',
                'To delete the content inside.',
                'To clip any content that extends beyond the box boundaries.',
                'To increase the size of the box.'
            ],
            correctIndex: 2,
            explanation: 'Overflow: hidden ensures that no content or child element spills out of the container\'s physical limits.'
        },
        {
            id: 'q5',
            question: 'Which logical property is used to center a block element horizontally?',
            options: [
                'padding-inline: auto;',
                'margin-block: auto;',
                'margin-inline: auto;',
                'text-align: middle;'
            ],
            correctIndex: 2,
            explanation: 'Setting margin-inline to auto on a block element with a defined width will perfectly center it on the inline axis.'
        }
    ]
};
