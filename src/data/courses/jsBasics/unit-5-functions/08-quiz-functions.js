import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz8Functions = {
    id: 'js-u5-quiz-functions',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Functions',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What is a parameter?',
            options: [
                'The value passed to a function',
                'The variable in a function definition',
                'The return value',
                'A type of loop'
            ],
            correctIndex: 1,
            explanation: 'Parameters are variables listed in the function definition. Arguments are the actual values passed when calling.'
        },
        {
            id: 'q2',
            question: 'What does a function return if there is no return statement?',
            options: ['null', '0', 'undefined', 'Error'],
            correctIndex: 2,
            explanation: 'Functions without a return statement return undefined by default.'
        },
        {
            id: 'q3',
            question: 'Which is the correct arrow function syntax for x => x * 2?',
            options: [
                'function(x) { x * 2 }',
                'x => { x * 2 }',
                'x => x * 2',
                '(x) -> x * 2'
            ],
            correctIndex: 2,
            explanation: 'Arrow functions use => syntax. Without braces, the expression is implicitly returned.'
        },
        {
            id: 'q4',
            question: 'What is "scope" in JavaScript?',
            options: [
                'The speed of code execution',
                'Where variables are accessible',
                'The size of variables',
                'A type of function'
            ],
            correctIndex: 1,
            explanation: 'Scope determines which parts of the code can access a variable.'
        },
        {
            id: 'q5',
            question: 'Can a function defined inside another function access outer variables?',
            options: ['Yes', 'No', 'Only with special syntax', 'Only global variables'],
            correctIndex: 0,
            explanation: 'Inner functions can access variables from outer scopes - this is called the scope chain.'
        }
    ]
};
