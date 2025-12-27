
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressQuiz3 = {
    id: 'express-2-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Database & Authentication',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'How do you connect to MongoDB using Mongoose?',
            options: [
                'mongoose.connect(connectionString)',
                'new mongoose.Connection(url)',
                'mongoose.createConnection(url)',
                'mongodb.connect(url)'
            ],
            correctIndex: 0,
            explanation: 'Use mongoose.connect(connectionString) to establish a connection to MongoDB.'
        },
        {
            id: 'q2',
            question: 'What is the correct way to hash a password with bcrypt?',
            options: [
                'bcrypt.encrypt(password, saltRounds)',
                'bcrypt.hash(password, saltRounds)',
                'bcrypt.hashSync(password)',
                'bcrypt.create(password, 10)'
            ],
            correctIndex: 1,
            explanation: 'Use await bcrypt.hash(password, saltRounds) where saltRounds is typically 10-12.'
        },
        {
            id: 'q3',
            question: 'What does JWT stand for?',
            options: [
                'JavaScript Web Token',
                'JSON Web Token',
                'Java Web Template',
                'Just Web Transfer'
            ],
            correctIndex: 1,
            explanation: 'JWT stands for JSON Web Token, a compact way to securely transmit information between parties.'
        },
        {
            id: 'q4',
            question: 'How do you create a Mongoose model?',
            options: [
                'new mongoose.Model(schema)',
                'mongoose.model(name, schema)',
                'mongoose.createModel(schema)',
                'Model.create(schema)'
            ],
            correctIndex: 1,
            explanation: 'Use mongoose.model(modelName, schema) to create a model from a schema.'
        },
        {
            id: 'q5',
            question: 'What method is used to find all documents in Mongoose?',
            options: [
                'Model.getAll()',
                'Model.findAll()',
                'Model.find()',
                'Model.select()'
            ],
            correctIndex: 2,
            explanation: 'Model.find() without arguments returns all documents in the collection.'
        },
        {
            id: 'q6',
            question: 'How do you verify a JWT token?',
            options: [
                'jwt.verify(token, secret)',
                'jwt.decode(token, secret)',
                'jwt.check(token)',
                'jwt.validate(token, secret)'
            ],
            correctIndex: 0,
            explanation: 'Use jwt.verify(token, secret) to verify and decode a JWT token.'
        },
        {
            id: 'q7',
            question: 'What is the purpose of bcrypt.compare()?',
            options: [
                'To hash two passwords',
                'To compare hashed password with plain text password',
                'To encrypt passwords',
                'To generate salt'
            ],
            correctIndex: 1,
            explanation: 'bcrypt.compare(plainPassword, hashedPassword) verifies if a plain text password matches the hashed version.'
        },
        {
            id: 'q8',
            question: 'Where should you typically store a JWT secret?',
            options: [
                'In the code',
                'In environment variables',
                'In the database',
                'In localStorage'
            ],
            correctIndex: 1,
            explanation: 'JWT secrets should be stored in environment variables (.env file) and never committed to version control.'
        },
        {
            id: 'q9',
            question: 'What Mongoose method updates and returns the updated document?',
            options: [
                'findOneAndUpdate() with { new: true }',
                'updateOne()',
                'update()',
                'findAndModify()'
            ],
            correctIndex: 0,
            explanation: 'findOneAndUpdate() with { new: true } option returns the updated document instead of the original.'
        },
        {
            id: 'q10',
            question: 'What HTTP header is typically used to send JWT tokens?',
            options: [
                'X-Auth-Token',
                'Authorization: Bearer {token}',
                'X-JWT-Token',
                'Authentication: {token}'
            ],
            correctIndex: 1,
            explanation: 'The standard is to use Authorization header with Bearer scheme: "Authorization: Bearer {token}"'
        }
    ]
};

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
