import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2BasicCommands = {
    id: 'git-unit-2',
    title: 'Unit 2: Identity & Configuration',
    description: 'Configure your Git environment and understand commit authorship.',
    items: [
        // 1. Deep Dive: Global vs Local
        {
            id: 'git-2-config-deep-dive',
            type: 'informational',
            title: 'Deep Dive: The Configuration Hierarchy',
            duration: '10 min',
            content: `
# Git Configuration Levels
Git uses a hierarchy of configuration files to determine how it should behave. When you run \`git config\`, you are modifying one of these files.

## 1. System Level (\`/etc/gitconfig\`)
Values applied to every user on the system and all their repositories.
*   **Flag**: \`--system\`

## 2. Global Level (\`~/.gitconfig\`)
Values specific to **you**, the user. This is where you store your identity (name/email) so it applies to all your projects.
*   **Flag**: \`--global\`

## 3. Local Level (\`.git/config\`)
Values specific to the **single repository** you are currently in. This overrides global settings.
*   **Flag**: \`--local\` (default if no flag used)

> [!TIP]
> Git always uses the most specific setting. Local overrides Global, which overrides System.
            `
        },
        // 2. Lab: Setting Identity
        {
            id: 'git-2-lab-identity',
            type: 'lesson',
            title: 'Lab: Who Are You?',
            duration: '15 min',
            files: [
                { name: 'config_check.txt', content: 'Checking system status...' }
            ],
            content: `
# Mission: Establish Identity
Git attaches a name and email to every commit. This is crucial for history tracking in collaborative projects.

## Objectives
1.  Set your global user name.
2.  Set your global user email.
3.  Verify the settings with \`--list\`.

## Commands
*   \`git config --global user.name "Your Name"\`
*   \`git config --global user.email "you@example.com"\`
*   \`git config --list\`
            `,
            tasks: [
                {
                    id: 'task1',
                    text: 'Set your global user name',
                    regex: '"user":{.*"name":".+"'
                },
                {
                    id: 'task2',
                    text: 'Set your global user email',
                    regex: '"user":{.*"email":".+"'
                }
            ]
        },
        // 3. Deep Dive: Getting Help
        {
            id: 'git-2-help-deep-dive',
            type: 'informational',
            title: 'Deep Dive: RTFM (Read The Manual)',
            duration: '5 min',
            content: `
# Consulting the Oracle
Git has comprehensive documentation built-in. You don't always need StackOverflow.

## The Help Command
You can request help for any command using three different ways:

1.  \`git help <verb>\`
2.  \`git <verb> --help\`
3.  \`man git-<verb>\`

Example:
\`\`\`bash
git help config
\`\`\`
This opens the manual page (manpage) which details every single flag and option available. It's dense, but it's the ultimate source of truth.
            `
        },
        // 4. Lab: Using Help & Status
        {
            id: 'git-2-lab-status',
            type: 'lesson',
            title: 'Lab: The Status Quo',
            duration: '10 min',
            files: [],
            content: `
# Mission: Situation Report
The \`git status\` command is your best friend. It tells you exactly what state your working directory is in.

## Objectives
1.  Initialize a repository.
2.  Run \`git status\` to see the empty state.
3.  Create a file using \`touch secret.txt\`.
4.  Run \`git status\` again to see it as "Untracked".

## Commands
*   \`git init\`
*   \`git status\`
*   \`touch <filename>\`
            `,
            tasks: [
                {
                    id: 'task1',
                    text: 'Initialize the repository',
                    regex: '"initialized":true'
                },
                {
                    id: 'task2',
                    text: 'Create a file named secret.txt',
                    regex: '"files":\\[.*"secret.txt".*\\]'
                }
            ]
        },
        // 5. Quiz
        {
            id: 'git-2-quiz',
            type: 'quiz',
            title: 'Unit 2 Assessment',
            questions: [
                {
                    id: 'q1',
                    text: 'Which config level applies to all projects for the current user?',
                    options: ['--system', '--local', '--global', '--root'],
                    correct: 2
                },
                {
                    id: 'q2',
                    text: 'If you set a local config user.name, will it override the global one?',
                    options: ['Yes', 'No', 'Only if the global one is empty', 'Git will error'],
                    correct: 0
                },
                {
                    id: 'q3',
                    text: 'How do you check your current configuration?',
                    options: ['git check', 'git config --list', 'git status', 'git show'],
                    correct: 1
                }
            ]
        }
    ]
};
