import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3ArticleSection = {
    id: 'html5-u2-doc-3-article-section',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Article vs Section vs Div',
    duration: '12 min read',
    content: `
# Deep Dive: Article vs Section vs Div ⚖️

This is the most common interview question for Junior Developers.

## 1. \`<article>\` (Independent)
Use this for content that **stands alone**.
If you took this chunk of code and pasted it onto another website (like an RSS feed), would it still make sense?
*   ✅ A Blog Post
*   ✅ A News Story
*   ✅ A Product Card
*   ✅ A Forum Comment

## 2. \`<section>\` (Thematic Grouping)
Use this to group related content, usually with a heading.
It interacts with the Document Outline.
*   ✅ "About Us" chapter
*   ✅ "Contact Info" chapter
*   ✅ "Features" list

## 3. \`<div>\` (The Last Resort)
Use this **only for styling**.
If you need a container just to make a Flexbox layout or add a background color, use a div.
It has **NO semantic meaning**.

### The Decision Tree 🌳
1.  Can it be distributed independently? -> **\`<article>\`**
2.  Is it a distinct chapter with a heading? -> **\`<section>\`**
3.  Is it just for CSS layout? -> **\`<div>\`**

\`\`\`html
<article>
    <h2>Review: iPhone 15</h2>
    
    <section>
        <h3>Camera</h3>
        <p>The camera is great...</p>
    </section>
    
    <section>
        <h3>Battery</h3>
        <p>Lasts all day...</p>
    </section>
</article>
\`\`\`
`
};
