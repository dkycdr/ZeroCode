import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc5Deployment = {
    id: 'html5-u8-doc-5-deploy',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Going Live: Deployment Strategies',
    duration: '10 min read',
    content: `
# It's not real until it's online.

## The Old Way: FTP (File Transfer Protocol)
Dragging files manually into a server folder like it's 1999.
*   **Pros**: Simple concept.
*   **Cons**: Error-prone, no version control, slow.

## The Modern Way: Git-Based Deployment (Netlify / Vercel)
1.  You push code to **GitHub**.
2.  Vercel/Netlify detects the change.
3.  It automatically builds and deploys your site in seconds.
4.  It gives you a free SSL certificate (HTTPS).

## Custom Domains
Buy a domain (e.g., \`myname.com\`) and point the DNS records (A Record / CNAME) to your Vercel project.
`
};
