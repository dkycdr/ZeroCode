
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const MODEL_ID = "llama-3.3-70b-versatile"; // The powerhouse model you selected

/**
 * AI Service to fetch hints and explanations from Groq
 */
export const aiService = {
    /**
     * Ask the AI to generate a hint for the current task.
     * @param {string} code - The user's current code
     * @param {string} taskDescription - The description of the task they are trying to solve
     * @param {string} errorMsg - Optional error message if any
     */
    async getHint(code, taskDescription, errorMsg = "") {
        const apiKey = import.meta.env.VITE_GROQ_API_KEY;

        if (!apiKey) {
            throw new Error("Missing Groq API Key. Please add VITE_GROQ_API_KEY to your .env file.");
        }

        const systemPrompt = `
You are an expert coding mentor for beginners. 
Your goal is to provide a helpful HINT, not the full solution.
Guide the user to the answer by explaining the concept or pointing out the mistake.
Be concise and encouraging. 
    `.trim();

        const userPrompt = `
I am stuck on this task: "${taskDescription}".

Here is my current code:
\`\`\`
${code}
\`\`\`

${errorMsg ? `I am getting this error: "${errorMsg}"` : ""}

Please give me a specific hint to help me move forward.
    `.trim();

        return this.fetchGroqResponse(apiKey, systemPrompt, userPrompt);
    },

    /**
     * General chat response for the AI Assistant Panel
     * @param {string} message - User's message
     * @param {string} context - Optional technical context (code, task, etc.)
     */
    async getChatResponse(message, context = "") {
        const apiKey = import.meta.env.VITE_GROQ_API_KEY;
        if (!apiKey) throw new Error("Missing Groq API Key.");

        const systemPrompt = `
You are Nebula, an elite coding assistant powered by Groq (Llama 3).
Your goal is to assist the user with their coding tasks, explain concepts, and debug issues.
Be concise, professional, and helpful.
        `.trim();

        const userPrompt = context
            ? `${context}\n\nUser Query: ${message}`
            : message;

        return this.fetchGroqResponse(apiKey, systemPrompt, userPrompt);
    },

    /**
     * Internal helper to fetch from Groq
     */
    async fetchGroqResponse(apiKey, systemPrompt, userPrompt) {
        try {
            const response = await fetch(GROQ_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: MODEL_ID,
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: userPrompt }
                    ],
                    temperature: 0.5,
                    max_tokens: 500
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error?.message || "Failed to fetch from Groq");
            }

            const data = await response.json();
            return data.choices[0]?.message?.content || "No response received.";

        } catch (error) {
            console.error("AI Service Error:", error);
            throw error;
        }
    }
};
