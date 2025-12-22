import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AppLayout from '../components/layout/AppLayout';
import { useProgress } from '../contexts/ProgressProvider';
import { useAuth } from '../contexts/AuthProvider';
import { getCourseWithContent, CONTENT_TYPES, getCourseProgress } from '../data/courses/index';
import { BookOpen, Code, HelpCircle, Rocket, FileText, ChevronRight, CheckCircle2, Circle, Clock, ArrowLeft, Crown, Lock, Terminal, Zap } from 'lucide-react';
import clsx from 'clsx';

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
    const { completedItems } = useProgress();
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
            <div className="max-w-6xl mx-auto px-4 pb-20">
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

                {/* Course Header HUD */}
                <div className="relative mb-20">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="py-12 text-center relative max-w-4xl mx-auto">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-indigo-400">
                                <Terminal size={12} />
                                <span>Subject: {courseId}</span>
                            </div>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                            {course.title}
                        </h1>
                        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed relative z-10 font-normal">
                            {course.description}
                        </p>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto">
                            <div className="bg-[#0a0a0c] border border-white/5 p-4 rounded-xl relative group hover:border-indigo-500/30 transition-colors">
                                <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-2">Sync Status</div>
                                <div className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{progress.percentage}%</div>
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                            <div className="bg-[#0a0a0c] border border-white/5 p-4 rounded-xl relative group hover:border-indigo-500/30 transition-colors">
                                <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-2">Modules</div>
                                <div className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{course.units?.length || 0}</div>
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                            <div className="bg-[#0a0a0c] border border-white/5 p-4 rounded-xl relative group hover:border-indigo-500/30 transition-colors">
                                <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-2">Tasks</div>
                                <div className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{progress.total}</div>
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                            <div className="bg-[#0a0a0c] border border-white/5 p-4 rounded-xl relative group hover:border-indigo-500/30 transition-colors">
                                <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mb-2">Est. Time</div>
                                <div className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{course.duration}</div>
                                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* NEURAL TIMELINE LAYOUT */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Central Spine */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
                        {/* Animated Signal */}
                        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-50 blur-sm animate-pulse-slow" />
                        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-indigo-400 to-transparent" style={{ animation: 'scan 8s linear infinite' }} />
                    </div>

                    <div className="space-y-12">
                        {course.units?.map((unit, unitIndex) => {
                            const isExpanded = expandedUnits[unit.id];
                            const unitCompleted = unit.items.filter(i => completedItems.includes(i.id)).length;
                            const unitProgress = Math.round((unitCompleted / unit.items.length) * 100);
                            const isUnitComplete = unitProgress === 100;
                            const isLocked = !hasAccess && unitIndex > 1; // Example locking logic

                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: unitIndex * 0.1 }}
                                    key={unit.id}
                                    className={clsx(
                                        "relative flex flex-col md:flex-row items-center",
                                        unitIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    )}
                                >
                                    {/* Timeline Node Point */}
                                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#0a0a0c] z-20 flex items-center justify-center bg-[#0a0a0c]">
                                        <div className={clsx(
                                            "w-3 h-3 rounded-full transition-all duration-500",
                                            isUnitComplete ? "bg-emerald-500 shadow-[0_0_10px_#10b981]" :
                                                isExpanded ? "bg-indigo-500 shadow-[0_0_10px_#6366f1]" :
                                                    "bg-gray-700"
                                        )} />
                                    </div>

                                    {/* Spacer for Desktop Layout */}
                                    <div className="hidden md:block w-1/2" />

                                    {/* Content Card Side */}
                                    <div className={clsx(
                                        "w-full md:w-1/2 pl-12 md:pl-0",
                                        unitIndex % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                                    )}>
                                        <div
                                            onClick={() => toggleUnit(unit.id)}
                                            className={clsx(
                                                "group relative bg-[#0a0a0c] border rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden",
                                                isExpanded
                                                    ? "border-indigo-500/50 shadow-[0_0_30px_rgba(99,102,241,0.1)]"
                                                    : "border-white/10 hover:border-white/20"
                                            )}
                                        >
                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity transform -skew-x-12" />

                                            <div className={clsx("relative z-10 flex flex-col h-full", unitIndex % 2 === 0 ? "md:items-end" : "md:items-start")}>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                                                        Module _{String(unitIndex + 1).padStart(2, '0')}
                                                    </span>
                                                    {isUnitComplete && <CheckCircle2 size={14} className="text-emerald-500" />}
                                                </div>

                                                <h3 className={clsx(
                                                    "text-xl font-bold mb-2 transition-colors",
                                                    isExpanded ? "text-indigo-400" : "text-white group-hover:text-indigo-200"
                                                )}>
                                                    {unit.title}
                                                </h3>

                                                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
                                                    {unit.description}
                                                </p>

                                                {/* Progress Bar Mini */}
                                                <div className="w-full max-w-[120px] h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                                                    <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${unitProgress}%` }} />
                                                </div>

                                                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                                                    <span className={clsx("transition-transform duration-300", isExpanded && "rotate-180")}>
                                                        {isExpanded ? "Collapse Data" : "Expand Data"}
                                                    </span>
                                                    <ChevronRight size={14} className={clsx("transition-transform duration-300", isExpanded && "rotate-90")} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Expanded Content (Tasks) */}
                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className={clsx(
                                                        "mt-4 space-y-2 relative",
                                                        unitIndex % 2 === 0 ? "md:mr-2" : "md:ml-2"
                                                    )}>
                                                        {unit.items.map((item, idx) => {
                                                            const isCompleted = completedItems.includes(item.id);
                                                            return (
                                                                <motion.div
                                                                    initial={{ x: unitIndex % 2 === 0 ? 20 : -20, opacity: 0 }}
                                                                    animate={{ x: 0, opacity: 1 }}
                                                                    transition={{ delay: idx * 0.05 }}
                                                                    key={item.id}
                                                                    onClick={() => hasAccess && handleItemClick(item)}
                                                                    className={clsx(
                                                                        "flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer group/item",
                                                                        isCompleted
                                                                            ? "bg-emerald-500/5 border-emerald-500/20 hover:bg-emerald-500/10"
                                                                            : "bg-[#0a0a0c] border-white/5 hover:border-indigo-500/30 hover:bg-white/5",
                                                                        !hasAccess && "opacity-50 cursor-not-allowed"
                                                                    )}
                                                                >
                                                                    <div className={clsx(
                                                                        "w-8 h-8 rounded flex items-center justify-center transition-colors",
                                                                        isCompleted ? "text-emerald-400" : "text-gray-500 group-hover/item:text-indigo-400"
                                                                    )}>
                                                                        {isCompleted ? <CheckCircle2 size={16} /> : ITEM_ICONS[item.type]}
                                                                    </div>

                                                                    <div className="flex-1 text-left">
                                                                        <div className="text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors">
                                                                            {item.title}
                                                                        </div>
                                                                        <div className="text-[10px] text-gray-600 font-mono uppercase">
                                                                            {item.type} Sequence
                                                                        </div>
                                                                    </div>

                                                                    <ChevronRight size={14} className="text-gray-600 group-hover/item:text-white transition-transform group-hover/item:translate-x-1" />
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
