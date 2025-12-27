
import { CONTENT_TYPES } from '../../../curriculumStructure';

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
