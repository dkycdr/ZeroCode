import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4TimeData = {
    id: 'html5-u2-doc-4-micro',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Micro-Semantics (Time & Address)',
    duration: '10 min read',
    content: `
# Deep Dive: Micro-Semantics 🔬

Sometimes you need to label specific pieces of data for computers.

## 1. \`<time>\` (Machine Readable Dates)
Humans read "Last Friday". Computers read "2023-10-27".
The \`<time>\` tag bridges this gap.

\`\`\`html
<p>Concert Date: <time datetime="2024-12-31">New Year's Eve</time></p>
\`\`\`
*   Google uses this for "Event Snippets" in search results.

## 2. \`<address>\` (Contact Info)
Specific tag for contact information of the author/owner.
It usually makes the text italic by default.

\`\`\`html
<footer>
    <address>
        Written by <a href="mailto:me@zerocode.com">ZeroCode Team</a>.<br>
        Jakarta, Indonesia
    </address>
</footer>
\`\`\`

## 3. \`<mark>\` (Highlighting)
Use this to highlight text (like a yellow highlighter pen) for reference.
Don't confuse with \`<strong>\` (Importance). \`<mark>\` is for relevance.

\`\`\`html
<p>Search Results: You searched for <mark>HTML5</mark>.</p>
\`\`\`
`
};
