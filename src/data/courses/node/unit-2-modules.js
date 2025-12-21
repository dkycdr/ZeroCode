import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2Modules = {
    id: 'node-unit-2',
    title: 'Unit 2: The Module System Revolution',
    description: 'Master the chaotic world of CommonJS vs ES Modules. Learn how to structure code, export logic, and manage dependencies effectively.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES
        {
            id: 'node-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: CommonJS (The Legacy) 📦',
            duration: '15 min read',
            content: `
# Deep Dive: CommonJS (The Legacy) 📦

## 1. The Original Standard
Before ES6 (2015), JavaScript had no official module system. Node.js adopted **CommonJS**.
*   **Keyword**: \`require()\`
*   **Export**: \`module.exports\`
*   **Nature**: Synchronous / Dynamic.

## 2. Dynamic Loading
CommonJS is dynamic. You can do this:
\`\`\`javascript
if (userIsAdmin) {
  const adminTools = require('./admin'); // Loaded ONLY if needed!
}
\`\`\`
This "lazy loading" is a powerful feature of CJS.

## 3. The Pattern
\`\`\`javascript
// math.js
module.exports = { add: (a,b) => a+b };

// app.js
const { add } = require('./math');
\`\`\`
            `
        },
        {
            id: 'node-2-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: ES Modules (The Future) 🚀',
            duration: '15 min read',
            content: `
# Deep Dive: ES Modules (The Future) 🚀

## 1. The Standard
ESM (\`import\` / \`export\`) is the official JS standard. Node.js fully supports it now.
*   **Keyword**: \`import ... from ...\`
*   **Export**: \`export default\` / \`export const\`
*   **Nature**: Static / Async capability.

## 2. Enabling ESM in Node
Node.js treats \`.js\` files as CommonJS by default.
To use ESM, you must:
1.  Use \`.mjs\` extension, OR
2.  Add \`"type": "module"\` to your \`package.json\`.

## 3. Top-Level Await
ESM allows you to use \`await\` at the top level (outside async functions). CommonJS does NOT.
\`\`\`javascript
// data.js (ESM)
const data = await fetch('...'); // Works!
export default data;
\`\`\`
            `
        },
        {
            id: 'node-2-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: NPM & Dependencies 🧶',
            duration: '20 min read',
            content: `
# Deep Dive: NPM & Dependencies 🧶

## 1. node_modules
The infinite black hole. This is where downloaded packages live.
**Rule**: Never commit \`node_modules\` to Git. Use \`.gitignore\`.

## 2. package.json vs package-lock.json
*   **package.json**: The manifesto. Lists what you *want* (e.g., "express version 4 or higher").
*   **package-lock.json**: The proof. Lists exactly what you *got* (e.g., "express version 4.18.2 from typical.registry"). It ensures every developer installs the exact same bytes.

## 3. Semantic Versioning (SemVer)
\`"express": "^4.18.2"\`
*   **^ (Caret)**: Allow updates that do not break the API (Minor/Patch). Safe.
*   **~ (Tilde)**: Allow only bug fixes (Patch). Very safe.
*   **No symbol**: Exact version only. Strict.
            `
        },
        {
            id: 'node-2-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Wrappers & IIFE 🎁',
            duration: '10 min read',
            content: `
# Deep Dive: Wrappers & IIFE 🎁

## 1. The Module Wrapper
How does Node.js give you variables like \`__dirname\` or \`exports\` without polluting the global scope?
It wraps your code inside a hidden function!

\`\`\`javascript
(function(exports, require, module, __filename, __dirname) {
    // YOUR CODE GOES HERE
});
\`\`\`

## 2. Scope Isolation
This is why variables defined in one file don't leak to another file, unlike basic \`<script>\` tags in legacy HTML.
Each module is its own little universe.
            `
        },

        // PART 2: PRACTICAL LABS
        {
            id: 'node-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: CommonJS Exports',
            duration: '15 min',
            content: `
# Lab 1: CommonJS Exports

Create a utility library using the classic CommonJS pattern.

## The Mission
1.  **Define**: A function \`calculateArea\`.
2.  **Define**: A constant \`PI\`.
3.  **Export**: Both using \`module.exports object\`.
4.  **Import**: Use \`require\` in main file.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Export object: module.exports = { ... }.',
                    completed: false,
                    regex: /module\.exports\s*=\s*{\s*calc/
                },
                {
                    id: 2,
                    description: 'Import: require("./geometry").',
                    completed: false,
                    regex: /require\s*\(\s*['"]\.\/geometry['"]\s*\)/
                }
            ],
            files: [
                {
                    name: 'geometry.js',
                    language: 'javascript',
                    content: `const PI = 3.14159;
function calculateArea(r) {
    return PI * r * r;
}

// Task 1: Export them
`
                },
                {
                    name: 'app.js',
                    language: 'javascript',
                    content: `// Task 2: Import geometry
const geo = null;

console.log(geo.calculateArea(5));
`
                }
            ]
        },
        {
            id: 'node-2-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: ES Modules Migration',
            duration: '20 min',
            content: `
# Lab 2: ES Modules Migration

Convert the previous code to modern ES Modules.

## The Mission
1.  **Config**: Assume type="module" is set.
2.  **Export**: Use named exports \`export const\`.
3.  **Import**: Use \`import { ... } from ...\`.
4.  **Extension**: Don't forget the \`.js\` extension! It is mandatory in Node ESM imports.

## Strictness
Node ESM is stricter than Webpack/Babel. You cannot omit the extension.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Export constant.',
                    completed: false,
                    regex: /export\s+const\s+PI/
                },
                {
                    id: 2,
                    description: 'Import with extension.',
                    completed: false,
                    regex: /from\s*['"]\.\/geometry\.js['"]/
                }
            ],
            files: [
                {
                    name: 'geometry.js',
                    language: 'javascript',
                    content: `// Task 1: Named exports
const PI = 3.14;
function area(r) { return PI * r * r }
`
                },
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Task 2: Import named exports "PI" and "area"
// DONT FORGET .js extension!

console.log(area(10));
`
                }
            ]
        },
        {
            id: 'node-2-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Circular Dependencies',
            duration: '25 min',
            content: `
# Lab 3: Circular Dependencies

What happens when A requires B, and B requires A?
In CommonJS, you might get an unfinished copy. In ESM, it handles it better but still dangerous.

## The Mission
1.  **A requires B**.
2.  **B requires A**.
3.  **Observe**: One of them will likely be empty or undefined depending on load order.
4.  **Fix**: Extract shared logic to C.

## Refactoring
The solution to circular deps is almost always "Create a third module".
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Refactor: Require shared.js in A.',
                    completed: false,
                    regex: /require\s*\(\s*['"]\.\/shared['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Refactor: Require shared.js in B.',
                    completed: false,
                    regex: /require\s*\(\s*['"]\.\/shared['"]\s*\)/
                }
            ],
            files: [
                {
                    name: 'shared.js',
                    language: 'javascript',
                    content: `// The solution: Put shared data here
module.exports = { data: "Shared Data" };
`
                },
                {
                    name: 'moduleA.js',
                    language: 'javascript',
                    content: `// OLD: const B = require('./moduleB');
// Task 1: Use shared
`
                }
            ]
        },
        {
            id: 'node-2-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Using NPM Libraries',
            duration: '20 min',
            content: `
# Lab 4: Using NPM Libraries

Let's use a popular library: \`color\` or \`chalk\`.

## The Mission
1.  **Require**: Import the library.
2.  **Use**: Call a function from it.
3.  **Learn**: This simulates how you use 99% of external code.

## Package.json
Normally you run \`npm install\`. Here, assume it's pre-installed.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import chalk (or similar).',
                    completed: false,
                    regex: /require\s*\(\s*['"]chalk['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Use it: chalk.blue().',
                    completed: false,
                    regex: /chalk\.(blue|red|green)/
                }
            ],
            files: [
                {
                    name: 'logger.js',
                    language: 'javascript',
                    content: `// Task 1: Import 'chalk'
const chalk = require('chalk'); 

// Task 2: Log something blue
console.log( "Hello World" ); // Wrap this string
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Module System Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which syntax allows for "Tree Shaking" (removing unused code during build)?',
                    options: [
                        'CommonJS (require)',
                        'ES Modules (import/export)',
                        'Global Variables',
                        'IIFE'
                    ],
                    correctIndex: 1,
                    explanation: 'Because ESM is static (analyzable at compile time without running code), bundlers can safely remove unused exports.'
                },
                {
                    id: 'q2',
                    question: 'What is the file extension for explicit ES Modules in Node.js?',
                    options: [
                        '.jsx',
                        '.mjs',
                        '.node',
                        '.es6'
                    ],
                    correctIndex: 1,
                    explanation: '.mjs forces Node to treat the file as a Module, even if package.json does not say module.'
                },
                {
                    id: 'q3',
                    question: 'Can you use CommonJS "require" inside an ES Module?',
                    options: [
                        'Yes, always',
                        'No, require is not defined in ESM scope',
                        'Yes, but only for JSON',
                        'Yes, if you use a polyfill'
                    ],
                    correctIndex: 1,
                    explanation: 'In ESM, `require`, `__dirname`, and `__filename` do not exist. You must use `import` or create your own require via `createRequire`.'
                },
                {
                    id: 'q4',
                    question: 'Why should you NOT commit node_modules?',
                    options: [
                        'It is illegal',
                        'It is too large and can be regenerated from package.json',
                        'It contains viruses',
                        'It breaks GitHub'
                    ],
                    correctIndex: 1,
                    explanation: 'node_modules can contain thousands of files. Sharing the recipe (package.json) is lighter and cleaner.'
                },
                {
                    id: 'q5',
                    question: 'What does the caret (^) mean in ^1.2.3?',
                    options: [
                        'Install exactly 1.2.3',
                        'Install latest major version (2.0.0 allowed)',
                        'Install latest minor/patch (1.3.0 allowed, but not 2.0.0)',
                        'Install beta versions'
                    ],
                    correctIndex: 2,
                    explanation: 'Caret allows updates to the most recent Minor version, but freezes the Major version to prevent breaking changes.'
                }
            ]
        }
    ]
};
