/* eslint-disable no-restricted-globals */

// Initialize Pyodide
let pyodide = null;
let pyodideReadyPromise = null;

const loadPyodideAndPackages = async () => {
    if (pyodideReadyPromise) return pyodideReadyPromise;

    pyodideReadyPromise = (async () => {
        try {
            self.postMessage({ type: 'STATUS', status: 'Loading Python environment...' });

            // Load the Pyodide script
            importScripts("https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js");

            pyodide = await loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/",
                stdout: (text) => {
                    self.postMessage({ type: 'OUTPUT', output: text });
                },
                stderr: (text) => {
                    self.postMessage({ type: 'ERROR', output: text });
                }
            });

            await pyodide.loadPackage(["micropip"]);
            self.postMessage({ type: 'STATUS', status: 'Ready' });
            return pyodide;
        } catch (err) {
            self.postMessage({ type: 'ERROR', output: `Failed to load Pyodide: ${err.message}` });
            throw err;
        }
    })();

    return pyodideReadyPromise;
};

// Handle messages from the main thread
self.onmessage = async (event) => {
    const { type, code, id } = event.data;

    if (type === 'RUN') {
        try {
            const pyodide = await loadPyodideAndPackages();
            self.postMessage({ type: 'STATUS', status: 'Running...' });

            // Run the code
            await pyodide.runPythonAsync(code);

            self.postMessage({ type: 'COMPLETE', id });
        } catch (err) {
            // Clean up the error message
            let errorMessage = String(err);

            // If it's a Python traceback, we want to hide the internal Pyodide stack
            if (errorMessage.includes("Traceback")) {
                const lines = errorMessage.split('\n');
                const cleanLines = lines.filter(line => {
                    // Filter out internal Pyodide/Python files AND wrapper code artifacts
                    return !line.includes('/lib/python') &&
                        !line.includes('_pyodide') &&
                        !line.includes('<exec>') &&
                        !line.includes('await CodeRunner') &&
                        !line.includes('coroutine = eval') &&
                        !line.match(/^\s*\^+\s*$/); // Filter lines that are just carrot pointers like ^^^^^
                });

                // If we filtered too much and lost the actual error, fall back to the last line
                if (cleanLines.length < 2) {
                    // Just take the exception line (usually the last line)
                    errorMessage = lines[lines.length - 1];
                    // Add simple header if missing
                    if (!errorMessage.startsWith("PythonError") && !errorMessage.startsWith("Traceback")) {
                        errorMessage = "PythonError: " + errorMessage;
                    }
                } else {
                    errorMessage = cleanLines.join('\n').trim();
                }
            }

            self.postMessage({ type: 'ERROR', output: errorMessage });
            self.postMessage({ type: 'COMPLETE', id });
        } finally {
            self.postMessage({ type: 'STATUS', status: 'Ready' });
        }
    }
};
