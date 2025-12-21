// HTML5 Comprehensive Course - Detailed & Complete
import { CONTENT_TYPES } from '../curriculumStructure';

export const html5ComprehensiveCourse = {
    id: 'html5',
    title: 'HTML5 Fundamentals - Complete Guide',
    description: 'Master HTML5 from absolute beginner to advanced. Learn semantic HTML, forms, accessibility, and best practices.',

    units: [
        // ============================================
        // UNIT 0: Absolute Beginner - Start from ZERO
        // ============================================
        {
            id: 'html5-unit-0',
            title: 'Absolute Beginner - Start from Zero',
            description: 'Never coded before? Perfect! We explain EVERYTHING step-by-step like you\'re 5 years old.',
            items: [
                {
                    id: 'html5-0-1',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'What is HTML? (Complete Beginner Guide)',
                    duration: '15 min read',
                    content: `
# What is HTML? - Explained Like You're 5 Years Old

## The Simple Answer

Imagine you're writing a letter to a friend. You write:
- **"Dear Friend"** at the top (greeting)
- **Paragraphs** of text (body)
- **"Your friend, John"** at the bottom (signature)

Your friend knows what each part means because of **where it is** and **how it looks**.

**HTML does the same thing for websites!**

HTML tells the computer: "This is a title", "This is a paragraph", "This is a picture", "This is a link".

## Real World Example

**What you want to show:**
\\\`\\\`\\\`
My First Website
Welcome to my page!
This is my first website.
\\\`\\\`\\\`

**How you write it in HTML:**
\`\`\`html
<h1>My First Website</h1>
<p>Welcome to my page!</p>
<p>This is my first website.</p>
\`\`\`

See? You just **label** each part with tags!

## What Are Tags?

Tags are like **labels** or **containers**. They tell the browser what something is.

### Anatomy of a Tag

\`\`\`html
<p>This is a paragraph</p>
 ↑                      ↑
opening tag         closing tag
\`\`\`

**Every tag has:**
1. **Opening tag**: \`<p>\` (starts the label)
2. **Content**: The actual text
3. **Closing tag**: \`</p>\` (ends the label)

### Tag Naming Convention

- Opening tag: \`<tagname>\`
- Closing tag: \`</tagname>\` (notice the forward slash!)

## Common Tags You'll Use

| Tag | What It Does | Example |
|-----|--------------|---------|
| \`<h1>\` | Biggest heading | \`<h1>Page Title</h1>\` |
| \`<h2>\` | Medium heading | \`<h2>Section Title</h2>\` |
| \`<p>\` | Paragraph | \`<p>Some text</p>\` |
| \`<a>\` | Link | \`<a href="url">Click me</a>\` |
| \`<img>\` | Image | \`<img src="pic.jpg">\` |
| \`<div>\` | Container/box | \`<div>Content</div>\` |
| \`<button>\` | Button | \`<button>Click</button>\` |
| \`<ul>\` | Bullet list | \`<ul><li>Item</li></ul>\` |
| \`<ol>\` | Numbered list | \`<ol><li>Item</li></ol>\` |

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

### Breaking It Down

1. **\`<!DOCTYPE html>\`**
   - Tells browser "this is HTML5"
   - Always put this FIRST
   - Only one per page

2. **\`<html>\`**
   - Wraps EVERYTHING
   - Root element of the page
   - Closes at the very end with \`</html>\`

3. **\`<head>\`**
   - Information ABOUT the page (not visible)
   - Contains title, links to CSS, metadata
   - Browser reads this but users don't see it

4. **\`<title>\`**
   - Shows in browser tab
   - Important for SEO
   - Should be descriptive

5. **\`<body>\`**
   - Everything users SEE on the page
   - All your content goes here
   - Headings, paragraphs, images, etc.

## Important Rules

### Rule 1: Most Tags Need Closing Tags

✅ **Correct:**
\`\`\`html
<p>This is a paragraph</p>
\`\`\`

❌ **Wrong:**
\`\`\`html
<p>This is a paragraph
\`\`\`

### Rule 2: Some Tags Are Self-Closing

These tags don't need closing tags:
\`\`\`html
<img src="pic.jpg">    <!-- Image -->
<br>                   <!-- Line break -->
<hr>                   <!-- Horizontal line -->
<input type="text">    <!-- Form input -->
\`\`\`

### Rule 3: Tags Can Be Nested

You can put tags inside other tags:

\`\`\`html
<div>
    <h1>Title</h1>
    <p>Paragraph inside div</p>
</div>
\`\`\`

**Important:** Inner tags must close BEFORE outer tags!

✅ **Correct:**
\`\`\`html
<div><p>Text</p></div>
\`\`\`

❌ **Wrong:**
\`\`\`html
<div><p>Text</div></p>
\`\`\`

### Rule 4: Indentation Makes It Readable

\`\`\`html
<!-- Good (easy to read) -->
<div>
    <h1>Title</h1>
    <p>Paragraph</p>
</div>

<!-- Bad (hard to read) -->
<div><h1>Title</h1><p>Paragraph</p></div>
\`\`\`

Both work the same, but indentation helps YOU read the code!

## Common Beginner Mistakes

### Mistake 1: Forgetting Closing Tag

❌ **Wrong:**
\`\`\`html
<p>This is wrong
\`\`\`

✅ **Correct:**
\`\`\`html
<p>This is right</p>
\`\`\`

### Mistake 2: Wrong Tag Order

❌ **Wrong (tags close in wrong order):**
\`\`\`html
<div><p>Wrong</div></p>
\`\`\`

✅ **Correct:**
\`\`\`html
<div><p>Right</p></div>
\`\`\`

### Mistake 3: Typo in Tag Name

❌ **Wrong:**
\`\`\`html
<pargraph>Wrong</pargraph>
\`\`\`

✅ **Correct:**
\`\`\`html
<p>Right</p>
\`\`\`

### Mistake 4: Forgetting DOCTYPE

❌ **Wrong:**
\`\`\`html
<html>
<head>...</head>
</html>
\`\`\`

✅ **Correct:**
\`\`\`html
<!DOCTYPE html>
<html>
<head>...</head>
</html>
\`\`\`

## What HTML Can't Do

HTML is ONLY for structure. It can't:

- ❌ Make things pretty (that's **CSS**)
- ❌ Make things interactive (that's **JavaScript**)
- ❌ Do math or logic (that's **JavaScript**)
- ❌ Store data (that's **databases**)

HTML just says "this is a heading", "this is a paragraph", etc.

## The Web Trinity

Think of building a website like building a house:

| Technology | Role | What It Does |
|------------|------|-------------|
| **HTML** | Structure | Walls, rooms, foundation |
| **CSS** | Styling | Paint, furniture, decoration |
| **JavaScript** | Behavior | Electricity, plumbing, smart features |

You need all three to make a complete website!

## Next Steps

Now that you understand WHAT HTML is, let's write your very first HTML page! 🚀
                    `
                },
                {
                    id: 'html5-0-2',
                    type: CONTENT_TYPES.LESSON,
                    title: 'Your First HTML Page - Baby Steps',
                    duration: '20 min',
                    content: `
# Your First HTML Page - Let's Do This Together!

## Step 1: The Basic Structure

Every HTML page starts with this skeleton. Don't worry about understanding every line yet - you'll learn each part!

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

**Pro Tip:** You'll type this so many times it'll become automatic. Many code editors have shortcuts to generate this!

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

**Important Rule:** Use \`<h1>\` for your main title. Only ONE \`<h1>\` per page!

Why? Because:
- Search engines use \`<h1>\` to understand your page topic
- Screen readers use it to navigate
- It's the most important heading

## Step 3: Add Paragraphs

Paragraphs use \`<p>\` tag:

\`\`\`html
<p>This is a paragraph of text.</p>
<p>This is another paragraph.</p>
<p>You can have as many paragraphs as you want!</p>
\`\`\`

**Tip:** Each \`<p>\` automatically adds space above and below. The browser does this for you!

## Step 4: Add a Link

Links use \`<a>\` tag with \`href\` attribute:

\`\`\`html
<a href="https://zerocode.ac.id">Visit ZeroCode</a>
\`\`\`

Breaking it down:
- **\`<a>\`** = anchor (link) tag
- **\`href\`** = where the link goes (the URL)
- **Text between tags** = what you click on

You can link to:
- External websites: \`<a href="https://google.com">Google</a>\`
- Other pages: \`<a href="about.html">About</a>\`
- Email: \`<a href="mailto:hello@example.com">Email me</a>\`

## Step 5: Add an Image

Images use \`<img>\` tag:

\`\`\`html
<img src="logo.png" alt="Logo">
\`\`\`

Breaking it down:
- **\`src\`** = image file path (where the image is)
- **\`alt\`** = description (for screen readers and if image fails)

**Important:** Always add \`alt\` text! It helps:
- Blind users (screen readers read it)
- SEO (search engines understand your images)
- Users with slow internet (shows if image fails to load)

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

**Note:** \`<li>\` means "list item". Every item goes in an \`<li>\` tag!

## Complete Example

Here's a complete "About Me" page:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>About Me</title>
</head>
<body>
    <h1>John Doe</h1>
    <p>Welcome to my website!</p>

    <h2>About Me</h2>
    <p>I'm a web developer learning HTML.</p>

    <h2>My Hobbies</h2>
    <ul>
        <li>Coding</li>
        <li>Gaming</li>
        <li>Reading</li>
    </ul>

    <h2>Contact</h2>
    <p>Email: <a href="mailto:john@example.com">john@example.com</a></p>
    <p>Website: <a href="https://zerocode.ac.id">ZeroCode</a></p>
</body>
</html>
\`\`\`

## Your Mission

Create a simple "About Me" page with:
1. ✅ Proper HTML structure (DOCTYPE, html, head, body)
2. ✅ A heading with your name (\`<h1>\`)
3. ✅ A paragraph about yourself (\`<p>\`)
4. ✅ A list of your hobbies (\`<ul>\` or \`<ol>\`)
5. ✅ A link to ZeroCode (\`<a>\`)

Don't worry about making it pretty yet - that's CSS! Just focus on the structure.

## Debugging Tips

If something doesn't work:

1. **Check for typos** - \`<p>\` not \`<P>\` or \`<par>\`
2. **Check closing tags** - Every \`<tag>\` needs \`</tag>\`
3. **Check nesting** - Inner tags close before outer tags
4. **Use browser DevTools** - Right-click → Inspect to see errors
5. **Validate your HTML** - Use https://validator.w3.org/

Remember: Even professional developers make mistakes! The key is knowing how to find and fix them. 🔍
                    `,
                    tasks: [
                        {
                            id: 1,
                            description: 'Write <!DOCTYPE html> at the very top of the file',
                            completed: false,
                            regex: /<!DOCTYPE\s+html>/i
                        },
                        {
                            id: 2,
                            description: 'Create <html> tag that wraps everything',
                            completed: false,
                            regex: /<html>[\s\S]*<\/html>/i
                        },
                        {
                            id: 3,
                            description: 'Add <head> section with <title>Your Name</title>',
                            completed: false,
                            regex: /<head>[\s\S]*<title>[\s\S]*<\/title>[\s\S]*<\/head>/i
                        },
                        {
                            id: 4,
                            description: 'Add <body> section with <h1>Your Name</h1>',
                            completed: false,
                            regex: /<body>[\s\S]*<h1>[\s\S]*<\/h1>[\s\S]*<\/body>/i
                        },
                        {
                            id: 5,
                            description: 'Add <p>about yourself</p> inside body (minimum 20 characters)',
                            completed: false,
                            regex: /<body>[\s\S]*<p>[\s\S]{20,}<\/p>[\s\S]*<\/body>/i
                        },
                        {
                            id: 6,
                            description: 'Add <ul> or <ol> with at least 3 <li> items for hobbies',
                            completed: false,
                            regex: /<(ul|ol)>[\s\S]*<li>[\s\S]*<li>[\s\S]*<li>[\s\S]*<\/(ul|ol)>/i
                        },
                        {
                            id: 7,
                            description: 'Add <a href="https://zerocode.ac.id">ZeroCode</a> link',
                            completed: false,
                            regex: /<a\s+href=["']https:\/\/zerocode\.ac\.id["'][^>]*>[\s\S]*ZeroCode[\s\S]*<\/a>/i
                        }
                    ],
                    files: [
                        {
                            name: 'index.html',
                            language: 'html',
                            content: `<!-- Your First HTML Page! -->
<!-- Follow the instructions on the left -->

`
                        },
                        {
                            name: 'style.css',
                            language: 'css',
                            content: `body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: white;
    line-height: 1.6;
}

h1 {
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    font-size: 2.5em;
    margin-bottom: 20px;
}

p {
    font-size: 1.1em;
    margin: 15px 0;
}

ul, ol {
    margin: 20px 0;
    padding-left: 30px;
}

li {
    margin: 10px 0;
}

a {
    color: #FFD700;
    text-decoration: none;
    font-weight: bold;
}

a:hover {
    text-decoration: underline;
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
                    id: 'html5-0-3',
                    type: CONTENT_TYPES.INFORMATIONAL,
                    title: 'Understanding HTML Attributes',
                    duration: '12 min read',
                    content: `
# HTML Attributes - Extra Information for Tags

## What Are Attributes?

Attributes give **extra information** to tags. They go inside the opening tag:

\`\`\`html
<tag attribute="value">Content</tag>
     ↑
  attribute
\`\`\`

Think of attributes like **adjectives** - they describe or modify the tag!

## Attribute Syntax

\`\`\`html
<a href="https://google.com">Google</a>
   ↑    ↑                    ↑
name  equals              value
\`\`\`

**Rules:**
- Attribute name comes first
- Equals sign in the middle
- Value in quotes (single or double)
- Separate multiple attributes with spaces

## Common Attributes

### 1. href (for links)

Tells where the link goes:

\`\`\`html
<a href="https://zerocode.ac.id">ZeroCode</a>
<a href="about.html">About Page</a>
<a href="#section">Jump to section</a>
<a href="mailto:hello@example.com">Email me</a>
\`\`\`

### 2. src (for images)

Tells where the image file is:

\`\`\`html
<img src="photo.jpg">
<img src="images/logo.png">
<img src="https://example.com/pic.jpg">
\`\`\`

### 3. alt (for images)

Description of image (VERY important!):

\`\`\`html
<img src="cat.jpg" alt="A cute orange cat">
\`\`\`

**Why important?**
- Screen readers read it to blind users
- Shows if image fails to load
- Helps Google understand your images
- Improves SEO

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

### 8. width & height (for images)

Specifies image dimensions:

\`\`\`html
<img src="photo.jpg" width="300" height="200">
\`\`\`

## Multiple Attributes

You can use multiple attributes on one tag:

\`\`\`html
<img src="photo.jpg" alt="My photo" width="300" height="200">
<a href="page.html" class="button" id="main-link" title="Go to page">Click me</a>
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
<div id="header" class="main">Content</div>
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
6. **Use double quotes** (more common): \`href="page.html"\` instead of \`href='page.html'\`

Now you're an attribute expert! 🎯
                    `
                },
                {
                    id: 'html5-0-quiz',
                    type: CONTENT_TYPES.QUIZ,
                    title: 'Absolute Beginner Quiz',
                    duration: '8 min',
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
                            explanation: '<h1> is the largest heading. Headings go from <h1> (biggest) to <h6> (smallest). Use only ONE <h1> per page!'
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
                        },
                        {
                            id: 'q6',
                            question: 'Why is the alt attribute important for images?',
                            options: ['It makes images load faster', 'It helps screen readers and shows if image fails', 'It changes the image color', 'It\'s not important'],
                            correctIndex: 1,
                            explanation: 'alt text is crucial for accessibility (screen readers) and SEO. Always include it!'
                        },
                        {
                            id: 'q7',
                            question: 'Which tag is self-closing (doesn\'t need a closing tag)?',
                            options: ['<p>', '<div>', '<img>', '<span>'],
                            correctIndex: 2,
                            explanation: '<img> is self-closing. Other self-closing tags: <br>, <hr>, <input>'
                        },
                        {
                            id: 'q8',
                            question: 'What goes inside the <head> tag?',
                            options: ['All visible content', 'Metadata like title and links to CSS', 'Images and paragraphs', 'Navigation menu'],
                            correctIndex: 1,
                            explanation: '<head> contains metadata (info about the page). <body> contains visible content.'
                        }
                    ]
                }
            ]
        }
    ]
};
