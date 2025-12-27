import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labHero = {
    id: 'html5-u4-lab-1-hero',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Art Gallery Hero (Responsive Images)',
    duration: '25 min',
    content: `
# Lab: Art Gallery Hero

## The Assignment
Build an "Art Directed" responsive hero section using the \`<picture>\` element.
Different screen sizes get different image crops.

## The Blueprint
- Mobile (< 600px): Square image (500x500)
- Desktop (> 600px): Wide image (1200x400)

`,
    tasks: [
        {
            id: 1,
            description: 'Create a <picture> element to wrap your images',
            completed: false,
            regex: /<picture>[\s\S]*?<\/picture>/i,
            hint: {
                concept: 'Picture Element',
                strategy: '<picture> is a container for multiple image sources.',
                solution: '<picture>\n    <!-- sources here -->\n    <img>\n</picture>'
            }
        },
        {
            id: 2,
            description: 'Add a <source> for mobile (max-width: 600px)',
            completed: false,
            regex: /<source[\s\S]*?max-width:\s*600px/i,
            hint: {
                concept: 'Mobile Source',
                strategy: 'media attribute defines when this source is used.',
                solution: '<source media="(max-width: 600px)" srcset="mobile-image.jpg">'
            }
        },
        {
            id: 3,
            description: 'Add a <source> for desktop (min-width: 601px)',
            completed: false,
            regex: /<source[\s\S]*?min-width:\s*601px/i,
            hint: {
                concept: 'Desktop Source',
                strategy: 'Different breakpoint, different image.',
                solution: '<source media="(min-width: 601px)" srcset="desktop-image.jpg">'
            }
        },
        {
            id: 4,
            description: 'Add a fallback <img> as the last child of picture',
            completed: false,
            regex: /<picture>[\s\S]*?<img[\s\S]*?src=[\s\S]*?<\/picture>/i,
            hint: {
                concept: 'Fallback Image',
                strategy: '<img> is required and used by old browsers.',
                solution: '<img src="fallback.jpg" alt="Gallery Hero">'
            }
        },
        {
            id: 5,
            description: 'Add alt attribute to the img for accessibility',
            completed: false,
            regex: /<img[\\s\\S]*?alt="[^"]+"/i,
            hint: {
                concept: 'Alt Text',
                strategy: 'Describe what the image shows for screen readers.',
                solution: '<img src="..." alt="Art gallery masterpiece">'
            }
        }
    ],
    files: [
        {
            name: 'index.html',
            language: 'html',
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Masterpiece Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="hero">
        <!-- ============================================
            BUILD THE RESPONSIVE HERO
            1. Add <picture> element
            2. Add mobile source (max-width: 600px)
            3. Add desktop source (min-width: 601px)
            4. Add fallback <img>
        ============================================ -->
        
        
        <div class="hero-text">
            <h1>Masterpiece Gallery</h1>
            <p>Where art meets technology</p>
        </div>
    </div>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { margin: 0; font-family: -apple-system, sans-serif; }
.hero { position: relative; }
.hero img { width: 100%; height: auto; display: block; }
.hero-text {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    background: rgba(0,0,0,0.7);
    padding: 20px;
    border-radius: 8px;
}
.hero-text h1 { margin: 0 0 10px; }
.hero-text p { margin: 0; opacity: 0.8; }`
        }
    ]
};
