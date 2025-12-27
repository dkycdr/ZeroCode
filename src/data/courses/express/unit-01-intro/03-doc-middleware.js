
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressDoc3 = {
    id: 'express-1-doc-3',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Middleware - The Express Pipeline ⚡',
    duration: '30 min read',
    content: `
# Deep Dive: Middleware - The Express Pipeline ⚡

> "Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle." — Express.js

## 1. Introduction: What is Middleware?

Middleware is the **heart** of Express. Think of it as a conveyor belt in a factory: each station processes the product before passing it to the next station.

### 1.1 The Mental Model

Imagine a request going through security checkpoints at an airport:
1. **Ticket check** — Verify you have a boarding pass
2. **ID verification** — Check your identity
3. **Security scan** — Check your bags
4. **Gate check** — Final verification before boarding

Each checkpoint is **middleware**. If you pass, you move to the next. If you fail, you're stopped.

\`\`\`mermaid
sequenceDiagram
    participant Client
    participant MW1 as Middleware 1<br/>(Logger)
    participant MW2 as Middleware 2<br/>(Auth)
    participant MW3 as Middleware 3<br/>(Parser)
    participant Route as Route Handler
    participant Client2 as Client
    
    Client->>MW1: Request
    MW1->>MW1: Log request
    MW1->>MW2: next()
    MW2->>MW2: Check auth
    MW2->>MW3: next()
    MW3->>MW3: Parse body
    MW3->>Route: next()
    Route->>Route: Execute logic
    Route->>Client2: Response
\`\`\`

---

## 2. Middleware Signature

Every middleware function has this signature:

\`\`\`javascript
function middlewareName(req, res, next) {
  // Do something with req or res
  next();  // Pass control to next middleware
}
\`\`\`

**Parameters**:
- \`req\`: Request object (incoming data)
- \`res\`: Response object (outgoing data)
- \`next\`: Function to call the next middleware

---

## 3. Types of Middleware

### 3.1 Application-Level Middleware

Applied to all routes using \`app.use()\`:

\`\`\`javascript
// Logger middleware
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

// This runs for EVERY request
\`\`\`

### 3.2 Router-Level Middleware

Applied to specific router:

\`\`\`javascript
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-specific middleware');
  next();
});

router.get('/users', (req, res) => {
  res.send('Users');
});

app.use('/api', router);
\`\`\`

### 3.3 Built-in Middleware

Express provides built-in middleware:

\`\`\`javascript
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));
\`\`\`

### 3.4 Third-Party Middleware

Installed via npm:

\`\`\`javascript
// CORS
const cors = require('cors');
app.use(cors());

// Logging
const morgan = require('morgan');
app.use(morgan('dev'));

// Security headers
const helmet = require('helmet');
app.use(helmet());

// Cookie parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());
\`\`\`

### 3.5 Error-Handling Middleware

Has **4 parameters** (must have \`err\` first):

\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

---

## 4. The \`next()\` Function

\`next()\` is the **control flow** mechanism.

### 4.1 Passing Control

\`\`\`javascript
app.use((req, res, next) => {
  console.log('Middleware 1');
  next();  // Pass to next middleware
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

app.get('/', (req, res) => {
  res.send('Done!');
});

// Output when GET / is requested:
// Middleware 1
// Middleware 2
\`\`\`

### 4.2 Stopping the Chain

**Don't call \`next()\`** if you send a response:

\`\`\`javascript
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');  // STOP here
  }
  next();  // Continue if authorized
});
\`\`\`

### 4.3 Skipping to Error Handler

Call \`next(err)\` to jump to error middleware:

\`\`\`javascript
app.use((req, res, next) => {
  const error = new Error('Something failed');
  next(error);  // Skip to error handler
});

// Error handler catches it
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
\`\`\`

---

## 5. Middleware Execution Order

**Order matters!** Middleware runs in the order it's defined.

\`\`\`javascript
// ❌ BAD: Parser after route
app.get('/api/users', (req, res) => {
  console.log(req.body);  // undefined!
});
app.use(express.json());  // Too late

// ✅ GOOD: Parser before routes
app.use(express.json());
app.get('/api/users', (req, res) => {
  console.log(req.body);  // Works!
});
\`\`\`

**Best Practice Order**:
1. Built-in middleware (parsers, static files)
2. Third-party middleware (cors, helmet, morgan)
3. Custom middleware (logging, auth)
4. Routes
5. 404 handler
6. Error handler

---

## 6. Path-Specific Middleware

Apply middleware only to specific paths:

\`\`\`javascript
// Only runs for /admin routes
app.use('/admin', (req, res, next) => {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).send('Forbidden');
  }
  next();
});

app.get('/admin/dashboard', (req, res) => {
  res.send('Admin Dashboard');
});
\`\`\`

---

## 7. Common Middleware Patterns

### 7.1 Logger Middleware

\`\`\`javascript
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] \${req.method} \${req.url}\`);
  next();
};

app.use(logger);
\`\`\`

### 7.2 Authentication Middleware

\`\`\`javascript
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  // Verify token (pseudo-code)
  try {
    req.user = verifyToken(token);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Protect routes
app.get('/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});
\`\`\`

### 7.3 Request Timing Middleware

\`\`\`javascript
app.use((req, res, next) => {
  req.startTime = Date.now();
  
  res.on('finish', () => {
    const duration = Date.now() - req.startTime;
    console.log(\`Request took \${duration}ms\`);
  });
  
  next();
});
\`\`\`

### 7.4 CORS Middleware

\`\`\`javascript
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
\`\`\`

---

## 8. Error-Handling Middleware

### 8.1 The 4-Parameter Signature

**Must have 4 parameters** (even if you don't use all):

\`\`\`javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      status: err.status || 500
    }
  });
});
\`\`\`

### 8.2 Triggering Error Middleware

**Synchronous errors**:
\`\`\`javascript
app.get('/error', (req, res, next) => {
  throw new Error('Oops!');  // Caught by error middleware
});
\`\`\`

**Asynchronous errors**:
\`\`\`javascript
app.get('/async-error', async (req, res, next) => {
  try {
    await someAsyncOperation();
  } catch (err) {
    next(err);  // Pass to error middleware
  }
});
\`\`\`

### 8.3 Multiple Error Handlers

\`\`\`javascript
// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});
\`\`\`

---

## 9. Async Middleware

With async/await, you must catch errors manually:

### 9.1 The Problem

\`\`\`javascript
// ❌ BAD: Unhandled promise rejection
app.get('/users', async (req, res) => {
  const users = await db.getUsers();  // If this fails, app crashes
  res.json(users);
});
\`\`\`

### 9.2 The Solution: Wrapper

\`\`\`javascript
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// ✅ GOOD: Errors caught
app.get('/users', asyncHandler(async (req, res) => {
  const users = await db.getUsers();
  res.json(users);
}));
\`\`\`

Or use **express-async-errors** package:
\`\`\`javascript
require('express-async-errors');

app.get('/users', async (req, res) => {
  const users = await db.getUsers();  // Errors caught automatically
  res.json(users);
});
\`\`\`

---

## 10. Middleware Chaining

Combine multiple middleware for a route:

\`\`\`javascript
const validate = (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).json({ error: 'Email required' });
  }
  next();
};

const sanitize = (req, res, next) => {
  req.body.email = req.body.email.toLowerCase().trim();
  next();
};

const checkDuplicate = async (req, res, next) => {
  const exists = await db.userExists(req.body.email);
  if (exists) {
    return res.status(409).json({ error: 'Email already exists' });
  }
  next();
};

// Chain them together
app.post('/register', 
  validate, 
  sanitize, 
  checkDuplicate,
  (req, res) => {
    // Create user
    res.status(201).json({ message: 'User created' });
  }
);
\`\`\`

---

## 11. Common Pitfalls

### 11.1 Calling \`next()\` After Sending Response

\`\`\`javascript
// ❌ BAD: next() after res.send()
app.use((req, res, next) => {
  res.send('Hello');
  next();  // Causes "Cannot set headers after they are sent"
});

// ✅ GOOD: return after sending
app.use((req, res, next) => {
  if (condition) {
    return res.send('Hello');  // STOP here
  }
  next();
});
\`\`\`

### 11.2 Forgetting \`next()\`

\`\`\`javascript
// ❌ BAD: Request hangs forever
app.use((req, res, next) => {
  console.log('Log');
  // Missing next()!
});

// ✅ GOOD: Call next()
app.use((req, res, next) => {
  console.log('Log');
  next();
});
\`\`\`

### 11.3 Wrong Error Handler Signature

\`\`\`javascript
// ❌ BAD: Only 3 params (not recognized as error handler)
app.use((req, res, next) => {
  res.status(500).send('Error');
});

// ✅ GOOD: 4 params
app.use((err, req, res, next) => {
  res.status(500).send('Error');
});
\`\`\`

---

## 12. Best Practices

1. **Order matters**: Parsers first, routes next, error handlers last
2. **Use \`return\`**: \`return res.send()\` to stop execution
3. **Handle async errors**: Use try-catch or async wrapper
4. **Don't block**: Keep middleware fast, avoid heavy computations
5. **Modularize**: Extract reusable middleware into separate files
6. **Document**: Comment complex middleware logic

---

## 13. Summary

Middleware is the **pipeline** through which requests flow:
- **Definition**: Functions with \`(req, res, next)\` signature
- **Types**: Application, Router, Built-in, Third-party, Error
- **Control flow**: \`next()\` passes to next middleware
- **Order**: Defined order = execution order
- **Error handling**: 4-parameter signature \`(err, req, res, next)\`

Middleware gives Express its power and flexibility. Next, we'll explore the **Request and Response objects** in detail.
    `
};
