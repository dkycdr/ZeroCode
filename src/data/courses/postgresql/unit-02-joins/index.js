
import { postgresqlDoc5 } from './01-doc-joins';
import { postgresqlDoc6 } from './02-doc-aggregates';
import { postgresqlDoc7 } from './03-doc-subqueries';
import { postgresqlDoc8 } from './04-doc-advanced';
import { postgresqlLab5 } from './05-lab-inner-join';
import { postgresqlLab6 } from './06-lab-outer-joins';
import { postgresqlLab7 } from './07-lab-aggregates';
import { postgresqlLab8 } from './08-lab-subqueries';
import { postgresqlQuiz3 } from './09-quiz-joins';
import { postgresqlQuiz4 } from './10-quiz-advanced';

export const unit2Joins = {
    id: 'postgresql-unit-2',
    title: 'Unit 2: Joins & Advanced Queries',
    description: 'Master JOINs, aggregates, subqueries, and advanced SQL techniques',
    items: [
        // Informational (Deep Dives)
        postgresqlDoc5,
        postgresqlDoc6,
        postgresqlDoc7,
        postgresqlDoc8,
        // Lessons (Labs)
        postgresqlLab5,
        postgresqlLab6,
        postgresqlLab7,
        postgresqlLab8,
        // Quizzes
        postgresqlQuiz3,
        postgresqlQuiz4
    ]
};
