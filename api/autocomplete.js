// Import the OpenAI library
const { Configuration, OpenAIApi } = require('openai');

module.exports = async (req, res) => {
  // Initialize OpenAI with the environment variable for the API key
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

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
