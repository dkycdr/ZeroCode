import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3ArrowFunctions = {
    id: 'js-es6-unit-3',
    title: 'Arrow Functions',
    description: 'Master the concise syntax of Arrow Functions and understand how they handle "this".',
    items: [
        {
            id: 'js-es6-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Arrow Syntax & "this" 🎯',
            duration: '15 min read',
            content: `
# Arrow Functions 🎯

## 1. concise Syntax
Arrow functions allow you to write shorter function syntax.

### Traditional vs Arrow
\`\`\`javascript
// Traditional
function add(a, b) {
    return a + b;
}

// Arrow
const add = (a, b) => {
    return a + b;
};
\`\`\`

## 2. Implicit Return
If the function body has a single expression, you can remove the braces \`{}\` and the \`return\` keyword.

\`\`\`javascript
const add = (a, b) => a + b; // Returns result automatically
const square = x => x * x;   // Parentheses optional for single arg
\`\`\`

## 3. Lexical "this"
The biggest difference is how they handle the \`this\` keyword.
*   **Traditional Functions:** \`this\` depends on *how* the function is called.
*   **Arrow Functions:** \`this\` is inherited from the surrounding scope (Lexical Scoping). This is perfect for callbacks inside classes or event listeners.
            `
        },
        {
            id: 'js-es6-3-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab: Converting to Arrows',
            duration: '20 min',
            content: `
# Lab: Converting to Arrows

Refactor the legacy code to use modern Arrow Functions.

## The Mission
1.  Convert \`multiply\` to a concise arrow function (implicit return).
2.  Convert \`greet\` to an arrow function.
3.  Use \`map\` with an arrow function to double numbers.

## Legacy Code
\`\`\`javascript
function multiply(x, y) {
    return x * y;
}
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Convert multiply to arrow function',
                    completed: false,
                    regex: /const\s+multiply\s*=\s*\(\s*x\s*,\s*y\s*\)\s*=>\s*x\s*\*\s*y/
                },
                {
                    id: 2,
                    description: 'Convert greet to arrow function',
                    completed: false,
                    regex: /const\s+greet\s*=\s*name\s*=>/
                },
                {
                    id: 3,
                    description: 'Use map with arrow function',
                    completed: false,
                    regex: /nums\.map\s*\(\s*n\s*=>\s*n\s*\*\s*2\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// 1. Convert to arrow function (implicit return)
// function multiply(x, y) { return x * y; }
const multiply = 

// 2. Convert to arrow function
// function greet(name) { return "Hello " + name; }
const greet = 

const nums = [1, 2, 3];
// 3. Use map with arrow function to double nums
const doubled = nums.map(
`
                }
            ]
        },
        {
            id: 'js-es6-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Arrow Functions Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'When can you omit the "return" keyword in an arrow function?',
                    options: [
                        'Always',
                        'Never',
                        'When the body is a single expression (no braces)',
                        'When returning an object'
                    ],
                    correctIndex: 2,
                    explanation: 'Implicit return only works if you omit the curly braces {}. const add = (a,b) => a + b;'
                },
                {
                    id: 'q2',
                    question: 'how does "this" work in arrow functions?',
                    options: [
                        'It refers to the window object always',
                        'It is undefined',
                        'It captures "this" from the surrounding context (lexical)',
                        'It refers to the function itself'
                    ],
                    correctIndex: 2,
                    explanation: 'Arrow functions do not have their own "this". They inherit it from the parent scope, which fixes many "this" binding headers.'
                },
                {
                    id: 'q3',
                    question: 'Which of these is a valid arrow function?',
                    options: [
                        'x => x * 2',
                        'x -> x * 2',
                        'function(x) => x * 2',
                        '(x) => { x * 2 }'
                    ],
                    correctIndex: 0,
                    explanation: 'x => x * 2 is valid. Option 4 is missing "return" keyword inside braces.'
                }
            ]
        }
    ]
};
