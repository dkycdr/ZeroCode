
import { unit1Intro } from './unit-1-intro.js';
import { unit2Crud } from './unit-2-crud.js';
import { unit3Joins } from './unit-3-joins.js';
import { unit4Design } from './unit-4-design.js';
import { unit5Project } from './unit-5-project.js';

export const mysqlCourse = {
    id: 'mysql',
    title: 'MySQL - Relational Database Fundamentals',
    description: 'Master relational databases with MySQL for data storage and retrieval.',
    units: [
        unit1Intro,
        unit2Crud,
        unit3Joins,
        unit4Design,
        unit5Project
    ]
};
