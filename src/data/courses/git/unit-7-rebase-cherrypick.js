export const unit7RebaseCherrypick = {
    id: 'git-unit-7',
    title: 'Advanced History: Rebase & Cherry-pick',
    description: 'Master the art of rewriting history. Keep your timeline clean.',
    items: [
        {
            id: 'git-7-deep-dive',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Rebase vs Merge',
            duration: '10 min',
            content: `
# The Great Debate: Rebase vs Merge

When you want to combine branches, you have two choices.

## 1. Merge (Preserve History)
Merges create a "merge commit" that ties two branches together.
*   **Pros**: Non-destructive, complete history.
*   **Cons**: Messy "railroad tracks" in history.

## 2. Rebase (Rewrite History)
Rebase moves your entire branch to begin at the tip of the other branch.
*   **Pros**: Perfectly linear history.
*   **Cons**: Danger! Rewrites history. Never rebase public branches.

> [!CAUTION]
> **Golden Rule**: Only rebase *local* branches that you haven't shared yet.
            `
        },
        {
            id: 'git-7-lab-rebase',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: Interactive Rebase',
            duration: '20 min',
            content: `
# Mission: Clean Your History

Interactive rebase (\`rebase -i\`) lets you squash, edit, and reorder commits.

## Objectives
1.  Run an interactive rebase (simulation).

## Commands
\`\`\`bash
git rebase -i HEAD~3
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    text: 'Run interactive rebase',
                    regex: 'git rebase -i'
                }
            ]
        },
        {
            id: 'git-7-lab-cherrypick',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: Cherry Picking',
            duration: '15 min',
            content: `
# Mission: Pick the Best Fruit

Sometimes you want just *one* specific commit from another branch, not the whole thing.

## Objectives
1.  Cherry-pick a commit by its hash.

## Commands
\`\`\`bash
git cherry-pick a1b2c3d
\`\`\`
            `,
            tasks: [
                {
                    id: 'task1',
                    text: 'Cherry-pick a commit',
                    regex: 'git cherry-pick'
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
                    text: 'What does rebase do?',
                    options: ['Merges two branches', 'Rewrites history to make it linear', 'Deletes the branch', 'Creates a backup'],
                    correct: 1
                },
                {
                    id: 'q2',
                    text: 'When should you NOT rebase?',
                    options: ['On local branches', 'On public/shared branches', 'On feature branches', 'Never'],
                    correct: 1
                },
                {
                    id: 'q3',
                    text: 'What command copies a single commit to your current branch?',
                    options: ['git merge', 'git copy', 'git cherry-pick', 'git rebase'],
                    correct: 2
                }
            ]
        }
    ]
}; \`\`\`

## Troubleshooting Guide

### Problem: Rebase Conflicts

**Symptoms:**
\`\`\`
CONFLICT (content): Merge conflict in file.txt
error: could not apply abc123...
\`\`\`

**Diagnosis:**
- Same lines changed in both branches
- File deleted in one branch, modified in other
- Binary file conflicts

**Solutions:**
\`\`\`bash
# Option 1: Resolve manually
# Edit files, remove markers
git add .
git rebase --continue

# Option 2: Use theirs
git checkout --theirs file.txt
git add file.txt
git rebase --continue

# Option 3: Use ours
git checkout --ours file.txt
git add file.txt
git rebase --continue

# Option 4: Abort
git rebase --abort
\`\`\`

### Problem: Cherry-pick Creates Duplicate

**Symptoms:**
\`\`\`
Commit appears twice in history
Changes applied multiple times
\`\`\`

**Diagnosis:**
- Cherry-picked commit already merged
- Same changes in different commits

**Solutions:**
\`\`\`bash
# Remove duplicate
git revert HEAD

# Or use interactive rebase
git rebase -i HEAD~5
# Drop the duplicate commit
\`\`\`

### Problem: Force Push Rejected

**Symptoms:**
\`\`\`
! [rejected] feature -> feature (non-fast-forward)
error: failed to push some refs
\`\`\`

**Diagnosis:**
- Remote has commits you don't have
- Someone else pushed to branch

**Solutions:**
\`\`\`bash
# Option 1: Force with lease (safer)
git push --force-with-lease

# Option 2: Fetch and rebase
git fetch origin
git rebase origin/feature
git push

# Option 3: Force push (dangerous!)
git push --force
# Only if you're sure!
\`\`\`

## Performance Tips

### Speed Up Rebase

**For large repositories:**
\`\`\`bash
# Use rerere (reuse recorded resolution)
git config --global rerere.enabled true

# Git remembers conflict resolutions
# Automatically applies them next time
\`\`\`

### Optimize Cherry-pick

**For multiple cherry-picks:**
\`\`\`bash
# Use -x to record original commit
git cherry-pick -x abc123

# Adds line to commit message:
# (cherry picked from commit abc123)

# Helps track where commits came from
\`\`\`

## Summary

### Key Takeaways

**Rebase:**
- Rewrites commit history
- Creates linear timeline
- Use for local branches
- Clean up before merging
- Never rebase public branches

**Cherry-pick:**
- Applies specific commits
- Use for hotfixes
- Port features between branches
- Recover lost commits
- Test after applying

**When to Use Each:**
- Rebase: Clean up your branch
- Cherry-pick: Apply specific commits
- Merge: Combine branches (public)
- Reset: Undo local changes

### Command Reference

**Rebase Commands:**
\`\`\`bash
git rebase main                    # Rebase onto main
git rebase -i HEAD~3               # Interactive rebase
git rebase --continue              # Continue after conflict
git rebase --abort                 # Cancel rebase
git rebase --onto new old feature  # Change base
\`\`\`

**Cherry-pick Commands:**
\`\`\`bash
git cherry-pick abc123        # Pick single commit
git cherry-pick abc..xyz      # Pick range
git cherry-pick -n abc123     # Pick without commit
git cherry-pick --continue    # Continue after conflict
git cherry-pick --abort       # Cancel cherry-pick
\`\`\`

**Recovery Commands:**
\`\`\`bash
git reflog                    # View all actions
git reset --hard HEAD@{5}     # Go back in time
git cherry-pick abc123        # Recover commit
\`\`\`
`
        },

{
    id: 'git-7-2',
        type: CONTENT_TYPES.LESSON,
            title: 'Practice: Rebase & Cherry-pick',
                duration: '40 min',
                    content: `
# Practice: Rebase & Cherry-pick

In this lesson, you'll practice using git rebase and cherry-pick to manage your commit history.

## Setup Instructions

1. Create a practice repository
2. Make several commits
3. Practice rebasing and cherry-picking
4. Learn to handle conflicts

## Important Notes

- These are terminal commands
- Run them in your terminal/command prompt
- Create a test repository to practice safely
- Don't practice on real projects initially

## Tasks Overview

You'll complete 7 tasks:
1. Basic rebase
2. Interactive rebase to squash commits
3. Reword commit messages
4. Cherry-pick single commit
5. Cherry-pick multiple commits
6. Handle rebase conflicts
7. Advanced rebase techniques
`,
                        files: [
                            {
                                name: 'terminal.sh',
                                language: 'bash',
                                content: `# Git Rebase & Cherry-pick Practice
# Follow the instructions below

# ============================================
# TASK 1: Basic Rebase
# ============================================
# Instructions:
# 1. Create a new repository
# 2. Create main branch with 3 commits
# 3. Create feature branch with 2 commits
# 4. Rebase feature onto main
# 5. Verify linear history

# Your commands here:


# ============================================
# TASK 2: Interactive Rebase - Squash
# ============================================
# Instructions:
# 1. Create 4 related commits
# 2. Use interactive rebase to squash them into 1
# 3. Write a good combined commit message
# 4. Verify result with git log

# Your commands here:


# ============================================
# TASK 3: Reword Commit Messages
# ============================================
# Instructions:
# 1. Create 3 commits with poor messages
# 2. Use interactive rebase to reword them
# 3. Follow conventional commit format
# 4. Verify improved messages

# Your commands here:


# ============================================
# TASK 4: Cherry-pick Single Commit
# ============================================
# Instructions:
# 1. Create two branches: feature-a and feature-b
# 2. Make commits on feature-a
# 3. Cherry-pick one commit to feature-b
# 4. Verify commit appears on both branches

# Your commands here:


# ============================================
# TASK 5: Cherry-pick Multiple Commits
# ============================================
# Instructions:
# 1. Create hotfix branch with 3 commits
# 2. Cherry-pick all 3 to main branch
# 3. Use -x flag to track origin
# 4. Verify all commits applied

# Your commands here:


# ============================================
# TASK 6: Handle Rebase Conflicts
# ============================================
# Instructions:
# 1. Create conflicting changes on two branches
# 2. Attempt to rebase
# 3. Resolve conflicts properly
# 4. Complete the rebase

# Your commands here:


# ============================================
# TASK 7: Advanced Rebase
# ============================================
# Instructions:
# 1. Use rebase --onto to change base
# 2. Split a large commit into smaller ones
# 3. Reorder commits logically
# 4. Create clean, professional history

# Your commands here:


# ============================================
# VERIFICATION
# ============================================
# Check your work:
# - git log --oneline --graph --all
# - git reflog
# - Verify clean, linear history
`
                            }
                        ],
                            tasks: [
                                {
                                    id: 'git-7-task-1',
                                    title: 'Perform Basic Rebase',
                                    instructions: `Create a repository with main and feature branches, then rebase feature onto main.

Steps:
1. Initialize repository: git init rebase-practice
2. Create 3 commits on main
3. Create feature branch: git checkout -b feature
4. Create 2 commits on feature
5. Rebase: git rebase main
6. Verify: git log --oneline --graph

Expected result: Linear history with feature commits on top of main`,
                                    validation: {
                                        type: 'terminal',
                                        command: 'git log --oneline --graph',
                                        expectedPattern: /linear|rebase/i
                                    }
                                },
                                {
                                    id: 'git-7-task-2',
                                    title: 'Squash Commits with Interactive Rebase',
                                    instructions: `Use interactive rebase to combine multiple related commits.

Steps:
1. Create 4 commits: "Add header", "Fix header", "Update header", "Final header"
2. Run: git rebase -i HEAD~4
3. Keep first as 'pick', change others to 'squash'
4. Write combined message: "feat: Add complete header component"
5. Verify: git log --oneline

Expected result: 4 commits become 1 with clear message`,
                                    validation: {
                                        type: 'terminal',
                                        command: 'git log --oneline -1',
                                        expectedPattern: /feat:|squash/i
                                    }
                                },
                                {
                                    id: 'git-7-task-3',
                                    title: 'Reword Commit Messages',
                                    instructions: `Improve commit messages using interactive rebase.

Steps:
1. Create commits with messages: "stuff", "things", "updates"
2. Run: git rebase -i HEAD~3
3. Change 'pick' to 'reword' for all
4. Update to: "feat: Add feature", "fix: Fix bug", "docs: Update README"
5. Verify: git log --oneline

Expected result: Professional commit messages following conventions`,
                                    validation: {
                                        type: 'terminal',
                                        command: 'git log --oneline -3',
                                        expectedPattern: /feat:|fix:|docs:/i
                                    }
                                },
                                {
                                    id: 'git-7-task-4',
                                    title: 'Cherry-pick Single Commit',
                                    instructions: `Apply a specific commit from one branch to another.

Steps:
1. Create feature-a branch with 3 commits
2. Note hash of middle commit: git log --oneline
3. Create feature-b branch from main
4. Cherry-pick: git cherry-pick <hash>
5. Verify: git log --oneline

Expected result: Commit appears on both branches with different hashes`,
                                    validation: {
                                        type: 'terminal',
                                        command: 'git log --oneline',
                                        expectedPattern: /cherry|pick/i
                                    }
                                },
                                {
                                    id: 'git-7-task-5',
                                    title: 'Cherry-pick Multiple Commits',
                                    instructions: `Apply multiple commits using cherry-pick with tracking.

Steps:
1. Create hotfix branch with 3 commits
2. Note commit hashes: git log --oneline
3. Switch to main: git checkout main
4. Cherry-pick with tracking: git cherry-pick -x <hash1> <hash2> <hash3>
5. Verify: git log

Expected result: All commits applied with "(cherry picked from...)" notes`,
                                    validation: {
                                        type: 'terminal',
                                        command: 'git log -3',
                                        expectedPattern: /cherry picked from/i
                                    }
                                },
                                {
                                    id: 'git-7-task-6',
                                    title: 'Resolve Rebase Conflicts',
                                    instructions: `Handle conflicts during rebase operation.

Steps:
1. Create main with file: echo "main version" > file.txt
2. Commit it
3. Create feature branch
4. Modify file: echo "feature version" > file.txt
5. Commit it
6. Checkout main, modify same file differently
7. Commit it
8. Checkout feature: git rebase main
9. Resolve conflict in file.txt
10. git add file.txt && git rebase --continue

Expected result: Successful rebase with resolved conflicts`,
                                    validation: {
                                        type: 'terminal',
                                        command: 'git log --oneline',
                                        expectedPattern: /conflict|resolve/i
                                    }
                                },
                                {
                                    id: 'git-7-task-7',
                                    title: 'Advanced Rebase Techniques',
                                    instructions: `Use advanced rebase features to clean history.

Steps:
1. Create messy history with 5 commits
2. Use rebase -i to:
   - Reorder commits logically
   - Squash related commits
   - Drop unnecessary commits
   - Reword messages
3. Result should be 2-3 clean commits
4. Verify: git log --oneline --graph

Expected result: Clean, professional commit history`,
                                    validation: {
                                        type: 'terminal',
                                        command: 'git log --oneline',
                                        expectedPattern: /feat:|fix:|clean/i
                                    }
                                }
                            ]
},

{
    id: 'git-7-3',
        type: CONTENT_TYPES.QUIZ,
            title: 'Quiz: Rebase & Cherry-pick',
                duration: '5 min',
                    questions: [
                        {
                            id: 'git-7-q1',
                            question: 'What is the main difference between git merge and git rebase?',
                            options: [
                                'Merge is faster than rebase',
                                'Rebase creates a linear history, merge preserves branch history',
                                'Merge can handle conflicts, rebase cannot',
                                'Rebase is only for remote branches'
                            ],
                            correctAnswer: 1,
                            explanation: 'Rebase creates a linear history by replaying commits on top of another branch, while merge preserves the complete branch history including when branches diverged.'
                        },
                        {
                            id: 'git-7-q2',
                            question: 'When should you NOT use git rebase?',
                            options: [
                                'On your local feature branch',
                                'Before creating a pull request',
                                'On public/shared branches that others are using',
                                'To clean up commit history'
                            ],
                            correctAnswer: 2,
                            explanation: 'Never rebase public/shared branches because it rewrites history and will cause conflicts for anyone who has already pulled those commits.'
                        },
                        {
                            id: 'git-7-q3',
                            question: 'What does the "squash" option do in interactive rebase?',
                            options: [
                                'Deletes the commit',
                                'Combines the commit with the previous one and keeps both messages',
                                'Renames the commit',
                                'Moves the commit to a different branch'
                            ],
                            correctAnswer: 1,
                            explanation: 'Squash combines a commit with the previous one, allowing you to edit the combined commit message. This is useful for combining related commits into a single, cohesive commit.'
                        },
                        {
                            id: 'git-7-q4',
                            question: 'What is git cherry-pick used for?',
                            options: [
                                'Deleting specific commits',
                                'Applying specific commits from one branch to another',
                                'Creating new branches',
                                'Merging all branches'
                            ],
                            correctAnswer: 1,
                            explanation: 'Cherry-pick allows you to apply specific commits from one branch to another without merging the entire branch. This is useful for hotfixes or porting specific features.'
                        },
                        {
                            id: 'git-7-q5',
                            question: 'How do you continue a rebase after resolving conflicts?',
                            options: [
                                'git rebase --skip',
                                'git commit',
                                'git rebase --continue',
                                'git push'
                            ],
                            correctAnswer: 2,
                            explanation: 'After resolving conflicts and staging the files with git add, you use git rebase --continue to proceed with the rebase operation.'
                        },
                        {
                            id: 'git-7-q6',
                            question: 'What does the "fixup" option do in interactive rebase?',
                            options: [
                                'Fixes bugs in the commit',
                                'Combines commit with previous one and discards this commit\'s message',
                                'Creates a backup of the commit',
                                'Marks the commit for review'
                            ],
                            correctAnswer: 1,
                            explanation: 'Fixup is like squash but automatically discards the commit message of the fixup commit, keeping only the previous commit\'s message. This is useful for small fixes that don\'t need their own message.'
                        },
                        {
                            id: 'git-7-q7',
                            question: 'What is the safest way to force push after a rebase?',
                            options: [
                                'git push --force',
                                'git push --force-with-lease',
                                'git push --hard',
                                'git push --rebase'
                            ],
                            correctAnswer: 1,
                            explanation: 'git push --force-with-lease is safer than --force because it checks if the remote branch has been updated by someone else since you last fetched. If it has, the push is rejected, preventing you from overwriting others\' work.'
                        },
                        {
                            id: 'git-7-q8',
                            question: 'How do you abort a rebase that\'s in progress?',
                            options: [
                                'git rebase --stop',
                                'git rebase --cancel',
                                'git rebase --abort',
                                'git reset --hard'
                            ],
                            correctAnswer: 2,
                            explanation: 'git rebase --abort cancels the rebase operation and returns your branch to the state it was in before the rebase started.'
                        },
                        {
                            id: 'git-7-q9',
                            question: 'What flag should you use with cherry-pick to record the original commit hash?',
                            options: [
                                '-r',
                                '-x',
                                '-m',
                                '-o'
                            ],
                            correctAnswer: 1,
                            explanation: 'The -x flag adds a line to the commit message like "(cherry picked from commit abc123)" which helps track where the commit originally came from.'
                        },
                        {
                            id: 'git-7-q10',
                            question: 'What is the purpose of git rebase --onto?',
                            options: [
                                'To rebase onto multiple branches at once',
                                'To change the base branch of your commits',
                                'To rebase only specific files',
                                'To rebase without creating new commits'
                            ],
                            correctAnswer: 1,
                            explanation: 'git rebase --onto allows you to change the base branch of your commits. For example, if your feature branched from old-main but you want it based on new-main instead, you can use --onto to rebase it.'
                        }
                    ]
}
    ]
};
