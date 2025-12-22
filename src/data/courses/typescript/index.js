import { unit1Fundamentals } from './unit-1-fundamentals';
import { unit2Interfaces } from './unit-2-interfaces';
import { unit3TypeSystem } from './unit-3-type-system';
import { unit4Generics } from './unit-4-generics';
import { unit5React } from './unit-5-react';
import { unit6Advanced } from './unit-6-advanced';
import { unit7Capstone } from './unit-7-capstone';

const typescriptCourse = {
    id: 'typescript',
    title: 'TypeScript Masterclass',
    description: 'Master static typing in JavaScript. Build robust, error-free applications with TypeScript 5+.',
    icon: 'ts', // Assuming there's a TS icon available or generic
    difficulty: 'Intermediate',
    duration: '25-30 hours',
    units: [
        unit1Fundamentals,
        unit2Interfaces,
        unit3TypeSystem,
        unit4Generics,
        unit5React,
        unit6Advanced,
        unit7Capstone
    ]
};

export default typescriptCourse;

