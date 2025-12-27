/**
 * Template for HTML course lessons
 * 
 * This template provides the standard structure for HTML lessons
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
    <h1>📝 ${lessonTitle}</h1>
    
    ${tasks.map((task, index) => `
    <!-- Task ${index + 1}: ${task.description} -->
    
    `).join('\n')}
</body>
</html>`
            },
            {
                name: 'style.css',
                language: 'css',
                content: `/* CSS is ready - focus on HTML! */
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
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

h2 {
    color: #333;
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin-top: 30px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}`
            }
        ];
    },
    
    simplifyTasks: (existingTasks) => {
        // Take first 3-5 tasks and simplify them
        return existingTasks.slice(0, Math.min(5, existingTasks.length)).map((task, index) => ({
            id: index + 1,
            description: task.description || `Complete task ${index + 1}`,
            completed: false,
            regex: task.regex || /.+/i
        }));
    }
};
