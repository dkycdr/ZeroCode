
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlLab7 = {
    id: 'postgresql-2-lab-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 11: Aggregate Functions & GROUP BY',
    duration: '25 min',
    content: `
# Lab 11: Aggregate Functions & GROUP BY

Master grouping and aggregating data for powerful analytics.

## Mission Briefing

Practice COUNT, SUM, AVG, GROUP BY, and HAVING for data analysis.

## Theory

Aggregate functions compute single values from groups of rows. GROUP BY splits data into groups.

## Your Mission

Analyze order data with aggregates and grouping.
    `,
    tasks: [
        {
            id: 1,
            description: 'COUNT total number of orders',
            completed: false,
            regex: /SELECT\s+COUNT.*FROM\s+orders/is,
            hint: "SELECT COUNT(*) FROM orders;"
        },
        {
            id: 2,
            description: 'SUM of all order totals',
            completed: false,
            regex: /SELECT\s+SUM.*total.*FROM\s+orders/is,
            hint: "SELECT SUM(total) FROM orders;"
        },
        {
            id: 3,
            description: 'AVG order value',
            completed: false,
            regex: /SELECT\s+AVG.*total/is,
            hint: "SELECT AVG(total) FROM orders;"
        },
        {
            id: 4,
            description: 'GROUP BY user_id with COUNT',
            completed: false,
            regex: /GROUP\s+BY\s+user_id.*COUNT|COUNT.*GROUP\s+BY\s+user_id/is,
            hint: "SELECT user_id, COUNT(*) FROM orders GROUP BY user_id;"
        },
        {
            id: 5,
            description: 'GROUP BY with SUM per user',
            completed: false,
            regex: /GROUP\s+BY.*SUM/is,
            hint: "SELECT user_id, SUM(total) FROM orders GROUP BY user_id;"
        },
        {
            id: 6,
            description: 'HAVING to filter groups (count > 1)',
            completed: false,
            regex: /HAVING.*COUNT.*>\s*1/is,
            hint: "SELECT user_id, COUNT(*) FROM orders GROUP BY user_id HAVING COUNT(*) > 1;"
        },
        {
            id: 7,
            description: 'GROUP BY with JOIN to include names',
            completed: false,
            regex: /JOIN.*GROUP\s+BY|GROUP\s+BY.*JOIN/is,
            hint: "SELECT u.name, COUNT(o.id) FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id, u.name;"
        },
        {
            id: 8,
            description: 'ORDER BY aggregate to find top spenders',
            completed: false,
            regex: /GROUP\s+BY.*ORDER\s+BY.*SUM|SUM.*ORDER\s+BY/is,
            hint: "SELECT user_id, SUM(total) FROM orders GROUP BY user_id ORDER BY SUM(total) DESC;"
        }
    ],
    files: [
        {
            name: 'aggregates.sql',
            language: 'sql',
            content: `-- Aggregates & GROUP BY Lab

-- TODO: COUNT total orders


-- TODO: SUM of all totals


-- TODO: AVG order value


-- TODO: GROUP BY user_id with COUNT


-- TODO: GROUP BY user_id with SUM


-- TODO: HAVING COUNT(*) > 1


-- TODO: JOIN with GROUP BY (include user names)


-- TODO: ORDER BY SUM DESC to find top spenders

`
        }
    ]
};

export const postgresqlLab8 = {
    id: 'postgresql-2-lab-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 12: Subqueries & CTEs',
    duration: '25 min',
    content: `
# Lab 12: Subqueries & CTEs

Write complex queries with subqueries and Common Table Expressions.

## Mission Briefing

Master subqueries for filtering and CTEs for readable multi-step queries.

## Theory

Subqueries are queries within queries. CTEs (WITH clause) create named temporary results.

## Your Mission

Build complex analytics queries step by step.
    `,
    tasks: [
        {
            id: 1,
            description: 'Subquery in WHERE to find users with orders > average',
            completed: false,
            regex: /WHERE.*>\s*\(.*SELECT\s+AVG/is,
            hint: "SELECT * FROM orders WHERE total > (SELECT AVG(total) FROM orders);"
        },
        {
            id: 2,
            description: 'Subquery with IN operator',
            completed: false,
            regex: /WHERE.*IN\s*\(/is,
            hint: "SELECT name FROM users WHERE id IN (SELECT user_id FROM orders);"
        },
        {
            id: 3,
            description: 'Subquery with EXISTS',
            completed: false,
            regex: /WHERE\s+EXISTS\s*\(/is,
            hint: "SELECT name FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);"
        },
        {
            id: 4,
            description: 'Scalar subquery in SELECT',
            completed: false,
            regex: /SELECT.*\(SELECT.*FROM.*WHERE/is,
            hint: "SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) FROM users u;"
        },
        {
            id: 5,
            description: 'Subquery in FROM (derived table)',
            completed: false,
            regex: /FROM\s*\(.*SELECT/is,
            hint: "SELECT AVG(user_total) FROM (SELECT user_id, SUM(total) AS user_total FROM orders GROUP BY user_id) AS totals;"
        },
        {
            id: 6,
            description: 'Create CTE with WITH clause',
            completed: false,
            regex: /WITH\s+\w+\s+AS\s*\(/is,
            hint: "WITH user_totals AS (SELECT user_id, SUM(total) AS total FROM orders GROUP BY user_id) SELECT * FROM user_totals;"
        },
        {
            id: 7,
            description: 'Use CTE in main query with JOIN',
            completed: false,
            regex: /WITH.*AS.*JOIN/is,
            hint: "WITH user_totals AS (SELECT user_id, SUM(total) FROM orders GROUP BY user_id) SELECT u.name, ut.sum FROM users u JOIN user_totals ut ON u.id = ut.user_id;"
        }
    ],
    files: [
        {
            name: 'subqueries.sql',
            language: 'sql',
            content: `-- Subqueries & CTEs Lab

-- TODO: Find orders > average using subquery in WHERE


-- TODO: Find users with orders using IN


-- TODO: Find users with orders using EXISTS


-- TODO: Scalar subquery to count orders per user in SELECT


-- TODO: Subquery in FROM for average of user totals


-- TODO: Create CTE for user totals


-- TODO: Use  CTE with JOIN to get names

`
        }
    ]
};
