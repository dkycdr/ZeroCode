
import { unit1Fundamentals } from './unit-01-fundamentals/index.js';
import { unit2Joins } from './unit-02-joins/index.js';

export const postgresqlCourse = {
    id: 'postgresql',
    title: 'PostgreSQL - Advanced Database Architecture',
    description: 'Master the world\'s most advanced open-source database',
    icon: 'postgresql',
    difficulty: 'Intermediate',
    duration: '15 hours',
    units: [
        unit1Fundamentals,
        unit2Joins
    ]
};


