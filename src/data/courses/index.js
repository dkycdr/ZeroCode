import { html5Course } from './html5/index';
import { jsBasicsCourse } from './jsBasics/index';
import { css3Course } from './css3/index';
import { reactCourse } from './react/index';
import { gitCourse } from './git/index';
import { tailwindCourse } from './tailwind/index';
import { domCourse } from './dom/index';
import { phpCourse } from './php/index';
import { mysqlCourse } from './mysql/index';
import { pythonCourse } from './python';
import { vueCourse } from './vue/index';
import { jsEs6Course } from './jsEs6/index';
import { typescriptCourse } from './typescript';
import { nodeCourse } from './node';
import { mongodbCourse } from './mongodb/index';
import { nextjsCourse } from './nextjs';
import { cicdCourse } from './cicd/index';
import { expressCourse } from './express/index';
import { postgresqlCourse } from './postgresql/index';
import { CONTENT_TYPES, courses as courseMeta, LEVELS } from '../curriculumStructure';

// All course content
export const courseContent = {
    'html5': html5Course,
    'css3': css3Course,
    'git': gitCourse,
    'tailwind': tailwindCourse,
    'js-basics': jsBasicsCourse,
    'dom': domCourse,
    'js-es6': jsEs6Course,
    'react': reactCourse,
    'php': phpCourse,
    'mysql': mysqlCourse,
    'python': pythonCourse,
    'vue': vueCourse,
    'typescript': typescriptCourse,
    'node': nodeCourse,
    'mongodb': mongodbCourse,
    'nextjs': nextjsCourse,
    'cicd': cicdCourse,
    'express': expressCourse,
    'postgresql': postgresqlCourse,
};

// Get full course with content
export const getCourseWithContent = (courseId) => {
    const meta = courseMeta[courseId];
    const content = courseContent[courseId];

    if (!meta) return null;

    return {
        ...meta,
        ...content,
        units: content?.units || []
    };
};

// Get specific unit from course
export const getUnit = (courseId, unitId) => {
    const course = courseContent[courseId];
    if (!course) return null;
    return course.units.find(u => u.id === unitId);
};

// Get specific item (lesson/quiz/project/info) from course
export const getItem = (courseId, itemId) => {
    const course = courseContent[courseId];
    if (!course) return null;

    for (const unit of course.units) {
        const item = unit.items.find(i => i.id === itemId);
        if (item) return { ...item, unitId: unit.id, unitTitle: unit.title };
    }
    return null;
};

// Get next item in course
export const getNextItem = (courseId, currentItemId) => {
    const course = courseContent[courseId];
    if (!course) return null;

    let foundCurrent = false;
    for (const unit of course.units) {
        for (const item of unit.items) {
            if (foundCurrent) return { ...item, unitId: unit.id };
            if (item.id === currentItemId) foundCurrent = true;
        }
    }
    return null;
};

// Get previous item in course
export const getPrevItem = (courseId, currentItemId) => {
    const course = courseContent[courseId];
    if (!course) return null;

    let prevItem = null;
    for (const unit of course.units) {
        for (const item of unit.items) {
            if (item.id === currentItemId) return prevItem;
            prevItem = { ...item, unitId: unit.id };
        }
    }
    return null;
};

// Calculate course progress
export const getCourseProgress = (courseId, completedItems = []) => {
    const course = courseContent[courseId];
    if (!course) return { total: 0, completed: 0, percentage: 0 };

    let total = 0;
    let completed = 0;

    for (const unit of course.units) {
        for (const item of unit.items) {
            total++;
            if (completedItems.includes(item.id)) completed++;
        }
    }

    return {
        total,
        completed,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    };
};

// Get flat list of all items in course
export const getAllItems = (courseId) => {
    const course = courseContent[courseId];
    if (!course) return [];

    const items = [];
    for (const unit of course.units) {
        for (const item of unit.items) {
            items.push({
                ...item,
                unitId: unit.id,
                unitTitle: unit.title
            });
        }
    }
    return items;
};

export { CONTENT_TYPES, LEVELS, courseMeta as courses };
