import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc2History = {
  id: 'html5-u0-doc-2-history',
  type: CONTENT_TYPES.INFORMATIONAL,
  title: 'Deep Dive: A Brief History of the Web',
  duration: '10 min read',
  content: `
# Deep Dive: A Brief History of the Web

## 1. The Beginning (1991)

Sir Tim Berners-Lee invented HTML at CERN. The goal was simple: share scientific documents.
The first version of HTML was extremely simple. No images, no colors, just text and links.

\`\`\`html
<title>The Project</title>
<h1>The World Wide Web</h1>
<p>The WorldWideWeb (W3) is a wide-area hypermedia...</p>
\`\`\`

## 2. The Browser Wars (late 90s)

Netscape Navigator vs Internet Explorer.
They fought to add features faster than the other. This led to "messy" HTML because they invented tags that didn't work in the other browser (like \`<blink>\` or \`<marquee>\`).

> [!WARNING]
> **Legacy Code Alert**: If you see tags like \`<center>\`, \`<font>\`, or \`<bgcolor>\`, run away. These are extinct tags from the bad old days.

## 3. The Dark Ages (XHTML)

In the early 2000s, there was an attempt to make HTML super strict, like XML. If you missed a single closing tag, the page would crash. Ideally good for computers, terrible for humans.

## 4. The HTML5 Revolution (2014)

Developers wanted something pragmatic. HTML5 was born.
- It handles errors gracefully (doesn't crash if you miss a closing tag).
- It added powerful new semantic tags (\`<nav>\`, \`<article>\`).
- It added native support for Video and Audio (killing Flash Player).

### Why HTML5 Wins:

\`\`\`html
<!-- OLD WAY (Flash for video) -->
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ...>
  <param name="movie" value="movie.swf" />
  ...
</object>

<!-- HTML5 WAY -->
<video src="movie.mp4" controls></video>
\`\`\`

Much cleaner, right?

## 5. The Living Standard

Today, HTML is a "Living Standard". There is no "HTML6".
The standard is maintained by the **WHATWG** (Apple, Google, Mozilla, Microsoft). They update it continuously.

> [!NOTE]
> **Fun Fact**: You are learning the exact same technology used to build Google, Facebook, and Netflix. The foundation hasn't changed, only expanded.
`
};
