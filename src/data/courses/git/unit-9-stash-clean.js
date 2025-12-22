import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit9StashClean = {
    id: 'git-unit-9',
    title: 'Unit 9: Stashing & Cleaning',
    description: 'Manage your workspace chaos with git stash and git clean.',
    items: [
        {
            id: 'git-8-deep-dive',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Managing Chaos',
            duration: '10 min',
            content: `
# Help! My Workspace is Messy!

So you're working on a feature and your boss runs in: "URGENT BUG FIX NEEDED NOW!" 🚨
But you have 10 files modified and the code doesn't even compile. You can't commit this mess.

## Enter: Git Stash
\`git stash\` takes all your dirty changes and puts them in a temporary storage area (a "stack").
Your workspace becomes clean (commits only), and you can switch branches safely.
When you're back, \`git stash pop\` brings your changes back.

## Enter: Git Clean
Sometimes you just have junk files (build artifacts, logs, accidental copies) that you want to Nuke™.
\`git clean\` deletes untracked files permanently.

> [!WARNING]
> \`git clean -f\` is forever. Always run \`git clean -n\` (dry run) first to see what you're about to destroy.
            `
        },
        {
            id: 'git-8-lab-stash',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: The Emergency Fix',
            duration: '20 min',
            files: [
                { name: 'wip_feature.js', content: 'console.log("Half written code...' }
            ],
            content: `
# Mission: Save for Later

You are working on 'wip_feature.js'. You need to context switch. Stash your changes!

## Objectives
1.  Stash your current changes.
2.  Verify the stash list.
3.  Bring the changes back.

## Commands
\`\`\`bash
git stash
git stash list
git stash pop
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    description: 'Stash changes',
                    regex: 'git stash' // Checks history
                },
                {
                    id: 'task2',
                    description: 'Pop stash',
                    regex: 'git stash pop'
                }
            ]
        },
        {
            id: 'git-8-lab-clean',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: Spring Cleaning',
            duration: '15 min',
            files: [
                { name: 'temp.log', content: 'error log' },
                { name: 'build.tmp', content: 'binary garbage' }
            ],
            content: `
# Mission: Delete the Junk

You have untracked files cluttering your repo. Get rid of them.

## Objectives
1.  Do a "dry run" to see what will be deleted.
2.  Force delete the files.

## Commands
\`\`\`bash
git clean -n
git clean -f
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    description: 'Run dry run (git clean -n)',
                    regex: 'git clean -n'
                },
                {
                    id: 'task2',
                    description: 'Force clean (git clean -f)',
                    regex: 'git clean -f'
                }
            ]
        },
        {
            id: 'git-8-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 8 Assessment',
            questions: [
                {
                    id: 'q1',
                    question: 'What does git stash do?',
                    options: ['Deletes changes', 'Commits changes', 'Temporarily saves changes', 'Pushes to remote'],
                    correctIndex: 2,
                    explanation: '`git stash` temporarily shelves (or stashes) changes you\'ve made to your working copy so you can work on something else.'
                },
                {
                    id: 'q2',
                    question: 'Which command applies the stash and removes it from the list?',
                    options: ['git stash apply', 'git stash pop', 'git stash drop', 'git stash pick'],
                    correctIndex: 1,
                    explanation: '`git stash pop` applies the stash and then immediately removes it from the stash list. `apply` keeps it.'
                },
                {
                    id: 'q3',
                    question: 'Why should you run git clean -n first?',
                    options: ['It is faster', 'It deletes directories', 'To preview what will be deleted', 'It is required'],
                    correctIndex: 2,
                    explanation: '`git clean -n` performs a "dry run" showing you exactly which files would be deleted without actually deleting them.'
                }
            ]
        }
    ]
};
