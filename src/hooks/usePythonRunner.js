import { useEffect, useRef, useState, useCallback } from 'react';

export function usePythonRunner() {
    const workerRef = useRef(null);
    const [status, setStatus] = useState('Initializing...');
    const [output, setOutput] = useState([]);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        // Initialize Worker
        workerRef.current = new Worker(new URL('../workers/pyodideWorker.js', import.meta.url));

        workerRef.current.onmessage = (event) => {
            const { type, output: text, status: newStatus } = event.data;

            if (type === 'STATUS') {
                setStatus(newStatus);
            } else if (type === 'OUTPUT') {
                setOutput(prev => [...prev, { type: 'stdout', content: text }]);
            } else if (type === 'ERROR') {
                setOutput(prev => [...prev, { type: 'stderr', content: text }]);
            } else if (type === 'COMPLETE') {
                setIsRunning(false);
            }
        };

        return () => {
            if (workerRef.current) {
                workerRef.current.terminate();
            }
        };
    }, []);

    const runCode = useCallback((code) => {
        if (!workerRef.current) return;

        setIsRunning(true);
        setOutput([]); // Clear previous output

        workerRef.current.postMessage({
            type: 'RUN',
            code,
            id: Date.now()
        });
    }, []);

    const clearOutput = useCallback(() => {
        setOutput([]);
    }, []);

    return {
        runCode,
        output,
        status,
        isRunning,
        clearOutput
    };
}
