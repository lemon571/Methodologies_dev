const prompt = require("prompt-sync")();
const { greetUser } = require("../scr/cli.js")
const { playLcmGame } = require("../games/brain-lcm.js")
const { playProgressionGame } = require("../games/brain-progression.js")

const main = () => {
    const userName = greetUser();
    
    while (true) {
        console.log("Choose a game:\n1. Find the smallest common multiple of given numbers.\n2. What number is missing in the progression?");
       
        const defense = prompt();
        
        switch (defense) {
            case '1':
                playLcmGame(userName);
                break;
            case '2':
                playProgressionGame(userName);
                break;
            case 'exit':
                console.log("Goodbye, ${userName}!");
                process.exit();
                break;
            default:
                console.log("Invalid choice. Please select again.");
        }
    }
};

main();
