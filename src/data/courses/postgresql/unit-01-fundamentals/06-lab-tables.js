
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlLab2 = {
    id: 'postgresql-1-lab-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 6: Creating Tables & Inserting Data',
    duration: '25 min',
    content: `
# Lab 6: Creating Tables & Inserting Data

Master table creation with various data types and constraints. Practice inserting data.

## Mission Briefing

Create a products table with proper constraints and insert sample data.

## Theory: Constraints

Constraints enforce data integrity:
- PRIMARY KEY: Unique identifier
- NOT NULL: Required field
- CHECK: Custom validation

## Your Mission

Build a complete products table with all data types and constraints.
    `,
    tasks: [
        {
            id: 1,
            description: 'CREATE TABLE products with multiple columns',
            completed: false,
            regex: /CREATE\s+TABLE\s+products/i,
            hint: "CREATE TABLE products (...);"
        },
        {
            id: 2,
            description: 'Add id as SERIAL PRIMARY KEY',
            completed: false,
            regex: /id\s+SERIAL\s+PRIMARY\s+KEY/i,
            hint: "id SERIAL PRIMARY KEY"
        },
        {
            id: 3,
            description: 'Add name VARCHAR column with NOT NULL',
            completed: false,
            regex: /name\s+VARCHAR.*NOT\s+NULL/i,
            hint: "name VARCHAR(200) NOT NULL"
        },
        {
            id: 4,
            description: 'Add price DECIMAL column',
            completed: false,
            regex: /price\s+DECIMAL/i,
            hint: "price DECIMAL(10, 2)"
        },
        {
            id: 5,
            description: 'INSERT single product',
            completed: false,
            regex: /INSERT\s+INTO\s+products.*VALUES/i,
            hint: "INSERT INTO products (name, price) VALUES ('Phone', 999.99);"
        },
        {
            id: 6,
            description: 'INSERT multiple products in one statement',
            completed: false,
            regex: /VALUES.*,.*VALUES|VALUES\s*\([^)]+\)\s*,\s*\(/is,
            hint: "INSERT INTO products VALUES (...), (...), (...);"
        },
        {
            id: 7,
            description: 'Use RETURNING to get inserted data',
            completed: false,
            regex: /RETURNING/i,
            hint: "INSERT INTO products (...) VALUES (...) RETURNING *;"
        },
        {
            id: 8,
            description: 'SELECT all products',
            completed: false,
            regex: /SELECT.*FROM\s+products/i,
            hint: "SELECT * FROM products;"
        }
    ],
    files: [
        {
            name: 'tables.sql',
            language: 'sql',
            content: `-- Tables & Insert Lab

-- TODO: Create products table
-- Columns: id (SERIAL PRIMARY KEY), name (VARCHAR NOT NULL), price (DECIMAL), stock (INTEGER)


-- TODO: Insert single product with name and price


-- TODO: Insert multiple products in one INSERT statement


-- TODO: Insert with RETURNING to see inserted data


-- TODO: SELECT all products to verify
SELECT * FROM products;
`
        }
    ]
};

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
