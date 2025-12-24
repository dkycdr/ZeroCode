import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Ops = {
    id: 'git-2-quiz-ops',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Tactical Operations 🎯',
    questions: [
        {
            id: 'q1',
            question: 'Which glob pattern ignores any .log file, regardless of nested directory depth?',
            options: [
                '*.log',
                '/logs/*.log',
                '**/ *.log',
                'logs/**/*.log'
            ],
            correctIndex: 2,
            explanation: 'The double asterisk `**` is the recursive wildcard that matches zero or more directories.'
        },
        {
            id: 'q2',
            question: 'What is the "Safety Level" of git restore (without --staged)?',
            options: [
                'High - Changes are saved in a backup.',
                'Medium - It can be undone with git reset.',
                'Dangerous - Changes are deleted from disk and NOT stored in Git.',
                'None - The command does not affect the disk.'
            ],
            correctIndex: 2,
            explanation: '`git restore` on the working directory is destructive. Since the changes were never committed, Git has no record of them to recover from.'
        },
        {
            id: 'q3',
            question: 'How do you see the differences between what is currently staged and what is in the repository?',
            options: [
                'git diff',
                'git diff --staged',
                'git status',
                'git diff HEAD'
            ],
            correctIndex: 1,
            explanation: 'The `--staged` (or `--cached`) flag specifically compares the Staging Area (Index) against the last commit.'
        },
        {
            id: 'q4',
            question: 'Why should you never amend a commit that is already public (pushed)?',
            options: [
                'The server will reject the file upload.',
                'It creates an identical duplicate commit on the server.',
                'It changes the SHA-1 hash, breaking the history for teammates.',
                'It is forbidden by Git\'s security protocol.'
            ],
            correctIndex: 2,
            explanation: 'Amending a commit creates a new object with a different SHA-1. This causes history divergence for anyone else who has already pulled the original commit.'
        },
        {
            id: 'q5',
            question: 'A .gitignore rule matches a file that was committed yesterday. What happens?',
            options: [
                'Git deletes the file from history.',
                'Git ignores the .gitignore rule for that file.',
                'Git shows an error until the file is deleted.',
                'The file is automatically moved to the Staging Area.'
            ],
            correctIndex: 1,
            explanation: '`.gitignore` only works on untracked files. If a file is already tracked, you must use `git rm --cached` to stop tracking it before the ignore rules apply.'
        }
    ]
};
