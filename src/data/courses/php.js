// PHP Native - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const phpCourse = {
    id: 'php',
    title: 'PHP Native',
    description: 'Learn server-side programming with PHP for dynamic web applications.',
    
    units: [
        {
            id: 'php-unit-1',
            title: 'Introduction to PHP',
            description: 'Understand server-side programming and PHP basics',
            items: [
                {
                    id: 'php-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is PHP?',
                    duration: '5 min read',
                    content: `
# What is PHP?

**PHP** (Hypertext Preprocessor) is a server-side scripting language designed for web development.

## Client-Side vs Server-Side

### Client-Side (JavaScript)
\`\`\`
Browser → Runs JavaScript → Shows Result
\`\`\`

### Server-Side (PHP)
\`\`\`
Browser → Request → Server runs PHP → Sends HTML → Browser displays
\`\`\`

## Why PHP?

| Feature | Benefit |
|---------|---------|
| **Server-Side** | Process data before sending to browser |
| **Database Access** | Connect to MySQL, PostgreSQL, etc |
| **File Operations** | Read/write files on server |
| **Sessions** | Track users across pages |
| **Security** | Hide sensitive logic from users |

## What Can PHP Do?

- 🔐 User authentication (login/register)
- 📊 Generate dynamic content
- 💾 Store/retrieve database data
- 📧 Send emails
- 📁 Upload/download files
- 🛒 Build e-commerce sites

## Who Uses PHP?

- Facebook (originally built with PHP)
- WordPress (powers 40% of websites)
- Wikipedia, Slack, Etsy
- Laravel, Symfony frameworks

> 💡 **Fun Fact**: PHP powers 77% of all websites with known server-side languages!
                    `
                },
                {
                    id: 'php-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'PHP Syntax Basics',
                    duration: '20 min',
                    content: `
# PHP Syntax Basics

## PHP Tags

PHP code is embedded in HTML using special tags:

\`\`\`php
<?php
    // PHP code here
?>
\`\`\`

## Variables

Variables start with \`$\`:

\`\`\`php
<?php
$name = "Alice";
$age = 21;
$gpa = 3.75;
$isStudent = true;

echo $name;  // Outputs: Alice
?>
\`\`\`

## Data Types

\`\`\`php
<?php
// String
$text = "Hello World";

// Integer
$number = 42;

// Float
$price = 99.99;

// Boolean
$active = true;

// Array
$colors = ["red", "green", "blue"];

// Null
$empty = null;
?>
\`\`\`

## Echo & Print

\`\`\`php
<?php
echo "Hello";           // Output text
echo $name;             // Output variable
echo "Hi, " . $name;    // Concatenation with .

print "Hello";          // Similar to echo
?>
\`\`\`

## Comments

\`\`\`php
<?php
// Single line comment

/* Multi-line
   comment */

# Shell-style comment
?>
\`\`\`

## String Concatenation

\`\`\`php
<?php
$first = "John";
$last = "Doe";

// Using dot operator
$full = $first . " " . $last;

// Using double quotes (variables are parsed)
$greeting = "Hello, $first!";

// Using single quotes (literal)
$literal = 'Hello, $first';  // Outputs: Hello, $first
?>
\`\`\`

---

## Your Mission
Create PHP variables and output them.
                    `,
                    tasks: [
                        { id: 1, description: 'In index.php, create variable: $name = "Alice"; (PHP variables use $ prefix)', completed: false, regex: /\$\w+\s*=/ },
                        { id: 2, description: 'In index.php, display variable: echo $name; to output to browser', completed: false, regex: /echo\s+\$\w+/ },
                        { id: 3, description: 'In index.php, concatenate strings: echo "Hello " . $name; (use dot for concat)', completed: false, regex: /\$\w+\s*\.\s*["']|["']\s*\.\s*\$\w+/ },
                        { id: 4, description: 'In index.php, create array: $courses = ["HTML", "CSS", "JS"];', completed: false, regex: /\$\w+\s*=\s*\[/ }
                    ],
                    files: [
                        { name: 'index.php', language: 'php', content: `<?php
// PHP Basics Practice

// 1. Create variables for student info


// 2. Output using echo


// 3. Concatenate strings


// 4. Create an array of courses


?>

<!DOCTYPE html>
<html>
<head><title>PHP Basics</title></head>
<body>
    <h1>Student Information</h1>
    <!-- Output your variables here -->
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'php-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'PHP Basics Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'How do you start a PHP code block?',
                            options: ['<php>', '<?php', '<script php>', '<?'],
                            correctIndex: 1,
                            explanation: 'PHP code blocks start with <?php and end with ?>'
                        },
                        {
                            id: 'q2',
                            question: 'How do you concatenate strings in PHP?',
                            options: ['+ operator', '. operator', '& operator', ', operator'],
                            correctIndex: 1,
                            explanation: 'PHP uses the dot (.) operator for string concatenation.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'php-unit-2',
            title: 'Control Structures & Functions',
            description: 'Learn PHP conditionals, loops, and functions',
            items: [
                {
                    id: 'php-2-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'PHP Conditionals & Loops',
                    duration: '25 min',
                    content: `
# PHP Conditionals & Loops

## If/Else

\`\`\`php
<?php
$grade = 85;

if ($grade >= 85) {
    echo "A";
} elseif ($grade >= 70) {
    echo "B";
} else {
    echo "C";
}
?>
\`\`\`

## Switch

\`\`\`php
<?php
$day = "Monday";

switch ($day) {
    case "Monday":
        echo "Start of week";
        break;
    case "Friday":
        echo "TGIF!";
        break;
    default:
        echo "Regular day";
}
?>
\`\`\`

## For Loop

\`\`\`php
<?php
for ($i = 0; $i < 5; $i++) {
    echo $i . "<br>";
}
?>
\`\`\`

## While Loop

\`\`\`php
<?php
$count = 0;
while ($count < 5) {
    echo $count;
    $count++;
}
?>
\`\`\`

## Foreach (Arrays)

\`\`\`php
<?php
$fruits = ["Apple", "Banana", "Orange"];

foreach ($fruits as $fruit) {
    echo $fruit . "<br>";
}

// With index
foreach ($fruits as $index => $fruit) {
    echo "$index: $fruit<br>";
}
?>
\`\`\`

## Associative Arrays

\`\`\`php
<?php
$student = [
    "name" => "Alice",
    "age" => 21,
    "major" => "SE"
];

echo $student["name"];  // Alice

foreach ($student as $key => $value) {
    echo "$key: $value<br>";
}
?>
\`\`\`

---

## Your Mission
Create a grade calculator using conditionals and loops.
                    `,
                    tasks: [
                        { id: 1, description: 'In index.php, create condition: if ($grade >= 85) { echo "A"; } elseif ($grade >= 70) { echo "B"; } else { echo "C"; }', completed: false, regex: /if\s*\([^)]+\)[\s\S]*elseif[\s\S]*else/ },
                        { id: 2, description: 'In index.php, loop array: foreach ($grades as $grade) { echo $grade; }', completed: false, regex: /foreach\s*\([^)]+as/ },
                        { id: 3, description: 'In index.php, create associative array: $student = ["name" => "Alice", "age" => 21];', completed: false, regex: /["']\w+["']\s*=>\s*/ },
                        { id: 4, description: 'In index.php, use comparison operators: if ($grade >= 85) or if ($grade == 100)', completed: false, regex: /(>=|<=|==)/ }
                    ],
                    files: [
                        { name: 'index.php', language: 'php', content: `<?php
// Grade Calculator

// Array of student grades
$grades = [85, 92, 78, 65, 88];

// Calculate average


// Determine letter grade


// Display results
?>

<!DOCTYPE html>
<html>
<head><title>Grade Calculator</title></head>
<body>
    <h1>Grade Calculator</h1>
    <!-- Display grades and average here -->
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'php-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'PHP Functions',
                    duration: '20 min',
                    content: `
# PHP Functions

## Defining Functions

\`\`\`php
<?php
function greet($name) {
    return "Hello, $name!";
}

echo greet("Alice");  // Hello, Alice!
?>
\`\`\`

## Default Parameters

\`\`\`php
<?php
function greet($name = "Guest") {
    return "Hello, $name!";
}

echo greet();         // Hello, Guest!
echo greet("Bob");    // Hello, Bob!
?>
\`\`\`

## Multiple Parameters

\`\`\`php
<?php
function calculateGPA($grades) {
    $sum = array_sum($grades);
    $count = count($grades);
    return $sum / $count;
}

$myGrades = [3.5, 3.8, 4.0];
echo calculateGPA($myGrades);  // 3.77
?>
\`\`\`

## Type Declarations (PHP 7+)

\`\`\`php
<?php
function add(int $a, int $b): int {
    return $a + $b;
}

function getName(string $first, string $last): string {
    return "$first $last";
}
?>
\`\`\`

## Useful Built-in Functions

\`\`\`php
<?php
// String functions
strlen("Hello");           // 5
strtoupper("hello");       // HELLO
strtolower("HELLO");       // hello
str_replace("a", "b", "cat");  // cbt

// Array functions
count([1, 2, 3]);          // 3
array_sum([1, 2, 3]);      // 6
in_array(2, [1, 2, 3]);    // true
array_push($arr, "new");   // Add to end

// Math functions
round(3.7);                // 4
ceil(3.2);                 // 4
floor(3.8);                // 3
rand(1, 10);               // Random 1-10
?>
\`\`\`

---

## Your Mission
Create utility functions for a student system.
                    `,
                    tasks: [
                        { id: 1, description: 'In index.php, create function: function calculateGPA($grades) { ... }', completed: false, regex: /function\s+\w+\s*\(/ },
                        { id: 2, description: 'In function, accept parameter: function calculateGPA($grades) - $grades is array of values', completed: false, regex: /function\s+\w+\s*\([^)]+\)/ },
                        { id: 3, description: 'Inside function, return result: return $total / count($grades);', completed: false, regex: /return\s+[^;]+;/ },
                        { id: 4, description: 'In index.php, call function: echo calculateGPA($myGrades);', completed: false, regex: /echo\s+\w+\s*\(/ }
                    ],
                    files: [
                        { name: 'index.php', language: 'php', content: `<?php
// Student Utility Functions

// 1. Create calculateGPA function


// 2. Create getLetterGrade function


// 3. Create formatStudentInfo function


// Test data
$grades = [3.5, 3.8, 4.0, 3.2];

// Call functions and display results
?>

<!DOCTYPE html>
<html>
<head><title>PHP Functions</title></head>
<body>
    <h1>Student Functions</h1>
    <!-- Display results here -->
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body { font-family: sans-serif; padding: 40px; }` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'php-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Control Structures Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'How do you iterate over an array in PHP?',
                            options: ['for...in', 'forEach', 'foreach', 'for...of'],
                            correctIndex: 2,
                            explanation: 'PHP uses foreach to iterate over arrays.'
                        },
                        {
                            id: 'q2',
                            question: 'What does array_sum() do?',
                            options: [
                                'Counts array elements',
                                'Adds all array values',
                                'Sorts array',
                                'Merges arrays'
                            ],
                            correctIndex: 1,
                            explanation: 'array_sum() returns the sum of all values in an array.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'php-unit-3',
            title: 'Forms & Superglobals',
            description: 'Handle user input with PHP',
            items: [
                {
                    id: 'php-3-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'PHP Superglobals',
                    duration: '5 min read',
                    content: `
# PHP Superglobals

**Superglobals** are built-in variables that are always available in all scopes.

## Common Superglobals

| Variable | Purpose | Example |
|----------|---------|---------|
| \`$_GET\` | URL parameters | \`?name=Alice\` |
| \`$_POST\` | Form data (POST) | Login forms |
| \`$_REQUEST\` | GET + POST + COOKIE | General input |
| \`$_SESSION\` | Session data | User login state |
| \`$_COOKIE\` | Cookie data | Remember me |
| \`$_SERVER\` | Server info | IP, user agent |
| \`$_FILES\` | Uploaded files | File uploads |

## $_GET Example

\`\`\`php
// URL: page.php?name=Alice&age=21
<?php
$name = $_GET['name'];  // "Alice"
$age = $_GET['age'];    // "21"

echo "Hello, $name! You are $age years old.";
?>
\`\`\`

## $_POST Example

\`\`\`php
// Form submitted with POST method
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Process login
}
?>
\`\`\`

## $_SERVER Examples

\`\`\`php
<?php
$_SERVER['REQUEST_METHOD'];  // GET, POST, etc
$_SERVER['REMOTE_ADDR'];     // User's IP
$_SERVER['HTTP_USER_AGENT']; // Browser info
$_SERVER['REQUEST_URI'];     // Current page URL
?>
\`\`\`

> ⚠️ **Security**: Always validate and sanitize user input!
                    `
                },
                {
                    id: 'php-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Processing Forms',
                    duration: '30 min',
                    content: `
# Processing Forms with PHP

## Basic Form

\`\`\`html
<form method="POST" action="process.php">
    <input type="text" name="username" required>
    <input type="password" name="password" required>
    <button type="submit">Login</button>
</form>
\`\`\`

## Processing POST Data

\`\`\`php
<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Validate
    if (empty($username) || empty($password)) {
        $error = "All fields required";
    } else {
        // Process login
        echo "Welcome, $username!";
    }
}
?>
\`\`\`

## Input Validation

\`\`\`php
<?php
// Check if empty
if (empty($_POST['email'])) {
    $error = "Email required";
}

// Validate email
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $error = "Invalid email";
}

// Check length
if (strlen($_POST['password']) < 8) {
    $error = "Password must be 8+ characters";
}
?>
\`\`\`

## Sanitizing Input

\`\`\`php
<?php
// Remove HTML tags
$clean = strip_tags($_POST['comment']);

// Escape HTML entities
$safe = htmlspecialchars($_POST['comment']);

// Trim whitespace
$trimmed = trim($_POST['name']);

// Filter input
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
?>
\`\`\`

## Self-Processing Form

\`\`\`php
<?php
$error = "";
$success = "";

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    
    if (empty($name)) {
        $error = "Name required";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = "Invalid email";
    } else {
        $success = "Form submitted successfully!";
    }
}
?>

<form method="POST">
    <?php if ($error): ?>
        <p style="color: red;"><?php echo $error; ?></p>
    <?php endif; ?>
    
    <?php if ($success): ?>
        <p style="color: green;"><?php echo $success; ?></p>
    <?php endif; ?>
    
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <button type="submit">Submit</button>
</form>
\`\`\`

---

## Your Mission
Create a student registration form with validation.
                    `,
                    tasks: [
                        { id: 1, description: 'In index.php, form already has method="POST" - make sure it exists in HTML', completed: false, regex: /<form[^>]*method=["']POST["']/i },
                        { id: 2, description: 'In PHP, check method: if ($_SERVER["REQUEST_METHOD"] == "POST") { ... }', completed: false, regex: /\$_SERVER\s*\[\s*['"]REQUEST_METHOD['"]\s*\]\s*==\s*['"]POST['"]/ },
                        { id: 3, description: 'In PHP, get form data: $name = $_POST["name"]; $email = $_POST["email"];', completed: false, regex: /\$_POST\s*\[/ },
                        { id: 4, description: 'In PHP, validate: if (empty($name)) { $error = "Name required"; }', completed: false, regex: /(empty\s*\(|strlen\s*\(|filter_var\s*\()/ },
                        { id: 5, description: 'In HTML, display message: <?php echo $error; ?> or <?php echo $success; ?>', completed: false, regex: /(echo|<\?=)\s*\$\w*(error|success)/ }
                    ],
                    files: [
                        { name: 'index.php', language: 'php', content: `<?php
// Student Registration Form

$error = "";
$success = "";

// Process form submission


?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Student Registration</h1>
        
        <!-- Display messages -->
        
        
        <form method="POST">
            <div class="form-group">
                <label>Full Name:</label>
                <input type="text" name="name" required>
            </div>
            
            <div class="form-group">
                <label>Student ID:</label>
                <input type="text" name="student_id" required>
            </div>
            
            <div class="form-group">
                <label>Email:</label>
                <input type="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label>Major:</label>
                <select name="major" required>
                    <option value="">-- Select --</option>
                    <option value="SE">Software Engineering</option>
                    <option value="IT">Information Technology</option>
                    <option value="CS">Computer Science</option>
                </select>
            </div>
            
            <button type="submit">Register</button>
        </form>
    </div>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `body {
    font-family: sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    max-width: 500px;
    width: 100%;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
}

input, select {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
}

input:focus, select:focus {
    outline: none;
    border-color: #667eea;
}

button {
    width: 100%;
    padding: 15px;
    background: #667eea;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
}

button:hover {
    background: #5568d3;
}

.error {
    background: #fee;
    color: #c00;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.success {
    background: #efe;
    color: #0a0;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
}` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'php-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Forms & Superglobals Quiz',
                    duration: '3 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Which superglobal is used for form data submitted via POST?',
                            options: ['$_GET', '$_POST', '$_FORM', '$_DATA'],
                            correctIndex: 1,
                            explanation: '$_POST contains data from forms submitted with method="POST".'
                        },
                        {
                            id: 'q2',
                            question: 'Why should you validate user input?',
                            options: [
                                'To make code faster',
                                'To prevent security vulnerabilities',
                                'To save database space',
                                'It is optional'
                            ],
                            correctIndex: 1,
                            explanation: 'Validating input prevents SQL injection, XSS, and other security issues.'
                        }
                    ]
                }
            ]
        },

        {
            id: 'php-unit-4',
            title: 'Final Project',
            description: 'Build a complete PHP application',
            items: [
                {
                    id: 'php-4-project',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'Student Management System',
                    duration: '120 min',
                    difficulty: 'Intermediate',
                    description: 'Build a student management system with CRUD operations.',
                    content: `
# 🎯 Project: Student Management System

## Overview
Create a PHP application to manage student records (without database for now).

## Features Required

### Core Functionality
- [ ] Add new student
- [ ] View all students
- [ ] Search students
- [ ] Calculate GPA statistics

### Form Validation
- [ ] Required fields
- [ ] Email validation
- [ ] GPA range (0-4)
- [ ] Student ID format

### Data Storage
- [ ] Use PHP sessions to store data
- [ ] Persist across page reloads

## Grading Criteria

| Criteria | Points |
|----------|--------|
| Add student functionality | 25% |
| Form validation | 25% |
| Display students | 20% |
| Search functionality | 15% |
| Code quality & comments | 15% |
                    `,
                    tasks: [
                        { id: 1, description: 'Start session with session_start()', completed: false, regex: /session_start\s*\(\s*\)/ },
                        { id: 2, description: 'Store data in $_SESSION', completed: false, regex: /\$_SESSION\s*\[/ },
                        { id: 3, description: 'Validate form with empty() or filter_var()', completed: false, regex: /(empty\s*\(|filter_var\s*\()/ },
                        { id: 4, description: 'Use foreach to display students', completed: false, regex: /foreach[\s\S]*as/ },
                        { id: 5, description: 'Create at least 2 functions', completed: false, regex: /function\s+\w+[\s\S]*function\s+\w+/ }
                    ],
                    starterFiles: [
                        { name: 'index.php', language: 'php', content: `<?php
session_start();

// Initialize students array if not exists
if (!isset($_SESSION['students'])) {
    $_SESSION['students'] = [];
}

// Add your code here

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🎓 Student Management System</h1>
        
        <!-- Add Student Form -->
        <div class="card">
            <h2>Add New Student</h2>
            <form method="POST">
                <!-- Your form here -->
            </form>
        </div>
        
        <!-- Student List -->
        <div class="card">
            <h2>Student List</h2>
            <!-- Display students here -->
        </div>
    </div>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
    min-height: 100vh;
    padding: 40px 20px;
}

.container {
    max-width: 1000px;
    margin: 0 auto;
}

h1 {
    color: white;
    text-align: center;
    margin-bottom: 40px;
}

.card {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    margin-bottom: 30px;
}

h2 {
    color: #800000;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    color: #333;
}

input, select {
    width: 100%;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
}

button {
    padding: 12px 30px;
    background: #800000;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background: #600000;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background: #f8f9fa;
    font-weight: 600;
}

.error {
    background: #fee;
    color: #c00;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.success {
    background: #efe;
    color: #0a0;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
}` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'php-4-summary',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Course Complete!',
                    duration: '3 min read',
                    content: `
# 🎉 PHP Native Complete!

## What You Mastered

✅ PHP syntax and variables
✅ Control structures (if, loops, switch)
✅ Functions and built-in functions
✅ Superglobals ($_GET, $_POST, $_SESSION)
✅ Form processing and validation
✅ Input sanitization
✅ Session management

## Essential Concepts

\`\`\`php
// Variables
$name = "value";

// Conditionals
if ($condition) { }

// Loops
foreach ($array as $item) { }

// Functions
function name($param) { return $value; }

// Forms
$_POST['field']
$_GET['param']

// Sessions
session_start();
$_SESSION['key'] = $value;
\`\`\`

## Best Practices

1. **Always Validate**: Never trust user input
2. **Sanitize Output**: Use htmlspecialchars()
3. **Use Sessions**: For user state management
4. **Error Handling**: Check for empty values
5. **Security First**: Prevent SQL injection, XSS

## What's Next?

Continue with **MySQL** to learn database integration and build full-stack applications!

> "PHP is the duct tape of the Internet." - Every PHP Developer
                    `
                }
            ]
        }
    ]
};

export default phpCourse;
