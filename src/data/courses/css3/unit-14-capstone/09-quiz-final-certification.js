import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1FinalCapstone = {
    id: 'css-unit14-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Elite Certification',
    duration: '30 min',
    questions: [
        {
            id: 'q1',
            question: 'Which property combination is required to create a "Scroll Snap" experience where sections lock into the viewport?',
            options: [
                'overflow: hidden; scroll-align: center;',
                'scroll-snap-type: y mandatory; (on parent) and scroll-snap-align: start; (on children)',
                'position: sticky; top: 0; (on every section)',
                'display: flex; gap: 0; scroll-behavior: smooth;'
            ],
            correctIndex: 1,
            explanation: 'Scroll-snap-type tells the container how to behave, and scroll-snap-align tells the children which edge should lock into place.'
        },
        {
            id: 'q2',
            question: 'In the Bento Grid layout, what is the most efficient way to make a single card twice as wide as the others?',
            options: [
                'Set width: 200%;',
                'Set grid-column: span 2;',
                'Set flex-grow: 2;',
                'Increase the font-size of the content inside that card.'
            ],
            correctIndex: 1,
            explanation: 'grid-column: span [number] allows a specific item to consume multiple columns in an existing grid mesh.'
        },
        {
            id: 'q3',
            question: 'What is the "Glassmorphism" effect technically composed of in CSS?',
            options: [
                'A transparent image background.',
                'Combining a low-opacity background (rgba) with the backdrop-filter: blur() property.',
                'Using the filter: grayscale() property on the body.',
                'Adding a 10px box-shadow with a white color.'
            ],
            correctIndex: 1,
            explanation: 'Backdrop-filter: blur() blurs the pixels *behind* the element, while the low-opacity RGBA background provides the "glass" tint.'
        },
        {
            id: 'q4',
            question: 'When refactoring a 3-column desktop grid for mobile, what should you generally do with specific grid spans (like grid-column: span 3)?',
            options: [
                'Leave them as is; they will shrink automatically.',
                'Reset them to grid-column: auto; inside the mobile media query.',
                'Change them to grid-column: span 100%;.',
                'Remove the grid property entirely and switch to absolute positioning.'
            ],
            correctIndex: 1,
            explanation: 'Resetting spans to auto allows the grid items to revert to their base 1-column behavior, preventing them from trying to span "ghost columns" that no longer exist on mobile.'
        },
        {
            id: 'q5',
            question: 'What is the architectural purpose of using CSS Variables (--neon, --bg) in the Final Capstone?',
            options: [
                'To make the CSS file smaller for faster network transfer.',
                'To allow for rapid "Design System" updates (e.g., changing the theme color in one place rather than 50).',
                'To bypass browser compatibility issues for older CSS properties.',
                'To prevent users from seeing the source code in DevTools.'
            ],
            correctIndex: 1,
            explanation: 'Variables centralize the core design tokens, ensuring that a brand-wide color or spacing change can be implemented instantaneously.'
        }
    ]
};
