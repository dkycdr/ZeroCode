
import { CONTENT_TYPES } from '../../../curriculumStructure';

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
- Use **nouns**, not verbs: \`/users\` not \`/getUsers\`
- Use **plurals**: \`/users\` not \`/user\`
- Use **kebab-case**: \`/user-profiles\` not \`/userProfiles\`
- Nest resources logically: \`/users/123/posts/456/comments\`

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
- ✅ Implement authentication and authorization
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
