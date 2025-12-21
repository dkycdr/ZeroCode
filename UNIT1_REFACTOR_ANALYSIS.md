# HTML5 Unit 1 - HTML Basics: Comprehensive Refactor Analysis

## Executive Summary

Unit 1 (HTML Basics) will be refactored with 5 key improvements:

1. **Granular Tasks (Lists)** - Break list tasks into smaller steps
2. **Advanced Regex** - Support quote variations, attribute spacing, and order
3. **Validation Hints** - Add specific guidance for each task
4. **Visual Aids** - Add diagrams and comparison tables
5. **Consistency** - Provide minimal boilerplate in all lessons

---

## 1. GRANULAR TASKS (Lists) - html5-1-2

### Current State (3 Tasks)
```
Task 1: Create <ul> with 3 <li> items
Task 2: Create <ol> with 3 <li> items
Task 3: Create nested list
```

### Proposed State (6 Tasks)
```
Task 1: Create <ul> opening tag
Task 2: Add 3 <li> items inside <ul>
Task 3: Close </ul> tag
Task 4: Create <ol> opening tag
Task 5: Add 3 <li> items inside <ol>
Task 6: Close </ol> tag
```

### Benefits
- ✅ Instant feedback on structure
- ✅ Students learn tag pairs first
- ✅ Content comes second
- ✅ Better error isolation
- ✅ Builds confidence progressively

### Task Breakdown Details

**Task 1: Create <ul> opening tag**
- Description: "Create an unordered list by typing <ul>"
- Hint: "The <ul> tag starts an unordered (bulleted) list. Don't forget to close it later with </ul>"
- Regex: `/^\s*<ul\s*>/im`

**Task 2: Add 3 <li> items inside <ul>**
- Description: "Add 3 list items with <li>Item</li> inside the <ul>"
- Hint: "Each item needs <li> opening tag, text, and </li> closing tag. You need exactly 3 items."
- Regex: `/<ul>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<\/ul>/i`

**Task 3: Close </ul> tag**
- Description: "Close the unordered list with </ul>"
- Hint: "Don't forget the closing tag! Every opening tag needs a closing tag with a forward slash."
- Regex: `/<\/ul\s*>/im`

**Task 4: Create <ol> opening tag**
- Description: "Create an ordered list by typing <ol>"
- Hint: "The <ol> tag starts an ordered (numbered) list. Remember to close it with </ol>"
- Regex: `/^\s*<ol\s*>/im`

**Task 5: Add 3 <li> items inside <ol>**
- Description: "Add 3 list items with <li>Item</li> inside the <ol>"
- Hint: "Same as unordered list - each item needs <li>, text, and </li>. You need exactly 3 items."
- Regex: `/<ol>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<\/ol>/i`

**Task 6: Close </ol> tag**
- Description: "Close the ordered list with </ol>"
- Hint: "Close the <ol> tag with </ol>. Make sure all your tags are properly closed!"
- Regex: `/<\/ol\s*>/im`

---

## 2. ADVANCED REGEX - All Lessons

### Current Issues

**html5-1-2 Task 1 (Current):**
```javascript
/<ul>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<\/ul>/i
```
- ❌ Doesn't handle attribute variations
- ❌ Doesn't support different quote types
- ❌ Doesn't handle spacing variations

**html5-1-4 Task 1 (Current):**
```javascript
/<img[^>]*src="[^"]*"[^>]*alt="[^"]+"/i
```
- ❌ Only supports double quotes
- ❌ Doesn't handle `alt` before `src`
- ❌ Doesn't handle spacing around `=`

### Proposed Advanced Regex Patterns

**Pattern 1: Flexible Quotes**
```javascript
// Old: /<img[^>]*src="[^"]*"[^>]*alt="[^"]+"/i
// New: /<img[^>]*src\s*=\s*["\']([^"\']*)["\'][^>]*alt\s*=\s*["\']([^"\']+)["\']|<img[^>]*alt\s*=\s*["\']([^"\']+)["\'][^>]*src\s*=\s*["\']([^"\']*)["\']
```

**Pattern 2: Flexible Attribute Order**
```javascript
// Matches: src="..." alt="..." OR alt="..." src="..."
/<img(?:[^>]*\s+)?(?:src|alt)\s*=\s*["\']([^"\']*)["\'](?:[^>]*\s+)?(?:src|alt)\s*=\s*["\']([^"\']*)["\'](?:[^>]*)>/i
```

**Pattern 3: Flexible Spacing**
```javascript
// Matches: src = "..." or src="..." or src  =  "..."
/src\s*=\s*["\']([^"\']*)["\']|alt\s*=\s*["\']([^"\']*)["\']
```

### Implementation for Each Task

**html5-1-2 Task 1 (Unordered List):**
```javascript
regex: /<ul\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<\/ul\s*>/i
```
- Supports: `<ul>`, `<ul >`, `<ul  >`
- Supports: `<li>`, `<li >`, `<li  >`

**html5-1-4 Task 1 (Image with src and alt):**
```javascript
regex: /<img(?:[^>]*\s+)?(?:src|alt)\s*=\s*["\']([^"\']*)["\'](?:[^>]*\s+)?(?:src|alt)\s*=\s*["\']([^"\']*)["\'](?:[^>]*)>/i
```
- Supports: `src="..." alt="..."` or `alt="..." src="..."`
- Supports: `src = "..."` or `src="..."`
- Supports: Single or double quotes

**html5-1-4 Task 2 (Image with width and height):**
```javascript
regex: /<img(?:[^>]*\s+)?(?:width|height)\s*=\s*["\']?\d+["\']?(?:[^>]*\s+)?(?:width|height)\s*=\s*["\']?\d+["\']?(?:[^>]*)>/i
```
- Supports: `width="300"` or `width=300`
- Supports: `width="300" height="200"` or `height="200" width="300"`
- Supports: Any order

**html5-1-4 Task 3 (Figure with figcaption):**
```javascript
regex: /<figure\s*>[\s\S]*<img[^>]*>[\s\S]*<figcaption\s*>[\s\S]+<\/figcaption\s*>[\s\S]*<\/figure\s*>/i
```
- Supports: Flexible spacing
- Supports: Any content in figcaption

---

## 3. VALIDATION HINTS - All Tasks

### Hint Structure
Each task will have a `hint` property with specific, actionable guidance.

### Hints for html5-1-2 (Lists)

**Task 1 Hint:**
```
"The <ul> tag starts an unordered (bulleted) list. 
Type <ul> on its own line. Don't forget to close it later with </ul>"
```

**Task 2 Hint:**
```
"Each list item needs three parts: <li> opening tag, text, </li> closing tag.
You need exactly 3 items. Example: <li>Apple</li>"
```

**Task 3 Hint:**
```
"Close the unordered list with </ul>. 
Every opening tag needs a closing tag with a forward slash."
```

**Task 4 Hint:**
```
"The <ol> tag starts an ordered (numbered) list.
Type <ol> on its own line. Don't forget to close it later with </ol>"
```

**Task 5 Hint:**
```
"Same as unordered list - each item needs <li>, text, and </li>.
You need exactly 3 items for the ordered list."
```

**Task 6 Hint:**
```
"Close the ordered list with </ol>.
Make sure all your tags are properly closed!"
```

### Hints for html5-1-4 (Images)

**Task 1 Hint:**
```
"Images need two attributes: src (where the image is) and alt (description).
Example: <img src=\"photo.jpg\" alt=\"A sunset\">
You can use either single or double quotes."
```

**Task 2 Hint:**
```
"Add width and height attributes to control image size.
Example: <img src=\"photo.jpg\" width=\"300\" height=\"200\">
You can put them in any order."
```

**Task 3 Hint:**
```
"<figure> groups an image with its caption.
Put <img> inside, then add <figcaption> with text.
Example: <figure><img src=\"...\"><figcaption>Caption</figcaption></figure>"
```

---

## 4. VISUAL AIDS

### For html5-1-1 (Headings)

**Add Heading Hierarchy Diagram:**
```
Page Structure Visualization:

┌─────────────────────────────────────┐
│ <h1>Main Title</h1>                 │ ← ONE per page
├─────────────────────────────────────┤
│ <h2>Section 1</h2>                  │
│   <h3>Subsection 1.1</h3>           │
│   <h3>Subsection 1.2</h3>           │
├─────────────────────────────────────┤
│ <h2>Section 2</h2>                  │
│   <h3>Subsection 2.1</h3>           │
│     <h4>Sub-subsection 2.1.1</h4>   │
├─────────────────────────────────────┤
│ <h2>Section 3</h2>                  │
└─────────────────────────────────────┘

✅ Correct: Sequential order (h1 → h2 → h3)
❌ Wrong: Skipping levels (h1 → h3 → h5)
```

### For html5-1-4 (Images)

**Add Image Format Comparison Table:**
```
| Format | Best For | File Size | Transparency | Animation |
|--------|----------|-----------|--------------|-----------|
| JPG    | Photos   | Small     | ❌ No        | ❌ No     |
| PNG    | Graphics | Medium    | ✅ Yes       | ❌ No     |
| GIF    | Simple   | Medium    | ✅ Yes       | ✅ Yes    |
| WebP   | Modern   | Smallest  | ✅ Yes       | ✅ Yes    |
| SVG    | Icons    | Tiny      | ✅ Yes       | ✅ Yes    |

When to use:
- 📸 Photo? → JPG
- 🎨 Logo/Icon? → PNG or SVG
- 🎬 Animation? → GIF or WebP
- 🌐 Modern web? → WebP
```

---

## 5. CONSISTENCY - Boilerplate

### Current Issue
Each lesson has different or incomplete boilerplate, forcing students to type basic structure.

### Proposed Solution
All lessons provide minimal but complete boilerplate:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Basics Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>📝 HTML Basics Practice</h1>
    
    <!-- Task content goes here -->
    
</body>
</html>
```

### Benefits
- ✅ Students focus on lesson content
- ✅ Consistent across all units
- ✅ Proper HTML structure from start
- ✅ CSS already linked
- ✅ Meta tags for mobile/charset

### CSS Boilerplate (Consistent)
```css
/* Consistent styling across all lessons */
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
}

/* Task-specific styling */
```

---

## Summary of Changes

| Aspect | Before | After | Benefit |
|--------|--------|-------|---------|
| **List Tasks** | 3 large | 6 granular | Better feedback, confidence |
| **Regex** | Basic | Advanced | Flexible, robust validation |
| **Hints** | None | 6+ per lesson | Guides students on errors |
| **Visuals** | Text only | Diagrams + tables | Better understanding |
| **Boilerplate** | Inconsistent | Consistent | Focus on content |

---

## Implementation Priority

1. **High Priority:**
   - Granular list tasks (immediate feedback)
   - Advanced regex (fewer false negatives)
   - Validation hints (reduce frustration)

2. **Medium Priority:**
   - Visual aids (improve comprehension)
   - Consistent boilerplate (better UX)

3. **Low Priority:**
   - Additional diagrams
   - Extended comparison tables

---

## Next Steps

1. Create refactored JSON for all tasks
2. Update regex patterns for all lessons
3. Add hints to each task
4. Add visual aids to informational content
5. Standardize boilerplate across lessons
6. Test all regex patterns
7. Deploy and monitor

