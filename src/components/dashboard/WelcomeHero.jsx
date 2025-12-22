import { useState, useEffect } from 'react';
import { RiFlashlightFill, RiArrowRightLine, RiVipCrownFill, RiMeteorLine, RiDoubleQuotesL } from 'react-icons/ri';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const MOTIVATIONS = [
    "Consistency is the code to success.",
    "Every bug is just an undocumented feature waiting to be fixed.",
    "Your potential is infinite, like a while(true) loop.",
    "Small commits leads to big changes.",
    "Debug with patience, code with passion."
];

export default function WelcomeHero({ user, subscriptionTier }) {
    const navigate = useNavigate();
    const isFree = subscriptionTier === 'free';
    const [greeting, setGreeting] = useState('');
    const [tip, setTip] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) setGreeting('Good Morning');
        else if (hour < 18) setGreeting('Good Afternoon');
        else setGreeting('Good Evening');

        // Random tip based on day
        const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
        setTip(MOTIVATIONS[dayOfYear % MOTIVATIONS.length]);
    }, []);

    return (
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-10 mb-10 group isolate">
            {/* Elegant Background - Dark Gradient Mesh */}
            <div className="absolute inset-0 bg-[#09090b] border border-white/5 rounded-3xl" />

            {/* Subtle animated gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -mr-20 -mt-20 pointer-events-none mix-blend-screen opacity-50 animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-[80px] -ml-20 -mb-20 pointer-events-none mix-blend-screen opacity-30" />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-3 mb-5">
                        <div className={clsx(
                            "px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-2 border backdrop-blur-md transition-colors",
                            isFree
                                ? "bg-zinc-800/50 text-zinc-400 border-zinc-700/50"
                                : "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                        )}>
                            <div className={clsx("w-1.5 h-1.5 rounded-full animate-pulse", isFree ? "bg-zinc-500" : "bg-indigo-400")} />
                            {subscriptionTier} Tier
                        </div>
                        <div className="h-4 w-px bg-white/10" />
                        <button
                            onClick={() => navigate('/updates')}
                            className="text-[10px] font-mono text-zinc-500 hover:text-white transition-colors"
                        >
                            SYS_VER_2.5.0
                        </button>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight leading-tight">
                        {greeting}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-indigo-400">
                            {user?.name?.split(' ')[0] || 'Operative'}
                        </span>
                    </h1>

                    <div className="flex items-start gap-3 mb-8 max-w-lg">
                        <RiDoubleQuotesL className="text-zinc-600 shrink-0 mt-1" />
                        <p className="text-base text-zinc-400 font-light italic opacity-80">
                            {tip}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <button
                            onClick={() => navigate('/dashboard')}
                            className="group relative px-6 py-3 rounded-2xl bg-white text-black font-bold text-xs tracking-wide hover:bg-zinc-100 transition-all flex items-center gap-2.5 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <RiFlashlightFill size={16} />
                                Resume Operation
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        </button>

                        {isFree && (
                            <button
                                onClick={() => window.open('https://wa.me/6283875727384', '_blank')}
                                className="px-6 py-3 rounded-2xl bg-white/5 text-white font-medium text-xs border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2 backdrop-blur-sm"
                            >
                                <RiVipCrownFill className="text-amber-400" size={14} />
                                <span>Unlock Full Access</span>
                            </button>
                        )}
                    </div>
                </div>

                {/* Right Side - Decorative */}
                <div className="hidden lg:flex justify-end relative">
                    <div className="w-28 h-28 rounded-full border border-white/5 flex items-center justify-center relative">
                        <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-spin-slower border-t-transparent border-l-transparent" />
                        <div className="absolute inset-2 border border-purple-500/20 rounded-full animate-reverse-spin border-b-transparent border-r-transparent" />
                        <RiMeteorLine size={24} className="text-indigo-400 opacity-80" />
                    </div>
                </div>
            </div>
        </div>
    );
}
