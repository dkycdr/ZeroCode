import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz4Dicts = {
    id: 'py-u5-quiz-dicts',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Dictionaries & Sets',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'How do you safely get a value that might not exist?',
            options: ['dict[key]', 'dict.get(key)', 'dict.find(key)', 'dict.value(key)'],
            correctIndex: 1,
            explanation: 'dict.get(key) returns None if key not found. dict[key] raises KeyError.'
        },
        {
            id: 'q2',
            question: 'What makes sets unique?',
            options: ['They are ordered', 'They allow duplicates', 'They only store unique values', 'They are mutable'],
            correctIndex: 2,
            explanation: 'Sets automatically remove duplicate values.'
        },
        {
            id: 'q3',
            question: 'What is {1, 2} & {2, 3}?',
            options: ['{1, 2, 3}', '{2}', '{1, 3}', 'Error'],
            correctIndex: 1,
            explanation: '& is intersection - only items in BOTH sets: {2}'
        },
        {
            id: 'q4',
            question: 'Which method returns all key-value pairs?',
            options: ['keys()', 'values()', 'items()', 'pairs()'],
            correctIndex: 2,
            explanation: 'items() returns key-value pairs as tuples.'
        }
    ]
};
