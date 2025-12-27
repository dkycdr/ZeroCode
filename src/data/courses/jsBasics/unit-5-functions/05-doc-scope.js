import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc5Scope = {
    id: 'js-u5-doc-5-scope',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Scope (Local vs Global)',
    duration: '10 min read',
    content: `
# Scope (Local vs Global)

## 1. What is Scope?

Scope determines where variables are accessible.

---

## 2. Global Scope

Variables declared outside any function are **global**:

\`\`\`javascript
let globalVar = "I'm global!";

function test() {
    console.log(globalVar);  // ✅ Can access
}

test();
console.log(globalVar);  // ✅ Can access
\`\`\`

---

## 3. Local (Function) Scope

Variables declared inside a function are **local**:

\`\`\`javascript
function test() {
    let localVar = "I'm local!";
    console.log(localVar);  // ✅ Works
}

test();
console.log(localVar);  // ❌ Error! Not defined
\`\`\`

---

## 4. Block Scope

\`let\` and \`const\` are scoped to blocks \`{ }\`:

\`\`\`javascript
if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar);  // ✅ Works
}

console.log(blockVar);  // ❌ Error!
\`\`\`

---

## 5. Scope Chain

Inner scopes can access outer scopes:

\`\`\`javascript
let outer = "outer";

function test() {
    let inner = "inner";
    
    function nested() {
        console.log(outer);  // ✅ Can access
        console.log(inner);  // ✅ Can access
    }
    
    nested();
}
\`\`\`

---

## 6. Variable Shadowing

Inner variables can "shadow" outer ones:

\`\`\`javascript
let name = "Global";

function greet() {
    let name = "Local";  // Shadows global
    console.log(name);   // "Local"
}

greet();
console.log(name);  // "Global" (unchanged)
\`\`\`

---

## 7. Best Practices

- ✅ Keep variables in the smallest scope possible
- ✅ Avoid global variables
- ✅ Use \`const\` by default, \`let\` when needed
- ❌ Never use \`var\` (function-scoped, causes bugs)
`
};
