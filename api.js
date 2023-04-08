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
  const messages = [
   {role: "user", content: promptText}
  ];

  return await openai.createChatCompletion({
      model: gptModelName,
      messages: messages,
      /*
      temperature: ,
      max_tokens: ,
      top_p: ,
      frequency_penalty: ,
      presence_penalty: ,
      */
    });
}

async function completionsChatTextModelV2(promptText, lastAnswer) {
  const messages = [
   {role: "assistant", content: lastAnswer},
   {role: "user", content: promptText}
  ];

  return await openai.createChatCompletion({
      model: gptModelName,
      messages: messages,
      /*
      temperature: ,
      max_tokens: ,
      top_p: ,
      frequency_penalty: ,
      presence_penalty: ,
      */
    });
}

async function generateTextFromApi(promptText) {
  const apiResponse = await completionsChatTextModel(promptText);
  return apiResponse.data.choices[0].message.content;
}

async function generateTextFromApiV2(promptText, lastAnswer) {
  const apiResponse = await completionsChatTextModelV2(promptText, lastAnswer);
  return apiResponse.data.choices[0].message.content;
}

module.exports = { generateTextFromApi, generateTextFromApiV2};