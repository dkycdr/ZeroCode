import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz2Conflicts = {
    id: 'git-3-quiz-conflicts',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Conflict Architect 🏗️',
    questions: [
        {
            id: 'q1',
            question: 'In a Three-Way Merge, what is the "Base"?',
            options: [
                'The main branch.',
                'The current Working Directory.',
                'The most recent common ancestor of both branches.',
                'The first commit ever made in the project.'
            ],
            correctIndex: 2,
            explanation: 'Git uses the common ancestor as the anchor to determine which changes were made in which branch.'
        },
        {
            id: 'q2',
            question: 'In a conflict marker, what does the content between <<<<<<< HEAD and ======= represent?',
            options: [
                'The code on the branch you are merging FROM.',
                'The code on your CURRENT branch (where you are standing).',
                'The original code from the common ancestor.',
                'The code that Git thinks is the "correct" version.'
            ],
            correctIndex: 1,
            explanation: 'HEAD always represents your current location. The top section of a conflict marker is your local version.'
        },
        {
            id: 'q3',
            question: 'What is the correct order of operations to resolve a conflict?',
            options: [
                'Commit -> Add -> Edit',
                'Edit -> Add -> Commit',
                'Add -> Edit -> Commit',
                'Merge -> Edit -> Push'
            ],
            correctIndex: 1,
            explanation: 'You must first manually fix the file (Edit), tell Git it is ready (Add), and then finalize the merge object (Commit).'
        },
        {
            id: 'q4',
            question: 'What is the primary goal of a "Squash Merge"?',
            options: [
                'To make the file sizes smaller.',
                'To combine multiple messy commits from a feature branch into one clean commit on main.',
                'To delete the history of the main branch.',
                'To speed up the network transfer of the branch.'
            ],
            correctIndex: 1,
            explanation: 'Squashing keeps the main history clean by grouping all the incremental "work-in-progress" commits into a single logical update.'
        },
        {
            id: 'q5',
            question: 'You are in the middle of a messy merge and want to give up and put everything back to normal. What do you run?',
            options: [
                'git undo merge',
                'git merge --abort',
                'git reset --hard',
                'git restore .'
            ],
            correctIndex: 1,
            explanation: '`git merge --abort` is the safe way to exit a conflicted state and return the repository to the pre-merge condition.'
        }
    ]
};
