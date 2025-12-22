
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2Crud = {
    id: 'mysql-unit-2',
    title: 'Unit 2: Manipulating Data',
    description: 'Insert, Update, Delete. Master the lifecycle of data and learn how to count it.',
    items: [
        // 1. Deep Dive: ACID Transactions
        {
            id: 'mysql-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: ACID Transactions ⚛️',
            duration: '15 min read',
            content: `
# Deep Dive: ACID Transactions ⚛️

## 1. What is a Transaction?
A transaction is a group of SQL operations that **succeed or fail as a single unit**.
Example: Transferring money.
1. Subtract $100 from Alice.
2. Add $100 to Bob.
If step 2 fails, step 1 MUST be undone.

## 2. A.C.I.D. Properties
*   **A - Atomicity**: All or nothing.
*   **C - Consistency**: Database follows rules (Constraints) before and after.
*   **I - Isolation**: Transactions don't see each other's half-finished work.
*   **D - Durability**: Once committed, data is saved forever (even if power fails).

## 3. SQL Commands
\`\`\`sql
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT; -- Save changes
-- OR
ROLLBACK; -- Undo everything
\`\`\`
            `
        },
        // 2. Lab: Safe Updates
        {
            id: 'mysql-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Safe Modification',
            duration: '30 min',
            content: `
# Lab 1: Safe Modification

Practice updating and deleting data without destroying the database.

## The Mission
1.  **Insert**: Add a new user "Test User".
2.  **Safe Update**: Update email *only* for the user with ID 5.
3.  **Correct Delete**: Delete *only* inactive users (status = 'inactive').
4.  **Transaction**: Wrap multiple inserts in a transaction block.

## Golden Rule
NEVER run UPDATE or DELETE without a WHERE clause (unless you want to be fired).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Insert: INSERT INTO users (name) VALUES ("Test User");',
                    completed: false,
                    regex: /INSERT\s+INTO\s+users\s*\(\w+\)\s*VALUES/i
                },
                {
                    id: 2,
                    description: 'Safe Update: UPDATE users SET email = "new@test.com" WHERE id = 5;',
                    completed: false,
                    regex: /UPDATE\s+users\s+SET\s+email\s*=\s*['"][^'"]+['"]\s+WHERE\s+id\s*=\s*5/i
                },
                {
                    id: 3,
                    description: 'Safe Delete: DELETE FROM users WHERE status = "inactive";',
                    completed: false,
                    regex: /DELETE\s+FROM\s+users\s+WHERE\s+status\s*=\s*['"]inactive['"]/i
                },
                {
                    id: 4,
                    description: 'Transaction: START TRANSACTION; ... COMMIT;',
                    completed: false,
                    regex: /START\s+TRANSACTION[\s\S]*COMMIT/i
                }
            ],
            files: [
                {
                    name: 'modifications.sql',
                    language: 'sql',
                    content: `-- Lab 2: Safe Modifications

-- 1. Insert new user

-- 2. Update user #5

-- 3. Delete inactive users

-- 4. Transaction Block
`
                }
            ]
        },

        // 3. Lab: Aggregation & Grouping
        {
            id: 'mysql-2-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: Aggregation',
            duration: '25 min',
            content: `
# Lab 2: Aggregation

Analyze data using COUNT, SUM, and AVG.

## The Mission
1.  **Count**: How many total orders?
2.  **Sum**: What is the total revenue?
3.  **Group By**: How many orders *per customer*?
4.  **Having**: Which customers have more than 5 orders?
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Count: SELECT COUNT(*) FROM orders;',
                    completed: false,
                    regex: /SELECT\s+COUNT\s*\(\s*\*\s*\)\s+FROM\s+orders/i
                },
                {
                    id: 2,
                    description: 'Sum: SELECT SUM(amount) FROM orders;',
                    completed: false,
                    regex: /SELECT\s+SUM\s*\(\s*amount\s*\)/i
                },
                {
                    id: 3,
                    description: 'Group: SELECT customer_id, COUNT(*) FROM orders GROUP BY customer_id;',
                    completed: false,
                    regex: /GROUP\s+BY\s+customer_id/i
                },
                {
                    id: 4,
                    description: 'Having: HAVING COUNT(*) > 5',
                    completed: false,
                    regex: /HAVING\s+COUNT\s*\(\s*\*\s*\)\s*>\s*5/i
                }
            ],
            files: [
                {
                    name: 'analysis.sql',
                    language: 'sql',
                    content: `-- Lab 2: Aggregation Analysis

-- 1. Total Order Count

-- 2. Total Revenue Summary

-- 3. Orders per Customer

-- 4. VIP Customers (> 5 orders)
`
                }
            ]
        },

        // 4. Quiz
        {
            id: 'mysql-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'CRUD Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'In ACID, what does Atomicity mean?',
                    options: [
                        'Data is atomic size',
                        'Transactions are all-or-nothing',
                        'Data is chemically stable',
                        'One transaction at a time'
                    ],
                    correctIndex: 1,
                    explanation: 'Atomicity ensures that within a transaction, either all steps happen, or none of them do.'
                },
                {
                    id: 'q2',
                    question: 'Can you use WHERE with aggregate functions like COUNT?',
                    options: [
                        'Yes, always',
                        'No, use HAVING',
                        'Yes, but only before Grouping',
                        'No, use LIMIT'
                    ],
                    correctIndex: 2,
                    explanation: 'WHERE filters rows *before* they are grouped. HAVING filters the groups *after* aggregation.'
                }
            ]
        }
    ]
};
