import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Basics = {
    id: 'git-1-quiz-basics',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Fundamentals 📝',
    duration: '5 min',
    questions: [
        {
            id: 'q1',
            question: 'Which command transforms a regular folder into a Git Repository?',
            options: [
                'git start',
                'git init',
                'git create',
                'git new'
            ],
            correctIndex: 1,
            explanation: '`git init` creates the hidden `.git` directory, which contains the repository database.'
        },
        {
            id: 'q2',
            question: 'Which configuration level applies to ALL your projects?',
            options: [
                '--local',
                '--system',
                '--global',
                '--root'
            ],
            correctIndex: 2,
            explanation: 'The `--global` config (stored in `~/.gitconfig`) applies to the current user across all projects.'
        },
        {
            id: 'q3',
            question: 'What is the "Staging Area" used for?',
            options: [
                'Storing backups on the server',
                'Preparing specific changes to be committed',
                'Running code before deployment',
                'Saving files permanently'
            ],
            correctIndex: 1,
            explanation: 'The Staging Area (Index) allows you to "curate" your commit by choosing which changes to include.'
        },
        {
            id: 'q4',
            question: 'Which command moves a file from the Working Directory to the Staging Area?',
            options: [
                'git push',
                'git commit',
                'git move',
                'git add'
            ],
            correctIndex: 3,
            explanation: '`git add` calculates the file hash and adds it to the Index.'
        },
        {
            id: 'q5',
            question: 'If you want to view a compact history of your project, which command is best?',
            options: [
                'git history',
                'git log --oneline',
                'git status',
                'git show'
            ],
            correctIndex: 1,
            explanation: '`git log --oneline` condenses every commit into a single line with its shortened hash and message.'
        }
    ]
};
