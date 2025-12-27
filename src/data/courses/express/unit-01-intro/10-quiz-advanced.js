
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressQuiz2 = {
    id: 'express-1-quiz-2',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Routing & Middleware Mastery',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'How do you access a route parameter from /users/:id?',
            options: [
                'req.params.id',
                'req.id',
                'req.route.id',
                'req.param(\'id\')'
            ],
            correctIndex: 0,
            explanation: 'Route parameters are accessed via req.params object. For /users/:id, use req.params.id.'
        },
        {
            id: 'q2',
            question: 'How do you access query string parameters from /search?q=express&limit=10?',
            options: [
                'req.params.q and req.params.limit',
                'req.query.q and req.query.limit',
                'req.search.q and req.search.limit',
                'req.queryString.q and req.queryString.limit'
            ],
            correctIndex: 1,
            explanation: 'Query string parameters are accessed via req.query object.'
        },
        {
            id: 'q3',
            question: 'What is the signature of error-handling middleware?',
            options: [
                '(req, res, next)',
                '(err, req, res)',
                '(err, req, res, next)',
                '(error, next)'
            ],
            correctIndex: 2,
            explanation: 'Error-handling middleware must have EXACTLY 4 parameters: (err, req, res, next). This is how Express identifies it.'
        },
        {
            id: 'q4',
            question: 'Where should the 404 handler be placed?',
            options: [
                'At the beginning, before all routes',
                'After all routes, but before error handler',
                'In the error handler',
                'Anywhere in the middleware chain'
            ],
            correctIndex: 1,
            explanation: '404 handlers should be after all routes (to catch unmatched routes) but before the error handler.'
        },
        {
            id: 'q5',
            question: 'What does express.Router() do?',
            options: [
                'Creates a new Express app',
                'Creates a modular route handler',
                'Starts the router service',
                'Redirects requests'
            ],
            correctIndex: 1,
            explanation: 'express.Router() creates a modular, mountable route handler. It\'s like a mini-application for organizing routes.'
        },
        {
            id: 'q6',
            question: 'How do you access the request body in a POST request?',
            options: [
                'req.body (after using express.json())',
                'req.data',
                'req.post',
                'req.payload'
            ],
            correctIndex: 0,
            explanation: 'req.body contains parsed request body data, but you must use express.json() or express.urlencoded() middleware first.'
        },
        {
            id: 'q7',
            question: 'What is middleware in Express?',
            options: [
                'A database layer',
                'Functions that process requests before they reach routes',
                'A routing system',
                'A template engine'
            ],
            correctIndex: 1,
            explanation: 'Middleware are functions with access to req, res, and next that process requests in a pipeline.'
        },
        {
            id: 'q8',
            question: 'How do you skip to error-handling middleware?',
            options: [
                'throw new Error()',
                'next(error)',
                'res.error(error)',
                'app.error(error)'
            ],
            correctIndex: 1,
            explanation: 'Call next(error) with an error object to skip regular middleware and jump to error handlers.'
        },
        {
            id: 'q9',
            question: 'What does res.redirect(\'/home\') do?',
            options: [
                'Sends a JSON response',
                'Redirects the client to /home',
                'Includes /home content in response',
                'Creates a new route at /home'
            ],
            correctIndex: 1,
            explanation: 'res.redirect() sends a 302 (or custom) redirect response, causing the browser to navigate to the specified URL.'
        },
        {
            id: 'q10',
            question: 'What is the difference between app.use() and app.get()?',
            options: [
                'No difference, they are identical',
                'app.use() is for middleware, app.get() is for GET routes',
                'app.use() is faster',
                'app.get() works with all HTTP methods'
            ],
            correctIndex: 1,
            explanation: 'app.use() applies middleware to all methods and paths (unless specified). app.get() only handles GET requests for a specific path.'
        }
    ]
};
