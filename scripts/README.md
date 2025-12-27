# Course Lesson Fixer Scripts

This directory contains scripts to automatically fix and standardize lesson formats across all courses.

## 📁 Files

- `fix-lessons.js` - Main script to fix all lessons
- `templates/` - Template files for different course types
- `utils/` - Helper functions

## 🚀 Usage

### Fix All Lessons

```bash
node scripts/fix-lessons.js
```

This will:
1. Scan all course units in `src/data/courses/`
2. Find LESSON items with incorrect format
3. Generate proper HTML boilerplate, CSS, and tasks
4. Update files automatically

### Dry Run (Preview Changes)

```bash
node scripts/fix-lessons.js --dry-run
```

Shows what would be changed without actually modifying files.

### Fix Specific Course

```bash
node scripts/fix-lessons.js --course html5
```

Only fixes lessons in the specified course.

## 📋 What Gets Fixed

The script fixes these issues:

1. **Incorrect file format**
   - Changes `files` to proper array format
   - Removes `starterFiles` if present

2. **Missing HTML boilerplate**
   - Adds proper `<!DOCTYPE html>` structure
   - Includes meta tags and CSS link

3. **Empty starter files**
   - Adds comment instructions
   - Provides proper structure with placeholders

4. **Simplified tasks**
   - Reduces complex tasks to 3-5 simple steps
   - Updates regex patterns to match

5. **Proper CSS**
   - Adds beautiful, ready-to-use CSS
   - Consistent styling across all lessons

## 🎯 Courses Covered

- ✅ HTML5 (10 units)
- ✅ CSS3 (10 units)
- ✅ JavaScript Basics (10 units)
- ✅ JavaScript ES6+ (10 units)
- ✅ Git (10 units)
- ✅ Tailwind (10 units)
- ✅ React (10 units)

## 📊 Expected Results

After running the script:
- ~130 lessons will be standardized
- All lessons will have proper HTML boilerplate
- All lessons will have working starter files
- Students can actually practice coding!

## ⚠️ Important Notes

1. **Backup first!** The script modifies files directly
2. **Review changes** after running (use git diff)
3. **Test lessons** to ensure they work correctly
4. **Manual adjustments** may be needed for special cases

## 🔧 Development

To modify the script:

1. Edit `fix-lessons.js` for main logic
2. Add templates in `templates/` directory
3. Add helper functions in `utils/`

## 📝 TODO

- [ ] Implement actual fixing logic (currently just detects)
- [ ] Add template generation for different course types
- [ ] Add validation after fixing
- [ ] Add rollback functionality
- [ ] Add progress bar for long operations
