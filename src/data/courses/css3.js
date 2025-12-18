// CSS3 Styling - Complete Course Content
import { CONTENT_TYPES } from '../curriculumStructure';

export const css3Course = {
    id: 'css3',
    title: 'CSS3 Styling',
    description: 'Transform plain HTML into beautiful, responsive designs with CSS3.',
    
    units: [
        // ============================================
        // UNIT 0: Absolute Beginner - Start from ZERO
        // ============================================
        {
            id: 'css3-unit-0',
            title: 'Absolute Beginner - Start from Zero',
            description: 'Never touched CSS? Start here! We explain EVERYTHING step-by-step.',
            items: [
                {
                    id: 'css3-0-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is CSS? (Complete Beginner Guide)',
                    duration: '10 min read',
                    content: `
# What is CSS? - Explained Like You're 5

## The Simple Answer

Imagine you built a house with HTML. HTML gives you:
- Walls (divs)
- Doors (links)
- Windows (images)
- Rooms (sections)

But everything is **gray, boring, and ugly**. 

**CSS is the paint, wallpaper, furniture, and decorations** that make your house beautiful!

## Real Example

### Without CSS (Boring!)
\`\`\`html
<h1>Welcome to My Website</h1>
<p>This is my paragraph.</p>
\`\`\`
Result: Black text on white background. Boring!

### With CSS (Beautiful!)
\`\`\`html
<h1>Welcome to My Website</h1>
<p>This is my paragraph.</p>
\`\`\`

\`\`\`css
h1 {
    color: navy;
    font-size: 48px;
    text-align: center;
}

p {
    color: gray;
    font-size: 18px;
    line-height: 1.6;
}
\`\`\`

Result: Navy blue centered heading, gray readable paragraph. Much better!

## What CSS Can Do

CSS controls **EVERYTHING** about how your website looks:

| What | CSS Property | Example |
|------|-------------|---------|
| Colors | \`color\`, \`background-color\` | Make text red, background blue |
| Size | \`width\`, \`height\`, \`font-size\` | Make box 300px wide, text 20px |
| Spacing | \`margin\`, \`padding\` | Add space around/inside elements |
| Position | \`display\`, \`position\` | Put things side-by-side or stack them |
| Effects | \`border\`, \`shadow\`, \`border-radius\` | Add borders, shadows, rounded corners |
| Animation | \`transition\`, \`animation\` | Make things move and change smoothly |

## The Three Ways to Add CSS

### 1. Inline CSS (❌ Don't use this!)
Write CSS directly in HTML:
\`\`\`html
<p style="color: red; font-size: 20px;">Red text</p>
\`\`\`

**Why avoid?** Hard to maintain, messy, can't reuse.

### 2. Internal CSS (⚠️ OK for small pages)
Write CSS in \`<head>\` tag:
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <style>
        p { color: red; }
    </style>
</head>
<body>
    <p>Red text</p>
</body>
</html>
\`\`\`

**When to use?** Single-page websites, quick tests.

### 3. External CSS (✅ BEST WAY!)
Separate CSS file:

**index.html:**
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p>Red text</p>
</body>
</html>
\`\`\`

**style.css:**
\`\`\`css
p {
    color: red;
}
\`\`\`

**Why best?** Clean, reusable, easy to maintain, can use same CSS on multiple pages!

## CSS Syntax - The Basic Pattern

Every CSS rule follows this pattern:

\`\`\`css
selector {
    property: value;
    property: value;
}
\`\`\`

Let's break it down:

\`\`\`css
h1 {
    color: navy;
    font-size: 32px;
}
\`\`\`

- **\`h1\`** = Selector (what to style)
- **\`{ }\`** = Curly braces (wrap all styles)
- **\`color\`** = Property (what to change)
- **\`navy\`** = Value (how to change it)
- **\`;\`** = Semicolon (ends each line)

## Important Rules

1. **Always use curly braces \`{ }\`**
2. **Always end lines with semicolon \`;\`**
3. **Property and value separated by colon \`:\`**
4. **Spelling matters!** \`color\` works, \`colour\` doesn't (American spelling)

## Your First CSS

Let's write your very first CSS:

\`\`\`css
/* This is a comment - browser ignores it */

/* Style all paragraphs */
p {
    color: blue;
    font-size: 18px;
}

/* Style all headings */
h1 {
    color: red;
    text-align: center;
}
\`\`\`

That's it! You just wrote CSS! 🎉

## Common Beginner Mistakes

❌ **Forgetting semicolon:**
\`\`\`css
p {
    color: red  /* Missing ; */
    font-size: 20px;
}
\`\`\`

✅ **Correct:**
\`\`\`css
p {
    color: red;
    font-size: 20px;
}
\`\`\`

❌ **Forgetting curly braces:**
\`\`\`css
p
    color: red;
\`\`\`

✅ **Correct:**
\`\`\`css
p {
    color: red;
}
\`\`\`

## Next Steps

Now that you understand WHAT CSS is, let's learn HOW to use it step-by-step!
                    `
                },
                {
                    id: 'css3-0-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Your First CSS - Baby Steps',
                    duration: '15 min',
                    content: `
# Your First CSS - Let's Do This Together!

## Step 1: Change Text Color

The easiest thing to do in CSS is change color.

### How to Change Color

\`\`\`css
selector {
    color: colorname;
}
\`\`\`

### Example: Make Paragraph Blue

\`\`\`css
p {
    color: blue;
}
\`\`\`

This says: "Hey browser, make ALL paragraphs blue!"

### Try Different Colors

\`\`\`css
p { color: red; }
p { color: green; }
p { color: navy; }
p { color: purple; }
p { color: orange; }
\`\`\`

## Step 2: Change Text Size

\`\`\`css
selector {
    font-size: 20px;
}
\`\`\`

**px** = pixels (dots on screen)
- Small text: 12px-14px
- Normal text: 16px-18px
- Big text: 24px-32px
- Huge text: 48px+

### Example: Make Heading Big

\`\`\`css
h1 {
    font-size: 48px;
}
\`\`\`

## Step 3: Change Background Color

\`\`\`css
selector {
    background-color: colorname;
}
\`\`\`

### Example: Yellow Background

\`\`\`css
body {
    background-color: yellow;
}
\`\`\`

## Step 4: Center Text

\`\`\`css
selector {
    text-align: center;
}
\`\`\`

Options:
- \`left\` - Text on left (default)
- \`center\` - Text in middle
- \`right\` - Text on right

### Example: Center Heading

\`\`\`css
h1 {
    text-align: center;
}
\`\`\`

## Step 5: Make Text Bold

\`\`\`css
selector {
    font-weight: bold;
}
\`\`\`

Options:
- \`normal\` - Regular text (default)
- \`bold\` - Thick, heavy text
- \`100-900\` - Numbers (400=normal, 700=bold)

---

## Your Mission: Style Your First Page!

Let's combine everything you learned!

**Goal:** Make the heading big, centered, and navy blue. Make the paragraph gray and readable.
                    `,
                    tasks: [
                        { id: 1, description: 'In style.css, add "color: navy;" inside the h1 { } selector for dark blue color', completed: false, regex: /h1\s*{[^}]*color\s*:\s*navy/ },
                        { id: 2, description: 'In style.css, add "font-size: 48px;" inside the h1 { } selector for large size', completed: false, regex: /h1\s*{[^}]*font-size\s*:\s*48px/ },
                        { id: 3, description: 'In style.css, add "text-align: center;" inside the h1 { } selector for center alignment', completed: false, regex: /h1\s*{[^}]*text-align\s*:\s*center/ },
                        { id: 4, description: 'In style.css, add "color: gray;" inside the p { } selector for gray text', completed: false, regex: /p\s*{[^}]*color\s*:\s*gray/ },
                        { id: 5, description: 'In style.css, add "font-size: 18px;" inside the p { } selector for text size', completed: false, regex: /p\s*{[^}]*font-size\s*:\s*18px/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to ZeroCode</h1>
    <p>ZeroCode Learning System for Everyone</p>
    <p>Learn web development from absolute zero to hero!</p>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `/* Your First CSS! */

/* Step 1: Style the heading */
h1 {
    /* Make it navy blue */
    
    /* Make it 48px big */
    
    /* Center it */
    
}

/* Step 2: Style paragraphs */
p {
    /* Make it gray */
    
    /* Make it 18px */
    
}

/* Bonus: Change body background */
body {
    background-color: #f0f2f5;
}` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'css3-0-3',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding Colors in CSS',
                    duration: '8 min read',
                    content: `
# CSS Colors - Complete Beginner Guide

## Method 1: Color Names (Easiest!)

CSS has 140 built-in color names you can use:

\`\`\`css
color: red;
color: blue;
color: green;
color: navy;
color: purple;
color: orange;
color: pink;
color: gray;
color: black;
color: white;
\`\`\`

**Pros:** Easy to remember, easy to type
**Cons:** Limited colors (only 140)

## Method 2: Hex Colors (Most Common!)

Hex colors use # followed by 6 characters:

\`\`\`css
color: #FF0000;  /* Red */
color: #0000FF;  /* Blue */
color: #00FF00;  /* Green */
color: #000000;  /* Black */
color: #FFFFFF;  /* White */
\`\`\`

### How Hex Works

\`\`\`
#RRGGBB
 ││││││
 ││││└└─ Blue (00-FF)
 ││└└─── Green (00-FF)
 └└───── Red (00-FF)
\`\`\`

- \`00\` = No color (0%)
- \`FF\` = Full color (100%)

### Examples

\`\`\`css
#FF0000  /* Red: Full red, no green, no blue */
#00FF00  /* Green: No red, full green, no blue */
#0000FF  /* Blue: No red, no green, full blue */
#FFFF00  /* Yellow: Full red + full green */
#FF00FF  /* Magenta: Full red + full blue */
#00FFFF  /* Cyan: Full green + full blue */
\`\`\`

### Shorthand Hex

If digits repeat, you can shorten:

\`\`\`css
#FF0000 = #F00  /* Red */
#00FF00 = #0F0  /* Green */
#0000FF = #00F  /* Blue */
#FFFFFF = #FFF  /* White */
#000000 = #000  /* Black */
\`\`\`

## Method 3: RGB (Red Green Blue)

Same as hex, but with numbers 0-255:

\`\`\`css
color: rgb(255, 0, 0);    /* Red */
color: rgb(0, 255, 0);    /* Green */
color: rgb(0, 0, 255);    /* Blue */
color: rgb(255, 255, 0);  /* Yellow */
color: rgb(0, 0, 0);      /* Black */
color: rgb(255, 255, 255); /* White */
\`\`\`

### RGBA (with Transparency!)

Add a 4th number (0-1) for transparency:

\`\`\`css
color: rgba(255, 0, 0, 1.0);   /* Solid red (100%) */
color: rgba(255, 0, 0, 0.5);   /* Half-transparent red (50%) */
color: rgba(255, 0, 0, 0.1);   /* Almost invisible red (10%) */
color: rgba(0, 0, 0, 0.8);     /* Dark overlay (80% black) */
\`\`\`

**When to use RGBA?** Overlays, shadows, transparent backgrounds!

## ZeroCode Colors

\`\`\`css
/* ZeroCode Navy */
color: #0a192f;
color: rgb(10, 25, 47);

/* ZeroCode Maroon */
color: #800000;
color: rgb(128, 0, 0);
\`\`\`

## Which Method to Use?

| Method | When to Use |
|--------|-------------|
| **Names** | Quick tests, simple colors |
| **Hex** | Most common, professional projects |
| **RGB** | When you need transparency (RGBA) |

## Pro Tip: Color Picker Tools

Don't memorize hex codes! Use tools:
- Google "color picker"
- [coolors.co](https://coolors.co) - Generate palettes
- [htmlcolorcodes.com](https://htmlcolorcodes.com) - Pick any color

## Common Color Combinations

\`\`\`css
/* Light theme */
background: #ffffff;  /* White */
color: #333333;       /* Dark gray text */

/* Dark theme */
background: #1a1a1a;  /* Almost black */
color: #ffffff;       /* White text */

/* ZeroCode theme */
background: #0a192f;  /* Navy */
color: #64ffda;       /* Teal accent */
\`\`\`

Now you're a color expert! 🎨
                    `
                },
                {
                    id: 'css3-0-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Absolute Beginner Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does CSS stand for?',
                            options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style System', 'Colorful Style Sheets'],
                            correctIndex: 1,
                            explanation: 'CSS = Cascading Style Sheets. "Cascading" means styles flow down and can override each other.'
                        },
                        {
                            id: 'q2',
                            question: 'Which is the BEST way to add CSS?',
                            options: ['Inline (in HTML tags)', 'Internal (in <head>)', 'External (separate .css file)', 'All are equally good'],
                            correctIndex: 2,
                            explanation: 'External CSS files are best: clean, reusable, maintainable, and can be shared across pages.'
                        },
                        {
                            id: 'q3',
                            question: 'What is wrong with this CSS? p { color: red }',
                            options: ['Nothing wrong', 'Missing semicolon ;', 'Missing curly braces', 'Wrong color name'],
                            correctIndex: 1,
                            explanation: 'Every CSS line must end with a semicolon (;). Correct: p { color: red; }'
                        },
                        {
                            id: 'q4',
                            question: 'What does "px" mean in "font-size: 20px"?',
                            options: ['Percentage', 'Pixels (dots on screen)', 'Points', 'Percent extra'],
                            correctIndex: 1,
                            explanation: 'px = pixels. One pixel is one dot on your screen. 20px = 20 dots tall.'
                        },
                        {
                            id: 'q5',
                            question: 'Which color is #FF0000?',
                            options: ['Blue', 'Green', 'Red', 'Yellow'],
                            correctIndex: 2,
                            explanation: '#FF0000 = Full red (FF), no green (00), no blue (00) = Red!'
                        }
                    ]
                }
            ]
        },
        // ============================================
        // UNIT 1: CSS Fundamentals
        // ============================================
        {
            id: 'css3-unit-1',
            title: 'CSS Fundamentals',
            description: 'Learn how CSS works and basic styling',
            items: [
                {
                    id: 'css3-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is CSS?',
                    duration: '5 min read',
                    content: `
# What is CSS?

**CSS** (Cascading Style Sheets) controls how HTML elements look on screen.

## The Cascade

CSS rules "cascade" down - later rules override earlier ones, and more specific selectors win.

\`\`\`css
p { color: blue; }      /* All paragraphs blue */
p.special { color: red; } /* .special paragraphs red (more specific) */
\`\`\`

## Three Ways to Add CSS

### 1. Inline (avoid!)
\`\`\`html
<p style="color: red;">Text</p>
\`\`\`

### 2. Internal (in <head>)
\`\`\`html
<style>
    p { color: red; }
</style>
\`\`\`

### 3. External (best!) ✅
\`\`\`html
<link rel="stylesheet" href="style.css">
\`\`\`

## CSS Syntax

\`\`\`css
selector {
    property: value;
    property: value;
}
\`\`\`

Example:
\`\`\`css
h1 {
    color: navy;
    font-size: 24px;
    text-align: center;
}
\`\`\`
                    `
                },
                {
                    id: 'css3-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Selectors',
                    duration: '20 min',
                    content: `
# CSS Selectors

Selectors target HTML elements to style.

## Basic Selectors

\`\`\`css
/* Element Selector */
p { color: blue; }

/* Class Selector (.) */
.highlight { background: yellow; }

/* ID Selector (#) */
#header { font-size: 24px; }

/* Universal Selector (*) */
* { margin: 0; }
\`\`\`

## Combining Selectors

\`\`\`css
/* Multiple elements */
h1, h2, h3 { font-family: sans-serif; }

/* Descendant (space) */
article p { line-height: 1.6; }

/* Direct child (>) */
nav > ul { list-style: none; }

/* Class on element */
p.intro { font-size: 18px; }
\`\`\`

## Pseudo-classes

\`\`\`css
a:hover { color: red; }
input:focus { border-color: blue; }
li:first-child { font-weight: bold; }
li:nth-child(odd) { background: #f5f5f5; }
\`\`\`

---

## Your Mission
Style a navigation menu using different selectors.
                    `,
                    tasks: [
                        { id: 1, description: 'In style.css, create "a { }" selector to style all links (e.g., text-decoration: none;)', completed: false, regex: /^\s*a\s*{/m },
                        { id: 2, description: 'In style.css, create ".nav-link { }" selector to style elements with nav-link class', completed: false, regex: /\.nav-link\s*{/ },
                        { id: 3, description: 'In style.css, create "a:hover { }" or ".nav-link:hover { }" selector for hover effect', completed: false, regex: /:hover\s*{/ },
                        { id: 4, description: 'In style.css, create "nav a { }" selector to style links inside nav element', completed: false, regex: /nav\s+[a-z]+\s*{/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
        <ul>
            <li><a href="#" class="nav-link">Home</a></li>
            <li><a href="#" class="nav-link">About</a></li>
            <li><a href="#" class="nav-link">Courses</a></li>
            <li><a href="#" class="nav-link active">Contact</a></li>
        </ul>
    </nav>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `/* Style the navigation */

/* 1. Style all <a> tags */


/* 2. Style .nav-link class */


/* 3. Add hover effect */


/* 4. Style links inside nav */

` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'css3-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Selectors Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Which selector has the highest specificity?',
                            options: ['element', '.class', '#id', '*'],
                            correctIndex: 2,
                            explanation: 'Specificity order: #id > .class > element > *'
                        },
                        {
                            id: 'q2',
                            question: 'What does "nav > ul" select?',
                            options: ['All ul inside nav', 'Direct child ul of nav', 'nav and ul', 'ul after nav'],
                            correctIndex: 1,
                            explanation: '> selects direct children only, not nested descendants.'
                        }
                    ]
                }
            ]
        },
        // ============================================
        // UNIT 2: Box Model
        // ============================================
        {
            id: 'css3-unit-2',
            title: 'The Box Model',
            description: 'Understand how elements take up space',
            items: [
                {
                    id: 'css3-2-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding the Box Model',
                    duration: '5 min read',
                    content: `
# The CSS Box Model

Every HTML element is a rectangular box with 4 layers:

\`\`\`
┌─────────────────────────────────┐
│           MARGIN                │
│  ┌───────────────────────────┐  │
│  │        BORDER             │  │
│  │  ┌─────────────────────┐  │  │
│  │  │      PADDING        │  │  │
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │   CONTENT     │  │  │  │
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
\`\`\`

## The Layers

| Layer | Purpose | Property |
|-------|---------|----------|
| Content | The actual content | width, height |
| Padding | Space inside border | padding |
| Border | The border line | border |
| Margin | Space outside border | margin |

## Box-Sizing

By default, width/height only apply to content. This is confusing!

\`\`\`css
/* Default (confusing) */
.box { width: 200px; padding: 20px; }
/* Actual width = 200 + 20 + 20 = 240px! */

/* Better approach */
* { box-sizing: border-box; }
/* Now width includes padding and border */
\`\`\`

> 💡 Always add \`box-sizing: border-box\` to your CSS reset!
                    `
                },
                {
                    id: 'css3-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Margin & Padding',
                    duration: '20 min',
                    content: `
# Margin & Padding

## Shorthand Syntax

\`\`\`css
/* All sides */
padding: 20px;

/* Vertical | Horizontal */
padding: 10px 20px;

/* Top | Right | Bottom | Left (clockwise) */
padding: 10px 20px 15px 25px;

/* Individual sides */
padding-top: 10px;
margin-left: 20px;
\`\`\`

## Margin Collapse

Vertical margins collapse (only the larger one applies):

\`\`\`css
.box1 { margin-bottom: 30px; }
.box2 { margin-top: 20px; }
/* Gap between them = 30px, not 50px! */
\`\`\`

## Centering with Margin

\`\`\`css
.container {
    width: 800px;
    margin: 0 auto; /* Centers horizontally */
}
\`\`\`

---

## Your Mission
Create a card component with proper spacing.
                    `,
                    tasks: [
                        { id: 1, description: 'In style.css, add "padding: 20px;" inside .card { } selector for inner spacing', completed: false, regex: /\.card\s*{[^}]*padding\s*:/ },
                        { id: 2, description: 'In style.css, add "margin: 20px auto;" inside .card { } selector for outer spacing and centering', completed: false, regex: /\.card\s*{[^}]*margin\s*:/ },
                        { id: 3, description: 'In style.css, add "border: 1px solid #ddd;" inside .card { } selector for border', completed: false, regex: /\.card\s*{[^}]*border\s*:/ },
                        { id: 4, description: 'In style.css, add "box-sizing: border-box;" inside * { } selector so width includes padding', completed: false, regex: /box-sizing\s*:\s*border-box/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="style.css"></head>
<body>
    <div class="card">
        <h2>Student Card</h2>
        <p>Software Engineering</p>
        <p>ZeroCode</p>
    </div>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `* {
    margin: 0;
    padding: 0;
    /* Add box-sizing here */
}

body {
    background: #f0f2f5;
    padding: 40px;
}

.card {
    background: white;
    width: 300px;
    /* Add padding, margin, border */
    
}

.card h2 {
    color: #0a192f;
}

.card p {
    color: #666;
}` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'css3-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Box Model Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does "padding: 10px 20px" mean?',
                            options: ['10px all sides', '10px top/bottom, 20px left/right', '10px left/right, 20px top/bottom', '10px top, 20px bottom'],
                            correctIndex: 1,
                            explanation: 'Two values = vertical | horizontal'
                        },
                        {
                            id: 'q2',
                            question: 'What does box-sizing: border-box do?',
                            options: ['Adds a box around element', 'Includes padding/border in width', 'Removes margins', 'Centers the element'],
                            correctIndex: 1,
                            explanation: 'border-box makes width/height include padding and border.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 3: Flexbox
        // ============================================
        {
            id: 'css3-unit-3',
            title: 'Flexbox Layout',
            description: 'Master modern CSS layout with Flexbox',
            items: [
                {
                    id: 'css3-3-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Introduction to Flexbox',
                    duration: '5 min read',
                    content: `
# Flexbox: Modern Layout

Flexbox is a one-dimensional layout system for arranging items in rows or columns.

## Enabling Flexbox

\`\`\`css
.container {
    display: flex;
}
\`\`\`

That's it! Children become "flex items".

## Main Axis vs Cross Axis

\`\`\`
flex-direction: row (default)
─────────────────────────────────►  Main Axis
│
│  ┌─────┐  ┌─────┐  ┌─────┐
│  │  1  │  │  2  │  │  3  │
│  └─────┘  └─────┘  └─────┘
│
▼ Cross Axis


flex-direction: column
│
│  ┌─────┐
│  │  1  │
│  └─────┘
│  ┌─────┐
│  │  2  │
│  └─────┘
▼ Main Axis
─────────────────► Cross Axis
\`\`\`

## Key Properties

### Container (Parent)
- \`display: flex\`
- \`flex-direction\`: row | column
- \`justify-content\`: main axis alignment
- \`align-items\`: cross axis alignment
- \`gap\`: space between items

### Items (Children)
- \`flex-grow\`: how much to grow
- \`flex-shrink\`: how much to shrink
- \`flex-basis\`: initial size
                    `
                },
                {
                    id: 'css3-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Flexbox Properties',
                    duration: '25 min',
                    content: `
# Flexbox Properties

## justify-content (Main Axis)

\`\`\`css
.container {
    display: flex;
    justify-content: flex-start;   /* Default - items at start */
    justify-content: flex-end;     /* Items at end */
    justify-content: center;       /* Items centered */
    justify-content: space-between; /* First/last at edges, equal space */
    justify-content: space-around;  /* Equal space around items */
    justify-content: space-evenly;  /* Equal space everywhere */
}
\`\`\`

## align-items (Cross Axis)

\`\`\`css
.container {
    display: flex;
    align-items: stretch;    /* Default - fill height */
    align-items: flex-start; /* Top */
    align-items: flex-end;   /* Bottom */
    align-items: center;     /* Vertically centered */
}
\`\`\`

## Perfect Centering

\`\`\`css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
\`\`\`

---

## Your Mission
Build a navigation bar with Flexbox.
                    `,
                    tasks: [
                        { id: 1, description: 'In style.css, add "display: flex;" inside .navbar { } selector for flexbox layout', completed: false, regex: /\.navbar\s*{[^}]*display\s*:\s*flex/ },
                        { id: 2, description: 'In style.css, add "justify-content: space-between;" inside .navbar { } for horizontal spacing', completed: false, regex: /justify-content\s*:\s*space-between/ },
                        { id: 3, description: 'In style.css, add "align-items: center;" inside .navbar { } for vertical centering', completed: false, regex: /align-items\s*:\s*center/ },
                        { id: 4, description: 'In style.css, add "gap: 20px;" inside .nav-links { } for spacing between links', completed: false, regex: /gap\s*:\s*\d+/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="style.css"></head>
<body>
    <nav class="navbar">
        <div class="logo">ZeroCode</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <button class="btn">Login</button>
    </nav>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `* { margin: 0; padding: 0; box-sizing: border-box; }

.navbar {
    background: #0a192f;
    color: white;
    padding: 15px 30px;
    /* Add flexbox properties */
    
}

.logo {
    font-size: 24px;
    font-weight: bold;
    color: #64ffda;
}

.nav-links {
    list-style: none;
    display: flex;
    /* Add gap */
    
}

.nav-links a {
    color: white;
    text-decoration: none;
}

.btn {
    background: #800000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'css3-3-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Flex Items',
                    duration: '20 min',
                    content: `
# Flex Item Properties

## flex-grow

How much an item should grow relative to others:

\`\`\`css
.item1 { flex-grow: 1; }  /* Takes 1 part */
.item2 { flex-grow: 2; }  /* Takes 2 parts */
/* item2 is twice as wide as item1 */
\`\`\`

## flex-shrink

How much an item should shrink:

\`\`\`css
.item { flex-shrink: 0; }  /* Won't shrink */
.item { flex-shrink: 1; }  /* Default - will shrink */
\`\`\`

## flex-basis

Initial size before growing/shrinking:

\`\`\`css
.item { flex-basis: 200px; }
.item { flex-basis: 25%; }
\`\`\`

## Shorthand: flex

\`\`\`css
/* flex: grow shrink basis */
.item { flex: 1 0 200px; }

/* Common patterns */
.item { flex: 1; }      /* Grow equally */
.item { flex: 0 0 auto; } /* Don't grow or shrink */
\`\`\`

---

## Your Mission
Create a responsive card layout.
                    `,
                    tasks: [
                        { id: 1, description: 'Make .card-container a flex container', completed: false, regex: /\.card-container\s*{[^}]*display\s*:\s*flex/ },
                        { id: 2, description: 'Use flex-wrap: wrap', completed: false, regex: /flex-wrap\s*:\s*wrap/ },
                        { id: 3, description: 'Give .card a flex-basis', completed: false, regex: /\.card\s*{[^}]*flex[^}]*:/ },
                        { id: 4, description: 'Allow cards to grow with flex-grow', completed: false, regex: /flex-grow\s*:\s*1|flex\s*:\s*1/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="style.css"></head>
<body>
    <div class="card-container">
        <div class="card">Course 1</div>
        <div class="card">Course 2</div>
        <div class="card">Course 3</div>
        <div class="card">Course 4</div>
    </div>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { padding: 20px; background: #f0f2f5; }

.card-container {
    /* Make this a flex container with wrapping */
    
    gap: 20px;
}

.card {
    background: white;
    padding: 40px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    /* Add flex properties for responsive sizing */
    /* Hint: flex-basis around 250px, allow growing */
    
}` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'css3-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Flexbox Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Which property aligns items on the main axis?',
                            options: ['align-items', 'justify-content', 'flex-direction', 'align-content'],
                            correctIndex: 1,
                            explanation: 'justify-content controls main axis, align-items controls cross axis.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you center an item both horizontally and vertically?',
                            options: ['margin: auto', 'justify-content: center + align-items: center', 'text-align: center', 'position: center'],
                            correctIndex: 1,
                            explanation: 'Combine justify-content and align-items with center values.'
                        },
                        {
                            id: 'q3',
                            question: 'What does flex: 1 mean?',
                            options: ['Width of 1px', 'Grow to fill available space equally', 'First item', 'One column'],
                            correctIndex: 1,
                            explanation: 'flex: 1 is shorthand for flex-grow: 1, allowing items to grow equally.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 4: Colors & Typography
        // ============================================
        {
            id: 'css3-unit-4',
            title: 'Colors & Typography',
            description: 'Make your designs visually appealing',
            items: [
                {
                    id: 'css3-4-1',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Working with Colors',
                    duration: '15 min',
                    content: `
# CSS Colors

## Color Formats

\`\`\`css
/* Named colors */
color: red;
color: navy;
color: coral;

/* Hexadecimal */
color: #ff0000;     /* Red */
color: #0a192f;     /* ZeroCode Navy */
color: #800000;     /* ZeroCode Maroon */

/* RGB */
color: rgb(255, 0, 0);
color: rgba(0, 0, 0, 0.5);  /* 50% transparent black */

/* HSL (Hue, Saturation, Lightness) */
color: hsl(0, 100%, 50%);   /* Red */
color: hsla(0, 100%, 50%, 0.5);
\`\`\`

## Gradients

\`\`\`css
/* Linear gradient */
background: linear-gradient(to right, #0a192f, #112240);
background: linear-gradient(135deg, #667eea, #764ba2);

/* Radial gradient */
background: radial-gradient(circle, #fff, #000);
\`\`\`

---

## Your Mission
Create a gradient hero section.
                    `,
                    tasks: [
                        { id: 1, description: 'Use a hex color for text', completed: false, regex: /color\s*:\s*#[0-9a-fA-F]{3,6}/ },
                        { id: 2, description: 'Create a linear-gradient background', completed: false, regex: /linear-gradient\s*\(/ },
                        { id: 3, description: 'Use rgba for semi-transparent color', completed: false, regex: /rgba\s*\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="style.css"></head>
<body>
    <section class="hero">
        <div class="overlay"></div>
        <div class="content">
            <h1>Welcome to ZeroCode</h1>
            <p>ZeroCode Learning System</p>
        </div>
    </section>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `* { margin: 0; padding: 0; box-sizing: border-box; }

.hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    /* Add gradient background */
    
}

.overlay {
    position: absolute;
    inset: 0;
    /* Add semi-transparent overlay with rgba */
    
}

.content {
    text-align: center;
    position: relative;
    z-index: 1;
}

.content h1 {
    font-size: 4rem;
    /* Add hex color */
    
}

.content p {
    font-size: 1.5rem;
    color: #ccc;
}` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'css3-4-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Typography',
                    duration: '20 min',
                    content: `
# CSS Typography

## Font Properties

\`\`\`css
/* Font family */
font-family: 'Segoe UI', Arial, sans-serif;

/* Font size */
font-size: 16px;
font-size: 1rem;    /* Relative to root */
font-size: 1.5em;   /* Relative to parent */

/* Font weight */
font-weight: normal;  /* 400 */
font-weight: bold;    /* 700 */
font-weight: 600;     /* Semi-bold */

/* Font style */
font-style: italic;
\`\`\`

## Text Properties

\`\`\`css
text-align: center;
text-decoration: underline;
text-transform: uppercase;
letter-spacing: 2px;
line-height: 1.6;
\`\`\`

## Google Fonts

\`\`\`html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
\`\`\`

\`\`\`css
body {
    font-family: 'Inter', sans-serif;
}
\`\`\`

---

## Your Mission
Style a blog article with proper typography.
                    `,
                    tasks: [
                        { id: 1, description: 'Set font-family on body', completed: false, regex: /body\s*{[^}]*font-family\s*:/ },
                        { id: 2, description: 'Use line-height for readability', completed: false, regex: /line-height\s*:\s*[\d.]+/ },
                        { id: 3, description: 'Style headings with font-weight', completed: false, regex: /font-weight\s*:\s*(bold|\d+)/ },
                        { id: 4, description: 'Use text-transform on a heading', completed: false, regex: /text-transform\s*:\s*uppercase/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html>
<head>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <article>
        <span class="category">Technology</span>
        <h1>The Future of Web Development</h1>
        <p class="meta">By John Doe • December 2024</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    </article>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    /* Set font-family to Inter */
    
    background: #f8f9fa;
    padding: 40px;
}

article {
    max-width: 700px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 12px;
}

.category {
    /* Make uppercase */
    
    color: #800000;
    font-size: 12px;
    letter-spacing: 2px;
}

h1 {
    margin: 15px 0;
    color: #0a192f;
    /* Add font-weight */
    
}

.meta {
    color: #666;
    margin-bottom: 30px;
}

p {
    color: #333;
    margin-bottom: 20px;
    /* Add line-height for readability */
    
}` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'css3-4-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Colors & Typography Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does rgba(0, 0, 0, 0.5) represent?',
                            options: ['White', 'Black', '50% transparent black', 'Gray'],
                            correctIndex: 2,
                            explanation: 'The fourth value (0.5) is alpha/opacity. 0 = transparent, 1 = opaque.'
                        },
                        {
                            id: 'q2',
                            question: 'What is a good line-height for body text?',
                            options: ['1.0', '1.4-1.6', '2.5', '0.8'],
                            correctIndex: 1,
                            explanation: '1.4-1.6 provides comfortable reading. Too tight or loose hurts readability.'
                        }
                    ]
                }
            ]
        },
        // ============================================
        // UNIT 5: Final Project
        // ============================================
        {
            id: 'css3-unit-5',
            title: 'Final Project',
            description: 'Build a complete styled page',
            items: [
                {
                    id: 'css3-5-project',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'Build a Landing Page',
                    duration: '60 min',
                    difficulty: 'Beginner',
                    description: 'Create a complete landing page for ZeroCode using all CSS concepts learned.',
                    content: `
# 🎯 Project: ZeroCode Landing Page

## Overview
Build a professional landing page for the ZeroCode learning platform.

## Requirements

### Layout (Flexbox)
- [ ] Navigation bar with logo and links
- [ ] Hero section centered content
- [ ] Features section with 3 cards
- [ ] Footer with multiple columns

### Styling
- [ ] Use ZeroCode colors (#0a192f navy, #800000 maroon)
- [ ] Gradient background on hero
- [ ] Box shadows on cards
- [ ] Hover effects on buttons and links

### Typography
- [ ] Google Font (Inter or similar)
- [ ] Proper heading hierarchy
- [ ] Readable line-height

### Box Model
- [ ] Consistent padding/margin
- [ ] border-box sizing
- [ ] Rounded corners
                    `,
                    tasks: [
                        { id: 1, description: 'Create flexbox navbar', completed: false, regex: /\.nav[^{]*{[^}]*display\s*:\s*flex/ },
                        { id: 2, description: 'Add gradient to hero', completed: false, regex: /linear-gradient/ },
                        { id: 3, description: 'Create 3-column features with flexbox', completed: false, regex: /\.features[^{]*{[^}]*display\s*:\s*flex|\.feature[^{]*{[^}]*flex/ },
                        { id: 4, description: 'Add hover effect on button', completed: false, regex: /\.btn[^{]*:hover|button[^{]*:hover/ },
                        { id: 5, description: 'Use box-shadow on cards', completed: false, regex: /box-shadow\s*:/ },
                        { id: 6, description: 'Import Google Font', completed: false, regex: /fonts\.googleapis\.com|font-family.*Inter/ }
                    ],
                    starterFiles: [
                        { name: 'index.html', language: 'html', content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZeroCode - ZeroCode Learning System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="logo">ZeroCode</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <button class="btn btn-primary">Get Started</button>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
        <h1>Learn to Code at ZeroCode</h1>
        <p>Master web development with interactive lessons</p>
        <button class="btn btn-large">Start Learning</button>
    </section>

    <!-- Features -->
    <section class="features">
        <div class="feature">
            <h3>📚 16 Courses</h3>
            <p>From HTML basics to advanced React</p>
        </div>
        <div class="feature">
            <h3>💻 Hands-on</h3>
            <p>Code directly in your browser</p>
        </div>
        <div class="feature">
            <h3>🎯 Projects</h3>
            <p>Build real-world applications</p>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 ZeroCode</p>
    </footer>
</body>
</html>` },
                        { name: 'style.css', language: 'css', content: `/* ZeroCode Landing Page Styles */
/* Add your CSS here! */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    /* Add font-family */
}

/* Navigation */
.navbar {
    /* Make it flex, space-between, centered */
}

/* Hero Section */
.hero {
    /* Add gradient, center content */
}

/* Features */
.features {
    /* Flex container for cards */
}

.feature {
    /* Card styling with shadow */
}

/* Buttons */
.btn {
    /* Button base styles */
}

.btn:hover {
    /* Hover effect */
}

/* Footer */
footer {
    /* Footer styles */
}` },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'css3-5-summary',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Course Complete!',
                    duration: '3 min read',
                    content: `
# 🎉 CSS3 Complete!

## What You Mastered

✅ CSS Selectors (element, class, ID, pseudo)
✅ The Box Model (margin, padding, border)
✅ Flexbox Layout (containers, items, alignment)
✅ Colors (hex, rgb, rgba, gradients)
✅ Typography (fonts, sizing, spacing)

## Best Practices

1. **Use box-sizing: border-box** on everything
2. **Flexbox for layout**, not floats
3. **rem/em for font sizes**, not px
4. **CSS variables** for colors (coming in advanced CSS)
5. **Mobile-first** responsive design

## What's Next?

Continue with **Tailwind CSS** for rapid UI development, or **JavaScript Basics** to add interactivity!

> "Design is not just what it looks like. Design is how it works." - Steve Jobs
                    `
                }
            ]
        }
    ]
};

export default css3Course;
