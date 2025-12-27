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
            id: 1,
            description: 'Check current status to see all untracked files',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Pre-ignore Check',
                strategy: 'See which files Git is currently tracking before creating .gitignore.',
                solution: 'git status'
            }
        },
        {
            id: 2,
            description: 'Create .gitignore file: touch .gitignore',
            completed: false,
            regex: /\s*touch\s+\.gitignore\s*/,
            hint: {
                concept: 'Creating .gitignore',
                strategy: 'Use touch command to create the file.',
                solution: 'touch .gitignore'
            }
        },
        {
            id: 3,
            description: 'Add *.log to ignore all log files',
            completed: false,
            regex: /\*\.log/,
            hint: {
                concept: 'Wildcard Patterns',
                strategy: 'Use * as wildcard to match any filename ending in .log.',
                solution: 'echo "*.log" >> .gitignore'
            }
        },
        {
            id: 4,
            description: 'Add .env to ignore environment secrets',
            completed: false,
            regex: /\.env/,
            hint: {
                concept: 'Security Ignore',
                strategy: 'NEVER commit .env files - they contain secrets!',
                solution: 'echo ".env" >> .gitignore'
            }
        },
        {
            id: 5,
            description: 'Add dist/ to ignore the build directory',
            completed: false,
            regex: /dist\//,
            hint: {
                concept: 'Directory Ignore',
                strategy: 'Trailing slash indicates a directory.',
                solution: 'echo "dist/" >> .gitignore'
            }
        },
        {
            id: 6,
            description: 'Add node_modules/ to ignore dependencies',
            completed: false,
            regex: /node_modules\//,
            hint: {
                concept: 'Dependencies',
                strategy: 'Never commit node_modules - use package.json instead.',
                solution: 'echo "node_modules/" >> .gitignore'
            }
        },
        {
            id: 7,
            description: 'Add config/local_* to ignore local configs',
            completed: false,
            regex: /config\/local_/,
            hint: {
                concept: 'Pattern Matching',
                strategy: 'Combine path with wildcard for specific patterns.',
                solution: 'echo "config/local_*" >> .gitignore'
            }
        },
        {
            id: 8,
            description: 'Verify ignored files with git status',
            completed: false,
            regex: /\s*git\s+status\s*/,
            hint: {
                concept: 'Verification',
                strategy: 'Ignored files should no longer appear in git status.',
                solution: 'git status'
            }
        }
    ]
};
