import { useNavigate } from 'react-router-dom';
import { X, CheckCircle2, Circle, Lock, ChevronLeft, Map, PlayCircle, FileText, Code } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

export default function CourseMenuDrawer({
    isOpen,
    onClose,
    courseTitle,
    unitTitle,
    unitDescription,
    unitItems = [],
    courseId,
    currentItemId,
    completedItems = []
}) {
    const navigate = useNavigate();

    // Map item types to icons
    const getTypeIcon = (type) => {
        switch (type) {
            case CONTENT_TYPES.LESSON: return <RiCodeBoxLine size={16} />;
            case CONTENT_TYPES.QUIZ: return <RiQuestionAnswerLine size={16} />;
            case CONTENT_TYPES.PROJECT: return <RiCodeBoxLine size={16} />;
            default: return <RiBookOpenLine size={16} />; // Informational
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />

                    {/* Drawer Panel */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 left-0 h-full w-80 bg-[#08080a] border-r border-white/10 z-[70] flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 relative overflow-hidden">
                            {/* Decorative Glow */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />

                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <button
                                onClick={() => navigate(`/course/${courseId}`)}
                                className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-indigo-400 mb-6 transition-colors group"
                            >
                                <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                                BACK TO SYLLABUS
                            </button>

                            <div className="flex items-center gap-2 text-indigo-500 text-[10px] font-mono font-bold uppercase tracking-widest mb-2">
                                <Map size={12} />
                                <span>Navigation System</span>
                            </div>
                            <h2 className="text-lg font-bold text-white leading-tight">{unitTitle}</h2>
                            <p className="text-xs text-gray-500 mt-2 line-clamp-2">{unitDescription}</p>
                        </div>

                        {/* Neural List */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 relative">
                            {/* Vertical Spine Line */}
                            <div className="absolute left-[2.5rem] top-6 bottom-6 w-px bg-white/5" />

                            <div className="space-y-6 relative">
                                {unitItems?.map((item, index) => {
                                    const isCompleted = completedItems?.includes(item.id);
                                    const isActive = item.id === currentItemId;

                                    // Determine Icon
                                    let ItemIcon = Circle;
                                    if (item.type === 'lesson') ItemIcon = Code;
                                    if (item.type === 'informational') ItemIcon = FileText;
                                    if (isCompleted) ItemIcon = CheckCircle2;

                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                navigate(`/learn/${courseId}/${item.id}`);
                                                onClose();
                                            }}
                                            className="group relative flex items-start gap-4 cursor-pointer"
                                        >
                                            {/* Node Point */}
                                            <div className={clsx(
                                                "relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-[#08080a]",
                                                isActive
                                                    ? "border-indigo-500 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.4)] scale-110"
                                                    : isCompleted
                                                        ? "border-emerald-500/50 text-emerald-500"
                                                        : "border-white/10 text-gray-600 group-hover:border-white/30"
                                            )}>
                                                {isActive && (
                                                    <div className="absolute inset-0 bg-indigo-500/20 rounded-full animate-ping" />
                                                )}
                                                <ItemIcon size={isActive ? 16 : 14} />
                                            </div>

                                            {/* Content */}
                                            <div className={clsx(
                                                "flex-1 pt-1 transition-colors duration-300",
                                                isActive ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                                            )}>
                                                <div className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-60 mb-0.5">
                                                    {item.type}
                                                </div>
                                                <div className="text-sm font-medium leading-tight">
                                                    {item.title}
                                                </div>
                                            </div>

                                            {/* Connected Line Highlight (Optional - connects to next) */}
                                            {index !== unitItems.length - 1 && isActive && (
                                                <div className="absolute left-[15px] top-8 h-8 w-0.5 bg-gradient-to-b from-indigo-500 to-transparent z-0" />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Footer Status */}
                        <div className="p-4 border-t border-white/5 bg-black/20 backdrop-blur">
                            <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                                <span>SYSTEM STATUS</span>
                                <span className="flex items-center gap-1.5 text-emerald-500">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    ONLINE
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
