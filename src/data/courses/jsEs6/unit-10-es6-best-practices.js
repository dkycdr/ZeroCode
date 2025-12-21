import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit10ES6BestPractices = {
    id: 'js-es6-unit-10',
    title: 'ES6+ Best Practices - Writing Modern JavaScript',
    description: 'Master ES6+ best practices: modern patterns, performance optimization, code organization, and professional ES6+ development',
    items: [
        {
            id: 'js-es6-10-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'ES6+ Best Practices - The Complete Guide',
            duration: '30 min read',
            content: `
# ES6+ Best Practices - The Complete Guide

## What are ES6+ Best Practices?

**ES6+ Best Practices** are proven patterns and techniques for writing clean, efficient, and maintainable modern JavaScript code.

### Real-World Analogy: Modern vs Old Tools

Think of ES6+ best practices like using modern tools:

**Old Tools (ES5):**
- Manual screwdriver (var, function)
- Slow and tedious
- More room for error
- Harder to maintain

**Modern Tools (ES6+):**
- Power drill (const/let, arrow functions)
- Fast and efficient
- Less error-prone
- Easier to maintain

### Why ES6+ Best Practices Matter

**Without Best Practices:**
\`\`\`javascript
// ❌ Old, messy code
var data = [1,2,3,4,5];
var doubled = [];
for(var i=0;i<data.length;i++){
    doubled.push(data[i]*2);
}
var filtered = [];
for(var i=0;i<doubled.length;i++){
    if(doubled[i]>5){
        filtered.push(doubled[i]);
    }
}
\`\`\`

**With Best Practices:**
\`\`\`javascript
// ✅ Modern, clean code
const data = [1, 2, 3, 4, 5];
const result = data
    .map(x => x * 2)
    .filter(x => x > 5);
\`\`\`

**Benefits:**
- ✅ Less code
- ✅ More readable
- ✅ Easier to maintain
- ✅ Fewer bugs
- ✅ Better performance

## Best Practice 1: Use const and let

### Always Prefer const

\`\`\`javascript
// ❌ Bad - using var
var name = 'John';
var age = 25;

// ❌ Bad - using let when value doesn't change
let PI = 3.14159;
let MAX_USERS = 100;

// ✅ Good - use const for values that don't change
const name = 'John';
const age = 25;
const PI = 3.14159;
const MAX_USERS = 100;
\`\`\`

**Why const?**
- Prevents accidental reassignment
- Makes code more predictable
- Shows intent clearly
- Compiler can optimize better

### Use let for Variables That Change

\`\`\`javascript
// ✅ Good - use let for counters
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// ✅ Good - use let for values that change
let score = 0;
score += 10;
score += 5;

// ✅ Good - use let in conditionals
let message;
if (isLoggedIn) {
    message = 'Welcome back!';
} else {
    message = 'Please log in';
}
\`\`\`

### Never Use var

\`\`\`javascript
// ❌ Bad - var has function scope (confusing)
function example() {
    if (true) {
        var x = 10;
    }
    console.log(x);  // 10 (accessible outside block!)
}

// ✅ Good - let has block scope (clear)
function example() {
    if (true) {
        let x = 10;
    }
    console.log(x);  // Error: x is not defined
}
\`\`\`

## Best Practice 2: Arrow Functions

### Use Arrow Functions for Callbacks

\`\`\`javascript
// ❌ Bad - verbose function syntax
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(x) {
    return x * 2;
});

// ✅ Good - concise arrow function
const doubled = numbers.map(x => x * 2);

// ✅ Good - clear and readable
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);
\`\`\`

### When NOT to Use Arrow Functions

\`\`\`javascript
// ❌ Bad - arrow function as method (loses 'this')
const obj = {
    name: 'John',
    greet: () => {
        console.log(\`Hello, \${this.name}\`);  // 'this' is undefined!
    }
};

// ✅ Good - regular method
const obj = {
    name: 'John',
    greet() {
        console.log(\`Hello, \${this.name}\`);  // Works!
    }
};

// ❌ Bad - arrow function as constructor
const Person = (name) => {
    this.name = name;  // Error!
};

// ✅ Good - class or regular function
class Person {
    constructor(name) {
        this.name = name;
    }
}
\`\`\`

## Best Practice 3: Template Literals

### Use Template Literals for Strings

\`\`\`javascript
const name = 'John';
const age = 25;

// ❌ Bad - string concatenation
const message = 'Hello, ' + name + '! You are ' + age + ' years old.';

// ✅ Good - template literal
const message = \`Hello, \${name}! You are \${age} years old.\`;

// ✅ Good - multi-line strings
const html = \`
    <div class="user">
        <h2>\${name}</h2>
        <p>Age: \${age}</p>
    </div>
\`;

// ✅ Good - expressions in templates
const price = 100;
const tax = 0.08;
console.log(\`Total: $\${(price * (1 + tax)).toFixed(2)}\`);
\`\`\`

## Best Practice 4: Destructuring

### Use Destructuring for Objects

\`\`\`javascript
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// ❌ Bad - repetitive property access
const name = user.name;
const age = user.age;
const email = user.email;
const city = user.address.city;

// ✅ Good - destructuring
const { name, age, email, address: { city } } = user;

// ✅ Good - function parameters
function displayUser({ name, age, email }) {
    console.log(\`\${name}, \${age}, \${email}\`);
}

displayUser(user);
\`\`\`

### Use Destructuring for Arrays

\`\`\`javascript
const colors = ['red', 'green', 'blue'];

// ❌ Bad - index access
const first = colors[0];
const second = colors[1];
const third = colors[2];

// ✅ Good - array destructuring
const [first, second, third] = colors;

// ✅ Good - swapping variables
let a = 1, b = 2;
[a, b] = [b, a];  // Swap without temp variable

// ✅ Good - rest pattern
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head);  // 1
console.log(tail);  // [2, 3, 4, 5]
\`\`\`

## Best Practice 5: Spread and Rest Operators

### Use Spread for Arrays

\`\`\`javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// ❌ Bad - concat
const combined = arr1.concat(arr2);

// ✅ Good - spread
const combined = [...arr1, ...arr2];

// ✅ Good - copying arrays
const copy = [...arr1];

// ✅ Good - adding elements
const withExtra = [0, ...arr1, 4];  // [0, 1, 2, 3, 4]
\`\`\`

### Use Spread for Objects

\`\`\`javascript
const user = { name: 'John', age: 25 };
const address = { city: 'NYC', country: 'USA' };

// ❌ Bad - Object.assign
const combined = Object.assign({}, user, address);

// ✅ Good - spread
const combined = { ...user, ...address };

// ✅ Good - updating properties
const updated = { ...user, age: 26 };

// ✅ Good - adding properties
const withEmail = { ...user, email: 'john@example.com' };
\`\`\`

### Use Rest for Function Parameters

\`\`\`javascript
// ❌ Bad - arguments object
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// ✅ Good - rest parameters
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // 15
\`\`\`

## Best Practice 6: Array Methods

### Use map, filter, reduce

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// ❌ Bad - imperative loops
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}

const evens = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    }
}

// ✅ Good - declarative methods
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, x) => acc + x, 0);

// ✅ Good - chaining
const result = numbers
    .filter(x => x > 2)
    .map(x => x * 2)
    .reduce((acc, x) => acc + x, 0);
\`\`\`

### Use find, some, every

\`\`\`javascript
const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
];

// ✅ Good - find first match
const user = users.find(u => u.id === 2);

// ✅ Good - check if any match
const hasAdult = users.some(u => u.age >= 18);

// ✅ Good - check if all match
const allAdults = users.every(u => u.age >= 18);

// ✅ Good - find index
const index = users.findIndex(u => u.name === 'Jane');
\`\`\`

## Best Practice 7: Async/Await

### Use async/await Over Promises

\`\`\`javascript
// ❌ Bad - promise chains
function fetchUserData(userId) {
    return fetchUser(userId)
        .then(user => {
            return fetchPosts(user.id);
        })
        .then(posts => {
            return fetchComments(posts[0].id);
        })
        .then(comments => {
            return comments;
        })
        .catch(error => {
            console.error(error);
        });
}

// ✅ Good - async/await
async function fetchUserData(userId) {
    try {
        const user = await fetchUser(userId);
        const posts = await fetchPosts(user.id);
        const comments = await fetchComments(posts[0].id);
        return comments;
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

### Parallel Async Operations

\`\`\`javascript
// ❌ Bad - sequential (slow)
async function fetchAll() {
    const user = await fetchUser(1);      // Wait
    const posts = await fetchPosts(1);    // Wait
    const comments = await fetchComments(1);  // Wait
    return { user, posts, comments };
}

// ✅ Good - parallel (fast)
async function fetchAll() {
    const [user, posts, comments] = await Promise.all([
        fetchUser(1),
        fetchPosts(1),
        fetchComments(1)
    ]);
    return { user, posts, comments };
}
\`\`\`

## Best Practice 8: Object Shorthand

### Use Property Shorthand

\`\`\`javascript
const name = 'John';
const age = 25;
const email = 'john@example.com';

// ❌ Bad - repetitive
const user = {
    name: name,
    age: age,
    email: email
};

// ✅ Good - shorthand
const user = { name, age, email };
\`\`\`

### Use Method Shorthand

\`\`\`javascript
// ❌ Bad - function keyword
const obj = {
    greet: function() {
        console.log('Hello');
    },
    calculate: function(x, y) {
        return x + y;
    }
};

// ✅ Good - method shorthand
const obj = {
    greet() {
        console.log('Hello');
    },
    calculate(x, y) {
        return x + y;
    }
};
\`\`\`

## Best Practice 9: Default Parameters

### Use Default Parameters

\`\`\`javascript
// ❌ Bad - manual defaults
function greet(name) {
    name = name || 'Guest';
    console.log(\`Hello, \${name}\`);
}

// ✅ Good - default parameters
function greet(name = 'Guest') {
    console.log(\`Hello, \${name}\`);
}

// ✅ Good - complex defaults
function createUser({
    name,
    age = 18,
    role = 'user',
    isActive = true
} = {}) {
    return { name, age, role, isActive };
}
\`\`\`

## Best Practice 10: Modules

### Use ES6 Modules

\`\`\`javascript
// ❌ Bad - global variables
// file1.js
var utils = {
    add: function(a, b) { return a + b; }
};

// file2.js
console.log(utils.add(1, 2));  // Depends on global

// ✅ Good - ES6 modules
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './utils.js';
console.log(add(1, 2));
\`\`\`

### Named vs Default Exports

\`\`\`javascript
// ✅ Good - named exports (multiple)
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './utils.js';

// ✅ Good - default export (single main export)
// User.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}

// main.js
import User from './User.js';
\`\`\`

## Performance Best Practices

### Avoid Unnecessary Computations

\`\`\`javascript
// ❌ Bad - recalculates every time
function Component() {
    const expensiveValue = calculateExpensiveValue();
    return expensiveValue;
}

// ✅ Good - memoize/cache
const cache = new Map();
function Component() {
    if (!cache.has('expensiveValue')) {
        cache.set('expensiveValue', calculateExpensiveValue());
    }
    return cache.get('expensiveValue');
}
\`\`\`

### Use Optional Chaining

\`\`\`javascript
const user = {
    name: 'John',
    address: {
        city: 'NYC'
    }
};

// ❌ Bad - verbose null checks
const zipCode = user && user.address && user.address.zipCode;

// ✅ Good - optional chaining
const zipCode = user?.address?.zipCode;

// ✅ Good - with arrays
const firstPost = user?.posts?.[0];

// ✅ Good - with functions
const result = obj?.method?.();
\`\`\`

### Use Nullish Coalescing

\`\`\`javascript
// ❌ Bad - || treats 0 and '' as falsy
const count = userInput || 10;  // 0 becomes 10!
const name = userName || 'Guest';  // '' becomes 'Guest'!

// ✅ Good - ?? only for null/undefined
const count = userInput ?? 10;  // 0 stays 0
const name = userName ?? 'Guest';  // '' stays ''
\`\`\`

## Code Organization Best Practices

### One Concept Per File

\`\`\`javascript
// ❌ Bad - everything in one file
// app.js (1000 lines)
class User { }
class Post { }
class Comment { }
function validateEmail() { }
function formatDate() { }
// ... everything mixed together

// ✅ Good - organized files
// User.js
export class User { }

// Post.js
export class Post { }

// validators.js
export const validateEmail = () => { };

// formatters.js
export const formatDate = () => { };
\`\`\`

### Group Related Code

\`\`\`javascript
// ✅ Good - group by feature
src/
  features/
    auth/
      Login.js
      Register.js
      authUtils.js
    posts/
      PostList.js
      PostDetail.js
      postUtils.js
\`\`\`

## Key Takeaways

- ✅ Use const by default, let when needed, never var
- ✅ Use arrow functions for callbacks
- ✅ Use template literals for strings
- ✅ Use destructuring for objects and arrays
- ✅ Use spread/rest operators
- ✅ Use array methods (map, filter, reduce)
- ✅ Use async/await over promise chains
- ✅ Use object shorthand
- ✅ Use default parameters
- ✅ Use ES6 modules
- ✅ Use optional chaining and nullish coalescing
- ✅ Organize code by feature

## What's Next?

In the next lesson, you'll refactor code to apply all these ES6+ best practices!

Now you write professional modern JavaScript! 🚀✨
            `
        },
        {
            id: 'js-es6-10-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Refactoring to Modern JavaScript',
            duration: '45 min',
            content: `
# Refactoring to Modern JavaScript

## Project Overview

Refactor old ES5 code to modern ES6+ using best practices.

## Project 1: User Management System

### Before (ES5):
\`\`\`javascript
// ❌ Old ES5 code
var UserManager = function() {
    this.users = [];
};

UserManager.prototype.addUser = function(name, age, email) {
    var user = {
        id: this.users.length + 1,
        name: name,
        age: age,
        email: email,
        createdAt: new Date()
    };
    this.users.push(user);
    console.log('User added: ' + name);
};

UserManager.prototype.findUser = function(id) {
    for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].id === id) {
            return this.users[i];
        }
    }
    return null;
};

UserManager.prototype.getAdults = function() {
    var adults = [];
    for (var i = 0; i < this.users.length; i++) {
        if (this.users[i].age >= 18) {
            adults.push(this.users[i]);
        }
    }
    return adults;
};
\`\`\`

### After (ES6+):
\`\`\`javascript
// ✅ Modern ES6+ code
class UserManager {
    constructor() {
        this.users = [];
    }
    
    addUser(name, age, email) {
        const user = {
            id: this.users.length + 1,
            name,
            age,
            email,
            createdAt: new Date()
        };
        
        this.users.push(user);
        console.log(\`✅ User added: \${name}\`);
    }
    
    findUser(id) {
        return this.users.find(user => user.id === id) || null;
    }
    
    getAdults() {
        return this.users.filter(user => user.age >= 18);
    }
    
    getUserNames() {
        return this.users.map(user => user.name);
    }
    
    hasUsers() {
        return this.users.length > 0;
    }
    
    displayUsers() {
        if (!this.hasUsers()) {
            console.log('📋 No users');
            return;
        }
        
        console.log('📋 Users:');
        this.users.forEach(({ id, name, age, email }) => {
            console.log(\`  \${id}. \${name} (\${age}) - \${email}\`);
        });
    }
}

// Usage
const manager = new UserManager();
manager.addUser('John', 25, 'john@example.com');
manager.addUser('Jane', 17, 'jane@example.com');
manager.addUser('Bob', 30, 'bob@example.com');

manager.displayUsers();

const adults = manager.getAdults();
console.log(\`👥 Adults: \${adults.length}\`);

// Output:
// ✅ User added: John
// ✅ User added: Jane
// ✅ User added: Bob
// 📋 Users:
//   1. John (25) - john@example.com
//   2. Jane (17) - jane@example.com
//   3. Bob (30) - bob@example.com
// 👥 Adults: 2
\`\`\`

**Improvements:**
- ✅ Class syntax instead of constructor function
- ✅ Arrow functions for callbacks
- ✅ Template literals for strings
- ✅ Object shorthand
- ✅ Destructuring in forEach
- ✅ Array methods (find, filter, map)
- ✅ Const/let instead of var

## Project 2: Data Processing Pipeline

### Before (ES5):
\`\`\`javascript
// ❌ Old ES5 code
function processData(data) {
    var filtered = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].active === true) {
            filtered.push(data[i]);
        }
    }
    
    var transformed = [];
    for (var i = 0; i < filtered.length; i++) {
        var item = {
            id: filtered[i].id,
            name: filtered[i].name,
            value: filtered[i].value * 2
        };
        transformed.push(item);
    }
    
    var sum = 0;
    for (var i = 0; i < transformed.length; i++) {
        sum += transformed[i].value;
    }
    
    return {
        items: transformed,
        total: sum,
        count: transformed.length
    };
}
\`\`\`

### After (ES6+):
\`\`\`javascript
// ✅ Modern ES6+ code
const processData = (data) => {
    const processed = data
        .filter(item => item.active)
        .map(({ id, name, value }) => ({
            id,
            name,
            value: value * 2
        }));
    
    const total = processed.reduce((sum, item) => sum + item.value, 0);
    
    return {
        items: processed,
        total,
        count: processed.length
    };
};

// Usage
const data = [
    { id: 1, name: 'Item 1', value: 10, active: true },
    { id: 2, name: 'Item 2', value: 20, active: false },
    { id: 3, name: 'Item 3', value: 30, active: true },
    { id: 4, name: 'Item 4', value: 40, active: true }
];

const result = processData(data);
console.log('📊 Result:', result);

// Output:
// 📊 Result: {
//   items: [
//     { id: 1, name: 'Item 1', value: 20 },
//     { id: 3, name: 'Item 3', value: 60 },
//     { id: 4, name: 'Item 4', value: 80 }
//   ],
//   total: 160,
//   count: 3
// }
\`\`\`

**Improvements:**
- ✅ Arrow function
- ✅ Method chaining (filter → map)
- ✅ Destructuring in map
- ✅ Reduce for sum
- ✅ Object shorthand in return
- ✅ Const instead of var
- ✅ More concise and readable

## Project 3: Async Data Fetcher

### Before (ES5 with Promises):
\`\`\`javascript
// ❌ Old promise chains
function fetchUserData(userId) {
    return fetchUser(userId)
        .then(function(user) {
            console.log('User fetched:', user.name);
            return fetchPosts(user.id);
        })
        .then(function(posts) {
            console.log('Posts fetched:', posts.length);
            return fetchComments(posts[0].id);
        })
        .then(function(comments) {
            console.log('Comments fetched:', comments.length);
            return comments;
        })
        .catch(function(error) {
            console.error('Error:', error.message);
            throw error;
        });
}
\`\`\`

### After (ES6+ with async/await):
\`\`\`javascript
// ✅ Modern async/await
const fetchUserData = async (userId) => {
    try {
        const user = await fetchUser(userId);
        console.log(\`✅ User fetched: \${user.name}\`);
        
        const posts = await fetchPosts(user.id);
        console.log(\`✅ Posts fetched: \${posts.length}\`);
        
        const comments = await fetchComments(posts[0].id);
        console.log(\`✅ Comments fetched: \${comments.length}\`);
        
        return { user, posts, comments };
    } catch (error) {
        console.error(\`❌ Error: \${error.message}\`);
        throw error;
    }
};

// Parallel fetching
const fetchAllData = async (userId) => {
    try {
        const [user, posts, comments] = await Promise.all([
            fetchUser(userId),
            fetchPosts(userId),
            fetchComments(userId)
        ]);
        
        console.log('✅ All data fetched!');
        return { user, posts, comments };
    } catch (error) {
        console.error(\`❌ Error: \${error.message}\`);
        throw error;
    }
};

// Usage (simulated)
const fetchUser = (id) => Promise.resolve({ id, name: 'John' });
const fetchPosts = (id) => Promise.resolve([{ id: 1, title: 'Post 1' }]);
const fetchComments = (id) => Promise.resolve([{ id: 1, text: 'Comment 1' }]);

fetchUserData(1);
fetchAllData(1);

// Output:
// ✅ User fetched: John
// ✅ Posts fetched: 1
// ✅ Comments fetched: 1
// ✅ All data fetched!
\`\`\`

**Improvements:**
- ✅ Async/await instead of promise chains
- ✅ Arrow function
- ✅ Template literals
- ✅ Try/catch for errors
- ✅ Object shorthand in return
- ✅ Promise.all for parallel operations
- ✅ More readable and maintainable

## Your Mission

Refactor old code to modern ES6+:
1. Convert constructor functions to classes
2. Replace var with const/let
3. Use arrow functions
4. Use template literals
5. Use destructuring
6. Use array methods
7. Use async/await

Master modern JavaScript!

Now you write professional ES6+ code! 🚀✨
            `,
            tasks: [
                { id: 1, description: 'Replace all var declarations with const or let appropriately', completed: false, regex: /const\s+\w+|let\s+\w+/ },
                { id: 2, description: 'Convert at least one regular function to arrow function syntax', completed: false, regex: /const\s+\w+\s*=\s*\([^)]*\)\s*=>/ },
                { id: 3, description: 'Use template literals with ${} for string interpolation', completed: false, regex: /`[^`]*\$\{[^}]+\}[^`]*`/ }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ES6+ Best Practices</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>ES6+ Best Practices</h1>
        <div id="console-output"></div>
    </div>
    <script src="script.js"></script>
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `body { font-family: 'Segoe UI', sans-serif; margin: 0; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
.container { max-width: 900px; margin: 0 auto; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 20px; padding: 30px; box-shadow: 0 8px 32px rgba(0,0,0,0.1); }
h1 { color: white; margin-top: 0; }
#console-output { background: #1e1e1e; color: #d4d4d4; padding: 20px; border-radius: 8px; font-family: 'Courier New', monospace; min-height: 300px; white-space: pre-wrap; overflow-y: auto; max-height: 500px; }`
                },
                {
                    name: 'script.js',
                    language: 'javascript',
                    content: `// Task 1: Replace var with const or let
// Task 2: Convert regular functions to arrow functions
// Task 3: Use template literals for string interpolation

`
                }
            ]
        },
        {
            id: 'js-es6-10-3',
            type: CONTENT_TYPES.QUIZ,
            title: 'ES6+ Best Practices Knowledge Check',
            duration: '5 min',
            questions: [
                {
                    id: 'es6bp-q1',
                    question: 'When should you use const vs let?',
                    options: [
                        'Always use let',
                        'Use const by default, let only when value needs to change',
                        'Use const for objects only',
                        'They are the same'
                    ],
                    correctAnswer: 1,
                    explanation: 'Use const by default for values that won\'t be reassigned. Only use let when you need to reassign the variable. This makes code more predictable.'
                },
                {
                    id: 'es6bp-q2',
                    question: 'When should you NOT use arrow functions?',
                    options: [
                        'Never use them',
                        'As object methods or constructors (they don\'t have their own "this")',
                        'In callbacks',
                        'For short functions'
                    ],
                    correctAnswer: 1,
                    explanation: 'Arrow functions don\'t have their own "this" binding, so they shouldn\'t be used as object methods or constructors. Use regular functions or method shorthand instead.'
                },
                {
                    id: 'es6bp-q3',
                    question: 'What is the benefit of template literals?',
                    options: [
                        'Faster execution',
                        'Cleaner string interpolation and multi-line strings',
                        'Less memory',
                        'Better security'
                    ],
                    correctAnswer: 1,
                    explanation: 'Template literals make string interpolation cleaner with ${} syntax and support multi-line strings without concatenation or escape characters.'
                },
                {
                    id: 'es6bp-q4',
                    question: 'What is object shorthand?',
                    options: [
                        'Shorter object names',
                        'Writing { name } instead of { name: name }',
                        'Compressed objects',
                        'Abbreviated properties'
                    ],
                    correctAnswer: 1,
                    explanation: 'Object shorthand lets you write { name, age } instead of { name: name, age: age } when property name matches variable name.'
                },
                {
                    id: 'es6bp-q5',
                    question: 'Why use array methods over for loops?',
                    options: [
                        'They are faster',
                        'More declarative, readable, and less error-prone',
                        'They use less memory',
                        'Required in ES6+'
                    ],
                    correctAnswer: 1,
                    explanation: 'Array methods (map, filter, reduce) are more declarative (what, not how), more readable, and less error-prone than manual for loops.'
                },
                {
                    id: 'es6bp-q6',
                    question: 'What is the advantage of async/await over promise chains?',
                    options: [
                        'Faster execution',
                        'More readable, looks like synchronous code',
                        'Uses less memory',
                        'No error handling needed'
                    ],
                    correctAnswer: 1,
                    explanation: 'Async/await makes asynchronous code look synchronous, making it much more readable and easier to understand than promise chains.'
                },
                {
                    id: 'es6bp-q7',
                    question: 'What is optional chaining (?.) used for?',
                    options: [
                        'Making properties optional',
                        'Safely accessing nested properties that might be null/undefined',
                        'Creating optional parameters',
                        'Chaining methods'
                    ],
                    correctAnswer: 1,
                    explanation: 'Optional chaining (?.) safely accesses nested properties. If any part is null/undefined, it returns undefined instead of throwing an error.'
                },
                {
                    id: 'es6bp-q8',
                    question: 'What is the difference between || and ?? (nullish coalescing)?',
                    options: [
                        'No difference',
                        '|| treats 0 and "" as falsy, ?? only treats null/undefined as nullish',
                        '?? is faster',
                        '|| is deprecated'
                    ],
                    correctAnswer: 1,
                    explanation: '|| returns right side for any falsy value (0, "", false). ?? only returns right side for null/undefined, preserving 0 and "".'
                },
                {
                    id: 'es6bp-q9',
                    question: 'Why use destructuring?',
                    options: [
                        'Faster code',
                        'Cleaner syntax for extracting values from objects/arrays',
                        'Required in ES6+',
                        'Better security'
                    ],
                    correctAnswer: 1,
                    explanation: 'Destructuring provides cleaner, more concise syntax for extracting values from objects and arrays, reducing repetitive code.'
                },
                {
                    id: 'es6bp-q10',
                    question: 'What is the benefit of ES6 modules?',
                    options: [
                        'Faster loading',
                        'Better code organization, explicit dependencies, no global pollution',
                        'Smaller file size',
                        'Automatic optimization'
                    ],
                    correctAnswer: 1,
                    explanation: 'ES6 modules provide better code organization, make dependencies explicit, avoid global scope pollution, and enable tree-shaking for optimization.'
                }
            ]
        }
    ]
};
