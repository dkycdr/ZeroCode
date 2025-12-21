import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Remote = {
    id: 'git-unit-5',
    title: 'Unit 5: Remote Repositories',
    description: 'Connect your local code to the world. Push, pull, and clone.',
    items: [
        {
            id: 'git-5-remote-concepts',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Remotes & GitHub',
            duration: '10 min',
            content: `
# The World is Your Remote

So far, everything you've done has been on your computer (local).
To share code, you need a **Remote Repository**.

## What is a Remote?
It's just another copy of your repository, usually hosted on the internet.
GitHub, GitLab, and Bitbucket are popular hosting services.

## Key Commands
*   \`git remote add origin <url>\`: Connects your local repo to a remote URL.
*   \`git push\`: Uploads your commits to the remote.
*   \`git pull\`: Downloads new commits from the remote.
*   \`git clone <url>\`: Downloads an entire repository from scratch.

> [!NOTE]
> "origin" is just the conventional nickname for your primary remote. You could call it "potato" if you wanted, but please don't.
            `
        },
        {
            id: 'git-5-lab-remote',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: Going Online',
            duration: '20 min',
            files: [
                { name: 'README.md', content: '# My Project\nReady to be pushed!' }
            ],
            content: `
# Mission: Push to FakeHub

You have a local project. It's time to back it up.

## Objectives
1.  Initialize your repository.
2.  Add a remote named \`origin\`.
3.  Push your code!

## Commands
\`\`\`bash
git init
git remote add origin https://github.com/zerocode/project.git
git push origin main
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    text: 'Initialize repository',
                    regex: '"initialized":true'
                },
                {
                    id: 'task2',
                    text: 'Add remote "origin" (git remote add ...)',
                    regex: 'git remote add origin' // We check command history for this one
                },
                {
                    id: 'task3',
                    text: 'Push code (git push ...)',
                    regex: 'git push'
                }
            ]
        },
        {
            id: 'git-5-lab-clone',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: The Clone Wars',
            duration: '15 min',
            content: `
# Mission: Download Code

Sometimes you want to start with someone else's code.

## Objectives
1.  Clear your terminal (\`clear\`).
2.  Clone a repository.

## Commands
\`\`\`bash
git clone https://github.com/facebook/react.git
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    text: 'Clone a repository',
                    regex: 'git clone'
                }
            ]
        },
        {
            id: 'git-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 5 Assessment',
            questions: [
                {
                    id: 'q1',
                    text: 'What command downloads an entire repository?',
                    options: ['git down', 'git pull', 'git clone', 'git checkout'],
                    correct: 2
                },
                {
                    id: 'q2',
                    text: 'What is "origin"?',
                    options: ['The default branch', 'The default remote name', 'Your username', 'A commit hash'],
                    correct: 1
                },
                {
                    id: 'q3',
                    text: 'Which command uploads your changes?',
                    options: ['git upload', 'git push', 'git update', 'git send'],
                    correct: 1
                }
            ]
        }
    ]
};
