
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit5Deploy = {
    id: 'cicd-unit-5',
    title: 'Unit 5: Production Deployment',
    description: 'Go live. Learn Blue-Green, Canary, and Rolling updates.',
    items: [
        {
            id: 'cicd-5-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Deployment Strategies 🚀',
            duration: '15 min read',
            content: `
# Deep Dive: Deployment Strategies 🚀

## 1. Rolling Deployment (Default)
*   **How**: Replace instances one by one.
*   **Pro**: Zero downtime. Cost effective.
*   **Con**: Slow rollback.

## 2. Blue-Green
*   **How**: Spin up EXACT copy (Green). Switch traffic. Keep old (Blue) just in case.
*   **Pro**: Instant switch/rollback. Use Production for final testing.
*   **Con**: Expensive (Double resources).

## 3. Canary
*   **How**: Send 5% of traffic to new version. Monitor errors. Gradually increase to 100%.
*   **Pro**: Safest. Exposure is limited.
*   **Con**: Complex routing setup.
            `
        },
        // Lab: Deploy Workflow
        {
            id: 'cicd-5-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Deploy Job',
            duration: '35 min',
            content: `
# Lab 1: Deploy Job

Create a workflow that deploys only when Main is updated.

## The Mission
1.  **Job**: \`deploy\`.
2.  **Condition**: \`if: github.ref == 'refs/heads/main'\`.
3.  **Needs**: Wait for \`test\` and \`build\`.
4.  **Steps**: Simulate deploy with echo.

## Logic
We don't want to deploy broken code (Needs Test) or development branches (If Main).
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Condition: if: github.ref == "refs/heads/main"',
                    completed: false,
                    regex: /if:\s*github\.ref\s*==\s*['"]refs\/heads\/main['"]/
                },
                {
                    id: 2,
                    description: 'Dependency: needs: [test, build]',
                    completed: false,
                    regex: /needs:\s*\[.*test.*build.*\]/
                },
                {
                    id: 3,
                    description: 'Environment: environment: production',
                    completed: false,
                    regex: /environment:\s*production/
                }
            ],
            files: [
                {
                    name: '.github/workflows/deploy.yml',
                    language: 'yaml',
                    content: `name: CD Flow

jobs:
  test:
    runs-on: ubuntu-latest
    steps: [ { run: echo test } ]
    
  build:
    needs: test
    runs-on: ubuntu-latest
    steps: [ { run: echo build } ]

  deploy:
    runs-on: ubuntu-latest
    # 1. Add Needs
    
    # 2. Add Condition (Main Only)
   
    
    # 3. Add Environment
    
    
    steps:
      - run: echo "Deploying to Prod..."
`
                }
            ]
        },
        {
            id: 'cicd-5-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Deployment Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Which strategy requires double the infrastructure resources?',
                    options: [
                        'Rolling',
                        'Canary',
                        'Blue-Green',
                        'Big Bang'
                    ],
                    correctIndex: 2,
                    explanation: 'Blue-Green requires running two full environments simultaneously.'
                },
                {
                    id: 'q2',
                    question: 'Why use "needs" in GitHub Actions?',
                    options: [
                        'To request money',
                        'To define dependency order (Don\'t deploy if Build fails)',
                        'To import libraries',
                        'To speed up jobs'
                    ],
                    correctIndex: 1,
                    explanation: 'It ensures topological order. Deploy depends on Build, Build depends on Test.'
                }
            ]
        }
    ]
};
