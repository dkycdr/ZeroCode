import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc1StorageOverview = {
    id: 'html5-u9-doc-1-storage',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Browser Storage - Beyond Cookies',
    duration: '20 min read',
    content: `
# Deep Dive: Browser Storage - Beyond Cookies

## 1. The Problem with Cookies

Back in the 1990s, websites used **cookies** to remember things about you. But cookies have serious problems:

- **Tiny Size**: Only 4KB. That's about 1 paragraph of text.
- **Sent to Server Every Time**: Every page load sends ALL cookies. This slows down your website.
- **Complex Syntax**: Setting cookies in JavaScript is ugly and confusing.

Modern browsers give us **much better options**. Let's explore them.

---

## 2. The Four Storage Options

Think of your browser as a house with different storage rooms:

| Storage Type | Size | Lifespan | Use Case |
|:---|:---|:---|:---|
| **Cookies** | 4KB | You set the expiry date | Login tokens, tracking |
| **LocalStorage** | ~5MB | Forever (until you delete it) | User settings, themes |
| **SessionStorage** | ~5MB | Only while the tab is open | Shopping cart, form drafts |
| **IndexedDB** | 50MB+ | Forever | Offline apps, large databases |

### The Simple Rule:
- Need to save **permanently**? Use **LocalStorage**.
- Need to save **temporarily** (just this session)? Use **SessionStorage**.
- Need a **real database** in the browser? Use **IndexedDB**.

---

## 3. How LocalStorage Works (The Most Common)

LocalStorage is like a dictionary. It stores **key-value pairs**.

### Saving Data
\`\`\`javascript
// Save a simple value
localStorage.setItem('username', 'Alice');

// Save an object (you MUST convert to string first!)
const user = { name: 'Alice', age: 25 };
localStorage.setItem('user', JSON.stringify(user));
\`\`\`

### Reading Data
\`\`\`javascript
// Get a simple value
const name = localStorage.getItem('username');
console.log(name); // "Alice"

// Get an object (you MUST parse it back!)
const savedUser = JSON.parse(localStorage.getItem('user'));
console.log(savedUser.name); // "Alice"
\`\`\`

### Deleting Data
\`\`\`javascript
// Remove one item
localStorage.removeItem('username');

// Remove EVERYTHING
localStorage.clear();
\`\`\`

---

## 4. The Stringify/Parse Dance

This is the **#1 mistake** beginners make.

LocalStorage can ONLY store strings. If you try to save an object directly, it becomes \`"[object Object]"\` - which is useless.

### ❌ The Wrong Way
\`\`\`javascript
const todos = ['Buy milk', 'Call mom'];
localStorage.setItem('todos', todos);
// Saved as: "Buy milk,Call mom" (broken!)
\`\`\`

### ✅ The Correct Way
\`\`\`javascript
const todos = ['Buy milk', 'Call mom'];
localStorage.setItem('todos', JSON.stringify(todos));
// Saved as: '["Buy milk","Call mom"]' (perfect JSON)

// When reading:
const loaded = JSON.parse(localStorage.getItem('todos'));
// loaded is now a real array again!
\`\`\`

---

## 5. When Storage Can Fail

Storage isn't infinite. Here are edge cases you must handle:

### Storage Full
\`\`\`javascript
try {
    localStorage.setItem('bigData', hugeString);
} catch (error) {
    if (error.name === 'QuotaExceededError') {
        alert('Storage is full! Please clear some data.');
    }
}
\`\`\`

### Private/Incognito Mode
Some browsers block storage in private mode. Always check:

\`\`\`javascript
function isStorageAvailable() {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
}
\`\`\`

---

## 6. Security Warning 🔒

> [!CAUTION]
> **NEVER store sensitive data in LocalStorage!**
> - No passwords
> - No credit card numbers
> - No API keys
> 
> **Why?** Any JavaScript on your page can read LocalStorage. If a hacker injects malicious code (XSS attack), they can steal everything.

Use LocalStorage only for:
- User preferences (theme, language)
- Non-sensitive cached data
- Draft content (like unsaved form text)

---

## 7. SessionStorage vs LocalStorage

The ONLY difference is **lifespan**:

- **LocalStorage**: Data survives forever. Close the browser, restart your computer - data is still there.
- **SessionStorage**: Data dies when you close the tab.

\`\`\`javascript
// Same API, different object
sessionStorage.setItem('tempData', 'This will disappear');
\`\`\`

Use SessionStorage for:
- Shopping cart items (before checkout)
- Form data the user hasn't submitted yet
- Temporary state during a multi-step wizard
`
};
