
import { CONTENT_TYPES } from '../../../curriculumStructure';

export const postgresqlQuiz1 = {
    id: 'postgresql-1-quiz-1',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: PostgreSQL Basics',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'What is PostgreSQL?',
            options: [
                'A NoSQL database',
                'An open-source relational database (RDBMS)',
                'A programming language',
                'A web framework'
            ],
            correctIndex: 1,
            explanation: 'PostgreSQL is an advanced open-source relational database management system (RDBMS) known for ACID compliance and advanced features.'
        },
        {
            id: 'q2',
            question: 'Which data type is best for auto-increment IDs?',
            options: [
                'INTEGER',
                'BIGINT',
                'SERIAL',
                'UUID'
            ],
            correctIndex: 2,
            explanation: 'SERIAL auto-increments (1, 2, 3...) and is perfect for primary keys. It\'s essentially INTEGER with DEFAULT nextval(sequence).'
        },
        {
            id: 'q3',
            question: 'How do you create a database?',
            options: [
                'NEW DATABASE mydb;',
                'CREATE DATABASE mydb;',
                'MAKE DATABASE mydb;',
                'ADD DATABASE mydb;'
            ],
            correctIndex: 1,
            explanation: 'Use CREATE DATABASE database_name; to create a new database.'
        },
        {
            id: 'q4',
            question: 'What does PRIMARY KEY constraint do?',
            options: [
                'Makes column optional',
                'Ensures unique, non-NULL values',
                'Allows duplicate values',
                'Stores encrypted data'
            ],
            correctIndex: 1,
            explanation: 'PRIMARY KEY ensures each value is unique AND not NULL. It uniquely identifies each row.'
        },
        {
            id: 'q5',
            question: 'Which data type should you use for money/prices?',
            options: [
                'FLOAT',
                'REAL',
                'DECIMAL(10, 2)',
                'INTEGER'
            ],
            correctIndex: 2,
            explanation: 'DECIMAL is exact (no rounding errors) unlike FLOAT/REAL. DECIMAL(10, 2) allows up to 99999999.99.'
        },
        {
            id: 'q6',
            question: 'How do you insert data into a table?',
            options: [
                'ADD INTO users VALUES (...);',
                'INSERT INTO users VALUES (...);',
                'PUT INTO users VALUES (...);',
                'CREATE users VALUES (...);'
            ],
            correctIndex: 1,
            explanation: 'INSERT INTO table_name (columns) VALUES (values); is the syntax for inserting data.'
        },
        {
            id: 'q7',
            question: 'What does SELECT * mean?',
            options: [
                'Select nothing',
                'Select all rows',
                'Select all columns',
                'Delete all data'
            ],
            correctIndex: 2,
            explanation: '* means "all columns". SELECT * returns all columns from matching rows.'
        },
        {
            id: 'q8',
            question: 'What makes PostgreSQL ACID-compliant?',
            options: [
                'It uses acidic chemicals',
                'Atomicity, Consistency, Isolation, Durability',
                'Advanced, Complex, Integrated, Database',
                'Automatic Coding Interface Design'
            ],
            correctIndex: 1,
            explanation: 'ACID stands for Atomicity, Consistency, Isolation, Durability - guarantees for reliable transactions.'
        },
        {
            id: 'q9',
            question: 'What psql command lists all tables?',
            options: [
                '\\l',
                '\\dt',
                '\\d',
                '\\show'
            ],
            correctIndex: 1,
            explanation: '\\dt lists all tables. \\l lists databases, \\d describes a specific table.'
        },
        {
            id: 'q10',
            question: 'What is the RETURNING clause used for?',
            options: [
                'To return to previous query',
                'To get inserted/updated/deleted data back',
                'To undo changes',
                'To return error messages'
            ],
            correctIndex: 1,
            explanation: 'RETURNING is a PostgreSQL feature that returns the affected rows from INSERT/UPDATE/DELETE.'
        }
    ]
};

export const postgresqlQuiz2 = {
    id: 'postgresql-1-quiz-2',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: CRUD Mastery',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'How do you insert multiple rows in one statement?',
            options: [
                'INSERT INTO users VALUES (row1), (row2), (row3);',
                'INSERT users (row1) (row2) (row3);',
                'MULTI INSERT users VALUES ...;',
                'INSERT ALL users VALUES ...;'
            ],
            correctIndex: 0,
            explanation: 'Separate multiple value sets with commas: VALUES (row1), (row2), (row3);'
        },
        {
            id: 'q2',
            question: 'What does WHERE clause do in SELECT?',
            options: [
                'Sorts results',
                'Limits number of results',
                'Filters which rows to return',
                'Chooses which columns to return'
            ],
            correctIndex: 2,
            explanation: 'WHERE filters rows based on conditions. Only rows matching the condition are returned.'
        },
        {
            id: 'q3',
            question: 'What is the correct UPDATE syntax?',
            options: [
                'UPDATE users SET name = \'Alice\' WHERE id = 1;',
                'CHANGE users name = \'Alice\' WHERE id = 1;',
                'MODIFY users SET name = \'Alice\';',
                'SET users name = \'Alice\' WHERE id = 1;'
            ],
            correctIndex: 0,
            explanation: 'UPDATE table SET column = value WHERE condition; is the syntax.'
        },
        {
            id: 'q4',
            question: 'What is the difference between DELETE and TRUNCATE?',
            options: [
                'No difference',
                'DELETE is faster',
                'TRUNCATE is faster and resets SERIAL counters',
                'TRUNCATE allows WHERE clause'
            ],
            correctIndex: 2,
            explanation: 'TRUNCATE is faster (drops and recreates table) and resets SERIAL. DELETE is row-by-row and allows WHERE.'
        },
        {
            id: 'q5',
            question: 'What does LIKE \'%phone%\' match?',
            options: [
                'Exactly "phone"',
                'Starts with "phone"',
                'Contains "phone" anywhere',
                'Ends with "phone"'
            ],
            correctIndex: 2,
            explanation: '% matches any characters. %phone% matches "smartphone", "iPhone", "telephone", etc.'
        },
        {
            id: 'q6',
            question: 'How do you sort results in descending order?',
            options: [
                'ORDER BY column ASC',
                'ORDER BY column DESC',
                'SORT column DESC',
                'DESCENDING column'
            ],
            correctIndex: 1,
            explanation: 'ORDER BY column DESC sorts from highest to lowest (Z-A, 9-0). ASC is ascending (default).'
        },
        {
            id: 'q7',
            question: 'What does LIMIT 10 do?',
            options: [
                'Limits to 10 characters',
                'Returns only first 10 rows',
                'Limits column width',
                'Returns last 10 rows'
            ],
            correctIndex: 1,
            explanation: 'LIMIT N returns only the first N rows from the result.'
        },
        {
            id: 'q8',
            question: 'How do you check if a column is NULL?',
            options: [
                'WHERE column = NULL',
                'WHERE column == NULL',
                'WHERE column IS NULL',
                'WHERE NULL(column)'
            ],
            correctIndex: 2,
            explanation: 'Use IS NULL, never = NULL. NULL is special and requires IS NULL or IS NOT NULL.'
        },
        {
            id: 'q9',
            question: 'What does DISTINCT do?',
            options: [
                'Deletes duplicates',
                'Returns unique values only',
                'Sorts alphabetically',
                'Counts rows'
            ],
            correctIndex: 1,
            explanation: 'DISTINCT removes duplicate rows, returning only unique values.'
        },
        {
            id: 'q10',
            question: 'What does COUNT(*) return?',
            options: [
                'All columns',
                'Total number of rows',
                'Sum of all values',
                'Average of all values'
            ],
            correctIndex: 1,
            explanation: 'COUNT(*) counts the total number of rows in the result set.'
        }
    ]
};
