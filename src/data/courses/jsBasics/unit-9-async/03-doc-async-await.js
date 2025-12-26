import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc3AsyncAwait = {
    id: 'js-u9-doc-3-async-await',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Async/Await',
    duration: '12 min read',
    content: `
# Async/Await

## 1. The Modern Way

async/await makes promises look like synchronous code:

### Promise way:
\`\`\`javascript
function getData() {
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}
\`\`\`

### async/await way:
\`\`\`javascript
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
}
\`\`\`

---

## 2. The Rules

1. \`await\` can ONLY be used inside \`async\` functions
2. \`await\` pauses until the promise resolves
3. async functions always return a promise

---

## 3. Error Handling

Use try/catch:

\`\`\`javascript
async function getData() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Failed:", error);
    }
}
\`\`\`

---

## 4. Multiple Awaits

\`\`\`javascript
async function loadPage() {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    display(user, posts, comments);
}
\`\`\`

---

## 5. Parallel with Promise.all

\`\`\`javascript
async function loadData() {
    const [users, posts] = await Promise.all([
        fetchUsers(),
        fetchPosts()
    ]);
}
\`\`\`
`
};
