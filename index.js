/* eslint-disable no-undef */
'use strict';

function startQuiz() {
  $('body').on('click','#start-quiz',function (e) {
    $('main').remove();
    STORE.numOfCurrentQuestion = 0;
    let currentQuestion = STORE.questions[0];
    STORE.numOfCorrectAnswers = 0;
    $('body').html(`
            <header role='banner'>
              <h1>Star Wars Quiz</h1>
              <h1 id=score>${STORE.numOfCorrectAnswers}/10</h1>
            </header> </br>     
            <section id="answer-section">
            <h2>Question ${STORE.numOfCurrentQuestion + 1}</h2>
            <h3>${currentQuestion.question}</h3>
        <form aria-label='Answer selector form' id="answer-selector-form">
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
    selectionListener();        
  });}

function submitAnswer() {
  $('body').on('submit', (e) => {
    e.preventDefault();
    let selectedAnswer = $('input:checked');
    selectedAnswer = selectedAnswer.val();
    let currentQuestion = STORE.questions[STORE.numOfCurrentQuestion];
    let answerResult;
    if (selectedAnswer === currentQuestion.correctAnswer) {
      answerResult = 'Correct!';
      STORE.numOfCorrectAnswers++;
    }
    else {
      answerResult = 'Incorrect!';
    }
    $('#answer-section').remove();
    $('question-text').remove();
    $('body').html(`
    <header>
    <h1>Star Wars Quiz</h1>
    <h1 id=score>${STORE.numOfCorrectAnswers}/10</h1>
    </header> </br>
            <section aria-label='Feedback section' id="feedback-section">
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
      <header role='banner'>
        <h1>Star Wars Quiz</h1>
        <h1 id=score>${STORE.numOfCorrectAnswers}/10</h1>
      </header> </br>      
      <section id="answer-section">
                <h2>Question ${STORE.numOfCurrentQuestion + 1}</h2>
                <h3>${currentQuestion.question}</h3>
            <form aria-label='Answer selector form' id="answer-selector-form">
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
      selectionListener();
    }});}

function displayResults(){
  if(STORE.numOfCorrectAnswers===10){
    $('body').html(
      `<h1>Star Wars Quiz</h1>
      <section aria-label='Quiz results' class='results'>
      <h2>Your total score is ${STORE.numOfCorrectAnswers}/${STORE.questions.length}</h2>
      <img src='assets/fargreater.jpg' alt='You have become a far greater Jedi than I could ever hope to be.'>
    </section>
    <button id='start-quiz'>Retry</button>`); 

  }
  else if(STORE.numOfCorrectAnswers >=5 && STORE.numOfCorrectAnswers < 10){
    $('body').html(
      `<h1>Star Wars Quiz</h1>
      <section aria-label='Quiz results' class='results'>
      <h2>Your total score is ${STORE.numOfCorrectAnswers}/${STORE.questions.length}</h2>
      <img src='assets/greatkid.jpg' alt='Great, Kid. Don't get cocky.'>
    </section>
    <button id='start-quiz'>Retry</button>`); 
  }
  else if(STORE.numOfCorrectAnswers>=1 && STORE.numOfCorrectAnswers<5) {
    $('body').html(
      `<h1>Star Wars Quiz</h1>
      <section aria-label='Quiz results' class='results'>
      <h2>Your total score is ${STORE.numOfCorrectAnswers}/${STORE.questions.length}</h2>
      <img src='assets/ihavefailedyou.jpg' alt='I have failed you, Anakin.'>
    </section>
    <button id='start-quiz'>Retry</button>`); 
  }
  else {
    $('body').html(
      `<h1>Star Wars Quiz</h1>
      <section aria-label='Quiz results' class='results'>
      <h2>Your total score is ${STORE.numOfCorrectAnswers}/${STORE.questions.length}</h2>
      <img src='assets/amazing.jpg' alt='Amazing. Every word you said, was wrong.'>
    </section>
    <button id='start-quiz'>Retry</button>`); 
  }
  $('body').append(`    <footer role='contentinfo'>
  <p>Quiz created by Andrew Jessen-Tyler and Terrence Harvey.</p>
  <p>Images, story, setting, and other attributes of Star Wars are owned entirely by the copyright holders and are protected under Fair Use for educational purposes in this quiz.</p>
</footer>`);
}

function selectionListener() {
  $('input:radio').change(function(){
    $('.selected').removeClass('selected');
    if($(this).is(':checked')){
      
      $(this).parent().addClass('selected'); }
    else 
      $(this).parent().removeClass('selected');
  });
 
}

function bootUp() {
  startQuiz();
  submitAnswer();
  nextQuestion();
  selectionListener();
  
}

bootUp();