import { useNavigate } from 'react-router-dom';
import { RiMenu4Fill, RiCloseLine, RiArrowLeftSLine, RiQuestionLine, RiLayoutGridFill, RiUser3Fill } from 'react-icons/ri';
import { VscCopilot } from 'react-icons/vsc';
import clsx from 'clsx';
import logo from '../../assets/logo.png';
import { useAuth } from '../../contexts/AuthProvider';
import { CONTENT_TYPES } from '../../data/courses/index';

export default function LearningNavbar({
    courseTitle,
    lessonTitle,
    unitItems = [],
    currentItemId,
    courseId,
    onOpenDrawer,
    onAskAI,
    onBack
}) {
    const { user } = useAuth();
    const navigate = useNavigate();

    // Helper to get color based on type
    const getItemColor = (item) => {
        // If completion logic was passed, we could visually indicate 'completed' vs 'current' vs 'pending'
        // For now, distinguishing solely by type per user request
        switch (item.type) {
            case CONTENT_TYPES.INFORMATIONAL: return "bg-cyan-500";
            case CONTENT_TYPES.LESSON: return "bg-emerald-500";
            case CONTENT_TYPES.PROJECT: return "bg-purple-500";
            case CONTENT_TYPES.QUIZ: return "bg-orange-500";
            default: return "bg-gray-500";
        }
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-[#101010] border-b border-[#27272a] h-16 flex items-center px-4 justify-between font-sans">
            {/* LEFT: Logo & Context */}
            <div className="flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="flex items-center justify-center w-8 h-8 rounded hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                >
                    <img src={logo} alt="Home" className="w-6 h-6 opacity-80" />
                </button>

                <div className="h-6 w-[1px] bg-[#3f3f46]" />

                <div className="flex items-center gap-3">
                    <button
                        onClick={onOpenDrawer}
                        className="flex items-col gap-1 px-3 py-1.5 rounded hover:bg-white/10 transition-colors group text-left"
                    >
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest leading-none mb-1">
                                {courseTitle}
                            </span>
                            <span className="text-sm font-bold text-gray-100 group-hover:text-white transition-colors leading-none">
                                {lessonTitle}
                            </span>
                        </div>
                        <RiMenu4Fill className="ml-3 text-gray-500 group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>

            {/* CENTER: Syllabus Dots */}
            {/* Only show if we have unit items */}
            {unitItems.length > 0 && (
                <div className="hidden lg:flex items-center gap-1.5 absolute left-1/2 transform -translate-x-1/2">
                    {unitItems.map((item, idx) => {
                        const isActive = item.id === currentItemId;
                        const colorClass = getItemColor(item);

                        return (
                            <div key={item.id} className="group relative flex items-center py-2 cursor-help">
                                <div
                                    className={clsx(
                                        "rounded-full transition-all duration-300",
                                        isActive ? "w-8 h-1.5 shadow-[0_0_12px_currentColor] opacity-100" : "w-1.5 h-1.5 opacity-30 hover:opacity-80",
                                        colorClass
                                    )}
                                />
                                {/* Tooltip */}
                                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                                    <div className="bg-[#18181b] border border-[#27272a] text-[10px] text-gray-200 px-2 py-1 rounded shadow-xl flex flex-col items-center">
                                        <span className="font-bold text-xs uppercase tracking-wider mb-0.5 text-gray-500">{item.type}</span>
                                        <span>{item.title}</span>
                                    </div>
                                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[4px] border-b-[#27272a] absolute -top-1 left-1/2 -translate-x-1/2 rotate-180 transform -translate-y-[1px]"></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* RIGHT: Tools & Profile */}
            <div className="flex items-center gap-3">
                <button
                    onClick={onAskAI}
                    className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#18181b]/50 border border-[#27272a] rounded-full text-xs font-medium text-gray-400 hover:text-white hover:border-[var(--accent-primary)] hover:bg-[#18181b] transition-all group mr-2"
                >
                    <VscCopilot className="text-[var(--accent-primary)] group-hover:text-white transition-colors" />
                    <span>Ask AI</span>
                </button>

                <div className="h-6 w-[1px] bg-[#3f3f46]" />

                <div className="flex items-center gap-2">
                    <button
                        onClick={onAskAI} // "Get Unstuck" now opens AI
                        className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        <RiQuestionLine size={16} />
                        <span className="hidden sm:inline">Get Unstuck</span>
                    </button>

                    <button className="w-8 h-8 rounded-full bg-gradient-to-tr from-[var(--accent-primary)] to-purple-600 flex items-center justify-center text-white font-bold shadow-lg ml-2">
                        {user?.name?.[0] || 'D'}
                    </button>
                </div>
            </div>
        </header>
    );
}
