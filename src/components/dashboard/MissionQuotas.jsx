import React from 'react';
import { RiCrosshair2Line, RiCheckDoubleLine, RiTimeLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

export default function MissionQuotas() {
    const goals = [
        { id: 1, label: 'Deployments', current: 2, target: 5, unit: 'Mods', color: 'text-emerald-400', accent: 'bg-emerald-500' },
        { id: 2, label: 'Focus Time', current: 3.5, target: 5, unit: 'Hrs', color: 'text-purple-400', accent: 'bg-purple-500' },
        { id: 3, label: 'Daily Streak', current: 1, target: 1, unit: 'Day', color: 'text-cyan-400', accent: 'bg-cyan-500' }
    ];

    return (
        <div className="bg-black border border-zinc-800 p-6 relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
                <RiCrosshair2Line className="text-zinc-500" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-zinc-400">Mission_Quotas // Weekly_Targets</span>
            </div>

            <div className="space-y-6">
                {goals.map(goal => {
                    const percentage = Math.min(100, (goal.current / goal.target) * 100);
                    return (
                        <div key={goal.id} className="relative group">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-zinc-400 text-xs font-mono uppercase font-bold">{goal.label}</span>
                                <span className={`font-mono font-black text-sm ${goal.color}`}>
                                    {goal.current} <span className="text-zinc-600">/ {goal.target} {goal.unit}</span>
                                </span>
                            </div>

                            {/* Progress Rail */}
                            <div className="w-full h-2 bg-zinc-900 overflow-hidden relative">
                                {/* Grid lines on rail */}
                                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_19%,#000_20%)] bg-[size:20%_100%] opacity-50 z-10" />

                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${percentage}%` }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className={`h-full ${goal.accent} relative`}
                                >
                                    <div className="absolute top-0 right-0 h-full w-2 bg-white/50 animate-pulse" />
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-900 text-center">
                <p className="text-[9px] text-zinc-600 uppercase tracking-widest animate-pulse">
                    Reset in: 04d 12h 30m
                </p>
            </div>
        </div>
    );
}
