
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressDoc1 = {
    id: 'express-1-doc-1',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Introduction to Express.js 🚂',
    duration: '25 min read',
    content: `
# Deep Dive: Introduction to Express.js 🚂

> "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications." — Express.js Official

## 1. Introduction: What is Express.js?

Express.js is the **most popular web framework** for Node.js. It's used by companies like Uber, IBM, and Accenture to build everything from simple REST APIs to complex web applications.

### 1.1 Why Express.js?

Without Express, building a web server in Node.js requires writing a lot of boilerplate code. Express simplifies this dramatically.

**Raw Node.js HTTP Server**:
\`\`\`javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } else if (req.url === '/api/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ users: [] }));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000);
\`\`\`

**With Express.js**:
\`\`\`javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000);
\`\`\`

**Notice**:
- No manual URL parsing
- No manual header setting
- Cleaner routing syntax
- Automatic content-type detection

---

## 2. The Request-Response Flow

Understanding the flow of data through an Express application is crucial.

\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Express
    participant Middleware
    participant Route
    participant Database
    
    Client->>Express: HTTP Request (GET /api/users)
    Express->>Middleware: Request enters middleware chain
    Middleware->>Middleware: Logger (logs request)
    Middleware->>Middleware: Auth (validates token)
    Middleware->>Middleware: Body Parser (parses JSON)
    Middleware->>Route: Passes to route handler
    Route->>Database: Query users
    Database->>Route: Return data
    Route->>Express: Response object
    Express->>Client: HTTP Response (JSON)
\`\`\`

Every request goes through:
1. **Middleware chain** (logging, authentication, parsing)
2. **Route handler** (your business logic)
3. **Response** back to the client

---

## 3. Installing Express

Express is installed via npm (Node Package Manager).

### 3.1 Installation Steps

\`\`\`bash
# Initialize a new Node.js project
npm init -y

# Install Express
npm install express

# Install nodemon for auto-restart (dev dependency)
npm install --save-dev nodemon
\`\`\`

### 3.2 Package.json Scripts

Add this to your \`package.json\`:
\`\`\`json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
\`\`\`

Now you can run:
- \`npm start\` — Production mode
- \`npm run dev\` — Development mode (auto-restarts on file changes)

---

## 4. Anatomy of an Express Application

### 4.1 The Minimal Example

\`\`\`javascript
// 1. Import Express
const express = require('express');

// 2. Create app instance
const app = express();

// 3. Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 4. Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
\`\`\`

### 4.2 Breaking It Down

**\`const app = express()\`**:
- Creates an Express application
- \`app\` is the core object that has methods for routing, middleware, etc.

**\`app.get(path, handler)\`**:
- Defines a route for GET requests
- \`path\`: The URL pattern (\`'/'\`, \`'/about'\`, \`'/api/users'\`)
- \`handler\`: Function that runs when the route is hit

**Handler function signature**:
\`\`\`javascript
(req, res, next) => {
  // req = request object (data from client)
  // res = response object (send data back to client)
  // next = function to pass control to next middleware
}
\`\`\`

**\`app.listen(port, callback)\`**:
- Starts the server
- Listens for incoming requests on the specified port

---

## 5. HTTP Methods in Express

Express supports all standard HTTP methods.

| Method | Purpose | Express Method |
|--------|---------|----------------|
| GET | Retrieve data | \`app.get()\` |
| POST | Create new data | \`app.post()\` |
| PUT | Update (replace) data | \`app.put()\` |
| PATCH | Update (modify) data | \`app.patch()\` |
| DELETE | Delete data | \`app.delete()\` |

### 5.1 CRUD Example

\`\`\`javascript
// CREATE
app.post('/api/users', (req, res) => {
  // Create new user
  res.status(201).json({ message: 'User created' });
});

// READ
app.get('/api/users', (req, res) => {
  // Get all users
  res.json({ users: [] });
});

// UPDATE
app.put('/api/users/:id', (req, res) => {
  // Update user with ID
  res.json({ message: 'User updated' });
});

// DELETE
app.delete('/api/users/:id', (req, res) => {
  // Delete user with ID
  res.json({ message: 'User deleted' });
});
\`\`\`

---

## 6. Application Settings

Express provides configuration options via \`app.set()\`.

\`\`\`javascript
// Set port
app.set('port', process.env.PORT || 3000);

// Set view engine (for templates)
app.set('view engine', 'ejs');

// Set views directory
app.set('views', './views');

// Get a setting
const port = app.get('port');
\`\`\`

Common settings:
- \`port\`: Server port
- \`view engine\`: Template engine (Pug, EJS, Handlebars)
- \`views\`: Directory for template files
- \`trust proxy\`: Enable if behind a reverse proxy

---

## 7. The Express Ecosystem

Express is minimal by design. Functionality is added through middleware packages.

### 7.1 Essential Middleware

**Body Parsers**:
\`\`\`javascript
app.use(express.json());        // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form data
\`\`\`

**CORS (Cross-Origin Resource Sharing)**:
\`\`\`javascript
const cors = require('cors');
app.use(cors());  // Allow requests from other domains
\`\`\`

**Security**:
\`\`\`javascript
const helmet = require('helmet');
app.use(helmet());  // Set security headers
\`\`\`

**Logging**:
\`\`\`javascript
const morgan = require('morgan');
app.use(morgan('dev'));  // Log HTTP requests
\`\`\`

**Static Files**:
\`\`\`javascript
app.use(express.static('public'));  // Serve files from public/
\`\`\`

---

## 8. MVC Architecture in Express

MVC (Model-View-Controller) is a common pattern for organizing Express apps.

\`\`\`
project/
├── models/          # Data models (database schemas)
│   └── User.js
├── views/           # Templates (if using server-side rendering)
│   └── index.ejs
├── controllers/     # Business logic
│   └── userController.js
├── routes/          # Route definitions
│   └── userRoutes.js
├── middleware/      # Custom middleware
│   └── auth.js
└── server.js        # Entry point
\`\`\`

### 8.1 Example Structure

**routes/userRoutes.js**:
\`\`\`javascript
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;
\`\`\`

**controllers/userController.js**:
\`\`\`javascript
exports.getAllUsers = (req, res) => {
  // Business logic here
  res.json({ users: [] });
};

exports.createUser = (req, res) => {
  // Business logic here
  res.status(201).json({ message: 'User created' });
};
\`\`\`

**server.js**:
\`\`\`javascript
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use('/api/users', userRoutes);
app.listen(3000);
\`\`\`

---

## 9. Environment Variables

Use \`.env\` files for configuration (never commit secrets to Git!).

**Install dotenv**:
\`\`\`bash
npm install dotenv
\`\`\`

**.env**:
\`\`\`
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=your-secret-key
\`\`\`

**server.js**:
\`\`\`javascript
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DATABASE_URL;

app.listen(PORT, () => {
  console.log(\`Server on port \${PORT}\`);
});
\`\`\`

---

## 10. Common Pitfalls

### 10.1 Forgetting to Send Response

\`\`\`javascript
// ❌ BAD: Route handler doesn't send response
app.get('/test', (req, res) => {
  console.log('Test route hit');
  // Request hangs forever!
});

// ✅ GOOD: Always send a response
app.get('/test', (req, res) => {
  res.send('Test successful');
});
\`\`\`

### 10.2 Sending Multiple Responses

\`\`\`javascript
// ❌ BAD: Can't send multiple responses
app.get('/error', (req, res) => {
  res.send('First response');
  res.send('Second response');  // Error: headers already sent
});

// ✅ GOOD: Send one response
app.get('/error', (req, res) => {
  if (error) {
    return res.status(500).send('Error');  // return stops execution
  }
  res.send('Success');
});
\`\`\`

### 10.3 Not Using Middleware for JSON Parsing

\`\`\`javascript
// ❌ BAD: req.body is undefined
app.post('/api/users', (req, res) => {
  console.log(req.body);  // undefined
});

// ✅ GOOD: Use body parser middleware
app.use(express.json());
app.post('/api/users', (req, res) => {
  console.log(req.body);  // { name: "Alice", ... }
});
\`\`\`

---

## 11. Best Practices

1. **Separate concerns**: Use MVC or similar architecture
2. **Error handling**: Implement proper error middleware
3. **Security**: Use helmet, validate inputs, sanitize data
4. **Async/await**: Use async route handlers for database operations
5. **Environment variables**: Never hardcode secrets
6. **Validation**: Validate request data (use joi, express-validator)
7. **Logging**: Use morgan or winston for logging
8. **Testing**: Write tests (Jest, Mocha)

---

## 12. Summary

Express.js is the **de facto standard** for Node.js web development:
- **Minimal**: Small core, extend with middleware
- **Fast**: Built on Node.js, handles thousands of requests
- **Flexible**: Use any database, template engine, or architecture
- **Popular**: Huge ecosystem and community

Key concepts:
- **Application**: Created with \`express()\`
- **Routing**: \`app.get()\`, \`app.post()\`, etc.
- **Middleware**: Functions that process requests
- **Request/Response**: \`req\` and \`res\` objects

In the next Deep Dive, we'll explore **Routing** in detail — the foundation of any Express application.
    `
};
