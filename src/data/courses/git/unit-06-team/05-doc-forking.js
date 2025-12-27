import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const docForking = {
    id: 'git-6-doc-forking',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Forking Workflow 🍴',
    content: `
# The Forking Workflow 🍴

In open source projects (like creating a library or contributing to React), you don't have permission to push directly to the main repository.

Instead, you **Fork** it.

## 1. What is a Fork?

A fork is a **personal copy** of someone else's repository that lives on your account.
- **Upstream**: The original repository (e.g., \`facebook/react\`).
- **Origin**: Your personal copy (e.g., \`yourname/react\`).

You can push whatever you want to *Origin*, because it's yours. When you're ready, you send a PR from *Origin* to *Upstream*.

---

## 2. The Triangle of Collaboration

\`\`\`mermaid
graph TD
    Upstream[Upstream Repo] -- 1. Fork --> Origin[Your Origin Repo]
    Origin -- 2. Clone --> Local[Local Machine]
    Local -- 3. Push --> Origin
    Origin -- 4. Pull Request --> Upstream
    Upstream -- 5. Fetch Updates --> Local
\`\`\`

%% width: 600px %%

---

## 3. Syncing Your Fork

Over time, *Upstream* changes. Other people merge code. Your *Origin* (and *Local*) gets outdated.

If you don't sync, you'll get merge conflicts when you try to PR.

### The Sync Ritual:
1.  **Add Upstream Remote**:
    \`\`\`bash
    git remote add upstream https://github.com/original/repo.git
    \`\`\`
2.  **Fetch Upstream**:
    \`\`\`bash
    git fetch upstream
    \`\`\`
3.  **Merge into Main**:
    \`\`\`bash
    git switch main
    git merge upstream/main
    \`\`\`
4.  **Update Origin**:
    \`\`\`bash
    git push origin main
    \`\`\`

Now your fork is even with the original repo, and you're ready for the next feature.
`,
    duration: '15 min'
};
