var startBtnEl = document.querySelector('#startBtn');
var questionContainerEl = document.querySelector('#questionContainer');
var answerBtnEl = document.querySelector('#answerBtn');
var controlsEl = document.querySelector('#controls');
var questionEl = document.querySelector('#question');
var nextBtnEl = document.querySelector('#nextBtn');
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

var shuffledQues = "";
var currentQuesIndex = "";

startBtn.addEventListener('click', startQuiz);
nextBtnEl.addEventListener('click', () => {
    currentQuesIndex++;
    setNextQues();
});

function startQuiz(event) {
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault();
    // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
    // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
    // to know whether this method was ever called (on that event object).
    event.stopPropagation();
    console.log('Started');
    startTimer();
    startBtnEl.classList.add('hide');
    shuffledQues = questions.sort(() => Math.random() - .5);


    currentQuesIndex = 0;
    questionContainerEl.classList.remove('hide');
    answerBtnEl.classList.remove('hide');
    setNextQues();
}

function setNextQues() {
    resetState();
    showQues(shuffledQues[currentQuesIndex]);
}

function showQues(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answers => {
        var btnEl = document.createElement('button');
        btnEl.innerText = answers.text;
        btnEl.classList.add('btn');
        if(answers.correct) {
            btnEl.dataset.correct = answers.correct;
        }
        btnEl.addEventListener('click', selectAns);
        answerBtnEl.appendChild(btnEl)
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextBtnEl.classList.add('hide');
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
}

function selectAns(event) {
    var selectedBtn = event.target;
    var correct = selectedBtn.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerBtnEl.children).forEach (btnEl => {
        setStatusClass(btnEl, btnEl.dataset.correct);
    })
    if(shuffledQues.length > currentQuesIndex + 1) {
        nextBtnEl.classList.remove('hide');
    }
    else {
        startBtnEl.innerText = 'Restart';
        startBtnEl.classList.remove('hide');
        console.log(secondsElapsed);
        secondsLeft = totalSeconds - secondsElapsed;
        console.log(secondsLeft);
        stopTimer();
        
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct) {
        element.classList.add('correct');
    }
    else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// getTimePreferences();

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

  if (secondsLeft < 5) {
    formattedSeconds = "0" + secondsLeft;
  } else {
    formattedSeconds = secondsLeft;
  }

  return formattedSeconds;
}

function setTime() {
  var minutes = minutesDisplay.value = 5;

//   if (status === "Working") {
//     minutes = workMinutesInput.value.trim();
//   } else {
//     minutes = restMinutesInput.value.trim();
//   }

  clearInterval(interval);
  totalSeconds = minutes * 60;
}

function renderTime() {
  minutesDisplay.textContent = getFormattedMinutes();
  secondsDisplay.textContent = getFormattedSeconds();

  if (secondsElapsed >= totalSeconds) {
    // if (status === "Working") {
    //   alert("Time for a break!");
    // } else {
    //   alert("Time to get back to work!");
    // }

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

// function getTimePreferences() {
//     var preferences = JSON.parse(localStorage.getItem("preferences"));

//     if (preferences) {
//         if (preferences.workMinutes) {
//         workMinutesInput.value = preferences.workMinutes;
//         }

//         if (preferences.restMinutes) {
//         restMinutesInput.value = preferences.restMinutes;
//         }
//     }

//     setTime();
//     renderTime();
// }

// function setTimePreferences() {
//     localStorage.setItem(
//         "preferences",
//         JSON.stringify({
//         workMinutes: workMinutesInput.value.trim(),
//         restMinutes: restMinutesInput.value.trim()
//         })
//     );
// }

var questions = [
    {
        question: 'What is 2 + 2?',
        answers: [
            {text: '4', correct: true},
            {text: '7', correct: false}
        ]
    },
    {
        question: 'Who is the best YouTuber?',
        answers: [
            {text: 'Web Dev Simplified', correct: true},
            {text: 'Traversy Media', correct: true},
            {text: 'Dev Ed', correct: true},
            {text: 'Fun Fun Function', correct: true}
        ]
    }
]