import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quizForms = {
    id: 'html5-u3-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Unit 3 Assessment: Data Collection',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'Which attribute determines WHERE the form data is sent?',
            options: [
                'method',
                'target',
                'action',
                'destination'
            ],
            correctIndex: 2,
            explanation: 'The "action" attribute specifies the URL where the form content is submitted.'
        },
        {
            id: 'q2',
            question: 'What is the correct way to link a Label to an Input?',
            options: [
                '<label link="email">',
                'Wrap the input in the label only',
                'Match the label "for" attribute with the input "id"',
                'Match the label "id" with the input "name"'
            ],
            correctIndex: 2,
            explanation: 'The "for" attribute of the label must match the "id" of the input.'
        },
        {
            id: 'q3',
            question: 'Which input type triggers a numeric keypad on mobile but allows symbols?',
            options: [
                'type="number"',
                'type="tel"',
                'type="math"',
                'type="calc"'
            ],
            correctIndex: 1,
            explanation: 'type="tel" brings up the number pad (for phone numbers) but doesn\'t enforce strict number validation like type="number".'
        },
        {
            id: 'q4',
            question: 'You generally want users to select multiple options. Which input do you use?',
            options: [
                'Radio Button',
                'Checkbox',
                'Toggle Switch',
                'Option Button'
            ],
            correctIndex: 1,
            explanation: 'Checkboxes allow multiple selections. Radio buttons allow only one.'
        },
        {
            id: 'q5',
            question: 'How do you prevent a form from submitting if a field is empty?',
            options: [
                'Use Javascript',
                'Add the "required" attribute',
                'Add the "mandatory" attribute',
                'Use CSS validation'
            ],
            correctIndex: 1,
            explanation: 'The "required" boolean attribute automatically prevents submission of empty fields.'
        },
        {
            id: 'q6',
            question: 'What is the best tag to group related inputs (like a Payment section)?',
            options: [
                '<div>',
                '<section>',
                '<fieldset>',
                '<group>'
            ],
            correctIndex: 2,
            explanation: '<fieldset> is the semantic tag for grouping related form controls.'
        }
    ]
};
