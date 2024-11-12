const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Who was the very first American Idol winner?',
        choice1: 'Katy Perry',
        choice2: 'Harry Styles',
        choice3: 'Miley Cyrus',
        choice4: 'Kelly Clarkson',
        answer: 4,
    },
    {
        question: 'What was Elvis Presley‘s first No. 1 hit in the United States?',
        choice1: '"Jailhouse Rock"',
        choice2: '"All Shook Up"',
        choice3: '“Heartbreak Hotel”',
        choice4: '"Hound Dog"',
        answer: 3,
    },
    {
        question: 'Which classical composer was deaf?',
        choice1: 'Frédéric Chopin',
        choice2: 'Ludwig van Beethoven',
        choice3: 'Wolfgang Amadeus Mozart',
        choice4: 'Antonio Vivaldi',
        answer: 2,
    },
    {
        question: 'How many coaches from The Voice have won Grammys?',
        choice1: '10',
        choice2: '11',
        choice3: '12',
        choice4: '13',
        answer: 3,
    },{
        question: 'What song did Mr Amitabh play during one of the music breaks?',
        choice1: '"Take On Me"',
        choice2: '"Bella Ciao"',
        choice3: '"Blinding Lights"',
        choice4: '"Stay"',
        answer: 2,
    },{
        question: 'Who was the youngest Beatle?',
        choice1: 'John Lennon',
        choice2: 'Paul McCartney',
        choice3: 'Ringo Starr',
        choice4: 'George Harrison',
        answer: 4,
    },{
        question: 'According Kelis’ song, what drink brings all the boys to the yard?',
        choice1: 'Lemonade',
        choice2: 'Soda',
        choice3: 'Milkshake',
        choice4: 'Smoothie',
        answer: 3,
    },{
        question: 'In which year did Justin Bieber release Baby?',
        choice1: '2008',
        choice2: '2009',
        choice3: '2010',
        choice4: '2011',
        answer: 2,
    }
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 8;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;
    
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

        }, 1000);
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
};

startGame();