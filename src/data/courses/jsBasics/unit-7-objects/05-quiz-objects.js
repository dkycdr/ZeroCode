import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz5Objects = {
    id: 'js-u7-quiz-objects',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Objects',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'Which is the correct way to access object property "name"?',
            options: ['object->name', 'object.name', 'object[name]', 'object::name'],
            correctIndex: 1,
            explanation: 'Dot notation (object.name) is the standard way. Bracket notation uses quotes: object["name"]'
        },
        {
            id: 'q2',
            question: 'What does "this" refer to inside an object method?',
            options: ['The global object', 'The function itself', 'The object the method belongs to', 'undefined'],
            correctIndex: 2,
            explanation: 'In an object method, "this" refers to the object that owns the method.'
        },
        {
            id: 'q3',
            question: 'What does Object.keys(obj) return?',
            options: ['All values', 'All keys as an array', 'The object itself', 'Number of properties'],
            correctIndex: 1,
            explanation: 'Object.keys() returns an array of the object\'s property names (keys).'
        },
        {
            id: 'q4',
            question: 'What is object destructuring?',
            options: [
                'Deleting an object',
                'Extracting properties into variables',
                'Converting object to array',
                'Cloning an object'
            ],
            correctIndex: 1,
            explanation: 'Destructuring is a shorthand syntax to extract object properties into individual variables.'
        }
    ]
};
