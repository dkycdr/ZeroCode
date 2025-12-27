import { useNavigate } from 'react-router-dom';
import { Menu, ChevronLeft, Activity, Bot, Zap } from 'lucide-react';
import clsx from 'clsx';
import { useAuth } from '../../contexts/AuthProvider';
import AvatarWithBorder from '../common/AvatarWithBorder';

export default function LearningNavbar({
    courseTitle,
    lessonTitle,
    unitItems = [],
    currentItemId,
    courseId,
    onOpenDrawer,
    onOpenVault, // NEW PROP
    onAskAI,
    onBack
}) {
    const { user } = useAuth();
    const navigate = useNavigate();

    // Calculate Progress
    const currentIndex = unitItems.findIndex(i => i.id === currentItemId);
    const progressPercentage = ((currentIndex + 1) / unitItems.length) * 100;

    return (
        <header className="fixed top-0 w-full z-50 h-14 bg-black border-b border-cyan-500/10 flex items-center justify-between px-6 font-mono select-none">
            {/* Neural Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900">
                <div
                    className="h-full bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-700 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                />
            </div>

            {/* LEFT: System Navigation */}
            <div className="flex items-center gap-6 relative z-10">
                <button
                    onClick={onBack}
                    className="group flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-all"
                >
                    <div className="p-1 rounded-sm border border-zinc-800 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all">
                        <ChevronLeft size={16} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">EXIT_NODE</span>
                </button>

                <div className="h-6 w-[1px] bg-cyan-500/10" />

                <div
                    className="flex flex-col cursor-pointer group"
                    onClick={onOpenDrawer}
                >
                    <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[9px] font-bold text-cyan-500/50 uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-colors">
                            {courseTitle || 'SYSTEM_CORE'}
                        </span>
                        <div className="w-1 h-1 rounded-full bg-cyan-500/30 animate-pulse" />
                    </div>
                    <div className="flex items-center gap-2">
                        <h1 className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors tracking-[0.1em] uppercase">
                            {lessonTitle}
                        </h1>
                        <Menu size={12} className="text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                </div>
            </div>

            {/* CENTER: Telemetry Data */}
            <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-4 px-4 py-1.5 border border-cyan-500/5 bg-zinc-900/30">
                    <div className="flex items-center gap-2">
                        <Activity size={12} className="text-emerald-500 animate-pulse" />
                        <span className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">
                            LINK_ACTIVE
                        </span>
                    </div>
                    <div className="w-px h-3 bg-cyan-500/10" />
                    <div className="flex items-center gap-2">
                        <Zap size={12} className="text-yellow-500" />
                        <span className="text-[9px] text-cyan-500/70 font-bold tracking-widest uppercase">
                            {unitItems.length > 0 ? `${currentIndex + 1} / ${unitItems.length} NODES_SYNCED` : 'SCANNING...'}
                        </span>
                    </div>
                </div>
            </div>

            {/* RIGHT: Neural Interface */}
            <div className="flex items-center gap-4 relative z-10">
                <button
                    onClick={onOpenVault}
                    className="flex items-center gap-2 px-4 py-1.5 bg-zinc-900/50 border border-white/5 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group rounded-sm"
                >
                    <Activity size={14} className="text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-[10px] font-bold text-zinc-400 group-hover:text-cyan-100 uppercase tracking-widest">ARCHIVES</span>
                </button>

                <div className="h-4 w-[1px] bg-cyan-500/10" />

                <button
                    onClick={onAskAI}
                    className="flex items-center gap-2 px-4 py-1.5 bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group rounded-sm"
                >
                    <Bot size={14} className="text-cyan-400 group-hover:rotate-12 transition-transform" />
                    <span className="text-[10px] font-bold text-cyan-100 uppercase tracking-widest">NEURAL_LINK</span>
                </button>

                <div className="h-4 w-[1px] bg-cyan-500/10" />

                <button
                    onClick={() => navigate('/profile')}
                    className="relative group p-0.5 border border-transparent hover:border-cyan-500/30 transition-all rounded-sm"
                >
                    <AvatarWithBorder
                        url={user?.avatar}
                        name={user?.name}
                        border={user?.border || 'default'}
                        size="sm"
                        className="w-7 h-7"
                    />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-500 border border-black rounded-full shadow-[0_0_5px_emerald]" />
                </button>
            </div>
        </header>
    );
}
