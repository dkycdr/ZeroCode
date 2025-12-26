import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labSignUp = {
    id: 'html5-u3-lab-1-signup',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Exclusive Club (Sign Up Page)',
    duration: '25 min',
    content: `
# Lab: The Exclusive Club (Sign Up Page)

## The Scenario
You are building the registration page for an exclusive digital club.
Collect Name, Email, and Password securely.

## Requirements
1. Form must send POST data to \`/api/register\`
2. All fields are required
3. Labels must be properly connected to inputs

`,
    tasks: [
        {
            id: 1,
            description: 'Create a <form> with method="POST" and action="/api/register"',
            completed: false,
            regex: /<form[\s\S]*?method="POST"[\s\S]*?>/i,
            hint: {
                concept: 'Form Method',
                strategy: 'POST sends data securely in the request body.',
                solution: '<form method="POST" action="/api/register">'
            }
        },
        {
            id: 2,
            description: 'Add a text input for Name with a connected label',
            completed: false,
            regex: /<label[\s\S]*?for="name"[\s\S]*?>[\s\S]*?<input[\s\S]*?id="name"/i,
            hint: {
                concept: 'Label Association',
                strategy: 'The label "for" must match the input "id".',
                solution: '<label for="name">Name</label>\n<input type="text" id="name" name="name" required>'
            }
        },
        {
            id: 3,
            description: 'Add an email input with type="email"',
            completed: false,
            regex: /<input[\s\S]*?type="email"[\s\S]*?id="email"/i,
            hint: {
                concept: 'Input Types',
                strategy: 'type="email" enables built-in email validation.',
                solution: '<input type="email" id="email" name="email" required>'
            }
        },
        {
            id: 4,
            description: 'Add a password input with type="password"',
            completed: false,
            regex: /<input[\s\S]*?type="password"/i,
            hint: {
                concept: 'Password Input',
                strategy: 'type="password" hides the characters.',
                solution: '<input type="password" id="password" name="password" required>'
            }
        },
        {
            id: 5,
            description: 'Add a submit button',
            completed: false,
            regex: /<button[^>]*>|<input[\s\S]*?type="submit"/i,
            hint: {
                concept: 'Form Submission',
                strategy: 'Use <button> or <input type="submit"> to submit.',
                solution: '<button type="submit">Join the Club</button>'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Join the Club</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🔒 Join the Exclusive Club</h1>
    
    <!-- ============================================
        BUILD THE SIGN UP FORM
        1. Form with POST method
        2. Name input with label
        3. Email input with label
        4. Password input with label
        5. Submit button
    ============================================ -->
    
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { font-family: -apple-system, sans-serif; max-width: 400px; margin: 50px auto; padding: 20px; }
form { background: #1a1a2e; padding: 30px; border-radius: 10px; }
label { display: block; margin: 15px 0 5px; color: #00ff41; }
input { width: 100%; padding: 10px; border: 1px solid #333; border-radius: 5px; background: #0f0f23; color: white; box-sizing: border-box; }
button { width: 100%; padding: 12px; margin-top: 20px; background: #00ff41; color: black; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; }`
        }
    ]
};
