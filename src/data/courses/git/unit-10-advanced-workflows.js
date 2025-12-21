import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit10AdvancedWorkflows = {
    id: 'git-unit-10',
    title: 'Unit 10: Advanced Workflows (Bisect & Blame)',
    description: 'Hunt down bugs with binary search and find out who broke the build.',
    items: [
        {
            id: 'git-10-deep-dive',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Debugging History',
            duration: '10 min',
            content: `
# Sherlock Holmes Mode 🕵️‍♂️

Sometimes you don't know *when* a bug was introduced.
Maybe it was yesterday, maybe 3 months ago.

## Git Bisect
Instead of checking out every single commit to test it (linear search), \`git bisect\` uses **binary search**.
1.  You mark the current commit as \`bad\`.
2.  You mark a commit from the past as \`good\`.
3.  Git cuts the history in half and checks out the middle commit.
4.  You test it. If it's broken, you say \`git bisect bad\`. If it works, \`git bisect good\`.
5.  Repeat until the exact bad commit is found.

## Git Blame
Use \`git blame <file>\` to see line-by-line authorship.
Great for finding who to ask questions to (not just for blaming!).
            `
        },
        {
            id: 'git-10-lab-bisect',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: The Bug Hunt',
            duration: '25 min',
            content: `
# Mission: Find the Culprit

A bug was introduced somewhere in the last 100 commits. Use \`bisect\` to find it.

## Objectives
1.  Start the bisect process.
2.  Mark the current commit as bad.
3.  Mark a past commit as good.
4.  Reset when done.

## Commands
\`\`\`bash
git bisect start
git bisect bad
git bisect good v1.0
# (Simulated testing happens here)
git bisect reset
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    text: 'Start bisect',
                    regex: 'git bisect start'
                },
                {
                    id: 'task2',
                    text: 'Mark bad/good',
                    regex: 'git bisect (bad|good)'
                }
            ]
        },
        {
            id: 'git-10-lab-blame',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: Who Wrote This?',
            duration: '10 min',
            content: `
# Mission: Attribution

You found a weird line of code in \`server.js\`. Who wrote it?

## Objectives
1.  Run git blame on server.js.

## Commands
\`\`\`bash
git blame server.js
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    text: 'Run git blame',
                    regex: 'git blame'
                }
            ]
        },
        {
            id: 'git-10-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 10 Assessment',
            questions: [
                {
                    id: 'q1',
                    text: 'What algorithm does git bisect use?',
                    options: ['Linear search', 'Binary search', 'Random search', 'Depth-first search'],
                    correct: 1
                },
                {
                    id: 'q2',
                    text: 'What is the first command to start bisecting?',
                    options: ['git bisect run', 'git bisect start', 'git bisect init', 'git start'],
                    correct: 1
                },
                {
                    id: 'q3',
                    text: 'git blame is useful for:',
                    options: ['Deleting code', 'Moving files', 'Seeing who last modified each line', 'Blaming others publicly'],
                    correct: 2
                }
            ]
        }
    ]
};
