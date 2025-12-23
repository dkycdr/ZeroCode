
import { CONTENT_TYPES } from '../../../curriculumStructure';

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
