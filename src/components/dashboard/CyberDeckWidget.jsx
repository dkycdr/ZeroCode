import React, { useState, useMemo, useRef, useEffect } from 'react';
import { RiTerminalBoxLine, RiExpandDiagonalLine, RiCloseLine, RiBarChartBoxLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '../../contexts/ProgressProvider';
import { useNotes } from '../../contexts/NotesProvider';
import { getCourse } from '../../data/courses';
import SidebarWidgetFrame from './SidebarWidgetFrame';
import clsx from 'clsx';

export default function CyberDeckWidget() {
    const { recentActivity } = useProgress();
    const { notes } = useNotes();
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const scrollRef = useRef(null);

    // --- EFFECT: SCROLL TO END --- 
    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
            if (scrollRef.current) {
                setTimeout(() => {
                    scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
                }, 100);
            }
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => document.body.style.overflow = 'unset';
    }, [isExpanded]);

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

    const miniGrid = generateDays(35);
    const fullYearGrid = generateDays(364);

    const MiniStat = (
        <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500 font-mono">LOG.VELOCITY</span>
            <div className="flex items-center gap-1.5 px-1.5 py-0.5 border border-cyan-500/30 rounded bg-cyan-500/10">
                <span className="text-xs font-bold text-cyan-400">{velocity}</span>
                <span className="text-[9px] text-cyan-600">e/d</span>
            </div>
        </div>
    );

    return (
        <>
            <SidebarWidgetFrame
                title="Activity_Log"
                icon={RiTerminalBoxLine}
                subtitle="Event_Stream"
                miniStat={MiniStat}
                onFullscreen={() => setIsExpanded(true)}
            >
                {/* --- EXPANDED CONTENT --- */}
                <div>
                    <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-4">
                        <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
                            // LIVE HEATMAP
                        </span>
                        <div className="flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_4px_rgba(6,182,212,0.8)] animate-pulse" />
                            <span className="text-[9px] font-mono text-cyan-700">ONLINE</span>
                        </div>
                    </div>

                    {/* Mini Heatmap */}
                    <div className="grid grid-cols-7 gap-1 mb-4">
                        {miniGrid.map((day, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.01 }}
                                className={clsx(
                                    "h-3 w-full rounded-[1px] transition-all",
                                    day.intensity === 0 && "bg-cyan-950/30",
                                    day.intensity === 1 && "bg-cyan-900/50 shadow-[0_0_4px_rgba(6,182,212,0.2)]",
                                    day.intensity === 2 && "bg-cyan-700/60 shadow-[0_0_6px_rgba(6,182,212,0.4)]",
                                    day.intensity === 3 && "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]",
                                    day.intensity === 4 && "bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                                )}
                            />
                        ))}
                    </div>

                    <div className="flex justify-between items-end">
                        <div className="text-[8px] font-mono text-cyan-700 uppercase flex flex-col gap-0.5">
                            <span>GRID: 5W</span>
                            <span>TOTAL: {totalEvents}</span>
                        </div>
                        {/* Frame handles expansion button now, internal 'FULL.SCAN' button is redundant but visual styling is nice. 
                            We removed it to rely on Frame's standard button.
                         */}
                    </div>
                </div>
            </SidebarWidgetFrame>

            {/* --- FULL SCAN MODAL (Existing) --- */}
            <AnimatePresence>
                {isExpanded && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-black border border-cyan-900/50 w-full max-w-6xl h-[90vh] shadow-2xl flex flex-col overflow-hidden relative"
                        >
                            <style>{`
                                .custom-scrollbar::-webkit-scrollbar {
                                    width: 6px;
                                    height: 6px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-track {
                                    background: rgba(8, 51, 68, 0.3);
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb {
                                    background: #164e63;
                                    border-radius: 3px;
                                }
                                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                    background: #0e7490;
                                }
                                .heatmap-scroll::-webkit-scrollbar {
                                    display: none;
                                }
                                .heatmap-scroll {
                                    -ms-overflow-style: none;
                                    scrollbar-width: none;
                                }
                            `}</style>

                            {/* CRT Overlay Effect */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay z-50"></div>

                            {/* Header */}
                            <div className="p-6 border-b border-cyan-900/50 flex items-center justify-between bg-cyan-950/20 relative z-10">
                                <div>
                                    <h2 className="text-2xl font-bold text-cyan-100 font-mono uppercase tracking-wide">ACTIVITY.ANALYTICS</h2>
                                    <p className="text-sm text-cyan-600 mt-1 font-mono">365.DAY.TRACE</p>
                                </div>
                                <button
                                    onClick={() => setIsExpanded(false)}
                                    className="p-2 hover:bg-cyan-900/30 transition-colors"
                                >
                                    <RiCloseLine size={24} className="text-cyan-400" />
                                </button>
                            </div>

                            <div className="flex-1 flex overflow-hidden relative z-10">
                                {/* Main Content */}
                                <div className="flex-1 p-6 overflow-y-auto custom-scrollbar">
                                    {/* Insights */}
                                    <div className="mb-6 p-5 bg-cyan-950/20 border border-cyan-900/30">
                                        <div className="flex items-start gap-3 mb-3">
                                            <RiBarChartBoxLine className="text-cyan-500/70 mt-1" size={20} />
                                            <div className="flex-1">
                                                <h3 className="font-mono font-semibold text-cyan-200 mb-2 text-sm uppercase tracking-wide">PATTERN.ANALYSIS</h3>
                                                <p className="text-sm text-cyan-300/90 font-mono leading-relaxed">{profile}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-cyan-900/30">
                                            <p className="text-sm text-cyan-400/80 font-mono">
                                                <span className="text-cyan-500 font-bold">REC:</span> {recommendation}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Heatmap */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-mono font-semibold text-cyan-200 uppercase tracking-wide text-sm">TEMPORAL.GRID</h3>
                                            <div className="flex items-center gap-2 text-xs text-cyan-600 font-mono">
                                                <span>LESS</span>
                                                <div className="flex gap-1">
                                                    <div className="w-3 h-3 rounded-[1px] bg-cyan-950/30"></div>
                                                    <div className="w-3 h-3 rounded-[1px] bg-cyan-900/50"></div>
                                                    <div className="w-3 h-3 rounded-[1px] bg-cyan-700"></div>
                                                    <div className="w-3 h-3 rounded-[1px] bg-cyan-500"></div>
                                                    <div className="w-3 h-3 rounded-[1px] bg-cyan-400"></div>
                                                </div>
                                                <span>MORE</span>
                                            </div>
                                        </div>

                                        <div
                                            ref={scrollRef}
                                            className="heatmap-scroll grid grid-flow-col grid-rows-7 gap-1 w-full overflow-x-auto pb-3"
                                        >
                                            {fullYearGrid.map((day, i) => {
                                                const colors = [
                                                    'bg-cyan-950/30',
                                                    'bg-cyan-900/60',
                                                    'bg-cyan-700',
                                                    'bg-cyan-500',
                                                    'bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.6)]'
                                                ];

                                                const isSelected = selectedDate === day.date;
                                                const isRightSide = i > 330;

                                                return (
                                                    <button
                                                        key={i}
                                                        onClick={() => setSelectedDate(day.date)}
                                                        className={clsx(
                                                            `w-3 h-3 rounded-[1px] transition-all duration-200 relative group`,
                                                            colors[day.intensity],
                                                            isSelected ? 'ring-2 ring-cyan-400 scale-110' : 'hover:ring-2 hover:ring-cyan-500'
                                                        )}
                                                    >
                                                        {day.count > 0 && !isSelected && (
                                                            <div className={clsx(
                                                                "absolute bottom-full mb-2 bg-cyan-950 border border-cyan-700 text-cyan-200 text-xs px-3 py-2 font-mono whitespace-nowrap hidden group-hover:block z-50 pointer-events-none shadow-lg",
                                                                isRightSide ? "right-0" : "left-1/2 -translate-x-1/2"
                                                            )}>
                                                                <div className="font-semibold">{day.date}</div>
                                                                <div className="text-xs text-cyan-400">{day.count} events</div>
                                                            </div>
                                                        )}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                        <p className="text-xs text-cyan-600 mt-3 font-mono">// SELECT.NODE.FOR.DETAILS</p>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="w-80 border-l border-cyan-900/50 bg-cyan-950/10 flex flex-col">
                                    {selectedDate ? (
                                        <div className="flex flex-col h-full">
                                            <div className="p-4 border-b border-cyan-900/50">
                                                <div className="flex items-center justify-between mb-1">
                                                    <h3 className="font-mono font-semibold text-cyan-200 uppercase text-sm">EVENT.LOG</h3>
                                                    <button onClick={() => setSelectedDate(null)} className="p-1 hover:bg-cyan-900/30">
                                                        <RiCloseLine className="text-cyan-400" />
                                                    </button>
                                                </div>
                                                <p className="text-xs text-cyan-500 font-mono">{selectedDate}</p>
                                            </div>

                                            <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
                                                {activityMap[selectedDate]?.events.length > 0 ? (
                                                    activityMap[selectedDate].events.map((event, idx) => (
                                                        <div key={idx} className="p-3 bg-cyan-950/30 border border-cyan-900/50 hover:border-cyan-700/70 transition-colors">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <span className={clsx(
                                                                    "text-xs font-medium px-2 py-0.5 font-mono",
                                                                    event.type === 'COURSE' ? 'bg-cyan-900/50 text-cyan-300' : 'bg-teal-900/50 text-teal-300'
                                                                )}>
                                                                    {event.type}
                                                                </span>
                                                                <span className="text-xs text-cyan-600 font-mono tabular-nums">{event.time}</span>
                                                            </div>
                                                            <p className="text-sm text-cyan-200 font-medium font-mono">{event.title}</p>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <div className="text-center py-8 text-cyan-600 text-sm font-mono">
                                                        // NO.DATA
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="p-6 space-y-6 font-mono">
                                            <div>
                                                <h3 className="text-xs font-semibold text-cyan-500 mb-4 uppercase tracking-wide">METRICS</h3>

                                                <div className="space-y-4">
                                                    <div className="p-4 bg-cyan-950/30 border border-cyan-900/50">
                                                        <div className="text-xs text-cyan-600 mb-2">MAX.STREAK</div>
                                                        <div className="text-3xl font-bold text-cyan-300 tabular-nums">{maxStreak}</div>
                                                        <div className="text-xs text-cyan-700 mt-1">consecutive days</div>
                                                    </div>

                                                    <div className="p-4 bg-cyan-950/30 border border-cyan-900/50">
                                                        <div className="text-xs text-cyan-600 mb-2">VELOCITY</div>
                                                        <div className="text-3xl font-bold text-cyan-300 tabular-nums">{velocity}</div>
                                                        <div className="text-xs text-cyan-700 mt-1">items per day</div>
                                                    </div>

                                                    <div className="p-4 bg-cyan-950/30 border border-cyan-900/50">
                                                        <div className="text-xs text-cyan-600 mb-2">CONSISTENCY</div>
                                                        <div className="text-3xl font-bold text-cyan-300 tabular-nums">{consistency}%</div>
                                                        <div className="text-xs text-cyan-700 mt-1">active days</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
