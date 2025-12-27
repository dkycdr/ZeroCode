import { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';
import clsx from 'clsx';

export default function QuizPane({ quiz, onComplete }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [quizComplete, setQuizComplete] = useState(false);

    const question = quiz.questions[currentQuestion];
    const isCorrect = selectedAnswer === question?.correctIndex;
    const score = answers.filter((a, i) => a === quiz.questions[i].correctIndex).length;
    const percentage = Math.round((score / quiz.questions.length) * 100);

    const handleSelect = (index) => { if (!showResult) setSelectedAnswer(index); };
    const handleCheck = () => { if (selectedAnswer !== null) { setShowResult(true); setAnswers([...answers, selectedAnswer]); } };
    const handleNext = () => {
        if (currentQuestion < quiz.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1); setSelectedAnswer(null); setShowResult(false);
        } else { setQuizComplete(true); if (percentage >= 70) onComplete?.(); }
    };
    const handleRetry = () => { setCurrentQuestion(0); setSelectedAnswer(null); setShowResult(false); setAnswers([]); setQuizComplete(false); };

    if (quizComplete) {
        const passed = percentage >= 70;
        return (
            <div className="h-full flex flex-col items-center justify-center p-8 bg-black text-center relative overflow-hidden font-mono">
                {/* CRT Overlay */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(34,211,238,0.02)_1px,rgba(34,211,238,0.02)_2px)] pointer-events-none z-10" />
                <div className="absolute inset-0 bg-radial-gradient(circle, transparent 60%, black 100%) pointer-events-none z-10 opacity-60" />

                <div className="relative z-20 w-full max-w-md p-10 flex flex-col items-center border border-cyan-500/20 bg-zinc-900/50 backdrop-blur-sm">
                    {/* Decorative Corner Accents */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-500" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-cyan-500" />
                    <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-cyan-500" />
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-500" />

                    <div className={clsx("w-24 h-24 rounded-full flex items-center justify-center mb-6 border-[3px] shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-black", passed ? "border-emerald-500 shadow-emerald-500/20" : "border-red-500 shadow-red-500/20")}>
                        {passed ? <CheckCircle2 size={48} className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" /> : <XCircle size={48} className="text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.5)]" />}
                    </div>

                    <h2 className={clsx("text-2xl font-bold mb-2 uppercase tracking-widest", passed ? "text-emerald-400" : "text-red-400")}>
                        {passed ? "PROTOCOL_VERIFIED" : "VERIFICATION_FAILED"}
                    </h2>
                    <p className="text-cyan-500/50 mb-8 text-xs uppercase tracking-[0.2em]">Accuracy: {score}/{quiz.questions.length} ({percentage}%)</p>

                    <div className="flex gap-4 w-full">
                        {!passed && (
                            <button onClick={handleRetry} className="flex-1 py-3 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-950/20 rounded-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-xs">
                                <RotateCcw size={14} /> REBOOT
                            </button>
                        )}
                        <button onClick={() => passed ? onComplete?.() : handleRetry()}
                            className={clsx("flex-1 py-3 rounded-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg text-xs",
                                passed ? "bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.3)]" : "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]")}
                        >
                            {passed ? "COMPLETE_SEQUENCE" : "RETRY_MODULE"} <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-black font-sans relative">
            {/* CRT Overlay */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(34,211,238,0.02)_1px,rgba(34,211,238,0.02)_2px)] pointer-events-none z-0" />

            {/* Header */}
            <div className="px-6 py-4 border-b border-cyan-500/10 bg-black relative z-10">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-cyan-500/50 uppercase tracking-[0.2em] flex items-center gap-2">
                        <HelpCircle size={14} />
                        KNOWLEDGE_CHECK
                    </span>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                        0{currentQuestion + 1} / 0{quiz.questions.length}
                    </span>
                </div>
                <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 transition-all duration-300 shadow-[0_0_10px_cyan]" style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / quiz.questions.length) * 100}%` }} />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 relative z-10 custom-scrollbar">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-xl font-bold text-zinc-100 mb-8 leading-snug font-mono border-l-2 border-cyan-500 pl-4">{question.question}</h2>

                    <div className="space-y-3">
                        {question.options.map((option, index) => {
                            const isSelected = selectedAnswer === index;
                            const isCorrectAnswer = index === question.correctIndex;
                            let cardClass = "bg-zinc-900/40 border-zinc-800 text-zinc-400 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-950/10";

                            if (showResult) {
                                if (isCorrectAnswer) cardClass = "bg-emerald-950/30 border-emerald-500/50 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
                                else if (isSelected) cardClass = "bg-red-950/30 border-red-500/50 text-red-400";
                                else cardClass = "opacity-30 border-transparent bg-black";
                            } else if (isSelected) {
                                cardClass = "bg-cyan-950/30 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]";
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleSelect(index)}
                                    disabled={showResult}
                                    className={clsx(
                                        "w-full p-4 rounded-sm border text-left transition-all duration-200 group relative overflow-hidden font-mono text-sm",
                                        cardClass
                                    )}
                                >
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className={clsx(
                                            "w-6 h-6 flex items-center justify-center font-bold text-xs border transition-colors",
                                            isSelected || (showResult && isCorrectAnswer)
                                                ? "bg-transparent border-current"
                                                : "bg-transparent border-zinc-700 group-hover:border-current"
                                        )}>
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                        <span className="font-medium flex-1 tracking-wide">{option}</span>
                                        {showResult && isCorrectAnswer && <CheckCircle2 size={16} className="text-emerald-400 ml-2" />}
                                        {showResult && isSelected && !isCorrectAnswer && <XCircle size={16} className="text-red-400 ml-2" />}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {showResult && (
                        <div className={clsx(
                            "mt-8 p-6 border-l-2 animate-fade-in-up bg-black/50 backdrop-blur-sm",
                            isCorrect ? "border-emerald-500" : "border-yellow-500"
                        )}>
                            <div className="flex items-center gap-3 mb-2">
                                {isCorrect ? <CheckCircle2 size={16} className="text-emerald-400" /> : <XCircle size={16} className="text-yellow-400" />}
                                <span className={clsx("font-bold text-sm uppercase tracking-wider", isCorrect ? "text-emerald-400" : "text-yellow-400")}>
                                    {isCorrect ? "ANALYSIS_CONFIRMED" : "ANALYSIS_REJECTED"}
                                </span>
                            </div>
                            <p className={clsx("text-xs leading-relaxed font-mono", isCorrect ? "text-emerald-400/70" : "text-yellow-400/70")}>
                                {question.explanation}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-cyan-500/10 bg-black flex justify-center relative z-20">
                <div className="w-full max-w-3xl">
                    {!showResult ? (
                        <button
                            onClick={handleCheck}
                            disabled={selectedAnswer === null}
                            className={clsx(
                                "w-full py-3 rounded-sm font-bold uppercase tracking-[0.2em] transition-all text-xs border",
                                selectedAnswer !== null
                                    ? "bg-cyan-500 text-black border-cyan-400 hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                                    : "bg-zinc-900 text-zinc-600 border-zinc-800 cursor-not-allowed"
                            )}
                        >
                            SUBMIT_ANSWER
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="w-full py-3 bg-emerald-500 text-black border border-emerald-400 rounded-sm font-bold uppercase tracking-[0.2em] hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2 text-xs"
                        >
                            {currentQuestion < quiz.questions.length - 1 ? "NEXT_SEQUENCE" : "VIEW_RESULTS"}
                            <ArrowRight size={14} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
