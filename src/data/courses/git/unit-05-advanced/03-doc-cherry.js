import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Cherry = {
    id: 'git-5-doc-cherry',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Sniper: Cherry-Pick 🎯',
    duration: '20 min',
    content: `
# The Sniper: Cherry-Pick 🎯

Sometimes, you don't want to merge an entire branch. You just want **one specific commit** from it.

Maybe a colleague fixed a critical bug in their experimental feature branch. You need that bug fix in \`main\` immediately, but you definitely don't want their experimental code yet.

Enter **\`git cherry-pick\`**.

---

## 1. How it Works

Cherry-picking takes the changes introduced in a specific commit and applies them as a **new commit** on your current branch.

It copies the *diff*, but generates a new Hash because the parent is different.

\`\`\`mermaid
%% width: 600px %%
graph TD
    subgraph Feature_Branch
        C1[Commit X] --> C2[Commit Y Bugfix] --> C3[Commit Z]
    end
    subgraph Main_Branch
        M1[Main 1] --> M2[Main 2] --> CY[Commit Y']
    end
    C2 -- "git cherry-pick" --> CY
    style C2 fill:#00fff2,stroke:#000
    style CY fill:#00fff2,stroke:#000
\`\`\`

---

## 2. The Command

First, find the **Hash** of the commit you want (using \`git log\`).

\`\`\`bash
git cherry-pick a1b2c3d
\`\`\`

You can also pick multiple commits at once:
\`\`\`bash
git cherry-pick a1b2c3d e5f6g7h
\`\`\`

---

## 3. When to use it?

### Scenario A: Hotfixes
A bug was fixed in \`develop\`, but you need to deploy it to \`production\` right now without shipping the rest of the unfinished features in \`develop\`.

### Scenario B: Features on wrong branch
You accidentally committed to the wrong branch. You can:
1.  Switch to the correct branch.
2.  Cherry-pick the commit.
3.  Switch back and \`reset\` to remove it from the wrong branch.

---

## 4. Conflicts

Just like merging or rebasing, cherry-picking can cause conflicts if the files have diverged too much. Use the standard conflict resolution flow:

1.  Fix the files.
2.  \`git add <files>\`
3.  \`git cherry-pick --continue\`
`
};
