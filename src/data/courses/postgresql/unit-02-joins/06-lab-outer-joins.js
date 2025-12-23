
import { CONTENT_TYPES } from '../../../curriculumStructure';

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
