
// ZeroCode: Unified Course System - COMPLETE EDITION
// All 16 courses with full content loaded from detailed directories

// Import detailed course structures
import { html5Course } from './courses/html5';
import { css3Course } from './courses/css3';
import { tailwindCourse } from './courses/tailwind';
import { gitCourse } from './courses/git';
import { jsBasicsCourse } from './courses/jsBasics';
import { jsEs6Course } from './courses/jsEs6'; // Ensure folder is jsEs6
import { domCourse } from './courses/dom';
import { reactCourse } from './courses/react';
import { vueCourse } from './courses/vue';
import { nodeCourse } from './courses/node';
import { expressCourse } from './courses/express';
import { phpCourse } from './courses/php';
import { mysqlCourse } from './courses/mysql'; // Ensure folder is mysql
import { postgresqlCourse } from './courses/postgresql';
import { mongodbCourse } from './courses/mongodb';
import { nextjsCourse } from './courses/nextjs';
import { cicdCourse } from './courses/cicd';
import { typescriptCourse } from './courses/typescript';
import { pythonCourse } from './courses/python';

export const LEVELS = {
    BEGINNER: {
        id: 'beginner',
        label: { id: 'New Recruit', en: 'New Recruit' },
        tagline: {
            id: 'Membangun fondasi web development dari nol',
            en: 'Static Web, Basic Logic, & Professional Workflow'
        },
        color: 'from-blue-600 to-blue-800',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-500',
        icon: '🎖️'
    },
    INTERMEDIATE: {
        id: 'intermediate',
        label: { id: 'Systems Engineer', en: 'Systems Engineer' },
        tagline: {
            id: 'Menguasai interaktivitas dan sistem backend',
            en: 'Interactivity, Frameworks, & Dynamic Data'
        },
        color: 'from-purple-600 to-purple-800',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-500',
        icon: '⚙️'
    },
    ADVANCED: {
        id: 'advanced',
        label: { id: 'Lead Architect', en: 'Lead Architect' },
        tagline: {
            id: 'Membangun aplikasi production-ready dengan standar industri',
            en: 'Scale, Types, & Industrial Production'
        },
        color: 'from-red-700 to-red-900',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-500',
        icon: '🏗️'
    }
};

const courses = {
    // LEVEL 1: NEW RECRUIT (BEGINNER)
    'html5': {
        ...html5Course,
        level: 'beginner',
        order: 1,
        // Short description overrides if needed, but the imported one should be good.
        // We preserve the 'Level' metadata here as the single source of truth for the curriculum structure.
    },
    'css3': {
        ...css3Course,
        level: 'beginner',
        order: 2,
    },
    'tailwind': {
        ...tailwindCourse,
        level: 'beginner',
        order: 3,
    },
    'git': {
        ...gitCourse,
        level: 'beginner',
        order: 4,
    },
    'js-basics': {
        ...jsBasicsCourse,
        level: 'beginner',
        order: 5,
    },
    'python': { // Assuming python folder exists and exports pythonCourse
        ...pythonCourse,
        level: 'beginner',
        order: 6,
    },

    // LEVEL 2: SYSTEMS ENGINEER (INTERMEDIATE)
    'js-es6': {
        ...jsEs6Course,
        level: 'intermediate',
        order: 7,
    },
    'typescript': {
        ...typescriptCourse,
        level: 'intermediate',
        order: 8,
    },
    'dom': {
        ...domCourse,
        level: 'intermediate',
        order: 9,
    },
    'react': {
        ...reactCourse,
        level: 'intermediate',
        order: 10,
    },
    'vue': {
        ...vueCourse,
        level: 'intermediate',
        order: 11,
    },
    'node': {
        ...nodeCourse,
        level: 'intermediate',
        order: 12,
    },

    // LEVEL 3: LEAD ARCHITECT (ADVANCED)
    'express': {
        ...expressCourse,
        level: 'advanced',
        order: 13,
    },
    'mongodb': {
        ...mongodbCourse,
        level: 'advanced',
        order: 14,
    },
    'postgresql': {
        ...postgresqlCourse,
        level: 'advanced',
        order: 15,
    },
    'php': {
        ...phpCourse,
        level: 'advanced',
        order: 16,
    },
    'mysql': {
        ...mysqlCourse,
        level: 'advanced',
        order: 17,
    },
    'nextjs': {
        ...nextjsCourse,
        level: 'advanced',
        order: 18,
    },
    'cicd': {
        ...cicdCourse,
        level: 'advanced',
        order: 19,
    }
};

// Helper functions
export const getCoursesByLevel = (level) => {
    return Object.entries(courses)
        .filter(([_, course]) => course.level === level)
        .sort((a, b) => a[1].order - b[1].order)
        .map(([id, course]) => ({ id, ...course }));
};

export const getCourse = (courseId) => {
    return courses[courseId] ? { id: courseId, ...courses[courseId] } : null;
};

export const checkPrerequisites = (courseId, completedCourses = []) => {
    const course = courses[courseId];
    if (!course) return false;
    // Assuming prerequisites are in the imported course object or we fallback to empty array
    const prereqs = course.prerequisites || [];
    return prereqs.every(prereq => completedCourses.includes(prereq));
};

export const getOverallProgress = (completedCourses = []) => {
    const total = Object.keys(courses).length;
    const completed = completedCourses.length;
    return {
        total,
        completed,
        percentage: Math.round((completed / total) * 100)
    };
};
