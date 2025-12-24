import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab1Ignore = {
    id: 'git-2-lab-ignore',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Hidden in Plain Sight 🕵️',
    duration: '20 min',
    content: `
# Lab: Hidden in Plain Sight 🕵️

Welcome to the shadows. In this lab, you will learn how to keep a repository clean by mastering the art of the \`.gitignore\` file. You are working on a modern web application that is full of files that **should never** be in version control.

## The Project Structure
Your workspace contains:
*   \`/src\`: Source code (Must be tracked).
*   \`/dist\`: Compiled production code (Ignore).
*   \`debug.log\`: Temporary log files (Ignore).
*   \`.env\`: Secret API keys (Ignore - CRITICAL).
*   \`config/settings.json\`: Project configuration (Must be tracked).
*   \`config/local_dev.json\`: Your personal dev settings (Ignore).

---

## Your Mission

### Task 1: Create the Protocol
Create a new file named \`.gitignore\` in the root of your project.

### Task 2: Silence the Logs
Add a rule to ignore all files ending in \`.log\`.

### Task 3: Seal the Vault
Add a rule to ignore the \`.env\` file. This is for security!

### Task 4: Ignore the Noise
Ignore the entire \`dist/\` directory and any files inside the \`config/\` folder that start with \`local_\`.

---

## Helpful Commands
*   \`touch .gitignore\`: Create the file.
*   \`git status\`: Check which files Git is still watching.
*   \`git check-ignore -v <file>\`: Debug why a file is ignored.
`,
    files: [
        { name: 'src/app.js', content: 'console.log("App Running");' },
        { name: 'src/utils.js', content: 'export const sum = (a, b) => a + b;' },
        { name: 'dist/bundle.js', content: '// Minified Production Code' },
        { name: 'debug.log', content: 'Error: Connection failed at 10:00AM' },
        { name: '.env', content: 'DB_PASSWORD=secret_master_key_123' },
        { name: 'config/settings.json', content: '{ "theme": "dark" }' },
        { name: 'config/local_dev.json', content: '{ "debug_mode": true }' }
    ],
    tasks: [
        {
            id: 'create-gitignore',
            description: 'Create a .gitignore file in the project root',
            regex: 'EXISTS:.gitignore'
        },
        {
            id: 'ignore-logs',
            description: 'Ignore all .log files',
            regex: 'FILE:.gitignore,MATCH:.*\\.log.*'
        },
        {
            id: 'ignore-env',
            description: 'Ignore the .env file',
            regex: 'FILE:.gitignore,MATCH:\\.env'
        },
        {
            id: 'ignore-dist',
            description: 'Ignore the dist/ directory',
            regex: 'FILE:.gitignore,MATCH:dist/.*'
        },
        {
            id: 'ignore-local-config',
            description: 'Ignore any local_ config files in the config directory',
            regex: 'FILE:.gitignore,MATCH:config/local_.*'
        }
    ]
};
