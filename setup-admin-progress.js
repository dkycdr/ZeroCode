/**
 * PULSE Admin Progress Setup
 * 
 * Sets all courses and items to completed for the currently logged-in user.
 * 
 * INSTRUCTIONS:
 * 1. Register admin account through UI
 * 2. Login with the admin account
 * 3. Open browser console (F12)
 * 4. Copy and paste this entire script
 * 5. Press Enter
 * 6. Refresh the page
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

    // All item IDs (lessons, quizzes, projects, etc.)
    const allItems = [
        // HTML5
        'html5-1-1', 'html5-1-2', 'html5-1-quiz',
        'html5-2-1', 'html5-2-2', 'html5-2-quiz',
        'html5-3-1', 'html5-3-quiz',
        'html5-4-project', 'html5-4-summary',
        
        // CSS3
        'css3-1-1', 'css3-1-2', 'css3-1-quiz',
        'css3-2-1', 'css3-2-quiz',
        'css3-3-1', 'css3-3-quiz',
        'css3-4-1', 'css3-4-quiz',
        'css3-5-project', 'css3-5-summary',
        
        // JavaScript Basics
        'js-basics-1-1', 'js-basics-1-2', 'js-basics-1-quiz',
        'js-basics-2-1', 'js-basics-2-quiz',
        'js-basics-3-1', 'js-basics-3-quiz',
        'js-basics-4-1', 'js-basics-4-quiz',
        'js-basics-5-1', 'js-basics-5-quiz',
        'js-basics-6-project', 'js-basics-6-summary',
        
        // Git
        'git-1-1', 'git-1-2', 'git-1-quiz',
        'git-2-1', 'git-2-quiz',
        'git-3-1', 'git-3-quiz',
        'git-4-project', 'git-4-summary',
        
        // Tailwind
        'tailwind-1-1', 'tailwind-1-2', 'tailwind-1-quiz',
        'tailwind-2-1', 'tailwind-2-quiz',
        'tailwind-3-1', 'tailwind-3-quiz',
        'tailwind-4-1', 'tailwind-4-quiz',
        'tailwind-5-project', 'tailwind-5-summary',
        
        // DOM
        'dom-1-1', 'dom-1-2', 'dom-1-quiz',
        'dom-2-1', 'dom-2-quiz',
        'dom-3-project', 'dom-3-summary',
        
        // PHP
        'php-1-1', 'php-1-2', 'php-1-quiz',
        'php-2-1', 'php-2-quiz',
        'php-3-1', 'php-3-quiz',
        'php-4-project', 'php-4-summary',
        
        // MySQL
        'mysql-1-1', 'mysql-1-2', 'mysql-1-quiz',
        'mysql-2-1', 'mysql-2-2', 'mysql-2-quiz',
        'mysql-3-1', 'mysql-3-2', 'mysql-3-quiz',
        'mysql-4-1', 'mysql-4-2', 'mysql-4-quiz',
        'mysql-5-project', 'mysql-5-summary',
        
        // Python
        'python-1-1', 'python-1-2', 'python-1-quiz',
        'python-2-1', 'python-2-quiz',
        'python-3-1', 'python-3-quiz',
        'python-4-1', 'python-4-quiz',
        'python-5-project', 'python-5-summary',
        
        // React
        'react-1-1', 'react-1-2', 'react-1-quiz',
        'react-2-1', 'react-2-quiz',
        'react-3-1', 'react-3-quiz',
        'react-4-1', 'react-4-quiz',
        'react-5-project', 'react-5-summary'
    ];

    // Save progress using the correct keys
    const userKey = currentUser.email;
    localStorage.setItem(`pulse_progress_courses_${userKey}`, JSON.stringify(allCourses));
    localStorage.setItem(`pulse_progress_items_${userKey}`, JSON.stringify(allItems));

    console.log('\n🎉 Success! All courses and items marked as complete!');
    console.log(`\n📊 Progress set for: ${currentUser.email}`);
    console.log(`  ✅ ${allCourses.length} courses completed`);
    console.log(`  ✅ ${allItems.length} items completed`);
    console.log('\n💡 Refresh the page to see the changes!');

})();
