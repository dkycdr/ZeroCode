import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1FormStyling = {
    id: 'css-unit13-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Form Engineering',
    duration: '20 min',
    questions: [
        {
            id: 'q1',
            question: 'Which property is essential for stripping "native OS styling" from a form element?',
            options: [
                'display: none',
                'appearance: none',
                'color: transparent',
                'border-style: solid'
            ],
            correctIndex: 1,
            explanation: 'appearance: none removes the browser\'s default user-agent stylesheet for that element, allowing for full custom thematic control.'
        },
        {
            id: 'q2',
            question: 'How can you detect if a user has entered text into a field using CSS only?',
            options: [
                'By using the :active pseudo-class.',
                'By using the :valid pseudo-class combined with the type.',
                'By checking :not(:placeholder-shown).',
                'CSS cannot detect text entry; JavaScript is required.'
            ],
            correctIndex: 2,
            explanation: 'If the placeholder is no longer visible (:not(:placeholder-shown)), it implies there is a value inside the field.'
        },
        {
            id: 'q3',
            question: 'What is the primary architectural purpose of the "Input Hack"?',
            options: [
                'To increase the loading speed of form components.',
                'To use a hidden input to control the visual state of a linked label sibling.',
                'To bypass browser security restrictions on form submission.',
                'To encrypt user data before it is sent to the server.'
            ],
            correctIndex: 1,
            explanation: 'By linking a label to an input, you can style the label into complex UI (like toggles) while maintaining semantic form behavior.'
        },
        {
            id: 'q4',
            question: 'Which property allows you to provide a quick, themed tint to native checkboxes without a full rebuild?',
            options: [
                'color-scheme',
                'accent-color',
                'filter: hue-rotate()',
                'background-blend-mode'
            ],
            correctIndex: 1,
            explanation: 'accent-color is a modern property that applies your brand color to the "checked" state of native form controls.'
        },
        {
            id: 'q5',
            question: 'Why is :focus-visible preferred over :focus for many professional designs?',
            options: [
                'It is more performant than the standard :focus.',
                'It only applies the focus indicator when the user is using a keyboard, preventing rings from appearing on mouse clicks.',
                'It is required for HIPAA and GDPR compliance.',
                'It causes the entire document to become interactive.'
            ],
            correctIndex: 1,
            explanation: ':focus-visible provides a way to maintain accessibility for keyboard users while keeping the UI clean for mouse users.'
        }
    ]
};
