import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz9Variables = {
    id: 'js-u1-quiz-variables',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Variables & Data Types',
    duration: '6 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the recommended default keyword for declaring variables?',
            options: [
                'var',
                'let',
                'const',
                'variable'
            ],
            correctIndex: 2,
            explanation: 'const is the safest choice. It prevents accidental reassignment. Use let only when you know the value needs to change.'
        },
        {
            id: 'q2',
            question: 'What happens if you try to reassign a const variable?',
            options: [
                'It works normally',
                'It shows a warning but works',
                'It throws a TypeError and stops',
                'It creates a new variable'
            ],
            correctIndex: 2,
            explanation: 'Attempting to reassign a const throws a TypeError because const creates a read-only reference.'
        },
        {
            id: 'q3',
            question: 'What is the value of: let x; console.log(x);',
            options: [
                'null',
                '0',
                'undefined',
                'empty string'
            ],
            correctIndex: 2,
            explanation: 'When a variable is declared but not initialized, its value is undefined - meaning "no value assigned yet".'
        },
        {
            id: 'q4',
            question: 'Which of these is a template literal?',
            options: [
                '"Hello ${name}"',
                "'Hello ${name}'",
                '`Hello ${name}`',
                '(Hello ${name})'
            ],
            correctIndex: 2,
            explanation: 'Template literals use backticks (`) and allow ${} for embedding expressions. Regular quotes treat ${} as plain text.'
        },
        {
            id: 'q5',
            question: 'What does "Hello".toUpperCase() return?',
            options: [
                '"hello"',
                '"HELLO"',
                '"Hello"',
                'Error'
            ],
            correctIndex: 1,
            explanation: 'toUpperCase() converts all characters to uppercase letters.'
        },
        {
            id: 'q6',
            question: 'What is typeof null?',
            options: [
                '"null"',
                '"undefined"',
                '"object"',
                '"nothing"'
            ],
            correctIndex: 2,
            explanation: 'typeof null returns "object" - this is a well-known JavaScript bug from the original language design that cannot be fixed.'
        },
        {
            id: 'q7',
            question: 'What does Math.floor(4.9) return?',
            options: [
                '5',
                '4',
                '4.9',
                '0'
            ],
            correctIndex: 1,
            explanation: 'Math.floor() always rounds DOWN to the nearest integer, so 4.9 becomes 4.'
        }
    ]
};
