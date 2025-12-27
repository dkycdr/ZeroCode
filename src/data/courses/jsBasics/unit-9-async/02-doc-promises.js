import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2Promises = {
    id: 'js-u9-doc-2-promises',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Promises',
    duration: '15 min read',
    content: `
# Promises

## 1. What is a Promise?

A promise is a placeholder for a future value.

**States:**
- **Pending**: Waiting for result
- **Fulfilled**: Success!
- **Rejected**: Failed!

---

## 2. Creating a Promise

\`\`\`javascript
const promise = new Promise((resolve, reject) => {
    // Async operation
    if (success) {
        resolve("Data here");
    } else {
        reject("Error message");
    }
});
\`\`\`

---

## 3. Using Promises: then/catch

\`\`\`javascript
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
\`\`\`

---

## 4. Chaining Promises

\`\`\`javascript
getData()
    .then(data => processData(data))
    .then(result => saveData(result))
    .then(() => console.log("Done!"))
    .catch(err => console.error("Failed:", err));
\`\`\`

---

## 5. Promise.all

Wait for multiple promises:

\`\`\`javascript
Promise.all([fetchUsers(), fetchPosts()])
    .then(([users, posts]) => {
        console.log(users, posts);
    });
\`\`\`

---

## 6. finally

Runs whether success or failure:

\`\`\`javascript
fetch(url)
    .then(data => process(data))
    .catch(err => handle(err))
    .finally(() => hideLoader());
\`\`\`
`
};
