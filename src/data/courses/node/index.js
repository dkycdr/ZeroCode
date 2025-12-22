import { unit1Intro } from './unit-1-intro';
import { unit2Modules } from './unit-2-modules';
import { unit3FileSystem } from './unit-3-filesystem';
import { unit4Events } from './unit-4-events';
import { unit5Http } from './unit-5-http';
import { unit6Express } from './unit-6-express';
import { unit7Middleware } from './unit-7-middleware';
import { unit8Rest } from './unit-8-rest';
import { unit9Database } from './unit-9-database';
import { unit10Auth } from './unit-10-auth';
import { unit11WebSockets } from './unit-11-websockets';
import { unit12Deploy } from './unit-12-deploy';
import { unit13Capstone } from './unit-13-capstone';

export const nodeCourse = {
    id: 'node',
    title: 'Node.js & Backend Architecture',
    description: 'Master the backend. From V8 internals to Scalable Microservices. The complete guide to server-side JavaScript.',
    icon: '🟢',
    difficulty: 'Intermediate',
    duration: '40 hours',
    units: [
        unit1Intro,
        unit2Modules,
        unit3FileSystem,
        unit4Events,
        unit5Http,
        unit6Express,
        unit7Middleware,
        unit8Rest,
        unit9Database,
        unit10Auth,
        unit11WebSockets,
        unit12Deploy,
        unit13Capstone
    ]
};
