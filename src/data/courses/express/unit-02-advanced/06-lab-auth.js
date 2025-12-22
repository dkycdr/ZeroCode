
import { CONTENT_TYPES } from '../../../curriculumStructure';

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

export const expressLab7 = {
    id: 'express-2-lab-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 7: Input Validation with Joi',
    duration: '20 min',
    content: `
# Lab 7: Input Validation with Joi

Learn to validate user input with Joi to prevent malformed data from reaching your database.

## Mission Briefing

Implement robust input validation to protect your API from invalid or malicious data.

## Theory: Validation Layers

Validation should happen BEFORE database operations to catch errors early and provide clear feedback.

## Your Mission

Create validation middleware using Joi for a user registration endpoint.
    `,
    tasks: [
        {
            id: 1,
            description: 'Import Joi package',
            completed: false,
            regex: /const\s+Joi\s*=\s*require\(\s*['"]joi['"]\s*\)/,
            hint: "const Joi = require('joi');"
        },
        {
            id: 2,
            description: 'Define schema with Joi.object()',
            completed: false,
            regex: /Joi\.object\(\s*{/,
            hint: "const schema = Joi.object({ name: Joi.string(), ... });"
        },
        {
            id: 3,
            description: 'Validate name as required string',
            completed: false,
            regex: /name:\s*Joi\.string\(\).*\.required\(\)/,
            hint: "name: Joi.string().required()"
        },
        {
            id: 4,
            description: 'Validate email as email format',
            completed: false,
            regex: /email:\s*Joi\.string\(\).*\.email\(\)/,
            hint: "email: Joi.string().email().required()"
        },
        {
            id: 5,
            description: 'Validate req.body with schema.validate()',
            completed: false,
            regex: /schema\.validate\(\s*req\.body\s*\)/,
            hint: "const { error, value } = schema.validate(req.body);"
        },
        {
            id: 6,
            description: 'Return 400 error if validation fails',
            completed: false,
            regex: /res\.status\(\s*400\s*\)/,
            hint: "if (error) return res.status(400).json({ error: error.details[0].message });"
        },
        {
            id: 7,
            description: 'Create validation middleware function',
            completed: false,
            regex: /(const|function)\s+(validate|validateRequest)/,
            hint: "const validate = (schema) => (req, res, next) => { ... };"
        }
    ],
    files: [
        {
            name: 'server.js',
            language: 'javascript',
            content: `const express = require('express');
// TODO: Import Joi

const app = express();
app.use(express.json());

// TODO: Define Joi schema for user
//   - name: string, required
//   - email: string, email format, required
//   - age: number, optional

// TODO: Create POST /users endpoint
//   - Validate req.body with schema.validate()
//   - If error, return res.status(400) with error message
//   - If valid, proceed with creation

// TODO: Create validate middleware function
//   - Accepts schema as parameter
//   - Returns middleware (req, res, next)
//   - Validates req.body
//   - Calls next() if valid

const PORT = 3000;
app.listen(PORT);
`
        }
    ]
};

export const expressLab8 = {
    id: 'express-2-lab-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 8: Centralized Error Handling',
    duration: '25 min',
    content: `
# Lab 8: Centralized Error Handling

Build a professional error handling system that catches all errors and provides consistent responses.

## Mission Briefing

Implement centralized error handling to prevent crashes and provide user-friendly error messages.

## Theory: Error Flow

Errors should flow to a single error handler that formats responses consistently based on error type and environment.

## Your Mission

Create custom error classes and a centralized error middleware.
    `,
    tasks: [
        {
            id: 1,
            description: 'Create AppError class extending Error',
            completed: false,
            regex: /class\s+AppError\s+extends\s+Error/,
            hint: "class AppError extends Error { ... }"
        },
        {
            id: 2,
            description: 'Add statusCode to AppError constructor',
            completed: false,
            regex: /this\.statusCode\s*=/,
            hint: "this.statusCode = statusCode;"
        },
        {
            id: 3,
            description: 'Create error middleware with 4 parameters',
            completed: false,
            regex: /\(\s*err\s*,\s*req\s*,\s*res\s*,\s*next\s*\)/,
            hint: "app.use((err, req, res, next) => { ... });"
        },
        {
            id: 4,
            description: 'Set default statusCode if not provided',
            completed: false,
            regex: /err\.statusCode\s*[|]{2}\s*500/,
            hint: "err.statusCode = err.statusCode || 500;"
        },
        {
            id: 5,
            description: 'Use express-async-errors or async wrapper',
            completed: false,
            regex: /(require\(['"](express-async-errors|express-async-handler)['"])|asyncHandler/,
            hint: "require('express-async-errors'); // at top"
        },
        {
            id: 6,
            description: 'Throw AppError in route',
            completed: false,
            regex: /throw\s+new\s+AppError/,
            hint: "throw new AppError('Not found', 404);"
        },
        {
            id: 7,
            description: 'Error middleware must be last',
            completed: false,
            regex: /app\.use\(\s*\(\s*err/,
            hint: "Make sure error middleware is AFTER all routes"
        }
    ],
    files: [
        {
            name: 'server.js',
            language: 'javascript',
            content: `const express = require('express');
const app = express();

// TODO: Create AppError class
//   - Extends Error
//   - Constructor accepts (message, statusCode)
//   - Sets this.statusCode

// TODO: Create error middleware (err, req, res, next)
//   - Set default statusCode to 500
//   - Return JSON with status and message

// Sample route that throws error
app.get('/users/:id', async (req, res) => {
  // TODO: Throw AppError if user not found
  // throw new AppError('User not found', 404);
});

// TODO: Add error middleware (MUST BE LAST)

const PORT = 3000;
app.listen(PORT);
`
        }
    ]
};
