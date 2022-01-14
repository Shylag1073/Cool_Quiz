var startButton = document.getElementById('start-button')
var nextButton = document.getElementById('next-button')

var questionContainerElement = document.getElementById('question-container')
var shuffledQuestion, currentQuestionIndex
var questionElement = document.getElementById('question')
var answerButtonsElment = document.getElementById('answer-buttons')


startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            answerButtonsElment.appendChild(button)
        }

        button.addEventListener('click', selectAnswer)
        answerButtonsElment.appendChild(button)
    });
}
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElment.firstChild) {
        answerButtonsElment.removeChild
            (answerButtonsElment.firstChild)
    }
}

var questions = [
    {
        question: 'What does HTML stand for ?',
        answers: [
            { text: 'Hypertext Markup Language', correct: true },
            { text: 'Harrytype Makeup Language', correct: false },
            { text: 'Hellotype Mistakeup Language', correct: false },
            { text: 'Hypertext Mayup Lane', correct: false }
        ]
    }

]