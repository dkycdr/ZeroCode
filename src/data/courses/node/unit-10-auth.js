import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit10Auth = {
    id: 'node-unit-10',
    title: 'Unit 10: Authentication & Security',
    description: 'Protect your API. Implement industrial-grade authentication with JWT and secure password handling with bcrypt.',
    items: [
        // PART 1: DEEP DIVES
        {
            id: 'node-10-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: Hashing Passwords 🔐',
            duration: '20 min read',
            content: `
# Deep Dive: Hashing Passwords 🔐

## 1. Never Store Plaintext
Rule #0 of Security: NEVER store passwords as plain text in the database.
If you leak the DB, you leak every user's password.

## 2. Hashing (One Way)
Hash function: \`Input -> Garbled Output\`.
You cannot reverse it.
To check login, you hash the input and compare it to the stored hash.

## 3. Salting
Attackers use "Rainbow Tables" (precomputed hashes).
To defeat this, we add a random string (**Salt**) to every password before hashing.
**Bcrypt** handles salting automatically.
            `
        },
        {
            id: 'node-10-2',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Deep Dive: JSON Web Tokens (JWT) 🎫',
            duration: '20 min read',
            content: `
# Deep Dive: JSON Web Tokens (JWT) 🎫

## 1. Stateless Auth
Sessions require server memory. JWTs are stored on the client.
A JWT is a signed JSON object: \`Header . Payload . Signature\`.

## 2. The Mechanics
1.  User logs in.
2.  Server verifies password.
3.  Server **Signs** a token (\`{ id: 1 }\` + Secret Key).
4.  Client stores token.
5.  Client sends token in Header: \`Authorization: Bearer <token>\`.

## 3. Don't Trust the client
The user can read the payload (it's just base64).
But they cannot *modify* it without invalidating the signature.
            `
        },

        // PART 2: LABS
        {
            id: 'node-10-lesson-1',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 1: Hashing with Bcrypt',
            duration: '20 min',
            content: `
# Lab 1: Hashing with Bcrypt

Hash a password before saving.

## The Mission
1.  **Import**: \`bcryptjs\` or \`bcrypt\`.
2.  **Hash**: \`await bcrypt.hash(password, 10)\`.
3.  **Compare**: \`await bcrypt.compare(input, hash)\`.

## Salt Rounds
The "10" is the work factor. Higher = Slower = Safer.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Hash password.',
                    completed: false,
                    regex: /bcrypt\.hash\s*\(\s*password/
                },
                {
                    id: 2,
                    description: 'Compare password.',
                    completed: false,
                    regex: /bcrypt\.compare\s*\(\s*input/
                }
            ],
            files: [
                {
                    name: 'auth.js',
                    language: 'javascript',
                    content: `const bcrypt = require('bcryptjs');

async function register(password) {
    // Task 1: Hash it (salt rounds 10)
    const hash = null;
    return hash;
}

async function login(input, hash) {
    // Task 2: Compare
    const isValid = null;
    return isValid;
}
`
                }
            ]
        },
        {
            id: 'node-10-lesson-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lab 2: JWT Signing',
            duration: '25 min',
            content: `
# Lab 2: JWT Signing

Issue a token for a user.

## The Mission
1.  **Import**: \`jsonwebtoken\`.
2.  **Sign**: \`jwt.sign(payload, secret, { expiresIn })\`.
3.  **Verify**: \`jwt.verify(token, secret)\`.

## Secret Management
NEVER hardcode secrets. Use \`process.env.JWT_SECRET\`.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Sign token.',
                    completed: false,
                    regex: /jwt\.sign\s*\(/
                },
                {
                    id: 2,
                    description: 'Set expiration (1h).',
                    completed: false,
                    regex: /expiresIn:\s*['"]1h['"]/
                }
            ],
            files: [
                {
                    name: 'token.js',
                    language: 'javascript',
                    content: `const jwt = require('jsonwebtoken');
const secret = "SUPER_SECRET_KEY";

function issueToken(user) {
    const payload = { id: user.id, role: user.role };
    
    // Task 1 & 2: Sign
    
}
`
                }
            ]
        },

        // PART 3: QUIZ
        {
            id: 'node-10-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Security Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why do we salt passwords?',
                    options: [
                        'To make them taste better',
                        'To prevent Rainbow Table attacks (precomputed hash lookups)',
                        'To compress them',
                        'To encrypt them for decryption later'
                    ],
                    correctIndex: 1,
                    explanation: 'Salting ensures that two users with the same password "password123" result in different hashes.'
                },
                {
                    id: 'q2',
                    question: 'Where should you store the JWT on the client side?',
                    options: [
                        'Inside the URL',
                        'In localStorage or httpOnly Cookies',
                        'In a global variable',
                        'In the DOM'
                    ],
                    correctIndex: 1,
                    explanation: 'httpOnly cookies are safest (prevent XSS), but localStorage is common for simpler apps (susceptible to XSS, but easier).'
                },
                {
                    id: 'q3',
                    question: 'Can you decrypt a bcrypt hash to get the password back?',
                    options: [
                        'Yes, with the master key',
                        'No, hashing is one-way',
                        'Yes, but it takes a long time',
                        'Only Google can do it'
                    ],
                    correctIndex: 1,
                    explanation: 'Hashing is destructive. Information is lost. You can only verify, not reverse.'
                }
            ]
        }
    ]
};
