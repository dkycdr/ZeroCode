// JavaScript Basics - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const jsBasicsCourse = {
    id: 'js-basics',
    title: 'JavaScript Basics',
    description: 'Learn the fundamentals of programming with JavaScript - the language of the web.',
    
    units: [
        // ============================================
        // UNIT 0: Absolute Beginner - Start from ZERO
        // ============================================
        {
            id: 'js-unit-0',
            title: 'Absolute Beginner - Programming from Zero',
            description: 'Never programmed before? Perfect! We explain programming concepts from scratch.',
            items: [
                {
                    id: 'js-0-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is Programming? (Complete Beginner Guide)',
                    duration: '12 min read',
                    content: `
# What is Programming? - Explained Like You're 5

## The Simple Answer

Programming is giving **instructions** to a computer, step-by-step, like a recipe.

Imagine you're teaching a robot to make a sandwich:
1. Pick up bread
2. Put peanut butter on bread
3. Put jelly on bread
4. Put bread slices together

That's programming! You tell the computer EXACTLY what to do, in order.

## What is JavaScript?

JavaScript is a **programming language** - a way to write instructions that computers understand.

### The Web Trinity

| Technology | Role | What It Does |
|------------|------|--------------|
| **HTML** | Structure | "This is a button" |
| **CSS** | Styling | "Make the button blue" |
| **JavaScript** | Behavior | "When button is clicked, do something" |

**Example:**
\`\`\`html
<!-- HTML: Create button -->
<button id="myButton">Click Me</button>

<!-- CSS: Make it pretty -->
<style>
  #myButton { background: blue; color: white; }
</style>

<!-- JavaScript: Make it DO something -->
<script>
  document.getElementById('myButton').onclick = function() {
    alert('Hello!');
  };
</script>
\`\`\`

## What Can JavaScript Do?

JavaScript can:
- ✅ Show/hide content
- ✅ Validate forms (check if email is valid)
- ✅ Create animations
- ✅ Load data without refreshing page
- ✅ Build games
- ✅ Calculate things
- ✅ Store data
- ✅ And much more!

**Real Examples:**
- Facebook: Updates feed without refresh
- Google Maps: Drag and zoom
- Netflix: Play videos
- Gmail: Send emails without page reload

## Your First JavaScript

Let's write the simplest JavaScript ever:

\`\`\`javascript
alert('Hello World!');
\`\`\`

That's it! This shows a popup with "Hello World!".

## Programming Concepts (Simple Explanations)

### 1. Variables (Storage Boxes)

Variables **store** information, like a box with a label:

\`\`\`javascript
let name = "John";
let age = 20;
let isStudent = true;
\`\`\`

Think of it like:
- Box labeled "name" contains "John"
- Box labeled "age" contains 20
- Box labeled "isStudent" contains true

### 2. Functions (Reusable Instructions)

Functions are **recipes** you can use over and over:

\`\`\`javascript
function sayHello() {
    alert('Hello!');
}

sayHello();  // Use the recipe
sayHello();  // Use it again
\`\`\`

### 3. Conditions (Making Decisions)

Conditions let the computer **make choices**:

\`\`\`javascript
let age = 18;

if (age >= 18) {
    alert('You are an adult');
} else {
    alert('You are a minor');
}
\`\`\`

Like: "IF it's raining, bring umbrella. ELSE, don't bring umbrella."

### 4. Loops (Repeating Actions)

Loops **repeat** actions:

\`\`\`javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// Prints: 1, 2, 3, 4, 5
\`\`\`

Like: "Count from 1 to 5"

## How to Run JavaScript

### Method 1: Browser Console (Easiest!)

1. Open any website
2. Press **F12** (or right-click → Inspect)
3. Click **Console** tab
4. Type JavaScript and press Enter!

Try it:
\`\`\`javascript
alert('Hello!');
console.log('This appears in console');
2 + 2  // Shows 4
\`\`\`

### Method 2: In HTML File

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
    
    <script>
        alert('This runs when page loads!');
    </script>
</body>
</html>
\`\`\`

### Method 3: External JS File (Best!)

**index.html:**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <script src="script.js"></script>
</body>
</html>
\`\`\`

**script.js:**
\`\`\`javascript
alert('Hello from external file!');
\`\`\`

## Important JavaScript Rules

### 1. Case Sensitive

\`\`\`javascript
let name = "John";   // ✅ Correct
let Name = "John";   // ❌ Different variable!
let NAME = "John";   // ❌ Also different!
\`\`\`

### 2. Semicolons (Optional but Recommended)

\`\`\`javascript
let x = 5;  // ✅ With semicolon
let y = 10  // ✅ Also works, but use semicolons!
\`\`\`

### 3. Comments (Notes for Humans)

\`\`\`javascript
// This is a single-line comment

/* This is a
   multi-line
   comment */

let age = 20;  // You can also comment at end of line
\`\`\`

### 4. Strings Need Quotes

\`\`\`javascript
let name = "John";   // ✅ Double quotes
let name = 'John';   // ✅ Single quotes
let name = \`John\`;   // ✅ Backticks (template literals)
let name = John;     // ❌ ERROR! Needs quotes!
\`\`\`

## Common Beginner Mistakes

❌ **Forgetting quotes around text:**
\`\`\`javascript
let name = John;  // ERROR!
\`\`\`

✅ **Correct:**
\`\`\`javascript
let name = "John";
\`\`\`

❌ **Using = instead of == for comparison:**
\`\`\`javascript
if (age = 18) {  // This ASSIGNS 18, doesn't compare!
\`\`\`

✅ **Correct:**
\`\`\`javascript
if (age == 18) {  // This COMPARES
\`\`\`

❌ **Forgetting parentheses in function call:**
\`\`\`javascript
sayHello;  // Doesn't run the function!
\`\`\`

✅ **Correct:**
\`\`\`javascript
sayHello();  // Runs the function
\`\`\`

## console.log() - Your Best Friend

\`console.log()\` prints to the console (F12 → Console):

\`\`\`javascript
console.log('Hello!');
console.log(2 + 2);
console.log('Age:', 20);

let name = "John";
console.log('Name is:', name);
\`\`\`

**Use it to debug!** Print values to see what's happening.

## Next Steps

Now that you understand WHAT programming is, let's write your first JavaScript code step-by-step!
                    `
                },
                {
                    id: 'js-0-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Your First JavaScript - Baby Steps',
                    duration: '20 min',
                    content: `
# Your First JavaScript - Let's Code Together!

## Step 1: Print to Console

The easiest thing in JavaScript is printing text:

\`\`\`javascript
console.log('Hello World!');
\`\`\`

**What it does:** Shows "Hello World!" in the console (F12 → Console)

**Try different things:**
\`\`\`javascript
console.log('My name is John');
console.log(2 + 2);
console.log('I am', 20, 'years old');
\`\`\`

## Step 2: Create Variables

Variables store information:

\`\`\`javascript
let name = "John";
let age = 20;
let isStudent = true;

console.log(name);    // Prints: John
console.log(age);     // Prints: 20
console.log(isStudent); // Prints: true
\`\`\`

**Variable naming rules:**
- Start with letter, $, or _
- Can contain letters, numbers, $, _
- Can't use spaces
- Can't use reserved words (let, if, for, etc.)

**Good names:**
\`\`\`javascript
let firstName = "John";
let user_age = 20;
let $price = 100;
let _temp = 50;
\`\`\`

**Bad names:**
\`\`\`javascript
let first name = "John";  // ❌ Space!
let 1name = "John";       // ❌ Starts with number!
let let = "John";         // ❌ Reserved word!
\`\`\`

## Step 3: Do Math

JavaScript can calculate:

\`\`\`javascript
let x = 10;
let y = 5;

console.log(x + y);  // 15 (addition)
console.log(x - y);  // 5  (subtraction)
console.log(x * y);  // 50 (multiplication)
console.log(x / y);  // 2  (division)
console.log(x % y);  // 0  (remainder/modulo)
\`\`\`

**Combine with variables:**
\`\`\`javascript
let price = 100;
let discount = 20;
let finalPrice = price - discount;

console.log('Final price:', finalPrice);  // 80
\`\`\`

## Step 4: Join Text (Concatenation)

Combine text with +:

\`\`\`javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName);  // "John Doe"
\`\`\`

**Better way (Template Literals):**
\`\`\`javascript
let name = "John";
let age = 20;

console.log(\`My name is \${name} and I am \${age} years old\`);
// "My name is John and I am 20 years old"
\`\`\`

**Note:** Use backticks (\`) not quotes!

## Step 5: Get User Input

Ask user for input:

\`\`\`javascript
let name = prompt('What is your name?');
console.log('Hello', name);
\`\`\`

**Show alert:**
\`\`\`javascript
alert('Welcome to my website!');
\`\`\`

## Step 6: Make Decisions (if/else)

\`\`\`javascript
let age = 18;

if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log('You are a minor');
}
\`\`\`

**Comparison operators:**
- \`==\` equal to
- \`!=\` not equal to
- \`>\` greater than
- \`<\` less than
- \`>=\` greater than or equal
- \`<=\` less than or equal

---

## Your Mission: Build a Simple Calculator!

Create a calculator that:
1. Stores two numbers in variables
2. Calculates sum, difference, product, and quotient
3. Prints all results to console
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, create 2 number variables: "let num1 = 10;" and "let num2 = 5;"', completed: false, regex: /let\s+\w+\s*=\s*\d+/ },
                        { id: 2, description: 'In script.js, calculate sum: "let sum = num1 + num2;"', completed: false, regex: /\+/ },
                        { id: 3, description: 'In script.js, calculate difference: "let diff = num1 - num2;"', completed: false, regex: /-/ },
                        { id: 4, description: 'In script.js, calculate product: "let product = num1 * num2;"', completed: false, regex: /\*/ },
                        { id: 5, description: 'In script.js, display result: "console.log(sum);" - open Console (F12) to see output', completed: false, regex: /console\.log/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <title>My First JavaScript</title>
</head>
<body>
    <h1>Open Console (F12) to see output!</h1>
    <script src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: `// Your First JavaScript Calculator!
// Step 1: Create two number variables
// Step 2: Calculate sum
// Step 3: Calculate difference
// Step 4: Calculate product
// Step 5: Calculate quotient
// Step 6: Print all results Print your calculations here

` }
                    ]
                },
                {
                    id: 'js-0-3',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding Data Types',
                    duration: '10 min read',
                    content: `
# JavaScript Data Types - Complete Beginner Guide

## What Are Data Types?

Data types are **categories** of information. Like how in real life we have:
- Numbers (1, 2, 3)
- Words ("hello", "world")
- True/False (yes/no)

JavaScript has the same!

## The Main Data Types

### 1. Number

Any number, with or without decimals:

\`\`\`javascript
let age = 20;
let price = 99.99;
let temperature = -5;
let big = 1000000;
\`\`\`

**Math operations:**
\`\`\`javascript
let x = 10;
let y = 3;

console.log(x + y);  // 13
console.log(x - y);  // 7
console.log(x * y);  // 30
console.log(x / y);  // 3.333...
console.log(x % y);  // 1 (remainder)
\`\`\`

### 2. String

Text, wrapped in quotes:

\`\`\`javascript
let name = "John";
let message = 'Hello World';
let template = \`My name is \${name}\`;
\`\`\`

**Three ways to write strings:**
- Double quotes: \`"text"\`
- Single quotes: \`'text'\`
- Backticks: \`\`text\`\` (can include variables!)

**String operations:**
\`\`\`javascript
let first = "John";
let last = "Doe";

// Concatenation (joining)
let full = first + " " + last;  // "John Doe"

// Template literal (better!)
let full2 = \`\${first} \${last}\`;  // "John Doe"

// Length
console.log(first.length);  // 4

// Uppercase/Lowercase
console.log(first.toUpperCase());  // "JOHN"
console.log(first.toLowerCase());  // "john"
\`\`\`

### 3. Boolean

Only two values: \`true\` or \`false\`

\`\`\`javascript
let isStudent = true;
let isGraduated = false;
let hasLicense = true;
\`\`\`

**Used in conditions:**
\`\`\`javascript
let age = 20;
let isAdult = age >= 18;  // true

if (isAdult) {
    console.log('You can vote!');
}
\`\`\`

### 4. Undefined

Variable declared but no value assigned:

\`\`\`javascript
let x;
console.log(x);  // undefined
\`\`\`

### 5. Null

Intentionally empty value:

\`\`\`javascript
let user = null;  // No user logged in
\`\`\`

**Difference:**
- \`undefined\` = "I forgot to set a value"
- \`null\` = "I intentionally set it to empty"

## Checking Data Types

Use \`typeof\`:

\`\`\`javascript
console.log(typeof 42);          // "number"
console.log(typeof "hello");     // "string"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (weird bug!)
\`\`\`

## Type Conversion

### String to Number

\`\`\`javascript
let str = "123";
let num = Number(str);  // 123

// Or use parseInt/parseFloat
let num2 = parseInt("123");    // 123
let num3 = parseFloat("12.5"); // 12.5
\`\`\`

### Number to String

\`\`\`javascript
let num = 123;
let str = String(num);  // "123"

// Or use toString()
let str2 = num.toString();  // "123"
\`\`\`

### To Boolean

\`\`\`javascript
Boolean(1);      // true
Boolean(0);      // false
Boolean("hi");   // true
Boolean("");     // false
Boolean(null);   // false
Boolean(undefined); // false
\`\`\`

## Truthy and Falsy Values

Some values are "falsy" (treated as false):
- \`false\`
- \`0\`
- \`""\` (empty string)
- \`null\`
- \`undefined\`
- \`NaN\` (Not a Number)

Everything else is "truthy" (treated as true)!

\`\`\`javascript
if ("hello") {
    console.log('This runs!');  // Runs! "hello" is truthy
}

if (0) {
    console.log('This does NOT run');  // Doesn't run! 0 is falsy
}
\`\`\`

## Common Type Mistakes

❌ **Adding number and string:**
\`\`\`javascript
let result = 5 + "5";
console.log(result);  // "55" (string!)
\`\`\`

✅ **Convert first:**
\`\`\`javascript
let result = 5 + Number("5");
console.log(result);  // 10 (number!)
\`\`\`

❌ **Comparing different types:**
\`\`\`javascript
console.log(5 == "5");   // true (converts types!)
console.log(5 === "5");  // false (strict comparison)
\`\`\`

✅ **Use === for strict comparison:**
\`\`\`javascript
console.log(5 === 5);    // true
console.log(5 === "5");  // false
\`\`\`

## Pro Tips

1. **Use \`===\` instead of \`==\`** for comparisons
2. **Use template literals** (\`\`) for strings with variables
3. **Check types** with \`typeof\` when debugging
4. **Convert types explicitly** instead of relying on automatic conversion
5. **Use meaningful variable names** that indicate the type: \`userAge\`, \`isActive\`, \`userName\`

Now you understand data types! 🎯
                    `
                },
                {
                    id: 'js-0-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Absolute Beginner Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does console.log() do?',
                            options: ['Shows a popup', 'Prints to the console', 'Creates a variable', 'Deletes code'],
                            correctIndex: 1,
                            explanation: 'console.log() prints output to the browser console (F12 → Console). Great for debugging!'
                        },
                        {
                            id: 'q2',
                            question: 'Which is the correct way to create a variable?',
                            options: ['variable name = "John"', 'let name = "John"', 'name = John', 'var name == "John"'],
                            correctIndex: 1,
                            explanation: 'Use "let" keyword, followed by variable name, = sign, and value. Strings need quotes!'
                        },
                        {
                            id: 'q3',
                            question: 'What is the result of: 5 + "5"',
                            options: ['10', '"55"', 'Error', '25'],
                            correctIndex: 1,
                            explanation: 'When you add a number and string, JavaScript converts the number to string and concatenates: "55"'
                        },
                        {
                            id: 'q4',
                            question: 'Which symbol is used for comments in JavaScript?',
                            options: ['<!-- -->', '//', '#', '/* */'],
                            correctIndex: 1,
                            explanation: '// for single-line comments, /* */ for multi-line comments. HTML uses <!-- -->, Python uses #'
                        },
                        {
                            id: 'q5',
                            question: 'What data type is: true',
                            options: ['String', 'Number', 'Boolean', 'Undefined'],
                            correctIndex: 2,
                            explanation: 'true and false are Boolean values - they represent yes/no, on/off, true/false.'
                        }
                    ]
                }
            ]
        },
        // ============================================
        // UNIT 1: Introduction to JavaScript
        // ============================================
        {
            id: 'js-unit-1',
            title: 'Introduction to JavaScript',
            description: 'Understand what JavaScript is and write your first code',
            items: [
                {
                    id: 'js-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is JavaScript?',
                    duration: '5 min read',
                    content: `
# What is JavaScript?

JavaScript is the **programming language of the web**. It makes websites interactive and dynamic.

## The Web Trinity

| Technology | Role | Analogy |
|------------|------|---------|
| HTML | Structure | Skeleton |
| CSS | Styling | Skin & Clothes |
| JavaScript | Behavior | Brain & Muscles |

## What Can JavaScript Do?

- 🖱️ Respond to user clicks, typing, scrolling
- 🔄 Update content without reloading the page
- ✅ Validate forms before submission
- 🎮 Create games and animations
- 📱 Build mobile apps (React Native)
- 🖥️ Build servers (Node.js)

## JavaScript vs Java

Despite the similar names, they are **completely different languages**!

| JavaScript | Java |
|------------|------|
| Runs in browser | Runs on JVM |
| Dynamic typing | Static typing |
| Prototype-based | Class-based |
| Created in 10 days | Years of development |

> 💡 Fun Fact: JavaScript was created by Brendan Eich in just 10 days in 1995!
                    `
                },
                {
                    id: 'js-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Your First JavaScript',
                    duration: '15 min',
                    content: `
# Your First JavaScript Code

## The Console

The **console** is where JavaScript outputs messages. It's your best friend for debugging!

\`\`\`javascript
console.log("Hello, World!");
console.log(42);
console.log(true);
\`\`\`

## Where to Write JavaScript

### 1. Inline (in HTML)
\`\`\`html
<button onclick="alert('Clicked!')">Click Me</button>
\`\`\`

### 2. Internal (in \`<script>\` tag)
\`\`\`html
<script>
    console.log("Hello from script tag!");
</script>
\`\`\`

### 3. External (separate .js file) ✅ Best Practice
\`\`\`html
<script src="script.js"></script>
\`\`\`

## Comments

\`\`\`javascript
// This is a single-line comment

/* This is a
   multi-line comment */
\`\`\`

---

## Your Mission
Write your first JavaScript code using console.log()
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, write console.log("Hello, ZeroCode!"); to print text to console', completed: false, regex: /console\.log\s*\(\s*["']Hello,?\s*ZeroCode!?["']\s*\)/i },
                        { id: 2, description: 'In script.js, write console.log(12345); to print a number (use your ID)', completed: false, regex: /console\.log\s*\(\s*\d+\s*\)/ },
                        { id: 3, description: 'In script.js, write console.log(true); or console.log(false); to print a boolean', completed: false, regex: /console\.log\s*\(\s*(true|false)\s*\)/ },
                        { id: 4, description: 'In script.js, add a comment with // this is a comment to explain your code', completed: false, regex: /\/\/.*|\/\*[\s\S]*?\*\// }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head><title>First JS</title></head>
<body>
    <h1>Check the Console!</h1>
    <p>Press F12 or right-click > Inspect > Console</p>
    <script src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: 'Courier New', monospace; background: #1a1a2e; color: #eee; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }
h1 { color: #00ff88; }` },
                        { name: 'script.js', language: 'javascript', content: `// Welcome to JavaScript!
// Write your code below:

` }
                    ]
                },
                {
                    id: 'js-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'JavaScript Intro Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the best practice for including JavaScript in HTML?',
                            options: ['Inline onclick', 'Internal <script>', 'External .js file', 'All are equal'],
                            correctIndex: 2,
                            explanation: 'External files keep code organized, cacheable, and reusable across pages.'
                        },
                        {
                            id: 'q2',
                            question: 'Which method outputs to the browser console?',
                            options: ['print()', 'echo()', 'console.log()', 'output()'],
                            correctIndex: 2,
                            explanation: 'console.log() is the standard way to output debug information in JavaScript.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 2: Variables & Data Types
        // ============================================
        {
            id: 'js-unit-2',
            title: 'Variables & Data Types',
            description: 'Store and manipulate different types of data',
            items: [
                {
                    id: 'js-2-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding Variables',
                    duration: '5 min read',
                    content: `
# Understanding Variables

A **variable** is a container for storing data. Think of it as a labeled box.

## Declaring Variables

JavaScript has 3 ways to declare variables:

\`\`\`javascript
var name = "Alice";    // Old way (avoid!)
let age = 21;          // Modern, can be reassigned
const PI = 3.14159;    // Constant, cannot change
\`\`\`

## let vs const

| Keyword | Can Reassign? | Use When |
|---------|---------------|----------|
| \`let\` | ✅ Yes | Value will change |
| \`const\` | ❌ No | Value stays the same |

### Examples
\`\`\`javascript
let score = 0;
score = 10;        // ✅ OK

const MAX = 100;
MAX = 200;         // ❌ Error!
\`\`\`

## Naming Rules

✅ Valid: \`userName\`, \`user_name\`, \`_private\`, \`$price\`, \`camelCase\`
❌ Invalid: \`2fast\`, \`my-var\`, \`class\`, \`for\`

> 💡 Convention: Use **camelCase** for variables (\`firstName\`, \`totalPrice\`)
                    `
                },
                {
                    id: 'js-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Data Types',
                    duration: '20 min',
                    content: `
# JavaScript Data Types

## Primitive Types

### 1. String (Text)
\`\`\`javascript
let name = "Alice";
let greeting = 'Hello';
let template = \`Hi, \${name}!\`;  // Template literal
\`\`\`

### 2. Number
\`\`\`javascript
let age = 21;
let price = 99.99;
let negative = -50;
\`\`\`

### 3. Boolean
\`\`\`javascript
let isStudent = true;
let hasGraduated = false;
\`\`\`

### 4. Undefined & Null
\`\`\`javascript
let x;              // undefined (not assigned)
let y = null;       // null (intentionally empty)
\`\`\`

## Checking Types

\`\`\`javascript
typeof "Hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
\`\`\`

---

## Your Mission
Create variables of different types for a student profile.
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, create a string variable: let name = "Alice"; (text in quotes)', completed: false, regex: /(let|const)\s+\w+\s*=\s*["'][^"']+["']/ },
                        { id: 2, description: 'In script.js, create a number variable: let age = 21; (number without quotes)', completed: false, regex: /(let|const)\s+\w*[Aa]ge\w*\s*=\s*\d+/ },
                        { id: 3, description: 'In script.js, create a decimal variable: let gpa = 3.75; (GPA with decimal point)', completed: false, regex: /(let|const)\s+\w*[Gg][Pp][Aa]\w*\s*=\s*\d+\.\d+/ },
                        { id: 4, description: 'In script.js, create a boolean variable: let isActive = true; (true or false without quotes)', completed: false, regex: /(let|const)\s+\w*[Aa]ctive\w*\s*=\s*(true|false)/ },
                        { id: 5, description: 'In script.js, check data type: console.log(typeof name); to see variable type', completed: false, regex: /console\.log\s*\(\s*typeof\s+\w+\s*\)/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Variables</title></head>
<body>
    <h1>Student Profile Variables</h1>
    <p>Check console for output</p>
    <script src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; background: #f5f5f5; }` },
                        { name: 'script.js', language: 'javascript', content: `// Create student profile variables

// 1. Student name (string)


// 2. Age (number)


// 3. GPA (decimal number)


// 4. Is active student? (boolean)


// 5. Check type of one variable
` }
                    ]
                },
                {
                    id: 'js-2-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'String Operations',
                    duration: '15 min',
                    content: `
# String Operations

## String Concatenation

\`\`\`javascript
let first = "John";
let last = "Doe";

// Old way
let full1 = first + " " + last;

// Modern way (Template Literals) ✅
let full2 = \`\${first} \${last}\`;
\`\`\`

## String Properties & Methods

\`\`\`javascript
let text = "ZeroCode";

text.length           // 8
text.toUpperCase()    // "ZEROCODE"
text.toLowerCase()    // "zerocode"
text.includes("Code") // true
text.startsWith("Zero") // true
text.slice(0, 4)      // "Zero"
text.replace("Code", "Dev")  // "ZeroDev"
\`\`\`

---

## Your Mission
Practice string manipulation with student data.
                    `,
                    tasks: [
                        { id: 1, description: 'In script.js, create 2 variables: let firstName = "John"; and let lastName = "Doe";', completed: false, regex: /(let|const)\s+firstName\s*=[\s\S]*(let|const)\s+lastName\s*=/ },
                        { id: 2, description: 'In script.js, combine with template literal: let fullName = `${firstName} ${lastName}`;', completed: false, regex: /`[^`]*\$\{[^}]+\}[^`]*\$\{[^}]+\}[^`]*`/ },
                        { id: 3, description: 'In script.js, convert to uppercase: console.log(firstName.toUpperCase());', completed: false, regex: /\.toUpperCase\s*\(\s*\)/ },
                        { id: 4, description: 'In script.js, check string length: console.log(firstName.length);', completed: false, regex: /\.length/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Strings</title></head>
<body><h1>String Operations</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: `// String Operations Practice
// 1. Create firstName and lastName
// 2. Combine using template literal
// 3. Convert to uppercase
// 4. Get the length

` }
                    ]
                },
                {
                    id: 'js-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Variables Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Which keyword creates a variable that cannot be reassigned?',
                            options: ['var', 'let', 'const', 'static'],
                            correctIndex: 2,
                            explanation: 'const creates a constant that cannot be reassigned after initialization.'
                        },
                        {
                            id: 'q2',
                            question: 'What is the result of typeof "42"?',
                            options: ['"number"', '"string"', '"integer"', '"text"'],
                            correctIndex: 1,
                            explanation: 'Anything in quotes is a string, even if it looks like a number.'
                        },
                        {
                            id: 'q3',
                            question: 'Which is the modern way to combine strings?',
                            options: ['str1 + str2', 'str1.concat(str2)', '`${str1} ${str2}`', 'str1 & str2'],
                            correctIndex: 2,
                            explanation: 'Template literals (backticks with ${}) are the modern, readable way.'
                        },
                        {
                            id: 'q4',
                            question: 'What value does an uninitialized variable have?',
                            options: ['null', '0', 'undefined', '""'],
                            correctIndex: 2,
                            explanation: 'Variables declared but not assigned have the value undefined.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 3: Operators & Expressions
        // ============================================
        {
            id: 'js-unit-3',
            title: 'Operators & Expressions',
            description: 'Perform calculations and comparisons',
            items: [
                {
                    id: 'js-3-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Arithmetic Operators',
                    duration: '15 min',
                    content: `
# Arithmetic Operators

## Basic Math

\`\`\`javascript
let a = 10, b = 3;

a + b    // 13 (Addition)
a - b    // 7  (Subtraction)
a * b    // 30 (Multiplication)
a / b    // 3.333... (Division)
a % b    // 1  (Modulo - remainder)
a ** b   // 1000 (Exponent - 10³)
\`\`\`

## Increment & Decrement

\`\`\`javascript
let x = 5;
x++;     // x is now 6
x--;     // x is now 5

// Shorthand
x += 10;  // x = x + 10
x -= 3;   // x = x - 3
x *= 2;   // x = x * 2
\`\`\`

## Order of Operations (PEMDAS)

\`\`\`javascript
2 + 3 * 4      // 14 (not 20!)
(2 + 3) * 4    // 20
\`\`\`

---

## Your Mission
Build a simple GPA calculator.
                    `,
                    tasks: [
                        { id: 1, description: 'Create variables for 3 course grades', completed: false, regex: /(let|const)\s+\w+\s*=\s*\d[\s\S]*(let|const)\s+\w+\s*=\s*\d[\s\S]*(let|const)\s+\w+\s*=\s*\d/ },
                        { id: 2, description: 'Calculate the sum of grades', completed: false, regex: /(let|const)\s+\w*[Ss]um\w*\s*=.*\+.*\+/ },
                        { id: 3, description: 'Calculate average (sum / 3)', completed: false, regex: /(let|const)\s+\w*[Aa]vg\w*\s*=.*\/\s*3/ },
                        { id: 4, description: 'Log the average to console', completed: false, regex: /console\.log\s*\(.*[Aa]vg/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>GPA Calculator</title></head>
<body><h1>GPA Calculator</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: `// GPA Calculator

// 1. Create 3 course grades (0-4 scale)


// 2. Calculate sum


// 3. Calculate average


// 4. Display result
` }
                    ]
                },
                {
                    id: 'js-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Comparison Operators',
                    duration: '15 min',
                    content: `
# Comparison Operators

Comparisons return **boolean** values (true/false).

## Equality

\`\`\`javascript
5 == "5"     // true  (loose equality - converts types)
5 === "5"    // false (strict equality - checks type too)
5 != "5"     // false
5 !== "5"    // true
\`\`\`

> ⚠️ **Always use === and !==** to avoid unexpected type conversion!

## Relational

\`\`\`javascript
10 > 5       // true
10 < 5       // false
10 >= 10     // true
10 <= 9      // false
\`\`\`

## Logical Operators

\`\`\`javascript
true && true    // true (AND - both must be true)
true || false   // true (OR - at least one true)
!true           // false (NOT - inverts)
\`\`\`

### Real Example
\`\`\`javascript
let age = 20;
let hasID = true;

let canEnter = age >= 18 && hasID;  // true
\`\`\`

---

## Your Mission
Create eligibility checks for a scholarship.
                    `,
                    tasks: [
                        { id: 1, description: 'Create a gpa variable', completed: false, regex: /(let|const)\s+gpa\s*=\s*\d/ },
                        { id: 2, description: 'Check if GPA >= 3.5 using comparison', completed: false, regex: /gpa\s*>=\s*3\.5/ },
                        { id: 3, description: 'Use && (AND) operator', completed: false, regex: /&&/ },
                        { id: 4, description: 'Use === for strict equality check', completed: false, regex: /===/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Comparisons</title></head>
<body><h1>Scholarship Eligibility</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: `// Scholarship Eligibility Checker Student data Check 1: GPA must be >= 3.5 Check 2: Must be semester 3 or higher Check 3: Must be SE major (use ===) Combined check: All conditions must be true

` }
                    ]
                },
                {
                    id: 'js-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Operators Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the result of 10 % 3?',
                            options: ['3', '3.33', '1', '0'],
                            correctIndex: 2,
                            explanation: 'Modulo (%) returns the remainder. 10 ÷ 3 = 3 remainder 1.'
                        },
                        {
                            id: 'q2',
                            question: 'What is the result of 5 === "5"?',
                            options: ['true', 'false', 'undefined', 'error'],
                            correctIndex: 1,
                            explanation: 'Strict equality (===) checks both value AND type. Number !== String.'
                        },
                        {
                            id: 'q3',
                            question: 'What does && mean?',
                            options: ['OR', 'AND', 'NOT', 'XOR'],
                            correctIndex: 1,
                            explanation: '&& is the AND operator. Both sides must be true for result to be true.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 4: Conditionals
        // ============================================
        {
            id: 'js-unit-4',
            title: 'Conditionals',
            description: 'Make decisions in your code',
            items: [
                {
                    id: 'js-4-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'If/Else Statements',
                    duration: '20 min',
                    content: `
# If/Else Statements

Conditionals let your code make decisions!

## Basic If

\`\`\`javascript
let grade = 85;

if (grade >= 60) {
    console.log("You passed!");
}
\`\`\`

## If/Else

\`\`\`javascript
if (grade >= 60) {
    console.log("Passed");
} else {
    console.log("Failed");
}
\`\`\`

## If/Else If/Else

\`\`\`javascript
if (grade >= 90) {
    console.log("A");
} else if (grade >= 80) {
    console.log("B");
} else if (grade >= 70) {
    console.log("C");
} else {
    console.log("F");
}
\`\`\`

## Ternary Operator (Shorthand)

\`\`\`javascript
let result = grade >= 60 ? "Pass" : "Fail";
\`\`\`

---

## Your Mission
Build a grade classifier for ZeroCode grading system.
                    `,
                    tasks: [
                        { id: 1, description: 'Create a score variable', completed: false, regex: /(let|const)\s+score\s*=\s*\d+/ },
                        { id: 2, description: 'Write an if statement checking score >= 85', completed: false, regex: /if\s*\(\s*score\s*>=\s*85\s*\)/ },
                        { id: 3, description: 'Add else if for score >= 70', completed: false, regex: /else\s+if\s*\(\s*score\s*>=\s*70\s*\)/ },
                        { id: 4, description: 'Add a final else block', completed: false, regex: /}\s*else\s*{/ },
                        { id: 5, description: 'Use console.log inside each block', completed: false, regex: /if[\s\S]*console\.log[\s\S]*else[\s\S]*console\.log/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Grade Classifier</title></head>
<body><h1>ZeroCode Grade Classifier</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: `// ZeroCode Grade Classifier
// A: 85-100, B: 70-84, C: 55-69, D: 40-54, E: <40

// 1. Create score variable


// 2-4. Write if/else if/else chain


` }
                    ]
                },
                {
                    id: 'js-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Switch Statements',
                    duration: '15 min',
                    content: `
# Switch Statements

When you have many conditions checking the same variable, use switch!

## Syntax

\`\`\`javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Regular day");
}
\`\`\`

## Important: break

Without \`break\`, code "falls through" to next case!

\`\`\`javascript
switch (grade) {
    case "A":
        console.log("Excellent");
        // Missing break! Falls through...
    case "B":
        console.log("Good");
        break;
}
// If grade is "A", prints BOTH "Excellent" AND "Good"!
\`\`\`

---

## Your Mission
Create a course recommender based on major.
                    `,
                    tasks: [
                        { id: 1, description: 'Create a major variable', completed: false, regex: /(let|const)\s+major\s*=/ },
                        { id: 2, description: 'Write a switch statement on major', completed: false, regex: /switch\s*\(\s*major\s*\)/ },
                        { id: 3, description: 'Add at least 2 case blocks', completed: false, regex: /case\s+["'][^"']+["']\s*:[\s\S]*case\s+["'][^"']+["']\s*:/ },
                        { id: 4, description: 'Add break after each case', completed: false, regex: /break\s*;[\s\S]*break\s*;/ },
                        { id: 5, description: 'Add a default case', completed: false, regex: /default\s*:/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Course Recommender</title></head>
<body><h1>Course Recommender</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: `// Course Recommender by Major

// 1. Create major variable


// 2. Switch statement to recommend courses
// SE -> "Take Web Development"
// IT -> "Take Network Security"
// CS -> "Take Algorithms"
// default -> "See academic advisor"


` }
                    ]
                },
                {
                    id: 'js-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Conditionals Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What happens if you forget "break" in a switch case?',
                            options: ['Error', 'Code falls through to next case', 'Nothing', 'Loop forever'],
                            correctIndex: 1,
                            explanation: 'Without break, execution continues to the next case (fall-through behavior).'
                        },
                        {
                            id: 'q2',
                            question: 'What is the ternary operator syntax?',
                            options: ['if ? then : else', 'condition ? true : false', 'check ? yes ? no', 'test : true : false'],
                            correctIndex: 1,
                            explanation: 'Ternary syntax: condition ? valueIfTrue : valueIfFalse'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 5: Loops
        // ============================================
        {
            id: 'js-unit-5',
            title: 'Loops',
            description: 'Repeat actions efficiently',
            items: [
                {
                    id: 'js-5-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'For Loops',
                    duration: '20 min',
                    content: `
# For Loops

Loops repeat code a specific number of times.

## Basic For Loop

\`\`\`javascript
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
\`\`\`

### Anatomy
\`\`\`javascript
for (initialization; condition; update) {
    // code to repeat
}
\`\`\`

## Looping Through Arrays

\`\`\`javascript
let students = ["Alice", "Bob", "Charlie"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
\`\`\`

## For...of (Modern Way)

\`\`\`javascript
for (let student of students) {
    console.log(student);
}
\`\`\`

---

## Your Mission
Print a multiplication table.
                    `,
                    tasks: [
                        { id: 1, description: 'Create a for loop starting at 1', completed: false, regex: /for\s*\(\s*(let|var)\s+\w+\s*=\s*1/ },
                        { id: 2, description: 'Loop should run 10 times (i <= 10)', completed: false, regex: /\w+\s*<=\s*10/ },
                        { id: 3, description: 'Use i++ to increment', completed: false, regex: /\w+\+\+/ },
                        { id: 4, description: 'Console.log inside the loop', completed: false, regex: /for[\s\S]*{[\s\S]*console\.log[\s\S]*}/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Loops</title></head>
<body><h1>Multiplication Table</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: `// Multiplication Table for 7 Create a for loop from 1 to 10 Print: "7 x 1 = 7", "7 x 2 = 14", etc.

` }
                    ]
                },
                {
                    id: 'js-5-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'While Loops',
                    duration: '15 min',
                    content: `
# While Loops

While loops repeat as long as a condition is true.

## Basic While

\`\`\`javascript
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}
\`\`\`

## Do...While

Runs at least once, then checks condition:

\`\`\`javascript
let num = 10;

do {
    console.log(num);  // Runs once even though condition is false
    num++;
} while (num < 5);
\`\`\`

## When to Use Which?

| Loop | Use When |
|------|----------|
| for | Know exact number of iterations |
| while | Don't know when to stop |
| do...while | Must run at least once |

## ⚠️ Infinite Loop Warning!

\`\`\`javascript
// DON'T DO THIS!
while (true) {
    console.log("Forever...");
}
\`\`\`

---

## Your Mission
Create a countdown timer.
                    `,
                    tasks: [
                        { id: 1, description: 'Create a countdown variable starting at 10', completed: false, regex: /(let|var)\s+countdown\s*=\s*10/ },
                        { id: 2, description: 'Write a while loop with condition countdown > 0', completed: false, regex: /while\s*\(\s*countdown\s*>\s*0\s*\)/ },
                        { id: 3, description: 'Decrement countdown inside loop (countdown--)', completed: false, regex: /countdown\s*--/ },
                        { id: 4, description: 'Log "Liftoff!" after the loop', completed: false, regex: /console\.log\s*\(\s*["']Liftoff!?["']\s*\)/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Countdown</title></head>
<body><h1>🚀 Rocket Countdown</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; background: #0a192f; color: white; }` },
                        { name: 'script.js', language: 'javascript', content: `// Rocket Countdown

// 1. Start at 10


// 2. While countdown > 0, log the number and decrement


// 3. After loop, log "Liftoff!"

` }
                    ]
                },
                {
                    id: 'js-5-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Loops Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'How many times does this loop run? for(let i=0; i<3; i++)',
                            options: ['2', '3', '4', 'Infinite'],
                            correctIndex: 1,
                            explanation: 'i starts at 0, runs while < 3, so: 0, 1, 2 = 3 times.'
                        },
                        {
                            id: 'q2',
                            question: 'Which loop always runs at least once?',
                            options: ['for', 'while', 'do...while', 'for...of'],
                            correctIndex: 2,
                            explanation: 'do...while checks the condition AFTER running, so it always executes at least once.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 6: Functions & Final Project
        // ============================================
        {
            id: 'js-unit-6',
            title: 'Functions',
            description: 'Create reusable blocks of code',
            items: [
                {
                    id: 'js-6-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Function Basics',
                    duration: '20 min',
                    content: `
# Functions

Functions are reusable blocks of code.

## Declaring Functions

\`\`\`javascript
// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function Expression
const greet2 = function(name) {
    return "Hi, " + name;
};

// Arrow Function (Modern)
const greet3 = (name) => "Hey, " + name;
\`\`\`

## Parameters & Arguments

\`\`\`javascript
function add(a, b) {    // a, b are parameters
    return a + b;
}

add(5, 3);              // 5, 3 are arguments
\`\`\`

## Default Parameters

\`\`\`javascript
function greet(name = "Student") {
    return "Hello, " + name;
}

greet();        // "Hello, Student"
greet("Alice"); // "Hello, Alice"
\`\`\`

## Return Values

\`\`\`javascript
function square(n) {
    return n * n;
}

let result = square(5);  // 25
\`\`\`

---

## Your Mission
Create utility functions for a student system.
                    `,
                    tasks: [
                        { id: 1, description: 'Create a function called calculateGPA', completed: false, regex: /function\s+calculateGPA\s*\(/ },
                        { id: 2, description: 'Function should accept a grades parameter', completed: false, regex: /calculateGPA\s*\(\s*grades\s*\)/ },
                        { id: 3, description: 'Use return to return a value', completed: false, regex: /return\s+[^;]+;/ },
                        { id: 4, description: 'Call the function and log the result', completed: false, regex: /console\.log\s*\([\s\S]*calculateGPA\s*\(/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Functions</title></head>
<body><h1>Student Functions</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: `// Student Utility Functions
// 1. Create calculateGPA function It should take an array of grades and return the average
// 2. Test data
// 3. Call function and log result

` }
                    ]
                },
                {
                    id: 'js-6-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Arrays & Array Methods',
                    duration: '20 min',
                    content: `
# Arrays

Arrays store multiple values in a single variable.

## Creating Arrays

\`\`\`javascript
let fruits = ["Apple", "Banana", "Orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, null];
\`\`\`

## Accessing Elements

\`\`\`javascript
fruits[0]    // "Apple" (first)
fruits[2]    // "Orange" (third)
fruits.length // 3
\`\`\`

## Common Methods

\`\`\`javascript
// Add/Remove
fruits.push("Mango");     // Add to end
fruits.pop();             // Remove from end
fruits.unshift("Grape");  // Add to start
fruits.shift();           // Remove from start

// Find
fruits.indexOf("Banana"); // 1
fruits.includes("Apple"); // true

// Transform
fruits.join(", ");        // "Apple, Banana, Orange"
fruits.reverse();         // Reverses array
fruits.slice(0, 2);       // ["Apple", "Banana"]
\`\`\`

---

## Your Mission
Manage a student roster.
                    `,
                    tasks: [
                        { id: 1, description: 'Create an array called students', completed: false, regex: /(let|const)\s+students\s*=\s*\[/ },
                        { id: 2, description: 'Add a student using push()', completed: false, regex: /students\.push\s*\(/ },
                        { id: 3, description: 'Access the first student with [0]', completed: false, regex: /students\s*\[\s*0\s*\]/ },
                        { id: 4, description: 'Log the array length', completed: false, regex: /students\.length/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Arrays</title></head>
<body><h1>Student Roster</h1><script src="script.js"></script></body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: `// Student Roster Management

// 1. Create students array with 3 names


// 2. Add a new student


// 3. Get the first student


// 4. Log total count

` }
                    ]
                },
                {
                    id: 'js-6-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Functions & Arrays Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does a function return if there is no return statement?',
                            options: ['null', '0', 'undefined', 'error'],
                            correctIndex: 2,
                            explanation: 'Functions without a return statement return undefined by default.'
                        },
                        {
                            id: 'q2',
                            question: 'What is the index of the first element in an array?',
                            options: ['1', '0', '-1', 'first'],
                            correctIndex: 1,
                            explanation: 'Arrays are zero-indexed. The first element is at index 0.'
                        },
                        {
                            id: 'q3',
                            question: 'Which method adds an element to the END of an array?',
                            options: ['unshift()', 'push()', 'add()', 'append()'],
                            correctIndex: 1,
                            explanation: 'push() adds to end, unshift() adds to beginning.'
                        }
                    ]
                },
                {
                    id: 'js-6-project',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'Build a GPA Calculator',
                    duration: '45 min',
                    difficulty: 'Beginner',
                    description: 'Create a complete GPA calculator using everything you learned.',
                    content: `
# 🎯 Project: GPA Calculator

## Overview
Build a GPA calculator for ZeroCode students that:
- Stores course grades
- Calculates semester GPA
- Determines academic standing

## Requirements

### Variables & Data
- [ ] Array to store course objects (name, credits, grade)
- [ ] Variables for student info

### Functions
- [ ] \`addCourse(name, credits, grade)\` - adds a course
- [ ] \`calculateGPA()\` - returns GPA
- [ ] \`getStanding(gpa)\` - returns academic standing

### Logic
- [ ] GPA = sum(grade × credits) / total credits
- [ ] Standing: ≥3.5 = "Dean's List", ≥2.75 = "Good", ≥2.0 = "Warning", <2.0 = "Probation"

### Output
- [ ] Display all courses
- [ ] Display calculated GPA
- [ ] Display academic standing
                    `,
                    tasks: [
                        { id: 1, description: 'Create a courses array', completed: false, regex: /(let|const)\s+courses\s*=\s*\[/ },
                        { id: 2, description: 'Create addCourse function', completed: false, regex: /function\s+addCourse\s*\(/ },
                        { id: 3, description: 'Create calculateGPA function', completed: false, regex: /function\s+calculateGPA\s*\(/ },
                        { id: 4, description: 'Create getStanding function', completed: false, regex: /function\s+getStanding\s*\(/ },
                        { id: 5, description: 'Use a loop to iterate courses', completed: false, regex: /(for|while|forEach)/ },
                        { id: 6, description: 'Use if/else for standing logic', completed: false, regex: /if[\s\S]*else/ },
                        { id: 7, description: 'Call all functions and display results', completed: false, regex: /console\.log[\s\S]*calculateGPA\s*\(/ }
                    ],
                    starterFiles: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <title>GPA Calculator</title>
</head>
<body>
    <h1>🎓 ZeroCode GPA Calculator</h1>
    <p>Check console for results</p>
    <script src="script.js"></script>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: 'Segoe UI', sans-serif; padding: 40px; background: linear-gradient(135deg, #0a192f, #112240); color: white; min-height: 100vh; }
h1 { color: #64ffda; }` },
                        { name: 'script.js', language: 'javascript', content: `// ZeroCode GPA Calculator
// Build your calculator here!

// 1. Create courses array


// 2. addCourse function


// 3. calculateGPA function


// 4. getStanding function


// 5. Add some test courses


// 6. Calculate and display results

` }
                    ]
                },
                {
                    id: 'js-6-summary',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Course Complete!',
                    duration: '3 min read',
                    content: `
# 🎉 JavaScript Basics Complete!

## What You Mastered

✅ Variables & Data Types (string, number, boolean)
✅ Operators (arithmetic, comparison, logical)
✅ Conditionals (if/else, switch, ternary)
✅ Loops (for, while, for...of)
✅ Functions (declaration, parameters, return)
✅ Arrays (create, access, methods)

## Key Concepts

1. **Variables**: Use \`const\` by default, \`let\` when reassignment needed
2. **Comparisons**: Always use \`===\` for strict equality
3. **Functions**: Keep them small and focused on one task
4. **Arrays**: Zero-indexed, use methods like \`push\`, \`pop\`, \`map\`

## What's Next?

Continue with **DOM Manipulation** to make your JavaScript interact with web pages!

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler
                    `
                }
            ]
        }
    ]
};

export default jsBasicsCourse;
