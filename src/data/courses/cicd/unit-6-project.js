
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit6Project = {
    id: 'cicd-unit-6',
    title: 'Unit 6: Capstone Pipeline',
    description: 'Build the ultimate automation machine.',
    items: [
        {
            id: 'cicd-6-project',
            type: CONTENT_TYPES.PROJECT,
            title: 'Project: Ultimate Pipeline',
            duration: '90 min',
            difficulty: 'Hard',
            description: 'Link Test, Build, Push, Deploy, and Notify.',
            content: `
# 🎯 Project: The Ultimate Pipeline

## The Objective
Connect every concept you've learned into a single \`.yml\` file.

## Requirements
1.  **Triggers**: Push to Main OR Pull Requests.
2.  **Job 1 (Test)**: Lint + Test with Matrix (Node 18/20).
3.  **Job 2 (Build)**: Build Docker Image & Push to Registry (GHCR).
4.  **Job 3 (Deploy)**: Simulate Deploy to Staging then Prod.
5.  **Job 4 (Notify)**: Send a message (simulated) regardless of success/fail.

## Hints
*   Use \`needs: [...]\` to enforce order.
*   Use \`if: always()\` for notifications.
*   Use \`outputs\` to pass image tags between jobs.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Trigger: push & pull_request',
                    completed: false,
                    regex: /push:[\s\S]*pull_request:/
                },
                {
                    id: 2,
                    description: 'Build: depends on Test',
                    completed: false,
                    regex: /needs:\s*test/
                },
                {
                    id: 3,
                    description: 'Deploy: depends on Build',
                    completed: false,
                    regex: /needs:\s*build/
                },
                {
                    id: 4,
                    description: 'Notify: if: always()',
                    completed: false,
                    regex: /if:\s*always\(\)/
                }
            ],
            starterFiles: [
                {
                    name: '.github/workflows/pipeline.yml',
                    language: 'yaml',
                    content: `name: Production Pipeline

on:
  # 1. Triggers


jobs:
  test:
    runs-on: ubuntu-latest
    steps: [{ run: echo test }]

  build:
    # 2. Add Needs
    
    runs-on: ubuntu-latest
    steps: [{ run: echo build }]

  deploy:
    # 3. Add Needs
    
    runs-on: ubuntu-latest
    steps: [{ run: echo deploy }]

  notify:
    # 4. Run Always
    
    runs-on: ubuntu-latest
    steps: [{ run: echo done }]
`
                }
            ]
        }
    ]
};
