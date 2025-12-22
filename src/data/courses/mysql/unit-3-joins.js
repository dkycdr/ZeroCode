
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Joins = {
    id: 'mysql-unit-3',
    title: 'Unit 3: Complex Relationships',
    description: 'Stop duplicating data. Use JOINs to connect normalized tables.',
    items: [
        // 1. Deep Dive: JOIN Visualization
        {
            id: 'mysql-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Visualizing JOINs 🔗',
            duration: '15 min read',
            content: `
# Deep Dive: Visualizing JOINs 🔗

## 1. The Venn Diagram Model
*   **INNER JOIN**: The Intersection (A ∩ B). Only records that exist in BOTH.
*   **LEFT JOIN**: All of Left + Intersection (A). Records in A, plus matching B (or NULL).
*   **RIGHT JOIN**: All of Right + Intersection (B). Records in B, plus matching A (or NULL).

## 2. The Cartesian Product (Warning!)
If you forget the \`ON\` clause:
\`\`\`sql
SELECT * FROM users, orders;
\`\`\`
This creates a **CROSS JOIN**.
If Users has 1,000 rows and Orders has 1,000 rows, you get **1,000,000 rows**.
This crashes servers. **Always use explicit JOIN ... ON ...**.

## 3. Self Joins
You can join a table to itself!
Useful for hierarchies (Employees who have Managers in the same table).
\`\`\`sql
SELECT e.name as Employee, m.name as Manager
FROM employees e
JOIN employees m ON e.manager_id = m.id;
\`\`\`
            `
        },
        // 2. Lab: JOIN Operations
        {
            id: 'mysql-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Joining Tables',
            duration: '35 min',
            content: `
# Lab 1: Joining Tables

Connect Students, Courses, and Enrollments.

## The Mission
1.  **Inner Join**: Get Student Name and Course Name for all enrollments.
2.  **Left Join**: Get ALL Students and their courses (even if they have none).
3.  **Multi Join**: Join Students -> Enrollments -> Courses -> Professors.

## Mental Model
Start from the "center" (usually the junction table like Enrollments) and branch out.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Inner: SELECT s.name, c.title FROM students s JOIN enrollments e ON s.id = e.student_id JOIN courses c ON e.course_id = c.id',
                    completed: false,
                    regex: /JOIN\s+enrollments\s+\w+\s+ON[\s\S]*JOIN\s+courses/i
                },
                {
                    id: 2,
                    description: 'Left: SELECT s.name FROM students s LEFT JOIN enrollments e ON s.id = e.student_id',
                    completed: false,
                    regex: /LEFT\s+JOIN\s+enrollments/i
                },
                {
                    id: 3,
                    description: 'Filter Null: WHERE e.id IS NULL (Find students with no courses)',
                    completed: false,
                    regex: /WHERE\s+\w+\.id\s+IS\s+NULL/i
                }
            ],
            files: [
                {
                    name: 'joins.sql',
                    language: 'sql',
                    content: `-- Lab 1: JOIN Operations

-- 1. List Student Names and Course Titles

-- 2. List All Students (even those not enrolled)

-- 3. Find Students with NO enrollments
`
                }
            ]
        },

        // 3. Quiz
        {
            id: 'mysql-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'JOINs Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'If Table A has 5 rows and Table B has 5 rows, how many rows does a CROSS JOIN produce?',
                    options: [
                        '5',
                        '10',
                        '25',
                        '0'
                    ],
                    correctIndex: 2,
                    explanation: 'Cartesian product: 5 * 5 = 25 rows.'
                },
                {
                    id: 'q2',
                    question: 'Which JOIN would you use to find customers who have NEVER placed an order?',
                    options: [
                        'INNER JOIN',
                        'LEFT JOIN + WHERE IS NULL',
                        'RIGHT JOIN',
                        'CROSS JOIN'
                    ],
                    correctIndex: 1,
                    explanation: 'Left Join gets all customers. WHERE order.id IS NULL filters for those with no matching order.'
                }
            ]
        }
    ]
};
