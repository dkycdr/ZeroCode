import { CONTENT_TYPES } from '../../../curriculumStructure.js';

export const quiz2Mastery = {
    id: 'git-1-quiz-mastery',
    type: CONTENT_TYPES.QUIZ,
    title: 'Quiz: The Architect 🏛️',
    duration: '10 min',
    questions: [
        {
            id: 'q1',
            question: 'How does Git store data compared to SVN?',
            options: [
                'As a list of file changes (Deltas)',
                'As a stream of Snapshots',
                'As a relational database',
                'As a zip file'
            ],
            correctIndex: 1,
            explanation: 'Git takes a "snapshot" of the entire filesystem at every commit. If a file hasn\'t changed, it stores a reference to the previous snapshot.'
        },
        {
            id: 'q2',
            question: 'What ensures the data integrity of a Git repository?',
            options: [
                'The Admin password',
                'The centralized server',
                'The SHA-1 Checksum',
                'The file permissions'
            ],
            correctIndex: 2,
            explanation: 'Every object is identified by a SHA-1 hash of its contents. You cannot change a single bit of data without changing the hash.'
        },
        {
            id: 'q3',
            question: 'In the Object Model, what does a "Tree" represent?',
            options: [
                'A single file content',
                'A commit history',
                'A directory structure',
                'A branch'
            ],
            correctIndex: 2,
            explanation: 'A Tree Object maps names to Blob Objects (files) or other Tree Objects (subdirectories).'
        },
        {
            id: 'q4',
            question: 'Why is Git called "Distributed"?',
            options: [
                'Because it splits files across multiple hard drives',
                'Because every developer has a full copy of the entire history',
                'Because it is hosted on the cloud',
                'Because Linus Torvalds distributes it for free'
            ],
            correctIndex: 1,
            explanation: 'In a Distributed VCS, every clone is a full backup of the repository, containing the entire history.'
        },
        {
            id: 'q5',
            question: 'If you change a file in the Working Directory, what state is it in?',
            options: [
                'Committed',
                'Staged',
                'Modified (or Untracked)',
                'Indexed'
            ],
            correctIndex: 2,
            explanation: 'Files in the Working Directory that differ from the Index are "Modified". New files are "Untracked".'
        }
    ]
};
