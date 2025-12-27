import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3MentalModel = {
    id: 'git-0-doc-3-mental-model',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Git Mental Model: 3 Zones',
    duration: '12 min read',
    content: `
# The Git Mental Model: 3 Zones 🧠

## The Most Important Diagram in Git

If you understand this diagram, you understand 80% of Git.

\`\`\`mermaid
flowchart LR
    WD[Working Directory<br/>📁 Your actual files] -->|git add| SA[Staging Area<br/>📦 Ready to commit]
    SA -->|git commit| R[Repository<br/>💾 Permanent history]
    R -.->|git checkout| WD
\`\`\`

---

## Zone 1: Working Directory 📁

**What is it?**
Your actual folder with actual files. The files you can see in VS Code or File Explorer.

**Analogy: Your Messy Desk**
Imagine your desk with papers everywhere. Some are drafts, some are finished, some are garbage.

\`\`\`
my-project/
├── index.html     ← You're editing this
├── style.css      ← This is done
├── test.js        ← This is broken
└── notes.txt      ← Just scratch notes
\`\`\`

> [!NOTE]
> Changes in the Working Directory are NOT saved to Git yet. If you delete a file here, it's gone (unless Git was tracking it).

---

## Zone 2: Staging Area 📦

**What is it?**
A "loading dock" where you prepare which changes to save.

**Analogy: Packing a Box for Shipping**
Before you ship a package, you decide WHAT goes in the box.
- The finished document? ✅ Goes in the box.
- The scratch notes? ❌ Don't ship those.
- The broken code? ❌ Fix it first.

\`\`\`bash
git add index.html style.css   # Put these in the box
# test.js and notes.txt are NOT in the box
\`\`\`

**Why does this exist?**
Because not every change deserves to be saved together.

Example:
- You fixed a bug (save this!)
- You also added debug console.logs (don't save these!)

The Staging Area lets you **curate** your save point.

---

## Zone 3: Repository 💾

**What is it?**
The permanent database of all your project's snapshots (commits).

**Analogy: A History Book**
Every time you "commit", you write a new page in the history book:
- "January 15: Fixed login bug"
- "January 16: Added signup feature"
- "January 17: Changed color scheme"

\`\`\`bash
git commit -m "Fixed login bug"  # New page written!
\`\`\`

Once committed, this change is saved FOREVER (or until you delete the repo).

---

## The Complete Flow

\`\`\`mermaid
sequenceDiagram
    participant WD as Working Directory
    participant SA as Staging Area
    participant R as Repository
    
    Note over WD: You edit files
    WD->>SA: git add (select changes)
    Note over SA: Changes are "staged"
    SA->>R: git commit (save snapshot)
    Note over R: Permanent checkpoint!
\`\`\`

### In Commands:

\`\`\`bash
# 1. Edit your files (Working Directory)
code index.html  

# 2. Stage the changes you want to save
git add index.html

# 3. Commit (save a snapshot)
git commit -m "Updated homepage"
\`\`\`

---

## Common Mistakes & Clarity

> [!CAUTION]
> **Common Mistake**: Running \`git commit\` right after editing.
>
> **What happens**: Nothing is committed! You forgot \`git add\`.
>
> **Fix**: Always \`git add\` before \`git commit\`, or use \`git commit -am\` for tracked files.

---

## Status: Your Navigation Tool

The \`git status\` command shows you which zone each file is in:

\`\`\`bash
git status

# Output:
# Changes to be committed:      ← STAGING AREA
#   modified: index.html
#
# Changes not staged:           ← WORKING DIRECTORY (modified but not added)
#   modified: style.css
#
# Untracked files:              ← WORKING DIRECTORY (new files)
#   notes.txt
\`\`\`

---

## Key Takeaways

✅ **Working Directory** = Your actual files (messy desk)
✅ **Staging Area** = What you're preparing to save (packing box)
✅ **Repository** = Permanent history (history book)
✅ \`git add\` moves changes to staging
✅ \`git commit\` saves staging to history
✅ \`git status\` shows where everything is
`
};
