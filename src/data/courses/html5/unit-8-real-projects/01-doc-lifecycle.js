import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1Lifecycle = {
    id: 'html5-u8-doc-1-lifecycle',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'The Professional Workflow',
    duration: '10 min read',
    content: `
# Stop Coding. Start Planning.

Amateur developers open VS Code immediately.
Senior developers open Figma (or a napkin) first.

## The 4-Step Lifecycle

### 1. Discovery & Strategy
*   **Goal**: What is this site for? (Selling? Informing? Entertaining?)
*   **Audience**: Who is reading it? (Gen Z? Corporate Executives?)

### 2. Information Architecture (IA)
*   **Sitemap**: Home -> Services -> Contact.
*   **Wireframe**: A black & white sketch of the layout. **do not skip this.**

### 3. Development (The Code)
*   **Content First**: Write the HTML.
*   **Mobile First**: Write the CSS for phones, THEN scale up for desktops.

### 4. Deployment
*   **Hosting**: Pushing to the cloud.
*   **CI/CD**: Automatic updates when you git push.
`
};
