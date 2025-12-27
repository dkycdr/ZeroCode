import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2HowJsRuns = {
    id: 'js-u0-doc-2-how-js-runs',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'How JavaScript Runs',
    duration: '15 min read',
    content: `
# How JavaScript Runs

## 1. The JavaScript Engine

When you write JavaScript code, your computer doesn't understand it directly. Computers only understand binary (0s and 1s).

So how does your code run? **The JavaScript Engine** translates it!

### Popular Engines:
| Browser | Engine Name |
|:---|:---|
| Google Chrome | **V8** |
| Mozilla Firefox | SpiderMonkey |
| Safari | JavaScriptCore |
| Microsoft Edge | V8 (same as Chrome) |

**V8** is the most popular. It also powers **Node.js** for server-side JavaScript.

---

## 2. How the Engine Works

When you write:
\`\`\`javascript
console.log("Hello!");
\`\`\`

Here's what happens behind the scenes:

### Step 1: Parsing
The engine reads your code character by character and breaks it into tokens:
\`console\`, \`.\`, \`log\`, \`(\`, \`"Hello!"\`, \`)\`

### Step 2: Abstract Syntax Tree (AST)
The tokens are organized into a tree structure that represents what your code means.

### Step 3: Compilation
Modern engines use **Just-In-Time (JIT)** compilation. They convert your code to machine code (binary) right before running it.

### Step 4: Execution
The machine code runs and you see the output!

---

## 3. The Execution Context

Every time JavaScript runs, it creates an **Execution Context** - a container for the code being executed.

Think of it like a workspace with:
- **Memory** - Where variables are stored
- **Thread of Execution** - Where code runs line by line

---

## 4. Single-Threaded Nature

> [!IMPORTANT]
> JavaScript is **single-threaded**. It can only do ONE thing at a time.

Imagine a restaurant with only ONE chef:
- If someone orders a complicated dish that takes 30 minutes...
- Everyone else has to wait!

This is why heavy calculations can "freeze" a webpage.

---

## 5. The Call Stack

JavaScript tracks function calls using a **Call Stack** (like a stack of plates).

\`\`\`javascript
function greet() {
    console.log("Hello");
}

function main() {
    greet();
}

main();
\`\`\`

**Stack visualization:**
\`\`\`text
1. [main()]           -- main() is called
2. [greet(), main()]  -- greet() is called inside main()
3. [console.log(), greet(), main()] -- console.log() runs
4. [greet(), main()]  -- console.log() finished, removed
5. [main()]           -- greet() finished, removed
6. []                 -- main() finished, stack empty
\`\`\`

When you call too many functions without returning (infinite recursion), you get a **Stack Overflow** error!

---

## 6. Runtime Environment

The JavaScript engine alone can't do everything. It needs a **Runtime Environment** that provides extra features:

### Browser Runtime Provides:
- \`document\` - Access to HTML
- \`window\` - The browser window
- \`fetch\` - Make network requests
- \`setTimeout\` - Delay execution

### Node.js Runtime Provides:
- \`fs\` - File system access
- \`http\` - Create web servers
- \`process\` - System information

---

## Summary

1. JavaScript engines like **V8** translate your code to machine code
2. Code is parsed, compiled, and executed
3. JavaScript is **single-threaded** (one thing at a time)
4. The **Call Stack** tracks which functions are running
5. Runtime environments add extra capabilities

**Next:** Let's explore the Console - your best friend for debugging!
`
};
