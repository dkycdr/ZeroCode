
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlLab4 = {
    id: 'postgresql-1-lab-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 8: UPDATE & DELETE Operations',
    duration: '20 min',
    content: `
# Lab 8: UPDATE & DELETE Operations

Practice modifying and deleting data safely with WHERE clauses.

## Mission Briefing

Master UPDATE and DELETE operations with proper WHERE conditions.

## Theory: Safety First

ALWAYS use WHERE in UPDATE/DELETE unless you truly want to affect ALL rows!

## Your Mission

Update product prices and delete old data safely.
    `,
    tasks: [
        {
            id: 1,
            description: 'UPDATE single product price by id',
            completed: false,
            regex: /UPDATE\s+products\s+SET\s+price.*WHERE\s+id/i,
            hint: "UPDATE products SET price = 999.99 WHERE id = 1;"
        },
        {
            id: 2,
            description: 'UPDATE multiple columns at once',
            completed: false,
            regex: /SET.*,.*WHERE/is,
            hint: "UPDATE products SET price = 50, stock = 100 WHERE id = 2;"
        },
        {
            id: 3,
            description: 'Use RETURNING with UPDATE',
            completed: false,
            regex: /UPDATE.*RETURNING/is,
            hint: "UPDATE products SET price = 100 WHERE id = 3 RETURNING *;"
        },
        {
            id: 4,
            description: 'UPDATE with calculation (increase price by 10%)',
            completed: false,
            regex: /SET\s+price\s*=\s*price\s*\*/i,
            hint: "UPDATE products SET price = price * 1.10 WHERE category = 'electronics';"
        },
        {
            id: 5,
            description: 'DELETE single row by id',
            completed: false,
            regex: /DELETE\s+FROM\s+products\s+WHERE\s+id/i,
            hint: "DELETE FROM products WHERE id = 5;"
        },
        {
            id: 6,
            description: 'DELETE with condition',
            completed: false,
            regex: /DELETE\s+FROM.*WHERE.*(?!id)/is,
            hint: "DELETE FROM products WHERE stock = 0;"
        },
        {
            id: 7,
            description: 'Use COUNT to count rows',
            completed: false,
            regex: /SELECT\s+COUNT/i,
            hint: "SELECT COUNT(*) FROM products;"
        }
    ],
    files: [
        {
            name: 'updates.sql',
            language: 'sql',
            content: `-- UPDATE & DELETE Lab

-- TODO: UPDATE single product price by id


-- TODO: UPDATE multiple columns (price and stock) at once


-- TODO: UPDATE with RETURNING


-- TODO: UPDATE price increase by 10% for category


-- TODO: DELETE single row by id


-- TODO: DELETE products where stock = 0


-- TODO: Count remaining products
SELECT COUNT(*) FROM products;
`
        }
    ]
};
