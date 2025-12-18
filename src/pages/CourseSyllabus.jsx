import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useProgress } from '../contexts/ProgressProvider';
import { useAuth } from '../contexts/AuthProvider';
import { getCourseWithContent, CONTENT_TYPES, getCourseProgress } from '../data/courses/index';
import { BookOpen, Code, HelpCircle, Rocket, FileText, ChevronRight, CheckCircle2, Circle, Clock, ArrowLeft, Crown, MessageCircle } from 'lucide-react';
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
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading...</p>
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
        <div className="min-h-screen bg-[#0a0a0a]">
            <Header progress={progress.percentage} />

            <main className="min-h-[calc(100vh-56px)] overflow-y-auto">
                <div className="max-w-4xl mx-auto px-6 py-8">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/dashboard')}
                        className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft size={18} />
                        <span>Back to Dashboard</span>
                    </button>

                    {/* Access Denied Banner */}
                    {!hasAccess && (
                        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30 p-6 mb-8">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                                        <Crown size={24} className="text-yellow-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-1">🔒 Premium Course</h3>
                                        <p className="text-gray-400 text-sm">
                                            Upgrade your account to access this course
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={handleUpgrade}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                >
                                    <MessageCircle size={16} />
                                    Upgrade Now
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Course Header */}
                    <div className="bg-[#111111] rounded-xl border border-white/10 p-8 mb-8">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <div className="flex items-center gap-2 text-gray-500 text-xs font-medium uppercase tracking-wider mb-3">
                                    <BookOpen size={14} />
                                    <span>Course</span>
                                </div>
                                <h1 className="text-3xl font-bold text-white mb-3">{course.title}</h1>
                                <p className="text-gray-400 mb-4">{course.description}</p>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <Clock size={14} />
                                        {course.duration}
                                    </span>
                                    <span>{course.units?.length || 0} Units</span>
                                    <span>{progress.total} Items</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-4xl font-bold text-white">{progress.percentage}%</div>
                                <div className="text-sm text-gray-500">Complete</div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-white transition-all duration-500"
                                style={{ width: `${progress.percentage}%` }}
                            />
                        </div>
                    </div>

                    {/* Syllabus */}
                    <div className="space-y-3">
                        {course.units?.map((unit, unitIndex) => {
                            const isExpanded = expandedUnits[unit.id];
                            const unitCompleted = unit.items.filter(i => completedItems.includes(i.id)).length;
                            const unitProgress = Math.round((unitCompleted / unit.items.length) * 100);

                            return (
                                <div key={unit.id} className="bg-[#111111] rounded-xl border border-white/10 overflow-hidden">
                                    {/* Unit Header */}
                                    <button
                                        onClick={() => toggleUnit(unit.id)}
                                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={clsx(
                                                "w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold",
                                                unitProgress === 100 
                                                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                                                    : "bg-white/5 text-white border border-white/10"
                                            )}>
                                                {unitProgress === 100 ? <CheckCircle2 size={18} /> : unitIndex + 1}
                                            </div>
                                            <div className="text-left">
                                                <h3 className="font-semibold text-white">{unit.title}</h3>
                                                <p className="text-sm text-gray-500">{unit.description}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-right">
                                                <div className="text-sm font-medium text-gray-300">{unitCompleted}/{unit.items.length}</div>
                                                <div className="text-xs text-gray-500">completed</div>
                                            </div>
                                            <ChevronRight
                                                size={18}
                                                className={clsx(
                                                    "text-gray-500 transition-transform",
                                                    isExpanded && "rotate-90"
                                                )}
                                            />
                                        </div>
                                    </button>

                                    {/* Unit Items */}
                                    {isExpanded && (
                                        <div className="border-t border-white/5">
                                            {unit.items.map((item) => {
                                                const isCompleted = completedItems.includes(item.id);
                                                const isLocked = false;

                                                return (
                                                    <button
                                                        key={item.id}
                                                        onClick={() => !isLocked && hasAccess && handleItemClick(item)}
                                                        disabled={isLocked || !hasAccess}
                                                        className={clsx(
                                                            "w-full px-6 py-4 flex items-center gap-4 border-b border-white/5 last:border-b-0 transition-colors",
                                                            (isLocked || !hasAccess)
                                                                ? "opacity-40 cursor-not-allowed" 
                                                                : "hover:bg-white/5 cursor-pointer"
                                                        )}
                                                    >
                                                        {/* Status Icon */}
                                                        <div className={clsx(
                                                            "w-8 h-8 rounded-lg flex items-center justify-center",
                                                            isCompleted 
                                                                ? "bg-green-500/20 text-green-400" 
                                                                : isLocked 
                                                                    ? "bg-white/5 text-gray-600" 
                                                                    : "bg-white/5 text-gray-400"
                                                        )}>
                                                            {isCompleted ? <CheckCircle2 size={16} /> :
                                                             isLocked ? <Lock size={14} /> :
                                                             <Circle size={16} />}
                                                        </div>

                                                        {/* Type Badge */}
                                                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                                                            {ITEM_ICONS[item.type]}
                                                        </div>

                                                        {/* Content */}
                                                        <div className="flex-1 text-left">
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-medium text-white">{item.title}</span>
                                                                <span className="text-xs px-2 py-0.5 rounded bg-white/5 text-gray-500 capitalize">
                                                                    {item.type}
                                                                </span>
                                                            </div>
                                                            <div className="text-sm text-gray-500">{item.duration}</div>
                                                        </div>

                                                        {/* Arrow */}
                                                        {!isLocked && (
                                                            <ChevronRight size={16} className="text-gray-500" />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}
