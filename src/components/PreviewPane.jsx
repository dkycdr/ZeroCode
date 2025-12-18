import { useMemo } from 'react';

const CONSOLE_SCRIPT = `
    <script>
        (function() {
            console.log = function(...args) {
                window.parent.postMessage({
                    type: 'CONSOLE', level: 'log',
                    payload: args.map(arg => typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg))
                }, '*');
            };
            console.error = function(...args) {
                window.parent.postMessage({ type: 'CONSOLE', level: 'error', payload: args.map(String) }, '*');
            };
            console.warn = function(...args) {
                window.parent.postMessage({ type: 'CONSOLE', level: 'warn', payload: args.map(String) }, '*');
            };
            window.addEventListener('error', function(e) {
                window.parent.postMessage({ type: 'CONSOLE', level: 'error', payload: [e.message + ' at line ' + e.lineno] }, '*');
            });
        })();
    </script>
`;

export default function PreviewPane({ compiledCode, isConsoleOpen, consoleLogs }) {
    const finalCode = useMemo(() => {
        if (!compiledCode) return '';
        if (compiledCode.includes('</head>')) return compiledCode.replace('</head>', CONSOLE_SCRIPT + '</head>');
        if (compiledCode.includes('<head>')) return compiledCode.replace('<head>', '<head>' + CONSOLE_SCRIPT);
        return CONSOLE_SCRIPT + compiledCode;
    }, [compiledCode]);

    return (
        <div className="h-full flex flex-col bg-white">
            <div className="flex-1 relative">
                <iframe key={compiledCode} title="preview" srcDoc={finalCode} className="absolute inset-0 w-full h-full border-none" sandbox="allow-scripts" />
            </div>
            {isConsoleOpen && (
                <div className="h-1/3 bg-[#0a0a0a] border-t border-white/10 flex flex-col">
                    <div className="h-8 bg-[#050505] text-gray-400 px-3 flex items-center justify-between text-xs font-mono">
                        <span>Console</span>
                        <span className="text-gray-600">{consoleLogs.length} messages</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-2 font-mono text-xs space-y-1">
                        {consoleLogs.length === 0 && <div className="text-gray-600 p-2">No output yet</div>}
                        {consoleLogs.map((log, i) => {
                            const level = typeof log === 'object' ? log.level : 'log';
                            const message = typeof log === 'object' ? log.message : String(log);
                            const color = { log: 'text-green-400', error: 'text-red-400', warn: 'text-yellow-400' }[level];
                            return (
                                <div key={i} className={`${color} flex items-start gap-2 py-1 px-2 hover:bg-white/5 rounded`}>
                                    <span className="opacity-50">{level === 'error' ? '✕' : level === 'warn' ? '⚠' : '>'}</span>
                                    <span className="flex-1 break-all whitespace-pre-wrap">{message}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
