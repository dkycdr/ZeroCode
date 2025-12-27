/**
 * PULSE Admin Setup - Simple Version
 * 
 * CARA PAKAI:
 * 1. Register dulu 3 akun ini lewat UI Register page:
 *    - admin1@gmail.com / Admin123!
 *    - admin2@gmail.com / Admin123!
 *    - admin3@gmail.com / Admin123!
 * 
 * 2. Setelah register, login dengan salah satu akun
 * 
 * 3. Buka browser console (F12)
 * 
 * 4. Copy-paste script ini ke console
 * 
 * 5. Script akan set semua course jadi 100% complete untuk akun yang sedang login
 */

(function setupAdminProgress() {
    console.log('🚀 Setting up admin progress...\n');

    // Get current user
    const currentUser = JSON.parse(localStorage.getItem('pulse_user'));
    
    if (!currentUser) {
        console.error('❌ No user logged in! Please login first.');
        return;
    }

    console.log(`✅ Current user: ${currentUser.email}`);

    // Complete progress structure for all courses
    const completeProgress = {
        // HTML5 - 4 units
        'html5': {
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
        },

        // CSS3 - 5 units
        'css3': {
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
        },

        // JavaScript Basics - 6 units
        'js-basics': {
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
        },

        // Git - 4 units
        'git': {
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
        },

        // Tailwind - 5 units
        'tailwind': {
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
        },

        // DOM - 3 units
        'dom': {
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
        },

        // PHP - 4 units
        'php': {
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
        },

        // MySQL - 5 units
        'mysql': {
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
        },

        // Python - 5 units
        'python': {
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
        },

        // React - 5 units
        'react': {
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
        }
    };

    // Save progress
    const progressKey = `pulse_progress_${currentUser.email}`;
    localStorage.setItem(progressKey, JSON.stringify(completeProgress));

    console.log('\n🎉 Success! All courses set to 100% complete!');
    console.log('\n📊 Completed Courses:');
    console.log('  ✅ HTML5 (4 units)');
    console.log('  ✅ CSS3 (5 units)');
    console.log('  ✅ JavaScript Basics (6 units)');
    console.log('  ✅ Git & GitHub (4 units)');
    console.log('  ✅ Tailwind CSS (5 units)');
    console.log('  ✅ DOM Manipulation (3 units)');
    console.log('  ✅ PHP (4 units)');
    console.log('  ✅ MySQL (5 units)');
    console.log('  ✅ Python (5 units)');
    console.log('  ✅ React (5 units)');
    console.log('\n💡 Refresh the page to see the changes!');

})();
