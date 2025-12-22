
import { CONTENT_TYPES } from '../../../curriculumStructure';

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
