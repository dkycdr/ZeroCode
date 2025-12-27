
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6Advanced = {
    id: 'ts-unit-6',
    title: 'Unit 6: Advanced TypeScript',
    description: 'Become a TypeScript Wizard. Master Mapped Types, Conditional Types, Template Literals, and the `infer` keyword.',
    items: [
        // =====================================================================
        // SECTION 1: KEYOF & TYPEOF
        // =====================================================================
        {
            id: 'ts-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Type Operators 🧮',
            duration: '20 min read',
            content: `
# Type Operators 🧮

## \`keyof\`
Returns a union of specific string literals for the keys of an object.
\`\`\`ts
interface User { name: string; age: number; }
type UserKeys = keyof User; // "name" | "age"
\`\`\`

## \`typeof\`
Extracts the type from a value (variable, function, class).
\`\`\`ts
const CONFIG = { port: 3000, db: "mongo" };
type Config = typeof CONFIG; // { port: number; db: string; }
\`\`\`
**Pro Tip**: Useful for typing configuration objects without writing a separate interface.

## Indexed Access
You can grab a property type like you grab property values.
\`\`\`ts
type Age = User["age"]; // number
\`\`\`
            `
        },
        {
            id: 'ts-6-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Safe Getter',
            duration: '25 min',
            content: `
# Lab 1: The Safe Getter

We need a function \`getProp(obj, key)\` that is perfectly typesafe.
It should ONLY allow keys that exist on the object.

## The Mission
1.  **Generics**: \`<T, K>\`.
2.  **Constraint**: \`K extends keyof T\`.
3.  **Return**: \`T[K]\`.

## Magic
Notice how when you type the second argument, IntelliSense autocompletes the keys!
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define <T, K extends keyof T>',
                    completed: false,
                    regex: /<\s*T\s*,\s*K\s+extends\s+keyof\s+T\s*>/,
                    hint: 'Constraint is critical.'
                },
                {
                    id: 2,
                    description: 'Type parameters (obj: T, key: K)',
                    completed: false,
                    regex: /obj\s*:\s*T\s*,\s*key\s*:\s*K/,
                    hint: 'Arguments.'
                },
                {
                    id: 3,
                    description: 'Return T[K]',
                    completed: false,
                    regex: /\)\s*:\s*T\[K\]/,
                    hint: 'Indexed Access Type.'
                }
            ],
            files: [
                {
                    name: 'get.ts',
                    language: 'ts',
                    content: `// TODO: Define function getProp with generics

const user = { name: "Alice", age: 30 };
const n = getProp(user, "name"); // Should be string
// const x = getProp(user, "bad"); // Should Error
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc get.ts
get.ts:1:18 - Parameter 'obj' implicitly has an 'any' type.
`
                }
            ]
        },

        // =====================================================================
        // SECTION 2: MAPPED TYPES
        // =====================================================================
        {
            id: 'ts-6-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Mapped Types 🗺️',
            duration: '25 min read',
            content: `
# Mapped Types 🗺️

Mapped types allow you to create new types by transforming existing ones.
They work like \`Array.map\`, but for Types.

## Syntax
\`\`\`ts
type Result<T> = {
  [Key in keyof T]: T[Key];
};
\`\`\`

## Modifiers
You can add or remove modifiers (\`?\`, \`readonly\`).
\`\`\`ts
// Make everything optional (Partial<T>)
type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

// Remove readonly (-readonly)
type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};
\`\`\`
            `
        },
        {
            id: 'ts-6-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Rebuilding Utilities',
            duration: '35 min',
            content: `
# Lab 2: Rebuilding Utilities

TS ships with \`Partial\`, \`Required\`, \`Readonly\`.
To understand them, let's rebuild them.

## The Mission
1.  **MyOptional**: Adds \`?\` to all properties.
2.  **MyReadonly**: Adds \`readonly\` to all properties.
3.  **MyRequired**: Removes \`?\` using \`-?\`.

## Loop
The syntax \`[K in keyof T]\` loops over every property name.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define MyOptional (add ?)',
                    completed: false,
                    regex: /\[\s*K\s+in\s+keyof\s+T\s*\]\?:\s*T\[K\]/,
                    hint: 'Add ? modifier.'
                },
                {
                    id: 2,
                    description: 'Define MyReadonly (add readonly)',
                    completed: false,
                    regex: /readonly\s*\[\s*K\s+in\s+keyof\s+T\s*\]/,
                    hint: 'Add readonly modifier.'
                },
                {
                    id: 3,
                    description: 'Define MyRequired (remove ?)',
                    completed: false,
                    regex: /\[\s*K\s+in\s+keyof\s+T\s*\]\-\?:\s*T\[K\]/,
                    hint: 'Use -? syntax.'
                }
            ],
            files: [
                {
                    name: 'utils.ts',
                    language: 'ts',
                    content: `interface Todo {
    title: string;
    description?: string;
}

// 1. MyOptional
type MyOptional<T> = any;

// 2. MyReadonly
type MyReadonly<T> = any;

// 3. MyRequired
type MyRequired<T> = any;
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc utils.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 3: CONDITIONAL TYPES
        // =====================================================================
        {
            id: 'ts-6-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Conditional Types 🔀',
            duration: '20 min read',
            content: `
# Conditional Types 🔀

Logic in strict typing.
\`T extends U ? TrueType : FalseType\`.

## Example: NoNull
\`\`\`ts
type NoNull<T> = T extends null | undefined ? never : T;
\`\`\`
If T is null, return \`never\` (removing it from Union). Otherwise change nothing.
This effectively filters out nulls.

## The \`Exclude\` Utility
\`\`\`ts
type Exclude<T, U> = T extends U ? never : T;
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
\`\`\`
"If type is 'a', discard it. Else keep it."
            `
        },
        {
            id: 'ts-6-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Filter',
            duration: '30 min',
            content: `
# Lab 3: The Filter

Let's build a type that only allows strings to pass through.

## The Mission
1.  **Type**: \`OnlyString<T>\`.
2.  **Condition**: If \`T extends string\`, return \`T\`.
3.  **Else**: Return \`never\`.

## Usage
\`OnlyString<string | number | boolean>\` should result in \`string\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define OnlyString<T>',
                    completed: false,
                    regex: /type\s+OnlyString\s*<\s*T\s*>/,
                    hint: 'Generic definition.'
                },
                {
                    id: 2,
                    description: 'Add Condition T extends string',
                    completed: false,
                    regex: /T\s+extends\s+string\s*\?/,
                    hint: 'Ternary start.'
                },
                {
                    id: 3,
                    description: 'Return T or never',
                    completed: false,
                    regex: /\?\s*T\s*:\s*never/,
                    hint: 'T : never'
                }
            ],
            files: [
                {
                    name: 'filter.ts',
                    language: 'ts',
                    content: `type OnlyString<T> = any; // TODO: Implement

type Input = string | number | boolean;
type Output = OnlyString<Input>; // Should be string
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc filter.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 4: INFER & TEMPLATE LITERALS
        // =====================================================================
        {
            id: 'ts-6-7',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Infer Keyword 🕵️‍♀️',
            duration: '20 min read',
            content: `
# Infer Keyword 🕵️‍♀️

Used **within** conditional types to extract a type variable.

## Example: Unpacking Array
\`\`\`ts
type Unpack<T> = T extends (infer U)[] ? U : T;
\`\`\`
"If T is an Array of *something* (call it U), return U. Otherwise return T."

## Example: Return Type
How built-in \`ReturnType<T>\` works:
\`\`\`ts
type MyReturn<T> = T extends (...args: any[]) => infer R ? R : any;
\`\`\`
            `
        },
        {
            id: 'ts-6-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Promise Unwrapper',
            duration: '30 min',
            content: `
# Lab 4: Promise Unwrapper

We have types like \`Promise<string>\`. We want just \`string\`.
This is essential for typing async function results.

## The Mission
1.  **Type**: \`AwaitedType<T>\`.
2.  **Condition**: \`T extends Promise<infer U>\`.
3.  **Result**: Return \`U\`.

## recursion
(Advanced) To handle \`Promise<Promise<string>>\`, you would call \`AwaitedType<U>\` recursively. For now, 1 level is enough.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define AwaitedType<T>',
                    completed: false,
                    regex: /type\s+AwaitedType\s*<\s*T\s*>/,
                    hint: 'Generic.'
                },
                {
                    id: 2,
                    description: 'Use infer U in Promise',
                    completed: false,
                    regex: /Promise\s*<\s*infer\s+U\s*>/,
                    hint: 'Match against Promise shape.'
                },
                {
                    id: 3,
                    description: 'Return U',
                    completed: false,
                    regex: /\?\s*U\s*:\s*T/,
                    hint: 'Return the inferred type.'
                }
            ],
            files: [
                {
                    name: 'async.ts',
                    language: 'ts',
                    content: `type MyPromise = Promise<string>;

// TODO: Extract "string" from MyPromise
type AwaitedType<T> = any;

type Result = AwaitedType<MyPromise>; // string
`
                },
                {
                    name: 'terminal',
                    language: 'bash',
                    content: `
$ tsc async.ts
`
                }
            ]
        },

        // =====================================================================
        // SECTION 5: MASTERY QUIZ
        // =====================================================================
        {
            id: 'ts-6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 6 Mastery Check',
            duration: '20 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What does `keyof User` return?',
                    options: [
                        'An array of keys',
                        'A definition of the object',
                        'A Union Type of string literals representing the keys',
                        'The values of the object'
                    ],
                    correctIndex: 2,
                    explanation: 'If User has keys "name" and "age", `keyof User` is `"name" | "age"`.'
                },
                {
                    id: 'q2',
                    question: 'Which syntax removes the optional (?) modifier?',
                    options: [
                        '-?',
                        '!',
                        'required',
                        'no-optional'
                    ],
                    correctIndex: 0,
                    explanation: 'The `-` prefix removes the modifier. `+` (default) adds it.'
                },
                {
                    id: 'q3',
                    question: 'Where can you use the `infer` keyword?',
                    options: [
                        'Anywhere',
                        'Only in function arguments',
                        'Only within the "extends" clause of a Conditional Type',
                        'In Interface definitions'
                    ],
                    correctIndex: 2,
                    explanation: '`infer` is strictly for type variable deduction within a conditional check.'
                },
                {
                    id: 'q4',
                    question: 'How do you create a Template Literal Type?',
                    options: [
                        'type X = `Color-${C}`',
                        'type X = "Color-" + C',
                        'type X = Template(C)',
                        'type X = Format("Color-{}", C)'
                    ],
                    correctIndex: 0,
                    explanation: 'It uses the same backtick syntax as JS template literals, but for Types.'
                },
                {
                    id: 'q5',
                    question: 'What is `Omit<T, K>` implemented with?',
                    options: [
                        'Pick and Exclude',
                        'Map and Filter',
                        'Subtract',
                        'Delete'
                    ],
                    correctIndex: 0,
                    explanation: 'It is `Pick<T, Exclude<keyof T, K>>`.'
                },
                {
                    id: 'q6',
                    question: 'What happens if a conditional type distributes over a Union?',
                    options: [
                        'It runs for EACH member of the union independently',
                        'It fails',
                        'It only runs for the first member',
                        'It converts the union to an intersection'
                    ],
                    correctIndex: 0,
                    explanation: 'This property (Distributive Conditional Types) is what makes filtering unions possible.'
                }
            ]
        }
    ]
};
