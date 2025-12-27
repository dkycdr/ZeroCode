
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressDoc2 = {
    id: 'express-1-doc-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Routing & Route Parameters 🛣️',
    duration: '30 min read',
    content: `
# Deep Dive: Routing & Route Parameters 🛣️

> "Routing refers to how an application's endpoints (URIs) respond to client requests." — Express.js Documentation

## 1. Introduction: What is Routing?

Routing is the mechanism that determines **what code runs** when a specific URL is requested. It's the backbone of every Express application.

Think of routing like a receptionist:
- Client asks: "I want to go to \`/api/users\`"
- Router says: "Okay, I'll send you to the user handler function"

\`\`\`mermaid
graph LR
    Request["GET /api/users"] --> Router{Router}
    Router -->|Match| Handler["Route Handler<br/>getUsersFunction"]
    Router -->|No Match| NotFound["404 Handler"]
    Handler --> Response["Send JSON Response"]
    NotFound --> ErrorResponse["Send 404 Error"]
\`\`\`

---

## 2. Basic Routing

### 2.1 Route Definition Syntax

\`\`\`javascript
app.METHOD(PATH, HANDLER)
\`\`\`

- **METHOD**: HTTP method (\`get\`, \`post\`, \`put\`, \`delete\`)
- **PATH**: URL path (\`'/'\`, \`'/about'\`, \`'/api/users'\`)
- **HANDLER**: Callback function \`(req, res) => { ... }\`

### 2.2 Examples

\`\`\`javascript
// Home page
app.get('/', (req, res) => {
  res.send('Welcome!');
});

// About page
app.get('/about', (req, res) => {
  res.send('About Us');
});

// API endpoint
app.get('/api/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob'] });
});

// POST request
app.post('/api/users', (req, res) => {
  res.status(201).json({ message: 'User created' });
});
\`\`\`

---

## 3. Route Parameters

Route parameters are **dynamic segments** in the URL path, useful for accessing resources by ID.

### 3.1 Named Parameters

Use \`:paramName\` syntax:

\`\`\`javascript
// GET /api/users/123
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;  // "123"
  res.json({ id: userId, name: 'Alice' });
});

// GET /posts/hello-world/comments/5
app.get('/posts/:postSlug/comments/:commentId', (req, res) => {
  console.log(req.params.postSlug);    // "hello-world"
  console.log(req.params.commentId);   // "5"
  res.send(\`Post: \${req.params.postSlug}, Comment: \${req.params.commentId}\`);
});
\`\`\`

### 3.2 Optional Parameters

Use \`?\` for optional segments:

\`\`\`javascript
// Matches /users AND /users/123
app.get('/users/:id?', (req, res) => {
  if (req.params.id) {
    res.send(\`User ID: \${req.params.id}\`);
  } else {
    res.send('All users');
  }
});
\`\`\`

### 3.3 Regex Constraints

Use regex to constrain parameter values:

\`\`\`javascript
// Only match numeric IDs
app.get('/users/:id(\\\\d+)', (req, res) => {
  res.send(\`User \${req.params.id}\`);
});

// /users/123 ✅ matches
// /users/abc ❌ doesn't match (404)
\`\`\`

---

## 4. Query Strings

Query strings are key-value pairs after \`?\` in the URL.

### 4.1 Accessing Query Parameters

\`\`\`javascript
// GET /search?q=express&limit=10&sort=asc
app.get('/search', (req, res) => {
  console.log(req.query.q);      // "express"
  console.log(req.query.limit);  // "10"
  console.log(req.query.sort);   // "asc"
  
  res.json({
    query: req.query.q,
    limit: parseInt(req.query.limit) || 20,
    sort: req.query.sort || 'desc'
  });
});
\`\`\`

### 4.2 Query vs Params

| Feature | Route Params | Query Strings |
|---------|--------------|---------------|
| **Syntax** | \`/users/:id\` | \`/users?id=123\` |
| **Purpose** | Identify resource | Filter/configure |
| **Required** | Usually yes | Usually optional |
| **Example** | \`/users/123\` | \`/users?role=admin&active=true\` |
| **Access** | \`req.params.id\` | \`req.query.role\` |

**Best Practice**:
- Use **params** for resource identification (\`/users/123\`)
- Use **query** for filtering/pagination (\`/users?page=2&limit=10\`)

---

## 5. Multiple Route Handlers

You can chain multiple handler functions.

### 5.1 Sequential Handlers

\`\`\`javascript
const checkAuth = (req, res, next) => {
  if (req.headers.authorization) {
    next();  // Proceed to next handler
  } else {
    res.status(401).send('Unauthorized');
  }
};

const getUser = (req, res) => {
  res.json({ user: 'Alice' });
};

// Chain handlers
app.get('/profile', checkAuth, getUser);
\`\`\`

### 5.2 Array of Handlers

\`\`\`javascript
const handlers = [validateInput, sanitizeInput, saveToDatabase];

app.post('/api/users', handlers);
\`\`\`

---

## 6. Router-Level Routing

For better organization, use \`express.Router()\` to create modular route handlers.

### 6.1 Creating a Router

**routes/users.js**:
\`\`\`javascript
const express = require('express');
const router = express.Router();

// GET /api/users
router.get('/', (req, res) => {
  res.json({ users: [] });
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
  res.json({ id: req.params.id });
});

// POST /api/users
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Created' });
});

module.exports = router;
\`\`\`

**server.js**:
\`\`\`javascript
const express = require('express');
const userRoutes = require('./routes/users');

const app = express();

// Mount router at /api/users
app.use('/api/users', userRoutes);

app.listen(3000);
\`\`\`

Now:
- \`GET /api/users\` hits \`router.get('/')\`
- \`GET /api/users/123\` hits \`router.get('/:id')\`

### 6.2 Benefits of Router

- **Modularity**: Each resource has its own file
- **Maintainability**: Easier to find and update routes
- **Reusability**: Can mount the same router multiple times
- **Testability**: Easier to test in isolation

---

## 7. Route Pattern Matching

Express supports various pattern matching techniques.

### 7.1 Wildcard Routes

\`\`\`javascript
// Matches /about, /about/team, /about/history
app.get('/about*', (req, res) => {
  res.send('About section');
});
\`\`\`

### 7.2 Regex Paths

\`\`\`javascript
// Matches /fly, /flee, /fliee, etc. (one or more 'e')
app.get(/^\/fl(y|ee)$/, (req, res) => {
  res.send('Regex matched!');
});
\`\`\`

### 7.3 Custom Matching

\`\`\`javascript
// Match files with extensions
app.get(/.*\\.json$/, (req, res) => {
  res.send('JSON file requested');
});
\`\`\`

---

## 8. 404 Handling

Catch-all route for undefined paths must be **last**.

\`\`\`javascript
// Define all your routes first
app.get('/', (req, res) => { res.send('Home'); });
app.get('/about', (req, res) => { res.send('About'); });

// 404 handler (MUST be last)
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});
\`\`\`

**Why last?** Express matches routes in the order they're defined. The first match wins.

---

## 9. HTTP Methods: Full CRUD

### 9.1 RESTful API Pattern

\`\`\`javascript
const users = []; // In-memory storage

// CREATE - POST /api/users
app.post('/api/users', (req, res) => {
  const user = { id: Date.now(), ...req.body };
  users.push(user);
  res.status(201).json(user);
});

// READ (all) - GET /api/users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// READ (one) - GET /api/users/:id
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

// UPDATE - PUT /api/users/:id
app.put('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

// DELETE - DELETE /api/users/:id
app.delete('/api/users/:id', (req, res) => {
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });
  users.splice(index, 1);
  res.status(204).send();
});
\`\`\`

### 9.2 RESTful Conventions

| Action | HTTP Method | URL | Response |
|--------|-------------|-----|----------|
| List all | GET | \`/api/users\` | 200, array |
| Get one | GET | \`/api/users/:id\` | 200, object |
| Create | POST | \`/api/users\` | 201, created object |
| Update | PUT/PATCH | \`/api/users/:id\` | 200, updated object |
| Delete | DELETE | \`/api/users/:id\` | 204, no content |

---

## 10. Route Organization Best Practices

### 10.1 File Structure

\`\`\`
project/
├── routes/
│   ├── index.js       # Main router
│   ├── users.js       # User routes
│   ├── posts.js       # Post routes
│   └── auth.js        # Auth routes
└── server.js
\`\`\`

### 10.2 Index Router Pattern

**routes/index.js**:
\`\`\`javascript
const express = require('express');
const router = express.Router();

const userRoutes = require('./users');
const postRoutes = require('./posts');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
\`\`\`

**server.js**:
\`\`\`javascript
const routes = require('./routes');
app.use('/api', routes);
\`\`\`

Now all routes are prefixed with \`/api\`.

---

## 11. Common Pitfalls

### 11.1 Route Order Matters

\`\`\`javascript
// ❌ BAD: Specific route after catch-all
app.get('/users/*', (req, res) => res.send('Catch all'));
app.get('/users/admin', (req, res) => res.send('Admin'));  // Never reached!

// ✅ GOOD: Specific routes first
app.get('/users/admin', (req, res) => res.send('Admin'));
app.get('/users/*', (req, res) => res.send('Catch all'));
\`\`\`

### 11.2 Forgetting to Parse Body

\`\`\`javascript
// ❌ BAD: req.body is undefined
app.post('/users', (req, res) => {
  console.log(req.body);  // undefined
});

// ✅ GOOD: Use body parser
app.use(express.json());
app.post('/users', (req, res) => {
  console.log(req.body);  // { name: "Alice" }
});
\`\`\`

### 11.3 Not Handling Missing Resources

\`\`\`javascript
// ❌ BAD: No check for existence
app.get('/users/:id', (req, res) => {
  const user = db.find(req.params.id);
  res.json(user);  // Returns null if not found
});

// ✅ GOOD: Check and return 404
app.get('/users/:id', (req, res) => {
  const user = db.find(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});
\`\`\`

---

## 12. Summary

Routing is the **foundation** of Express applications:
- **Basic routing**: \`app.get(path, handler)\`
- **Route params**: \`/users/:id\` → \`req.params.id\`
- **Query strings**: \`/search?q=term\` → \`req.query.q\`
- **Router module**: \`express.Router()\` for organization
- **HTTP methods**: GET, POST, PUT, DELETE for CRUD
- **404 handling**: Catch-all route at the end

Next, we'll dive into **Middleware** — the secret sauce that makes Express so powerful.
    `
};
