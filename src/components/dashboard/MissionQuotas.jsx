import React, { useState } from 'react';
import { RiCrosshair2Line, RiExpandUpDownLine, RiSubtractLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export default function MissionQuotas() {
    const [isExpanded, setIsExpanded] = useState(false);

    const goals = [
        { id: 1, label: 'Deployments', current: 2, target: 5, unit: 'Mods', color: 'text-emerald-400', accent: 'bg-emerald-500' },
        { id: 2, label: 'Focus Time', current: 3.5, target: 5, unit: 'Hrs', color: 'text-purple-400', accent: 'bg-purple-500' },
        { id: 3, label: 'Daily Streak', current: 1, target: 1, unit: 'Day', color: 'text-cyan-400', accent: 'bg-cyan-500' }
    ];

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
            {/* Top Edge Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-purple-500/30 z-30" />

            {/* Hardware Brackets */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500/20 z-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/20 z-30 pointer-events-none" />

            {/* Structural Border */}
            <div className="absolute inset-0 border border-zinc-800/50 pointer-events-none" />

            {/* Left Indicator - V3 Minimalist */}
            <div className={clsx(
                "absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 z-30",
                isExpanded ? "bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" : "bg-zinc-800"
            )} />

            {/* Header Section */}
            <div onClick={() => setIsExpanded(!isExpanded)} className="w-full h-[72px] flex items-center justify-between px-4 relative z-20 cursor-pointer select-none">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                    {/* Icon Tile - Cyber-Slat V3 */}
                    <div className={clsx("w-12 h-12 flex items-center justify-center transition-all duration-300 flex-shrink-0 relative overflow-hidden", !isExpanded ? "bg-zinc-900 border border-zinc-800 group-hover:border-purple-500/50" : "bg-purple-950/20 border border-purple-500/40 shadow-[inset_0_0_20px_rgba(168,85,247,0.15)]")}>
                        {/* Hardware Corner Ticks */}
                        <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-purple-500/40" />
                        <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-purple-500/40" />

                        {/* Scanline Animation Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(168,85,247,1)_1px,rgba(168,85,247,1)_2px)] bg-[length:100%_2px]" />
                        <div
                            className="absolute inset-0 w-full h-[2px] bg-purple-400/20 blur-[1px] z-10"
                            style={{ animation: 'scan 4s linear infinite' }}
                        />

                        {/* Radial Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]" />

                        <RiCrosshair2Line size={24} className={clsx("transition-colors duration-300 relative z-20", isExpanded ? "text-purple-400" : "text-zinc-500")} />
                    </div>
                    <AnimatePresence mode="wait">
                        {isExpanded ? (
                            <motion.div key="expanded" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex flex-col min-w-0">
                                <h3 className="font-black font-mono text-[13px] uppercase text-white leading-none truncate">MISSION_QUOTAS</h3>
                                <span className="text-[9px] font-mono uppercase text-purple-500/60 mt-1 truncate">// TARGET_SYNC</span>
                            </motion.div>
                        ) : (
                            <motion.div key="collapsed" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex flex-col min-w-0">
                                <h3 className="font-bold font-mono text-[10px] uppercase tracking-tighter text-white/50 leading-none truncate">MISSION_QUOTAS</h3>
                                <div className="flex items-center gap-1.5 mt-1 border border-purple-500/30 bg-purple-500/10 backdrop-blur-md px-1.5 py-0.5 rounded-sm w-fit">
                                    <span className="text-[8px] font-mono text-purple-500/70 uppercase font-bold">TARGETS</span>
                                    <span className="text-[10px] font-black text-purple-400 leading-none">3</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex items-center gap-3 relative z-10">
                    <button onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }} className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:bg-purple-950/30 text-zinc-500 hover:text-purple-400 transition-all">
                        {isExpanded ? <RiSubtractLine size={16} /> : <RiExpandUpDownLine size={16} />}
                    </button>
                </div>

                {!isExpanded && (
                    <div className="absolute top-2 right-2 flex items-center justify-center w-2 h-2">
                        <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(168,85,247,1)]" />
                    </div>
                )}
            </div>

            <div className={clsx("relative transition-all duration-300 ease-in-out overflow-hidden bg-zinc-950", !isExpanded ? "max-h-0 opacity-0" : "max-h-[800px] opacity-100")}>
                <div className="min-h-[200px] border-t border-zinc-900 relative">
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_50%,rgba(168,85,247,1)_50%)] bg-[length:100%_4px]" />
                    <div className="p-6 relative z-10">
                        <div className="space-y-5">
                            {goals.map(goal => {
                                const percentage = Math.min(100, (goal.current / goal.target) * 100);
                                return (
                                    <div key={goal.id} className="relative group/item">
                                        <div className="flex justify-between items-end mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-1 h-1 rounded-full bg-purple-500 shadow-[0_0_5px_currentColor]`} />
                                                <span className="text-zinc-400 text-[11px] font-mono uppercase font-bold tracking-widest group-hover/item:text-white transition-colors">{goal.label}</span>
                                            </div>
                                            <span className={`font-mono font-black text-xs ${goal.color}`}>
                                                {goal.current} <span className="text-zinc-600 text-[10px] font-normal">/ {goal.target} {goal.unit}</span>
                                            </span>
                                        </div>
                                        <div className="w-full h-2 bg-black border border-zinc-900 overflow-hidden relative rounded-sm p-[1px]">
                                            <motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ duration: 1, delay: 0.2 }} className={`h-full ${goal.accent} relative shadow-[0_0_10px_rgba(168,85,247,0.5)] rounded-[1px]`}>
                                                <div className="absolute top-0 right-0 h-full w-2 bg-white/50 animate-pulse" />
                                            </motion.div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-6 pt-4 border-t border-zinc-900 flex justify-between items-center text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                            <span>// PROTOCOL_CYCLE</span>
                            <span className="text-purple-400 animate-pulse">04d 12h 30m REMAINING</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Corner Accents */}
            <div className={clsx("absolute top-0 right-0 w-2 h-2 border-t border-r transition-colors", !isExpanded ? "border-zinc-800" : "border-purple-500")} />
            <div className={clsx("absolute bottom-0 left-0 w-2 h-2 border-b border-l transition-colors", !isExpanded ? "border-zinc-800" : "border-purple-500")} />
        </motion.div>
    );
}
