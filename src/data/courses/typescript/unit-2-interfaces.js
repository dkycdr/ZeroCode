
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2Interfaces = {
    id: 'ts-unit-2',
    title: 'Unit 2: Interfaces & Complex Types',
    description: 'Structure your data with precision. Master Interfaces, Type Aliases, Index Signatures, and the art of immutable data design.',
    items: [
        // =====================================================================
        // SECTION 1: THE ETERNAL DEBATE (TYPE vs INTERFACE)
        // =====================================================================
        {
            id: 'ts-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Type vs Interface ⚔️',
            duration: '20 min read',
            content: `
# Type vs Interface ⚔️

This is the most common interview question in TypeScript.

## 1. Interface
An \`interface\` defines the shape of an Object. It is **Open** and **Extendable**.

### Feature: Declaration Merging
You can define an interface multiple times, and TS will merge them.
\`\`\`ts
interface Window {
  title: string;
}
interface Window {
  width: number;
}
// Window now has BOTH title and width.
\`\`\`
> **Use Case**: This is critical for library authors (e.g., adding properties to the global \`Window\` object).

## 2. Type Alias
A \`type\` is a definition of a name for **any** kind of type, not just objects.
It can represent:
*   Primitives: \`type ID = string;\`
*   Unions: \`type Status = "pending" | "done";\`
*   Tuples: \`type Point = [x, y];\`
*   Objects: \`type User = { name: string };\`

### Cons
*   Cannot be merged.
*   Tooltips sometimes show the raw type instead of the alias name (historically).

## The Verdict
*   Use **Interface** for public APIs and Objects.
*   Use **Type** for Unions, Primitives, Functions, and Complex utility types.
            `
        },
        {
            id: 'ts-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Blueprint',
            duration: '25 min',
            content: `
# Lab 1: The Blueprint

Let's practice defining complex object shapes for an E-Commerce API.
We need to model a \`Product\` and a \`CartItem\`.

## Nested Interfaces
Interfaces can contain other interfaces.

\`\`\`ts
interface Address {
  street: string;
}
interface User {
  address: Address; // Nested
}
\`\`\`

## Your Mission
1.  **Define Interface**: \`Category\` (id: number, name: string).
2.  **Define Interface**: \`Product\` (id: number, title: string, category: Category).
3.  **Use**: Create a product object that matches the shape.

## Common Error
If you miss a property, TS will yell "Property 'x' is missing".
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Category Interface',
                    completed: false,
                    regex: /interface\s+Category\s*\{\s*id\s*:\s*number[\s\S]*name\s*:\s*string/s,
                    hint: 'Needs id (number) and name (string).'
                },
                {
                    id: 2,
                    description: 'Define Product Interface with nested Category',
                    completed: false,
                    regex: /interface\s+Product\s*\{[\s\S]*category\s*:\s*Category/s,
                    hint: 'The category property should have type Category.'
                },
                {
                    id: 3,
                    description: 'Create Valid Product Object',
                    completed: false,
                    regex: /const\s+laptop\s*:\s*Product\s*=\s*\{/,
                    hint: 'Initialize the object matching the structure.'
                }
            ],
            files: [
                {
                    name: 'models.ts',
                    language: 'ts',
                    content: `// 1. Define Category
// interface Category ...

// 2. Define Product
// interface Product ...

// 3. Instantiate
const laptop = {
    // TODO: Add properties matching Product interface
    id: 101,
};
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc models.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 2: IMMUTABILITY & OPTIONALITY
        // =====================================================================
        {
            id: 'ts-2-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Readonly & Optional 🔒',
            duration: '20 min read',
            content: `
# Readonly & Optional 🔒

## The \`readonly\` Modifier
Properties can be marked as read-only. This means they can be written during initialization, but **never changed** afterwards.
This is amazing for Functional Programming patterns (Immutability).

\`\`\`ts
interface Point {
  readonly x: number;
  readonly y: number;
}
const p: Point = { x: 10, y: 20 };
p.x = 5; // Error!
\`\`\`

## The \`?\` Modifier (Optional)
Not every object has every property.
\`\`\`ts
interface User {
  email: string;
  avatar?: string; // string | undefined
}
\`\`\`

## Safe Access
If a property is optional, you must check for it.
\`\`\`ts
// Modern JS/TS Syntax
console.log(user.avatar?.toUpperCase());
\`\`\`
            `
        },
        {
            id: 'ts-2-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Immutable Config',
            duration: '30 min',
            content: `
# Lab 2: Immutable Config

You are building a Database Connection module. 
The configuration should be set once and NEVER changed at runtime.

## The Mission
1.  **Interface**: \`DBConfig\`.
2.  **Readonly**: \`host\` (string), \`port\` (number).
3.  **Optional**: \`password\` (string, generic "local" doesn't need it).
4.  **Error Check**: Try to modify the host after creation.

## Mental Model
Think of \`readonly\` as \`const\`, but for object properties.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define DBConfig with readonly host',
                    completed: false,
                    regex: /readonly\s+host\s*:\s*string/,
                    hint: 'Use the readonly modifier.'
                },
                {
                    id: 2,
                    description: 'Make password optional',
                    completed: false,
                    regex: /password\?:\s*string/,
                    hint: 'Use the ? syntax.'
                },
                {
                    id: 3,
                    description: 'Attempt assignment (demonstrate error)',
                    completed: false,
                    regex: /config\.host\s*=\s*/,
                    hint: 'Try to assign a new string to config.host.'
                }
            ],
            files: [
                {
                    name: 'db.ts',
                    language: 'ts',
                    content: `interface DBConfig {
    // TODO: host, port, optional password
}

const config: DBConfig = {
    host: "localhost",
    port: 5432
};

// TODO: Try to crash it
// config.host = "192.168.1.1";
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc db.ts
db.ts:10:8 - error TS2540: Cannot assign to 'host' because it is a read-only property.
`
                }
            ]
        },

        // =====================================================================
        // SECTION 3: INDEX SIGNATURES & DICTIONARIES
        // =====================================================================
        {
            id: 'ts-2-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Dynamic Keys 🗂️',
            duration: '20 min read',
            content: `
# Index Signatures 🗂️

Typical interfaces have **Known Keys** (name, age).
But what if you are building a Cache? Or parsing a JSON object where user IDs are keys?
You don't know the key names ahead of time.

## Syntax
\`\`\`ts
interface StringMap {
  [key: string]: string;
}

const dict: StringMap = {};
dict["anything"] = "value";
dict["something_else"] = "value";
\`\`\`

## Constraints
1.  Key must be \`string\` or \`number\`.
2.  All **named** properties must adhere to the index signature type.
\`\`\`ts
interface Bad {
  [key: string]: number;
  name: string; // Error! 'string' is not assignable to 'number' index type.
}
\`\`\`

## Record Utility Type
Alternatively, use \`Record<K, T>\`.
\`\`\`ts
type StringMap = Record<string, string>;
\`\`\`
            `
        },
        {
            id: 'ts-2-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Session Cache',
            duration: '30 min',
            content: `
# Lab 3: The Session Cache

We need an in-memory store for user sessions.
Key = Session Token (string), Value = User (Object).

## The Mission
1.  **Define User**: Type with \`username\` property.
2.  **Define Cache**: Interface with Index Signature \`[token: string]: User\`.
3.  **Operation**: Add a user to the cache.

## Why?
This pattern is ubiquitous in Redux, Caching layers, and Data transformations.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define User interface',
                    completed: false,
                    regex: /interface\s+User/,
                    hint: 'Simple interface with username.'
                },
                {
                    id: 2,
                    description: 'Define SessionCache with Index Signature',
                    completed: false,
                    regex: /\[\s*token\s*:\s*string\s*\]\s*:\s*User/,
                    hint: 'Use square brackets for key definition.'
                },
                {
                    id: 3,
                    description: 'Add entry to cache',
                    completed: false,
                    regex: /sessions\[["'].*["']\]\s*=\s*\{/,
                    hint: 'sessions["abc"] = { username: "Bob" }'
                }
            ],
            files: [
                {
                    name: 'cache.ts',
                    language: 'ts',
                    content: `interface User {
    username: string;
}

interface SessionCache {
    // TODO: Add index signature
}

const sessions: SessionCache = {};

// Adding dynamic keys
// Adding dynamic keys
// TODO: Add a user to the session cache
// sessions[...] = ...
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc cache.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 4: INHERITANCE vs INTERSECTION
        // =====================================================================
        {
            id: 'ts-2-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Inheritance Patterns 🧬',
            duration: '20 min read',
            content: `
# Inheritance Patterns 🧬

How do we compose types?

## 1. Interface Inheritance (\`extends\`)
The Object Oriented approach.
\`\`\`ts
interface Animal { 
  name: string; 
}
interface Dog extends Animal { 
  bark(): void; 
}
\`\`\`
**Pro**: Performance is better (TS caches the structure). Errors are cleaner.

## 2. Type Intersection (\`&\`)
The Functional / Mathematical approach.
\`\`\`ts
type Animal = { name: string };
type Dog = Animal & { bark(): void };
\`\`\`
**Pro**: Can combine anything (Unions & Objects).

## Which to use?
*   Use \`extends\` for hierarchical object models.
*   Use \`&\` (Intersection) for Quick combinations (like Props in React).
            `
        },
        {
            id: 'ts-2-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Component Props',
            duration: '35 min',
            content: `
# Lab 4: Component Props

We are building a UI library.
We have a \`BaseProps\` (className, style) that EVERY component needs.
We have \`ButtonProps\` that needs those + \`onClick\`.

## The Mission
1.  **Define**: \`BaseProps\` (className?: string).
2.  **Inherit**: \`ButtonProps extends BaseProps\`.
3.  **Add**: \`label\` (string) and \`onClick\` (function).

## Functional Approach
Try implementing it with \`type\` and \`&\` as an alternative exercise mentally.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define BaseProps (optional className)',
                    completed: false,
                    regex: /interface\s+BaseProps[\s\S]*className\?:\s*string/,
                    hint: 'Base interface.'
                },
                {
                    id: 2,
                    description: 'Extend BaseProps in ButtonProps',
                    completed: false,
                    regex: /interface\s+ButtonProps\s+extends\s+BaseProps/,
                    hint: 'Use extends keyword.'
                },
                {
                    id: 3,
                    description: 'Add onClick handler',
                    completed: false,
                    regex: /onClick\s*:\s*\(\)\s*=>\s*void/,
                    hint: 'Function type: () => void.'
                }
            ],
            files: [
                {
                    name: 'props.ts',
                    language: 'ts',
                    content: `// 1. Base
interface BaseProps {
    id?: string;
    // TODO: className
}

// 2. Extend
interface ButtonProps {
    type: "submit" | "button";
    // TODO: extend BaseProps
    // TODO: Add onClick
}

const btn: ButtonProps = {
    type: "submit",
    className: "bg-blue-500", // Should work if extended
    // TODO: Add onClick handler
};
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc props.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 5: HYBRID TYPES
        // =====================================================================
        {
            id: 'ts-2-9',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Hybrid Types 👽',
            duration: '15 min read',
            content: `
# Hybrid Types 👽

In JavaScript, a function is also an object. It can have properties.
TypeScript allows this via Hybrid Interfaces.

\`\`\`ts
interface Counter {
  (start: number): string; // Callable signature
  interval: number; // Property
  reset(): void; // Method
}

function getCounter(): Counter {
  let counter = ((start: number) => "Started") as Counter;
  counter.interval = 123;
  counter.reset = () => {};
  return counter;
}
\`\`\`

This is rare in modern code, but common in libraries like jQuery or Lodash (\`_\` is a function AND an object).
            `
        },

        // =====================================================================
        // SECTION 6: MASTERY QUIZ
        // =====================================================================
        {
            id: 'ts-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 2 Mastery Check',
            duration: '20 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the key difference between Interface and Type?',
                    options: [
                        'Interfaces disappear at runtime, Types do not.',
                        'Interfaces create a new name, Types just create an alias.',
                        'Interfaces support Declaration Merging, Types do not.',
                        'Types can implement Classes, Interfaces cannot.'
                    ],
                    correctIndex: 2,
                    explanation: 'Declaration Merging allows multiple interface declarations with the same name to merge into one. Types throw a duplicate identifier error.'
                },
                {
                    id: 'q2',
                    question: 'Which syntax creates a Read-Only property?',
                    options: [
                        'const name: string;',
                        'readonly name: string;',
                        'static name: string;',
                        'final name: string;'
                    ],
                    correctIndex: 1,
                    explanation: 'The `readonly` modifier in interfaces/types prevents assignment after initialization.'
                },
                {
                    id: 'q3',
                    question: 'How do you define an Index Signature for a string-to-number map?',
                    options: [
                        '{ [key: string]: number }',
                        '{ key: string => number }',
                        'Map<string, number>',
                        '{ [string]: number }'
                    ],
                    correctIndex: 0,
                    explanation: 'The syntax is `[key: Type]: ReturnType`. The name `key` is arbitrary.'
                },
                {
                    id: 'q4',
                    question: 'Can an interface extend a Class?',
                    options: [
                        'No, never.',
                        'Yes, it inherits the public/private structure.',
                        'Only if the class is abstract.',
                        'Only in strict mode.'
                    ],
                    correctIndex: 1,
                    explanation: 'Yes! Interfaces can extend classes in TS. They inherit the members but not the implementation. This is advanced usage.'
                },
                {
                    id: 'q5',
                    question: 'What happens if you define an optional property `age?: number`?',
                    options: [
                        'It overrides any other age property.',
                        'The type becomes `number | undefined`.',
                        'It becomes `number | null`.',
                        'It is ignored by the compiler.'
                    ],
                    correctIndex: 1,
                    explanation: 'Optionality adds `undefined` to the domain of valid values.'
                },
                {
                    id: 'q6',
                    question: 'Which is better for defining a Union Type?',
                    options: [
                        'Interface',
                        'Type Alias',
                        'Enum',
                        'Class'
                    ],
                    correctIndex: 1,
                    explanation: 'Interfaces cannot represent Unions (A | B). You MUST use a Type Alias.'
                }
            ]
        }
    ]
};
