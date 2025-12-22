
import { unit1Intro } from './unit-1-intro.js';
import { unit2Actions } from './unit-2-actions.js';
import { unit3Docker } from './unit-3-docker.js';
import { unit4Compose } from './unit-4-compose.js';
import { unit5Deploy } from './unit-5-deploy.js';
import { unit6Project } from './unit-6-project.js';

export default {
    id: 'cicd',
    title: 'CI/CD & DevOps',
    description: 'Automate testing, building, and deployment with GitHub Actions and Docker.',
    units: [
        unit1Intro,
        unit2Actions,
        unit3Docker,
        unit4Compose,
        unit5Deploy,
        unit6Project
    ]
};
