require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
// Key from environment variable
const key = process.env['OPENAI_API_KEY'];
const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);

const gptModelName = "gpt-3.5-turbo";
/* 
*/

async function completionsChatTextModel(promptText) {
  const messages = [{role: "user", content: promptText}];

  return await openai.createChatCompletion({
      model: gptModelName,
      messages: messages,
    });
  }

async function generateTextFromApi(promptText) {
  const apiResponse = await completionsChatTextModel(promptText);
  return apiResponse.data.choices[0].message.content;
}

module.exports = { generateTextFromApi };