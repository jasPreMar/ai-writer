// Import the OpenAI library
const { OpenAI } = require('openai');

// Instantiate OpenAI client with your API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async (req, res) => {
    console.log('Request body:', req.body);  // Log the incoming request body

    try {
        const { prompt } = req.body;
        const completion = await openai.completions.create({
            model: 'gpt-3.5-turbo-instruct',
            prompt: prompt,
            max_tokens: 20,
        });

        console.log('OpenAI API Response:', completion);  // Log the entire OpenAI API response
        console.log('Completion Data:', completion.data);  // Log the completion data
        console.log(completion);
        
        res.status(200).json(completion.data);
    } catch (error) {
        console.error('Error:', error);  // Log any errors
        res.status(500).json({ error: error.message });
    }
};
