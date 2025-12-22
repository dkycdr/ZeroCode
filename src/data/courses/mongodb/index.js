
import { unit1Intro } from './unit-1-intro';
import { unit2CRUD } from './unit-2-crud';
import { unit3Mongoose } from './unit-3-mongoose';
import { unit4Relationships } from './unit-4-relationships';
import { unit5Aggregation } from './unit-5-aggregation';
import { unit6Project } from './unit-6-project';

export const mongodbCourse = {
    id: 'mongodb',
    title: 'MongoDB NoSQL Database',
    description: 'Master the most popular NoSQL database. Documents, Aggregations, and Mongoose Modeling.',
    icon: 'Mongodb',
    difficulty: 'Intermediate',
    units: [
        unit1Intro,
        unit2CRUD,
        unit3Mongoose,
        unit4Relationships,
        unit5Aggregation,
        unit6Project
    ]
};
