import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4Anatomy = {
    id: 'git-1-commit-anatomy',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Inside a Commit 💎',
    duration: '35 min read',
    content: `
# Deep Dive: Inside a Commit 💎

## 1. The Object Model
Git is a content-addressable filesystem. It is essentially a key-value store.
There are **three main types of objects** you must understand to be "Elite".

### A. The Blob (Binary Large Object)
When you \`git add\` a file, Git compresses its content and calculates a SHA-1 hash.
It stores this compressed content in the \`.git/objects\` folder.
*   **Stores**: File Content.
*   **Does NOT Store**: Filename, Permissions, Creation Date.
*   **Fact**: If two files have the same content (even with different names), they point to the **same Blob**.

### B. The Tree
A Tree object represents a **Directory**.
It is a simple list that maps names to blobs or other trees.
*   **Stores**: Filenames, Directory Structure, Permissions.
*   **Pointers**: Points to Blobs (files) or other Trees (subdirectories).

### C. The Commit
A Commit object is a wrapper that binds a Tree to a point in time.
*   **Stores**: 
    1.  Pointer to the **Root Tree** (Snapshot of the project).
    2.  Author & Committer info (Name, Email, Time).
    3.  Commit Message.
    4.  **Pointer to Parent Commit(s)** (The previous state).

---

## 2. Visualizing the Graph
This is what actually happens when you commit.

\`\`\`mermaid
%% width: 550px %%
graph TD
    subgraph CommitObject ["Commit (SHA: 9a2b3c)"]
        msg["Msg: 'Initial Commit'"]
        author["Author: Neo"]
        treePtr["Tree: a1b2c3"]
    end

    subgraph TreeObject ["Tree (SHA: a1b2c3)"]
        root["/ (Root)"]
        blob1["Blob: index.html"]
        blob2["Blob: style.css"]
        treeSub["Tree: src/"]
    end
    
    subgraph BlobStore [".git/objects"]
        data1["Content of index.html"]
        data2["Content of style.css"]
    end

    CommitObject --> treePtr --> root
    root --> blob1 --> data1
    root --> blob2 --> data2
    root --> treeSub
\`\`\`

## 3. Why is it called a "Directed Acyclic Graph" (DAG)?
*   **Directed**: Commits point to parents (Child -> Parent). You can traverse backwards to the beginning.
*   **Acyclic**: There are no loops. You can't be your own grandfather.
*   **Graph**: Nodes (Commits) connected by edges (Parent Pointers).

When you run \`git log\`, Git simply grabs the current commit (HEAD), looks at its Parent SHA, jumps to that object, looks at *its* parent, and so on, until it hits the initial commit (which has no parent).

## 4. Machine Logic: The "Recalculation"
This structure enforces integrity.
1.  If you change a byte in \`index.html\`, its Blob SHA changes.
2.  The Tree pointing to it must change its list to point to the new Blob SHA, so the Tree SHA changes.
3.  The Commit pointing to the Tree must point to the new Tree SHA, so the Commit SHA changes.

**Domino Effect**: You cannot secretly change a file deep in history without changing the ID of every single commit that came after it. This makes Git history immutable and tamper-proof.
`
};
