import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiExpandUpDownLine, RiFullscreenLine, RiFullscreenExitLine, RiSubtractLine } from 'react-icons/ri';
import clsx from 'clsx';
import { useClickOutside } from '../../hooks/useClickOutside'; // Assuming this hook exists or I'll implement a simple ref check

export default function SidebarWidgetFrame({
    title,
    icon: Icon,
    subtitle,
    children,
    onFullscreen,
    miniStat,
    defaultExpanded = false
}) {
    const [state, setState] = useState(defaultExpanded ? 'expanded' : 'collapsed'); // 'collapsed' | 'expanded' | 'fullscreen'
    const containerRef = useRef(null);

    // Simple outside click handler if expanded (optional, maybe too aggressive for dashboards? keeping it manual for now)

    const toggleExpand = () => {
        if (state === 'collapsed') setState('expanded');
        else if (state === 'expanded') setState('collapsed');
        else setState('expanded'); // from fullscreen back to expanded
    };

    const toggleFullscreen = (e) => {
        e.stopPropagation();
        if (state === 'fullscreen') setState('expanded');
        else setState('fullscreen');

        if (onFullscreen) onFullscreen();
    };

    return (
        <>
            {/* WIDGET CONTAINER (Relative for flow) */}
            <motion.div
                ref={containerRef}
                layout
                className={clsx(
                    "relative border bg-black overflow-hidden transition-colors group",
                    state === 'collapsed' ? "h-20 border-zinc-900 hover:border-zinc-700" : "border-zinc-800"
                )}
                transition={{ duration: 0.3, ease: "circOut" }}
            >
                {/* 1. COLLAPSED / HEADER VIEW */}
                <div
                    onClick={state === 'collapsed' ? toggleExpand : undefined}
                    className={clsx(
                        "w-full h-20 flex items-center justify-between px-5 relative z-20 cursor-pointer",
                        state !== 'collapsed' ? "border-b border-zinc-800" : ""
                    )}
                >
                    {/* Left: Title & Sub */}
                    <div className="flex items-center gap-4">
                        <div className={clsx(
                            "p-2 rounded-md transition-colors",
                            state === 'collapsed' ? "bg-zinc-900 group-hover:bg-zinc-800" : "bg-cyan-500/10 text-cyan-400"
                        )}>
                            <Icon size={20} className={state === 'collapsed' ? "text-zinc-500 group-hover:text-zinc-300" : "text-cyan-400"} />
                        </div>
                        <div>
                            <h3 className={clsx(
                                "font-black font-mono uppercase tracking-wider transition-colors",
                                state === 'collapsed' ? "text-zinc-500 group-hover:text-zinc-300" : "text-white"
                            )}>
                                {title}
                            </h3>
                            {state === 'collapsed' && subtitle && (
                                <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-widest mt-0.5 group-hover:text-zinc-500">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Right: Mini Stat + Controls */}
                    <div className="flex items-center gap-4">
                        {/* Mini Stat (Only visible when collapsed) */}
                        <AnimatePresence>
                            {state === 'collapsed' && miniStat && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                >
                                    {miniStat}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="flex items-center gap-1">
                            {state !== 'collapsed' && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); toggleExpand(); }}
                                    className="p-2 hover:bg-white/10 rounded text-zinc-500 hover:text-white transition-colors"
                                    title="Minimize"
                                >
                                    <RiSubtractLine size={18} />
                                </button>
                            )}

                            {/* Expand/Fullscreen Button */}
                            {state === 'expanded' && (
                                <button
                                    onClick={toggleFullscreen}
                                    className="p-2 hover:bg-white/10 rounded text-zinc-500 hover:text-white transition-colors"
                                    title="Fullscreen"
                                >
                                    <RiFullscreenLine size={18} />
                                </button>
                            )}

                            {state === 'collapsed' && (
                                <button
                                    className="p-2 text-zinc-600 group-hover:text-white transition-colors"
                                    title="Expand"
                                >
                                    <RiExpandUpDownLine size={18} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* 2. EXPANDED CONTENT (Rendered but hidden if collapsed for smooth height anim) */}
                <div className={clsx(
                    "relative bg-black transition-all duration-300 ease-in-out",
                    state === 'collapsed' ? "max-h-0 opacity-0 pointer-events-none" : "max-h-[800px] opacity-100"
                )}>
                    <div className="p-5">
                        {children}
                    </div>

                    {/* Decorative Footer Line */}
                    <div className="h-1 w-full bg-zinc-900 relative overflow-hidden">
                        <div className="absolute inset-0 bg-zinc-800 w-1/3 animate-scan-fast" />
                    </div>
                </div>

                {/* Corner Accents (Cyberpunk Style) */}
                <div className={clsx("absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors", state === 'collapsed' ? "border-zinc-800 group-hover:border-zinc-600" : "border-cyan-500")} />
                <div className={clsx("absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors", state === 'collapsed' ? "border-zinc-800 group-hover:border-zinc-600" : "border-cyan-500")} />
            </motion.div>

            {/* 3. FULLSCREEN MODAL OVERLAY */}
            <AnimatePresence>
                {state === 'fullscreen' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 lg:p-10"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="w-full h-full max-w-7xl bg-black border border-zinc-800 relative flex flex-col shadow-2xl shadow-cyan-900/20"
                        >
                            {/* Modal Header */}
                            <div className="flex items-center justify-between p-6 border-b border-zinc-800 bg-zinc-900/30">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-white font-mono uppercase tracking-widest">{title}</h2>
                                        <p className="text-xs text-cyan-500 font-mono tracking-[0.2em]">// FULL_SYSTEM_ACCESS</p>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleFullscreen}
                                    className="flex items-center gap-2 px-4 py-2 border border-zinc-700 hover:bg-red-500/10 hover:border-red-500 hover:text-red-500 text-zinc-400 transition-all font-mono text-sm uppercase"
                                >
                                    <RiFullscreenExitLine size={18} />
                                    <span>Disconnect</span>
                                </button>
                            </div>

                            {/* Modal Content - Scrollable */}
                            <div className="flex-1 overflow-auto p-6 lg:p-10 relative">
                                {children}
                            </div>

                            {/* Decorative Borders */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500" />
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500" />
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
