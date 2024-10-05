function checkAnswer(userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
}

function handleAnswer(userAnswer, correctAnswer, userName) {
    if (checkAnswer(userAnswer, correctAnswer)) {
        console.log("Correct!");
    } else {
        console.log(`Your answer: ${userAnswer}.\n It is wrong answer ;(\n Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
    }

}

module.exports = { handleAnswer };
