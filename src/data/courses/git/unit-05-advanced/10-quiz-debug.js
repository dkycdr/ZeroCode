import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz2Debug = {
    id: 'git-5-quiz-debug',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: The Detective 🕵️‍♂️',
    duration: '15 min',
    content: {
        questions: [
            {
                id: 1,
                question: 'You have modified checked-out files but need to switch branches to fix a bug urgently. What command saves your work temporarily?',
                options: [
                    'git commit --temp',
                    'git stash',
                    'git clean',
                    'git hold'
                ],
                answer: 1,
                explanation: '`git stash` pushes your modified tracked files onto a stack, reverting your working directory to the HEAD commit so you can switch branches.'
            },
            {
                id: 2,
                question: 'What is the purpose of "git clean -n"?',
                options: [
                    'To force delete untracked files.',
                    'To dry-run (preview) which untracked files will be deleted.',
                    'To clean up the commit history.',
                    'To remove stashed items.'
                ],
                answer: 1,
                explanation: '`-n` stands for "dry run". It is a critical safety step because `git clean` is destructive and unrecoverable.'
            },
            {
                id: 3,
                question: 'You are using "git bisect". You have checked out a middle commit, tested it, and found the bug is NOT present. What do you tell Git?',
                options: [
                    'git bisect bad',
                    'git bisect good',
                    'git bisect skip',
                    'git bisect reset'
                ],
                answer: 1,
                explanation: 'If the bug is NOT present, the commit is "good". Git will then search the later half of the history (between this commit and the bad one).'
            },
            {
                id: 4,
                question: 'Which tool would you use to find out who introduced a specific line of code in "server.js"?',
                options: [
                    'git blame server.js',
                    'git log server.js',
                    'git show server.js',
                    'git who server.js'
                ],
                answer: 0,
                explanation: '`git blame` annotates each line of the file with the commit hash, author, and date of the last modification.'
            },
            {
                id: 5,
                question: 'After applying a stash with "git stash pop", what happens to the stash entry?',
                options: [
                    'It remains in the list.',
                    'It is removed from the list.',
                    'It becomes a new branch.',
                    'It is converted to a commit.'
                ],
                answer: 1,
                explanation: '`pop` applies the changes and then drops (deletes) the stash from the stack. Use `apply` if you want to keep it.'
            }
        ]
    }
};
