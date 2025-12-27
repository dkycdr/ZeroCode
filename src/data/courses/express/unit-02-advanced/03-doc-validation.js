
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressDoc7 = {
  id: 'express-2-doc-3',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Deep Dive: Data Validation & Error Handling ✅',
  duration: '25 min read',
  content: `
# Deep Dive: Data Validation & Error Handling ✅

> "Never trust user input. Validate everything, sanitize aggressively, and handle errors gracefully." — The Pragmatic Programmer

## 1. Why Validation Mat ters

**User input is dangerous**:
- SQL/NoSQL injection attacks
- XSS (Cross-Site Scripting)
- Data corruption
- Application crashes

**Validation** ensures data meets your requirements **before** it reaches your database.

---

## 2. Validation with Joi

**Joi** is the most popular validation library for Node.js.

\`\`\`bash
npm install joi
\`\`\`

### 2.1 Basic Schema

\`\`\`javascript
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(), age: Joi.number().integer().min(18).max(120),
  role: Joi.string().valid('user', 'admin').default('user')
});

// Validate
const { error, value } = userSchema.validate({
  name: 'Alice',
  email: 'alice@example.com',
  age: 25
});

if (error) {
  console.log(error.details[0].message);  // "age" must be...
} else {
  console.log(value);  // Validated data
}
\`\`\`

### 2.2 Using Joi in Express

\`\`\`javascript
app.post('/api/users', async (req, res) => {
  // Define schema
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  });
  
  // Validate
  const { error, value } = schema.validate(req.body);
  
  if (error) {
    return res.status(400).json({
      error: error.details[0].message
    });
  }
  
  // Proceed with validated data
  const user = await User.create(value);
  res.status(201).json(user);
});
\`\`\`

### 2.3 Validation Middleware

\`\`\`javascript
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    
    if (error) {
      return res.status(400).json({
        error: error.details[0].message
      });
    }
    
    req.validatedData = value;  // Attach validated data
    next();
  };
};

// Usage
const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required()
});

app.post('/api/users', validateRequest(userSchema), async (req, res) => {
  const user = await User.create(req.validatedData);
  res.status(201).json(user);
});
\`\`\`

---

## 3. Sanitization

**Sanitization** removes/escapes dangerous characters.

\`\`\`bash
npm install express-validator
\`\`\`

\`\`\`javascript
const { body, validationResult } = require('express-validator');

app.post('/api/users',
  // Validation + Sanitization
  body('name').trim().isLength({ min: 3 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('age').optional().isInt({ min: 18 }),
  
  (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    // Data is now validated AND sanitized
    // Proceed...
  }
);
\`\`\`

---

## 4. Error Handling Strategies

### 4.1 The Problem

\`\`\`javascript
// ❌ BAD: Crashes server on error
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);  // Throws if invalid ID
  res.json(user);
});
\`\`\`

### 4.2 Try-Catch (Basic)

\`\`\`javascript
// ✅ GOOD: Catches errors
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

### 4.3 Async Error Wrapper

\`\`\`javascript
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Now you can skip try-catch
app.get('/users/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new Error('User not found');
  res.json(user);
}));
\`\`\`

Or use **express-async-errors**:
\`\`\`bash
npm install express-async-errors
\`\`\`

\`\`\`javascript
require('express-async-errors');  // Just require once

app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);  // Auto-caught
  res.json(user);
});
\`\`\`

---

## 5. Centralized Error Handling

### 5.1 Custom Error Class

\`\`\`javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;  // vs programming errors
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
\`\`\`

### 5.2 Error Middleware

\`\`\`javascript
const AppError = require('./utils/AppError');

// Centralized error handler (MUST be last)
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  
  // Development: detailed errors
  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  } else {
    // Production: user-friendly errors
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    } else {
      // Programming error: don't leak details
      console.error('ERROR 💥', err);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong'
      });
    }
  }
});
\`\`\`

### 5.3 Using Custom Errors

\`\`\`javascript
const AppError = require('./utils/AppError');

app.get('/users/:id', async (req, res, next) => {
  const user = await User.findById(req.params.id);
  
  if (!user) {
    return next(new AppError('User not found', 404));
  }
  
  res.json(user);
});
\`\`\`

---

## 6. Handling Different Error Types

\`\`\`javascript
// Error handler
app.use((err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  
  // Mongoose bad ObjectId
  if (err.name === 'CastError') {    error = new AppError('Resource not found', 404);
  }
  
  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new AppError(message, 400);
  }
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(e => e.message).join(', ');
    error = new AppError(message, 400);
  }
  
  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    error = new AppError('Invalid token', 401);
  }
  
  if (err.name === 'TokenExpiredError') {
    error = new AppError('Token expired', 401);
  }
  
  res.status(error.statusCode || 500).json({
    status: error.status || 'error',
    message: error.message || 'Internal server error'
  });
});
\`\`\`

---

## 7. Logging Errors

### 7.1 Using Winston

\`\`\`bash
npm install winston
\`\`\`

\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Use in error handler
app.use((err, req, res, next) => {
  logger.error(err.message, { stack: err.stack });
  // ... send response
});
\`\`\`

---

## 8. API Error Response Format

### 8.1 Consistent Structure

\`\`\`javascript
{
  "status": "error",  // or "fail"
  "message": "User not found",
  "errors": [  // For validation errors
    {
      "field": "email",
      "message": "Email is required"
    }
  ],
  "stack": "..." // Only in development
}
\`\`\`

### 8.2 Helper Function

\`\`\`javascript
const sendError = (res, statusCode, message, errors = null) => {
  const response = {
    status: statusCode >= 500 ? 'error' : 'fail',
    message
  };
  
  if (errors) response.errors = errors;
  
  if (process.env.NODE_ENV === 'development' && errors) {
    response.stack = new Error().stack;
  }
  
  res.status(statusCode).json(response);
};

// Usage
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return sendError(res, 404, 'User not found');
  res.json(user);
});
\`\`\`

---

## 9. Validation Flow Diagram

\`\`\`mermaid
flowchart TD
    Request["📨 Incoming Request"] --> Validate["✅ Validation Middleware"]
    Validate -->|Invalid| ValidationError["❌ 400 Bad Request"]
    Validate -->|Valid| Sanitize["🧹 Sanitization"]
    Sanitize --> RouteHandler["⚙️ Route Handler"]
    RouteHandler -->|Error| ErrorCheck{Error Type?}
    ErrorCheck -->|Operational| UserError["📤 User-Friendly Error"]
    ErrorCheck -->|Programming| ServerError["💥 Log & Generic Error"]
    RouteHandler -->|Success| Response["✅ 200 Success Response"]
\`\`\`

---

## 10. Best Practices

1. **Validate early**: Before database operations
2. **Sanitize inputs**: Remove dangerous characters
3. **Centralize error handling**: One error middleware
4. **Use custom error classes**: Distinguish operational vs programming errors
5. **Log errors**: Use Winston or similar
6. **Hide sensitive info**: In production, don't leak stack traces
7. **Consistent responses**: Use standard error format
8. **Return appropriate status codes**: 400 for validation, 404 for not found, 500 for server errors

---

## 11. Summary

Validation and error handling:
- **Joi** for schema validation
-**express-validator** for sanitization
- **Centralized error middleware** for consistency
- **Custom error classes** for operational errors
- **Async error wrappers** to avoid try-catch hell
- **Winston** for logging
- **Consistent error responses** for better client experience

Next: **REST API Best Practices** to build production-ready APIs.
    `
};

export const expressDoc8 = {
  id: 'express-2-doc-4',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Deep Dive: REST API Best Practices 🎯',
  duration: '25 min read',
  content: `
# Deep Dive: REST API Best Practices 🎯

> "Good API design is like good UX design - invisible when done right, painful when done wrong."

## 1. RESTful Principles

REST (Representational State Transfer) is an architectural style for designing APIs.

### 1.1 Core Principles

1. **Stateless**: Each request contains all necessary information
2. **Client-Server**: Separation of concerns
3. **Cacheable**: Responses must define if cacheable
4. **Layered**: Client doesn't know if connected directly to server
5. **Uniform Interface**: Consistent patterns

---

## 2. Resource Naming Conventions

### 2.1 URL Structure

\`\`\`
https://api.example.com/v1/resources
\`\`\`

**Rules**:
- Use **nouns**, not verbs: \\\`/users\\\` not \\\`/getUsers\\\`
- Use **plurals**: \\\`/users\\\` not \\\`/user\\\`
- Use **kebab-case**: \\\`/user-profiles\\\` not \\\`/userProfiles\\\`
- Nest resources logically: \\\`/users/123/posts/456/comments\\\`

### 2.2 Good Examples

\`\`\`
GET    /api/v1/users              # List users
GET    /api/v1/users/123          # Get user 123
POST   /api/v1/users              # Create user
PUT    /api/v1/users/123          # Update user 123
DELETE /api/v1/users/123          # Delete user 123
GET    /api/v1/users/123/posts    # Get posts by user 123
\`\`\`

### 2.3 Bad Examples

\`\`\`
❌ /api/getUsers
❌ /api/user/delete/123
❌ /api/user-posts?userId=123
❌ /api/CreateNewUserAccount
\`\`\`

---

## 3. HTTP Methods & Status Codes

### 3.1 HTTP Methods

| Method | Purpose | Idempotent | Safe |
|--------|---------|-----------|------|
| GET | Retrieve | ✅ | ✅ |
| POST | Create | ❌ | ❌ |
| PUT | Replace | ✅ | ❌ |
| PATCH | Partial update | ❌ | ❌ |
| DELETE | Remove | ✅ | ❌ |

**Idempotent**: Multiple identical requests have same effect as single request  
**Safe**: Doesn't modify resources

### 3.2 Status Codes (Complete Guide)

**2xx Success**:
- \`200 OK\`: GET, PUT, PATCH successful
- \`201 Created\`: POST successful (include Location header)
- \`204 No Content\`: DELETE successful (no body)

**4xx Client Errors**:
- \`400 Bad Request\`: Invalid syntax/validation
- \`401 Unauthorized\`: Missing/invalid authentication
- \`403 Forbidden\`: Authenticated but not authorized
- \`404 Not Found\`: Resource doesn't exist
- \`409 Conflict\`: Resource state conflict (duplicate email)
- \`422 Unprocessable Entity\`: Validation errors
- \`429 Too Many Requests\`: Rate limit exceeded

**5xx Server Errors**:
- \`500 Internal Server Error\`: Generic server error
- \`503 Service Unavailable\`: Temporary unavailability

### 3.3 Using Status Codes Correctly

\`\`\`javascript
// 200 OK - GET success
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);  // or just res.json(user)
});

// 201 Created - POST success
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

// 204 No Content - DELETE success
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();  // No body
});

// 404 Not Found
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
});

// 400 Bad Request - Validation
app.post('/users', async (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  // ...
});
\`\`\`

---

## 4. API Versioning

### 4.1 Why Version?

APIs evolve. Versioning prevents **breaking changes** from affecting existing clients.

### 4.2 Versioning Strategies

**URL Path** (Recommended):
\`\`\`
GET /api/v1/users
GET /api/v2/users
\`\`\`

**Query Parameter**:
\`\`\`
GET /api/users?version=1
\`\`\`

**Header**:
\`\`\`
GET /api/users
Header: Accept: application/vnd.myapi.v1+json
\`\`\`

### 4.3 Implementing URL Versioning

\`\`\`javascript
const express = require('express');
const app = express();

// V1 routes
const v1Router = express.Router();
v1Router.get('/users', (req, res) => {
  res.json({ version: 'v1', users: [] });
});
app.use('/api/v1', v1Router);

// V2 routes
const v2Router = express.Router();
v2Router.get('/users', (req, res) => {
  res.json({ version: 'v2', users: [], newField: 'data' });
});
app.use('/api/v2', v2Router);
\`\`\`

---

## 5. Pagination, Filtering, Sorting

### 5.1 Pagination

\`\`\`javascript
app.get('/api/users', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  
  const users = await User.find()
    .limit(limit)
    .skip(skip);
  
  const total = await User.countDocuments();
  
  res.json({
    data: users,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
      hasNext: page < Math.ceil(total / limit),
      hasPrev: page > 1
    }
  });
});

// Usage: GET /api/users?page=2&limit=20
\`\`\`

### 5.2 Filtering

\`\`\`javascript
app.get('/api/users', async (req, res) => {
  const { role, status, search } = req.query;
  
  let query = {};
  
  if (role) query.role = role;
  if (status) query.status = status;
  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { email: { $regex: search, $options: 'i' } }
    ];
  }
  
  const users = await User.find(query);
  res.json(users);
});

// Usage: GET /api/users?role=admin&search=alice
\`\`\`

### 5.3 Sorting

\`\`\`javascript
app.get('/api/users', async (req, res) => {
  const { sortBy, order } = req.query;
  
  let sort = {};
  if (sortBy) {
    sort[sortBy] = order === 'desc' ? -1 : 1;
  }
  
  const users = await User.find().sort(sort);
  res.json(users);
});

// Usage: GET /api/users?sortBy=createdAt&order=desc
\`\`\`

---

## 6. Rate Limiting

Prevent abuse by limiting requests per time window.

\`\`\`bash
npm install express-rate-limit
\`\`\`

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,  // 100 requests per window
  message: 'Too many requests, please try again later',
  standardHeaders: true,  // Return rate limit info in headers
  legacyHeaders: false
});

app.use('/api/', apiLimiter);
\`\`\`

---

## 7. CORS Configuration

\`\`\`bash
npm install cors
\`\`\`

\`\`\`javascript
const cors = require('cors');

// Simple (allow all origins)
app.use(cors());

// Custom
app.use(cors({
  origin: ['https://example.com', 'https://app.example.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,  // Allow cookies
  maxAge: 86400  // Preflight cache (24 hours)
}));
\`\`\`

---

## 8. API Documentation

### 8.1 Why Document?

- Helps consumers understand your API
- Reduces support requests
- Acts as contract

### 8.2 Swagger/OpenAPI

\`\`\`bash
npm install swagger-jsdoc swagger-ui-express
\`\`\`

\`\`\`javascript
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation'
    },
    servers: [{ url: 'http://localhost:3000' }]
  },
  apis: ['./routes/*.js']  // Path to API docs
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Document routes with JSDoc
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 */
app.get('/api/users', (req, res) => {
  // ...
});
\`\`\`

---

## 9. Testing APIs

\`\`\`bash
npm install --save-dev jest supertest
\`\`\`

\`\`\`javascript
const request = require('supertest');
const app = require('./app');

describe('GET /api/users', () => {
  it('should return all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });
  
  it('should return 404 for non-existent user', async () => {
    const res = await request(app).get('/api/users/invalid-id');
    expect(res.statusCode).toBe(404);
  });
});
\`\`\`

---

## 10. Resource Hierarchy Diagram

\`\`\`mermaid
graph TD
    Root["/api/v1"] --> Users["/users"]
    Root --> Posts["/posts"]
    Users --> UserDetail["/users/:id"]
    UserDetail --> UserPosts["/users/:id/posts"]
    UserPosts --> UserPostDetail["/users/:id/posts/:postId"]
    Posts --> PostDetail["/posts/:id"]
    PostDetail --> PostComments["/posts/:id/comments"]
\`\`\`

---

## 11. Best Practices Checklist

- ✅ Use nouns for resources, plurals preferred
- ✅ Use HTTP methods correctly (GET, POST, PUT, DELETE)
- ✅ Return appropriate status codes
- ✅ Version your API from day 1
- ✅ Implement pagination for list endpoints
- ✅ Support filtering and sorting
- ✅ Add rate limiting
- ✅ Configure CORS properly
- ✅ Document with Swagger/OpenAPI
- ✅ Test your API
- ✅ Use HTTPS in production
- ✅ implement authentication and authorization
- ✅ Log requests and errors

---

## 12. Summary

REST API Best Practices:
- **Resource-oriented URLs** with nouns and plurals
- **HTTP methods** reflect actions (GET, POST, PUT, DELETE)
- **Status codes** communicate result (200, 201, 400, 404, 500)
- **Versioning** prevents breaking changes
- **Pagination/Filtering** for scalability
- **Rate limiting** prevents abuse
- **CORS** enables cross-origin access
- **Documentation** (Swagger) helps consumers
- **Testing** ensures reliability

Your Express API is now production-ready! 🚀
    `
};
