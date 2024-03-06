// Define an array of monument objects
let questions = [
    {
        number: 1,
        monumentidentifier: 'Cloud Gate “The Bean"',
        monumentPath: '../assets/images/cloud-gate.jpg',
        answers: ['Iowa', 'Wisconsin', 'Minnesota', 'Illinois'],
        rightAnswer: 'Illinois',
    },
    {
        number: 2,
        monumentidentifier: 'Mount Rushmore',
        monumentPath: '../assets/images/mount-rushmore.jpg',
        answers: ['Nevada', 'North Dakota', 'Colorado', 'South Dakota'],
        rightAnswer: 'South Dakota',
    },
    {
        number: 3,
        monumentidentifier: 'The Grand Canyon',
        monumentPath: '../assets/images/grand-canyon.jpg',
        answers: ['Nevada', 'Arizona', 'Utah', 'Rhode Island'],
        rightAnswer: 'Arizona',
    },
    {
        number: 4,
        monumentidentifier: 'Statue of Liberty',
        monumentPath: '../assets/images/statue-of-liberty.jpg',
        answers: ['Virginia', 'Rhode Island', 'New York', 'Delaware'],
        rightAnswer: 'New York',
    },
    {
        number: 5,
        monumentidentifier: 'Hoover Dam',
        monumentPath: '../assets/images/hoover-dam.jpg',
        answers: ['Nevada', 'Hawaii', 'New Mexico', 'Texas'],
        rightAnswer: 'Nevada',
    },
    {
        number: 6,
        monumentidentifier: 'Golden Gate Bridge',
        monumentPath: '../assets/images/golden-gate.jpg',
        answers: ['Maine', 'Idaho', 'California', 'Montana'],
        rightAnswer: 'California',
    },
    {
        number: 7,
        monumentidentifier: 'Lincoln Memorial',
        monumentPath: '../assets/images/lincoln-memorial.jpg',
        answers: ['Washington', 'Washington DC', 'Louisiana', 'West Virginia'],
        rightAnswer: 'Washington DC',
    },
    {
        number: 8,
        monumentidentifier: 'Crazy Horse Memorial',
        monumentPath: '../assets/images/crazy-horse.jpg',
        answers: ['Nebraska', 'North Dakota', 'Iowa', 'South Dakota'],
        rightAnswer: 'South Dakota',
    },
    {
        number: 9,
        monumentidentifier: 'Monument Valley',
        monumentPath: '../assets/images/monument-valley.jpg',
        answers: ['Nevada', 'North Dakota', 'Colorado', 'Arizona'],
        rightAnswer: 'Arizona',
    },
    {
        number: 10,
        monumentidentifier: 'The Space Needle',
        monumentPath: '../assets/images/space-needle.jpg',
        answers: ['Nevada', 'North Dakota', 'Colorado', 'Washington'],
        rightAnswer: 'Washington',
    },
];

let currentQuestionIndex = 0; // Tracks the index of the current question
let score = 0; // Initialize score
let incorrectAnswers = 0; // Initialize incorrect answer count

// Function to display the current question
function displayCurrentQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    // Populate existing HTML elements with question data from Array
    const questionNumberElement = document.getElementById('question-number');
    questionNumberElement.textContent = `Question ${currentQuestion.number} out of ${questions.length}`;

    const monumentNameElement = document.getElementById('monument-name');
    monumentNameElement.textContent = currentQuestion.monumentidentifier;

    const monumentImageElement = document.getElementById('monument-img');
    monumentImageElement.src = currentQuestion.monumentPath;

    // Populate existing buttons with answer options
    const answerButtons = document.querySelectorAll('#answers-container button');
    currentQuestion.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
    });
}

// Function to handle the "Next" button click
function onNextButtonClick() {
    currentQuestionIndex++; // Move to the next question
    if (currentQuestionIndex < questions.length) {
        displayCurrentQuestion(); // Display the next question
    } else {
        // No more questions, display quiz completion message or perform other actions
        alert('Quiz completed!');
    }
}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

// Function to check if the answer is correct
function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedButton = selectedAnswer.textContent;
    const correctAnswer = currentQuestion.rightAnswer;

    if (selectedButton === correctAnswer) {
        incrementScore(); // Increment score if answer is correct
    } else {
        incrementWrongAnswer(); // Increment incorrect answer tally if answer is wrong
    }

    // Move to the next question
    onNextButtonClick();
}

// Add event listeners to answer buttons to check answers
const answerButtons = document.querySelectorAll('#answers-container button');
answerButtons.forEach(button => {
    button.addEventListener('click', () => {
        checkAnswer(button);
    });
});

// Display the first question when the page loads
displayCurrentQuestion();