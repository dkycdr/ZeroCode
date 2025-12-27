import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2TextMechanics = {
    id: 'html5-u1-doc-2-text',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Text Mechanics & Whitespace',
    duration: '12 min read',
    content: `
# Deep Dive: Text Mechanics & Whitespace

## 1. The Paragraph Element (\`<p>\`)

The \`<p>\` tag is the fundamental unit of text.
By default, browsers add a little space (margin) above and below paragraphs to make them readable.

\`\`\`html
<p>This is the first thought.</p>
<p>This is the second thought. See the gap between us?</p>
\`\`\`

---

## 2. The Whitespace Phenomenon

This confuses every beginner.
In HTML, **multiple spaces and newlines are ignored**. The browser collapses them into a **single space**.

### The Code:
\`\`\`html
<p>
    Hello         World!
    
    How are       you?
</p>
\`\`\`

### The Result:
"Hello World! How are you?"

**Why?** Because code needs indentation to be neat. If browsers rendered every tab and newline in your code, your page format would be chaotic.

### How to force a line break?
Use the \`<br>\` (Break) tag.

\`\`\`html
<p>
    123 Main St.<br>
    New York, NY<br>
    USA
</p>
\`\`\`

> [!WARNING]
> Don't use \`<br>\` to make space between paragraphs. That's "visual" thinking. Use CSS margins or separate \`<p>\` tags for that. Only use \`<br>\` where a line break is *content* (like in a poem or address).

---

## 3. Preformatted Text (\`<pre>\`)

What if you *want* to keep the spaces? (Like displaying code or ASCII art).
Use the \`<pre>\` tag. It preserves all whitespace exactly as you type it.

\`\`\`html
<pre>
  /\\_/\\
 ( o.o )
  > ^ <
</pre>
\`\`\`

---

## 4. Generic Containers: Div vs Span

Sometimes you need to group text for styling, but there isn't a "semantic" tag for it.

### The Block Container: \`<div>\`
*   Takes up the **full width**.
*   Starts on a **new line**.
*   Used for: Layout sections, cards, wrappers.

### The Inline Container: \`<span>\`
*   Takes up **only the space it needs**.
*   Stays **on the same line**.
*   Used for: Styling a specific word inside a sentence.

\`\`\`html
<!-- div pushes "World" to next line -->
<div>Hello</div>
<div>World</div>

<!-- span keeps them side-by-side -->
<p>My favorite color is <span style="color: blue">Blue</span>.</p>
\`\`\`
`
};
