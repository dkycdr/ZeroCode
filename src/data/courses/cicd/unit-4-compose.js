
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Compose = {
    id: 'cicd-unit-4',
    title: 'Unit 4: Orchestration (Compose)',
    description: 'Run your App and Database together with one command.',
    items: [
        // 1. Deep Dive: Networking & Volumes
        {
            id: 'cicd-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Persistence & Networking 🕸️',
            duration: '15 min read',
            content: `
# Deep Dive: Persistence & Networking 🕸️

## 1. Ephemeral Filesystems
By default, if you delete a container, **all data inside it is gone**.
This is bad for Databases.

## 2. Volumes (The Solution)
We map a folder on the host (or a managed Docker Volume) to the container.
\`\`\`yaml
volumes:
  - postgres_data:/var/lib/postgresql/data
\`\`\`
Now, even if the DB container crashes, the data survives in \`postgres_data\`.

## 3. Magic DNS
In Docker Compose, service names are hostnames.
If your service is named \`db\`, your app connects to \`postgres://db:5432\`. No IP addresses needed!
            `
        },
        // 2. Lab: Compose File
        {
            id: 'cicd-4-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Docker Compose',
            duration: '35 min',
            content: `
# Lab 1: Docker Compose

Connect a Node API to a Postgres Database.

## The Mission
1.  **Service 1**: \`api\` (Build from current dir).
2.  **Service 2**: \`db\` (Use \`postgres:15-alpine\`).
3.  **Network**: Connect them (automatic in V2+).
4.  **Env**: Pass DB credentials to API.
5.  **Volume**: Persist DB data.

## Command
\`docker-compose up\` builds and starts everything.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'API Service: build: .',
                    completed: false,
                    regex: /api:\s*\n\s*build:\s*\./
                },
                {
                    id: 2,
                    description: 'DB Service: image: postgres',
                    completed: false,
                    regex: /image:\s*postgres/
                },
                {
                    id: 3,
                    description: 'Env: Define POSTGRES_PASSWORD',
                    completed: false,
                    regex: /POSTGRES_PASSWORD/
                },
                {
                    id: 4,
                    description: 'Volume: volumes: - db_data:/var/lib/postgresql/data',
                    completed: false,
                    regex: /volumes:\s*\n\s*-\s*\w+:.*postgresql\/data/
                }
            ],
            files: [
                {
                    name: 'docker-compose.yml',
                    language: 'yaml',
                    content: `version: '3.8'

services:
  # 1. API
  api:
    
    ports:
      - "3000:3000"
    environment:
      - DB_HOST=db

  # 2. DB
  db:
   
    environment:
        POSTGRES_USER: user
        # 3. Password
  
    # 4. Volume

volumes:
  db_data:
`
                }
            ]
        },

        // 3. Quiz
        {
            id: 'cicd-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Orchestration Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'How does the API talk to the DB in Compose?',
                    options: [
                        'Using localhost',
                        'Using the service name (e.g., "db") as hostname',
                        'It needs a static IP',
                        'It uses magic'
                    ],
                    correctIndex: 1,
                    explanation: 'Docker Compose sets up an internal DNS where service names resolve to container IPs.'
                },
                {
                    id: 'q2',
                    question: 'What happens to DB data if you don\'t use a Volume?',
                    options: [
                        'It is saved to the cloud',
                        'It is lost when container stops/removes',
                        'It is encrypted',
                        'Nothing'
                    ],
                    correctIndex: 1,
                    explanation: 'Container filesystems are ephemeral. Always use Volumes for stateful data.'
                }
            ]
        }
    ]
};
