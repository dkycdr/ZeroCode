import React, { useMemo, useState } from 'react';
import { RiCpuLine, RiTimeLine, RiPulseLine, RiExpandUpDownLine, RiSubtractLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useProgress } from '../../contexts/ProgressProvider';

export default function ResourceMonitor() {
    // We can use real stats if available, otherwise mock for "System Resources" vibe
    const { userStats } = useProgress();
    const [isExpanded, setIsExpanded] = useState(false);
    const uptime = userStats?.streak || 0;

    // Use memo to avoid re-calculating on every render
    const metrics = useMemo(() => [
        {
            id: 'deployments',
            label: 'Deployments',
            current: userStats?.modulesCleared || 0,
            target: 123, // Total modules in system
            unit: 'Mods',
            color: 'bg-cyan-500',
            text: 'text-cyan-400',
            glow: 'shadow-[0_0_8px_rgba(6,182,212,0.6)]'
        },
        {
            id: 'focus_time',
            label: 'Cycle Time',
            current: userStats?.totalFocusMinutes ? Math.round(userStats.totalFocusMinutes / 60) : 0,
            target: 100, // Goal: 100 Hours
            unit: 'Hrs',
            color: 'bg-teal-500',
            text: 'text-teal-400',
            glow: 'shadow-[0_0_8px_rgba(20,184,166,0.6)]'
        },
        {
            id: 'uptime',
            label: 'Sys_Uptime',
            current: userStats?.streak || 0,
            target: 30, // Goal: 30 Day Streak
            unit: 'Day',
            color: 'bg-blue-500',
            text: 'text-blue-400',
            glow: 'shadow-[0_0_8px_rgba(59,130,246,0.6)]'
        }
    ], [userStats]);

    // Mini Stat View (visible when collapsed)
    const MiniStat = (
        <div className="flex items-center gap-3">
            <div className="flex flex-col items-end">
                <span className="text-xl font-bold font-mono text-cyan-400 leading-none">
                    {userStats?.streak || 0}
                </span>
                <span className="text-[9px] text-cyan-600 font-mono uppercase tracking-wider">
                    Uptime
                </span>
            </div>
            {/* Status Dot */}
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_4px_cyan] animate-pulse" />
        </div>
    );

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
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-500/30 z-30" />

            {/* Hardware Brackets */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/20 z-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/20 z-30 pointer-events-none" />

            {/* Structural Border */}
            <div className="absolute inset-0 border border-zinc-800/50 pointer-events-none" />

            {/* Left Indicator - V3 Minimalist */}
            <div className={clsx(
                "absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 z-30",
                isExpanded ? "bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" : "bg-zinc-800"
            )} />

            {/* Header Section */}
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full h-[72px] flex items-center justify-between px-4 relative z-20 cursor-pointer select-none"
            >
                <div className="flex items-center gap-4 min-w-0 flex-1">
                    {/* Icon Tile - Cyber-Slat V3 */}
                    <div
                        className={clsx(
                            "w-12 h-12 flex items-center justify-center transition-all duration-300 flex-shrink-0 relative overflow-hidden",
                            !isExpanded
                                ? "bg-zinc-900 border border-zinc-800 group-hover:border-cyan-500/50"
                                : "bg-cyan-950/20 border border-cyan-500/40 shadow-[inset_0_0_20px_rgba(6,182,212,0.15)]"
                        )}
                    >
                        {/* Hardware Corner Ticks */}
                        <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-cyan-500/40" />
                        <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-cyan-500/40" />

                        {/* Scanline Animation Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(6,182,212,1)_1px,rgba(6,182,212,1)_2px)] bg-[length:100%_2px]" />
                        <div
                            className="absolute inset-0 w-full h-[2px] bg-cyan-400/20 blur-[1px] z-10"
                            style={{ animation: 'scan 4s linear infinite' }}
                        />

                        {/* Radial Glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />

                        <RiCpuLine
                            size={24}
                            className={clsx(
                                "transition-colors duration-300 relative z-20",
                                !isExpanded ? "text-zinc-500 group-hover:text-cyan-400" : "text-cyan-400"
                            )}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        {isExpanded ? (
                            <motion.div key="expanded" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex flex-col min-w-0">
                                <h3 className="font-black font-mono text-[13px] uppercase text-white leading-none truncate">RESOURCE_MON</h3>
                                <span className="text-[9px] font-mono uppercase text-cyan-500/60 mt-1 truncate">// VITAL_SIGNS</span>
                            </motion.div>
                        ) : (
                            <motion.div key="collapsed" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex flex-col min-w-0">
                                <h3 className="font-bold font-mono text-[10px] uppercase tracking-tighter text-white/50 leading-none truncate">RESOURCE_MON</h3>
                                <div className="flex items-center gap-1.5 mt-1 border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md px-1.5 py-0.5 rounded-sm w-fit">
                                    <span className="text-[8px] font-mono text-cyan-500/70 uppercase font-bold">UPTIME</span>
                                    <span className="text-[10px] font-black text-cyan-400 leading-none">{uptime}</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex items-center gap-3 relative z-10">
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
                        className={clsx(
                            "group/btn relative w-8 h-8 flex items-center justify-center transition-all overflow-hidden focus:outline-none",
                            "bg-zinc-900 border border-zinc-800 hover:bg-cyan-950/30 hover:border-cyan-500/50"
                        )}
                    >
                        <span className={clsx("transition-all duration-300", isExpanded ? "text-cyan-400" : "text-zinc-500")}>
                            {isExpanded ? <RiSubtractLine size={16} /> : <RiExpandUpDownLine size={16} />}
                        </span>
                    </button>
                </div>

                {/* Status Dot - Absolute & Floating */}
                {!isExpanded && (
                    <div className="absolute top-2 right-2 flex items-center justify-center w-2 h-2">
                        <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(6,182,212,1)]" />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className={clsx(
                "relative transition-all duration-300 ease-in-out overflow-hidden bg-zinc-950",
                !isExpanded ? "max-h-0 opacity-0" : "max-h-[800px] opacity-100"
            )}>
                {/* Inner Content Border Frame */}
                <div className="min-h-[200px] border-t border-zinc-900 relative">
                    {/* Scanline Background for Content */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_50%,rgba(6,182,212,1)_50%)] bg-[length:100%_4px]" />

                    <div className="p-6">
                        <div className="flex items-center justify-between mb-6 pb-2 border-b border-dashed border-zinc-800">
                            <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">// CORE_METRICS</span>
                            <div className="flex items-center gap-2">
                                <RiPulseLine className="text-cyan-500 animate-pulse" size={12} />
                                <span className="text-[10px] text-cyan-500 font-mono uppercase tracking-widest">MONITORING</span>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {metrics.map((metric, i) => {
                                const percentage = Math.min(100, (metric.current / metric.target) * 100) || 0;
                                const segments = Array.from({ length: 30 }); // High density segments

                                return (
                                    <div key={metric.id} className="group/metric">
                                        <div className="flex justify-between items-end mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-1 h-1 rounded-full ${metric.color} shadow-[0_0_5px_currentColor]`} />
                                                <span className="text-[11px] font-mono uppercase text-zinc-400 group-hover/metric:text-white transition-colors tracking-widest">
                                                    {metric.label}
                                                </span>
                                            </div>
                                            <span className={`font-mono font-bold text-sm ${metric.text} tabular-nums tracking-wider`}>
                                                {metric.current}
                                                <span className="text-zinc-600 text-[10px] ml-1">/ {metric.target} {metric.unit.toUpperCase()}</span>
                                            </span>
                                        </div>

                                        {/* High Tech Segmented Bar */}
                                        <div className="h-2.5 flex gap-[2px] bg-black border border-zinc-900 p-[2px] rounded-sm">
                                            {segments.map((_, index) => {
                                                const isActive = (index / segments.length) * 100 < percentage;
                                                return (
                                                    <div
                                                        key={index}
                                                        className={`flex-1 rounded-[1px] transition-all duration-300 ${isActive
                                                            ? `${metric.color} ${metric.glow} opacity-100`
                                                            : 'bg-zinc-800/30'
                                                            }`}
                                                    />
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}
