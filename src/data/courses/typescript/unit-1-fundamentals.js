
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Fundamentals = {
    id: 'ts-unit-1',
    title: 'Unit 1: The Foundation',
    description: 'The definitive guide to TypeScript fundamentals. From the "Billion Dollar Mistake" to mastering type inference, primitives, and strict environments.',
    items: [
        {
            id: 'ts-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Evolution of Web Safety 🛡️',
            duration: '25 min read',
            content: `
# The Evolution of Web Safety 🛡️

## 1. The Wild West Era (1995 - 2012)

### The 10-Day Language
In May 1995, Brendan Eich created JavaScript in just **10 days** at Netscape. The goal was simple: add interactivity to static HTML pages. The result? A language designed for **forgiveness over correctness**.

This "move fast" philosophy made JavaScript incredibly accessible, but it came with a hidden cost that would plague developers for decades.

### The Cost of Flexibility

JavaScript's flexibility was both its greatest strength and its Achilles' heel.

**Problem 1: Loose Typing**

Variables can change types freely:

\`\`\`javascript
var x = 10;         // x is a number
x = "hello";        // Now x is a string (no error!)
x = { id: 1 };      // Now x is an object (still no error!)
x = function() {};  // Now x is a function (JavaScript doesn't care!)
\`\`\`

**Problem 2: Type Coercion**

JavaScript "helps" by guessing what you meant:

\`\`\`javascript
"5" - 1    // 4 (string converted to number)
"5" + 1    // "51" (number converted to string)
true + 1   // 2 (boolean converted to number)
[] + {}    // "[object Object]" (both converted to strings)
{} + []    // 0 (empty object + array = 0?!)
\`\`\`

These aren't bugs - they're **features**. JavaScript tries to be helpful, but this "helpfulness" creates unpredictable behavior.

**Problem 3: Silent Failures**

Errors hide instead of crashing:

\`\`\`javascript
const user = undefined;
console.log(user.name);  // undefined (should be an error!)

const data = null;
data.forEach(item => {});  // TypeError at RUNTIME
\`\`\`

The code compiles fine. It only crashes when a user clicks that specific button in production.

---

### Mental Model: The Forgiving Teacher

Imagine a teacher who never marks anything wrong. Sounds great for your ego, right? But you never learn where you're making mistakes.

JavaScript is that teacher. It accepts almost anything you write, even if it doesn't make sense. This "forgiveness" meant bugs could hide for **months** in production code, only surfacing when a specific edge case occurred.

---

### Real-World Impact

These weren't theoretical problems. They cost companies millions:

| Company | Year | Impact |
|---------|------|--------|
| **Facebook** | 2010 | Rewrote major parts of their codebase 3 times due to type-related bugs |
| **Google** | 2009 | Created Closure Compiler to add type checking to JavaScript |
| **Airbnb** | 2016 | Adopted TypeScript after a production bug from accessing properties on undefined |
| **Slack** | 2017 | Migrated to TypeScript, citing "38% of bugs could have been prevented by TypeScript" |

**Research Finding (Microsoft, 2019):**  
Analyzing 400+ open-source JavaScript projects revealed that **15% of all bugs** could have been prevented with static type checking.

---

## 2. The Rise of TypeScript (2012)

### The C# Connection

Anders Hejlsberg, the creator of **C#** and **Turbo Pascal**, joined Microsoft and saw the same problems he'd solved in C# plaguing JavaScript.

His insight? Don't replace JavaScript - **enhance it**.

### Core Philosophy: Superset, Not Replacement

TypeScript is a **superset** of JavaScript. This means:

| Concept | Meaning | Example |
|---------|---------|---------|
| **Superset** | All valid JavaScript is valid TypeScript | Rename .js → .ts and it works |
| **Erasure** | Types disappear at runtime | \`let x: number = 5\` becomes \`let x = 5\` |
| **Gradual** | Migrate file-by-file | Mix .js and .ts in same project |
| **Optional** | Add types where needed | Start with any, refine over time |

---

### Why "Erasure" Matters

Types are **compile-time only**. Your browser never sees them.

**TypeScript (Development):**
\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}\`;
}

const user: { name: string; age: number } = {
  name: "Alice",
  age: 25
};
\`\`\`

**JavaScript (Production):**
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}\`;
}

const user = {
  name: "Alice",
  age: 25
};
\`\`\`

**This means:**
- ✅ Zero runtime performance cost
- ✅ Works in any JavaScript environment
- ✅ Can adopt incrementally
- ✅ No new runtime to learn

---

### The Adoption Timeline

\`\`\`mermaid
graph LR
    A["2012<br/>TypeScript<br/>Released"] --> B["2014<br/>Angular 2<br/>Adopts TS"]
    B --> C["2016<br/>VS Code<br/>Built in TS"]
    C --> D["2018<br/>React<br/>Official Support"]
    D --> E["2020<br/>Deno<br/>TS Native"]
    E --> F["2024<br/>85% of<br/>npm packages"]
    
    style A fill:#4299e1,stroke:#2b6cb0,color:#fff
    style F fill:#48bb78,stroke:#2f855a,color:#fff
\`\`\`

By 2024, TypeScript had become the **de facto standard** for large-scale JavaScript applications.

---

## 3. The "Billion Dollar Mistake"

### Tony Hoare's Regret

In 1965, Tony Hoare invented the **null reference** while designing the ALGOL programming language. In 2009, at a conference, he called it his **"billion-dollar mistake"** because of the countless crashes it caused across decades of software development.

### The Problem in JavaScript

\`\`\`javascript
// JavaScript - Silent Failure
const user = null;
console.log(user.name);  // TypeError at RUNTIME (crashes in production)

function getUser(id) {
  // Forgot to handle "not found" case
  return null;
}

const currentUser = getUser(123);
currentUser.email.toLowerCase();  // CRASH!
\`\`\`

The code compiles fine. It only crashes when that specific user ID doesn't exist.

---

### TypeScript's Solution: strictNullChecks

\`\`\`typescript
// TypeScript - Compile Error
let name: string = "Alice";
name = null;  // ❌ Error: Type 'null' is not assignable to type 'string'

// Correct: Explicit nullable type
let name: string | null = "Alice";
name = null;  // ✅ OK

// Now you MUST handle the null case
if (name !== null) {
  console.log(name.toUpperCase());  // ✅ Safe
}
\`\`\`

---

### The Impact: By The Numbers

**Research from Microsoft (2019):**  
Enabling strictNullChecks prevents approximately **20% of all runtime errors** in production JavaScript applications.

**Airbnb Case Study (2017):**  
After migrating to TypeScript with strict null checks:
- 38% reduction in production bugs
- 15% faster onboarding for new developers
- 50% reduction in time spent debugging

---

### Common Pitfall: Weak TypeScript

\`\`\`typescript
// ❌ This compiles if strictNullChecks is OFF (don't do this!)
function getUser(): User {
  return null;  // Disaster waiting to happen
}

// ❌ This is just "JavaScript with comments"
function process(data: any): any {
  return data.something();
}
\`\`\`

**Always use strict: true in tsconfig.json**. It's the difference between TypeScript and "JavaScript with comments."

---

## 4. The Modern Landscape (2020+)

### TypeScript Today

| Metric | Value |
|--------|-------|
| npm downloads/week | 50+ million |
| GitHub stars | 95,000+ |
| Stack Overflow questions | 250,000+ |
| Companies using TS | 60% of Fortune 500 |

### Why Developers Love It

**Survey Results (State of JS, 2023):**
- 89% satisfaction rate
- 78% would use again
- #1 "Most Loved" language extension

**Top Reasons:**
1. Catches bugs before runtime
2. Better IDE autocomplete
3. Self-documenting code
4. Easier refactoring
5. Scales to large codebases

---

## Key Takeaways

1. **JavaScript's flexibility** was great for beginners but terrible for large applications
2. **TypeScript adds safety** without changing JavaScript's runtime behavior
3. **strictNullChecks** alone prevents 20% of runtime errors
4. **Type erasure** means zero performance cost
5. **Gradual adoption** lets you migrate at your own pace

---

## What's Next?

In the next Deep Dive, we'll explore the **TypeScript Compiler (TSC)** - the tool that makes all this magic happen. You'll learn how it transforms your typed code into JavaScript and how to configure it for maximum safety.
`
        },
        {
            id: 'ts-1-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Compiler (TSC) ⚙️',
            duration: '25 min read',
            content: `
# The Compiler (TSC) ⚙️

## 1. What Actually Is TypeScript?

Here's the secret: **TypeScript doesn't run in your browser.** 🤯

Browsers (Chrome, Firefox, Safari) and Node.js strictly understand **JavaScript**. They have no idea what a \`type\`, \`interface\`, or \`enum\` is. If you feed TypeScript code to Chrome, it will crash immediately.

So, how does it work?

### The Translation Process

TypeScript is a **compiler**. Its job is to take your futuristic, type-safe code and "erase" the types, leaving behind plain, boring JavaScript that runs everywhere.

\`\`\`mermaid
graph LR
    A["MyCode.ts<br/>(Type Safe)"] --> B{TS Compiler}
    B -->|Success| C["MyCode.js<br/>(Plain JS)"]
    B -->|Error| D["Error Message<br/>(No Output)"]
    
    style A fill:#2d3748,stroke:#4299e1,stroke-width:2px
    style B fill:#2b6cb0,stroke:#fff,stroke-width:2px
    style C fill:#276749,stroke:#48bb78,stroke-width:2px
    style D fill:#9b2c2c,stroke:#f56565,stroke-width:2px
\`\`\`

This process is called **Transpilation** (Translation + Compilation).

---

## 2. Under The Hood: How TSC Works

The compiler isn't a black box. It has 4 distinct phases:

\`\`\`mermaid
graph TD
    Source["Source Code<br/>(.ts)"] --> Parser
    Parser -->|Creates| AST["Abstract Syntax Tree<br/>(AST)"]
    AST --> Binder
    Binder -->|Creates| Symbols["Symbols<br/>(Identifiers)"]
    Symbols --> Checker["Type Checker"]
    Checker -->|Validates| AST
    Checker -->|If Safe| Emitter
    Emitter -->|Generates| Output["JavaScript<br/>(.js)"]
    
    style Checker fill:#ed8936,stroke:#c05621,stroke-width:2px
    style Output fill:#f6e05e,stroke:#d69e2e,stroke-width:2px,color:#000
\`\`\`

1. **Parsing**: Reads your code and builds a tree structure (AST).
2. **Binding**: Links identifiers (variables, functions) to their declarations.
3. **Checking**: The "Brain". Validates types and reports errors.
4. **Emitting**: Strips types and prints JavaScript.

---

## 3. Configuration: tsconfig.json

This is the control center. The \`tsconfig.json\` file tells the compiler *how* to behave.

### Key Flags You Must Know

| Flag | Category | Impact | Recommended |
|------|----------|--------|-------------|
| \`target\` | Output | Determines JS version (ES5, ES6, ES2020) | \`ES2020\` |
| \`module\` | Output | Module system (CommonJS, ESNext) | \`ESNext\` |
| \`strict\` | Safety | Enables **all** strict checks | \`true\` (ALWAYS) |
| \`noEmit\` | Process | Checks types but doesn't write .js files | \`true\` (for bundlers) |

### 1. The \`target\` Setting

This determines "how old" the output JavaScript should be.

**Input (.ts):**
\`\`\`typescript
const greet = (name: string) => \`Hello \${name}\`;
\`\`\`

**Output when target="ES5" (Old, compatible):**
\`\`\`javascript
var greet = function(name) {
    return "Hello " + name;
};
\`\`\`

**Output when target="ES2020" (Modern, clean):**
\`\`\`javascript
const greet = (name) => \`Hello \${name}\`;
\`\`\`

**Mental Model:** Think of \`target\` as a "Time Machine". Do you want to send your code back to 2009 (ES5) to run on Internet Explorer, or keep it modern?

---

### 2. The \`noEmit\` Confusion

In modern stacks (Next.js, Vite, React), you almost never run \`tsc\` to generate files. You use a bundler instead.

- **Legacy Flow:** \`tsc\` generates \`.js\` files → Browser runs them.
- **Modern Flow:** \`vite\`/\`next\` handles bundling. \`tsc\` is used **only** for type checking.

This is why you'll see \`"noEmit": true\` in many projects. It tells TS: *"Don't worry about creating files, just tell me if I made a mistake."*

---

## 4. Strict Mode: The Shield 🛡️

Setting \`"strict": true\` is the single most important decision you'll make. It enables a family of checks:

1.  **noImplicitAny**: Bans variables without types.
2.  **strictNullChecks**: Bans \`null\` from crashing your app.
3.  **strictPropertyInitialization**: Ensures class properties are set.

### Visualization: Strict vs. Loose

\`\`\`mermaid
graph TD
    subgraph Strict ["Strict Mode (Safe)"]
        A[Code] --> B{Checks}
        B -->|Pass| C[Production]
        B -->|Fail| D[Build Error]
    end
    
    subgraph Loose ["Loose Mode (Risky)"]
        E[Code] --> F[Production]
        F --> G{Runtime}
        G -->|Bad Value| H[CRASH 💥]
    end
    
    style Strict fill:#2f855a,stroke:#48bb78,fill-opacity:0.1
    style Loose fill:#c53030,stroke:#f56565,fill-opacity:0.1
\`\`\`

**Takeaway:** A strict compiler is annoying during development but a lifesaver in production. A loose compiler is friendly during dev but betrays you in production.

---

## 5. How TypeScript "Sees" Your Code

### Use Case: The Typo

\`\`\`typescript
const user = {
    firstName: "Dwiky",
    role: "Admin"
};

console.log(user.fistName); 
// ❌ Error: Property 'fistName' does not exist on type...
//    Did you mean 'firstName'?
\`\`\`

The compiler builds an internal "Shape" of your data.

1.  It sees \`user\` object.
2.  It records: \`user\` has \`firstName\` (string) and \`role\` (string).
3.  You ask for \`fistName\`.
4.  Compiler checks the record. "I don't play that."
5.  **Red squiggly line!**

This happens **instantly** (milliseconds) as you type.

---

## 6. Just-In-Time Documentation

Because the compiler knows everything, it powers your IDE (VS Code).

- **Hover:** See exactly what data a function expects.
- **Autocomplete:** Press generic dot definition \`.\` and see valid properties.
- **Refactoring:** Rename a symbol, and the compiler updates it across 500 files.

**Quote:** *"TypeScript is just a very distinct way of writing documentation that happens to be executable."*

---

## Key Takeaways

1.  **Run logic**: TypeScript code effectively simply does not exist at runtime.
2.  **Transpilation**: TS transforms to JS, erasing types in the process.
3.  **Configuration**: \`tsconfig.json\` is the brain. Always set \`strict: true\`.
4.  **Modern Workflow**: We often use \`noEmit\` and let bundlers handle the file generation.
5.  **Tooling**: The compiler powers the "magic" in VS Code.

---

## What's Next?

Now that we understand the machinery, let's look at the raw materials. In the next Deep Dive, we'll master the **Primitives** - the atoms of data in TypeScript.
`
        },
        {
            id: 'ts-1-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Primitives 🧱',
            duration: '20 min read',
            content: `
# The Primitives 🧱

## 1. Atoms of Data

In any programming language, "primitives" are the most basic units of data. They are immutable and not objects (though they act like them).

TypeScript inherits all 7 of JavaScript's primitives and adds special types on top.

### The Big 3

| Primitive | Description | Example |
|-----------|-------------|---------|
| \`string\` | Text data | \`"Hello"\`, \`'World'\`, \`\` \`Age: \${age}\` \`\` |
| \`number\` | Integers and floats | \`42\`, \`3.14\`, \`-5\` |
| \`boolean\` | Logic gates | \`true\`, \`false\` |

---

## 2. Type Inference: The mental model

You rarely need to verify these explicitly.

**Explicit (Redundant):**
\`\`\`typescript
let name: string = "Dwiky";
let age: number = 25;
let valid: boolean = true;
\`\`\`

**Implicit (Preferred):**
\`\`\`typescript
let name = "Dwiky";  // TS knows this is string
let age = 25;        // TS knows this is number
let valid = true;    // TS knows this is boolean
\`\`\`

**Rule of Thumb:** Only use explicit types when you initialize a variable *without* a value, or when the inferred type isn't what you want.

---

## 3. The Special Primitives

### \`symbol\` (Unique Identifiers)
Mostly used in library code to create hidden object properties.
\`\`\`typescript
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false! Every symbol is unique.
\`\`\`

### \`bigint\` (Massive Numbers)
For numbers larger than $2^{53}$.
\`\`\`typescript
const big = 100n; // Note the 'n' at the end
\`\`\`

### \`undefined\` vs \`null\`
Both represent "nothing", but with nuance.

- \`undefined\`: "I haven't set this yet." (Default value of uninitialized vars).
- \`null\`: "I intentionally set this to nothing."

**The "Billion Dollar" Defense:**
With \`strictNullChecks: true\`, these are **distinct types**. You cannot assign \`null\` to a \`string\` variable without explicitly allowing it (\`string | null\`).

---

## 4. Literal Types

This is a TypeScript concept, not JavaScript. You can use a *specific value* as a type.

\`\`\`typescript
let direction: "up" | "down";
direction = "up";   // ✅
direction = "left"; // ❌ Error: Type '"left"' is not assignable...
\`\`\`

**Mental Model:** Think of \`string\` as "Infinite possibilities". Think of \`"up"\` as "A set of size 1".

### const vs let Inference
\`\`\`typescript
let a = "hello";   // Type: string (because it can change)
const b = "hello"; // Type: "hello" (because it cannot change)
\`\`\`
This is crucial for "widening". TypeScript infers the most specific type possible for \`const\`.

---

## 5. The "Top" and "Bottom" Types

These aren't primitives in the JS sense, but they are fundamental to TS logic.

### \`any\` (The "I Give Up" Type)
- **Behavior:** Accepts anything. Allows anything.
- **Safety:** None.
- **Use Case:** Migrating legacy code. Avoid otherwise.

### \`unknown\` (The "Safe Any")
- **Behavior:** Accepts anything.
- **Safety:** High. You *must* check what it is before using it.
- **Use Case:** API responses where formatting is unpredictable.

### \`never\` (The "Impossible" Type)
- **Behavior:** Accepts nothing.
- **Use Case:** Code that creates errors or infinite loops.

\`\`\`mermaid
graph BT
    N["never<br/>(Bottom)"] --> B["string / number / etc"]
    B --> U["unknown<br/>(Top)"]
    
    style N fill:#f56565,stroke:#c53030
    style U fill:#48bb78,stroke:#2f855a
\`\`\`

---

## 6. Common Pitfalls

### The \`object\` Trap
Don't use the type \`object\` or \`{}\`. It often doesn't mean what you think.

\`\`\`typescript
// ❌ Bad
function print(data: object) {
    console.log(data.name); // Error: Property 'name' does not exist on type 'object'
}

// ✅ Good
function print(data: { name: string }) {
    console.log(data.name);
}
\`\`\`

### Truthiness
Remember that in conditionals, types are coerced:
- \`0\`, \`""\`, \`null\`, \`undefined\`, \`NaN\` → \`false\`
- Everything else → \`true\`

---

## Key Takeaways

1.  **Inference**: Let TS infer types whenever possible. Less noise = better code.
2.  **Immutability**: \`const\` variables get Literal Types, \`let\` variables get General Primitives.
3.  **Strictness**: \`null\` and \`undefined\` are your friends in strict mode, but enemies in loose mode.
4.  **Unknown vs Any**: Always prefer \`unknown\` for dynamic data.

---

## What's Next?

We've covered the individual atoms. Now let's see how to combine them. In the next Deep Dive, we'll look at **Union Types** - the art of saying "This variable could be A OR B".
`
        },
        {
            id: 'ts-1-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Union Types 🤝',
            duration: '25 min read',
            content: `
# Union Types 🤝

## 1. The Power of "OR"

In the real world, things are rarely just *one* thing.
- A user ID might be a \`number\` (from database) OR a \`string\` (UUID).
- A network status might be \`"loading"\`, \`"success"\`, OR \`"error"\`.

TypeScript models this with **Union Types** using the pipe \`|\` operator.

\`\`\`typescript
type ID = string | number;

let userId: ID;
userId = 123;       // ✅
userId = "abc-123"; // ✅
userId = true;      // ❌ Error
\`\`\`

---

## 2. Narrowing: The Sherlock Holmes Method 🕵️‍♂️

If \`userId\` is \`string | number\`, can we do \`userId.toUpperCase()\`?

**No.** Because if it's a number, that method doesn't exist. TypeScript stops you.

To use specific methods, we must **narrow** the type.

### The \`typeof\` Guard

\`\`\`typescript
function printId(id: string | number) {
    if (typeof id === "string") {
        // TS knows 'id' is a string here!
        console.log("ID: " + id.toUpperCase());
    } else {
        // TS knows 'id' MUST be a number here!
        console.log("ID: " + id.toFixed(2));
    }
}
\`\`\`

This acts like a filter. Inside the \`if\` block, the type is refined.

---

## 3. Discriminated Unions (The "Tag" Pattern)

This is a Pro-Level pattern. When you have objects with different structures, give them a common "tag" property.

\`\`\`typescript
type Loading = { state: "loading" };
type Success = { state: "success"; data: string };
type Error = { state: "error"; message: string };

type NetworkResponse = Loading | Success | Error;

function handle(res: NetworkResponse) {
    // We can access 'state' because it exists on ALL possibilities
    switch (res.state) {
        case "loading":
            // TS knows this is Loading type
            showSpinner();
            break;
        case "success":
            // TS knows this is Success type, so .data is valid
            console.log(res.data);
            break;
        case "error":
            // TS knows this is Error type
            console.log(res.message);
            break;
    }
}
\`\`\`

**Why is this Elite?**
If you add a 4th state meant for \`NetworkResponse\` but forget to handle it in the switch, TypeScript can be configured to warn you (Exhaustiveness Checking).

---

## 4. Intersection Types: The Power of "AND"

The opposite of Union \`|\` is Intersection \`&\`. It combines types.

\`\`\`typescript
type Draggable = { drag: () => void };
type Resizable = { resize: () => void };

// Must have BOTH methods
type UIWidget = Draggable & Resizable;
\`\`\`

**Visualization:**

- Union (\`A | B\`): Can be A, can be B, or both. (Wider)
- Intersection (\`A & B\`): Must have everything from A AND everything from B. (Stricter)

---

## 5. Real World Pattern: The "Optional" Trap

Beginners often confuse Union with Optional.

**Pattern A: Union with Null (Explicit)**
\`\`\`typescript
function findUser(id: string): User | null {
    if (!exists) return null;
    return user;
}
\`\`\`
*Force caller to check for null.*

**Pattern B: Optional (Implicit)**
\`\`\`typescript
function print(name?: string) {
    // name is 'string | undefined'
}
\`\`\`

Prefer **Unions with Literal Types** over booleans for state.

**Bad:**
\`\`\`typescript
let isLoading = false;
let isError = false;
let isSuccess = false;
// Impossible state: isLoading + isError both true?
\`\`\`

**Good:**
\`\`\`typescript
let status: "idle" | "loading" | "success" | "error";
// Only one state possible at a time.
\`\`\`

---

## Key Takeaways

1.  **\`|\` Operator**: Reads as "OR". 
2.  **Narrowing**: You must prove to TS what specific type you have before using specific methods.
3.  **Tags**: Use a literal field (like \`type\` or \`kind\`) to differentiate objects.
4.  **State Machines**: Use unions of string literals to model application state, avoiding "boolean soup".

---

## What's Next?

We've covered safety. Now we'll look at the **Safety Spectrum**. In the final Deep Dive, we'll analyze \`any\`, \`unknown\`, and \`never\` in depth to finalize your mental model.
`
        },
        {
            id: 'ts-1-5',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Safety Spectrum 🚦',
            duration: '20 min read',
            content: `
# The Safety Spectrum 🚦

## 1. The Hierarchy of Safety

Not all types are created equal. TypeScript offers a spectrum of safety, ranging from "YOLO" to "Fort Knox".

\`\`\`mermaid
graph TD
    Any["any (UNSAFE)"] 
    Unknown["unknown (Safe)"]
    Specific["string/number (Standard)"]
    Never["never (Impossible)"]
    
    Any -.-> Specific
    Specific -.-> Never
    Unknown --> Specific
    
    style Any fill:#c53030,stroke:#fff
    style Unknown fill:#2b6cb0,stroke:#fff
    style Never fill:#2d3748,stroke:#fff
\`\`\`

---

## 2. \`any\`: The Villan

**What is it?**
It effectively turns off the type checker for that variable.

\`\`\`typescript
let dangerous: any;
dangerous = 5;
dangerous.toUpperCase(); // Crash at runtime! TS stays silent.
\`\`\`

**When to use:**
- **Never**, if possible.
- When migrating a massive JS file and you don't have time to fix 1000 errors.
- As a temporary hack while prototyping (but add a \`// TODO\` comment).

**Mental Model:** \`any\` is a virus. It spreads. If a function returns \`any\`, the variable catching it becomes \`any\`, and so on.

---

## 3. \`unknown\`: The Hero

**What is it?**
Like \`any\`, it accepts any value. *Unlike* \`any\`, you cannot use the value until you check it.

\`\`\`typescript
let safe: unknown;
safe = "hello";

// safe.toUpperCase(); // ❌ Error: Object is of type 'unknown'.

if (typeof safe === "string") {
    console.log(safe.toUpperCase()); // ✅ OK
}
\`\`\`

**Use Case:**
- API Responses (we don't know what the server sent yet).
- \`JSON.parse()\` results.

**Rule:** If you don't know the type, use \`unknown\`, never \`any\`.

---

## 4. \`never\`: The Void

**What is it?**
A value that can *never* occur.

**Use Case 1: Exhaustiveness Checking**
Remember the Discriminated Union?

\`\`\`typescript
type Shape = "circle" | "square";

function getArea(s: Shape) {
    if (s === "circle") return 1;
    if (s === "square") return 4;
    
    // What is 's' here?
    const exhaustiveCheck: never = s; 
    // If we add "triangle" to Shape but forget to handle it above,
    // 's' would be "triangle", and TS would yell:
    // Type 'string' is not assignable to type 'never'.
}
\`\`\`

**Use Case 2: Functions that throw/loop**
\`\`\`typescript
function error(message: string): never {
    throw new Error(message);
}
\`\`\`

---

## 5. Type Assertions (\`as\`)

Sometimes you know more can the compiler.

\`\`\`typescript
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
\`\`\`

\`document.getElementById\` returns \`HTMLElement | null\`. We are telling TS: *"Trust me, I know this ID exists and it is a Canvas."*

**Warning:** This is unsafe. If you are wrong, runtime crash.

**Safe Alternative:**
\`\`\`typescript
const myCanvas = document.getElementById("main_canvas");
if (myCanvas instanceof HTMLCanvasElement) {
    // TS knows it's a canvas here
}
\`\`\`

---

## Keep It Strict

Ultimately, safety comes from the \`strict\` flag in \`tsconfig.json\`.

- **\`noImplicitAny\`**: Flags any variable that falls back to \`any\`.
- **\`strictNullChecks\`**: Prevents the billion dollar mistake.

---

## Final Review

| Type | Can Assign To It | Can Access Properties | Safety |
|------|------------------|-----------------------|--------|
| \`any\` | ✅ Everything | ✅ Yes (Unsafe) | ❌ None |
| \`unknown\` | ✅ Everything | ❌ No (Must check) | ✅ High |
| \`never\` | ❌ Nothing | ❌ No | ✅ Absolute |

---

## What's Next?

Congratulations! You have mastered the Philosophy of TypeScript.
You understand:
1.  Why TS exists (Safety at scale).
2.  How the compiler thinks (Erasure, Narrowing).
3.  The primitives and unions.
4.  The safety spectrum.

Now, prove your knowledge in the **Labs**.
`
        },

        // --- LABS ---
        {
            id: 'ts-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Inference Engine',
            description: 'Master practical type inference',
            files: [
                {
                    name: 'index.ts',
                    language: 'typescript',
                    content: `// Lab 1: Type Inference Mastery
// Follow the instructions in the panel on the left.

// Task 1: Initialize score
// TODO: Declare a variable named 'score' with value 100


// Task 2: Try to assign string error
// TODO: Uncomment the line below to see the error, then re-comment it
// score = "200";

// Task 3: Fix the error
// TODO: Assign a valid number to score


// Task 4: Implicit Any Problem
// TODO: Declare a variable 'message' without assignment


// Task 5: Fix Implicit Any
// TODO: Add type annotation : string to message


// Task 6: Const Literal Type
// TODO: Create a const variable 'role' with value "admin"


// Task 7: As Const Assertion
// TODO: Create config object with 'as const'
const config = {
    max: 100,
    env: "prod"
};
`
                }
            ],
            content: `
## The Big Picture

Type inference is TypeScript's **superpower**. Instead of forcing you to write types everywhere, TS analyzes your code and infers types automatically.

This lab teaches you:
- When to rely on inference
- When to be explicit
- How to avoid the \`any\` trap

## Prerequisites
- ✅ Basic JavaScript variable declaration
- ✅ \`let\` vs \`const\`

---

## The Inference Engine Explained

When you initialize a variable, TS assigns a type:
\`\`\`typescript
let age = 25; // Inferred: number
\`\`\`

### The "Implicit Any" Problem
If you don't initialize:
\`\`\`typescript
let data; // Inferred: any (DANGEROUS)
\`\`\`

**The Fix:** Always initialize OR annotate.

---

## Tasks

### Task 1: Initialize score
**Description:** Let TS infer the number type.
**Expected:** \`let score = 100\`

### Task 2: Assign string error
**Description:** Try to assign a string to score.
**Expected:** TS Error: type string not assignable to number.

### Task 3: Fix the error
**Description:** Assign a valid number.
**Expected:** \`score = 200\`

### Task 4: Implicit Any
**Description:** Declare \`message\` without value.
**Expected:** \`let message;\` (Observe the 'any' warning if configured strictly)

### Task 5: Fix Implicit Any
**Description:** Add type annotation.
**Expected:** \`let message: string;\`

### Task 6: Const Literal
**Description:** Use const for literal deduction.
**Expected:** \`const role = "admin"\` (Type is "admin", not string)

### Task 7: As Const
**Description:** Freeze an object.
**Expected:** \`const config = { ... } as const\`

---

`,
            tasks: [
                { id: 't1', text: 'Initialize score to 100', tests: [{ type: 'regex', value: 'let\\s+score\\s*=\\s*100' }] },
                { id: 't2', text: 'Try to assign string (should be commented out)', tests: [{ type: 'regex', value: '//.*score\\s*=\\s*["\']' }] },
                { id: 't3', text: 'Assign valid number', tests: [{ type: 'regex', value: 'score\\s*=\\s*\\d+' }] },
                { id: 't4', text: 'Declare uninitialized message', tests: [{ type: 'regex', value: 'let\\s+message\\s*;' }] },
                { id: 't5', text: 'Add type annotation', tests: [{ type: 'regex', value: 'let\\s+message\\s*:\\s*string' }] },
                { id: 't6', text: 'Create const role', tests: [{ type: 'regex', value: 'const\\s+role\\s*=\\s*["\']admin["\']' }] },
                { id: 't7', text: 'Use as const', tests: [{ type: 'regex', value: 'as\\s+const' }] }
            ]
        },
        {
            id: 'ts-1-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Strict Functions',
            description: 'Type your functions correctly',
            files: [
                {
                    name: 'index.ts',
                    language: 'typescript',
                    content: `// Lab 2: Strict Functions

// Task 1 & 2: Basic Function typing
// TODO: Add type annotations for arguments (a, b) and return type
function add(a, b) {
    return a + b;
}

// Task 3 & 4: Optional & Default Parameters
// TODO: Make 'greeting' optional and add default value "Hello"
function greet(name, greeting) {
    if (greeting) {
        return \`\${greeting}, \${name}\`;
    }
    return \`Hello, \${name}\`;
}

// Task 5: Rest Parameters
// TODO: Type 'nums' as an array of numbers
function sumAll(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

// Task 6: Void return
// TODO: Add :void return type
function log(msg: string) {
    console.log(msg);
}

// Task 7: Function Type Alias
// TODO: Define MathOp type
// type MathOp = ...
`
                }
            ],
            content: `
## The Big Picture

Functions are the primary means of passing data. TypeScript enforces that:
1. Arguments match expectations.
2. Return values match expectations.
3. You handle optional parameters correctly.

---

## Tasks

### Task 1: Basic Function typing
**Description:** Create \`add(a, b)\` where both are numbers.
**Hint:** \`(a: number, b: number)\`

### Task 2: Return type annotation
**Description:** Explicitly state the function returns a string.
**Hint:** \`): string {\`

### Task 3: Optional Parameters
**Description:** Make \`greeting\` optional in \`greet(name, greeting?)\`.
**Hint:** Use \`?\`.

### Task 4: Default Parameters
**Description:** Provide default greeting "Hello".
**Hint:** \`greet(name, greeting = "Hello")\`

### Task 5: Rest Parameters
**Description:** \`sumAll\` takes any number of arguments.
**Hint:** \`...nums: number[]\`

### Task 6: Void return
**Description:** A logger function returns nothing.
**Hint:** \`: void\`

### Task 7: Function Type Alias
**Description:** Define a type for a math operation.
**Hint:** \`type MathOp = (a: number, b: number) => number;\`

---

`,
            tasks: [
                { id: 't1', text: 'Define add(a: number, b: number)', tests: [{ type: 'regex', value: 'add\\s*\\(\\s*a\\s*:\\s*number' }] },
                { id: 't2', text: 'Add return type : number', tests: [{ type: 'regex', value: '\\):\\s*number' }] },
                { id: 't3', text: 'Optional parameter greeting?', tests: [{ type: 'regex', value: 'greeting\\?\\s*:' }] },
                { id: 't4', text: 'Default parameter', tests: [{ type: 'regex', value: 'greeting\\s*:\\s*string\\s*=\\s*' }] },
                { id: 't5', text: 'Rest parameters', tests: [{ type: 'regex', value: '\\.\\.\\.nums' }] },
                { id: 't6', text: 'Void return', tests: [{ type: 'regex', value: '\\):\\s*void' }] },
                { id: 't7', text: 'Function type', tests: [{ type: 'regex', value: '=>\\s*number' }] }
            ]
        },
        {
            id: 'ts-1-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: The ID System',
            description: 'Working with Union Types',
            files: [
                {
                    name: 'index.ts',
                    language: 'typescript',
                    content: `// Lab 3: The ID System

// Task 1: Define ID Type
// TODO: Create a union type 'ID' that can be string or number


// Task 2: Variable Declarations
// TODO: Create variables of type ID


// Task 3: Function using ID
// TODO: Add type annotation to the argument
function printId(id) {
    // Task 4: The Error (Try uncommenting this to see error)
    // console.log(id.toUpperCase());

    // Task 5: Narrowing with typeof
    // TODO: Write an if-check for string type
    if (true) {
        // Safe to use string methods here
    } else {
        console.log(id);
    }
}

// Task 6: Status Literal Union
// TODO: Define 'Status' type as "active" | "inactive" | "suspended"
`
                }
            ],
            content: `
## The Big Picture

You are building a User ID system. IDs can be legacy integers (db) or modern UUID strings. You must handle both safely using **Union Types**.

---

## Tasks

### Task 1: Define ID Type
**Description:** Create a union type \`ID\` that can be string or number.
**Hint:** \`type ID = string | number\`

### Task 2: Variable Declaration
**Description:** Create variables of type \`ID\`.

### Task 3: Function with Union
**Description:** \`printId(id: ID)\`

### Task 4: The Error
**Description:** Try to use \`.toUpperCase()\` directly. It should fail.

### Task 5: Narrrowing with typeof
**Description:** Check if string before using string methods.

### Task 6: Literal Union for Status
**Description:** \`type Status = "active" | "inactive" | "suspended"\`

---

`,
            tasks: [
                { id: 't1', text: 'Define type ID union', tests: [{ type: 'regex', value: 'type\\s+ID\\s*=\\s*string\\s*\\|\\s*number' }] },
                { id: 't2', text: 'Variable declarations', tests: [{ type: 'regex', value: 'let\\s+\\w+\\s*:\\s*ID' }] },
                { id: 't3', text: 'Function using ID', tests: [{ type: 'regex', value: 'printId\\s*\\(\\s*id\\s*:\\s*ID' }] },
                { id: 't4', text: 'Comment out error', tests: [{ type: 'regex', value: '//.*toUpperCase' }] },
                { id: 't5', text: 'Narrow with typeof', tests: [{ type: 'regex', value: 'typeof\\s+id\\s*===' }] },
                { id: 't6', text: 'Status literal union', tests: [{ type: 'regex', value: 'type\\s+Status\\s*=' }] }
            ]
        },
        {
            id: 'ts-1-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: API Data',
            description: 'Using unknown safely',
            files: [
                {
                    name: 'index.ts',
                    language: 'typescript',
                    content: `// Lab 4: API Data Handling

// Task 1: Simulate API
// TODO: Return 'unknown' instead of any
function fetchApi() {
    return JSON.parse('{"name": "Alice"}');
}

const response = fetchApi();

// Task 2: Unsafe Assignment
// TODO: Try assigning response to a string variable (should verify error)
// const val: string = response;

// Task 3 & 4: Type Guards
type User = { name: string };

// TODO: Complete the type predicate "data is User"
function isUser(data: any): boolean { // Change boolean to predicate
    return typeof data === "object" && data !== null && "name" in data;
}

// Task 5: Safe Usage
if (isUser(response)) {
    console.log(response.name.toUpperCase());
}

// Task 6: Error Handling
try {
    // risky operation
} catch (e) {
    // TODO: Annotate e as unknown and check if it is instance of Error
}
`
                }
            ],
            content: `
## The Big Picture

When fetching data from an API, we can't trust the shape. We use \`unknown\` to force verification.

---

## Tasks

### Task 1: Simulate API
**Description:** Function returns \`unknown\`.

### Task 2: Assign to typed var
**Description:** Try assigning unknown result to \`string\`. Should error.

### Task 3: Type Guard
**Description:** Use \`typeof\` to check.

### Task 4: Custom Type Guard
**Description:** \`isUser(data: any): data is User\` predicate.

### Task 5: Safe Parsing
**Description:** Validate object structure.

### Task 6: Error Handling
**Description:** Catch block error is \`unknown\`. Narrow it to \`Error\`.

---

`,
            tasks: [
                { id: 't1', text: 'Return unknown', tests: [{ type: 'regex', value: '\\):\\s*unknown' }] },
                { id: 't2', text: 'No unsafe assignment', tests: [{ type: 'regex', value: '//.*: string' }] },
                { id: 't3', text: 'Check type', tests: [{ type: 'regex', value: 'typeof' }] },
                { id: 't4', text: 'Type Guard', tests: [{ type: 'regex', value: ':\\s*data\\s+is\\s+User' }] },
                { id: 't5', text: 'Safe access', tests: [{ type: 'regex', value: 'if\\s*\\(isUser' }] },
                { id: 't6', text: 'Catch unknown', tests: [{ type: 'regex', value: 'catch\\s*\\(\\w+\\s*:\\s*unknown\\)' }] }
            ]
        },
        {
            id: 'ts-1-lesson-5',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 5: Tuple Destructuring',
            description: 'Fixed length arrays',
            files: [
                {
                    name: 'index.ts',
                    language: 'typescript',
                    content: `// Lab 5: Tuples

// Task 1: Define Tuple
// TODO: Define 'record' as [string, number]
let record = ["Alice", 100];

// Task 2: Access Tuple
// TODO: Log the second element (score)


// Task 3: Destructuring
// TODO: Destructure into username and score variables


// Task 4: Optional Element
// TODO: Define type with optional second element
// type Coordinate = ...

// Task 5: Rest Element
// TODO: Define tuple with string first, then any number of numbers
// let grades: ...

// Task 6: Readonly Tuple
// TODO: Make this point immutable
const point = [10, 20];
`
                }
            ],
            content: `
## The Big Picture

Tuples are arrays with fixed types and lengths. Perfect for coordinates or CSV rows.

---

## Tasks

### Task 1: Define Tuple
**Description:** \`[string, number]\` for name and score.

### Task 2: Access Tuple
**Description:** Index 0 is string, Index 1 is number.

### Task 3: Destructuring
**Description:** \`const [name, score] = record\`.

### Task 4: Optional Element
**Description:** \`[string, number?]\`.

### Task 5: Rest Element
**Description:** \`[string, ...number[]]\`.

### Task 6: Readonly Tuple
**Description:** \`readonly [number, number]\`.

---

`,
            tasks: [
                { id: 't1', text: 'Define Tuple', tests: [{ type: 'regex', value: ':.*\\[\\s*string\\s*,\\s*number\\s*\\]' }] },
                { id: 't2', text: 'Access index', tests: [{ type: 'regex', value: '\\\[0\\\]' }] },
                { id: 't3', text: 'Destructure', tests: [{ type: 'regex', value: 'const\\s*\\[.*\\]\\s*=' }] },
                { id: 't4', text: 'Optional element', tests: [{ type: 'regex', value: '\\?\\s*\\]' }] },
                { id: 't5', text: 'Rest element', tests: [{ type: 'regex', value: '\\.\\.\\.' }] },
                { id: 't6', text: 'Readonly tuple', tests: [{ type: 'regex', value: 'readonly\\s*\\[' }] }
            ]
        },

        // --- QUIZ ---
        {
            id: 'ts-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Unit 1 Mastery Quiz',
            description: 'Prove your knowledge of Types, Inference, and Safety.',
            questions: [
                {
                    "question": "What is the result of `const x: number = '5';`?",
                    "options": [
                        "x becomes 5",
                        "x becomes '5'",
                        "Compilation Error",
                        "Runtime Error"
                    ],
                    "correctAnswer": 2,
                    "explanation": "TypeScript enforces static typing. You cannot assign a string ('5') to a variable explicitly typed as number."
                },
                {
                    "question": "Which command compiles TypeScript to JavaScript?",
                    "options": [
                        "node file.ts",
                        "tsc file.ts",
                        "java file.ts",
                        "compile file.ts"
                    ],
                    "correctAnswer": 1,
                    "explanation": "`tsc` (TypeScript Compiler) is the CLI tool used to transpile TS code into JS."
                },
                {
                    "question": "Does TypeScript exist at runtime?",
                    "options": [
                        "Yes, browsers run TS directly",
                        "No, types are erased during compilation",
                        "Only in strict mode",
                        "Only in Node.js"
                    ],
                    "correctAnswer": 1,
                    "explanation": "TypeScript follows the 'Type Erasure' philosophy. Use standard JS at runtime; TS is a dev-time tool."
                },
                {
                    "question": "What is the safest type for unknown input?",
                    "options": [
                        "any",
                        "unknown",
                        "never",
                        "void"
                    ],
                    "correctAnswer": 1,
                    "explanation": "`unknown` forces you to check the type before using it, whereas `any` disables checks."
                },
                {
                    "question": "What does keyof typeof obj do?",
                    "options": [
                        "Gets values of object",
                        "Gets keys of object as a Union Type",
                        "Converts object to array",
                        "Runtime error"
                    ],
                    "correctAnswer": 1,
                    "explanation": "It creates a union type of all keys in the object (e.g., 'name' | 'age')."
                },
                {
                    "question": "Which flag enables strict null checks?",
                    "options": [
                        "strict",
                        "noImplicitNull",
                        "alwaysStrict",
                        "safeMode"
                    ],
                    "correctAnswer": 0,
                    "explanation": "The `strict` family of flags includes strictNullChecks."
                },
                {
                    "question": "How do you define a union type?",
                    "options": [
                        "type ID = string & number",
                        "type ID = string | number",
                        "type ID = string + number",
                        "type ID = [string, number]"
                    ],
                    "correctAnswer": 1,
                    "explanation": "The pipe operator `|` is used for Union Types (OR logic)."
                },
                {
                    "question": "What is the type of `const x = 10`?",
                    "options": [
                        "number",
                        "10 (Literal Type)",
                        "any",
                        "integer"
                    ],
                    "correctAnswer": 1,
                    "explanation": "Because it is `const`, TS infers the literal type `10`, as it cannot change."
                }
            ]
        }
    ]
};
