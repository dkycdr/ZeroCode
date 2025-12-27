/**
 * Template for CSS course lessons
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
    <h1>🎨 ${lessonTitle}</h1>
    
    <div class="container">
        ${tasks.map((task, index) => `
        <!-- Task ${index + 1}: ${task.description} -->
        <div class="task-${index + 1}">
            <h2>Task ${index + 1}</h2>
            <p>Content here</p>
        </div>
        `).join('\n')}
    </div>
</body>
</html>`
            },
            {
                name: 'style.css',
                language: 'css',
                content: `/* Your CSS goes here! */

/* Base styles are provided */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 20px;
    background: #f5f5f5;
}

h1 {
    text-align: center;
    color: #333;
}

.container {
    max-width: 800px;
    margin: 0 auto;
}

${tasks.map((task, index) => `
/* Task ${index + 1}: ${task.description} */
.task-${index + 1} {
    /* Add your styles here */
}
`).join('\n')}`
            }
        ];
    }
};
