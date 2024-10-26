const prompt = require("prompt-sync")();
const { generateGeometricProgression } = require("./progression.js");
const { handleAnswer } = require("./check-answer.js");

const playProgressionGame = (userName) => {
    console.log("You selected 'What number is missing in the progression'.");
    
    for (let round = 0; round < 3; round++) {
        
        const { progression, missingValue } = generateGeometricProgression();
        console.log(`Round: ${round + 1}\nQuestion: ${progression.join(" ")}`);
        
        const userAnswer = parseInt(prompt());
        handleAnswer(userAnswer, missingValue, userName);

    }
};

module.exports = { playProgressionGame };
