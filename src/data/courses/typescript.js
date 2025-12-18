// TypeScript - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const typescriptCourse = {
    id: 'typescript',
    title: 'TypeScript',
    description: 'Add type safety to JavaScript with TypeScript - catch errors before runtime.',
    
    units: [
        // ============================================
        // UNIT 1: TypeScript Basics
        // ============================================
        {
            id: 'ts-unit-1',
            title: 'TypeScript Basics',
            description: 'Understand what TypeScript is and basic type annotations',
            items: [
                {
                    id: 'ts-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is TypeScript?',
                    duration: '10 min read',
                    content: `
# What is TypeScript?

## TypeScript = JavaScript + Types

**TypeScript** is a superset of JavaScript that adds static type checking. Every valid JavaScript is valid TypeScript!

\`\`\`typescript
// JavaScript
let name = "John";
name = 42; // No error, but might cause bugs!

// TypeScript
let name: string = "John";
name = 42; // Error: Type 'number' is not assignable to type 'string'
\`\`\`

## Why TypeScript?

| Problem in JavaScript | TypeScript Solution |
|----------------------|---------------------|
| Runtime errors | Catch errors at compile time |
| No autocomplete | Full IntelliSense support |
| Hard to refactor | Safe refactoring |
| Unclear function params | Type annotations |
| No documentation | Types ARE documentation |

## How TypeScript Works

\`\`\`
TypeScript (.ts) → TypeScript Compiler (tsc) → JavaScript (.js)
\`\`\`

1. You write TypeScript code
2. Compiler checks for type errors
3. Compiles to plain JavaScript
4. JavaScript runs in browser/Node.js

## TypeScript vs JavaScript

\`\`\`javascript
// JavaScript - No type safety
function add(a, b) {
    return a + b;
}
add("5", 3); // "53" - string concatenation, not addition!

// TypeScript - Type safe
function add(a: number, b: number): number {
    return a + b;
}
add("5", 3); // Error! Argument of type 'string' is not assignable
\`\`\`

## Who Uses TypeScript?

- Microsoft (creator)
- Google (Angular)
- Airbnb, Slack, Asana
- Most modern React projects

> 💡 TypeScript is the #2 most loved language (Stack Overflow Survey 2023)
                    `
                },
                {
                    id: 'ts-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Basic Types',
                    duration: '20 min',
                    content: `
# Basic Types in TypeScript

## What is Type Annotation?

Type annotation tells TypeScript what type of data a variable can hold. The syntax is: TypeName after the variable name.

Why important:
- Catch errors during development, not at runtime
- Better autocomplete in your editor
- Self-documenting code
- Safer refactoring

## Primitive Types

### String - Text
\`\`\`typescript
let name: string = "John";
let message: string = 'Hello World';

// Error - cannot assign number to string
name = 42;  // Type 'number' is not assignable to type 'string'
\`\`\`

### Number - Integers and Floats
\`\`\`typescript
let age: number = 25;           // Integer
let price: number = 99.99;      // Float
let negative: number = -10;     // Negative
let hex: number = 0xFF;         // Hexadecimal
\`\`\`

### Boolean - True or False
\`\`\`typescript
let isActive: boolean = true;
let isCompleted: boolean = false;

// Comparison results are also boolean
let isGreater: boolean = 10 > 5;  // true
\`\`\`

### Null and Undefined
\`\`\`typescript
let nothing: null = null;           // Intentional absence
let notDefined: undefined = undefined;  // Not yet assigned
\`\`\`

## Type Inference

TypeScript can automatically detect the type based on the value:

\`\`\`typescript
let name = "John";           // TypeScript infers: string
let age = 25;                // TypeScript infers: number
let isActive = true;         // TypeScript infers: boolean

// After inference, TypeScript enforces the type
name = 42;  // Error! Type 'number' is not assignable to type 'string'
\`\`\`

When to use explicit type vs inference:
- Explicit: When the type is not clear from the value
- Inference: When the type is obvious from the value (cleaner code)

## Arrays

### Array with Specific Type
\`\`\`typescript
// Array of strings - can only contain strings
let names: string[] = ["John", "Jane", "Bob"];
names.push("Alice");  // OK
names.push(123);      // Error!

// Array of numbers
let scores: number[] = [85, 90, 78];
scores.push(92);      // OK
scores.push("A");     // Error!
\`\`\`

### Alternative Syntax
\`\`\`typescript
// Both ways are equivalent:
let names1: string[] = ["John"];
let names2: Array<string> = ["John"];
\`\`\`

### Union Types (Multiple Types)
\`\`\`typescript
// Array that can contain string OR number
let mixed: (string | number)[] = ["John", 25, "Jane", 30];

// But avoid this if possible - less type-safe
\`\`\`

## Tuples (Fixed-Length Arrays)

A tuple is an array with a fixed length and specific types at each position:

\`\`\`typescript
// Tuple: [string, number]
let person: [string, number] = ["John", 25];

// Access like a regular array
console.log(person[0]);  // "John" (string)
console.log(person[1]);  // 25 (number)

// TypeScript knows the type at each position
person[0].toUpperCase();  // OK - string method
person[1].toFixed(2);     // OK - number method

// Error - wrong type or position
let wrong: [string, number] = [25, "John"];  // Reversed!
let incomplete: [string, number] = ["John"];  // Missing number!
\`\`\`

### Tuple with Optional Elements
\`\`\`typescript
// Third element is optional
let optional: [string, number, boolean?] = ["John", 25];
let withThird: [string, number, boolean?] = ["John", 25, true];

// Both are valid
\`\`\`

## Any - Escape Hatch (Avoid!)

\`\`\`typescript
let anything: any = "hello";
anything = 42;              // OK
anything = true;            // OK
anything.foo.bar.baz();     // OK (but can error at runtime!)

// Using 'any' defeats the purpose of TypeScript
// Only use when absolutely necessary
\`\`\`

## Unknown - Safer Alternative to Any

\`\`\`typescript
let value: unknown = "hello";
value = 42;                 // OK
value = true;               // OK

// But must check type before using
if (typeof value === "string") {
    console.log(value.toUpperCase());  // OK - TypeScript knows it's string
}

// Without check:
console.log(value.toUpperCase());  // Error! value could be anything
\`\`\`

## Summary

- string: Text data like "John" or 'hello'
- number: Numeric values like 25, 3.14, or -10
- boolean: true or false for conditions
- null: Intentional absence of value
- undefined: Variable not yet assigned
- string[]: Array of strings like ["a", "b"]
- [string, number]: Tuple with fixed structure like ["John", 25]
- any: Avoid using - defeats TypeScript purpose
- unknown: Safer alternative to any

// Access like array
console.log(person[0]); // "John"
console.log(person[1]); // 25

// Error: wrong order
let wrong: [string, number] = [25, "John"]; // Error!
\`\`\`

## Any (Escape Hatch)

\`\`\`typescript
let anything: any = "hello";
anything = 42;      // OK
anything = true;    // OK
anything.foo.bar;   // OK (but dangerous!)
\`\`\`

> ⚠️ Avoid \`any\` - it defeats the purpose of TypeScript!

## Unknown (Safer Any)

\`\`\`typescript
let value: unknown = "hello";
value = 42; // OK

// Must check type before using
if (typeof value === "string") {
    console.log(value.toUpperCase()); // OK
}
\`\`\`

---

## Your Mission
Add type annotations to variables.
                    `,
                    tasks: [
                        { id: 1, description: 'Add string type: let username: string = "John" (line 3)', completed: false, regex: /let\s+username\s*:\s*string\s*=/ },
                        { id: 2, description: 'Add number type: let age: number = 25 (line 4)', completed: false, regex: /let\s+age\s*:\s*number\s*=/ },
                        { id: 3, description: 'Add boolean type: let isStudent: boolean = true (line 5)', completed: false, regex: /let\s+isStudent\s*:\s*boolean\s*=/ },
                        { id: 4, description: 'Add array type: let hobbies: string[] = [...] (line 6)', completed: false, regex: /let\s+hobbies\s*:\s*string\[\]\s*=/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>TypeScript Basics</title></head>
<body><h1>TypeScript Types</h1><p>Check the TypeScript file</p></body>
</html>` },
                        { name: 'script.ts', language: 'typescript', content: `` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` }
                    ]
                },
                {
                    id: 'ts-1-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Functions with Types',
                    duration: '20 min',
                    content: `
# Functions with Types

## Function Parameter Types

\`\`\`typescript
function greet(name: string) {
    return "Hello, " + name;
}

greet("John");  // OK
greet(42);      // Error: Argument of type 'number' is not assignable
\`\`\`

## Return Type

\`\`\`typescript
function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return "Hello, " + name;
}

// Void - function returns nothing
function log(message: string): void {
    console.log(message);
}
\`\`\`

## Optional Parameters

\`\`\`typescript
function greet(name: string, greeting?: string): string {
    return (greeting || "Hello") + ", " + name;
}

greet("John");           // "Hello, John"
greet("John", "Hi");     // "Hi, John"
\`\`\`

## Default Parameters

\`\`\`typescript
function greet(name: string, greeting: string = "Hello"): string {
    return greeting + ", " + name;
}

greet("John");           // "Hello, John"
greet("John", "Hi");     // "Hi, John"
\`\`\`

## Arrow Functions

\`\`\`typescript
const add = (a: number, b: number): number => a + b;

const greet = (name: string): string => \`Hello, \${name}\`;

// With array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((n: number): number => n * 2);
\`\`\`

## Function Types

\`\`\`typescript
// Define function type
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
\`\`\`

---

## Your Mission
Add types to functions.
                    `,
                    tasks: [
                        { id: 1, description: 'Add parameter types: function add(a: number, b: number) (line 3)', completed: false, regex: /function\s+add\s*\(\s*a\s*:\s*number\s*,\s*b\s*:\s*number\s*\)/ },
                        { id: 2, description: 'Add return type: function add(...): number (line 3)', completed: false, regex: /function\s+add\s*\([^)]*\)\s*:\s*number/ },
                        { id: 3, description: 'Add optional parameter: function greet(name: string, greeting?: string) (line 8)', completed: false, regex: /greeting\s*\?\s*:\s*string/ },
                        { id: 4, description: 'Add void return type: function logMessage(msg: string): void (line 13)', completed: false, regex: /function\s+logMessage\s*\([^)]*\)\s*:\s*void/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>TypeScript Functions</title></head>
<body><h1>Functions with Types</h1></body>
</html>` },
                        { name: 'script.ts', language: 'typescript', content: `// Add types to these functions
` },
                        { name: 'style.css', language: 'css', content: `` }
                    ]
                },
                {
                    id: 'ts-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'TypeScript Basics Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is TypeScript?',
                            options: ['A new programming language', 'JavaScript with type annotations', 'A JavaScript framework', 'A database'],
                            correctIndex: 1,
                            explanation: 'TypeScript is a superset of JavaScript that adds static type checking. All JavaScript is valid TypeScript.'
                        },
                        {
                            id: 'q2',
                            question: 'What does ": number" mean in "let age: number = 25"?',
                            options: ['age equals number', 'age is a type', 'age can only hold numbers', 'age is optional'],
                            correctIndex: 2,
                            explanation: 'The type annotation ": number" means the variable can only hold number values.'
                        },
                        {
                            id: 'q3',
                            question: 'What does "?" mean in function parameters?',
                            options: ['Required parameter', 'Optional parameter', 'Unknown type', 'Error'],
                            correctIndex: 1,
                            explanation: 'The ? makes a parameter optional, meaning it can be omitted when calling the function.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 2: Interfaces & Type Aliases
        // ============================================
        {
            id: 'ts-unit-2',
            title: 'Interfaces & Type Aliases',
            description: 'Define custom types for objects and complex data',
            items: [
                {
                    id: 'ts-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Interfaces',
                    duration: '25 min',
                    content: `
# Interfaces - Define Object Shapes

## Basic Interface

\`\`\`typescript
interface User {
    name: string;
    age: number;
    email: string;
}

const user: User = {
    name: "John",
    age: 25,
    email: "john@example.com"
};

// Error: missing property
const badUser: User = {
    name: "Jane"
    // Error: Property 'age' is missing
};
\`\`\`

## Optional Properties

\`\`\`typescript
interface User {
    name: string;
    age: number;
    email?: string;  // Optional
}

const user: User = {
    name: "John",
    age: 25
    // email is optional, no error
};
\`\`\`

## Readonly Properties

\`\`\`typescript
interface User {
    readonly id: number;
    name: string;
}

const user: User = { id: 1, name: "John" };
user.name = "Jane";  // OK
user.id = 2;         // Error: Cannot assign to 'id' because it is read-only
\`\`\`

## Methods in Interfaces

\`\`\`typescript
interface User {
    name: string;
    greet(): string;
    setAge(age: number): void;
}

const user: User = {
    name: "John",
    greet() {
        return \`Hello, I'm \${this.name}\`;
    },
    setAge(age) {
        console.log(\`Age set to \${age}\`);
    }
};
\`\`\`

## Extending Interfaces

\`\`\`typescript
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

const employee: Employee = {
    name: "John",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
};
\`\`\`

---

## Your Mission
Create interfaces for a product catalog.
                    `,
                    tasks: [
                        { id: 1, description: 'Create Product interface with name: string, price: number (line 3)', completed: false, regex: /interface\s+Product\s*\{[\s\S]*name\s*:\s*string[\s\S]*price\s*:\s*number/ },
                        { id: 2, description: 'Add optional description property: description?: string (line 6)', completed: false, regex: /description\s*\?\s*:\s*string/ },
                        { id: 3, description: 'Add readonly id property: readonly id: number (line 4)', completed: false, regex: /readonly\s+id\s*:\s*number/ },
                        { id: 4, description: 'Create a product object using the interface (line 12)', completed: false, regex: /const\s+\w+\s*:\s*Product\s*=/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>TypeScript Interfaces</title></head>
<body><h1>Interfaces</h1></body>
</html>` },
                        { name: 'script.ts', language: 'typescript', content: `// Create interfaces
` },
                        { name: 'style.css', language: 'css', content: `` }
                    ]
                },
                {
                    id: 'ts-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Type Aliases',
                    duration: '20 min',
                    content: `
# Type Aliases - Custom Type Names

## Basic Type Alias

\`\`\`typescript
type ID = string | number;

let userId: ID = "abc123";
userId = 42; // Also valid

type Point = {
    x: number;
    y: number;
};

const center: Point = { x: 0, y: 0 };
\`\`\`

## Union Types

\`\`\`typescript
type Status = "pending" | "approved" | "rejected";

let orderStatus: Status = "pending";
orderStatus = "approved";  // OK
orderStatus = "cancelled"; // Error: not in union
\`\`\`

## Intersection Types

\`\`\`typescript
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
    department: string;
};

type Staff = Person & Employee;

const staff: Staff = {
    name: "John",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
};
\`\`\`

## Interface vs Type Alias

| Feature | Interface | Type Alias |
|---------|-----------|------------|
| Object shapes | ✅ | ✅ |
| Extend/Inherit | ✅ extends | ✅ & (intersection) |
| Union types | ❌ | ✅ |
| Declaration merging | ✅ | ❌ |
| Primitives | ❌ | ✅ |

\`\`\`typescript
// Interface - can be extended
interface Animal {
    name: string;
}
interface Animal {
    age: number;
}
// Animal now has both name and age!

// Type - cannot be redeclared
type Pet = { name: string };
type Pet = { age: number }; // Error!
\`\`\`

> 💡 Use **interface** for objects, **type** for unions and primitives.

---

## Your Mission
Create type aliases for an e-commerce app.
                    `,
                    tasks: [
                        { id: 1, description: 'Create union type: type Status = "pending" | "shipped" | "delivered" (line 3)', completed: false, regex: /type\s+Status\s*=\s*["']pending["']\s*\|\s*["']shipped["']\s*\|\s*["']delivered["']/ },
                        { id: 2, description: 'Create type alias for ID: type OrderID = string | number (line 5)', completed: false, regex: /type\s+OrderID\s*=\s*string\s*\|\s*number/ },
                        { id: 3, description: 'Create intersection type: type OrderWithCustomer = Order & Customer (line 20)', completed: false, regex: /type\s+OrderWithCustomer\s*=\s*Order\s*&\s*Customer/ },
                        { id: 4, description: 'Use the Status type in a variable (line 25)', completed: false, regex: /let\s+\w+\s*:\s*Status\s*=/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Type Aliases</title></head>
<body><h1>Type Aliases</h1></body>
</html>` },
                        { name: 'script.ts', language: 'typescript', content: `// Create type aliases
` },
                        { name: 'style.css', language: 'css', content: `` }
                    ]
                },
                {
                    id: 'ts-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Interfaces & Types Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the difference between interface and type?',
                            options: ['No difference', 'Interface is for objects, type can do unions', 'Type is newer', 'Interface is deprecated'],
                            correctIndex: 1,
                            explanation: 'Interfaces are best for object shapes and can be extended. Type aliases can also define unions, intersections, and primitives.'
                        },
                        {
                            id: 'q2',
                            question: 'What does "?" mean in interface properties?',
                            options: ['Required', 'Optional', 'Nullable', 'Unknown'],
                            correctIndex: 1,
                            explanation: 'The ? makes a property optional, meaning objects don\'t need to include it.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 3: Generics
        // ============================================
        {
            id: 'ts-unit-3',
            title: 'Generics',
            description: 'Create reusable components with type parameters',
            items: [
                {
                    id: 'ts-3-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Generic Functions',
                    duration: '25 min',
                    content: `
# Generics - Reusable Type-Safe Code

## The Problem

\`\`\`typescript
// Without generics - need separate functions
function getFirstString(arr: string[]): string {
    return arr[0];
}

function getFirstNumber(arr: number[]): number {
    return arr[0];
}

// Or use 'any' (loses type safety)
function getFirst(arr: any[]): any {
    return arr[0];
}
\`\`\`

## The Solution: Generics

\`\`\`typescript
// Generic function - works with any type!
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

// TypeScript infers the type
const firstString = getFirst(["a", "b", "c"]); // string
const firstNumber = getFirst([1, 2, 3]);       // number

// Or specify explicitly
const first = getFirst<string>(["a", "b"]);
\`\`\`

## Multiple Type Parameters

\`\`\`typescript
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const result = pair("hello", 42); // [string, number]
const result2 = pair(true, { name: "John" }); // [boolean, object]
\`\`\`

## Generic Constraints

\`\`\`typescript
// T must have a length property
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void {
    console.log(item.length);
}

logLength("hello");     // OK - string has length
logLength([1, 2, 3]);   // OK - array has length
logLength({ length: 5 }); // OK - object has length
logLength(42);          // Error - number has no length
\`\`\`

## Generic with keyof

\`\`\`typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { name: "John", age: 25 };
const name = getProperty(user, "name"); // string
const age = getProperty(user, "age");   // number
getProperty(user, "email"); // Error: "email" not in user
\`\`\`

---

## Your Mission
Create generic functions.
                    `,
                    tasks: [
                        { id: 1, description: 'Create generic function: function identity<T>(value: T): T (line 3)', completed: false, regex: /function\s+identity\s*<\s*T\s*>\s*\(\s*value\s*:\s*T\s*\)\s*:\s*T/ },
                        { id: 2, description: 'Create generic array function: function getFirst<T>(arr: T[]): T (line 8)', completed: false, regex: /function\s+getFirst\s*<\s*T\s*>\s*\(\s*arr\s*:\s*T\[\]\s*\)/ },
                        { id: 3, description: 'Create function with two type params: function merge<T, U>(a: T, b: U) (line 13)', completed: false, regex: /function\s+merge\s*<\s*T\s*,\s*U\s*>/ },
                        { id: 4, description: 'Add constraint: function longest<T extends { length: number }>(a: T, b: T) (line 18)', completed: false, regex: /function\s+longest\s*<\s*T\s+extends\s*\{[^}]*length/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Generics</title></head>
<body><h1>Generic Functions</h1></body>
</html>` },
                        { name: 'script.ts', language: 'typescript', content: `// Create generic functions
` },
                        { name: 'style.css', language: 'css', content: `` }
                    ]
                },
                {
                    id: 'ts-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Generic Interfaces & Classes',
                    duration: '20 min',
                    content: `
# Generic Interfaces & Classes

## Generic Interfaces

\`\`\`typescript
interface Container<T> {
    value: T;
    getValue(): T;
}

const stringContainer: Container<string> = {
    value: "hello",
    getValue() {
        return this.value;
    }
};

const numberContainer: Container<number> = {
    value: 42,
    getValue() {
        return this.value;
    }
};
\`\`\`

## Generic Classes

\`\`\`typescript
class Box<T> {
    private content: T;
    
    constructor(value: T) {
        this.content = value;
    }
    
    getValue(): T {
        return this.content;
    }
    
    setValue(value: T): void {
        this.content = value;
    }
}

const stringBox = new Box<string>("hello");
console.log(stringBox.getValue()); // "hello"

const numberBox = new Box(42); // Type inferred
console.log(numberBox.getValue()); // 42
\`\`\`

## Generic with Default Type

\`\`\`typescript
interface Response<T = any> {
    data: T;
    status: number;
}

const response1: Response = { data: "anything", status: 200 };
const response2: Response<User> = { data: { name: "John" }, status: 200 };
\`\`\`

## Real-World Example: API Response

\`\`\`typescript
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

interface User {
    id: number;
    name: string;
}

interface Product {
    id: number;
    title: string;
    price: number;
}

// Same interface, different data types
const userResponse: ApiResponse<User> = {
    data: { id: 1, name: "John" },
    success: true,
    message: "User fetched"
};

const productResponse: ApiResponse<Product[]> = {
    data: [{ id: 1, title: "Laptop", price: 999 }],
    success: true,
    message: "Products fetched"
};
\`\`\`

---

## Your Mission
Create generic interfaces and classes.
                    `,
                    tasks: [
                        { id: 1, description: 'Create generic interface: interface Result<T> { data: T; error?: string } (line 3)', completed: false, regex: /interface\s+Result\s*<\s*T\s*>\s*\{[\s\S]*data\s*:\s*T/ },
                        { id: 2, description: 'Create generic class: class Stack<T> { ... } (line 10)', completed: false, regex: /class\s+Stack\s*<\s*T\s*>/ },
                        { id: 3, description: 'Add push method: push(item: T): void (line 14)', completed: false, regex: /push\s*\(\s*item\s*:\s*T\s*\)/ },
                        { id: 4, description: 'Add pop method: pop(): T | undefined (line 18)', completed: false, regex: /pop\s*\(\s*\)\s*:\s*T\s*\|\s*undefined/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Generic Classes</title></head>
<body><h1>Generic Interfaces & Classes</h1></body>
</html>` },
                        { name: 'script.ts', language: 'typescript', content: `// Create generic interfaces and classes
` },
                        { name: 'style.css', language: 'css', content: `` }
                    ]
                },
                {
                    id: 'ts-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Generics Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the purpose of generics?',
                            options: ['Make code faster', 'Create reusable type-safe components', 'Replace interfaces', 'Add comments'],
                            correctIndex: 1,
                            explanation: 'Generics allow you to create reusable components that work with multiple types while maintaining type safety.'
                        },
                        {
                            id: 'q2',
                            question: 'What does <T extends HasLength> mean?',
                            options: ['T is exactly HasLength', 'T must have properties of HasLength', 'T replaces HasLength', 'T is optional'],
                            correctIndex: 1,
                            explanation: 'The extends constraint means T must have at least the properties defined in HasLength.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 4: Advanced Types
        // ============================================
        {
            id: 'ts-unit-4',
            title: 'Advanced Types',
            description: 'Master utility types and advanced patterns',
            items: [
                {
                    id: 'ts-4-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Utility Types',
                    duration: '25 min',
                    content: `
# Utility Types - Built-in Type Helpers

TypeScript provides utility types to transform types easily.

## Partial<T> - All Properties Optional

\`\`\`typescript
interface User {
    name: string;
    age: number;
    email: string;
}

// All properties become optional
type PartialUser = Partial<User>;
// { name?: string; age?: number; email?: string; }

// Useful for updates
function updateUser(user: User, updates: Partial<User>): User {
    return { ...user, ...updates };
}

updateUser(user, { age: 26 }); // Only update age
\`\`\`

## Required<T> - All Properties Required

\`\`\`typescript
interface Config {
    host?: string;
    port?: number;
}

type RequiredConfig = Required<Config>;
// { host: string; port: number; }
\`\`\`

## Pick<T, K> - Select Properties

\`\`\`typescript
interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type PublicUser = Pick<User, "id" | "name" | "email">;
// { id: number; name: string; email: string; }
\`\`\`

## Omit<T, K> - Remove Properties

\`\`\`typescript
type UserWithoutPassword = Omit<User, "password">;
// { id: number; name: string; email: string; }
\`\`\`

## Record<K, T> - Create Object Type

\`\`\`typescript
type Status = "pending" | "approved" | "rejected";

type StatusMessages = Record<Status, string>;
// { pending: string; approved: string; rejected: string; }

const messages: StatusMessages = {
    pending: "Waiting for review",
    approved: "Request approved",
    rejected: "Request denied"
};
\`\`\`

## Readonly<T> - All Properties Readonly

\`\`\`typescript
type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = { id: 1, name: "John", email: "john@test.com", password: "123" };
user.name = "Jane"; // Error: Cannot assign to 'name'
\`\`\`

---

## Your Mission
Use utility types to transform interfaces.
                    `,
                    tasks: [
                        { id: 1, description: 'Create partial type: type UpdateProduct = Partial<Product> (line 12)', completed: false, regex: /type\s+UpdateProduct\s*=\s*Partial\s*<\s*Product\s*>/ },
                        { id: 2, description: 'Create pick type: type ProductPreview = Pick<Product, "id" | "name"> (line 15)', completed: false, regex: /type\s+ProductPreview\s*=\s*Pick\s*<\s*Product\s*,/ },
                        { id: 3, description: 'Create omit type: type ProductWithoutPrice = Omit<Product, "price"> (line 18)', completed: false, regex: /type\s+ProductWithoutPrice\s*=\s*Omit\s*<\s*Product\s*,/ },
                        { id: 4, description: 'Create record type: type CategoryProducts = Record<string, Product[]> (line 21)', completed: false, regex: /type\s+CategoryProducts\s*=\s*Record\s*</ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Utility Types</title></head>
<body><h1>Utility Types</h1></body>
</html>` },
                        { name: 'script.ts', language: 'typescript', content: `// Practice Utility Types
` },
                        { name: 'style.css', language: 'css', content: `` }
                    ]
                },
                {
                    id: 'ts-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Type Guards',
                    duration: '20 min',
                    content: `
# Type Guards - Narrow Types at Runtime

## typeof Guard

\`\`\`typescript
function process(value: string | number) {
    if (typeof value === "string") {
        // TypeScript knows value is string here
        return value.toUpperCase();
    } else {
        // TypeScript knows value is number here
        return value.toFixed(2);
    }
}
\`\`\`

## instanceof Guard

\`\`\`typescript
class Dog {
    bark() { console.log("Woof!"); }
}

class Cat {
    meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else {
        animal.meow();
    }
}
\`\`\`

## in Operator Guard

\`\`\`typescript
interface Bird {
    fly(): void;
}

interface Fish {
    swim(): void;
}

function move(animal: Bird | Fish) {
    if ("fly" in animal) {
        animal.fly();
    } else {
        animal.swim();
    }
}
\`\`\`

## Custom Type Guards

\`\`\`typescript
interface User {
    type: "user";
    name: string;
}

interface Admin {
    type: "admin";
    name: string;
    permissions: string[];
}

// Custom type guard function
function isAdmin(person: User | Admin): person is Admin {
    return person.type === "admin";
}

function greet(person: User | Admin) {
    if (isAdmin(person)) {
        console.log(\`Admin \${person.name} with \${person.permissions.length} permissions\`);
    } else {
        console.log(\`User \${person.name}\`);
    }
}
\`\`\`

## Discriminated Unions

\`\`\`typescript
interface Circle {
    kind: "circle";
    radius: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Rectangle;

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
    }
}
\`\`\`

---

## Your Mission
Implement type guards.
                    `,
                    tasks: [
                        { id: 1, description: 'Use typeof guard: if (typeof value === "string") (line 5)', completed: false, regex: /if\s*\(\s*typeof\s+\w+\s*===\s*["']string["']\s*\)/ },
                        { id: 2, description: 'Use in operator: if ("fly" in animal) (line 15)', completed: false, regex: /if\s*\(\s*["']fly["']\s+in\s+\w+\s*\)/ },
                        { id: 3, description: 'Create custom type guard: function isCircle(shape): shape is Circle (line 25)', completed: false, regex: /function\s+isCircle\s*\([^)]*\)\s*:\s*\w+\s+is\s+Circle/ },
                        { id: 4, description: 'Use discriminated union with switch (line 30)', completed: false, regex: /switch\s*\(\s*\w+\.kind\s*\)/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>Type Guards</title></head>
<body><h1>Type Guards</h1></body>
</html>` },
                        { name: 'script.ts', language: 'typescript', content: `// Practice Type Guards
` },
                        { name: 'style.css', language: 'css', content: `` }
                    ]
                },
                {
                    id: 'ts-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Advanced Types Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does Partial<T> do?',
                            options: ['Makes all properties required', 'Makes all properties optional', 'Removes all properties', 'Adds new properties'],
                            correctIndex: 1,
                            explanation: 'Partial<T> makes all properties of T optional, useful for update operations.'
                        },
                        {
                            id: 'q2',
                            question: 'What is a type guard?',
                            options: ['A security feature', 'A way to narrow types at runtime', 'A type of interface', 'A compiler option'],
                            correctIndex: 1,
                            explanation: 'Type guards are runtime checks that narrow the type of a variable within a conditional block.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 5: TypeScript with React
        // ============================================
        {
            id: 'ts-unit-5',
            title: 'TypeScript with React',
            description: 'Use TypeScript in React applications',
            items: [
                {
                    id: 'ts-5-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'TypeScript + React Setup',
                    duration: '10 min read',
                    content: `
# TypeScript with React

## Why TypeScript + React?

- **Props validation** at compile time
- **Better autocomplete** for props and state
- **Catch errors** before runtime
- **Self-documenting** components

## Creating a TypeScript React Project

\`\`\`bash
# Vite (recommended)
npm create vite@latest my-app -- --template react-ts

# Create React App
npx create-react-app my-app --template typescript
\`\`\`

## File Extensions

| Extension | Use For |
|-----------|---------|
| \`.ts\` | TypeScript without JSX |
| \`.tsx\` | TypeScript with JSX (React components) |

## Basic Component Types

\`\`\`tsx
// Function component
const Greeting: React.FC = () => {
    return <h1>Hello!</h1>;
};

// With props
interface GreetingProps {
    name: string;
    age?: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
    return <h1>Hello, {name}! {age && \`Age: \${age}\`}</h1>;
};

// Or without React.FC (preferred by many)
function Greeting({ name, age }: GreetingProps) {
    return <h1>Hello, {name}!</h1>;
}
\`\`\`

## Common React Types

\`\`\`typescript
// Event types
React.MouseEvent<HTMLButtonElement>
React.ChangeEvent<HTMLInputElement>
React.FormEvent<HTMLFormElement>
React.KeyboardEvent<HTMLInputElement>

// Children
React.ReactNode  // Anything renderable
React.ReactElement  // JSX element only

// Refs
React.RefObject<HTMLInputElement>
\`\`\`
                    `
                },
                {
                    id: 'ts-5-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Typing React Components',
                    duration: '25 min',
                    content: `
# Typing React Components

## Props Interface

\`\`\`tsx
interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
}

function Button({ label, onClick, variant = "primary", disabled }: ButtonProps) {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled}
            className={variant}
        >
            {label}
        </button>
    );
}
\`\`\`

## Children Prop

\`\`\`tsx
interface CardProps {
    title: string;
    children: React.ReactNode;
}

function Card({ title, children }: CardProps) {
    return (
        <div className="card">
            <h2>{title}</h2>
            {children}
        </div>
    );
}

// Usage
<Card title="Welcome">
    <p>This is the card content</p>
</Card>
\`\`\`

## Event Handlers

\`\`\`tsx
function Form() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form
    };
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Clicked!");
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} />
            <button onClick={handleClick}>Submit</button>
        </form>
    );
}
\`\`\`

## useState with Types

\`\`\`tsx
// Type is inferred
const [count, setCount] = useState(0);

// Explicit type
const [user, setUser] = useState<User | null>(null);

// Array type
const [items, setItems] = useState<string[]>([]);
\`\`\`

---

## Your Mission
Create typed React components.
                    `,
                    tasks: [
                        { id: 1, description: 'Create props interface: interface UserCardProps { name: string; email: string } (line 3)', completed: false, regex: /interface\s+UserCardProps\s*\{[\s\S]*name\s*:\s*string/ },
                        { id: 2, description: 'Type the component props: function UserCard({ name, email }: UserCardProps) (line 8)', completed: false, regex: /function\s+UserCard\s*\(\s*\{[^}]*\}\s*:\s*UserCardProps\s*\)/ },
                        { id: 3, description: 'Type event handler: const handleClick = (e: React.MouseEvent<HTMLButtonElement>) (line 15)', completed: false, regex: /const\s+handleClick\s*=\s*\(\s*e\s*:\s*React\.MouseEvent/ },
                        { id: 4, description: 'Type useState: const [user, setUser] = useState<User | null>(null) (line 20)', completed: false, regex: /useState\s*<\s*User\s*\|\s*null\s*>\s*\(\s*null\s*\)/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html><head><title>TypeScript React</title></head>
<body><div id="root"></div></body>
</html>` },
                        { name: 'App.tsx', language: 'typescript', content: `import React, { useState } from 'react';

// Create typed React components
` },
                        { name: 'style.css', language: 'css', content: `.card { padding: 20px; border: 1px solid #ddd; border-radius: 8px; }` }
                    ]
                },
                {
                    id: 'ts-5-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'TypeScript React Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What file extension is used for React components with TypeScript?',
                            options: ['.ts', '.tsx', '.jsx', '.react'],
                            correctIndex: 1,
                            explanation: '.tsx is used for TypeScript files that contain JSX (React components).'
                        },
                        {
                            id: 'q2',
                            question: 'How do you type a click event handler in React?',
                            options: ['onClick: Function', 'onClick: () => void', 'e: React.MouseEvent<HTMLButtonElement>', 'e: ClickEvent'],
                            correctIndex: 2,
                            explanation: 'React provides specific event types like React.MouseEvent<HTMLButtonElement> for type-safe event handling.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 6: Final Project - Task Management App
        // ============================================
        {
            id: 'ts-unit-6',
            title: 'Final Project: Task Management App',
            description: 'Build a complete type-safe task management application using all TypeScript concepts',
            items: [
                {
                    id: 'ts-6-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Project Overview',
                    duration: '10 min read',
                    content: `
# Final Project: Type-Safe Task Manager

## What You'll Build

A complete task management application with:
- **Type-safe models** for tasks, users, and projects
- **Generic utilities** for data manipulation
- **Discriminated unions** for task status
- **Utility types** for API responses
- **Type guards** for runtime safety

## Features

| Feature | TypeScript Concepts |
|---------|---------------------|
| Task CRUD | Interfaces, Types |
| User management | Generics, Utility Types |
| Project organization | Discriminated Unions |
| Filtering & sorting | Type Guards |
| API layer | Generic Response Types |

## Project Structure

\`\`\`
src/
├── types/
│   ├── task.ts      # Task interfaces
│   ├── user.ts      # User interfaces
│   ├── project.ts   # Project interfaces
│   └── api.ts       # API response types
├── utils/
│   ├── validators.ts # Type guards
│   └── helpers.ts    # Generic utilities
├── services/
│   └── taskService.ts # Business logic
└── app.ts            # Main application
\`\`\`

## Skills Applied

- Basic types & type inference
- Interfaces & type aliases
- Generics & constraints
- Utility types (Partial, Pick, Omit)
- Type guards & discriminated unions
- TypeScript with classes

> 🎯 This project combines everything you've learned into a real-world application!
                    `
                },
                {
                    id: 'ts-6-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Part 1: Type Definitions',
                    duration: '30 min',
                    content: `
# Part 1: Defining Types

## Task Types

\`\`\`typescript
// Task priority levels
type Priority = 'low' | 'medium' | 'high' | 'urgent';

// Task status with discriminated union
type TaskStatus = 
    | { status: 'todo'; createdAt: Date }
    | { status: 'in-progress'; startedAt: Date }
    | { status: 'completed'; completedAt: Date }
    | { status: 'cancelled'; cancelledAt: Date; reason: string };

// Base task interface
interface Task {
    id: string;
    title: string;
    description?: string;
    priority: Priority;
    dueDate?: Date;
    tags: string[];
    assigneeId?: string;
    projectId: string;
}

// Full task with status
type FullTask = Task & TaskStatus;
\`\`\`

## User Types

\`\`\`typescript
type UserRole = 'admin' | 'manager' | 'member' | 'viewer';

interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
    createdAt: Date;
}

// User with permissions
interface UserWithPermissions extends User {
    permissions: {
        canCreate: boolean;
        canEdit: boolean;
        canDelete: boolean;
        canAssign: boolean;
    };
}
\`\`\`

## Project Types

\`\`\`typescript
interface Project {
    id: string;
    name: string;
    description: string;
    ownerId: string;
    memberIds: string[];
    createdAt: Date;
    updatedAt: Date;
}

// Project with computed stats
interface ProjectWithStats extends Project {
    stats: {
        totalTasks: number;
        completedTasks: number;
        overdueTasks: number;
    };
}
\`\`\`

---

## Your Mission
Create the type definitions for the task manager.
                    `,
                    tasks: [
                        { id: 1, description: 'Create Priority type: type Priority = "low" | "medium" | "high" | "urgent"', completed: false, regex: /type\s+Priority\s*=\s*["']low["']\s*\|\s*["']medium["']\s*\|\s*["']high["']\s*\|\s*["']urgent["']/ },
                        { id: 2, description: 'Create Task interface with id, title, priority, projectId', completed: false, regex: /interface\s+Task\s*\{[\s\S]*id\s*:\s*string[\s\S]*title\s*:\s*string[\s\S]*priority\s*:\s*Priority/ },
                        { id: 3, description: 'Create User interface with id, name, email, role', completed: false, regex: /interface\s+User\s*\{[\s\S]*id\s*:\s*string[\s\S]*name\s*:\s*string[\s\S]*email\s*:\s*string/ },
                        { id: 4, description: 'Create Project interface with id, name, ownerId, memberIds array', completed: false, regex: /interface\s+Project\s*\{[\s\S]*id\s*:\s*string[\s\S]*memberIds\s*:\s*string\[\]/ }
                    ],
                    files: [
                        { name: 'types/task.ts', language: 'typescript', content: `// Task Type Definitions

// 1. Create Priority type (union of: low, medium, high, urgent)


// Task status options
type TaskStatus = 'todo' | 'in-progress' | 'completed' | 'cancelled';

// 2. Create Task interface
interface Task {
    // id: string
    // title: string
    // description?: string (optional)
    // priority: Priority
    // status: TaskStatus
    // dueDate?: Date (optional)
    // tags: string[]
    // assigneeId?: string (optional)
    // projectId: string
}

// Export types
export { Priority, TaskStatus, Task };
` },
                        { name: 'types/user.ts', language: 'typescript', content: `// User Type Definitions

type UserRole = 'admin' | 'manager' | 'member' | 'viewer';

// 3. Create User interface
interface User {
    // id: string
    // name: string
    // email: string
    // role: UserRole
    // avatar?: string (optional)
    // createdAt: Date
}

// Permissions type
interface Permissions {
    canCreate: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canAssign: boolean;
}

// User with permissions
type UserWithPermissions = User & { permissions: Permissions };

export { UserRole, User, Permissions, UserWithPermissions };
` },
                        { name: 'types/project.ts', language: 'typescript', content: `// Project Type Definitions

// 4. Create Project interface
interface Project {
    // id: string
    // name: string
    // description: string
    // ownerId: string
    // memberIds: string[]
    // createdAt: Date
    // updatedAt: Date
}

// Project statistics
interface ProjectStats {
    totalTasks: number;
    completedTasks: number;
    overdueTasks: number;
    completionRate: number;
}

// Project with stats
type ProjectWithStats = Project & { stats: ProjectStats };

export { Project, ProjectStats, ProjectWithStats };
` }
                    ]
                },
                {
                    id: 'ts-6-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Part 2: Generic Utilities',
                    duration: '30 min',
                    content: `
# Part 2: Generic Utilities

## API Response Type

\`\`\`typescript
// Generic API response
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    timestamp: Date;
}

// Paginated response
interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

// Usage
type TaskResponse = ApiResponse<Task>;
type TaskListResponse = PaginatedResponse<Task>;
\`\`\`

## Generic CRUD Operations

\`\`\`typescript
// Generic repository interface
interface Repository<T, CreateDTO, UpdateDTO> {
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T | null>;
    create(data: CreateDTO): Promise<T>;
    update(id: string, data: UpdateDTO): Promise<T>;
    delete(id: string): Promise<boolean>;
}

// Task DTOs using utility types
type CreateTaskDTO = Omit<Task, 'id' | 'createdAt'>;
type UpdateTaskDTO = Partial<Omit<Task, 'id'>>;
\`\`\`

## Generic Filter & Sort

\`\`\`typescript
// Generic filter function
function filterBy<T, K extends keyof T>(
    items: T[],
    key: K,
    value: T[K]
): T[] {
    return items.filter(item => item[key] === value);
}

// Generic sort function
function sortBy<T, K extends keyof T>(
    items: T[],
    key: K,
    order: 'asc' | 'desc' = 'asc'
): T[] {
    return [...items].sort((a, b) => {
        if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
        return 0;
    });
}

// Usage
const highPriorityTasks = filterBy(tasks, 'priority', 'high');
const sortedByTitle = sortBy(tasks, 'title', 'asc');
\`\`\`

---

## Your Mission
Create generic utilities for the task manager.
                    `,
                    tasks: [
                        { id: 1, description: 'Create ApiResponse<T> interface with success, data, message', completed: false, regex: /interface\s+ApiResponse\s*<\s*T\s*>\s*\{[\s\S]*success\s*:\s*boolean[\s\S]*data\s*:\s*T/ },
                        { id: 2, description: 'Create CreateTaskDTO using Omit: type CreateTaskDTO = Omit<Task, "id">',  completed: false, regex: /type\s+CreateTaskDTO\s*=\s*Omit\s*<\s*Task\s*,/ },
                        { id: 3, description: 'Create UpdateTaskDTO using Partial: type UpdateTaskDTO = Partial<Task>', completed: false, regex: /type\s+UpdateTaskDTO\s*=\s*Partial\s*</ },
                        { id: 4, description: 'Create generic filterBy function: function filterBy<T, K extends keyof T>(...)', completed: false, regex: /function\s+filterBy\s*<\s*T\s*,\s*K\s+extends\s+keyof\s+T\s*>/ }
                    ],
                    files: [
                        { name: 'types/api.ts', language: 'typescript', content: `// API Type Definitions
import { Task } from './task';

// 1. Create generic ApiResponse interface
interface ApiResponse<T> {
    // success: boolean
    // data: T
    // message?: string
    // timestamp: Date
}

// Error response
interface ApiError {
    success: false;
    error: {
        code: string;
        message: string;
    };
}

// Paginated response
interface PaginatedResponse<T> {
    success: boolean;
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

// 2. Create CreateTaskDTO (Task without id)
// type CreateTaskDTO = Omit<Task, 'id'>;

// 3. Create UpdateTaskDTO (Partial Task)
// type UpdateTaskDTO = Partial<Task>;

export { ApiResponse, ApiError, PaginatedResponse };
` },
                        { name: 'utils/helpers.ts', language: 'typescript', content: `// Generic Helper Functions

// 4. Create generic filterBy function
// function filterBy<T, K extends keyof T>(items: T[], key: K, value: T[K]): T[]
function filterBy(items, key, value) {
    return items.filter(item => item[key] === value);
}

// Generic sortBy function
function sortBy<T, K extends keyof T>(
    items: T[],
    key: K,
    order: 'asc' | 'desc' = 'asc'
): T[] {
    return [...items].sort((a, b) => {
        if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
        if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
        return 0;
    });
}

// Generic groupBy function
function groupBy<T, K extends keyof T>(
    items: T[],
    key: K
): Record<string, T[]> {
    return items.reduce((groups, item) => {
        const groupKey = String(item[key]);
        groups[groupKey] = groups[groupKey] || [];
        groups[groupKey].push(item);
        return groups;
    }, {} as Record<string, T[]>);
}

export { filterBy, sortBy, groupBy };
` }
                    ]
                },
                {
                    id: 'ts-6-4',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Part 3: Type Guards & Validation',
                    duration: '25 min',
                    content: `
# Part 3: Type Guards & Validation

## Task Status Type Guards

\`\`\`typescript
interface TodoTask extends Task {
    status: 'todo';
}

interface InProgressTask extends Task {
    status: 'in-progress';
    startedAt: Date;
}

interface CompletedTask extends Task {
    status: 'completed';
    completedAt: Date;
}

type AnyTask = TodoTask | InProgressTask | CompletedTask;

// Type guards
function isTodo(task: AnyTask): task is TodoTask {
    return task.status === 'todo';
}

function isInProgress(task: AnyTask): task is InProgressTask {
    return task.status === 'in-progress';
}

function isCompleted(task: AnyTask): task is CompletedTask {
    return task.status === 'completed';
}
\`\`\`

## Using Type Guards

\`\`\`typescript
function getTaskDuration(task: AnyTask): string {
    if (isCompleted(task)) {
        // TypeScript knows task has completedAt
        const duration = task.completedAt.getTime() - task.createdAt.getTime();
        return \`Completed in \${Math.round(duration / 86400000)} days\`;
    }
    
    if (isInProgress(task)) {
        // TypeScript knows task has startedAt
        const elapsed = Date.now() - task.startedAt.getTime();
        return \`In progress for \${Math.round(elapsed / 86400000)} days\`;
    }
    
    return 'Not started';
}
\`\`\`

## Validation with Type Guards

\`\`\`typescript
interface ValidationResult {
    valid: boolean;
    errors: string[];
}

function validateTask(data: unknown): data is Task {
    if (typeof data !== 'object' || data === null) return false;
    
    const task = data as Record<string, unknown>;
    
    return (
        typeof task.id === 'string' &&
        typeof task.title === 'string' &&
        task.title.length > 0 &&
        ['low', 'medium', 'high', 'urgent'].includes(task.priority as string)
    );
}

// Usage
function processTask(data: unknown) {
    if (validateTask(data)) {
        // TypeScript knows data is Task
        console.log(data.title);
    } else {
        console.log('Invalid task data');
    }
}
\`\`\`

---

## Your Mission
Implement type guards for the task manager.
                    `,
                    tasks: [
                        { id: 1, description: 'Create isCompleted type guard: function isCompleted(task): task is CompletedTask', completed: false, regex: /function\s+isCompleted\s*\([^)]*\)\s*:\s*\w+\s+is\s+CompletedTask/ },
                        { id: 2, description: 'Create isHighPriority type guard checking priority === "high" || "urgent"', completed: false, regex: /function\s+isHighPriority\s*\([^)]*\)\s*:\s*\w+\s+is/ },
                        { id: 3, description: 'Create validateTask function that checks if data is Task', completed: false, regex: /function\s+validateTask\s*\([^)]*\)\s*:\s*\w+\s+is\s+Task/ },
                        { id: 4, description: 'Use type guard in getTaskInfo function with if statement', completed: false, regex: /if\s*\(\s*isCompleted\s*\(\s*task\s*\)\s*\)/ }
                    ],
                    files: [
                        { name: 'utils/validators.ts', language: 'typescript', content: `// Type Guards and Validators
import { Task, Priority } from '../types/task';

// Task with status variants
interface TodoTask extends Task { status: 'todo'; }
interface InProgressTask extends Task { status: 'in-progress'; startedAt: Date; }
interface CompletedTask extends Task { status: 'completed'; completedAt: Date; }

type AnyTask = TodoTask | InProgressTask | CompletedTask;

// 1. Create isCompleted type guard
function isCompleted(task: AnyTask) {
    return task.status === 'completed';
}

// 2. Create isHighPriority type guard
function isHighPriority(task: Task) {
    return task.priority === 'high' || task.priority === 'urgent';
}

// 3. Create validateTask type guard
function validateTask(data: unknown) {
    if (typeof data !== 'object' || data === null) return false;
    const task = data as Record<string, unknown>;
    return typeof task.id === 'string' && typeof task.title === 'string';
}

// 4. Use type guards in this function
function getTaskInfo(task: AnyTask): string {
    // Use isCompleted type guard here
    // if (isCompleted(task)) {
    //     return \`Completed on \${task.completedAt}\`;
    // }
    return \`Status: \${task.status}\`;
}

export { isCompleted, isHighPriority, validateTask, getTaskInfo, AnyTask };
` }
                    ]
                },
                {
                    id: 'ts-6-5',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Part 4: Task Service Class',
                    duration: '35 min',
                    content: `
# Part 4: Building the Task Service

## Complete Task Service

\`\`\`typescript
import { Task, Priority } from '../types/task';
import { ApiResponse } from '../types/api';

type CreateTaskDTO = Omit<Task, 'id' | 'createdAt'>;
type UpdateTaskDTO = Partial<Omit<Task, 'id'>>;

class TaskService {
    private tasks: Map<string, Task> = new Map();
    
    // Generate unique ID
    private generateId(): string {
        return 'task_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    // Create task
    async create(data: CreateTaskDTO): Promise<ApiResponse<Task>> {
        const task: Task = {
            ...data,
            id: this.generateId(),
            createdAt: new Date()
        };
        
        this.tasks.set(task.id, task);
        
        return {
            success: true,
            data: task,
            message: 'Task created successfully',
            timestamp: new Date()
        };
    }
    
    // Get all tasks with optional filters
    async findAll(filters?: {
        status?: Task['status'];
        priority?: Priority;
        projectId?: string;
    }): Promise<ApiResponse<Task[]>> {
        let tasks = Array.from(this.tasks.values());
        
        if (filters) {
            if (filters.status) {
                tasks = tasks.filter(t => t.status === filters.status);
            }
            if (filters.priority) {
                tasks = tasks.filter(t => t.priority === filters.priority);
            }
            if (filters.projectId) {
                tasks = tasks.filter(t => t.projectId === filters.projectId);
            }
        }
        
        return {
            success: true,
            data: tasks,
            timestamp: new Date()
        };
    }
    
    // Update task
    async update(id: string, data: UpdateTaskDTO): Promise<ApiResponse<Task>> {
        const existing = this.tasks.get(id);
        
        if (!existing) {
            throw new Error('Task not found');
        }
        
        const updated: Task = { ...existing, ...data };
        this.tasks.set(id, updated);
        
        return {
            success: true,
            data: updated,
            message: 'Task updated successfully',
            timestamp: new Date()
        };
    }
    
    // Delete task
    async delete(id: string): Promise<ApiResponse<boolean>> {
        const deleted = this.tasks.delete(id);
        
        return {
            success: deleted,
            data: deleted,
            message: deleted ? 'Task deleted' : 'Task not found',
            timestamp: new Date()
        };
    }
}
\`\`\`

---

## Your Mission
Complete the TaskService class.
                    `,
                    tasks: [
                        { id: 1, description: 'Create TaskService class with private tasks: Map<string, Task>', completed: false, regex: /class\s+TaskService\s*\{[\s\S]*private\s+tasks\s*:\s*Map\s*<\s*string\s*,\s*Task\s*>/ },
                        { id: 2, description: 'Implement create method: async create(data: CreateTaskDTO): Promise<ApiResponse<Task>>', completed: false, regex: /async\s+create\s*\(\s*data\s*:\s*CreateTaskDTO\s*\)\s*:\s*Promise\s*<\s*ApiResponse\s*<\s*Task\s*>\s*>/ },
                        { id: 3, description: 'Implement findAll method with filters parameter', completed: false, regex: /async\s+findAll\s*\([^)]*filters/ },
                        { id: 4, description: 'Implement update method: async update(id: string, data: UpdateTaskDTO)', completed: false, regex: /async\s+update\s*\(\s*id\s*:\s*string\s*,\s*data\s*:\s*UpdateTaskDTO\s*\)/ },
                        { id: 5, description: 'Implement delete method returning Promise<ApiResponse<boolean>>', completed: false, regex: /async\s+delete\s*\(\s*id\s*:\s*string\s*\)\s*:\s*Promise\s*<\s*ApiResponse\s*<\s*boolean\s*>\s*>/ }
                    ],
                    files: [
                        { name: 'services/taskService.ts', language: 'typescript', content: `// Task Service - Complete CRUD Operations
import { Task, Priority } from '../types/task';

// API Response type
interface ApiResponse<T> {
    success: boolean;
    data: T;
    message?: string;
    timestamp: Date;
}

// DTOs
type CreateTaskDTO = Omit<Task, 'id' | 'createdAt'>;
type UpdateTaskDTO = Partial<Omit<Task, 'id'>>;

// Filter options
interface TaskFilters {
    status?: Task['status'];
    priority?: Priority;
    projectId?: string;
}

// 1. Create TaskService class
class TaskService {
    // private tasks: Map<string, Task> = new Map();
    
    private generateId(): string {
        return 'task_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }
    
    // 2. Implement create method
    async create(data: CreateTaskDTO) {
        // Create task with generated id and createdAt
        // Add to map
        // Return ApiResponse<Task>
    }
    
    // 3. Implement findAll with filters
    async findAll(filters?: TaskFilters) {
        // Get all tasks from map
        // Apply filters if provided
        // Return ApiResponse<Task[]>
    }
    
    // Find by ID
    async findById(id: string): Promise<ApiResponse<Task | null>> {
        const task = this.tasks.get(id) || null;
        return {
            success: !!task,
            data: task,
            timestamp: new Date()
        };
    }
    
    // 4. Implement update method
    async update(id: string, data: UpdateTaskDTO) {
        // Find existing task
        // Merge with updates
        // Save and return
    }
    
    // 5. Implement delete method
    async delete(id: string) {
        // Delete from map
        // Return success boolean
    }
}

export { TaskService, CreateTaskDTO, UpdateTaskDTO, TaskFilters };
` },
                        { name: 'app.ts', language: 'typescript', content: `// Main Application
import { TaskService } from './services/taskService';
import { Task, Priority } from './types/task';

async function main() {
    const taskService = new TaskService();
    
    // Create tasks
    const task1 = await taskService.create({
        title: 'Learn TypeScript',
        description: 'Complete the TypeScript course',
        priority: 'high',
        status: 'in-progress',
        tags: ['learning', 'typescript'],
        projectId: 'proj_1'
    });
    
    console.log('Created:', task1.data);
    
    // Get all tasks
    const allTasks = await taskService.findAll();
    console.log('All tasks:', allTasks.data);
    
    // Filter by priority
    const highPriority = await taskService.findAll({ priority: 'high' });
    console.log('High priority:', highPriority.data);
    
    // Update task
    if (task1.data) {
        const updated = await taskService.update(task1.data.id, {
            status: 'completed'
        });
        console.log('Updated:', updated.data);
    }
}

main().catch(console.error);
` }
                    ]
                },
                {
                    id: 'ts-6-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'TypeScript Final Quiz',
                    duration: '10 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the benefit of using discriminated unions for task status?',
                            options: ['Faster code', 'Type-safe status handling with specific properties per status', 'Smaller bundle size', 'Better styling'],
                            correctIndex: 1,
                            explanation: 'Discriminated unions allow TypeScript to narrow types based on a common property, ensuring each status has its required properties.'
                        },
                        {
                            id: 'q2',
                            question: 'Why use Omit<Task, "id"> for CreateTaskDTO?',
                            options: ['To make id optional', 'To exclude id since it is generated server-side', 'To rename id', 'To make id required'],
                            correctIndex: 1,
                            explanation: 'Omit removes properties from a type. CreateTaskDTO excludes id because it will be generated when creating the task.'
                        },
                        {
                            id: 'q3',
                            question: 'What does "task is CompletedTask" mean in a type guard?',
                            options: ['Assignment', 'Comparison', 'Type predicate - narrows the type', 'Type casting'],
                            correctIndex: 2,
                            explanation: 'Type predicates tell TypeScript that if the function returns true, the parameter is of the specified type within that scope.'
                        },
                        {
                            id: 'q4',
                            question: 'Why use Map<string, Task> instead of Task[] for storage?',
                            options: ['Maps are faster for everything', 'O(1) lookup by id vs O(n) array search', 'Maps use less memory', 'Arrays cannot store objects'],
                            correctIndex: 1,
                            explanation: 'Map provides O(1) constant time lookup by key, while finding an item in an array requires O(n) linear search.'
                        },
                        {
                            id: 'q5',
                            question: 'What TypeScript feature ensures filterBy works with any object type?',
                            options: ['any type', 'Generics with keyof constraint', 'Type casting', 'Interface'],
                            correctIndex: 1,
                            explanation: 'Generics with "K extends keyof T" ensure the key parameter is a valid property of the object type T.'
                        }
                    ]
                }
            ]
        }
    ]
};

export default typescriptCourse;
