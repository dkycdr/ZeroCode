import { motion, AnimatePresence } from 'framer-motion';
import { RiCpuLine, RiTerminalBoxLine, RiCheckDoubleFill, RiArrowRightLine, RiDatabase2Line } from 'react-icons/ri';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

// Tech-focused industrial components
const TechBorder = ({ children }) => (
    <div className="relative border border-indigo-900/50 bg-[#050505]/95 p-1 rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/10">
        {/* Corner Brackets - Rounded */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-indigo-500 rounded-tl-3xl opacity-80" />
        <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-indigo-500 rounded-tr-3xl opacity-80" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-indigo-500 rounded-bl-3xl opacity-80" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-indigo-500 rounded-br-3xl opacity-80" />

        {/* Scanlines Background - Adjusted to Purple/Indigo */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,25,23,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(79,70,229,0.06),rgba(124,58,237,0.02),rgba(99,102,241,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20" />

        <div className="relative z-10 p-8">
            {children}
        </div>
    </div>
);

const DataRow = ({ label, value, delay }) => (
    <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay, type: "tween" }}
        className="flex items-center justify-between border-b border-indigo-900/30 py-2 font-mono text-sm"
    >
        <span className="text-indigo-700 uppercase tracking-wider">{label}</span>
        <span className="text-indigo-300 font-bold">{value}</span>
    </motion.div>
);

const LevelProgressBar = ({ prev, current, nextLevelXp, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className="mt-6 mb-2"
    >
        <div className="flex justify-between text-xs font-mono mb-2">
            <span className="text-indigo-400">LEVEL PROGRESS</span>
            <span className="text-white font-bold">{current}%</span>
        </div>

        <div className="relative h-2 bg-indigo-950/50 rounded-full overflow-hidden mb-2">
            {/* Background Track */}
            <div className="absolute inset-0 bg-indigo-950/30" />

            {/* Base Progress (Previous) */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${prev}%` }}
                transition={{ duration: 0.8, delay: delay + 0.2, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-indigo-700"
            />

            {/* Gained Progress (Highlight) */}
            <motion.div
                initial={{ width: 0, left: 0 }}
                animate={{
                    width: `${Math.max(0, current - prev)}%`,
                    left: `${prev}%`
                }}
                transition={{ duration: 0.5, delay: delay + 0.6 }}
                className="absolute top-0 h-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.5)]"
            />
        </div>

        <div className="text-right text-[10px] text-indigo-500 font-mono">
            {nextLevelXp} XP TO NEXT LEVEL
        </div>
    </motion.div>
);

export default function RewardOverlay({ reward, onClose }) {
    if (!reward) return null;

    const { xp, levelUp, newLevel, replay, prevProgress = 0, currentProgress = 0, xpToNextLevel = 1000 } = reward;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 font-mono"
            >
                <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.05] pointer-events-none" />

                <motion.div
                    initial={{ scale: 0.9, opacity: 0, filter: 'blur(10px)' }}
                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-sm"
                >
                    <TechBorder>
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-6 border-b border-indigo-500/20 pb-4">
                            <div className="w-10 h-10 bg-indigo-950 border border-indigo-700 flex items-center justify-center text-indigo-400">
                                {levelUp ? <RiCpuLine size={20} /> : <RiTerminalBoxLine size={20} />}
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-white uppercase tracking-widest leading-none">
                                    {levelUp ? "SYSTEM UPGRADE" : "TASK COMPLETE"}
                                </h2>
                                <p className="text-xs text-indigo-600 mt-1">DATA_UPLINK_ESTABLISHED::200_OK</p>
                            </div>
                        </div>

                        {/* Data Grid */}
                        <div className="space-y-1 mb-2">
                            <DataRow label="STATUS" value={replay ? "REVISITED" : "SUCCESS"} delay={0.1} />
                            <DataRow label="XP GAINED" value={`+${xp}`} delay={0.2} />
                            {levelUp && (
                                <DataRow label="NEW LEVEL" value={`LVL ${newLevel}`} delay={0.3} />
                            )}
                        </div>

                        {/* Progress Bar */}
                        <LevelProgressBar
                            prev={prevProgress}
                            current={currentProgress}
                            nextLevelXp={xpToNextLevel}
                            delay={0.4}
                        />

                        {/* Visual Message */}

                        {/* Visual Message */}
                        <div className="bg-indigo-950/30 border border-indigo-900/50 p-4 mb-6 text-xs text-indigo-400/80 leading-relaxed uppercase">
                            {replay
                                ? "Running redundant cycle. Knowledge verification complete. No anomalies detected."
                                : "New neural pathways constructed. Efficiency increased. Ready for next sequence."}
                        </div>

                        {/* Action */}
                        <motion.button
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            onClick={onClose}
                            className="group w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-4 flex items-center justify-between transition-colors mt-2 shadow-[0_0_20px_rgba(79,70,229,0.3)]"
                        >
                            <span className="uppercase tracking-widest">
                                {levelUp ? "INITIALIZE UPGRADE" : "PROCEED"}
                            </span>
                            <div className="bg-white/10 p-1 group-hover:translate-x-1 transition-transform">
                                <RiArrowRightLine />
                            </div>
                        </motion.button>
                    </TechBorder>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
