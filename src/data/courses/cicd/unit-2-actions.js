
import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2Actions = {
    id: 'cicd-unit-2',
    title: 'Unit 2: Advanced Workflows',
    description: 'Master Secrets, Environment Variables, and Matrix Testing.',
    items: [
        // 1. Deep Dive: Secrets Management
        {
            id: 'cicd-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Secrets & Security 🔐',
            duration: '15 min read',
            content: `
# Deep Dive: Secrets & Security 🔐

## 1. Never Commit Secrets
**Never** put API Keys, Passwords, or Tokens in \`git\`.
If you do, bots will scrape them in seconds.

## 2. GitHub Secrets
GitHub provides a secure vault.
*   Settings -> Secrets and Variables -> Actions.
*   Access in YAML: \`\${{ secrets.MY_API_KEY }}\`.
*   These are **Masked** in logs (Show as \`***\`).

## 3. Environment Variables
*   **Secrets**: Sensitive (Keys).
*   **Vars**: Configuration (URLs, Feature Flags).
*   Define via \`env: \` block in YAML.
            `
        },
        // 2. Lab: Matrix & Caching
        {
            id: 'cicd-2-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Matrix Strategy',
            duration: '30 min',
            content: `
# Lab 1: Matrix Strategy

Test your code against multiple Node.js versions in parallel.

## The Mission
1.  **Matrix**: Run tests on Node 18, 20, and 22.
2.  **Secret**: Simulate deploying with a fake token.
3.  **Caching**: Speed up \`npm ci\` by caching \`~/.npm\`.

## Why Matrix?
It saves time. Instead of waiting for test A then test B, they run together.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Matrix: node-version: [18, 20, 22]',
                    completed: false,
                    regex: /matrix:\s*\n\s*node-version:\s*\[.*\]/
                },
                {
                    id: 2,
                    description: 'Use Matrix: node-version: ${{ matrix.node-version }}',
                    completed: false,
                    regex: /node-version:\s*\$\{\{\s*matrix\.node-version\s*\}\}/
                },
                {
                    id: 3,
                    description: 'Secret: ${{ secrets.DEPLOY_TOKEN }}',
                    completed: false,
                    regex: /\$\{\{\s*secrets\.\w+\s*\}\}/
                },
                {
                    id: 4,
                    description: 'Cache: uses: actions/cache@v3',
                    completed: false,
                    regex: /uses:\s*actions\/cache/
                }
            ],
            files: [
                {
                    name: '.github/workflows/matrix.yml',
                    language: 'yaml',
                    content: `name: Matrix Test

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      # 1. Define Matrix
    
    steps:
      - uses: actions/checkout@v4
      
      # 2. Add Caching
      
      
      - uses: actions/setup-node@v4
        with:
          # 3. Use Matrix Var
      
      - run: npm ci
      - run: npm test
      
      - name: Fake Deploy
        run: echo "Deploying..."
        env:
          # 4. Use Secret
          TOKEN: 
`
                }
            ]
        },

        // 3. Quiz
        {
            id: 'cicd-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Advanced Actions Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'How do you access a secret named "API_KEY" in the YAML?',
                    options: [
                        '$API_KEY',
                        '${{ env.API_KEY }}',
                        '${{ secrets.API_KEY }}',
                        'process.env.API_KEY'
                    ],
                    correctIndex: 2,
                    explanation: 'Secrets are accessed via the "secrets" context object.'
                },
                {
                    id: 'q2',
                    question: 'What is the main benefit of "Matrix" builds?',
                    options: [
                        'They look cool like the movie',
                        'They run jobs sequentially to save CPU',
                        'They run multiple configurations in parallel',
                        'They encrypt the source code'
                    ],
                    correctIndex: 2,
                    explanation: 'Matrix allows you to spawn multiple job runners with different inputs (e.g. Node versions) simultaneously.'
                }
            ]
        }
    ]
};
