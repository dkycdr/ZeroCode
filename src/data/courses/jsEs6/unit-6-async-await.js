import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6AsyncAwait = {
    id: 'js-es6-unit-6',
    title: 'Async/Await - Modern Asynchronous JavaScript',
    description: 'Master async/await syntax for cleaner asynchronous code, error handling, and parallel execution',
    items: [
        {
            id: 'js-es6-6-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Introduction to Async/Await',
            duration: '20 min read',
            content: `
# Introduction to Async/Await

## What is Async/Await?

**Async/Await** is modern syntax for handling asynchronous operations in JavaScript. It makes asynchronous code look and behave like synchronous code.

Think of it as a cleaner way to work with Promises:
- **async** = Marks a function as asynchronous
- **await** = Waits for a Promise to resolve
- **Result** = Cleaner, more readable code

## The Problem: Promise Chains

### With Promises (The Old Way)

\`\`\`javascript
fetch('https://api.example.com/user/1')
    .then(response => response.json())
    .then(user => {
        console.log('User:', user);
        return fetch(\`https://api.example.com/posts/\${user.id}\`);
    })
    .then(response => response.json())
    .then(posts => {
        console.log('Posts:', posts);
    })
    .catch(error => {
        console.error('Error:', error);
    });
\`\`\`

**Problems:**
- Nested callbacks (callback hell)
- Hard to read
- Error handling is awkward
- Can't use try-catch

### With Async/Await (The Modern Way)

\`\`\`javascript
async function getUserPosts() {
    try {
        const userResponse = await fetch('https://api.example.com/user/1');
        const user = await userResponse.json();
        console.log('User:', user);
        
        const postsResponse = await fetch(\`https://api.example.com/posts/\${user.id}\`);
        const posts = await postsResponse.json();
        console.log('Posts:', posts);
    } catch (error) {
        console.error('Error:', error);
    }
}

getUserPosts();
\`\`\`

**Benefits:**
- ✅ Looks like synchronous code
- ✅ Easy to read top-to-bottom
- ✅ Use try-catch for errors
- ✅ No callback hell

## Basic Syntax

### Async Function

\`\`\`javascript
async function myFunction() {
    // This function returns a Promise
}
\`\`\`

**Rules:**
- Add \`async\` keyword before function
- Function automatically returns a Promise
- Can use \`await\` inside

### Await Keyword

\`\`\`javascript
async function myFunction() {
    const result = await somePromise;
    // Waits for Promise to resolve
}
\`\`\`

**Rules:**
- Can only use \`await\` inside \`async\` function
- Pauses execution until Promise resolves
- Returns the resolved value

## Simple Example

### Creating a Delay

\`\`\`javascript
// Helper function that returns a Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Using async/await
async function sayHello() {
    console.log('Hello');
    await delay(2000);  // Wait 2 seconds
    console.log('World');
}

sayHello();
// Output:
// Hello
// (2 second pause)
// World
\`\`\`

### Fetching Data

\`\`\`javascript
async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await response.json();
    return user;
}

// Call the function
getUser().then(user => {
    console.log('User:', user);
});

// Or use await (if inside async function)
async function main() {
    const user = await getUser();
    console.log('User:', user);
}
\`\`\`

## How Async Functions Work

### Async Function Returns a Promise

\`\`\`javascript
async function getValue() {
    return 42;
}

// Equivalent to:
function getValue() {
    return Promise.resolve(42);
}

// Usage:
getValue().then(value => {
    console.log(value);  // 42
});
\`\`\`

### Await Unwraps the Promise

\`\`\`javascript
async function example() {
    const promise = Promise.resolve(42);
    const value = await promise;
    console.log(value);  // 42 (not a Promise)
}
\`\`\`

## Error Handling

### With Try-Catch

\`\`\`javascript
async function fetchUser() {
    try {
        const response = await fetch('https://api.example.com/user/1');
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}
\`\`\`

### Without Try-Catch (Using .catch())

\`\`\`javascript
async function fetchUser() {
    const response = await fetch('https://api.example.com/user/1');
    const user = await response.json();
    return user;
}

// Handle error when calling
fetchUser()
    .then(user => console.log(user))
    .catch(error => console.error(error));
\`\`\`

## Sequential vs Parallel Execution

### Sequential (One After Another)

\`\`\`javascript
async function sequential() {
    console.time('sequential');
    
    const user1 = await fetch('https://api.example.com/user/1');
    const user2 = await fetch('https://api.example.com/user/2');
    const user3 = await fetch('https://api.example.com/user/3');
    
    console.timeEnd('sequential');
    // Takes: 3 seconds (1 + 1 + 1)
}
\`\`\`

### Parallel (All at Once)

\`\`\`javascript
async function parallel() {
    console.time('parallel');
    
    const [user1, user2, user3] = await Promise.all([
        fetch('https://api.example.com/user/1'),
        fetch('https://api.example.com/user/2'),
        fetch('https://api.example.com/user/3')
    ]);
    
    console.timeEnd('parallel');
    // Takes: 1 second (all at once)
}
\`\`\`

## Promise.all() with Async/Await

### Waiting for Multiple Promises

\`\`\`javascript
async function getAllUsers() {
    try {
        const promises = [
            fetch('https://api.example.com/user/1'),
            fetch('https://api.example.com/user/2'),
            fetch('https://api.example.com/user/3')
        ];
        
        const responses = await Promise.all(promises);
        const users = await Promise.all(responses.map(r => r.json()));
        
        return users;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
\`\`\`

### Promise.allSettled() - Wait for All (Even if Some Fail)

\`\`\`javascript
async function getAllUsersSettled() {
    const promises = [
        fetch('https://api.example.com/user/1'),
        fetch('https://api.example.com/user/999'),  // This will fail
        fetch('https://api.example.com/user/3')
    ];
    
    const results = await Promise.allSettled(promises);
    
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(\`User \${index + 1}: Success\`);
        } else {
            console.log(\`User \${index + 1}: Failed\`, result.reason);
        }
    });
}
\`\`\`

### Promise.race() - First to Finish

\`\`\`javascript
async function fastestUser() {
    const promises = [
        fetch('https://api.example.com/user/1'),
        fetch('https://api.example.com/user/2'),
        fetch('https://api.example.com/user/3')
    ];
    
    const fastest = await Promise.race(promises);
    const user = await fastest.json();
    
    console.log('Fastest:', user);
}
\`\`\`

## Real-World Examples

### Example 1: Fetch User and Posts

\`\`\`javascript
async function getUserWithPosts(userId) {
    try {
        // Fetch user
        const userResponse = await fetch(\`https://api.example.com/users/\${userId}\`);
        const user = await userResponse.json();
        
        // Fetch user's posts
        const postsResponse = await fetch(\`https://api.example.com/users/\${userId}/posts\`);
        const posts = await postsResponse.json();
        
        return {
            user,
            posts
        };
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Usage
async function main() {
    const data = await getUserWithPosts(1);
    console.log('User:', data.user.name);
    console.log('Posts:', data.posts.length);
}
\`\`\`

### Example 2: Login Flow

\`\`\`javascript
async function login(email, password) {
    try {
        // Step 1: Authenticate
        const authResponse = await fetch('https://api.example.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        
        if (!authResponse.ok) {
            throw new Error('Invalid credentials');
        }
        
        const { token } = await authResponse.json();
        
        // Step 2: Get user profile
        const profileResponse = await fetch('https://api.example.com/profile', {
            headers: { 'Authorization': \`Bearer \${token}\` }
        });
        
        const profile = await profileResponse.json();
        
        return {
            success: true,
            token,
            profile
        };
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Usage
async function handleLogin() {
    const result = await login('user@example.com', 'password123');
    
    if (result.success) {
        console.log('Welcome,', result.profile.name);
    } else {
        console.error('Login failed:', result.error);
    }
}
\`\`\`

### Example 3: Retry Logic

\`\`\`javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(\`HTTP \${response.status}\`);
        } catch (error) {
            console.log(\`Attempt \${i + 1} failed:\`, error.message);
            
            if (i === maxRetries - 1) {
                throw error;  // Last attempt, give up
            }
            
            // Wait before retry (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
        }
    }
}

// Usage
async function getData() {
    try {
        const data = await fetchWithRetry('https://api.example.com/data');
        console.log('Data:', data);
    } catch (error) {
        console.error('Failed after retries:', error);
    }
}
\`\`\`

## Common Patterns

### Pattern 1: Async IIFE (Immediately Invoked Function Expression)

\`\`\`javascript
(async () => {
    const data = await fetchData();
    console.log(data);
})();
\`\`\`

### Pattern 2: Async Arrow Function

\`\`\`javascript
const fetchUser = async (id) => {
    const response = await fetch(\`https://api.example.com/users/\${id}\`);
    return await response.json();
};
\`\`\`

### Pattern 3: Async Method in Object

\`\`\`javascript
const api = {
    async getUser(id) {
        const response = await fetch(\`https://api.example.com/users/\${id}\`);
        return await response.json();
    }
};
\`\`\`

### Pattern 4: Async Method in Class

\`\`\`javascript
class UserService {
    async getUser(id) {
        const response = await fetch(\`https://api.example.com/users/\${id}\`);
        return await response.json();
    }
}
\`\`\`

## Best Practices

### ✅ DO:

1. **Use try-catch for error handling**
\`\`\`javascript
async function fetchData() {
    try {
        const data = await fetch(url);
        return data;
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

2. **Use Promise.all() for parallel requests**
\`\`\`javascript
const [user, posts] = await Promise.all([
    fetchUser(),
    fetchPosts()
]);
\`\`\`

3. **Return early on errors**
\`\`\`javascript
if (!response.ok) {
    throw new Error('Failed');
}
\`\`\`

4. **Use async/await consistently**
\`\`\`javascript
// Good
async function main() {
    const data = await fetchData();
    const processed = await processData(data);
    return processed;
}
\`\`\`

### ❌ DON'T:

1. **Don't forget await**
\`\`\`javascript
async function bad() {
    const data = fetch(url);  // ❌ Returns Promise, not data
    console.log(data);  // Promise object
}
\`\`\`

2. **Don't use await in loops unnecessarily**
\`\`\`javascript
// Bad (sequential)
for (let id of ids) {
    await fetchUser(id);  // Slow!
}

// Good (parallel)
await Promise.all(ids.map(id => fetchUser(id)));
\`\`\`

3. **Don't mix async/await with .then()**
\`\`\`javascript
// Bad (confusing)
async function mixed() {
    const data = await fetch(url).then(r => r.json());
}

// Good (consistent)
async function clean() {
    const response = await fetch(url);
    const data = await response.json();
}
\`\`\`

## Key Takeaways

- ✅ Async/await makes asynchronous code look synchronous
- ✅ \`async\` marks function as asynchronous
- ✅ \`await\` waits for Promise to resolve
- ✅ Use try-catch for error handling
- ✅ Use Promise.all() for parallel execution
- ✅ Async functions always return Promises
- ✅ Can only use await inside async functions
- ✅ Much cleaner than Promise chains

## What's Next?

In the next lesson, you'll practice using async/await to fetch data from real APIs and handle errors gracefully.

Now you can write modern asynchronous JavaScript! 🚀
            `
        },
        {
            id: 'js-es6-6-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Fetching Data with Async/Await',
            duration: '35 min',
            content: `
# Fetching Data with Async/Await

## The Fetch API

The Fetch API is the modern way to make HTTP requests in JavaScript.

### Basic Fetch Syntax

\`\`\`javascript
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
\`\`\`

### With Async/Await

\`\`\`javascript
async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
\`\`\`

## Step-by-Step: Fetching Data

### Step 1: Make the Request

\`\`\`javascript
async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // response is a Response object
}
\`\`\`

### Step 2: Check if Successful

\`\`\`javascript
async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    // Continue if successful
}
\`\`\`

### Step 3: Parse the Response

\`\`\`javascript
async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const users = await response.json();  // Parse JSON
    return users;
}
\`\`\`

### Step 4: Handle Errors

\`\`\`javascript
async function getUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}
\`\`\`

## Complete Example: User List

\`\`\`javascript
async function displayUsers() {
    try {
        // Show loading
        console.log('Loading users...');
        
        // Fetch data
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Check response
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        
        // Parse JSON
        const users = await response.json();
        
        // Display users
        console.log('Users loaded:', users.length);
        users.forEach(user => {
            console.log(\`- \${user.name} (\${user.email})\`);
        });
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}

displayUsers();
\`\`\`

## Fetching Multiple Resources

### Sequential (Slow)

\`\`\`javascript
async function getUserAndPosts(userId) {
    try {
        // Fetch user (wait)
        const userResponse = await fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`);
        const user = await userResponse.json();
        
        // Fetch posts (wait)
        const postsResponse = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`);
        const posts = await postsResponse.json();
        
        return { user, posts };
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Takes: 2 seconds (1 + 1)
\`\`\`

### Parallel (Fast)

\`\`\`javascript
async function getUserAndPosts(userId) {
    try {
        // Start both requests at once
        const [userResponse, postsResponse] = await Promise.all([
            fetch(\`https://jsonplaceholder.typicode.com/users/\${userId}\`),
            fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`)
        ]);
        
        // Parse both responses
        const [user, posts] = await Promise.all([
            userResponse.json(),
            postsResponse.json()
        ]);
        
        return { user, posts };
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Takes: 1 second (parallel)
\`\`\`

## POST Requests

### Sending Data

\`\`\`javascript
async function createPost(title, body) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        
        const newPost = await response.json();
        console.log('Created post:', newPost);
        return newPost;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Usage
createPost('My Title', 'My post content');
\`\`\`

## PUT/PATCH Requests

### Updating Data

\`\`\`javascript
async function updatePost(postId, updates) {
    try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`, {
            method: 'PATCH',  // or 'PUT' for full update
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updates)
        });
        
        if (!response.ok) {
            throw new Error('Failed to update post');
        }
        
        const updatedPost = await response.json();
        console.log('Updated post:', updatedPost);
        return updatedPost;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Usage
updatePost(1, { title: 'New Title' });
\`\`\`

## DELETE Requests

### Deleting Data

\`\`\`javascript
async function deletePost(postId) {
    try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('Failed to delete post');
        }
        
        console.log('Post deleted successfully');
        return true;
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

// Usage
deletePost(1);
\`\`\`

## Error Handling Patterns

### Pattern 1: Try-Catch with Specific Errors

\`\`\`javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Resource not found');
            } else if (response.status === 500) {
                throw new Error('Server error');
            } else {
                throw new Error(\`HTTP error: \${response.status}\`);
            }
        }
        
        return await response.json();
    } catch (error) {
        if (error.name === 'TypeError') {
            console.error('Network error:', error);
        } else {
            console.error('Error:', error.message);
        }
        return null;
    }
}
\`\`\`

### Pattern 2: Timeout

\`\`\`javascript
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error('Fetch failed');
        }
        
        return await response.json();
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request timeout');
        } else {
            console.error('Error:', error);
        }
        return null;
    }
}
\`\`\`

### Pattern 3: Retry Logic

\`\`\`javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            
            if (response.ok) {
                return await response.json();
            }
            
            throw new Error(\`HTTP \${response.status}\`);
        } catch (error) {
            console.log(\`Attempt \${i + 1} failed\`);
            
            if (i === maxRetries - 1) {
                throw error;
            }
            
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
}
\`\`\`

## Loading States

### Managing UI States

\`\`\`javascript
async function loadUsers() {
    let loading = true;
    let error = null;
    let data = null;
    
    try {
        console.log('Loading: true');
        
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
        
        data = await response.json();
        console.log('Data loaded:', data.length, 'users');
        
    } catch (err) {
        error = err.message;
        console.error('Error:', error);
    } finally {
        loading = false;
        console.log('Loading: false');
    }
    
    return { loading, error, data };
}
\`\`\`

## Your Mission

Build a complete data fetching application:
1. Fetch users from API
2. Display loading state
3. Handle errors gracefully
4. Show user details
5. Fetch user's posts when clicked
6. Use async/await throughout

## Step-by-Step Guide

### Step 1: Create fetchUsers function

\`\`\`javascript
async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}
\`\`\`

### Step 2: Create fetchUserPosts function

\`\`\`javascript
async function fetchUserPosts(userId) {
    try {
        const response = await fetch(\`https://jsonplaceholder.typicode.com/posts?userId=\${userId}\`);
        if (!response.ok) throw new Error('Failed to fetch');
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}
\`\`\`

### Step 3: Display users

\`\`\`javascript
async function displayUsers() {
    log('Loading users...', 'info');
    const users = await fetchUsers();
    log(\`Loaded \${users.length} users\`, 'success');
    
    // Display in UI
    users.forEach(user => {
        // Create user element
    });
}
\`\`\`

### Step 4: Handle user click

\`\`\`javascript
async function handleUserClick(userId) {
    log(\`Loading posts for user \${userId}...\`, 'info');
    const posts = await fetchUserPosts(userId);
    log(\`Loaded \${posts.length} posts\`, 'success');
    
    // Display posts
}
\`\`\`

### Step 5: Initialize on page load

\`\`\`javascript
window.onload = async function() {
    await displayUsers();
};
\`\`\`

Now you can fetch data like a pro! 🌐
            `,
            tasks: [
                { id: 1, description: 'Create async function fetchUsers() that fetches from API', completed: false, regex: /async\s+function\s+fetchUsers|const\s+fetchUsers\s*=\s*async/ },
                { id: 2, description: 'Use await with fetch() to get response', completed: false, regex: /await\s+fetch\s*\(/ },
                { id: 3, description: 'Use await with response.json() to parse data', completed: false, regex: /await\s+\w+\.json\s*\(\)/ },
                { id: 4, description: 'Wrap fetch in try-catch block for error handling', completed: false, regex: /try\s*\{[\s\S]*await\s+fetch[\s\S]*\}\s*catch/ },
                { id: 5, description: 'Check if response.ok before parsing', completed: false, regex: /if\s*\(\s*!\s*\w+\.ok\s*\)|response\.ok\s*===\s*false/ },
                { id: 6, description: 'Create async function fetchUserPosts(userId) for posts', completed: false, regex: /async\s+function\s+fetchUserPosts|const\s+fetchUserPosts\s*=\s*async/ },
                { id: 7, description: 'Call fetchUsers() when page loads using window.onload', completed: false, regex: /window\.onload|addEventListener\s*\(\s*['"]load['"]/ }
            ],
            files: [
                { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Async/Await Data Fetching</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>👥 User Directory</h1>
        
        <!-- Loading indicator -->
        <div id="loading" class="loading" style="display: none;">
            <div class="spinner"></div>
            <p>Loading...</p>
        </div>
        
        <!-- Error message -->
        <div id="error" class="error" style="display: none;"></div>
        
        <!-- Users list -->
        <div id="usersList" class="users-list"></div>
        
        <!-- User details -->
        <div id="userDetails" class="user-details" style="display: none;">
            <h2 id="userName"></h2>
            <div id="userInfo"></div>
            <h3>Posts</h3>
            <div id="userPosts"></div>
            <button onclick="closeDetails()">Close</button>
        </div>
        
        <!-- Console output -->
        <div class="console">
            <h3>Console Output:</h3>
            <div id="console"></div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>` },
                { name: 'style.css', language: 'css', content: `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.loading {
    text-align: center;
    padding: 40px;
}

.spinner {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #667eea;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.error {
    background: #f8d7da;
    color: #721c24;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.users-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 20px;
}

.user-card {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.user-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.user-card h3 {
    color: #667eea;
    margin-bottom: 10px;
}

.user-card p {
    color: #666;
    font-size: 14px;
    margin: 5px 0;
}

.user-details {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
}

.user-details h2 {
    color: #667eea;
    margin-bottom: 15px;
}

.user-details h3 {
    color: #333;
    margin: 20px 0 10px;
}

#userInfo p {
    margin: 5px 0;
    color: #666;
}

#userPosts {
    max-height: 300px;
    overflow-y: auto;
}

.post-card {
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 10px;
}

.post-card h4 {
    color: #333;
    margin-bottom: 5px;
}

.post-card p {
    color: #666;
    font-size: 14px;
}

button {
    background: #667eea;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.3s;
    margin-top: 15px;
}

button:hover {
    background: #5568d3;
}

.console {
    background: #1e1e1e;
    border-radius: 8px;
    padding: 15px;
    margin-top: 20px;
}

.console h3 {
    color: #4ec9b0;
    font-size: 14px;
    margin-bottom: 10px;
}

#console {
    font-family: 'Courier New', monospace;
    font-size: 13px;
    color: #d4d4d4;
    max-height: 200px;
    overflow-y: auto;
}

.console-line {
    margin-bottom: 5px;
    padding: 3px 0;
}

.console-line.success {
    color: #4ec9b0;
}

.console-line.error {
    color: #f48771;
}

.console-line.info {
    color: #9cdcfe;
}` },
                { name: 'script.js', language: 'javascript', content: `// YOUR TASK: Build a User Directory with Async/Await REQUIREMENTS:
// 1. Create async function fetchUsers() that: - Fetches from: https://jsonplaceholder.typicode.com/users - Uses try-catch for error handling - Checks if response.ok before parsing - Returns array of users (or empty array on error)
// 2. Create async function fetchUserPosts(userId) that: - Fetches from: https://jsonplaceholder.typicode.com/posts?userId={userId} - Uses try-catch for error handling - Returns array of posts (or empty array on error)
// 3. Create async function displayUsers() that: - Shows loading indicator - Calls fetchUsers() - Hides loading indicator - Creates user cards for each user - Adds click handler to show user details
// 4. Create async function showUserDetails(userId) that: - Fetches user posts - Displays user information - Displays user's posts
// 5. Call displayUsers() when page loads TIPS: - Always use await with fetch() - Always use await with response.json() - Check response.ok before parsing - Use try-catch to handle errors - Log progress to console for debugging API ENDPOINTS: - Users: https://jsonplaceholder.typicode.com/users - Posts: https://jsonplaceholder.typicode.com/posts?userId={id} Console helper function (already provided) Helper functions for UI (already provided) START YOUR CODE HERE:

` }
            ]
        },
        {
            id: 'js-es6-6-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Async/Await Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What does the async keyword do?',
                    options: [
                        'Makes code run faster',
                        'Marks a function as asynchronous and makes it return a Promise',
                        'Waits for a Promise to resolve',
                        'Handles errors'
                    ],
                    correctIndex: 1,
                    explanation: 'The async keyword marks a function as asynchronous and automatically makes it return a Promise.'
                },
                {
                    id: 'q2',
                    question: 'Where can you use the await keyword?',
                    options: [
                        'Anywhere in your code',
                        'Only inside async functions',
                        'Only with fetch()',
                        'Only in try-catch blocks'
                    ],
                    correctIndex: 1,
                    explanation: 'The await keyword can only be used inside async functions.'
                },
                {
                    id: 'q3',
                    question: 'What is the benefit of Promise.all() with async/await?',
                    options: [
                        'Makes code easier to read',
                        'Handles errors better',
                        'Executes multiple Promises in parallel',
                        'Makes Promises resolve faster'
                    ],
                    correctIndex: 2,
                    explanation: 'Promise.all() allows multiple Promises to execute in parallel, which is faster than sequential execution.'
                },
                {
                    id: 'q4',
                    question: 'How do you handle errors with async/await?',
                    options: [
                        'Use .catch()',
                        'Use try-catch blocks',
                        'Use if-else',
                        'Errors are handled automatically'
                    ],
                    correctIndex: 1,
                    explanation: 'Use try-catch blocks to handle errors with async/await, just like synchronous code.'
                },
                {
                    id: 'q5',
                    question: 'What happens if you forget await before fetch()?',
                    options: [
                        'Code crashes',
                        'Returns undefined',
                        'Returns a Promise instead of the data',
                        'Works the same'
                    ],
                    correctIndex: 2,
                    explanation: 'Without await, fetch() returns a Promise object instead of waiting for the data to resolve.'
                }
            ]
        }
    ]
};
