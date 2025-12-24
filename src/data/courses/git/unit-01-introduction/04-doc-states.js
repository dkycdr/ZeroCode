import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3States = {
    id: 'git-1-states',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Three States 🚦',
    duration: '30 min read',
    content: `
# Deep Dive: The Three States 🚦

## 1. The Physical Areas
Most VCS tools deal with two places: "My Computer" and "The Server".
Git introduces a third, crucial intermediate area.
To master Git, you must be able to visualize where your code lives in these three buckets.

### A. The Working Directory (Sandbox)
This is your **actual filesystem**.
When you open VS Code, you are looking at the Working Directory.
*   **State**: "Modified" (files you changed) or "Untracked" (new files).
*   **Safety**: **NONE**. If you delete a file here that isn't committed, it's gone.

### B. The Staging Area (The Index)
This is the **Loading Dock**.
It is a waiting room for changes that are *about* to be committed.
*   **Technical Name**: The Index.
*   **State**: "Staged".
*   **Purpose**: Allows you to curate your commit. You might have changed 10 files, but you only want to group 3 of them into a "Navbar Update" commit.
*   **Safety**: Low. It survives a standard reset, but hasn't been written to the database history yet.

### C. The Repository (HEAD)
This is the **Database**.
It is the \`.git\` folder.
*   **State**: "Committed".
*   **Purpose**: Permanent snapshot of the project history.
*   **Safety**: **HIGH**. Once something is here, it is almost impossible to lose.

---

## 2. The Lifecycle Flow
Files move between these states using specific commands.

\`\`\`mermaid
%% width: 900px %%
stateDiagram-v2
    direction LR
    
    state "Working Directory" as WD
    state "Staging Area (Index)" as Stage
    state "Repository (.git)" as Repo
    
    [*] --> WD: Create File
    WD --> Stage: git add
    Stage --> Repo: git commit
    Repo --> Stage: git reset --soft
    Repo --> WD: git reset --mixed
    Stage --> WD: git restore --staged
    
    note right of WD: Your messy changes
    note right of Stage: The "Pre-Commit" checklist
    note right of Repo: Permanent History
\`\`\`

---

## 3. Why the Staging Area?
Critiquing the design: SVN didn't have a Staging Area. You just committed everything. Why does Git add this extra step?

**Scenario**:
You are working on a feature.
1.  You update \`Navbar.jsx\`.
2.  You fix a typo in \`Footer.jsx\`.
3.  You add a \`console.log\` in \`App.jsx\` for debugging.

If you just run "Commit All", you create a messy commit labeled "Update Navbar and fix footer and add debug log".
This is bad history.

**With Staging Area**:
1.  \`git add Footer.jsx\`. Commit: "Fix typo in Footer".
2.  \`git add Navbar.jsx\`. Commit: "Implement new Navbar".
3.  Discard changes to \`App.jsx\` (debug logs).

The Staging Area allows you to create **Atomic Commits**—small, focused units of work that are easy to revert or understand later.

---

## 4. The Fourth State: "Stash" (Bonus)
There is technically a fourth state called the **Stash**.
It's a clipboard where you can temporarily store dirty changes without committing them, so you can switch branches.
*   **Command**: \`git stash\`
*   **State**: A storage stack separate from the main repository timeline.

---

## 5. Machine Logic: The Index File
The "Staging Area" isn't a directory. It's actually a single binary file located at \`.git/index\`.
It contains a sorted list of:
*   File paths
*   Permissions
*   SHA-1 signatures of the blobs

When you run \`git add\`, Git calculates the SHA-1 of the file content, adds the blob to \`.git/objects\`, and updates the entry in \`.git/index\`.
It does **not** create a new commit object yet. This is why \`git add\` is fast.
`
};
