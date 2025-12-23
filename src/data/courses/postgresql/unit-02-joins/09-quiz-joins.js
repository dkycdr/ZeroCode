
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlQuiz3 = {
    id: 'postgresql-2-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: JOIN Mastery',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What does INNER JOIN return?',
            options: [
                'All rows from both tables',
                'Only matching rows from both tables',
                'All rows from left table',
                'All rows from right table'
            ],
            correctIndex: 1,
            explanation: 'INNER JOIN returns ONLY rows that have matching values in both tables based on the join condition.'
        },
        {
            id: 'q2',
            question: 'What is the difference between LEFT JOIN and RIGHT JOIN?',
            options: [
                'No difference, just different syntax',
                'LEFT keeps all from left table, RIGHT keeps all from right table',
                'LEFT is faster than RIGHT',
                'RIGHT is deprecated'
            ],
            correctIndex: 1,
            explanation: 'LEFT JOIN returns all rows from the left table plus matches from right. RIGHT JOIN returns all from right plus matches from left.'
        },
        {
            id: 'q3',
            question: 'How do you find users with NO orders using LEFT JOIN?',
            options: [
                'WHERE orders.total = 0',
                'WHERE orders.id IS NULL',
                'WHERE users.id NOT IN orders',
                'HAVING COUNT(orders) = 0'
            ],
            correctIndex: 1,
            explanation: 'LEFT JOIN users with orders, then WHERE orders.id IS NULL finds users without matching orders (NULL in joined columns).'
        },
        {
            id: 'q4',
            question: 'What does CROSS JOIN do?',
            options: [
                'Joins tables diagonally',
                'Returns Cartesian product (all combinations)',
                'Joins only NULL values',
                'Same as INNER JOIN'
            ],
            correctIndex: 1,
            explanation: 'CROSS JOIN returns the Cartesian product - every row from first table combined with every row from second table.'
        },
        {
            id: 'q5',
            question: 'What is a self JOIN used for?',
            options: [
                'Joining a table to itself',
                'Verifying data integrity',
                'Optimizing performance',
                'Creating backups'
            ],
            correctIndex: 0,
            explanation: 'Self JOIN joins a table to itself, useful for hierarchical data like employees and their managers.'
        },
        {
            id: 'q6',
            question: 'What does a foreign key do?',
            options: [
                'Speeds up queries',
                'Creates relationship between tables',
                'Encrypts data',
                'Prevents duplicates'
            ],
            correctIndex: 1,
            explanation: 'Foreign key creates a relationship between tables by referencing the primary key of another table.'
        },
        {
            id: 'q7',
            question: 'When filtering with JOIN, what\'s the difference between ON and WHERE?',
            options: [
                'No difference',
                'ON filters during join, WHERE filters result',
                'WHERE is faster',
                'ON is deprecated'
            ],
            correctIndex: 1,
            explanation: 'ON conditions filter during the join process (affects matching). WHERE filters the final result after joining.'
        },
        {
            id: 'q8',
            question: 'How do you join three tables?',
            options: [
                'Use three separate SELECT statements',
                'Join first two, then JOIN the third',
                'Not possible in one query',
                'Use UNION instead'
            ],
            correctIndex: 1,
            explanation: 'Chain JOIN clauses: SELECT * FROM table1 JOIN table2 ON ... JOIN table3 ON ...'
        },
        {
            id: 'q9',
            question: 'What does FULL OUTER JOIN return?',
            options: [
                'Only matching rows',
                'All rows from left table',
                'All rows from both tables',
                'No rows'
            ],
            correctIndex: 2,
            explanation: 'FULL OUTER JOIN returns all rows from both tables, with NULLs where there\'s no match.'
        },
        {
            id: 'q10',
            question: 'Best practice for JOIN performance?',
            options: [
                'Always use RIGHT JOIN',
                'Index foreign key columns',
                'Never use WHERE with JOIN',
                'Use CROSS JOIN'
            ],
            correctIndex: 1,
            explanation: 'Indexing foreign key columns significantly improves JOIN performance by speeding up lookups.'
        }
    ]
};

export const postgresqlQuiz4 = {
    id: 'postgresql-2-quiz-2',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: Advanced Queries',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What does GROUP BY do?',
            options: [
                'Groups all rows into one',
                'Splits rows into groups for aggregation',
                'Sorts rows alphabetically',
                'Filters NULL values'
            ],
            correctIndex: 1,
            explanation: 'GROUP BY divides rows into groups based on column values, then applies aggregate functions to each group.'
        },
        {
            id: 'q2',
            question: 'What is the difference between WHERE and HAVING?',
            options: [
                'No difference',
                'WHERE filters rows, HAVING filters groups',
                'HAVING is faster',
                'WHERE is deprecated'
            ],
            correctIndex: 1,
            explanation: 'WHERE filters individual rows before grouping. HAVING filters groups after aggregation.'
        },
        {
            id: 'q3',
            question: 'What does COUNT(*) return vs COUNT(column)?',
            options: [
                'Same thing',
                'COUNT(*) includes NULLs, COUNT(column) doesn\'t',
                'COUNT(column) is faster',
                'COUNT(*) is deprecated'
            ],
            correctIndex: 1,
            explanation: 'COUNT(*) counts all rows including NULLs. COUNT(column) counts only non-NULL values in that column.'
        },
        {
            id: 'q4',
            question: 'What is a subquery?',
            options: [
                'A query that runs faster',
                'A query nested inside another query',
                'A query with GROUP BY',
                'A query with JOIN'
            ],
            correctIndex: 1,
            explanation: 'Subquery is a query nested inside another query, used for filtering, calculations, or creating derived tables.'
        },
        {
            id: 'q5',
            question: 'What advantage does CTE (WITH clause) provide?',
            options: [
                'Faster execution',
                'Better readability and reusability',
                'Automatic indexing',
                'Data encryption'
            ],
            correctIndex: 1,
            explanation: 'CTEs make complex queries more readable by naming intermediate results. They can also be referenced multiple times.'
        },
        {
            id: 'q6',
            question: 'What does UNION do vs UNION ALL?',
            options: [
                'Same thing',
                'UNION removes duplicates, UNION ALL keeps them',
                'UNION ALL is slower',
                'UNION joins tables'
            ],
            correctIndex: 1,
            explanation: 'UNION combines results and removes duplicates. UNION ALL keeps all rows including duplicates (faster).'
        },
        {
            id: 'q7',
            question: 'What does ROW_NUMBER() window function do?',
            options: [
                'Counts total rows',
                'Assigns unique sequential number to each row',
                'Sums row values',
                'Deletes row numbers'
            ],
            correctIndex: 1,
            explanation: 'ROW_NUMBER() assigns a unique sequential integer to each row within a partition, ordered as specified.'
        },
        {
            id: 'q8',
            question: 'What is PARTITION BY used for in window functions?',
            options: [
                'Deletes partitions',
                'Divides rows into groups for separate calculations',
                'Creates database partitions',
                'Speeds up queries'
            ],
            correctIndex: 1,
            explanation: 'PARTITION BY divides rows into groups (partitions) where window function calculations are performed separately per group.'
        },
        {
            id: 'q9',
            question: 'What does CASE WHEN provide?',
            options: [
                'Error handling',
                'Conditional if/else logic in queries',
                'Transaction control',
                'Index creation'
            ],
            correctIndex: 1,
            explanation: 'CASE WHEN provides conditional if/else logic in SQL queries, like ternary operators in programming.'
        },
        {
            id: 'q10',
            question: 'What does COALESCE() do?',
            options: [
                'Combines strings',
                'Returns first non-NULL value from list',
                'Counts NULL values',
                'Converts types'
            ],
            correctIndex: 1,
            explanation: 'COALESCE() returns the first non-NULL value from its arguments, useful for providing default values.'
        }
    ]
};
