import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiFireLine, RiPulseLine, RiCheckboxCircleLine, RiAlertLine } from 'react-icons/ri';
import clsx from 'clsx';

export default function NeuralStreak({ streak = 0 }) {
    const canvasRef = useRef(null);
    const syncPercentage = Math.min(100, (streak > 0 ? (statsToSync(streak)) : 0));
    const isActive = streak > 0;

    function statsToSync(days) {
        if (days === 0) return 0;
        if (days === 1) return 45;
        if (days === 2) return 68;
        if (days === 3) return 85;
        return 98 + (days % 2); // Plateau at "near perfect"
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        const points = [];
        const numPoints = 20;
        for (let i = 0; i <= numPoints; i++) {
            points.push({ x: (canvas.width / numPoints) * i, y: canvas.height / 2 });
        }

        let time = 0;
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.05;

            // Draw Pulse Line
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);

            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                // Amplitude based on streak
                const amplitude = isActive ? (10 + Math.sin(time) * 5) : 2;
                const freq = isActive ? 0.5 : 0.1;

                // Create a "pulse" that travels
                const yOffset = Math.sin(p.x * freq + time) * amplitude;
                // Add sporadic "noise"
                const noise = (Math.random() - 0.5) * (isActive ? 2 : 5);

                ctx.lineTo(p.x, (canvas.height / 2) + yOffset + noise);
            }

            ctx.strokeStyle = isActive ? 'rgba(34, 211, 238, 0.5)' : 'rgba(113, 113, 122, 0.2)';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Glow effect
            if (isActive) {
                ctx.shadowBlur = 10;
                ctx.shadowColor = '#06b6d4';
                ctx.stroke();
                ctx.shadowBlur = 0;
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [streak, isActive]);

    return (
        <div className="group relative p-6 bg-black border border-zinc-800 overflow-hidden hover:border-white/40 transition-colors duration-200">
            {/* HUD Corner Decorations */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-zinc-700 group-hover:border-cyan-500 transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-zinc-700 group-hover:border-cyan-500 transition-colors" />

            {/* Animated Grid / Scanline */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-col">
                        <span className="text-zinc-600 group-hover:text-cyan-500/50 transition-colors text-[8px] font-black font-mono uppercase tracking-[0.3em]">
                            NEURAL_LINK_UPTIME
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                            {isActive ? (
                                <div className="flex items-center gap-1.5 px-1.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded-sm">
                                    <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_5px_cyan]" />
                                    <span className="text-[7px] font-mono text-cyan-400 font-bold uppercase tracking-widest">STABLE</span>
                                </div>
                            ) : (
                                <div className="flex items-center gap-1.5 px-1.5 py-0.5 bg-red-500/10 border border-red-500/20 rounded-sm">
                                    <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse shadow-[0_0_5px_red]" />
                                    <span className="text-[7px] font-mono text-red-400 font-bold uppercase tracking-widest">OFFLINE</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={clsx("transition-transform duration-500 group-hover:rotate-12", isActive ? "text-cyan-400" : "text-zinc-700")}>
                        <RiFireLine size={20} className={clsx(isActive && "animate-pulse")} />
                    </div>
                </div>

                <div className="flex-1 flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <div className="flex items-baseline gap-1">
                            <span className={clsx(
                                "text-4xl font-black font-mono tracking-tighter transition-all duration-300",
                                isActive ? "text-white glow-text-cyan" : "text-zinc-800"
                            )}>
                                {streak}
                            </span>
                            <span className="text-[10px] text-zinc-600 font-mono uppercase font-black tracking-widest">Days</span>
                        </div>
                        <p className="text-[9px] text-zinc-500 font-mono mt-1">
                            {isActive ? `// CONSECUTIVE_SYNC_DETECTED` : `// SYNC_LOST: RE-INIT_REQUIRED`}
                        </p>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                        <div className="text-[14px] font-mono font-black text-zinc-200">
                            {syncPercentage}% <span className="text-[8px] text-zinc-600">SYNC</span>
                        </div>
                        <div className="w-16 h-1.5 bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${syncPercentage}%` }}
                                className={clsx("h-full", isActive ? "bg-cyan-500 shadow-[0_0_10px_cyan]" : "bg-zinc-700")}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 relative h-8 w-full">
                    <canvas ref={canvasRef} className="w-full h-full" />
                    <div className="absolute bottom-0 right-0 flex items-center gap-2">
                        <span className="text-[7px] text-zinc-700 font-mono tracking-widest uppercase">PULSE_MONITOR</span>
                        <RiPulseLine size={10} className="text-zinc-800" />
                    </div>
                </div>
            </div>
        </div>
    );
}
