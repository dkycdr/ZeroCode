import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { useProgress } from '../contexts/ProgressProvider';
import { useAuth } from '../contexts/AuthProvider';
import { getCourseWithContent, CONTENT_TYPES, getCourseProgress } from '../data/courses/index';
import { BookOpen, Code, HelpCircle, Rocket, FileText, ChevronRight, CheckCircle2, Circle, Clock, ArrowLeft, Crown, Lock, Terminal } from 'lucide-react';
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
                    <p className="text-gray-400 font-mono text-sm">LOADING COURSE DATA...</p>
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
            <div className="max-w-5xl mx-auto">
                <div className="mb-4">
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="flex items-center gap-2 text-gray-500 hover:text-white mb-6 transition-colors text-sm font-mono group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>RETURN TO DASHBOARD</span>
                    </button>
                </div>

                {/* Access Denied Banner */}
                {!hasAccess && (
                    <div className="bg-red-900/10 rounded-xl border border-red-500/20 p-6 mb-8 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                                <Lock size={20} className="text-red-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">RESTRICTED ACCESS</h3>
                                <p className="text-gray-400 text-sm font-mono">Upgrade authorization level to access this module.</p>
                            </div>
                        </div>
                        <button
                            onClick={handleUpgrade}
                            className="px-5 py-2.5 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-colors shadow-lg shadow-red-500/20 text-sm"
                        >
                            REQUEST ACCESS
                        </button>
                    </div>
                )}

                {/* Course Header */}
                <div className="card-cyber p-8 mb-8">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                        <div>
                            <div className="flex items-center gap-2 text-gray-500 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                                <Terminal size={14} />
                                <span>Course Identifier: {courseId.toUpperCase()}</span>
                            </div>
                            <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">{course.title}</h1>
                            <p className="text-gray-400 max-w-2xl leading-relaxed">{course.description}</p>
                        </div>

                        <div className="bg-[var(--bg-primary)] border border-[var(--border-subtle)] rounded-xl p-4 min-w-[150px] text-center">
                            <div className="text-4xl font-bold text-[var(--accent-primary)] mb-1">{progress.percentage}%</div>
                            <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Completion Status</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-400 font-mono border-t border-[var(--border-subtle)] pt-6">
                        <span className="flex items-center gap-2">
                            <Clock size={14} />
                            {course.duration}
                        </span>
                        <span className="flex items-center gap-2">
                            <BookOpen size={14} />
                            {course.units?.length || 0} MODULES
                        </span>
                        <span className="flex items-center gap-2">
                            <Code size={14} />
                            {progress.total} TASKS
                        </span>
                    </div>
                </div>

                {/* Syllabus */}
                <div className="space-y-4">
                    {course.units?.map((unit, unitIndex) => {
                        const isExpanded = expandedUnits[unit.id];
                        const unitCompleted = unit.items.filter(i => completedItems.includes(i.id)).length;
                        const unitProgress = Math.round((unitCompleted / unit.items.length) * 100);
                        const isUnitComplete = unitProgress === 100;

                        return (
                            <div key={unit.id} className={clsx(
                                "rounded-xl border transition-all duration-300 overflow-hidden",
                                isExpanded
                                    ? "bg-[var(--bg-panel)] border-[var(--border-subtle)]"
                                    : "bg-[#0a0a0a] border-transparent hover:border-[var(--border-subtle)]"
                            )}>
                                {/* Unit Header */}
                                <button
                                    onClick={() => toggleUnit(unit.id)}
                                    className="w-full px-6 py-5 flex items-center justify-between group"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className={clsx(
                                            "w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold font-mono transition-colors",
                                            isUnitComplete
                                                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                                : "bg-white/5 text-gray-400 border border-white/10 group-hover:border-[var(--accent-primary)] group-hover:text-white"
                                        )}>
                                            {isUnitComplete ? <CheckCircle2 size={18} /> : (unitIndex + 1).toString().padStart(2, '0')}
                                        </div>
                                        <div className="text-left">
                                            <h3 className={clsx(
                                                "font-bold text-lg mb-1 transition-colors",
                                                isExpanded ? "text-white" : "text-gray-400 group-hover:text-white"
                                            )}>{unit.title}</h3>
                                            {isExpanded && <p className="text-sm text-gray-500">{unit.description}</p>}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <div className="text-right hidden sm:block">
                                            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">Progress</div>
                                            <div className="flex items-center justify-end gap-2">
                                                <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                                                    <div className="h-full bg-[var(--accent-primary)]" style={{ width: `${unitProgress}%` }} />
                                                </div>
                                                <span className="text-xs font-mono text-[var(--accent-primary)]">{unitProgress}%</span>
                                            </div>
                                        </div>

                                        <ChevronRight
                                            size={18}
                                            className={clsx(
                                                "text-gray-500 transition-transform duration-300",
                                                isExpanded && "rotate-90 text-white"
                                            )}
                                        />
                                    </div>
                                </button>

                                {/* Unit Items */}
                                {isExpanded && (
                                    <div className="border-t border-[var(--border-subtle)] bg-black/20">
                                        {unit.items.map((item, idx) => {
                                            const isCompleted = completedItems.includes(item.id);
                                            const isLocked = false; // Add specific logic if needed

                                            return (
                                                <div
                                                    key={item.id}
                                                    className="relative group"
                                                >
                                                    {/* Connector Line */}
                                                    {idx !== unit.items.length - 1 && (
                                                        <div className="absolute left-[2.75rem] top-10 bottom-0 w-[1px] bg-white/5 group-hover:bg-white/10 transition-colors" />
                                                    )}

                                                    <button
                                                        onClick={() => !isLocked && hasAccess && handleItemClick(item)}
                                                        disabled={isLocked || !hasAccess}
                                                        className={clsx(
                                                            "w-full px-6 py-3 flex items-center gap-4 transition-all duration-200 border-l-2 border-transparent",
                                                            (isLocked || !hasAccess)
                                                                ? "opacity-50 cursor-not-allowed"
                                                                : "hover:bg-white/5 cursor-pointer hover:border-[var(--accent-primary)]"
                                                        )}
                                                    >
                                                        {/* Status Icon */}
                                                        <div className={clsx(
                                                            "relative z-10 w-6 h-6 rounded-full flex items-center justify-center border transition-colors bg-[#0a0a0a]",
                                                            isCompleted
                                                                ? "border-green-500/50 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                                                                : "border-white/10 text-gray-600 group-hover:border-[var(--accent-primary)] group-hover:text-[var(--accent-primary)]"
                                                        )}>
                                                            {isCompleted ? <CheckCircle2 size={12} /> :
                                                                isLocked ? <Lock size={10} /> :
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-current" />}
                                                        </div>

                                                        {/* Content */}
                                                        <div className="flex-1 text-left flex items-center justify-between">
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-0.5">
                                                                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm">{item.title}</span>
                                                                    <span className={clsx(
                                                                        "text-[10px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider border",
                                                                        item.type === CONTENT_TYPES.PROJECT
                                                                            ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                                                            : "bg-white/5 text-gray-500 border-white/10"
                                                                    )}>
                                                                        {item.type}
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            {/* Type Icon */}
                                                            <div className="text-gray-600 group-hover:text-[var(--accent-primary)] transition-colors opacity-0 group-hover:opacity-100">
                                                                {ITEM_ICONS[item.type]}
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </AppLayout>
    );
}
