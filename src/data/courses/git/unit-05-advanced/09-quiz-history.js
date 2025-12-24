import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1History = {
    id: 'git-5-quiz-history',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: The Rewrite ✍️',
    duration: '15 min',
    content: {
        questions: [
            {
                id: 1,
                question: 'What is the primary danger of using "git rebase" on a shared branch?',
                options: [
                    'It creates too many merge commits.',
                    'It rewrites history (changes commit hashes), breaking the repo for team members who have pulled.',
                    'It deletes all your files permanently.',
                    'It switches your keyboard layout to Dvorak.'
                ],
                answer: 1,
                explanation: 'Rebase copies commits to new hashes. If others have based work on the old hashes, their history becomes invalid/divergent.'
            },
            {
                id: 2,
                question: 'In an interactive rebase, what does the "squash" command do?',
                options: [
                    'Deletes the commit entirely.',
                    'Moves the commit to a different branch.',
                    'Combines the commit with the previous one to create a single, cleaner commit.',
                    'Renames the commit author.'
                ],
                answer: 2,
                explanation: 'Squashing melds a commit into its parent, useful for hiding "wip" or "typo" commits before merging.'
            },
            {
                id: 3,
                question: 'You want to copy a single commit from a feature branch to main, without merging the whole branch. Which command do you use?',
                options: [
                    'git merge --single',
                    'git cherry-pick <commit-hash>',
                    'git rebase --copy',
                    'git checkout --patch'
                ],
                answer: 1,
                explanation: 'Cherry-pick is the surgical tool for applying the changes from a specific commit onto your current branch.'
            },
            {
                id: 4,
                question: 'What happens to the original commits after a rebase?',
                options: [
                    'They are deleted immediately.',
                    'They remain in the database as "orphaned" objects until garbage collected.',
                    'They are archived in a .zip file.',
                    'Nothing, rebase modifies them in place.'
                ],
                answer: 1,
                explanation: 'Technically, the old commits still exist in the Git database (and can be found in the reflog) until they are garbage collected.'
            },
            {
                id: 5,
                question: 'Which rebase command allows you to change a commit message without changing the code?',
                options: [
                    'reword',
                    'pick',
                    'fixup',
                    'drop'
                ],
                answer: 0,
                explanation: '`reword` (or `r`) pauses the rebase to let you edit the commit log message.'
            }
        ]
    }
};
