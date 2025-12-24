import { useState, useCallback, useEffect } from 'react';

// Advanced Virtual File System & Git State
export const useVirtualGit = (files, setFiles, folders, setFolders, initialGitState = null) => {
    const [history, setHistory] = useState([
        { type: 'system', content: 'Welcome to ZeroCode Terminal v2.0' },
        { type: 'system', content: 'Type "help" for available commands.' }
    ]);

    const [cwd, setCwd] = useState('~/project');

    // Enhanced Git State to track file snapshots per branch
    const [gitState, setGitState] = useState(() => {
        // Allow seeding state from Lab config (for realistic "pre-made" history)
        if (initialGitState) {
            return {
                initialized: true,
                staging: [],
                commits: [], // fallback, should be populated by initialGitState
                branch: 'main',
                branches: ['main'],
                head: 'init',
                user: { name: 'User', email: 'user@example.com' },
                branchSnapshots: { 'main': [] },
                ...initialGitState // Merge provided state
            };
        }

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
    // ... (rest of file)

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

        // --- Interactive Rebase Mode Interceptor ---
        if (gitState.rebaseMode) {
            if (cmd === 'wq' || cmd === 'save' || cmd === 'done') {
                setGitState(prev => ({
                    ...prev,
                    rebaseMode: false,
                    // Simulate squashing: Remove 2 commits, keep latest (mock)
                    commits: [prev.commits[0], ...prev.commits.slice(3)],
                    head: 'new_squashed_hash'
                }));
                addToHistory(cmdString, 'Successfully rebased and updated refs/heads/' + gitState.branch + '.');
            } else if (cmd === 'q' || cmd === 'abort') {
                setGitState(prev => ({ ...prev, rebaseMode: false }));
                addToHistory(cmdString, 'Successfully rebased and updated refs/heads/' + gitState.branch + '.'); // Fallback to success for lab
            } else {
                // Just echo back their edits for now
                addToHistory(cmdString, '');
            }
            return;
        }

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

                const dirFiles = files
                    .filter(f => {
                        const lastSlash = f.name.lastIndexOf('/');
                        const fileDir = lastSlash === -1 ? '' : f.name.substring(0, lastSlash);
                        return fileDir === targetStoragePath;
                    })
                    .map(f => f.name.split('/').pop());

                const dirFolders = folders
                    .filter(f => {
                        const cleanF = f.endsWith('/') ? f.slice(0, -1) : f;
                        const lastSlash = cleanF.lastIndexOf('/');
                        const folderDir = lastSlash === -1 ? '' : cleanF.substring(0, lastSlash);
                        return folderDir === targetStoragePath;
                    })
                    .map(f => {
                        const name = f.endsWith('/') ? f.slice(0, -1).split('/').pop() : f.split('/').pop();
                        return `\x1b[34m${name}/\x1b[0m`;
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
                if (fileObj) addToHistory(cmdString, fileObj.content);
                else addToHistory(cmdString, `cat: ${catFile}: No such file or directory`, 'error');
                return;

            case 'echo':
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
                addToHistory(cmdString, `usage: git <command>\n\nCommon commands: init, status, add, commit, branch, switch, restore, reset, merge, log, push, pull, remote`, 'output');
                return;
            }

            if (!gitState.initialized && subCmd !== 'init' && subCmd !== 'clone') {
                addToHistory(cmdString, 'fatal: not a git repository (or any of the parent directories): .git', 'error');
                return;
            }

            switch (subCmd) {
                case 'init':
                    if (gitState.initialized) addToHistory(cmdString, `Reinitialized existing Git repository in ${cwd}/.git/`);
                    else {
                        setGitState(prev => ({ ...prev, initialized: true }));
                        addToHistory(cmdString, `Initialized empty Git repository in ${cwd}/.git/`);
                    }
                    return;

                case 'clone':
                    const cloneUrl = args[2];
                    if (!cloneUrl) { addToHistory(cmdString, 'usage: git clone <url> [directory]', 'error'); return; }

                    const urlParts = cloneUrl.split('/');
                    const repoName = args[3] || urlParts[urlParts.length - 1].replace('.git', '') || 'repo';

                    // Simulate cloning process
                    addToHistory(cmdString,
                        `Cloning into '${repoName}'...\n` +
                        `remote: Enumerating objects: 100, done.\n` +
                        `remote: Counting objects: 100% (100/100), done.\n` +
                        `remote: Compressing objects: 100% (80/80), done.\n` +
                        `Receiving objects: 100% (100/100), 1.2 MB | 2.4 MB/s, done.\n` +
                        `Resolving deltas: 100% (20/20), done.`
                    );

                    // Create directory and mock files
                    const newRepoPath = getStoragePath(repoName);
                    if (!folders.includes(newRepoPath)) {
                        setFolders(prev => [...prev, newRepoPath]);
                        setFiles(prev => [
                            ...prev,
                            { name: `${newRepoPath}/README.md`, content: `# ${repoName}\n\nA cloned repository.` },
                            { name: `${newRepoPath}/package.json`, content: `{\n  "name": "${repoName}",\n  "version": "1.0.0"\n}` }
                        ]);
                        // Implicitly we don't "switch" the global gitState to this new repo yet 
                        // because our model is simple, but this satisfies the visual requirement.
                    } else {
                        addToHistory(cmdString, `fatal: destination path '${repoName}' already exists and is not an empty directory.`, 'error');
                    }
                    return;

                case 'fetch':
                    addToHistory(cmdString, 'remote: Enumerating objects: 5, done.\nremote: Counting objects: 100% (5/5), done.\nUnpacking objects: 100% (5/5), 3.4 KiB | 3.4 MiB/s, done.\nFrom origin\n   1234abc..5678def  main       -> origin/main');
                    return;

                case 'rm':
                    const rmFile = args[2];
                    if (!rmFile) { addToHistory(cmdString, 'usage: git rm <file>', 'error'); return; }
                    // Simple mock: remove from file system and staging
                    setFiles(prev => prev.filter(f => f.name !== getStoragePath(rmFile)));
                    addToHistory(cmdString, `rm '${rmFile}'`);
                    return;

                case 'mv':
                    const mvSrc = args[2];
                    const mvDest = args[3];
                    if (!mvSrc || !mvDest) { addToHistory(cmdString, 'usage: git mv <source> <destination>', 'error'); return; }
                    const mvSrcPath = getStoragePath(mvSrc);
                    const mvDestPath = getStoragePath(mvDest);

                    if (files.some(f => f.name === mvSrcPath)) {
                        setFiles(prev => prev.map(f => f.name === mvSrcPath ? { ...f, name: mvDestPath } : f));
                        addToHistory(cmdString, `Renamed '${mvSrc}' to '${mvDest}'`);
                    } else {
                        addToHistory(cmdString, `fatal: not under version control, source=${mvSrc}`, 'error');
                    }
                    return;

                case 'show':
                    const showHash = args[2] || gitState.head;
                    const commit = gitState.commits.find(c => c.id === showHash || c.id.startsWith(showHash));
                    if (commit) {
                        addToHistory(cmdString,
                            `commit ${commit.id}\n` +
                            `Author: ${gitState.user.name} <${gitState.user.email}>\n` +
                            `Date:   ${new Date(commit.timestamp).toDateString()}\n` +
                            `\n` +
                            `    ${commit.message}\n` +
                            `\n` +
                            `diff --git a/file b/file\n` +
                            `index 123456..789012 100644\n` +
                            `--- a/file\n` +
                            `+++ b/file\n` +
                            `@@ -1 +1 @@\n` +
                            `-old content\n` +
                            `+new content`
                        );
                    } else {
                        addToHistory(cmdString, `fatal: ambiguous argument '${showHash}': unknown revision or path not in the working tree.`, 'error');
                    }
                    return;

                case 'status':
                    const staged = gitState.staging;
                    const untracked = files.filter(f => !staged.includes(f.name));
                    let out = [`On branch ${gitState.branch}\n`];
                    if (staged.length === 0 && untracked.length === 0) out.push('nothing to commit, working tree clean');
                    else {
                        if (staged.length > 0) {
                            out.push('Changes to be committed:');
                            staged.forEach(f => out.push(`  \x1b[32mnew file:   ${f}\x1b[0m`));
                            out.push('');
                        }
                        if (untracked.length > 0) {
                            out.push('Untracked files:');
                            untracked.forEach(f => out.push(`  \x1b[31m${f.name}\x1b[0m`));
                            out.push('');
                        }
                    }
                    addToHistory(cmdString, out.join('\n'));
                    return;

                case 'add':
                    const target = args[2];
                    if (!target) return;
                    if (target === '.') {
                        setGitState(prev => ({ ...prev, staging: files.map(f => f.name) }));
                    } else {
                        const sp = getStoragePath(target);
                        if (files.some(f => f.name === sp)) {
                            setGitState(prev => ({ ...prev, staging: [...new Set([...prev.staging, sp])] }));
                        } else {
                            addToHistory(cmdString, `fatal: pathspec '${target}' did not match any files`, 'error');
                        }
                    }
                    addToHistory(cmdString, '');
                    return;

                case 'commit':
                    const mIdx = args.indexOf('-m');
                    if (mIdx === -1 || !args[mIdx + 1]) { addToHistory(cmdString, 'error: switch `m` requires a value', 'error'); return; }
                    const msg = args.slice(mIdx + 1).join(' ').replace(/^"|"$/g, '');
                    if (gitState.staging.length === 0) { addToHistory(cmdString, 'nothing to commit, working tree clean'); return; }

                    const newH = Math.random().toString(16).substring(2, 9);
                    const newC = { id: newH, message: msg, timestamp: new Date(), filesSnapshot: JSON.parse(JSON.stringify(files)), parent: gitState.head };
                    setGitState(prev => ({
                        ...prev, commits: [newC, ...prev.commits], head: newH, staging: [],
                        branchSnapshots: { ...prev.branchSnapshots, [prev.branch]: JSON.parse(JSON.stringify(files)) }
                    }));
                    addToHistory(cmdString, `[${gitState.branch} ${newH}] ${msg}\n ${gitState.staging.length} file(s) changed`);
                    return;

                case 'branch':
                    if (!args[2]) {
                        addToHistory(cmdString, gitState.branches.map(b => b === gitState.branch ? `* \x1b[32m${b}\x1b[0m` : `  ${b}`).join('\n'));
                        return;
                    }
                    if (args[2] === '-d' || args[2] === '-D') {
                        const bDel = args[3];
                        if (bDel === gitState.branch) addToHistory(cmdString, `error: Cannot delete branch '${bDel}' checked out`, 'error');
                        else if (!gitState.branches.includes(bDel)) addToHistory(cmdString, `error: branch '${bDel}' not found.`, 'error');
                        else {
                            setGitState(prev => {
                                const nb = { ...prev.branchSnapshots }; delete nb[bDel];
                                return { ...prev, branches: prev.branches.filter(b => b !== bDel), branchSnapshots: nb };
                            });
                            addToHistory(cmdString, `Deleted branch ${bDel}.`);
                        }
                        return;
                    }
                    const nb = args[2];
                    if (gitState.branches.includes(nb)) addToHistory(cmdString, `fatal: A branch named '${nb}' already exists.`, 'error');
                    else {
                        setGitState(prev => ({ ...prev, branches: [...prev.branches, nb], branchSnapshots: { ...prev.branchSnapshots, [nb]: JSON.parse(JSON.stringify(files)) } }));
                        addToHistory(cmdString, '');
                    }
                    return;

                case 'checkout':
                case 'switch':
                    if (args[2] === '-b' || args[2] === '-c') {
                        const bN = args[3];
                        if (gitState.branches.includes(bN)) addToHistory(cmdString, `fatal: A branch named '${bN}' already exists.`, 'error');
                        else {
                            setGitState(prev => ({
                                ...prev, branches: [...prev.branches, bN], branch: bN,
                                branchSnapshots: { ...prev.branchSnapshots, [bN]: JSON.parse(JSON.stringify(files)) }
                            }));
                            addToHistory(cmdString, `Switched to a new branch '${bN}'`);
                        }
                        return;
                    }
                    const targetB = args[2];
                    if (!gitState.branches.includes(targetB)) { addToHistory(cmdString, `error: pathspec '${targetB}' did not match any file(s)`, 'error'); return; }
                    setGitState(prev => ({
                        ...prev, branchSnapshots: { ...prev.branchSnapshots, [prev.branch]: JSON.parse(JSON.stringify(files)) },
                        branch: targetB
                    }));
                    const snap = gitState.branchSnapshots[targetB];
                    if (snap) setFiles(snap);
                    addToHistory(cmdString, `Switched to branch '${targetB}'`);
                    return;

                case 'merge':
                    const mSrc = args[2];
                    const sSnap = gitState.branchSnapshots[mSrc];
                    if (sSnap) {
                        const nF = [...files];
                        sSnap.forEach(s => { const i = nF.findIndex(f => f.name === s.name); if (i >= 0) nF[i] = s; else nF.push(s); });
                        setFiles(nF);
                        addToHistory(cmdString, `Updating... Fast-forward`);
                    } else addToHistory(cmdString, 'Already up to date.');
                    return;

                case 'restore':
                    if (args[2] === '--staged') {
                        const fn = args[3];
                        setGitState(prev => ({ ...prev, staging: prev.staging.filter(f => f !== fn) }));
                    } else {
                        const rfn = args[2];
                        const head = gitState.commits.find(c => c.id === gitState.head);
                        if (head) {
                            const orig = head.filesSnapshot.find(f => f.name === rfn);
                            if (orig) setFiles(prev => prev.map(f => f.name === rfn ? orig : f));
                        }
                    }
                    addToHistory(cmdString, '');
                    return;

                case 'reset':
                    if (args[2] === '--hard' && args[3] === 'HEAD') {
                        const last = gitState.commits.find(c => c.id === gitState.head);
                        if (last) { setFiles(JSON.parse(JSON.stringify(last.filesSnapshot))); setGitState(prev => ({ ...prev, staging: [] })); }
                    } else if (args[2] === 'HEAD') {
                        setGitState(prev => ({ ...prev, staging: [] }));
                    }
                    addToHistory(cmdString, '');
                    return;

                case 'diff':
                    addToHistory(cmdString, 'diff --git a/file b/file\n--- a/file\n+++ b/file\n@@ -1,1 +1,1 @@\n- \x1b[31mOld\x1b[0m\n+ \x1b[32mNew\x1b[0m');
                    return;

                case 'log':
                    addToHistory(cmdString, gitState.commits.map(c => `commit ${c.id}\nAuthor: ${gitState.user.name}\n\n    ${c.message}`).join('\n\n'));
                    return;

                case 'push':
                    addToHistory(cmdString, `Pushing to origin/${gitState.branch}... Done.`);
                    return;

                case 'pull':
                    addToHistory(cmdString, `Pulling from origin/${gitState.branch}... Done.`);
                    return;

                case 'remote':
                    if (args[2] === '-v') addToHistory(cmdString, 'origin\thttps://github.com/zerocode/project.git (fetch)\norigin\thttps://github.com/zerocode/project.git (push)');
                    else addToHistory(cmdString, '');
                    return;

                case 'rebase':
                    if (args[2] === '-i') {
                        // Dynamic processing: Get last N commits
                        const countArg = args[3] || 'HEAD~3';
                        let count = 3;
                        if (countArg.includes('~')) count = parseInt(countArg.split('~')[1]) || 3;

                        // Get commits (newest first in state, need oldest first for rebase editor)
                        const commitsToEdit = gitState.commits.slice(0, count).reverse();

                        if (commitsToEdit.length === 0) {
                            addToHistory(cmdString, 'fatal: needed a single revision');
                            return;
                        }

                        const commitLines = commitsToEdit.map(c => `pick ${c.id.substring(0, 7)} ${c.message}`).join('\n');

                        setGitState(prev => ({ ...prev, rebaseMode: true }));
                        addToHistory(cmdString,
                            `Interactive Rebase Session Started\n` +
                            `\n` +
                            `${commitLines}\n` +
                            `\n` +
                            `# Commands:\n` +
                            `# p, pick = use commit\n` +
                            `# s, squash = use commit\n` +
                            `# \n` +
                            `# Type "done" to SAVE, "q" to ABORT.`
                        );
                    } else {
                        addToHistory(cmdString, 'Current branch ' + gitState.branch + ' is up to date.');
                    }
                    return;

                case 'cherry-pick':
                    const cpHash = args[2];
                    if (!cpHash) { addToHistory(cmdString, 'usage: git cherry-pick <commit>'); return; }
                    addToHistory(cmdString, `[${gitState.branch} ${Math.random().toString(16).substring(2, 9)}] Cherry-picked commit ${cpHash}`);
                    return;

                case 'stash':
                    if (!args[2] || args[2] === 'push') {
                        setGitState(prev => ({ ...prev, stash: [...(prev.stash || []), { id: 'stash@{0}', files: JSON.parse(JSON.stringify(files)) }], staging: [] }));
                        addToHistory(cmdString, 'Saved working directory and index state WIP on ' + gitState.branch + ': ...');
                    } else if (args[2] === 'list') {
                        const st = gitState.stash || [];
                        addToHistory(cmdString, st.map((s, i) => `stash@{${i}}: WIP on ${gitState.branch}: ...`).join('\n'));
                    } else if (args[2] === 'pop') {
                        const st = gitState.stash || [];
                        if (st.length > 0) {
                            const popped = st[st.length - 1];
                            setGitState(prev => ({ ...prev, stash: prev.stash.slice(0, -1) }));
                            setFiles(popped.files);
                            addToHistory(cmdString, 'Dropped stash@{0} (1234...)');
                        } else {
                            addToHistory(cmdString, 'No stash entries found.');
                        }
                    }
                    return;

                case 'clean':
                    if (args[2] === '-n') {
                        addToHistory(cmdString, 'Would remove temp.log\nWould remove build.tmp');
                    } else if (args[2] === '-f') {
                        addToHistory(cmdString, 'Removing temp.log\nRemoving build.tmp');
                    } else {
                        addToHistory(cmdString, 'fatal: clean.requireForce defaults to true and neither -i, -n, nor -f given;');
                    }
                    return;

                case 'bisect':
                    if (args[2] === 'start') addToHistory(cmdString, 'Bisecting: 20 revisions left to test after this (roughly 5 steps)');
                    else if (args[2] === 'bad') addToHistory(cmdString, 'Bisecting: 10 revisions left to test after this (roughly 4 steps)\n[a1b2c3d] ...');
                    else if (args[2] === 'good') addToHistory(cmdString, 'Bisecting: 5 revisions left to test after this (roughly 3 steps)\n[e5f6g7h] ...');
                    else if (args[2] === 'reset') addToHistory(cmdString, 'Previous HEAD position was...');
                    return;

                case 'blame':
                    addToHistory(cmdString, `e5f6g7h (Alice 2023-01-01) const port = 3000;\na1b2c3d (Bob   2023-01-02) const db = null;`);
                    return;
            }
            return;
        }

        // --- Independent Tools ---
        switch (cmd) {
            case 'node':
                if (args[1]) addToHistory(cmdString, `Running ${args[1]}...\nServer started on port 3000`);
                else addToHistory(cmdString, `Welcome to Node.js v20.0.0.`);
                return;

            case 'npm':
                addToHistory(cmdString, `npm v10.0.0`);
                return;

            case 'php':
                const phpF = args[1];
                if (!phpF) return;
                const fObj = files.find(f => f.name === getStoragePath(phpF));
                if (fObj) {
                    let out = []; const vars = {};
                    fObj.content.split('\n').forEach(line => {
                        const l = line.trim();
                        const vM = l.replace(/\x1b\[[0-9;]*m/g, '').match(/^\$(\w+)\s*=\s*(["']?)([^;"']+)\2\s*;?/);
                        if (vM) vars[vM[1]] = vM[3];
                        if (l.startsWith('echo')) {
                            const m = l.match(/echo\s+(["'])(.*)\1\s*;?/);
                            if (m) out.push(m[2].replace(/\$(\w+)/g, (_, n) => vars[n] || `$${n}`));
                        }
                    });
                    addToHistory(cmdString, out.join('\n') || '(Output)');
                }
                return;

            case 'mysql':
                addToHistory(cmdString, `Welcome to the MySQL monitor.`);
                return;

            case 'mongosh':
                addToHistory(cmdString, `Connecting to: mongodb://127.0.0.1:27017.`);
                return;
        }

        addToHistory(cmdString, `bash: ${cmd}: command not found`, 'error');

    }, [files, gitState, cwd, folders]);

    return {
        history,
        executeCommand,
        files,
        gitState,
        cwd // Export cwd for UI updates
    };
};
