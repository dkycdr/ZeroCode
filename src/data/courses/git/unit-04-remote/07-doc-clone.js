import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Clone = {
    id: 'git-4-doc-clone',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Clone Anatomy: Mirrors & Tracking 🪞',
    duration: '20 min',
    content: `
# The Clone Anatomy: Mirrors & Tracking 🪞

When you run \`git clone\`, you aren't just downloading the project's source code. You are creating a **mirror** of the entire repository history on your local machine.

In this final Deep Dive of Unit 4, we look under the hood of cloning and tracking.

---

## 1. What happens during a Clone?

When you execute \`git clone <url>\`, Git performs several steps automatically:
1.  **Init**: Creates a new folder and a \`.git\` directory.
2.  **Remote Add**: Adds the URL as a remote named \`origin\`.
3.  **Fetch**: Downloads all commits, files, and branches from the source.
4.  **Checkout**: Creates a local branch (usually \`main\`) and sets it to the same commit as the remote's default branch.

---

## 2. Tracking Branches

A **Tracking Branch** is a local branch that has a direct relationship with a remote branch.

When you are on a tracking branch, Git provides helpful messages like:
*   *"Your branch is up to date with 'origin/main'."*
*   *"Your branch is ahead of 'origin/main' by 2 commits."*

### Why Track?
Tracking allows you to use short commands. Instead of \`git push origin main\`, you can just type **\`git push\`**. Git knows exactly where the data should go because of the tracking link.

---

## 3. Creating Tracking Relationships

### Scenario A: Automatic
When you clone, Git automatically sets up your local \`main\` to track \`origin/main\`.

### Scenario B: Manual (\`-u\`)
If you create a local branch and push it:
\`\`\`bash
git push -u origin feature-x
\`\`\`
The \`-u\` (upstream) flag sets the tracking relationship.

### Scenario C: Existing Branches
If you already have a branch and want to link it:
\`\`\`bash
git branch --set-upstream-to=origin/main main
\`\`\`

---

## 4. Auditing your Tracking

To see exactly which local branches are hooked up to which remote branches, use the "verbose-verbose" flag:

\`\`\`bash
git branch -vv
\`\`\`

**Example Output:**
\`\`\`text
* main      a1b2c3d [origin/main] Initial commit
  feature/x e5f6g7h [origin/feature/x: ahead 2] Update logic
\`\`\`
*   **[origin/main]**: Local and remote are in sync.
*   **[origin/feature/x: ahead 2]**: You have 2 commits locally that aren't on GitHub yet.

---

## 5. Cloning specific branches

By default, \`clone\` downloads everything but only checks out the main branch. If you only want a specific branch and its history (to save space or time):

\`\`\`bash
git clone --branch <name> --single-branch <url>
\`\`\`

> [!TIP]
> Use \`git remote show origin\` for a high-level summary of your clone's relationship with the remote!
`
};
