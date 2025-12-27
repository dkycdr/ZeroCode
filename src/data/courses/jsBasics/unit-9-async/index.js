import { doc1SyncVsAsync } from './01-doc-sync-async.js';
import { doc2Promises } from './02-doc-promises.js';
import { doc3AsyncAwait } from './03-doc-async-await.js';
import { lab4Timer } from './04-lab-timer.js';
import { quiz5Async } from './05-quiz-async.js';

export const unit9Async = {
    id: 'js-basics-unit-9-async',
    version: '2.0.0',
    title: 'Unit 9: Asynchronous JavaScript',
    description: 'Handle operations that take time. Master Promises, async/await, and error handling.',
    items: [
        doc1SyncVsAsync,
        doc2Promises,
        doc3AsyncAwait,
        lab4Timer,
        quiz5Async
    ]
};
