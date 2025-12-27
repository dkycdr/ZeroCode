/**
 * PULSE Admin Account Setup Script
 * 
 * This script creates 3 admin accounts with all courses unlocked and completed.
 * 
 * HOW TO USE:
 * 1. Open your PULSE application in browser
 * 2. Open Browser Console (F12 or Right Click > Inspect > Console)
 * 3. Copy and paste this entire script into the console
 * 4. Press Enter to execute
 * 5. You'll see success messages for each account created
 * 
 * ADMIN ACCOUNTS:
 * 1. admin1@presuniv.ac.id / Admin123!
 * 2. admin2@presuniv.ac.id / Admin123!
 * 3. admin3@presuniv.ac.id / Admin123!
 */

(async function setupAdminAccounts() {
    console.log('🚀 Starting PULSE Admin Account Setup...\n');

    // Admin account data
    const adminAccounts = [
        {
            name: 'Admin One',
            email: 'admin1@gmail.com',
            major: 'Software Engineering',
            password: 'Admin123!'
        },
        {
            name: 'Admin Two',
            email: 'admin2@gmail.com',
            major: 'Information Technology',
            password: 'Admin123!'
        },
        {
            name: 'Admin Three',
            email: 'admin3@gmail.com',
            major: 'Computer Science',
            password: 'Admin123!'
        }
    ];

    // All course IDs
    const allCourses = [
        'html5',
        'css3',
        'js-basics',
        'git',
        'tailwind',
        'dom',
        'php',
        'mysql',
        'python',
        'react'
    ];

    // Complete progress structure for all courses
    const generateCompleteProgress = () => {
        const progress = {};
        
        // HTML5 - 4 units
        progress['html5'] = {
            'html5-unit-1': {
                'html5-1-1': { completed: true, completedAt: new Date().toISOString() },
                'html5-1-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }, { id: 4, completed: true }
                ]},
                'html5-1-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'html5-unit-2': {
                'html5-2-1': { completed: true, completedAt: new Date().toISOString() },
                'html5-2-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'html5-2-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'html5-unit-3': {
                'html5-3-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'html5-3-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'html5-unit-4': {
                'html5-4-project': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }, { id: 4, completed: true }, { id: 5, completed: true }
                ]},
                'html5-4-summary': { completed: true, completedAt: new Date().toISOString() }
            }
        };

        // CSS3 - 5 units
        progress['css3'] = {
            'css3-unit-1': {
                'css3-1-1': { completed: true, completedAt: new Date().toISOString() },
                'css3-1-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'css3-1-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'css3-unit-2': {
                'css3-2-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'css3-2-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'css3-unit-3': {
                'css3-3-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'css3-3-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'css3-unit-4': {
                'css3-4-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'css3-4-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'css3-unit-5': {
                'css3-5-project': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }, { id: 4, completed: true }
                ]},
                'css3-5-summary': { completed: true, completedAt: new Date().toISOString() }
            }
        };

        // JavaScript Basics - 6 units
        progress['js-basics'] = {
            'js-basics-unit-1': {
                'js-basics-1-1': { completed: true, completedAt: new Date().toISOString() },
                'js-basics-1-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'js-basics-1-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'js-basics-unit-2': {
                'js-basics-2-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'js-basics-2-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'js-basics-unit-3': {
                'js-basics-3-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'js-basics-3-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'js-basics-unit-4': {
                'js-basics-4-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'js-basics-4-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'js-basics-unit-5': {
                'js-basics-5-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'js-basics-5-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'js-basics-unit-6': {
                'js-basics-6-project': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }, { id: 4, completed: true }
                ]},
                'js-basics-6-summary': { completed: true, completedAt: new Date().toISOString() }
            }
        };

        // Git - 4 units
        progress['git'] = {
            'git-unit-1': {
                'git-1-1': { completed: true, completedAt: new Date().toISOString() },
                'git-1-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'git-1-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'git-unit-2': {
                'git-2-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'git-2-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'git-unit-3': {
                'git-3-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'git-3-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'git-unit-4': {
                'git-4-project': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'git-4-summary': { completed: true, completedAt: new Date().toISOString() }
            }
        };

        // Tailwind - 5 units
        progress['tailwind'] = {
            'tailwind-unit-1': {
                'tailwind-1-1': { completed: true, completedAt: new Date().toISOString() },
                'tailwind-1-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'tailwind-1-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'tailwind-unit-2': {
                'tailwind-2-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'tailwind-2-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'tailwind-unit-3': {
                'tailwind-3-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'tailwind-3-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'tailwind-unit-4': {
                'tailwind-4-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'tailwind-4-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'tailwind-unit-5': {
                'tailwind-5-project': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'tailwind-5-summary': { completed: true, completedAt: new Date().toISOString() }
            }
        };

        // DOM Manipulation - 3 units
        progress['dom'] = {
            'dom-unit-1': {
                'dom-1-1': { completed: true, completedAt: new Date().toISOString() },
                'dom-1-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'dom-1-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'dom-unit-2': {
                'dom-2-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'dom-2-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'dom-unit-3': {
                'dom-3-project': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'dom-3-summary': { completed: true, completedAt: new Date().toISOString() }
            }
        };

        // PHP - 4 units
        progress['php'] = {
            'php-unit-1': {
                'php-1-1': { completed: true, completedAt: new Date().toISOString() },
                'php-1-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'php-1-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'php-unit-2': {
                'php-2-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'php-2-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'php-unit-3': {
                'php-3-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'php-3-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'php-unit-4': {
                'php-4-project': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'php-4-summary': { completed: true, completedAt: new Date().toISOString() }
            }
        };

        // MySQL - 5 units
        progress['mysql'] = {
            'mysql-unit-1': {
                'mysql-1-1': { completed: true, completedAt: new Date().toISOString() },
                'mysql-1-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }, { id: 4, completed: true }
                ]},
                'mysql-1-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'mysql-unit-2': {
                'mysql-2-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }, { id: 4, completed: true }
                ]},
                'mysql-2-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }, { id: 4, completed: true }
                ]},
                'mysql-2-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'mysql-unit-3': {
                'mysql-3-1': { completed: true, completedAt: new Date().toISOString() },
                'mysql-3-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }, { id: 4, completed: true }
                ]},
                'mysql-3-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'mysql-unit-4': {
                'mysql-4-1': { completed: true, completedAt: new Date().toISOString() },
                'mysql-4-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }, { id: 4, completed: true }
                ]},
                'mysql-4-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'mysql-unit-5': {
                'mysql-5-project': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }, { id: 4, completed: true }, { id: 5, completed: true }, { id: 6, completed: true }
                ]},
                'mysql-5-summary': { completed: true, completedAt: new Date().toISOString() }
            }
        };

        // Python - 5 units
        progress['python'] = {
            'python-unit-1': {
                'python-1-1': { completed: true, completedAt: new Date().toISOString() },
                'python-1-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'python-1-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'python-unit-2': {
                'python-2-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'python-2-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'python-unit-3': {
                'python-3-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'python-3-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'python-unit-4': {
                'python-4-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'python-4-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'python-unit-5': {
                'python-5-project': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'python-5-summary': { completed: true, completedAt: new Date().toISOString() }
            }
        };

        // React - 5 units
        progress['react'] = {
            'react-unit-1': {
                'react-1-1': { completed: true, completedAt: new Date().toISOString() },
                'react-1-2': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'react-1-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'react-unit-2': {
                'react-2-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'react-2-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'react-unit-3': {
                'react-3-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'react-3-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'react-unit-4': {
                'react-4-1': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'react-4-quiz': { completed: true, completedAt: new Date().toISOString(), quizScore: 100 }
            },
            'react-unit-5': {
                'react-5-project': { completed: true, completedAt: new Date().toISOString(), tasks: [
                    { id: 1, completed: true }, { id: 2, completed: true }, { id: 3, completed: true }
                ]},
                'react-5-summary': { completed: true, completedAt: new Date().toISOString() }
            }
        };

        return progress;
    };

    // Import bcrypt (assuming it's available in the app)
    const bcrypt = window.dcodeIO?.bcrypt || window.bcrypt;
    
    if (!bcrypt) {
        console.error('❌ bcrypt not found! Make sure the app is loaded.');
        return;
    }

    // Get existing users or create new array
    let users = JSON.parse(localStorage.getItem('pulse_users') || '[]');

    // Create each admin account
    for (const admin of adminAccounts) {
        try {
            // Check if user already exists
            const existingUser = users.find(u => u.email === admin.email);
            
            if (existingUser) {
                console.log(`⚠️  User ${admin.email} already exists. Skipping...`);
                continue;
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(admin.password, salt);

            // Create user object
            const newUser = {
                name: admin.name,
                email: admin.email,
                major: admin.major,
                passwordHash: hashedPassword,
                createdAt: new Date().toISOString(),
                isAdmin: true
            };

            // Add to users array
            users.push(newUser);

            // Create complete progress for this user
            const completeProgress = generateCompleteProgress();
            const progressKey = `pulse_progress_${admin.email}`;
            localStorage.setItem(progressKey, JSON.stringify(completeProgress));

            console.log(`✅ Created admin account: ${admin.email}`);
            console.log(`   Name: ${admin.name}`);
            console.log(`   Major: ${admin.major}`);
            console.log(`   Password: ${admin.password}`);
            console.log(`   All courses: 100% complete\n`);

        } catch (error) {
            console.error(`❌ Error creating ${admin.email}:`, error);
        }
    }

    // Save all users
    localStorage.setItem('pulse_users', JSON.stringify(users));

    console.log('🎉 Admin account setup complete!\n');
    console.log('📝 LOGIN CREDENTIALS:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    adminAccounts.forEach((admin, index) => {
        console.log(`\n${index + 1}. ${admin.name}`);
        console.log(`   Email: ${admin.email}`);
        console.log(`   Password: ${admin.password}`);
        console.log(`   Major: ${admin.major}`);
        console.log(`   Status: All 10 courses completed (100%)`);
    });
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n💡 You can now login with any of these accounts!');
    console.log('🔍 All courses are unlocked and marked as complete for testing.');

})();
