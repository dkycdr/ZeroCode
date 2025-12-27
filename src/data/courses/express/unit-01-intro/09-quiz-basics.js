
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const expressQuiz1 = {
    id: 'express-1-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Express.js Basics',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'How do you create an Express application?',
            options: [
                'new Express()',
                'express.create()',
                'express()',
                'createApp()'
            ],
            correctIndex: 2,
            explanation: 'Use express() to create an Express application instance: const app = express();'
        },
        {
            id: 'q2',
            question: 'Which middleware is required to parse JSON request bodies?',
            options: [
                'express.bodyParser()',
                'express.json()',
                'app.parseJSON()',
                'bodyParser.json()'
            ],
            correctIndex: 1,
            explanation: 'express.json() is the built-in middleware for parsing JSON bodies. Use app.use(express.json()).'
        },
        {
            id: 'q3',
            question: 'What is the correct way to define a GET route?',
            options: [
                'app.route(\'/path\', \'GET\', callback)',
                'app.get(\'/path\', callback)',
                'app.addRoute(\'/path\', \'GET\', callback)',
                'app.define(\'GET\', \'/path\', callback)'
            ],
            correctIndex: 1,
            explanation: 'useapp.get(path, callback) to define GET routes. Each HTTP method has its own method: app.post(), app.put(), etc.'
        },
        {
            id: 'q4',
            question: 'What does app.listen(3000) do?',
            options: [
                'Starts the Express server on port 3000',
                'Connects to a database on port 3000',
                'Opens a websocket on port 3000',
                'Creates a new route at port 3000'
            ],
            correctIndex: 0,
            explanation: 'app.listen(port) starts the HTTP server and listens for incoming requests on the specified port.'
        },
        {
            id: 'q5',
            question: 'How do you send a JSON response?',
            options: [
                'res.send(JSON.stringify(data))',
                'res.json(data)',
                'res.sendJSON(data)',
                'res.toJSON(data)'
            ],
            correctIndex: 1,
            explanation: 'res.json(data) automatically sets the Content-Type header to application/json and stringifies the data.'
        },
        {
            id: 'q6',
            question: 'What is the purpose of the next parameter in middleware?',
            options: [
                'To send the response to the client',
                'To pass control to the next middleware',
                'To get the next request',
                'To skip error handling'
            ],
            correctIndex: 1,
            explanation: 'Calling next() passes control to the next middleware in the chain. Without it, the request hangs.'
        },
        {
            id: 'q7',
            question: 'How do you set an HTTP status code?',
            options: [
                'res.status(404).send()',
                'res.setStatus(404)',
                'res.code(404)',
                'res.httpStatus = 404'
            ],
            correctIndex: 0,
            explanation: 'Use res.status(code) to set the status code. Chain with .send() or .json() to send the response.'
        },
        {
            id: 'q8',
            question: 'What is Express.js?',
            options: [
                'A database system',
                'A web framework for Node.js',
                'A front-end library',
                'A package manager'
            ],
            correctIndex: 1,
            explanation: 'Express.js is a minimal and flexible Node.js web application framework for building web servers and APIs.'
        },
        {
            id: 'q9',
            question: 'How do you serve static files from a "public" directory?',
            options: [
                'app.static(\'public\')',
                'app.use(express.static(\'public\'))',
                'app.serveStatic(\'public\')',
                'app.files(\'public\')'
            ],
            correctIndex: 1,
            explanation: 'express.static() is the built-in middleware for serving static files. Mount it with app.use().'
        },
        {
            id: 'q10',
            question: 'What happens if you don\'t call next() in middleware?',
            options: [
                'The request is automatically completed',
                'An error is thrown',
                'The request hangs and times out',
                'The next middleware runs anyway'
            ],
            correctIndex: 2,
            explanation: 'If you don\'t call next() or send a response, the request will hang indefinitely until it times out.'
        }
    ]
};

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
