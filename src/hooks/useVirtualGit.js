import { useState, useCallback } from 'react';

// Simple Virtual File System & Git State
export const useVirtualGit = (initialFiles = []) => {
    const [history, setHistory] = useState([
        { type: 'system', content: 'Welcome to ZeroCode Terminal v2.0' },
        { type: 'system', content: 'Type "help" for available commands.' }
    ]);

    // Virtual File System State
    const [files, setFiles] = useState(initialFiles); // { name: 'file.txt', content: '...' }
    const [gitState, setGitState] = useState({
        initialized: false,
        staging: [], // ['file.txt']
        commits: [], // { id: 'a1b2', message: 'init', timestamp: ... }
        branch: 'master',
        branches: ['master'],
        head: null,
        user: { name: '', email: '' } // New User Config State
    });

    const [cwd, setCwd] = useState('~/project');

    const addToHistory = (cmd, output, type = 'output') => {
        if (cmd) setHistory(prev => [...prev, { type: 'command', content: `${cwd} $ ${cmd}` }]);
        if (output) setHistory(prev => [...prev, { type, content: output }]);
    };

    const executeCommand = useCallback((cmdString) => {
        const args = cmdString.trim().split(/\s+/);
        const cmd = args[0];

        if (!cmd) return;

        // --- System Commands ---
        switch (cmd) {
            case 'clear':
                setHistory([]);
                return;
            case 'ls':
                const fileNames = files.map(f => f.name).join('  ');
                addToHistory(cmdString, fileNames || '(empty directory)');
                return;
            case 'pwd':
                addToHistory(cmdString, cwd);
                return;
            case 'help':
                addToHistory(cmdString, `
Available Commands:
  git [init|add|commit|status|log|branch|checkout]
  ls, pwd, clear
  touch [filename]
`);
                return;
            case 'touch':
                if (!args[1]) {
                    addToHistory(cmdString, 'usage: touch <filename>', 'error');
                    return;
                }
                const newFileName = args[1];
                if (files.some(f => f.name === newFileName)) {
                    addToHistory(cmdString, ''); // File exists, do nothing (unix behavior)
                } else {
                    setFiles(prev => [...prev, { name: newFileName, content: '' }]);
                    addToHistory(cmdString, '');
                }
                return;

            case 'cat':
                const targetFile = args[1];
                if (!targetFile) {
                    addToHistory(cmdString, 'usage: cat <filename>', 'error');
                    return;
                }

                // Allow reading from .git "virtual" directory
                if (targetFile.startsWith('.git/')) {
                    const gitFile = targetFile.replace('.git/', '');
                    if (gitFile === 'HEAD') {
                        addToHistory(cmdString, `ref: refs/heads/${gitState.branch}`);
                        return;
                    }
                    if (gitFile === 'config') {
                        addToHistory(cmdString, `[core]\n\trepositoryformatversion = 0\n\tfilemode = true\n\tbare = false\n\tlogallrefupdates = true\n[user]\n\tname = ${gitState.user.name}\n\temail = ${gitState.user.email}`);
                        return;
                    }
                    addToHistory(cmdString, `cat: ${targetFile}: No such file or directory`, 'error');
                    return;
                }

                // Normal files
                const file = files.find(f => f.name === targetFile);
                if (file) {
                    addToHistory(cmdString, file.content);
                } else {
                    addToHistory(cmdString, `cat: ${targetFile}: No such file or directory`, 'error');
                }
                return;
        }

        // --- Git Commands ---
        if (cmd === 'git') {
            const subCmd = args[1];

            if (!subCmd) {
                addToHistory(cmdString, 'usage: git <command>', 'error');
                return;
            }

            // check init status
            if (!gitState.initialized && subCmd !== 'init') {
                addToHistory(cmdString, 'fatal: not a git repository (or any of the parent directories): .git', 'error');
                return;
            }

            switch (subCmd) {
                case 'config':
                    // git config --global user.name "Name"
                    // git config --list
                    if (args.includes('--list')) {
                        addToHistory(cmdString, `user.name=${gitState.user.name}\nuser.email=${gitState.user.email}`);
                        return;
                    }

                    const nameIndex = args.indexOf('user.name');
                    const emailIndex = args.indexOf('user.email');

                    if (nameIndex !== -1 && args[nameIndex + 1]) {
                        const name = args.slice(nameIndex + 1).join(' ').replace(/"/g, ''); // Simple quote removal
                        setGitState(prev => ({ ...prev, user: { ...prev.user, name } }));
                        addToHistory(cmdString, '');
                        return;
                    }

                    if (emailIndex !== -1 && args[emailIndex + 1]) {
                        const email = args.slice(emailIndex + 1).join(' ').replace(/"/g, '');
                        setGitState(prev => ({ ...prev, user: { ...prev.user, email } }));
                        addToHistory(cmdString, '');
                        return;
                    }

                    addToHistory(cmdString, 'usage: git config --global user.name "Name"', 'error');
                    return;

                case 'init':
                    if (gitState.initialized) {
                        addToHistory(cmdString, `Reinitialized existing Git repository in ${cwd}/.git/`);
                    } else {
                        setGitState(prev => ({ ...prev, initialized: true }));
                        addToHistory(cmdString, `Initialized empty Git repository in ${cwd}/.git/`);
                    }
                    return;

                case 'status':
                    // Compare files with staging and commits
                    // Simplified: anything in 'files' not in 'staging' and not in 'last commit' is untracked/modified
                    // For this mock, we'll assume all files in 'files' that are NOT in staging are "Untracked"
                    // And files in Input staging are "Changes to be committed"

                    let output = [`On branch ${gitState.branch}`];

                    const stagedFiles = gitState.staging;
                    const untrackedFiles = files.filter(f => !stagedFiles.includes(f.name)); // Simplified logic

                    if (stagedFiles.length === 0 && untrackedFiles.length === 0) {
                        output.push('nothing to commit, working tree clean');
                    } else {
                        if (stagedFiles.length > 0) {
                            output.push('Changes to be committed:');
                            output.push('  (use "git rm --cached <file>..." to unstage)');
                            stagedFiles.forEach(f => output.push(`    \x1b[32mnew file:   ${f}\x1b[0m`)); // Green color simulation
                        }
                        if (untrackedFiles.length > 0) {
                            output.push('Untracked files:');
                            output.push('  (use "git add <file>..." to include in what will be committed)');
                            untrackedFiles.forEach(f => output.push(`    \x1b[31m${f.name}\x1b[0m`)); // Red color simulation
                        }
                    }
                    addToHistory(cmdString, output.join('\n'));
                    return;

                case 'add':
                    const target = args[2];
                    if (!target) {
                        addToHistory(cmdString, 'Nothing specified, nothing added.', 'warn');
                        return;
                    }
                    if (target === '.') {
                        const allFileNames = files.map(f => f.name);
                        setGitState(prev => ({ ...prev, staging: allFileNames }));
                        addToHistory(cmdString, '');
                    } else {
                        if (files.some(f => f.name === target)) {
                            setGitState(prev => ({
                                ...prev,
                                staging: [...new Set([...prev.staging, target])]
                            }));
                            addToHistory(cmdString, '');
                        } else {
                            addToHistory(cmdString, `fatal: pathspec '${target}' did not match any files`, 'error');
                        }
                    }
                    return;

                case 'commit':
                    const msgIndex = args.indexOf('-m');
                    if (msgIndex === -1 || !args[msgIndex + 1]) {
                        addToHistory(cmdString, 'error: switch `m` requires a value', 'error');
                        return;
                    }
                    // Extract message (handling quotes briefly)
                    const message = args.slice(msgIndex + 1).join(' ').replace(/^"|"$/g, '');

                    if (gitState.staging.length === 0) {
                        addToHistory(cmdString, 'nothing to commit, working tree clean', 'warn');
                        return;
                    }

                    // Mock Hook Execution
                    if (files.some(f => f.name === '.git/hooks/pre-commit')) {
                        addToHistory(cmdString, 'Running .git/hooks/pre-commit...');
                        const hookFile = files.find(f => f.name === '.git/hooks/pre-commit');
                        if (hookFile.content.includes('exit 1')) {
                            addToHistory(cmdString, '❌ Hook failed: exit 1 detected. Commit aborted.', 'error');
                            return;
                        }
                        addToHistory(cmdString, '✅ Hook passed.');
                    }

                    // Create commit
                    const commitHash = Math.random().toString(16).substring(2, 9);
                    const newCommit = {
                        id: commitHash,
                        message,
                        files: [...gitState.staging],
                        timestamp: new Date(),
                        parent: gitState.head
                    };

                    setGitState(prev => ({
                        ...prev,
                        commits: [newCommit, ...prev.commits],
                        head: commitHash,
                        staging: [] // clear staging
                    }));

                    addToHistory(cmdString, `[${gitState.branch} ${commitHash}] ${message}\n ${gitState.staging.length} file(s) changed`);
                    return;

                case 'log':
                    if (gitState.commits.length === 0) {
                        addToHistory(cmdString, 'fatal: your current branch has no commits.', 'error');
                        return;
                    }
                    const logOutput = gitState.commits.map((c, i) => {
                        const refs = i === 0 ? ` (\x1b[36mHEAD -> \x1b[32m${gitState.branch}\x1b[0m)` : '';
                        return `commit ${c.id}${refs}\nDate:   ${c.timestamp.toDateString()}\n\n    ${c.message}`;
                    }).join('\n\n');
                    addToHistory(cmdString, logOutput);
                    return;

                case 'branch':
                    // git branch (list)
                    if (!args[2]) {
                        const output = gitState.branches.map(b =>
                            b === gitState.branch ? `* \x1b[32m${b}\x1b[0m` : `  ${b}`
                        ).join('\n');
                        addToHistory(cmdString, output);
                        return;
                    }

                    // git branch -d <name>
                    if (args[2] === '-d' || args[2] === '-D') {
                        const branchName = args[3];
                        if (branchName === gitState.branch) {
                            addToHistory(cmdString, `error: Cannot delete branch '${branchName}' checked out at '/path/to/repo'`, 'error');
                            return;
                        }
                        if (!gitState.branches.includes(branchName)) {
                            addToHistory(cmdString, `error: branch '${branchName}' not found.`, 'error');
                            return;
                        }
                        setGitState(prev => ({
                            ...prev,
                            branches: prev.branches.filter(b => b !== branchName)
                        }));
                        addToHistory(cmdString, `Deleted branch ${branchName} (was a1b2c3d).`);
                        return;
                    }

                    // git branch <name>
                    const newBranchName = args[2];
                    if (gitState.branches.includes(newBranchName)) {
                        addToHistory(cmdString, `fatal: A branch named '${newBranchName}' already exists.`, 'error');
                    } else {
                        setGitState(prev => ({
                            ...prev,
                            branches: [...prev.branches, newBranchName]
                        }));
                        addToHistory(cmdString, '');
                    }
                    return;

                case 'checkout':
                    // git checkout -b <name>
                    if (args[2] === '-b') {
                        const checkoutBranch = args[3];
                        if (gitState.branches.includes(checkoutBranch)) {
                            addToHistory(cmdString, `fatal: A branch named '${checkoutBranch}' already exists.`, 'error');
                            return;
                        }
                        setGitState(prev => ({
                            ...prev,
                            branches: [...prev.branches, checkoutBranch],
                            branch: checkoutBranch
                        }));
                        addToHistory(cmdString, `Switched to a new branch '${checkoutBranch}'`);
                        return;
                    }

                    // git checkout <name>
                    const targetBranch = args[2];
                    if (!gitState.branches.includes(targetBranch)) {
                        addToHistory(cmdString, `error: pathspec '${targetBranch}' did not match any file(s) known to git`, 'error');
                        return;
                    }

                    if (targetBranch === gitState.branch) {
                        addToHistory(cmdString, `Already on '${targetBranch}'`);
                        return;
                    }

                    setGitState(prev => ({ ...prev, branch: targetBranch }));
                    addToHistory(cmdString, `Switched to branch '${targetBranch}'`);
                    return;

                case 'merge':
                    // Simplified merge: just says "Fast-forward" for now
                    const mergeTarget = args[2];
                    if (!mergeTarget) {
                        addToHistory(cmdString, 'fatal: No branch specified.', 'error');
                        return;
                    }
                    addToHistory(cmdString, `Updating a1b2c...d3e4f\nFast-forward\n 1 file changed, 1 insertion(+)`);
                    return;

                case 'remote':
                    if (args[2] === 'add') {
                        // git remote add origin <url>
                        if (!args[3] || !args[4]) {
                            addToHistory(cmdString, 'usage: git remote add <name> <url>', 'error');
                            return;
                        }
                        addToHistory(cmdString, '');
                        return;
                    }
                    if (args[2] === '-v') {
                        addToHistory(cmdString, 'origin  https://github.com/zerocode/project.git (fetch)\norigin  https://github.com/zerocode/project.git (push)');
                        return;
                    }
                    addToHistory(cmdString, 'usage: git remote add <name> <url>', 'error');
                    return;

                case 'push':
                    // git push origin main
                    addToHistory(cmdString, 'Enumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nWriting objects: 100% (3/3), 280 bytes | 280.00 KiB/s, done.\nTotal 3 (delta 0), reused 0 (delta 0)\nTo https://github.com/zerocode/project.git\n * [new branch]      main -> main');
                    return;

                case 'pull':
                    addToHistory(cmdString, 'Already up to date.');
                    return;

                case 'clone':
                    if (!args[2]) {
                        addToHistory(cmdString, 'usage: git clone <url>', 'error');
                        return;
                    }
                    const repoName = args[2].split('/').pop().replace('.git', '') || 'repo';
                    addToHistory(cmdString, `Cloning into '${repoName}'...\nremote: Enumerating objects: 12, done.\nremote: Counting objects: 100% (12/12), done.\nremote: Compressing objects: 100% (8/8), done.\nremote: Total 12 (delta 4), reused 12 (delta 4), pack-reused 0\nReceiving objects: 100% (12/12), done.`);
                    return;

                case 'cherry-pick':
                    if (!args[2]) {
                        addToHistory(cmdString, 'usage: git cherry-pick <commit-hash>', 'error');
                        return;
                    }
                    const hash = args[2];
                    addToHistory(cmdString, `[${gitState.branch} ${Math.random().toString(16).substring(2, 9)}] Cherry-picked commit ${hash}\n Date: ${new Date().toDateString()}\n 1 file changed, 1 insertion(+)`);
                    return;

                case 'rebase':
                    if (args[2] === '-i') {
                        addToHistory(cmdString, 'Successfully rebased and updated refs/heads/' + gitState.branch + '.');
                        return;
                    }
                    const base = args[2];
                    if (!base) {
                        addToHistory(cmdString, 'usage: git rebase <base-branch>', 'error');
                        return;
                    }
                    addToHistory(cmdString, `First, rewinding head to replay your work on top of it...\nApplying: ${base}\nUsing index info to reconstruct a base tree...\nFalling back to patching base and 3-way merge...`);
                    return;

                case 'stash':
                    if (args[2] === 'pop') {
                        addToHistory(cmdString, 'On branch ' + gitState.branch + '\nChanges not staged for commit:\n  (use "git add <file>..." to update what will be committed)\n  (use "git restore <file>..." to discard changes in working directory)\n\tmodified:   file.txt\n\nDropped refs/stash@{0} (a1b2c3d4e5f6g7h8)');
                        return;
                    }
                    if (args[2] === 'list') {
                        addToHistory(cmdString, 'stash@{0}: WIP on ' + gitState.branch + ': a1b2c3d Last commit message');
                        return;
                    }
                    if (args[2] === 'clear') {
                        addToHistory(cmdString, '');
                        return;
                    }
                    addToHistory(cmdString, 'Saved working directory and index state WIP on ' + gitState.branch + ': a1b2c3d Last commit message');
                    return;

                case 'clean':
                    if (args[2] === '-n') {
                        addToHistory(cmdString, 'Would remove untracked_file.txt\nWould remove build/');
                        return;
                    }
                    if (args[2] === '-f') {
                        addToHistory(cmdString, 'Removing untracked_file.txt\nRemoving build/');
                        return;
                    }
                    addToHistory(cmdString, 'fatal: clean.requireForce defaults to true and neither -i, -n, nor -f given; refusing to clean', 'error');
                    return;

                case 'bisect':
                    if (args[2] === 'start') {
                        addToHistory(cmdString, 'Bisecting: 6 revisions left to test after this (roughly 3 steps)');
                        return;
                    }
                    if (args[2] === 'good' || args[2] === 'bad') {
                        addToHistory(cmdString, 'Bisecting: 3 revisions left to test after this (roughly 2 steps)\n[a1b2c3d] Fix login bug');
                        return;
                    }
                    if (args[2] === 'reset') {
                        addToHistory(cmdString, 'Previous HEAD position was a1b2c3d... Fix login bug\nSwitched to branch ' + gitState.branch);
                        return;
                    }
                    addToHistory(cmdString, 'usage: git bisect [start|bad|good|reset]', 'error');
                    return;

                case 'blame':
                    if (!args[2]) {
                        addToHistory(cmdString, 'usage: git blame <file>', 'error');
                        return;
                    }
                    addToHistory(cmdString, `^a1b2c3d (Alice  2023-01-01 10:00:00 +0000 1) const app = express();\n^e5f6g7h (Bob    2023-01-02 11:00:00 +0000 2) app.use(bodyParser.json());\n^a1b2c3d (Alice  2023-01-01 10:00:00 +0000 3) app.listen(3000);`);
                    return;

                default:
                    addToHistory(cmdString, `src/hooks/useVirtualGit.js: 'git ${subCmd}' is not modelled yet.`, 'error');
            }
            return;
        }

        addToHistory(cmdString, `bash: ${cmd}: command not found`, 'error');

    }, [files, gitState, cwd]);

    return {
        history,
        executeCommand,
        files,
        gitState
    };
};
