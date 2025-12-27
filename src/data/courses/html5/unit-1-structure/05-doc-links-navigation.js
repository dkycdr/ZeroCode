import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc5Links = {
    id: 'html5-u1-doc-5-links',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Hyperlinks & Navigation',
    duration: '15 min read',
    content: `
# Deep Dive: Hyperlinks & Navigation

## 1. The Anchor of the Web (\`<a>\`)

The **A**nchor tag is what makes the web "The Web". It connects documents.
Without it, you just have isolated digital paper.

\`\`\`html
<a href="https://google.com">Go to Google</a>
\`\`\`

*   **href**: "Hypertext Reference". The destination.
*   **Content**: The click target ("Go to Google").

---

## 2. Opening in New Tabs (\`target\`)

By default, links open in the *same* tab.
To open in a new tab (like for external sites):

\`\`\`html
<a href="https://twitter.com" target="_blank">Twitter</a>
\`\`\`

> [!CAUTION]
> **Security Risk**: When you use \`target="_blank"\`, the new page can theoretically access your page via Javascript.
> **The Fix**: Always add \`rel="noopener noreferrer"\` to external links.
> \`<a href="..." target="_blank" rel="noopener noreferrer">\`

---

## 3. ID Fragments (Jumping within a page)

You can link to a specific *part* of the same page.
This is how "Table of Contents" works.

### Step 1: Give the target an ID
\`\`\`html
<h2 id="contact-section">Contact Us</h2>
\`\`\`

### Step 2: Link to that ID with a Hash (#)
\`\`\`html
<a href="#contact-section">Jump to Contact</a>
\`\`\`

---

## 4. Email and Phone Links

You can trigger native apps using special protocols.

### Email Link
Opens the user's default email app (Outlook, Mail, Gmail).
\`\`\`html
<a href="mailto:boss@zerocode.ac.id">Email the Boss</a>
\`\`\`

### Phone Link
Triggers a call on mobile devices.
\`\`\`html
<a href="tel:+628123456789">Call Support</a>
\`\`\`

> [!TIP]
> **UX Rule**: Don't use "Click Here".
> Screen readers scan links. Converting "Click Here" to audio results in meaninglessness.
> **Bad**: "To see report, click here."
> **Good**: "Download the [Q3 Financial Report]."
`
};
