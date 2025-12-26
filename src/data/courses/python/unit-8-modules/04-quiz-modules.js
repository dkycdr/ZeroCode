import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz4Modules = {
    id: 'py-u7-quiz-modules',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Modules',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'Which imports only sqrt from math?',
            options: ['import sqrt from math', 'from math import sqrt', 'import math.sqrt', 'require("math")'],
            correctIndex: 1,
            explanation: 'from math import sqrt imports only the sqrt function.'
        },
        {
            id: 'q2',
            question: 'What command installs packages?',
            options: ['npm install', 'pip install', 'python install', 'apt install'],
            correctIndex: 1,
            explanation: 'pip is Python\'s package manager.'
        },
        {
            id: 'q3',
            question: 'What file lists project dependencies?',
            options: ['package.json', 'requirements.txt', 'deps.py', 'modules.txt'],
            correctIndex: 1,
            explanation: 'requirements.txt lists all pip dependencies.'
        }
    ]
};
