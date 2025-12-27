import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab5Spaghetti = {
    id: 'html5-u7-lab-2-spaghetti',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Spaghetti Code Rescue',
    duration: '25 min',
    content: `
# Lab: Refactoring Challenge

## The Scenario
You inherited this file from a 1999 webmaster.
It uses UPPERCASE tags, visual IDs, and inline styles.

## Your Mission
Modernize this code following current best practices.

`,
    tasks: [
        {
            id: 1,
            description: 'Convert <DIV> and <SPAN> to lowercase',
            completed: false,
            regex: /<div[^>]*>/i,
            hint: {
                concept: 'Lowercase Tags',
                strategy: 'HTML5 standard uses lowercase tags.',
                solution: '<div>...</div>'
            }
        },
        {
            id: 2,
            description: 'Rename id="RED-BOX" to id="critical-alert"',
            completed: false,
            regex: /id="critical-alert"/,
            hint: {
                concept: 'Semantic IDs',
                strategy: 'IDs should describe purpose, not appearance.',
                solution: '<div id="critical-alert">'
            }
        },
        {
            id: 3,
            description: 'Rename class="BIG-TEXT" to class="alert-title"',
            completed: false,
            regex: /class="alert-title"/,
            hint: {
                concept: 'Semantic Classes',
                strategy: 'Classes should describe meaning, not styling.',
                solution: '<span class="alert-title">'
            }
        },
        {
            id: 4,
            description: 'Use lowercase for class and id names',
            completed: false,
            regex: /class="[a-z-]+".*id="[a-z-]+"|id="[a-z-]+".*class="[a-z-]+"/i,
            hint: {
                concept: 'Naming Convention',
                strategy: 'Use lowercase with hyphens (kebab-case).',
                solution: 'id="critical-alert" class="alert-title"'
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
    <title>Refactor Me</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- ============================================
        FIX THIS MESS FROM 1999
        1. Lowercase tags
        2. Semantic ID (describes purpose)
        3. Semantic class (describes meaning)
    ============================================ -->
    <DIV ID="RED-BOX">
        <SPAN CLASS="BIG-TEXT">SYSTEM FAILURE</SPAN>
    </DIV>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `/* Modern CSS - Uses semantic names */
#critical-alert {
    background: #ff4444;
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}

.alert-title {
    font-size: 1.5em;
    font-weight: bold;
}`
        }
    ]
};
