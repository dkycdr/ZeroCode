# 📖 How to Use the Lesson Fixer Script

## 🎯 Quick Start

### 1. Preview Changes (Dry Run)

```bash
node scripts/fix-lessons-complete.js --dry-run
```

This will show you what would be fixed WITHOUT actually modifying any files.

### 2. Fix All Lessons

```bash
node scripts/fix-lessons-complete.js
```

This will fix ALL lessons in ALL courses.

### 3. Fix Specific Course

```bash
node scripts/fix-lessons-complete.js --course=html5
```

Only fixes lessons in the HTML5 course.

## 📋 What the Script Does

The script automatically:

1. ✅ Scans all unit files in `src/data/courses/`
2. ✅ Finds LESSON items with incorrect format
3. ✅ Detects these issues:
   - Empty or comment-only HTML files
   - Missing `<!DOCTYPE html>` boilerplate
   - Incorrect `files` vs `starterFiles` format
   - Missing CSS files
   - Missing JavaScript files (for JS courses)

4. ✅ Fixes by:
   - Adding proper HTML boilerplate
   - Adding beautiful CSS
   - Adding JavaScript template (for JS courses)
   - Simplifying tasks to 3-5 steps
   - Adding proper comments and instructions

## 🔍 Example Output

```
🚀 Starting Complete Lesson Fixer...
Mode: LIVE (will modify files)

📚 Processing course: HTML5
──────────────────────────────────────────────────
  📝 unit-1-html-basics.js - 2 lesson(s)
     ✅ Already correct format
  📝 unit-2-semantic-html.js - 1 lesson(s)
     ✅ Already correct format
  📝 unit-3-forms-input.js - 1 lesson(s)
     🔧 Needs fixing...
     ✅ Fixed and saved!

============================================================
📊 SUMMARY
============================================================
Files processed:    11
Lessons found:      12
Lessons fixed:      8
Lessons skipped:    4

✨ Done!
```

## ⚠️ Important Notes

### Before Running:

1. **Commit your changes** to git first!
   ```bash
   git add .
   git commit -m "Before running lesson fixer"
   ```

2. **Run dry-run first** to preview changes
   ```bash
   node scripts/fix-lessons-complete.js --dry-run
   ```

3. **Review the output** to see what will be changed

### After Running:

1. **Check the changes** with git diff
   ```bash
   git diff
   ```

2. **Test a few lessons** to make sure they work

3. **Commit the fixes**
   ```bash
   git add .
   git commit -m "Fix lesson starterFiles format"
   ```

## 🎨 Customization

If you need to customize the templates:

1. Edit files in `scripts/templates/`:
   - `html-lesson-template.js` - For HTML courses
   - `css-lesson-template.js` - For CSS courses
   - `js-lesson-template.js` - For JavaScript courses

2. Modify the CSS, HTML structure, or task format

3. Run the script again

## 🐛 Troubleshooting

### Script doesn't find lessons

Make sure you're running from the project root:
```bash
cd /path/to/your/project
node scripts/fix-lessons-complete.js
```

### Permission denied

Make the script executable:
```bash
chmod +x scripts/fix-lessons-complete.js
```

### Syntax errors after fixing

Some lessons might need manual adjustment. Check the git diff and fix manually.

## 📞 Need Help?

If the script doesn't work as expected:

1. Check the error message
2. Run with `--dry-run` to see what it's trying to do
3. Check the `scripts/README.md` for more details
4. Review the template files in `scripts/templates/`

## 🚀 Advanced Usage

### Fix only specific units

You can manually edit `fix-lessons-complete.js` and modify the `COURSES_TO_FIX` array to include only specific courses.

### Add new course types

1. Create a new template in `scripts/templates/`
2. Add the course to `COURSES_TO_FIX` array
3. Run the script

## ✅ Success Criteria

After running the script, all lessons should have:

- ✅ Proper HTML boilerplate with `<!DOCTYPE html>`
- ✅ CSS file with beautiful styling
- ✅ JavaScript file (for JS courses)
- ✅ 3-5 simple, clear tasks
- ✅ Comment instructions in starter files
- ✅ No answers in starter files (empty templates only)

## 🎉 You're Ready!

Now you can run the script and fix all lessons automatically!

```bash
# Preview first
node scripts/fix-lessons-complete.js --dry-run

# If it looks good, run for real
node scripts/fix-lessons-complete.js
```

Good luck! 🚀
