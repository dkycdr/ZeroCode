
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Functions = {
    id: 'php-unit-5',
    title: 'Unit 5: Built-in Magic',
    description: 'Dates, JSON, and File Systems. The Standard Library.',
    items: [
        // 1. Deep Dive
        {
            id: 'php-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Dates & Time 📅',
            duration: '15 min read',
            content: `
# Deep Dive: Dates & Time 📅

## 1. The Date Function
PHP's \`date()\` is legendary for being simple.
\`\`\`php
echo date('Y-m-d H:i:s'); // "2024-03-21 14:00:00"
\`\`\`
*   **Y**: 4-digit year.
*   **m**: Month (01-12).
*   **d**: Day (01-31).

## 2. Unix Timestamps
A number of seconds since Jan 1, 1970.
\`time()\` gives you the current timestamp (e.g., 1704067200).

## 3. strtotime
Convert a human string to a timestamp.
\`\`\`php
$nextWeek = strtotime("+1 week");
echo date('Y-m-d', $nextWeek);
\`\`\`
            `
        },
        // Lab
        {
            id: 'php-5-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: JSON API Builder',
            duration: '25 min',
            content: `
# Lab 1: JSON API Builder

Create a simple API response using built-in functions.

## The Mission
1.  **Data**: Create associative array \`$data = ["status" => "ok", "time" => time()];\`.
2.  **Encode**: Convert to JSON string using \`json_encode\`.
3.  **Header**: Set content type (Mock instruction).
4.  **Output**: Echo the JSON.

## Modern PHP
JSON is the language of the web. PHP handles it natively.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Data: $data = ["status"=>"ok", ...];',
                    completed: false,
                    regex: /\$data\s*=\s*\[.*status.*ok/
                },
                {
                    id: 2,
                    description: 'Time: Add "time" => time() to array',
                    completed: false,
                    regex: /['"]time['"]\s*=>\s*time\(\)/
                },
                {
                    id: 3,
                    description: 'Encode: $json = json_encode($data);',
                    completed: false,
                    regex: /\$json\s*=\s*json_encode\s*\(\s*\$data\s*\)/
                },
                {
                    id: 4,
                    description: 'Output: echo $json;',
                    completed: false,
                    regex: /echo\s*\$json/
                }
            ],
            files: [
                {
                    name: 'index.php',
                    language: 'php',
                    content: `<?php
// Lab 5: JSON Responder

// 1. Create Data Array


// 2. Encode to JSON


// 3. Output


?>`
                }
            ]
        },
        // Quiz
        {
            id: 'php-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Functions Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What does json_encode() return?',
                    options: ['An Array', 'A JSON Object', 'A String', 'A File'],
                    correctIndex: 2,
                    explanation: 'It serializes PHP data structure into a JSON-formatted string.'
                }
            ]
        }
    ]
};
