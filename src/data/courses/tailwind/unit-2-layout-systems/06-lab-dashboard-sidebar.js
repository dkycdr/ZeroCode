import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const lab3DashboardSidebar = {
    id: 'tailwind-u2-lab-3-sidebar',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Dashboard Sidebar Layout',
    duration: '30 min',
    content: `
# Lab: Dashboard Sidebar Layout

## The Mission

Build a dashboard layout with sidebar using Flexbox:
- Fixed sidebar (256px width)
- Main content area (flex-1)
- Full screen height
- Scrollable content area

Perfect for admin panels! 💼
`,
    tasks: [
        {
            id: 1,
            description: 'Create flex container with flex h-screen',
            completed: false,
            regex: /class\s*=\s*["'][^"']*flex[^"']*h-screen[^"']*["']/,
            hint: {
                concept: 'Full Height Layout',
                strategy: 'flex enables flexbox, h-screen makes it full viewport height',
                solution: 'class="flex h-screen"'
            }
        },
        {
            id: 2,
            description: 'Add sidebar with w-64 bg-gray-800 text-white',
            completed: false,
            regex: /<aside[^>]*class\s*=\s*["'][^"']*w-64[^"']*bg-gray-800[^"']*text-white[^"']*["']/,
            hint: {
                concept: 'Sidebar',
                strategy: 'w-64 = 256px fixed width, dark background for contrast',
                solution: '<aside class="w-64 bg-gray-800 text-white">...'
            }
        },
        {
            id: 3,
            description: 'Add main content area with flex-1 overflow-auto bg-gray-50',
            completed: false,
            regex: /<main[^>]*class\s*=\s*["'][^"']*flex-1[^"']*overflow-auto[^"']*bg-gray-50[^"']*["']/,
            hint: {
                concept: 'Main Content',
                strategy: 'flex-1 fills remaining space, overflow-auto enables scrolling',
                solution: '<main class="flex-1 overflow-auto bg-gray-50">...'
            }
        },
        {
            id: 4,
            description: 'Create sidebar nav with flex flex-col gap-2 p-4',
            completed: false,
            regex: /<nav[^>]*class\s*=\s*["'][^"']*flex[^"']*flex-col[^"']*gap-2[^"']*p-4[^"']*["']/,
            hint: {
                concept: 'Vertical Navigation',
                strategy: 'flex-col stacks items vertically, gap-2 adds spacing',
                solution: '<nav class="flex flex-col gap-2 p-4">...'
            }
        },
        {
            id: 5,
            description: 'Style nav links with flex items-center gap-3 hover:bg-gray-700 px-4 py-2 rounded',
            completed: false,
            regex: /<a[^>]*class\s*=\s*["'][^"']*flex[^"']*items-center[^"']*gap-3[^"']*hover:bg-gray-700[^"']*px-4[^"']*py-2[^"']*rounded[^"']*["']/,
            hint: {
                concept: 'Nav Link Styling',
                strategy: 'Horizontal flex for icon+text, hover effect for interactivity',
                solution: '<a class="flex items-center gap-3 hover:bg-gray-700 px-4 py-2 rounded">...'
            }
        },
        {
            id: 6,
            description: 'Add active state with bg-blue-600',
            completed: false,
            regex: /class\s*=\s*["'][^"']*flex[^"']*items-center[^"']*gap-3[^"']*bg-blue-600[^"']*px-4[^"']*py-2[^"']*rounded[^"']*["']/,
            hint: {
                concept: 'Active Link',
                strategy: 'Different background color to show current page',
                solution: 'class="flex items-center gap-3 bg-blue-600 px-4 py-2 rounded"'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Layout</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    
    <!-- Task 1: Flex Container -->
    <div class="">
        
        <!-- Task 2: Sidebar -->
        <aside class="">
            <!-- Sidebar Header -->
            <div class="p-4 border-b border-gray-700">
                <h1 class="text-xl font-bold">Dashboard</h1>
            </div>
            
            <!-- Task 4: Vertical Navigation -->
            <nav class="">
                <!-- Task 6: Active Link -->
                <a href="#" class="">
                    <span class="text-xl">📊</span>
                    <span>Overview</span>
                </a>
                
                <!-- Task 5: Regular Links -->
                <a href="#" class="">
                    <span class="text-xl">📈</span>
                    <span>Analytics</span>
                </a>
                
                <a href="#" class="flex items-center gap-3 hover:bg-gray-700 px-4 py-2 rounded">
                    <span class="text-xl">👥</span>
                    <span>Users</span>
                </a>
                
                <a href="#" class="flex items-center gap-3 hover:bg-gray-700 px-4 py-2 rounded">
                    <span class="text-xl">⚙️</span>
                    <span>Settings</span>
                </a>
                
                <a href="#" class="flex items-center gap-3 hover:bg-gray-700 px-4 py-2 rounded">
                    <span class="text-xl">📁</span>
                    <span>Files</span>
                </a>
            </nav>
            
            <!-- Sidebar Footer -->
            <div class="mt-auto p-4 border-t border-gray-700">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold">
                        JD
                    </div>
                    <div>
                        <p class="font-semibold">John Doe</p>
                        <p class="text-sm text-gray-400">john@example.com</p>
                    </div>
                </div>
            </div>
        </aside>
        
        <!-- Task 3: Main Content Area -->
        <main class="">
            <!-- Header -->
            <header class="bg-white shadow p-6 mb-6">
                <h2 class="text-3xl font-bold text-gray-800">Dashboard Overview</h2>
                <p class="text-gray-600 mt-1">Welcome back! Here's what's happening.</p>
            </header>
            
            <!-- Content -->
            <div class="p-6">
                <!-- Stats Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div class="bg-white p-6 rounded-lg shadow">
                        <p class="text-gray-600 text-sm font-semibold uppercase">Total Users</p>
                        <p class="text-3xl font-bold text-gray-800 mt-2">12,543</p>
                        <p class="text-green-600 text-sm mt-2">+12% from last month</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-lg shadow">
                        <p class="text-gray-600 text-sm font-semibold uppercase">Revenue</p>
                        <p class="text-3xl font-bold text-gray-800 mt-2">$54,321</p>
                        <p class="text-green-600 text-sm mt-2">+8% from last month</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-lg shadow">
                        <p class="text-gray-600 text-sm font-semibold uppercase">Active Projects</p>
                        <p class="text-3xl font-bold text-gray-800 mt-2">143</p>
                        <p class="text-yellow-600 text-sm mt-2">4 need attention</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-lg shadow">
                        <p class="text-gray-600 text-sm font-semibold uppercase">Tasks Completed</p>
                        <p class="text-3xl font-bold text-gray-800 mt-2">89%</p>
                        <p class="text-green-600 text-sm mt-2">Above target</p>
                    </div>
                </div>
                
                <!-- Activity Feed -->
                <div class="bg-white rounded-lg shadow p-6">
                    <h3 class="text-xl font-bold mb-4">Recent Activity</h3>
                    <div class="space-y-4">
                        <div class="flex items-start gap-3 pb-4 border-b">
                            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                AB
                            </div>
                            <div class="flex-1">
                                <p class="font-semibold">Alice Brown</p>
                                <p class="text-gray-600 text-sm">Completed the design review</p>
                                <p class="text-gray-400 text-xs mt-1">2 hours ago</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start gap-3 pb-4 border-b">
                            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                                CM
                            </div>
                            <div class="flex-1">
                                <p class="font-semibold">Charlie Miller</p>
                                <p class="text-gray-600 text-sm">Deployed new features to production</p>
                                <p class="text-gray-400 text-xs mt-1">5 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    </div>
    
</body>
</html>`
        }
    ]
};
