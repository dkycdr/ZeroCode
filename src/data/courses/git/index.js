import { unit0WhyGit } from './unit-0-why-git/index.js';
import { unit1Introduction } from './unit-01-introduction/index.js';
import { unit2Workflow } from './unit-02-workflow/index.js';
import { unit3Branching } from './unit-03-branching/index.js';
import { unit4Remote } from './unit-04-remote/index.js';
import { unit5Advanced } from './unit-05-advanced/index.js';
import { unit06Team } from './unit-06-team/index.js';

export const gitCourse = {
    id: 'git',
    title: 'Git & GitHub - Professional Version Control',
    description: 'Master the industry standard for version control. From basic commits to advanced rebasing workflows.',
    icon: 'git',
    difficulty: 'Beginner',
    duration: '20 hours',
    units: [
        unit0WhyGit,
        unit1Introduction,
        unit2Workflow,
        unit3Branching,
        unit4Remote,
        unit5Advanced,
        unit06Team
    ]
};
