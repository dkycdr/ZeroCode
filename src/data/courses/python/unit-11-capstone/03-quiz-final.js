import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz3Final = {
    id: 'py-u10-quiz-final',
    type: CONTENT_TYPES.QUIZ,
    title: 'Final Assessment',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the Python ternary expression?',
            options: ['a ? b : c', 'b if a else c', 'a then b else c', 'if a then b'],
            correctIndex: 1,
            explanation: 'Python: value_if_true if condition else value_if_false'
        },
        {
            id: 'q2',
            question: 'Which data structure has key-value pairs?',
            options: ['List', 'Tuple', 'Set', 'Dictionary'],
            correctIndex: 3,
            explanation: 'Dictionaries store key-value pairs: {key: value}'
        },
        {
            id: 'q3',
            question: 'What does *args collect?',
            options: ['Keyword arguments', 'Positional arguments', 'Default values', 'Return values'],
            correctIndex: 1,
            explanation: '*args collects extra positional arguments as a tuple.'
        },
        {
            id: 'q4',
            question: 'How do you read a JSON file?',
            options: ['json.read()', 'json.load(file)', 'json.parse()', 'file.json()'],
            correctIndex: 1,
            explanation: 'json.load(file_object) parses JSON from a file.'
        },
        {
            id: 'q5',
            question: 'Which block always executes in try/except?',
            options: ['try', 'except', 'else', 'finally'],
            correctIndex: 3,
            explanation: 'finally always runs, whether an exception occurred or not.'
        }
    ]
};
