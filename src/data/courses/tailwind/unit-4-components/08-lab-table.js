import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab4Table = {
    id: 'tailwind-4-lesson-4',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab 4: Striped Data Table 📊',
    duration: '30 min',
    content: `
# Lab 4: Striped Data Table 📊

## Scenario
You are building an **Employee Directory**.
A plain white table is hard to read when there are 100 rows. Users lose their place.
You need "Zebra Striping" to guide the eye.

## The Mission
1.  **Stripes**: Paint every even row gray (\`even:bg-gray-50\`). Leave odd rows white.
2.  **Hover**: Highlight the row under the mouse (\`hover:bg-gray-100\`) so the user knows what they are about to click.
3.  **Whitespace**: Prevent text wrapping in names (\`whitespace-nowrap\`) to keep the table neat.

## Logic
The \`even:\` modifier targets the \`:nth-child(even)\` CSS selector automatically.
    `,
    tasks: [
        {
            id: 1,
            description: 'Header Row: bg-gray-50 border-b.',
            completed: false,
            regex: /<thead[^>]*class=["'](?=.*\bbg-gray-50\b)(?=.*\bborder-b\b)[^"']*["']/
        },
        {
            id: 2,
            description: 'Body Rows: bg-white even:bg-gray-50 hover:bg-gray-100.',
            completed: false,
            regex: /<tr[^>]*class=["'](?=.*\bbg-white\b)(?=.*\beven:bg-gray-50\b)(?=.*\bhover:bg-gray-100\b)[^"']*["']/
        },
        {
            id: 3,
            description: 'Cells: px-6 py-4.',
            completed: false,
            regex: /<td[^>]*class=["'](?=.*\bpx-6\b)(?=.*\bpy-4\b)[^"']*["']/
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-10">

    <table class="min-w-full text-left text-sm font-light">
        <!-- Task 1: Header -->
        <thead class="">
            <tr>
                <th scope="col" class="px-6 py-4">Name</th>
                <th scope="col" class="px-6 py-4">Role</th>
                <th scope="col" class="px-6 py-4">Status</th>
            </tr>
        </thead>
        <tbody>
            <!-- Task 2: Row 1 -->
            <tr class="">
                <td class="">Mark</td>
                <td class="">Admin</td>
                <td class="">Active</td>
            </tr>
            <!-- Task 2: Row 2 -->
            <tr class="">
                <td class="">Jacob</td>
                <td class="">User</td>
                <td class="">Inactive</td>
            </tr>
            <!-- Task 2: Row 3 -->
            <tr class="">
                <td class="">Larry</td>
                <td class="">Editor</td>
                <td class="">Active</td>
            </tr>
        </tbody>
    </table>

</body>
</html>`
        }
    ]
};
