import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3Lists = {
    id: 'html5-u1-doc-3-lists',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Lists & Organization',
    duration: '10 min read',
    content: `
# Deep Dive: Lists & Organization

## 1. The Power of Lists

The web is made of lists. Navigation menus? Lists of links. Product grids? Lists of cards. To-do apps? Lists of tasks.
Knowing how to structure lists is 30% of your HTML job.

---

## 2. Unordered Lists (\`<ul>\`)

Use this when the **order doesn't matter**.
(e.g., Shopping list, Navigation menu, Bullet points).

\`\`\`html
<ul>
    <li>Milk</li>
    <li>Eggs</li>
    <li>Bread</li>
</ul>
\`\`\`
*   Default Style: Bullet points (•).

---

## 3. Ordered Lists (\`<ol>\`)

Use this when **sequence matters**.
(e.g., Recipes, Top 10 Charts, Instructions).

\`\`\`html
<ol>
    <li>Preheat oven</li>
    <li>Mix ingredients</li>
    <li>Bake for 20 mins</li>
</ol>
\`\`\`
*   Default Style: Numbers (1, 2, 3...).

---

## 4. Definition Lists (\`<dl>\`)

The forgotten hero. Use this for **Key-Value pairs** (e.g., Dictionary, FAQ, Metadata).

\`\`\`html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>
\`\`\`
*   \`<dt>\`: Term (The Name)
*   \`<dd>\`: Description (The Value)

---

## 5. Nesting Lists (The Inception Rule)

You can put a list *inside* another list item.
This is how you build complex navigation menus (Dropdowns).

### ⛔ Common Mistake
Trying to put the \`<ul>\` directly inside the parent \`<ul>\`.
**Wrong:** \`<ul> <ul>...</ul> </ul>\`

### ✅ Correct Nesting
The nested list must be inside a \`<li>\`.

\`\`\`html
<ul>
    <li>Fruit
        <ul>
            <li>Apple</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Vegetables</li>
</ul>
\`\`\`

> [!TIP]
> **Pro Tip**: You can change the numbering style of Ordered Lists using the \`type\` attribute.
> \`<ol type="A">\` -> A, B, C
> \`<ol type="I">\` -> I, II, III (Roman Numerals)
`
};
