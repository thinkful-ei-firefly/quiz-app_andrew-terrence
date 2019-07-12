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
    //on answerSubmitButton pressed
    $('#answer-selector-form').submit(function(e) {
        e.preventDefault();
        //collect answer
        let selectedAnswer = $('input:checked');
        console.log(selectedAnswer);
        selectedAnswer = selectedAnswer.val();
        //let correctAnswer = answer[questionNum];
        console.log(selectedAnswer);
        //compare answer against actual answer for questionNum
        if (selectedAnswer === correctAnswer) {
            wasAnswerSubmitedCorrect = true;
            NumOfCorrectAnswers++;
        }
        else if (selectedAnswer !== correctAnswer) {
            wasAnswerSubmitedCorrect = false;
        }
        else {
            console.log("Something broke at Line 22 of index.js");
        }
        //remove current body
        $("#answer-section").remove();
        $("question-text").remove();
        //replace body with feedback page
        $("body").append(`
            <section>
                <h2 id="answer-result">${answerResult}</h2>
                <h3 id="correct-answer">${correctAnswer}</h3>
                <p id="additional-info">${additionalInfo}</p>
                <button id="next-question-button">Next Question</button>
                <img src="${feedbackImage}" alt="ALT INFO">
            </section>
        `);
})}

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