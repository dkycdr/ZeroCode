
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Generics = {
    id: 'ts-unit-4',
    title: 'Unit 4: Generics',
    description: 'Write reusable code that works with any data type. Master Generic Functions, Classes, and Constraints—the backbone of robust libraries.',
    items: [
        // =====================================================================
        // SECTION 1: THE CONCEPT
        // =====================================================================
        {
            id: 'ts-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: What are Generics? 🧬',
            duration: '20 min read',
            content: `
# What are Generics? 🧬

Imagine a function that echoes what you send it.
\`\`\`ts
function echo(arg: number): number { return arg; }
\`\`\`
This works for numbers. But what about strings? You'd have to write \`echoString\`.
Duplicate code is bad.

## The "Any" Solution (Bad)
\`\`\`ts
function echo(arg: any): any { return arg; }
\`\`\`
If I send "hello", I get back \`any\`. I lose type safety (e.g. \`.toUpperCase()\` is not guaranteed).

## The Generic Solution (Good)
We add a **Type Parameter** (usually \`T\`).
Think of it as a "Variable for Types".
\`\`\`ts
function echo<T>(arg: T): T {
  return arg;
}
\`\`\`
When I call \`echo("hello")\`, TS infers \`T\` is \`string\`.
The return type becomes \`string\`. Safety is preserved!
            `
        },
        {
            id: 'ts-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Wrapper',
            duration: '25 min',
            content: `
# Lab 1: The Wrapper

We need a function that wraps any value in an object: \`{ value: T }\`.

## The Mission
1.  **Generic Function**: \`wrap<T>(input: T)\`.
2.  **Return Type**: \`{ value: T }\`.
3.  **Usage**: Wrap a string and a number.

## Explicit vs Implicit
You can call it implicitly: \`wrap("hi")\` (TS Guesses T).
Or explicitly: \`wrap<string>("hi")\` (You specify T).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define generic function wrap<T>',
                    completed: false,
                    regex: /function\s+wrap\s*<\s*T\s*>/,
                    hint: 'Use the angle brackets <T>.'
                },
                {
                    id: 2,
                    description: 'Return { value: T }',
                    completed: false,
                    regex: /\)\s*:\s*\{\s*value\s*:\s*T\s*\}/,
                    hint: 'Return type annotation.'
                },
                {
                    id: 3,
                    description: 'Call with explicit type',
                    completed: false,
                    regex: /wrap\s*<\s*string\s*>/,
                    hint: 'Call it like wrapper<string>(...).'
                }
            ],
            files: [
                {
                    name: 'wrapper.ts',
                    language: 'ts',
                    content: `// 1. Definition
function wrap(input) {
    return { value: input }; // Logic is simple, but we can make them write it
}

// 2. Usage
const s = wrap("hello");
const n = wrap(10);
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc wrapper.ts
wrapper.ts:2:24 - Parameter 'input' implicitly has an 'any' type.
`
                }
            ]
        },

        // =====================================================================
        // SECTION 2: CONSTRAINTS
        // =====================================================================
        {
            id: 'ts-4-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Constraints ⛓️',
            duration: '20 min read',
            content: `
# Constraints ⛓️

Sometimes \`T\` is *too* generic.
\`\`\`ts
// TODO: function logLength
// logLength("hello");
// logLength(10); // Error
\`\`\`
            `
        },
        {
            id: 'ts-4-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: The Merchandise',
            duration: '30 min',
            content: `
# Lab 2: The Merchandise

We have a function \`printPrice\` that expects an item.
But the item MUST have a \`price\` property.

## The Mission
1.  **Interface**: \`Priced\` { price: number }.
2.  **Constraint**: \`T extends Priced\`.
3.  **Function**: \`printPrice<T>(item: T)\`.

This allows us to pass a Book, a Car, or a Laptop, as long as they have a price.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Priced interface',
                    completed: false,
                    regex: /interface\s+Priced\s*\{\s*price\s*:\s*number\s*\}/,
                    hint: 'Standard interface.'
                },
                {
                    id: 2,
                    description: 'Add constraint <T extends Priced>',
                    completed: false,
                    regex: /<\s*T\s+extends\s+Priced\s*>/,
                    hint: 'Use the extends keyword inside <>.'
                },
                {
                    id: 3,
                    description: 'Access argument.price',
                    completed: false,
                    regex: /item\.price/,
                    hint: 'Safe to access because of constraint.'
                }
            ],
            files: [
                {
                    name: 'store.ts',
                    language: 'ts',
                    content: `// TODO: Define Constraint Interface

// TODO: function printPrice
// printPrice({ name: "Book", price: 10 });
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc store.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 3: GENERIC CLASSES
        // =====================================================================
        {
            id: 'ts-4-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Generic Classes 🏗️',
            duration: '20 min read',
            content: `
# Generic Classes 🏗️

Generics aren't just for functions. They power Data Structures.

## Example: Box
\`\`\`ts
class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

const stringBox = new Box<string>("Hello");
const numBox = new Box<number>(100);
\`\`\`

## The Repository Pattern
This is standard in backend code (NestJS, TypeORM).
\`\`\`ts
class Repository<T> {
  find(id: number): T { ... }
  save(item: T): void { ... }
}
\`\`\`
            `
        },
        {
            id: 'ts-4-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Stack',
            duration: '35 min',
            content: `
# Lab 3: The Stack

Let's implement a 'Stack' data structure (Last In, First Out).
It should be able to hold *any* type, but all items in one stack instance must be the *same* type.

## The Mission
1.  **Class**: \`Stack<T>\`.
2.  **Property**: \`private items: T[] = []\`.
3.  **Methods**: \`push(item: T)\` and \`pop(): T | undefined\`.

## Private Modifier
In TS, \`private\` prevents outside access. \`stack.items\` would be an error.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define class Stack<T>',
                    completed: false,
                    regex: /class\s+Stack\s*<\s*T\s*>/,
                    hint: 'Generic class definition.'
                },
                {
                    id: 2,
                    description: 'Define private items array',
                    completed: false,
                    regex: /private\s+items\s*:\s*T\[\]/,
                    hint: 'Array of T.'
                },
                {
                    id: 3,
                    description: 'Implement push method',
                    completed: false,
                    regex: /push\s*\(\s*item\s*:\s*T\s*\)/,
                    hint: 'Push T.'
                }
            ],
            files: [
                {
                    name: 'stack.ts',
                    language: 'ts',
                    content: `class Stack {
    items = []; 
    // TODO: implement push, pop
}

const numStack = new Stack();
numStack.push(10);
numStack.push("string"); // Should fail if Generic!
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc stack.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 4: MULTIPLE GENERICS
        // =====================================================================
        {
            id: 'ts-4-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Multiple Generics 🎭',
            duration: '15 min read',
            content: `
# Multiple Generics 🎭

You can have more than one. By convention: T, U, V...

\`\`\`ts
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const result = merge({ name: "Alice" }, { age: 30 });
// result is { name: string } & { age: number }
\`\`\`

## Default Types
You can set defaults too.
\`\`\`ts
function request<T = string>(url: string): T { ... }
\`\`\`
If user calls \`request()\`, T is string. 
If user calls \`request<number>()\`, T is number.
            `
        },
        {
            id: 'ts-4-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: The Mapper',
            duration: '30 min',
            content: `
# Lab 4: The Mapper

Let's rebuild \`Array.map\`.
It takes an Input Type (T) and produces an Output Type (U).

## The Mission
1.  **Generics**: \`<T, U>\`.
2.  **Params**: \`arr: T[]\` and \`fn: (item: T) => U\`.
3.  **Return**: \`U[]\`.

## Logic
Loop through array, apply function, return new array.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define map<T, U>',
                    completed: false,
                    regex: /function\s+map\s*<\s*T\s*,\s*U\s*>/,
                    hint: 'Two generic parameters.'
                },
                {
                    id: 2,
                    description: 'Define callback type',
                    completed: false,
                    regex: /fn\s*:\s*\(\s*item\s*:\s*T\s*\)\s*=>\s*U/,
                    hint: 'Function takes T returns U.'
                },
                {
                    id: 3,
                    description: 'Return generic array U[]',
                    completed: false,
                    regex: /\)\s*:\s*U\[\]/,
                    hint: 'Return type.'
                }
            ],
            files: [
                {
                    name: 'map.ts',
                    language: 'ts',
                    content: `// Re-implementing map
function map(arr, fn) {
    // TODO: Implement loop and return new array
}

const numbers = [1, 2, 3];
const strings = map(numbers, (n) => n.toString());
// strings should be inferred as string[]
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc map.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 5: MASTERY QUIZ
        // =====================================================================
        {
            id: 'ts-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 4 Mastery Check',
            duration: '20 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the purpose of generics?',
                    options: [
                        'To make code faster',
                        'To create reusable components that work with multiple types while retaining safety',
                        'To allow "any" type without errors',
                        'To reduce bundle size'
                    ],
                    correctIndex: 1,
                    explanation: 'Generics allow you to capture the type argument (e.g., input string) and use it to denote the return type.'
                },
                {
                    id: 'q2',
                    question: 'Which syntax restricts \`T\` to be an object with an id?',
                    options: [
                        '<T implements { id: number }>',
                        '<T extends { id: number }>',
                        '<T: { id: number }>',
                        '<T instance { id: number }>'
                    ],
                    correctIndex: 1,
                    explanation: 'The `extends` keyword is used for constraints in Generics. It means "T must be assignable to this shape".'
                },
                {
                    id: 'q3',
                    question: 'Can you have default types for Generics?',
                    options: [
                        'No',
                        'Yes, e.g., <T = string>',
                        'Yes, e.g., <T default string>',
                        'Only in Classes, not functions'
                    ],
                    correctIndex: 1,
                    explanation: 'Yes, generic parameter defaults work just like function parameter defaults. If not specified, it falls back to the default.'
                },
                {
                    id: 'q4',
                    question: 'What is wrong with `function head<T>(arr: T[]) { return arr[0]; }`?',
                    options: [
                        'Nothing',
                        'It returns `any`',
                        'It works but `arr` could be empty, so return type is `T | undefined` (if strict)',
                        'It syntax error'
                    ],
                    correctIndex: 0,
                    explanation: 'Usually correct, but technically accessing index 0 is unsafe if empty. TS often infers T, but logically it is T.'
                },
                {
                    id: 'q5',
                    question: 'If `T = string` and `K extends keyof T`, what is K?',
                    options: [
                        'string',
                        'number',
                        'keyof string (methods like "toUpperCase" | "length" | ...)',
                        'any'
                    ],
                    correctIndex: 2,
                    explanation: '`keyof string` produces a union of all public property names of the String object prototype.'
                },
                {
                    id: 'q6',
                    question: 'Is `Array<number>` the same as `number[]`?',
                    options: [
                        'Yes, exactly the same',
                        'No, one is a tuple',
                        'No, Array<number> is slower',
                        'Yes, but number[] is deprecated'
                    ],
                    correctIndex: 0,
                    explanation: 'They are identical. `number[]` is just syntactic sugar for the generic `Array<number>` type.'
                }
            ]
        }
    ]
};
