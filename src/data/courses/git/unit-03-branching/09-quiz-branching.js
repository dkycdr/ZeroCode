import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Branching = {
    id: 'git-3-quiz-branching',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Parallel Universes 🌿',
    questions: [
        {
            id: 'q1',
            question: 'What is a Git branch at its absolute simplest mechanical level?',
            options: [
                'A zip file containing all project code.',
                'A 41-byte text file containing a commit SHA-1 hash.',
                'A hidden directory in the project root.',
                'A database table entry.'
            ],
            correctIndex: 1,
            explanation: 'Technically, a branch is just a "ref"—a simple text file in `.git/refs/heads/` that points to a specific commit hash.'
        },
        {
            id: 'q2',
            question: 'Which pointer tells Git which branch you are CURRENTLY working on?',
            options: [
                'MAIN',
                'ORIGIN',
                'HEAD',
                'INDEX'
            ],
            correctIndex: 2,
            explanation: 'HEAD is the master pointer that follows you around. It usually points to the current branch pointer.'
        },
        {
            id: 'q3',
            question: 'What happens to your project files when you switch to a different branch?',
            options: [
                'Nothing; files only change when you merge.',
                'Git deletes everything and you must pull from the server.',
                'Git replaces the files in your Working Directory with the version from that branch\'s latest commit.',
                'Git creates a second copy of your project folder.'
            ],
            correctIndex: 2,
            explanation: 'Git physically swaps the files in your working folder to match the state of the branch you switched to.'
        },
        {
            id: 'q4',
            question: 'Why is a Fast-Forward merge considered "linear"?',
            options: [
                'Because it is done quickly.',
                'Because it creates no merge commit and leaves a single straight line of history.',
                'Because it only works on text files.',
                'Because it requires an active internet connection.'
            ],
            correctIndex: 1,
            explanation: 'A Fast-Forward merge just moves a pointer; it doesn\'t create a new commit node, so the history looks like one continuous line.'
        },
        {
            id: 'q5',
            question: 'You want to create a branch and switch to it in ONE command. Which is correct?',
            options: [
                'git create <name>',
                'git branch --switch <name>',
                'git switch -c <name>',
                'git switch --new-branch <name>'
            ],
            correctIndex: 2,
            explanation: '`git switch -c` (the "c" stands for create) is the modern shortcut. `git checkout -b` also works for older versions.'
        }
    ]
};
