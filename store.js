'use strict';
const STORE = {
  questions:[
    {
      question: 'Who created Star Wars?',
      answers: [
        'Luke Skywalker',
        'JJ Abrams',
        'Rian Johnson',
        'George Lucas'
      ],
      correctAnswer: 'George Lucas',
      additionalInfo: 'George Lucas had the idea for Star Wars as early as 1971, and would release "Star Wars" on May 25th, 1977.',
      questionImgSrc: 'assets/Lakeyboy_Silhouette.png',
      questionImgAlt: 'Silhouette of person',
      feedbackImgSrc: 'assets/george-lucas.jpg',
      feedbackImgAlt: 'George Lucas'
    },
    {
      question: 'Who plays the character of Luke Skywalker in A New Hope?',
      answers: [
        'Mark Hamill',
        'Toby Maguire',
        'Hayden Christianson',
        'Harrison Ford'
      ],
      correctAnswer: 'Mark Hamill',
      additionalInfo: 'Mark Hamill has also done voicework for The Joker in many types of DC media.',
      questionImgSrc: 'assets/tatooine-sunset.jpg',
      questionImgAlt: 'Tatooine Sunset from A New Hope',
      feedbackImgSrc: 'assets/mark-hamill-then-and-now.jpg',
      feedbackImgAlt: 'Mark Hamill Then & Now'
    
    },
    {
      question: ' How much did it cost for Disney to buy the rights to the Star Wars franchise?',
      answers: [
        '$6.2 Million',
        '$24 Billion',
        '$4.05 Billion',
        '$97.85 Million'
      ],
      correctAnswer: '$4.05 Billion',
      additionalInfo: 'Disney aquired the overall rights to Star Wars in 2012. It took 6 years for Star Wars to earn that money back.',
      questionImgSrc: 'assets/mickey-jedi.jpg',
      questionImgAlt: 'Mickey Mouse in a Jedi Robe',
      feedbackImgSrc: 'assets/disney-grave-meme.jpg',
      feedbackImgAlt: 'Meme of Disney when they wanted to make a new trilogy of Star Wars'
    },
    {
      question: 'Which one of the following is not a type of Lightsaber form?',
      answers: [
        'Ataru',
        'Teras Kasi',
        'Juyo',
        'Shii-Cho'
      ],
      correctAnswer: 'Teras Kasi',
      additionalInfo: 'Teras Kasi is a style of hand to hand combat in the Star Wars universe, not a lightsaber form.',
      questionImgSrc: 'assets/form2.jpg',
      questionImgAlt: 'Depiction of Form 2 of Lightsaber forms, also known as Makashi.',
      feedbackImgSrc: 'assets/teras-kasi.png',
      feedbackImgAlt: 'Depiction of Qi\'ra using Teras Kasi.'
    },
    {
      question: 'Who is Darth Sidious?',
      answers: [
        'Sheev Palpatine',
        'Count Dooku',
        'Asajj Ventress',
        'Savage Opress'
      ],
      correctAnswer: 'Sheev Palpatine',
      additionalInfo: 'Sheev Palpatine was Darth Sidious even before the beginning of The Phantom Menace and had been working to infiltrate the Republic Senate for his own gains.',
      questionImgSrc: 'assets/clone-wars-sidious.jpg',
      questionImgAlt: 'Darth Sidious in art for The Clone Wars \'The Lawless\' episode.',
      feedbackImgSrc: 'assets/palpatine-lightsaber.png',
      feedbackImgAlt: 'Palpatine resisting arrest by multiple Jedi.'
    },
    {
      question: 'Ahsoka Tano started wielding 2 lightsabers at a time in The Clone Wars Season 3. What colors were her sabers at this time?',
      answers: [
        'Green and Blue',
        'Both Green',
        'Green and Yellow',
        'Both Blue'
      ],
      correctAnswer: 'Green and Yellow',
      additionalInfo: 'Ahsoka would later go on to have 2 White lightsabers, as shown in Star Wars Rebels and the novel Ahsoka by E. K. Johnston.',
      questionImgSrc: 'assets/ahsoka-tano-clone-wars1.png',
      questionImgAlt: 'Ahsoka Tano at the Jedi Temple in Star Wars: The Clone Wars',
      feedbackImgSrc: 'assets/ahsoka-tano-2.png',
      feedbackImgAlt: 'Ahsoka Tano from Star Wars: Rebels (left) and Ahsoka Tano from Star Wars: The Clone Wars (right).'
    },
    {
      question: 'While there is a canonical reason for Mace Windu\'s purple lightsaber, what\'s the real life reason he had a purple lightsaber?',
      answers: [
        'Mace Windu was supposed to be special from the get go.',
        'They got bored of using just Green, Blue, and Red sabers in animation.',
        'Sam L. Jackson asked for it.',
        'It was a rendering error that they ended up keeping.'
      ],
      correctAnswer: 'Sam L. Jackson asked for it.',
      additionalInfo: ' "We had this big arena, this fight scene with all these Jedi and they’re fightin’ or whatever. And I was like...I wanna be able to find myself in this big ol’ scene. So I said to George, "You think maybe I can get a purple lightsaber?" - Samuel L Jackson.',
      questionImgSrc: 'assets/mace-windu-jango.jpg',
      questionImgAlt: 'Mace Windu holding Jango Fett at \'lightsaber\' point.',
      feedbackImgSrc: 'assets/mace-windu-geonosis.jpg',
      feedbackImgAlt: 'Mace Windu at the Battle of Geonosis.'
    },
    {
      question: 'The Rule of 2 states that there should only ever be 2 Sith: a master and an apprentice. Who invented this rule?',
      answers: [
        'Darth Bane', 'Darth Sidious', 'Darth Vader', 'Darth Plagueis'
      ],
      correctAnswer: 'Darth Bane',
      additionalInfo: ' "Two there should be. No more, no less. One to embody power, the other to crave it." -Darth Bane.',
      questionImgSrc: 'assets/SidiousVaderPromo.jpg',
      questionImgAlt: 'Darth Sidious (left) and Darth Vader (right).',
      feedbackImgSrc: 'assets/Darth_Bane_canon.png',
      feedbackImgAlt: 'Darth Bane\'s ghost in Star Wars: The Clone Wars.'
    },
    {
      question: 'The famous cantina song used in multiple types of Star Wars media is known as what genre of music?',
      answers: [
        'Jizz',
        'Jazz',
        'Folk',
        'Swing-bop'
      
      ],
      correctAnswer: 'Jizz',
      additionalInfo:' "Jizz was a genre of music. Jizz-wailers were musicians who specialized in the genre." -Wookieepedia',
      questionImgSrc: 'assets/cantina-band.jpg',
      questionImgAlt: 'Figrin D\'an and the Modal Nodes playing at the Mos Eisley cantina.',
      feedbackImgSrc: 'assets/jizz-music-stops.png',
      feedbackImgAlt: '\'Jizz music stops\' meme.'
    
    },
    {
      question: '\'What was Anakin Skywalker\'s medichlorian count during The Phantom Menace?',
      answers: [
        'Over 350,000',
        'Over 1 million',
        'Over 60,000',
        'Over 20,000'
      
      ],
      correctAnswer: 'Over 20,000',
      additionalInfo:'"Even Master Yoda doesn\'t have a midi-chlorian count that high!" -Obi-Wan Kenobi, The Phantom Menace',
      questionImgSrc: 'assets/midichlorians_homeworld.PNG',
      questionImgAlt: 'The birth place of the midi-chlorians.',
      feedbackImgSrc: 'assets/midichlorians2.jpg',
      feedbackImgAlt: 'Anakin getting a midi-chlorian count from Qui-Gon in The Phantom Menace.'
    
    }],
  numOfCorrectAnswers: 0,
  numOfCurrentQuestion: 0,
};