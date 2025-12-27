import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1WhyVersionControl = {
    id: 'git-0-doc-1-why-vc',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Why Version Control? The Save Game Problem 🎮',
    duration: '10 min read',
    content: `
# Why Version Control? The Save Game Problem 🎮

## The Problem Everyone Faces

Have you ever done this?

\`\`\`
thesis.docx
thesis_final.docx
thesis_final_v2.docx
thesis_REALLY_FINAL.docx
thesis_FINAL_FIX.docx
thesis_SUBMIT_THIS_ONE.docx
\`\`\`

**Congratulations!** You've invented a primitive version control system. 

But it has problems:
- ❌ Which version is the real "final"?
- ❌ What changed between versions?
- ❌ Can you go back to version 3?
- ❌ What if two people edit at the same time?

---

## The Video Game Analogy

Imagine playing a hard video game with **only one save slot**.

You're at the final boss. You save. You try 50 times and fail. You accidentally save over your good save point.

**Game over. Start from level 1.**

Now imagine a game with **infinite save slots** that:
- Automatically saves every action
- Lets you name each save point
- Allows you to go back to ANY point in time
- Shows you exactly what changed between saves

**That's Git.**

---

## What is Version Control?

> Version Control is a system that records changes to files over time so you can recall specific versions later.

### The Three Superpowers:

| Superpower | Description |
|------------|-------------|
| 🕐 **Time Travel** | Go back to any point in your project's history |
| 🔍 **X-Ray Vision** | See exactly what changed, when, and by whom |
| 🤝 **Multiplayer Mode** | Multiple people can work on the same files without chaos |

---

## Real-World Impact

### Without Version Control:
- "Who deleted the login function?"
- "I overwrote Sarah's changes!"
- "My code was working yesterday... what did I change?"
- "We have 5 different versions on 5 different computers"

### With Version Control:
- "Let me check the commit history... John removed it in commit abc123"
- "Let me merge our changes together"
- "Let me compare today's code with yesterday's"
- "Everyone has the same synchronized code"

---

## Why Git Specifically?

There are many version control systems:
- **SVN** (Subversion) - Old, centralized
- **Mercurial** - Similar to Git
- **Perforce** - Used in game studios
- **Git** - The industry standard

### Git Won Because:
1. **Speed** - Operations are instant (local database)
2. **Distributed** - Every copy is a full backup
3. **Branching** - Experiment freely without fear
4. **Open Source** - Free forever
5. **GitHub** - The social network for code

> [!NOTE]
> **Fun Fact**: Over 90% of professional developers use Git. Learning Git is not optional—it's survival.

---

## Key Takeaways

✅ Version control solves the "final_v2_REAL_final.docx" problem
✅ Git is like infinite save slots with time travel
✅ Git tracks WHAT changed, WHEN, and by WHOM
✅ Git enables collaboration without chaos
✅ Git is the industry standard (90%+ of developers)
`
};
