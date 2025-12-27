import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz2Tactical = {
    id: 'git-2-quiz-tactical',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Mastery of the Untracked 🏆',
    questions: [
        {
            id: 'q1',
            question: 'You accidentally ran `git reset --hard HEAD` and lost a commit. How do you find the SHA of that lost commit?',
            options: [
                'git status',
                'git log --all',
                'git reflog',
                'It is impossible; the commit is deleted.'
            ],
            correctIndex: 2,
            explanation: '`git reflog` tracks every change to the HEAD reference, documenting where it has pointed in the past, including commits that are no longer part of any branch.'
        },
        {
            id: 'q2',
            question: 'What happens to a file on your disk when you run `git restore --staged <file>`?',
            options: [
                'The file is deleted.',
                'The file\'s content is reverted to the last commit.',
                'The file remains exactly as it is; only the Staging Area entry is removed.',
                'The file is renamed to a backup copy.'
            ],
            correctIndex: 2,
            explanation: '`--staged` only targets the Index (Staging Area). It does not touch your Working Directory, so your physical file remains unchanged.'
        },
        {
            id: 'q3',
            question: 'If you want to ignore all files inside a `logs` folder, but ONLY if they are at the root of the project, which pattern should you use?',
            options: [
                'logs/**',
                '/logs/',
                '**/logs/',
                '*.log'
            ],
            correctIndex: 1,
            explanation: 'The leading slash `/` anchors the pattern to the directory where the `.gitignore` file resides (the project root).'
        },
        {
            id: 'q4',
            question: 'What is the "Shortest Edit Script" algorithm that Git uses for diffing?',
            options: [
                'Dijkstra\'s Algorithm',
                'Myers Algorithm',
                'Bubble Sort',
                'SHA-1 Collision'
            ],
            correctIndex: 1,
            explanation: 'Git uses the Myers Diff Algorithm to calculate the most efficient way to turn one version of a file into another.'
        },
        {
            id: 'q5',
            question: 'Which file allows you to ignore patterns ONLY on your local machine WITHOUT sharing them with your team?',
            options: [
                '.gitignore',
                '.git/info/exclude',
                '.gitconfig',
                '.env'
            ],
            correctIndex: 1,
            explanation: '`.git/info/exclude` is a local-only ignore file that isn\'t part of the shared repository history.'
        }
    ]
};
