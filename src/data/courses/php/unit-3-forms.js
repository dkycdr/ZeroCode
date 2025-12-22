
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Forms = {
    id: 'php-unit-3',
    title: 'Unit 3: Forms & Data',
    description: 'The Request Lifecycle. Handle user input securely using Superglobals.',
    items: [
        // 1. Deep Dive: Global State
        {
            id: 'php-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Superglobals 🌍',
            duration: '15 min read',
            content: `
# Deep Dive: Superglobals 🌍

## 1. Magic Variables
PHP has variables that are always available, anywhere.
*   \`$_GET\`: URL Parameters (\`?search=apple\`).
*   \`$_POST\`: Form Data (Hidden).
*   \`$_SERVER\`: Headers, Paths, Method.
*   \`$_SESSION\`: User Login state.

## 2. Statelessness
The Web is stateless. PHP forgets everything after the script finishes.
To remember a user (Login), you must use **Sessions** or **Cookies** to pass an ID back and forth.

## 3. GET vs POST
*   **GET**: For reading data (Search). Visible in URL.
*   **POST**: For changing data (Login). Hidden in body.
            `
        },
        // 2. Lab
        {
            id: 'php-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Secure Input',
            duration: '30 min',
            content: `
# Lab 1: Secure Input

Process a form submission and sanitize the output.

## The Mission
1.  **Check Method**: Use \`$_SERVER["REQUEST_METHOD"]\` to detect POST.
2.  **Get Input**: Capture \`$name\` from \`$_POST\`.
3.  **Sanitize**: use \`htmlspecialchars($name)\` to prevent XSS.
4.  **Display**: Echo the welcome message.

## Security Warning ⚠️
Never echo user input directly! A user could type \`<script>stealCookies()</script>\`.
\`htmlspecialchars\` converts special characters to HTML entities.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Check Method: if ($_SERVER["REQUEST_METHOD"] === "POST")',
                    completed: false,
                    regex: /\$_SERVER\s*\[['"]REQUEST_METHOD['"]\]\s*===\s*['"]POST['"]/
                },
                {
                    id: 2,
                    description: 'Get Input: $name = $_POST["name"];',
                    completed: false,
                    regex: /\$name\s*=\s*\$_POST\s*\[['"]name['"]\]/
                },
                {
                    id: 3,
                    description: 'Sanitize: $safeName = htmlspecialchars($name);',
                    completed: false,
                    regex: /\$safeName\s*=\s*htmlspecialchars\s*\(\s*\$name\s*\)/
                },
                {
                    id: 4,
                    description: 'Echo: echo "Welcome $safeName";',
                    completed: false,
                    regex: /echo\s*['"]Welcome\s*\$safeName['"]/
                }
            ],
            files: [
                {
                    name: 'index.php',
                    language: 'php',
                    content: `<?php
// Lab 3: Secure Form Handling

// 1. Check if method is POST


// 2. Get and Sanitize Name


?>`
                }
            ]
        },
        // Quiz
        {
            id: 'php-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Forms Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why is POST better for passwords than GET?',
                    options: [
                        'It is encrypted by default',
                        'It is not visible in the URL bar or browser history',
                        'It is faster',
                        'GET cannot handle strings'
                    ],
                    correctIndex: 1,
                    explanation: 'GET parameters stay in history logs. POST data is sent in the body, which is transient.'
                }
            ]
        }
    ]
};
