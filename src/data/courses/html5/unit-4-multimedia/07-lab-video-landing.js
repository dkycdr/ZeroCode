import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labVideo = {
    id: 'html5-u4-lab-3-video',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Cinema Landing Page (Background Video)',
    duration: '25 min',
    content: `
# Lab: Cinema Landing Page

## The Assignment
Create a "Netflix-style" landing page with a fullscreen background video loop.
The video plays silently behind your content.

## Key Concepts
- \`autoplay\` - video starts automatically
- \`muted\` - required for autoplay to work
- \`loop\` - video repeats continuously

`,
    tasks: [
        {
            id: 1,
            description: 'Add a <video> element with id="bg-video"',
            completed: false,
            regex: /<video[\s\S]*?id="bg-video"/i,
            hint: {
                concept: 'Video Element',
                strategy: 'ID allows targeting with CSS.',
                solution: '<video id="bg-video">...</video>'
            }
        },
        {
            id: 2,
            description: 'Add autoplay, muted, and loop attributes',
            completed: false,
            regex: /<video[\s\S]*?autoplay[\s\S]*?muted[\s\S]*?loop/i,
            hint: {
                concept: 'Video Autoplay',
                strategy: 'muted is required for autoplay to work in browsers.',
                solution: '<video autoplay muted loop id="bg-video">'
            }
        },
        {
            id: 3,
            description: 'Add a <source> with video URL and type="video/mp4"',
            completed: false,
            regex: /<source[\s\S]*?type="video\/mp4"/i,
            hint: {
                concept: 'Video Source',
                strategy: 'MP4 is the most widely supported format.',
                solution: '<source src="video.mp4" type="video/mp4">'
            }
        },
        {
            id: 4,
            description: 'Add CSS to make video fullscreen (position: fixed)',
            completed: false,
            regex: /#bg-video[\s\S]*?position:\s*fixed/i,
            hint: {
                concept: 'Fullscreen Video',
                strategy: 'position: fixed + 100% width/height covers screen.',
                solution: '#bg-video { position: fixed; min-width: 100%; min-height: 100%; }'
            }
        },
        {
            id: 5,
            description: 'Add z-index to place content above video',
            completed: false,
            regex: /z-index:\s*10/i,
            hint: {
                concept: 'Layering Content',
                strategy: 'Higher z-index appears above lower z-index.',
                solution: '.content { z-index: 10; }'
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
    <title>CYBER_CITY</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- ============================================
        ADD BACKGROUND VIDEO HERE
        1. <video> with autoplay muted loop
        2. <source> with video URL
    ============================================ -->
    
    
    <div class="content">
        <h1>CYBER_CITY</h1>
        <p>Coming Soon</p>
    </div>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `body { 
    margin: 0; 
    background: black; 
    overflow: hidden; 
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    /* TODO: Add z-index to appear above video */
}

h1 { 
    font-size: 4rem; 
    font-family: monospace;
    text-shadow: 0 0 20px #00ff41;
    margin: 0;
}

p {
    font-size: 1.2rem;
    letter-spacing: 5px;
    opacity: 0.7;
}

/* TODO: Style #bg-video to be fullscreen */
#bg-video {
    /* position: fixed */
    /* min-width: 100% */
    /* min-height: 100% */
    opacity: 0.5;
}`
        }
    ]
};
