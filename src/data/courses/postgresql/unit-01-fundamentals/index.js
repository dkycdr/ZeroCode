
import { postgresqlDoc1 } from './01-doc-intro';
import { postgresqlDoc2 } from './02-doc-datatypes';
import { postgresqlDoc3 } from './03-doc-crud';
import { postgresqlDoc4 } from './04-doc-queries';
import { postgresqlLab1 } from './05-lab-setup';
import { postgresqlLab2 } from './06-lab-tables';
import { postgresqlLab3 } from './07-lab-queries';
import { postgresqlLab4 } from './08-lab-updates';
import { postgresqlQuiz1 } from './09-quiz-basics';
import { postgresqlQuiz2 } from './10-quiz-crud';

export const unit1Fundamentals = {
    id: 'postgresql-unit-1',
    title: 'Unit 1: SQL Fundamentals',
    description: 'Master PostgreSQL basics: data types, CRUD, queries, and filtering',
    items: [
        // Informational (Deep Dives)
        postgresqlDoc1,
        postgresqlDoc2,
        postgresqlDoc3,
        postgresqlDoc4,
        // Lessons (Labs)
        postgresqlLab1,
        postgresqlLab2,
        postgresqlLab3,
        postgresqlLab4,
        // Quizzes
        postgresqlQuiz1,
        postgresqlQuiz2
    ]
};
