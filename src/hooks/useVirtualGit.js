import { useState, useCallback, useEffect } from 'react';

// Advanced Virtual File System & Git State
export const useVirtualGit = (files, setFiles, folders, setFolders) => {
    const [history, setHistory] = useState([
        { type: 'system', content: 'Welcome to ZeroCode Terminal v2.0' },
        { type: 'system', content: 'Type "help" for available commands.' }
    ]);

    const [cwd, setCwd] = useState('~/project');

    // Enhanced Git State to track file snapshots per branch
    const [gitState, setGitState] = useState(() => {
        const initialDate = new Date();
        const initialCommit = {
            id: 'init123',
            message: 'Initial commit',
            timestamp: initialDate,
            filesSnapshot: [],
            parent: null
        };

        return {
            initialized: true, // Auto-initialize for smoother learning
            staging: [],
            commits: [initialCommit],
            branch: 'main',
            branches: ['main'],
            head: 'init123',
            user: { name: 'User', email: 'user@example.com' },
            branchSnapshots: {
                'main': []
            }
        };
    });

    // --- Helper Functions ---

    // Resolve path: "src/.." -> "~/project"
    const resolvePath = (path) => {
        if (!path) return cwd;
        if (path.startsWith('/')) return path; // Treat absolute as is (internal mock)
        if (path === '~' || path === '~/project') return '~/project';

        let currentParts = cwd === '~/project' ? [] : cwd.replace('~/project/', '').split('/');
        const parts = path.split('/');

        for (const part of parts) {
            if (part === '.' || part === '') continue;
            if (part === '..') {
                if (currentParts.length > 0) currentParts.pop();
            } else {
                currentParts.push(part);
            }
        }

        const resolved = currentParts.join('/');
        return resolved ? `~/project/${resolved}` : '~/project';
    };

    // Get path relative to project root (for storage in 'files' array)
    // "src/file.txt" -> "src/file.txt"
    // "~/project/src/file.txt" -> "src/file.txt"
    const getStoragePath = (path) => {
        const absolute = resolvePath(path);
        if (absolute === '~/project') return '';
        return absolute.replace('~/project/', '');
    };

    const addToHistory = (cmd, output, type = 'output') => {
        const prompt = `${cwd} $ ${cmd}`;
        if (cmd) setHistory(prev => [...prev, { type: 'command', content: prompt }]);
        if (output) setHistory(prev => [...prev, { type, content: output }]);
    };

    // --- Command Execution ---

    const executeCommand = useCallback((cmdString) => {
        const args = cmdString.trim().split(/\s+/);
        const cmd = args[0];

        if (!cmd) return;

        // --- System Commands ---
        switch (cmd) {
            case 'clear':
                setHistory([]);
                return;

            case 'pwd':
                addToHistory(cmdString, cwd);
                return;

            case 'ls':
                const pathArg = args[1] || '.';
                const targetAbsPath = resolvePath(pathArg);
                const targetStoragePath = targetAbsPath.replace('~/project/', '').replace('~/project', '');

                // Filter items in this directory
                // Files
                const dirFiles = files
                    .filter(f => {
                        const lastSlash = f.name.lastIndexOf('/');
                        const fileDir = lastSlash === -1 ? '' : f.name.substring(0, lastSlash);
                        return fileDir === targetStoragePath;
                    })
                    .map(f => {
                        const name = f.name.split('/').pop();
                        // Colorize executables or special files? For now just white
                        return name;
                    });

                // Folders
                const dirFolders = folders
                    .filter(f => {
                        // remove trailing slash if stored
                        const cleanF = f.endsWith('/') ? f.slice(0, -1) : f;
                        const lastSlash = cleanF.lastIndexOf('/');
                        const folderDir = lastSlash === -1 ? '' : cleanF.substring(0, lastSlash);
                        return folderDir === targetStoragePath;
                    })
                    .map(f => {
                        const name = f.endsWith('/') ? f.slice(0, -1).split('/').pop() : f.split('/').pop();
                        return `\x1b[34m${name}/\x1b[0m`; // Blue for folders
                    });

                const listing = [...dirFolders, ...dirFiles].join('  ');
                addToHistory(cmdString, listing);
                return;

            case 'cd':
                const cdTarget = args[1];
                if (!cdTarget || cdTarget === '~') {
                    setCwd('~/project');
                    addToHistory(cmdString, '');
                    return;
                }

                const newCwd = resolvePath(cdTarget);
                const storagePath = newCwd.replace('~/project/', '').replace('~/project', '');

                // Validate path exists (must be a folder or root)
                if (newCwd !== '~/project' && !folders.includes(storagePath) && !folders.includes(storagePath + '/')) {
                    addToHistory(cmdString, `bash: cd: ${cdTarget}: No such file or directory`, 'error');
                    return;
                }

                setCwd(newCwd);
                addToHistory(cmdString, '');
                return;

            case 'mkdir':
                const newDirName = args[1];
                if (!newDirName) {
                    addToHistory(cmdString, 'usage: mkdir <directory>', 'error');
                    return;
                }
                const newDirPath = getStoragePath(newDirName);
                if (folders.includes(newDirPath) || folders.includes(newDirPath + '/')) {
                    addToHistory(cmdString, `mkdir: cannot create directory '${newDirName}': File exists`, 'error');
                } else {
                    setFolders(prev => [...prev, newDirPath]);
                    addToHistory(cmdString, '');
                }
                return;

            case 'touch':
                const touchFile = args[1];
                if (!touchFile) {
                    addToHistory(cmdString, 'usage: touch <filename>', 'error');
                    return;
                }
                const touchPath = getStoragePath(touchFile);
                if (!files.some(f => f.name === touchPath)) {
                    setFiles(prev => [...prev, { name: touchPath, content: '', language: 'text' }]);
                }
                addToHistory(cmdString, '');
                return;

            case 'cat':
                const catFile = args[1];
                if (!catFile) {
                    addToHistory(cmdString, 'usage: cat <filename>', 'error');
                    return;
                }

                // Virtual .git Handling
                if (catFile.startsWith('.git/') || catFile.includes('/.git/')) {
                    const rel = catFile.includes('.git/') ? catFile.split('.git/')[1] : '';
                    if (rel === 'HEAD') {
                        addToHistory(cmdString, `ref: refs/heads/${gitState.branch}`);
                        return;
                    }
                    if (rel === 'config') {
                        addToHistory(cmdString, `[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n[user]\n\tname = ${gitState.user.name}\n\temail = ${gitState.user.email}`);
                        return;
                    }
                    addToHistory(cmdString, `cat: ${catFile}: No such file or directory`, 'error');
                    return;
                }

                const catStoragePath = getStoragePath(catFile);
                const fileObj = files.find(f => f.name === catStoragePath);

                if (fileObj) {
                    addToHistory(cmdString, fileObj.content);
                } else {
                    addToHistory(cmdString, `cat: ${catFile}: No such file or directory`, 'error');
                }
                return;

            case 'echo':
                // echo "content" > file.txt
                const contentMatch = cmdString.match(/echo "(.*)" > (.*)/);
                if (contentMatch) {
                    const content = contentMatch[1];
                    const fileName = contentMatch[2];
                    const filePath = getStoragePath(fileName);

                    if (files.some(f => f.name === filePath)) {
                        setFiles(prev => prev.map(f => f.name === filePath ? { ...f, content } : f));
                    } else {
                        setFiles(prev => [...prev, { name: filePath, content, language: 'text' }]);
                    }
                    addToHistory(cmdString, '');
                    return;
                }
                addToHistory(cmdString, args.slice(1).join(' '));
                return;
        }

        // --- Git Commands ---
        if (cmd === 'git') {
            const subCmd = args[1];

            if (!subCmd) {
                addToHistory(cmdString, `usage: git <command>

These are common Git commands used in various situations:

start a working area
   clone     Clone a repository into a new directory
   init      Create an empty Git repository or reinitialize an existing one

work on the current change
   add       Add file contents to the index
   mv        Move or rename a file, a directory, or a symlink
   restore   Restore working tree files
   rm        Remove files from the working tree and from the index

examine the history and state
   bisect    Use binary search to find the commit that introduced a bug
   diff      Show changes between commits, commit and working tree, etc
   grep      Print lines matching a pattern
   log       Show commit logs
   show      Show various types of objects
   status    Show the working tree status

grow, mark and tweak your common history
   branch    List, create, or delete branches
   commit    Record changes to the repository
   merge     Join two or more development histories together
   rebase    Reapply commits on top of another base tip
   reset     Reset current HEAD to the specified state
   switch    Switch branches
   tag       Create, list, delete or verify a tag object signed with GPG

collaborate
   fetch     Download objects and refs from another repository
   pull      Fetch from and integrate with another repository or a local branch
   push      Update remote refs along with associated objects`, 'output');
                return;
            }

            // Init Check
            if (!gitState.initialized && subCmd !== 'init' && subCmd !== 'clone') {
                addToHistory(cmdString, 'fatal: not a git repository (or any of the parent directories): .git', 'error');
                return;
            }

            switch (subCmd) {
                case 'init':
                    if (gitState.initialized) {
                        addToHistory(cmdString, `Reinitialized existing Git repository in ${cwd}/.git/`);
                    } else {
                        setGitState(prev => ({ ...prev, initialized: true }));
                        addToHistory(cmdString, `Initialized empty Git repository in ${cwd}/.git/`);
                    }
                    return;

                case 'status':
                    // We need to compare "Files on Disk" vs "Last Commit"
                    // Modified = in Disk, in Commit, Content different
                    // Untracked = in Disk, not in Staging, not in Commit
                    // Staged = in Staging

                    const stagedList = gitState.staging;
                    const untracked = files.filter(f => !stagedList.includes(f.name));
                    // Simplified: We assume everything not staged is untracked for this mock 
                    // (Real git checks against HEAD to see if it's modified vs untracked)

                    let statusOutput = [`On branch ${gitState.branch}\n`];

                    if (stagedList.length === 0 && untracked.length === 0) {
                        statusOutput.push('nothing to commit, working tree clean');
                    } else {
                        if (stagedList.length > 0) {
                            statusOutput.push('Changes to be committed:');
                            stagedList.forEach(f => statusOutput.push(`  \x1b[32mnew file:   ${f}\x1b[0m`));
                            statusOutput.push('');
                        }
                        if (untracked.length > 0) {
                            statusOutput.push('Untracked files:');
                            statusOutput.push('  (use "git add <file>..." to include in what will be committed)');
                            untracked.forEach(f => statusOutput.push(`  \x1b[31m${f.name}\x1b[0m`));
                            statusOutput.push('');
                        }
                    }
                    addToHistory(cmdString, statusOutput.join('\n'));
                    return;

                case 'add':
                    const addTarget = args[2];
                    if (!addTarget) {
                        addToHistory(cmdString, 'Nothing specified, nothing added.', 'warn');
                        return;
                    }
                    if (addTarget === '.') {
                        const allNames = files.map(f => f.name);
                        setGitState(prev => ({ ...prev, staging: allNames }));
                        addToHistory(cmdString, '');
                    } else {
                        const absTarget = getStoragePath(addTarget);
                        if (files.some(f => f.name === absTarget)) {
                            setGitState(prev => ({ ...prev, staging: [...new Set([...prev.staging, absTarget])] }));
                            addToHistory(cmdString, '');
                        } else {
                            addToHistory(cmdString, `fatal: pathspec '${addTarget}' did not match any files`, 'error');
                        }
                    }
                    return;

                case 'commit':
                    const mIndex = args.indexOf('-m');
                    if (mIndex === -1 || !args[mIndex + 1]) {
                        addToHistory(cmdString, 'error: switch `m` requires a value', 'error');
                        return;
                    }
                    const msg = args.slice(mIndex + 1).join(' ').replace(/^"|"$/g, '');

                    if (gitState.staging.length === 0) {
                        addToHistory(cmdString, 'On branch ' + gitState.branch + '\nnothing to commit, working tree clean');
                        return;
                    }

                    // --- Pre-commit Hook Simulation ---
                    // --- Pre-commit Hook Simulation ---
                    // Check if hook exists (normalize path)
                    const hookFile = files.find(f => f.name.endsWith('.git/hooks/pre-commit') || f.name === '.git/hooks/pre-commit');

                    if (hookFile) {
                        // Check content for 'exit 1'
                        if (hookFile.content.includes('exit 1')) {
                            addToHistory(cmdString, 'Running .git/hooks/pre-commit...\n❌ Hook failed: exit 1 detected. Commit aborted.', 'error');
                            return;
                        } else {
                            addToHistory(cmdString, 'Running .git/hooks/pre-commit... Passed.');
                        }
                    }

                    const newHash = Math.random().toString(16).substring(2, 9);
                    const newCommit = {
                        id: newHash,
                        message: msg,
                        timestamp: new Date(),
                        filesSnapshot: JSON.parse(JSON.stringify(files)), // Save state of files at this commit
                        parent: gitState.head
                    };

                    setGitState(prev => ({
                        ...prev,
                        commits: [newCommit, ...prev.commits],
                        head: newHash,
                        staging: [],
                        branchSnapshots: {
                            ...prev.branchSnapshots,
                            [prev.branch]: JSON.parse(JSON.stringify(files)) // Update branch tip snapshot
                        }
                    }));
                    addToHistory(cmdString, `[${gitState.branch} ${newHash}] ${msg}\n ${gitState.staging.length} file(s) changed`);
                    return;

                case 'branch':
                    // git branch (list)
                    if (!args[2]) {
                        const bOut = gitState.branches.map(b => b === gitState.branch ? `* \x1b[32m${b}\x1b[0m` : `  ${b}`).join('\n');
                        addToHistory(cmdString, bOut);
                        return;
                    }
                    // git branch <name>
                    const newBranch = args[2];
                    if (gitState.branches.includes(newBranch)) {
                        addToHistory(cmdString, `fatal: A branch named '${newBranch}' already exists.`, 'error');
                    } else {
                        setGitState(prev => ({
                            ...prev,
                            branches: [...prev.branches, newBranch],
                            branchSnapshots: {
                                ...prev.branchSnapshots,
                                [newBranch]: JSON.parse(JSON.stringify(files)) // Branch off current state
                            }
                        }));
                        addToHistory(cmdString, '');
                    }
                    return;

                case 'checkout':
                    // git checkout -b <name>
                    if (args[2] === '-b') {
                        const bName = args[3];
                        if (gitState.branches.includes(bName)) {
                            addToHistory(cmdString, `fatal: A branch named '${bName}' already exists.`, 'error');
                            return;
                        }
                        // Create and switch
                        setGitState(prev => ({
                            ...prev,
                            branches: [...prev.branches, bName],
                            branch: bName,
                            branchSnapshots: {
                                ...prev.branchSnapshots,
                                [bName]: JSON.parse(JSON.stringify(files))
                            }
                        }));
                        addToHistory(cmdString, `Switched to a new branch '${bName}'`);
                        return;
                    }

                    // git checkout <name>
                    const targetB = args[2];
                    if (!gitState.branches.includes(targetB)) {
                        addToHistory(cmdString, `error: pathspec '${targetB}' did not match any file(s) known to git`, 'error');
                        return;
                    }

                    // SAVE current state to current branch before switching
                    setGitState(prev => ({
                        ...prev,
                        branchSnapshots: {
                            ...prev.branchSnapshots,
                            [prev.branch]: JSON.parse(JSON.stringify(files))
                        },
                        branch: targetB
                    }));

                    // RESTORE state from target branch
                    // Note: We need to use the functional update of setFiles if we were inside setGitState, 
                    // but here we can just use the value from state + effect? 
                    // Actually, we have the snapshots in 'gitState' (which is the old state in this closure).
                    // We need to look up the snapshot from the *latest* gitState or the one we just prepared.

                    // Simplified: We assume 'gitState.branchSnapshots' has the data.
                    // If it's a fresh branch, it might have data from creation.
                    // If we never switched away, it might be outdated?
                    // Let's use the gitState ref pattern or just rely on the fact that we updated it on creation/commit.

                    const snapshot = gitState.branchSnapshots[targetB];
                    if (snapshot) {
                        setFiles(snapshot);
                    }

                    addToHistory(cmdString, `Switched to branch '${targetB}'`);
                    return;

                case 'merge':
                    const mergeSource = args[2];
                    if (!mergeSource) {
                        addToHistory(cmdString, 'fatal: No branch specified', 'error');
                        return;
                    }
                    // Mock merge: Just copy files from source branch snapshot into current
                    const sourceSnapshot = gitState.branchSnapshots[mergeSource];
                    if (sourceSnapshot) {
                        const currentFiles = [...files];
                        // Basic merge: overwrite/add from source
                        sourceSnapshot.forEach(srcFile => {
                            const idx = currentFiles.findIndex(f => f.name === srcFile.name);
                            if (idx >= 0) {
                                currentFiles[idx] = srcFile;
                            } else {
                                currentFiles.push(srcFile);
                            }
                        });
                        setFiles(currentFiles);
                        addToHistory(cmdString, `Updating ${gitState.head?.substring(0, 7) || '000000'}..${Math.random().toString(16).substring(2, 9)}\nFast-forward`);
                    } else {
                        addToHistory(cmdString, 'Already up to date.');
                    }
                    return;

                case 'log':
                    if (gitState.commits.length === 0) {
                        addToHistory(cmdString, `fatal: your current branch '${gitState.branch}' has no commits yet`, 'error');
                        return;
                    }
                    const logs = gitState.commits.map(c =>
                        `commit ${c.id}\nAuthor: ${gitState.user.name} <${gitState.user.email}>\nDate:   ${c.timestamp}\n\n    ${c.message}`
                    ).join('\n\n');
                    addToHistory(cmdString, logs);
                    return;

                case 'remote':
                    if (args[2] === 'add') {
                        addToHistory(cmdString, '');
                        return;
                    }
                    if (args[2] === '-v') { // Verify remote was added (mock)
                        addToHistory(cmdString, 'origin\thttps://github.com/zerocode/project.git (fetch)\norigin\thttps://github.com/zerocode/project.git (push)');
                        return;
                    }
                    return;

                case 'push':
                    addToHistory(cmdString, `To https://github.com/zerocode/project.git\n   ${Math.random().toString(16).substring(2, 7)}..${Math.random().toString(16).substring(2, 7)}  ${gitState.branch} -> ${gitState.branch}`);
                    return;

                case 'clone':
                    const repo = args[2];
                    const folderName = repo.split('/').pop().replace('.git', '');
                    setFolders(prev => [...prev, folderName]);
                    addToHistory(cmdString, `Cloning into '${folderName}'...\ndone.`);
                    return;

                // --- Advanced Mocks (requested by user) ---
                case 'node':
                    if (args[1]) {
                        addToHistory(cmdString, `Running ${args[1]}...\n(Simulation) Server started on port 3000`);
                    } else {
                        addToHistory(cmdString, `Welcome to Node.js v20.0.0.\nType ".help" for more information.`);
                    }
                    return;

                case 'npm':
                    const npmCmd = args[1];
                    if (npmCmd === 'install' || npmCmd === 'i') {
                        addToHistory(cmdString, `added 150 packages, and audited 151 packages in 2s\nfound 0 vulnerabilities`);
                    } else if (npmCmd === 'start' || npmCmd === 'run') {
                        addToHistory(cmdString, `> project@1.0.0 start\n> node server.js\n\nServer listening on port 3000...`);
                    } else if (npmCmd === 'test') {
                        addToHistory(cmdString, `\nPASS  src/App.test.js\nPASS  src/utils.test.js\n\nTest Suites: 2 passed, 2 total\nTests:       5 passed, 5 total\nSnapshots:   0 total\nTime:        1.234 s`);
                    } else {
                        addToHistory(cmdString, 'usage: npm <command>');
                    }
                    return;

                case 'php':
                    const phpFile = args[1];
                    if (!phpFile) {
                        addToHistory(cmdString, 'usage: php <file>', 'error');
                        return;
                    }

                    // simulation logic
                    const phpStoragePath = getStoragePath(phpFile);
                    const phpFileObj = files.find(f => f.name === phpStoragePath);

                    if (!phpFileObj) {
                        addToHistory(cmdString, `Could not open input file: ${phpFile}`, 'error');
                        return;
                    }

                    const phpCode = phpFileObj.content;
                    let phpOutput = [];
                    const phpVars = {};

                    // Very basic PHP Interpreter Simulation
                    const phpLines = phpCode.split('\n');

                    phpLines.forEach(line => {
                        const tLine = line.trim();

                        // 1. Variable Assignment: $var = "val"; or $var = 123;
                        const varMatch = tLine.match(/^\$(\w+)\s*=\s*(["']?)([^;"']+)\2\s*;?/);
                        if (varMatch) {
                            const [_, name, quote, val] = varMatch;
                            phpVars[name] = val; // Store as string always for sim
                        }

                        // 2. Echo Strings: echo "Hello $name";
                        // Regex looks for echo followed by quotes
                        if (tLine.startsWith('echo')) {
                            const echoContentMatch = tLine.match(/echo\s+(["'])(.*)\1\s*;?/);
                            if (echoContentMatch) {
                                let content = echoContentMatch[2];
                                // Interpolate variables: $name
                                content = content.replace(/\$(\w+)/g, (match, varName) => {
                                    return phpVars[varName] !== undefined ? phpVars[varName] : match;
                                });
                                // Handle HTML tags stripping for terminal (optional, but keep it clean)
                                // content = content.replace(/<\/?[^>]+(>|$)/g, ""); 
                                phpOutput.push(content);
                            }
                            // Echo variable directly: echo $var;
                            else if (tLine.match(/echo\s+\$(\w+)\s*;?/)) {
                                const vMatch = tLine.match(/echo\s+\$(\w+)\s*;?/);
                                const val = phpVars[vMatch[1]];
                                if (val) phpOutput.push(val);
                            }
                        }

                        // 3. Foreach Logic Mock (Unit 2)
                        // If we see foreach match, just output simulated product list
                        if (tLine.includes('foreach ($products')) {
                            phpOutput.push('Laptop: 1200 (Expensive)');
                            phpOutput.push('Monitor: 300 (Expensive)');
                        }
                    });

                    if (phpOutput.length === 0) {
                        addToHistory(cmdString, '(No output)');
                    } else {
                        addToHistory(cmdString, phpOutput.join('\n'));
                    }
                    return;

                case 'mysql':
                    addToHistory(cmdString, `Welcome to the MySQL monitor.  Commands end with ; or \\g.\nYour MySQL connection id is 8\nServer version: 8.0.35 MySQL Community Server - GPL\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nmysql> _`);
                    return;

                case 'mongosh':
                case 'mongo':
                    addToHistory(cmdString, `Current Mongosh Log ID: 65123abc\nConnecting to: mongodb://127.0.0.1:27017/?directConnection=true\nUsing MongoDB: 7.0.2\nUsing Mongosh: 2.0.0\n\ntest> _`);
                    return;

                case 'docker':
                    if (args[1] === 'ps') {
                        addToHistory(cmdString, `CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS          PORTS                    NAMES\nh123abc        node:20        "docker-entrypoint.s…"   2 minutes ago    Up 2 minutes    0.0.0.0:3000->3000/tcp   web-app`);
                    } else if (args[1] === 'build') {
                        addToHistory(cmdString, `[+] Building 0.5s (8/8) FINISHED\n => [internal] load build definition from Dockerfile\n => => transferring dockerfile: 120B\n => [internal] load .dockerignore\n => => transferring context: 2B\n => [internal] load metadata for docker.io/library/node:20-alpine\n => [1/4] FROM docker.io/library/node:20-alpine\n => [2/4] WORKDIR /app\n => [3/4] COPY . .\n => [4/4] RUN npm install\n => exporting to image\n => => exporting layers\n => => writing image sha256:e9a8...`);
                    } else {
                        addToHistory(cmdString, `Docker version 24.0.5, build ced0996`);
                    }
                    return;

                case 'tsc':
                    addToHistory(cmdString, `(Typescript) Compilation complete. watching for file changes.`);
                    return;

                case 'rebase':
                    addToHistory(cmdString, `Successfully rebased and updated refs/heads/${gitState.branch}.`);
                    return;

                case 'cherry-pick':
                    addToHistory(cmdString, `[${gitState.branch} ${Math.random().toString(16).substring(2, 7)}] Cherry-picked commit ${args[2]}\n 1 file changed, 1 insertion(+)`);
                    return;

                case 'bisect':
                    if (args[2] === 'start') { addToHistory(cmdString, 'Bisecting: 6 revisions left to test after this (roughly 3 steps)'); return; }
                    if (args[2] === 'bad') { addToHistory(cmdString, 'Bisecting: 3 revisions left to test after this (roughly 2 steps)'); return; }
                    if (args[2] === 'good') { addToHistory(cmdString, 'Bisecting: 1 revision left to test after this (roughly 1 step)'); return; }
                    addToHistory(cmdString, '');
                    return;

                case 'blame':
                    const blameFile = args[2];
                    if (files.some(f => f.name.endsWith(blameFile))) {
                        addToHistory(cmdString, `^a1b2c3d (You 2024-01-01 10:00:00 +0000 1) ${blameFile} content line 1`);
                    } else {
                        addToHistory(cmdString, `fatal: no such path '${blameFile}' in HEAD`, 'error');
                    }
                    return;

                case 'stash':
                    addToHistory(cmdString, `Saved working directory and index state WIP on ${gitState.branch}: a1b2c3d`);
                    return;

                case 'clean':
                    addToHistory(cmdString, 'Removing garbage.txt');
                    return;
            }
        }

        addToHistory(cmdString, `bash: ${cmd}: command not found`, 'error');

    }, [files, gitState, cwd, folders]);

    return {
        history,
        executeCommand,
        files,
        gitState
    };
};
