import { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react';
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
            <div className="h-full flex flex-col items-center justify-center p-8 bg-[#0a0a0a]">
                <div className={clsx("w-24 h-24 rounded-full flex items-center justify-center mb-6 border", passed ? "bg-green-500/10 border-green-500/30" : "bg-red-500/10 border-red-500/30")}>
                    {passed ? <CheckCircle2 size={48} className="text-green-400" /> : <XCircle size={48} className="text-red-400" />}
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{passed ? "Quiz Passed!" : "Keep Practicing"}</h2>
                <p className="text-gray-400 mb-8">You scored {score} out of {quiz.questions.length} ({percentage}%)</p>
                <div className="flex gap-3">
                    {!passed && <button onClick={handleRetry} className="flex items-center gap-2 px-6 py-3 bg-white/5 text-white rounded-lg font-medium hover:bg-white/10 border border-white/10"><RotateCcw size={16} />Try Again</button>}
                    <button onClick={() => onComplete?.()} className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200">Continue<ArrowRight size={16} /></button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col bg-[#0a0a0a]">
            <div className="p-4 border-b border-white/10">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Question {currentQuestion + 1} of {quiz.questions.length}</span>
                    <span className="text-sm text-white">{Math.round((currentQuestion / quiz.questions.length) * 100)}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-white transition-all" style={{ width: `${((currentQuestion + (showResult ? 1 : 0)) / quiz.questions.length) * 100}%` }} />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto p-8">
                <h2 className="text-xl font-bold text-white mb-8">{question.question}</h2>
                <div className="space-y-3">{question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index, isCorrectAnswer = index === question.correctIndex;
                    let styles = "bg-[#111111] border-white/10 text-white hover:bg-white/5";
                    if (showResult) { if (isCorrectAnswer) styles = "bg-green-500/10 border-green-500/30 text-green-400"; else if (isSelected) styles = "bg-red-500/10 border-red-500/30 text-red-400"; }
                    else if (isSelected) styles = "bg-white/10 border-white/30 text-white";
                    return (<button key={index} onClick={() => handleSelect(index)} disabled={showResult} className={clsx("w-full p-4 rounded-xl border text-left transition-all", styles)}>
                        <div className="flex items-center gap-4">
                            <div className={clsx("w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm border", isSelected || (showResult && isCorrectAnswer) ? "bg-white/10 border-white/20" : "bg-white/5 border-white/10 text-gray-500")}>{String.fromCharCode(65 + index)}</div>
                            <span className="font-medium">{option}</span>
                            {showResult && isCorrectAnswer && <CheckCircle2 size={18} className="ml-auto text-green-400" />}
                            {showResult && isSelected && !isCorrectAnswer && <XCircle size={18} className="ml-auto text-red-400" />}
                        </div>
                    </button>);
                })}</div>
                {showResult && <div className={clsx("mt-6 p-4 rounded-xl border", isCorrect ? "bg-green-500/5 border-green-500/20" : "bg-amber-500/5 border-amber-500/20")}>
                    <div className="flex items-center gap-2 mb-2">{isCorrect ? <CheckCircle2 size={18} className="text-green-400" /> : <XCircle size={18} className="text-amber-400" />}<span className={clsx("font-semibold", isCorrect ? "text-green-400" : "text-amber-400")}>{isCorrect ? "Correct!" : "Not quite"}</span></div>
                    <p className={clsx("text-sm", isCorrect ? "text-green-400/80" : "text-amber-400/80")}>{question.explanation}</p>
                </div>}
            </div>
            <div className="p-4 border-t border-white/10">
                {!showResult ? <button onClick={handleCheck} disabled={selectedAnswer === null} className={clsx("w-full py-3 rounded-lg font-semibold", selectedAnswer !== null ? "bg-white text-black hover:bg-gray-200" : "bg-white/10 text-gray-500 cursor-not-allowed")}>Check Answer</button>
                : <button onClick={handleNext} className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 flex items-center justify-center gap-2">{currentQuestion < quiz.questions.length - 1 ? "Next Question" : "See Results"}<ArrowRight size={16} /></button>}
            </div>
        </div>
    );
}
