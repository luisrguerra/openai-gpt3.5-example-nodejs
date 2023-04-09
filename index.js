const readline = require('readline');
const api = require('./api');

const messages = api.initializeChat("You are a helpful assistant.");

function promptText(text){
    const cyanText = "\x1b[36m";
    const whiteText = "\x1b[37m";
    return (cyanText + text + '\n'+ whiteText);
}

async function askPrompt(){
    const terminalReader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const userInput = await new Promise((response) => {
        terminalReader.question(promptText('Prompt:'), response);
    });
    terminalReader.close();
    return userInput;
}

function printResponse(response){
    const greenText = "\x1b[32m";
    const whiteText = "\x1b[37m";
    console.log(greenText + "\nResponse:\n" + whiteText + response + "\n");
}

async function runTerminal(messagesHistory) {
    const userInput = await askPrompt();

    const apiResponseObject = await api.generateTextFromApiV3(userInput,messagesHistory);
    const apiResponseText = api.lastMessage(apiResponseObject);
    
    printResponse(apiResponseText);

    runTerminal(apiResponseObject);
}

runTerminal(messages);
