const OpenAI = require("openai");

const openAIInstance = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const createOpenAIIdeaGeneration = (req, res) => {
  try {
    // Assuming 'data' is defined somewhere in your code
    res.status(200).json({
      status: "Success",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "Error",
      message: err.message,
    });
  }
};

exports.createOpenAIIdeaGeneration = createOpenAIIdeaGeneration;
