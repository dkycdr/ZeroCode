import React, { useMemo, useState } from 'react';
import { RiTimeLine, RiFireLine, RiTrophyLine, RiStackLine } from 'react-icons/ri';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { courseContent } from '../../data/courses/index.js';
import { useProgress } from '../../contexts/ProgressProvider';
import FocusDetailModal from './FocusDetailModal';

export default function StatsOverview({ stats }) {
    const { completedItems, completedCourses, userStats } = useProgress();
    const safeStats = stats || { streak: 0, focusTime: '0h 0m', modulesCleared: 0, activityData: [] };
    const [isFocusModalOpen, setIsFocusModalOpen] = useState(false);

    // --- ACCURATE DATA CALCULATION ---
    const moduleStats = useMemo(() => {
        let totalUnits = 0;
        let clearedUnits = 0;

        const allCourses = Object.values(courseContent);

        allCourses.forEach(course => {
            if (course.units) {
                course.units.forEach(unit => {
                    totalUnits++;
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

    // Parse focus time
    const focusHours = parseInt(safeStats.focusTime?.split('h')[0]) || 0;
    const focusMinutes = parseInt(safeStats.focusTime?.split('h')[1]?.replace('m', '').trim()) || 0;
    const focusBreakdown = userStats?.focusBreakdown || { doc: 0, lab: 0, quiz: 0, project: 0 };

    return (
        <>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <CompletionCard percentage={moduleStats.percentage} />
                <ModulesCard cleared={moduleStats.cleared} total={moduleStats.total} />
                <StreakCard streak={safeStats.streak} activityData={safeStats.activityData} />
                <FocusCard hours={focusHours} minutes={focusMinutes} breakdown={focusBreakdown} onClick={() => setIsFocusModalOpen(true)} />
            </div>
            <FocusDetailModal isOpen={isFocusModalOpen} onClose={() => setIsFocusModalOpen(false)} />
        </>
    );
}

// ============================================
// CARD 1: COMPLETION - Cyberpunk Circular Ring
// ============================================
function CompletionCard({ percentage }) {
    const circumference = 2 * Math.PI * 42;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0 }}
            className="aspect-square relative flex flex-col p-5 overflow-hidden rounded-lg group"
            style={{
                background: 'linear-gradient(135deg, rgba(6,182,212,0.08) 0%, rgba(0,0,0,0.9) 50%, rgba(6,182,212,0.05) 100%)',
                border: '1px solid rgba(6,182,212,0.2)',
                boxShadow: '0 0 30px rgba(6,182,212,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                    linear-gradient(rgba(6,182,212,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(6,182,212,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
            }} />

            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
                    animate={{ y: ['-100%', '400%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Corner accents - HUD style */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-cyan-500/60" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-cyan-500/60" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-cyan-500/60" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-cyan-500/60" />

            {/* Header */}
            <div className="flex justify-between items-start z-10">
                <span className="text-[10px] font-mono text-cyan-400/80 uppercase tracking-widest">
                    [COMPLETION]
                </span>
                <RiTrophyLine size={16} className="text-cyan-500 animate-pulse" />
            </div>

            {/* Circular Progress Ring */}
            <div className="flex-1 flex items-center justify-center relative">
                {/* Outer glow ring */}
                <div className="absolute w-32 h-32 rounded-full" style={{
                    background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)'
                }} />

                <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle with glow */}
                    <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="rgba(6,182,212,0.15)"
                        strokeWidth="4"
                        fill="none"
                    />
                    {/* Tick marks */}
                    {[...Array(24)].map((_, i) => (
                        <line
                            key={i}
                            x1="50"
                            y1="4"
                            x2="50"
                            y2="8"
                            stroke="rgba(6,182,212,0.3)"
                            strokeWidth="1"
                            transform={`rotate(${i * 15} 50 50)`}
                        />
                    ))}
                    {/* Progress arc */}
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="url(#cyanGradient)"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        style={{ filter: 'drop-shadow(0 0 10px rgba(6,182,212,0.8))' }}
                    />
                    {/* Inner decorative circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="35"
                        stroke="rgba(6,182,212,0.1)"
                        strokeWidth="1"
                        fill="none"
                        strokeDasharray="4 4"
                    />
                    <defs>
                        <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="50%" stopColor="#22d3ee" />
                            <stop offset="100%" stopColor="#67e8f9" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Center display */}
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <motion.span
                        className="text-3xl font-black font-mono text-white tracking-tight"
                        style={{ textShadow: '0 0 20px rgba(6,182,212,0.5)' }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                    >
                        {percentage}%
                    </motion.span>
                </div>
            </div>

            {/* Footer */}
            <div className="text-[9px] font-mono text-cyan-500/60 uppercase tracking-[0.2em] text-center">
                ◈ SYSTEM_INTEGRITY ◈
            </div>
        </motion.div>
    );
}

// ============================================
// CARD 2: MODULES CLEARED - Segmented Progress
// ============================================
function ModulesCard({ cleared, total }) {
    const segments = 12;
    const filledSegments = total > 0 ? Math.round((cleared / total) * segments) : 0;
    const percentage = total > 0 ? Math.round((cleared / total) * 100) : 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="aspect-square relative flex flex-col p-5 overflow-hidden rounded-lg group"
            style={{
                background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(0,0,0,0.9) 50%, rgba(16,185,129,0.05) 100%)',
                border: '1px solid rgba(16,185,129,0.2)',
                boxShadow: '0 0 30px rgba(16,185,129,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
        >
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                    linear-gradient(rgba(16,185,129,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(16,185,129,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
            }} />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-emerald-500/60" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-emerald-500/60" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-emerald-500/60" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-emerald-500/60" />

            {/* Header */}
            <div className="flex justify-between items-start z-10">
                <span className="text-[10px] font-mono text-emerald-400/80 uppercase tracking-widest">
                    [MODULES_CLEARED]
                </span>
                <RiStackLine size={16} className="text-emerald-500" />
            </div>

            {/* Main value */}
            <div className="flex-1 flex flex-col items-center justify-center z-10">
                <div className="flex items-baseline gap-1">
                    <motion.span
                        className="text-4xl font-black font-mono text-white"
                        style={{ textShadow: '0 0 20px rgba(16,185,129,0.5)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        {cleared}
                    </motion.span>
                    <span className="text-xl font-mono text-emerald-500/50">/</span>
                    <span className="text-xl font-mono text-zinc-500">{total}</span>
                </div>

                {/* Segmented progress bar */}
                <div className="flex gap-1 mt-4 w-full max-w-[160px]">
                    {[...Array(segments)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 h-2 rounded-sm"
                            style={{
                                background: i < filledSegments
                                    ? 'linear-gradient(180deg, #10b981, #059669)'
                                    : 'rgba(39,39,42,0.5)',
                                boxShadow: i < filledSegments ? '0 0 10px rgba(16,185,129,0.5)' : 'none'
                            }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3 + i * 0.03 }}
                        />
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-[9px] font-mono uppercase tracking-wider z-10">
                <span className="text-emerald-400">▲ ON_TRACK</span>
                <span className="text-zinc-600">// {percentage}%</span>
            </div>
        </motion.div>
    );
}

// ============================================
// CARD 3: NEURAL LINK UPTIME - Streak Calendar
// ============================================
function StreakCard({ streak, activityData = [] }) {
    const last7Days = useMemo(() => {
        const days = [];
        const today = new Date();

        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];

            const hasActivity = activityData?.some(a => {
                const actDate = new Date(a.timestamp || a.date).toISOString().split('T')[0];
                return actDate === dateStr;
            }) || (streak > 0 && i < streak && i < 7);

            days.push({
                day: date.toLocaleDateString('en', { weekday: 'short' }).charAt(0),
                active: hasActivity
            });
        }
        return days;
    }, [activityData, streak]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="aspect-square relative flex flex-col p-5 overflow-hidden rounded-lg group"
            style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, rgba(0,0,0,0.9) 50%, rgba(59,130,246,0.05) 100%)',
                border: '1px solid rgba(59,130,246,0.2)',
                boxShadow: '0 0 30px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
        >
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                    linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
            }} />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-blue-500/60" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-blue-500/60" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-blue-500/60" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-blue-500/60" />

            {/* Header */}
            <div className="flex justify-between items-start z-10">
                <span className="text-[10px] font-mono text-blue-400/80 uppercase tracking-widest">
                    [NEURAL_LINK_UPTIME]
                </span>
                <RiFireLine size={16} className="text-blue-500 animate-pulse" />
            </div>

            {/* Main value */}
            <div className="flex-1 flex flex-col items-center justify-center z-10">
                <div className="flex items-baseline gap-2">
                    <motion.span
                        className="text-5xl font-black font-mono text-white"
                        style={{ textShadow: '0 0 25px rgba(59,130,246,0.6)' }}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                    >
                        {streak}
                    </motion.span>
                    <span className="text-sm font-mono text-blue-400/60 uppercase">days</span>
                </div>

                {/* Mini streak calendar */}
                <div className="flex gap-2 mt-4">
                    {last7Days.map((day, i) => (
                        <motion.div
                            key={i}
                            className="flex flex-col items-center gap-1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.05 }}
                        >
                            <div
                                className="w-5 h-5 rounded"
                                style={{
                                    background: day.active
                                        ? 'linear-gradient(135deg, #3b82f6, #60a5fa)'
                                        : 'rgba(39,39,42,0.5)',
                                    boxShadow: day.active ? '0 0 12px rgba(59,130,246,0.6)' : 'none'
                                }}
                            />
                            <span className="text-[8px] font-mono text-zinc-500">{day.day}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="text-[9px] font-mono text-blue-400/60 uppercase tracking-widest text-center z-10">
                // SYNC_ACTIVE
            </div>
        </motion.div>
    );
}

// ============================================
// CARD 4: TOTAL FOCUS - Multi-Segment Donut
// ============================================
function FocusCard({ hours, minutes, breakdown = { doc: 0, lab: 0, quiz: 0, project: 0 }, onClick }) {
    const totalMinutes = hours * 60 + minutes;
    const circumference = 2 * Math.PI * 38;

    // Calculate percentages for each segment
    const docPercent = totalMinutes > 0 ? (breakdown.doc / totalMinutes) * 100 : 0;
    const labPercent = totalMinutes > 0 ? (breakdown.lab / totalMinutes) * 100 : 0;
    const quizPercent = totalMinutes > 0 ? (breakdown.quiz / totalMinutes) * 100 : 0;

    // Calculate stroke offsets for stacked ring segments
    const docOffset = circumference - (docPercent / 100) * circumference;
    const labOffset = circumference - (labPercent / 100) * circumference;
    const quizOffset = circumference - (quizPercent / 100) * circumference;

    // Rotation for stacking
    const labRotation = (docPercent / 100) * 360;
    const quizRotation = ((docPercent + labPercent) / 100) * 360;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            onClick={onClick}
            className="aspect-square relative flex flex-col p-5 overflow-hidden rounded-lg group cursor-pointer hover:scale-[1.02] transition-transform"
            style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(0,0,0,0.9) 50%, rgba(245,158,11,0.05) 100%)',
                border: '1px solid rgba(245,158,11,0.2)',
                boxShadow: '0 0 30px rgba(245,158,11,0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
        >
            {/* Background grid */}
            <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                    linear-gradient(rgba(245,158,11,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(245,158,11,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
            }} />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-amber-500/60" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-amber-500/60" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-amber-500/60" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-amber-500/60" />

            {/* Header */}
            <div className="flex justify-between items-start z-10">
                <span className="text-[10px] font-mono text-amber-400/80 uppercase tracking-widest">
                    [TOTAL_FOCUS]
                </span>
                <RiTimeLine size={16} className="text-amber-500" />
            </div>

            {/* Multi-Segment Donut Chart */}
            <div className="flex-1 flex items-center justify-center relative">
                {/* Outer glow */}
                <div className="absolute w-28 h-28 rounded-full" style={{
                    background: 'radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)'
                }} />

                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="38"
                        stroke="rgba(245,158,11,0.15)"
                        strokeWidth="8"
                        fill="none"
                    />
                    {/* Tick marks */}
                    {[...Array(12)].map((_, i) => (
                        <line
                            key={i}
                            x1="50"
                            y1="8"
                            x2="50"
                            y2="14"
                            stroke="rgba(245,158,11,0.3)"
                            strokeWidth="2"
                            transform={`rotate(${i * 30} 50 50)`}
                        />
                    ))}

                    {/* DOC segment - Cyan */}
                    {docPercent > 0 && (
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="38"
                            stroke="#06b6d4"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset: docOffset }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            style={{ filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.6))' }}
                        />
                    )}

                    {/* LAB segment - Amber */}
                    {labPercent > 0 && (
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="38"
                            stroke="#f59e0b"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset: labOffset }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            style={{
                                filter: 'drop-shadow(0 0 8px rgba(245,158,11,0.6))',
                                transform: `rotate(${labRotation}deg)`,
                                transformOrigin: '50px 50px'
                            }}
                        />
                    )}

                    {/* QUIZ segment - Emerald */}
                    {quizPercent > 0 && (
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="38"
                            stroke="#10b981"
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            initial={{ strokeDashoffset: circumference }}
                            animate={{ strokeDashoffset: quizOffset }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                            style={{
                                filter: 'drop-shadow(0 0 8px rgba(16,185,129,0.6))',
                                transform: `rotate(${quizRotation}deg)`,
                                transformOrigin: '50px 50px'
                            }}
                        />
                    )}

                    {/* Inner circle */}
                    <circle
                        cx="50"
                        cy="50"
                        r="28"
                        stroke="rgba(245,158,11,0.1)"
                        strokeWidth="1"
                        fill="rgba(0,0,0,0.5)"
                    />
                </svg>

                {/* Center time display */}
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <motion.span
                        className="text-2xl font-black font-mono text-white"
                        style={{ textShadow: '0 0 15px rgba(245,158,11,0.5)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {hours}h
                    </motion.span>
                    <span className="text-xs font-mono text-amber-400/60">{minutes}m</span>
                </div>
            </div>

            {/* Legend with actual data */}
            <div className="flex justify-center gap-3 text-[8px] font-mono uppercase tracking-wider z-10">
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-cyan-500" style={{ boxShadow: '0 0 4px rgba(6,182,212,0.6)' }} />
                    <span className="text-cyan-400/70">doc</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-amber-500" style={{ boxShadow: '0 0 4px rgba(245,158,11,0.6)' }} />
                    <span className="text-amber-400/70">lab</span>
                </div>
                <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" style={{ boxShadow: '0 0 4px rgba(16,185,129,0.6)' }} />
                    <span className="text-emerald-400/70">quiz</span>
                </div>
            </div>
        </motion.div>
    );
}
