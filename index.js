/* eslint-disable no-undef */
'use strict';

function startQuiz() {
  console.log('quiz started');
  //on button id "start-quiz" being submitted
  $('body').on('click','#start-quiz',function (e) {
    //remove current body
    $('main').remove();
    STORE.numOfCurrentQuestion = 0;
    let currentQuestion = STORE.questions[0];
    console.log(currentQuestion);
    STORE.numOfCorrectAnswers = 0;
    //replace body with question 1 page
    $('body').html(`
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
  });}

function submitAnswer() {
  console.log('submitting answer');
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
      answerResult = 'Correct!';
      STORE.numOfCorrectAnswers++;
    }
    else if (selectedAnswer !== currentQuestion.correctAnswer) {
      answerResult = 'Incorrect!';
    }
    else {
      console.log('Something broke at Line 22 of index.js');
    }
    //remove current body
    $('#answer-section').remove();
    $('question-text').remove();
    //replace body with feedback page
    $('body').append(`
            <section id="feedback-section">
                <h2 id="answer-result">${answerResult}</h2>
                <h3 id="correct-answer">${currentQuestion.correctAnswer}</h3>
                <p id="additional-info">${currentQuestion.additionalInfo}</p>
                <button type=button id="next-question-button">Next Question</button>
                <img src="${currentQuestion.feedbackImgSrc}" alt="${currentQuestion.feedbackImgAlt}">
            </section>
        `);
  });}

function nextQuestion() {
  $('body').on('click', '#next-question-button', (e) => {
    e.preventDefault();
    console.log('moving to next question');
    console.log(STORE.numOfCurrentQuestion);
    STORE.numOfCurrentQuestion++;
    if (STORE.numOfCurrentQuestion === STORE.questions.length) {
      displayResults();
    }
    else {
      
      let currentQuestion = STORE.questions[STORE.numOfCurrentQuestion];
      console.log(STORE.numOfCurrentQuestion);
      $('#feedback-section').remove();
      $('body').html(`
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
        `);
    }});}

function displayResults(){
  if(STORE.numOfCorrectAnswers>=6){
    $('body').html(
      `<section class='results'>
      <h2>Your total score is ${STORE.numOfCorrectAnswers}/${STORE.questions.length}</h2>
      <p> The force is strong with you!</p>
    </section>
    <button id='start-quiz'>Retry</button>`); 

  }
  else {
    $('body').html(
      `<section class='results'>
      <h2>Your total score is ${STORE.numOfCorrectAnswers}/${STORE.questions.length}</h2>
      <p> Your training is not complete. Seek a new master.</p>
    </section>
    <button id='start-quiz'>Retry</button>`); 


  }
}



function bootUp() {
  console.log('Booted up page');
  //Start all other monitoring functions
  startQuiz();
  submitAnswer();
  nextQuestion();
  
}

bootUp();