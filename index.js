'use strict';

function startQuiz() {
    console.log("quiz started");
    //on button id "start-quiz" being submitted
    //remove current body
    //replace body with question 1 page
    //set questionNum to 1
}

function submitAnswer() {
    console.log("submitting answer");
    //on submit answer button
    //remove current body
    //collect answer
    //compare answer against actual answer for questionNum
    //delete current body
    //if answer was correct, correctAnswers++ and set wasAnswerSubmitedCorrect = true;
    //else, do not incriment correctAnswer and set wasAnswerSubmittedCorrect = false;
    //replace body with feedback page
}

function nextQuestion() {
    console.log("moving to next question")
    //if questionNum = 10, display results
    //else questionNum++, set page to that question number's info
}

function bootUp() {
    console.log("Booted up page");
    //Start all other monitoring functions
}

bootUp()