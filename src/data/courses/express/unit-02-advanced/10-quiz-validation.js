
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressQuiz4 = {
    id: 'express-2-quiz-2',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Validation & Best Practices',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is the purpose of input validation?',
            options: [
                'To make code run faster',
                'To prevent invalid or malicious data from entering the system',
                'To format data',
                'To encrypt data'
            ],
            correctIndex: 1,
            explanation: 'Input validation ensures that data meets requirements and prevents injection attacks and data corruption.'
        },
        {
            id: 'q2',
            question: 'How do you define a required field in Joi?',
            options: [
                'Joi.string().mandatory()',
                'Joi.string().required()',
                'Joi.string().notNull()',
                'Joi.string().mustHave()'
            ],
            correctIndex: 1,
            explanation: 'Use .required() method to make a field mandatory in Joi: Joi.string().required()'
        },
        {
            id: 'q3',
            question: 'What is the correct signature for Express error-handling middleware?',
            options: [
                '(req, res, next)',
                '(err, req, res)',
                '(err, req, res, next)',
                '(error, next)'
            ],
            correctIndex: 2,
            explanation: 'Error middleware MUST have 4 parameters: (err, req, res, next). This is how Express identifies it.'
        },
        {
            id: 'q4',
            question: 'What HTTP status code indicates validation error?',
            options: [
                '400 Bad Request',
                '401 Unauthorized',
                '404 Not Found',
                '500 Internal Server Error'
            ],
            correctIndex: 0,
            explanation: '400 Bad Request indicates client-side error, typically used for validation failures.'
        },
        {
            id: 'q5',
            question: 'In RESTful APIs, resource names should be:',
            options: [
                'Verbs (getUsers, createUser)',
                'Nouns, preferably plural (users, posts)',
                'CamelCase (userAccounts)',
                'Actions (fetchAllUsers)'
            ],
            correctIndex: 1,
            explanation: 'REST uses nouns (resources) in URLs, with HTTP methods indicating the action. Use plurals: /api/users'
        },
        {
            id: 'q6',
            question: 'What status code should POST requests return on successful creation?',
            options: [
                '200 OK',
                '201 Created',
                '204 No Content',
                '202 Accepted'
            ],
            correctIndex: 1,
            explanation: '201 Created indicates a resource was successfully created. Include Location header pointing to new resource.'
        },
        {
            id: 'q7',
            question: 'Why should API endpoints be versioned?',
            options: [
                'To make URLs longer',
                'To prevent breaking changes from affecting existing clients',
                'For better SEO',
                'To track analytics'
            ],
            correctIndex: 1,
            explanation: 'Versioning (like /api/v1/users) allows you to evolve your API without breaking existing client applications.'
        },
        {
            id: 'q8',
            question: 'What is the purpose of rate limiting?',
            options: [
                'To slow down the server',
                'To prevent abuse by limiting requests per time window',
                'To cache responses',
                'To validate inputs'
            ],
            correctIndex: 1,
            explanation: 'Rate limiting prevents abuse, DoS attacks, and ensures fair usage by limiting requests per user/IP per time period.'
        },
        {
            id: 'q9',
            question: 'Where should error middleware be placed?',
            options: [
                'At the beginning of middleware chain',
                'Before route definitions',
                'After all routes and middleware',
                'Anywhere in the chain'
            ],
            correctIndex: 2,
            explanation: 'Error middleware must be defined AFTER all routes and regular middleware to catch errors from them.'
        },
        {
            id: 'q10',
            question: 'What does CORS stand for?',
            options: [
                'Cross-Origin Request System',
                'Cross-Origin Resource Sharing',
                'Client-Origin Resource Security',
                'Cross-Origin Response Sharing'
            ],
            correctIndex: 1,
            explanation: 'CORS (Cross-Origin Resource Sharing) is a mechanism that allows resources to be requested from another domain.'
        }
    ]
};
