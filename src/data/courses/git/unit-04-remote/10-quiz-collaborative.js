import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz2Collaborative = {
    id: 'git-4-quiz-collaborative',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: The Collaborative Hub 🤝',
    duration: '15 min',
    content: {
        questions: [
            {
                id: 1,
                question: 'When using GitHub, why is a Personal Access Token (PAT) preferred over your account password for HTTPS command-line access?',
                options: [
                    'PATs are faster to type and easier to remember.',
                    'Passwords are no longer supported by modern web browsers.',
                    'PATs can be scoped to specific permissions and revoked without changing your main password.',
                    'Using a PAT automatically encrypts your source code on your local disk.'
                ],
                answer: 2,
                explanation: 'Security is about least privilege. A PAT allows you to grant "just enough" access to the CLI and can be deleted instantly if compromised.'
            },
            {
                id: 2,
                question: 'Which authentication method uses a Public/Private key pair and does not require entering a password for every push?',
                options: [
                    'HTTPS with Basic Auth',
                    'SSH (Secure Shell)',
                    'FTP (File Transfer Protocol)',
                    'SNA (Systems Network Architecture)'
                ],
                answer: 1,
                explanation: 'SSH is the industry standard for "set and forget" secure communication between your terminal and a remote server.'
            },
            {
                id: 3,
                question: 'What is a "Remote Tracking Branch" (e.g., origin/main)?',
                options: [
                    'A branch used by Git to track how many hours you spend coding.',
                    'A specialized local branch that acts as a read-only marker for the state of a branch on the server.',
                    'The branch where GitHub stores your profile picture and settings.',
                    'A hidden file in the .github directory that lists your contributors.'
                ],
                answer: 1,
                explanation: 'Remote tracking branches are pointers that bridge the gap between your local work and the remote state. They are updated when you run `git fetch`.'
            },
            {
                id: 4,
                question: 'You run "git branch -vv" and see "[origin/main: ahead 3]". What does this mean?',
                options: [
                    'The server has 3 commits that you don\'t have locally.',
                    'You have 3 commits locally that haven\'t been pushed to origin/main yet.',
                    'There are 3 merge conflicts that need to be resolved.',
                    'You have 3 different remotes named "origin".'
                ],
                answer: 1,
                explanation: '"Ahead" means your local branch has commits that the remote tracking branch (your last known state of the server) does not have.'
            },
            {
                id: 5,
                question: 'Which command provides a detailed report of the relationship between your local repository and its remote origin (including which branches are tracked)?',
                options: [
                    'git remote report',
                    'git status --verbose',
                    'git remote show origin',
                    'git config --get-remote'
                ],
                answer: 2,
                explanation: '`git remote show origin` acts as a "diagnostic tool" giving you a clear picture of URLs, tracking branches, and sync status.'
            }
        ]
    }
};
