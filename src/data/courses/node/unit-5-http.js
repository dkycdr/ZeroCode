import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Http = {
    id: 'node-unit-5',
    title: 'Unit 5: Raw HTTP Servers',
    description: 'Before Express, there was http. Learn how to build a server from scratch to understand requests, responses, headers, and status codes.',
    items: [
        // PART 1: THEORETICAL DEEP DIVES
        {
            id: 'node-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: anatomy of an HTTP Request 📨',
            duration: '15 min read',
            content: `
# Deep Dive: Anatomy of an HTTP Request 📨

## 1. The Conversation
The web is just computers sending text messages to each other.
**Client (Browser)**: "GET me /index.html"
**Server**: "200 OK. Here is the file."

## 2. Request Structure
1.  **Method**: GET, POST, PUT, DELETE.
2.  **URL**: \`/api/users?id=1\`.
3.  **Headers**: Metadata. \`Content-Type: application/json\`, \`Authorization: Bearer...\`.
4.  **Body**: The payload (data). Only for POST/PUT/PATCH.

## 3. Response Structure
1.  **Status Code**:
    *   2xx: Success (200 OK, 201 Created).
    *   3xx: Redirect (301 Moved).
    *   4xx: Client Error (400 Bad Request, 404 Not Found, 401 Unauthorized).
    *   5xx: Server Error (500 Internal Server Error).
2.  **Headers**: \`Set-Cookie\`, \`Cache-Control\`.
3.  **Body**: The HTML, JSON, or Image data.
            `
        },
        {
            id: 'node-5-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The http Module 🧱',
            duration: '20 min read',
            content: `
# Deep Dive: The http Module 🧱

## 1. createServer
Node.js has a built-in module to listen for TCP connections and parse them as HTTP.
\`\`\`javascript
const server = http.createServer((req, res) => {
  // Runs on EVERY request
});
\`\`\`

## 2. Streams Again!
The \`req\` object is a **ReadStream**. You read the body in chunks.
The \`res\` object is a **WriteStream**. You write the Body in chunks.

## 3. Why learn this?
Frameworks like Express, NestJS, and Fastify are all built on top of this.
Understanding \`req\` and \`res\` here means you understand them everywhere.
            `
        },
        {
            id: 'node-5-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Headers & CORS 🚧',
            duration: '15 min read',
            content: `
# Deep Dive: Headers & CORS 🚧

## 1. CORS (Cross-Origin Resource Sharing)
By default, browsers BLOCK fetch requests from Site A to Site B.
To allow it, Site B must send headers:
\`Access-Control-Allow-Origin: *\`

## 2. Content-Type
Crucial. It tells the client how to parse the bytes.
*   \`text/html\`: Browser renders page.
*   \`application/json\`: Browser/Client parses object.
*   \`image/png\`: Browser paints image.

## 3. Finishing
You MUST call \`res.end()\`. If you just write data, the browser spins forever waiting for more.
            `
        },
        {
            id: 'node-5-4',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The URL Module 🔗',
            duration: '10 min read',
            content: `
# Deep Dive: The URL Module 🔗

## 1. Old Way vs New Way
Old: \`url.parse()\` (Deprecated).
New: \`new URL(string)\` (WHATWG Standard).

## 2. Query Params
Parsing \`?search=cat&page=2\`:
\`\`\`javascript
const myUrl = new URL('http://site.com/?a=1');
console.log(myUrl.searchParams.get('a')); // '1'
\`\`\`

## 3. Why it matters
Manually string splitting URLs is buggy. Use the parser.
            `
        },

        // PART 2: PRACTICAL LABS
        {
            id: 'node-5-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Your First Server',
            duration: '20 min',
            content: `
# Lab 1: Your First Server

Build a server that responds "Hello World".

## The Mission
1.  **Import**: \`http\`.
2.  **Create**: \`createServer\`.
3.  **Write**: \`res.write('Hello World')\`.
4.  **End**: \`res.end()\`.
5.  **Listen**: Port 3000.

## Note
If you forget \`listen\`, the script finishes immediately. The server keeps the process alive.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create server.',
                    completed: false,
                    regex: /http\.createServer\s*\(/
                },
                {
                    id: 2,
                    description: 'Write response.',
                    completed: false,
                    regex: /res\.(write|end)\s*\(\s*['"]Hello World['"]/
                },
                {
                    id: 3,
                    description: 'Listen on 3000.',
                    completed: false,
                    regex: /server\.listen\s*\(\s*3000/
                }
            ],
            files: [
                {
                    name: 'server.js',
                    language: 'javascript',
                    content: `const http = require('http');

// Task 1 & 2: Create Server
const server = null; // Replace

// Task 3: Listen
`
                }
            ]
        },
        {
            id: 'node-5-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Routing Logic',
            duration: '25 min',
            content: `
# Lab 2: Routing Logic

Implement basic routing using \`if/else\` on \`req.url\`.

## The Mission
1.  **Check**: If url is \`/\`, send "Home".
2.  **Check**: If url is \`/about\`, send "About".
3.  **Else**: Send 404 Status and "Not Found".

## Mental Model
A router is just a big switch statement on the URL string.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Check req.url === "/".',
                    completed: false,
                    regex: /if\s*\(\s*req\.url\s*===?\s*['"]\/['"]/
                },
                {
                    id: 2,
                    description: 'Handle 404 status.',
                    completed: false,
                    regex: /statusCode\s*=\s*404/
                }
            ],
            files: [
                {
                    name: 'router.js',
                    language: 'javascript',
                    content: `const http = require('http');

const server = http.createServer((req, res) => {
    // Task 1: Check URL
    if (false) {
        res.end("Home");
    } else {
        // Task 2: 404
        
        res.end("Not Found");
    }
});

server.listen(3000);
`
                }
            ]
        },
        {
            id: 'node-5-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Serving JSON API',
            duration: '20 min',
            content: `
# Lab 3: Serving JSON API

Build a simple API endpoint that returns JSON data.

## The Mission
1.  **Header**: Set \`Content-Type\` to \`application/json\`.
2.  **Data**: Create an object.
3.  **Send**: \`JSON.stringify(data)\` into \`res.end\`.

## Serialization
You cannot send a raw JS Object over the wire. It must be a string.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Set Content-Type header.',
                    completed: false,
                    regex: /res\.setHeader\s*\(\s*['"]Content-Type['"]\s*,\s*['"]application\/json['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Stringify JSON.',
                    completed: false,
                    regex: /JSON\.stringify\s*\(/
                }
            ],
            files: [
                {
                    name: 'api.js',
                    language: 'javascript',
                    content: `const http = require('http');

const server = http.createServer((req, res) => {
    const user = { name: "Alice", id: 1 };
    
    if (req.url === '/api/user') {
        // Task 1: Header
        
        // Task 2: Send JSON
        res.end(); 
    }
});
`
                }
            ]
        },
        {
            id: 'node-5-lesson-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 4: Processing POST Body',
            duration: '30 min',
            content: `
# Lab 4: Processing POST Body

Reading data sent BY the client (e.g., a form submission).
This is hard in raw Node because it comes in streams!

## The Mission
1.  **Array**: Create a \`chunks\` array.
2.  **On Data**: \`req.on('data')\` -> push chunk.
3.  **On End**: \`req.on('end')\` -> Buffer.concat -> toString.

## Frameworks
Express does this for you automatically. But you must build it once to understand *why* you need frameworks.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Listen to data event.',
                    completed: false,
                    regex: /req\.on\s*\(\s*['"]data['"]/
                },
                {
                    id: 2,
                    description: 'Listen to end event.',
                    completed: false,
                    regex: /req\.on\s*\(\s*['"]end['"]/
                },
                {
                    id: 3,
                    description: 'Parse body from buffer.',
                    completed: false,
                    regex: /Buffer\.concat/
                }
            ],
            files: [
                {
                    name: 'body.js',
                    language: 'javascript',
                    content: `const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        const chunks = [];
        
        // Task 1: Collect chunks
        
        // Task 2: On End
        
            // Task 3: Combine and Print
            const body = Buffer.concat(chunks).toString();
            console.log(body);
            res.end("Received");
        
    }
});
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'HTTP Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which status code indicates "Not Found"?',
                    options: [
                        '200',
                        '301',
                        '404',
                        '500'
                    ],
                    correctIndex: 2,
                    explanation: '404 is the standard code for "The resource you requested does not exist".'
                },
                {
                    id: 'q2',
                    question: 'What header tells the client the response is JSON?',
                    options: [
                        'Content-Type: text/html',
                        'Content-Type: application/json',
                        'Accept: application/json',
                        'Body-Type: json'
                    ],
                    correctIndex: 1,
                    explanation: 'Content-Type describes what is IN the message. Accept describes what the client WANTS.'
                },
                {
                    id: 'q3',
                    question: 'In raw Node.js, how do you get the POST body?',
                    options: [
                        'req.body',
                        'req.data',
                        'It is impossible',
                        'By listening to "data" and "end" events on the req stream'
                    ],
                    correctIndex: 3,
                    explanation: 'req is a readable stream. You must manually collect chunks unless you use a body parser middleware.'
                },
                {
                    id: 'q4',
                    question: 'Which method should you use to update resource data?',
                    options: [
                        'GET',
                        'POST',
                        'PUT/PATCH',
                        'DELETE'
                    ],
                    correctIndex: 2,
                    explanation: 'PUT (replace) or PATCH (partial update) are semantically correct for updates.'
                },
                {
                    id: 'q5',
                    question: 'What happens if you do not call res.end()?',
                    options: [
                        'The browser assumes success',
                        'The browser waits indefinitely (times out)',
                        'Node crashes',
                        'It sends "OK"'
                    ],
                    correctIndex: 1,
                    explanation: 'The connection remains open until the server signals the end of the response.'
                }
            ]
        }
    ]
};
