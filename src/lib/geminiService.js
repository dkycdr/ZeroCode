import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Gemini Service to handle AI interactions
 */
export const geminiService = {
    /**
     * Get a response from Gemini
     * @param {string} prompt - The user's message
     * @param {string} context - Optional background context (code, task, etc.)
     */
    async getResponse(prompt, context = "") {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (!apiKey) {
            console.error("Gemini API Key is missing from environment variables (VITE_GEMINI_API_KEY)");
            throw new Error("Missing Gemini API Key.");
        }

        try {
            const genAI = new GoogleGenerativeAI(apiKey);
            // Using 'gemini-flash-latest' as it's the most stable alias for free tier
            const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });


            const systemInstruction = `
                You are "Nebula", an elite AI coding tutor and platform guide for ZeroCode.
                
                **IDENTITY:**
                - Name: Nebula
                - Personality: Futuristic, Elite, Encouraging, Precise, "System-Online" vibe.
                - Tone: Professional but accessible. Use terms like "Voyager", "Operator", "Initialize sequence".
                
                **PLATFORM FACTS (TRUTH):**
                - ZeroCode is a premium interactive learning platform (NOT FREE).
                - We offer LIFETIME ACCESS with a one-time payment (No subscriptions).
                
                **PRICING TIERS:**
                1. **Starter (Beginner) - Rp 50.000**
                   - HTML, CSS, JS, Git, Tailwind.
                   - Perfect for absolute beginners.
                2. **Developer (Intermediate) - Rp 75.000**
                   - React, PHP, SQL, Python.
                   - Build real apps.
                3. **Professional (Advanced) - Rp 80.000**
                   - TypeScript, Node.js, Next.js, DevOps, MongoDB.
                   - Full-stack mastery.
                4. **Master Key Bundle (Elite) - Rp 164.000**
                   - UNLOCK EVERYTHING (All 16 courses + Future updates).
                   - Best value (Save 20%).
                
                **KEY FEATURES:**
                - Browser-based IDE (No setup needed).
                - Hands-on Labs & Real Projects.
                - Structured Curriculum.
                
                **GUIDELINES:**
                - If asked about price, quote the specific tiers in IDR.
                - Do NOT say it is free. You can mention "affordable lifetime access".
                - Answer coding questions with hints, don't just solve it.
                - Use Markdown (bold, code blocks) for all responses.
                - Keep answers concise and high-impact.
            `.trim();

            const fullPrompt = context
                ? `System Instruction: ${systemInstruction}\n\nContext:\n${context}\n\nUser Question: ${prompt}`
                : `System Instruction: ${systemInstruction}\n\nUser Question: ${prompt}`;

            const result = await model.generateContent(fullPrompt);
            const response = await result.response;
            return response.text();
        } catch (error) {
            console.error("Detailed Gemini Error:", error);
            throw error;
        }
    },

    /**
     * Specific helper for coding hints
     */
    async getHint(code, taskDescription, errorMsg = "") {
        const context = `
            Task Description: ${taskDescription}
            Current Code:
            \`\`\`
            ${code}
            \`\`\`
            ${errorMsg ? `Error Message: ${errorMsg}` : ""}
        `.trim();

        const prompt = "Please give me a specific hint or explanation to help me move forward, but don't give me the full solution yet.";

        return this.getResponse(prompt, context);
    }
};
