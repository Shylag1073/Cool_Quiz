var startButton = document.getElementById('start-button')
var nextButton = document.getElementById('next-button')

var questionContainerElement = document.getElementById('question-container')
var shuffledQuestion, currentQuestionIndex
var questionElement = document.getElementById('question')
var answerButtonsElment = document.getElementById('answer-buttons')

var timerel = document.querySelector('.countdown')
var messageel = document.querySelector('.message')

// start button

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    //shuffledQuestion = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()

    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            messageel.innerText = timeLeft;
            timeLeft--;
        }
        // console.log(messageel)


    }, 1000);
}


// questions 


function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button' + currentQuestionIndex)
        if (answer.correct) {
            button.dataset.correct = answer.correct
            answerButtonsElment.appendChild(button)
        }

        button.addEventListener('click', selectAnswer)
        answerButtonsElment.appendChild(button)
    })
}


function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElment.firstChild) {
        answerButtonsElment.removeChild
            (answerButtonsElment.firstChild)
    }
}
/// answers 

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(nextButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })


    document.querySelector('.button' + currentQuestionIndex).style.display = 'none'
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    console.log(selectedButton.innerHTML)
    console.log(questions[0].answers[0].text)
    currentQuestionIndex++
    if (selectedButton.innerHTML == 'Hypertext Markup Language') {
        alert("correct!!!")
        // questionElement.innerText = questions[1].question
        showQuestion(questions[currentQuestionIndex])
    }
    if (selectedButton.innerHTML == 'JavaScript') {
        alert("correct!!!")
        // questionElement.innerText = questions[1].question
        showQuestion(questions[currentQuestionIndex])
    }
    if (selectedButton.innerHTML == 'Cascading Style Sheet') {
        alert("correct!!!")
        showQuestion(questions[currentQuestionIndex])

    }
    if (selectedButton.innerHTML == ' track of how much space each child occupies and repositions all of the children accordingly') {
        alert("correct!!!")
        showQuestion(questions[currentQuestionIndex])
    }
    // if (selectedButton.innerHTML == 'Cascading Style Sheet') {
    //   alert("correct!!!")
    // showQuestion(questions[currentQuestionIndex])

    //  }


}


function setStatusClass(correct) {
    //clearStatusClass(questions)
    if (correct) {
        nextButton.classList.add('correct')
    } else {
        nextButton.classList.add('wrong')
    }


}

//function previousQuestion() {
// if()


//}



var questions = [
    {
        question: 'What does HTML stand for ?',
        answers: [
            { text: 'Hypertext Markup Language', correct: true },
            { text: 'Harrytype Makeup Language', correct: false },
            { text: 'Hellotype Mistakeup Language', correct: false },
            { text: 'Hypertext Mayup Lane', correct: false }
        ]
    },
    {
        question: 'What does JS stand for ?',
        answers: [
            { text: 'Jake from Statefarm', correct: false },
            { text: 'Jerry Lewis', correct: false },
            { text: 'JumboScript', correct: false },
            { text: 'JavaScript', correct: true }
        ]
    },
    {
        question: 'What does CSS stand for ?',
        answers: [
            { text: 'Cascading Style Sheet', correct: true },
            { text: 'Correcting Style Sheet', correct: false },
            { text: 'Characterized Style Sheet', correct: false },
            { text: 'Copy Style Sheet', correct: false }
        ]
    },

    {
        question: 'What is flexbox?',
        answers: [
            { text: 'track of how much space each child occupies and repositions all of the children accordingly', correct: true },
            { text: 'changes the size of the element', correct: false },
            { text: 'it centers things', correct: false },
            { text: 'it sets how web pages are displayed on mobile devices', correct: false }
        ]
    },

    // {
    //     question: 'What does God stand for ?',
    //     answers: [
    //         { text: 'Hypertext Markup Language', correct: true },
    //         { text: 'Harrytype Makeup Language', correct: false },
    //         { text: 'Hellotype Mistakeup Language', correct: false },
    //         { text: 'Hypertext Mayup Lane', correct: false }
    //     ]
    // }

]

//// Timer portion // 


//var end = 'Time has run out'

//function countdown() {
  //  var timeLeft = 60;

   // var timeInterval = setInterval(function () {
   //     if (timeLeft > 0) {
     //       messageel.innerText = timeLeft;
      //      timeLeft--;
       /// }
       // console.log = 'timer started'


  ///  }, 1000);
//}