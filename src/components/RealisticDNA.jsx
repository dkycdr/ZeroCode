import { useRef, useEffect } from 'react';

// Realistic 2D Canvas DNA Component - SCOPED TO SECTION
// CYBERPUNK EDITION: Neon Colors + Infinite Scroll
export default function RealisticDNA({
    color1 = '#00f0ff',
    color2 = '#bd00ff',
    opacity = 1,
    helixRadius = 80,
    pulse = true
}) {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const helixRadiusVal = helixRadius;
        const separation = 20;

        const resize = () => {
            canvas.width = container.clientWidth;
            canvas.height = container.clientHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        const render = () => {
            const scrollY = window.scrollY;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // Draw faint central axis (Data Spine) - Cyberpunk Style
            ctx.beginPath();
            ctx.moveTo(centerX, 0);
            ctx.lineTo(centerX, canvas.height);
            ctx.strokeStyle = "rgba(0, 255, 255, 0.1)";
            ctx.setLineDash([5, 15]); // Techy dash pattern
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.setLineDash([]);

            // INFINITE SCROLL LOGIC
            const moveSpeed = 0.15;
            const rotSpeed = 0.002;

            const globalYOffset = scrollY * moveSpeed;
            const rotationOffset = scrollY * rotSpeed;

            const buffer = 100;
            const minParticleY = -buffer;
            const maxParticleY = canvas.height + buffer;

            const minI = Math.floor((minParticleY + globalYOffset - centerY) / separation);
            const maxI = Math.ceil((maxParticleY + globalYOffset - centerY) / separation);

            const particles = [];

            for (let i = minI; i <= maxI; i++) {
                const t = i * 0.15;
                const y = (i * separation) - globalYOffset + centerY;
                const angle = t + rotationOffset;

                const x1 = Math.cos(angle) * helixRadiusVal;
                const z1 = Math.sin(angle) * helixRadiusVal;
                const x2 = Math.cos(angle + Math.PI) * helixRadiusVal;
                const z2 = Math.sin(angle + Math.PI) * helixRadiusVal;

                // Cyberpunk Colors: Dynamic
                particles.push({
                    x: centerX + x1, y, z: z1,
                    color: color1,
                    type: 'node', size: 3
                });

                particles.push({
                    x: centerX + x2, y, z: z2,
                    color: color2,
                    type: 'node', size: 3
                });

                particles.push({
                    x1: centerX + x1, y1: y, z1: z1,
                    x2: centerX + x2, y2: y, z2: z2,
                    type: 'link', zAverage: (z1 + z2) / 2
                });
            }

            // Painter's Algorithm
            particles.sort((a, b) => {
                const depthA = a.type === 'link' ? a.zAverage : a.z;
                const depthB = b.type === 'link' ? b.zAverage : b.z;
                return depthA - depthB;
            });

            // Render Loop
            particles.forEach(p => {
                const depth = p.type === 'link' ? p.zAverage : p.z;
                const cameraZ = 200;

                const scale = cameraZ / (cameraZ - depth);
                const alpha = Math.max(0.3, Math.min(1, (depth + 100) / 200));

                if (p.type === 'node') {
                    const screenX = centerX + (p.x - centerX) * scale;
                    const screenY = p.y;

                    ctx.beginPath();
                    ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = alpha;

                    // ALWAYS GLOW
                    ctx.shadowBlur = 20 * scale;
                    ctx.shadowColor = p.color;

                    ctx.fill();
                    ctx.shadowBlur = 0;
                    ctx.globalAlpha = 1;
                } else if (p.type === 'link') {
                    const screenX1 = centerX + (p.x1 - centerX) * (cameraZ / (cameraZ - p.z1));
                    const screenX2 = centerX + (p.x2 - centerX) * (cameraZ / (cameraZ - p.z2));

                    ctx.beginPath();
                    ctx.moveTo(screenX1, p.y1);
                    ctx.lineTo(screenX2, p.y2);
                    ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.15})`;
                    ctx.lineWidth = 1 * scale;
                    ctx.stroke();
                }
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full opacity-100" />
            {/* NO BACKGROUND OVERLAY - FULL TRANSPARENCY */}
        </div>
    );
}
