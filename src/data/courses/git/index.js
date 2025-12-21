import { unit1Introduction } from './unit-1-introduction';
import { unit2BasicCommands } from './unit-2-basic-commands';
import { unit3Github } from './unit-3-github';
import { unit4Project } from './unit-4-project';
import { unit5BranchingMerging } from './unit-5-branching-merging';
import { unit6Collaboration } from './unit-6-collaboration';
import { unit7RebaseCherrypick } from './unit-7-rebase-cherrypick';
import { unit8StashClean } from './unit-8-stash-clean';
import { unit9HooksAutomation } from './unit-9-hooks-automation';
import { unit10AdvancedWorkflows } from './unit-10-advanced-workflows';

export const gitCourse = {
    id: 'git',
    title: 'Git Version Control',
    description: 'Master the industry standard for version control. From basic commits to advanced rebasing workflows.',
    icon: 'git',
    difficulty: 'Beginner',
    duration: '20 hours',
    units: [
        unit1Introduction,
        unit2BasicCommands,
        unit3Github,
        unit5BranchingMerging,
        unit5Remote,
        unit6Collaboration,
        unit7RebaseCherrypick,
        unit8StashClean,
        unit9HooksAutomation,
        unit10AdvancedWorkflows
    ]
};
