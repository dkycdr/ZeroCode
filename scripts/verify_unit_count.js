
// Fixed Unit Audit Script - No dependency on courses.js to avoid module resolution errors
import { html5Course } from '../src/data/courses/html5/index.js';
import { css3Course } from '../src/data/courses/css3/index.js';
import { tailwindCourse } from '../src/data/courses/tailwind/index.js';
import { gitCourse } from '../src/data/courses/git/index.js';
import { jsBasicsCourse } from '../src/data/courses/jsBasics/index.js';
import { jsEs6Course } from '../src/data/courses/jsEs6/index.js';
import { domCourse } from '../src/data/courses/dom/index.js';
import { reactCourse } from '../src/data/courses/react/index.js';
import { vueCourse } from '../src/data/courses/vue/index.js';
import { nodeCourse } from '../src/data/courses/node/index.js';
import { expressCourse } from '../src/data/courses/express/index.js';
import { phpCourse } from '../src/data/courses/php/index.js';
import { mysqlCourse } from '../src/data/courses/mysql/index.js';
import { postgresqlCourse } from '../src/data/courses/postgresql/index.js';
import { mongodbCourse } from '../src/data/courses/mongodb/index.js';
import { nextjsCourse } from '../src/data/courses/nextjs/index.js';
import { cicdCourse } from '../src/data/courses/cicd/index.js';
import { typescriptCourse } from '../src/data/courses/typescript/index.js';
import { pythonCourse } from '../src/data/courses/python/index.js';

const allCourses = [
    html5Course, css3Course, tailwindCourse, gitCourse,
    jsBasicsCourse, jsEs6Course, domCourse, reactCourse, vueCourse,
    nodeCourse, expressCourse, phpCourse, mysqlCourse, postgresqlCourse,
    mongodbCourse, nextjsCourse, cicdCourse, typescriptCourse, pythonCourse
];

let totalUnits = 0;
let detailedLog = [];

allCourses.forEach(course => {
    let courseUnits = 0;
    if (course.units) {
        if (Array.isArray(course.units)) {
            courseUnits = course.units.length;
        } else {
            courseUnits = Object.keys(course.units).length;
        }
    } else if (course.tasks) {
        // Flat course assumption
        courseUnits = 1;
    }

    totalUnits += courseUnits;
    detailedLog.push(`${course.id || course.title}: ${courseUnits} units`);
});

console.log("--- UNIT AUDIT REPORT ---");
detailedLog.forEach(l => console.log(l));
console.log("-------------------------");
console.log(`TOTAL UNITS DETECTED: ${totalUnits}`);
