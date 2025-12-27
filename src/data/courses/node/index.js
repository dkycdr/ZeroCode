import { unit1Intro } from './unit-1-intro.js';
import { unit2Modules } from './unit-2-modules.js';
import { unit3FileSystem } from './unit-3-filesystem.js';
import { unit4Events } from './unit-4-events.js';
import { unit5Http } from './unit-5-http.js';
import { unit6Express } from './unit-6-express.js';
import { unit7Middleware } from './unit-7-middleware.js';
import { unit8Rest } from './unit-8-rest.js';
import { unit9Database } from './unit-9-database.js';
import { unit10Auth } from './unit-10-auth.js';
import { unit11WebSockets } from './unit-11-websockets.js';
import { unit12Deploy } from './unit-12-deploy.js';
import { unit13Capstone } from './unit-13-capstone.js';

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
