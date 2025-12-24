import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Undo = {
    id: 'git-2-undo',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The "Control-Z" of Git (restore/reset) ↩️',
    duration: '35 min read',
    content: `
# Deep Dive: The "Control-Z" of Git ↩️

In development, failure is frequent. You write code that breaks everything, or you accidentally stage a file you didn't mean to. Git provides powerful mechanisms to "un-do" your mistakes, but they operate differently depending on where the mistake lives.

---

## 1. The Modern Way vs. The Old Way
Historically, the \`git reset\` command was the "Swiss Army Knife" of Git—it did everything, which made it confusing and dangerous. In Git 2.23+, two new commands were introduced to make undoing more intuitive:
1.  **\`git restore\`**: Specifically for undoing changes in the Working Directory and Staging Area.
2.  **\`git switch\`**: Specifically for moving between branches (separating this logic from \`checkout\`).

---

## 2. Undoing the Working Directory
You just edited \`styles.css\`, saved it, and the website crashed. You want to revert the file to exactly how it looked at the last commit.

**The Command:**
\`\`\`bash
git restore styles.css
\`\`\`
*   **What it does**: Discards your unsaved changes and pulls the file from the HEAD (last commit).
*   **Danger Level**: **HIGH**. This command is **destructive**. Your changes are not saved in any database—they are deleted from your hard drive instantly.

---

## 3. Undoing the Staging Area (Unstaging)
You ran \`git add .\` but realized you accidentally staged a \`config/secret.json\` file that you shouldn't have. You want to keep the file on your disk, but move it out of the "Loading Dock".

**The Command:**
\`\`\`bash
git restore --staged config/secret.json
\`\`\`
*   **What it does**: Moves the file from the Staging Area back to the Working Directory.
*   **Safety**: **GREEN**. No code is deleted. The file still has your changes, but it's no longer ready to be committed.

---

## 4. The Classic "Reset" (The Hammer)
While \`restore\` is great for single files, \`git reset\` is often used for wider operations.

### Mixed Reset (The Default)
\`\`\`bash
git reset HEAD
\`\`\`
Unstages **everything** in the current repository, but keeps all your work in the Working Directory. It is the "Reset the Loading Dock" button.

### Hard Reset (The Nuclear Option)
\`\`\`bash
git reset --hard HEAD
\`\`\`
*   **Effect**: Wipes out **ALL** uncommitted changes in your Working Directory AND Staging Area.
*   **Mental Model**: "I hate everything I've done since the last commit. Set the project back to exactly how it was."
*   **Danger**: Permanent data loss for uncommitted work.

\`\`\`mermaid
%% width: 800px %%
stateDiagram-v2
    direction TB
    
    state "Working Directory" as WD
    state "Staging Area" as SA
    state "HEAD (Last Commit)" as Repo

    WD --> SA: git add
    SA --> Repo: git commit
    
    Repo --> SA: git restore --staged (Unstage)
    SA --> WD: git restore (Discard Changes)
    Repo --> WD: git reset --hard HEAD (Delete Everything)
\`\`\`

---

## 5. Machine Logic: The Reflog (The Safety Net)
Did you just run a \`git reset --hard\` and realize you actually needed that code?
Because uncommitted files aren't in Git's database, they are usually gone. **However**, if you committed them at any point, Git has a "black box flight recorder" called the **Reflog**.

\`\`\`bash
git reflog
\`\`\`
This shows every single move of the HEAD pointer. You can find the SHA of the commit you "deleted" and use \`git reset --hard <SHA>\` to bring it back from the dead.

---

## 6. Senior Tip: Atomic Restores
Don't just \`restore\` the whole file. You can restore specific **patches** or sections of a file if you only want to undo part of your work:
\`\`\`bash
git restore -p filename.js
\`\`\`
Git will show you chunks of changes and ask: "Discard this chunk? [y,n,q,a,d,j,J,g,/,e,?]".

You are now equipped with the ultimate "Oops" buttons.
`
};
