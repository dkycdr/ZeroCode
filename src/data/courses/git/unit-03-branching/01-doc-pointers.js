import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Pointers = {
    id: 'git-3-pointers',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Pointer Philosophy 📍',
    duration: '25 min read',
    content: `
# Deep Dive: The Pointer Philosophy 📍

In other version control systems (like SVN), creating a branch means copying thousands of files into a new directory. It is slow, heavy, and expensive. Git changed the game. In Git, a branch is virtually **weightless**.

---

## 1. What is a Branch, Really?
At its core, a Git branch is simply a **movable pointer** to one of your commits. 

If you look inside your \`.git\` folder right now:
\`\`\`bash
cat .git/refs/heads/main
\`\`\`
Output: \`9a2b3c4d... (a 40-character SHA-1 hash)\`

That's it. A branch is just a 41-byte text file (40 characters + newline) that stores the ID of a commit. When you make a new commit, Git simply updates that text file to the new SHA-1.

---

## 2. The HEAD: "You Are Here"
If a branch points to a commit, how does Git know which *branch* you are currently using? It uses a special pointer called **HEAD**.

*   **HEAD** points to the **current branch**.
*   The **Branch** points to the **latest commit**.

\`\`\`mermaid
%% width: 500px %%
graph LR
    subgraph Repository [The Object Database]
        c1[Commit A] --> c2[Commit B] --> c3[Commit C]
    end

    subgraph Pointers [The Reference Map]
        main["branch: main"] --> c3
        dev["branch: dev"] --> c2
        HEAD["HEAD"] --> main
    end
\`\`\`

---

## 3. Creating a Branch: The "Split"
When you run \`git branch testing\`, Git doesn't move you to the new branch. It just creates a new pointer at your current location.

\`\`\`bash
git branch testing
\`\`\`

Now you have two pointers (main and testing) pointing to the same commit. **HEAD** is still pointing to main.

---

## 4. Switching Branches: Moving the HEAD
The \`git switch\` (or \`checkout\`) command moves the **HEAD** pointer to a different branch.

\`\`\`bash
git switch testing
\`\`\`

### What happens under the hood?
1.  **Pointer Shift**: Git moves HEAD from \`main\` to \`testing\`.
2.  **Filesystem Sync**: Git looks at the commit \`testing\` is pointing to. It replaces the files in your Working Directory with the snapshots from that commit.

---

## 5. Machine Logic: The .git/HEAD file
You can actually see exactly where you are by reading the HEAD file:
\`\`\`bash
cat .git/HEAD
# Output: ref: refs/heads/main
\`\`\`
This "symbolic reference" is how Git keeps track of your current timeline.

---

## 6. Senior Insight: The "Detached HEAD" State
Sometimes you checkout a specific **commit SHA** rather than a **branch name**.
\`\`\`bash
git checkout 9a2b3c
\`\`\`
Git will warn you: "You are in 'detached HEAD' state."
*   **Meaning**: HEAD is pointing directly to a commit, not a branch.
*   **Danger**: If you make commits here, they aren't part of any branch. If you switch away, those commits become "lost" (orphaned) and will eventually be deleted by Git's garbage collector.

---

## 7. Performance Benchmarks
| Operation | Legacy (SVN) | Modern (Git) |
| :--- | :--- | :--- |
| **Create Branch** | Minutes (Copy Files) | 0.001s (Write string to file) |
| **Switch Branch** | Hard (Requires network) | Instant (Pointer swap) |
| **Storage** | Gigabytes (Redundant copies) | Minimal (Shared objects) |

You are now a master of the Git reference system.
`
};
