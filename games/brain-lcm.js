const { lcmOfArray } = require("./lcm.js");
const { handleAnswer } = require("./check-answer.js");
const prompt = require("prompt-sync")();

const playLcmGame = (userName) => {
    console.log("You selected 'Find the smallest common multiple of given numbers'.");
    for (let round = 0; round < 3; round++) {
        const numbers = [];
        while (numbers.length < 3) {
            const num = Math.floor(Math.random() * 100) + 1;
            if (!numbers.includes(num)) {
                numbers.push(num);
            }
        }
        console.log(`Round: ${round + 1}\nQuestion: ${numbers.join(", ")}`);
        const userAnswer = parseInt(prompt());
        const correctAnswer = lcmOfArray(numbers);
        handleAnswer(userAnswer, correctAnswer, userName);
    }
}

module.exports = { playLcmGame };
