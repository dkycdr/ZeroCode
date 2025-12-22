
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6OOP = {
    id: 'php-unit-6',
    title: 'Unit 6: OOP Basics',
    description: 'Object-Oriented Programming. Blueprints, Classes, and Objects.',
    items: [
        // 1. Deep Dive
        {
            id: 'php-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Thinking in Objects 🧊',
            duration: '20 min read',
            content: `
# Deep Dive: Thinking in Objects 🧊

## 1. The Blueprint (Class)
A **Class** is a blueprint. It's not a real thing yet.
\`\`\`php
class User {
    public string $name;
    
    public function __construct(string $name) {
        $this->name = $name;
    }
}
\`\`\`

## 2. The Thing (Object)
An **Object** is an instance of the blueprint.
\`\`\`php
$u1 = new User("Alice");
$u2 = new User("Bob");
\`\`\`

## 3. $this
Inside the class, \`$this\` refers to "The specific object we are working on right now".
            `
        },
        // Lab
        {
            id: 'php-6-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Class Architect',
            duration: '35 min',
            content: `
# Lab 1: Class Architect

Build a robust User class with encapsulation.

## The Mission
1.  **Define Class**: \`class Product { ... }\`
2.  **Property**: \`public float $price;\`
3.  **Method**: \`public function setPrice(float $p) { $this->price = $p; }\`
4.  **Instantiate**: \`$laptop = new Product(); $laptop->setPrice(1000);\`

## Modern PHP 8 Note
You can use Constructor Promotion to short-hand property definition!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Class: class Product',
                    completed: false,
                    regex: /class\s+Product/
                },
                {
                    id: 2,
                    description: 'Property: public float $price;',
                    completed: false,
                    regex: /public\s+float\s+\$price;/
                },
                {
                    id: 3,
                    description: 'Method: setPrice(float $p)',
                    completed: false,
                    regex: /public\s+function\s+setPrice\s*\(float\s+\$\w+\)/
                },
                {
                    id: 4,
                    description: 'Use: $laptop = new Product();',
                    completed: false,
                    regex: /\$\w+\s*=\s*new\s+Product\(\)/
                }
            ],
            files: [
                {
                    name: 'index.php',
                    language: 'php',
                    content: `<?php
// Lab 6: OOP

// 1. Define Product Class


// 2. Use the Class


?>`
                }
            ]
        },
        // Quiz
        {
            id: 'php-6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'OOP Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What keyword refers to the current object instance?',
                    options: ['self', '$me', '$this', '$it'],
                    correctIndex: 2,
                    explanation: '$this is a special variable that grants access to the current object properties.'
                }
            ]
        }
    ]
};
