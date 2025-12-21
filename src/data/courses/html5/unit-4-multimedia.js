import { CONTENT_TYPES } from '../../curriculumStructure.js';

export const unit4Multimedia = {
    id: 'html5-unit-4',
    title: 'Multimedia - Video, Audio, and Embedded Content',
    description: 'Master embedding video, audio, and iframes with modern responsive techniques, security best practices, and accessibility standards.',
    items: [
        {
            id: 'html5-4-1',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Video and Audio Elements - Embedding Media',
            duration: '12 min read',
            content: `
# Video and Audio Elements - Embedding Media

## The Video Element

Embed videos natively in HTML5. Modern browsers require specific attributes for features like autoplay to work correctly.

\`\`\`html
<video width="640" height="360" controls poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>
\`\`\`

### Attributes Deep Dive

*   **controls**: Adds play, pause, volume, and fullscreen buttons.
*   **poster**: An image shown while the video downloads or until the user hits play.
*   **loop**: Replays the video automatically when it finishes.
*   **muted**: **CRITICAL** for autoplay. Most modern browsers (Chrome, Safari, Edge) block unmuted autoplay to prevent annoying user experiences.
*   **autoplay**: Starts the video immediately. **Must be paired with \`muted\`** for reliable behavior.

### Autoplay Policy (The "Muted" Rule)

If you want a video to autoplay (like a hero background), you generally **must** mute it:

\`\`\`html
<!-- This works in modern browsers -->
<video autoplay muted loop playsinline>
    <source src="hero-bg.mp4" type="video/mp4">
</video>
\`\`\`
*(Note: \`playsinline\` is recommended for iOS to prevent it from forcing fullscreen.)*

## Iframe - Embed External Content

Iframes are used to embed content from other websites, like YouTube maps or videos.

\`\`\`html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video player"
        width="560" height="315"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        sandbox="allow-scripts allow-same-origin allow-presentation"
        referrerpolicy="strict-origin-when-cross-origin">
</iframe>
\`\`\`

### Security & Performance
*   **sandbox**: Restricts what the embedded content can do (e.g., stop it from running scripts or submitting forms unless explicitly allowed).
*   **referrerpolicy**: Controls how much information is sent to the embedded site about where the request is coming from.
*   **loading="lazy"**: Defers loading off-screen iframes until the user scrolls near them.

### Modern Responsive Iframes (Aspect Ratio)

Forget the old "padding-bottom hack". Use the modern CSS \`aspect-ratio\` property:

\`\`\`css
.video-frame {
    width: 100%;
    aspect-ratio: 16 / 9; /* Automatically calculates height */
    border: none;
}
\`\`\`

\`\`\`html
<iframe class="video-frame" src="..."></iframe>
\`\`\`

## Accessibility (A11y) Check

1.  **Captions**: Always include \`<track>\` for subtitles.
2.  **No Autoplay Audio**: Never autoplay sound without user interaction.
3.  **Keyboard Control**: Ensure standard controls are available.
4.  **Fallback**: Provide text content inside the tag for ancient browsers.

\`\`\`html
<video controls>
    <source src="clip.mp4" type="video/mp4">
    <track kind="subtitles" src="subs_en.vtt" srclang="en" label="English">
    <!-- Fallback Text -->
    Your browser isn't supported. <a href="clip.mp4">Download video</a> instead.
</video>
\`\`\`
            `
        },
        {
            id: 'html5-4-2',
            type: CONTENT_TYPES.LESSON,
            title: 'Creating a Media Gallery',
            duration: '20 min',
            content: `
# Creating a Media Gallery

You will build a robust media player that supports multiple formats, subtitles, and graceful fallbacks.

## Key Concepts

### Nested Sources
Instead of a single \`src\` attribute, we use nested \`<source>\` tags. The browser tries them top-to-bottom and picks the first one it supports.

\`\`\`html
<video controls>
    <source src="movie.webm" type="video/webm"> <!-- Modern/Open -->
    <source src="movie.mp4" type="video/mp4">   <!-- Fallback -->
</video>
\`\`\`

### Track Element (Subtitles)
The \`<track>\` tag provides text tracks for accessibility.

\`\`\`html
<track src="subs.vtt" kind="subtitles" srclang="en" label="English">
\`\`\`

## Your Tasks
Follow the steps to construct the media elements efficiently.
            `,
            tasks: [
                {
                    id: 1,
                    description: 'Create a video container with controls, width="600", and a poster image.',
                    completed: false,
                    // Regex: Lookahead for video start, then check for controls, width, and poster in any order
                    regex: /<video(?=[\s\S]*?\bcontrols\b)(?=[\s\S]*?\bwidth=["']600["'])(?=[\s\S]*?\bposter=["'][^"']*["'])[\s\S]*?>/i
                },
                {
                    id: 2,
                    description: 'Add two <source> tags inside the video: one for MP4 and one for WebM.',
                    completed: false,
                    // Regex: Matches nested source structure
                    regex: /<video[\s\S]*?<source[^>]*src=["'][^"']*\.mp4["'][^>]*>[\s\S]*?<source[^>]*src=["'][^"']*\.webm["'][^>]*>[\s\S]*?<\/video>/i
                },
                {
                    id: 3,
                    description: 'Add a <track> element for subtitles inside the video container.',
                    completed: false,
                    regex: /<video[\s\S]*?<track[^>]*kind=["']?subtitles["']?[^>]*>[\s\S]*?<\/video>/i
                },
                {
                    id: 4,
                    description: 'Create an <audio> element with controls and a text fallback message (e.g., "Not supported").',
                    completed: false,
                    // Regex: Checks for audio, controls, source (optional but likely), and text content before closing tag
                    regex: /<audio(?=[\s\S]*?\bcontrols\b)[\s\S]*?>[\s\S]*?(not supported|browser does not support|download)[\s\S]*?<\/audio>/i
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
    <title>Ultimate Media Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🎬 Ultimate Media Gallery</h1>
    
    <div class="gallery-section">
        <h2>Featured Video</h2>
        <!-- Task 1, 2 & 3: Create video with controls, width="600", poster, sources (mp4/webm), and subtitles track -->
        
    </div>

    <div class="gallery-section">
        <h2>Audio Experience</h2>
        <!-- Task 4: Create audio with controls and fallback text -->
        
    </div>
</body>
</html>`
                },
                {
                    name: 'style.css',
                    language: 'css',
                    content: `/* Modern Dark Theme */
body {
    font-family: 'Inter', sans-serif;
    background-color: #1a1a1a;
    color: #f0f0f0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.gallery-section {
    background: #2d2d2d;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    margin-bottom: 2rem;
    width: 100%;
    max-width: 800px;
    text-align: center;
}

video {
    max-width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

audio {
    width: 80%;
    margin-top: 1rem;
}
`
                }
            ]
        },
        {
            id: 'html5-4-3',
            type: CONTENT_TYPES.INFORMATIONAL,
            title: 'Advanced Media - Art Direction & Formats',
            duration: '15 min read',
            content: `
# Advanced Media: Responsive & Formats

## The Big Difference: Resolution Switching vs Art Direction

It's crucial to understand when to use \`srcset\` and when to use \`<picture>\`.

### 1. Resolution Switching (\`srcset\`)
**Goal:** Display the **same image** content, just at different file sizes/resolutions depending on the user's screen width or pixel density.
*   **Use Case:** A hero image that covers 100% width on both desktop and mobile.
*   **Tool:** \`<img>\` with \`srcset\` and \`sizes\`.

\`\`\`html
<img src="pic-800.jpg"
     srcset="pic-400.jpg 400w, pic-800.jpg 800w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="A beautiful landscape">
\`\`\`

### 2. Art Direction (\`<picture>\`)
**Goal:** Display a **different image** (cropped differently, zoomed in, or different aspect ratio) based on device characteristics.
*   **Use Case:** A desktop image is a wide landscape, but on mobile, you want a zoomed-in square focusing on the subject's face.
*   **Tool:** \`<picture>\` element.

\`\`\`html
<picture>
    <!-- Mobile: Show a square crop -->
    <source media="(max-width: 799px)" srcset="puppy-square.jpg">
    <!-- Desktop: Show wide original -->
    <source media="(min-width: 800px)" srcset="puppy-wide.jpg">
    <!-- Fallback -->
    <img src="puppy-wide.jpg" alt="Cute puppy">
</picture>
\`\`\`

---

## Modern Format Selection (WebP / AVIF)

The \`<picture>\` tag is also the industry standard for serving next-gen formats like WebP or AVIF with a safe JPEG fallback.

### Browser Logic Visualization
Here is how the browser decides what to load:

\`\`\`text
[ Browser Requests Image ]
         |
         v
   <picture> Tag?
   /         \\
 NO           YES
 |             |
 v             v
Load <img>   [ Supports AVIF? ] --YES--> Load .avif file
(JPG/PNG)      |
               | NO
               v
             [ Supports WebP? ] --YES--> Load .webp file
               |
               | NO
               v
             Load Fallback <img> (JPG)
\`\`\`

### Code Example

\`\`\`html
<picture>
    <source srcset="image.avif" type="image/avif"> <!-- Best Compression -->
    <source srcset="image.webp" type="image/webp"> <!-- Good Compression -->
    <img src="image.jpg" alt="A photo" width="500"> <!-- Standard Fallback -->
</picture>
\`\`\`

This ensures that users with modern browsers save data (AVIF/WebP are often 30-50% smaller), while users on older browsers still see the image correctly.
            `
        },
        {
            id: 'html5-4-quiz',
            type: CONTENT_TYPES.QUIZ,
            title: 'Multimedia Quiz',
            duration: '5 min',
            questions: [
                {
                    id: 'q1',
                    question: 'Why is the "muted" attribute often required closely with "autoplay"?',
                    options: [
                        'To save bandwidth',
                        'To improve video quality',
                        'Because browsers block unmuted autoplay to prevent annoyance',
                        'It is not required'
                    ],
                    correctIndex: 2,
                    explanation: 'Modern browsers enforce a policy where video autoplay is only allowed if the audio is muted, ensuring a non-intrusive user experience.'
                },
                {
                    id: 'q2',
                    question: 'Which modern CSS property is best for setting an iframe aspect ratio (e.g. 16:9)?',
                    options: ['padding-bottom: 56.25%', 'height: auto', 'aspect-ratio: 16 / 9', 'ratio: 16-9'],
                    correctIndex: 2,
                    explanation: 'The aspect-ratio property is the modern, cleaner way to maintain element proportions without hacky padding tricks.'
                },
                {
                    id: 'q3',
                    question: 'What is the primary difference between Resolution Switching and Art Direction?',
                    options: [
                        'They are the same',
                        'Resolution Switching changes image size/quality; Art Direction changes the visual content/crop',
                        'Art Direction is only for videos',
                        'Resolution Switching uses the <picture> tag'
                    ],
                    correctIndex: 1,
                    explanation: 'Resolution switching optimizes for download size (same image), while Art Direction changes the actual image composition (e.g. crop) for different layouts.'
                },
                {
                    id: 'q4',
                    question: 'Which element is used to provide subtitles for a video?',
                    options: ['source', 'subtitle', 'track', 'caption'],
                    correctIndex: 2,
                    explanation: 'The track element is used to specify timed text tracks (like subtitles or captions) for media elements.'
                },
                {
                    id: 'q5',
                    question: 'In a <picture> tag, what happens if the browser does not support WebP?',
                    options: [
                        'The image breaks',
                        'It automatically converts it',
                        'It falls back to the next supported source or the <img> tag',
                        'It shows a blank space'
                    ],
                    correctIndex: 2,
                    explanation: 'The browser skips unsupported source types and continues down the list until it finds one it can load, or falls back to the img tag.'
                }
            ]
        }
    ]
};
