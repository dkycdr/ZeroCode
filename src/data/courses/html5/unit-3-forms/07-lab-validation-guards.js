import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labValidation = {
    id: 'html5-u3-lab-3-guard',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: The Gatekeeper (Validation Patterns)',
    duration: '25 min',
    content: `
# Lab: The Gatekeeper

## The Scenario
Spam bots are attacking your form!
Add HTML5 Validation guards to stop bad data before it hits the server.

## The Rules
1. **Username**: Required, cannot be empty
2. **Zip Code**: Must be exactly 5 digits
3. **Age**: Must be between 18 and 99

`,
    tasks: [
        {
            id: 1,
            description: 'Make the Username field required',
            completed: false,
            regex: /<input[\s\S]*?name="username"[\s\S]*?required/i,
            hint: {
                concept: 'Required Attribute',
                strategy: 'Add "required" attribute to prevent empty submission.',
                solution: '<input type="text" name="username" required>'
            }
        },
        {
            id: 2,
            description: 'Add pattern="[0-9]{5}" to Zip Code',
            completed: false,
            regex: /pattern="[0-9]{5}"/i,
            hint: {
                concept: 'Pattern Validation',
                strategy: 'The pattern attribute accepts regex.',
                solution: '<input type="text" name="zip" pattern="[0-9]{5}">'
            }
        },
        {
            id: 3,
            description: 'Add min="18" and max="99" to Age',
            completed: false,
            regex: /type="number"[\s\S]*?min="18"[\s\S]*?max="99"/i,
            hint: {
                concept: 'Number Range',
                strategy: 'min and max attributes set valid number range.',
                solution: '<input type="number" name="age" min="18" max="99">'
            }
        },
        {
            id: 4,
            description: 'Add a placeholder to Zip Code showing format',
            completed: false,
            regex: /name="zip"[\s\S]*?placeholder=/i,
            hint: {
                concept: 'Placeholder Text',
                strategy: 'Placeholder shows example input format.',
                solution: '<input name="zip" placeholder="12345">'
            }
        },
        {
            id: 5,
            description: 'Add title attribute to show validation message',
            completed: false,
            regex: /title="[^"]+"/i,
            hint: {
                concept: 'Custom Validation Message',
                strategy: 'title attribute shows when pattern fails.',
                solution: '<input pattern="[0-9]{5}" title="Must be 5 digits">'
            }
        }
    ],
    files: [
        {
            name: 'secure.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Secure Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🛡️ The Gatekeeper</h1>
    
    <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username">

        <label for="zip">Zip Code (5 digits):</label>
        <input type="text" id="zip" name="zip">

        <label for="age">Age (18+):</label>
        <input type="number" id="age" name="age">

        <button>Submit</button>
    </form>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { font-family: -apple-system, sans-serif; max-width: 400px; margin: 0 auto; padding: 20px; background: #1a1a2e; color: #fff; }
form { background: #16213e; padding: 25px; border-radius: 10px; }
label { display: block; margin: 15px 0 5px; color: #00ff41; }
input { width: 100%; padding: 10px; border: 2px solid #333; border-radius: 5px; background: #0f0f23; color: #fff; box-sizing: border-box; }
input:valid { border-color: #00ff41; }
input:invalid { border-color: #ff4444; }
button { width: 100%; margin-top: 20px; padding: 12px; background: #00ff41; color: #000; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; }`
        }
    ]
};
