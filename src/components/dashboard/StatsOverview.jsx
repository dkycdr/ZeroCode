import { RiTimeLine, RiFireLine, RiTrophyLine, RiStackLine, RiArrowUpLine } from 'react-icons/ri';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function StatsOverview({ progress, stats }) {
    // Default stats if not provided yet
    const safeStats = stats || { streak: 0, focusTime: '0h 0m', modulesCleared: 0 };

    const statItems = [
        {
            label: 'Completion',
            value: `${progress.percentage}%`,
            subValue: 'Keep pushing',
            icon: RiTrophyLine,
            color: 'text-amber-300',
            glow: 'shadow-amber-500/20',
            hasBar: true
        },
        {
            label: 'Modules Cleared',
            value: `${progress.completed}/${progress.total}`,
            subValue: 'On track',
            icon: RiStackLine,
            color: 'text-indigo-300',
            glow: 'shadow-indigo-500/20',
            hasBar: false
        },
        {
            label: 'Active Streak',
            value: `${safeStats.streak} Days`,
            subValue: safeStats.streak > 0 ? 'You are on fire!' : 'Start today!',
            icon: RiFireLine,
            color: 'text-orange-300',
            glow: 'shadow-orange-500/20',
            hasBar: false
        },
        {
            label: 'Total Focus',
            value: safeStats.focusTime,
            subValue: 'Estimated time',
            icon: RiTimeLine,
            color: 'text-emerald-300',
            glow: 'shadow-emerald-500/20',
            hasBar: false
        },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {statItems.map((stat, index) => {
                const Icon = stat.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative p-6 rounded-2xl bg-[#09090b] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                    >
                        {/* Hover Gradient Bloom */}
                        <div className={clsx("absolute -right-10 -top-10 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none", stat.color.replace('text-', 'bg-'))} />

                        <div className="flex items-start justify-between mb-4 relative z-10">
                            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</span>
                            <div className={clsx("p-2 rounded-lg bg-white/5 transition-colors", stat.color)}>
                                <Icon size={16} />
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-3xl font-bold text-white tracking-tight">{stat.value}</span>
                            </div>

                            {stat.hasBar ? (
                                <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                    <div className={clsx("h-full rounded-full transition-all duration-1000", stat.color.replace('text-', 'bg-'))} style={{ width: stat.value }} />
                                </div>
                            ) : (
                                <div className="flex items-center gap-1 text-[10px] text-zinc-500 font-mono">
                                    <RiArrowUpLine className={clsx(safeStats.streak > 0 || stat.label !== 'Active Streak' ? "text-green-500" : "text-zinc-600")} />
                                    <span>{stat.subValue}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
