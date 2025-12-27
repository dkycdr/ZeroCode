
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressDoc4 = {
    id: 'express-1-doc-4',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Request & Response Objects 📦',
    duration: '25 min read',
    content: `
# Deep Dive: Request & Response Objects 📦

> "The req object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on." — Express.js

## 1. Introduction: The req and res Objects

Every route handler receives two crucial objects:
- **\`req\`** (request): Data **from** the client
- **\`res\`** (response): Data **to** the client

\`\`\`javascript
app.get('/example', (req, res) => {
  // req = what client sent
  // res = what we send back
});
\`\`\`

\`\`\`mermaid
graph LR
    Client["🌐 Client<br/>(Browser/App)"] -->|HTTP Request| Req["📥 req object<br/>params, query, body, headers"]
    Req --> Handler["⚙️ Route Handler<br/>Your code"]
    Handler --> Res["📤 res object<br/>send, json, status, redirect"]
    Res -->|HTTP Response| Client2["🌐 Client"]
\`\`\`

---

## 2. The Request Object (\`req\`)

### 2.1 req.params — URL Parameters

Extract values from the URL path:

\`\`\`javascript
// GET /users/123/posts/45
app.get('/users/:userId/posts/:postId', (req, res) => {
  console.log(req.params.userId);   // "123"
  console.log(req.params.postId);   // "45"
  res.send(\`User \${req.params.userId}, Post \${req.params.postId}\`);
});
\`\`\`

### 2.2 req.query — Query Strings

Extract values from \`?key=value\` pairs:

\`\`\`javascript
// GET /search?q=express&limit=10&page=2
app.get('/search', (req, res) => {
  console.log(req.query.q);        // "express"
  console.log(req.query.limit);    // "10"
  console.log(req.query.page);     // "2"
  
  const results = searchDB(req.query.q, {
    limit: parseInt(req.query.limit) || 20,
    page: parseInt(req.query.page) || 1
  });
  res.json(results);
});
\`\`\`

### 2.3 req.body — Request Body

Access POST/PUT data (requires body parser middleware):

\`\`\`javascript
app.use(express.json());  // REQUIRED for JSON parsing

app.post('/users', (req, res) => {
  console.log(req.body.name);    // From JSON body
  console.log(req.body.email);   // From JSON body
  
  const user = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email
  };
  
  res.status(201).json(user);
});
\`\`\`

**Example client request**:
\`\`\`javascript
fetch('/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Alice', email: 'alice@example.com' })
});
\`\`\`

### 2.4 req.headers — HTTP Headers

Access request headers:

\`\`\`javascript
app.get('/profile', (req, res) => {
  console.log(req.headers.authorization);  // Token
  console.log(req.headers['user-agent']); // Browser info
  console.log(req.headers.accept);        // Accepted formats
  
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  res.send('Welcome!');
});
\`\`\`

### 2.5 Other Useful req Properties

\`\`\`javascript
req.method          // "GET", "POST", etc.
req.url             // "/api/users?page=1"
req.path            // "/api/users"
req.protocol        // "http" or "https"
req.hostname        // "example.com"
req.ip              // Client IP address
req.cookies         // Cookies (requires cookie-parser)
req.fresh           // Boolean for caching
req.stale           // Boolean (opposite of fresh)
req.xhr             // Boolean (is AJAX request?)
\`\`\`

---

## 3. The Response Object (\`res\`)

### 3.1 res.send() — Send Response

Sends various types of responses:

\`\`\`javascript
// String
res.send('Hello World');

// HTML
res.send('<h1>Welcome</h1>');

// Object (auto-converts to JSON)
res.send({ message: 'Success' });

// Array
res.send([1, 2, 3]);

// Buffer
res.send(Buffer.from('Binary data'));
\`\`\`

### 3.2 res.json() — Send JSON

Explicitly send JSON response:

\`\`\`javascript
res.json({ 
  success: true,
  data: { id: 1, name: 'Alice' },
  message: 'User fetched successfully'
});
\`\`\`

**Difference from \`res.send()\`**:
- \`res.json()\` always sets \`Content-Type: application/json\`
- \`res.send()\` infers content type

### 3.3 res.status() — Set Status Code

Chain with \`send()\` or \`json()\`:

\`\`\`javascript
res.status(404).send('Not Found');
res.status(201).json({ message: 'Created' });
res.status(500).json({ error: 'Server Error' });
\`\`\`

**Common status codes**:
- \`200\`: OK (default)
- \`201\`: Created
- \`204\`: No Content
- \`400\`: Bad Request
- \`401\`: Unauthorized
- \`403\`: Forbidden
- \`404\`: Not Found
- \`500\`: Internal Server Error

### 3.4 res.redirect() — Redirect

Redirect to another URL:

\`\`\`javascript
// Redirect to home page
res.redirect('/');

// Redirect to external site
res.redirect('https://google.com');

// Redirect with specific status code
res.redirect(301, '/new-url');  // Permanent redirect
\`\`\`

### 3.5 res.sendFile() — Send File

Send a file as response:

\`\`\`javascript
const path = require('path');

app.get('/download', (req, res) => {
  const file = path.join(__dirname, 'files', 'document.pdf');
  res.sendFile(file);
});
\`\`\`

### 3.6 res.download() — Force Download

Prompt client to download file:

\`\`\`javascript
app.get('/download-pdf', (req, res) => {
  const file = path.join(__dirname, 'report.pdf');
  res.download(file, 'Monthly-Report.pdf');  // Custom filename
});
\`\`\`

### 3.7 res.set() / res.header() — Set Headers

Set custom response headers:

\`\`\`javascript
res.set('Content-Type', 'text/plain');
res.set('X-Custom-Header', 'MyValue');

// Or use object
res.set({
  'Content-Type': 'application/json',
  'X-Powered-By': 'Express'
});

res.send('Headers set!');
\`\`\`

### 3.8 res.cookie() — Set Cookies

Set cookies (requires cookie-parser):

\`\`\`javascript
// Set cookie
res.cookie('username', 'alice', { 
  maxAge: 900000,   // 15 minutes
  httpOnly: true,   // Not accessible via JavaScript
  secure: true      // HTTPS only
});

// Clear cookie
res.clearCookie('username');

res.send('Cookie set');
\`\`\`

---

## 4. Content Negotiation

Respond based on what client accepts:

\`\`\`javascript
app.get('/data', (req, res) => {
  res.format({
    'text/plain': () => {
      res.send('Plain text response');
    },
    'text/html': () => {
      res.send('<p>HTML response</p>');
    },
    'application/json': () => {
      res.json({ message: 'JSON response' });
    },
    default: () => {
      res.status(406).send('Not Acceptable');
    }
  });
});
\`\`\`

---

## 5. Request Validation

Always validate and sanitize input:

\`\`\`javascript
app.post('/users', (req, res) => {
  // Validation
  if (!req.body.email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  
  if (!req.body.email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  if (req.body.age && req.body.age < 18) {
    return res.status(400).json({ error: 'Must be 18 or older' });
  }
  
  // Sanitization
  const user = {
    email: req.body.email.toLowerCase().trim(),
    name: req.body.name.trim(),
    age: parseInt(req.body.age)
  };
  
  res.status(201).json(user);
});
\`\`\`

**Better: Use validation library**:
\`\`\`javascript
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18)
});

app.post('/users', (req, res) => {
  const { error, value } = userSchema.validate(req.body);
  
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  
  res.status(201).json(value);
});
\`\`\`

---

## 6. File Uploads

Handle file uploads with \`multer\`:

\`\`\`javascript
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file);  // File info
  console.log(req.body);  // Other form fields
  
  res.json({
    message: 'File uploaded',
    filename: req.file.filename,
    size: req.file.size
  });
});
\`\`\`

---

## 7. CORS Headers

Enable Cross-Origin Resource Sharing:

\`\`\`javascript
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);  // Preflight request
  }
  next();
});
\`\`\`

**Or use \`cors\` package**:
\`\`\`javascript
const cors = require('cors');
app.use(cors());
\`\`\`

---

## 8. Common Patterns

### 8.1 Pagination

\`\`\`javascript
app.get('/api/users', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  
  const users = db.getUsers(skip, limit);
  const total = db.countUsers();
  
  res.json({
    data: users,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
});
\`\`\`

### 8.2 Search & Filtering

\`\`\`javascript
app.get('/api/products', (req, res) => {
  let query = {};
  
  if (req.query.category) {
    query.category = req.query.category;
  }
  
  if (req.query.minPrice) {
    query.price = { $gte: parseFloat(req.query.minPrice) };
  }
  
  if (req.query.search) {
    query.name = { $regex: req.query.search, $options: 'i' };
  }
  
  const products = db.find(query);
  res.json(products);
});
\`\`\`

---

## 9. Common Pitfalls

### 9.1 Not Checking req.body Exists

\`\`\`javascript
// ❌ BAD: Might throw error
app.post('/users', (req, res) => {
  const user = req.body.name.toUpperCase();  // Error if no body
});

// ✅ GOOD: Check first
app.post('/users', (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).json({ error: 'Name required' });
  }
  const user = req.body.name.toUpperCase();
});
\`\`\`

### 9.2 Forgetting to Convert Query Params

\`\`\`javascript
// ❌ BAD: Query params are always strings
const limit = req.query.limit;  // "10" (string)

// ✅ GOOD: Convert to number
const limit = parseInt(req.query.limit) || 20;
\`\`\`

### 9.3 Sending Response Twice

\`\`\`javascript
// ❌ BAD: Multiple responses
if (error) {
  res.status(500).send('Error');
}
res.send('Success');  // Error: headers already sent

// ✅ GOOD: Use return
if (error) {
  return res.status(500).send('Error');
}
res.send('Success');
\`\`\`

---

## 10. Summary

The **req** and **res** objects are your interface to HTTP:

**Request (\`req\`)**:
- \`req.params\`: URL parameters
- \`req.query\`: Query strings
- \`req.body\`: POST/PUT data
- \`req.headers\`: HTTP headers

**Response (\`res\`)**:
- \`res.send()\`: Send any response
- \`res.json()\`: Send JSON
- \`res.status()\`: Set status code
- \`res.redirect()\`: Redirect

Together, they give you complete control over HTTP communication in Express.
    `
};
