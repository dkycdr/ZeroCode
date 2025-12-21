import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5BranchingMerging = {
    id: 'git-unit-5',
    title: 'Branching & Merging - Working with Multiple Versions',
    description: 'Master Git branches: create, switch, merge branches, resolve conflicts, and collaborate effectively',
    items: [
        {
            id: 'git-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Understanding Branches - The Complete Guide',
            duration: '25 min read',
            content: `
# Understanding Branches - The Complete Guide

## What is a Branch?

A **branch** in Git is like a parallel universe for your code. It's a separate line of development where you can make changes without affecting the main codebase.

### Real-World Analogy: Writing a Book

Imagine you're writing a book:

**Without Branches (The Old Way):**
- You have ONE manuscript
- To try a different ending, you must:
  - Save a copy manually
  - Make changes
  - If you don't like it, restore the old version
  - Very messy and error-prone!

**With Branches (The Git Way):**
- You have ONE main manuscript (main branch)
- Want to try a different ending?
  - Create a "different-ending" branch
  - Write the new ending there
  - Main manuscript stays untouched
  - Like it? Merge it back
  - Don't like it? Delete the branch
  - Clean and organized!

## Why Use Branches?

### 1. Experiment Safely

You can try new features without breaking working code.

**Example:**
\`\`\`
main branch:     Working website ✅
feature branch:  Testing new design 🎨
                 (if it breaks, main is still safe!)
\`\`\`

### 2. Work on Multiple Features

Different team members can work on different features simultaneously.

**Example:**
\`\`\`
main:            Stable production code
feature-login:   John working on login
feature-payment: Sarah working on payments
bugfix-header:   Mike fixing header bug
\`\`\`

### 3. Organize Your Work

Keep different types of work separate and organized.

**Example:**
\`\`\`
main:       Production-ready code
develop:    Integration branch
feature/*:  New features
bugfix/*:   Bug fixes
hotfix/*:   Urgent production fixes
\`\`\`

## How Branches Work

### The Branch Timeline

Think of branches as parallel timelines:

\`\`\`
Time →

main:     A --- B --- C --- D --- E
                \\
feature:         F --- G --- H
\`\`\`

**Explanation:**
- **A, B, C**: Commits on main branch
- **C**: You create a new branch here
- **F, G, H**: Commits on feature branch
- **D, E**: Meanwhile, main branch continues
- **Both branches exist independently!**

### What Happens When You Create a Branch?

**Step 1: You're on main branch**
\`\`\`
main: A --- B --- C  ← You are here
\`\`\`

**Step 2: Create new branch "feature"**
\`\`\`
main:    A --- B --- C  ← main stays here
                      \\
feature:               C  ← feature starts here (same as main)
\`\`\`

**Step 3: Make commits on feature**
\`\`\`
main:    A --- B --- C
                      \\
feature:               C --- D --- E  ← You are here now
\`\`\`

**Key Point:** Creating a branch doesn't copy files. It's just a pointer to a commit!

## Branch Commands

### 1. See All Branches

\`\`\`bash
git branch
\`\`\`

**Output:**
\`\`\`
* main
  feature-login
  bugfix-header
\`\`\`

**Explanation:**
- \`*\` shows which branch you're currently on
- Other branches are listed below

### 2. Create a New Branch

\`\`\`bash
git branch feature-login
\`\`\`

**What happens:**
- Creates a new branch called "feature-login"
- Branch points to your current commit
- You're still on the old branch (doesn't switch automatically)

**Analogy:** You created a new road, but you're still standing on the old road.

### 3. Switch to a Branch

\`\`\`bash
git checkout feature-login
\`\`\`

**What happens:**
- Switches to the "feature-login" branch
- Your files change to match that branch
- New commits will go on this branch

**Analogy:** You walked from the old road to the new road.

### 4. Create and Switch in One Command

\`\`\`bash
git checkout -b feature-login
\`\`\`

**What happens:**
- Creates "feature-login" branch
- Switches to it immediately
- Shortcut for: \`git branch\` + \`git checkout\`

**Analogy:** Build a new road and immediately walk onto it.

### 5. Delete a Branch

\`\`\`bash
git branch -d feature-login
\`\`\`

**What happens:**
- Deletes the "feature-login" branch
- Only works if branch is merged
- Use \`-D\` to force delete (even if not merged)

**Warning:** This deletes the branch pointer, not the commits (commits stay in history if merged).

## The HEAD Pointer

**HEAD** is a special pointer that shows where you are right now.

### Understanding HEAD

\`\`\`
main:    A --- B --- C
                      \\
feature:               D --- E  ← HEAD
\`\`\`

**Explanation:**
- HEAD points to branch "feature"
- You're on commit E
- New commits will come after E

### When You Switch Branches

**Before:**
\`\`\`
main:    A --- B --- C
                      \\
feature:               D --- E  ← HEAD
\`\`\`

**After \`git checkout main\`:**
\`\`\`
main:    A --- B --- C  ← HEAD
                      \\
feature:               D --- E
\`\`\`

**What happened:**
- HEAD moved to main branch
- Your files changed to match commit C
- Commits D and E still exist on feature branch

## Branch Naming Conventions

### Good Branch Names

**Feature branches:**
\`\`\`
feature/user-login
feature/payment-integration
feature/dark-mode
\`\`\`

**Bug fix branches:**
\`\`\`
bugfix/header-alignment
bugfix/login-error
fix/mobile-menu
\`\`\`

**Hotfix branches (urgent production fixes):**
\`\`\`
hotfix/security-patch
hotfix/payment-bug
\`\`\`

### Bad Branch Names

\`\`\`
test          ❌ Too vague
new-stuff     ❌ Not descriptive
johns-branch  ❌ Not about the work
final         ❌ Meaningless
asdf          ❌ Random characters
\`\`\`

### Naming Rules

✅ **DO:**
- Use lowercase
- Use hyphens (not spaces or underscores)
- Be descriptive
- Include type (feature/, bugfix/, etc.)

❌ **DON'T:**
- Use spaces
- Use special characters
- Be vague
- Use personal names

## Common Branch Workflows

### Workflow 1: Feature Development

**Step 1: Start from main**
\`\`\`bash
git checkout main
git pull  # Get latest changes
\`\`\`

**Step 2: Create feature branch**
\`\`\`bash
git checkout -b feature/user-profile
\`\`\`

**Step 3: Work on feature**
\`\`\`bash
# Make changes to files
git add .
git commit -m "Add user profile page"

# More changes
git add .
git commit -m "Add profile edit functionality"
\`\`\`

**Step 4: Push to GitHub**
\`\`\`bash
git push -u origin feature/user-profile
\`\`\`

**Step 5: Merge when done**
\`\`\`bash
git checkout main
git merge feature/user-profile
\`\`\`

### Workflow 2: Bug Fix

**Step 1: Create bugfix branch**
\`\`\`bash
git checkout -b bugfix/login-error
\`\`\`

**Step 2: Fix the bug**
\`\`\`bash
# Fix the code
git add .
git commit -m "Fix login validation error"
\`\`\`

**Step 3: Test the fix**
\`\`\`bash
# Run tests
# Verify fix works
\`\`\`

**Step 4: Merge back**
\`\`\`bash
git checkout main
git merge bugfix/login-error
\`\`\`

**Step 5: Delete branch**
\`\`\`bash
git branch -d bugfix/login-error
\`\`\`

## Visualizing Branches

### Simple Branch Structure

\`\`\`
main:  A --- B --- C --- F --- G
                \\       /
feature:         D --- E
\`\`\`

**Story:**
1. Started with commits A, B, C on main
2. Created feature branch at C
3. Made commits D, E on feature
4. Meanwhile, someone made commit F on main
5. Merged feature into main (commit G)

### Multiple Branches

\`\`\`
main:     A --- B --- C ----------- H
                \\                  /
feature1:        D --- E --- F ---/
                      \\
feature2:              G
\`\`\`

**Story:**
1. Created feature1 from B
2. Created feature2 from E (branched from feature1!)
3. Merged feature1 into main at H
4. feature2 still exists independently

## Branch Best Practices

### ✅ DO:

1. **Create branches for every feature**
\`\`\`bash
git checkout -b feature/new-feature
\`\`\`

2. **Keep branches short-lived**
- Merge within days, not weeks
- Reduces merge conflicts

3. **Pull main regularly**
\`\`\`bash
git checkout main
git pull
git checkout feature/my-feature
git merge main  # Keep feature up-to-date
\`\`\`

4. **Delete merged branches**
\`\`\`bash
git branch -d feature/completed-feature
\`\`\`

5. **Use descriptive names**
\`\`\`bash
feature/user-authentication  ✅
test                         ❌
\`\`\`

### ❌ DON'T:

1. **Don't work directly on main**
\`\`\`bash
# Bad
git checkout main
# make changes directly

# Good
git checkout -b feature/my-work
# make changes on branch
\`\`\`

2. **Don't create branches from branches (usually)**
\`\`\`bash
# Usually avoid
git checkout feature1
git checkout -b feature2  # Branching from feature1

# Better
git checkout main
git checkout -b feature2  # Branch from main
\`\`\`

3. **Don't keep branches forever**
- Merge or delete old branches
- Reduces confusion

4. **Don't commit directly to main in team projects**
- Use Pull Requests instead
- Allows code review

## Understanding Branch Protection

In team projects, the main branch is often **protected**:

**What this means:**
- Can't push directly to main
- Must create Pull Request
- Code must be reviewed
- Tests must pass
- Then can merge

**Why it's important:**
- Prevents accidental breaks
- Ensures code quality
- Requires review
- Maintains stability

## Key Takeaways

- ✅ Branch = Separate line of development
- ✅ Create branches for features and fixes
- ✅ Branches are cheap and fast (just pointers)
- ✅ HEAD shows where you are
- ✅ Switch branches with \`git checkout\`
- ✅ Create and switch with \`git checkout -b\`
- ✅ Delete merged branches with \`git branch -d\`
- ✅ Use descriptive branch names
- ✅ Keep branches short-lived
- ✅ Don't work directly on main

## What's Next?

In the next lesson, you'll learn about **merging** - how to combine branches back together, and how to handle conflicts when the same code is changed in different ways.

Now you understand branches! 🌿
            `
            tasks: [
                {
                    id: 'task1',
                    text: 'Create a new branch named "feature"',
                    regex: '"branches":\\[.*"feature".*\\]'
                },
                {
                    id: 'task2',
                    text: 'Switch to the "feature" branch',
                    regex: '"branch":"feature"'
                }
            ]
        },
        {
            id: 'git-5-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Merging Branches - Combining Your Work',
            duration: '35 min',
            content: `
# Merging Branches - Combining Your Work

## What is Merging?

**Merging** is the process of combining changes from one branch into another. It's like combining two versions of a document into one final version.

### Real-World Analogy: Group Project

Imagine you and your friend are writing a report together:

**Without Git:**
- You write pages 1-5
- Friend writes pages 6-10
- You manually combine them
- If you both edited page 3, you must manually decide what to keep
- Very tedious!

**With Git Merge:**
- You work on your branch
- Friend works on their branch
- Git automatically combines the changes
- If you both changed the same line, Git asks you to decide
- Much easier!

## Types of Merges

### 1. Fast-Forward Merge (Simple)

This happens when there are no new commits on the target branch.

**Before merge:**
\`\`\`
main:    A --- B --- C
                      \\
feature:               D --- E  ← You are here
\`\`\`

**After \`git merge feature\` (from main):**
\`\`\`
main:    A --- B --- C --- D --- E  ← main moved forward
\`\`\`

**What happened:**
- Main branch simply "fast-forwarded" to include D and E
- No merge commit needed
- History stays linear (straight line)
- This is the simplest type of merge

**Why it's called "fast-forward":**
- Like fast-forwarding a video
- Main branch just jumps ahead to catch up
- No actual "merging" of different changes

### 2. Three-Way Merge (Complex)

This happens when both branches have new commits.

**Before merge:**
\`\`\`
main:    A --- B --- C --- F  ← main has new commit F
                      \\
feature:               D --- E  ← feature has commits D, E
\`\`\`

**After \`git merge feature\` (from main):**
\`\`\`
main:    A --- B --- C --- F --- M  ← M is merge commit
                      \\           /
feature:               D --- E ---
\`\`\`

**What happened:**
- Git creates a new "merge commit" (M)
- M has TWO parents: F and E
- M combines changes from both branches
- History shows the branch structure

**Why it's called "three-way":**
- Git looks at THREE commits:
  1. Common ancestor (C)
  2. Latest on main (F)
  3. Latest on feature (E)
- Compares all three to merge changes

## How to Merge

### Step-by-Step Process

**Step 1: Switch to target branch**

The branch you want to merge INTO.

\`\`\`bash
git checkout main
\`\`\`

**Think:** "I want to bring changes INTO main"

**Step 2: Merge the source branch**

The branch you want to merge FROM.

\`\`\`bash
git merge feature/user-login
\`\`\`

**Think:** "I want to bring feature/user-login INTO main"

**Step 3: Git does the merge**

**If successful:**
\`\`\`
Updating abc123..def456
Fast-forward
 login.html | 10 ++++++++++
 1 file changed, 10 insertions(+)
\`\`\`

**If there are conflicts:**
\`\`\`
Auto-merging login.html
CONFLICT (content): Merge conflict in login.html
Automatic merge failed; fix conflicts and then commit the result.
\`\`\`

## Understanding Merge Conflicts

### What is a Merge Conflict?

A conflict happens when Git can't automatically combine changes because the same lines were modified differently in both branches.

**Example Scenario:**

**On main branch (file.txt):**
\`\`\`
Hello World
This is line 2
Goodbye
\`\`\`

**On feature branch (file.txt):**
\`\`\`
Hello World
This is the second line
Goodbye
\`\`\`

**Both changed line 2 differently!**

Git doesn't know which version to keep, so it asks you to decide.

### What Conflict Looks Like

When you try to merge, Git marks the conflict in the file:

\`\`\`
Hello World
<<<<<<< HEAD
This is line 2
=======
This is the second line
>>>>>>> feature
Goodbye
\`\`\`

**Breaking it down:**

\`\`\`
<<<<<<< HEAD
This is line 2        ← Version on current branch (main)
=======               ← Separator
This is the second line  ← Version on merging branch (feature)
>>>>>>> feature
\`\`\`

**Markers explained:**
- \`<<<<<<< HEAD\`: Start of your current branch's version
- \`=======\`: Separator between versions
- \`>>>>>>> feature\`: End of the merging branch's version

### How to Resolve Conflicts

**Step 1: Open the conflicted file**

Look for the conflict markers:
\`\`\`
<<<<<<< HEAD
your version
=======
their version
>>>>>>> branch-name
\`\`\`

**Step 2: Decide what to keep**

You have three options:

**Option 1: Keep your version**
\`\`\`
This is line 2
\`\`\`

**Option 2: Keep their version**
\`\`\`
This is the second line
\`\`\`

**Option 3: Keep both (or combine)**
\`\`\`
This is line 2
This is the second line
\`\`\`

**Option 4: Write something new**
\`\`\`
This is the updated second line
\`\`\`

**Step 3: Remove conflict markers**

Delete these lines:
\`\`\`
<<<<<<< HEAD
=======
>>>>>>> feature
\`\`\`

**Step 4: Save the file**

Your file should now look clean:
\`\`\`
Hello World
This is the updated second line
Goodbye
\`\`\`

**Step 5: Stage the resolved file**
\`\`\`bash
git add file.txt
\`\`\`

**Step 6: Complete the merge**
\`\`\`bash
git commit -m "Merge feature branch, resolved conflicts"
\`\`\`

## Complete Merge Example

### Scenario: Merging a Feature

**Step 1: Check current branch**
\`\`\`bash
git branch
# * main
#   feature/user-profile
\`\`\`

**Step 2: Make sure main is up-to-date**
\`\`\`bash
git pull origin main
\`\`\`

**Step 3: Merge feature branch**
\`\`\`bash
git merge feature/user-profile
\`\`\`

**Step 4a: If no conflicts (success!)**
\`\`\`
Updating abc123..def456
Fast-forward
 profile.html | 50 ++++++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 50 insertions(+)
\`\`\`

Done! ✅

**Step 4b: If conflicts occur**
\`\`\`
Auto-merging profile.html
CONFLICT (content): Merge conflict in profile.html
Automatic merge failed; fix conflicts and then commit the result.
\`\`\`

**Step 5: Check which files have conflicts**
\`\`\`bash
git status
# Unmerged paths:
#   both modified:   profile.html
\`\`\`

**Step 6: Open profile.html and resolve**
\`\`\`html
<div class="profile">
<<<<<<< HEAD
    <h1>User Profile</h1>
=======
    <h1>My Profile</h1>
>>>>>>> feature/user-profile
</div>
\`\`\`

**Step 7: Choose what to keep**
\`\`\`html
<div class="profile">
    <h1>My Profile</h1>
</div>
\`\`\`

**Step 8: Stage and commit**
\`\`\`bash
git add profile.html
git commit -m "Merge feature/user-profile, use 'My Profile' heading"
\`\`\`

Done! ✅

## Merge Strategies

### Strategy 1: Merge Commit (Default)

Creates a merge commit that shows the branch history.

\`\`\`bash
git merge feature
\`\`\`

**Result:**
\`\`\`
main:  A --- B --- C --- M
                \\       /
feature:         D --- E
\`\`\`

**Pros:**
- ✅ Preserves branch history
- ✅ Shows when features were merged
- ✅ Easy to understand project history

**Cons:**
- ❌ Creates extra merge commits
- ❌ History can look messy with many branches

### Strategy 2: Squash Merge

Combines all commits from feature into ONE commit on main.

\`\`\`bash
git merge --squash feature
git commit -m "Add user profile feature"
\`\`\`

**Result:**
\`\`\`
main:  A --- B --- C --- D'
\`\`\`

Where D' contains all changes from D and E combined.

**Pros:**
- ✅ Clean, linear history
- ✅ One commit per feature
- ✅ Easy to revert entire feature

**Cons:**
- ❌ Loses individual commit history
- ❌ Can't see development process

### Strategy 3: Rebase (Advanced)

Replays commits from feature on top of main.

\`\`\`bash
git checkout feature
git rebase main
git checkout main
git merge feature  # Fast-forward merge
\`\`\`

**Result:**
\`\`\`
main:  A --- B --- C --- D' --- E'
\`\`\`

**Pros:**
- ✅ Linear history (no merge commits)
- ✅ Clean and easy to follow
- ✅ Preserves individual commits

**Cons:**
- ❌ Rewrites history (dangerous if pushed)
- ❌ More complex to understand
- ❌ Can cause issues in team projects

## Preventing Merge Conflicts

### Best Practice 1: Pull Regularly

Keep your branch up-to-date with main:

\`\`\`bash
git checkout main
git pull
git checkout feature/my-feature
git merge main
\`\`\`

**Why:** Catches conflicts early when they're easier to fix.

### Best Practice 2: Make Small, Focused Commits

\`\`\`bash
# Good
git commit -m "Add login form HTML"
git commit -m "Add login form CSS"
git commit -m "Add login form validation"

# Bad
git commit -m "Add entire login feature"  # Too big!
\`\`\`

**Why:** Smaller commits = smaller conflicts.

### Best Practice 3: Communicate with Team

Before working on a file, check if someone else is working on it.

**Why:** Prevents two people from changing the same code.

### Best Practice 4: Merge Frequently

Don't let branches live for weeks.

\`\`\`bash
# Good: Merge after 1-3 days
# Bad: Merge after 2 weeks
\`\`\`

**Why:** Longer branches = more conflicts.

### Best Practice 5: Use Feature Flags

Instead of long-lived branches, use feature flags:

\`\`\`javascript
if (featureEnabled('newDesign')) {
    // New code
} else {
    // Old code
}
\`\`\`

**Why:** Can merge incomplete features without breaking production.

## Common Merge Scenarios

### Scenario 1: Merge Feature into Main

\`\`\`bash
git checkout main
git pull
git merge feature/user-login
git push
\`\`\`

### Scenario 2: Update Feature with Latest Main

\`\`\`bash
git checkout feature/my-feature
git merge main
# Resolve any conflicts
git push
\`\`\`

### Scenario 3: Abort a Merge

If you want to cancel a merge:

\`\`\`bash
git merge --abort
\`\`\`

**When to use:** When conflicts are too complex and you need to rethink your approach.

### Scenario 4: Merge Multiple Branches

\`\`\`bash
git checkout main
git merge feature1
git merge feature2
git merge feature3
\`\`\`

**Warning:** Merge one at a time and test between merges!

## Merge Checklist

Before merging:
- ☐ All tests pass
- ☐ Code is reviewed
- ☐ Branch is up-to-date with main
- ☐ No uncommitted changes
- ☐ You're on the correct branch

After merging:
- ☐ Test the merged code
- ☐ Push to remote
- ☐ Delete the feature branch
- ☐ Update team members

## Your Mission

Practice branching and merging:
1. Create a new branch
2. Make changes and commit
3. Switch back to main
4. Make different changes and commit
5. Merge the feature branch
6. Resolve any conflicts

Now you can merge like a pro! 🔀
            `,
            tasks: [
                { id: 1, description: 'In terminal, type: git branch feature/test to create a new branch', completed: false, regex: /git\s+branch\s+\w+/ },
                { id: 2, description: 'In terminal, type: git checkout feature/test to switch to the branch', completed: false, regex: /git\s+checkout\s+\w+/ },
                { id: 3, description: 'Make changes to a file and commit: git add . && git commit -m "message"', completed: false, regex: /git\s+commit/ },
                { id: 4, description: 'In terminal, type: git checkout main to switch back to main', completed: false, regex: /git\s+checkout\s+main/ },
                { id: 5, description: 'In terminal, type: git merge feature/test to merge the branch', completed: false, regex: /git\s+merge/ },
                { id: 6, description: 'In terminal, type: git branch -d feature/test to delete the merged branch', completed: false, regex: /git\s+branch\s+-d/ }
            ],
            files: [
                {
                    name: 'index.html', language: 'html', content: `<!--
  YOUR TASK: Practice Branching and Merging
  
  STEPS:
    1. Create a new branch: git branch feature/add-content
    2. Switch to it: git checkout feature/add-content
    3. Add some content to this HTML file
    4. Commit your changes: git add . && git commit -m "Add content"
    5. Switch back to main: git checkout main
    6. Merge the branch: git merge feature/add-content
    7. Delete the branch: git branch -d feature/add-content
  
  TIPS:
    - Use git status to check which branch you're on
    - Use git branch to see all branches
    - Use git log --oneline --graph to see branch history
    - Practice creating conflicts by editing the same line on different branches
-->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Git Branching Practice</title>
</head>
<body>
    <h1>Git Branching & Merging</h1>
    
    <!-- Add your content here on the feature branch -->
    
</body>
</html>` },
                {
                    name: 'terminal-commands.txt', language: 'text', content: `GIT BRANCHING & MERGING COMMANDS

=== CREATING AND SWITCHING BRANCHES ===

1. Create a new branch:
   > git branch feature/add-content

2. See all branches:
   > git branch
   
3. Switch to the branch:
   > git checkout feature/add-content
   
4. Create and switch in one command:
   > git checkout -b feature/add-content

=== MAKING CHANGES ===

5. Make changes to files (edit index.html)

6. Check status:
   > git status
   
7. Stage changes:
   > git add .
   
8. Commit changes:
   > git commit -m "Add content to page"

=== MERGING ===

9. Switch back to main:
   > git checkout main
   
10. Merge the feature branch:
    > git merge feature/add-content
    
11. If conflicts occur:
    - Open the conflicted file
    - Look for <<<<<<< HEAD markers
    - Choose which version to keep
    - Remove the conflict markers
    - Save the file
    - Stage: git add filename
    - Commit: git commit -m "Resolve merge conflict"

=== CLEANUP ===

12. Delete the merged branch:
    > git branch -d feature/add-content
    
13. Force delete (if not merged):
    > git branch -D feature/add-content

=== VIEWING HISTORY ===

14. See commit history:
    > git log
    
15. See branch graph:
    > git log --oneline --graph --all
    
16. See what changed:
    > git diff

=== PRACTICE EXERCISE ===

Try this to create a conflict:

1. Create branch: git checkout -b feature1
2. Edit line 10 of index.html
3. Commit: git add . && git commit -m "Change line 10"
4. Switch to main: git checkout main
5. Edit the SAME line 10 differently
6. Commit: git add . && git commit -m "Different change to line 10"
7. Try to merge: git merge feature1
8. You'll get a conflict! Practice resolving it.

=== HELPFUL COMMANDS ===

- See current branch: git branch --show-current
- See last commit: git log -1
- Undo last commit (keep changes): git reset --soft HEAD~1
- Abort merge: git merge --abort
- See merge conflicts: git diff --name-only --diff-filter=U
` },
                {
                    name: 'README.md', language: 'markdown', content: `# Git Branching & Merging Practice

## What You'll Learn

- Creating branches
- Switching between branches
- Making commits on branches
- Merging branches
- Resolving merge conflicts
- Deleting branches

## Commands to Practice

\`\`\`bash
# Create branch
git branch feature/my-feature

# Switch to branch
git checkout feature/my-feature

# Create and switch
git checkout -b feature/my-feature

# Merge branch
git checkout main
git merge feature/my-feature

# Delete branch
git branch -d feature/my-feature
\`\`\`

## Tips

1. Always check which branch you're on: \`git branch\`
2. Commit often with clear messages
3. Pull main before merging
4. Test after merging
5. Delete branches after merging

## Common Issues

**Issue:** Can't switch branches
**Solution:** Commit or stash your changes first

**Issue:** Merge conflict
**Solution:** Open file, resolve conflict, stage, commit

**Issue:** Accidentally committed to main
**Solution:** Create branch from current commit, reset main

Happy branching! 🌿
` }
            ]
        },
        {
            id: 'git-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Branching & Merging Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is a branch in Git?',
                    options: [
                        'A copy of your entire project',
                        'A pointer to a specific commit',
                        'A backup of your files',
                        'A folder in your project'
                    ],
                    correctIndex: 1,
                    explanation: 'A branch is just a lightweight pointer to a commit. It\'s not a copy of files, making branches very fast and cheap to create.'
                },
                {
                    id: 'q2',
                    question: 'What does "git checkout -b feature" do?',
                    options: [
                        'Deletes the feature branch',
                        'Creates a new branch called feature',
                        'Creates and switches to a new branch called feature',
                        'Merges the feature branch'
                    ],
                    correctIndex: 2,
                    explanation: 'The -b flag creates a new branch and immediately switches to it. It\'s a shortcut for "git branch feature" followed by "git checkout feature".'
                },
                {
                    id: 'q3',
                    question: 'When does a merge conflict occur?',
                    options: [
                        'When you create a new branch',
                        'When the same lines are changed differently in both branches',
                        'When you delete a branch',
                        'When you push to GitHub'
                    ],
                    correctIndex: 1,
                    explanation: 'A merge conflict occurs when Git can\'t automatically combine changes because the same lines were modified differently in both branches.'
                },
                {
                    id: 'q4',
                    question: 'What do the <<<<<<< HEAD markers mean in a conflict?',
                    options: [
                        'The file is corrupted',
                        'Git is showing you both versions of the conflicting code',
                        'The merge was successful',
                        'You need to delete the file'
                    ],
                    correctIndex: 1,
                    explanation: 'The conflict markers show both versions: your current branch (HEAD) above ======= and the merging branch below. You need to choose which to keep and remove the markers.'
                },
                {
                    id: 'q5',
                    question: 'What is a fast-forward merge?',
                    options: [
                        'A merge that happens very quickly',
                        'A merge where the target branch simply moves forward to include new commits',
                        'A merge that skips conflicts',
                        'A merge that deletes the branch automatically'
                    ],
                    correctIndex: 1,
                    explanation: 'A fast-forward merge happens when there are no new commits on the target branch. The branch pointer simply "fast-forwards" to include the new commits, keeping history linear.'
                }
            ]
        }
    ]
};
