import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit8RebaseCherrypick = {
    id: 'git-unit-8',
    title: 'Unit 8: Advanced History (Rebase & Cherry-pick)',
    description: 'Master the art of rewriting history for a clean, professional codebase.',
    items: [
        {
            id: 'git-7-deep-dive',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Rebase vs Merge',
            duration: '15 min',
            content: `
# The Great Debate: Rebase vs. Merge

In Git, there are two main ways to integrate changes from one branch into another: the **Merge** and the **Rebase**.

## 1. Git Merge
The standard, safe way.

*   **What it does:** Creates a new "merge commit" that ties two histories together.
*   **Pros:** Non-destructive. Preserves history exactly as it happened.
*   **Cons:** History can become cluttered with "Merge branch..." commits.
*   **Analogy:** Tying two ropes together with a knot.

## 2. Git Rebase
The clean, dangerous way.

*   **What it does:** Moves the entire branch to begin on the tip of the master branch. It rewrites history.
*   **Pros:** Creates a perfectly linear history. No unnecessary merge commits. Looks like the work was done individually in series.
*   **Cons:** Dangerous if not used correctly (don't rebase public branches!). Can be confusing to resolve conflicts.
*   **Analogy:** Cutting the rope and fusing it to the end of the other rope seamlessly.

## 3. Git Cherry-Pick
The surgical way.

*   **What it does:** Pick a specific commit from one branch and apply it to another.
*   **Use Case:** You fixed a bug on \`dev\` and need that exact fix on \`prod\` immediately, without merging all the other unstable stuff.

> [!WARNING]
> **Never rebase a branch that others are working on!** Rebase changes commit IDs. If you rebase public history, you break everyone else's repo.
            `
        },
        {
            id: 'git-7-lab-rebase',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: Interactive Rebase',
            duration: '25 min',
            content: `
# Mission: Cleanup Crew

You have a feature branch with messy commits ("wip", "typo", "fix"). Your boss wants a clean history before merging.

## Objectives
1.  Run an interactive rebase.
2.  Squash multiple commits into one.
3.  Reword a commit message.

## Commands
\`\`\`bash
git rebase -i HEAD~3
# (Editor opens)
# change 'pick' to 'squash' or 's' to combine
# change 'pick' to 'reword' or 'r' to rename
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    description: 'Start interactive rebase for last 3 commits',
                    regex: 'git rebase -i HEAD~3'
                },
                {
                    id: 'task2',
                    description: 'Successfully rebase',
                    regex: 'Successfully rebased'
                }
            ]
        },
        {
            id: 'git-7-lab-cherry',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: Cherry Picking',
            duration: '15 min',
            files: [
                { name: 'feature.js', content: 'console.log("New Feature")', language: 'javascript' }
            ],
            content: `
# Mission: The Hotfix

A critical bug was fixed in the \`feature-x\` branch (commit \`a1b2c3d\`). We need that fix in \`main\` NOW, but we can't merge the whole feature yet.

## Objectives
1.  Identify the commit hash (we'll pretend it's \`a1b2c3d\`).
2.  Cherry-pick it into your current branch.

## Commands
\`\`\`bash
git log --oneline
git cherry-pick a1b2c3d
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    description: 'Cherry-pick a commit (use any hash)',
                    regex: 'git cherry-pick [a-z0-9]+'
                }
            ]
        },
        {
            id: 'git-7-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 7 Assessment',
            questions: [
                {
                    id: 'q1',
                    question: 'Which command rewrites history?',
                    options: ['git merge', 'git rebase', 'git log', 'git status'],
                    correctIndex: 1,
                    explanation: '`git rebase` rewrites history by moving the base of your branch to a new commit, creating new commit hashes.'
                },
                {
                    id: 'q2',
                    question: 'When should you NOT rebase?',
                    options: ['On local cleanup', 'On public/shared branches', 'Before merging', 'When alone'],
                    correctIndex: 1,
                    explanation: 'Never rebase public/shared branches because it rewrites history that others may have based their work on.'
                },
                {
                    id: 'q3',
                    question: 'What does cherry-pick do?',
                    options: ['Merges two branches', 'Deletes a branch', 'Copies a specific commit', 'Undoes a commit'],
                    correctIndex: 2,
                    explanation: '`git cherry-pick` takes a specific commit from one branch and applies it as a new commit onto your current branch.'
                }
            ]
        }
    ]
};
