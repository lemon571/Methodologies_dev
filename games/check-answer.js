const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
};

const handleAnswer = (userAnswer, correctAnswer, userName) => {
    if (checkAnswer(userAnswer, correctAnswer)) {
        console.log("Correct!");
    } else {
        console.log(`Your answer: ${userAnswer}.\nIt is wrong answer ;(\nCorrect answer was ${correctAnswer}. Let's try again, ${userName}!`);
    }
};

module.exports = { handleAnswer };
