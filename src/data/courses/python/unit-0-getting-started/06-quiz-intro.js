import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz6Intro = {
    id: 'py-u0-quiz-intro',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Python Basics',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'What type of language is Python?',
            options: ['Compiled', 'Interpreted', 'Assembly', 'Markup'],
            correctIndex: 1,
            explanation: 'Python is an interpreted language. Code runs line by line without prior compilation.'
        },
        {
            id: 'q2',
            question: 'How do you define code blocks in Python?',
            options: ['Curly braces {}', 'Parentheses ()', 'Indentation (spaces)', 'Square brackets []'],
            correctIndex: 2,
            explanation: 'Python uses indentation (typically 4 spaces) to define code blocks, not braces.'
        },
        {
            id: 'q3',
            question: 'Which function displays output in Python?',
            options: ['console.log()', 'echo()', 'print()', 'display()'],
            correctIndex: 2,
            explanation: 'print() is Python\'s built-in function to display output to the console.'
        },
        {
            id: 'q4',
            question: 'What is an f-string?',
            options: ['A file string', 'A formatted string with variables', 'A float string', 'A function string'],
            correctIndex: 1,
            explanation: 'f-strings (f"...") allow you to embed variables directly inside strings using {variable}.'
        },
        {
            id: 'q5',
            question: 'What command runs a Python script?',
            options: ['run script.py', 'python script.py', 'exec script.py', 'start script.py'],
            correctIndex: 1,
            explanation: 'Use "python script.py" or "python3 script.py" to run a Python file.'
        }
    ]
};
