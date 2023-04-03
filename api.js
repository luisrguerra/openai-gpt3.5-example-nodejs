require('dotenv').config()
const { Configuration, OpenAIApi } = require("openai");
// Key from environment variable
const key = process.env['OPENAI_API_KEY'];
const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);

const gptModelName = "text-davinci-003";
/* 
text-davinci-003: 4,097 tokens	 
Can do any language task with better quality,
longer output, and consistent instruction-following
than the curie, babbage, or ada models.
Also supports inserting completions within text.

text-davinci-002: 4,097 tokens
Similar capabilities to text-davinci-003 but
trained with supervised fine-tuning instead
of reinforcement learning

text-curie-001: 2,049 tokens Up to Oct 2019
Very capable, faster and lower cost than Davinci.

text-babbage-001: 2,049 tokens Up to Oct 2019
Capable of straightforward tasks, very fast, and lower cost.

text-ada-001: 2,049 tokens Up to Oct 2019
Capable of very simple tasks, usually the fastest 
model in the GPT-3 series, and lowest cost.

davinci: 2,049 tokens Up to Oct 2019
Most capable GPT-3 model. Can do any task the 
other models can do, often with higher quality.

curie: 2,049 tokens Up to Oct 2019
Very capable, but faster and lower cost than Davinci.

babbage: 2,049 tokens Up to Oct 2019
Capable of straightforward tasks, very fast, and lower cost.

ada: 2,049 tokens Up to Oct 2019
Capable of very simple tasks, usually the fastest model 
in the GPT-3 series, and lowest cost.
*/

async function completionsTextModel(promptText,tokenSize) {
    return await openai.createCompletion({
        model: gptModelName,
        prompt: promptText,
        temperature: 0,
        max_tokens: tokenSize,
      });
  }

async function generateTextFromApi(promptText,textTokenSize) {
  const apiResponse = await completionsTextModel(promptText, textTokenSize);
  return apiResponse.data.choices[0].text;
}

module.exports = { generateTextFromApi };