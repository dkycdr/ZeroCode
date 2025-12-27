
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1Intro = {
    id: 'cicd-unit-1',
    title: 'Unit 1: CI/CD Fundamentals',
    description: 'Stop deploying manually. Automate your workflow with GitHub Actions.',
    items: [
        // 1. Deep Dive: The DevOps Philosophy
        {
            id: 'cicd-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Why DevOps? ♾️',
            duration: '15 min read',
            content: `
# Deep Dive: Why DevOps? ♾️

## 1. The "Wall of Confusion"
Historically, **Developers** wrote code and threw it over the wall to **Operations** (SysAdmins).
*   Devs want change (New features).
*   Ops want stability (No outages).
*   **Result**: Conflict and slow releases.

## 2. CI/CD Pipeline
**Continuous Integration (CI)**:
*   Developers merge code to \`main\` frequently (daily).
*   Automated tests run on every push.
*   Goal: Catch bugs FAST.

**Continuous Deployment (CD)**:
*   If tests pass, code goes to Production automatically.
*   Goal: Release value FAST.

## 3. Infrastructure as Code (IaC)
Instead of clicking buttons in AWS Console, we write code (YAML/Terraform) to define servers.
*   Version Controlled.
*   Reproducible.
*   Auditable.
            `
        },
        // 2. Lab: First Workflow
        {
            id: 'cicd-1-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Your First Workflow',
            duration: '25 min',
            content: `
# Lab 1: Your First Workflow

Create a GitHub Action that runs tests.

## The Mission
1.  **File**: Create \`.github/workflows/ci.yml\`.
2.  **Trigger**: Run on \`push\` to \`main\`.
3.  **Job**: Create a \`test\` job running on \`ubuntu-latest\`.
4.  **Steps**: Checkout code, Install Node, Run Tests.

## Hierarchy
Workflow -> Jobs -> Steps -> Actions/Scripts
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Trigger: on: push: branches: [main]',
                    completed: false,
                    regex: /on:\s*\n\s*push:/
                },
                {
                    id: 2,
                    description: 'Job: runs-on: ubuntu-latest',
                    completed: false,
                    regex: /runs-on:\s*ubuntu-latest/
                },
                {
                    id: 3,
                    description: 'Checkout: uses: actions/checkout@v4',
                    completed: false,
                    regex: /uses:\s*actions\/checkout/
                },
                {
                    id: 4,
                    description: 'Run Test: run: npm test',
                    completed: false,
                    regex: /run:\s*npm\s+test/
                }
            ],
            files: [
                {
                    name: '.github/workflows/ci.yml',
                    language: 'yaml',
                    content: `name: CI Loop

# 1. Trigger

jobs:
  test:
    # 2. Runner
    
    steps:
      # 3. Checkout
      
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - run: npm ci
      
      # 4. Test
`
                }
            ]
        },

        // 3. Quiz
        {
            id: 'cicd-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'CI/CD Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What is the main goal of Continuous Integration (CI)?',
                    options: [
                        'To deploy code to users',
                        'To catch bugs early by testing every merge',
                        'To manage servers',
                        'To write faster code'
                    ],
                    correctIndex: 1,
                    explanation: 'CI focuses on integrating code frequently effectively validating it with automated tests to prevent integration hell.'
                },
                {
                    id: 'q2',
                    question: 'Where must GitHub Actions workflows be located?',
                    options: [
                        'Assigned in the Settings UI',
                        'In the root folder',
                        'In .github/workflows/',
                        'In .actions/'
                    ],
                    correctIndex: 2,
                    explanation: 'GitHub looks specifically for YAML files in .github/workflows/.'
                }
            ]
        }
    ]
};
