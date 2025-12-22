import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Menu, Terminal, Sparkles, CheckCircle2, ChevronLeft, Activity, Bot } from 'lucide-react';
import clsx from 'clsx';
import logo from '../../assets/logo.png';
import { useAuth } from '../../contexts/AuthProvider';
import AvatarWithBorder from '../common/AvatarWithBorder';
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

    // Calculate Progress for the "Loading Bar" effect background
    const currentIndex = unitItems.findIndex(i => i.id === currentItemId);
    const progressPercentage = ((currentIndex + 1) / unitItems.length) * 100;

    return (
        <header className="fixed top-0 w-full z-50 h-16 bg-[#050505] border-b border-white/5 flex items-center justify-between px-4 font-sans select-none">
            {/* Background Progress Effect */}
            <div
                className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
            />

            {/* LEFT: Neural Navigation */}
            <div className="flex items-center gap-6 relative z-10">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                    <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-white/30 transition-all">
                        <ChevronLeft size={16} />
                    </div>
                </button>

                <div className="h-8 w-px bg-white/10 rotate-12" />

                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={onOpenDrawer}
                >
                    <div className="flex flex-col">
                        <span className="text-[9px] font-mono font-bold text-indigo-400 uppercase tracking-[0.2em] mb-0.5 group-hover:text-indigo-300 transition-colors">
                            {courseTitle}
                        </span>
                        <div className="flex items-center gap-2">
                            <h1 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors tracking-tight">
                                {lessonTitle}
                            </h1>
                            <Menu size={14} className="text-gray-600 group-hover:text-gray-400 transition-colors" />
                        </div>
                    </div>
                </div>
            </div>

            {/* CENTER: Mission Status (Only visible on large screens) */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
                    <Activity size={14} className="text-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-gray-400">
                        LINK ESTABLISHED
                    </span>
                    <span className="w-px h-3 bg-white/10 mx-2" />
                    <span className="text-[10px] font-mono text-indigo-400">
                        {unitItems.length > 0 ? `${currentIndex + 1} / ${unitItems.length} NODES` : 'STANDBY'}
                    </span>
                </div>
            </div>

            {/* RIGHT: Tools & User */}
            <div className="flex items-center gap-4 relative z-10">
                <button
                    onClick={onAskAI}
                    className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all group"
                >
                    <Bot size={16} className="text-indigo-400 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-bold text-indigo-100">AI ASSIST</span>
                </button>

                <div className="h-6 w-px bg-white/10" />

                <button
                    className="relative w-8 h-8 rounded-full transition-transform hover:scale-105"
                >
                    <AvatarWithBorder
                        url={user?.avatar}
                        name={user?.name}
                        border={user?.border}
                        size="sm"
                        className="w-full h-full"
                    />
                </button>
            </div>
        </header>
    );
}
