import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6Objects = {
    id: 'js-unit-6',
    title: 'Objects - The Blueprint',
    description: 'Model real-world items using Key-Value pairs. Learn Dot Notation, Methods, and Destructuring.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES (INFORMATIONAL)
        {
            id: 'js-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Cabinet 🗄️',
            duration: '20 min read',
            content: `
# Deep Dive: The Cabinet 🗄️

## Structured Data
Arrays are great for lists, but bad for **Models**.
\`const user = ["Neo", 25, true];\`
What is \`user[1]\`? Age? Score? ID? It's confusing.

## Key-Value Pairs
Objects attach labels to data.
\`\`\`javascript
const user = {
    name: "Neo",  // Key: Value
    age: 25,
    isAdmin: true
};
\`\`\`
Now we know EXACTLY what \`user.age\` is.

## JSON (The Universal Language)
JavaScript Object Notation.
It is the standard format for sending data across the internet. It looks almost identical to JS Objects.
            `
        },
        {
            id: 'js-6-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Dot vs Bracket Notation 🏹',
            duration: '20 min read',
            content: `
# Deep Dive: Dot vs Bracket Notation 🏹

## 1. Dot Notation (\`user.name\`)
*   The standard way.
*   Cleanest syntax.
*   Limitation: The key must be a valid identifier (no spaces, no weird chars).

## 2. Bracket Notation (\`user["name"]\`)
*   The flexible way.
*   Allows spaces: \`user["Favorite Color"]\`.
*   **Allows Variables**:
    \`\`\`javascript
    let key = "age";
    console.log(user[key]); // Looks up "age"
    \`\`\`
    This is critical for dynamic access.
            `
        },
        {
            id: 'js-6-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The "this" Keyword 👈',
            duration: '25 min read',
            content: `
# Deep Dive: The "this" Keyword 👈

## Methods
When a function lives inside an object, it is a **Method**.
Inside a method, \`this\` refers to **The Object Itself**.

\`\`\`javascript
const car = {
    speed: 100,
    check: function() {
        console.log(this.speed);
    }
};
\`\`\`

## The Arrow Trap ⚠️
Arrow functions do NOT have their own \`this\`.
If you write \`check: () => console.log(this.speed)\`, it will FAIL (undefined) because it looks at the Window, not the Car.
**Rule**: Use standard \`function()\` syntax for Object Methods.
            `
        },
        {
            id: 'js-6-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Destructuring 📦',
            duration: '15 min read',
            content: `
# Deep Dive: Destructuring 📦

## Unpacking
We often only need one property from a big object.

**Old Way**:
\`\`\`javascript
const name = user.name;
const age = user.age;
\`\`\`

**New Way**:
\`\`\`javascript
const { name, age } = user;
\`\`\`
This matches the property names and extracts them instantly. It works for Arrays too: \`const [first, second] = list;\`.
            `
        },

        // PART 2: PRACTICAL LABS (LESSONS)
        {
            id: 'js-6-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Model',
            duration: '20 min',
            content: `
# Lab 1: The Model

Create a Product model.

## The Mission
1.  Create object \`product\`.
2.  Keys: \`title\` ("Phone"), \`price\` (999), \`inStock\` (true).
3.  Log the \`product.price\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Object: Create "product" with title, price, inStock.',
                    completed: false,
                    regex: /const\s+product\s*=\s*\{\s*title[\s\S]*price[\s\S]*inStock/
                },
                {
                    id: 2,
                    description: 'Access: Log product.price.',
                    completed: false,
                    regex: /console\.log\s*\(\s*product\.price\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `// Product Model
// TODO...
`
                }
            ]
        },
        {
            id: 'js-6-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Dynamic Access',
            duration: '20 min',
            content: `
# Lab 2: Dynamic Access

Access a property using a variable key.

## The Mission
1.  \`data = { secret: 42 }\`.
2.  \`key = "secret"\`.
3.  Log \`data[key]\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Bracket: Log data[key].',
                    completed: false,
                    regex: /console\.log\s*\(\s*data\[\s*key\s*\]\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const data = { secret: 42 };
const key = "secret";

// TODO: Use bracket notation
`
                }
            ]
        },
        {
            id: 'js-6-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The Method',
            duration: '25 min',
            content: `
# Lab 3: The Method

Add behavior to data.

## The Mission
1.  Object \`dog\`.
2.  Property \`sound: "Woof"\`.
3.  Method \`bark: function()\`.
4.  Inside bark, log \`this.sound\`.
5.  Call \`dog.bark()\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Method: Add bark function. Log this.sound.',
                    completed: false,
                    regex: /bark\s*:\s*function\s*\(\s*\)\s*\{[\s\S]*this\.sound/
                },
                {
                    id: 2,
                    description: 'Call: dog.bark().',
                    completed: false,
                    regex: /dog\.bark\s*\(\s*\)/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const dog = {
    sound: "Woof"
    // TODO: bark
};
`
                }
            ]
        },
        {
            id: 'js-6-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Destructuring',
            duration: '15 min',
            content: `
# Lab 4: Destructuring

Extract data cleanly.

## The Mission
1.  \`config = { ip: "1.1.1.1", port: 80 }\`.
2.  Use \`{ ip, port } = config\`.
3.  Log \`ip\`.

            `,
            tasks: [
                {
                    id: 1,
                    description: 'Destructure: const { ip, port } = config.',
                    completed: false,
                    regex: /const\s*\{\s*ip\s*,\s*port\s*\}\s*=\s*config/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const config = { ip: "1.1.1.1", port: 80 };

// TODO: Destructure
`
                }
            ]
        },

        // PART 3: ASSESSMENT (QUIZ)
        {
            id: 'js-6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Object Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why avoid Arrow Functions for Object Methods?',
                    options: [
                        'They are slow',
                        'They do not have their own "this" binding (lexical scoping), causing "this" to point to the window instead of the object',
                        'They look ugly',
                        'They are deprecated'
                    ],
                    correctIndex: 1,
                    explanation: 'For methods where you need "this", use "function() {}". For everything else, use Arrows.'
                },
                {
                    id: 'q2',
                    question: 'Which syntax allows using a VARIABLE as a key?',
                    options: [
                        'obj.key',
                        'obj[key]',
                        'obj(key)',
                        'obj->key'
                    ],
                    correctIndex: 1,
                    explanation: 'Bracket notation evaluates the expression inside to determine the key string.'
                },
                {
                    id: 'q3',
                    question: 'What is JSON?',
                    options: [
                        'JavaScript Object Notation',
                        'Java Syntax On Node',
                        'Just Some Objects',
                        'A library'
                    ],
                    correctIndex: 0,
                    explanation: 'The standard data interchange format of the web.'
                },
                {
                    id: 'q4',
                    question: 'What happens if you access a property that does not exist? user.unicorn?',
                    options: [
                        'Error',
                        'null',
                        'undefined',
                        'false'
                    ],
                    correctIndex: 2,
                    explanation: 'JS is forgiving. It just tells you "undefined".'
                },
                {
                    id: 'q5',
                    question: 'Can an object contain an array?',
                    options: [
                        'Yes',
                        'No',
                        'Only in TypeScript',
                        'Only if empty'
                    ],
                    correctIndex: 0,
                    explanation: 'Yes! JSON allows infinite nesting. Objects in Arrays, Arrays in Objects...'
                }
            ]
        }
    ]
};
