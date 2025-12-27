
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressLab5 = {
    id: 'express-2-lab-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 5: MongoDB CRUD Operations',
    duration: '30 min',
    content: `
# Lab 5: MongoDB CRUD Operations

In this lab, you'll integrate MongoDB with Express using Mongoose to create a fully functional database-backed API.

## Mission Briefing

Build a User API that performs all CRUD operations with MongoDB as the persistent storage layer.

## Theory: Mongoose Models

Mongoose provides a schema-based solution. Define the structure once, use it everywhere.

## Your Mission

Create a complete MongoDB-backed REST API with validation and error handling.
    `,
    tasks: [
        {
            id: 1,
            description: 'Import mongoose package',
            completed: false,
            regex: /const\s+mongoose\s*=\s*require\(\s*['"]mongoose['"]\s*\)/,
            hint: "const mongoose = require('mongoose');"
        },
        {
            id: 2,
            description: 'Connect to MongoDB',
            completed: false,
            regex: /mongoose\.connect\(/,
            hint: "mongoose.connect('mongodb://localhost:27017/myapp');"
        },
        {
            id: 3,
            description: 'Define User schema with mongoose.Schema',
            completed: false,
            regex: /new\s+mongoose\.Schema\s*\(/,
            hint: "const userSchema = new mongoose.Schema({ ... });"
        },
        {
            id: 4,
            description: 'Create User model',
            completed: false,
            regex: /mongoose\.model\(\s*['"]User['"]/,
            hint: "const User = mongoose.model('User', userSchema);"
        },
        {
            id: 5,
            description: 'POST /users - create with User.create()',
            completed: false,
            regex: /User\.create\(/,
            hint: "const user = await User.create(req.body);"
        },
        {
            id: 6,
            description: 'GET /users - find all with User.find()',
            completed: false,
            regex: /User\.find\(\s*\)/,
            hint: "const users = await User.find();"
        },
        {
            id: 7,
            description: 'GET /users/:id - find by ID',
            completed: false,
            regex: /User\.findById\(/,
            hint: "const user = await User.findById(req.params.id);"
        },
        {
            id: 8,
            description: 'DELETE /users/:id - delete with findByIdAndDelete',
            completed: false,
            regex: /User\.findByIdAndDelete\(/,
            hint: "await User.findByIdAndDelete(req.params.id);"
        }
    ],
    files: [
        {
            name: 'server.js',
            language: 'javascript',
            content: `const express = require('express');
// TODO: Import mongoose

const app = express();
app.use(express.json());

// TODO: Connect to MongoDB (mongodb://localhost:27017/myapp)

// TODO: Define User schema with name, email, age

// TODO: Create User model

// TODO: POST /users - create user with User.create(req.body)

// TODO: GET /users - get all users with User.find()

// TODO: GET /users/:id - find by ID

// TODO: DELETE /users/:id - delete user

const PORT = 3000;
app.listen(PORT, () => console.log(\`Server on \${PORT}\`));
`
        }
    ]
};

export const expressLab6 = {
    id: 'express-2-lab-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 6: JWT Authentication System',
    duration: '35 min',
    content: `
# Lab 6: JWT Authentication System

Build a complete authentication system with password hashing and JWT tokens. Learn to protect routes and implement login/register flows.

## Mission Briefing

Create secure authentication using industry-standard tools: bcrypt for password hashing and JWT for stateless authentication.

## Theory: Authentication Flow

1. **Register**: Hash password → Save to DB
2. **Login**: Compare hash → Generate JWT → Return token
3. **Protected Route**: Verify JWT → Grant access

## Your Mission

Implement register, login, and protected routes with JWT authentication.
    `,
    tasks: [
        {
            id: 1,
            description: 'Import bcrypt package',
            completed: false,
            regex: /const\s+bcrypt\s*=\s*require\(\s*['"]bcrypt['"]\s*\)/,
            hint: "const bcrypt = require('bcrypt');"
        },
        {
            id: 2,
            description: 'Import jsonwebtoken',
            completed: false,
            regex: /const\s+jwt\s*=\s*require\(\s*['"]jsonwebtoken['"]\s*\)/,
            hint: "const jwt = require('jsonwebtoken');"
        },
        {
            id: 3,
            description: 'Hash password with bcrypt in register',
            completed: false,
            regex: /bcrypt\.hash\(/,
            hint: "const hashedPassword = await bcrypt.hash(password, 10);"
        },
        {
            id: 4,
            description: 'Create POST /register endpoint',
            completed: false,
            regex: /app\.post\(\s*['"]\/register['"]/,
            hint: "app.post('/register', async (req, res) => { ... });"
        },
        {
            id: 5,
            description: 'Compare password with bcrypt in login',
            completed: false,
            regex: /bcrypt\.compare\(/,
            hint: "const isValid = await bcrypt.compare(password, user.password);"
        },
        {
            id: 6,
            description: 'Generate JWT token with jwt.sign()',
            completed: false,
            regex: /jwt\.sign\(/,
            hint: "const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '7d' });"
        },
        {
            id: 7,
            description: 'Create auth middleware that verifies JWT',
            completed: false,
            regex: /jwt\.verify\(/,
            hint: "const decoded = jwt.verify(token, 'secret');"
        },
        {
            id: 8,
            description: 'Protect route with auth middleware',
            completed: false,
            regex: /app\.get\([^)]*authenticate/,
            hint: "app.get('/profile', authenticate, (req, res) => { ... });"
        }
    ],
    files: [
        {
            name: 'server.js',
            language: 'javascript',
            content: `const express = require('express');
const mongoose = require('mongoose');
// TODO: Import bcrypt
// TODO: Import jsonwebtoken

const app = express();
app.use(express.json());

// User Model (simplified)
const User = mongoose.model('User', new mongoose.Schema({
  email: String,
  password: String
}));

// TODO: POST /register
//   - Hash password with bcrypt.hash(password, 10)
//   - Create user with hashed password

// TODO: POST /login
//   - Find user by email
//   - Compare password with bcrypt.compare()
//   - Generate JWT with jwt.sign({ userId }, 'secret', { expiresIn: '7d' })
//   - Return token

// TODO: Create authenticate middleware
//   - Get token from req.headers.authorization
//   - Verify with jwt.verify(token, 'secret')
//   - Attach user to req.user
//   - Call next()

// TODO: Protected route GET /profile with authenticate middleware

const PORT = 3000;
app.listen(PORT);
`
        }
    ]
};
