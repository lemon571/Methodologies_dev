const { greetUser } = require("../scr/cli.js")
const { playLcmGame } = require("../games/brain-lcm.js")
const { playProgressionGame } = require("../games/brain-progression.js")
const prompt = require("prompt-sync")();

const main = function() {
    const userName = greetUser();
    while (true) {
        console.log("Choose a game:\n1. Find the smallest common multiple of given numbers.\n2. What number is missing in the progression?");
        const defense = prompt();
        
        if (defense === '1') {
            playLcmGame(userName);
        } else if (defense === '2') {
            playProgressionGame(userName);
        } else if (defense === 'exit') {
            console.log(`Goodbye, ${userName}!`);
            process.exit();
        } else {
            console.log("Invalid choice. Please select again.");
        }
    }
}

main();
