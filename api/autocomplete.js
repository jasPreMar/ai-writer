// Import the OpenAI library
const { OpenAI } = require('openai');

// Instantiate OpenAI client with your API key
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

module.exports = async (req, res) => {
  try {
    // Parse the request body to get the prompt
    const { prompt } = req.body;

    // Call the OpenAI API
    const completion = await openai.createCompletion({
      model: 'gpt-3.5-turbo-instruct',
      prompt: prompt,
      max_tokens: 20,
    });

    // Send the response back to the client
    res.status(200).json(completion.data);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
};
