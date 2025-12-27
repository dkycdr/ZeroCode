import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle2, Terminal, Menu, ArrowRight, RefreshCw } from 'lucide-react';
import clsx from 'clsx';

export default function Footer({ onRun, onCheck, isRunning, isChecking, toggleConsole, isConsoleOpen, onNext }) {
    const navigate = useNavigate();

    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full h-10 bg-black border-t border-cyan-500/20 flex items-center justify-between px-4 z-50 select-none backdrop-blur-sm bg-black/90">
            {/* LEFT: System Menu */}
            <div className="flex items-center gap-1">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 text-zinc-500 hover:text-cyan-400 px-3 py-1.5 transition-colors text-[10px] font-mono uppercase tracking-[0.2em] group rounded-sm hover:bg-white/5"
                >
                    <Menu size={14} className="group-hover:rotate-180 transition-transform duration-500" />
                    <span className="hidden sm:inline">SYS_MENU</span>
                </button>
            </div>

            {/* CENTER: Console Toggle */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full flex items-center">
                <button
                    onClick={toggleConsole}
                    className={clsx(
                        "group flex items-center gap-2 px-6 h-full transition-all duration-300 border-x border-transparent",
                        isConsoleOpen
                            ? "bg-cyan-950/20 border-cyan-500/10 text-cyan-400"
                            : "bg-transparent text-zinc-500 hover:text-cyan-400 hover:bg-white/5"
                    )}
                >
                    <Terminal size={14} className={clsx("transition-colors", isConsoleOpen ? "text-cyan-400" : "group-hover:text-cyan-400")} />
                    <span className="hidden md:inline text-[10px] font-mono font-bold uppercase tracking-widest">
                        {isConsoleOpen ? 'TERMINAL_ACTIVE' : 'TERMINAL'}
                    </span>
                    <div className={clsx(
                        "w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor] transition-colors ml-1",
                        isConsoleOpen ? "bg-cyan-500 animate-pulse" : "bg-zinc-700"
                    )} />
                </button>
            </div>

            {/* RIGHT: Action Deck */}
            <div className="flex items-center gap-2">
                {/* RUN Button */}
                <button
                    onClick={onRun}
                    disabled={isRunning}
                    className={clsx(
                        "relative group flex items-center gap-2 px-4 py-1.5 rounded-sm transition-all overflow-hidden border border-transparent",
                        "text-zinc-400 hover:text-cyan-400 hover:bg-cyan-950/20 hover:border-cyan-500/20",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                >
                    <Play size={14} className={clsx("relative z-10", isRunning ? "animate-spin text-yellow-500" : "fill-current")} />
                    <span className="relative z-10 text-[10px] font-mono font-bold uppercase tracking-wider hidden sm:inline">
                        {isRunning ? 'PROCESSING...' : 'RUN'}
                    </span>
                </button>

                {/* CHECK / SUBMIT Button */}
                <button
                    onClick={onCheck}
                    disabled={isChecking}
                    className={clsx(
                        "relative overflow-hidden flex items-center gap-2 px-4 py-1.5 rounded-sm transition-all shadow-lg group border border-transparent",
                        "bg-cyan-600 hover:bg-cyan-500 text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]",
                        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-cyan-600 disabled:hover:shadow-none"
                    )}
                >
                    {isChecking ? (
                        <RefreshCw size={14} className="animate-spin" />
                    ) : (
                        <CheckCircle2 size={14} className="text-black group-hover:scale-110 transition-transform" />
                    )}
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest">
                        {isChecking ? 'VERIFYING...' : 'VERIFY'}
                    </span>
                </button>

                {/* NEXT Button (Appears when passed) */}
                {onNext && (
                    <div className="pl-2 border-l border-zinc-800 ml-1">
                        <button
                            onClick={onNext}
                            className="flex items-center gap-2 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-black rounded-sm font-bold text-[10px] uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                        >
                            <span>NEXT</span>
                            <ArrowRight size={14} />
                        </button>
                    </div>
                )}
            </div>
        </footer>
    );
}
