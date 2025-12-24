import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiFireLine, RiPulseLine, RiExpandUpDownLine, RiSubtractLine } from 'react-icons/ri';
import clsx from 'clsx';

export default function NeuralStreak({ streak = 0 }) {
    const canvasRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);
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
        if (!isExpanded) return;
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
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            time += 0.05;

            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);

            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                const amplitude = isActive ? (10 + Math.sin(time) * 5) : 2;
                const freq = isActive ? 0.5 : 0.1;
                const yOffset = Math.sin(p.x * freq + time) * amplitude;
                const noise = (Math.random() - 0.5) * (isActive ? 2 : 5);
                ctx.lineTo(p.x, (canvas.height / 2) + yOffset + noise);
            }

            ctx.strokeStyle = isActive ? 'rgba(34, 211, 238, 0.5)' : 'rgba(113, 113, 122, 0.2)';
            ctx.lineWidth = 1.5;
            ctx.stroke();

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
    }, [streak, isActive, isExpanded]);

    return (
        <motion.div
            layout
            className={clsx(
                "relative transition-all duration-300 group overflow-hidden",
                !isExpanded ? "bg-black" : "bg-zinc-950"
            )}
            style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)',
            }}
        >
            <div className={clsx("absolute top-0 left-0 right-0 h-[1px] z-30 transition-colors duration-500", isActive ? "bg-cyan-500/30" : "bg-red-500/30")} />

            {/* Hardware Brackets */}
            <div className={clsx("absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 z-30 pointer-events-none transition-colors duration-500", isActive ? "border-cyan-500/20" : "border-red-500/20")} />
            <div className={clsx("absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 z-30 pointer-events-none transition-colors duration-500", isActive ? "border-cyan-500/20" : "border-red-500/20")} />

            <div className="absolute inset-0 border border-zinc-800/50 pointer-events-none" />
            <div className={clsx(
                "absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 z-30",
                isExpanded ? (isActive ? "bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" : "bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]") : "bg-zinc-800"
            )} />

            <div onClick={() => setIsExpanded(!isExpanded)} className="w-full h-[72px] flex items-center justify-between px-4 relative z-20 cursor-pointer select-none" title={isActive ? "Neural Link: ACTIVE" : "Neural Link: CRITICAL"}>
                <div className="flex items-center gap-4 min-w-0 flex-1">
                    {/* Icon Tile - Cyber-Slat V3 */}
                    <div className={clsx(
                        "w-12 h-12 flex items-center justify-center transition-all duration-300 flex-shrink-0 relative overflow-hidden",
                        !isExpanded ? "bg-zinc-900 border border-zinc-800" : (isActive ? "bg-cyan-950/20 border border-cyan-500/40 shadow-[inset_0_0_20px_rgba(6,182,212,0.15)]" : "bg-red-950/20 border border-red-500/40 shadow-[inset_0_0_20px_rgba(239,68,68,0.15)]")
                    )}>
                        {/* Hardware Corner Ticks */}
                        <div className={clsx("absolute top-0.5 left-0.5 w-1 h-1", isActive ? "bg-cyan-500/40" : "bg-red-500/40")} />
                        <div className={clsx("absolute bottom-0.5 right-0.5 w-1 h-1", isActive ? "bg-cyan-500/40" : "bg-red-500/40")} />

                        {/* Scanline Animation Overlay */}
                        <div className={clsx("absolute inset-0 pointer-events-none opacity-[0.05] bg-[length:100%_2px]", isActive ? "bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(6,182,212,1)_1px,rgba(6,182,212,1)_2px)]" : "bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(239,68,68,1)_1px,rgba(239,68,68,1)_2px)]")} />
                        <div
                            className={clsx("absolute inset-0 w-full h-[2px] blur-[1px] z-10", isActive ? "bg-cyan-400/20" : "bg-red-400/20")}
                            style={{ animation: 'scan 4s linear infinite' }}
                        />

                        {/* Radial Glow */}
                        <div className={clsx("absolute inset-0", isActive ? "bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" : "bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.1),transparent_70%)]")} />

                        <RiFireLine size={24} className={clsx("transition-colors duration-300 relative z-20", isExpanded ? (isActive ? "text-cyan-400" : "text-red-500") : "text-zinc-500")} />
                    </div>
                    <AnimatePresence mode="wait">
                        {isExpanded ? (
                            <motion.div key="expanded" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex flex-col min-w-0">
                                <h3 className="font-black font-mono text-[13px] uppercase text-white leading-none truncate">NEURAL_LINK</h3>
                                <span className={clsx("text-[9px] font-mono uppercase mt-1 truncate", isActive ? "text-cyan-500/60" : "text-red-500/60")}>// STREAK_SYNC</span>
                            </motion.div>
                        ) : (
                            <motion.div key="collapsed" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex flex-col min-w-0">
                                <h3 className="font-bold font-mono text-[10px] uppercase tracking-tighter text-white/50 leading-none truncate">NEURAL_LINK</h3>
                                <div className={clsx("flex items-center gap-1.5 mt-1 border backdrop-blur-md px-1.5 py-0.5 rounded-sm w-fit", isActive ? "border-cyan-500/30 bg-cyan-500/10" : "border-red-500/30 bg-red-500/10")}>
                                    <span className={clsx("text-[8px] font-mono uppercase font-bold", isActive ? "text-cyan-500/70" : "text-red-500/70")}>DAYS</span>
                                    <span className={clsx("text-[10px] font-black leading-none", isActive ? "text-cyan-400" : "text-red-400")}>{streak}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex items-center gap-3 relative z-10">
                    <button onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }} className={clsx("w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 transition-all text-zinc-500", isActive ? "hover:bg-cyan-950/30 hover:text-cyan-400" : "hover:bg-red-950/30 hover:text-red-500")}>
                        {isExpanded ? <RiSubtractLine size={16} /> : <RiExpandUpDownLine size={16} />}
                    </button>
                </div>

                {!isExpanded && (
                    <div className="absolute top-2 right-2 flex items-center justify-center w-2 h-2">
                        <div className={clsx("w-1 h-1 rounded-full animate-pulse shadow-[0_0_5px]", isActive ? "bg-cyan-500 shadow-cyan-500" : "bg-red-500 shadow-red-500")} />
                    </div>
                )}
            </div>

            <div className={clsx("relative transition-all duration-300 ease-in-out overflow-hidden bg-zinc-950", !isExpanded ? "max-h-0 opacity-0" : "max-h-[800px] opacity-100")}>
                <div className="min-h-[200px] border-t border-zinc-900 relative">
                    <div className={clsx("absolute inset-0 pointer-events-none opacity-20 bg-[size:20px_20px]", isActive ? "bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)]" : "bg-[linear-gradient(rgba(239,68,68,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.05)_1px,transparent_1px)]")} />
                    <div className="p-6 relative z-10">
                        <div className="flex items-start justify-between mb-6 pb-2 border-b border-dashed border-zinc-800">
                            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">// SYNC_STATUS</span>
                            <div className="flex items-center gap-2">
                                {isActive ? (
                                    <div className="flex items-center gap-1.5 px-1.5 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded-sm">
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_5px_cyan]" />
                                        <span className="text-[9px] font-mono text-cyan-400 font-bold uppercase tracking-widest">STABLE</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1.5 px-1.5 py-0.5 bg-red-500/10 border border-red-500/20 rounded-sm">
                                        <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse shadow-[0_0_5px_red]" />
                                        <span className="text-[9px] font-mono text-red-400 font-bold uppercase tracking-widest">OFFLINE</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-4 mb-6">
                            <div className="flex flex-col">
                                <div className="flex items-baseline gap-1">
                                    <span className={clsx("text-5xl font-black font-mono tracking-tighter transition-all duration-300", isActive ? "text-white text-shadow-lg-cyan" : "text-zinc-700")}>{streak}</span>
                                    <span className="text-[10px] text-zinc-600 font-mono uppercase font-black tracking-widest">Days</span>
                                </div>
                                <p className="text-[9px] text-zinc-500 font-mono mt-1">{isActive ? `// CONSECUTIVE_SYNC_DETECTED` : `// SIGNAL_LOST_RECOVER_IMMEDIATELY`}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <div className={clsx("text-xs font-mono font-bold", isActive ? "text-cyan-400" : "text-red-500")}>{syncPercentage}% <span className="text-[8px] text-zinc-600">INTGR</span></div>
                                <div className="w-24 h-1.5 bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
                                    <motion.div initial={{ width: 0 }} animate={{ width: `${syncPercentage}%` }} className={clsx("h-full", isActive ? "bg-cyan-500 shadow-[0_0_10px_cyan]" : "bg-red-600")} />
                                </div>
                            </div>
                        </div>

                        <div className="relative h-12 w-full border border-zinc-800/50 bg-black rounded-sm overflow-hidden">
                            <canvas ref={canvasRef} className="w-full h-full opacity-80" />
                            <div className="absolute bottom-1 right-2 flex items-center gap-1">
                                <span className={clsx("text-[6px] font-mono tracking-widest uppercase", isActive ? "text-cyan-500" : "text-zinc-700")}>SIGNAL_WAVEFORM</span>
                                <RiPulseLine size={8} className={clsx(isActive ? "text-cyan-500" : "text-zinc-700")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Accents */}
            <div className={clsx("absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors", !isExpanded ? "border-zinc-800" : (isActive ? "border-cyan-500" : "border-red-500"))} />
            <div className={clsx("absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors", !isExpanded ? "border-zinc-800" : (isActive ? "border-cyan-500" : "border-red-500"))} />
        </motion.div>
    );
}
