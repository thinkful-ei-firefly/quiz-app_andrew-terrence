/* eslint-disable no-undef */
'use strict';

function startQuiz() {
  //on button id "start-quiz" being submitted
  $('body').on('click','#start-quiz',function (e) {
    //remove current body
    $('main').remove();
    STORE.numOfCurrentQuestion = 0;
    let currentQuestion = STORE.questions[0];
    STORE.numOfCorrectAnswers = 0;
    //replace body with question 1 page
    $('body').html(`
            <header>
              <h1>Star Wars Quiz</h1>
              <h1 id=score>${STORE.numOfCorrectAnswers}/10</h1>
            </header> </br>     
            <section id="answer-section">
            <h2>Question ${STORE.numOfCurrentQuestion + 1}</h2>
            <h3>${currentQuestion.question}</h3>
        <form id="answer-selector-form">
        <fieldset id="answer-selector-field">
            <div class="answerOption">
                <input type="radio" value="${currentQuestion.answers[0]}" id="${currentQuestion.answers[0]}" name="answer" required>
                <label for="${currentQuestion.answers[0]}">${currentQuestion.answers[0]}</label>
            </div>
            <div class="answerOption">
              <input type="radio" value="${currentQuestion.answers[1]}" id="${currentQuestion.answers[1]}" name="answer" required>
              <label for="${currentQuestion.answers[1]}">${currentQuestion.answers[1]}</label>
            </div>
            <div class="answerOption">
              <input type="radio" value="${currentQuestion.answers[2]}" id="${currentQuestion.answers[2]}" name="answer" required>
              <label for="${currentQuestion.answers[2]}">${currentQuestion.answers[2]}</label>
            </div>
            <div class="answerOption">
              <input type="radio" value="${currentQuestion.answers[3]}" id="${currentQuestion.answers[3]}" name="answer" required>
              <label for="${currentQuestion.answers[3]}">${currentQuestion.answers[3]}</label>
            </div>
          <button type="submit" id="answerSubmitButton" for="answer-selector">Submit</button>                                                  
        </fieldset>
    
        </form>
            <img src=${currentQuestion.questionImgSrc} alt=${currentQuestion.questionImgAlt}></img>
        </section>
        `);
  });}

function submitAnswer() {
  //on answerSubmitButton pressed
  $('body').on('submit', (e) => {
    e.preventDefault();
    //collect answer
    let selectedAnswer = $('input:checked');
    selectedAnswer = selectedAnswer.val();
    let currentQuestion = STORE.questions[STORE.numOfCurrentQuestion];
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
    $('body').html(`
    <header>
    <h1>Star Wars Quiz</h1>
    <h1 id=score>${STORE.numOfCorrectAnswers}/10</h1>
    </header> </br>
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
    STORE.numOfCurrentQuestion++;
    if (STORE.numOfCurrentQuestion === STORE.questions.length) {
      displayResults();
    }
    else {
      
      let currentQuestion = STORE.questions[STORE.numOfCurrentQuestion];
      $('#feedback-section').remove();
      $('body').html(`
      <header>
        <h1>Star Wars Quiz</h1>
        <h1 id=score>${STORE.numOfCorrectAnswers}/10</h1>
      </header> </br>      
      <section id="answer-section">
                <h2>Question ${STORE.numOfCurrentQuestion + 1}</h2>
                <h3>${currentQuestion.question}</h3>
            <form aria-label='Answer selector' id="answer-selector-form">
            <fieldset id="answer-selector-field">
                <div class="answerOption">
                    <input type="radio" value="${currentQuestion.answers[0]}" id="${currentQuestion.answers[0]}" name="answer" required>
                    <label for="${currentQuestion.answers[0]}">${currentQuestion.answers[0]}</label>
                </div>
                <div class="answerOption">
                  <input type="radio" value="${currentQuestion.answers[1]}" id="${currentQuestion.answers[1]}" name="answer" required>
                  <label for="${currentQuestion.answers[1]}">${currentQuestion.answers[1]}</label>
                </div>
                <div class="answerOption">
                  <input type="radio" value="${currentQuestion.answers[2]}" id="${currentQuestion.answers[2]}" name="answer" required>
                  <label for="${currentQuestion.answers[2]}">${currentQuestion.answers[2]}</label>
                </div>
                <div class="answerOption">
                  <input type="radio" value="${currentQuestion.answers[3]}" id="${currentQuestion.answers[3]}" name="answer" required>
                  <label for="${currentQuestion.answers[3]}">${currentQuestion.answers[3]}</label>
                </div>
              <button type="submit" id="answerSubmitButton" for="answer-selector">Submit</button>                                                  
            </fieldset>
        
            </form>
                <img src=${currentQuestion.questionImgSrc} alt=${currentQuestion.questionImgAlt}></img>
            </section>
        `);
    }});}

function displayResults(){
  $('header').html('<h1>Star Wars Quiz</h1>');
  if(STORE.numOfCorrectAnswers===10){
    $('body').html(
      `<section class='results'>
      <h2>Your total score is ${STORE.numOfCorrectAnswers}/${STORE.questions.length}</h2>
      <img src='assets/fargreater.jpg' alt='You have become a far greater Jedi than I could ever hope to be.'>
    </section>
    <button id='start-quiz'>Retry</button>`); 

  }
  else if(STORE.numOfCorrectAnswers >=5 && STORE.numOfCorrectAnswers < 10){
    $('body').html(
      `<section class='results'>
      <h2>Your total score is ${STORE.numOfCorrectAnswers}/${STORE.questions.length}</h2>
      <img src='assets/greatkid.jpg' alt='Great, Kid. Don't get cocky.'>
    </section>
    <button id='start-quiz'>Retry</button>`); 
  }
  else if(STORE.numOfCorrectAnswers>=1 && STORE.numOfCorrectAnswers<5) {
    $('body').html(
      `<section class='results'>
      <h2>Your total score is ${STORE.numOfCorrectAnswers}/${STORE.questions.length}</h2>
      <img src='assets/ihavefailedyou.jpg' alt='I have failed you, Anakin.'>
    </section>
    <button id='start-quiz'>Retry</button>`); 
  }
  else {
    $('body').html(
      `<section class='results'>
      <h2>Your total score is ${STORE.numOfCorrectAnswers}/${STORE.questions.length}</h2>
      <img src='assets/amazing.jpg' alt='Amazing. Every word you said, was wrong.'>
    </section>
    <button id='start-quiz'>Retry</button>`); 
  }
  $('body').append(`    <footer>
  <p>Quiz created by Andrew Jessen-Tyler and Terrence Harvey.</p>
  <p>Images, story, setting, and other attributes of Star Wars are owned entirely by the copyright holders and are protected under Fair Use for educational purposes in this quiz.</p>
</footer>`)
}



function bootUp() {
  //Start all other monitoring functions
  startQuiz();
  submitAnswer();
  nextQuestion();
  
}

bootUp();