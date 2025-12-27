import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1SyntaxBasics = {
    id: 'es6-1',
    title: 'Unit 1: Syntax Basics & Engine Architecture',
    description: 'Master the foundations of Modern JavaScript by understanding the V8 Engine. We move beyond syntax to explore Memory Architecture, Execution Contexts, and the precise mechanical differences between ES5 and ES6+.',
    items: [
        {
            id: 'es6-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: '1. The Ghost in the Machine: Engine Architecture 👻',
            duration: '45 min read',
            content: `
# The Engine: V8 & The Call Stack

To write truly secure and predictable code, you must understand how the JavaScript Engine (V8) manages **Execution Context** and **Memory**. In ES5, the \`var\` keyword was architecturally flawed, leading to logical "leaks" that plagued the industry for years.

![V8 Engine Architecture](https://placehold.co/600x400/101010/ffffff?text=V8+Engine+Architecture)

## 1. Machine Logic: Execution Contexts

When V8 executes your code, it creates **Execution Contexts** (containers for code evaluation).

*   **Global Execution Context (GEC):** The default environment.
*   **Function Execution Context (FEC):** Created *only* when a function is invoked.

### The "Var" Flaw
Variables declared with \`var\` are **Function Scoped**. V8 attaches them to the nearest *Function Context*. It ignores blocks (\`if\`, \`for\`, \`while\`).

**Machine Visualization:**

\`\`\`text
[ CORE MEMORY: FUNCTION CONTEXT ]
|-----------------------------------|
|  var userID = 101                 |  <-- Stored here. Safe? Yes.
|                                   |
|  [ BLOCK: IF STATEMENT ]          |
|  |-----------------------------|  |
|  | var admin = true            |  |  <-- ESCAPES! V8 hoists this
|  |                             |  |      out to the Function Context.
|  |-----------------------------|  |
|-----------------------------------|
\`\`\`

If you declare \`var\` inside a block, V8 "hoists" (lifts) it to the top of the function. It bleeds out of the block, polluting the outer scope.

## 2. The ES6 Solution: Block Scoping (\`let\`)

The \`let\` keyword introduces **Block Scoping**. V8 creates a **Lexical Environment** bound specifically to the block (the curly braces \`{}\`).

**Machine Visualization:**

\`\`\`text
[ CORE MEMORY: FUNCTION CONTEXT ]
|-----------------------------------|
|  let userID = 101                 |  <-- Stored in Function Scope.
|                                   |
|  [ BLOCK: IF STATEMENT ]          |
|  |-----------------------------|  |
|  | let admin = true            |  |  <-- TRAPPED! Stored in Block Scope.
|  |                             |  |      Cannot be accessed outside.
|  |-----------------------------|  |
|-----------------------------------|
\`\`\`
`
        },
        {
            id: 'es6-1-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lesson 1: Scope Leaks (var vs let)',
            duration: '60 min',
            content: `
# Lesson 1: Sealing the Leak

The most dangerous artifact of \`var\` is the Loop Leak.

\`\`\`javascript
for (var i = 0; i < 3; i++) {
    // ... logic
}
console.log(i); // Outputs: 3
\`\`\`

Because \`var\` ignores the loop block, the variable \`i\` survives after the loop finishes. It remains in memory, potentially overwriting other variables named \`i\` later in your program. This is **Global Namespace Pollution**.

Using \`for (let i ...)\` creates a fresh, contained binding for each iteration boundaries, ensuring specific privacy and garbage collection eligibility once the loop terminates.

![Lexical Scoping Diagram](https://placehold.co/600x400/101010/ffffff?text=Lexical+Scoping)

## Senior Warning ⚠️

**"Shadowing" Dangers:**
When you nest scopes, declaring a variable with the same name as an outer variable "shadows" (hides) it.
\`\`\`javascript
let x = 10;
{
    let x = 20; // This is a TOTALLY different memory space.
    console.log(x); // 20
}
console.log(x); // 10
\`\`\`
While safe, accidental shadowing can confuse fellow engineers. Always prioritize distinct naming unless shadowing is intentional.

## Pitfalls to Avoid in Production
1.  **Duplicate Declaration:** \`var\` allowed you to redeclare the same variable twice. \`let\` throws a SyntaxError. This is a Feature, not a Bug. It catches typos.
2.  **Global Object Pollution:** Top-level \`var\` attaches to the \`window\` object. Top-level \`let\` does not.
`,
            tasks: [
                {
                    id: 1,
                    description: 'Refactor the leaking "var" loop to use "let" to contain the iterator.',
                    completed: false,
                    regex: /for\s*\(\s*let\s+i\s*=/
                },
                {
                    id: 2,
                    description: 'Prevent the "status" variable from leaking out of the if-block by changing it to "let".',
                    completed: false,
                    regex: /if\s*\(.*\)\s*\{\s*[\s\S]*let\s+status\s*=/
                },
                {
                    id: 3,
                    description: 'Declare the "config" object with "let" (or const) so it does not pollute the global window object.',
                    completed: false,
                    regex: /(let|const)\s+config\s*=/
                }
            ],
            files: [
                {
                    name: 'leak.js',
                    language: 'javascript',
                    content: `// SYSTEM DIAGNOSTIC: SCOPE LEAK DETECTED
// The prompt: A legacy script is leaking variables into the global scope.

function processUser() {
    // TASK 1: This iterator 'i' leaks into the entire function scope!
    // Refactor to use block scoping.
    for (var i = 0; i < 5; i++) {
        process(i);
    }
    
    // Check: The console.log below would historically print '5'.
    // After your fix, it should throw a ReferenceError (which is good!).
    // console.log("Iterator leaked:", i);
}

function checkPermissions(user) {
    if (user.isAdmin) {
        // TASK 2: This variable 'status' leaks outside the if-statement!
        // Lock it down.
        var status = "active";
    }
    
    // logic...
}

// TASK 3: This global config attaches to the window object in browsers.
// Detach it from the global object by using modern syntax.
var config = {
    env: "production",
    retries: 3
};

function process(item) { /* internal logic */ }
`
                }
            ]
        },
        {
            id: 'es6-1-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lesson 2: Temporal Dead Zone (TDZ)',
            duration: '60 min',
            content: `
# Lesson 2: The Temporal Dead Zone

The **Temporal Dead Zone (TDZ)** is one of the most misunderstood concepts in modern JavaScript, yet it is the engine's way of protecting you from logical race conditions. It is the time between the **Start of the Scope** and the **Declaration of the Variable**.

## 1. Hoisting Decoded (V8 Internal Process)

When V8 enters a scope, it performs a **Creation Phase** before executing a single line of code.

\`\`\`javascript
console.log(fruit); 
let fruit = 'Apple';
\`\`\`

**Step 1: Parsing/Creation Phase**
V8 scans the code. It sees \`let fruit\`.
*   It reserves memory for \`fruit\`.
*   **CRITICAl:** It does *not* initialize it. It marks the memory slot as **UNINITIALIZED**.

**Step 2: Execution Phase**
V8 executes line 1: \`console.log(fruit)\`.
*   Engine checks memory for \`fruit\`.
*   Status: **UNINITIALIZED**.
*   Action: Throw \`ReferenceError\`.

This period—from the block start until line 2 is reached—is the **Temporal Dead Zone**.

### Comparison with \`var\`
With \`var\`, the engine initializes the memory with \`undefined\` during the Creation Phase. This allowed "access before declaration," leading to silent bugs where logic ran with \`undefined\` values.

**Machine Visualization: TDZ Timeline**

\`\`\`text
[ TIME STARTS ]  --> Scope Entry
|
|   ( TDZ ACTIVE - DANGER ZONE )
|   Attempting to access variable here = CRASH 💥
|
[ LINE OF CODE ] --> let x = 10;
|   ( TDZ ENDS )
|   ( Memory initialized to 10 )
|
[ TIME CONTINUES ] -> Safe to use 'x' ✅
\`\`\`

## 2. Why is this "Senior" Knowledge?
Understanding TDZ separates coders who guess from engineers who know.
*   **Catching Circular Dependencies:** TDZ often reveals bad architecture where Module A needs Module B, but Module B needs A.
*   **Class Inheritance:** In subclasses, accessing \`this\` before calling \`super()\` is a TDZ violation.

## Senior Warning ⚠️

**typeof Trap:**
Historically, \`typeof variableThatDoesntExist\` returned \`"undefined"\`. It was safe.
However, using \`typeof\` on a variable in the **TDZ** throws an Error.
`,
            tasks: [
                {
                    id: 1,
                    description: 'Fix the ReferenceError by moving the log statement AFTER the declaration.',
                    completed: false,
                    regex: /let\s+secretKey\s*=\s*['"]\w+['"];\s*console\.log\(secretKey\);/
                },
                {
                    id: 2,
                    description: 'Identify the TDZ violation in the function and move the "config" declaration to the top of the block.',
                    completed: false,
                    regex: /let\s+config\s*=\s*.*\s*[\s\S]*console\.log\(config\)/
                }
            ],
            files: [
                {
                    name: 'tdz.js',
                    language: 'javascript',
                    content: `// DEBUGGER: TEMPORAL DEAD ZONE DETECTED
// The prompt: The code is crashing because requests are made to memory slots that are "Uninitialized".

// TASK 1: The engine crashes here.
// 'secretKey' is in the TDZ when we try to log it.
// Reorder the lines to respect the Initialization lifecycle.

console.log(secretKey); 
let secretKey = "XYZ_999";


// TASK 2: TDZ inside a function.
function startService() {
    // This looks like it might work, but 'config' is block-scoped?
    // Wait, no. 'let' creates a TDZ for the whole block.
    // Even if you access it here, if 'let config' is lower down, it CRASHES.
    // Fix the logic flow.
    
    if (true) {
        // console.log(config); // This would crash if uncommented BEFORE declaration
        
        // We want to use config here.
        // Move the declaration up!
        
        let config = { port: 8080 };
        console.log(config);
    }
}
`
                }
            ]
        },
        {
            id: 'es6-1-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lesson 3: Immutability (Stack vs Heap)',
            duration: '60 min',
            content: `
# Lesson 3: The Illusion of Const

To master data structures, you must understand physical memory: the **Stack** and the **Heap**. The keyword \`const\` is often misunderstood as "Immutable Value." This is incorrect. \`const\` means "Immutable Binding."

![Stack vs Heap Memory](https://placehold.co/600x400/101010/ffffff?text=Stack+vs+Heap)

## 1. The Stack vs. The Heap

**The Stack (Static Memory):**
*   Stores **Primitive** values (String, Number, Boolean, null, undefined).
*   Stores **References** (Pointers) to Objects.
*   Fast, organized, fixed size.

**The Heap (Dynamic Memory):**
*   Stores **Objects** (Arrays, Functions, Objects).
*   Large, unorganized, messy.

## 2. Pointers & References

When you create an object, the V8 Engine splits the data:
\`\`\`javascript
const user = { name: "Aria" };
\`\`\`

1.  **Heap:** Creates the object \`{ name: "Aria" }\` at memory address \`@0x001\`.
2.  **Stack:** Creates the variable \`user\` and stores the address \`@0x001\`.

### The \`const\` Lie
When you use \`const\`, you are locking the **Stack Entry**.
*   ✅ You CANNOT change the address \`@0x001\` to \`@0x002\`.
*   ❌ You CAN change the data *inside* \`@0x001\`.

**Visualizing the Pointer:**

\`\`\`text
STACK (Locked by const)        HEAP (Free to Change)
|-------------------|          |-----------------------|
| Variable: user    |  ---->   | Address: @0x001       |
| Value: @0x001     |          | {                     |
| [LOCKED]          |          |   name: "Aria"        |
|-------------------|          | }                     |
|-------------------|          |-----------------------|
\`\`\`

## 3. True Immutability
To actually freeze the Heap data, you need \`Object.freeze()\`.
`,
            tasks: [
                {
                    id: 1,
                    description: 'Demonstrate Pointer Persistence: Mutate the "const" array by pushing a new value.',
                    completed: false,
                    regex: /serverList\.push\(['"]\w+['"]\)/
                },
                {
                    id: 2,
                    description: 'Demonstrate Object Mutation: Change the "status" property of the "const" object.',
                    completed: false,
                    regex: /activeSession\.status\s*=\s*/
                },
                {
                    id: 3,
                    description: 'Implement True Immutability: Use Object.freeze() on the criticalConfig object.',
                    completed: false,
                    regex: /(const|let)\s+criticalConfig\s*=\s*Object\.freeze\(/
                }
            ],
            files: [
                {
                    name: 'memory.js',
                    language: 'javascript',
                    content: `// MEMORY ARCHITECTURE LAB
// Objective: Prove that 'const' does not protect Heap data.

// TASK 1: Pointer vs Data.
// 'serverList' is a constant. We cannot reassign it (serverList = [] would fail).
// BUT, we can modify the Heap data it points to.
// Instruction: Add "server-3" to the list using .push().
const serverList = ["server-1", "server-2"];


// TASK 2: Object Mutation.
// 'activeSession' is a constant reference.
// Instruction: Change the 'status' to "inactive".
const activeSession = {
    id: 99,
    status: "active"
};


// TASK 3: True Security.
// We have a configuration that MUST NOT change.
// Instruction: Wrap the object in Object.freeze() to lock the Heap data.
const criticalConfig = {
    apiUrl: "https://api.bank.com",
    retryLimit: 5
};

// Attempting criticalConfig.retryLimit = 10; should fail after your fix.
`
                }
            ]
        },
        {
            id: 'es6-1-5',
            type: CONTENT_TYPES.LESSON,
            title: 'Lesson 4: Arrow Functions & Lexical "this"',
            duration: '60 min',
            content: `
# Lesson 4: The Arrow Revolution

Arrow functions (\`=>\`) are not just syntactic sugar. They fundamentally change how the \`this\` keyword is resolved by the engine, solving one of the most painful design flaws in JavaScript history.

## 1. The "Dynamic This" Problem (Legacy)
In standard functions (\`function() {}\`), the value of \`this\` is determined **dynamically** at runtime based on *how* the function is called.
*   Called as method? \`this\` = object.
*   Called as callback? \`this\` = \`window\` or \`undefined\`.

## 2. The "Lexical This" Solution (ES6)
Arrow functions **do not** have their own \`this\`.
Instead, they **inherit** \`this\` from their parent scope (Lexical Scoping).
*   **V8 Logic:** When V8 executes an Arrow Function, it looks up the scope chain for \`this\`, just like it looks up a normal variable.

**Machine Visualization: Scope Lookup**

\`\`\`text
[ CLASS COMPONENT OBJECT ]
|  this: ComponentInstance
|
|  [ METHOD: getData() ]
|  |
|  |  [ ARROW FUNCTION CALLBACK ]
|  |  |  "Who is 'this'?"
|  |  |  V8: "You don't have one."
|  |  |  V8: "I will look at your parent."
|  |  |  Result: 'this' === ComponentInstance ✅
|  |  |_______________________
|  |__________________________
|_____________________________
\`\`\`

## Senior Warning ⚠️
**Where NOT to use Arrow Functions:**
1.  **Object Methods:**
    \`\`\`javascript
    const user = {
        name: "Neo",
        sayName: () => console.log(this.name) // FAIL! 'this' is Window, not user.
    };
    \`\`\`
2.  **Event Handlers (sometimes):** If you need \`this\` to be the clicked DOM element, an Arrow function will point to the outer scope instead.
`,
            tasks: [
                {
                    id: 1,
                    description: 'Refactor the standard callback to an Arrow Function to preserve the "this" context.',
                    completed: false,
                    regex: /setTimeout\s*\(\s*\(\)\s*=>\s*this\.render\(\)\s*,\s*1000\)/
                },
                {
                    id: 2,
                    description: 'Create a concise one-line Arrow Function "double" that returns the input times 2.',
                    completed: false,
                    regex: /const\s+double\s*=\s*\(?\w+\)?\s*=>\s*\w+\s*\*\s*2/
                },
                {
                    id: 3,
                    description: 'Fix the Object Method bug by converting the Arrow Function back to a standard "function()" or shorthand method.',
                    completed: false,
                    regex: /logBalance\(?\)?\s*(\{|:)\s*(console|return)/
                }
            ],
            files: [
                {
                    name: 'context.js',
                    language: 'javascript',
                    content: `// CONTEXT MANAGER: 'THIS' BINDING
// Objective: Resolve binding errors using Arrow Functions.

class UIWidget {
    constructor() {
        this.state = "loading";
    }

    start() {
        // TASK 1: The 'this' keyword is lost here!
        // Standard explicit functions create their own 'this'.
        // Inside setTimeout, 'this' becomes the Window object (or undefined).
        // Refactor the callback to an Arrow Function so it sees 'UIWidget'.
        
        setTimeout(function() {
            this.render(); // Error: this.render is not a function
        }, 1000);
    }
    
    render() {
        console.log("Widget executed state:", this.state);
    }
}

// TASK 2: Micro-optimization.
// Write a one-line arrow function named 'double' that takes 'n' and returns 'n * 2'.
// No braces, no 'return' keyword.
// Define it below:



// TASK 3: The Reverse Trap.
// Someone used an Arrow Function here, but they shouldn't have!
// When used as a method directly on an object, Arrow Functions don't point to the object.
// Fix 'logBalance' to use standard method syntax: logBalance() { ... } or function.

const bankAccount = {
    balance: 5000,
    logBalance: () => {
        // 'this' here is NOT bankAccount. It leaks to the global scope.
        console.log("Current Balance:", this.balance);
    }
};
`
                }
            ]
        },
        {
            id: 'es6-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 1 Assessment: The Engineer',
            questions: [
                {
                    id: 1,
                    question: 'Engine Logic: Why does "var" leak from inside user blocks (if statements)?',
                    options: [
                        'Because "var" is Function Scoped and ignores block boundaries.',
                        'Because V8 garbage collection fails for "var".',
                        'Because "var" variables are always global.',
                        'Because "var" does not have a Temporal Dead Zone.'
                    ],
                    correctAnswer: 0
                },
                {
                    id: 2,
                    question: 'What is the "Temporal Dead Zone"?',
                    options: [
                        "The time between a function being called and returning.",
                        "The scope area where a variable exists in memory but is uninitialized and unsafe to access.",
                        "The period when the Garbage Collector is paused.",
                        "Code inside a 'finally' block."
                    ],
                    correctAnswer: 1
                },
                {
                    id: 3,
                    question: 'Why can you push items into a "const" array?',
                    options: [
                        'Because V8 is flexible with constants.',
                        'Because "const" only locks the Stack Pointer (memory address), not the Heap data inside it.',
                        'Because Arrays are Primitives in JavaScript.',
                        'You cannot; this throws an error.'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 4,
                    question: 'Arrow Functions: How is "this" determined?',
                    options: [
                        'Dynamically, based on how it is called.',
                        'Lexically, inherited from the parent scope at definition time.',
                        'It is always the Window object.',
                        'It is manually bound using .bind().'
                    ],
                    correctAnswer: 1
                },
                {
                    id: 5,
                    question: 'Which is a valid Senior Best Practice?',
                    options: [
                        "Use 'var' for global configuration.",
                        "Use 'let' for everything to be safe.",
                        "Use 'const' by default (95%), 'let' only when reassignment is needed, and never use 'var'.",
                        "Shadow global variables often to save variable names."
                    ],
                    correctAnswer: 2
                }
            ]
        }
    ]
};