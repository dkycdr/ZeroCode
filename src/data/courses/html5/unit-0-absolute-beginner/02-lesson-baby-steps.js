import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lesson1BabySteps = {
    id: 'html5-0-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Your First HTML Page 🚀',
    duration: '20 min',
    content: `
# Lab: Your First HTML Page 🚀

## The Step-by-Step Approach

We're going to build your first HTML page **one tiny piece at a time**. Don't try to write everything at once - follow each step carefully!

## Step 1: The DOCTYPE Declaration

Every HTML file starts with this magic line:

\`\`\`html
<!DOCTYPE html>
\`\`\`

**What it does:** Tells the browser "Hey, this is HTML5!"
**Why it matters:** Without it, browsers might get confused about which version of HTML you're using.

## Step 2: The Root & Head

After DOCTYPE, we create the container \`<html>\` and the information center \`<head>\`.

\`\`\`html
<!DOCTYPE html>
<html>
    <head>
        <title>My First Website</title>
    </head>
</html>
\`\`\`

**What goes in <head>:**
- \`<title>\` - Shows in the browser tab (like "Google" or "Facebook").
- \`<meta>\` - Technical settings.
- **NOT** visible content (headings, paragraphs, etc).

## Step 3: The Body (Visible Content)

After \`</head>\`, add \`<body>\`. This is where the magic happens.

\`\`\`html
<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page.</p>
</body>
\`\`\`

**Rules for <body>:**
- Everything inside here is shown to the user.
- \`<h1>\` is your main title (Use only one!).
- \`<p>\` refers to "Paragraph".

## Your Mission: Build the Foundation

Create a simple page with:
1. ✅ \`<!DOCTYPE html>\` at the top
2. ✅ \`<html>\` wrapping everything
3. ✅ \`<head>\` with \`<title>\`
4. ✅ \`<body>\` with content
5. ✅ \`<h1>\` heading with your name
6. ✅ \`<p>\` paragraph about yourself
7. ✅ \`<ul>\` list with 3 hobbies
8. ✅ \`<a>\` link to "https://zerocode.ac.id"

`,
    tasks: [
        {
            id: 1,
            description: 'Add <!DOCTYPE html> at the very top.',
            completed: false,
            hint: 'It must be the first line.',
            regex: /^\s*<!DOCTYPE\s+html>/im
        },
        {
            id: 2,
            description: 'Create <html> and <head> structure.',
            completed: false,
            hint: 'Ensure html wraps head.',
            regex: /<!DOCTYPE\s+html>\s*\n\s*<html>\s*\n\s*<head>/im
        },
        {
            id: 3,
            description: 'Add a <title> inside <head>.',
            completed: false,
            hint: '<title>My Title</title>',
            regex: /<head>\s*[\s\S]*<title>\s*[^<]{1,}\s*<\/title>/i
        },
        {
            id: 4,
            description: 'Add <body> after head.',
            completed: false,
            hint: 'Close head with </head> then open <body>.',
            regex: /<\/head>\s*\n\s*<body>/im
        },
        {
            id: 5,
            description: 'Add <h1> with your name.',
            completed: false,
            hint: '<h1>My Name</h1>',
            regex: /<body>\s*[\s\S]*<h1>\s*[^<]{1,}\s*<\/h1>/i
        },
        {
            id: 6,
            description: 'Add a <p> paragraph.',
            completed: false,
            regex: /<p>\s*[\s\S]{10,}\s*<\/p>/i
        },
        {
            id: 7,
            description: 'Add a <ul> list with 3 items.',
            completed: false,
            regex: /<ul>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>[\s\S]*<\/ul>/i
        },
        {
            id: 8,
            description: 'Add a link to ZeroCode.',
            completed: false,
            regex: /<a\s+href\s*=\s*["\']https?:\/\/[^"\']*zerocode[^"\']*["\']\s*>\s*[^<]{1,}\s*<\/a>/i
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!-- 
    YOUR TASK: Build the foundation!
-->
`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { font-family: sans-serif; padding: 20px; background: #f0f0f0; }
h1 { color: #333; }
`
        }
    ]
};
