import React, { useState, useMemo, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RiTerminalBoxLine, RiFullscreenLine, RiFullscreenExitLine, RiSubtractLine, RiExpandUpDownLine, RiCloseLine, RiCpuLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '../../contexts/ProgressProvider';
import { useNotes } from '../../contexts/NotesProvider';
import { getCourse } from '../../data/courses';
import clsx from 'clsx';

export default function CyberDeckWidget() {
    const { recentActivity } = useProgress();
    const { notes } = useNotes();
    const [isExpanded, setIsExpanded] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const scrollRef = useRef(null);

    // --- EFFECT: SCROLL TO END --- 
    useEffect(() => {
        if (isExpanded) {
            if (scrollRef.current) {
                setTimeout(() => {
                    scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
                }, 100);
            }
        }
    }, [isExpanded]);

    // --- EFFECT: BODY SCROLL LOCK ---
    useEffect(() => {
        if (isFullscreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isFullscreen]);

    const formatId = (id) => {
        if (!id) return 'Unknown Module';
        return String(id).split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // --- DATA PROCESSING (MEMOIZED) ---
    const { activityMap, totalEvents, maxStreak, velocity, consistency, profile, recommendation } = useMemo(() => {
        const map = {};
        const hourMap = new Array(24).fill(0);
        let total = 0;
        let firstDate = new Date();
        let lastDate = new Date(0);

        const processItem = (dateString, type, details = {}) => {
            const dateObj = new Date(dateString);
            if (isNaN(dateObj.getTime())) return;

            if (dateObj < firstDate) firstDate = dateObj;
            if (dateObj > lastDate) lastDate = dateObj;

            const date = dateObj.toDateString();

            if (!map[date]) map[date] = { count: 0, events: [] };
            map[date].count++;
            map[date].events.push({
                type,
                time: dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                timestamp: dateObj,
                ...details
            });

            hourMap[dateObj.getHours()]++;
            total++;
        };

        recentActivity?.forEach(item => {
            const courseId = item.courseId || item.course_id;
            const itemId = item.itemId || item.item_id;

            let title = 'Unknown Module';
            if (courseId) {
                const course = getCourse(courseId);
                if (course) {
                    title = course.title;
                    if (itemId && itemId !== courseId) {
                        title += ` · ${formatId(itemId)}`;
                    }
                } else {
                    title = formatId(courseId);
                }
            } else if (itemId) {
                title = formatId(itemId);
            }

            processItem(item.completed_at, 'COURSE', {
                title: title,
                id: item.id || item.item_id
            });
        });

        notes?.forEach(note => processItem(note.last_modified, 'NOTE', {
            title: note.title,
            id: note.id
        }));

        Object.values(map).forEach(day => {
            day.events.sort((a, b) => b.timestamp - a.timestamp);
        });

        const dates = Object.keys(map).sort((a, b) => new Date(a) - new Date(b));
        let maxStr = 0;
        let currentStr = 0;
        if (dates.length > 0) {
            currentStr = 1;
            maxStr = 1;
            for (let i = 1; i < dates.length; i++) {
                const prev = new Date(dates[i - 1]);
                const curr = new Date(dates[i]);
                const diff = (curr - prev) / (1000 * 60 * 60 * 24);
                if (diff === 1) {
                    currentStr++;
                    if (currentStr > maxStr) maxStr = currentStr;
                } else {
                    currentStr = 1;
                }
            }
        }

        const daysDiff = Math.max(1, Math.ceil((lastDate - firstDate) / (1000 * 60 * 60 * 24)));
        const activeDays = dates.length;
        const consistencyScore = Math.round((activeDays / Math.max(daysDiff, 1)) * 100);
        const velocityScore = (total / Math.max(activeDays, 1)).toFixed(1);

        let prof = "Steady learning pattern detected.";
        let rec = "Maintain consistent daily engagement.";

        if (consistencyScore > 70) {
            prof = "Highly disciplined learning routine.";
            rec = "Consider advanced modules.";
        } else if (velocityScore > 5) {
            prof = "High-velocity learning bursts.";
            rec = "Balance intensity with breaks.";
        }

        return {
            activityMap: map,
            totalEvents: total,
            maxStreak: maxStr,
            velocity: velocityScore,
            consistency: consistencyScore,
            profile: prof,
            recommendation: rec
        };
    }, [recentActivity, notes]);

    const getIntensity = (count) => {
        if (!count) return 0;
        if (count <= 2) return 1;
        if (count <= 4) return 2;
        if (count <= 6) return 3;
        return 4;
    };

    const generateDays = (daysCount) => {
        const days = [];
        for (let i = daysCount - 1; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const dateStr = d.toDateString();
            const dayData = activityMap[dateStr] || { count: 0, events: [] };
            days.push({
                date: dateStr,
                count: dayData.count,
                events: dayData.events,
                intensity: getIntensity(dayData.count)
            });
        }
        return days;
    };

    const MiniStat = (
        <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500 font-mono">LOG.VELOCITY</span>
            <div className="flex items-center gap-1.5 px-1.5 py-0.5 border border-cyan-500/30 rounded bg-cyan-500/10">
                <span className="text-xs font-bold text-cyan-400">{velocity}</span>
                <span className="text-[9px] text-cyan-600">e/d</span>
            </div>
        </div>
    );

    const renderContent = ({ isFullscreen }) => {
        if (!isFullscreen) {
            return (
                <div className="select-none space-y-3">
                    <style>{`
                        .heatmap-scroll::-webkit-scrollbar { height: 3px; }
                        .heatmap-scroll::-webkit-scrollbar-track { background: rgba(6, 182, 212, 0.2); }
                        .heatmap-scroll::-webkit-scrollbar-thumb { background: #06b6d4; border-radius: 1.5px; }
                        .heatmap-scroll::-webkit-scrollbar-thumb:hover { background: #22d3ee; }
                    `}</style>

                    {/* Compact Heatmap */}
                    <div className="relative border bg-black/40 rounded-sm shadow-inner p-2 border-white/5 group transition-all">
                        <div className="flex flex-col border-b border-white/5 gap-1 pb-2 mb-1">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse" />
                                    <span className="font-mono uppercase tracking-widest font-bold text-cyan-200 text-[9px]">
                                        TEMPORAL_GRID_365
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="heatmap-scroll w-full overflow-x-auto relative z-20 pb-2" ref={scrollRef}>
                            <div className="min-w-max">
                                <div className="grid grid-flow-col grid-rows-7 gap-[1px]">
                                    {generateDays(364).map((day, i) => {
                                        const colors = [
                                            'bg-zinc-900 border border-zinc-800',
                                            'bg-cyan-950/60 border border-cyan-900/60',
                                            'bg-cyan-800/80 border border-cyan-700/80',
                                            'bg-cyan-600 border border-cyan-500',
                                            'bg-cyan-400 border border-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.6)]'
                                        ];
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setSelectedDate(day.date === selectedDate ? null : day.date)}
                                                className={clsx(
                                                    `rounded-[0.5px] transition-all duration-300 relative flex-shrink-0 w-2 h-2`,
                                                    colors[day.intensity],
                                                    selectedDate === day.date ? 'ring-1 ring-white z-20 scale-150 bg-white border-transparent' : 'hover:scale-125 hover:z-10 hover:border-white/50'
                                                )}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compact Stats */}
                    <div className="p-3 bg-zinc-950/50 border-t border-white/5 rounded-b-sm relative transition-all">
                        <div className="flex items-center justify-between mb-2">
                            <p className="text-cyan-500/70 font-mono uppercase tracking-[0.2em] text-[8px]">SYSTEM_ONLINE</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {[{ l: 'Velocity', v: velocity }, { l: 'Streak', v: maxStreak + 'd' }, { l: 'Active', v: consistency + '%' }].map((s, i) => (
                                <div key={i} className="bg-zinc-900/50 border border-white/5 rounded p-2 text-center">
                                    <p className="text-zinc-500 uppercase tracking-widest text-[7px]">{s.l}</p>
                                    <div className="font-bold text-white font-mono text-xs">{s.v}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="w-full h-full grid grid-cols-[200px_1fr_250px] gap-6 relative select-none">
                {/* 1. DIAGNOSTIC PANEL (LEFT) */}
                <div className="flex flex-col gap-6 h-full overflow-hidden border-r border-zinc-800/50 pr-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-10 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                            <div>
                                <h3 className="text-xs font-black font-mono text-white tracking-widest uppercase">DIAGNOSTICS</h3>
                                <p className="text-[10px] text-cyan-500/60 font-mono uppercase">// CORE_METRICS</p>
                            </div>
                        </div>

                        {[
                            { label: 'VELOCITY', value: velocity, sub: 'events/day', color: 'text-cyan-400' },
                            { label: 'STREAK', value: maxStreak, sub: 'consecutive', color: 'text-white' },
                            { label: 'CONSISTENCY', value: consistency + '%', sub: 'active rate', color: 'text-cyan-400' },
                            { label: 'TOTAL_OPS', value: totalEvents, sub: 'registered', color: 'text-white' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-4 rounded-sm hover:border-cyan-500/30 transition-all group/stat">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[9px] font-mono text-zinc-500 group-hover/stat:text-cyan-500 transition-colors uppercase tracking-widest">{stat.label}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className={clsx("text-2xl font-black font-mono", stat.color)}>{stat.value}</span>
                                    <span className="text-[10px] text-zinc-600 font-mono uppercase">{stat.sub}</span>
                                </div>
                                <div className="mt-3 h-1 bg-zinc-950 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                        className="h-full bg-cyan-500/20"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                {/* 2. TEMPORAL MATRIX (CENTER) */}
                <div className="flex flex-col gap-6 h-full overflow-hidden px-2">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <RiCpuLine className="text-cyan-500" size={20} />
                            <div>
                                <h3 className="text-lg font-black font-mono text-white uppercase tracking-tighter">TEMPORAL_GRID_365</h3>
                                <p className="text-[10px] text-cyan-500/60 font-mono uppercase tracking-[0.2em]">// GLOBAL_ACTIVITY_MAP</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-1.5 px-3 bg-zinc-900/50 border border-zinc-800 rounded-sm">
                            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">LEGEND:</span>
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                    {[0, 1, 2, 3, 4].map(idx => (
                                        <div key={idx} className={clsx("w-3 h-3 rounded-[1px] border border-white/5",
                                            idx === 0 ? 'bg-zinc-900' :
                                                idx === 1 ? 'bg-cyan-950/60' :
                                                    idx === 2 ? 'bg-cyan-800/80' :
                                                        idx === 3 ? 'bg-cyan-600' : 'bg-cyan-400'
                                        )} />
                                    ))}
                                </div>
                                <span className="text-[9px] font-mono text-cyan-500 uppercase font-black">PEAK</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative border border-zinc-800 bg-black/50 p-6 rounded-sm overflow-hidden flex flex-col items-center justify-center">
                        {/* Scanning Effect Overlay */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(6,182,212,1)_1px,rgba(6,182,212,1)_2px)] bg-[length:100%_2px]" />
                        <div className="absolute inset-0 w-full h-[2px] bg-cyan-400/10 blur-[2px] z-10 animate-scan" style={{ animationDuration: '6s' }} />

                        {/* Top/Bottom Hardware Ticks */}
                        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                        <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

                        {/* Grid Matrix */}
                        <div className="relative z-20 w-full overflow-x-auto custom-scrollbar pb-4">
                            <div className="min-w-max mx-auto">
                                <div className="flex relative h-8 mb-3">
                                    {Array.from({ length: Math.ceil(generateDays(364).length / 7) }).map((_, weekIndex) => {
                                        const fullYearGrid = generateDays(364);
                                        const dayIndex = weekIndex * 7;
                                        if (dayIndex >= fullYearGrid.length) return <div key={weekIndex} className="w-[18px]" />;
                                        const date = new Date(fullYearGrid[dayIndex].date);
                                        const prevDate = dayIndex > 0 ? new Date(fullYearGrid[dayIndex - 1].date) : null;
                                        const isMonthStart = prevDate && date.getMonth() !== prevDate.getMonth();
                                        const monthName = date.toLocaleString('default', { month: 'short' });
                                        return (
                                            <div key={weekIndex} className="w-[18px] flex-shrink-0 font-mono relative uppercase tracking-tight text-zinc-600 text-[10px]">
                                                {isMonthStart && (
                                                    <motion.span
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="absolute left-0 font-black text-cyan-400"
                                                    >
                                                        {monthName}
                                                    </motion.span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="grid grid-flow-col grid-rows-7 gap-[2.5px]">
                                    {generateDays(364).map((day, i) => {
                                        const colors = [
                                            'bg-zinc-900/50 border border-zinc-800/50',
                                            'bg-cyan-950/40 border border-cyan-900/40',
                                            'bg-cyan-700/50 border border-cyan-600/50',
                                            'bg-cyan-600/80 border border-cyan-500/80 shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]',
                                            'bg-cyan-400 border border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4),inset_0_0_10px_rgba(255,255,255,0.2)]'
                                        ];
                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setSelectedDate(day.date === selectedDate ? null : day.date)}
                                                className={clsx(
                                                    `rounded-[1px] transition-all duration-300 relative flex-shrink-0 w-[15.5px] h-[15.5px]`,
                                                    colors[day.intensity],
                                                    selectedDate === day.date
                                                        ? 'ring-2 ring-white z-30 scale-125 bg-white border-transparent shadow-[0_0_20px_white]'
                                                        : 'hover:scale-110 hover:z-20 hover:border-white/50'
                                                )}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Selected Date Detail Overlay */}
                        <AnimatePresence>
                            {selectedDate && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="absolute bottom-6 left-6 right-6 p-6 bg-black/90 border border-cyan-500/30 backdrop-blur-xl rounded-sm z-40 flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-8">
                                        <div className="border-r border-zinc-800 pr-8">
                                            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-1">DATE_IDENTITY</p>
                                            <h4 className="text-2xl font-black text-white font-mono leading-none tracking-tighter">
                                                {selectedDate.split(' ').slice(1, 4).join(' ')}
                                            </h4>
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest mb-1">LOAD_MAGNITUDE</p>
                                            <div className="flex items-end gap-2">
                                                <span className="text-4xl font-black text-cyan-400 font-mono leading-none">{activityMap[selectedDate]?.count || 0}</span>
                                                <span className="text-xs text-cyan-600 font-mono uppercase font-bold mb-1">REGISTERED_OPERATIONS</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedDate(null)}
                                        className="p-3 border border-red-500/30 text-red-500 hover:bg-red-500/10 transition-all rounded-sm uppercase font-mono text-[10px] font-black tracking-widest flex items-center gap-2"
                                    >
                                        <RiCloseLine size={16} /> DISCARD_FOCUS
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* 3. EVENT FLUX (RIGHT) */}
                <div className="flex flex-col gap-4 h-full overflow-hidden border-l border-zinc-800/50 pl-6">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                            <RiTerminalBoxLine className={clsx("transition-colors", selectedDate ? "text-cyan-400" : "text-zinc-600")} size={18} />
                            <div>
                                <h3 className="text-xs font-black font-mono text-white tracking-widest uppercase">
                                    {selectedDate ? 'SELECTED_OPERATIONS' : 'EVENT_FLUX'}
                                </h3>
                                {selectedDate && (
                                    <p className="text-[10px] text-cyan-500/60 font-mono uppercase tracking-tighter italic">
                                        // SESSION_{selectedDate.split(' ').slice(1, 3).join('_').toUpperCase()}
                                    </p>
                                )}
                            </div>
                        </div>
                        {selectedDate && (
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_8px_cyan]" />
                        )}
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar pr-2 space-y-2">
                        {(() => {
                            const filteredEvents = selectedDate
                                ? (activityMap[selectedDate]?.events || [])
                                : Object.values(activityMap).flatMap(day => day.events).slice(0, 20);

                            if (filteredEvents.length === 0) {
                                return (
                                    <div className="h-full flex flex-col items-center justify-center opacity-20 text-center px-4">
                                        <RiTerminalBoxLine size={32} className="mb-2" />
                                        <p className="text-[10px] font-mono uppercase tracking-widest leading-relaxed">
                                            NO_OPERATIONS_REGISTERED<br />FOR_THIS_PERIOD
                                        </p>
                                    </div>
                                );
                            }

                            return filteredEvents.map((event, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group/event p-3 bg-zinc-950/80 border border-zinc-800/50 hover:border-cyan-500/40 hover:bg-zinc-900 transition-all relative overflow-hidden rounded-sm"
                                >
                                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-cyan-500 shadow-[0_0_10px_cyan] opacity-0 group-hover/event:opacity-100 transition-opacity" />
                                    <div className="flex justify-between items-start mb-1.5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-[9px] font-mono text-cyan-600 bg-cyan-950/30 px-1.5 py-0.5 rounded-sm font-black tracking-tighter tabular-nums uppercase">TIME_{event.time}</span>
                                            {selectedDate && <span className="text-[8px] font-mono text-zinc-600 uppercase">SYN_{idx.toString(16).padStart(2, '0')}</span>}
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-cyan-500" />
                                    </div>
                                    <p className="text-[11px] text-zinc-300 font-medium leading-normal line-clamp-2 group-hover/event:text-white transition-colors">
                                        {event.title || 'SYSTEM_SIGNAL_INTERCEPTED'}
                                    </p>
                                    <div className="mt-2 flex items-center justify-between text-[8px] font-mono text-zinc-600 uppercase tracking-tighter">
                                        <span>OP_STATE: VALIDATED</span>
                                        <span className="opacity-0 group-hover/event:opacity-100 transition-opacity">SRC: {event.id || 'N/A'}</span>
                                    </div>
                                </motion.div>
                            ));
                        })()}
                    </div>

                </div>
            </div>
        );
    };

    return (
        <>
            <motion.div
                layout
                className={clsx(
                    "relative transition-all duration-300 group overflow-hidden",
                    !isExpanded ? "bg-black" : "bg-zinc-950"
                )}
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)' }}
            >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-500/30 z-30" />

                {/* Hardware Brackets */}
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/20 z-30 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/20 z-30 pointer-events-none" />

                <div className="absolute inset-0 border border-zinc-800/50 pointer-events-none" />
                <div className={clsx("absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 z-30", isExpanded ? "bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" : "bg-zinc-800")} />

                <div onClick={() => setIsExpanded(!isExpanded)} className="w-full h-[72px] flex items-center justify-between px-4 relative z-20 cursor-pointer select-none">
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                        {/* Icon Tile - Cyber-Slat V3 */}
                        <div className={clsx("w-12 h-12 flex items-center justify-center transition-all duration-300 flex-shrink-0 relative overflow-hidden", !isExpanded ? "bg-zinc-900 border border-zinc-800" : "bg-cyan-950/20 border border-cyan-500/40 shadow-[inset_0_0_20px_rgba(6,182,212,0.15)]")}>
                            {/* Hardware Corner Ticks */}
                            <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-cyan-500/40" />
                            <div className="absolute bottom-0.5 right-0.5 w-1 h-1 bg-cyan-500/40" />

                            {/* Scanline Animation Overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(6,182,212,1)_1px,rgba(6,182,212,1)_2px)] bg-[length:100%_2px]" />
                            <div
                                className="absolute inset-0 w-full h-[2px] bg-cyan-400/20 blur-[1px] z-10"
                                style={{ animation: 'scan 4s linear infinite' }}
                            />

                            {/* Radial Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)]" />

                            <RiTerminalBoxLine size={24} className={clsx("transition-colors duration-300 relative z-20", isExpanded ? "text-cyan-400" : "text-zinc-500")} />
                        </div>
                        <AnimatePresence mode="wait">
                            {isExpanded ? (
                                <motion.div key="expanded" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex flex-col min-w-0">
                                    <h3 className="font-black font-mono text-[13px] uppercase text-white leading-none truncate">ACTIVITY_LOG</h3>
                                    <span className="text-[9px] font-mono uppercase text-cyan-500/60 mt-1 truncate">// TERMINAL_SYNC</span>
                                </motion.div>
                            ) : (
                                <motion.div key="collapsed" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex flex-col min-w-0">
                                    <h3 className="font-bold font-mono text-[10px] uppercase tracking-tighter text-white/50 leading-none truncate">ACTIVITY_LOG</h3>
                                    <div className="flex items-center gap-1.5 mt-1 border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md px-1.5 py-0.5 rounded-sm w-fit">
                                        <span className="text-[8px] font-mono text-cyan-500/70 uppercase font-bold">VELOCITY</span>
                                        <span className="text-[10px] font-black text-cyan-400 leading-none">{velocity}</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex items-center gap-3 relative z-10">
                        <div className="flex items-center gap-2">
                            {isExpanded && (
                                <button onClick={(e) => { e.stopPropagation(); setIsFullscreen(true); }} className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:bg-cyan-950/30 text-zinc-500 hover:text-cyan-400">
                                    <RiFullscreenLine size={16} />
                                </button>
                            )}
                            <button onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }} className="w-8 h-8 flex items-center justify-center bg-zinc-900 border border-zinc-800 hover:bg-cyan-950/30 text-zinc-500 hover:text-cyan-400">
                                {isExpanded ? <RiSubtractLine size={16} /> : <RiExpandUpDownLine size={16} />}
                            </button>
                        </div>
                    </div>

                    {!isExpanded && (
                        <div className="absolute top-2 right-2 flex items-center justify-center w-2 h-2">
                            <div className="w-1 h-1 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(6,182,212,1)]" />
                        </div>
                    )}
                </div>

                <div className={clsx("relative transition-all duration-300 ease-in-out overflow-hidden bg-zinc-950", !isExpanded ? "max-h-0 opacity-0" : "max-h-[800px] opacity-100")}>
                    <div className="min-h-[200px] border-t border-zinc-900 relative">
                        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_50%,rgba(6,182,212,1)_50%)] bg-[length:100%_4px]" />
                        <div className="p-6 relative z-10">{renderContent({ isFullscreen: false })}</div>
                    </div>
                </div>
            </motion.div>

            {isFullscreen && createPortal(
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-zinc-950/50 backdrop-blur-3xl flex items-center justify-center p-4 lg:p-10 isolate"
                        onClick={() => setIsFullscreen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="w-full h-full max-w-7xl bg-zinc-950/90 border border-white/5 relative flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden rounded-sm"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between px-8 py-5 border-b border-zinc-800 bg-zinc-950/80 shrink-0 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-24 h-[1px] bg-cyan-500 shadow-[0_0_10px_cyan]" />
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-sm">
                                        <RiTerminalBoxLine size={22} />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-xl font-black text-white font-mono uppercase tracking-[0.1em] leading-none">ACTIVITY_LOG</h2>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                                            <p className="text-[10px] text-cyan-500/60 font-mono tracking-widest uppercase italic">// FULL_SYSTEM_ACCESS</p>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsFullscreen(false)}
                                    className="flex items-center gap-2 px-6 py-2.5 bg-zinc-900 border border-zinc-700 hover:border-red-500/50 hover:bg-red-500/5 text-zinc-400 hover:text-red-500 transition-all font-mono text-xs font-black uppercase tracking-widest group rounded-sm"
                                >
                                    <RiCloseLine size={18} className="group-hover:rotate-90 transition-transform" />
                                    <span>DISCONNECT</span>
                                </button>
                            </div>
                            <div className="flex-1 overflow-auto p-6 lg:p-10 relative custom-scrollbar bg-black/40 shadow-inner">
                                {renderContent({ isFullscreen: true })}
                            </div>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
