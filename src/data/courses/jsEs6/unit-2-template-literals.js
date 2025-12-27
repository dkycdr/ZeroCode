import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2TemplateLiterals = {
    id: 'es6-2',
    title: 'Template Literals & Destructuring',
    description: 'Stop gluing strings together. Learn to unpack objects like a pro and write Cleaner, Safer code.',
    items: [
        {
            id: 'es6-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Intuition: The "Form Letter" & The "Surgery" 🏥',
            duration: '25 min read',
            content: `
# Part 1: Template Literals (The Form Letter) 📝

## The Problem: The "Franken-String" (ES5) 🧟‍♂️
In the old days, combining text and variables was like mismatched collage art. You had to glue everything with plus signs (\`+\`).
*   **The "Spaced Out" Issue**: Developers constantly forgot spaces.
    *   \`"Hello" + name\` -> "HelloJohn".
*   **The Result**: Code that looked like a math equation instead of text.

## Intuition: The "Mad Libs" Analogy
Think of ES6 Template Literals (\` \`) as a pre-printed **Form Letter**.
The layout is fixed. The holes (portals) are waiting for data.
You don't "build" the letter; you just "fill" the slots.

## Machine Logic: The "Super Mode" Parser ⚙️
When the JavaScript Engine sees a backtick (\` \`), it switches into a specialized scanning mode.
1.  **Scan**: It accepts ALL characters (newlines, spaces, HTML tags) literally.
2.  **Portal Detection**: It hunts for the \`\${}\` sequence.
3.  **Execution Portal**: Inside \`\${ ... }\`, you can run *any* JavaScript expression (Math, Function calls, Ternaries).
4.  **Coercion & Stitch**: It calculates the result, forces it to a String, and stitches it seamlessly into memory.

## Real-World Use Case: Dynamic UI Components
BEFORE (Messy):
\`\`\`javascript
var html = '<div class="card">' +
           '  <h1>' + user.name + '</h1>' +
           '</div>';
\`\`\`

AFTER (Clean):
\`\`\`javascript
const html = \`
  <div class="card">
    <h1>\${user.name}</h1>
    <p>Status: \${user.isActive ? 'Online' : 'Offline'}</p>
  </div>
\`;
\`\`\`

---

# Part 2: Destructuring (The Surgical Extraction) 🩺

## Intuition: The Unpacking Analogy 📦
Imagine you receive a large Delivery Box (Object) from Amazon.
*   **The Thief (Old Way)**: You reach in, grab an item, pull it out, and name it. You repeat this 10 times.
    *   \`var name = box.name;\`
    *   \`var price = box.price;\`
*   **The Surgeon (ES6 Way)**: You place a "pattern" over the box that magically extracts only what you matched into variables on your desk.
    *   \`const { name, price } = box;\`

## Memory Deep Dive: The Copy Machine 🧠
**Crucial Concept**: Destructuring does **NOT** delete data from the original object.
It takes a snapshot of the value at that address and copies it to a new local variable.

\`\`\`text
MEMORY ALLOCATION:
------------------
Heap Address [0x500] (Original Object):
{ 
  id: 101, 
  title: "CEO" 
}

Code: const { title } = user;

Stack Frame:
[VAR] title -> "CEO" (New memory space created!)

Status: Object [0x500] is untouched.
\`\`\`

## Advanced Scenarios: Safety Nets 🕸️
1.  **Renaming (Avoiding Clashes)**: 
    What if you already have a variable named \`title\`? Use a colon.
    \`const { title: jobTitle } = user;\` (Grabs 'title', renames it 'jobTitle').
    
2.  **Default Values (The Backup Plan)**:
    API data is often messy. What if \`user.role\` is \`undefined\`?
    \`const { role = 'Guest' } = user;\` (If missing, use 'Guest').

3.  **The Nested Trap (GPS Routing)**:
    Extracting deep data follows a path.
    \`const { address: { city } } = user;\`
    *   Logic: Go to \`user\`. Find \`address\`. Inside \`address\`, find \`city\`.
    *   Result: Only \`city\` is created as a variable. \`address\` is NOT created.
            `
        },
        {
            id: 'es6-2-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Lesson: Refactoring the Dashboard',
            duration: '45 min',
            content: `
# Lesson: Refactoring the Dashboard

We are building a User Card for our dashboard. The legacy code uses string concatenation and repetitive object access. Time to modernize it.

## The Mission
1.  **Template Literal**: Convert the \`welcomeMsg\` to use backticks and \`\${}\` for the user's name and role.
2.  **Basic Destructuring**: Extract \`name\` and \`age\` from the \`profile\` object in one line.
3.  **Safety Net**: Extract \`theme\` from \`settings\` with a default value of \`"light"\` (in case it's missing).
4.  **Surgical Extraction**: Extract \`lat\` (latitude) from the deeply nested \`location.coords\` object.

## Execution Flow
\`\`\`text
Step 1 (Template):
Old: "Hi " + name + "!"
New: \`Hi \${name}!\`

Step 2 (Destructure):
Old: let x = obj.x; let y = obj.y;
New: const { x, y } = obj;

Step 3 (Nested):
Source: { loc: { x: 100 } }
Pattern: const { loc: { x } } = source;
Result: Variable 'x' is created (100). Variable 'loc' is NOT created.
\`\`\`

## Common Pitfalls (Awas Terjebak!) ⚠️
1.  **Forgot the Backtick**: Using single quotes \`'\${val}'\` prints the literal symbol \${val}. It won't calculate.
2.  **Destructuring Null**: \`const { x } = null\` throws a fatal crash. Always ensure the source exists.
3.  **Renaming Confusion**: \`const { a: b } = obj\`. This creates variable \`b\`, NOT \`a\`. Think of it as "Key: Alias".
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Template Literal: Create "welcome" string using backticks. Format: "Hello [name], you are a [role]!"',
                    completed: false,
                    // Regex: checks for backtick, Hello, ${name}, ${role}
                    regex: /`\s*Hello\s+\$\{name\},\s+you\s+are\s+a\s+\$\{role\}!?\s*`/
                },
                {
                    id: 2,
                    description: 'Unpack: Destructure "name" and "age" from the "profile" object.',
                    completed: false,
                    regex: /const\s*\{\s*name\s*,\s*age\s*\}\s*=\s*profile/
                },
                {
                    id: 3,
                    description: 'Safety Net: Destructure "theme" from "settings" with a default value of "light".',
                    completed: false,
                    // Regex: matches { theme = "light" } or 'light'
                    regex: /const\s*\{\s*theme\s*=\s*(["'])light\1\s*\}\s*=\s*settings/
                },
                {
                    id: 4,
                    description: 'Nested GPS: Extract "lat" from inside "location.coords".',
                    completed: false,
                    // Regex: Match { location: { coords: { lat } } } structure
                    regex: /const\s*\{\s*location\s*:\s*\{\s*coords\s*:\s*\{\s*lat\s*\}\s*\}\s*\}\s*=\s*userData/
                }
            ],
            files: [
                {
                    name: 'index.js',
                    language: 'javascript',
                    content: `const profile = { name: "Alex", age: 30, role: "Admin" };
const settings = { notifications: true }; // Note: 'theme' is missing!
const userData = {
    id: 1,
    location: {
        coords: { lat: 51.5, lng: -0.09 }
    }
};

// Task 1: Template Literal (Use backticks!)
const name = "Alex";
const role = "Admin";
// TODO: const welcome = ...


// Task 2: Basic Destructuring (name, age)
// TODO: const { ... } = profile;


// Task 3: Default Value (theme = "light")
// TODO: const { ... } = settings;


// Task 4: Nested Extraction (lat)
// GPS Path: location -> coords -> lat
// TODO: const { ... } = userData;
`
                }
            ]
        },
        {
            id: 'es6-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Destructuring Quiz',
            duration: '10 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What happens if you try to destructure a property that does not exist?',
                    options: [
                        'It throws an error',
                        'The variable becomes "undefined"',
                        'The variable becomes null',
                        'It crashes the browser'
                    ],
                    correctIndex: 1,
                    explanation: 'Just like accessing `obj.missing`, destructuring a missing key returns `undefined` gracefully.'
                },
                {
                    id: 'q2',
                    question: 'In the syntax `const { id: userId } = user`, what is happening?',
                    options: [
                        'We are creating a variable named "id"',
                        'We are creating a variable named "userId" with the value of "id"',
                        'We are setting "id" to equal "userId"',
                        'We are deleting "id" from the user object'
                    ],
                    correctIndex: 1,
                    explanation: 'The colon acts as a rename operator. "Read property `id`, but name the variable `userId`".'
                },
                {
                    id: 'q3',
                    question: 'Why are Template Literals safer than concatenation for HTML?',
                    options: [
                        'They are not safer',
                        'They automatically sanitize inputs',
                        'They are multiline-capable, making structure readable and less prone to "missing tag" errors',
                        'They run faster'
                    ],
                    correctIndex: 2,
                    explanation: 'While they don\'t sanitize automatically (XSS risk remains!), the massive readability boost reduces logic errors in generating complex strings.'
                }
            ]
        }
    ]
};
