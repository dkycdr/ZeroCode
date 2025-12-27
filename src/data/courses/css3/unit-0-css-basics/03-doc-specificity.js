import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Specificity = {
  id: 'css-unit0-info-3',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Deep Dive: Battle of the Rules (Specificity)',
  duration: '15 min read',
  content: `
# Deep Dive: Battle of the Rules (Specificity)

## 1. The Core Concept: The Scoreboard
When two rules fight over the same element, the browser calculates a **Specificity Score**. Imagine it like an RPG game: the selector with the highest level (score) wins the battle and controls the style.

Length doesn't matter; **Weight** does. A very short ID selector will crush a very long chain of element selectors every single time.

---

## 2. Visual: The Scoreboard
We calculate scores using three "buckets":
\`\`\`text
[ ID ]  [ Class, Pseudo-class, Attribute ]  [ Element, Pseudo-element ]
  0                    0                                0
\`\`\`

---

## 3. Machine Logic: Calculating the Weight
| Selector Type | Score Value | Example |
| :--- | :--- | :--- |
| **ID** | 1, 0, 0 | \`#main-nav\` |
| **Class** | 0, 1, 0 | \`.button\`, \`:hover\` |
| **Element** | 0, 0, 1 | \`div\`, \`p\`, \`::before\` |
| **Inline Style** | 1, 0, 0, 0 | \`style="color: red"\| |

**Battle Scenario**:
- \`p.text\` has a score of **0, 1, 1** (1 element + 1 class).
- \`#hero .text\` has a score of **1, 1, 0** (1 ID + 1 class).
- **The Winner**: \`#hero .text\` because its ID bucket is higher.

---

## 4. Senior Architect's Brief: Avoid IDs for Styling
IDs are too powerful. If you use them for everything, it becomes impossible to change styles later without using \`!important\`. In professional systems like Nexus AI, we use **Classes** for almost everything. They are flexible and easy to manage.

> [!CAUTION]
> **Architect Warning**: \`!important\` is not part of the scoring system. It is a "force bypass" that breaks the rules of physics in CSS. If you use it too much, your code will eventually become unmanageable.

> [!TIP]
> **Pro Tip**: The universal selector (\`*\`) and combinators (like \`+\` or \`~\`) have no specificity weight. Their score is exactly zero (0, 0, 0).
`
};
