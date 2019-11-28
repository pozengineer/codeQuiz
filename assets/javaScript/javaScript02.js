var startBtnEl = document.querySelector('#startBtn');
var questionContainerEl = document.querySelector('#questionContainer');
var answerBtnContainerEl = document.querySelector('#answerBtn');
var controlsEl = document.querySelector('#controls');
// var questionEl = document.querySelector('#question');
// var nextBtnEl = document.querySelector('#nextBtn');
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

var shuffledQues = "";
var currentQuesIndex = 0;

var questions = [
    {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: 2
    },
    {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: 2
    }
]

startBtnEl.addEventListener("click", startQuiz);

function startQuiz(event){
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault();
    // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
    // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
    // to know whether this method was ever called (on that event object).
    event.stopPropagation();
    startBtnEl.setAttribute("class", "hide");
    minutesDisplay.setAttribute("class", "show");
    secondsDisplay.setAttribute("class", "show");
    startTimer();
    renderQues(currentQuesIndex);
}

function renderQues(j) {
    var questionEl = document.createElement('div');
    questionEl.setAttribute("class", "col-md-12 show");
    quesTitle = questions[j].title;
    questionEl.innerText = quesTitle;
    questionContainerEl.appendChild(questionEl);
    console.log(quesTitle);

    for(i = 0; i < questions[j].choices.length; i++) {
        var answerBtnEl = document.createElement('button');
        answerBtnEl.setAttribute("class", "show btn answerBtn");
        answerBtnEl.setAttribute("data-index", i);
        quesChoices = questions[j].choices[i];
        
        answerBtnEl.innerText = quesChoices;
        answerBtnContainerEl.appendChild(answerBtnEl);
        console.log(quesChoices);
    }

    quesAns = questions[j].answer;
    console.log(quesAns);

    answerBtnContainerEl.addEventListener("click", function(event) {
        // This 'preventDefault' method tells the user agent that if the event does not get explicitly
        // handled, its default action should not be taken as it normally would be.
        event.preventDefault();
        // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
        // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
        // to know whether this method was ever called (on that event object).
        event.stopPropagation();
        // var element = event.target;
        // If that element is a button...
        // if (element.matches("button") === true) {        
        if(currentQuesIndex < questions.length - 1) {
            questionEl.setAttribute("class", "hide");
            var oldChoices = document.querySelectorAll(".answerBtn");
            for(i = 0; i < questions[j].choices.length; i++) {
                oldChoices[i].setAttribute("class", "hide");
            }
            currentQuesIndex++;
            renderQues(currentQuesIndex);
        }
        else {
            questionEl.setAttribute("class", "hide");
            answerBtnContainerEl.setAttribute("style", "display: none");
            console.log('Quiz Finished');
            pauseTimer();
            console.log(secondsElapsed);
            secondsLeft = totalSeconds - secondsElapsed;
            console.log(secondsLeft);
        }
        // }
    });
}

function getFormattedMinutes() {
    var secondsLeft = totalSeconds - secondsElapsed;
  
    var minutesLeft = Math.floor(secondsLeft / 60);
  
    var formattedMinutes;
  
    if (minutesLeft < 5) {
      formattedMinutes = "0" + minutesLeft;
    } else {
      formattedMinutes = minutesLeft;
    }
  
    return formattedMinutes;
  }
  
  function getFormattedSeconds() {
    var secondsLeft = (totalSeconds - secondsElapsed) % 60;
  
    var formattedSeconds;
  
    if (secondsLeft < 10) {
      formattedSeconds = "0" + secondsLeft;
    } else {
      formattedSeconds = secondsLeft;
    }
  
    return formattedSeconds;
  }
  
  function setTime() {
    var minutes = minutesDisplay.value = 3;
  
    clearInterval(interval);
    totalSeconds = minutes * 60;
  }
  
  function renderTime() {
    minutesDisplay.textContent = getFormattedMinutes();
    secondsDisplay.textContent = getFormattedSeconds();
  
    if (secondsElapsed >= totalSeconds) {
      stopTimer();
    }
  }
  
  function startTimer() {
    setTime();
  
    interval = setInterval(function() {
      secondsElapsed++;
      renderTime();
    }, 1000);
  }
  
  function pauseTimer() {
    clearInterval(interval);
    renderTime();
  }
  
  function stopTimer() {
    secondsElapsed = 0;
    setTime();
    renderTime();
  }