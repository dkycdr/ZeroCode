import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz7Intro = {
    id: 'js-u0-quiz-intro',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Introduction to JavaScript',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What does JavaScript add to a website?',
            options: [
                'Structure (like a skeleton)',
                'Colors and fonts',
                'Interactivity and behavior',
                'Database storage'
            ],
            correctIndex: 2,
            explanation: 'HTML provides structure, CSS provides appearance, and JavaScript provides interactivity - making things respond to user actions.'
        },
        {
            id: 'q2',
            question: 'What is V8?',
            options: [
                'A type of vegetable juice',
                'The JavaScript engine used by Chrome and Node.js',
                'A version of JavaScript',
                'A coding editor'
            ],
            correctIndex: 1,
            explanation: 'V8 is Google\'s open-source JavaScript engine that powers Chrome and Node.js. It compiles JavaScript to machine code for fast execution.'
        },
        {
            id: 'q3',
            question: 'What does "single-threaded" mean?',
            options: [
                'JavaScript can only run on one computer',
                'JavaScript can only do one thing at a time',
                'JavaScript uses thin threads to run',
                'JavaScript can only be written in one file'
            ],
            correctIndex: 1,
            explanation: 'Single-threaded means JavaScript has one call stack and can only execute one operation at a time. Heavy tasks can block the main thread.'
        },
        {
            id: 'q4',
            question: 'Which console method should you use for a critical error?',
            options: [
                'console.log()',
                'console.warn()',
                'console.error()',
                'console.info()'
            ],
            correctIndex: 2,
            explanation: 'console.error() is designed for critical errors. It shows a red background and includes a stack trace to help with debugging.'
        },
        {
            id: 'q5',
            question: 'What is the result of: 5 + 3 * 2?',
            options: [
                '16',
                '11',
                '13',
                '10'
            ],
            correctIndex: 1,
            explanation: 'Following order of operations (PEMDAS), multiplication happens first: 3 * 2 = 6, then addition: 5 + 6 = 11.'
        },
        {
            id: 'q6',
            question: 'What happens if you write: console.log("5" + "3")?',
            options: [
                'It prints 8',
                'It prints "53"',
                'It throws an error',
                'It prints undefined'
            ],
            correctIndex: 1,
            explanation: 'When you use quotes, JavaScript treats the values as strings (text). The + operator concatenates strings, so "5" + "3" becomes "53".'
        }
    ]
};
