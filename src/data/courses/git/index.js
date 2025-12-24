import { unit1Introduction } from './unit-01-introduction/index.js';
import { unit2Workflow } from './unit-02-workflow/index.js';
import { unit3Branching } from './unit-03-branching/index.js';
import { unit4Remote } from './unit-04-remote/index.js';
import { unit5Advanced } from './unit-05-advanced/index.js';
import { unit4Project } from './unit-4-project.js';
import { unit7Collaboration } from './unit-7-collaboration.js';
import { unit10HooksAutomation } from './unit-10-hooks-automation.js';
import { unit06Team } from './unit-06-team/index.js';

export const gitCourse = {
    id: 'git',
    title: 'Git & GitHub - Professional Version Control',
    description: 'Master the industry standard for version control. From basic commits to advanced rebasing workflows.',
    icon: 'git',
    difficulty: 'Beginner',
    duration: '20 hours',
    units: [
        unit1Introduction,
        unit2Workflow,
        unit3Branching,
        unit4Remote,
        unit5Advanced,
        unit06Team,
        unit4Project,
        unit7Collaboration,
        unit10HooksAutomation
    ]
};
