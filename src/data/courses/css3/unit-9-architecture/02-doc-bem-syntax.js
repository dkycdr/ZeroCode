import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2BemSyntax = {
    id: 'css-unit9-info-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: BEM Syntax & Atomic Rules',
    duration: '25 min read',
    content: `
# Deep Dive: BEM Syntax & Atomic Rules

## 1. The Core Concept: The Lexicon of Logic
Architect, in the **Nexus AI Network**, we do not speak in ambiguous terms. We use a precise grammar so that thousands of engineers can understand intent simply by looking at a class name.

BEM is not just about underscores and hyphens. It is a system of **Structural Semantics**. In this unit, we will dissect the anatomy of BEM and learn the "Atomic Rules" that keep a website from collapsing when the specificity storm hits.

---

## 2. Machine Logic: The Anatomy
The BEM naming convention consists of three distinct parts:

### A. Block (The Organism)
A standalone functional entity. It is the primary context.
- **Syntax**: Simple name (\`.btn\`, \`.nav\`, \`.card\`).
- **Rule**: Avoid using tag selectors (\`div\`) inside. Use names that describe **purpose**, not appearance (\`.cta-button\` instead of \`.red-button\`).

### B. Element (The Organ)
A part of a block that has no functional meaning on its own. It is bound to its parent Block.
- **Syntax**: Block name followed by **Two Underscores** (\`__\`) and the element name.
- **Example**: \`.card__title\`, \`.btn__icon\`, \`.nav__item\`.

### C. Modifier (The Mood/State)
A flag used to change appearance, behavior, or state.
- **Syntax**: The original name followed by **Two Hyphens** (\`--\`) and the modifier name.
- **Example**: \`.btn--primary\`, \`.card--large\`, \`.nav__link--active\`.

---

## 3. Visual: The Component Tree
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    Block[".profile-card (Block)"]
    Block --> E1[".profile-card__avatar (Element)"]
    Block --> E2[".profile-card__info (Element)"]
    E2 --> E3[".profile-card__name (Element)"]
    Block --> M1[".profile-card--highlighted (Modifier)"]
    
    style Block fill:#1a1a1e,stroke:#4cc9f0,stroke-width:2px
    style E1 fill:#111,stroke:#eee
    style E2 fill:#111,stroke:#eee
    style E3 fill:#111,stroke:#eee
    style M1 fill:#f72585,stroke:#333
\`\`\`

</div>

---

## 4. The "No-Grandchildren" Rule
This is a lethal trap for beginners. You must NOT follow the HTML nesting depth into your BEM classes.

**ERROR (Structural Dependency):**
\`\`\`css
/* Too Deep! Hard to move elements around. */
.card__header__title__text { ... }
\`\`\`

**ELITE (Flat Dependency):**
\`\`\`css
/* Clean and Independent. */
.card__text { ... }
\`\`\`

**Why?** Because BEM demands structural independence. If you move that text out of the header tomorrow, your styles won't break. Elements belong to the **Block**, not to each other.

---

## 5. Senior Architect's Decision: The Multi-class Pattern
In BEM, we rarely stack styles inside a single class. We use the **Composition Pattern**.
\`\`\`html
<button class="btn btn--danger">PURGE DATA</button>
\`\`\`
- The \`.btn\` class provides the base structure (padding, font, border).
- The \`.btn--danger\` class only provides the red color logic.
- This makes your code modular and "Composable"—you can mix and match styles like LEGO blocks.

---

## 6. Mental Model: The Library Catalog
- **Block** is the Book.
- **Element** is the Chapter.
- **Modifier** is the Edition (e.g., "Special Edition").
A chapter cannot exist without the book, but a book can have many chapters. All chapters are part of the book equally, regardless of page number.

---

## 7. The Checklist of Clean Syntax
- [ ] Use lowercase only and separate words with a single hyphen (\`.main-nav\`).
- [ ] Avoid Element-in-Element (\`__\`). One Block, many flat Elements.
- [ ] Use Modifiers only for true variations, not for creating entirely new components.

> [!IMPORTANT]
> **Naming Note**: If you find it impossible to name an element because it is "too deep" in the structure, that is a signal to split that part into a **New Block**.

> [!TIP]
> **Pro Tip**: Double underscores (\`__\`) and double hyphens (\`--\`) are used so you can still use single hyphens for word separation (\`.social-media__icon-link\`) without confusing the BEM parser.

> [!CAUTION]
> **Logic Pitfall**: Never use BEM modifiers without the base class. 
> \`<div class="card--dark"></div>\` is wrong. It should be \`<div class="card card--dark"></div>\`.
`
};
