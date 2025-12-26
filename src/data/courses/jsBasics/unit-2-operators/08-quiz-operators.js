import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz8Operators = {
    id: 'js-u2-quiz-operators',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Operators & Expressions',
    duration: '6 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the result of: 10 % 3?',
            options: [
                '3',
                '3.33',
                '1',
                '0'
            ],
            correctIndex: 2,
            explanation: 'The modulo operator (%) returns the remainder after division. 10 ÷ 3 = 3 with remainder 1.'
        },
        {
            id: 'q2',
            question: 'What is the difference between == and ===?',
            options: [
                'No difference',
                '=== converts types, == doesnt',
                '== converts types before comparing, === compares both type AND value',
                '=== is for strings only'
            ],
            correctIndex: 2,
            explanation: '== performs type coercion (5 == "5" is true), while === requires both type AND value to match (5 === "5" is false).'
        },
        {
            id: 'q3',
            question: 'What is the result of: true && false?',
            options: [
                'true',
                'false',
                'undefined',
                'Error'
            ],
            correctIndex: 1,
            explanation: 'AND (&&) requires BOTH sides to be true. Since one is false, the result is false.'
        },
        {
            id: 'q4',
            question: 'What is the result of: true || false?',
            options: [
                'true',
                'false',
                'undefined',
                'Error'
            ],
            correctIndex: 0,
            explanation: 'OR (||) returns true if AT LEAST ONE side is true. Since one is true, the result is true.'
        },
        {
            id: 'q5',
            question: 'What does x += 5 mean?',
            options: [
                'x equals 5',
                'x compared to 5',
                'x = x + 5',
                'x is greater than 5'
            ],
            correctIndex: 2,
            explanation: '+= is a compound assignment operator. x += 5 is shorthand for x = x + 5.'
        },
        {
            id: 'q6',
            question: 'What is !true?',
            options: [
                'true',
                'false',
                '!',
                'Error'
            ],
            correctIndex: 1,
            explanation: 'The NOT operator (!) inverts boolean values. !true becomes false, and !false becomes true.'
        },
        {
            id: 'q7',
            question: 'Which comparison should you use for exact matching?',
            options: [
                '=',
                '==',
                '===',
                ':='
            ],
            correctIndex: 2,
            explanation: 'Always use === (strict equality) to avoid unexpected type coercion bugs. = is assignment, not comparison.'
        }
    ]
};
