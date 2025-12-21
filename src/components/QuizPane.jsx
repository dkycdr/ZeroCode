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
            <div className="h-full flex flex-col items-center justify-center p-8 bg-[var(--bg-primary)] text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-panel)] to-[var(--bg-primary)] z-0" />

                <div className="relative z-10 w-full max-w-md card-cyber p-10 flex flex-col items-center">
                    <div className={clsx("w-24 h-24 rounded-full flex items-center justify-center mb-6 border-4 shadow-lg", passed ? "bg-green-500/10 border-green-500/30 shadow-green-500/20" : "bg-red-500/10 border-red-500/30 shadow-red-500/20")}>
                        {passed ? <CheckCircle2 size={48} className="text-green-400" /> : <XCircle size={48} className="text-red-400" />}
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-2">{passed ? "Protocol Verified" : "Verification Failed"}</h2>
                    <p className="text-gray-400 mb-8 font-mono text-sm">Score: {score}/{quiz.questions.length} ({percentage}%)</p>

                    <div className="flex gap-4 w-full">
                        {!passed && (
                            <button onClick={handleRetry} className="flex-1 py-3 bg-[var(--bg-panel)] text-white rounded-lg font-bold uppercase tracking-wider hover:bg-white/10 border border-[var(--border-subtle)] flex items-center justify-center gap-2 transition-all">
                                <RotateCcw size={16} /> Retry
                            </button>
                        )}
                        <button onClick={() => passed ? onComplete?.() : handleRetry()}
                            className={clsx("flex-1 py-3 rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg",
                                passed ? "bg-[var(--accent-primary)] text-white hover:bg-blue-600 shadow-blue-500/20" : "bg-white text-black hover:bg-gray-200")}
                        >
                            {passed ? "Continue" : "Try Again"} <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-[var(--bg-primary)] font-sans">
            {/* Header */}
            <div className="px-6 py-6 border-b border-[var(--border-subtle)] bg-[var(--bg-panel)]">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                        <HelpCircle size={14} />
                        Assessment Progress
                    </span>
                    <span className="text-xs font-mono font-bold text-[var(--accent-primary)]">
                        {currentQuestion + 1} / {quiz.questions.length}
                    </span>
                </div>
                <div className="h-1.5 bg-[#27272a] rounded-full overflow-hidden">
                    <div className="h-full bg-[var(--accent-primary)] transition-all duration-300 shadow-[0_0_10px_var(--accent-glow)]" style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / quiz.questions.length) * 100}%` }} />
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 relative">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8 leading-snug">{question.question}</h2>

                    <div className="space-y-4">
                        {question.options.map((option, index) => {
                            const isSelected = selectedAnswer === index;
                            const isCorrectAnswer = index === question.correctIndex;
                            let cardClass = "bg-[var(--bg-panel)] border-[var(--border-subtle)] text-gray-300 hover:border-[var(--accent-primary)] hover:text-white";

                            if (showResult) {
                                if (isCorrectAnswer) cardClass = "bg-green-500/10 border-green-500/50 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.1)]";
                                else if (isSelected) cardClass = "bg-red-500/10 border-red-500/50 text-red-400";
                                else cardClass = "opacity-50 border-transparent bg-black/20";
                            } else if (isSelected) {
                                cardClass = "bg-[var(--accent-primary)]/10 border-[var(--accent-primary)] text-white shadow-[0_0_15px_rgba(59,130,246,0.1)]";
                            }

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleSelect(index)}
                                    disabled={showResult}
                                    className={clsx(
                                        "w-full p-5 rounded-xl border text-left transition-all duration-200 group relative overflow-hidden",
                                        cardClass
                                    )}
                                >
                                    <div className="flex items-center gap-5 relative z-10">
                                        <div className={clsx(
                                            "w-8 h-8 rounded-lg flex items-center justify-center font-bold font-mono text-sm border transition-colors",
                                            isSelected || (showResult && isCorrectAnswer)
                                                ? "bg-[var(--bg-primary)] border-current"
                                                : "bg-[var(--bg-primary)] border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)]"
                                        )}>
                                            {String.fromCharCode(65 + index)}
                                        </div>
                                        <span className="font-medium text-base flex-1">{option}</span>
                                        {showResult && isCorrectAnswer && <CheckCircle2 size={20} className="text-green-400 ml-2" />}
                                        {showResult && isSelected && !isCorrectAnswer && <XCircle size={20} className="text-red-400 ml-2" />}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {showResult && (
                        <div className={clsx(
                            "mt-8 p-6 rounded-xl border animate-fade-in-up",
                            isCorrect ? "bg-green-500/5 border-green-500/20" : "bg-amber-500/5 border-amber-500/20"
                        )}>
                            <div className="flex items-center gap-3 mb-3">
                                {isCorrect ? <CheckCircle2 size={20} className="text-green-400" /> : <XCircle size={20} className="text-amber-400" />}
                                <span className={clsx("font-bold text-lg", isCorrect ? "text-green-400" : "text-amber-400")}>
                                    {isCorrect ? "Correct Analysis" : "Incorrect Analysis"}
                                </span>
                            </div>
                            <p className={clsx("text-sm leading-relaxed", isCorrect ? "text-green-400/80" : "text-amber-400/80")}>
                                {question.explanation}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-[var(--border-subtle)] bg-[var(--bg-panel)] flex justify-center">
                <div className="w-full max-w-3xl">
                    {!showResult ? (
                        <button
                            onClick={handleCheck}
                            disabled={selectedAnswer === null}
                            className={clsx(
                                "w-full py-4 rounded-lg font-bold uppercase tracking-wider transition-all",
                                selectedAnswer !== null
                                    ? "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                    : "bg-white/5 text-gray-500 cursor-not-allowed border border-white/5"
                            )}
                        >
                            Submit Answer
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="w-full py-4 bg-[var(--accent-primary)] text-white rounded-lg font-bold uppercase tracking-wider hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center gap-2"
                        >
                            {currentQuestion < quiz.questions.length - 1 ? "Next System" : "View Results"}
                            <ArrowRight size={18} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
