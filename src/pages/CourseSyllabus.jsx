import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import { useProgress } from '../contexts/ProgressProvider';
import { useAuth } from '../contexts/AuthProvider';
import { getCourseWithContent, CONTENT_TYPES, getCourseProgress } from '../data/courses/index';
import { BookOpen, Code, HelpCircle, Rocket, FileText, ChevronRight, CheckCircle2, Circle, Clock, ArrowLeft, Crown, Lock, Terminal, Zap } from 'lucide-react';
import clsx from 'clsx';
import RealisticDNA from '../components/RealisticDNA';
import UpdateBadge from '../components/dashboard/UpdateBadge';

const WHATSAPP_NUMBER = '6283875727384';

const ITEM_ICONS = {
    [CONTENT_TYPES.LESSON]: <Code size={16} />,
    [CONTENT_TYPES.QUIZ]: <HelpCircle size={16} />,
    [CONTENT_TYPES.PROJECT]: <Rocket size={16} />,
    [CONTENT_TYPES.INFORMATIONAL]: <FileText size={16} />
};

export default function CourseSyllabus() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState(null);
    const [expandedUnits, setExpandedUnits] = useState({});
    const { completedItems, checkUnitStatus } = useProgress();
    const { user, canAccessCourse, subscriptionTier } = useAuth();
    const hasAccess = canAccessCourse(courseId, course?.level);

    useEffect(() => {
        const courseData = getCourseWithContent(courseId);
        if (courseData) {
            setCourse(courseData);
            if (courseData.units?.length > 0) {
                // Default expand the first unfinished unit or the first one if all new
                setExpandedUnits({ [courseData.units[0].id]: true });
            }
        } else {
            navigate('/dashboard');
        }
    }, [courseId, navigate]);

    const handleUpgrade = () => {
        const message = encodeURIComponent(
            `Hi ZeroCode! I want to access the "${course?.title}" course.\n\nEmail: ${user?.email}\nName: ${user?.name}\nCurrent tier: ${subscriptionTier}`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    };

    if (!course) {
        return (
            <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--accent-primary)] mx-auto mb-4"></div>
                    <p className="text-gray-400 font-mono text-sm">LOADING NEURAL LINK...</p>
                </div>
            </div>
        );
    }

    const progress = getCourseProgress(courseId, completedItems);

    const toggleUnit = (unitId) => {
        setExpandedUnits(prev => ({ ...prev, [unitId]: !prev[unitId] }));
    };

    const handleItemClick = (item) => {
        navigate(`/learn/${courseId}/${item.id}`);
    };

    return (
        <AppLayout>
            {/* Deep Space Background */}
            <div className="fixed inset-0 z-0 bg-black" />

            {/* DNA Sequence - High Visibility */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
                <RealisticDNA />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 pb-20">
                {/* Navigation */}
                <div className="mb-8 pt-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs font-mono group uppercase tracking-widest"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Abort Sequence / Return to Dashboard</span>
                    </button>
                </div>

                {/* Restricted Access Banner */}
                {!hasAccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-950/30 backdrop-blur-md rounded-xl border border-red-500/20 p-6 mb-12 flex items-center justify-between relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(220,38,38,0.05)_10px,rgba(220,38,38,0.05)_20px)]" />
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                <Lock size={24} className="text-red-500" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white mb-1 uppercase tracking-wider">Access Restricted</h3>
                                <p className="text-red-400 text-xs font-mono">Clearance Level Insufficient. Upgrade Required.</p>
                            </div>
                        </div>
                        <button
                            onClick={handleUpgrade}
                            className="relative z-10 px-6 py-2.5 bg-red-600 text-white rounded-lg font-bold hover:bg-red-500 transition-all shadow-lg shadow-red-600/20 text-xs tracking-wider uppercase"
                        >
                            Request Access
                        </button>
                    </motion.div>
                )}

                {/* Course Header HUD - CYBER MAINFRAME */}
                <div className="relative mb-24 mt-8">
                    {/* Tech Grid Background */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                    <div className="relative max-w-5xl mx-auto">
                        {/* Header Content */}
                        <div className="text-center relative z-10">
                            <div className="inline-flex items-center gap-2 mb-6 border border-cyan-500/30 bg-cyan-950/20 px-4 py-1.5 rounded-sm">
                                <Terminal size={12} className="text-cyan-400" />
                                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-cyan-500">
                                    Subject: {courseId.toUpperCase()} // CLASSIFIED
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-mono tracking-tighter uppercase leading-tight relative inline-block">
                                {course.title}
                                {/* Glitch Decorators */}
                                <span className="absolute -top-4 -right-4 w-4 h-4 border-t border-r border-cyan-500/50 hidden md:block" />
                                <span className="absolute -bottom-4 -left-4 w-4 h-4 border-b border-l border-cyan-500/50 hidden md:block" />
                            </h1>

                            <p className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-mono font-medium">
                                {course.description}
                                <span className="animate-pulse inline-block ml-2 w-2 h-4 bg-cyan-500/50 align-middle" />
                            </p>
                        </div>

                        {/* System Diagnostics (Stats) */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-b border-white/5 py-8 relative">
                            {/* Decorative Lines */}
                            <div className="absolute top-0 left-0 w-4 h-[1px] bg-cyan-500" />
                            <div className="absolute top-0 right-0 w-4 h-[1px] bg-cyan-500" />
                            <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-cyan-500" />
                            <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-cyan-500" />

                            <div className="p-4 bg-black/40 border border-white/5 relative group hover:bg-white/[0.02] transition-colors">
                                <div className="text-[9px] text-zinc-600 font-mono uppercase tracking-[0.2em] mb-2">Sync_Status</div>
                                <div className="text-2xl font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {progress.percentage}%
                                </div>
                                <div className="absolute top-0 right-0 p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                                </div>
                            </div>

                            <div className="p-4 bg-black/40 border border-white/5 relative group hover:bg-white/[0.02] transition-colors">
                                <div className="text-[9px] text-zinc-600 font-mono uppercase tracking-[0.2em] mb-2">Data_Modules</div>
                                <div className="text-2xl font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {course.units?.length || 0}
                                </div>
                            </div>

                            <div className="p-4 bg-black/40 border border-white/5 relative group hover:bg-white/[0.02] transition-colors">
                                <div className="text-[9px] text-zinc-600 font-mono uppercase tracking-[0.2em] mb-2">Total_Tasks</div>
                                <div className="text-2xl font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {progress.total}
                                </div>
                            </div>

                            <div className="p-4 bg-black/40 border border-white/5 relative group hover:bg-white/[0.02] transition-colors">
                                <div className="text-[9px] text-zinc-600 font-mono uppercase tracking-[0.2em] mb-2">Est_Duration</div>
                                <div className="text-2xl font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {course.duration}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NEURAL TIMELINE LAYOUT - DATA STREAM */}
                <div className="relative max-w-5xl mx-auto px-4">
                    {/* Central Spine */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800 md:-translate-x-1/2 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent" style={{ animation: 'scan 8s linear infinite' }} />
                    </div>

                    <div className="space-y-8 md:space-y-12">
                        {course.units?.map((unit, unitIndex) => {
                            const isExpanded = expandedUnits[unit.id];
                            const unitCompleted = unit.items.filter(i => completedItems.includes(i.id)).length;
                            const unitProgress = Math.round((unitCompleted / unit.items.length) * 100);
                            const isUnitComplete = unitProgress === 100;

                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: unitIndex * 0.05 }}
                                    key={unit.id}
                                    className={clsx(
                                        "relative flex flex-col md:flex-row md:items-start",
                                        unitIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    )}
                                >
                                    {/* Timeline Node Point */}
                                    <div className="absolute left-6 md:left-1/2 -translate-x-[5px] top-8 w-2.5 h-2.5 bg-black border border-white/30 z-20 shadow-[0_0_10px_rgba(0,0,0,1)]">
                                        <div className={clsx(
                                            "w-full h-full transition-all duration-300",
                                            isUnitComplete ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" :
                                                isExpanded ? "bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" :
                                                    "bg-zinc-800"
                                        )} />
                                    </div>

                                    {/* Spacer for Desktop Layout */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Content Card Side */}
                                    <div className={clsx(
                                        "w-full md:w-1/2 pl-16 md:pl-0",
                                        unitIndex % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                    )}>
                                        <div
                                            onClick={() => toggleUnit(unit.id)}
                                            className={clsx(
                                                "group relative border transition-all duration-300 cursor-pointer isolate overflow-hidden backdrop-blur-md",
                                                // Default State: Visible Box
                                                "bg-zinc-900/40 hover:bg-zinc-900/60",
                                                isExpanded
                                                    ? "border-cyan-500/50 shadow-[0_0_30px_-5px_rgba(6,182,212,0.2)]"
                                                    : "border-white/20 hover:border-white/40 shadow-lg"
                                            )}
                                        >
                                            {/* Side Status Bar */}
                                            <div className={clsx(
                                                "absolute top-0 bottom-0 w-1 transition-colors duration-300",
                                                unitIndex % 2 === 0 ? "md:right-0 md:translate-x-[1px]" : "md:left-0 md:-translate-x-[1px]",
                                                "left-0 md:left-auto", // Mobile always left
                                                isUnitComplete ? "bg-emerald-500" : isExpanded ? "bg-cyan-500" : "bg-zinc-800 group-hover:bg-zinc-700"
                                            )} />

                                            {/* Hover Grid Overlay */}
                                            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none" />

                                            <div className={clsx("p-5 relative z-10 flex flex-col h-full", unitIndex % 2 === 0 ? "md:items-end" : "md:items-start")}>
                                                {/* Header Line */}
                                                <div className="flex items-center gap-3 mb-2 opacity-60">
                                                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-cyan-500">
                                                        MODULE_{String(unitIndex + 1).padStart(2, '0')}
                                                    </span>
                                                    {isUnitComplete && <CheckCircle2 size={12} className="text-emerald-500" />}
                                                    {/* Update Badge Injection */}
                                                    {checkUnitStatus && checkUnitStatus(unit.id, unit.version, courseId) === 'update_available' && (
                                                        <UpdateBadge />
                                                    )}
                                                </div>

                                                <h3 className={clsx(
                                                    "text-lg font-bold font-mono uppercase tracking-tight mb-2 transition-colors",
                                                    isExpanded ? "text-cyan-400" : "text-white group-hover:text-cyan-100"
                                                )}>
                                                    {unit.title}
                                                </h3>

                                                <p className="text-xs text-zinc-500 font-mono mb-4 line-clamp-2 max-w-sm leading-relaxed">
                                                    {unit.description}
                                                </p>

                                                {/* Cyber Progress Bar */}
                                                <div className="flex items-center gap-1 mb-4">
                                                    <div className="text-[9px] font-mono text-zinc-600">LOAD:</div>
                                                    <div className="flex gap-0.5">
                                                        {[...Array(10)].map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className={clsx(
                                                                    "w-1.5 h-3 rounded-[1px] transition-all duration-500",
                                                                    (i / 10) * 100 < unitProgress
                                                                        ? (isUnitComplete ? "bg-emerald-500" : "bg-cyan-500")
                                                                        : "bg-zinc-900"
                                                                )}
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 border border-white/5 px-2 py-1 rounded bg-black/20 group-hover:border-white/10 transition-colors">
                                                    <span>{isExpanded ? "[-]" : "[+]"}</span>
                                                    <span>{isExpanded ? "COLLAPSE_DATA" : "ACCESS_DATA"}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Expanded Items List */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="mt-4 p-3 bg-zinc-900/30 border border-white/10 rounded-lg backdrop-blur-md shadow-inner space-y-2">
                                                        {unit.items.map((item, idx) => {
                                                            const isCompleted = completedItems.includes(item.id);
                                                            return (
                                                                <motion.div
                                                                    initial={{ x: unitIndex % 2 === 0 ? 10 : -10, opacity: 0 }}
                                                                    animate={{ x: 0, opacity: 1 }}
                                                                    transition={{ delay: idx * 0.03 }}
                                                                    key={item.id}
                                                                    onClick={() => hasAccess && handleItemClick(item)}
                                                                    className={clsx(
                                                                        "flex items-center gap-3 p-3 rounded-md border transition-all cursor-pointer group/item",
                                                                        "bg-white/[0.02] border-white/5 hover:bg-cyan-950/30 hover:border-cyan-500/30 hover:shadow-[0_0_15px_-5px_rgba(6,182,212,0.3)]",
                                                                        !hasAccess && "opacity-50 cursor-not-allowed"
                                                                    )}
                                                                >
                                                                    <div className={clsx(
                                                                        "w-6 h-6 flex items-center justify-center transition-colors",
                                                                        isCompleted ? "text-emerald-500" : "text-zinc-600 group-hover/item:text-cyan-400"
                                                                    )}>
                                                                        {isCompleted ? <CheckCircle2 size={14} /> : ITEM_ICONS[item.type]}
                                                                    </div>

                                                                    <div className={clsx("flex-1 text-left font-mono text-xs", unitIndex % 2 === 0 ? "md:text-right" : "md:text-left")}>
                                                                        <div className={clsx("transition-colors", isCompleted ? "text-emerald-500/80 line-through" : "text-zinc-400 group-hover/item:text-white")}>
                                                                            {item.title}
                                                                        </div>
                                                                    </div>

                                                                    {unitIndex % 2 !== 0 && (
                                                                        <div className="w-1.5 h-1.5 bg-zinc-800 group-hover/item:bg-cyan-500 rounded-full transition-colors" />
                                                                    )}
                                                                    {unitIndex % 2 === 0 && (
                                                                        <div className="hidden md:block w-1.5 h-1.5 bg-zinc-800 group-hover/item:bg-cyan-500 rounded-full transition-colors order-first mr-3" />
                                                                    )}
                                                                </motion.div>
                                                            );
                                                        })}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* End Node */}
                    <div className="flex justify-center mt-12 relative z-10">
                        <div className="w-16 h-16 rounded-full bg-[#0a0a0c] border-2 border-dashed border-white/20 flex items-center justify-center text-gray-600">
                            <Crown size={24} />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

// Add styled CSS for scanline animation
const style = document.createElement('style');
style.textContent = `
    @keyframes scan {
        0% { top: -30%; opacity: 0; }
        50% { opacity: 1; }
        100% { top: 130%; opacity: 0; }
    }
`;
document.head.appendChild(style);
