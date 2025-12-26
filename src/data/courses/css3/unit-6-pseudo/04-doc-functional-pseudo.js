import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4FunctionalPseudo = {
    id: 'css-unit6-info-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Modern Logic (:not, :has, :is)',
    duration: '35 min read',
    content: `
# Deep Dive: Modern Logic (:not, :has, :is)

## 1. The Core Concept: The Functional Revolution
Architect, you are entering the territory of "Next-Gen" CSS. Until recently, CSS could only select "Down" the tree (parents to children). But with the 2024 standards, we have gained **Relational Logic**. 

Functions like \`:has()\`, \`:not()\`, and \`:is()\` allow you to write incredibly powerful selectors that previously required complex JavaScript. This is the **Nexus AI Logic Engine** at its peak.

---

## 2. Visual: The Logic Gates
<div style="max-width: 800px; margin: 20px auto;">

\`\`\`mermaid
graph TD
    NOT[":not(.active)"] -->|Logic| R1[Everything EXCEPT active]
    IS[":is(h1, h2, h3)"] -->|Logic| R2[Any of these tags]
    HAS[":has(.error)"] -->|Logic| R3[Parent containing error]
    
    style NOT fill:#f72585
    style IS fill:#4cc9f0
    style HAS fill:#4895ef
\`\`\`

</div>

---

## 3. The Power of \`:not()\`
The exclusion gate. 
\`\`\`css
/* Style all buttons, but NOT the 'cancel' button */
button:not(.btn-cancel) {
    background: blue;
}
\`\`\`
This prevents you from writing styles and then "Undoing" them later, keeping your CSS lean.

---

## 4. The Giant: \`:has()\` (The Parent Selector)
For 20 years, CSS Architects dreamed of a way to style a parent based on its children. Now we have it.
\`\`\`css
/* If a card contains an image, give the card a specific background */
.card:has(img) {
    background: #111;
}

/* If an input is invalid, highlight the whole form-group container */
.form-group:has(input:invalid) {
    border: 1px solid red;
}
\`\`\`

---

## 5. The Cleaner: \`:is()\` and \`:where()\`
Tired of writing long comma-separated lists? 
\`\`\`css
/* Old way */
article h1, article h2, article h3, section h1, section h2, section h3 { color: blue; }

/* New way */
:is(article, section) :is(h1, h2, h3) { color: blue; }
\`\`\`
- **:is()**: Has the specificity of its strongest selector.
- **:where()**: Has **ZERO** specificity. It is the perfect tool for "Reset Styles" that you want to be easy to override later.

---

## 6. Machine Logic: Specificity Warping
Using \`:is()\` can jump your specificity levels. 
\`\`\`css
:is(.high-importance, #header) p { ... }
\`\`\`
Even if the paragraph matches \`.high-importance\` (a class), the presence of \`#header\` (an ID) inside the \`:is()\` function makes the *entire* rule have ID-level strength.

---

## 7. Senior Architect's Decision: :not() nesting
You can now nest \`:not()\` and even pass multiple selectors to it.
\`\`\`css
li:not(.active, .disabled) { ... }
\`\`\`
This targets every list item that is neither active nor disabled. It is the ultimate "Cleanup" tool for complex UI states.

---

## 8. Summary Checklist
- [ ] Use \`:not()\` to avoid overriding styles.
- [ ] Use \`:has()\` for stateful parent styling (e.g., highlighting cards).
- [ ] Use \`:is()\` to group complex selectors and keep code readable.
- [ ] Use \`:where()\` for design system base styles that need to be easily overridden.

> [!IMPORTANT]
> **Mission Objective**: Logic over Brute Force. Your goal is to write "Smart" CSS that understands the relationships between elements without needing human intervention (manual classes).

> [!TIP]
> **Pro Tip**: \`:has()\` is also great for styling "Previous Siblings."
> \`h2:has(+ p)\` targets an H2 that is immediately followed by a paragraph. 

> [!CAUTION]
> **Browser Support**: While \`:has()\` is now supported in all major modern browsers, always check your target device requirements if you are building for legacy enterprise systems (older than 2023).
`
};
