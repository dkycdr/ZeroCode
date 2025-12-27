import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const labAudioPlayer = {
    id: 'html5-u4-lab-2-audio',
    type: CONTENT_TYPES.LESSON,
    title: 'Lab: Retro Audio Interface',
    duration: '20 min',
    content: `
# Lab: Retro Audio Interface

## The Assignment
Build a styled cassette player using the HTML5 Audio element.
Create a retro aesthetic with modern audio controls.

## Key Concepts
- \`<audio>\` element for sound playback
- \`controls\` attribute shows default player
- \`<source>\` for different audio formats

`,
    tasks: [
        {
            id: 1,
            description: 'Add an <audio> element with controls attribute',
            completed: false,
            regex: /<audio[\s\S]*?controls/i,
            hint: {
                concept: 'Audio Controls',
                strategy: 'The controls attribute adds Play/Pause buttons.',
                solution: '<audio controls>...</audio>'
            }
        },
        {
            id: 2,
            description: 'Add a <source> with src="song.mp3" and type="audio/mpeg"',
            completed: false,
            regex: /<source[\s\S]*?src="[^"]+"/i,
            hint: {
                concept: 'Audio Source',
                strategy: '<source> allows you to provide multiple formats.',
                solution: '<source src="song.mp3" type="audio/mpeg">'
            }
        },
        {
            id: 3,
            description: 'Add a fallback text for older browsers',
            completed: false,
            regex: /<audio[\s\S]*?>.*browser.*<\/audio>/i,
            hint: {
                concept: 'Audio Fallback',
                strategy: 'Browsers that don\'t support <audio> show the internal text.',
                solution: '<audio>Your browser does not support audio.</audio>'
            }
        },
        {
            id: 4,
            description: 'Add the loop attribute to the <audio> tag',
            completed: false,
            regex: /<audio[\s\S]*?(autoplay|loop)/i,
            hint: {
                concept: 'Playback Attributes',
                strategy: 'autoplay starts playing, loop repeats forever.',
                solution: '<audio controls autoplay loop>'
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
    <title>Retro Player</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="player">
        <div class="tape-label">MIXTAPE VOL. 1</div>
        
        <!-- ============================================
            ADD AUDIO PLAYER HERE
            1. <audio> with controls
            2. <source> with src and type
            3. Fallback text
        ============================================ -->
        
    </div>
</body>
</html>`
        },
        {
            name: 'style.css',
            language: 'css',
            content: `.player {
    background: #222;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    color: #0f0;
    font-family: monospace;
    border: 2px solid #555;
    margin: 50px auto;
}
.tape-label {
    text-align: center;
    background: #eee;
    color: #000;
    padding: 8px;
    margin-bottom: 20px;
    font-weight: bold;
    transform: rotate(-2deg);
}
audio {
    width: 100%;
    filter: invert(1);
}`
        }
    ]
};
