// Import the OpenAI library
const { OpenAIAPI } = require('openai');

module.exports = async (req, res) => {
  // Initialize OpenAI with the environment variable for the API key
  const openai = new OpenAIAPI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    // Get prompt from the request body
    const { prompt } = req.body;

    // Call the OpenAI API
    const response = await openai.createCompletion({
      model: "text-davinci-003", // or whichever model you're using
      prompt: prompt,
      max_tokens: 150,
    });

    // Send the response back to the client
    res.status(200).json(response.data);
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
};
