import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz5Functions = {
    id: 'py-u6-quiz-functions',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Functions',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What keyword defines a function?',
            options: ['function', 'func', 'def', 'define'],
            correctIndex: 2,
            explanation: 'Python uses "def" to define functions.'
        },
        {
            id: 'q2',
            question: 'What does *args accept?',
            options: ['Keyword arguments', 'Any number of positional arguments', 'A list', 'Nothing'],
            correctIndex: 1,
            explanation: '*args collects extra positional arguments as a tuple.'
        },
        {
            id: 'q3',
            question: 'What is a lambda function?',
            options: ['A named function', 'An anonymous one-line function', 'A class method', 'A built-in function'],
            correctIndex: 1,
            explanation: 'Lambda functions are anonymous, single-expression functions.'
        },
        {
            id: 'q4',
            question: 'What does a function return if no return statement?',
            options: ['0', '""', 'None', 'Error'],
            correctIndex: 2,
            explanation: 'Functions return None by default if no return statement.'
        }
    ]
};
