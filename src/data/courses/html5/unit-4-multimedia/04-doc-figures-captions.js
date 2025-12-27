import { CONTENT_TYPES } from '../../index';

export const doc4Figures = {
    id: 'html5-unit-4-doc-figures',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Figures & Captions',
    description: 'Semantic grouping for images, diagrams, and code blocks.',
    content: `
# Semantic Grouping with \`<figure>\`

Before HTML5, we used \`<div>\` with \`class="caption"\`. Now, we have a semantic tag to group visual content with its explanation.

## The Anatomy

\`\`\`html
<figure>
  <img src="diagram-mvc.png" alt="MVC Architecture Diagram">
  <figcaption>Fig 1. Model-View-Controller Architecture Pattern.</figcaption>
</figure>
\`\`\`

## When to use it?
Use \`<figure>\` when the content is **self-contained** and is referenced as a single unit from the main content.

*   Diagrams / Charts
*   Illustrations with credits
*   Code snippets with file names
*   Quotes with attribution

\`\`\`html
<figure>
  <blockquote>
    "Talk is cheap. Show me the code."
  </blockquote>
  <figcaption>— Linus Torvalds</figcaption>
</figure>
\`\`\`

> [!NOTE]
> The \`<figcaption>\` can be placed at the top or bottom of the Figure, but it must be the **first** or **last** child.
    `
};
