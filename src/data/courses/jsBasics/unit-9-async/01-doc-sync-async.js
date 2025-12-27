import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1SyncVsAsync = {
    id: 'js-u9-doc-1-sync-async',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Sync vs Async',
    duration: '12 min read',
    content: `
# Sync vs Async

## 1. Synchronous (Blocking)

Code runs line by line, waiting for each to complete:

\`\`\`javascript
console.log("First");
console.log("Second");
console.log("Third");
// Output: First, Second, Third (in order)
\`\`\`

---

## 2. The Problem

What if one task takes a long time?

\`\`\`javascript
console.log("Start");
// Imagine this takes 5 seconds...
fetchDataFromServer();  // Page freezes!
console.log("Done");
\`\`\`

---

## 3. Asynchronous (Non-Blocking)

Start a task and continue without waiting:

\`\`\`javascript
console.log("Start");
setTimeout(() => console.log("Delayed"), 2000);
console.log("End");

// Output:
// Start
// End
// Delayed (after 2 seconds)
\`\`\`

---

## 4. Why Async Matters

| Task | Time | Example |
|:---|:---|:---|
| Network request | 100ms - 5s | API calls |
| File reading | 10ms - 1s | Large files |
| Database query | 10ms - 2s | User data |
| Timer | Variable | Animations |

If these were synchronous, the page would freeze!

---

## 5. setTimeout & setInterval

\`\`\`javascript
// Run once after delay
setTimeout(() => console.log("After 1 sec"), 1000);

// Run repeatedly
const id = setInterval(() => console.log("Every sec"), 1000);

// Stop interval
clearInterval(id);
\`\`\`
`
};
