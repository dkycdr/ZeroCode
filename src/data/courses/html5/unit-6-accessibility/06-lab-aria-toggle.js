import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab6AriaToggle = {
    id: 'html5-u6-lab-3-toggle',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Custom Toggle (ARIA)',
    duration: '30 min',
    content: `
# Lab: Building a Custom Switch

## The Problem
You want to make a cool iOS-style toggle.
You hide the native checkbox and style a div.
Problem: A screen reader just sees a div with no meaning.

## The Solution
Use ARIA attributes to communicate state to assistive technology.

`,
    tasks: [
        {
            id: 1,
            description: 'Change the div to a <button> element',
            completed: false,
            regex: /<button[^>]*class=["']toggle["']/i,
            hint: {
                concept: 'Interactive Elements',
                strategy: '<button> is keyboard focusable and activatable.',
                solution: '<button class="toggle">...</button>'
            }
        },
        {
            id: 2,
            description: 'Add role="switch" to indicate toggle behavior',
            completed: false,
            regex: /<button[^>]*role=["']switch["'][^>]*>/i,
            hint: {
                concept: 'ARIA Role',
                strategy: 'role="switch" tells assistive tech this is a toggle.',
                solution: '<button role="switch">...</button>'
            }
        },
        {
            id: 3,
            description: 'Add aria-checked="true" to indicate ON state',
            completed: false,
            regex: /aria-checked=["']true["']/i,
            hint: {
                concept: 'ARIA State',
                strategy: 'aria-checked communicates the current toggle state.',
                solution: '<button role="switch" aria-checked="true">'
            }
        },
        {
            id: 4,
            description: 'Add aria-label="Dark Mode" to name the toggle',
            completed: false,
            regex: /aria-label=["']Dark Mode["']/i,
            hint: {
                concept: 'ARIA Label',
                strategy: 'aria-label provides an accessible name.',
                solution: '<button aria-label="Dark Mode" role="switch" aria-checked="true">'
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
    <title>Custom Toggle</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Settings</h1>
    
    <div class="setting-row">
        <span>Dark Mode</span>
        
        <!-- ============================================
            MAKE THIS ACCESSIBLE
            1. Change div to <button>
            2. Add role="switch" 
            3. Add aria-checked="true"
            4. Add aria-label="Dark Mode"
        ============================================ -->
        <div class="toggle">
            <span class="slider"></span>
        </div>
    </div>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body {
    font-family: -apple-system, sans-serif;
    padding: 30px;
    background: #1a1a2e;
    color: #fff;
}

.setting-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 300px;
    padding: 15px;
    background: #16213e;
    border-radius: 10px;
}

.toggle {
    width: 60px;
    height: 34px;
    background: #555;
    border-radius: 34px;
    position: relative;
    cursor: pointer;
    border: none;
    padding: 0;
}

/* Visual feedback for ON state */
.toggle[aria-checked="true"],
button.toggle[aria-checked="true"] {
    background: #00ff41;
}

.slider {
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: white;
    border-radius: 50%;
    transition: 0.3s;
    pointer-events: none;
}

.toggle[aria-checked="true"] .slider {
    transform: translateX(26px);
}

/* Focus styles for accessibility */
.toggle:focus {
    outline: 2px solid #00b4d8;
    outline-offset: 2px;
}`
        }
    ]
};
