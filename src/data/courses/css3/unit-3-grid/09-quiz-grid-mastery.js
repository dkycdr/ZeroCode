import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1GridMastery = {
    id: 'css-unit3-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Power Grid Mastery',
    duration: '25 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the primary difference between CSS Grid and Flexbox?',
            options: [
                'Grid is newer; Flexbox is older.',
                'Grid is 2-Dimensional (Rows and Columns); Flexbox is 1-Dimensional.',
                'Flexbox only works for text; Grid only works for images.',
                'There is no difference.'
            ],
            correctIndex: 1,
            explanation: 'CSS Grid is specifically designed to control both axes (horizontal and vertical) simultaneously, whereas Flexbox is optimized for single rows or columns.'
        },
        {
            id: 'q2',
            question: 'What does the unit `1fr` represent in a grid track?',
            options: [
                'One Fixed Rectangle.',
                'One Fahrenheit degree.',
                'One Fraction of the available free space.',
                'One Flash of Rendering.'
            ],
            correctIndex: 2,
            explanation: 'The `fr` unit is a flexible length that represents a fraction of the remaining space in the grid container after fixed items are calculated.'
        },
        {
            id: 'q3',
            question: 'In a grid with 4 columns, what line number refers to the very last line on the right?',
            options: [
                '4',
                '5',
                '-1',
                'Both 5 and -1 are correct'
            ],
            correctIndex: 3,
            explanation: 'Line numbers are 1-indexed. If you have 4 columns, the final line is 5. Additionally, negative indices can be used to count from the end, where -1 is always the last line.'
        },
        {
            id: 'q4',
            question: 'Which property allows you to draw your layout visually using semantic names instead of line numbers?',
            options: [
                'grid-visual-map',
                'grid-template-areas',
                'grid-draw-mode',
                'display: canvas'
            ],
            correctIndex: 1,
            explanation: '`grid-template-areas` allows you to define a strings-based map of your layout, making it extremely readable and maintainable.'
        },
        {
            id: 'q5',
            question: 'What is the main benefit of using `repeat(auto-fit, minmax(200px, 1fr))`?',
            options: [
                'It makes the website load faster.',
                'It creates a responsive grid that wraps automatically without needing Media Queries.',
                'It prevents users from right-clicking.',
                'It only works on Apple devices.'
            ],
            correctIndex: 1,
            explanation: 'This pattern is the modern standard for "intrinsic" responsive design, where the container intelligently adjusts the column count based on available width.'
        }
    ]
};
