
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Aggregation = {
    id: 'mongo-unit-5',
    title: 'Unit 5: Aggregation Pipeline',
    description: 'Data Science within the Database. Filter, Group, and Calculate.',
    items: [
        // 1. Deep Dive
        {
            id: 'mongo-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: The Pipeline 🏭',
            duration: '20 min read',
            content: `
# Deep Dive: The Pipeline 🏭

## 1. How it works
Think of an assembly line. Documents go in, get transformed by "stages", and the result comes out.
\`Documents -> $match -> $group -> $project -> Result\`

## 2. Common Stages
*   **$match**: Filter data (Like WHERE). Always put this FIRST is possible (Index usage).
*   **$group**: Pivot/Summarize data (Like GROUP BY).
*   **$project**: Reshape fields (Select/Rename).
*   **$sort**: Order results.

## 3. Example
Count active users by city:
\`\`\`javascript
db.users.aggregate([
    { $match: { active: true } },
    { $group: { _id: "$city", total: { $sum: 1 } } }
]);
\`\`\`
            `
        },
        // Lab
        {
            id: 'mongo-5-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Sales Analytics',
            duration: '35 min',
            content: `
# Lab 1: Sales Analytics

Calculate total sales per Category using Aggregation.

## The Mission
1.  **Pipeline**: Start \`db.sales.aggregate([...])\`.
2.  **Match**: Filter for status: "completed".
3.  **Group**: Group by \`$category\`.
4.  **Sum**: Calculate total revenue using \`$sum: "$amount"\`.

## Syntax
\`\`\`javascript
{ $group: { _id: "$field_to_group", resultName: { $sum: "$field_to_sum" } } }
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Pipeline: db.sales.aggregate([ ... ])',
                    completed: false,
                    regex: /db\.sales\.aggregate\s*\(\s*\[/
                },
                {
                    id: 2,
                    description: 'Match: { $match: { status: "completed" } }',
                    completed: false,
                    regex: /\{\s*\$match\s*:\s*\{\s*status\s*:\s*['"]completed['"]/
                },
                {
                    id: 3,
                    description: 'Group: { $group: { _id: "$category" ... } }',
                    completed: false,
                    regex: /\{\s*\$group\s*:\s*\{\s*_id\s*:\s*['"]\$category['"]/
                },
                {
                    id: 4,
                    description: 'Sum: total: { $sum: "$amount" }',
                    completed: false,
                    regex: /total\s*:\s*\{\s*\$sum\s*:\s*['"]\$amount['"]/
                }
            ],
            files: [
                {
                    name: 'analytics.js',
                    language: 'javascript',
                    content: `// Lab 5: Aggregation

// Calculate Total Revenue per Category for Completed Sales

db.sales.aggregate([
    // 1. Match


    // 2. Group


]);
`
                }
            ]
        },
        // Quiz
        {
            id: 'mongo-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Aggregation Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why should you put $match first?',
                    options: ['It is required syntax', 'To filter documents early and improve performance', 'It looks better', 'To sort them'],
                    correctIndex: 1,
                    explanation: 'Filtering early reduces the number of documents passed to subsequent expensive stages closer to the indexes.'
                }
            ]
        }
    ]
};
