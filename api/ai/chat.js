import { GoogleGenerativeAI } from '@google/generative-ai';
import { cors, compose } from '../middleware/cors.js';
import { requireAuth } from '../middleware/auth.js';
import { userRateLimit } from '../middleware/rateLimit.js';

/**
 * AI Chat Proxy Endpoint
 * POST /api/ai/chat
 * 
 * Proxies requests to Google Gemini API
 * Keeps API key server-side and hidden from client
 * 
 * Requires: Authentication
 * Body: { message, context? }
 */
async function aiChatHandler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, error: 'Method not allowed' });
    }

    try {
        const { message, context } = req.body;

        if (!message || typeof message !== 'string') {
            return res.status(400).json({
                success: false,
                error: 'Message is required'
            });
        }

        // Get Gemini API key from server environment (NEVER exposed to client)
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;

        if (!GEMINI_API_KEY) {
            console.error('GEMINI_API_KEY not configured');
            return res.status(500).json({
                success: false,
                error: 'AI service not configured'
            });
        }

        // Initialize Gemini
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        // Build prompt with context
        let prompt = message;

        if (context) {
            prompt = `Context: ${JSON.stringify(context)}\n\nUser Question: ${message}\n\nPlease provide a helpful response based on the context.`;
        }

        // Generate response
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        // Log usage for cost tracking
        console.log(`AI request from user ${req.user.id}: ${message.substring(0, 50)}...`);

        return res.status(200).json({
            success: true,
            response: text,
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('AI chat error:', error);

        // Handle specific Gemini errors
        if (error.message?.includes('quota')) {
            return res.status(429).json({
                success: false,
                error: 'AI service quota exceeded. Please try again later.'
            });
        }

        return res.status(500).json({
            success: false,
            error: 'AI service temporarily unavailable'
        });
    }
}

// Apply middleware with user-specific rate limiting (20 requests per hour)
export default compose(
    cors,
    userRateLimit({ maxRequests: 20, windowMs: 60 * 60 * 1000 }), // 20 per hour
    requireAuth
)(aiChatHandler);
