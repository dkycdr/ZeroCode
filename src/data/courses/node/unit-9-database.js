import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit9Database = {
    id: 'node-unit-9',
    title: 'Unit 9: Database Integration',
    description: 'Data persistence is key. Learn how to connect Node.js to MongoDB (NoSQL) and PostgreSQL (SQL) using ORMs and ODMs.',
    items: [
        // PART 1: DEEP DIVES
        {
            id: 'node-9-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: SQL vs NoSQL 🗄️',
            duration: '15 min read',
            content: `
# Deep Dive: SQL vs NoSQL 🗄️

## 1. The Great Debate
*   **SQL (Relational)**: PostgreSQL, MySQL.
    *   Strict Schema (Table structure).
    *   Relationships (Foreign Keys).
    *   Best for: Financial data, complex relationships.
*   **NoSQL (Document)**: MongoDB.
    *   Flexible Schema (JSON-like documents).
    *   Horizontal Scaling.
    *   Best for: Content management, rapid prototyping, logs.

## 2. ORM vs ODM
*   **ORM (Object Relational Mapper)**: Prisma, Sequelize. Maps JS Objects to SQL Tables.
*   **ODM (Object Document Mapper)**: Mongoose. Maps JS Objects to MongoDB Collections.
            `
        },
        {
            id: 'node-9-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Mongoose ODM 🍃',
            duration: '20 min read',
            content: `
# Deep Dive: Mongoose ODM 🍃

## 1. Schema Definition
Even though Mongo is schema-less, Mongoose enforces structure at the application level.
\`\`\`javascript
const UserSchema = new Schema({
  name: String,
  email: { type: String, required: true }
});
\`\`\`

## 2. Middleware (Hooks)
Mongoose has middleware too!
\`pre('save')\`: Run code before saving (e.g., hashing password).
\`post('save')\`: Run code after saving (e.g., sending welcome email).

## 3. Relationships
\`populate()\`: The magic method. It looks up a referenced ID in another collection and replaces it with the actual document.
            `
        },
        {
            id: 'node-9-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Connection Pools 🏊',
            duration: '10 min read',
            content: `
# Deep Dive: Connection Pools 🏊

## 1. The Cost of Connecting
Opening a TCP connection to a database is expensive (Handshake, Auth, Network Latency).

## 2. Pooling
Instead of opening/closing for every request, we keep a "Pool" of 10-20 open connections.
When a request comes in, it borrows a connection, does the query, and returns it to the pool.
This dramatically increases throughput.
            `
        },

        // PART 2: LABS
        {
            id: 'node-9-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: MongoDB Connection',
            duration: '20 min',
            content: `
# Lab 1: MongoDB Connection

Connect your app to a MongoDB Atlas cluster (or local instance).

## The Mission
1.  **Import**: \`mongoose\`.
2.  **Connect**: \`mongoose.connect(uri)\`.
3.  **Handle**: Events for 'connected' and 'error'.

## Connection String
Format: \`mongodb://user:pass@host:port/dbname\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import Mongoose.',
                    completed: false,
                    regex: /require\s*\(\s*['"]mongoose['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Connect with string.',
                    completed: false,
                    regex: /mongoose\.connect\s*\(/
                },
                {
                    id: 3,
                    description: 'Listen for error.',
                    completed: false,
                    regex: /\.on\s*\(\s*['"]error['"]/
                }
            ],
            files: [
                {
                    name: 'db.js',
                    language: 'javascript',
                    content: `const mongoose = require('mongoose');

// Task 1: Connect
const uri = "mongodb://localhost:27017/myapp";

// Task 2: Listen for events
mongoose.connection.on('connected', () => console.log("Connected!"));

// Task 3: Handle Error
`
                }
            ]
        },
        {
            id: 'node-9-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Defining a Schema',
            duration: '25 min',
            content: `
# Lab 2: Defining a Schema

Create a structured model for a "Product".

## The Mission
1.  **Schema**: Fields for name (String), price (Number), inStock (Boolean).
2.  **Validation**: Price must be min 0. Name is required.
3.  **Model**: Compile it into a Model.

## Defaults
Useful for optional fields. \`default: Date.now\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Define Schema fields.',
                    completed: false,
                    regex: /price:\s*{\s*type:\s*Number/
                },
                {
                    id: 2,
                    description: 'Add min validation.',
                    completed: false,
                    regex: /min:\s*0/
                },
                {
                    id: 3,
                    description: 'Create Model.',
                    completed: false,
                    regex: /mongoose\.model\s*\(\s*['"]Product['"]/
                }
            ],
            files: [
                {
                    name: 'Product.js',
                    language: 'javascript',
                    content: `const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // Task 1 & 2: name, price, inStock
    name: {
        type: String,
        required: true
    },
    
});

// Task 3: Export Model
`
                }
            ]
        },
        {
            id: 'node-9-lesson-3',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 3: Basic Querying',
            duration: '25 min',
            content: `
# Lab 3: Basic Querying

Find, create, and filter documents.

## The Mission
1.  **Create**: \`User.create({ ... })\`.
2.  **Find**: \`User.find({ age: { $gt: 18 } })\`.
3.  **Async**: Use await!

## Query Operators
*   \`$gt\`: Greater Than
*   \`$in\`: In Array
*   \`$regex\`: Partial match
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create user.',
                    completed: false,
                    regex: /User\.create\s*\(/
                },
                {
                    id: 2,
                    description: 'Find query (age > 18).',
                    completed: false,
                    regex: /User\.find\s*\(\s*{\s*age:\s*{\s*\$gt:\s*18/
                }
            ],
            files: [
                {
                    name: 'queries.js',
                    language: 'javascript',
                    content: `const User = require('./User'); // Assume model exists

async function run() {
    // Task 1: Create 'John'
    
    // Task 2: Find adults
    const adults = await User.find({}); 
    
    console.log(adults);
}
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-9-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Database Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the primary role of Mongoose?',
                    options: [
                        'To make MongoDB faster',
                        'To provide schema validation and relationship management for MongoDB',
                        'To connect to SQL databases',
                        'To cache data in RAM'
                    ],
                    correctIndex: 1,
                    explanation: 'MongoDB is schema-less. Mongoose adds the application-layer schema enforcement.'
                },
                {
                    id: 'q2',
                    question: 'Which method creates a new document in the database?',
                    options: [
                        'Model.new()',
                        'Model.make()',
                        'Model.create()',
                        'Model.add()'
                    ],
                    correctIndex: 2,
                    explanation: '.create() is the shorthand for new Model() + .save().'
                },
                {
                    id: 'q3',
                    question: 'What does "Horizontal Scaling" mean?',
                    options: [
                        'Adding more CPU/RAM to a single server',
                        'Adding more servers to distribute the load (Sharding)',
                        'Making the database cable longer',
                        'Rotating the monitor'
                    ],
                    correctIndex: 1,
                    explanation: 'NoSQL databases like MongoDB are designed to be distributed across many cheap servers (Shards).'
                }
            ]
        }
    ]
};
