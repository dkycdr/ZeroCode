// Modern JavaScript (ES6+) - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const jsEs6Course = {
    id: 'js-es6',
    title: 'Modern JavaScript (ES6+)',
    description: 'Master modern JavaScript features: Arrow functions, Destructuring, Promises, Async/Await, and more.',
    
    units: [
        // ============================================
        // UNIT 1: ES6 Syntax Basics
        // ============================================
        {
            id: 'es6-unit-1',
            title: 'ES6 Syntax Basics',
            description: 'Learn the new syntax features introduced in ES6',
            items: [
                {
                    id: 'es6-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is ES6?',
                    duration: '8 min read',
                    content: `
# What is ES6? (ECMAScript 2015)

## The Evolution of JavaScript

**ES6** (also called ES2015) is a major update to JavaScript released in 2015. It introduced many features that make JavaScript more powerful and easier to write.

## Why ES6 Matters

| Before ES6 | After ES6 |
|------------|-----------|
| \`var\` only | \`let\` and \`const\` |
| Function expressions | Arrow functions |
| String concatenation | Template literals |
| Callbacks | Promises & Async/Await |
| No classes | Class syntax |
| No modules | Import/Export |

## Browser Support

All modern browsers support ES6. For older browsers, use **Babel** to transpile.

## ES6+ Timeline

- **ES6 (2015)**: let/const, arrow functions, classes, promises
- **ES7 (2016)**: Array.includes(), exponentiation operator
- **ES8 (2017)**: async/await, Object.entries()
- **ES9 (2018)**: Rest/Spread for objects, Promise.finally()
- **ES10 (2019)**: Array.flat(), Object.fromEntries()
- **ES11 (2020)**: Optional chaining (?.), Nullish coalescing (??)

> 💡 Modern JavaScript = ES6 and beyond. This is what you'll use in real projects!
                    `
                },
                {
                    id: 'es6-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'let and const',
                    duration: '15 min',
                    content: `
# let and const - Modern Variable Declaration

## The Problem with var

\`var\` has issues that cause bugs:

\`\`\`javascript
// Problem 1: var is function-scoped, not block-scoped
if (true) {
    var x = 10;
}
console.log(x); // 10 - x leaks out of the block!

// Problem 2: var can be redeclared
var name = "John";
var name = "Jane"; // No error, but confusing!

// Problem 3: var is hoisted
console.log(y); // undefined (not error!)
var y = 5;
\`\`\`

## let - Block-Scoped Variables

\`let\` fixes these issues:

\`\`\`javascript
// Block-scoped
if (true) {
    let x = 10;
}
console.log(x); // ReferenceError: x is not defined

// Cannot redeclare
let name = "John";
let name = "Jane"; // SyntaxError!

// Not hoisted (temporal dead zone)
console.log(y); // ReferenceError!
let y = 5;
\`\`\`

## const - Constants

\`const\` is like \`let\` but cannot be reassigned:

\`\`\`javascript
const PI = 3.14159;
PI = 3; // TypeError: Assignment to constant variable!

const user = { name: "John" };
user.name = "Jane"; // OK! Object properties can change
user = {}; // TypeError! Cannot reassign the variable
\`\`\`

## When to Use What

| Keyword | Use When |
|---------|----------|
| \`const\` | Value won't be reassigned (DEFAULT CHOICE) |
| \`let\` | Value will change (counters, flags) |
| \`var\` | Never use in modern code! |

> 💡 **Best Practice**: Use \`const\` by default, \`let\` when needed, never \`var\`.

---

## Your Mission
Refactor old JavaScript code to use let and const.
                    `,
                    tasks: [
                        { id: 1, description: 'Change "var PI = 3.14159" to "const PI = 3.14159" (line 3) - PI should never change', completed: false, regex: /const\s+PI\s*=/ },
                        { id: 2, description: 'Change "var counter = 0" to "let counter = 0" (line 4) - counter will be reassigned', completed: false, regex: /let\s+counter\s*=/ },
                        { id: 3, description: 'Change "var name" to "const name" (line 5) - name is not reassigned', completed: false, regex: /const\s+name\s*=/ },
                        { id: 4, description: 'Change "var i" to "let i" in the for loop (line 8) - loop variable changes', completed: false, regex: /for\s*\(\s*let\s+i/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>let and const</title></head>
<body>
    <h1>Check Console (F12)</h1>
    <script src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: `// Refactor this code to use let and const

var PI = 3.14159;
var counter = 0;
var name = "ZeroCode";

// Loop counter should use let
for (var i = 0; i < 5; i++) {
    counter++;
}

console.log("PI:", PI);
console.log("Counter:", counter);
console.log("Name:", name);
` }
                    ]
                },
                {
                    id: 'es6-1-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Arrow Functions',
                    duration: '20 min',
                    content: `
# Arrow Functions - Shorter Syntax

## Traditional vs Arrow Functions

\`\`\`javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => {
    return a + b;
};

// Even shorter (implicit return)
const add = (a, b) => a + b;
\`\`\`

## Arrow Function Syntax

\`\`\`javascript
// Multiple parameters
const multiply = (a, b) => a * b;

// Single parameter (parentheses optional)
const double = x => x * 2;
const double = (x) => x * 2; // Also valid

// No parameters
const greet = () => "Hello!";

// Multiple lines (need braces and return)
const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return { sum, product };
};
\`\`\`

## Arrow Functions with Arrays

Arrow functions shine with array methods:

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// Traditional
const doubled = numbers.map(function(n) {
    return n * 2;
});

// Arrow function
const doubled = numbers.map(n => n * 2);

// Filter
const evens = numbers.filter(n => n % 2 === 0);

// Find
const firstBig = numbers.find(n => n > 3);

// Reduce
const sum = numbers.reduce((acc, n) => acc + n, 0);
\`\`\`

## 'this' Behavior

Arrow functions don't have their own \`this\`:

\`\`\`javascript
const obj = {
    name: "ZeroCode",
    
    // Traditional: 'this' refers to obj
    greet: function() {
        console.log("Hello, " + this.name);
    },
    
    // Arrow: 'this' refers to outer scope (window/undefined)
    greetArrow: () => {
        console.log("Hello, " + this.name); // undefined!
    }
};
\`\`\`

> ⚠️ Don't use arrow functions for object methods that need \`this\`!

---

## Your Mission
Convert traditional functions to arrow functions.
                    `,
                    tasks: [
                        { id: 1, description: 'Convert "function square(x)" to arrow function: "const square = x => x * x" (line 3)', completed: false, regex: /const\s+square\s*=.*=>/ },
                        { id: 2, description: 'Convert "function greet(name)" to arrow function: "const greet = name => ..." (line 7)', completed: false, regex: /const\s+greet\s*=.*=>/ },
                        { id: 3, description: 'Convert the map callback to arrow function: "numbers.map(n => n * 2)" (line 12)', completed: false, regex: /\.map\s*\(\s*\w+\s*=>/ },
                        { id: 4, description: 'Convert the filter callback to arrow function: "numbers.filter(n => n > 10)" (line 13)', completed: false, regex: /\.filter\s*\(\s*\w+\s*=>/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Arrow Functions</title></head>
<body><h1>Check Console (F12)</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `` },
                        { name: 'script.js', language: 'javascript', content: `// Convert these to arrow functions

function square(x) {
    return x * x;
}

function greet(name) {
    return "Hello, " + name + "!";
}

const numbers = [5, 10, 15, 20, 25];

// Convert these callbacks to arrow functions
const doubled = numbers.map(function(n) { return n * 2; });
const big = numbers.filter(function(n) { return n > 10; });

console.log("Square of 5:", square(5));
console.log("Greeting:", greet("ZeroCode"));
console.log("Doubled:", doubled);
console.log("Big numbers:", big);
` }
                    ]
                },
                {
                    id: 'es6-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'ES6 Basics Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the main difference between let and var?',
                            options: ['let is faster', 'let is block-scoped, var is function-scoped', 'let can only hold numbers', 'There is no difference'],
                            correctIndex: 1,
                            explanation: 'let is block-scoped (limited to {}) while var is function-scoped and can leak out of blocks.'
                        },
                        {
                            id: 'q2',
                            question: 'Which is the correct arrow function syntax?',
                            options: ['const add = (a, b) -> a + b', 'const add = (a, b) => a + b', 'const add = (a, b) >> a + b', 'const add = function(a, b) => a + b'],
                            correctIndex: 1,
                            explanation: 'Arrow functions use => (fat arrow) syntax: (params) => expression'
                        },
                        {
                            id: 'q3',
                            question: 'When should you use const?',
                            options: ['Only for numbers', 'When the variable will be reassigned', 'As your default choice for variables', 'Never'],
                            correctIndex: 2,
                            explanation: 'Use const by default. Only use let when you need to reassign the variable.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 2: Template Literals & Destructuring
        // ============================================
        {
            id: 'es6-unit-2',
            title: 'Template Literals & Destructuring',
            description: 'Cleaner string handling and data extraction',
            items: [
                {
                    id: 'es6-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Template Literals',
                    duration: '15 min',
                    content: `
# Template Literals - Better Strings

## The Old Way (String Concatenation)

\`\`\`javascript
const name = "John";
const age = 25;

// Ugly and error-prone
const message = "Hello, my name is " + name + " and I am " + age + " years old.";
\`\`\`

## The New Way (Template Literals)

Use backticks (\`) and \${} for variables:

\`\`\`javascript
const name = "John";
const age = 25;

// Clean and readable
const message = \`Hello, my name is \${name} and I am \${age} years old.\`;
\`\`\`

## Features of Template Literals

### 1. Multi-line Strings

\`\`\`javascript
// Old way
const html = "<div>\\n" +
             "  <h1>Title</h1>\\n" +
             "</div>";

// Template literal
const html = \`
<div>
    <h1>Title</h1>
</div>
\`;
\`\`\`

### 2. Expression Interpolation

\`\`\`javascript
const a = 10;
const b = 20;

console.log(\`Sum: \${a + b}\`);           // Sum: 30
console.log(\`Double: \${a * 2}\`);        // Double: 20
console.log(\`Is big: \${a > 5 ? 'Yes' : 'No'}\`); // Is big: Yes
\`\`\`

### 3. Function Calls Inside

\`\`\`javascript
const upper = str => str.toUpperCase();

console.log(\`Hello, \${upper('world')}\`); // Hello, WORLD
\`\`\`

### 4. Nested Templates

\`\`\`javascript
const items = ['Apple', 'Banana', 'Orange'];

const list = \`
<ul>
    \${items.map(item => \`<li>\${item}</li>\`).join('')}
</ul>
\`;
\`\`\`

---

## Your Mission
Refactor string concatenation to template literals.
                    `,
                    tasks: [
                        { id: 1, description: 'Convert greeting to template literal: const greeting = `Hello, ${name}!` (line 6)', completed: false, regex: /`[^`]*\$\{name\}[^`]*`/ },
                        { id: 2, description: 'Convert info to template literal with multiple variables: `${name} is ${age} years old` (line 7)', completed: false, regex: /`[^`]*\$\{name\}[^`]*\$\{age\}[^`]*`/ },
                        { id: 3, description: 'Convert calculation to template literal: `Sum: ${a + b}` (line 11)', completed: false, regex: /`[^`]*\$\{[^}]*\+[^}]*\}[^`]*`/ },
                        { id: 4, description: 'Create multi-line HTML string using template literal with backticks (line 14)', completed: false, regex: /`[\s\S]*<div>[\s\S]*<\/div>[\s\S]*`/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Template Literals</title></head>
<body><h1>Check Console</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `` },
                        { name: 'script.js', language: 'javascript', content: `// Convert to template literals

const name = "ZeroCode";
const age = 2;

const greeting = "Hello, " + name + "!";
const info = name + " is " + age + " years old.";

const a = 10;
const b = 20;
const calculation = "Sum: " + (a + b);

// Create multi-line HTML using template literal
const html = "<div>" + "<h1>Welcome</h1>" + "</div>";

console.log(greeting);
console.log(info);
console.log(calculation);
console.log(html);
` }
                    ]
                },
                {
                    id: 'es6-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Destructuring',
                    duration: '25 min',
                    content: `
# Destructuring - Extract Values Easily

## Array Destructuring

Extract values from arrays into variables:

\`\`\`javascript
const colors = ['red', 'green', 'blue'];

// Old way
const first = colors[0];
const second = colors[1];

// Destructuring
const [first, second, third] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'
console.log(third);  // 'blue'
\`\`\`

### Skip Elements

\`\`\`javascript
const [first, , third] = ['a', 'b', 'c'];
console.log(first);  // 'a'
console.log(third);  // 'c'
\`\`\`

### Default Values

\`\`\`javascript
const [a, b, c = 'default'] = ['x', 'y'];
console.log(c); // 'default'
\`\`\`

### Swap Variables

\`\`\`javascript
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
\`\`\`

## Object Destructuring

Extract properties from objects:

\`\`\`javascript
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com'
};

// Old way
const name = user.name;
const age = user.age;

// Destructuring
const { name, age, email } = user;
console.log(name);  // 'John'
console.log(age);   // 25
\`\`\`

### Rename Variables

\`\`\`javascript
const { name: userName, age: userAge } = user;
console.log(userName); // 'John'
\`\`\`

### Default Values

\`\`\`javascript
const { name, country = 'Unknown' } = user;
console.log(country); // 'Unknown'
\`\`\`

### Nested Destructuring

\`\`\`javascript
const user = {
    name: 'John',
    address: {
        city: 'New York',
        zip: '10001'
    }
};

const { address: { city, zip } } = user;
console.log(city); // 'New York'
\`\`\`

## Function Parameters

\`\`\`javascript
// Destructure in function parameters
function greet({ name, age }) {
    return \`Hello \${name}, you are \${age}\`;
}

greet({ name: 'John', age: 25 });
\`\`\`

---

## Your Mission
Use destructuring to extract data.
                    `,
                    tasks: [
                        { id: 1, description: 'Destructure array: const [first, second, third] = colors (line 5)', completed: false, regex: /const\s*\[\s*\w+\s*,\s*\w+\s*,\s*\w+\s*\]\s*=\s*colors/ },
                        { id: 2, description: 'Destructure object: const { name, age, email } = user (line 10)', completed: false, regex: /const\s*\{\s*name\s*,\s*age\s*,\s*email\s*\}\s*=\s*user/ },
                        { id: 3, description: 'Destructure with rename: const { name: userName } = user (line 13)', completed: false, regex: /const\s*\{[^}]*name\s*:\s*userName[^}]*\}/ },
                        { id: 4, description: 'Destructure nested: const { address: { city } } = person (line 20)', completed: false, regex: /const\s*\{[^}]*address\s*:\s*\{\s*city\s*\}[^}]*\}/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Destructuring</title></head>
<body><h1>Check Console</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `` },
                        { name: 'script.js', language: 'javascript', content: `// Practice Destructuring

const colors = ['red', 'green', 'blue'];
// Destructure the array
const first = colors[0]; // Change this line

const user = { name: 'John', age: 25, email: 'john@test.com' };
// Destructure the object
const name = user.name; // Change this line
const age = user.age;

// Destructure with rename (name -> userName)
const userName = user.name; // Change this line

const person = {
    name: 'Jane',
    address: {
        city: 'New York',
        zip: '10001'
    }
};
// Destructure nested object to get city
const city = person.address.city; // Change this line

console.log("Colors:", first);
console.log("User:", name, age);
console.log("Renamed:", userName);
console.log("City:", city);
` }
                    ]
                },
                {
                    id: 'es6-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Template & Destructuring Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Which character is used for template literals?',
                            options: ['Single quote \'', 'Double quote "', 'Backtick `', 'Forward slash /'],
                            correctIndex: 2,
                            explanation: 'Template literals use backticks (`) and allow ${} for interpolation.'
                        },
                        {
                            id: 'q2',
                            question: 'What does const { name } = user do?',
                            options: ['Creates a new object', 'Extracts name property from user', 'Deletes name from user', 'Renames user to name'],
                            correctIndex: 1,
                            explanation: 'Object destructuring extracts the name property from user into a variable called name.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 3: Spread & Rest Operators
        // ============================================
        {
            id: 'es6-unit-3',
            title: 'Spread & Rest Operators',
            description: 'Master the ... operator for arrays and objects',
            items: [
                {
                    id: 'es6-3-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Spread Operator',
                    duration: '20 min',
                    content: `
# Spread Operator (...) - Expand Elements

The spread operator (...) expands arrays or objects into individual elements.

## Spread with Arrays

### Copy Arrays

\`\`\`javascript
const original = [1, 2, 3];

// Old way (creates reference, not copy!)
const badCopy = original;
badCopy.push(4);
console.log(original); // [1, 2, 3, 4] - Original changed!

// Spread (creates true copy)
const goodCopy = [...original];
goodCopy.push(4);
console.log(original); // [1, 2, 3] - Original unchanged!
\`\`\`

### Merge Arrays

\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Old way
const merged = arr1.concat(arr2);

// Spread
const merged = [...arr1, ...arr2];
// [1, 2, 3, 4, 5, 6]

// Add elements while merging
const merged = [...arr1, 'middle', ...arr2];
// [1, 2, 3, 'middle', 4, 5, 6]
\`\`\`

### Spread in Function Calls

\`\`\`javascript
const numbers = [5, 10, 15];

// Old way
Math.max.apply(null, numbers);

// Spread
Math.max(...numbers); // 15
\`\`\`

## Spread with Objects

### Copy Objects

\`\`\`javascript
const user = { name: 'John', age: 25 };

// Spread copy
const userCopy = { ...user };
\`\`\`

### Merge Objects

\`\`\`javascript
const defaults = { theme: 'dark', lang: 'en' };
const userPrefs = { theme: 'light' };

const settings = { ...defaults, ...userPrefs };
// { theme: 'light', lang: 'en' }
// Later properties override earlier ones!
\`\`\`

### Add/Override Properties

\`\`\`javascript
const user = { name: 'John', age: 25 };

const updatedUser = { ...user, age: 26, email: 'john@test.com' };
// { name: 'John', age: 26, email: 'john@test.com' }
\`\`\`

---

## Your Mission
Use spread operator to manipulate arrays and objects.
                    `,
                    tasks: [
                        { id: 1, description: 'Copy array using spread: const copy = [...original] (line 5)', completed: false, regex: /const\s+copy\s*=\s*\[\s*\.\.\.original\s*\]/ },
                        { id: 2, description: 'Merge arrays using spread: const merged = [...arr1, ...arr2] (line 10)', completed: false, regex: /const\s+merged\s*=\s*\[\s*\.\.\.arr1\s*,\s*\.\.\.arr2\s*\]/ },
                        { id: 3, description: 'Copy object using spread: const userCopy = { ...user } (line 15)', completed: false, regex: /const\s+userCopy\s*=\s*\{\s*\.\.\.user\s*\}/ },
                        { id: 4, description: 'Merge objects using spread: const merged = { ...defaults, ...custom } (line 20)', completed: false, regex: /const\s+\w+\s*=\s*\{\s*\.\.\.defaults\s*,\s*\.\.\.custom\s*\}/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Spread Operator</title></head>
<body><h1>Check Console</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `` },
                        { name: 'script.js', language: 'javascript', content: `// Practice Spread Operator

const original = [1, 2, 3];
// Copy array using spread
const copy = original; // Fix this

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Merge arrays using spread
const merged = arr1.concat(arr2); // Fix this

const user = { name: 'John', age: 25 };
// Copy object using spread
const userCopy = user; // Fix this

const defaults = { theme: 'dark', lang: 'en' };
const custom = { theme: 'light' };
// Merge objects using spread
const settings = Object.assign({}, defaults, custom); // Fix this

console.log("Copy:", copy);
console.log("Merged:", merged);
console.log("User Copy:", userCopy);
console.log("Settings:", settings);
` }
                    ]
                },
                {
                    id: 'es6-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Rest Parameters',
                    duration: '15 min',
                    content: `
# Rest Parameters (...) - Collect Elements

Rest parameters collect multiple elements into an array. Same syntax (...) but opposite purpose!

## Rest in Functions

Collect any number of arguments:

\`\`\`javascript
// Old way (arguments object)
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, n) => acc + n, 0);
}

sum(1, 2, 3);       // 6
sum(1, 2, 3, 4, 5); // 15
\`\`\`

## Rest with Other Parameters

Rest must be last:

\`\`\`javascript
function greet(greeting, ...names) {
    return names.map(name => \`\${greeting}, \${name}!\`);
}

greet('Hello', 'John', 'Jane', 'Bob');
// ['Hello, John!', 'Hello, Jane!', 'Hello, Bob!']
\`\`\`

## Rest in Destructuring

### Arrays

\`\`\`javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(second); // 2
console.log(rest);  // [3, 4, 5]
\`\`\`

### Objects

\`\`\`javascript
const user = { name: 'John', age: 25, email: 'john@test.com', city: 'NYC' };

const { name, ...otherInfo } = user;
console.log(name);      // 'John'
console.log(otherInfo); // { age: 25, email: 'john@test.com', city: 'NYC' }
\`\`\`

## Spread vs Rest

| Spread | Rest |
|--------|------|
| Expands elements | Collects elements |
| Used in arrays/objects | Used in function params or destructuring |
| \`[...arr]\` | \`function(...args)\` |

---

## Your Mission
Use rest parameters in functions and destructuring.
                    `,
                    tasks: [
                        { id: 1, description: 'Add rest parameter to sum function: function sum(...numbers) (line 3)', completed: false, regex: /function\s+sum\s*\(\s*\.\.\.numbers\s*\)/ },
                        { id: 2, description: 'Use rest in destructuring: const [first, ...rest] = numbers (line 10)', completed: false, regex: /const\s*\[\s*first\s*,\s*\.\.\.rest\s*\]\s*=/ },
                        { id: 3, description: 'Use rest in object destructuring: const { name, ...others } = user (line 14)', completed: false, regex: /const\s*\{\s*name\s*,\s*\.\.\.others\s*\}\s*=/ },
                        { id: 4, description: 'Create function with mixed params: function log(prefix, ...messages) (line 18)', completed: false, regex: /function\s+log\s*\(\s*prefix\s*,\s*\.\.\.messages\s*\)/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Rest Parameters</title></head>
<body><h1>Check Console</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `` },
                        { name: 'script.js', language: 'javascript', content: `// Practice Rest Parameters

// Add rest parameter to collect all numbers
function sum(a, b) {
    return a + b;
}

const numbers = [1, 2, 3, 4, 5];
// Use rest to get first and remaining
const first = numbers[0];
const rest = numbers.slice(1);

const user = { name: 'John', age: 25, email: 'john@test.com' };
// Use rest to separate name from other properties
const name = user.name;

// Create function that takes prefix and any number of messages
function log(message) {
    console.log(message);
}

console.log("Sum:", sum(1, 2, 3, 4, 5));
console.log("First:", first, "Rest:", rest);
console.log("Name:", name);
log("[INFO]", "Server started", "Port 3000");
` }
                    ]
                },
                {
                    id: 'es6-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Spread & Rest Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does [...arr] do?',
                            options: ['Deletes the array', 'Creates a shallow copy of the array', 'Reverses the array', 'Sorts the array'],
                            correctIndex: 1,
                            explanation: 'Spread operator [...arr] creates a new array with all elements from arr (shallow copy).'
                        },
                        {
                            id: 'q2',
                            question: 'What is the difference between spread and rest?',
                            options: ['They are the same', 'Spread expands, rest collects', 'Rest expands, spread collects', 'Spread is for arrays, rest is for objects'],
                            correctIndex: 1,
                            explanation: 'Spread expands elements (unpacking), rest collects elements (packing).'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 4: Promises & Async/Await
        // ============================================
        {
            id: 'es6-unit-4',
            title: 'Promises & Async/Await',
            description: 'Handle asynchronous operations elegantly',
            items: [
                {
                    id: 'es6-4-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding Asynchronous JavaScript',
                    duration: '10 min read',
                    content: `
# Asynchronous JavaScript

## What is Asynchronous?

JavaScript is **single-threaded** - it can only do one thing at a time. But some operations take time:
- Fetching data from API
- Reading files
- Waiting for user input
- Timers

**Asynchronous** code lets JavaScript start a task and continue with other code while waiting.

## The Problem: Callback Hell

Before Promises, we used callbacks:

\`\`\`javascript
// Callback Hell (Pyramid of Doom)
getUser(userId, function(user) {
    getOrders(user.id, function(orders) {
        getOrderDetails(orders[0].id, function(details) {
            getShipping(details.shippingId, function(shipping) {
                console.log(shipping);
                // More nesting...
            });
        });
    });
});
\`\`\`

Problems:
- Hard to read
- Hard to debug
- Hard to handle errors
- "Pyramid of doom" shape

## The Solution: Promises

Promises provide a cleaner way to handle async operations:

\`\`\`javascript
getUser(userId)
    .then(user => getOrders(user.id))
    .then(orders => getOrderDetails(orders[0].id))
    .then(details => getShipping(details.shippingId))
    .then(shipping => console.log(shipping))
    .catch(error => console.error(error));
\`\`\`

Much cleaner! And even better with async/await:

\`\`\`javascript
async function getShippingInfo(userId) {
    try {
        const user = await getUser(userId);
        const orders = await getOrders(user.id);
        const details = await getOrderDetails(orders[0].id);
        const shipping = await getShipping(details.shippingId);
        console.log(shipping);
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

Looks like synchronous code! 🎉
                    `
                },
                {
                    id: 'es6-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Promises',
                    duration: '25 min',
                    content: `
# Promises - Handle Async Operations

## What is a Promise?

A Promise is an object representing the eventual completion or failure of an async operation.

## Promise States

1. **Pending**: Initial state, operation in progress
2. **Fulfilled**: Operation completed successfully
3. **Rejected**: Operation failed

## Creating a Promise

\`\`\`javascript
const myPromise = new Promise((resolve, reject) => {
    // Async operation
    const success = true;
    
    if (success) {
        resolve('Operation successful!');
    } else {
        reject('Operation failed!');
    }
});
\`\`\`

## Using Promises

### .then() - Handle Success

\`\`\`javascript
myPromise.then(result => {
    console.log(result); // 'Operation successful!'
});
\`\`\`

### .catch() - Handle Errors

\`\`\`javascript
myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error));
\`\`\`

### .finally() - Always Runs

\`\`\`javascript
myPromise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log('Done!'));
\`\`\`

## Chaining Promises

\`\`\`javascript
fetch('/api/user')
    .then(response => response.json())
    .then(user => fetch(\`/api/orders/\${user.id}\`))
    .then(response => response.json())
    .then(orders => console.log(orders))
    .catch(error => console.error(error));
\`\`\`

## Promise.all() - Wait for Multiple

\`\`\`javascript
const promise1 = fetch('/api/users');
const promise2 = fetch('/api/products');
const promise3 = fetch('/api/orders');

Promise.all([promise1, promise2, promise3])
    .then(([users, products, orders]) => {
        console.log('All data loaded!');
    })
    .catch(error => console.error('One failed:', error));
\`\`\`

## Promise.race() - First to Complete

\`\`\`javascript
Promise.race([promise1, promise2])
    .then(result => console.log('First to finish:', result));
\`\`\`

---

## Your Mission
Create and use Promises.
                    `,
                    tasks: [
                        { id: 1, description: 'Create a Promise that resolves after 1 second: new Promise((resolve, reject) => ...) (line 3)', completed: false, regex: /new\s+Promise\s*\(\s*\(\s*resolve\s*,\s*reject\s*\)\s*=>/ },
                        { id: 2, description: 'Use .then() to handle the resolved value (line 10)', completed: false, regex: /\.then\s*\(/ },
                        { id: 3, description: 'Use .catch() to handle errors (line 11)', completed: false, regex: /\.catch\s*\(/ },
                        { id: 4, description: 'Use Promise.all() to wait for multiple promises (line 20)', completed: false, regex: /Promise\.all\s*\(/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Promises</title></head>
<body><h1>Check Console</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `` },
                        { name: 'script.js', language: 'javascript', content: `// Practice Promises

// Create a Promise that resolves after 1 second
const delayedHello = // Create Promise here

// Use .then() and .catch()
delayedHello
    // Add .then() to log the result
    // Add .catch() to handle errors

// Simulate API calls
const getUser = () => new Promise(resolve => 
    setTimeout(() => resolve({ id: 1, name: 'John' }), 500)
);
const getOrders = () => new Promise(resolve => 
    setTimeout(() => resolve(['Order 1', 'Order 2']), 500)
);

// Use Promise.all to get both
// Promise.all([...]).then(...)

console.log("Promises created!");
` }
                    ]
                },
                {
                    id: 'es6-4-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Async/Await',
                    duration: '25 min',
                    content: `
# Async/Await - Cleaner Async Code

## What is Async/Await?

Async/await is syntactic sugar over Promises. It makes async code look synchronous!

## Basic Syntax

\`\`\`javascript
// Mark function as async
async function fetchData() {
    // await pauses until Promise resolves
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
}
\`\`\`

## Async Functions Always Return Promises

\`\`\`javascript
async function greet() {
    return 'Hello!';
}

greet().then(msg => console.log(msg)); // 'Hello!'
\`\`\`

## Error Handling with Try/Catch

\`\`\`javascript
async function fetchUser(id) {
    try {
        const response = await fetch(\`/api/users/\${id}\`);
        
        if (!response.ok) {
            throw new Error('User not found');
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}
\`\`\`

## Multiple Awaits

### Sequential (One after another)

\`\`\`javascript
async function getAll() {
    const user = await getUser();      // Wait 1 sec
    const orders = await getOrders();  // Wait 1 sec
    // Total: 2 seconds
}
\`\`\`

### Parallel (At the same time)

\`\`\`javascript
async function getAll() {
    const [user, orders] = await Promise.all([
        getUser(),
        getOrders()
    ]);
    // Total: 1 second (parallel)
}
\`\`\`

## Arrow Function with Async

\`\`\`javascript
const fetchData = async () => {
    const response = await fetch('/api/data');
    return response.json();
};
\`\`\`

## Real-World Example

\`\`\`javascript
async function loadDashboard() {
    try {
        // Show loading
        showSpinner();
        
        // Fetch data in parallel
        const [user, notifications, stats] = await Promise.all([
            fetchUser(),
            fetchNotifications(),
            fetchStats()
        ]);
        
        // Update UI
        renderDashboard({ user, notifications, stats });
    } catch (error) {
        showError('Failed to load dashboard');
    } finally {
        hideSpinner();
    }
}
\`\`\`

---

## Your Mission
Convert Promise chains to async/await.
                    `,
                    tasks: [
                        { id: 1, description: 'Create async function: async function fetchUser() { ... } (line 3)', completed: false, regex: /async\s+function\s+fetchUser/ },
                        { id: 2, description: 'Use await to get response: const response = await fetch(...) (line 5)', completed: false, regex: /const\s+response\s*=\s*await\s+fetch/ },
                        { id: 3, description: 'Use await to parse JSON: const data = await response.json() (line 6)', completed: false, regex: /const\s+data\s*=\s*await\s+response\.json/ },
                        { id: 4, description: 'Add try/catch for error handling (wrap await calls)', completed: false, regex: /try\s*\{[\s\S]*await[\s\S]*\}\s*catch/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Async/Await</title></head>
<body><h1>Check Console</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `` },
                        { name: 'script.js', language: 'javascript', content: `// Convert to async/await

// Convert this Promise chain to async/await
function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(data => {
            console.log('User:', data.name);
            return data;
        })
        .catch(error => console.error('Error:', error));
}

// Rewrite as async function with try/catch
// async function fetchUser() {
//     try {
//         const response = await fetch(...)
//         const data = await response.json()
//         return data
//     } catch (error) {
//         console.error(error)
//     }
// }

fetchUser();
` }
                    ]
                },
                {
                    id: 'es6-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Async/Await Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does the await keyword do?',
                            options: ['Creates a new Promise', 'Pauses execution until Promise resolves', 'Cancels a Promise', 'Makes code run faster'],
                            correctIndex: 1,
                            explanation: 'await pauses the async function execution until the Promise resolves, then returns the resolved value.'
                        },
                        {
                            id: 'q2',
                            question: 'Where can you use await?',
                            options: ['Anywhere', 'Only inside async functions', 'Only in callbacks', 'Only with fetch'],
                            correctIndex: 1,
                            explanation: 'await can only be used inside functions marked with async keyword.'
                        },
                        {
                            id: 'q3',
                            question: 'How do you handle errors with async/await?',
                            options: ['.catch()', 'try/catch block', '.error()', 'onError callback'],
                            correctIndex: 1,
                            explanation: 'Use try/catch blocks to handle errors in async/await code.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 5: Modules & Classes
        // ============================================
        {
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
                        { name: 'utils.js', language: 'javascript', content: `// Export constants and functions

const API_URL = 'https://api.example.com';

function formatDate(date) {
    return date.toLocaleDateString();
}

// Export default class
class App {
    constructor(name) {
        this.name = name;
    }
    
    run() {
        console.log(\`\${this.name} is running!\`);
    }
}

// Add exports here
` },
                        { name: 'main.js', language: 'javascript', content: `// Import from utils.js
// import { API_URL, formatDate } from './utils.js';
// import App from './utils.js';

console.log('API URL:', API_URL);
console.log('Today:', formatDate(new Date()));

const app = new App('ZeroCode');
app.run();
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

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
console.log(account.#balance);     // SyntaxError!
\`\`\`

---

## Your Mission
Create classes with inheritance.
                    `,
                    tasks: [
                        { id: 1, description: 'Create a class: class Product { constructor(name, price) { ... } } (line 3)', completed: false, regex: /class\s+Product\s*\{[\s\S]*constructor\s*\(/ },
                        { id: 2, description: 'Add a method: getInfo() { return `${this.name}: $${this.price}` } (line 8)', completed: false, regex: /getInfo\s*\(\s*\)\s*\{/ },
                        { id: 3, description: 'Create child class: class DigitalProduct extends Product { ... } (line 13)', completed: false, regex: /class\s+DigitalProduct\s+extends\s+Product/ },
                        { id: 4, description: 'Call parent constructor: super(name, price) in child class (line 15)', completed: false, regex: /super\s*\(\s*name\s*,\s*price\s*\)/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>ES6 Classes</title></head>
<body><h1>Check Console</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `` },
                        { name: 'script.js', language: 'javascript', content: `// Create ES6 Classes

// Create Product class with constructor(name, price)
// Add getInfo() method

// Create DigitalProduct class that extends Product
// Add downloadUrl property
// Override getInfo() to include download link

// Test your classes
const laptop = new Product('Laptop', 999);
console.log(laptop.getInfo());

const ebook = new DigitalProduct('JavaScript Guide', 29, 'https://example.com/book');
console.log(ebook.getInfo());
` }
                    ]
                },
                {
                    id: 'es6-5-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Modules & Classes Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the difference between named and default exports?',
                            options: ['No difference', 'Named exports use {}, default does not', 'Default is faster', 'Named exports are deprecated'],
                            correctIndex: 1,
                            explanation: 'Named exports require {} when importing, default exports do not. A module can have multiple named exports but only one default.'
                        },
                        {
                            id: 'q2',
                            question: 'What does super() do in a child class?',
                            options: ['Creates a new class', 'Calls the parent constructor', 'Deletes the parent', 'Makes the class static'],
                            correctIndex: 1,
                            explanation: 'super() calls the parent class constructor. It must be called before using "this" in a child constructor.'
                        }
                    ]
                }
            ]
        }
    ]
};

export default jsEs6Course;
