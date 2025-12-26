import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3Landing = {
    id: 'html5-u8-lab-landing',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 1: SaaS Landing Page',
    duration: '25 min',
    content: `
# The High-Conversion Hero

You are building the "Above the Fold" section for a startup called **NexusAI**.
It needs a Headline, Sub-headline, and two Buttons (Primary & Secondary).

## Design System
*   **Primary Color**: #2563EB (Blue)
*   **Font**: System Sans-Serif

## Tasks
1.  Create the **H1 Headline**: "Future of AI".
2.  Create the **Primary Button**: "Get Started" (Blue background, White text).
3.  Create the **Secondary Button**: "Learn More" (Transparent background, Blue border).
    `,
    tasks: [
        {
            id: 1,
            description: 'Headline: <h1>Future of AI</h1>',
            completed: false,
            regex: /<h1[^>]*>\s*Future of AI\s*<\/h1>/i
        },
        {
            id: 2,
            description: 'Primary Button: class="btn-primary" with text "Get Started".',
            completed: false,
            regex: /<a[^>]*class=["'].*?btn-primary.*?["'][^>]*>\s*Get Started\s*<\/a>/i
        },
        {
            id: 3,
            description: 'Secondary Button: class="btn-outline" with text "Learn More".',
            completed: false,
            regex: /<a[^>]*class=["'].*?btn-outline.*?["'][^>]*>\s*Learn More\s*<\/a>/i
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<body>
    <header class="hero">
        <!-- TODO: Add Headline and Actions -->
        
    </header>
</body>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `.hero {
    text-align: center;
    padding: 100px 20px;
    font-family: system-ui, sans-serif;
}

.btn-primary {
    background: #2563EB;
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 6px;
    display: inline-block;
}

.btn-outline {
    border: 2px solid #2563EB;
    color: #2563EB;
    padding: 10px 22px; /* 2px less to match height */
    text-decoration: none;
    border-radius: 6px;
    display: inline-block;
    margin-left: 10px;
}`
        }
    ]
};
