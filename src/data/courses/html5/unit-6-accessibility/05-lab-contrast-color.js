import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5Contrast = {
    id: 'html5-u6-lab-2-contrast',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Invisible Menu (Contrast)',
    duration: '20 min',
    content: `
# Lab: Contrast Crisis

## The Problem
The designer chose "Subtle Grey" (#999) on a white background.
It looks sleek but is **unreadable** for 10% of the population.

## WCAG Standards
- **AA Standard**: Text must have a contrast ratio of **4.5:1**
- Body text needs better contrast than large headings

`,
    tasks: [
        {
            id: 1,
            description: 'Darken .menu-item color to #333 (or darker)',
            completed: false,
            regex: /\.menu-item\s*\{[\s\S]*?color\s*:\s*#(333|000|111|222)/i,
            hint: {
                concept: 'Color Contrast',
                strategy: 'Darker colors have better contrast on light backgrounds.',
                solution: '.menu-item { color: #333; }'
            }
        },
        {
            id: 2,
            description: 'Darken .cta-btn background to meet contrast requirements',
            completed: false,
            regex: /\.cta-btn\s*\{[\s\S]*?background\s*:\s*(blue|black|#000|#111|#007)/i,
            hint: {
                concept: 'Button Contrast',
                strategy: 'White text needs dark background (4.5:1 ratio).',
                solution: '.cta-btn { background: #007bff; }'
            }
        },
        {
            id: 3,
            description: 'Add focus styles for keyboard navigation',
            completed: false,
            regex: /:focus/i,
            hint: {
                concept: 'Focus Visibility',
                strategy: 'Keyboard users need visible focus indicators.',
                solution: '.menu-item:focus { outline: 2px solid #007bff; }'
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
    <title>Contrast Test</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <a href="#" class="menu-item">Home</a>
        <a href="#" class="menu-item">About</a>
        <a href="#" class="menu-item">Contact</a>
        <button class="cta-btn">Sign Up</button>
    </nav>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    font-family: -apple-system, sans-serif;
    padding: 20px;
    background: #fff;
}

nav {
    display: flex;
    gap: 15px;
    align-items: center;
}

.menu-item {
    text-decoration: none;
    padding: 10px;
    font-size: 18px;
    /* TODO: Fix this low contrast color - change to #333 */
    color: #ccc; 
}

.cta-btn {
    border: none;
    padding: 10px 20px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    /* TODO: Fix this light button - use darker color */
    background: #aab; 
    border-radius: 4px;
}

/* TODO: Add focus styles */`
        }
    ]
};
