// HTML5 Fundamentals Course - Complete & Comprehensive
import { CONTENT_TYPES } from '../curriculumStructure';

export const html5Course = {
    id: 'html5',
    title: 'HTML5 Fundamentals',
    description: 'Master the foundation of web development with semantic HTML, forms, and accessibility.',
    
    units: [
        // ============================================
        // UNIT 0: Absolute Beginner - Start from ZERO
        // ============================================
        {
            id: 'html5-unit-0',
            title: 'Absolute Beginner - Start from Zero',
            description: 'Never coded before? Perfect! We explain EVERYTHING step-by-step.',
            items: [
                {
                    id: 'html5-0-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is HTML? (Complete Beginner Guide)',
                    duration: '10 min read',
                    content: `
# What is HTML? - Explained Like You're 5

## The Simple Answer

Imagine you're writing a letter. You have:
- **Title** at the top
- **Paragraphs** of text
- **Lists** of things
- **Pictures** to show
- **Links** to other pages

HTML is just a way to tell the computer: "This is a title", "This is a paragraph", "This is a picture".

That's it! HTML is just **labeling** different parts of your content.

## Real Example

**What You Want to Show:**
- My First Website
- Welcome to my page!
- This is my first website.

**How You Write it in HTML:**

\`\`\`html
<h1>My First Website</h1>
<p>Welcome to my page!</p>
<p>This is my first website.</p>
\`\`\`

See? You just wrap text in **tags** like \`<h1>\` and \`<p>\` to label what they are!

## What Are Tags?

Tags are like **labels** or **containers**. They have:
- **Opening tag**: \`<p>\` (starts the label)
- **Content**: The actual text
- **Closing tag**: \`</p>\` (ends the label)

\`\`\`html
<p>This is a paragraph</p>
 ↑              ↑
opening      closing
 tag           tag
\`\`\`

## Common Tags (You'll Use These A LOT!)

| Tag | What It Does | Example |
|-----|--------------|---------|
| \`<h1>\` | Big heading | \`<h1>Title</h1>\` |
| \`<p>\` | Paragraph | \`<p>Some text</p>\` |
| \`<a>\` | Link | \`<a href="url">Click me</a>\` |
| \`<img>\` | Image | \`<img src="pic.jpg">\` |
| \`<div>\` | Container/box | \`<div>Content here</div>\` |
| \`<button>\` | Button | \`<button>Click</button>\` |

## Your First HTML Page

Every HTML page has the same basic structure:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My Page Title</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first webpage.</p>
</body>
</html>
\`\`\`

Let's break it down:

1. **\`<!DOCTYPE html>\`** - Tells browser "this is HTML5"
2. **\`<html>\`** - Wraps everything
3. **\`<head>\`** - Info about the page (not visible)
4. **\`<title>\`** - Shows in browser tab
5. **\`<body>\`** - Everything you see on the page
6. **\`<h1>\`** - Your heading
7. **\`<p>\`** - Your paragraph

## Important Rules

1. **Most tags need closing tags**
   - ✅ \`<p>Text</p>\`
   - ❌ \`<p>Text\` (missing closing tag!)

2. **Some tags are self-closing**
   - \`<img src="pic.jpg">\` (no closing tag needed)
   - \`<br>\` (line break)
   - \`<hr>\` (horizontal line)

3. **Tags can be nested (inside each other)**
   \`\`\`html
   <div>
       <h1>Title</h1>
       <p>Paragraph inside div</p>
   </div>
   \`\`\`

4. **Indentation makes it readable**
   \`\`\`html
   <!-- Good (easy to read) -->
   <div>
       <p>Text</p>
   </div>
   
   <!-- Bad (hard to read) -->
   <div><p>Text</p></div>
   \`\`\`

## Common Beginner Mistakes

❌ **Forgetting closing tag:**
\`\`\`html
<p>This is wrong
\`\`\`

✅ **Correct:**
\`\`\`html
<p>This is right</p>
\`\`\`

❌ **Wrong order (tags must close in reverse order):**
\`\`\`html
<div><p>Wrong</div></p>
\`\`\`

✅ **Correct:**
\`\`\`html
<div><p>Right</p></div>
\`\`\`

❌ **Typo in tag name:**
\`\`\`html
<pargraph>Wrong</pargraph>
\`\`\`

✅ **Correct:**
\`\`\`html
<p>Right</p>
\`\`\`

## What HTML Can't Do

HTML is ONLY for structure. It can't:
- ❌ Make things pretty (that's CSS)
- ❌ Make things interactive (that's JavaScript)
- ❌ Do math or logic (that's JavaScript)

HTML just says "this is a heading", "this is a paragraph", etc.

## Next Steps

Now that you know WHAT HTML is, let's write your very first HTML page!
                    `
                },
                {
                    id: 'html5-0-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Your First HTML Page - Baby Steps',
                    duration: '15 min',
                    content: `
# Your First HTML Page - Let's Do This Together!

## Step 1: The Basic Structure

Every HTML page starts with this skeleton:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <!-- Your content goes here -->
</body>
</html>
\`\`\`

**Don't worry!** You'll type this so many times it'll become automatic.

## Step 2: Add a Heading

Headings go from \`<h1>\` (biggest) to \`<h6>\` (smallest):

\`\`\`html
<h1>This is HUGE</h1>
<h2>This is big</h2>
<h3>This is medium</h3>
<h4>This is small</h4>
<h5>This is smaller</h5>
<h6>This is smallest</h6>
\`\`\`

**Rule:** Use \`<h1>\` for your main title. Only ONE \`<h1>\` per page!

## Step 3: Add Paragraphs

Paragraphs use \`<p>\` tag:

\`\`\`html
<p>This is a paragraph of text.</p>
<p>This is another paragraph.</p>
\`\`\`

**Tip:** Each \`<p>\` automatically adds space above and below.

## Step 4: Add a Link

Links use \`<a>\` tag with \`href\` attribute:

\`\`\`html
<a href="https://presuniv.ac.id">Visit PresUniv</a>
\`\`\`

- **\`href\`** = where the link goes
- **Text between tags** = what you click

## Step 5: Add an Image

Images use \`<img>\` tag:

\`\`\`html
<img src="logo.png" alt="Logo">
\`\`\`

- **\`src\`** = image file path
- **\`alt\`** = description (for screen readers and if image fails)

**Note:** \`<img>\` doesn't need a closing tag!

## Step 6: Make a List

### Unordered List (bullets):
\`\`\`html
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
\`\`\`

### Ordered List (numbers):
\`\`\`html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
\`\`\`

---

## Your Mission: Build Your First Page!

Create a simple "About Me" page with:
- A heading with your name
- A paragraph about yourself
- A list of your hobbies
- A link to President University website
                    `,
                    tasks: [
                        { id: 1, description: 'Add <!DOCTYPE html> at the top', completed: false, regex: /<!DOCTYPE html>/i },
                        { id: 2, description: 'Add <html>, <head>, and <body> tags', completed: false, regex: /<html>[\s\S]*<head>[\s\S]*<body>/i },
                        { id: 3, description: 'Add an <h1> heading', completed: false, regex: /<h1>.*<\/h1>/ },
                        { id: 4, description: 'Add at least one <p> paragraph', completed: false, regex: /<p>.*<\/p>/ },
                        { id: 5, description: 'Add a list (<ul> or <ol>)', completed: false, regex: /<(ul|ol)>[\s\S]*<li>[\s\S]*<\/(ul|ol)>/ }
                    ],
                    files: [
                        { name: 'index.html', language: 'html', content: `<!-- Write your first HTML page here! -->

<!-- Step 1: Add the basic structure -->


<!-- Step 2: Add a heading with your name -->


<!-- Step 3: Add a paragraph about yourself -->


<!-- Step 4: Add a list of your hobbies -->


<!-- Step 5: Add a link to PresUniv -->

` },
                        { name: 'style.css', language: 'css', content: '' },
                        { name: 'script.js', language: 'javascript', content: '' }
                    ]
                },
                {
                    id: 'html5-0-3',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding HTML Attributes',
                    duration: '8 min read',
                    content: `
# HTML Attributes - Extra Information for Tags

## What Are Attributes?

Attributes give **extra information** to tags. They go inside the opening tag:

\`\`\`html
<tag attribute="value">Content</tag>
     ↑
  attribute
\`\`\`

## Common Attributes

### 1. href (for links)

Tells where the link goes:

\`\`\`html
<a href="https://presuniv.ac.id">PresUniv</a>
<a href="about.html">About Page</a>
<a href="#section">Jump to section</a>
\`\`\`

### 2. src (for images)

Tells where the image file is:

\`\`\`html
<img src="photo.jpg">
<img src="images/logo.png">
<img src="https://example.com/pic.jpg">
\`\`\`

### 3. alt (for images)

Description of image (important for accessibility!):

\`\`\`html
<img src="cat.jpg" alt="A cute orange cat">
\`\`\`

**Why important?**
- Screen readers read it to blind users
- Shows if image fails to load
- Helps Google understand your images

### 4. id (unique identifier)

Gives a unique name to ONE element:

\`\`\`html
<div id="header">Header content</div>
<p id="intro">Introduction paragraph</p>
\`\`\`

**Rules:**
- Each id must be unique (only ONE element can have that id)
- Use for JavaScript and CSS targeting
- Use lowercase and hyphens: \`id="my-section"\`

### 5. class (group identifier)

Groups multiple elements:

\`\`\`html
<p class="highlight">This is highlighted</p>
<p class="highlight">This is also highlighted</p>
<div class="card">Card 1</div>
<div class="card">Card 2</div>
\`\`\`

**Rules:**
- Multiple elements can have the same class
- One element can have multiple classes: \`class="card highlight"\`
- Use for CSS styling

### 6. style (inline CSS)

Add CSS directly (not recommended, but good to know):

\`\`\`html
<p style="color: red; font-size: 20px;">Red text</p>
\`\`\`

**Better way:** Use external CSS file!

### 7. title (tooltip)

Shows tooltip on hover:

\`\`\`html
<p title="This is a tooltip">Hover over me!</p>
<a href="#" title="Click to learn more">Link</a>
\`\`\`

## Multiple Attributes

You can use multiple attributes on one tag:

\`\`\`html
<img src="photo.jpg" alt="My photo" width="300" height="200">
<a href="page.html" class="button" id="main-link">Click me</a>
\`\`\`

**Rules:**
- Separate with spaces
- Order doesn't matter
- Always use quotes around values

## Attribute Syntax Rules

✅ **Correct:**
\`\`\`html
<a href="page.html">Link</a>
<img src="pic.jpg" alt="Picture">
\`\`\`

❌ **Wrong (no quotes):**
\`\`\`html
<a href=page.html>Link</a>
\`\`\`

❌ **Wrong (no value):**
\`\`\`html
<a href>Link</a>
\`\`\`

❌ **Wrong (space in value without quotes):**
\`\`\`html
<img alt=My Picture>
\`\`\`

## Boolean Attributes

Some attributes don't need values:

\`\`\`html
<input type="text" disabled>
<input type="checkbox" checked>
<script src="app.js" defer></script>
\`\`\`

Just writing the attribute name means "true"!

## id vs class - When to Use?

| Use \`id\` when... | Use \`class\` when... |
|-------------------|----------------------|
| Only ONE element needs it | Multiple elements need same style |
| JavaScript needs to find it | CSS styling |
| Creating anchor links | Grouping similar elements |

**Example:**
\`\`\`html
<!-- id: unique header -->
<header id="main-header">Site Header</header>

<!-- class: multiple cards -->
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
\`\`\`

## Pro Tips

1. **Always use lowercase** for attributes: \`href\`, not \`HREF\`
2. **Always use quotes** around values: \`href="page.html"\`
3. **Use meaningful names** for id and class: \`id="user-profile"\`, not \`id="x1"\`
4. **Don't overuse id** - use class for styling
5. **Always add alt to images** - it's important for accessibility!

Now you're an attribute expert! 🎯
                    `
                },
                {
                    id: 'html5-0-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Absolute Beginner Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does HTML stand for?',
                            options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
                            correctIndex: 0,
                            explanation: 'HTML = HyperText Markup Language. It\'s the standard language for creating web pages.'
                        },
                        {
                            id: 'q2',
                            question: 'Which tag is used for the largest heading?',
                            options: ['<head>', '<h6>', '<heading>', '<h1>'],
                            correctIndex: 3,
                            explanation: '<h1> is the largest heading. Headings go from <h1> (biggest) to <h6> (smallest).'
                        },
                        {
                            id: 'q3',
                            question: 'What is wrong with this HTML? <p>Hello World',
                            options: ['Nothing wrong', 'Missing closing tag </p>', 'Wrong tag name', 'Missing quotes'],
                            correctIndex: 1,
                            explanation: 'Most HTML tags need a closing tag. Correct: <p>Hello World</p>'
                        },
                        {
                            id: 'q4',
                            question: 'Which attribute tells where a link goes?',
                            options: ['src', 'href', 'link', 'url'],
                            correctIndex: 1,
                            explanation: 'href attribute specifies the URL: <a href="page.html">Link</a>'
                        },
                        {
                            id: 'q5',
                            question: 'What\'s the difference between id and class?',
                            options: ['No difference', 'id is unique, class can be reused', 'class is unique, id can be reused', 'id is for CSS, class is for JavaScript'],
                            correctIndex: 1,
                            explanation: 'id must be unique (one per page), class can be used on multiple elements.'
                        }
                    ]
                }
            ]
        },
        // ============================================
        // UNIT 1: Introduction to HTML
        // ============================================
        {
            id: 'html5-unit-1',
            title: 'Introduction to HTML',
            description: 'Understand what HTML is and build your first page',
            items: [
                {
                    id: 'html5-1-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is HTML?',
                    duration: '5 min read',
                    content: `
# What is HTML?

**HTML** (HyperText Markup Language) is the standard language for creating web pages. It's the skeleton of every website you visit.

## The Web Trinity

Think of building a website like building a house:

| Technology | Role | Analogy |
|------------|------|---------|
| **HTML** | Structure | The walls, rooms, and foundation |
| **CSS** | Styling | Paint, furniture, and decoration |
| **JavaScript** | Behavior | Electricity, plumbing, and smart features |

## How HTML Works

HTML uses **tags** to define different types of content:

\`\`\`html
<h1>This is a heading</h1>
<p>This is a paragraph of text.</p>
<a href="https://presuniv.ac.id">This is a link</a>
<img src="logo.png" alt="Logo">
\`\`\`

## A Brief History

- **1991**: Tim Berners-Lee invents HTML
- **1995**: HTML 2.0 released
- **1999**: HTML 4.01 becomes standard
- **2014**: HTML5 officially released (current version)

## Why HTML5?

HTML5 introduced powerful new features:
- Semantic elements (\`<header>\`, \`<nav>\`, \`<article>\`)
- Multimedia support (\`<video>\`, \`<audio>\`)
- Better form controls (date pickers, email validation)
- Canvas for graphics
- Local storage for offline apps

> 💡 **Fun Fact**: Every website you visit - Google, Facebook, YouTube - is built with HTML at its core!
                    `
                },
                {
                    id: 'html5-1-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Your First HTML Page',
                    duration: '15 min',
                    content: `
# Your First HTML Page

Every HTML document follows a basic structure called the "HTML boilerplate". Let's build one!

## The HTML Boilerplate

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
\`\`\`

## Breaking It Down

### 1. \`<!DOCTYPE html>\`
Tells the browser "this is an HTML5 document". Always put this first!

### 2. \`<html lang="en">\`
The root element that wraps everything. \`lang="en"\` helps screen readers and search engines.

### 3. \`<head>\`
Contains **metadata** (information about the page):
- \`<meta charset="UTF-8">\` - Character encoding (supports emojis! 🎉)
- \`<meta name="viewport">\` - Makes page responsive on mobile
- \`<title>\` - Shows in browser tab

### 4. \`<body>\`
Contains **visible content** - everything users see on the page.

---

## Your Mission

Create a basic HTML page for President University with:
1. Proper DOCTYPE declaration
2. HTML tag with English language
3. Head section with a title
4. Body with a heading and paragraph
                    `,
                    tasks: [
                        { 
                            id: 1, 
                            description: 'Add <!DOCTYPE html> at the very top', 
                            completed: false, 
                            regex: /<!DOCTYPE\s+html>/i 
                        },
                        { 
                            id: 2, 
                            description: 'Add <html lang="en"> opening tag', 
                            completed: false, 
                            regex: /<html[^>]*lang=["']en["'][^>]*>/i 
                        },
                        { 
                            id: 3, 
                            description: 'Add a <title> inside <head> with text "PULSE"', 
                            completed: false, 
                            regex: /<head>[\s\S]*<title>[\s\S]*PULSE[\s\S]*<\/title>[\s\S]*<\/head>/i 
                        },
                        { 
                            id: 4, 
                            description: 'Add an <h1> inside <body> with text "Welcome"', 
                            completed: false, 
                            regex: /<body>[\s\S]*<h1>[\s\S]*Welcome[\s\S]*<\/h1>[\s\S]*<\/body>/i 
                        },
                        { 
                            id: 5, 
                            description: 'Add a <p> paragraph with any text', 
                            completed: false, 
                            regex: /<body>[\s\S]*<p>[\s\S]{10,}<\/p>[\s\S]*<\/body>/i 
                        }
                    ],
                    files: [
                        {
                            name: 'index.html',
                            language: 'html',
                            content: `<!-- Create your first HTML page! -->
<!-- Follow the instructions on the left -->

`
                        },
                        { 
                            name: 'style.css', 
                            language: 'css', 
                            content: `body { 
    font-family: 'Segoe UI', sans-serif; 
    padding: 40px; 
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    min-height: 100vh;
    color: white;
}
h1 { 
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3); 
}` 
                        },
                        { 
                            name: 'script.js', 
                            language: 'javascript', 
                            content: '// No JavaScript needed for this lesson' 
                        }
                    ]
                },
                {
                    id: 'html5-1-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'HTML Elements & Tags',
                    duration: '20 min',
                    content: `
# HTML Elements & Tags

## Anatomy of an HTML Element

\`\`\`html
<tagname attribute="value">Content</tagname>
   ↑          ↑              ↑         ↑
Opening    Attribute      Content   Closing
  Tag                                 Tag
\`\`\`

## Common Text Elements

| Tag | Purpose | Example |
|-----|---------|---------|
| \`<h1>\` to \`<h6>\` | Headings (h1 = biggest) | \`<h1>Main Title</h1>\` |
| \`<p>\` | Paragraph | \`<p>Some text...</p>\` |
| \`<strong>\` | Bold/Important | \`<strong>Warning!</strong>\` |
| \`<em>\` | Italic/Emphasis | \`<em>Note:</em>\` |
| \`<br>\` | Line break | \`Line 1<br>Line 2\` |
| \`<hr>\` | Horizontal rule | \`<hr>\` |

## Self-Closing Tags

Some tags don't need closing tags:
\`\`\`html
<br>      <!-- Line break -->
<hr>      <!-- Horizontal rule -->
<img>     <!-- Image -->
<input>   <!-- Form input -->
\`\`\`

## Nesting Elements

Elements can contain other elements:
\`\`\`html
<article>
    <h2>Article Title</h2>
    <p>This is a <strong>nested</strong> paragraph.</p>
</article>
\`\`\`

⚠️ **Important**: Always close tags in the correct order!
- ✅ \`<p><strong>text</strong></p>\`
- ❌ \`<p><strong>text</p></strong>\`

---

## Your Mission

Build a simple "About Me" section using various HTML elements.
                    `,
                    tasks: [
                        { 
                            id: 1, 
                            description: 'Create an <h1> with your name or "Student Name"', 
                            completed: false, 
                            regex: /<h1>[^<]{3,}<\/h1>/i 
                        },
                        { 
                            id: 2, 
                            description: 'Add an <h2> subtitle like "Software Engineering"', 
                            completed: false, 
                            regex: /<h2>[^<]{3,}<\/h2>/i 
                        },
                        { 
                            id: 3, 
                            description: 'Write a <p> paragraph (at least 20 characters)', 
                            completed: false, 
                            regex: /<p>[\s\S]{20,}<\/p>/i 
                        },
                        { 
                            id: 4, 
                            description: 'Use <strong> to highlight something important', 
                            completed: false, 
                            regex: /<strong>[^<]+<\/strong>/i 
                        },
                        { 
                            id: 5, 
                            description: 'Add a horizontal rule <hr> to separate sections', 
                            completed: false, 
                            regex: /<hr\s*\/?>/i 
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
    <title>About Me</title>
</head>
<body>
    <!-- Build your About Me section here -->
    <!-- Use h1, h2, p, strong, and hr tags -->
    
    
</body>
</html>`
                        },
                        { 
                            name: 'style.css', 
                            language: 'css', 
                            content: `body { 
    font-family: Georgia, serif; 
    max-width: 600px; 
    margin: 40px auto; 
    padding: 20px; 
    line-height: 1.8; 
}
h1 { 
    color: #0a192f; 
    border-bottom: 3px solid #800000; 
    padding-bottom: 10px; 
}
h2 { 
    color: #666; 
}
hr { 
    border: none; 
    height: 2px; 
    background: linear-gradient(to right, #800000, transparent); 
    margin: 30px 0; 
}` 
                        },
                        { 
                            name: 'script.js', 
                            language: 'javascript', 
                            content: '' 
                        }
                    ]
                },
                {
                    id: 'html5-1-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'HTML Basics Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'What does HTML stand for?',
                            options: [
                                'Hyper Text Markup Language',
                                'High Tech Modern Language',
                                'Hyper Transfer Markup Language',
                                'Home Tool Markup Language'
                            ],
                            correctIndex: 0,
                            explanation: 'HTML stands for HyperText Markup Language. It was created by Tim Berners-Lee in 1991.'
                        },
                        {
                            id: 'q2',
                            question: 'Which tag is used for the largest heading?',
                            options: ['<heading>', '<h6>', '<h1>', '<head>'],
                            correctIndex: 2,
                            explanation: '<h1> is the largest heading, and <h6> is the smallest. <head> is for metadata, not visible headings.'
                        },
                        {
                            id: 'q3',
                            question: 'Where does visible content go in an HTML document?',
                            options: ['<head>', '<body>', '<html>', '<meta>'],
                            correctIndex: 1,
                            explanation: 'The <body> element contains all visible content. <head> contains metadata like title and stylesheets.'
                        },
                        {
                            id: 'q4',
                            question: 'Which is a self-closing tag?',
                            options: ['<p>', '<div>', '<br>', '<span>'],
                            correctIndex: 2,
                            explanation: '<br> is self-closing (no content inside). Other self-closing tags include <img>, <input>, <hr>.'
                        },
                        {
                            id: 'q5',
                            question: 'What is the correct way to nest elements?',
                            options: [
                                '<p><strong>text</p></strong>',
                                '<p><strong>text</strong></p>',
                                '<strong><p>text</strong></p>',
                                '</p><strong>text</strong><p>'
                            ],
                            correctIndex: 1,
                            explanation: 'Tags must be closed in the reverse order they were opened. Inner tags close before outer tags.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 2: Semantic HTML
        // ============================================
        {
            id: 'html5-unit-2',
            title: 'Semantic HTML',
            description: 'Learn meaningful HTML5 elements for better structure and accessibility',
            items: [
                {
                    id: 'html5-2-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Why Semantic HTML Matters',
                    duration: '8 min read',
                    content: `
# Why Semantic HTML Matters

## What is Semantic HTML?

**Semantic HTML** uses tags that describe their meaning, not just their appearance.

### Non-Semantic vs Semantic

\`\`\`html
<!-- ❌ Non-Semantic (no meaning) -->
<div id="header">
    <div class="nav">
        <div class="link">Home</div>
    </div>
</div>

<!-- ✅ Semantic (clear meaning) -->
<header>
    <nav>
        <a href="/">Home</a>
    </nav>
</header>
\`\`\`

## Benefits of Semantic HTML

### 1. **Accessibility** ♿
Screen readers can navigate better:
- Jump to \`<nav>\` for navigation
- Skip to \`<main>\` for content
- Find \`<article>\` sections easily

### 2. **SEO** 🔍
Search engines understand your content:
- \`<article>\` = main content
- \`<aside>\` = supplementary info
- \`<time>\` = dates and timestamps

### 3. **Maintainability** 🛠️
Code is easier to read and update:
\`\`\`html
<article>  <!-- Clear: this is an article -->
<div>      <!-- Unclear: what is this? -->
\`\`\`

## Key Semantic Elements

| Element | Purpose | Example Use |
|---------|---------|-------------|
| \`<header>\` | Page/section header | Logo, site title, nav |
| \`<nav>\` | Navigation links | Menu, breadcrumbs |
| \`<main>\` | Main content | Primary page content |
| \`<article>\` | Self-contained content | Blog post, news article |
| \`<section>\` | Thematic grouping | Chapters, tabs |
| \`<aside>\` | Sidebar content | Related links, ads |
| \`<footer>\` | Page/section footer | Copyright, contact |
| \`<figure>\` | Media with caption | Images, diagrams |

## Real-World Example

\`\`\`html
<article>
    <header>
        <h1>Breaking News</h1>
        <time datetime="2024-01-15">January 15, 2024</time>
    </header>
    
    <p>Article content here...</p>
    
    <figure>
        <img src="photo.jpg" alt="Event photo">
        <figcaption>Photo from the event</figcaption>
    </figure>
    
    <footer>
        <p>Written by John Doe</p>
    </footer>
</article>
\`\`\`

> 💡 **Pro Tip**: When in doubt, ask yourself: "Does this tag describe what the content IS, not how it LOOKS?"
                    `
                },
                {
                    id: 'html5-2-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Building a Semantic Page Layout',
                    duration: '25 min',
                    content: `
# Building a Semantic Page Layout

## The Semantic Structure

A typical webpage has this structure:

\`\`\`
┌─────────────────────────┐
│      <header>           │  ← Logo, nav
├─────────────────────────┤
│      <main>             │
│  ┌──────────┬────────┐  │
│  │ <article>│ <aside>│  │  ← Content + Sidebar
│  └──────────┴────────┘  │
├─────────────────────────┤
│      <footer>           │  ← Copyright, links
└─────────────────────────┘
\`\`\`

## Element Breakdown

### \`<header>\`
Top of page or section. Can contain:
- Logo
- Site title
- Navigation (\`<nav>\`)
- Search bar

### \`<nav>\`
Navigation links. Use for:
- Main menu
- Breadcrumbs
- Table of contents

### \`<main>\`
**One per page!** Contains primary content.
- Skip navigation for screen readers
- Should be unique to the page

### \`<article>\`
Self-contained, reusable content:
- Blog posts
- News articles
- Forum posts
- Product cards

### \`<section>\`
Thematic grouping with a heading:
- Chapters
- Tabs
- Different topics

### \`<aside>\`
Tangentially related content:
- Sidebars
- Pull quotes
- Related links
- Advertisements

### \`<footer>\`
Bottom of page or section:
- Copyright
- Contact info
- Social links
- Sitemap

---

## Your Mission

Build a semantic blog layout for President University's tech blog.
                    `,
                    tasks: [
                        { 
                            id: 1, 
                            description: 'Create a <header> with an <h1> site title', 
                            completed: false, 
                            regex: /<header>[\s\S]*<h1>[\s\S]+<\/h1>[\s\S]*<\/header>/i 
                        },
                        { 
                            id: 2, 
                            description: 'Add a <nav> inside header with at least 2 links', 
                            completed: false, 
                            regex: /<header>[\s\S]*<nav>[\s\S]*<a[^>]*>[\s\S]*<\/a>[\s\S]*<a[^>]*>[\s\S]*<\/a>[\s\S]*<\/nav>[\s\S]*<\/header>/i 
                        },
                        { 
                            id: 3, 
                            description: 'Create a <main> element for the main content area', 
                            completed: false, 
                            regex: /<main>[\s\S]+<\/main>/i 
                        },
                        { 
                            id: 4, 
                            description: 'Add an <article> inside main with a heading and paragraph', 
                            completed: false, 
                            regex: /<main>[\s\S]*<article>[\s\S]*<h[1-6]>[\s\S]+<\/h[1-6]>[\s\S]*<p>[\s\S]+<\/p>[\s\S]*<\/article>[\s\S]*<\/main>/i 
                        },
                        { 
                            id: 5, 
                            description: 'Add a <footer> with copyright text', 
                            completed: false, 
                            regex: /<footer>[\s\S]*©[\s\S]*<\/footer>/i 
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
    <title>PULSE Tech Blog</title>
</head>
<body>
    <!-- Build a semantic page structure -->
    <!-- Use: header, nav, main, article, footer -->
    
    
</body>
</html>`
                        },
                        { 
                            name: 'style.css', 
                            language: 'css', 
                            content: `* { margin: 0; padding: 0; box-sizing: border-box; }
body { 
    font-family: 'Inter', sans-serif; 
    line-height: 1.6; 
    color: #333;
}
header { 
    background: #800000; 
    color: white; 
    padding: 20px; 
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
nav { 
    margin-top: 10px; 
}
nav a { 
    color: white; 
    margin-right: 20px; 
    text-decoration: none; 
    font-weight: 500;
}
nav a:hover { 
    text-decoration: underline; 
}
main { 
    max-width: 1200px; 
    margin: 40px auto; 
    padding: 0 20px; 
}
article { 
    background: white; 
    padding: 30px; 
    margin-bottom: 20px; 
    border-radius: 8px; 
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
article h2 { 
    color: #800000; 
    margin-bottom: 15px; 
}
footer { 
    background: #f5f5f5; 
    text-align: center; 
    padding: 20px; 
    margin-top: 40px; 
    color: #666;
}` 
                        },
                        { 
                            name: 'script.js', 
                            language: 'javascript', 
                            content: '' 
                        }
                    ]
                },
                {
                    id: 'html5-2-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Article, Section, and Aside',
                    duration: '20 min',
                    content: `
# Article, Section, and Aside

These three elements often confuse beginners. Let's clarify!

## \`<article>\` - Standalone Content

**Rule**: Could you syndicate this content elsewhere and it would still make sense?

✅ **Good uses**:
- Blog posts
- News articles
- Forum posts
- Product cards
- Social media posts

\`\`\`html
<article>
    <h2>10 Tips for Better Code</h2>
    <p>Published: Jan 15, 2024</p>
    <p>Content here...</p>
</article>
\`\`\`

## \`<section>\` - Thematic Grouping

**Rule**: Does this content have a natural heading?

✅ **Good uses**:
- Chapters in a document
- Tabs in a tabbed interface
- Different topics on a page

\`\`\`html
<article>
    <h1>Complete HTML Guide</h1>
    
    <section>
        <h2>Introduction</h2>
        <p>HTML basics...</p>
    </section>
    
    <section>
        <h2>Advanced Topics</h2>
        <p>Semantic HTML...</p>
    </section>
</article>
\`\`\`

## \`<aside>\` - Tangential Content

**Rule**: If you removed this, would the main content still make sense?

✅ **Good uses**:
- Sidebars
- Pull quotes
- Related links
- Glossary definitions
- Advertisements

\`\`\`html
<article>
    <h1>Web Development in 2024</h1>
    <p>Main content...</p>
    
    <aside>
        <h3>Related Articles</h3>
        <ul>
            <li><a href="#">CSS Grid Guide</a></li>
            <li><a href="#">JavaScript Basics</a></li>
        </ul>
    </aside>
</article>
\`\`\`

## When to Use What?

| Scenario | Element | Why |
|----------|---------|-----|
| Blog post | \`<article>\` | Standalone content |
| Sidebar with ads | \`<aside>\` | Supplementary |
| Chapter in article | \`<section>\` | Thematic grouping |
| Product card | \`<article>\` | Reusable component |
| "About the author" box | \`<aside>\` | Related but separate |

## Nesting Rules

✅ **Allowed**:
- \`<article>\` inside \`<section>\`
- \`<section>\` inside \`<article>\`
- \`<aside>\` inside \`<article>\`

❌ **Avoid**:
- \`<article>\` inside \`<article>\` (unless it's a comment/reply)
- Multiple \`<main>\` elements

---

## Your Mission

Create a news article page with proper semantic structure.
                    `,
                    tasks: [
                        { 
                            id: 1, 
                            description: 'Create an <article> with a news headline in <h1>', 
                            completed: false, 
                            regex: /<article>[\s\S]*<h1>[\s\S]{10,}<\/h1>[\s\S]*<\/article>/i 
                        },
                        { 
                            id: 2, 
                            description: 'Add a <section> inside article with heading "Background"', 
                            completed: false, 
                            regex: /<article>[\s\S]*<section>[\s\S]*<h[2-6]>[\s\S]*Background[\s\S]*<\/h[2-6]>[\s\S]*<\/section>[\s\S]*<\/article>/i 
                        },
                        { 
                            id: 3, 
                            description: 'Add another <section> with heading "Impact"', 
                            completed: false, 
                            regex: /<article>[\s\S]*<section>[\s\S]*<h[2-6]>[\s\S]*Impact[\s\S]*<\/h[2-6]>[\s\S]*<\/section>[\s\S]*<\/article>/i 
                        },
                        { 
                            id: 4, 
                            description: 'Add an <aside> with "Related News" heading', 
                            completed: false, 
                            regex: /<aside>[\s\S]*<h[2-6]>[\s\S]*Related[\s\S]*<\/h[2-6]>[\s\S]*<\/aside>/i 
                        },
                        { 
                            id: 5, 
                            description: 'Add at least 2 links inside the aside', 
                            completed: false, 
                            regex: /<aside>[\s\S]*<a[^>]*>[\s\S]*<\/a>[\s\S]*<a[^>]*>[\s\S]*<\/a>[\s\S]*<\/aside>/i 
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
    <title>News Article</title>
</head>
<body>
    <!-- Create a news article with sections and aside -->
    
    
</body>
</html>`
                        },
                        { 
                            name: 'style.css', 
                            language: 'css', 
                            content: `body { 
    font-family: 'Georgia', serif; 
    max-width: 1000px; 
    margin: 0 auto; 
    padding: 20px; 
    display: grid; 
    grid-template-columns: 2fr 1fr; 
    gap: 30px;
}
article { 
    grid-column: 1; 
}
article h1 { 
    font-size: 2.5em; 
    line-height: 1.2; 
    margin-bottom: 20px; 
    color: #1a1a1a;
}
section { 
    margin: 30px 0; 
}
section h2 { 
    color: #800000; 
    border-left: 4px solid #800000; 
    padding-left: 15px; 
    margin-bottom: 15px;
}
aside { 
    grid-column: 2; 
    background: #f9f9f9; 
    padding: 20px; 
    border-radius: 8px; 
    height: fit-content; 
    position: sticky; 
    top: 20px;
}
aside h3 { 
    color: #800000; 
    margin-bottom: 15px; 
    font-size: 1.2em;
}
aside a { 
    display: block; 
    color: #0066cc; 
    text-decoration: none; 
    margin-bottom: 10px; 
    padding: 8px; 
    border-radius: 4px; 
    transition: background 0.2s;
}
aside a:hover { 
    background: #e0e0e0; 
}` 
                        },
                        { 
                            name: 'script.js', 
                            language: 'javascript', 
                            content: '' 
                        }
                    ]
                },
                {
                    id: 'html5-2-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Semantic HTML Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Which element represents the main content of a page?',
                            options: ['<main>', '<content>', '<primary>', '<body>'],
                            correctIndex: 0,
                            explanation: '<main> contains the primary content. There should only be one <main> per page.'
                        },
                        {
                            id: 'q2',
                            question: 'What is the best element for a blog post?',
                            options: ['<div>', '<section>', '<article>', '<post>'],
                            correctIndex: 2,
                            explanation: '<article> is perfect for self-contained, reusable content like blog posts.'
                        },
                        {
                            id: 'q3',
                            question: 'Which element should contain navigation links?',
                            options: ['<menu>', '<nav>', '<links>', '<navigation>'],
                            correctIndex: 1,
                            explanation: '<nav> is the semantic element for navigation links, menus, and breadcrumbs.'
                        },
                        {
                            id: 'q4',
                            question: 'What is <aside> used for?',
                            options: [
                                'Main content',
                                'Tangentially related content',
                                'Navigation',
                                'Footer content'
                            ],
                            correctIndex: 1,
                            explanation: '<aside> is for content related to the main content but not essential - like sidebars or related links.'
                        },
                        {
                            id: 'q5',
                            question: 'Why is semantic HTML important?',
                            options: [
                                'It makes pages load faster',
                                'It improves accessibility and SEO',
                                'It reduces file size',
                                'It adds animations'
                            ],
                            correctIndex: 1,
                            explanation: 'Semantic HTML helps screen readers, search engines, and developers understand content structure.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 3: HTML Forms
        // ============================================
        {
            id: 'html5-unit-3',
            title: 'HTML Forms',
            description: 'Master form inputs, validation, and user interaction',
            items: [
                {
                    id: 'html5-3-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Introduction to Forms',
                    duration: '7 min read',
                    content: `
# Introduction to HTML Forms

Forms are how users interact with websites - from login pages to checkout carts.

## The \`<form>\` Element

\`\`\`html
<form action="/submit" method="POST">
    <!-- Form inputs go here -->
    <button type="submit">Submit</button>
</form>
\`\`\`

### Key Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| \`action\` | Where to send data | \`action="/login"\` |
| \`method\` | How to send (GET/POST) | \`method="POST"\` |
| \`name\` | Form identifier | \`name="loginForm"\` |

## Common Input Types

HTML5 introduced many new input types:

\`\`\`html
<!-- Text inputs -->
<input type="text" placeholder="Username">
<input type="email" placeholder="Email">
<input type="password" placeholder="Password">
<input type="tel" placeholder="Phone">
<input type="url" placeholder="Website">

<!-- Numbers and dates -->
<input type="number" min="0" max="100">
<input type="date">
<input type="time">
<input type="datetime-local">

<!-- Selections -->
<input type="checkbox">
<input type="radio">
<input type="range" min="0" max="100">
<input type="color">

<!-- Files -->
<input type="file" accept="image/*">
\`\`\`

## Form Structure Best Practices

### 1. Use Labels
\`\`\`html
<!-- ✅ Good: Accessible -->
<label for="email">Email:</label>
<input type="email" id="email" name="email">

<!-- ❌ Bad: Not accessible -->
<input type="email" placeholder="Email">
\`\`\`

### 2. Group Related Fields
\`\`\`html
<fieldset>
    <legend>Personal Information</legend>
    <label>Name: <input type="text"></label>
    <label>Age: <input type="number"></label>
</fieldset>
\`\`\`

### 3. Provide Validation
\`\`\`html
<input type="email" required>
<input type="text" minlength="3" maxlength="20">
<input type="number" min="18" max="100">
\`\`\`

## HTML5 Validation Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| \`required\` | Field must be filled | \`<input required>\` |
| \`minlength\` | Minimum characters | \`<input minlength="8">\` |
| \`maxlength\` | Maximum characters | \`<input maxlength="20">\` |
| \`min\` / \`max\` | Number range | \`<input type="number" min="0">\` |
| \`pattern\` | Regex validation | \`<input pattern="[0-9]{5}">\` |

## Real-World Example

\`\`\`html
<form action="/register" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" 
           required minlength="3" maxlength="20">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" 
           required minlength="8">
    
    <button type="submit">Register</button>
</form>
\`\`\`

> 💡 **Pro Tip**: Always use \`type="email"\` for emails - it provides automatic validation and shows the right keyboard on mobile!
                    `
                },
                {
                    id: 'html5-3-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Building a Contact Form',
                    duration: '25 min',
                    content: `
# Building a Contact Form

Let's build a professional contact form with proper validation.

## Form Structure

A good contact form needs:
1. Name field (text)
2. Email field (email)
3. Subject field (text)
4. Message field (textarea)
5. Submit button

## The \`<label>\` Element

Labels are crucial for accessibility:

\`\`\`html
<!-- Method 1: Wrapping -->
<label>
    Name:
    <input type="text" name="name">
</label>

<!-- Method 2: For attribute (preferred) -->
<label for="name">Name:</label>
<input type="text" id="name" name="name">
\`\`\`

## The \`<textarea>\` Element

For multi-line text:

\`\`\`html
<textarea name="message" rows="5" cols="40"></textarea>
\`\`\`

## Button Types

\`\`\`html
<button type="submit">Submit Form</button>
<button type="reset">Clear Form</button>
<button type="button">Just a Button</button>
\`\`\`

## Validation Attributes

\`\`\`html
<input type="text" required>           <!-- Must be filled -->
<input type="email" required>          <!-- Must be valid email -->
<input type="text" minlength="3">      <!-- At least 3 chars -->
<textarea required minlength="10"></textarea>
\`\`\`

---

## Your Mission

Create a contact form for President University's IT support.
                    `,
                    tasks: [
                        { 
                            id: 1, 
                            description: 'Create a <form> element', 
                            completed: false, 
                            regex: /<form[^>]*>[\s\S]+<\/form>/i 
                        },
                        { 
                            id: 2, 
                            description: 'Add a text input with label "Name" (use id and for)', 
                            completed: false, 
                            regex: /<label[^>]*for=["'][\w-]+["'][^>]*>[\s\S]*Name[\s\S]*<\/label>[\s\S]*<input[^>]*type=["']text["'][^>]*id=["'][\w-]+["'][^>]*>/i 
                        },
                        { 
                            id: 3, 
                            description: 'Add an email input with label "Email" and make it required', 
                            completed: false, 
                            regex: /<label[^>]*for=["'][\w-]+["'][^>]*>[\s\S]*Email[\s\S]*<\/label>[\s\S]*<input[^>]*type=["']email["'][^>]*required[^>]*>/i 
                        },
                        { 
                            id: 4, 
                            description: 'Add a <textarea> with label "Message" (at least 3 rows)', 
                            completed: false, 
                            regex: /<label[^>]*for=["'][\w-]+["'][^>]*>[\s\S]*Message[\s\S]*<\/label>[\s\S]*<textarea[^>]*rows=["']([3-9]|\d{2,})["'][^>]*>[\s\S]*<\/textarea>/i 
                        },
                        { 
                            id: 5, 
                            description: 'Add a submit button with text "Send"', 
                            completed: false, 
                            regex: /<button[^>]*type=["']submit["'][^>]*>[\s\S]*Send[\s\S]*<\/button>/i 
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
    <title>Contact Form</title>
</head>
<body>
    <h1>Contact IT Support</h1>
    
    <!-- Build your contact form here -->
    
    
</body>
</html>`
                        },
                        { 
                            name: 'style.css', 
                            language: 'css', 
                            content: `body { 
    font-family: 'Segoe UI', sans-serif; 
    max-width: 500px; 
    margin: 50px auto; 
    padding: 30px; 
    background: #f5f5f5;
}
h1 { 
    color: #800000; 
    text-align: center; 
    margin-bottom: 30px;
}
form { 
    background: white; 
    padding: 30px; 
    border-radius: 10px; 
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
label { 
    display: block; 
    margin-bottom: 5px; 
    font-weight: 600; 
    color: #333;
}
input, textarea { 
    width: 100%; 
    padding: 12px; 
    margin-bottom: 20px; 
    border: 2px solid #ddd; 
    border-radius: 5px; 
    font-size: 14px; 
    font-family: inherit;
    transition: border-color 0.3s;
}
input:focus, textarea:focus { 
    outline: none; 
    border-color: #800000;
}
button { 
    width: 100%; 
    padding: 15px; 
    background: #800000; 
    color: white; 
    border: none; 
    border-radius: 5px; 
    font-size: 16px; 
    font-weight: 600; 
    cursor: pointer; 
    transition: background 0.3s;
}
button:hover { 
    background: #600000; 
}` 
                        },
                        { 
                            name: 'script.js', 
                            language: 'javascript', 
                            content: '' 
                        }
                    ]
                },
                {
                    id: 'html5-3-3',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Advanced Form Inputs',
                    duration: '25 min',
                    content: `
# Advanced Form Inputs

HTML5 introduced powerful new input types. Let's explore them!

## Selection Inputs

### Radio Buttons (Choose One)
\`\`\`html
<fieldset>
    <legend>Choose your major:</legend>
    <label>
        <input type="radio" name="major" value="cs">
        Computer Science
    </label>
    <label>
        <input type="radio" name="major" value="se">
        Software Engineering
    </label>
</fieldset>
\`\`\`

**Key**: Same \`name\` attribute = only one can be selected

### Checkboxes (Choose Multiple)
\`\`\`html
<fieldset>
    <legend>Select skills:</legend>
    <label>
        <input type="checkbox" name="skills" value="html">
        HTML
    </label>
    <label>
        <input type="checkbox" name="skills" value="css">
        CSS
    </label>
</fieldset>
\`\`\`

### Dropdown (Select)
\`\`\`html
<label for="country">Country:</label>
<select id="country" name="country">
    <option value="">-- Choose --</option>
    <option value="id">Indonesia</option>
    <option value="sg">Singapore</option>
    <option value="my">Malaysia</option>
</select>
\`\`\`

## Date and Time Inputs

\`\`\`html
<input type="date">           <!-- Date picker -->
<input type="time">           <!-- Time picker -->
<input type="datetime-local"> <!-- Date + Time -->
<input type="month">          <!-- Month picker -->
<input type="week">           <!-- Week picker -->
\`\`\`

## Number and Range

\`\`\`html
<input type="number" min="0" max="100" step="5">
<input type="range" min="0" max="100" value="50">
\`\`\`

## Other Useful Types

\`\`\`html
<input type="color">          <!-- Color picker -->
<input type="file" accept="image/*">  <!-- File upload -->
<input type="tel" pattern="[0-9]{10}"> <!-- Phone -->
<input type="url">            <!-- Website URL -->
<input type="search">         <!-- Search box -->
\`\`\`

## The \`<fieldset>\` and \`<legend>\`

Group related inputs:

\`\`\`html
<fieldset>
    <legend>Personal Information</legend>
    <!-- Related inputs here -->
</fieldset>
\`\`\`

---

## Your Mission

Build a student registration form with various input types.
                    `,
                    tasks: [
                        { 
                            id: 1, 
                            description: 'Create a <select> dropdown for "Faculty" with at least 2 options', 
                            completed: false, 
                            regex: /<select[^>]*>[\s\S]*<option[^>]*>[\s\S]+<\/option>[\s\S]*<option[^>]*>[\s\S]+<\/option>[\s\S]*<\/select>/i 
                        },
                        { 
                            id: 2, 
                            description: 'Add radio buttons for "Gender" (at least 2 options with same name)', 
                            completed: false, 
                            regex: /<input[^>]*type=["']radio["'][^>]*name=["']([\w-]+)["'][^>]*>[\s\S]*<input[^>]*type=["']radio["'][^>]*name=["']\1["'][^>]*>/i 
                        },
                        { 
                            id: 3, 
                            description: 'Add a date input for "Birth Date"', 
                            completed: false, 
                            regex: /<input[^>]*type=["']date["'][^>]*>/i 
                        },
                        { 
                            id: 4, 
                            description: 'Add checkboxes for "Interests" (at least 2 with same name)', 
                            completed: false, 
                            regex: /<input[^>]*type=["']checkbox["'][^>]*name=["']([\w-]+)["'][^>]*>[\s\S]*<input[^>]*type=["']checkbox["'][^>]*name=["']\1["'][^>]*>/i 
                        },
                        { 
                            id: 5, 
                            description: 'Add a number input for "Age" with min="17"', 
                            completed: false, 
                            regex: /<input[^>]*type=["']number["'][^>]*min=["']1[7-9]|[2-9]\d["'][^>]*>/i 
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
    <title>Student Registration</title>
</head>
<body>
    <h1>New Student Registration</h1>
    
    <form>
        <!-- Build a comprehensive registration form -->
        <!-- Use: select, radio, date, checkbox, number -->
        
        
        <button type="submit">Register</button>
    </form>
</body>
</html>`
                        },
                        { 
                            name: 'style.css', 
                            language: 'css', 
                            content: `body { 
    font-family: 'Inter', sans-serif; 
    max-width: 600px; 
    margin: 40px auto; 
    padding: 20px; 
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    min-height: 100vh;
}
h1 { 
    color: white; 
    text-align: center; 
    margin-bottom: 30px;
}
form { 
    background: white; 
    padding: 40px; 
    border-radius: 15px; 
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
label { 
    display: block; 
    margin: 15px 0 5px; 
    font-weight: 600; 
    color: #333;
}
input, select, textarea { 
    width: 100%; 
    padding: 10px; 
    margin-bottom: 15px; 
    border: 2px solid #ddd; 
    border-radius: 5px; 
    font-size: 14px;
}
input[type="radio"], input[type="checkbox"] { 
    width: auto; 
    margin-right: 8px;
}
fieldset { 
    border: 2px solid #667eea; 
    border-radius: 8px; 
    padding: 15px; 
    margin: 20px 0;
}
legend { 
    color: #667eea; 
    font-weight: 700; 
    padding: 0 10px;
}
button { 
    width: 100%; 
    padding: 15px; 
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    color: white; 
    border: none; 
    border-radius: 8px; 
    font-size: 16px; 
    font-weight: 700; 
    cursor: pointer; 
    margin-top: 20px;
}
button:hover { 
    transform: translateY(-2px); 
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}` 
                        },
                        { 
                            name: 'script.js', 
                            language: 'javascript', 
                            content: '' 
                        }
                    ]
                },
                {
                    id: 'html5-3-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'HTML Forms Quiz',
                    duration: '5 min',
                    questions: [
                        {
                            id: 'q1',
                            question: 'Which input type is best for email addresses?',
                            options: ['type="text"', 'type="email"', 'type="mail"', 'type="address"'],
                            correctIndex: 1,
                            explanation: 'type="email" provides automatic validation and shows the right keyboard on mobile devices.'
                        },
                        {
                            id: 'q2',
                            question: 'How do you make a form field required?',
                            options: [
                                'Add required="true"',
                                'Add required attribute',
                                'Add mandatory="yes"',
                                'Add validate="required"'
                            ],
                            correctIndex: 1,
                            explanation: 'Just add the "required" attribute: <input required>. No value needed!'
                        },
                        {
                            id: 'q3',
                            question: 'What makes radio buttons work as a group (only one selectable)?',
                            options: [
                                'Same id attribute',
                                'Same name attribute',
                                'Same value attribute',
                                'Same class attribute'
                            ],
                            correctIndex: 1,
                            explanation: 'Radio buttons with the same "name" attribute form a group where only one can be selected.'
                        },
                        {
                            id: 'q4',
                            question: 'Which element is used for multi-line text input?',
                            options: ['<input type="text">', '<textarea>', '<textbox>', '<multiline>'],
                            correctIndex: 1,
                            explanation: '<textarea> is specifically designed for multi-line text input, unlike <input>.'
                        },
                        {
                            id: 'q5',
                            question: 'What is the purpose of the <label> element?',
                            options: [
                                'To style form inputs',
                                'To validate inputs',
                                'To associate text with inputs for accessibility',
                                'To submit the form'
                            ],
                            correctIndex: 2,
                            explanation: '<label> associates text with inputs, improving accessibility and allowing users to click the label to focus the input.'
                        }
                    ]
                }
            ]
        },

        // ============================================
        // UNIT 4: Final Project
        // ============================================
        {
            id: 'html5-unit-4',
            title: 'Final Project',
            description: 'Build a complete multi-page website',
            items: [
                {
                    id: 'html5-4-project',
                    type: CONTENT_TYPES.PROJECT,
                    title: 'Build a Personal Portfolio Website',
                    duration: '2-3 hours',
                    content: `
# Final Project: Personal Portfolio Website

## Project Overview

Build a complete personal portfolio website that showcases everything you've learned in this course.

## Requirements

Your portfolio must include:

### 1. Homepage (\`index.html\`)
- Semantic \`<header>\` with your name and navigation
- \`<main>\` section with:
  - Hero section with your photo and introduction
  - About section with your background
  - Skills section listing your abilities
- Semantic \`<footer>\` with contact info and social links

### 2. Projects Page (\`projects.html\`)
- At least 3 project cards using \`<article>\` elements
- Each project should have:
  - Project title (\`<h2>\`)
  - Description (\`<p>\`)
  - Technologies used (list)
  - Link to project (if available)

### 3. Contact Page (\`contact.html\`)
- Contact form with:
  - Name field (text, required)
  - Email field (email, required)
  - Subject field (text)
  - Message field (textarea, required, min 20 chars)
  - Submit button
- Your contact information in an \`<aside>\`

## Technical Requirements

✅ **Must Have**:
- Valid HTML5 structure (DOCTYPE, html, head, body)
- Semantic elements (header, nav, main, article, section, aside, footer)
- At least one form with validation
- Proper use of headings (h1-h6)
- Navigation menu on all pages
- All images must have alt text
- Consistent styling across pages

✅ **Bonus Points**:
- Use \`<figure>\` and \`<figcaption>\` for images
- Add a \`<time>\` element for dates
- Include a \`<details>\` element for expandable content
- Use \`<mark>\` to highlight important text
- Add meta tags for SEO

## Grading Criteria

| Criteria | Points |
|----------|--------|
| Semantic HTML structure | 30% |
| Form with proper validation | 25% |
| Navigation and links | 15% |
| Content quality | 15% |
| Accessibility (labels, alt text) | 15% |

## Tips for Success

1. **Plan First**: Sketch your layout on paper before coding
2. **Start Simple**: Get the structure right, then add details
3. **Test Everything**: Check all links and form validation
4. **Be Creative**: Make it personal and unique!
5. **Validate**: Use the W3C HTML Validator

## Example Structure

\`\`\`
portfolio/
├── index.html       (Homepage)
├── projects.html    (Projects showcase)
├── contact.html     (Contact form)
└── images/
    └── profile.jpg
\`\`\`

## Submission Checklist

- [ ] All 3 pages created
- [ ] Navigation works between pages
- [ ] Form validates correctly
- [ ] All semantic elements used properly
- [ ] No HTML validation errors
- [ ] Tested in browser

---

## Get Started!

Use the editor to build your portfolio. Start with \`index.html\` and work your way through each page.

**Remember**: This is YOUR portfolio. Make it reflect who you are as a developer!
                    `,
                    tasks: [
                        { 
                            id: 1, 
                            description: 'Create index.html with semantic header, nav, main, and footer', 
                            completed: false, 
                            regex: /<header>[\s\S]+<\/header>[\s\S]*<nav>[\s\S]+<\/nav>[\s\S]*<main>[\s\S]+<\/main>[\s\S]*<footer>[\s\S]+<\/footer>/i 
                        },
                        { 
                            id: 2, 
                            description: 'Add navigation with links to all 3 pages', 
                            completed: false, 
                            regex: /<nav>[\s\S]*<a[^>]*href=["'][^"']*index[^"']*["'][^>]*>[\s\S]*<\/a>[\s\S]*<a[^>]*href=["'][^"']*projects[^"']*["'][^>]*>[\s\S]*<\/a>[\s\S]*<a[^>]*href=["'][^"']*contact[^"']*["'][^>]*>[\s\S]*<\/a>[\s\S]*<\/nav>/i 
                        },
                        { 
                            id: 3, 
                            description: 'Create at least 2 sections in main (About, Skills, etc.)', 
                            completed: false, 
                            regex: /<main>[\s\S]*<section>[\s\S]+<\/section>[\s\S]*<section>[\s\S]+<\/section>[\s\S]*<\/main>/i 
                        },
                        { 
                            id: 4, 
                            description: 'Create projects.html with at least 2 article elements', 
                            completed: false, 
                            regex: /projects[\s\S]*<article>[\s\S]+<\/article>[\s\S]*<article>[\s\S]+<\/article>/i 
                        },
                        { 
                            id: 5, 
                            description: 'Create contact.html with a form (name, email, message, submit)', 
                            completed: false, 
                            regex: /contact[\s\S]*<form[\s\S]+<input[^>]*type=["']text["'][^>]*[\s\S]+<input[^>]*type=["']email["'][^>]*[\s\S]+<textarea[\s\S]+<\/textarea>[\s\S]+<button[^>]*type=["']submit["'][^>]*>[\s\S]+<\/button>[\s\S]*<\/form>/i 
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
    <title>My Portfolio</title>
</head>
<body>
    <!-- Build your portfolio homepage here -->
    
    
</body>
</html>`
                        },
                        {
                            name: 'projects.html',
                            language: 'html',
                            content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Projects</title>
</head>
<body>
    <!-- Build your projects page here -->
    
    
</body>
</html>`
                        },
                        {
                            name: 'contact.html',
                            language: 'html',
                            content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Me</title>
</head>
<body>
    <!-- Build your contact page here -->
    
    
</body>
</html>`
                        },
                        { 
                            name: 'style.css', 
                            language: 'css', 
                            content: `/* Global Styles */
* { 
    margin: 0; 
    padding: 0; 
    box-sizing: border-box; 
}

body { 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
    line-height: 1.6; 
    color: #333;
}

/* Header & Navigation */
header { 
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    color: white; 
    padding: 20px 0; 
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

nav { 
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 20px; 
    display: flex; 
    justify-content: space-between; 
    align-items: center;
}

nav a { 
    color: white; 
    text-decoration: none; 
    margin-left: 30px; 
    font-weight: 500; 
    transition: opacity 0.3s;
}

nav a:hover { 
    opacity: 0.8; 
}

/* Main Content */
main { 
    max-width: 1200px; 
    margin: 40px auto; 
    padding: 0 20px;
}

section { 
    margin: 60px 0; 
}

h1 { 
    font-size: 2.5em; 
    margin-bottom: 20px; 
    color: #667eea;
}

h2 { 
    font-size: 2em; 
    margin-bottom: 15px; 
    color: #764ba2;
}

/* Articles (Projects) */
article { 
    background: white; 
    padding: 30px; 
    margin-bottom: 30px; 
    border-radius: 10px; 
    box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
    transition: transform 0.3s;
}

article:hover { 
    transform: translateY(-5px); 
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

/* Forms */
form { 
    background: white; 
    padding: 40px; 
    border-radius: 10px; 
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

label { 
    display: block; 
    margin-bottom: 5px; 
    font-weight: 600; 
    color: #333;
}

input, textarea { 
    width: 100%; 
    padding: 12px; 
    margin-bottom: 20px; 
    border: 2px solid #ddd; 
    border-radius: 5px; 
    font-size: 14px; 
    font-family: inherit;
}

input:focus, textarea:focus { 
    outline: none; 
    border-color: #667eea;
}

button { 
    padding: 15px 40px; 
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    color: white; 
    border: none; 
    border-radius: 5px; 
    font-size: 16px; 
    font-weight: 600; 
    cursor: pointer; 
    transition: transform 0.3s;
}

button:hover { 
    transform: translateY(-2px); 
}

/* Footer */
footer { 
    background: #2c3e50; 
    color: white; 
    text-align: center; 
    padding: 30px 20px; 
    margin-top: 60px;
}

footer a { 
    color: #667eea; 
    text-decoration: none;
}

footer a:hover { 
    text-decoration: underline;
}` 
                        },
                        { 
                            name: 'script.js', 
                            language: 'javascript', 
                            content: '// Optional: Add interactivity here' 
                        }
                    ]
                },
                {
                    id: 'html5-4-summary',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Course Summary & Next Steps',
                    duration: '5 min read',
                    content: `
# Congratulations! 🎉

You've completed the HTML5 Fundamentals course!

## What You've Learned

### Unit 1: HTML Basics
✅ HTML document structure  
✅ Common HTML elements and tags  
✅ Nesting and hierarchy  
✅ Building your first webpage  

### Unit 2: Semantic HTML
✅ Semantic vs non-semantic elements  
✅ Page layout structure (header, nav, main, footer)  
✅ Content elements (article, section, aside)  
✅ Accessibility and SEO benefits  

### Unit 3: HTML Forms
✅ Form structure and attributes  
✅ Input types (text, email, date, etc.)  
✅ Form validation  
✅ Labels and accessibility  

### Unit 4: Final Project
✅ Built a complete portfolio website  
✅ Applied all concepts learned  
✅ Created a real-world project  

## Your HTML Skills

You can now:
- 📝 Write valid, semantic HTML5 code
- 🎨 Structure web pages properly
- 📋 Create accessible forms
- 🔍 Optimize for search engines
- ♿ Build accessible websites
- 🚀 Start real web projects

## Next Steps

### 1. **CSS3 Fundamentals** (Recommended Next)
Learn to style your HTML:
- Colors, fonts, and layouts
- Flexbox and Grid
- Responsive design
- Animations and transitions

### 2. **JavaScript Basics**
Add interactivity:
- Variables and functions
- DOM manipulation
- Event handling
- Dynamic content

### 3. **Practice Projects**
Build more websites:
- Restaurant website
- Blog platform
- E-commerce product page
- Landing page

## Resources for Continued Learning

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML) - Best HTML reference
- [W3C HTML Spec](https://html.spec.whatwg.org/) - Official specification
- [Can I Use](https://caniuse.com/) - Browser compatibility

### Tools
- [W3C Validator](https://validator.w3.org/) - Validate your HTML
- [HTML5 Outliner](https://gsnedders.html5.org/outliner/) - Check document structure
- [WebAIM](https://webaim.org/) - Accessibility testing

### Practice
- [Frontend Mentor](https://www.frontendmentor.io/) - Real-world projects
- [Codepen](https://codepen.io/) - Experiment and share
- [freeCodeCamp](https://www.freecodecamp.org/) - Free courses

## Keep Building!

The best way to master HTML is to **keep building**. Every website you create makes you a better developer.

> "The only way to learn a new programming language is by writing programs in it." - Dennis Ritchie

## Share Your Work

Don't forget to:
- 📤 Push your portfolio to GitHub
- 🌐 Deploy it online (GitHub Pages, Netlify, Vercel)
- 💼 Add it to your resume
- 🔗 Share it on LinkedIn

## Thank You!

Thank you for completing this course. We're excited to see what you'll build next!

**Ready for CSS?** Head to the **CSS3 Fundamentals** course to start styling your websites!

---

*Course created for President University Learning System (PULSE)*  
*Questions? Contact IT Support through the platform*
                    `
                }
            ]
        }
    ]
};
