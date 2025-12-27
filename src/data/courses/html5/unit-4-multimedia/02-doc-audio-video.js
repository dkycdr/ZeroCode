import { CONTENT_TYPES } from '../../index';

export const doc2AudioVideo = {
    id: 'html5-unit-4-doc-av',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: Native Audio & Video Players',
    description: 'Embed media without relying on YouTube or Spotify. Master the HTML5 Media API.',
    content: `
# HTML5 Media: No Plugins Required

Before HTML5, we needed Flash (RIP). Now, browsers have powerful native media players built-in.

## The \`<video>\` Element
Embed video files directly.

\`\`\`html
<video controls width="100%" poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  <track kind="subtitles" src="subs_en.vtt" srclang="en" label="English">
  Your browser does not support the video tag.
</video>
\`\`\`

### Key Attributes
*   \`controls\`: Shows Play/Pause, Volume, Fullscreen buttons.
*   \`poster\`: An image shown before the video plays.
*   \`autoplay\`: **Avoid this** unless muted. Browsers block unmuted autoplay.
*   \`muted\`: Mutes the audio by default.
*   \`loop\`: Replays the video automatically.

## The \`<audio>\` Element
Works exactly like video, but invisible (only controls shown).

\`\`\`html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  <source src="podcast.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
\`\`\`

## Accessibility: The \`<track>\` Tag
Always provide captions or subtitles for videos.
*   \`kind="captions"\`: For the deaf/HOH (includes sound effects).
*   \`kind="subtitles"\`: Translations/Dialogue only.

\`\`\`html
<track src="captions.vtt" kind="captions" srclang="en" label="English CC">
\`\`\`
    `
};
