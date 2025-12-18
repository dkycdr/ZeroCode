// CI/CD & DevOps - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const cicdCourse = {
    id: 'cicd',
    title: 'CI/CD & DevOps',
    description: 'Automate testing, building, and deployment with GitHub Actions and Docker.',
    
    units: [
        {
            id: 'cicd-unit-1',
            title: 'Introduction to CI/CD',
            description: 'Understand continuous integration and deployment',
            items: [
                {
                    id: 'cicd-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is CI/CD?',
                    duration: '10 min read',
                    content: `
# What is CI/CD?

## Continuous Integration (CI)

**CI** is the practice of automatically testing and building code every time changes are pushed.

\`\`\`
Developer pushes code → Automated tests run → Build created → Report results
\`\`\`

## Continuous Deployment (CD)

**CD** automatically deploys code to production after passing all tests.

\`\`\`
Code passes tests → Automatically deployed → Live in production
\`\`\`

## Benefits

| Benefit | Description |
|---------|-------------|
| **Faster releases** | Deploy multiple times per day |
| **Fewer bugs** | Catch issues early with automated tests |
| **Consistent builds** | Same process every time |
| **Quick feedback** | Know immediately if something breaks |

## CI/CD Pipeline

\`\`\`
1. Code Push
   ↓
2. Build
   ↓
3. Test (Unit, Integration, E2E)
   ↓
4. Deploy to Staging
   ↓
5. Deploy to Production
\`\`\`

## Popular CI/CD Tools

- **GitHub Actions** - Built into GitHub
- **GitLab CI** - Built into GitLab
- **Jenkins** - Self-hosted, highly customizable
- **CircleCI** - Cloud-based
- **Travis CI** - Popular for open source
                    `
                },
                {
                    id: 'cicd-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'GitHub Actions Basics',
                    duration: '25 min',
                    content: `
# GitHub Actions

## What is GitHub Actions?

GitHub Actions is a CI/CD platform built into GitHub. It runs workflows based on events.

## Workflow File

Create \`.github/workflows/ci.yml\`:

\`\`\`yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
\`\`\`

## Key Concepts

### Events (Triggers)
\`\`\`yaml
on:
  push:           # On push
  pull_request:   # On PR
  schedule:       # Cron schedule
    - cron: '0 0 * * *'
  workflow_dispatch: # Manual trigger
\`\`\`

### Jobs
\`\`\`yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps: [...]
  
  deploy:
    needs: test  # Run after test job
    runs-on: ubuntu-latest
    steps: [...]
\`\`\`

### Steps
\`\`\`yaml
steps:
  - uses: actions/checkout@v4  # Use an action
  - name: Run script
    run: npm test              # Run command
  - name: Multi-line
    run: |
      npm install
      npm test
      npm build
\`\`\`

---

## Your Mission
Create a GitHub Actions workflow.
                    `,
                    tasks: [
                        { id: 1, description: 'Create workflow file at .github/workflows/ci.yml', completed: false, regex: /name:\s*CI/ },
                        { id: 2, description: 'Add trigger: on: push: branches: [main]', completed: false, regex: /on:\s*\n\s*push:/ },
                        { id: 3, description: 'Add job: jobs: build: runs-on: ubuntu-latest', completed: false, regex: /jobs:\s*\n\s*\w+:\s*\n\s*runs-on:/ },
                        { id: 4, description: 'Add checkout step: uses: actions/checkout@v4', completed: false, regex: /uses:\s*actions\/checkout/ },
                        { id: 5, description: 'Add npm test step: run: npm test', completed: false, regex: /run:\s*npm\s+test/ }
                    ],
                    files: [
                        { name: '.github/workflows/ci.yml', language: 'yaml', content: `# Create your CI workflow

name: CI

# Add triggers (on push to main)


# Add jobs

` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "my-app",
    "scripts": {
        "test": "jest",
        "build": "npm run compile",
        "lint": "eslint ."
    }
}` },
                        { name: 'README.md', language: 'markdown', content: `# CI/CD with GitHub Actions

## Workflow Location
.github/workflows/ci.yml

## Triggers
- Push to main branch
- Pull requests to main branch

## Jobs
1. Install dependencies
2. Run tests
3. Build project` }
                    ]
                },
                {
                    id: 'cicd-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'CI/CD Basics Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does CI stand for?',
                            options: ['Code Integration', 'Continuous Integration', 'Central Infrastructure', 'Cloud Instance'],
                            correctIndex: 1,
                            explanation: 'CI stands for Continuous Integration - automatically testing and building code on every push.'
                        },
                        {
                            id: 'q2',
                            question: 'Where do GitHub Actions workflows go?',
                            options: ['.github/actions/', '.github/workflows/', 'workflows/', '.actions/'],
                            correctIndex: 1,
                            explanation: 'GitHub Actions workflows are YAML files in the .github/workflows/ directory.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'cicd-unit-2',
            title: 'Advanced GitHub Actions',
            description: 'Environment variables, secrets, and matrix builds',
            items: [
                {
                    id: 'cicd-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Secrets & Environment Variables',
                    duration: '20 min',
                    content: `
# Secrets & Environment Variables

## Environment Variables

\`\`\`yaml
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      NODE_ENV: production
      API_URL: https://api.example.com
    
    steps:
      - name: Use env var
        run: echo $NODE_ENV
\`\`\`

## GitHub Secrets

Store sensitive data in repository settings:

1. Go to Settings → Secrets → Actions
2. Add new secret (e.g., \`DEPLOY_TOKEN\`)
3. Use in workflow:

\`\`\`yaml
steps:
  - name: Deploy
    env:
      TOKEN: \${{ secrets.DEPLOY_TOKEN }}
    run: ./deploy.sh
\`\`\`

## Matrix Builds

Test on multiple versions/platforms:

\`\`\`yaml
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16, 18, 20]
        os: [ubuntu-latest, windows-latest]
    
    steps:
      - uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
      - run: npm test
\`\`\`

## Caching Dependencies

\`\`\`yaml
steps:
  - uses: actions/cache@v3
    with:
      path: ~/.npm
      key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
      
  - run: npm ci
\`\`\`

---

## Your Mission
Add secrets and matrix builds to workflow.
                    `,
                    tasks: [
                        { id: 1, description: 'Add env variables: env: NODE_ENV: production', completed: false, regex: /env:\s*\n\s*\w+:/ },
                        { id: 2, description: 'Use secret: ${{ secrets.SECRET_NAME }}', completed: false, regex: /\$\{\{\s*secrets\.\w+\s*\}\}/ },
                        { id: 3, description: 'Add matrix strategy: strategy: matrix: node-version: [18, 20]', completed: false, regex: /strategy:\s*\n\s*matrix:/ },
                        { id: 4, description: 'Add caching: uses: actions/cache@v3', completed: false, regex: /uses:\s*actions\/cache/ }
                    ],
                    files: [
                        { name: '.github/workflows/ci.yml', language: 'yaml', content: `name: CI

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    # Add environment variables
    
    # Add matrix strategy for node versions
    
    steps:
      - uses: actions/checkout@v4
      
      # Add caching step
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - run: npm ci
      - run: npm test
      
  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      # Use secret for deployment
      - name: Deploy
        run: echo "Deploying..."
` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "my-app",
    "scripts": {
        "test": "jest",
        "build": "npm run compile"
    }
}` }
                    ]
                },
                {
                    id: 'cicd-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Advanced Actions Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'How do you access a secret in GitHub Actions?',
                            options: ['$SECRET_NAME', '${{ secrets.SECRET_NAME }}', 'secrets.SECRET_NAME', 'env.SECRET_NAME'],
                            correctIndex: 1,
                            explanation: 'Secrets are accessed using the ${{ secrets.SECRET_NAME }} syntax.'
                        },
                        {
                            id: 'q2',
                            question: 'What does matrix strategy do?',
                            options: ['Encrypts data', 'Runs job on multiple configurations', 'Creates backups', 'Monitors performance'],
                            correctIndex: 1,
                            explanation: 'Matrix strategy runs the same job with different configurations (e.g., multiple Node versions).'
                        }
                    ]
                }
            ]
        },

        {
            id: 'cicd-unit-3',
            title: 'Docker Basics',
            description: 'Containerize applications with Docker',
            items: [
                {
                    id: 'cicd-3-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is Docker?',
                    duration: '10 min read',
                    content: `
# What is Docker?

## Containers vs Virtual Machines

**Docker** packages applications with all dependencies into containers.

| Feature | VM | Container |
|---------|-----|-----------|
| Size | GBs | MBs |
| Startup | Minutes | Seconds |
| OS | Full OS | Shared kernel |
| Isolation | Complete | Process-level |

## Key Concepts

### Image
A template for creating containers (like a class in OOP).

### Container
A running instance of an image (like an object).

### Dockerfile
Instructions to build an image.

### Docker Hub
Registry for sharing images.

## Why Docker?

- **Consistency**: "Works on my machine" → Works everywhere
- **Isolation**: Each app has its own environment
- **Portability**: Run anywhere Docker is installed
- **Scalability**: Easy to scale with orchestration

## Basic Commands

\`\`\`bash
# Pull image
docker pull node:20

# Run container
docker run -p 3000:3000 my-app

# List containers
docker ps

# Stop container
docker stop <container-id>

# Build image
docker build -t my-app .
\`\`\`
                    `
                },
                {
                    id: 'cicd-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Creating Dockerfiles',
                    duration: '25 min',
                    content: `
# Creating Dockerfiles

## Basic Dockerfile

\`\`\`dockerfile
# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start command
CMD ["node", "server.js"]
\`\`\`

## Multi-Stage Build

\`\`\`dockerfile
# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]
\`\`\`

## .dockerignore

\`\`\`
node_modules
npm-debug.log
.git
.env
*.md
\`\`\`

## Docker Compose

\`\`\`yaml
# docker-compose.yml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgres://db:5432/mydb
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
\`\`\`

---

## Your Mission
Create a Dockerfile for a Node.js app.
                    `,
                    tasks: [
                        { id: 1, description: 'Set base image: FROM node:20-alpine', completed: false, regex: /FROM\s+node:/ },
                        { id: 2, description: 'Set working directory: WORKDIR /app', completed: false, regex: /WORKDIR\s+\/app/ },
                        { id: 3, description: 'Copy package files: COPY package*.json ./', completed: false, regex: /COPY\s+package\*\.json/ },
                        { id: 4, description: 'Install dependencies: RUN npm ci', completed: false, regex: /RUN\s+npm\s+(ci|install)/ },
                        { id: 5, description: 'Add start command: CMD ["node", "server.js"]', completed: false, regex: /CMD\s+\[/ }
                    ],
                    files: [
                        { name: 'Dockerfile', language: 'dockerfile', content: `# Create Dockerfile for Node.js app

# 1. Base image


# 2. Working directory


# 3. Copy package files


# 4. Install dependencies


# 5. Copy source code
COPY . .

# 6. Expose port
EXPOSE 3000

# 7. Start command

` },
                        { name: '.dockerignore', language: 'text', content: `node_modules
npm-debug.log
.git
.gitignore
.env
*.md
Dockerfile
.dockerignore` },
                        { name: 'server.js', language: 'javascript', content: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from Docker!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});` }
                    ]
                },
                {
                    id: 'cicd-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Docker Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is a Docker image?',
                            options: ['A running process', 'A template for containers', 'A virtual machine', 'A configuration file'],
                            correctIndex: 1,
                            explanation: 'A Docker image is a template that contains the application and all its dependencies. Containers are running instances of images.'
                        },
                        {
                            id: 'q2',
                            question: 'What does WORKDIR do in a Dockerfile?',
                            options: ['Creates a directory', 'Sets the working directory for subsequent commands', 'Copies files', 'Runs a command'],
                            correctIndex: 1,
                            explanation: 'WORKDIR sets the working directory for any RUN, CMD, COPY commands that follow.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'cicd-unit-4',
            title: 'Docker Compose & Orchestration',
            description: 'Manage multi-container applications',
            items: [
                {
                    id: 'cicd-4-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Docker Compose Deep Dive',
                    duration: '10 min read',
                    content: `
# Docker Compose Deep Dive

## Why Docker Compose?

Real applications need multiple services:
- Web server
- Database
- Cache (Redis)
- Message queue

Docker Compose manages all these with one command!

## docker-compose.yml Structure

\`\`\`yaml
version: '3.8'

services:
  # Service definitions
  
volumes:
  # Named volumes
  
networks:
  # Custom networks
\`\`\`

## Service Configuration

\`\`\`yaml
services:
  web:
    build: .                    # Build from Dockerfile
    # OR
    image: nginx:latest         # Use existing image
    
    ports:
      - "3000:3000"             # host:container
    
    environment:
      - NODE_ENV=production
      - DB_HOST=db
    
    env_file:
      - .env                    # Load from file
    
    volumes:
      - ./src:/app/src          # Bind mount
      - node_modules:/app/node_modules  # Named volume
    
    depends_on:
      - db
      - redis
    
    restart: unless-stopped     # Restart policy
    
    networks:
      - app-network
\`\`\`

## Common Commands

\`\`\`bash
# Start all services
docker-compose up

# Start in background
docker-compose up -d

# Stop all services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild images
docker-compose up --build

# Scale service
docker-compose up --scale web=3
\`\`\`
                    `
                },
                {
                    id: 'cicd-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Full Stack Docker Setup',
                    duration: '30 min',
                    content: `
# Full Stack Docker Setup

## Complete Example: Node + Postgres + Redis

\`\`\`yaml
version: '3.8'

services:
  # Node.js API
  api:
    build: ./api
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
      - REDIS_URL=redis://redis:6379
    depends_on:
      db:
        condition: service_healthy
      redis:
        condition: service_started
    volumes:
      - ./api:/app
      - /app/node_modules
    command: npm run dev

  # PostgreSQL Database
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U user -d mydb"]
      interval: 5s
      timeout: 5s
      retries: 5

  # Redis Cache
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - api

volumes:
  postgres_data:
  redis_data:
\`\`\`

## Development vs Production

\`\`\`yaml
# docker-compose.override.yml (dev - auto-loaded)
services:
  api:
    volumes:
      - ./api:/app  # Hot reload
    command: npm run dev
    environment:
      - DEBUG=true

# docker-compose.prod.yml
services:
  api:
    command: npm start
    environment:
      - NODE_ENV=production
    deploy:
      replicas: 3
\`\`\`

\`\`\`bash
# Development (uses override automatically)
docker-compose up

# Production
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up
\`\`\`

---

## Your Mission
Create a full-stack Docker Compose setup.
                    `,
                    tasks: [
                        { id: 1, description: 'Define api service with build context: build: ./api', completed: false, regex: /api:\s*\n\s*build:/ },
                        { id: 2, description: 'Add database service using postgres image', completed: false, regex: /db:\s*\n\s*image:\s*postgres/ },
                        { id: 3, description: 'Add depends_on to api service', completed: false, regex: /depends_on:\s*\n\s*-?\s*db/ },
                        { id: 4, description: 'Create named volume for database: postgres_data', completed: false, regex: /volumes:\s*\n\s*postgres_data:/ },
                        { id: 5, description: 'Add healthcheck to database service', completed: false, regex: /healthcheck:\s*\n\s*test:/ }
                    ],
                    files: [
                        { name: 'docker-compose.yml', language: 'yaml', content: `version: '3.8'

services:
  # 1. API Service
  api:
    # Add build context
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
    # Add depends_on

  # 2. Database Service
  db:
    # Add postgres image
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    # Add healthcheck

# 3. Define volumes
volumes:
  # Add postgres_data volume
` },
                        { name: 'api/Dockerfile', language: 'dockerfile', content: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]` },
                        { name: 'api/server.js', language: 'javascript', content: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'API running in Docker!' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.listen(3000, () => console.log('API on port 3000'));` }
                    ]
                },
                {
                    id: 'cicd-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Docker Compose Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does depends_on do in Docker Compose?',
                            options: ['Installs dependencies', 'Defines service startup order', 'Creates network connections', 'Shares volumes'],
                            correctIndex: 1,
                            explanation: 'depends_on controls the order in which services are started. The dependent service waits for its dependencies to start first.'
                        },
                        {
                            id: 'q2',
                            question: 'What is the purpose of named volumes?',
                            options: ['Faster performance', 'Persist data between container restarts', 'Network isolation', 'Load balancing'],
                            correctIndex: 1,
                            explanation: 'Named volumes persist data even when containers are removed. They are managed by Docker and stored outside the container filesystem.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'cicd-unit-5',
            title: 'Deployment Strategies',
            description: 'Deploy applications to production',
            items: [
                {
                    id: 'cicd-4-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Deployment with GitHub Actions',
                    duration: '25 min',
                    content: `
# Deployment with GitHub Actions

## Deploy to Vercel

\`\`\`yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
\`\`\`

## Deploy Docker to Cloud

\`\`\`yaml
name: Deploy to Cloud Run

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: \${{ secrets.DOCKER_USERNAME }}
          password: \${{ secrets.DOCKER_PASSWORD }}
      
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: user/app:latest
\`\`\`

## Deploy to AWS

\`\`\`yaml
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      
      - name: Deploy to S3
        run: aws s3 sync ./dist s3://my-bucket --delete
\`\`\`

## Deployment Strategies

| Strategy | Description |
|----------|-------------|
| **Rolling** | Gradually replace old with new |
| **Blue-Green** | Switch between two environments |
| **Canary** | Deploy to small % first |
| **Feature Flags** | Toggle features without deploy |

---

## Your Mission
Create a deployment workflow.
                    `,
                    tasks: [
                        { id: 1, description: 'Add deployment job that needs test job: needs: test', completed: false, regex: /needs:\s*test/ },
                        { id: 2, description: 'Add condition for main branch: if: github.ref == "refs/heads/main"', completed: false, regex: /if:\s*github\.ref\s*==/ },
                        { id: 3, description: 'Use Docker login action: uses: docker/login-action@v3', completed: false, regex: /uses:\s*docker\/login-action/ },
                        { id: 4, description: 'Use Docker build-push action: uses: docker/build-push-action@v5', completed: false, regex: /uses:\s*docker\/build-push-action/ }
                    ],
                    files: [
                        { name: '.github/workflows/deploy.yml', language: 'yaml', content: `name: Build and Deploy

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test

  deploy:
    # Add needs: test
    runs-on: ubuntu-latest
    # Add condition for main branch only
    
    steps:
      - uses: actions/checkout@v4
      
      # Add Docker login step
      
      # Add Docker build and push step
      
      - name: Deploy notification
        run: echo "Deployed successfully!"
` },
                        { name: 'Dockerfile', language: 'dockerfile', content: `FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "my-app",
    "scripts": {
        "start": "node server.js",
        "test": "jest",
        "build": "npm run compile"
    }
}` }
                    ]
                },
                {
                    id: 'cicd-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Deployment Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is Blue-Green deployment?',
                            options: ['Deploying to two colors', 'Running two identical environments and switching between them', 'A testing strategy', 'A Docker feature'],
                            correctIndex: 1,
                            explanation: 'Blue-Green deployment maintains two identical environments. You deploy to one (green) while the other (blue) serves traffic, then switch.'
                        },
                        {
                            id: 'q2',
                            question: 'What does "needs: test" do in a workflow?',
                            options: ['Requires test files', 'Runs the job only after test job succeeds', 'Installs test dependencies', 'Creates test environment'],
                            correctIndex: 1,
                            explanation: 'The "needs" keyword creates a dependency - the job will only run after the specified job completes successfully.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 6: Final Project
        // ============================================
        {
            id: 'cicd-unit-6',
            title: 'Final Project: Complete CI/CD Pipeline',
            description: 'Build a production-ready CI/CD pipeline',
            items: [
                {
                    id: 'cicd-6-1',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'Production CI/CD Pipeline',
                    duration: '45 min',
                    content: `
# Final Project: Production CI/CD Pipeline

## Project Overview

Build a complete CI/CD pipeline that:
1. Runs tests on every push
2. Builds Docker image
3. Pushes to container registry
4. Deploys to production
5. Sends notifications

## Requirements

### 1. Testing Stage
- Run linting
- Run unit tests
- Run integration tests
- Generate coverage report

### 2. Build Stage
- Build Docker image
- Tag with commit SHA and 'latest'
- Multi-platform build (amd64, arm64)

### 3. Security Stage
- Scan for vulnerabilities
- Check for secrets in code
- Audit dependencies

### 4. Deploy Stage
- Deploy to staging first
- Run smoke tests
- Deploy to production
- Rollback on failure

### 5. Notifications
- Slack notification on success/failure
- Update deployment status

## Complete Workflow

\`\`\`yaml
name: Production Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Test
        run: npm test -- --coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run Trivy vulnerability scanner
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          ignore-unfixed: true
      
      - name: Audit dependencies
        run: npm audit --audit-level=high

  build:
    needs: [test, security]
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    
    outputs:
      image-tag: \${{ steps.meta.outputs.tags }}
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      
      - name: Login to Container Registry
        uses: docker/login-action@v3
        with:
          registry: \${{ env.REGISTRY }}
          username: \${{ github.actor }}
          password: \${{ secrets.GITHUB_TOKEN }}
      
      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: \${{ env.REGISTRY }}/\${{ env.IMAGE_NAME }}
          tags: |
            type=sha
            type=raw,value=latest
      
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: \${{ steps.meta.outputs.tags }}
          cache-from: type=gha
          cache-to: type=gha,mode=max

  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - name: Deploy to staging
        run: |
          echo "Deploying to staging..."
          # kubectl set image deployment/app app=\${{ needs.build.outputs.image-tag }}
      
      - name: Run smoke tests
        run: |
          echo "Running smoke tests..."
          curl -f https://staging.example.com/health

  deploy-production:
    needs: deploy-staging
    runs-on: ubuntu-latest
    environment: production
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: |
          echo "Deploying to production..."
      
      - name: Verify deployment
        run: |
          echo "Verifying deployment..."
          curl -f https://example.com/health

  notify:
    needs: [deploy-production]
    runs-on: ubuntu-latest
    if: always()
    steps:
      - name: Slack Notification
        uses: 8398a7/action-slack@v3
        with:
          status: \${{ job.status }}
          fields: repo,message,commit,author
        env:
          SLACK_WEBHOOK_URL: \${{ secrets.SLACK_WEBHOOK }}
\`\`\`

---

## Your Mission
Create a production-ready CI/CD pipeline with all stages.
                    `,
                    tasks: [
                        { id: 1, description: 'Create test job with linting and testing steps', completed: false, regex: /test:\s*\n\s*runs-on:[\s\S]*npm\s+(run\s+)?lint/ },
                        { id: 2, description: 'Create security job with vulnerability scanning', completed: false, regex: /security:\s*\n\s*runs-on:/ },
                        { id: 3, description: 'Create build job that needs test and security', completed: false, regex: /build:\s*\n\s*needs:\s*\[.*test.*security.*\]/ },
                        { id: 4, description: 'Create deploy-staging job with environment', completed: false, regex: /deploy-staging:\s*\n[\s\S]*environment:\s*staging/ },
                        { id: 5, description: 'Create deploy-production job that needs staging', completed: false, regex: /deploy-production:\s*\n\s*needs:\s*deploy-staging/ },
                        { id: 6, description: 'Add notification job that runs always', completed: false, regex: /notify:\s*\n[\s\S]*if:\s*always\(\)/ }
                    ],
                    files: [
                        { name: '.github/workflows/production.yml', language: 'yaml', content: `name: Production Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  REGISTRY: ghcr.io
  IMAGE_NAME: \${{ github.repository }}

jobs:
  # 1. Test Job - Run linting and tests
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # Add Node.js setup
      # Add npm ci
      # Add lint step
      # Add test step

  # 2. Security Job - Scan for vulnerabilities
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # Add security scanning

  # 3. Build Job - Build and push Docker image
  build:
    # Add needs: [test, security]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      # Add Docker build steps

  # 4. Deploy Staging
  deploy-staging:
    needs: build
    runs-on: ubuntu-latest
    # Add environment: staging
    steps:
      - name: Deploy to staging
        run: echo "Deploying to staging..."

  # 5. Deploy Production
  deploy-production:
    # Add needs: deploy-staging
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: Deploy to production
        run: echo "Deploying to production..."

  # 6. Notifications
  notify:
    needs: [deploy-production]
    runs-on: ubuntu-latest
    # Add if: always()
    steps:
      - name: Send notification
        run: echo "Pipeline completed!"
` },
                        { name: 'Dockerfile', language: 'dockerfile', content: `FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package*.json ./
EXPOSE 3000
CMD ["npm", "start"]` },
                        { name: 'package.json', language: 'json', content: `{
    "name": "production-app",
    "version": "1.0.0",
    "scripts": {
        "start": "node dist/server.js",
        "dev": "nodemon src/server.js",
        "build": "tsc",
        "test": "jest --coverage",
        "lint": "eslint src/"
    }
}` }
                    ]
                },
                {
                    id: 'cicd-6-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'CI/CD Final Quiz',
                    duration: '10 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What is the purpose of a staging environment?',
                            options: ['To store code', 'To test changes before production', 'To backup data', 'To monitor logs'],
                            correctIndex: 1,
                            explanation: 'Staging is a pre-production environment that mirrors production, allowing you to test changes safely before deploying to real users.'
                        },
                        {
                            id: 'q2',
                            question: 'Why use "if: always()" in a notification job?',
                            options: ['To run faster', 'To run even if previous jobs fail', 'To skip tests', 'To save resources'],
                            correctIndex: 1,
                            explanation: 'if: always() ensures the job runs regardless of whether previous jobs succeeded or failed, so you always get notified of the pipeline result.'
                        },
                        {
                            id: 'q3',
                            question: 'What is the benefit of multi-stage Docker builds?',
                            options: ['Faster builds', 'Smaller final image size', 'Better security', 'All of the above'],
                            correctIndex: 3,
                            explanation: 'Multi-stage builds create smaller images (no build tools), are faster (better caching), and more secure (fewer attack surfaces).'
                        },
                        {
                            id: 'q4',
                            question: 'What does "environment: production" do in GitHub Actions?',
                            options: ['Sets NODE_ENV', 'Enables environment protection rules', 'Creates a VM', 'Installs dependencies'],
                            correctIndex: 1,
                            explanation: 'Environment protection rules can require approvals, limit which branches can deploy, and provide environment-specific secrets.'
                        }
                    ]
                }
            ]
        }
    ]
};

export default cicdCourse;
