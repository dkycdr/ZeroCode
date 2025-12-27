
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Mongoose = {
    id: 'mongo-unit-3',
    title: 'Unit 3: Mongoose Schemas',
    description: 'Bring order to chaos. Define typed Schemas for your documents.',
    items: [
        // 1. Deep Dive
        {
            id: 'mongo-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Why Mongoose? 🦁',
            duration: '15 min read',
            content: `
# Deep Dive: Why Mongoose? 🦁

## 1. The Chaos of NoSQL
Without a schema, you could insert \`{ age: "twenty" }\` into one document and \`{ age: 20 }\` into another. This breaks apps.
**Mongoose** enforces structural discipline.

## 2. Schema Definition
\`\`\`javascript
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, min: 18 },
    role: { type: String, enum: ['User', 'Admin'] }
});
\`\`\`

## 3. Validation
Mongoose validates data *before* it touches MongoDB.
If you try to save an Admin with age 10, Mongoose throws an error instantly.
            `
        },
        // Lab
        {
            id: 'mongo-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Model Architect',
            duration: '30 min',
            content: `
# Lab 1: Model Architect

Design a strict Mongoose Schema for a Product.

## The Mission
1.  **Require Mongoose**: \`const mongoose = require('mongoose');\`
2.  **Define Schema**: Create \`ProductSchema\`.
3.  **Fields**:
    *   \`name\`: String, required.
    *   \`price\`: Number, min 0.
    *   \`tags\`: Array of Strings.
4.  **Model**: Compile it into a model named "Product".

## Syntax
\`\`\`javascript
const Model = mongoose.model("Name", Schema);
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Import: const mongoose = require("mongoose");',
                    completed: false,
                    regex: /const\s+mongoose\s*=\s*require\s*\(\s*['"]mongoose['"]\s*\)/
                },
                {
                    id: 2,
                    description: 'Schema: new mongoose.Schema({ ... })',
                    completed: false,
                    regex: /new\s+mongoose\.Schema\s*\(/
                },
                {
                    id: 3,
                    description: 'Field: name: { type: String, required: true }',
                    completed: false,
                    regex: /name\s*:\s*\{\s*type\s*:\s*String.*required/
                },
                {
                    id: 4,
                    description: 'Model: mongoose.model("Product", ProductSchema)',
                    completed: false,
                    regex: /mongoose\.model\s*\(\s*['"]Product['"]\s*,\s*\w+/
                }
            ],
            files: [
                {
                    name: 'Product.js',
                    language: 'javascript',
                    content: `// Lab 3: Mongoose Schemas

// 1. Import Mongoose


// 2. Define Schema


// 3. Export Model
`
                }
            ]
        },
        // Quiz
        {
            id: 'mongo-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Mongoose Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What happens if you save data that violates the Schema?',
                    options: ['It is saved anyway', 'MongoDB rejects it', 'Mongoose throws a ValidationError', 'It is converted to string'],
                    correctIndex: 2,
                    explanation: 'Mongoose middleware intercepts the save operation and runs validation logic first.'
                }
            ]
        }
    ]
};
