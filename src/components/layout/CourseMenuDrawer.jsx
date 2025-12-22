import { RiCloseLine, RiArrowLeftSLine, RiCheckboxCircleFill, RiCheckboxBlankCircleLine, RiBookOpenLine, RiCodeBoxLine, RiQuestionAnswerLine } from 'react-icons/ri';
import clsx from 'clsx';
import { CONTENT_TYPES } from '../../data/courses/index';
import { useNavigate } from 'react-router-dom';

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

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="fixed top-0 left-0 h-full w-[400px] max-w-[85vw] bg-[#101010] border-r border-[#27272a] shadow-2xl z-[70] transform transition-transform duration-300 flex flex-col font-sans">

                {/* Header */}
                <div className="p-6 border-b border-[#27272a]">
                    <div className="flex items-center justify-between mb-6">
                        <button
                            onClick={() => navigate(`/course/${courseId}`)} // Go to Course Overview
                            className="flex items-center text-xs font-bold text-gray-400 hover:text-white transition-colors tracking-wide uppercase"
                        >
                            <RiArrowLeftSLine size={16} className="mr-1" />
                            Back to Course
                        </button>
                        <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                            <RiCloseLine size={24} />
                        </button>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-2">{unitTitle}</h2>

                    {/* Progress Bar for Unit */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-1.5 flex-1 bg-[#27272a] rounded-full overflow-hidden">
                            {/* Calculate unit progress */}
                            <div
                                className="h-full bg-[var(--accent-primary)]"
                                style={{ width: `${(unitItems.filter(i => completedItems.includes(i.id)).length / unitItems.length) * 100}%` }}
                            />
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 leading-relaxed">
                        {unitDescription || "Master the concepts in this unit to advance your skills."}
                    </p>
                </div>

                {/* List */}
                <div className="flex-1 overflow-y-auto p-2">
                    {unitItems.map((item, index) => {
                        const isCompleted = completedItems.includes(item.id);
                        const isCurrent = item.id === currentItemId;
                        const Icon = getTypeIcon(item.type);

                        return (
                            <button
                                key={item.id}
                                onClick={() => {
                                    navigate(`/learn/${courseId}/${item.id}`);
                                    onClose();
                                }}
                                className={clsx(
                                    "w-full flex items-center p-4 rounded-lg mb-1 transition-all group text-left",
                                    isCurrent ? "bg-[#1f1f23] border border-[#3f3f46]" : "hover:bg-[#18181b] border border-transparent"
                                )}
                            >
                                <div className={clsx("mr-4 transition-colors", isCompleted ? "text-[var(--accent-primary)]" : "text-gray-600")}>
                                    {isCompleted ? <RiCheckboxCircleFill size={20} /> : <RiCheckboxBlankCircleLine size={20} />}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className={clsx("text-xs font-bold uppercase tracking-wider", isCurrent ? "text-[var(--accent-primary)]" : "text-gray-500")}>
                                            {item.type === CONTENT_TYPES.LESSON ? 'Lesson' : item.type}
                                        </span>
                                    </div>
                                    <div className={clsx("text-sm font-medium", isCurrent ? "text-white" : "text-gray-300 group-hover:text-white")}>
                                        {item.title}
                                    </div>
                                </div>

                                <div className={clsx("opacity-0 group-hover:opacity-100 transition-opacity text-gray-500")}>
                                    {Icon}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
