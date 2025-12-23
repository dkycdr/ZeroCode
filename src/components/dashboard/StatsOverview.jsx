import React, { useMemo } from 'react';
import { RiTimeLine, RiFireLine, RiTrophyLine, RiStackLine, RiArrowUpLine, RiLoader4Line } from 'react-icons/ri';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { LEVELS, getCoursesByLevel } from '../../data/courses';
import { useProgress } from '../../contexts/ProgressProvider';

export default function StatsOverview({ progress, stats }) {
    const { completedItems, completedCourses } = useProgress();
    const safeStats = stats || { streak: 0, focusTime: '0h 0m', modulesCleared: 0 };

    // --- ACCURATE DATA CALCULATION ---
    const moduleStats = useMemo(() => {
        let totalUnits = 0;
        let clearedUnits = 0;

        // Iterate all levels to get all courses
        const allCourses = Object.values(LEVELS).flatMap(level => getCoursesByLevel(level.id));

        allCourses.forEach(course => {
            if (course.units) {
                course.units.forEach(unit => {
                    totalUnits++;

                    // Check if unit is fully cleared
                    if (unit.items) {
                        const unitItemIds = unit.items.map(i => i.id);
                        const isUnitComplete = unitItemIds.every(id => completedItems.includes(id));
                        if (isUnitComplete) clearedUnits++;
                    } else if (unit.content) {
                        const unitItemIds = Object.keys(unit.content);
                        const isUnitComplete = unitItemIds.every(id => completedItems.includes(id));
                        if (isUnitComplete) clearedUnits++;
                    }
                });
            } else if (course.tasks) {
                totalUnits++;
                if (completedCourses.includes(course.id)) clearedUnits++;
            }
        });

        const percentage = totalUnits > 0 ? Math.round((clearedUnits / totalUnits) * 100) : 0;
        return { total: totalUnits, cleared: clearedUnits, percentage };
    }, [completedItems, completedCourses]);

    const statItems = [
        {
            label: 'COMPLETION',
            value: `${moduleStats.percentage}%`,
            subValue: 'SYSTEM INTEGRITY',
            icon: RiTrophyLine,
            color: 'text-white',
            accent: 'bg-zinc-800',
            hasBar: true
        },
        {
            label: 'MODULES CLEARED',
            value: `${moduleStats.cleared}/${moduleStats.total}`,
            subValue: 'ON TRACK',
            icon: RiStackLine,
            color: 'text-white',
            accent: 'bg-zinc-800',
            hasBar: false,
            isPositive: true
        },
        {
            label: 'NEURAL_LINK_UPTIME',
            value: `${safeStats.streak}`,
            unit: 'DAYS',
            subValue: 'STABLE',
            icon: RiFireLine,
            color: 'text-cyan-400',
            accent: 'bg-cyan-900/30',
            hasBar: true, // Pulse graph simulation
            isPulse: true
        },
        {
            label: 'TOTAL FOCUS',
            value: safeStats.focusTime.split('h')[0] + 'h',
            unit: safeStats.focusTime.split('h')[1] || '0m',
            subValue: 'ESTIMATED TIME',
            icon: RiTimeLine,
            color: 'text-white',
            accent: 'bg-zinc-800',
            hasBar: false,
            isPositive: true
        },
    ];

    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {statItems.map((item, index) => (
                <SquareStatCard key={index} item={item} index={index} />
            ))}
        </div>
    );
}

function SquareStatCard({ item, index }) {
    const Icon = item.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="aspect-square relative flex flex-col justify-between p-6 bg-black border border-zinc-800 hover:border-zinc-600 transition-colors group overflow-hidden"
        >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-600 group-hover:border-white transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-600 group-hover:border-white transition-colors" />

            {/* Header */}
            <div className="flex justify-between items-start z-10">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
                    [{item.label}]
                </span>
                <Icon size={16} className={clsx("transition-colors", item.isPulse ? "text-cyan-500" : "text-zinc-600 group-hover:text-zinc-400")} />
            </div>

            {/* Content */}
            <div className="z-10 mt-auto">
                <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl lg:text-5xl font-bold font-mono text-white tracking-tighter">
                        {item.value}
                    </span>
                    {item.unit && (
                        <span className="text-xs font-mono text-zinc-500 uppercase font-bold tracking-wider">
                            {item.unit}
                        </span>
                    )}
                </div>

                {/* Footer / Visual */}
                <div className="border-t border-zinc-900 pt-3 group-hover:border-zinc-800 transition-colors">
                    {item.isPositve ? (
                        <div className="flex items-center gap-2 text-[10px] text-green-500 font-mono uppercase tracking-wider">
                            <RiArrowUpLine />
                            <span>{item.subValue}</span>
                        </div>
                    ) : item.isPulse ? (
                        <div className="flex flex-col gap-1">
                            <span className="text-[9px] font-mono text-cyan-700 uppercase tracking-[0.2em]">// SYNC_DETECTED</span>
                            <div className="h-4 w-full flex items-end gap-0.5 opacity-50">
                                {[...Array(15)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-full bg-cyan-500"
                                        style={{
                                            height: `${20 + Math.random() * 80}%`,
                                            opacity: (i / 15)
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : item.hasBar ? (
                        <div className="flex gap-1 h-1.5">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className={`flex-1 rounded-sm ${i < 3 ? 'bg-white' : 'bg-zinc-900'}`} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-between items-center text-[9px] font-mono text-zinc-600 uppercase tracking-wider">
                            <div className="flex items-center gap-1 text-green-500">
                                <RiArrowUpLine size={10} />
                                <span>{item.subValue}</span>
                            </div>
                            <span>// LOG_0{index + 1}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
    );
}
