import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Cascade = {
    id: 'css-unit0-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: The Power Command (The Cascade)',
    duration: '15 min read',
    content: `
# Deep Dive: The Power Command (The Cascade)

## 1. The Core Concept: Resolution Logic
Have you ever wondered why, if you write two different color rules for the same button, only one of them actually works? That is **The Cascade**. 

Think of the Cascade as a **Judge**. It looks at all the conflicting rules you've written and decides which one is the "most powerful" based on a very strict set of laws.

---

## 2. Visual: The Waterfall Hierarchy
\`\`\`mermaid
graph TD
    Origin[1. Origin & Importance: User Agent vs Author]
    Specificity[2. Specificity: Class vs ID]
    Order[3. Order of Appearance: Last one wins]
    
    Origin --> Specificity
    Specificity --> Order
    Order --> Result[Winner: Final Computed Style]
    
    style Origin fill:#f72585,stroke:#333
    style Result fill:#4cc9f0,stroke:#333
\`\`\`

---

## 3. Machine Logic: The Priority Tiers
How does the Judge decide? It looks at three main factors in this order:

1.  **Origin & Importance**: Your CSS (the "Author") is more important than the browser's default settings (the "User Agent"). However, using \`!important\` is like a "Super-Command" that jumps to the front of the line. Use it only in emergencies.
2.  **Specificity**: A selector that is more "private" or "detailed" wins. An ID is more detailed than a Class.
3.  **Order of Appearance**: If two rules are equal in strength, the one written **last** (at the bottom of your file) is the winner.

---

## 4. Senior Architect's Brief: Predictability
At Nexus AI, we avoid relying on the *Order of Appearance*. Why? Because if someone moves your code, the styles might break. A mature engineer relies on strong, clear **Specificity** to make sure the layout is 100% predictable.

> [!IMPORTANT]
> **Mission Objective**: Mastering the Cascade means you will never waste hours wondering why your CSS changes aren't applying.

> [!TIP]
> **Pro Tip**: Always write your "General" styles (like global resets) at the top of your file, and your "Specific" components at the bottom. This lets the natural flow of the Cascade work in your favor.
`
};
