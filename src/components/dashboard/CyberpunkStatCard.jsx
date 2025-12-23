import { motion, AnimatePresence } from 'framer-motion';
import { RiCpuLine, RiFocus2Line, RiFireLine, RiVipCrownFill, RiArrowRightSLine, RiCloseLine, RiFullscreenLine, RiFullscreenExitLine, RiMeteorLine, RiFlashlightFill } from 'react-icons/ri';
import clsx from 'clsx';
import { useRef, useEffect } from 'react';

// Rank System Definition
const RANKS = [
    {
        name: 'Script Kiddie',
        minLevel: 1,
        color: 'text-zinc-400',
        glow: 'shadow-zinc-500/20',
        bg: 'bg-zinc-500',
        access: 'LEVEL 1',
        desc: 'Restricted system access. Capable of basic syntax execution and local environment variables. Unauthorized access to high-level memory is prohibited.',
        perks: ['Basic Terminal', 'Read-Only Core']
    },
    {
        name: 'Byte Operator',
        minLevel: 5,
        color: 'text-cyan-400',
        glow: 'shadow-cyan-500/30',
        bg: 'bg-cyan-500',
        access: 'LEVEL 2',
        desc: 'Granted low-level script execution privileges. Can manipulate boolean logic flows and simple data structures. Network traversal is limited to safe zones.',
        perks: ['Script Execution', 'Loop Control']
    },
    {
        name: 'Netrunner',
        minLevel: 10,
        color: 'text-indigo-400',
        glow: 'shadow-indigo-500/40',
        bg: 'bg-indigo-500',
        access: 'LEVEL 3',
        desc: 'Full network traversal capabilities unlocked. Authorized to breach firewall layer 1. ICE Breaker v1.0 installed. Neural link stability at 85%.',
        perks: ['ICE Breaker v1', 'Network Map']
    },
    {
        name: 'SysAdmin',
        minLevel: 20,
        color: 'text-violet-400',
        glow: 'shadow-violet-500/40',
        bg: 'bg-violet-500',
        access: 'LEVEL 4',
        desc: 'Root access granted for local sub-systems. Monitor processes and allocate memory blocks dynamically. System integrity checks are now automated.',
        perks: ['Root Privileges', 'Process Kill']
    },
    {
        name: 'Cyber-Architect',
        minLevel: 30,
        color: 'text-fuchsia-400',
        glow: 'shadow-fuchsia-500/50',
        bg: 'bg-fuchsia-500',
        access: 'LEVEL 5',
        desc: 'Construct manipulation authorized. Can refactor core architecture and design complex algorithmic patterns. Neural interface beta access granted.',
        perks: ['Architect Mode', 'Pattern Design']
    },
    {
        name: 'Technomancer',
        minLevel: 50,
        color: 'text-orange-400',
        glow: 'shadow-orange-500/50',
        bg: 'bg-orange-500',
        access: 'LEVEL 6',
        desc: 'Reality bending algorithms initialized. Bandwidth limitations removed. Can rewrite compiled code in real-time. The machine speaks to you.',
        perks: ['Reality Bend', 'Infinite Bandwidth']
    },
    {
        name: 'Singularity',
        minLevel: 100,
        color: 'text-white',
        glow: 'shadow-white/60',
        bg: 'bg-white',
        access: 'OMNIPOTENT',
        desc: 'Biological and digital consciousness merged. Processing power is infinite. You are the Code. You are the System.',
        perks: ['System Override', 'Eternal Uptime']
    }
];

const getRank = (level) => {
    return RANKS.slice().reverse().find(r => level >= r.minLevel) || RANKS[0];
};

const StatItem = ({ label, value, icon: Icon, delay }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex flex-col items-center justify-center p-2 bg-white/5 rounded-lg border border-white/5"
    >
        <div className="flex items-center gap-2 mb-1 opacity-80">
            <Icon size={14} className="text-indigo-300" />
            <span className="text-[9px] uppercase tracking-wider text-indigo-200/70 font-medium">{label}</span>
        </div>
        <span className="text-lg font-bold text-white font-mono tracking-tight drop-shadow-md">{value}</span>
    </motion.div>
);

const RankListItem = ({ rank, currentLevel, isCurrent }) => {
    const isUnlocked = currentLevel >= rank.minLevel;

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={clsx(
                "relative p-3 rounded-lg border transition-all mb-2 overflow-hidden group shrink-0",
                isCurrent
                    ? "bg-white/10 border-indigo-500/50 shadow-[0_0_20px_rgba(79,70,229,0.2)]"
                    : isUnlocked
                        ? "bg-white/5 border-white/10 hover:bg-white/10"
                        : "bg-transparent border-white/5 opacity-40 hover:opacity-60"
            )}
        >
            {isCurrent && <div className="absolute inset-0 bg-indigo-500/10 animate-pulse-slow" />}

            <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-3">
                    <div className={clsx("w-8 h-8 rounded-md flex items-center justify-center font-mono font-bold text-xs border",
                        isUnlocked ? `${rank.color} border-current bg-white/5` : "text-zinc-600 border-zinc-800 bg-zinc-900"
                    )}>
                        {rank.minLevel}
                    </div>
                    <div>
                        <h4 className={clsx("text-xs font-bold uppercase tracking-wider mb-0.5", isUnlocked ? "text-white" : "text-zinc-500")}>
                            {rank.name}
                        </h4>
                        <span className="text-[9px] font-mono text-zinc-400 block">{rank.access}</span>
                    </div>
                </div>
                {isUnlocked ? <RiVipCrownFill className={rank.color} size={14} /> : <div className="text-zinc-700 text-[10px]">LOCKED</div>}
            </div>

            {/* Description only for Current or Next */}
            {(isCurrent || (isUnlocked && !isCurrent)) && (
                <div className="mt-2 pt-2 border-t border-white/10">
                    <p className="text-[9px] text-zinc-300 leading-relaxed font-light font-mono line-clamp-2">
                        {rank.desc}
                    </p>
                </div>
            )}
        </motion.div>
    );
}

export default function CyberpunkStatCard({ userStats, isExpanded, onToggle, layoutId }) {
    if (!userStats) return null;

    const { level, xp, streak, completedModules, levelProgress } = userStats;
    const currentRank = getRank(level);

    // Circular Progress Calculations
    // Reduced radius for expanded view to prevent overflow
    const radius = isExpanded ? 56 : 42;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (levelProgress / 100) * circumference;

    return (
        <motion.div
            layoutId={layoutId}
            layout
            initial={false}
            animate={{
                clipPath: isExpanded
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 20px 100%, 0 calc(100% - 20px))" // Tech Shape for Compact
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className={clsx(
                "relative w-full h-full bg-[#030303] overflow-hidden isolate shadow-2xl group border border-zinc-800",
                isExpanded ? "p-6 flex items-stretch gap-6" : "flex flex-col items-center justify-between p-1"
            )}
        >
            {/* Tech Decoration Layer */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Hazard Stripes (Subtle) */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] bg-[repeating-linear-gradient(45deg,white,white_1px,transparent_1px,transparent_10px)]" />
                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* Cyber Corners */}
                {!isExpanded && (
                    <>
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-zinc-700" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-zinc-700" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-zinc-700" />
                        {/* Cut corner visual fix */}
                        <div className="absolute bottom-[20px] left-0 w-2 h-0.5 bg-zinc-700" />
                        <div className="absolute bottom-0 left-[20px] w-0.5 h-2 bg-zinc-700" />
                    </>
                )}
            </div>

            {/* Expand/Collapse Trigger */}
            <button
                onClick={(e) => { e.stopPropagation(); onToggle(); }}
                className={clsx(
                    "absolute p-1.5 transition-all z-40 group/btn bg-black border border-zinc-800 hover:border-white/50 text-zinc-500 hover:text-white",
                    isExpanded ? "top-4 right-4 rounded-full" : "top-2 right-2 rounded-sm"
                )}
            >
                {isExpanded ? <RiFullscreenExitLine size={18} /> : <RiFullscreenLine size={14} />}
            </button>

            {/* Content Container */}
            <AnimatePresence mode="wait">
                {isExpanded ? (
                    /* EXPANDED VIEW - Keeping relatively clean for readability but improved */
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full z-10 relative"
                    >
                        {/* Left Column: Big Stats - Centered vertically */}
                        <div className="flex flex-col items-center justify-center h-full min-h-0 relative">
                            <motion.div layoutId="level-ring" className="relative w-40 h-40 flex items-center justify-center mb-6 shrink-0">
                                {/* Tech Rings */}
                                <div className="absolute inset-0 border border-zinc-800 rounded-full" />
                                <div className={clsx("absolute inset-[-10px] border border-dashed rounded-full animate-spin-slow opacity-30", currentRank.color.replace('text-', 'border-'))} style={{ animationDuration: '20s' }} />

                                <svg className="w-full h-full -rotate-90 transform drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                                    <circle cx="80" cy="80" r={radius} stroke="currentColor" strokeWidth="2" fill="transparent" className="text-zinc-900" />
                                    <circle cx="80" cy="80" r={radius} stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={2 * Math.PI * radius} strokeDashoffset={2 * Math.PI * radius - (levelProgress / 100) * (2 * Math.PI * radius)} strokeLinecap="round" className={clsx("transition-all duration-1000 ease-out", currentRank.color)} />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase mb-1">LVL_ID</span>
                                    <span className={clsx("text-6xl font-black font-mono leading-none tracking-tighter drop-shadow-xl", currentRank.color)}>{level}</span>
                                </div>
                            </motion.div>

                            <div className="text-center w-full">
                                <h2 className={clsx("text-2xl font-black uppercase tracking-[0.2em] mb-2 font-mono glitch-text", currentRank.color)}>
                                    {currentRank.name}
                                </h2>
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-4" />

                                <div className="grid grid-cols-3 gap-2 w-full">
                                    <StatItem label="DATA[XP]" value={xp?.toLocaleString()} icon={RiCpuLine} delay={0.2} />
                                    <StatItem label="SYNC[D]" value={`${streak}`} icon={RiMeteorLine} delay={0.3} />
                                    <StatItem label="CORE[N]" value={completedModules || 0} icon={RiFocus2Line} delay={0.4} />
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Rank Ladder */}
                        <div className="flex flex-col h-full min-h-0 bg-black rounded-sm border border-zinc-800 overflow-hidden relative">
                            {/* Scanning Line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-500/20 animate-scanline z-20 pointer-events-none" />

                            <h3 className="text-[10px] font-black font-mono text-zinc-400 uppercase tracking-widest px-4 py-3 flex items-center justify-between bg-zinc-900/50 border-b border-zinc-800 shrink-0">
                                <span>// ACCESS_LADDER</span>
                                <span className={clsx("w-2 h-2 rounded-full", currentRank.bg, "animate-pulse")} />
                            </h3>

                            <div className="overflow-y-auto p-2 flex-1 scrollbar-hide space-y-1 relative z-10">
                                {RANKS.map((rank) => (
                                    <RankListItem
                                        key={rank.name}
                                        rank={rank}
                                        currentLevel={level}
                                        isCurrent={currentRank.name === rank.name}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    /* COMPACT VIEW REDESIGN V5 (Extreme Cyberpunk) */
                    <motion.div
                        key="compact"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full flex flex-col relative z-20 p-4"
                        onClick={onToggle}
                    >
                        {/* Top: Header Bar */}
                        <div className="flex items-center justify-between mb-4 border-b border-dashed border-zinc-800 pb-2">
                            <div className="flex items-center gap-2">
                                <RiVipCrownFill size={12} className={currentRank.color} />
                                <span className={clsx("text-[9px] font-black font-mono uppercase tracking-widest", currentRank.color)}>
                                    {currentRank.name.split(' ')[0]}
                                </span>
                            </div>
                            <div className="flex gap-0.5">
                                {[...Array(3)].map((_, i) => <div key={i} className={clsx("w-3 h-1 rounded-sm", i === 0 ? currentRank.bg : "bg-zinc-800")} />)}
                            </div>
                        </div>

                        {/* Center: Tech Ring */}
                        <div className="flex-1 flex items-center justify-center relative my-2">
                            <motion.div layoutId="level-ring" className="relative w-24 h-24 flex items-center justify-center">
                                {/* CYBER BORDER ROTATING */}
                                <div className={clsx("absolute inset-[-12px] rounded-full border border-dashed border-opacity-40 animate-spin-slow", currentRank.color.replace('text-', 'border-'))} style={{ animationDuration: '8s' }} />
                                <div className={clsx("absolute inset-[-6px] rounded-full border-2 border-dotted border-opacity-60 animate-reverse-spin", currentRank.color.replace('text-', 'border-'))} style={{ animationDuration: '12s' }} />

                                {/* Target Crosshairs */}
                                <div className="absolute top-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-zinc-700" />
                                <div className="absolute bottom-0 left-1/2 w-0.5 h-2 -translate-x-1/2 bg-zinc-700" />
                                <div className="absolute left-0 top-1/2 h-0.5 w-2 -translate-y-1/2 bg-zinc-700" />
                                <div className="absolute right-0 top-1/2 h-0.5 w-2 -translate-y-1/2 bg-zinc-700" />

                                {/* Progress Arc */}
                                <svg className="w-full h-full -rotate-90 transform drop-shadow-[0_0_10px_currentColor]" style={{ color: currentRank.color }}>
                                    <circle cx="48" cy="48" r="40" stroke="#18181b" strokeWidth="4" fill="transparent" />
                                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={2 * Math.PI * 40} strokeDashoffset={2 * Math.PI * 40 - (levelProgress / 100) * (2 * Math.PI * 40)} strokeLinecap="round" className={clsx("transition-all duration-1000 ease-out", currentRank.color)} />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                                    <span className="text-[8px] text-zinc-600 font-mono font-bold tracking-widest">LVL</span>
                                    <span className="text-3xl font-black font-mono leading-none tracking-tighter text-white drop-shadow-md">{level}</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom: Data Block */}
                        <div className="grid grid-cols-3 gap-px bg-zinc-900 border border-zinc-800 p-1 rounded-sm mt-auto">
                            <div className="bg-black p-2 flex flex-col items-center justify-center">
                                <span className="text-[10px] font-mono text-white font-bold">{xp?.toLocaleString().slice(0, 3)}k</span>
                                <span className="text-[7px] text-zinc-600 font-mono tracking-wider">XP</span>
                            </div>
                            <div className="bg-black p-2 flex flex-col items-center justify-center">
                                <span className="text-[10px] font-mono text-white font-bold">{streak}D</span>
                                <span className="text-[7px] text-zinc-600 font-mono tracking-wider">SYNC</span>
                            </div>
                            <div className="bg-black p-2 flex flex-col items-center justify-center">
                                <span className="text-[10px] font-mono text-white font-bold">{completedModules}</span>
                                <span className="text-[7px] text-zinc-600 font-mono tracking-wider">CORE</span>
                            </div>
                        </div>

                        {/* Decorative Screw Heads */}
                        <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-zinc-800" />
                        <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-zinc-800" />
                        <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-zinc-800" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
