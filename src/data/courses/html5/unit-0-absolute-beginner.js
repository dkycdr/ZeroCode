import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit0AbsoluteBeginner = {
    id: 'html5-unit-0',
    title: 'Absolute Beginner - Start from Zero',
    description: 'Never coded before? Perfect! We explain EVERYTHING step-by-step from the very beginning.',
    items: [
        {
            id: 'html5-0-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'What is HTML? (Complete Beginner Guide)',
            duration: '10 min read',
            content: `
# What is HTML? - Explained Like You're 5 Years Old

## The Simplest Explanation

Imagine you're writing a letter to a friend. You write:
- A title at the top
- Some paragraphs
- Maybe a list of things
- A picture
- A link to something

**HTML is just a way to tell the computer:** "This is a title", "This is a paragraph", "This is a picture".

That's literally it! HTML is just **labeling** different parts of your content.

## Real World Example

**What you want to show on a website:**

My First Website

Welcome to my page!

This is my first website.

**How you write it in HTML:**

<h1>My First Website</h1>
<p>Welcome to my page!</p>
<p>This is my first website.</p>

See? You just wrap text in **tags** like <h1> and <p> to label what they are!

## What Are Tags?

Tags are like **labels** or **containers**. They have three parts:

<p>This is a paragraph</p>
 ↑              ↑
opening      closing
 tag           tag

- **Opening tag**: <p> (starts the label)
- **Content**: The actual text
- **Closing tag**: </p> (ends the label)

Notice the closing tag has a **forward slash** / before the tag name!

## The Most Common Tags (You'll Use These A LOT!)

| Tag | What It Does | Example |
|-----|--------------|---------|
| <h1> | Biggest heading | <h1>Title</h1> |
| <h2> | Medium heading | <h2>Subtitle</h2> |
| <p> | Paragraph of text | <p>Some text</p> |
| <a> | Link to another page | <a href="url">Click me</a> |
| <img> | Image/picture | <img src="pic.jpg"> |
| <div> | Generic container | <div>Content here</div> |
| <button> | Clickable button | <button>Click</button> |
| <ul> | Bullet list | <ul><li>Item</li></ul> |
| <ol> | Numbered list | <ol><li>Item</li></ol> |
| <li> | List item | <li>Item</li> |

## Semantic HTML - Using the RIGHT Tags

**What is Semantic HTML?**

Semantic HTML means using tags that **describe the meaning** of content, not just how it looks.

### ❌ Bad (Using <div> for everything):

<div>My Website</div>
<div>Welcome to my page</div>
<div>
    <div>Home</div>
    <div>About</div>
    <div>Contact</div>
</div>

The browser doesn't know what these divs mean. Is it a header? Navigation? Content?

### ✅ Good (Using semantic tags):

<header>
    <h1>My Website</h1>
</header>
<main>
    <p>Welcome to my page</p>
</main>
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</nav>

Now the browser (and screen readers) understand the structure!

## Common Semantic Tags

| Tag | Meaning | Use For |
|-----|---------|---------|
| <header> | Top of page | Logo, title, navigation |
| <nav> | Navigation | Links to other pages |
| <main> | Main content | Primary page content |
| <article> | Article/post | Blog post, news article |
| <section> | Section | Grouped content |
| <aside> | Sidebar | Related info, ads |
| <footer> | Bottom of page | Copyright, links |

**Why Semantic HTML Matters:**
- ✅ Screen readers understand structure (accessibility)
- ✅ Search engines understand content (SEO)
- ✅ Other developers understand your code
- ✅ Easier to style with CSS
- ✅ Better for mobile devices

## Your First HTML Page - The Basic Structure

Every HTML page has the same basic structure:

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

Let's break it down line by line:

1. **<!DOCTYPE html>** - Tells the browser "this is HTML5" (the newest version)
2. **<html>** - Wraps everything (the root container)
3. **<head>** - Information about the page (not visible to users)
4. **<title>** - Shows in the browser tab
5. **<body>** - Everything users see on the page
6. **<h1>** - Your main heading
7. **<p>** - Your paragraph

## Important Rules to Remember

### Rule 1: Most Tags Need Closing Tags
- ✅ <p>Text</p> (correct)
- ❌ <p>Text (wrong - missing closing tag!)

### Rule 2: Some Tags Are Self-Closing
These tags don't need a closing tag:
- <img src="pic.jpg"> (image)
- <br> (line break)
- <hr> (horizontal line)

### Rule 3: Tags Can Be Nested (Inside Each Other)

<div>
    <h1>Title</h1>
    <p>Paragraph inside div</p>
</div>

### Rule 4: Indentation Makes It Readable

<!-- Good (easy to read) -->
<div>
    <p>Text</p>
</div>

<!-- Bad (hard to read) -->
<div><p>Text</p></div>

Both work the same, but the first is easier to read!

## Common Beginner Mistakes

### ❌ Mistake 1: Forgetting Closing Tag

<p>This is wrong

✅ **Fix:**

<p>This is right</p>

### ❌ Mistake 2: Wrong Tag Order (Tags Must Close in Reverse Order)

<div><p>Wrong</div></p>

✅ **Fix:**

<div><p>Right</p></div>

### ❌ Mistake 3: Typo in Tag Name

<pargraph>Wrong</pargraph>

✅ **Fix:**

<p>Right</p>

### ❌ Mistake 4: Forgetting Quotes in Attributes

<a href=page.html>Wrong</a>

✅ **Fix:**

<a href="page.html">Right</a>

## What HTML Can't Do

HTML is ONLY for structure and content. It can't:
- ❌ Make things pretty (that's **CSS**)
- ❌ Make things interactive (that's **JavaScript**)
- ❌ Do math or logic (that's **JavaScript**)

HTML just says "this is a heading", "this is a paragraph", etc.

## The Web Trinity

Think of building a website like building a house:

| Technology | Role | What It Does |
|------------|------|-------------|
| **HTML** | Structure | The walls, rooms, and foundation |
| **CSS** | Styling | Paint, furniture, and decoration |
| **JavaScript** | Behavior | Electricity, plumbing, and smart features |

You need all three to make a complete website!

## Quick Summary

- **HTML** = Labels for content
- **Tags** = Labels that wrap content
- **Attributes** = Extra info for tags
- **Structure** = Every page has head and body
- **Semantic** = Use tags that describe meaning
- **Rules** = Close tags, nest properly, use quotes

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

## The Step-by-Step Approach

We're going to build your first HTML page **one tiny piece at a time**. Don't try to write everything at once - follow each step carefully!

## Step 1: The DOCTYPE Declaration

Every HTML file starts with this magic line:

<!DOCTYPE html>

**What it does:** Tells the browser "Hey, this is HTML5!"

**Why it matters:** Without it, browsers might get confused about which version of HTML you're using.

**Common mistake:** Forgetting this line or misspelling it.

## Step 2: The <html> Root Element

After DOCTYPE, wrap everything in <html> tags:

<!DOCTYPE html>
<html>
    <!-- Everything goes here -->
</html>

**What it does:** <html> is the container for your entire page.

**Important:** Notice the indentation - it makes code readable!

## Step 3: The <head> Section

Inside <html>, add <head> for page information:

<!DOCTYPE html>
<html>
    <head>
        <!-- Page info goes here -->
    </head>
</html>

**What goes in <head>:**
- <title> - Browser tab title
- <meta> - Character encoding, viewport
- <link> - CSS files
- <script> - JavaScript files

**What does NOT go in <head>:**
- Content users see (that goes in <body>)

## Step 4: The <title> Tag

Inside <head>, add a title:

<!DOCTYPE html>
<html>
    <head>
        <title>My First Website</title>
    </head>
</html>

**What it does:** Shows in the browser tab.

**Example:** When you open Google, the tab says "Google" - that's the <title>!

## Step 5: The <body> Section

After </head>, add <body> for visible content:

<!DOCTYPE html>
<html>
    <head>
        <title>My First Website</title>
    </head>
    <body>
        <!-- Visible content goes here -->
    </body>
</html>

**What goes in <body>:**
- Headings (<h1>, <h2>, etc.)
- Paragraphs (<p>)
- Images (<img>)
- Links (<a>)
- Lists (<ul>, <ol>)
- Everything users see!

## Step 6: Add Your First Heading

Inside <body>, add an <h1> heading:

<body>
    <h1>Welcome to My Website</h1>
</body>

**Rules for <h1>:**
- Use only ONE <h1> per page (it's your main title)
- Make it descriptive
- Always close it with </h1>

## Step 7: Add a Paragraph

After <h1>, add a <p> paragraph:

<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page. I'm learning to code!</p>
</body>

**Rules for <p>:**
- Each paragraph is separate
- Browser adds space above and below automatically
- Always close with </p>

## Step 8: Add More Paragraphs

You can add multiple paragraphs:

<body>
    <h1>Welcome to My Website</h1>
    <p>This is my first HTML page.</p>
    <p>I'm learning to code!</p>
    <p>HTML is fun!</p>
</body>

**Tip:** Each <p> is separate - don't nest them!

## Step 9: Create a List

Add a list of items using <ul> (unordered) or <ol> (ordered):

<body>
    <h1>My Hobbies</h1>
    <ul>
        <li>Reading</li>
        <li>Coding</li>
        <li>Gaming</li>
    </ul>
</body>

**<ul> vs <ol>:**
- <ul> = Bullet points (unordered)
- <ol> = Numbers (ordered)

**Important:** Each item must be in <li> tags!

## Step 10: Add a Link

Add a link using <a> tag:

<body>
    <h1>My Website</h1>
    <p>Visit <a href="https://zerocode.ac.id">ZeroCode</a></p>
</body>

**Breaking it down:**
- <a> = anchor tag (creates link)
- href = attribute (where to go)
- "https://zerocode.ac.id" = the URL
- ZeroCode = clickable text

## Your Mission: Build Your First Page!

Create a simple page with:
1. ✅ <!DOCTYPE html> at the top
2. ✅ <html> wrapping everything
3. ✅ <head> with <title>
4. ✅ <body> with content
5. ✅ <h1> heading with your name
6. ✅ <p> paragraph about yourself (at least 20 characters)
7. ✅ <ul> or <ol> with at least 3 hobbies
8. ✅ <a> link to ZeroCode website

## Tips for Success

1. **Type it out** - Don't copy/paste. Typing helps you learn!
2. **Use proper indentation** - Makes code readable
3. **Close every tag** - Except self-closing ones like <img>
4. **Use quotes** - Always put quotes around attribute values
5. **Test it** - Open your HTML file in a browser to see it work!

## Common Mistakes to Avoid

❌ Forgetting <!DOCTYPE html>
❌ Forgetting closing tags like </h1> or </p>
❌ Wrong tag order (tags must close in reverse)
❌ Typos in tag names
❌ Missing quotes around attributes

Now let's code! 🚀
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Add <!DOCTYPE html> at the very top of the file',
                    completed: false,
                    hint: 'DOCTYPE must be at the very beginning, before any other code. It tells the browser this is HTML5.',
                    regex: /^\s*<!DOCTYPE\s+html>/im
                },
                {
                    id: 2,
                    description: 'Create <html> opening tag after DOCTYPE',
                    completed: false,
                    hint: 'After <!DOCTYPE html>, add <html> on a new line. This wraps your entire page.',
                    regex: /<!DOCTYPE\s+html>\s*\n\s*<html>/im
                },
                {
                    id: 3,
                    description: 'Create <head> section inside <html>',
                    completed: false,
                    hint: 'Inside <html>, add <head>...</head>. The head contains page information like the title.',
                    regex: /<html>\s*\n\s*<head>/im
                },
                {
                    id: 4,
                    description: 'Add <title> inside <head> with page title',
                    completed: false,
                    hint: 'Inside <head>, add <title>Your Title</title>. This shows in the browser tab.',
                    regex: /<head>\s*[\s\S]*<title>\s*[^<]{1,}\s*<\/title>/i
                },
                {
                    id: 5,
                    description: 'Close </head> tag and create <body> section',
                    completed: false,
                    hint: 'After </head>, add <body>. This is where all visible content goes.',
                    regex: /<\/head>\s*\n\s*<body>/im
                },
                {
                    id: 6,
                    description: 'Add <h1> heading inside <body> with your name',
                    completed: false,
                    hint: 'Inside <body>, add <h1>Your Name</h1>. Remember to close the tag with </h1>!',
                    regex: /<body>\s*[\s\S]*<h1>\s*[^<]{1,}\s*<\/h1>/i
                },
                {
                    id: 7,
                    description: 'Add <p> paragraph about yourself (minimum 20 characters)',
                    completed: false,
                    hint: 'After <h1>, add <p>Your text here</p>. Make sure it\'s at least 20 characters long and properly closed.',
                    regex: /<p>\s*[\s\S]{20,}\s*<\/p>/i
                },
                {
                    id: 8,
                    description: 'Add <ul> or <ol> list with at least 3 <li> items',
                    completed: false,
                    hint: 'Create a list with <ul> (bullets) or <ol> (numbers). Each item must be in <li>...</li> tags. Need at least 3 items!',
                    regex: /<(ul|ol)>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>\s*[\s\S]*<li>\s*[^<]{1,}\s*<\/li>[\s\S]*<\/(ul|ol)>/i
                },
                {
                    id: 9,
                    description: 'Add <a> link to ZeroCode website with href attribute',
                    completed: false,
                    hint: 'Add <a href="https://zerocode.ac.id">ZeroCode</a>. Make sure href has quotes and the tag is closed!',
                    regex: /<a\s+href\s*=\s*["\']https?:\/\/[^"\']*zerocode[^"\']*["\']\s*>\s*[^<]{1,}\s*<\/a>/i
                },
                {
                    id: 10,
                    description: 'Close </body> and </html> tags to complete the page',
                    completed: false,
                    hint: 'At the end of your file, add </body> then </html>. This closes all your tags properly!',
                    regex: /<\/body>\s*\n\s*<\/html>\s*$/im
                }
            ],
            files: [
                {
                    name: 'index.html',
                    language: 'html',
                    content: `<!-- 
    YOUR TASK: Build your first HTML page step by step!
    
    Follow these steps:
    1. Add <!DOCTYPE html> at the very top
    2. Create <html> opening tag
    3. Create <head> section with <title>
    4. Create <body> section
    5. Add <h1> heading with your name
    6. Add <p> paragraph about yourself (20+ characters)
    7. Add <ul> or <ol> list with 3+ hobbies
    8. Add <a> link to ZeroCode
    9. Close </body> and </html>
    
    TIPS:
    - Type it out, don't copy/paste
    - Use proper indentation (2 spaces)
    - Close every tag!
    - Use quotes around attributes
-->
`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* CSS is ready - focus on HTML first! */
body { 
    font-family: 'Segoe UI', sans-serif; 
    max-width: 800px; 
    margin: 0 auto; 
    padding: 40px 20px; 
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    min-height: 100vh; 
}
h1 { color: white; }
p { color: #eee; line-height: 1.6; }
ul, ol { color: #eee; }
a { color: #ffd700; text-decoration: none; }
a:hover { text-decoration: underline; }
`
                }
            ]
        },
        {
            id: 'html5-0-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'HTML Attributes & Semantic Tags - Give Tags Extra Powers',
            duration: '12 min read',
            content: `
# HTML Attributes - Give Tags Extra Information

## What Are Attributes?

Attributes give **extra information** to tags. They go inside the opening tag:

<tag attribute="value">Content</tag>
     ↑
  attribute

Think of attributes as **settings** or **properties** for tags.

## The Most Important Attributes

### 1. href (for links)

Tells where the link goes:

<a href="https://zerocode.ac.id">ZeroCode</a>
<a href="about.html">About Page</a>
<a href="#section">Jump to section</a>

**Types of links:**
- **Absolute URL**: https://example.com (full web address)
- **Relative URL**: about.html (file in same folder)
- **Anchor**: #section (jump to section on same page)

### 2. src (for images)

Tells where the image file is:

<img src="photo.jpg">
<img src="images/logo.png">
<img src="https://example.com/pic.jpg">

### 3. alt (for images) - VERY IMPORTANT!

Description of image:

<img src="cat.jpg" alt="A cute orange cat">

**Why alt is critical:**
- Screen readers read it to blind users
- Shows if image fails to load
- Helps Google understand your images
- Required for accessibility!

**Good alt text:**
- ✅ alt="A person typing on a laptop"
- ✅ alt="ZeroCode logo"
- ❌ alt="image"
- ❌ alt="pic123"

### 4. id (unique identifier)

Gives a unique name to ONE element:

<div id="header">Header content</div>
<p id="intro">Introduction paragraph</p>

**Rules:**
- Each id must be unique (only ONE element can have that id)
- Use for JavaScript and CSS targeting
- Use lowercase and hyphens: id="my-section"

### 5. class (group identifier)

Groups multiple elements:

<p class="highlight">This is highlighted</p>
<p class="highlight">This is also highlighted</p>
<div class="card">Card 1</div>
<div class="card">Card 2</div>

**Rules:**
- Multiple elements can have the same class
- One element can have multiple classes: class="card highlight"
- Use for CSS styling

### 6. style (inline CSS)

Add CSS directly (not recommended, but good to know):

<p style="color: red; font-size: 20px;">Red text</p>

**Better way:** Use external CSS file!

### 7. title (tooltip)

Shows tooltip on hover:

<p title="This is a tooltip">Hover over me!</p>
<a href="#" title="Click to learn more">Link</a>

## Multiple Attributes

You can use multiple attributes on one tag:

<img src="photo.jpg" alt="My photo" width="300" height="200">
<a href="page.html" class="button" id="main-link">Click me</a>

**Rules:**
- Separate with spaces
- Order doesn't matter
- Always use quotes around values

## Attribute Syntax Rules

✅ **Correct:**

<a href="page.html">Link</a>
<img src="pic.jpg" alt="Picture">

❌ **Wrong (no quotes):**

<a href=page.html>Link</a>

❌ **Wrong (no value):**

<a href>Link</a>

❌ **Wrong (space in value without quotes):**

<img alt=My Picture>

## Boolean Attributes

Some attributes don't need values:

<input type="text" disabled>
<input type="checkbox" checked>
<script src="app.js" defer></script>

Just writing the attribute name means "true"!

## id vs class - When to Use?

| Use id when... | Use class when... |
|-------------------|----------------------|
| Only ONE element needs it | Multiple elements need same style |
| JavaScript needs to find it | CSS styling |
| Creating anchor links | Grouping similar elements |

**Example:**

<!-- id: unique header -->
<header id="main-header">Site Header</header>

<!-- class: multiple cards -->
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>

## Semantic HTML - Using the RIGHT Tags

**What is Semantic HTML?**

Semantic HTML means using tags that **describe the meaning** of content, not just how it looks.

### ❌ Bad (Using <div> for everything):

<div>My Website</div>
<div>Welcome to my page</div>
<div>
    <div>Home</div>
    <div>About</div>
    <div>Contact</div>
</div>

The browser doesn't know what these divs mean. Is it a header? Navigation? Content?

### ✅ Good (Using semantic tags):

<header>
    <h1>My Website</h1>
</header>
<main>
    <p>Welcome to my page</p>
</main>
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</nav>

Now the browser (and screen readers) understand the structure!

## Common Semantic Tags

| Tag | Meaning | Use For |
|-----|---------|---------|
| <header> | Top of page | Logo, title, navigation |
| <nav> | Navigation | Links to other pages |
| <main> | Main content | Primary page content |
| <article> | Article/post | Blog post, news article |
| <section> | Section | Grouped content |
| <aside> | Sidebar | Related info, ads |
| <footer> | Bottom of page | Copyright, links |

**Why Semantic HTML Matters:**
- ✅ Screen readers understand structure (accessibility)
- ✅ Search engines understand content (SEO)
- ✅ Other developers understand your code
- ✅ Easier to style with CSS
- ✅ Better for mobile devices

## Real-World Example: Blog Post

### ❌ Bad (all divs):

<div>
    <div>My Blog</div>
    <div>
        <div>Home</div>
        <div>Posts</div>
    </div>
</div>
<div>
    <div>My First Post</div>
    <div>Posted on Jan 1, 2024</div>
    <div>This is my first blog post...</div>
</div>
<div>
    <div>Copyright 2024</div>
</div>

### ✅ Good (semantic tags):

<header>
    <h1>My Blog</h1>
    <nav>
        <a href="/">Home</a>
        <a href="/posts">Posts</a>
    </nav>
</header>
<main>
    <article>
        <h2>My First Post</h2>
        <time>Posted on Jan 1, 2024</time>
        <p>This is my first blog post...</p>
    </article>
</main>
<footer>
    <p>Copyright 2024</p>
</footer>

Much clearer!

## Pro Tips

1. **Always use lowercase** for attributes: href, not HREF
2. **Always use quotes** around values: href="page.html"
3. **Use meaningful names** for id and class: id="user-profile", not id="x1"
4. **Don't overuse id** - use class for styling
5. **Always add alt to images** - it's important for accessibility!
6. **Use descriptive alt text** - alt="A person typing on a laptop" not alt="image"
7. **Use semantic tags** - they make your code more meaningful
8. **Avoid <div> for everything** - use semantic tags when possible

Now you're an attribute and semantic HTML expert! 🎯
            `
        },
        {
            id: 'html5-0-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Absolute Beginner Quiz - Test Your Knowledge',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'What does HTML stand for?',
                    options: [
                        'Hyper Text Markup Language',
                        'High Tech Modern Language',
                        'Home Tool Markup Language',
                        'Hyperlinks and Text Markup Language'
                    ],
                    correctIndex: 0,
                    explanation: 'HTML = HyperText Markup Language. It is the standard language for creating web pages. "Markup" means you\'re marking up content with tags.'
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
                    options: [
                        'Nothing wrong',
                        'Missing closing tag </p>',
                        'Wrong tag name',
                        'Missing quotes'
                    ],
                    correctIndex: 1,
                    explanation: 'Most HTML tags need a closing tag. Correct: <p>Hello World</p>. The closing tag has a forward slash (/) before the tag name.'
                },
                {
                    id: 'q4',
                    question: 'Which attribute tells where a link goes?',
                    options: ['src', 'href', 'link', 'url'],
                    correctIndex: 1,
                    explanation: 'href attribute specifies the URL: <a href="page.html">Link</a>. href = "hypertext reference"'
                },
                {
                    id: 'q5',
                    question: 'What is the difference between id and class?',
                    options: [
                        'No difference',
                        'id is unique, class can be reused',
                        'class is unique, id can be reused',
                        'id is for CSS, class is for JavaScript'
                    ],
                    correctIndex: 1,
                    explanation: 'id must be unique (one per page), class can be used on multiple elements. Use id for unique elements, class for grouping similar elements.'
                },
                {
                    id: 'q6',
                    question: 'Which tag should you use for the main heading of a page?',
                    options: ['<h2>', '<h1>', '<heading>', '<title>'],
                    correctIndex: 1,
                    explanation: '<h1> is for the main heading. <title> goes in <head> and shows in the browser tab. Use only ONE <h1> per page!'
                },
                {
                    id: 'q7',
                    question: 'What does the alt attribute do?',
                    options: [
                        'Makes images bigger',
                        'Describes the image for screen readers and if image fails to load',
                        'Changes image color',
                        'Adds a border to the image'
                    ],
                    correctIndex: 1,
                    explanation: 'alt = alternative text. It describes the image for accessibility and shows if the image fails to load. Always add meaningful alt text to images!'
                },
                {
                    id: 'q8',
                    question: 'What is semantic HTML?',
                    options: [
                        'HTML that looks pretty',
                        'HTML that uses tags describing meaning, not just appearance',
                        'HTML that works on mobile',
                        'HTML that uses CSS'
                    ],
                    correctIndex: 1,
                    explanation: 'Semantic HTML uses tags like <header>, <nav>, <main>, <footer> that describe meaning. This helps screen readers, search engines, and other developers understand your code.'
                },
                {
                    id: 'q9',
                    question: 'Which tag should you use for navigation links?',
                    options: ['<div>', '<nav>', '<links>', '<menu>'],
                    correctIndex: 1,
                    explanation: '<nav> is the semantic tag for navigation. It tells screen readers and search engines that these are navigation links. Better than using <div>!'
                },
                {
                    id: 'q10',
                    question: 'What goes in the <head> section?',
                    options: [
                        'All visible content',
                        'Page information like <title>, <meta>, and links to CSS',
                        'Only the page heading',
                        'Navigation links'
                    ],
                    correctIndex: 1,
                    explanation: '<head> contains metadata (information about the page) like <title>, <meta>, and links to CSS files. Content users see goes in <body>.'
                }
            ]
        }
    ]
};
