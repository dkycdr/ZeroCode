import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz7Loops = {
    id: 'js-u4-quiz-loops',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Loops',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'How many times does this loop run? for (let i = 0; i < 5; i++)',
            options: ['4 times', '5 times', '6 times', 'Infinite'],
            correctIndex: 1,
            explanation: 'i starts at 0 and runs while i < 5. Values: 0,1,2,3,4 = 5 iterations.'
        },
        {
            id: 'q2',
            question: 'What does "break" do inside a loop?',
            options: [
                'Pauses the loop temporarily',
                'Skips to the next iteration',
                'Exits the loop immediately',
                'Restarts the loop'
            ],
            correctIndex: 2,
            explanation: 'break immediately exits the entire loop, skipping any remaining iterations.'
        },
        {
            id: 'q3',
            question: 'What does "continue" do inside a loop?',
            options: [
                'Exits the loop',
                'Skips to the next iteration',
                'Repeats the current iteration',
                'Pauses execution'
            ],
            correctIndex: 1,
            explanation: 'continue skips the rest of the current iteration and moves to the next one.'
        },
        {
            id: 'q4',
            question: 'What is the difference between while and do-while?',
            options: [
                'No difference',
                'while runs at least once, do-while might not run',
                'do-while runs at least once, while might not run',
                'while is faster'
            ],
            correctIndex: 2,
            explanation: 'do-while checks the condition AFTER running, so it always runs at least once. while checks first.'
        },
        {
            id: 'q5',
            question: 'Which loop is best when you know how many times to iterate?',
            options: ['while', 'do-while', 'for', 'switch'],
            correctIndex: 2,
            explanation: 'for loops are best when you know the number of iterations. while is for unknown iterations.'
        }
    ]
};
