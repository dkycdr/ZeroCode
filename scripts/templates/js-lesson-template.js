/**
 * Template for JavaScript course lessons
 */

export default {
    generateStarterFiles: (lessonTitle, tasks) => {
        return [
            {
                name: 'index.html',
                language: 'html',
                content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${lessonTitle}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>⚡ ${lessonTitle}</h1>
    
    <div id="output"></div>
    
    <script src="script.js"></script>
</body>
</html>`
            },
            {
                name: 'style.css',
                language: 'css',
                content: `/* CSS is ready - focus on JavaScript! */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

h1 {
    color: white;
    text-align: center;
    margin-bottom: 30px;
}

#output {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    min-height: 200px;
}`
            },
            {
                name: 'script.js',
                language: 'javascript',
                content: `// Your JavaScript code goes here!

${tasks.map((task, index) => `
// Task ${index + 1}: ${task.description}

`).join('\n')}

// Helper function to display output
function display(message) {
    const output = document.getElementById('output');
    output.innerHTML += '<p>' + message + '</p>';
}

// Test your code
console.log('Script loaded!');`
            }
        ];
    }
};
