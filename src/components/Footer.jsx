import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle2, Terminal, Menu, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

export default function Footer({ onRun, onCheck, isRunning, isChecking, toggleConsole, isConsoleOpen, onNext }) {
    const navigate = useNavigate();

    return (
        <footer className="h-14 bg-[#0a0a0a] border-t border-white/10 flex items-center justify-between px-4 sticky bottom-0 z-20">
            <div className="flex items-center">
                <button
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-2 text-gray-400 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium"
                >
                    <Menu size={16} />
                    <span className="hidden sm:inline">Menu</span>
                </button>
            </div>

            <div className="flex items-center absolute left-1/2 transform -translate-x-1/2">
                <button
                    onClick={toggleConsole}
                    className={clsx(
                        "flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all border",
                        isConsoleOpen
                            ? "bg-white/10 text-white border-white/20"
                            : "bg-white/5 text-gray-400 border-white/10 hover:border-white/20 hover:text-white"
                    )}
                >
                    <Terminal size={14} />
                    <span>Console</span>
                    <div className={clsx("w-1.5 h-1.5 rounded-full", isConsoleOpen ? "bg-green-400" : "bg-gray-600")}></div>
                </button>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={onRun}
                    disabled={isRunning}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-all text-sm font-medium border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Play size={14} className={isRunning ? "animate-spin" : "fill-current"} />
                    <span>Run</span>
                </button>

                <button
                    onClick={onCheck}
                    disabled={isChecking}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-all text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isChecking ? (
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    ) : (
                        <CheckCircle2 size={14} />
                    )}
                    <span>Check</span>
                </button>

                {onNext && (
                    <button
                        onClick={onNext}
                        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all text-sm font-semibold"
                    >
                        <span>Next</span>
                        <ArrowRight size={14} />
                    </button>
                )}
            </div>
        </footer>
    );
}
