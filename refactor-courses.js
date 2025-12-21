// Script to refactor courses from single files to folder structure
const fs = require('fs');
const path = require('path');

const coursesDir = path.join(__dirname, 'src/data/courses');
const CONTENT_TYPES = {
    INFORMATIONAL: 'informational',
    LESSON: 'lesson',
    QUIZ: 'quiz',
    PROJECT: 'project'
};

// Helper to extract units from a course file
function extractUnits(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const units = [];

    // Find all unit blocks
    const unitRegex = /\/\/\s*UNIT\s+\d+[:\s]+([^\n]+)\s*\/\/\s*={50,}\s*\{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?description:\s*['"]([^'"]+)['"][\s\S]*?items:\s*\[([\s\S]*?)\]\s*\}/g;

    let match;
    while ((match = unitRegex.exec(content)) !== null) {
        const unitTitle = match[1].trim();
        const unitId = match[2];
        const title = match[3];
        const description = match[4];
        const itemsContent = match[5];

        // Extract items
        const items = extractItems(itemsContent);

        units.push({
            id: unitId,
            title: title,
            description: description,
            items: items
        });
    }

    return units;
}

function extractItems(itemsContent) {
    // This is a simplified extraction - actual implementation would need more parsing
    // For now, we'll use a regex-based approach
    const items = [];
    const itemRegex = /\{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?type:\s*(CONTENT_TYPES\.\w+|['"]([^'"]+)['"])[\s\S]*?\}/g;

    // Actually, let's use a simpler approach - just return the raw items content
    // The actual parsing will be done when we write the files
    return itemsContent;
}

// Main refactoring function
function refactorCourse(courseName, courseFile) {
    const coursePath = path.join(coursesDir, courseFile);
    const courseFolder = path.join(coursesDir, courseName);

    // Create folder
    if (!fs.existsSync(courseFolder)) {
        fs.mkdirSync(courseFolder, { recursive: true });
    }

    // Read the course file
    const content = fs.readFileSync(coursePath, 'utf8');

    // Extract course metadata
    const idMatch = content.match(/id:\s*['"]([^'"]+)['"]/);
    const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
    const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);

    const courseId = idMatch ? idMatch[1] : courseName;
    const courseTitle = titleMatch ? titleMatch[1] : courseName;
    const courseDesc = descMatch ? descMatch[1] : '';

    // Extract units - using a simpler regex approach
    const units = [];
    const unitBlocks = content.split(/\/\/\s*={50,}\s*\/\/\s*UNIT\s+\d+[:\s]+/);

    for (let i = 1; i < unitBlocks.length; i++) {
        const unitBlock = unitBlocks[i];
        const unitMatch = unitBlock.match(/([^\n]+)[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?title:\s*['"]([^'"]+)['"][\s\S]*?description:\s*['"]([^'"]+)['"][\s\S]*?items:\s*\[([\s\S]*?)\]\s*\}/);

        if (unitMatch) {
            const unitId = unitMatch[2];
            const unitTitle = unitMatch[3];
            const unitDesc = unitMatch[4];
            const itemsContent = unitMatch[5];

            // Write unit file
            const unitFileName = `unit-${i}-${unitId.replace(courseId + '-unit-', '').replace(/-/g, '-')}.js`;
            const unitFilePath = path.join(courseFolder, unitFileName);

            const unitFileContent = `// ${courseTitle} - ${unitTitle}
export const unit${i}${unitTitle.replace(/\s+/g, '')} = {
    id: '${unitId}',
    title: '${unitTitle}',
    description: '${unitDesc}',
    items: ${itemsContent}
};
`;

            fs.writeFileSync(unitFilePath, unitFileContent);
            units.push({ fileName: unitFileName, exportName: `unit${i}${unitTitle.replace(/\s+/g, '')}` });
        }
    }

    // Create index.js
    const indexContent = units.map((unit, idx) =>
        `import { ${unit.exportName} } from './${unit.fileName.replace('.js', '')}';`
    ).join('\n') + `\n\nexport const ${courseName}Course = {\n    id: '${courseId}',\n    title: '${courseTitle}',\n    description: '${courseDesc}',\n    units: [\n        ${units.map(u => u.exportName).join(',\n        ')}\n    ]\n};`;

    fs.writeFileSync(path.join(courseFolder, 'index.js'), indexContent);

    console.log(`✅ Refactored ${courseName}`);
}

// List of courses to refactor
const coursesToRefactor = [
    { name: 'react', file: 'react.js' },
    { name: 'git', file: 'git.js' },
    { name: 'tailwind', file: 'tailwind.js' },
    { name: 'dom', file: 'dom.js' },
    { name: 'php', file: 'php.js' },
    { name: 'mysql', file: 'mysql.js' },
    { name: 'python', file: 'python.js' },
    { name: 'jsEs6', file: 'jsEs6.js' },
    { name: 'typescript', file: 'typescript.js' },
    { name: 'node', file: 'node.js' },
    { name: 'mongodb', file: 'mongodb.js' },
    { name: 'nextjs', file: 'nextjs.js' },
    { name: 'cicd', file: 'cicd.js' }
];

// Run refactoring
console.log('Starting course refactoring...\n');
coursesToRefactor.forEach(course => {
    try {
        refactorCourse(course.name, course.file);
    } catch (error) {
        console.error(`❌ Error refactoring ${course.name}:`, error.message);
    }
});

console.log('\n✅ Refactoring complete!');

