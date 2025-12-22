import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle2, Terminal, Menu, ArrowRight, Zap, RefreshCw } from 'lucide-react';
import clsx from 'clsx';

export default function Footer({ onRun, onCheck, isRunning, isChecking, toggleConsole, isConsoleOpen, onNext }) {
    const navigate = useNavigate();

    return (
        <footer className="fixed bottom-0 left-0 right-0 w-full h-14 bg-[#050505] border-t border-white/5 flex items-center justify-between px-4 z-50 select-none">
            {/* LEFT: System Menu */}
            <div className="flex items-center gap-4">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 text-gray-500 hover:text-white px-3 py-2 transition-colors text-xs font-mono uppercase tracking-wider group"
                >
                    <Menu size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">System Menu</span>
                </button>
            </div>

            {/* CENTER: Console Toggle */}
            <div className="absolute left-1/2 -translate-x-1/2">
                <button
                    onClick={toggleConsole}
                    className={clsx(
                        "group relative flex items-center gap-3 px-6 py-1.5 rounded-full border transition-all duration-300",
                        isConsoleOpen
                            ? "bg-white/5 border-indigo-500/50 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                            : "bg-transparent border-white/10 text-gray-500 hover:border-white/30 hover:text-gray-300"
                    )}
                >
                    <Terminal size={14} className={clsx("transition-colors", isConsoleOpen ? "text-indigo-400" : "group-hover:text-white")} />
                    <span className="hidden md:inline text-[10px] font-mono font-bold uppercase tracking-widest">
                        {isConsoleOpen ? 'Terminal Active' : 'Toggle Terminal'}
                    </span>
                    <div className={clsx(
                        "w-1.5 h-1.5 rounded-full shadow-[0_0_5px_currentColor] transition-colors",
                        isConsoleOpen ? "bg-indigo-500 animate-pulse" : "bg-gray-700"
                    )} />
                </button>
            </div>

            {/* RIGHT: Action Deck */}
            <div className="flex items-center gap-3">
                {/* RUN Button */}
                <button
                    onClick={onRun}
                    disabled={isRunning}
                    className={clsx(
                        "relative group flex items-center gap-2 px-4 py-2 rounded bg-[#0a0a0c] border border-white/10 text-gray-300 transition-all overflow-hidden",
                        "hover:border-white/30 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                    )}
                >
                    <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <Play size={14} className={clsx("relative z-10", isRunning ? "animate-spin text-yellow-400" : "fill-current")} />
                    <span className="relative z-10 text-[10px] font-mono font-bold uppercase tracking-wider hidden sm:inline">
                        {isRunning ? 'EXECUTING...' : 'RUN SEQUENCE'}
                    </span>
                </button>

                {/* CHECK / SUBMIT Button */}
                <button
                    onClick={onCheck}
                    disabled={isChecking}
                    className={clsx(
                        "relative overflow-hidden flex items-center gap-2 px-5 py-2 rounded bg-white text-black transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed group"
                    )}
                >
                    {isChecking ? (
                        <RefreshCw size={14} className="animate-spin" />
                    ) : (
                        <CheckCircle2 size={14} className="text-indigo-600 group-hover:text-indigo-800 transition-colors" />
                    )}
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
                        {isChecking ? 'VERIFYING...' : 'VERIFY INTEGRITY'}
                    </span>

                    {/* Gloss Effect */}
                    <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] group-hover:animate-shine" />
                </button>

                {/* NEXT Button (Appears when passed) */}
                {onNext && (
                    <div className="pl-3 border-l border-white/10 ml-1">
                        <button
                            onClick={onNext}
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black rounded font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]"
                        >
                            <span>NEXT MODULE</span>
                            <ArrowRight size={14} />
                        </button>
                    </div>
                )}
            </div>
        </footer>
    );
}
