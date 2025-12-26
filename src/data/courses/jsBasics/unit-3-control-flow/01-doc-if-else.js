import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1IfElse = {
    id: 'js-u3-doc-1-if-else',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'If-Else Statements',
    duration: '15 min read',
    content: `
# If-Else Statements

## 1. Making Decisions in Code

Real programs need to make decisions:
- If the user is logged in, show their profile
- If the password is wrong, show an error
- If the cart is empty, disable checkout

The \`if\` statement lets your code make these decisions.

---

## 2. Basic If Statement

\`\`\`javascript
if (condition) {
    // Code runs if condition is TRUE
}
\`\`\`

### Example:
\`\`\`javascript
let age = 20;

if (age >= 18) {
    console.log("You can vote!");
}
\`\`\`

---

## 3. If-Else Statement

What if the condition is false? Use \`else\`:

\`\`\`javascript
if (condition) {
    // Runs if TRUE
} else {
    // Runs if FALSE
}
\`\`\`

### Example:
\`\`\`javascript
let temperature = 15;

if (temperature > 25) {
    console.log("It's hot!");
} else {
    console.log("It's cool!");
}
\`\`\`

---

## 4. Else-If Chain

Multiple conditions? Use \`else if\`:

\`\`\`javascript
let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
\`\`\`

> [!IMPORTANT]
> Only ONE block runs. Once a condition is true, the rest are skipped.

---

## 5. Nesting If Statements

You can put if inside if:

\`\`\`javascript
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    console.log("Welcome!");
    
    if (isAdmin) {
        console.log("You have admin access");
    }
}
\`\`\`

But be careful - too much nesting makes code hard to read!

---

## 6. Common Patterns

### Check if something exists:
\`\`\`javascript
let username = "";

if (username) {
    console.log("Hello, " + username);
} else {
    console.log("Please enter a username");
}
\`\`\`

### Early return pattern:
\`\`\`javascript
function processUser(user) {
    if (!user) {
        console.log("No user provided");
        return;
    }
    // Continue processing...
}
\`\`\`

---

## 7. Common Mistakes

### Missing braces (dangerous!):
\`\`\`javascript
// ❌ Bad - only first line is conditional
if (age >= 18)
    console.log("Adult");
    console.log("Can vote"); // Always runs!

// ✅ Good - use braces
if (age >= 18) {
    console.log("Adult");
    console.log("Can vote");
}
\`\`\`

### Assignment instead of comparison:
\`\`\`javascript
// ❌ Wrong - = assigns, doesn't compare
if (x = 5) { }

// ✅ Correct - === compares
if (x === 5) { }
\`\`\`
`
};
