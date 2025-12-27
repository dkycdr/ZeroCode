
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlLab5 = {
    id: 'postgresql-2-lab-1',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 9: INNER JOIN Practice',
    duration: '30 min',
    content: `
# Lab 9: INNER JOIN Practice

Master combining data from multiple tables with INNER JOIN.

## Mission Briefing

Practice INNER JOIN with users and orders tables. Learn to combine related data efficiently.

## Theory: INNER JOIN

INNER JOIN returns **only matching rows** from both tables. Perfect for finding related records.

## Your Mission

Create tables with relationships and practice various JOIN patterns.
    `,
    tasks: [
        {
            id: 1,
            description: 'Create users table with id and name',
            completed: false,
            regex: /CREATE\s+TABLE\s+users.*id.*name/is,
            hint: "CREATE TABLE users (id SERIAL PRIMARY KEY, name VARCHAR(100));"
        },
        {
            id: 2,
            description: 'Create orders table with foreign key user_id',
            completed: false,
            regex: /CREATE\s+TABLE\s+orders.*user_id.*REFERENCES\s+users/is,
            hint: "CREATE TABLE orders (id SERIAL, user_id INTEGER REFERENCES users(id), total DECIMAL);"
        },
        {
            id: 3,
            description: 'INNER JOIN users and orders',
            completed: false,
            regex: /INNER\s+JOIN\s+orders.*ON.*users\.id.*=.*orders\.user_id|INNER\s+JOIN\s+users.*ON.*orders\.user_id.*=.*users\.id/is,
            hint: "SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id;"
        },
        {
            id: 4,
            description: 'Use table aliases (u, o)',
            completed: false,
            regex: /FROM\s+users\s+u.*JOIN\s+orders\s+o|FROM\s+orders\s+o.*JOIN\s+users\s+u/is,
            hint: "SELECT * FROM users u INNER JOIN orders o ON u.id = o.user_id;"
        },
        {
            id: 5,
            description: 'SELECT specific columns from both tables',
            completed: false,
            regex: /SELECT\s+(?!.*\*).*\bname\b.*\btotal\b|\bselect\b.*\btotal\b.*\bname\b/is,
            hint: "SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id;"
        },
        {
            id: 6,
            description: 'JOIN with WHERE to filter results',
            completed: false,
            regex: /JOIN.*WHERE/is,
            hint: "SELECT u.name, o.total FROM users u JOIN orders o ON u.id = o.user_id WHERE o.total > 100;"
        },
        {
            id: 7,
            description: 'JOIN with GROUP BY to count orders per user',
            completed: false,
            regex: /JOIN.*GROUP\s+BY.*COUNT/is,
            hint: "SELECT u.name, COUNT(o.id) FROM users u JOIN orders o ON u.id = o.user_id GROUP BY u.id, u.name;"
        },
        {
            id: 8,
            description: 'JOIN three tables',
            completed: false,
            regex: /JOIN.*JOIN/is,
            hint: "SELECT * FROM users u JOIN orders o ON u.id = o.user_id JOIN order_items oi ON o.id = oi.order_id;"
        }
    ],
    files: [
        {
            name: 'inner_join.sql',
            language: 'sql',
            content: `-- INNER JOIN Lab

-- TODO: Create users table (id SERIAL, name VARCHAR)


-- TODO: Create orders table (id SERIAL, user_id REFERENCES users, total DECIMAL)


-- TODO: Insert sample users
INSERT INTO users (name) VALUES ('Alice'), ('Bob'), ('Charlie');

-- TODO: Insert sample orders (Alice: 2, Bob: 1, Charlie: 0)
INSERT INTO orders (user_id, total) VALUES (1, 99.99), (1, 149.99), (2, 79.99);

-- TODO: INNER JOIN users and orders


-- TODO: Use table aliases u and o


-- TODO: SELECT only name and total columns


-- TODO: JOIN with WHERE total > 100


-- TODO: JOIN with GROUP BY to count orders per user


-- TODO: JOIN three tables (if you create order_items)

`
        }
    ]
};

export const postgresqlLab6 = {
    id: 'postgresql-2-lab-2',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 10: OUTER JOINs Mastery',
    duration: '30 min',
    content: `
# Lab 10: OUTER JOINs Mastery

Master LEFT, RIGHT, and FULL OUTER JOINs to include non-matching rows.

## Mission Briefing

Learn to find all records, including those without matches, using OUTER JOINs.

## Theory: OUTER JOINs

- **LEFT JOIN**: All from left table + matches
- **RIGHT JOIN**: All from right table + matches  
- **FULL OUTER JOIN**: All from both tables

## Your Mission

Practice finding unmatched records and handling NULL values.
    `,
    tasks: [
        {
            id: 1,
            description: 'LEFT JOIN users and orders to include all users',
            completed: false,
            regex: /LEFT\s+(OUTER\s+)?JOIN/i,
            hint: "SELECT * FROM users u LEFT JOIN orders o ON u.id = o.user_id;"
        },
        {
            id: 2,
            description: 'Find users with NO orders using IS NULL',
            completed: false,
            regex: /LEFT\s+JOIN.*WHERE.*IS\s+NULL/is,
            hint: "SELECT u.name FROM users u LEFT JOIN orders o ON u.id = o.user_id WHERE o.id IS NULL;"
        },
        {
            id: 3,
            description: 'Use COALESCE to replace NULL with 0',
            completed: false,
            regex: /COALESCE/i,
            hint: "SELECT u.name, COALESCE(o.total, 0) FROM users u LEFT JOIN orders o ON u.id = o.user_id;"
        },
        {
            id: 4,
            description: 'RIGHT JOIN orders and users',
            completed: false,
            regex: /RIGHT\s+(OUTER\s+)?JOIN/i,
            hint: "SELECT * FROM users u RIGHT JOIN orders o ON u.id = o.user_id;"
        },
        {
            id: 5,
            description: 'FULL OUTER JOIN to get all records',
            completed: false,
            regex: /FULL\s+(OUTER\s+)?JOIN/i,
            hint: "SELECT * FROM users u FULL OUTER JOIN orders o ON u.id = o.user_id;"
        },
        {
            id: 6,
            description: 'LEFT JOIN with COUNT to include zero counts',
            completed: false,
            regex: /LEFT\s+JOIN.*COUNT/is,
            hint: "SELECT u.name, COUNT(o.id) FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id, u.name;"
        },
        {
            id: 7,
            description: 'LEFT JOIN with SUM and COALESCE',
            completed: false,
            regex: /LEFT\s+JOIN.*SUM.*COALESCE|LEFT\s+JOIN.*COALESCE.*SUM/is,
            hint: "SELECT u.name, COALESCE(SUM(o.total), 0) FROM users u LEFT JOIN orders o ON u.id = o.user_id GROUP BY u.id, u.name;"
        },
        {
            id: 8,
            description: 'Compare INNER vs LEFT JOIN results',
            completed: false,
            regex: /INNER\s+JOIN.*LEFT\s+JOIN|LEFT\s+JOIN.*INNER\s+JOIN/is,
            hint: "Run both and compare: INNER JOIN vs LEFT JOIN"
        }
    ],
    files: [
        {
            name: 'outer_joins.sql',
            language: 'sql',
            content: `-- OUTER JOINs Lab

-- Use tables from previous lab or recreate them

-- TODO: LEFT JOIN users and orders (includes all users)


-- TODO: Find users with NO orders (WHERE o.id IS NULL)


-- TODO: Use COALESCE to replace NULL total with 0


-- TODO: RIGHT JOIN (less common, but practice it)


-- TODO: FULL OUTER JOIN to see all records


-- TODO: LEFT JOIN with COUNT (shows 0 for users with no orders)


-- TODO: LEFT JOIN with SUM and COALESCE


-- TODO: Run INNER JOIN and LEFT JOIN side by side to compare

`
        }
    ]
};
