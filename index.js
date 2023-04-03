const readline = require('readline');
const api = require('./api');

async function runTerminal() {
    const terminalReader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const userInput = await new Promise((response) => {
        terminalReader.question('Prompt:\n', response);
    });

    const textTokenSize = 512;
    const apiResponseText = await api.generateTextFromApi(userInput, textTokenSize);
    console.log("\nResponse:\n" + apiResponseText + "\n");

    terminalReader.close();
    runTerminal();
}

runTerminal();
