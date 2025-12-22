
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2CRUD = {
    id: 'mongo-unit-2',
    title: 'Unit 2: CRUD Operations',
    description: 'Create, Read, Update, and Delete. The bread and butter of database management.',
    items: [
        // 1. Deep Dive: Operators
        {
            id: 'mongo-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Query Operators 🔍',
            duration: '15 min read',
            content: `
# Deep Dive: Query Operators 🔍

## 1. Comparison
MongoDB uses special keys starting with \`$\` for logic.
*   \`$gt\`: Greater Than (\`{ age: { $gt: 18 } }\`)
*   \`$lt\`: Less Than
*   \`$eq\`: Equal (Default)
*   \`$in\`: In Array (\`{ role: { $in: ["Admin", "Mod"] } }\`)

## 2. Logical
Combine multiple conditions.
*   \`$or\`: Match at least one logic block.
*   \`$and\`: Match ALL logic blocks.

## 3. Modifiers (Update)
When updating, never overwrite the whole document! Use modifiers.
*   \`$set\`: Update specific field (\`{ $set: { status: "active" } }\`)
*   \`$inc\`: Increment number (\`{ $inc: { views: 1 } }\`)
*   \`$push\`: Add to array (\`{ $push: { tags: "new" } }\`)
            `
        },
        // Lab
        {
            id: 'mongo-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: CRUD Master',
            duration: '25 min',
            content: `
# Lab 1: CRUD Master

Perform complex Find and Update queries.

## The Mission
1.  **Find**: Search for products with \`price > 500\`.
2.  **Update**: Use \`updateOne\` to change "Laptop" price to 899.
3.  **Delete**: Remove the "Old Chair".
4.  **Operator**: Use \`$set\` for the update.

## Syntax
\`\`\`javascript
db.products.find({ price: { $gt: 500 } })
db.products.updateOne({ name: "Laptop" }, { $set: { price: 899 } })
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Find: db.products.find({ price: { $gt: 500 } })',
                    completed: false,
                    regex: /db\.products\.find\s*\(\s*\{\s*price\s*:\s*\{\s*\$gt\s*:\s*500/
                },
                {
                    id: 2,
                    description: 'Update: db.products.updateOne({ name: "Laptop" }, { $set: { price: 899 } })',
                    completed: false,
                    regex: /db\.products\.updateOne\s*\(\s*\{.*Laptop.*\},\s*\{\s*\$set\s*:\s*\{\s*price\s*:\s*899/
                },
                {
                    id: 3,
                    description: 'Delete: db.products.deleteOne({ name: "Old Chair" })',
                    completed: false,
                    regex: /db\.products\.deleteOne\s*\(\s*\{.*Old Chair/
                }
            ],
            files: [
                {
                    name: 'crud.js',
                    language: 'javascript',
                    content: `// Lab 2: CRUD Ops

// 1. Find expensive products


// 2. Update Laptop price


// 3. Delete old item
`
                }
            ]
        },
        // Quiz
        {
            id: 'mongo-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'CRUD Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which operator increments a number field?',
                    options: ['$add', '$inc', '$plus', '$sum'],
                    correctIndex: 1,
                    explanation: '$inc atomically increments a value. e.g. { $inc: { count: 1 } }'
                }
            ]
        }
    ]
};
