require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
// Key from environment variable
const apiKey = process.env['OPENAI_API_KEY'];
const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

const gptModelName = "gpt-3.5-turbo";

function initializeChat(behavior) {
  return [
    {role: "system", content: behavior}
  ];
}

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

async function completionsChatTextModelV3(messages) {
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

async function generateChatMessages(promptText) {
  const apiResponse = await completionsChatTextModel(promptText);
  return apiResponse.data.choices[0].message.content;
}

async function generateChatMessagesV2(promptText, lastAnswer) {
  const apiResponse = await completionsChatTextModelV2(promptText, lastAnswer);
  return apiResponse.data.choices[0].message.content;
}

async function generateChatMessagesV3(promptText, messages) {
  const prompt = {role: "user", content: promptText};
  messages.push(prompt);

  const apiResponse = await completionsChatTextModelV3(messages);
  const textResponse = apiResponse.data.choices[0].message.content;

  const assistantResponse = {role: "assistant", content: textResponse};
  messages.push(assistantResponse);

  return messages;
}

function lastMessage(messages){
  return messages[messages.length - 1].content;
}

module.exports = { generateChatMessages, generateChatMessagesV2, generateChatMessagesV3, initializeChat, lastMessage};