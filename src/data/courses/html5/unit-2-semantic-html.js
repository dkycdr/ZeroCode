import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit2SemanticHtml = {
    id: 'html5-unit-2',
    title: 'Semantic HTML - Write Meaningful Code',
    description: 'Learn semantic HTML elements that give meaning to your content. Improve accessibility, SEO, and code readability.',
    items: [
        {
            id: 'html5-2-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'What is Semantic HTML? - Code That Means Something',
            duration: '12 min read',
            content: `
# What is Semantic HTML? - Code That Means Something

## The Problem with Non-Semantic HTML

Many beginners write HTML like this:

\`\`\`html
<div>
    <div>
        <div>Welcome to my site</div>
        <div>
            <div><a href="/">Home</a></div>
            <div><a href="/about">About</a></div>
        </div>
    </div>
    <div>
        <div>My Blog Post</div>
        <div>Posted on January 1, 2024</div>
        <div>This is my first blog post...</div>
    </div>
    <div>
        <div>Copyright 2024</div>
    </div>
</div>
\`\`\`

**Problems:**
- ❌ No meaning - just boxes
- ❌ Hard to read
- ❌ Bad for accessibility
- ❌ Bad for SEO
- ❌ Hard to style with CSS

## The Solution: Semantic HTML

Semantic HTML uses tags that describe their content:

\`\`\`html
<body>
    <header>
        <h1>Welcome to my site</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>
    <main>
        <article>
            <h2>My Blog Post</h2>
            <time datetime="2024-01-01">Posted on January 1, 2024</time>
            <p>This is my first blog post...</p>
        </article>
    </main>
    <footer>
        <p>Copyright 2024</p>
    </footer>
</body>
\`\`\`

**Benefits:**
- ✅ Clear meaning
- ✅ Easy to read
- ✅ Great for accessibility
- ✅ Better SEO
- ✅ Easier to style

## Visual: Page Structure Comparison

### ❌ Non-Semantic (Confusing)
\`\`\`
┌─────────────────────────────────┐
│ <div>                           │
│  <div>                          │
│   <div>Welcome</div>            │ ← What is this?
│   <div>                         │
│    <div><a>Home</a></div>       │ ← Is this navigation?
│   </div>                        │
│  </div>                         │
│  <div>                          │
│   <div>Blog Post</div>          │ ← Main content?
│  </div>                         │
│  <div>Copyright</div>           │ ← Footer?
│ </div>                          │
└─────────────────────────────────┘
\`\`\`

### ✅ Semantic (Clear)
\`\`\`
┌─────────────────────────────────┐
│ <header>                        │ ← Top of page
│  <h1>Welcome</h1>              │
│  <nav>                          │ ← Navigation
│   <a>Home</a>                  │
│  </nav>                         │
│ </header>                       │
├─────────────────────────────────┤
│ <main>                          │ ← Main content
│  <article>                      │ ← Blog post
│   <h2>Blog Post</h2>           │
│   <p>Content...</p>            │
│  </article>                     │
│ </main>                         │
├─────────────────────────────────┤
│ <footer>                        │ ← Bottom of page
│  <p>Copyright</p>              │
│ </footer>                       │
└─────────────────────────────────┘
\`\`\`

## Why Semantic HTML Matters

### 1. Accessibility

Screen readers understand semantic HTML:

\`\`\`html
<!-- Screen reader knows this is a navigation -->
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
</nav>

<!-- Screen reader knows this is the main content -->
<main>
    <article>...</article>
</main>
\`\`\`

### 2. SEO (Search Engine Optimization)

Google understands semantic HTML better:

\`\`\`html
<!-- Google knows this is the main heading -->
<h1>My Website</h1>

<!-- Google knows this is the main content -->
<main>
    <article>...</article>
</main>

<!-- Google knows this is a footer -->
<footer>...</footer>
\`\`\`

### 3. Readability

Your code is easier to understand:

\`\`\`html
<!-- Clear structure -->
<header>...</header>
<nav>...</nav>
<main>...</main>
<aside>...</aside>
<footer>...</footer>

<!-- vs confusing divs -->
<div>...</div>
<div>...</div>
<div>...</div>
<div>...</div>
<div>...</div>
\`\`\`

### 4. Maintainability

Easier to update and debug:

\`\`\`html
<!-- Easy to find and update -->
<header>
    <!-- Update header here -->
</header>

<!-- vs searching through divs -->
<div id="header">
    <!-- Is this the header? -->
</div>
\`\`\`

## The Main Semantic Elements

| Element | Purpose | Example |
|---------|---------|---------|
| \`<header>\` | Top of page/section | Logo, title, navigation |
| \`<nav>\` | Navigation links | Menu, breadcrumbs |
| \`<main>\` | Main content | Article, post, page content |
| \`<article>\` | Self-contained content | Blog post, news article |
| \`<section>\` | Thematic grouping | Chapter, topic section |
| \`<aside>\` | Sidebar content | Related links, ads |
| \`<footer>\` | Bottom of page/section | Copyright, links |
| \`<figure>\` | Image with caption | Photo with description |
| \`<figcaption>\` | Caption for figure | Image description |
| \`<time>\` | Date/time | Publication date |

## Typical Page Structure

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>
<body>
    <!-- Top of page -->
    <header>
        <h1>My Website</h1>
        <p>Welcome to my site</p>
    </header>
    
    <!-- Navigation -->
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
    </nav>
    
    <!-- Main content -->
    <main>
        <article>
            <h2>My First Post</h2>
            <time datetime="2024-01-01">January 1, 2024</time>
            <p>This is my first blog post...</p>
        </article>
    </main>
    
    <!-- Sidebar -->
    <aside>
        <h3>Related Posts</h3>
        <ul>
            <li><a href="/post2">Post 2</a></li>
            <li><a href="/post3">Post 3</a></li>
        </ul>
    </aside>
    
    <!-- Bottom of page -->
    <footer>
        <p>Copyright 2024</p>
    </footer>
</body>
</html>
\`\`\`

## When to Use Semantic Elements

### Use \`<header>\` for:
- Page header with logo and title
- Section header
- Article header

### Use \`<nav>\` for:
- Main navigation menu
- Breadcrumb navigation
- Pagination links

### Use \`<main>\` for:
- Primary page content
- Only ONE per page
- Not for sidebars or footers

### Use \`<article>\` for:
- Blog posts
- News articles
- Forum posts
- Self-contained content

### Use \`<section>\` for:
- Chapters in a book
- Tabs in a tabbed interface
- Thematic grouping of content

### Use \`<aside>\` for:
- Sidebars
- Related links
- Advertisements
- Pull quotes

### Use \`<footer>\` for:
- Page footer
- Section footer
- Copyright info
- Footer links

## Semantic vs Non-Semantic

### ❌ Non-Semantic (Bad)
\`\`\`html
<div class="header">
    <div class="title">My Blog</div>
    <div class="nav">
        <div class="nav-item"><a href="/">Home</a></div>
    </div>
</div>
\`\`\`

### ✅ Semantic (Good)
\`\`\`html
<header>
    <h1>My Blog</h1>
    <nav>
        <a href="/">Home</a>
    </nav>
</header>
\`\`\`

## Best Practices

1. **Use semantic elements** - Not just \`<div>\` everywhere
2. **One \`<main>\` per page** - Only one primary content area
3. **Nest properly** - \`<header>\` inside \`<article>\` is valid
4. **Use headings** - \`<h1>\` through \`<h6>\` in order
5. **Combine with CSS** - Semantic HTML + CSS = powerful
6. **Accessibility first** - Think about screen readers
7. **SEO matters** - Search engines love semantic HTML

Now you're writing meaningful code! 📝
            `
        },
        {
            id: 'html5-2-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Building a Semantic Page Structure',
            duration: '20 min',
            content: `
# Building a Semantic Page Structure - Step by Step

## The Complete Semantic Layout

Here's a real-world example of a complete semantic page:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My Blog</title>
</head>
<body>
    <!-- Header: Top of page -->
    <header>
        <h1>My Awesome Blog</h1>
        <p>Welcome to my thoughts and ideas</p>
    </header>
    
    <!-- Navigation: Main menu -->
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    
    <!-- Main: Primary content -->
    <main>
        <!-- Article: Blog post -->
        <article>
            <h2>My First Blog Post</h2>
            <time datetime="2024-01-15">January 15, 2024</time>
            <p>This is my first blog post...</p>
        </article>
        
        <!-- Another article -->
        <article>
            <h2>Learning HTML</h2>
            <time datetime="2024-01-10">January 10, 2024</time>
            <p>HTML is the foundation of web development...</p>
        </article>
    </main>
    
    <!-- Aside: Sidebar -->
    <aside>
        <h3>Popular Posts</h3>
        <ul>
            <li><a href="/post1">Post 1</a></li>
            <li><a href="/post2">Post 2</a></li>
        </ul>
    </aside>
    
    <!-- Footer: Bottom of page -->
    <footer>
        <p>Copyright 2024 My Blog</p>
    </footer>
</body>
</html>
\`\`\`

## Visual: Semantic Page Layout

\`\`\`
┌─────────────────────────────────────────┐
│ <header>                                │ ← Top of page
│  <h1>My Awesome Blog</h1>              │   Logo, title, tagline
│  <p>Welcome to my thoughts...</p>      │
│ </header>                               │
├─────────────────────────────────────────┤
│ <nav>                                   │ ← Navigation
│  <a href="/">Home</a>                  │   Main menu
│  <a href="/about">About</a>            │   (min 3 links)
│  <a href="/blog">Blog</a>              │
│ </nav>                                  │
├─────────────────────────────────────────┤
│ <main>                                  │ ← Main content
│  <article>                              │   Blog posts
│   <h2>My First Post</h2>               │   (self-contained)
│   <time>January 15, 2024</time>        │
│   <p>Content...</p>                    │
│  </article>                             │
│                                         │
│  <article>                              │
│   <h2>Learning HTML</h2>               │
│   <p>Content...</p>                    │
│  </article>                             │
│ </main>                                 │
├─────────────────────────────────────────┤
│ <aside>                                 │ ← Sidebar
│  <h3>Popular Posts</h3>                │   Related content
│  <ul>                                   │
│   <li><a href="/post1">Post 1</a></li> │
│  </ul>                                  │
│ </aside>                                │
├─────────────────────────────────────────┤
│ <footer>                                │ ← Bottom of page
│  <p>Copyright 2024</p>                 │   Footer info
│ </footer>                               │
└─────────────────────────────────────────┘
\`\`\`

## Understanding Each Section

### Header Section

The <header> contains introductory content:

\`\`\`html
<header>
    <h1>My Website</h1>
    <p>Welcome to my site</p>
</header>
\`\`\`

Can appear:
- At the top of the page
- At the top of an article
- At the top of a section

**Why it matters:** Helps screen readers and search engines understand what your page is about.

### Navigation Section

The <nav> contains navigation links:

\`\`\`html
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
    </ul>
</nav>
\`\`\`

Use for:
- Main navigation menu
- Breadcrumb navigation
- Pagination

**Why it matters:** Screen readers can skip to navigation or skip over it. Search engines understand your site structure.

### Main Content

The <main> contains the primary content:

\`\`\`html
<main>
    <article>
        <h2>Article Title</h2>
        <p>Article content...</p>
    </article>
</main>
\`\`\`

Rules:
- Only ONE <main> per page
- Not for sidebars or footers
- Contains the unique content

**Why it matters:** Search engines know where your main content is. Screen readers can jump directly to it.

### Article Section

The <article> contains self-contained content:

\`\`\`html
<article>
    <h2>Blog Post Title</h2>
    <time datetime="2024-01-15">January 15, 2024</time>
    <p>Content here...</p>
</article>
\`\`\`

Use for:
- Blog posts
- News articles
- Forum posts
- Comments

**Why it matters:** Makes it clear what content is independent and can be syndicated or shared.

### Section Element

The <section> groups related content:

\`\`\`html
<section>
    <h2>Chapter 1</h2>
    <p>Chapter content...</p>
</section>

<section>
    <h2>Chapter 2</h2>
    <p>Chapter content...</p>
</section>
\`\`\`

Use for:
- Chapters in a book
- Sections of a page
- Thematic grouping

### Aside Section

The <aside> contains related but separate content:

\`\`\`html
<aside>
    <h3>Related Links</h3>
    <ul>
        <li><a href="/link1">Link 1</a></li>
        <li><a href="/link2">Link 2</a></li>
    </ul>
</aside>
\`\`\`

Use for:
- Sidebars
- Related content
- Advertisements
- Pull quotes

### Footer Section

The <footer> contains closing content:

\`\`\`html
<footer>
    <p>Copyright 2024</p>
    <ul>
        <li><a href="/privacy">Privacy</a></li>
        <li><a href="/terms">Terms</a></li>
    </ul>
</footer>
\`\`\`

Use for:
- Copyright info
- Footer links
- Contact info
- Site map

## Real-World Examples

### Blog Homepage

\`\`\`html
<body>
    <header>
        <h1>Tech Blog</h1>
    </header>
    
    <nav>
        <a href="/">Home</a>
        <a href="/categories">Categories</a>
        <a href="/about">About</a>
    </nav>
    
    <main>
        <article>
            <h2>Latest Post</h2>
            <time datetime="2024-01-20">Jan 20</time>
            <p>Post content...</p>
        </article>
    </main>
    
    <aside>
        <h3>Categories</h3>
        <ul>
            <li><a href="/web">Web Dev</a></li>
            <li><a href="/mobile">Mobile</a></li>
        </ul>
    </aside>
    
    <footer>
        <p>Copyright 2024</p>
    </footer>
</body>
\`\`\`

### News Article

\`\`\`html
<body>
    <header>
        <h1>News Site</h1>
    </header>
    
    <main>
        <article>
            <h1>Breaking News</h1>
            <time datetime="2024-01-20T10:30">Jan 20, 10:30 AM</time>
            <p>Article content...</p>
        </article>
    </main>
    
    <footer>
        <p>Copyright 2024</p>
    </footer>
</body>
\`\`\`

## Best Practices

1. **Use semantic elements** - Not just divs
2. **One main per page** - Only one primary content area
3. **Proper nesting** - Header inside article is valid
4. **Meaningful structure** - Reflects content hierarchy
5. **Combine with CSS** - Semantic HTML + CSS = powerful
6. **Test with screen readers** - Ensure accessibility
7. **Validate your HTML** - Use W3C validator

Now you're building semantic pages! 🏗️
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create a <header> element with an <h1> heading inside (flexible spacing and formatting)',
                    completed: false,
                    hint: 'The <header> tag marks the top of your page. It helps screen readers and search engines understand your page structure. Put your main title <h1> inside it. Example: <header><h1>My Site</h1></header>',
                    regex: /<header\s*>[\s\S]*<h1\s*>[\s\S]+<\/h1\s*>[\s\S]*<\/header\s*>/i
                },
                {
                    id: 2,
                    description: 'Create a <nav> element with at least 3 <a> links inside (any order, flexible spacing)',
                    completed: false,
                    hint: 'The <nav> tag tells screen readers "this is navigation". You need at least 3 links. Example: <nav><a href="/">Home</a><a href="/about">About</a><a href="/blog">Blog</a></nav>',
                    regex: /<nav\s*>[\s\S]*<a\s+href\s*=\s*["\']([^"\']*)["\'][^>]*>[\s\S]*<\/a\s*>[\s\S]*<a\s+href\s*=\s*["\']([^"\']*)["\'][^>]*>[\s\S]*<\/a\s*>[\s\S]*<a\s+href\s*=\s*["\']([^"\']*)["\'][^>]*>[\s\S]*<\/a\s*>[\s\S]*<\/nav\s*>/i
                },
                {
                    id: 3,
                    description: 'Create a <main> element with an <article> inside containing a heading and paragraph',
                    completed: false,
                    hint: 'The <main> tag marks your primary content. Search engines look here for your main content. Put <article> inside with a heading and paragraph. Example: <main><article><h2>Title</h2><p>Content</p></article></main>',
                    regex: /<main\s*>[\s\S]*<article\s*>[\s\S]*<h[1-6]\s*>[\s\S]+<\/h[1-6]\s*>[\s\S]*<p\s*>[\s\S]+<\/p\s*>[\s\S]*<\/article\s*>[\s\S]*<\/main\s*>/i
                },
                {
                    id: 4,
                    description: 'Create a <footer> element with copyright text inside',
                    completed: false,
                    hint: 'The <footer> tag marks the bottom of your page. It helps organize footer content like copyright info. Example: <footer><p>Copyright 2024</p></footer>',
                    regex: /<footer\s*>[\s\S]+<\/footer\s*>/i
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
    <title>Semantic HTML Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Task 1: Create a <header> with <h1> inside -->
    <!-- This goes at the top of your page -->
    <!-- Example: <header><h1>My Website</h1></header> -->
    
    
    <!-- Task 2: Create a <nav> with at least 3 <a> links -->
    <!-- Navigation helps users find pages -->
    <!-- Example: <nav><a href="/">Home</a><a href="/about">About</a><a href="/blog">Blog</a></nav> -->
    
    
    <!-- Task 3: Create a <main> with <article> inside -->
    <!-- Main contains your primary content -->
    <!-- Article contains self-contained content like blog posts -->
    <!-- Example: <main><article><h2>Title</h2><p>Content</p></article></main> -->
    
    
    <!-- Task 4: Create a <footer> with copyright text -->
    <!-- Footer goes at the bottom of your page -->
    <!-- Example: <footer><p>Copyright 2024</p></footer> -->
    
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* Consistent styling for all lessons */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
}

header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 40px 20px;
    text-align: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

header h1 {
    margin: 0;
    font-size: 2.5em;
}

nav {
    background: #333;
    padding: 15px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 20px;
    font-weight: 500;
    transition: color 0.3s;
}

nav a:hover {
    color: #667eea;
}

main {
    max-width: 800px;
    margin: 40px auto;
    padding: 0 20px;
}

article {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    margin-bottom: 30px;
}

article h2 {
    color: #333;
    margin-top: 0;
}

article p {
    color: #666;
    line-height: 1.6;
}

footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 30px 20px;
    margin-top: 60px;
}

footer p {
    margin: 0;
}`
                }
            ]
        },
        {
            id: 'html5-2-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'More Semantic Elements - Text and Content',
            duration: '10 min read',
            content: `
# More Semantic Elements - Text and Content

## Text-Level Semantic Elements

### Strong vs Bold

<strong> means important:

<p>This is <strong>very important</strong> information.</p>

Screen readers emphasize it. Use for actual importance.

### Emphasis vs Italic

<em> means emphasized:

<p>This is <em>emphasized</em> text.</p>

Screen readers change tone. Use for actual emphasis.

### Mark - Highlighted Text

<mark> highlights text:

<p>This is <mark>highlighted</mark> text.</p>

Use for:
- Search results
- Important passages
- Highlighted text

### Small - Smaller Text

<small> for fine print:

<p>Regular text <small>smaller text</small></p>

Use for:
- Copyright notices
- Disclaimers
- Fine print

### Code - Programming Code

<code> for code snippets:

<p>Use the <code>console.log()</code> function.</p>

### Pre - Preformatted Text

<pre> preserves formatting:

<pre>
function hello() {
    console.log("Hello");
}
</pre>

### Blockquote - Long Quotes

<blockquote> for quotes:

<blockquote>
    <p>"The only way to do great work is to love what you do."</p>
    <footer>- Steve Jobs</footer>
</blockquote>

### Time - Date and Time

<time> for dates:

<p>Posted on <time datetime="2024-01-15">January 15, 2024</time></p>

Use for:
- Publication dates
- Event dates
- Timestamps

### Address - Contact Info

<address> for contact:

<address>
    Email: contact@example.com<br>
    Phone: 555-1234
</address>

## Grouping Elements

### Figure and Figcaption

Group image with caption:

<figure>
    <img src="photo.jpg" alt="Sunset">
    <figcaption>Beautiful sunset at the beach</figcaption>
</figure>

### Details and Summary

Collapsible content:

<details>
    <summary>Click to expand</summary>
    <p>Hidden content here</p>
</details>

## Semantic vs Non-Semantic Comparison

### ❌ Non-Semantic

<div class="important">Important text</div>
<div class="quote">Quote here</div>
<div class="date">January 15, 2024</div>

### ✅ Semantic

<strong>Important text</strong>
<blockquote>Quote here</blockquote>
<time datetime="2024-01-15">January 15, 2024</time>

## When to Use Each Element

| Element | Use When | Example |
|---------|----------|---------|
| <strong> | Text is important | <strong>Warning:</strong> |
| <em> | Text is emphasized | <em>Very</em> important |
| <mark> | Text is highlighted | Search <mark>result</mark> |
| <small> | Fine print | <small>Copyright 2024</small> |
| <code> | Showing code | Use <code>console.log()</code> |
| <pre> | Code block | <pre>function() {}</pre> |
| <blockquote> | Long quote | <blockquote>Quote...</blockquote> |
| <time> | Date/time | <time datetime="2024-01-15">Jan 15</time> |
| <address> | Contact info | <address>Email: ...</address> |
| <figure> | Image + caption | <figure><img><figcaption> |

## Real-World Examples

### Blog Post with Semantic Elements

<article>
    <h1>Learning HTML</h1>
    <time datetime="2024-01-15">January 15, 2024</time>
    
    <p>HTML is <strong>very important</strong> for web development.</p>
    
    <p>As Steve Jobs said:</p>
    <blockquote>
        <p>"The only way to do great work is to love what you do."</p>
    </blockquote>
    
    <p>Here's a code example:</p>
    <pre><code>
&lt;h1&gt;Hello World&lt;/h1&gt;
    </code></pre>
    
    <figure>
        <img src="html.jpg" alt="HTML logo">
        <figcaption>The HTML5 logo</figcaption>
    </figure>
</article>

### Product Page

<article>
    <h1>Amazing Product</h1>
    
    <p>Price: <strong>$99.99</strong></p>
    
    <p>This product is <em>incredible</em>!</p>
    
    <details>
        <summary>More Details</summary>
        <p>Full specifications here...</p>
    </details>
    
    <address>
        Contact: support@example.com
    </address>
</article>

## Accessibility Benefits

Semantic elements help:
- Screen readers understand content
- Search engines index better
- Keyboard navigation works
- Mobile devices render correctly
- Future-proofing your code

## Best Practices

1. **Use semantic elements** - Not just styling
2. **Combine with CSS** - Semantic HTML + CSS = powerful
3. **Test with screen readers** - Ensure accessibility
4. **Use datetime attribute** - For <time> elements
5. **Provide alt text** - For images in <figure>
6. **Nest properly** - Follow HTML structure rules
7. **Validate your HTML** - Use W3C validator

Now you're a semantic HTML expert! 🎓
            `
        },
        {
            id: 'html5-2-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Semantic HTML Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'How many <main> elements should a page have?',
                    options: [
                        'As many as needed',
                        'Exactly one',
                        'At least two',
                        'None - use <section> instead'
                    ],
                    correctIndex: 1,
                    explanation: 'Each page should have exactly ONE <main> element for the primary content.'
                },
                {
                    id: 'q2',
                    question: 'What is the difference between <strong> and <b>?',
                    options: [
                        'No difference',
                        '<strong> indicates importance, <b> is just styling',
                        '<b> indicates importance, <strong> is just styling',
                        '<strong> is for headings, <b> is for paragraphs'
                    ],
                    correctIndex: 1,
                    explanation: '<strong> is semantic (indicates importance), <b> is just visual (bold). Use <strong> for meaning.'
                },
                {
                    id: 'q3',
                    question: 'Which element should contain the main navigation?',
                    options: ['<header>', '<nav>', '<menu>', '<section>'],
                    correctIndex: 1,
                    explanation: '<nav> is the semantic element for navigation links.'
                },
                {
                    id: 'q4',
                    question: 'What does <time datetime="2024-01-15"> do?',
                    options: [
                        'Displays a clock',
                        'Marks a date/time in machine-readable format',
                        'Creates a timer',
                        'Nothing - it is just for display'
                    ],
                    correctIndex: 1,
                    explanation: '<time> with datetime attribute provides machine-readable date/time for search engines and screen readers.'
                },
                {
                    id: 'q5',
                    question: 'Which element groups an image with its caption?',
                    options: ['<img>', '<picture>', '<figure>', '<section>'],
                    correctIndex: 2,
                    explanation: '<figure> groups an image with <figcaption> for a complete semantic unit.'
                },
                {
                    id: 'q6',
                    question: 'What is the purpose of semantic HTML?',
                    options: [
                        'To make code look prettier',
                        'To give meaning to content for accessibility and SEO',
                        'To reduce file size',
                        'To make styling easier'
                    ],
                    correctIndex: 1,
                    explanation: 'Semantic HTML gives meaning to content, improving accessibility, SEO, and code readability.'
                }
            ]
        }
    ]
};
