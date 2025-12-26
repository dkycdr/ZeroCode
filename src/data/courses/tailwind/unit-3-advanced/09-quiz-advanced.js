import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz3Advanced = {
    id: 'tailwind-3-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 3 Assessment',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'How do you target the hover state of a parent element from a child?',
            options: [
                'parent-hover:',
                'group-hover:',
                'peer-hover:',
                'hover-parent:'
            ],
            correctIndex: 1,
            explanation: 'Add `group` to the parent, then use `group-hover:` on the child.'
        },
        {
            id: 'q2',
            question: 'When using "peer" modifiers, where must the peer element be located?',
            options: [
                'Inside the target element',
                'Anywhere in the DOM',
                'Immediately BEFORE the target element',
                'Immediately AFTER the target element'
            ],
            correctIndex: 2,
            explanation: 'The General Sibling Combinator (~) requires the `peer` to appear before the element you are styling in the HTML.'
        },
        {
            id: 'q3',
            question: 'Which class removes the default browser focus ring?',
            options: [
                'ring-0',
                'border-none',
                'outline-none',
                'no-focus'
            ],
            correctIndex: 2,
            explanation: '`outline-none` removes the default focus style. You should ALWAYS replace it with a custom `ring` or `border` for accessibility.'
        },
        {
            id: 'q4',
            question: 'How do you enable manual dark mode toggling?',
            options: [
                'It is automatic',
                'Set darkMode: "media" in config',
                'Set darkMode: "class" in config',
                'Use data-theme attributes'
            ],
            correctIndex: 2,
            explanation: 'Setting `darkMode: "class"` tells Tailwind to look for a `.dark` class on the HTML tag instead of checking system preferences.'
        },
        {
            id: 'q5',
            question: 'What is the "active" state triggered by?',
            options: [
                'Hovering over an element',
                'Focusing via keyboard',
                'Clicking/Pressing down on an element',
                'Disabling an element'
            ],
            correctIndex: 2,
            explanation: '`active` corresponds to the time between holding the mouse button down and releasing it.'
        }
    ]
};
