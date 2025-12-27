import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz1Network = {
    id: 'git-4-quiz-network',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: The Network Architect 🏗️',
    duration: '15 min',
    content: {
        questions: [
            {
                id: 1,
                question: 'What is the most accurate description of a "Remote" in Git?',
                options: [
                    'A read-only backup of your files that cannot be modified.',
                    'A specialized folder within the .git directory for storing logs.',
                    'Another version of the repository hosted on a server or another machine.',
                    'A plugin for your code editor that enables collaborative editing.'
                ],
                answer: 2,
                explanation: 'A remote is another instance of your repository, usually hosted on a server like GitHub, that acts as a collaboration hub.'
            },
            {
                id: 2,
                question: 'Which command shows you both the names and the actual URLs of your configured remotes?',
                options: [
                    'git remote show all',
                    'git remote -v',
                    'git config --list remotes',
                    'git list-urls'
                ],
                answer: 1,
                explanation: 'The `git remote -v` command (verbose) lists the shortnames and the full URLs for fetching and pushing.'
            },
            {
                id: 3,
                question: 'What is the main difference between "git fetch" and "git pull"?',
                options: [
                    'Fetch only works with HTTPS, while pull only works with SSH.',
                    'Fetch downloads remote data without changing your working tree; Pull downloads and immediately tries to merge.',
                    'Fetch is used for pushing code, while pull is used for receiving code.',
                    'There is no difference; they are exact aliases for each other.'
                ],
                answer: 1,
                explanation: 'Fetch is safe because it only updates remote tracking branches. Pull is aggressive because it immediately attempts to merge downloaded changes into your current branch.'
            },
            {
                id: 4,
                question: 'What does the "-u" flag do in the command "git push -u origin main"?',
                options: [
                    'It stands for "Update" and replaces the remote files.',
                    'It stands for "User" and prompt for credentials.',
                    'It stands for "Upstream" and sets a tracking relationship between the local and remote branch.',
                    'It stands for "Undo" and reverts the last remote commit.'
                ],
                answer: 2,
                explanation: 'The `-u` or `--set-upstream` flag creates a link between your local branch and the remote branch, allowing for simpler pushes and pulls later.'
            },
            {
                id: 5,
                question: 'You have amended your last commit and now want to push to GitHub. GitHub rejects your push because history has diverged. What is the ELITE way to handle this?',
                options: [
                    'Delete the local repository and clone fresh from GitHub.',
                    'Run "git push --force" to overwrite the remote history immediately.',
                    'Run "git push --force-with-lease" to safely overwrite if no one else has pushed.',
                    'Manually edit the files on the GitHub website to match your local state.'
                ],
                answer: 2,
                explanation: '`--force-with-lease` is the safer alternative to raw forcing, as it checks if your remote tracking info is up to date before overwriting.'
            }
        ]
    }
};
