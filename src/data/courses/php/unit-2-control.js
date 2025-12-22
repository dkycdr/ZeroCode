
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2Control = {
    id: 'php-unit-2',
    title: 'Unit 2: Logic & Architecture',
    description: 'Master the flow of data. Arrays, Loops, and Conditionals.',
    items: [
        // 1. Deep Dive
        {
            id: 'php-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Associative Array 🗂️',
            duration: '15 min read',
            content: `
# Deep Dive: The Associative Array 🗂️

## 1. PHP's Superpower
In most C-like languages, Arrays are just numbered lists. In PHP, they are **Maps**.
You can use strings as keys:
\`\`\`php
$user = [
    "id" => 1,
    "name" => "Dwiky",
    "role" => "Admin"
];
\`\`\`

## 2. Multidimensional Arrays
This is how databases return rows. An Array of Arrays:
\`\`\`php
$users = [
    ["name" => "Alice", "role" => "User"],
    ["name" => "Bob", "role" => "Admin"]
];
\`\`\`

## 3. The Foreach Loop
Designed specifically for arrays.
\`\`\`php
foreach ($users as $user) {
    echo $user["name"];
}
\`\`\`
            `
        },
        // Lab
        {
            id: 'php-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Product Logic',
            duration: '25 min',
            content: `
# Lab 1: Product Logic

Process a list of products using loops and conditionals.

## The Mission
1.  **Define Array**: Create \`$products\` (Array of arrays with name/price).
2.  **Loop**: Use \`foreach\` to iterate.
3.  **Variable Assignment**: Check \`if ($p["price"] > 1000)\`.
4.  **Simulate**: Use \`echo\` to print the expensive items.

## Tip
Our simulator detects the \`foreach\` keyword and prints a sample output for you!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define: $products = [ ["name"=>"Laptop", "price"=>1200], ... ];',
                    completed: false,
                    regex: /\$products\s*=\s*\[.*name.*price/
                },
                {
                    id: 2,
                    description: 'Loop: foreach ($products as $p)',
                    completed: false,
                    regex: /foreach\s*\(\s*\$products\s+as\s+\$\w+\s*\)/
                },
                {
                    id: 3,
                    description: 'Check: if ($p["price"] > 1000)',
                    completed: false,
                    regex: /if\s*\(\s*\$\w+\s*\[['"]price['"]\]\s*>\s*1000\s*\)/
                },
                {
                    id: 4,
                    description: 'Output: echo $p["name"];',
                    completed: false,
                    regex: /echo\s+\$\w+\s*\[['"]name['"]\]/
                }
            ],
            files: [
                {
                    name: 'index.php',
                    language: 'php',
                    content: `<?php
// Lab 2: Logic Control

// 1. Define Products Array


// 2. Loop and Filter


?>`
                }
            ]
        },
        // Deep Dive 2
        {
            id: 'php-2-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Typed Functions 🛡️',
            duration: '15 min read',
            content: `
# Deep Dive: Typed Functions 🛡️

## 1. Modern PHP (8.0+)
Old PHP was chaotic. Modern PHP is strict.
Always define your input and output types.

## 2. Syntax
\`\`\`php
function add(int $a, int $b): int {
    return $a + $b;
}
\`\`\`
If you pass a string to this function, PHP throws a \`TypeError\`. This prevents bugs!

## 3. Void Return
If a function just echoes and returns nothing:
\`\`\`php
function greet(): void {
    echo "Hello";
}
\`\`\`
            `
        },
        // Quiz
        {
            id: 'php-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Logic Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'How do you access the value "Admin" in ["role" => "Admin"]?',
                    options: ['$arr[0]', '$arr["role"]', '$arr->role'],
                    correctIndex: 1,
                    explanation: 'Associative keys are accessed using square brackets and the key string.'
                }
            ]
        }
    ]
};
