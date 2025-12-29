import { GoogleGenerativeAI } from '@google/generative-ai';
import { cors } from './middleware/cors.js';
import { rateLimit } from './middleware/rateLimit.js';

/**
 * AI Chat Proxy Endpoint
 * POST /api/ai?action=chat
 */

const aiLimiter = rateLimit({ maxRequests: 20, windowMs: 60 * 60 * 1000 }); // 20/hour

async function handleChat(req, res) {
    const { message, context } = req.body;

    if (!message) {
        return res.status(400).json({ success: false, error: 'Message required' });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

    if (!GEMINI_API_KEY) {
        return res.status(500).json({ success: false, error: 'AI service not configured' });
    }

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    let prompt = message;
    if (context) {
        prompt = `Context: ${JSON.stringify(context)}\n\nUser: ${message}`;
    }

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return res.status(200).json({ success: true, response: text });
}

async function aiHandler(req, res) {
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    // Auth check
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const action = req.query.action;

    try {
        if (action === 'chat') {
            return handleChat(req, res);
        }
        return res.status(400).json({ success: false, error: 'Invalid action' });
    } catch (error) {
        console.error('AI error:', error);
        if (error.message?.includes('quota')) {
            return res.status(429).json({ success: false, error: 'AI quota exceeded' });
        }
        return res.status(500).json({ success: false, error: 'AI service error' });
    }
}

export default cors(aiLimiter(aiHandler));
