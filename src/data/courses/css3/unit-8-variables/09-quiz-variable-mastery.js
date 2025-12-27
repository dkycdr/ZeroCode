import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1VariableMastery = {
    id: 'css-unit8-quiz',
    type: CONTENT_TYPES.QUIZ,
    title: 'Assessment: Variable Mastery',
    duration: '25 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the correct syntax for defining a CSS Variable in the `:root` scope?',
            options: [
                '$primary-color: #4cc9f0;',
                '--primary-color: #4cc9f0;',
                'var(primary-color): #4cc9f0;',
                'set --primary-color = #4cc9f0;'
            ],
            correctIndex: 1,
            explanation: 'CSS Variables must start with two dashes (`--`). The single dollar sign is used in preprocessors like SASS, not in Vanilla CSS.'
        },
        {
            id: 'q2',
            question: 'What does the second value in `var(--color, black)` represent?',
            options: [
                'The secondary color for a gradient.',
                'The color of the border.',
                'A fallback value used if the variable `--color` is not defined.',
                'The text shadow color.'
            ],
            correctIndex: 2,
            explanation: 'The second argument in the `var()` function is the fallback, ensuring the layout doesn\'t break if the token is missing.'
        },
        {
            id: 'q3',
            question: 'What is "Semantic Naming"?',
            options: [
                'Naming variables based on their color (e.g., --red).',
                'Naming variables based on their hex code (e.g., --ff0000).',
                'Naming variables based on their function or intent (e.g., --color-action).',
                'Using random numbers for variable names.'
            ],
            correctIndex: 2,
            explanation: 'Semantic naming describes the variable\'s purpose, making the system more maintainable and easier for other developers to understand.'
        },
        {
            id: 'q4',
            question: 'How do you update a CSS variable using JavaScript?',
            options: [
                'element.style.setProperty("--name", "value")',
                'element.style.changeVariable("--name", "value")',
                'element.setCSS("--name", "value")',
                'element.var("--name") = "value"'
            ],
            correctIndex: 0,
            explanation: 'The `setProperty` method on the style object is the standard way to update Custom Properties from JS.'
        },
        {
            id: 'q5',
            question: 'Where should you define variables that need to be accessible across the entire website?',
            options: [
                'Inside the body { ... } tag.',
                'Inside the :root { ... } pseudo-class.',
                'Inside a specific class like .main.',
                'At the very bottom of the CSS file.'
            ],
            correctIndex: 1,
            explanation: '`:root` represents the highest level in the DOM (html), ensuring that all elements can inherit and use the variables defined there.'
        }
    ]
};
