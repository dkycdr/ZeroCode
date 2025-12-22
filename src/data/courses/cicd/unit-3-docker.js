
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit3Docker = {
    id: 'cicd-unit-3',
    title: 'Unit 3: Docker Containers',
    description: 'Solve "It works on my machine" forever. Package apps with Docker.',
    items: [
        // 1. Deep Dive: Containers vs VMs
        {
            id: 'cicd-3-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Containers vs VMs 📦',
            duration: '15 min read',
            content: `
# Deep Dive: Containers vs VMs 📦

## 1. Virtual Machines (The Old Way)
A VM emulates an ENTIRE computer (Hardware -> OS -> App).
*   **Heavy**: Needs GBs of RAM just for the OS.
*   **Slow**: Booting Windows/Linux takes minutes.

## 2. Containers (The Docker Way)
A container shares the **Host Kernel**. It only packages the specific libs/binaries the app needs.
*   **Light**: MBs in size.
*   **Fast**: Starts in milliseconds.

## 3. Images vs Containers
*   **Image**: The Recipe (Class). Read-only.
*   **Container**: The Cake (Object). Runnable instance.
            `
        },
        // 2. Lab: The Dockerfile
        {
            id: 'cicd-3-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: The Dockerfile',
            duration: '35 min',
            content: `
# Lab 1: The Dockerfile

Build a container for a Node.js application.

## The Mission
1.  **Base**: Use \`node:20-alpine\` (Smallest secure image).
2.  **Workdir**: Set \`/app\`.
3.  **Deps**: Copy \`package.json\` and run \`npm ci\`.
4.  **Source**: Copy app code.
5.  **Expose**: Port 3000.

## Layer Caching
Order matters! We copy \`package.json\` *before* the rest of the code so Docker can cache the \`npm install\` step if dependencies haven't changed.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Base: FROM node:20-alpine',
                    completed: false,
                    regex: /FROM\s+node:20-alpine/
                },
                {
                    id: 2,
                    description: 'Deps: COPY package*.json ./ followed by RUN npm ci',
                    completed: false,
                    regex: /COPY\s+package.*json[\s\S]*RUN\s+npm\s+(ci|install)/
                },
                {
                    id: 3,
                    description: 'Source: COPY . .',
                    completed: false,
                    regex: /COPY\s+\.\s+\./
                },
                {
                    id: 4,
                    description: 'Command: CMD ["npm", "start"]',
                    completed: false,
                    regex: /CMD\s+\[/
                }
            ],
            files: [
                {
                    name: 'Dockerfile',
                    language: 'dockerfile',
                    content: `# Dockerfile LAB

# 1. Base Image


# 2. Workdir /app


# 3. Dependencies


# 4. Source Code


# 5. Start Command
`
                }
            ]
        },

        // 3. Quiz
        {
            id: 'cicd-3-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Docker Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why do we copy package.json BEFORE the source code?',
                    options: [
                        'It is required by law',
                        'To leverage Docker layer caching for dependencies',
                        'Because package.json is larger',
                        'It makes the build slower'
                    ],
                    correctIndex: 1,
                    explanation: 'Docker caches layers. If package.json hasn\'t changed, it reuses the expensive `npm install` layer.'
                },
                {
                    id: 'q2',
                    question: 'What is the standard name for the build instruction file?',
                    options: [
                        'docker.yaml',
                        'Containerfile',
                        'Dockerfile',
                        'build.json'
                    ],
                    correctIndex: 2,
                    explanation: 'By convention (and default), checking for a file named `Dockerfile` (no extension).'
                }
            ]
        }
    ]
};
