
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3TypeSystem = {
    id: 'ts-unit-3',
    title: 'Unit 3: The Type System',
    description: 'Unlock the true power of TypeScript. Master Unions, Intersections, Literals, and the "Discriminated Union" pattern—the most important pattern in TS.',
    items: [
        // =====================================================================
        // SECTION 1: LITERALS & NARROWING
        // =====================================================================
        {
            id: 'ts-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Literal Types 🎯',
            duration: '20 min read',
            content: `
# Literal Types 🎯

A "Literal" is a specific value.
*   \`string\` is a set of all strings.
*   \`"Hello"\` is a set containing only one string.

## Why use them?
To create strict constraints.
\`\`\`ts
// Infinite options
let direction: string = "North"; 

// Only 4 options (Much safer!)
let strictDir: "North" | "South" | "East" | "West";
\`\`\`

## Const vs Let
\`\`\`ts
const world = "World"; // Type is "World" (Literal)
let hello = "Hello";   // Type is string (General)
\`\`\`
Because \`const\` cannot change, TS infers the most specific type possible (the literal).
            `
        },
        {
            id: 'ts-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Traffic Light',
            duration: '25 min',
            content: `
# Lab 1: The Traffic Light

We are modeling a traffic light state machine.
The state can ONLY be 'Red', 'Yellow', or 'Green'.

## The Mission
1.  **Type Alias**: Define \`LightState\` as a union of the 3 color strings.
2.  **Function**: \`nextState(current: LightState): LightState\`.
3.  **Logic**: Red -> Green -> Yellow -> Red.

## Safety
Try to return "Blue" and see TS catch the bug.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define LightState union',
                    completed: false,
                    regex: /type\s+LightState\s*=\s*["']Red["']\s*\|\s*["']Yellow["']\s*\|\s*["']Green["']/,
                    hint: 'Use pipe | to separate literals.'
                },
                {
                    id: 2,
                    description: 'Implement nextState logic',
                    completed: false,
                    regex: /current\s*===\s*["']Red["']/,
                    hint: 'If Red, return Green.'
                },
                {
                    id: 3,
                    description: 'Return LightState type',
                    completed: false,
                    regex: /\)\s*:\s*LightState/,
                    hint: 'Ensure return annotation matches.'
                }
            ],
            files: [
                {
                    name: 'traffic.ts',
                    language: 'ts',
                    content: `// 1. Define Union
// type LightState ...

// 2. Logic
function nextState(current: LightState): LightState {
function nextState(current: LightState): LightState {
    // TODO: Implement Red -> Green -> Yellow -> Red
    return "Red"; // Placeholder
}
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc traffic.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 2: DISCRIMINATED UNIONS
        // =====================================================================
        {
            id: 'ts-3-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Discriminated Unions 🦁',
            duration: '25 min read',
            content: `
# Discriminated Unions 🦁

This is the **Superpower** of TypeScript. 
Also known as "Tagged Unions" or "Algebraic Data Types".

## The Problem
You have different shapes, but they overlap.
\`\`\`ts
interface Bird { fly(): void; layEggs(): void; }
interface Fish { swim(): void; layEggs(): void; }
type Animal = Bird | Fish;

function move(animal: Animal) {
  // animal.fly(); // Error! Fish can't fly.
  // animal.layEggs(); // OK. Both can.
}
\`\`\`

## The Solution: The "Discriminant"
Add a common property (tag) literal to distinguish them.
\`\`\`ts
interface Bird { type: "bird"; fly(): void; }
interface Fish { type: "fish"; swim(): void; }
type Animal = Bird | Fish;

function move(animal: Animal) {
  if (animal.type === "bird") {
    animal.fly(); // TSA knows it's a Bird!
  } else {
    animal.swim(); // Must be a Fish!
  }
}
\`\`\`

## Why "Discriminant"?
It allows the compiled code (JS) to distinguish types at runtime using a simple string check.
            `
        },
        {
            id: 'ts-3-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Payment Gateway',
            duration: '35 min',
            content: `
# Lab 2: Payment Gateway

You are processing payments. 
*   **CreditCard**: has \`cardNumber\` (string).
*   **PayPal**: has \`email\` (string).
*   **Bitcoin**: has \`address\` (string).

## The Mission
1.  **Interfaces**: Create 3 interfaces, each with a \`method\` literal ("card", "paypal", "btc").
2.  **Union**: \`type Payment = CreditCard | PayPal | Bitcoin\`.
3.  **Narrowing**: Write a function that uses \`switch(payment.method)\` to log the correct detail.

## Exhaustiveness Checking
TypeScript is smart enough to know if you handled all cases.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Interfaces with literal method',
                    completed: false,
                    regex: /method\s*:\s*["']card["']|method\s*:\s*["']paypal["']/,
                    hint: 'Each interface needs a unique string literal for "method".'
                },
                {
                    id: 2,
                    description: 'Define Payment Union',
                    completed: false,
                    regex: /type\s+Payment\s*=\s*/,
                    hint: 'Join them with |.'
                },
                {
                    id: 3,
                    description: 'Switch on payment.method',
                    completed: false,
                    regex: /switch\s*\(\s*payment\.method\s*\)/,
                    hint: 'Use the discriminant property.'
                }
            ],
            files: [
                {
                    name: 'payment.ts',
                    language: 'ts',
                    content: `interface CreditCard {
    // TODO: method: "card", cardNumber: string
}

interface PayPal {
    // TODO: method: "paypal", email: string
}

// TODO: Define Payment Union

function process(payment: any) { // Change any to Payment
    // TODO: Switch statement
}
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc payment.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 3: TYPE ASSERTIONS & CASTING
        // =====================================================================
        {
            id: 'ts-3-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Type Assertions 🤥',
            duration: '15 min read',
            content: `
# Type Assertions 🤥

Sometimes you know more than TypeScript.
You can tell TS "Trust me, I know what I'm doing".

## Syntax
\`\`\`ts
// 'as' syntax (Preferred)
let val = someUnknownValue as string;

// Angle bracket syntax (Avoid in React/JSX)
let val = <string>someUnknownValue;
\`\`\`

## The Danger
Assertions tell the compiler to shut up. If you are wrong, you crash at runtime.
\`\`\`ts
let x = "hello" as number; // Error! (TS catches obvious lies)
let y = ("hello" as unknown) as number; // OK for compiler. Crash runtime.
\`\`\`

## Non-Null Assertion (!)
Using \`!\` tells TS "This value is definitely not null/undefined".
\`\`\`ts
const btn = document.getElementById("btn")!; // I know it exists!
\`\`\`
**Warning**: Only use this if you are 100% sure.
            `
        },
        {
            id: 'ts-3-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: DOM Casting',
            duration: '25 min',
            content: `
# Lab 3: DOM Casting

The DOM is generic. \`document.getElementById\` returns \`HTMLElement | null\`.
But \`HTMLElement\` doesn't have \`.value\`. Only \`HTMLInputElement\` does.

## The Mission
1.  **Select**: Get an element by ID "email".
2.  **Cast**: Assert it is \`HTMLInputElement\`.
3.  **Access**: Log its \`.value\`.

## Challenge
Try accessing \`.value\` without the cast and observe the error.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Select element',
                    completed: false,
                    regex: /document\.getElementById\s*\(\s*["']email["']\s*\)/,
                    hint: 'Use getElementById.'
                },
                {
                    id: 2,
                    description: 'Cast as HTMLInputElement',
                    completed: false,
                    regex: /as\s+HTMLInputElement/,
                    hint: 'Use the "as" keyword.'
                },
                {
                    id: 3,
                    description: 'Access .value',
                    completed: false,
                    regex: /\.value/,
                    hint: 'Now you can access the input-specific property.'
                }
            ],
            files: [
                {
                    name: 'dom.ts',
                    language: 'ts',
                    content: `// TODO: Get element by ID "email"
// TODO: Cast it to HTMLInputElement
// TODO: Log the .value
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc dom.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 4: TYPE PREDICATES (User Defined Guards)
        // =====================================================================
        {
            id: 'ts-3-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Type Predicates 🕵️',
            duration: '20 min read',
            content: `
# Type Predicates 🕵️

How do we teach TS about our custom checks?
Standard JS checks (\`typeof\`) work, but what about interfaces?

## The \`is\` keyword
We define a function whose *return type* is a boolean that implies a type.

\`\`\`ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
\`\`\`

If this function returns \`true\`, TS **narrows** \`pet\` to \`Fish\` in the calling block.

\`\`\`ts
if (isFish(pet)) {
  pet.swim(); // OK!
}
\`\`\`
            `
        },
        {
            id: 'ts-3-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Custom Guards',
            duration: '30 min',
            content: `
# Lab 4: Custom Guards

We have a \`User\` and an \`Admin\`. 
Admin has a \`role: "admin"\` property.

## The Mission
1.  **Define**: Interfaces \`User\` and \`Admin\`.
2.  **Guard**: Function \`isAdmin(person: User | Admin): person is Admin\`.
3.  **Check**: Return true if \`role === "admin"\`.

## Usage
If \`isAdmin(p)\` is true, we can safely access Admin-only methods.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Guard Signature',
                    completed: false,
                    regex: /person\s+is\s+Admin/,
                    hint: 'Return type should be "person is Admin".'
                },
                {
                    id: 2,
                    description: 'Check property existence/value',
                    completed: false,
                    regex: /role\s*===\s*["']admin["']/,
                    hint: 'Check the discriminatory property.'
                },
                {
                    id: 3,
                    description: 'Use the guard',
                    completed: false,
                    regex: /if\s*\(\s*isAdmin/,
                    hint: 'Call the function in an if block.'
                }
            ],
            files: [
                {
                    name: 'guards.ts',
                    language: 'ts',
                    content: `interface User { name: string; role: "user"; }
interface Admin { name: string; role: "admin"; deleteDB(): void; }

// TODO: Implement Guard
function isAdmin(p: User | Admin): boolean {
    return false; // Fix logic and return type
}

function execute(p: User | Admin) {
    if (isAdmin(p)) {
        p.deleteDB(); // TS should allow this
    }
}
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc guards.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 5: MASTERY QUIZ
        // =====================================================================
        {
            id: 'ts-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 3 Mastery Check',
            duration: '20 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is a Discriminated Union?',
                    options: [
                        'A union of literals',
                        'A union of types that share a common singleton property (discriminant)',
                        'A union that contains any',
                        'A function overload'
                    ],
                    correctIndex: 1,
                    explanation: 'The common property (like `kind` or `type`) allows TS to narrow the union to a specific member.'
                },
                {
                    id: 'q2',
                    question: 'What does the `as` keyword do?',
                    options: [
                        'Converts the type at runtime',
                        'Performs a runtime check',
                        'Asserts the type to the compiler only',
                        'Encrypts the data'
                    ],
                    correctIndex: 2,
                    explanation: 'Type assertions are removed at compile time. They are unsafe if the data does not match the assertion.'
                },
                {
                    id: 'q3',
                    question: 'What is the return type of a Type Predicate function?',
                    options: [
                        'boolean',
                        'arg is Type',
                        'true',
                        'Type'
                    ],
                    correctIndex: 1,
                    explanation: 'The syntax `arg is Type` tells TypeScript that a `true` return value implies narrowing the argument type.'
                },
                {
                    id: 'q4',
                    question: 'When should you use the Non-Null Assertion (!) operator?',
                    options: [
                        'Always',
                        'When you are lazy',
                        'When you are certain the value is not null, but TS cannot infer it',
                        'To fix syntax errors'
                    ],
                    correctIndex: 2,
                    explanation: 'It removes `null` and `undefined` from the type. Use carefully.'
                },
                {
                    id: 'q5',
                    question: 'Can you cast logic? e.g. `(5 as string)`',
                    options: [
                        'Yes, it becomes "5"',
                        'No, TS forbids casting if types do not overlap',
                        'Yes, but it crashes',
                        'No, it throws a syntax error'
                    ],
                    correctIndex: 1,
                    explanation: 'TS prevents "impossible" casts. You must use "Double Casting" via `unknown` (`5 as unknown as string`) to force it.'
                },
                {
                    id: 'q6',
                    question: 'What is the type of variable `color` here? `const color = "red";`',
                    options: [
                        'string',
                        '"red"',
                        'any',
                        'text'
                    ],
                    correctIndex: 1,
                    explanation: 'Because it is `const`, TS infers the literal type "red", which is more specific than string.'
                }
            ]
        }
    ]
};
