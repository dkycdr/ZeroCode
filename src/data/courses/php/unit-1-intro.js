
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Intro = {
    id: 'php-unit-1',
    title: 'Unit 1: The PHP Engine',
    description: 'Understand the language that powers 77% of the web. Learn how server-side rendering works.',
    items: [
        // 1. Deep Dive
        {
            id: 'php-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Server-Side Rendering (SSR) 🖥️',
            duration: '15 min read',
            content: `
# Deep Dive: Server-Side Rendering (SSR) 🖥️

## 1. The Request Lifecycle
When you visit a PHP site:
1.  **Browser** sends HTTP GET request.
2.  **Server** (Apache/Nginx) intercepts the \`.php\` file.
3.  **PHP Engine** runs the code, talks to databases, and generates HTML.
4.  **Response**: The browser receives *only* the HTML result. It never sees the \`<?php\`.

## 2. Why "Backend"?
Because it runs on the server, PHP can safely:
*   Connect to MySQL databases (User credentials hidden).
*   Process payments (API keys hidden).
*   Read file systems.
*   Validate data before it enters your system.

## 3. The "Pure" Response
If you \`echo "Hello";\`, the browser sees:
\`\`\`html
Hello
\`\`\`
If you \`echo "<h1>Hello</h1>";\`, the browser renders a Heading.
            `
        },
        {
            id: 'php-1-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Types & Variables 💲',
            duration: '15 min read',
            content: `
# Deep Dive: Types & Variables 💲

## 1. The Dollar Sign ($)
Every variable starts with \`$\`.
*   \`$name\`: A variable.
*   \`name\`: An undefined constant (Error).

## 2. Interpolation
PHP's "Double Quote Magic":
\`\`\`php
$status = "Active";
echo "User is $status"; // Prints "User is Active"
\`\`\`
Single quotes don't do this:
\`\`\`php
echo 'User is $status'; // Prints "User is $status"
\`\`\`

## 3. Basic Types
*   **String**: \`"Hello"\`
*   **Int**: \`42\`
*   **Float**: \`3.14\`
*   **Bool**: \`true\` (echoes "1") or \`false\` (echoes "")
            `
        },
        // Lab 1
        {
            id: 'php-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: First Script',
            duration: '20 min',
            content: `
# Lab 1: First Script

Write a script that outputs dynamic HTML.

## The Mission
1.  **Create String**: \`$title = "Hello World";\`
2.  **Create Integer**: \`$year = 2024;\`
3.  **Output**: Use \`echo\` to print \`<h1>$title</h1>\`.
4.  **Run**: Execute \`php index.php\` to see the rendered variable!

## Tip
Use double quotes \`"\` so the variable \`$title\` expands to its value.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Variable: $title = "Hello World";',
                    completed: false,
                    regex: /\$title\s*=\s*['"]Hello World['"]/
                },
                {
                    id: 2,
                    description: 'Variable: $year = 2024;',
                    completed: false,
                    regex: /\$year\s*=\s*2024/
                },
                {
                    id: 3,
                    description: 'Echo: echo "<h1>$title</h1>";',
                    completed: false,
                    regex: /echo\s*['"]<h1>\$title<\/h1>['"]/
                }
            ],
            files: [
                {
                    name: 'index.php',
                    language: 'php',
                    content: `<?php
// Lab 1: My First PHP Script

// 1. Create variables


// 2. Output HTML


?>`
                }
            ]
        },
        // Quiz
        {
            id: 'php-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 1 Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What happens if you view the source code of a PHP page in the browser?',
                    options: [
                        'You see the PHP variables',
                        'You see the raw <?php tags',
                        'You only see the HTML output',
                        'You see the database password'
                    ],
                    correctIndex: 2,
                    explanation: 'The PHP engine processes the code on the server and sends only the result (HTML) to the client.'
                }
            ]
        }
    ]
};
