import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Logical = {
    id: 'css-unit11-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Logical Thinking',
    duration: '20 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the fundamental difference between "Physical" and "Logical" CSS properties?',
            options: [
                'Logical properties are slower to render but more accurate on mobile devices.',
                'Physical properties are bound to the screen coordinates (Left/Right), while Logical properties are bound to the text flow (Start/End).',
                'Logical properties only function correctly within Flexbox and Grid containers.',
                'There is no functional difference; Logical properties are simply newer syntax for the same behavior.'
            ],
            correctIndex: 1,
            explanation: 'Logical properties are abstracted from hardware coordinates, allowing them to adapt automatically to the user\'s language direction and writing mode.'
        },
        {
            id: 'q2',
            question: 'Which axis is aligned with the directional flow of text characters within a line?',
            options: [
                'Block Axis',
                'Z-Axis (Compositing)',
                'Inline Axis',
                'Global Layout Axis'
            ],
            correctIndex: 2,
            explanation: 'The Inline Axis follows the text flow (e.g., Left-to-Right in English, Right-to-Left in Arabic).'
        },
        {
            id: 'q3',
            question: 'Which logical shorthand is used to set the spacing for the Top and Bottom sides simultaneously in a standard horizontal layout?',
            options: [
                'margin-inline',
                'margin-vertical',
                'margin-block',
                'margin-stack'
            ],
            correctIndex: 2,
            explanation: 'The Block Axis refers to the stacking of content blocks, so margin-block controls the start and end of that stack (Top and Bottom).'
        },
        {
            id: 'q4',
            question: 'If an element is configured with "writing-mode: vertical-rl", what does "inline-size" physically represent?',
            options: [
                'The horizontal width of the element.',
                'The opacity level of the internal text nodes.',
                'The vertical height of the element.',
                'The rotational degree of the block container.'
            ],
            correctIndex: 2,
            explanation: 'In vertical modes, text flows from top to bottom. Since inline-size follows the text flow, it visually represents the height of the element on the screen.'
        },
        {
            id: 'q5',
            question: 'Why is "margin-inline: auto" preferred over the legacy "margin: 0 auto" for centering blocks?',
            options: [
                'It uses fewer CPU cycles to calculate the layout.',
                'It centers the block along the inline axis without overwriting existing top or bottom margin values.',
                'It is the only property that supports centering within absolute-positioned containers.',
                'It is required by modern browser accessibility standards (WCAG).'
            ],
            correctIndex: 1,
            explanation: 'margin-inline: auto is more specific to its axis, making it safer and more modular within a complex CSS architecture.'
        }
    ]
};
