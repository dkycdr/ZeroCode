
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Relationships = {
    id: 'mongo-unit-4',
    title: 'Unit 4: Relationships',
    description: 'Relational Data in a Non-Relational World. Population and Embedding.',
    items: [
        // 1. Deep Dive
        {
            id: 'mongo-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Populate vs Embed 🔗',
            duration: '15 min read',
            content: `
# Deep Dive: Populate vs Embed 🔗

## 1. Embedding (Denormalization)
Storing data *inside* the document.
\`\`\`javascript
// User Document
{
    name: "Dwiky",
    addresses: [{ city: "Jakarta" }, { city: "Bandung" }]
}
\`\`\`
*   **Pros**: Super fast reads (1 query).
*   **Cons**: Duplication. Hard to update if shared.

## 2. Referencing (Normalization)
Storing an ID pointer to another document.
\`\`\`javascript
// Post Document
{
    title: "My Blog",
    author: ObjectId("507f...") // Points to User
}
\`\`\`

## 3. Mongoose Populate
To "Join" referenced data, use \`.populate()\`.
\`\`\`javascript
Post.find().populate('author');
// Result: { title: "My Blog", author: { name: "Dwiky" } }
\`\`\`
            `
        },
        // Lab
        {
            id: 'mongo-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Population Logic',
            duration: '30 min',
            content: `
# Lab 1: Population Logic

Link a Post to an Author using References.

## The Mission
1.  **Schema**: Define \`author\` field in PostSchema with \`ref: 'User'\`.
2.  **Query**: Function \`getPosts()\` that finds all posts.
3.  **Populate**: Chain \`.populate('author')\` to fill in user details.
4.  **Select**: Only get the \`name\` of the author.

## Syntax
\`\`\`javascript
field: { type: mongoose.Schema.Types.ObjectId, ref: 'ModelName' }
query.populate('field', 'select fields')
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Schema: author: { type: ObjectId, ref: "User" }',
                    completed: false,
                    regex: /author\s*:\s*\{.*ObjectId.*ref\s*:\s*['"]User['"]/
                },
                {
                    id: 2,
                    description: 'Query: Post.find()',
                    completed: false,
                    regex: /Post\.find\s*\(\s*\)/
                },
                {
                    id: 3,
                    description: 'Populate: .populate("author")',
                    completed: false,
                    regex: /\.populate\s*\(\s*['"]author['"]/
                }
            ],
            files: [
                {
                    name: 'relationship.js',
                    language: 'javascript',
                    content: `// Lab 4: Relationships

// 1. Define Post Schema with Reference


// 2. Query and Populate


`
                }
            ]
        },
        // Quiz
        {
            id: 'mongo-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Relationships Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which method fills in referenced documents?',
                    options: ['join()', 'fill()', 'populate()', 'link()'],
                    correctIndex: 2,
                    explanation: 'populate() automagically replaces IDs with the actual referenced documents.'
                }
            ]
        }
    ]
};
