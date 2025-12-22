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
                borderRadius: isExpanded ? 16 : 24, // Slightly rounded corners even when expanded
            }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
            className={clsx(
                "relative w-full h-full bg-[#050505] overflow-hidden isolate shadow-2xl group",
                // Flex items stretch is critical for equal heights
                isExpanded ? "p-6 flex items-stretch gap-6 border border-white/10" : "flex flex-col items-center justify-center text-center p-6 border border-white/10"
            )}
        >
            {/* Holographic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-[#050505] to-purple-900/10 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />



            {/* Expand/Collapse Trigger */}
            <button
                onClick={(e) => { e.stopPropagation(); onToggle(); }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-40 group/btn"
            >
                {isExpanded ? <RiFullscreenExitLine size={18} /> : <RiFullscreenLine size={18} />}
            </button>

            {/* Content Container */}
            <AnimatePresence mode="wait">
                {isExpanded ? (
                    /* EXPANDED VIEW */
                    <motion.div
                        key="expanded"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        // Grid Layout: 2 Columns, strictly confined to height
                        className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-full z-10"
                    >
                        {/* Left Column: Big Stats - Centered vertically */}
                        <div className="flex flex-col items-center justify-center h-full min-h-0 relative">
                            {/* Decorative divider */}
                            <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

                            <motion.div layoutId="level-ring" className="relative w-36 h-36 flex items-center justify-center mb-4 shrink-0">
                                <div className="absolute inset-0 border border-white/5 rounded-full border-t-white/10 animate-spin-slow" />
                                <div className="absolute inset-2 border border-indigo-500/5 rounded-full border-b-indigo-500/20 animate-reverse-spin-slow" />

                                <svg className="w-full h-full -rotate-90 transform drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                                    <circle cx="72" cy="72" r={radius} stroke="currentColor" strokeWidth="3" fill="transparent" className="text-white/5" />
                                    <circle cx="72" cy="72" r={radius} stroke="currentColor" strokeWidth="3" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className={clsx("transition-all duration-1000 ease-out", currentRank.color)} />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-[9px] text-zinc-500 font-mono tracking-widest uppercase mb-0.5">Level</span>
                                    <span className={clsx("text-4xl font-bold font-mono leading-none", currentRank.color)}>{level}</span>
                                </div>
                            </motion.div>

                            <div className="text-center mb-6">
                                <h2 className={clsx("text-xl font-bold uppercase tracking-[0.2em] mb-1.5", currentRank.color)}>
                                    {currentRank.name}
                                </h2>
                                <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-white/5 border border-white/5">
                                    <span className={clsx("w-1 h-1 rounded-full animate-pulse", currentRank.bg)} />
                                    <span className="text-[9px] font-mono text-zinc-400">{currentRank.access} CLEARED</span>
                                </div>
                            </div>

                            {/* HUD Style Stats Grid */}
                            <div className="grid grid-cols-3 gap-2 w-full max-w-[90%]">
                                <StatItem label="Data Mined" value={xp?.toLocaleString()} icon={RiCpuLine} delay={0.2} />
                                <StatItem label="Neural Sync" value={`${streak}d`} icon={RiFlashlightFill} delay={0.3} />
                                <StatItem label="Core Saturation" value={completedModules || 0} icon={RiFocus2Line} delay={0.4} />
                            </div>
                        </div>

                        {/* Right Column: Rank Ladder */}
                        <div className="flex flex-col h-full min-h-0 bg-white/[0.02] rounded-xl border border-white/5 overflow-hidden">
                            <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest px-4 py-3 flex items-center gap-2 bg-[#080808] border-b border-white/5 shrink-0">
                                <RiArrowRightSLine className="text-indigo-500" />
                                Clearance Levels
                            </h3>

                            {/* Scrollable Container */}
                            <div className="overflow-y-auto p-2 flex-1 scrollbar-hide space-y-1">
                                {RANKS.map((rank) => (
                                    <RankListItem
                                        key={rank.name}
                                        rank={rank}
                                        currentLevel={level}
                                        isCurrent={currentRank.name === rank.name}
                                    />
                                ))}
                            </div>

                            {/* Decorative footer */}
                            <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 shrink-0" />
                        </div>
                    </motion.div>
                ) : (
                    /* COMPACT VIEW REDESIGN V4 (Clean Core) */
                    <motion.div
                        key="compact"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full h-full flex flex-col items-center justify-between py-8 px-6 cursor-pointer group relative"
                        onClick={onToggle}
                    >
                        {/* Top: Rank Badge - Centered */}
                        <div className="flex flex-col items-center gap-2 z-10">
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 box-border">
                                <RiVipCrownFill size={10} className={currentRank.color} />
                                <span className={clsx("text-[10px] font-bold uppercase tracking-[0.15em]", currentRank.color)}>{currentRank.name}</span>
                            </div>
                        </div>

                        {/* Center: Hero Ring - Simplified */}
                        <div className="relative flex-1 flex flex-col items-center justify-center min-h-[120px]">
                            <motion.div layoutId="level-ring" className="relative w-28 h-28 flex items-center justify-center">
                                {/* Base Ring */}
                                <div className="absolute inset-0 rounded-full border border-zinc-800" />

                                {/* Progress Arc */}
                                <svg className="w-full h-full -rotate-90 transform drop-shadow-[0_0_15px_rgba(99,102,241,0.15)]">
                                    <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-zinc-900" />
                                    <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="3" fill="transparent" strokeDasharray={2 * Math.PI * 48} strokeDashoffset={2 * Math.PI * 48 - (levelProgress / 100) * (2 * Math.PI * 48)} strokeLinecap="round" className={clsx("transition-all duration-1000 ease-out", currentRank.color)} />
                                </svg>

                                {/* Inner Text */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest mb-0.5">Level</span>
                                    <span className="text-3xl font-bold font-mono leading-none tracking-tighter text-white">{level}</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom: Clean Stats Row */}
                        <div className="w-full flex items-center justify-between px-2 mt-4">
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-bold text-white font-mono">{xp?.toLocaleString()}</span>
                                <span className="text-[8px] text-zinc-500 uppercase tracking-widest mt-0.5">XP</span>
                            </div>
                            <div className="w-px h-6 bg-zinc-800" />
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-bold text-white font-mono">{streak}d</span>
                                <span className="text-[8px] text-zinc-500 uppercase tracking-widest mt-0.5">Streak</span>
                            </div>
                            <div className="w-px h-6 bg-zinc-800" />
                            <div className="flex flex-col items-center">
                                <span className="text-xs font-bold text-white font-mono">{completedModules || '0'}</span>
                                <span className="text-[8px] text-zinc-500 uppercase tracking-widest mt-0.5">Core</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
