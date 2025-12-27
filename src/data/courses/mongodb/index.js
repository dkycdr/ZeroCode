
import { unit1Intro } from './unit-1-intro.js';
import { unit2CRUD } from './unit-2-crud.js';
import { unit3Mongoose } from './unit-3-mongoose.js';
import { unit4Relationships } from './unit-4-relationships.js';
import { unit5Aggregation } from './unit-5-aggregation.js';
import { unit6Project } from './unit-6-project.js';

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
