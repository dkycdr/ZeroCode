
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Intro = {
    id: 'mongo-unit-1',
    title: 'Unit 1: MongoDB Basics',
    description: 'Understand NoSQL, Documents, and Collections. The foundation of modern data.',
    items: [
        // 1. Deep Dive
        {
            id: 'mongo-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: What is NoSQL? 🍃',
            duration: '15 min read',
            content: `
# Deep Dive: What is NoSQL? 🍃

## 1. The Document Model
SQL databases (MySQL, Postgres) use **Tables** and **Rows**.
MongoDB uses **Collections** and **Documents**.

| SQL Term | MongoDB Term | Concept |
| :--- | :--- | :--- |
| Table | **Collection** | A group of records |
| Row | **Document** | Single record (JSON) |
| Column | **Field** | Key-value pair |

## 2. JSON-Like (BSON)
Data is stored in Binary JSON (BSON). It looks just like JavaScript objects.
\`\`\`json
{
    "_id": "507f1f77bcf86cd799439011",
    "name": "Dwiky",
    "skills": ["JavaScript", "MongoDB"],
    "address": {
        "city": "Jakarta"
    }
}
\`\`\`

## 3. Schemaless (Flexible)
In SQL, you must define columns *before* inserting data.
In MongoDB, every document can have different fields. However, in production (with Mongoose), we usually enforce a Schema for sanity.
            `
        },
        // Lab
        {
            id: 'mongo-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: First Document',
            duration: '20 min',
            content: `
# Lab 1: First Document

Insert your first document into a MongoDB collection.

## The Mission
1.  **Connect**: Shell already connected to \`test\` database.
2.  **Insert**: Use \`db.users.insertOne({ ... })\`.
3.  **Fields**: Add name, age, and an array of hobbies.
4.  **Verify**: Use \`db.users.find()\` to see it.

## Syntax
\`\`\`javascript
db.collectionName.insertOne({ key: "value" })
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Insert: db.users.insertOne({ name: "Alice", age: 25 })',
                    completed: false,
                    regex: /db\.users\.insertOne\s*\(\s*\{.*name.*age/
                },
                {
                    id: 2,
                    description: 'Find: db.users.find()',
                    completed: false,
                    regex: /db\.users\.find\s*\(\s*\)/
                }
            ],
            files: [
                {
                    name: 'query.js',
                    language: 'javascript',
                    content: `// Lab 1: Insert Data

// 1. Insert a new user document


// 2. Find all users
`
                }
            ]
        },
        // Quiz
        {
            id: 'mongo-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'NoSQL Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the MongoDB equivalent of a SQL Row?',
                    options: ['Table', 'Document', 'Field', 'Collection'],
                    correctIndex: 1,
                    explanation: 'A Document is a single record in a MongoDB Collection.'
                }
            ]
        }
    ]
};
