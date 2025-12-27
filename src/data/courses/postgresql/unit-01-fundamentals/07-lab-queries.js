
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlLab3 = {
    id: 'postgresql-1-lab-3',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 7: SELECT Queries Practice',
    duration: '25 min',
    content: `
# Lab 7: SELECT Queries Practice

Master WHERE clauses, filtering, sorting, and pagination.

## Mission Briefing

Practice complex SELECT queries with multiple filtering conditions.

## Theory: Query Building

Build queries step by step:
1. FROM (which table)
2. WHERE (filter rows)
3. ORDER BY (sort)
4. LIMIT (top N)

## Your Mission

Write complex queries to filter and sort product data.
    `,
    tasks: [
        {
            id: 1,
            description: 'SELECT all columns from products',
            completed: false,
            regex: /SELECT\s+\*\s+FROM\s+products/i,
            hint: "SELECT * FROM products;"
        },
        {
            id: 2,
            description: 'SELECT only name and price columns',
            completed: false,
            regex: /SELECT\s+name\s*,\s*price\s+FROM\s+products|SELECT\s+price\s*,\s*name\s+FROM\s+products/i,
            hint: "SELECT name, price FROM products;"
        },
        {
            id: 3,
            description: 'WHERE price greater than 100',
            completed: false,
            regex: /WHERE\s+price\s*>\s*100/i,
            hint: "SELECT * FROM products WHERE price > 100;"
        },
        {
            id: 4,
            description: 'WHERE name LIKE containing "phone"',
            completed: false,
            regex: /WHERE\s+name\s+(I)?LIKE\s*['"]%phone%['"]/i,
            hint: "SELECT * FROM products WHERE name LIKE '%phone%';"
        },
        {
            id: 5,
            description: 'Use AND operator for multiple conditions',
            completed: false,
            regex: /WHERE.*AND/i,
            hint: "WHERE price > 50 AND stock > 0"
        },
        {
            id: 6,
            description: 'ORDER BY price DESC (highest first)',
            completed: false,
            regex: /ORDER\s+BY\s+price\s+DESC/i,
            hint: "ORDER BY price DESC"
        },
        {
            id: 7,
            description: 'LIMIT results to 5',
            completed: false,
            regex: /LIMIT\s+5/i,
            hint: "LIMIT 5"
        },
        {
            id: 8,
            description: 'Use DISTINCT to get unique categories',
            completed: false,
            regex: /SELECT\s+DISTINCT/i,
            hint: "SELECT DISTINCT category FROM products;"
        }
    ],
    files: [
        {
            name: 'queries.sql',
            language: 'sql',
            content: `-- SELECT Queries Lab

-- TODO: SELECT all columns from products


-- TODO: SELECT only name and price


-- TODO: WHERE price > 100


-- TODO: WHERE name LIKE '%phone%'


-- TODO: WHERE price > 50 AND stock > 0


-- TODO: ORDER BY price DESC


-- TODO: LIMIT 5 results


-- TODO: SELECT DISTINCT category

`
        }
    ]
};
