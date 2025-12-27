import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const doc4CanvasBasics = {
    id: 'html5-u9-doc-4-canvas',
    type: CONTENT_TYPES.INFORMATIONAL,
    title: 'Deep Dive: HTML5 Canvas & Animation',
    duration: '20 min read',
    content: `
# Deep Dive: HTML5 Canvas & Animation

## 1. What is Canvas?

The \`<canvas>\` element is like a **blank painting board** in your browser. Unlike other HTML elements (images, divs), Canvas is completely empty until you draw on it with JavaScript.

### What Canvas is Good For:
- 🎮 **Games**: 2D games, arcade titles
- 📊 **Charts**: Bar charts, pie charts, graphs
- 🎨 **Drawing Apps**: Paint programs
- ✨ **Animations**: Particles, effects, transitions
- 🖼️ **Image Editing**: Filters, cropping

---

## 2. Setting Up a Canvas

### Step 1: Create the Canvas Element
\`\`\`html
<canvas id="myCanvas" width="800" height="600"></canvas>
\`\`\`

### Step 2: Get the Drawing Context
\`\`\`javascript
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d'); // 2D drawing context
\`\`\`

The \`ctx\` object has all the drawing methods you need.

---

## 3. Drawing Basic Shapes

### Rectangles (The Easiest)
\`\`\`javascript
// Filled rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 200, 100); // x, y, width, height

// Outline only
ctx.strokeStyle = 'red';
ctx.lineWidth = 5;
ctx.strokeRect(50, 200, 200, 100);

// Clear a rectangle (erase)
ctx.clearRect(75, 75, 50, 50);
\`\`\`

### Circles and Arcs
\`\`\`javascript
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fillStyle = 'green';
ctx.fill();
\`\`\`

### Lines
\`\`\`javascript
ctx.beginPath();
ctx.moveTo(100, 100);    // Start point
ctx.lineTo(300, 200);    // Draw line to here
ctx.lineTo(100, 300);    // Another line
ctx.closePath();         // Connect back to start
ctx.stroke();            // Draw the outline
\`\`\`

---

## 4. The Coordinate System

Canvas uses a coordinate system where:
- **(0, 0)** is the **top-left corner**
- **X increases** going **right** →
- **Y increases** going **down** ↓

\`\`\`text
    0,0 ────────────► X
    │
    │   (100, 50) is here
    │         ●
    │
    ▼
    Y
\`\`\`

---

## 5. Creating Animations (The Render Loop)

Animation is just drawing, erasing, and drawing again really fast (60 times per second).

### The Pattern:
\`\`\`javascript
let x = 0; // Ball position

function animate() {
    // 1. Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 2. Update the position
    x += 2;
    if (x > canvas.width) x = 0; // Loop back
    
    // 3. Draw the ball
    ctx.beginPath();
    ctx.arc(x, 200, 30, 0, Math.PI * 2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    
    // 4. Request next frame
    requestAnimationFrame(animate);
}

// Start the animation
animate();
\`\`\`

### Why \`requestAnimationFrame\`?
- Syncs with monitor refresh rate (usually 60fps)
- Pauses when tab is hidden (saves battery)
- Smoother than \`setInterval\`

---

## 6. Drawing Images

You can draw images onto the canvas:

\`\`\`javascript
const img = new Image();
img.src = 'player.png';

img.onload = function() {
    // Draw at position (100, 100)
    ctx.drawImage(img, 100, 100);
    
    // Draw with specific size
    ctx.drawImage(img, 100, 100, 64, 64);
};
\`\`\`

> [!WARNING]
> **Always wait for the image to load!** If you try to draw before the image loads, nothing will appear.

---

## 7. Drawing Text

\`\`\`javascript
ctx.font = '48px Arial';
ctx.fillStyle = 'white';
ctx.fillText('Hello Canvas!', 100, 100);

// Outlined text
ctx.strokeStyle = 'black';
ctx.strokeText('Outline!', 100, 200);
\`\`\`

---

## 8. Gradients and Patterns

### Linear Gradient
\`\`\`javascript
const gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.5, 'yellow');
gradient.addColorStop(1, 'green');

ctx.fillStyle = gradient;
ctx.fillRect(50, 50, 200, 100);
\`\`\`

### Radial Gradient
\`\`\`javascript
const radial = ctx.createRadialGradient(100, 100, 10, 100, 100, 100);
radial.addColorStop(0, 'white');
radial.addColorStop(1, 'blue');
ctx.fillStyle = radial;
ctx.fillRect(0, 0, 200, 200);
\`\`\`

---

## 9. Transformations

You can rotate, scale, and move the entire drawing context:

\`\`\`javascript
ctx.save();          // Save current state

ctx.translate(200, 200);  // Move origin
ctx.rotate(Math.PI / 4);  // Rotate 45 degrees
ctx.scale(2, 2);          // Make 2x bigger

ctx.fillRect(-25, -25, 50, 50); // Draw at new origin

ctx.restore();       // Go back to normal
\`\`\`

---

## 10. Performance Tips

### ✅ Do:
- Use \`requestAnimationFrame\` for animations
- Cache canvas and context references outside loops
- Use integer coordinates (faster than decimals)
- Clear only what changed (not entire canvas)

### ❌ Don't:
- Create new Image objects every frame
- Use \`setInterval\` for animations
- Resize canvas with CSS (use width/height attributes)
`
};
