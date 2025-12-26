import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Audit = {
    id: 'html5-u6-lab-1-audit',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Semantics Audit',
    duration: '25 min',
    content: `
# Lab: The Broken Blog

## The Assignment
This blog post was written by an intern who loves \`<div>\`.
It is a nightmare for accessibility. Fix it!

## Your Mission
1. **Buttons**: The "Like" button is a \`<div>\`. Change it to \`<button>\`
2. **Headings**: The subtitles are bold \`<p>\` tags. Change to \`<h2>\`
3. **Links**: The "Read More" is a \`<span>\`. Change to \`<a>\`

## Why?
Buttons give you keyboard focus (Tab) + Spacebar activation for free. Divs give you nothing.

`,
    tasks: [
        {
            id: 1,
            description: 'Change the "Like" div to a <button class="like-btn">',
            completed: false,
            regex: /<button[^>]*class=["']like-btn["'][^>]*>[\s\S]*?Like[\s\S]*?<\/button>/i,
            hint: {
                concept: 'Semantic Buttons',
                strategy: '<button> gives keyboard focus and activation for free.',
                solution: '<button class="like-btn">Like this post</button>'
            }
        },
        {
            id: 2,
            description: 'Change <p class="heading">Comments</p> to <h2>Comments</h2>',
            completed: false,
            regex: /<h2>\s*Comments\s*<\/h2>/i,
            hint: {
                concept: 'Proper Headings',
                strategy: '<h2> is recognized by screen readers as a heading.',
                solution: '<h2>Comments</h2>'
            }
        },
        {
            id: 3,
            description: 'Change "Read More" span to <a href="#">Read More</a>',
            completed: false,
            regex: /<a[^>]*href=["']#["'][^>]*>[\s\S]*?Read More[\s\S]*?<\/a>/i,
            hint: {
                concept: 'Semantic Links',
                strategy: '<a> is keyboard navigable and recognized as a link.',
                solution: '<a href="#">Read More</a>'
            }
        },
        {
            id: 4,
            description: 'Remove onclick from the refactored elements',
            completed: false,
            regex: /<button[^>]*>[\s\S]*?Like[\s\S]*?<\/button>/i,
            hint: {
                concept: 'Proper Event Handling',
                strategy: 'Buttons dont need onclick for basic behavior.',
                solution: 'Remove onclick="alert(...)" from button'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Accessibility Audit</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <article>
        <h1>The Rise of AI</h1>
        
        <!-- TODO: Fix this fake heading (use <h2>) -->
        <p class="heading">Comments</p>
        
        <!-- TODO: Fix this fake button (use <button>) -->
        <div class="like-btn" onclick="alert('Liked!')">
            Like this post
        </div>
        
        <p>AI is changing the world rapidly...</p>
        
        <!-- TODO: Fix this fake link (use <a href="#">) -->
        <span class="link" onclick="location.href='#'">Read More</span>
    </article>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { font-family: -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; }
article { background: #f5f5f5; padding: 20px; border-radius: 10px; }
h1 { color: #333; }
.heading { font-weight: bold; font-size: 1.2em; }
.like-btn { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; display: inline-block; }
button.like-btn { font-size: inherit; font-family: inherit; }
.link { color: #007bff; cursor: pointer; text-decoration: underline; }
a { color: #007bff; }`
        }
    ]
};
