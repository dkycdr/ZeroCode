import { unit1Introduction } from './unit-1-introduction';
import { unit2BasicCommands } from './unit-2-basic-commands';
import { unit3Github } from './unit-3-github';
import { unit4Project } from './unit-4-project';
import { unit5BranchingMerging } from './unit-5-branching-merging';
import { unit6Remote } from './unit-6-remote';
import { unit7Collaboration } from './unit-7-collaboration';
import { unit8RebaseCherrypick } from './unit-8-rebase-cherrypick';
import { unit9StashClean } from './unit-9-stash-clean';
import { unit10HooksAutomation } from './unit-10-hooks-automation';
import { unit11AdvancedWorkflows } from './unit-11-advanced-workflows';

export const gitCourse = {
    id: 'git',
    title: 'Git & GitHub - Professional Version Control',
    description: 'Master the industry standard for version control. From basic commits to advanced rebasing workflows.',
    icon: 'git',
    difficulty: 'Beginner',
    duration: '20 hours',
    units: [
        unit1Introduction,
        unit2BasicCommands,
        unit3Github,
        unit4Project,
        unit5BranchingMerging,
        unit6Remote,
        unit7Collaboration,
        unit8RebaseCherrypick,
        unit9StashClean,
        unit10HooksAutomation,
        unit11AdvancedWorkflows
    ]
};
