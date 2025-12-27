import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Sync = {
    id: 'git-4-doc-sync',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Sync Logic: Fetch, Pull & Push 🔄',
    duration: '25 min',
    content: `
# The Sync Logic: Fetch, Pull & Push 🔄

Collaborating in Git is essentially the act of synchronizing your local repository with a remote one. While it might seem simple, the underlying mechanics of how objects flow between machines are fascinating and crucial to master.

---

## 1. The Git Traffic Flow

Git moves data in two directions:
*   **Outbound**: Moving your local commits to the server.
*   **Inbound**: Bringing changes from the server into your local environment.

---

## 2. Inbound: Fetch vs. Pull

This is the most common point of confusion for new developers.

### \`git fetch\`: The Information Gatherer
\`git fetch\` downloads all the new data from the remote repository, but it **does not** modify your working directory. 

It updates your **Remote Tracking Branches** (like \`origin/main\`). It allows you to see what everyone else has done without affecting your current work.

### \`git pull\`: The Automation
\`git pull\` is actually a shortcut for two commands:
1.  \`git fetch\`
2.  \`git merge origin/<branch>\` (by default)

It downloads the data and immediately tries to merge it into your current branch.

> [!IMPORTANT]
> Because \`git pull\` performs a merge, it can result in **Merge Conflicts** just like a local merge.

---

## 3. Pull Strategies: Merge vs. Rebase

When you pull, you are integrating foreign history into yours. You have two choices:

### Strategy A: Default Merge
Creates a new "Merge Commit" that joins the two histories. It preserves the exact chronology but can lead to a "noisy" history.

### Strategy B: Rebase (\`--rebase\`)
Re-applies your local commits on top of the newly downloaded commits. This results in a **perfectly linear history**.

\`\`\`bash
git pull --rebase
\`\`\`

---

## 4. Outbound: \`git push\`

\`push\` is the opposite of \`fetch\`. It uploads your local commits to the remote.

%% width: 600px %%
\`\`\`mermaid
graph LR
    Local[Local Commits] -- "git push" --> Remote[GitHub Repository]
    Remote -- "git fetch" --> Tracking[Remote Tracking Branch]
    Tracking -- "git merge" --> Local
\`\`\`

### Safety First: \`--force-with-lease\`
Never use raw \`--force\` on a shared branch! It can delete your teammates' work. Use \`--force-with-lease\` instead—it only forces the push if no one else has added commits to the remote in the meantime.

---

## 5. Mental Model: Upstream Tracking

When you push with the \`-u\` flag (e.g., \`git push -u origin main\`), you are telling Git: "Please link my local \`main\` branch to \`origin/main\`."

Once this relationship is established, you can simply run \`git push\` or \`git pull\` without specifying the remote or branch names.

> [!TIP]
> Use \`git branch -vv\` to see which local branches are tracked by which remotes!
`
};
