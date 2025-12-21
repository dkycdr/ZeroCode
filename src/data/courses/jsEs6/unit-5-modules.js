import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Modules = {
    id: 'es6-unit-5',
    title: 'Modules & Classes',
    description: 'Organize code with ES6 modules and classes',
    items: [
                {
                    id: 'es6-5-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'ES6 Modules',
                    duration: '20 min',
                    content: `
# ES6 Modules - Organize Your Code

## Why Modules?

Before modules, all JavaScript shared one global scope. This caused:
- Name collisions
- Hard to manage dependencies
- No code organization

## Export

### Named Exports

\`\`\`javascript
// utils.js
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export const multiply = (a, b) => a * b;
\`\`\`

### Export at End

\`\`\`javascript
// utils.js
const PI = 3.14159;
function add(a, b) { return a + b; }
const multiply = (a, b) => a * b;

export { PI, add, multiply };
\`\`\`

### Default Export

\`\`\`javascript
// User.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}
\`\`\`

## Import

### Named Imports

\`\`\`javascript
// main.js
import { PI, add, multiply } from './utils.js';

console.log(PI);        // 3.14159
console.log(add(2, 3)); // 5
\`\`\`

### Import with Alias

\`\`\`javascript
import { add as sum, multiply as mult } from './utils.js';

console.log(sum(2, 3)); // 5
\`\`\`

### Import All

\`\`\`javascript
import * as utils from './utils.js';

console.log(utils.PI);
console.log(utils.add(2, 3));
\`\`\`

### Default Import

\`\`\`javascript
import User from './User.js';

const user = new User('John');
\`\`\`

### Mixed Imports

\`\`\`javascript
import User, { PI, add } from './module.js';
\`\`\`

## Module in HTML

\`\`\`html
<script type="module" src="main.js"></script>
\`\`\`

---

## Your Mission
Create and use ES6 modules.
                    `,
                    tasks: [
                        { id: 1, description: 'Export a constant: export const API_URL = "..." (line 2 in utils.js)', completed: false, regex: /export\s+const\s+API_URL/ },
                        { id: 2, description: 'Export a function: export function formatDate(date) { ... } (line 4 in utils.js)', completed: false, regex: /export\s+function\s+formatDate/ },
                        { id: 3, description: 'Import named exports: import { API_URL, formatDate } from "./utils.js" (line 1 in main.js)', completed: false, regex: /import\s*\{[^}]*API_URL[^}]*\}\s*from/ },
                        { id: 4, description: 'Use default export: export default class App { ... } (line 10 in utils.js)', completed: false, regex: /export\s+default/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>ES6 Modules</title></head>
<body>
    <h1>ES6 Modules</h1>
    <p>Check Console (F12)</p>
    <script type="module" src="main.js"></script>
</body>
</html>` },
                        { name: 'utils.js', language: 'javascript', content: `// YOUR TASK: Add exports to this file
//
// 1. Export constant: export const API_URL = '...'
// 2. Export function: export function formatDate(date) { }
// 3. Export default class: export default class App { }
//
// TIPS:
// - Named export: export const/function/class name
// - Default export: export default (only one per file)
// - Can export at declaration or at end of file

const API_URL = 'https://api.example.com';

function formatDate(date) {
    return date.toLocaleDateString();
}

class App {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(\`\${this.name} is running!\`);
    }
}

// Add exports here:
// export { API_URL, formatDate };
// export default App;
` },
                        { name: 'main.js', language: 'javascript', content: `// YOUR TASK: Import from utils.js
//
// 1. Named import: import { API_URL, formatDate } from './utils.js'
// 2. Default import: import App from './utils.js'
// 3. Or combined: import App, { API_URL, formatDate } from './utils.js'
//
// TIPS:
// - Named imports use { }
// - Default import has no { }
// - Can rename: import { API_URL as url } from '...'

// Add your imports here:


// Then use them:
// console.log('API URL:', API_URL);
// console.log('Today:', formatDate(new Date()));
// const app = new App('ZeroCode');
// app.run();
` }
                    ]
                },
                {
                    id: 'es6-5-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'ES6 Classes',
                    duration: '25 min',
                    content: `
# ES6 Classes - Object-Oriented JavaScript

## Class Syntax

\`\`\`javascript
class User {
    // Constructor - called when creating new instance
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Method
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }

    // Getter
    get info() {
        return \`\${this.name} (\${this.email})\`;
    }

    // Setter
    set info(value) {
        [this.name, this.email] = value.split(',');
    }

    // Static method (called on class, not instance)
    static createGuest() {
        return new User('Guest', 'guest@example.com');
    }
}

// Usage
const user = new User('John', 'john@example.com');
console.log(user.greet());  // "Hello, I'm John"
console.log(user.info);     // "John (john@example.com)"

const guest = User.createGuest();
\`\`\`

## Inheritance

\`\`\`javascript
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(\`\${this.name} makes a sound\`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }

    speak() {
        console.log(\`\${this.name} barks!\`);
    }

    fetch() {
        console.log(\`\${this.name} fetches the ball\`);
    }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // "Rex barks!"
dog.fetch(); // "Rex fetches the ball"
\`\`\`

## Private Fields (ES2022)

\`\`\`javascript
class BankAccount {
    #balance = 0; // Private field

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}
\`\`\`
                    `
                }
            ]
};
