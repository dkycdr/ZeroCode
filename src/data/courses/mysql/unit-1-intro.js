
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Intro = {
    id: 'mysql-unit-1',
    title: 'Unit 1: The Relational Model',
    description: 'Understand how big boys store data. Learn tables, rows, columns, and the SELECT statement.',
    items: [
        // 1. Deep Dive: Relational Theory
        {
            id: 'mysql-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Relational Theory 📊',
            duration: '15 min read',
            content: `
# Deep Dive: Relational Theory 📊

## 1. Everything is a Table (Relation)
In 1970, Edgar F. Codd proposed that all data should be stored in tables.
*   **Tuple**: A Row (Record).
*   **Attribute**: A Column (Field).
*   **Relation**: A Table.

## 2. SQL Execution Order
You write:
\`\`\`sql
SELECT name FROM students WHERE age > 20
\`\`\`
But the database engine executes it in this order:
1.  **FROM students** (Get the table)
2.  **WHERE age > 20** (Filter rows)
3.  **SELECT name** (Return only specific columns)

**Why does this matter?**
It explains why you can't use an Alias defined in SELECT inside the WHERE clause!
\`\`\`sql
SELECT price * 0.9 as discounted FROM products WHERE discounted < 100 -- ERROR!
\`\`\`
The WHERE happens *before* "discounted" is created.
            `
        },
        // 2. Lab: SELECT Mastery
        {
            id: 'mysql-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: SELECT Mastery',
            duration: '25 min',
            content: `
# Lab 1: SELECT Mastery

Master the art of asking questions to the database.

## The Mission
1.  **Retrieve**: Get all data from \`employees\`.
2.  **Filter**: Find employees in "Engineering" with salary > 80000.
3.  **Sort**: Order them by salary (Highest first).
4.  **Limit**: Show only the top 3 earners.

## Syntax Recap
\`\`\`sql
SELECT column1, column2
FROM table_name
WHERE condition
ORDER BY column DESC
LIMIT 5;
\`\`\`
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Basic: SELECT * FROM employees;',
                    completed: false,
                    regex: /SELECT\s+\*\s+FROM\s+employees/i
                },
                {
                    id: 2,
                    description: 'Filter: WHERE department = "Engineering" AND salary > 80000',
                    completed: false,
                    regex: /WHERE\s+department\s*=\s*['"]Engineering['"]\s+AND\s+salary\s*>\s*80000/i
                },
                {
                    id: 3,
                    description: 'Sort: ORDER BY salary DESC',
                    completed: false,
                    regex: /ORDER\s+BY\s+salary\s+DESC/i
                },
                {
                    id: 4,
                    description: 'Limit: LIMIT 3',
                    completed: false,
                    regex: /LIMIT\s+3/i
                }
            ],
            files: [
                {
                    name: 'query.sql',
                    language: 'sql',
                    content: `-- Lab 1: SELECT Mastery

-- 1. Select all employees
-- SELECT ...

-- 2. Find High Earners in Engineering

-- 3. Top 3 Highest Paid Employees
`
                }
            ]
        },

        // 3. Quiz
        {
            id: 'mysql-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'SQL Relational Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which SQL clause executes FIRST?',
                    options: [
                        'SELECT',
                        'WHERE',
                        'FROM',
                        'ORDER BY'
                    ],
                    correctIndex: 2,
                    explanation: 'The database first needs to know WHICH table (FROM) to access before it can filter (WHERE) or return (SELECT) data.'
                },
                {
                    id: 'q2',
                    question: 'What is a "Tuple" in relational database theory?',
                    options: [
                        'A Column',
                        'A Table',
                        'A Row',
                        'A Database'
                    ],
                    correctIndex: 2,
                    explanation: 'Tuple is the mathematical term for a Row or Record in a table.'
                }
            ]
        }
    ]
};
