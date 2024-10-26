const checkAnswer = function(userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
}

const handleAnswer = function(userAnswer, correctAnswer, userName) {
    if (checkAnswer(userAnswer, correctAnswer)) {
        console.log("Correct!");
    } else {
        console.log(`Your answer: ${userAnswer}.\n It is wrong answer ;(\n Correct answer was ${correctAnswer}. Let's try again, ${userName}!`);
    }
}

module.exports = { handleAnswer };
