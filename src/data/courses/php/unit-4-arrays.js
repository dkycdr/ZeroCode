
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Arrays = {
    id: 'php-unit-4',
    title: 'Unit 4: Arrays & Strings',
    description: 'Data Tetris. Manipulate, Explode, and Filter data structures.',
    items: [
        // 1. Deep Dive
        {
            id: 'php-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Array Power 📊',
            duration: '15 min read',
            content: `
# Deep Dive: Array Power 📊

## 1. Explode & Implode
PHP has weird names.
*   **explode()**: Split string into array. \`"a,b,c" -> ["a","b","c"]\`.
*   **implode()**: Join array into string. \`["a","b"] -> "a,b"\`.

## 2. Array Map
Transform every item in a list without a loop.
\`\`\`php
$nums = [1, 2, 3];
$doubles = array_map(fn($n) => $n * 2, $nums);
// [2, 4, 6]
\`\`\`

## 3. String Functions
*   **strlen($str)**: Length (Byte count).
*   **str_replace("bad", "good", $text)**: Find/Replace.
*   **trim($str)**: Remove whitespace.
            `
        },
        // Lab
        {
            id: 'php-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: CSV Parser',
            duration: '30 min',
            content: `
# Lab 1: CSV Parser

Convert a raw CSV string into a usable user format.

## The Mission
1.  **Raw Data**: \`$csv = "Dwiky,Alice,Bob";\`
2.  **Explode**: Convert to Array using \`explode\`.
3.  **Map**: Convert all names to UPPERCASE using \`array_map\` and \`strtoupper\`.
4.  **Implode**: Join them back with " | ".

## Tip
Use anonymous Arrow Functions (PHP 7.4+): \`fn($x) => ...\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Data: $csv = "Dwiky,Alice,Bob";',
                    completed: false,
                    regex: /\$csv\s*=\s*['"]Dwiky,Alice,Bob['"]/
                },
                {
                    id: 2,
                    description: 'Explode: $users = explode(",", $csv);',
                    completed: false,
                    regex: /\$users\s*=\s*explode\s*\(\s*['"],['"]\s*,\s*\$csv\s*\)/
                },
                {
                    id: 3,
                    description: 'Map: $upper = array_map("strtoupper", $users);',
                    completed: false,
                    regex: /\$upper\s*=\s*array_map\s*\(\s*['"]strtoupper['"]\s*,\s*\$users\s*\)/
                },
                {
                    id: 4,
                    description: 'Implode: echo implode(" | ", $upper);',
                    completed: false,
                    regex: /echo\s*implode\s*\(\s*['"]\s*\|\s*['"]\s*,\s*\$upper\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.php',
                    language: 'php',
                    content: `<?php
// Lab 4: CSV Data Processing

// 1. Raw CSV Data


// 2. Parse and Transform


// 3. Output Result


?>`
                }
            ]
        },
        // Quiz
        {
            id: 'php-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Arrays Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which function splits a string into an array?',
                    options: ['split()', 'explode()', 'slice()', 'cut()'],
                    correctIndex: 1,
                    explanation: 'explode(separator, string) breaks a string into an array parts.'
                }
            ]
        }
    ]
};
