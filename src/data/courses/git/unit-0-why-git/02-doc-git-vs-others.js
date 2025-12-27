import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2GitVsOthers = {
    id: 'git-0-doc-2-git-vs-others',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Git vs Other "Version Control" Methods',
    duration: '8 min read',
    content: `
# Git vs Other "Version Control" Methods

## The Competitors

You might think: "I already have a way to manage my files!"

Let's compare Git with common alternatives:

---

## 1. Manual Backups (ZIP Files)

\`\`\`
project_backup_jan_15.zip
project_backup_jan_20.zip
project_backup_jan_21_before_changes.zip
\`\`\`

### Pros:
- Simple concept
- Works offline

### Cons:
- ❌ Takes massive storage
- ❌ Can't see what changed
- ❌ Can't merge work from multiple people
- ❌ Easy to forget to backup

**Verdict**: Okay for photos. Terrible for code.

---

## 2. Google Drive / Dropbox

### Pros:
- Automatic sync
- Some version history
- Easy sharing

### Cons:
- ❌ Limited history (30-90 days)
- ❌ Can't compare versions line-by-line
- ❌ Sync conflicts create duplicates
- ❌ Works per-file, not per-project
- ❌ Requires internet

**Verdict**: Good for documents. Not designed for code.

---

## 3. Google Docs "Version History"

### Pros:
- Automatic
- Can restore old versions
- Shows who edited

### Cons:
- ❌ Only works for Google Docs
- ❌ Can't branch (try different approaches)
- ❌ No meaningful save points ("Save when I finished the header")
- ❌ Linear history only

**Verdict**: Great for docs. Doesn't work for code files.

---

## 4. Email / "Send me the latest version"

\`\`\`
"Hey can you send me the updated code?"
"Wait, which version do you have?"
"The one from Tuesday or Wednesday?"
"Just send me everything and I'll figure it out"
\`\`\`

**Verdict**: 🔥 Absolute chaos. Never do this.

---

## Git: The Professional Solution

| Feature | ZIP | Dropbox | Google Docs | Git |
|---------|-----|---------|-------------|-----|
| Offline work | ✅ | ❌ | ❌ | ✅ |
| Unlimited history | ❌ | ❌ | ❌ | ✅ |
| Line-by-line diff | ❌ | ❌ | ❌ | ✅ |
| Branching | ❌ | ❌ | ❌ | ✅ |
| Merge work | ❌ | ❌ | ❌ | ✅ |
| Named checkpoints | ❌ | ❌ | ❌ | ✅ |
| Works for code | ❌ | ❌ | ❌ | ✅ |

---

## The Mental Shift

> [!IMPORTANT]
> Git is not just "better Dropbox". It's a completely different way of thinking about your project.

### Old Mindset (File-based):
- "I have files. I make copies when scared."
- "I hope nothing breaks."
- "Please don't touch my files."

### Git Mindset (Snapshot-based):
- "I have a project with a complete history."
- "I can always go back. I am fearless."
- "Let's work together and merge our changes."

---

## Key Takeaways

✅ ZIP/manual backups waste storage and can't track changes
✅ Dropbox/Drive are for files, not code projects  
✅ Git provides unlimited history with zero extra storage
✅ Git enables collaboration that other tools can't match
✅ Learning Git = thinking about your project differently
`
};
