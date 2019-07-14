'use strict';

function startQuiz() {
    console.log("quiz started");
    //on button id "start-quiz" being submitted
    $('#start-quiz').click(function (e) {
    //remove current body
    $("main").remove();
    STORE.numOfCurrentQuestion = 0;
    let currentQuestion = STORE.questions[0];
    console.log(currentQuestion);
    STORE.numOfCorrectAnswers = 0;
    //replace body with question 1 page
    $("body").append(`
            <section id="answer-section">
                <h2>Question ${STORE.numOfCurrentQuestion + 1}</h2>
                <h3>${currentQuestion.question}</h3>
                <break>
            <form id="answer-selector-form">
            <fieldset id="answer-selector-field">
                <label class="answerOption" for="answer-selector">
                    <input type="radio" value="${currentQuestion.answers[0]}" name="answer" required>
                    <span>${currentQuestion.answers[0]}</span>
                </label>
            <label class="answerOption" for="answer-selector">
                <input type="radio" value="${currentQuestion.answers[1]}" name="answer" required>
                <span>${currentQuestion.answers[1]}</span>
            </label>
            <label class="answerOption" for="answer-selector">
                <input type="radio" value="${currentQuestion.answers[2]}" name="answer" required>
                <span>${currentQuestion.answers[2]}</span>
            </label>
            <label class="answerOption" for="answer-selector">
                <input type="radio" value="${currentQuestion.answers[3]}" name="answer" required>
                <span>${currentQuestion.answers[3]}</span>
            </label>
            <button type="submit" id="answerSubmitButton" for="answer-selector">Submit</button>                                                  
            </fieldset>
        
            </form>
                <img src=${currentQuestion.questionImgSrc} alt=${currentQuestion.questionImgAlt}></img>
            </section>
        `);
})}

function submitAnswer() {
    console.log("submitting answer");
    //on answerSubmitButton pressed
    $('body').on('submit', (e) => {
        console.log(e);
        e.preventDefault();
        //collect answer
        let selectedAnswer = $('input:checked');
        console.log(selectedAnswer);
        selectedAnswer = selectedAnswer.val();
        let currentQuestion = STORE.questions[STORE.numOfCurrentQuestion];
        console.log(currentQuestion);
        console.log(selectedAnswer);
        let answerResult;
        //compare answer against actual answer for questionNum
        if (selectedAnswer === currentQuestion.correctAnswer) {
            answerResult = "Correct!";
            STORE.NumOfCorrectAnswers++;
        }
        else if (selectedAnswer !== currentQuestion.correctAnswer) {
            answerResult = "Incorrect!";
        }
        else {
            console.log("Something broke at Line 22 of index.js");
        }
        //remove current body
        $("#answer-section").remove();
        $("question-text").remove();
        //replace body with feedback page
        $("body").append(`
            <section id="feedback-section">
                <h2 id="answer-result">${answerResult}</h2>
                <h3 id="correct-answer">${currentQuestion.correctAnswer}</h3>
                <p id="additional-info">${currentQuestion.additionalInfo}</p>
                <button type=button id="next-question-button">Next Question</button>
                <img src="${currentQuestion.feedbackImgSrc}" alt="${currentQuestion.feedbackImgAlt}">
            </section>
        `);
})}

function nextQuestion() {
    $('body').on('click', '#next-question-button', (e) => {
    e.preventDefault();
    console.log("moving to next question")
    console.log(STORE.numOfCurrentQuestion);
    if (STORE.numOfCurrentQuestion >= 9) {
        displayResults();
    }
    else {
        STORE.numOfCurrentQuestion++;
        let currentQuestion = STORE.questions[STORE.numOfCurrentQuestion];
        console.log(STORE.numOfCurrentQuestion);
        $("#feedback-section").remove();
        $("body").append(`
            <section id="answer-section">
                <h2>Question ${STORE.numOfCurrentQuestion + 1}</h2>
                <h3>${currentQuestion.question}</h3>
            <form id="answer-selector-form">
            <fieldset id="answer-selector-field">
                <label class="answerOption" for="answer-selector">
                    <input type="radio" value="${currentQuestion.answers[0]}" name="answer" required>
                    <span>${currentQuestion.answers[0]}</span>
                </label>
            <label class="answerOption" for="answer-selector">
                <input type="radio" value="${currentQuestion.answers[1]}" name="answer" required>
                <span>${currentQuestion.answers[1]}</span>
            </label>
            <label class="answerOption" for="answer-selector">
                <input type="radio" value="${currentQuestion.answers[2]}" name="answer" required>
                <span>${currentQuestion.answers[2]}</span>
            </label>
            <label class="answerOption" for="answer-selector">
                <input type="radio" value="${currentQuestion.answers[3]}" name="answer" required>
                <span>${currentQuestion.answers[3]}</span>
            </label>
            <button type="submit" id="answerSubmitButton" for="answer-selector">Submit</button>                                                  
            </fieldset>
        
            </form>
                <img src=${currentQuestion.questionImgSrc} alt=${currentQuestion.questionImgAlt}></img>
            </section>
        `)
    }})}

function displayResults(){

}

function startOver() {

}

function bootUp() {
    console.log("Booted up page");
    //Start all other monitoring functions
    startQuiz();
    submitAnswer();
    nextQuestion();
    displayResults();
    startOver();
}

bootUp()