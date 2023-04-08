const readline = require('readline');
const api = require('./api');

async function runTerminal(lastAnswer) {
    const terminalReader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const userInput = await new Promise((response) => {
        terminalReader.question('Prompt:\n', response);
    });

    const apiResponseText = await api.generateTextFromApiV2(userInput, lastAnswer);
    console.log("\nResponse:\n" + apiResponseText + "\n");

    terminalReader.close();
    runTerminal(apiResponseText);
}

runTerminal("");
