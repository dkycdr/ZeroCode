import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { RiFlashlightFill, RiNodeTree, RiVipCrownFill, RiCodeSSlashLine, RiTerminalBoxLine } from 'react-icons/ri';

const MOTIVATIONS = [
    "The code is yours to command.",
    "Bugs are just undocumented features.",
    "Compile your dreams into reality.",
    "Every line written is a step forward.",
    "Logic is the foundation of digital art."
];

import { useProgress } from '../../contexts/ProgressProvider';
import CyberpunkStatCard from './CyberpunkStatCard';

export default function WelcomeHero({ user, subscriptionTier }) {
    const navigate = useNavigate();
    const { userStats } = useProgress();
    const isFree = subscriptionTier === 'free';
    const [greeting, setGreeting] = useState('');
    const [tip, setTip] = useState('');
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');

        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        setTip(MOTIVATIONS[dayOfYear % MOTIVATIONS.length]);
    }, []);

    return (
        <div className="relative overflow-hidden bg-black border border-cyan-950/50 group isolate flex flex-col justify-center transition-all duration-500 shadow-2xl hover:border-cyan-900/70">

            {/* Dark Blue Cyberpunk Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: 'linear-gradient(rgba(6,182,212,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.4) 1px, transparent 1px)',
                    backgroundSize: '32px 32px'
                }} />

                {/* Dark Cyan Glow Orbs */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-950/40 rounded-full blur-[120px] group-hover:bg-cyan-900/50 transition-all duration-1000" />
                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-950/30 rounded-full blur-[120px]" />

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent pointer-events-none animate-scan" />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-500/20" />
                <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-cyan-500/20" />
                <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-cyan-500/20" />
                <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-cyan-500/20" />

                {/* Tech Lines */}
                <div className="absolute top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
                <div className="absolute bottom-16 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center p-4 sm:p-6">
                <div className="lg:col-span-2 flex flex-col justify-center">
                    {/* Status Badge */}
                    <div className="flex items-center gap-3 mb-3 flex-wrap scale-90 origin-left">
                        <div className={clsx(
                            "px-3 py-1.5 bg-cyan-950/30 border text-[10px] font-mono uppercase tracking-[0.2em] flex items-center gap-2 backdrop-blur-sm",
                            isFree
                                ? "border-cyan-900/40 text-cyan-600"
                                : "border-cyan-500/30 text-cyan-400"
                        )}>
                            <div className={clsx("w-1.5 h-1.5 rounded-full shadow-[0_0_6px_currentColor] animate-pulse", isFree ? "bg-cyan-600" : "bg-cyan-400")} />
                            {subscriptionTier.toUpperCase()}_ACCESS
                        </div>

                        <div className="h-px w-8 bg-cyan-900/30" />

                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-cyan-700 tracking-widest uppercase">SIGNAL:</span>
                            <div className="flex items-center gap-1">
                                {[...Array(3)].map((_, i) => (
                                    <div
                                        key={i}
                                        className={clsx(
                                            "w-1 h-3 transition-all",
                                            i < (userStats.streak > 0 ? 3 : 1) ? "bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" : "bg-cyan-950"
                                        )}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="h-px w-8 bg-cyan-900/30" />

                        <div className="flex items-center gap-2 px-2 py-1 bg-cyan-950/20 border border-cyan-900/30">
                            <RiTerminalBoxLine className="text-cyan-500/70" size={12} />
                            <span className="text-[10px] font-mono text-cyan-500/70 tracking-widest">
                                SYNC_{Math.min(100, userStats.streak * 20 || 45)}%
                            </span>
                        </div>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-black text-cyan-100 mb-3 tracking-tight uppercase leading-none">
                        {greeting},<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-blue-400">
                            {user?.name?.split(' ')[0] || 'OPERATIVE'}
                        </span>
                    </h1>

                    <div className="flex items-start gap-3 mb-5 max-w-lg border-l-2 border-cyan-500/40 pl-4 py-1.5 bg-cyan-950/10">
                        <RiCodeSSlashLine className="text-cyan-500/60 mt-0.5 flex-shrink-0" size={18} />
                        <div>
                            <p className="text-[9px] font-mono text-cyan-500/70 mb-0.5 uppercase tracking-[0.15em]">DAILY.DIRECTIVE</p>
                            <p className="text-sm text-cyan-200/90 font-medium">
                                "{tip}"
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <button
                            onClick={() => navigate('/specializations')}
                            className="group/btn relative px-5 py-2.5 bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-600 hover:from-cyan-500 hover:via-cyan-400 hover:to-cyan-500 text-black font-bold text-[10px] uppercase tracking-[0.1em] transition-all flex items-center gap-2 overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 border border-cyan-400/30"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                            <RiNodeTree size={14} className="relative z-10" />
                            <span className="relative z-10">SKILL.TREE</span>
                        </button>

                        <button
                            onClick={() => navigate('/dashboard')}
                            className="px-5 py-2.5 bg-cyan-950/30 hover:bg-cyan-900/40 text-cyan-300 hover:text-cyan-200 font-bold text-[10px] uppercase tracking-widest border border-cyan-800/50 hover:border-cyan-600/70 transition-all flex items-center gap-2"
                        >
                            <RiFlashlightFill size={14} />
                            <span>EXPLORE</span>
                        </button>

                        {isFree && (
                            <button
                                onClick={() => window.open('https://wa.me/6283875727384', '_blank')}
                                className="px-5 py-2.5 bg-gradient-to-r from-amber-950/40 to-amber-900/30 hover:from-amber-900/50 hover:to-amber-800/40 text-amber-400 hover:text-amber-300 font-bold text-[10px] uppercase tracking-widest border border-amber-700/50 hover:border-amber-500/70 transition-all flex items-center gap-2 shadow-lg shadow-amber-950/30"
                            >
                                <RiVipCrownFill size={14} />
                                <span>UNLOCK.PRIME</span>
                            </button>
                        )}
                    </div>
                </div>

                {/* Right Side - Gamification Hub */}
                <div className="hidden lg:flex justify-end relative h-full items-center">
                    <div className={clsx("w-full transition-all duration-300 transform hover:scale-105", expanded ? "opacity-0 pointer-events-none" : "opacity-100")}>
                        <CyberpunkStatCard
                            userStats={userStats}
                            isExpanded={false}
                            onToggle={() => setExpanded(true)}
                            layoutId="stat-card"
                        />
                    </div>
                </div>
            </div>

            {/* Expanded Overlay */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        className="absolute inset-0 z-50 bg-black/95 backdrop-blur-xl flex"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <CyberpunkStatCard
                            userStats={userStats}
                            isExpanded={true}
                            onToggle={() => setExpanded(false)}
                            layoutId="stat-card"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                @keyframes scan {
                    0%, 100% { transform: translateY(-100%); }
                    50% { transform: translateY(100%); }
                }
                .animate-scan {
                    animation: scan 10s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
