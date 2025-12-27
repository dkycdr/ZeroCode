import { useNavigate } from 'react-router-dom';
import { X, CheckCircle2, Circle, Lock, ChevronLeft, Map, PlayCircle, FileText, Code, Settings, Database, Cpu, Activity } from 'lucide-react';
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

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop: Matrix Deep Scan */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[60]"
                    />

                    {/* Drawer Panel: Satellite Node Map */}
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                        className="fixed top-0 left-0 h-full w-[360px] bg-black border-r border-cyan-500/10 z-[70] flex flex-col shadow-[20px_0_50px_rgba(0,0,0,0.8)] font-mono"
                    >
                        {/* CRT Scanline Overlay */}
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(34,211,238,0.01)_1.5px,rgba(34,211,238,0.01)_2px)] pointer-events-none z-0" />

                        {/* Header Section */}
                        <div className="p-6 border-b border-cyan-500/10 relative z-10 bg-zinc-950/50">
                            {/* Top Accent Bar */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500/50 via-transparent to-transparent" />

                            <div className="flex justify-between items-start mb-6">
                                <button
                                    onClick={() => navigate(`/course/${courseId}`)}
                                    className="flex items-center gap-2 text-[10px] font-bold text-cyan-500/50 hover:text-cyan-400 transition-all group"
                                >
                                    <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                                    <span>BACK_TO_SYLLABUS</span>
                                </button>
                                <button
                                    onClick={onClose}
                                    className="text-zinc-600 hover:text-white transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-2 text-[9px] font-bold text-cyan-500/30 uppercase tracking-[0.3em] mb-3">
                                <Map size={12} />
                                <span>SECTOR_TOPOLOGY_V1.0</span>
                            </div>

                            <h2 className="text-sm font-black text-white leading-tight uppercase tracking-wider mb-2">
                                {unitTitle}
                            </h2>
                            <p className="text-[10px] text-zinc-500 leading-relaxed line-clamp-2 border-l border-zinc-800 pl-3">
                                {unitDescription}
                            </p>
                        </div>

                        {/* Neural List: Node Matrix */}
                        <div className="flex-1 overflow-y-auto scrollbar-cyber p-6 relative z-10">
                            {/* Vertical Network Line */}
                            <div className="absolute left-[2.5rem] top-6 bottom-6 w-[1px] bg-gradient-to-b from-cyan-500/20 via-cyan-500/5 to-cyan-500/20" />

                            <div className="space-y-6 relative">
                                {unitItems?.map((item, index) => {
                                    const isCompleted = completedItems?.includes(item.id);
                                    const isActive = item.id === currentItemId;

                                    return (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                navigate(`/learn/${courseId}/${item.id}`);
                                                onClose();
                                            }}
                                            className="group relative flex items-start gap-5 cursor-pointer"
                                        >
                                            {/* Node Connector Bar (Active) */}
                                            {isActive && (
                                                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-cyan-500 shadow-[0_0_15px_cyan]" />
                                            )}

                                            {/* Neural Node Point */}
                                            <div className={clsx(
                                                "relative z-10 w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-300 transform",
                                                isActive
                                                    ? "bg-cyan-500 border-cyan-400 text-black shadow-[0_0_20px_rgba(34,211,238,0.5)] scale-110"
                                                    : isCompleted
                                                        ? "bg-emerald-900/20 border-emerald-500/50 text-emerald-400"
                                                        : "bg-black border-zinc-800 text-zinc-600 group-hover:border-cyan-500/30 group-hover:text-cyan-400"
                                            )}>
                                                {isActive ? (
                                                    <Cpu size={16} className="animate-pulse" />
                                                ) : isCompleted ? (
                                                    <CheckCircle2 size={16} />
                                                ) : (
                                                    <Database size={14} />
                                                )}
                                            </div>

                                            {/* Data Entry Content */}
                                            <div className={clsx(
                                                "flex-1 pt-1 transition-all duration-300",
                                                isActive ? "pl-2" : "group-hover:pl-1"
                                            )}>
                                                <div className={clsx(
                                                    "text-[8px] font-bold uppercase tracking-[0.2em] mb-0.5",
                                                    isActive ? "text-cyan-400" : isCompleted ? "text-emerald-500/50" : "text-zinc-700"
                                                )}>
                                                    DATA_SEGMENT_{index + 1} // {item.type}
                                                </div>
                                                <div className={clsx(
                                                    "text-[11px] font-bold tracking-wide uppercase leading-tight transition-colors",
                                                    isActive ? "text-white" : "text-zinc-500 group-hover:text-zinc-200"
                                                )}>
                                                    {item.title}
                                                </div>
                                            </div>

                                            {/* Animated Scan Bar on Hover */}
                                            <div className="absolute inset-y-[-8px] right-0 w-0 bg-cyan-500/5 group-hover:w-full transition-all duration-300 -z-0 rounded-sm" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Footer Diagnostics */}
                        <div className="p-4 border-t border-cyan-500/10 bg-zinc-950/80 backdrop-blur-sm relative z-10">
                            <div className="flex items-center justify-between mb-3 text-[9px] font-bold text-zinc-600 tracking-widest">
                                <span className="flex items-center gap-2">
                                    <Activity size={10} className="text-cyan-500 animate-pulse" />
                                    TELEMETRY_FEED
                                </span>
                                <span className="text-emerald-500/50">ENCRYPTED</span>
                            </div>
                            <div className="grid grid-cols-4 gap-1 h-1">
                                <div className="bg-cyan-500 animate-pulse" />
                                <div className="bg-cyan-500/40" />
                                <div className="bg-cyan-950" />
                                <div className="bg-emerald-500/20" />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
