const readline = require('readline');
const api = require('./api');

const messages = api.initializeChat("You are a helpful assistant.");

function lastMessage(messages){
  return messages[messages.length - 1].content;
}

async function runTerminal(messagesHistory) {
    const terminalReader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const userInput = await new Promise((response) => {
        terminalReader.question('Prompt:\n', response);
    });

    const apiResponseObject = await api.generateTextFromApiV3(userInput,messagesHistory);
    const apiResponseText = lastMessage(apiResponseObject);
    
    console.log("\nResponse:\n" + apiResponseText + "\n");

    terminalReader.close();
    runTerminal(apiResponseObject);
}

runTerminal(messages);
