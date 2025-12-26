import { useState } from 'react';
import Editor from '@monaco-editor/react';
import { RiScan2Line, RiCheckLine, RiCloseLine, RiInfoCardLine } from 'react-icons/ri';

export default function AdminRegexPlayground() {
    const [code, setCode] = useState('// Ketik kode yang mau dites di sini\nfunction greet() {\n  console.log("Hello");\n}');
    const [regexStr, setRegexStr] = useState('function\\s+greet\\s*\\(');
    const [isMatch, setIsMatch] = useState(null);
    const [error, setError] = useState(null);

    const handleTest = () => {
        try {
            setError(null);
            const regex = new RegExp(regexStr, 'i');
            setIsMatch(regex.test(code));
        } catch (e) {
            setError(e.message);
            setIsMatch(null);
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white p-8 font-mono">
            <div className="max-w-5xl mx-auto">
                <header className="mb-8 border-b border-indigo-500/20 pb-6 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold uppercase tracking-[0.2em] flex items-center gap-3">
                            <RiScan2Line className="text-indigo-500" /> Regex Playground
                        </h1>
                        <p className="text-indigo-400/60 text-xs mt-2 uppercase tracking-widest">Administrative Task Validation Tool</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-indigo-950/30 border border-indigo-900/50 px-4 py-2 rounded text-[10px] text-indigo-400">
                            MODE: VALIDATOR_TESTING
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div className="space-y-6">
                        <section className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                            <div className="px-4 py-2 bg-white/5 border-b border-white/10 text-[10px] uppercase font-bold text-indigo-400">
                                1. Sample Code Preview
                            </div>
                            <Editor
                                height="300px"
                                defaultLanguage="javascript"
                                theme="vs-dark"
                                value={code}
                                onChange={(v) => setCode(v)}
                                options={{
                                    minimap: { enabled: false },
                                    fontSize: 14,
                                    padding: { top: 16 }
                                }}
                            />
                        </section>

                        <section className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <label className="block text-[10px] uppercase font-bold text-indigo-400 mb-2">
                                2. Regex Pattern (String Format)
                            </label>
                            <input
                                type="text"
                                value={regexStr}
                                onChange={(e) => setRegexStr(e.target.value)}
                                placeholder="e.g. function\\s+greet"
                                className="w-full bg-black border border-indigo-900/50 rounded p-4 text-indigo-200 focus:outline-none focus:border-indigo-500 transition-colors"
                            />
                            <p className="text-[10px] text-indigo-400/40 mt-2 uppercase">
                                Note: Use double backslashes for escaping (e.g. \\s instead of \s) as it's a string input.
                            </p>
                        </section>

                        <button
                            onClick={handleTest}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
                        >
                            RUN VALIDATION SEQUENCE
                        </button>
                    </div>

                    {/* Result Section */}
                    <div className="space-y-6">
                        <section className={clsx(
                            "h-full border rounded-xl flex flex-col items-center justify-center p-12 transition-all duration-500",
                            isMatch === null && !error ? "bg-white/5 border-white/10" :
                                error ? "bg-red-950/20 border-red-500/50" :
                                    isMatch ? "bg-emerald-950/20 border-emerald-500/50" : "bg-red-950/20 border-red-500/50"
                        )}>
                            {isMatch === null && !error && (
                                <div className="text-center">
                                    <RiInfoCardLine size={48} className="text-indigo-500/30 mx-auto mb-4" />
                                    <p className="text-indigo-400/40 text-sm uppercase tracking-widest leading-relaxed">
                                        Click "RUN VALIDATION" <br /> to test your pattern
                                    </p>
                                </div>
                            )}

                            {error && (
                                <div className="text-center">
                                    <RiCloseLine size={48} className="text-red-500 mx-auto mb-4" />
                                    <p className="text-red-400 font-bold uppercase mb-2">Regex Error</p>
                                    <p className="text-red-400/60 text-[10px] break-all max-w-[200px] mx-auto">{error}</p>
                                </div>
                            )}

                            {isMatch !== null && !error && (
                                <div className="text-center animate-in zoom-in duration-300">
                                    {isMatch ? (
                                        <>
                                            <RiCheckLine size={64} className="text-emerald-500 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]" />
                                            <p className="text-emerald-500 font-bold text-xl uppercase tracking-tighter">Match Successful</p>
                                            <p className="text-emerald-500/60 text-[10px] mt-2 uppercase">Validation Sequence Passed</p>
                                        </>
                                    ) : (
                                        <>
                                            <RiCloseLine size={64} className="text-red-500 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(239,68,68,0.4)]" />
                                            <p className="text-red-500 font-bold text-xl uppercase tracking-tighter">No Match Found</p>
                                            <p className="text-red-500/60 text-[10px] mt-2 uppercase">Validation Sequence Failed</p>
                                        </>
                                    )}
                                </div>
                            )}
                        </section>
                    </div>
                </div>

                {/* Helpful Tips */}
                <footer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <h4 className="text-[10px] font-bold text-indigo-400 uppercase mb-2">Tip: Newlines</h4>
                        <p className="text-[10px] text-white/40 leading-relaxed uppercase">
                            Use [^]* or [\s\S]* to match content across multi-line blocks like tags or loops.
                        </p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <h4 className="text-[10px] font-bold text-indigo-400 uppercase mb-2">Tip: Flexiblity</h4>
                        <p className="text-[10px] text-white/40 leading-relaxed uppercase">
                            Always include \s* or \s+ between keywords to allow for user variation in spacing.
                        </p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg border border-white/5">
                        <h4 className="text-[10px] font-bold text-indigo-400 uppercase mb-2">Tip: Tags</h4>
                        <p className="text-[10px] text-white/40 leading-relaxed uppercase">
                            For HTML tags, use &lt;div[^&gt;]*&gt; to match a div with any amount of attributes.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
