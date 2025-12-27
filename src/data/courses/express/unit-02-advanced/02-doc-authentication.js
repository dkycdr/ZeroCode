
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressDoc6 = {
    id: 'express-2-doc-2',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Authentication & Authorization 🔐',
    duration: '30 min read',
    content: `
# Deep Dive: Authentication & Authorization 🔐

> "Never trust user input. Always verify who they are and what they're allowed to do." — Security First Principle

## 1. Introduction: Auth Fundamentals

**Authentication**: "Who are you?" (Verifying identity)  
**Authorization**: "What can you do?" (Verifying permissions)

Example:
- **Authentication**: Logging in with username/password
- **Authorization**: Only admins can delete users

---

## 2. Authentication Strategies

### 2.1 Session-Based Auth (Traditional)

\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Server
    participant Session
    participant DB
    
    Client->>Server: POST /login (credentials)
    Server->>DB: Verify credentials
    DB->>Server: User valid
    Server->>Session: Create session
    Session->>Server: Session ID
    Server->>Client: Set-Cookie: sessionId
    Client->>Server: GET /profile (with cookie)
    Server->>Session: Validate session
    Session->>Server: Session valid
    Server->>Client: Protected resource
\`\`\`

**Pros**: Server controls sessions, can revoke  
**Cons**: Server must store sessions, doesn't scale horizontally

### 2.2 Token-Based Auth (Modern - JWT)

\`\`\`mermaid
sequenceDiagram
    participant Client
    participant Server
    participant DB
    
    Client->>Server: POST /login (credentials)
    Server->>DB: Verify credentials
    DB->>Server: User valid
    Server->>Server: Generate JWT token
    Server->>Client: Return JWT
    Client->>Client: Store JWT (localStorage/cookie)
    Client->>Server: GET /profile (Authorization: Bearer {token})
    Server->>Server: Verify JWT signature
    Server->>Client: Protected resource
\`\`\`

**Pros**: Stateless, scalable, works across services  
**Cons**: Can't revoke until expiry (use short expiry + refresh tokens)

---

## 3. Password Hashing with bcrypt

### 3.1 Why Hash Passwords?

**NEVER store plain passwords!** If your database is compromised, attackers get all passwords.

**Hashing** is one-way encryption:
- Plain password → Hash → Stored in DB
- Login: Hash input password → Compare with stored hash

### 3.2 Using bcrypt

\`\`\`bash
npm install bcrypt
\`\`\`

\`\`\`javascript
const bcrypt = require('bcrypt');

// Hash password (during registration)
const saltRounds = 10;  // Higher = more secure but slower
const hashedPassword = await bcrypt.hash('myPassword123', saltRounds);
// Returns: $2b$10$N9qo8uL...

// Verify password (during login)
const isMatch = await bcrypt.compare('myPassword123', hashedPassword);
// Returns: true or false
\`\`\`

### 3.3 Complete Register Flow

\`\`\`javascript
const User = require('./models/User');
const bcrypt = require('bcrypt');

app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });
    
    res.status(201).json({
      message: 'User registered successfully',
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

---

## 4. JWT (JSON Web Tokens)

### 4.1 What is JWT?

A JWT is a **signed token** containing user information. It has 3 parts:

\`\`\`
header.payload.signature
eyJ0eXAiOiJKV1QiLCJhbGc.eyJ1c2VySWQiOiIxMjMiLC.SflKxwRJSMeKKF2QT4f
\`\`\`

- **Header**: Algorithm info
- **Payload**: User data (userId, role, etc.)
- **Signature**: Ensures token hasn't been tampered with

### 4.2 Installing jsonwebtoken

\`\`\`bash
npm install jsonwebtoken
\`\`\`

### 4.3 Generating JWT

\`\`\`javascript
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

// Generate token
const token = jwt.sign(
  { userId: user._id, email: user.email },  // Payload
  SECRET_KEY,                                 // Secret
  { expiresIn: '7d' }                        // Options
);

// Returns: eyJ0eXAiOiJKV1QiLCJhbGc...
\`\`\`

### 4.4 Complete Login Flow

\`\`\`javascript
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );
    
    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
\`\`\`

---

## 5. Protecting Routes with Auth Middleware

### 5.1 Creating Auth Middleware

\`\`\`javascript
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  try {
    // Get token from header
    const token = req.headers.authorization?.split(' ')[1];  // "Bearer TOKEN"
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Attach user info to request
    req.user = decoded;
    
    next();  // Proceed to route
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

module.exports = authenticate;
\`\`\`

### 5.2 Using Auth Middleware

\`\`\`javascript
const authenticate = require('./middleware/authenticate');

// Public route (no auth needed)
app.get('/api/public', (req, res) => {
  res.json({ message: 'Public data' });
});

// Protected route
app.get('/api/profile', authenticate, (req, res) => {
  // req.user is available here (from middleware)
  res.json({
    message: 'Protected data',
    user: req.user
  });
});

// Protected POST route
app.post('/api/posts', authenticate, async (req, res) => {
  const post = await Post.create({
    ...req.body,
    author: req.user.userId  // From JWT
  });
  res.status(201).json(post);
});
\`\`\`

---

## 6. Authorization (Role-Based Access Control)

### 6.1 Adding Roles to User Model

\`\`\`javascript
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  }
});
\`\`\`

### 6.2 Role-Based Middleware

\`\`\`javascript
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
    }
    
    next();
  };
};

// Usage
app.delete('/api/users/:id', 
  authenticate, 
  authorize('admin'),  // Only admins
  async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
  }
);

app.post('/api/posts',
  authenticate,
  authorize('user', 'admin', 'moderator'),  // Multiple roles
  async (req, res) => {
    // Create post
  }
);
\`\`\`

---

## 7. Refresh Tokens Pattern

### 7.1 Why Refresh Tokens?

**Problem**: Short-lived JWTs expire quickly (e.g., 15 minutes)  
**Solution**: Issue a **refresh token** (long-lived, 30 days) to get new access tokens

\`\`\`javascript
// Login returns TWO tokens
app.post('/api/login', async (req, res) => {
  // ... verify credentials ...
  
  const accessToken = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }  // Short-lived
  );
  
  const refreshToken = jwt.sign(
    { userId: user._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '30d' }  // Long-lived
  );
  
  // Store refresh token in database
  user.refreshToken = refreshToken;
  await user.save();
  
  res.json({ accessToken, refreshToken });
});

// Refresh endpoint
app.post('/api/refresh', async (req, res) => {
  const { refreshToken } = req.body;
  
  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (user.refreshToken !== refreshToken) {
      return res.status(401).json({ error: 'Invalid refresh token' });
    }
    
    // Issue new access token
    const newAccessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );
    
    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
});
\`\`\`

---

## 8. Security Best Practices

### 8.1 Password Requirements

\`\`\`javascript
const validatePassword = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);
  
  if (password.length < minLength) {
    throw new Error('Password must be at least 8 characters');
  }
  if (!hasUpperCase || !hasLowerCase || !hasNumbers) {
    throw new Error('Password must contain uppercase, lowercase, and numbers');
  }
};
\`\`\`

### 8.2 Rate Limiting

\`\`\`bash
npm install express-rate-limit
\`\`\`

\`\`\`javascript
const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5,  // 5 attempts
  message: 'Too many login attempts, please try again later'
});

app.post('/api/login', loginLimiter, async (req, res) => {
  // Login logic
});
\`\`\`

### 8.3 Helmet (Security Headers)

\`\`\`bash
npm install helmet
\`\`\`

\`\`\`javascript
const helmet = require('helmet');
app.use(helmet());  // Sets various HTTP headers for security
\`\`\`

---

## 9. Common Security Vulnerabilities

### 9.1 XSS (Cross-Site Scripting)

**Attack**: Injecting malicious scripts  
**Defense**: Sanitize inputs, set CSP headers

### 9.2 CSRF (Cross-Site Request Forgery)

**Attack**: Unauthorized actions from trusted user  
**Defense**: Use CSRF tokens, SameSite cookies

### 9.3 SQL Injection (NoSQL Injection)

**Attack**: Injecting malicious queries  
**Defense**: Use parameterized queries, validate inputs

---

## 10. Summary

Authentication in Express:
- **Hash passwords** with bcrypt (never store plain text)
- **Generate JWT** tokens for stateless auth
- **Protect routes** with auth middleware
- **Implement RBAC** for authorization
- **Use refresh tokens** for better UX
- **Follow security best practices** (rate limiting, helmet, validation)

Next: **Data Validation & Error Handling** to make your authenticated APIs bulletproof.
    `
};
