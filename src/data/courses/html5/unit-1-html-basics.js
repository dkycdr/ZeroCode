import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit1HtmlBasics = {
    id: 'html5-unit-1',
    title: 'HTML Basics - Building Blocks of Web Pages',
    description: 'Master the fundamental HTML elements: headings, paragraphs, lists, links, and images. Learn how to structure content properly.',
    items: [
        {
            id: 'html5-1-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Headings and Text Hierarchy - Organizing Your Content',
            duration: '12 min read',
            content: `
# Headings and Text Hierarchy - The Foundation of Structure

## Why Headings Matter

Headings do THREE important things:

1. **Organize content** - Help readers understand structure
2. **Improve SEO** - Search engines use headings to understand your page
3. **Accessibility** - Screen readers use headings to navigate

Think of headings like a book's table of contents!

## Visual: Heading Hierarchy Structure

\`\`\`
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
\`\`\`

## The Six Heading Levels

HTML has 6 heading levels, from \`<h1>\` (most important) to \`<h6>\` (least important):

\`\`\`html
<h1>Main Title - Use Only ONE Per Page</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>
\`\`\`

## The Golden Rule: One H1 Per Page

**IMPORTANT:** Every page should have exactly ONE \`<h1>\` tag!

✅ **Correct:**
\`\`\`html
<h1>Welcome to My Blog</h1>
<h2>First Post</h2>
<h2>Second Post</h2>
\`\`\`

❌ **Wrong (multiple h1s):**
\`\`\`html
<h1>Welcome to My Blog</h1>
<h1>First Post</h1>
<h1>Second Post</h1>
\`\`\`

## Proper Heading Hierarchy

Headings should go in order. Don't skip levels!

✅ **Correct (proper order):**
\`\`\`html
<h1>Main Title</h1>
<h2>Section 1</h2>
<h3>Subsection 1.1</h3>
<h3>Subsection 1.2</h3>
<h2>Section 2</h2>
<h3>Subsection 2.1</h3>
\`\`\`

❌ **Wrong (skipping levels):**
\`\`\`html
<h1>Main Title</h1>
<h3>Subsection</h3>  <!-- Skipped h2! -->
<h5>Sub-subsection</h5>  <!-- Skipped h3 and h4! -->
\`\`\`

## Real-World Example: Blog Post Structure

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My First Blog Post</title>
</head>
<body>
    <h1>Learning HTML is Awesome</h1>
    
    <h2>Introduction</h2>
    <p>HTML is the foundation of web development...</p>
    
    <h2>Getting Started</h2>
    <h3>What You Need</h3>
    <p>You only need a text editor...</p>
    
    <h3>Your First Tag</h3>
    <p>The simplest tag is...</p>
    
    <h2>Common Mistakes</h2>
    <h3>Forgetting Closing Tags</h3>
    <p>Always remember to close your tags...</p>
    
    <h3>Wrong Hierarchy</h3>
    <p>Keep your headings in order...</p>
    
    <h2>Conclusion</h2>
    <p>Now you're ready to build websites!</p>
</body>
</html>
\`\`\`

## Paragraphs: The Workhorse Tag

The \`<p>\` tag is for paragraphs of text:

\`\`\`html
<p>This is a paragraph. It can contain multiple sentences.</p>
<p>This is another paragraph. Browsers automatically add space between paragraphs.</p>
\`\`\`

**Important:** Browsers ignore extra spaces and line breaks in HTML!

❌ **This doesn't work as expected:**
\`\`\`html
<p>This is     a paragraph
with     line breaks
and     extra spaces</p>
\`\`\`

✅ **Use <br> for line breaks:**
\`\`\`html
<p>Line 1<br>Line 2<br>Line 3</p>
\`\`\`

## Other Text Tags

### Strong (Bold) - Important Text
\`\`\`html
<p>This is <strong>very important</strong> information.</p>
\`\`\`

### Emphasis (Italic) - Emphasized Text
\`\`\`html
<p>This is <em>emphasized</em> text.</p>
\`\`\`

### Mark (Highlight) - Highlighted Text
\`\`\`html
<p>This is <mark>highlighted</mark> text.</p>
\`\`\`

### Small - Smaller Text
\`\`\`html
<p>Regular text <small>smaller text</small></p>
\`\`\`

### Subscript and Superscript
\`\`\`html
<p>H<sub>2</sub>O (water)</p>
<p>E=mc<sup>2</sup></p>
\`\`\`

## Combining Text Tags

You can combine multiple tags:

\`\`\`html
<p>This is <strong><em>very important</em></strong> information.</p>
<p>This is <mark><strong>highlighted and bold</strong></mark>.</p>
\`\`\`

## Horizontal Rule - Visual Separator

Use \`<hr>\` to create a horizontal line:

\`\`\`html
<h2>Section 1</h2>
<p>Content here...</p>

<hr>

<h2>Section 2</h2>
<p>Content here...</p>
\`\`\`

## Blockquote - Quoted Text

For longer quotes:

\`\`\`html
<blockquote>
    <p>"The only way to do great work is to love what you do." - Steve Jobs</p>
</blockquote>
\`\`\`

## Code and Preformatted Text

### Inline Code
\`\`\`html
<p>Use the <code>console.log()</code> function to debug.</p>
\`\`\`

### Code Block
\`\`\`html
<pre><code>
function hello() {
    console.log("Hello World");
}
</code></pre>
\`\`\`

## Best Practices for Text

1. **Use semantic tags** - \`<strong>\` instead of \`<b>\`, \`<em>\` instead of \`<i>\`
2. **Keep paragraphs focused** - One idea per paragraph
3. **Use headings for structure** - Not for styling
4. **Don't skip heading levels** - Go h1 → h2 → h3, not h1 → h3
5. **One h1 per page** - Always!

Now you understand text hierarchy! 📚
            `
        },
        {
            id: 'html5-1-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Working with Lists - Organize Information',
            duration: '20 min',
            content: `
# Working with Lists - Organize Information Effectively

## Why Lists Matter

Lists help organize information in a clear, scannable way. They're used everywhere:
- Navigation menus
- To-do lists
- Product features
- Instructions
- Outlines

## Three Types of Lists

### 1. Unordered Lists (Bullets)

Use \`<ul>\` for lists where order doesn't matter:

\`\`\`html
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ul>
\`\`\`

**Renders as:**
- Apples
- Bananas
- Oranges

### 2. Ordered Lists (Numbers)

Use \`<ol>\` for lists where order matters:

\`\`\`html
<ol>
    <li>Wake up</li>
    <li>Brush teeth</li>
    <li>Eat breakfast</li>
    <li>Go to work</li>
</ol>
\`\`\`

**Renders as:**
1. Wake up
2. Brush teeth
3. Eat breakfast
4. Go to work

### 3. Description Lists

Use \`<dl>\` for term-definition pairs:

\`\`\`html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - structure of web pages</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - styling of web pages</dd>
    
    <dt>JavaScript</dt>
    <dd>Programming language for interactivity</dd>
</dl>
\`\`\`

## Nested Lists (Lists Inside Lists)

You can put lists inside lists:

\`\`\`html
<ul>
    <li>Fruits
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Carrots</li>
            <li>Broccoli</li>
        </ul>
    </li>
</ul>
\`\`\`

## Real-World Examples

### Recipe Instructions
\`\`\`html
<h1>Chocolate Chip Cookies</h1>

<h2>Ingredients</h2>
<ul>
    <li>2 cups flour</li>
    <li>1 cup butter</li>
    <li>1 cup sugar</li>
    <li>2 eggs</li>
    <li>2 cups chocolate chips</li>
</ul>

<h2>Instructions</h2>
<ol>
    <li>Preheat oven to 350°F</li>
    <li>Mix butter and sugar</li>
    <li>Add eggs and flour</li>
    <li>Fold in chocolate chips</li>
    <li>Bake for 12 minutes</li>
</ol>
\`\`\`

### Navigation Menu
\`\`\`html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
\`\`\`

## List Attributes

### Start Attribute (for ordered lists)

Start numbering from a different number:

\`\`\`html
<ol start="5">
    <li>Item 5</li>
    <li>Item 6</li>
    <li>Item 7</li>
</ol>
\`\`\`

### Type Attribute (for ordered lists)

Change the numbering style:

\`\`\`html
<ol type="A">  <!-- A, B, C... -->
    <li>First</li>
    <li>Second</li>
</ol>

<ol type="i">  <!-- i, ii, iii... -->
    <li>First</li>
    <li>Second</li>
</ol>

<ol type="1">  <!-- 1, 2, 3... (default) -->
    <li>First</li>
    <li>Second</li>
</ol>
\`\`\`

## Best Practices

1. **Use semantic lists** - Don't use \`<div>\` when you should use \`<ul>\`
2. **Keep list items simple** - One idea per item
3. **Use proper nesting** - Indent nested lists
4. **Don't overuse lists** - Use for actual lists, not layout
5. **Combine with links** - Lists are perfect for navigation

Now you're a list master! 📋
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create an unordered list opening tag: <ul>',
                    completed: false,
                    hint: 'The <ul> tag starts an unordered (bulleted) list. Type <ul> on its own line. Don\'t forget to close it later with </ul>',
                    regex: /^\s*<ul\s*>/im
                },
                {
                    id: 2,
                    description: 'Add 3 list items inside <ul> with <li>text</li>',
                    completed: false,
                    hint: 'Each list item needs three parts: <li> opening tag, text, </li> closing tag. You need exactly 3 items. Example: <li>Apple</li>',
                    regex: /<ul\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<\/ul\s*>/i
                },
                {
                    id: 3,
                    description: 'Close the unordered list with </ul>',
                    completed: false,
                    hint: 'Close the unordered list with </ul>. Every opening tag needs a closing tag with a forward slash.',
                    regex: /<\/ul\s*>/im
                },
                {
                    id: 4,
                    description: 'Create an ordered list opening tag: <ol>',
                    completed: false,
                    hint: 'The <ol> tag starts an ordered (numbered) list. Type <ol> on its own line. Don\'t forget to close it later with </ol>',
                    regex: /^\s*<ol\s*>/im
                },
                {
                    id: 5,
                    description: 'Add 3 list items inside <ol> with <li>text</li>',
                    completed: false,
                    hint: 'Same as unordered list - each item needs <li>, text, and </li>. You need exactly 3 items for the ordered list.',
                    regex: /<ol\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<li\s*>[\s\S]*<\/li\s*>[\s\S]*<\/ol\s*>/i
                },
                {
                    id: 6,
                    description: 'Close the ordered list with </ol>',
                    completed: false,
                    hint: 'Close the ordered list with </ol>. Make sure all your tags are properly closed!',
                    regex: /<\/ol\s*>/im
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
    <title>HTML Lists Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>📝 HTML Lists Practice</h1>
    
    <!-- Task 1-3: Create an unordered list with 3 fruits -->
    <h2>My Favorite Fruits</h2>
    <!-- Write your <ul> with 3 <li> items here -->
    
    
    <!-- Task 4-6: Create an ordered list with 3 steps -->
    <h2>How to Make Coffee</h2>
    <!-- Write your <ol> with 3 <li> items here -->
    
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* Consistent styling for all lessons */
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

ul, ol {
    background: white;
    padding: 20px 40px;
    border-radius: 8px;
    line-height: 1.8;
    margin: 10px 0 20px 0;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

li {
    margin: 8px 0;
    color: #555;
}

/* Nested list styling */
ul ul, ol ol, ul ol, ol ul {
    margin-top: 10px;
    margin-bottom: 10px;
    background: #f9f9f9;
}`
                }
            ]
        },
        {
            id: 'html5-1-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Links and Navigation - Connecting Your Pages',
            duration: '12 min read',
            content: `
# Links and Navigation - Connecting Your Pages

## The Anchor Tag - Creating Links

The \`<a>\` tag creates links. It's one of the most important tags in HTML!

\`\`\`html
<a href="https://zerocode.ac.id">Visit ZeroCode</a>
\`\`\`

**Breaking it down:**
- \`<a>\` = anchor tag
- \`href\` = hypertext reference (where to go)
- \`"https://zerocode.ac.id"\` = the URL
- \`Visit ZeroCode\` = the clickable text

## Three Types of Links

### 1. External Links (to other websites)

\`\`\`html
<a href="https://google.com">Google</a>
<a href="https://github.com">GitHub</a>
\`\`\`

**Always use full URL with https://**

### 2. Internal Links (to pages on your site)

\`\`\`html
<a href="about.html">About Us</a>
<a href="pages/contact.html">Contact</a>
<a href="../index.html">Home</a>
\`\`\`

**Relative paths:**
- \`about.html\` = same folder
- \`pages/contact.html\` = subfolder
- \`../index.html\` = parent folder

### 3. Anchor Links (to sections on same page)

\`\`\`html
<!-- Navigation -->
<a href="#section1">Go to Section 1</a>
<a href="#section2">Go to Section 2</a>

<!-- Sections -->
<h2 id="section1">Section 1</h2>
<p>Content here...</p>

<h2 id="section2">Section 2</h2>
<p>Content here...</p>
\`\`\`

## Link Attributes

### target Attribute

Control where the link opens:

\`\`\`html
<!-- Open in same tab (default) -->
<a href="page.html">Link</a>

<!-- Open in new tab -->
<a href="page.html" target="_blank">Link</a>

<!-- Open in new window -->
<a href="page.html" target="_blank">Link</a>
\`\`\`

### title Attribute

Show tooltip on hover:

\`\`\`html
<a href="about.html" title="Learn more about us">About</a>
\`\`\`

### rel Attribute

Specify relationship:

\`\`\`html
<!-- External link -->
<a href="https://example.com" rel="external">External Site</a>

<!-- Don't pass referrer info -->
<a href="https://example.com" rel="noopener noreferrer">Safe Link</a>
\`\`\`

## Real-World Navigation Examples

### Simple Navigation Menu

\`\`\`html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>
\`\`\`

### Breadcrumb Navigation

\`\`\`html
<nav>
    <a href="/">Home</a> >
    <a href="/products">Products</a> >
    <a href="/products/electronics">Electronics</a> >
    <span>Laptop</span>
</nav>
\`\`\`

### Footer Links

\`\`\`html
<footer>
    <h3>Quick Links</h3>
    <ul>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
        <li><a href="/sitemap">Sitemap</a></li>
    </ul>
</footer>
\`\`\`

## Link Best Practices

### 1. Descriptive Link Text

❌ **Bad:**
\`\`\`html
<p>Click <a href="about.html">here</a> to learn more.</p>
\`\`\`

✅ **Good:**
\`\`\`html
<p><a href="about.html">Learn more about us</a>.</p>
\`\`\`

### 2. Use Semantic HTML

❌ **Bad:**
\`\`\`html
<div onclick="location.href='page.html'">Click me</div>
\`\`\`

✅ **Good:**
\`\`\`html
<a href="page.html">Click me</a>
\`\`\`

### 3. External Links in New Tab

\`\`\`html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    External Site
</a>
\`\`\`

### 4. Use Absolute URLs for External Links

❌ **Bad:**
\`\`\`html
<a href="example.com">Link</a>
\`\`\`

✅ **Good:**
\`\`\`html
<a href="https://example.com">Link</a>
\`\`\`

## Email Links

Create a link that opens the user's email client:

\`\`\`html
<a href="mailto:contact@example.com">Email us</a>
\`\`\`

With subject and body:

\`\`\`html
<a href="mailto:contact@example.com?subject=Hello&body=I have a question">
    Email us
</a>
\`\`\`

## Phone Links

Create a link that calls a phone number:

\`\`\`html
<a href="tel:+1234567890">Call us</a>
\`\`\`

## Download Links

Link to downloadable files:

\`\`\`html
<a href="files/document.pdf" download>Download PDF</a>
<a href="files/image.jpg" download="my-image.jpg">Download Image</a>
\`\`\`

## Accessibility Tips

1. **Use descriptive text** - Not "click here"
2. **Indicate external links** - Show users when link opens new tab
3. **Use proper colors** - Make links visually distinct
4. **Keyboard accessible** - Links should work with Tab key
5. **Add title attribute** - For additional context

Now you're a linking expert! 🔗
            `
        },
        {
            id: 'html5-1-4',
            type: CONTENT_TYPES.LESSON,
            title: 'Images and Media - Adding Visual Content',
            duration: '18 min',
            content: `
# Images and Media - Adding Visual Content

## The Image Tag

The \`<img>\` tag displays images:

\`\`\`html
<img src="photo.jpg" alt="A beautiful sunset">
\`\`\`

**Key attributes:**
- \`src\` = source (where the image file is)
- \`alt\` = alternative text (description)

## Image Sources

### Local Images (in your project)

\`\`\`html
<!-- Same folder -->
<img src="photo.jpg" alt="Photo">

<!-- In subfolder -->
<img src="images/photo.jpg" alt="Photo">

<!-- Parent folder -->
<img src="../photo.jpg" alt="Photo">
\`\`\`

### External Images (from the internet)

\`\`\`html
<img src="https://example.com/photo.jpg" alt="Photo">
\`\`\`

## The Alt Attribute - CRITICAL!

The \`alt\` attribute is VERY important:

1. **Accessibility** - Screen readers read it to blind users
2. **SEO** - Search engines use it to understand images
3. **Fallback** - Shows if image fails to load
4. **Context** - Helps users understand the image

### Good Alt Text Examples

✅ **Descriptive:**
\`\`\`html
<img src="sunset.jpg" alt="A golden sunset over the ocean with palm trees">
<img src="logo.png" alt="ZeroCode logo">
<img src="chart.png" alt="Sales chart showing 50% growth in Q1">
\`\`\`

❌ **Bad:**
\`\`\`html
<img src="sunset.jpg" alt="image">
<img src="logo.png" alt="logo.png">
<img src="chart.png" alt="">
\`\`\`

## Image Sizing

### Width and Height Attributes

\`\`\`html
<img src="photo.jpg" alt="Photo" width="300" height="200">
\`\`\`

**Why specify size?**
- Prevents layout shift while loading
- Improves page performance
- Maintains aspect ratio

### Responsive Images

\`\`\`html
<img src="photo.jpg" alt="Photo" style="max-width: 100%; height: auto;">
\`\`\`

## Image Formats Comparison

| Format | Best For | File Size | Transparency | Animation | Browser Support |
|--------|----------|-----------|--------------|-----------|-----------------|
| **JPG** | Photos | Small | ❌ No | ❌ No | ✅ All |
| **PNG** | Graphics, logos | Medium | ✅ Yes | ❌ No | ✅ All |
| **GIF** | Simple animations | Medium | ✅ Yes | ✅ Yes | ✅ All |
| **WebP** | Modern web | Smallest | ✅ Yes | ✅ Yes | ⚠️ Modern |
| **SVG** | Icons, logos | Tiny | ✅ Yes | ✅ Yes | ✅ All |

**When to use:**
- 📸 Photo? → **JPG**
- 🎨 Logo/Icon? → **PNG** or **SVG**
- 🎬 Animation? → **GIF** or **WebP**
- 🌐 Modern web? → **WebP**

## Linking Images

Make an image clickable:

\`\`\`html
<a href="page.html">
    <img src="thumbnail.jpg" alt="Click to view">
</a>
\`\`\`

## Figure and Figcaption

Group image with caption:

\`\`\`html
<figure>
    <img src="photo.jpg" alt="A sunset">
    <figcaption>Beautiful sunset at the beach</figcaption>
</figure>
\`\`\`

## Picture Element (Responsive Images)

Show different images for different screen sizes:

\`\`\`html
<picture>
    <source media="(max-width: 600px)" srcset="small.jpg">
    <source media="(max-width: 1200px)" srcset="medium.jpg">
    <img src="large.jpg" alt="Photo">
</picture>
\`\`\`

## Video Element

Embed videos:

\`\`\`html
<video width="400" height="300" controls>
    <source src="video.mp4" type="video/mp4">
    Your browser doesn't support HTML5 video.
</video>
\`\`\`

**Attributes:**
- \`controls\` = show play/pause buttons
- \`autoplay\` = start playing automatically
- \`loop\` = repeat when finished
- \`muted\` = no sound

## Audio Element

Embed audio:

\`\`\`html
<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    Your browser doesn't support HTML5 audio.
</audio>
\`\`\`

## Iframe - Embed External Content

Embed YouTube videos, maps, etc:

\`\`\`html
<!-- YouTube video -->
<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video player">
</iframe>

<!-- Google Map -->
<iframe width="400" height="300"
    src="https://www.google.com/maps/embed?pb=...">
</iframe>
\`\`\`

## Best Practices

1. **Always use alt text** - Required for accessibility
2. **Optimize images** - Compress before uploading
3. **Use correct format** - JPG for photos, PNG for graphics
4. **Specify dimensions** - Prevents layout shift
5. **Use responsive images** - Works on all devices
6. **Lazy load** - Load images only when needed
7. **Provide fallbacks** - For video and audio

## Image Optimization Tips

1. **Compress images** - Use tools like TinyPNG
2. **Use WebP format** - Smaller file sizes
3. **Responsive images** - Different sizes for different devices
4. **Lazy loading** - Load images as user scrolls
5. **CDN** - Serve images from fast servers

Now you can add beautiful visuals to your pages! 🖼️
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Add an <img> tag with src and alt attributes (attributes can be in any order, any quote style)',
                    completed: false,
                    hint: 'Images need two attributes: src (where the image is) and alt (description). Example: <img src="photo.jpg" alt="A sunset"> or <img alt=\'A sunset\' src=\'photo.jpg\'>. You can use single or double quotes and put them in any order.',
                    regex: /<img(?:[^>]*\s+)?(?:src|alt)\s*=\s*["\']([^"\']*)["\'](?:[^>]*\s+)?(?:src|alt)\s*=\s*["\']([^"\']*)["\'](?:[^>]*)>/i
                },
                {
                    id: 2,
                    description: 'Add an <img> tag with width and height attributes (any order, flexible spacing)',
                    completed: false,
                    hint: 'Add width and height attributes to control image size. Example: <img src="photo.jpg" width="300" height="200"> or <img width = "300" height = "200" src="photo.jpg">. You can put them in any order and use flexible spacing.',
                    regex: /<img(?:[^>]*\s+)?(?:width|height)\s*=\s*["\']?\d+["\']?(?:[^>]*\s+)?(?:width|height)\s*=\s*["\']?\d+["\']?(?:[^>]*)>/i
                },
                {
                    id: 3,
                    description: 'Create a <figure> element with <img> and <figcaption> inside',
                    completed: false,
                    hint: '<figure> groups an image with its caption. Put <img> inside, then add <figcaption> with text. Example: <figure><img src="..."><figcaption>Caption</figcaption></figure>',
                    regex: /<figure\s*>[\s\S]*<img[^>]*>[\s\S]*<figcaption\s*>[\s\S]+<\/figcaption\s*>[\s\S]*<\/figure\s*>/i
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
    <title>HTML Images Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🖼️ HTML Images Practice</h1>
    
    <!-- Task 1: Add an image with src and alt -->
    <h2>Task 1: Basic Image</h2>
    <!-- Add an <img> tag with src and alt attributes -->
    
    
    <!-- Task 2: Add an image with width and height -->
    <h2>Task 2: Sized Image</h2>
    <!-- Add an <img> tag with width and height attributes -->
    
    
    <!-- Task 3: Create a figure with image and caption -->
    <h2>Task 3: Figure with Caption</h2>
    <!-- Create a <figure> element with <img> and <figcaption> inside -->
    
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* Consistent styling for all lessons */
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

img {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    display: block;
}

figure {
    background: white;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

figcaption {
    font-style: italic;
    color: #666;
    margin-top: 15px;
    font-size: 0.95em;
}`
                }
            ]
        },
        {
            id: 'html5-1-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'HTML Basics Quiz - Test Your Knowledge',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'How many <h1> tags should you have per page?',
                    options: [
                        'As many as you want',
                        'Exactly one',
                        'At least two',
                        'None - use <h2> instead'
                    ],
                    correctIndex: 1,
                    explanation: 'Every page should have exactly ONE <h1> tag. It represents the main title of the page.'
                },
                {
                    id: 'q2',
                    question: 'What is the correct order for heading hierarchy?',
                    options: [
                        '<h1> → <h3> → <h5> (skip levels)',
                        '<h1> → <h2> → <h3> (sequential)',
                        'Any order is fine',
                        '<h6> → <h4> → <h2> (reverse)'
                    ],
                    correctIndex: 1,
                    explanation: 'Headings should go in sequential order: h1, h2, h3, etc. Don\'t skip levels.'
                },
                {
                    id: 'q3',
                    question: 'Which tag creates a numbered list?',
                    options: ['<ul>', '<ol>', '<li>', '<dl>'],
                    correctIndex: 1,
                    explanation: '<ol> creates an ordered (numbered) list. <ul> creates unordered (bulleted) lists.'
                },
                {
                    id: 'q4',
                    question: 'What does the alt attribute do?',
                    options: [
                        'Makes images bigger',
                        'Describes the image for accessibility and SEO',
                        'Changes image color',
                        'Adds a border to the image'
                    ],
                    correctIndex: 1,
                    explanation: 'The alt attribute provides a text description of the image for screen readers and when images fail to load.'
                },
                {
                    id: 'q5',
                    question: 'How do you create a link to another page?',
                    options: [
                        '<link href="page.html">',
                        '<a href="page.html">Link</a>',
                        '<url>page.html</url>',
                        '<navigate to="page.html">'
                    ],
                    correctIndex: 1,
                    explanation: 'The <a> tag with href attribute creates links. Example: <a href="page.html">Click here</a>'
                },
                {
                    id: 'q6',
                    question: 'What\'s the difference between <ul> and <ol>?',
                    options: [
                        'No difference',
                        '<ul> is bulleted, <ol> is numbered',
                        '<ul> is numbered, <ol> is bulleted',
                        '<ul> is for links, <ol> is for text'
                    ],
                    correctIndex: 1,
                    explanation: '<ul> (unordered) creates bulleted lists. <ol> (ordered) creates numbered lists.'
                },
                {
                    id: 'q7',
                    question: 'How do you open a link in a new tab?',
                    options: [
                        '<a href="page.html" new>',
                        '<a href="page.html" target="_blank">',
                        '<a href="page.html" newtab>',
                        '<a href="page.html" window>'
                    ],
                    correctIndex: 1,
                    explanation: 'Use target="_blank" to open links in a new tab: <a href="page.html" target="_blank">'
                },
                {
                    id: 'q8',
                    question: 'What\'s wrong with this image tag? <img src="photo.jpg">',
                    options: [
                        'Nothing wrong',
                        'Missing alt attribute',
                        'Wrong tag name',
                        'Missing closing tag'
                    ],
                    correctIndex: 1,
                    explanation: 'Images should always have an alt attribute for accessibility: <img src="photo.jpg" alt="Description">'
                }
            ]
        }
    ]
};
