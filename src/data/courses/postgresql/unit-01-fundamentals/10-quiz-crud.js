
import { CONTENT_TYPES } from '../../../curriculumStructure';

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
