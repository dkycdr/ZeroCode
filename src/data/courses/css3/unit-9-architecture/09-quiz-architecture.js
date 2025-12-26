import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Architecture = {
    id: 'css-unit9-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Architectural Mastery',
    duration: '25 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the full meaning of the BEM methodology?',
            options: [
                'Basic Element Modification',
                'Block Element Modifier',
                'Binary Entity Model',
                'Body Element Management'
            ],
            correctIndex: 1,
            explanation: 'BEM (Block Element Modifier) is a naming convention designed to create isolation and scalability in CSS by defining relationships between components.'
        },
        {
            id: 'q2',
            question: 'Which of the following selectors correctly represents an "Element" in standard BEM syntax?',
            options: [
                '.card-title',
                '.card__title',
                '.card--title',
                '.card_title'
            ],
            correctIndex: 1,
            explanation: 'In BEM, an Element is separated from its parent Block using a double underscore (__). Double hyphens (--) are reserved for Modifiers.'
        },
        {
            id: 'q3',
            question: 'Why do Senior Architects avoid structural selectors like ".nav ul li a"?',
            options: [
                'They are too slow to type.',
                'They create high specificity and structural dependency (brittle code).',
                'Modern browsers do not support nesting more than 3 levels deep.',
                'It is considered a security vulnerability.'
            ],
            correctIndex: 1,
            explanation: 'Structural selectors "glue" your CSS to the HTML. If the DOM structure changes, the styles break. BEM solves this by targeting direct classes for flat specificity.'
        },
        {
            id: 'q4',
            question: 'What is the primary goal of the "7-1" folder organization pattern?',
            options: [
                'To make the website load 7 times faster.',
                'To organize thousands of lines of code into logical categories (Base, Components, Layout, etc.).',
                'To limit the total number of CSS files to exactly 8.',
                'To allow CSS to be written in a 7-bit encoding format.'
            ],
            correctIndex: 1,
            explanation: 'The 7-1 pattern reduces Cognitive Load by ensuring every piece of code has a predictable "Home," making it easier for large teams to collaborate without overlaps.'
        },
        {
            id: 'q5',
            question: 'When is it optimal to use "Data Attributes" (data-*) instead of a BEM class Modifier?',
            options: [
                'Always, because classes are considered legacy technology.',
                'Only when you don\'t know the correct BEM syntax.',
                'When managing dynamic, reactive states handled by JavaScript (e.g., data-state="processing").',
                'Never, as data attributes are not accessible by CSS selectors.'
            ],
            correctIndex: 2,
            explanation: 'Data attributes provide a semantic bridge between JavaScript logic and CSS styling, making it cleaner to manage states like loading or error without manipulating multiple class names.'
        }
    ]
};
