import React, { useMemo } from 'react';
import { RiCpuLine, RiTimeLine, RiPulseLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
import SidebarWidgetFrame from './SidebarWidgetFrame';
import { useProgress } from '../../contexts/ProgressProvider';

export default function ResourceMonitor() {
    // We can use real stats if available, otherwise mock for "System Resources" vibe
    const { userStats } = useProgress();

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
        <SidebarWidgetFrame
            title="Resource_Monitor"
            icon={RiCpuLine}
            subtitle="System_Vitality"
            miniStat={MiniStat}
        >
            {/* Expanded Content */}
            <div className="space-y-6">
                {/* Header Info */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                        // ALL SYSTEMS NOMINAL
                    </span>
                    <div className="flex items-center gap-2 text-[10px] text-green-500 font-mono">
                        <RiPulseLine size={12} />
                        <span>LIVE_FEED</span>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="space-y-5">
                    {metrics.map((metric, i) => {
                        const percentage = Math.min(100, (metric.current / metric.target) * 100) || 0;
                        const segments = Array.from({ length: 24 });

                        return (
                            <div key={metric.id} className="relative group/metric">
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-[10px] font-mono uppercase text-zinc-400 group-hover/metric:text-white transition-colors tracking-wide">
                                        {metric.label}
                                    </span>
                                    <span className={`font-mono font-bold text-xs ${metric.text} tabular-nums`}>
                                        {metric.current}
                                        <span className="text-zinc-600 text-[10px] ml-0.5">/{metric.target} {metric.unit}</span>
                                    </span>
                                </div>

                                {/* Segmented Bar */}
                                <div className="h-2 flex gap-0.5 bg-zinc-900/50 p-0.5 rounded-sm">
                                    {segments.map((_, index) => {
                                        const isActive = (index / segments.length) * 100 < percentage;
                                        return (
                                            <div
                                                key={index}
                                                className={`flex-1 rounded-[1px] transition-all duration-500 ${isActive
                                                        ? `${metric.color} ${metric.glow} opacity-100`
                                                        : 'bg-zinc-800 opacity-20'
                                                    }`}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Extra detail for fullscreen only? Or just bottom decoration */}
                <div className="mt-4 pt-4 border-t border-zinc-900 grid grid-cols-2 gap-4">
                    <div className="bg-zinc-900/30 p-2 rounded border border-zinc-800/50">
                        <span className="block text-[9px] text-zinc-600 font-mono uppercase">CPU_LOAD</span>
                        <span className="block text-xs font-mono text-zinc-400">12%</span>
                    </div>
                    <div className="bg-zinc-900/30 p-2 rounded border border-zinc-800/50">
                        <span className="block text-[9px] text-zinc-600 font-mono uppercase">RAM_USAGE</span>
                        <span className="block text-xs font-mono text-zinc-400">348MB</span>
                    </div>
                </div>
            </div>
        </SidebarWidgetFrame>
    );
}
