import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1FlexMastery = {
    id: 'css-unit2-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Flex Engine Mastery',
    duration: '25 min',
    questions: [
        {
            id: 'q1',
            question: 'When you set `flex-direction: column`, which axis becomes the vertical one?',
            options: [
                'The Cross Axis',
                'The Main Axis',
                'Both axes disappear',
                'The Z-Axis'
            ],
            correctIndex: 1,
            explanation: 'In Flexbox, the direction you choose DEFINES the Main Axis. If direction is column, the Main Axis is vertical. If row, it is horizontal.'
        },
        {
            id: 'q2',
            question: 'Which property is used to create space specifically BETWEEN rows in a multi-line flex container?',
            options: [
                'align-items',
                'justify-items',
                'align-content',
                'grid-gap'
            ],
            correctIndex: 2,
            explanation: '`align-content` is the command for managing the distribution of space between entire flex lines (rows) when wrapping is active.'
        },
        {
            id: 'q3',
            question: 'If you want a card to NEVER shrink, even if the screen is tiny, what property should you set?',
            options: [
                'flex-grow: 0',
                'flex-shrink: 0',
                'flex-basis: 0',
                'overflow: hidden'
            ],
            correctIndex: 1,
            explanation: 'Setting `flex-shrink: 0` tells the browser that this element is rigid and is not allowed to be compressed below its initial size.'
        },
        {
            id: 'q4',
            question: 'What does the shorthand `flex: 1` actually represent?',
            options: [
                'flex-grow: 1; flex-shrink: 1; flex-basis: 0%;',
                'flex-grow: 1; flex-shrink: 0; flex-basis: auto;',
                'flex-grow: 0; flex-shrink: 1; flex-basis: 100%;',
                'It just means the item is visible.'
            ],
            correctIndex: 0,
            explanation: '`flex: 1` is a common shortcut that makes an item fully flexible, allowing it to grow to fill all available space but also allowing it to shrink.'
        },
        {
            id: 'q5',
            question: 'Why is Flexbox called a "One-Dimensional" layout system?',
            options: [
                'Because it can only handle text, not images.',
                'Because it only works on one screen size at a time.',
                'Because it primary deals with items in one direction at a time (either a row OR a column).',
                'Because it was made in the year 2001.'
            ],
            correctIndex: 2,
            explanation: 'Unlike CSS Grid (Two-Dimensional), Flexbox is optimized for arranging items in a single linear sequence (one axis at a time).'
        }
    ]
};
