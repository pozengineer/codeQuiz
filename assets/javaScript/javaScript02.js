var startBtnEl = document.querySelector('#startBtn');
var questionContainerEl = document.querySelector('#questionContainer');
var answerBtnContainerEl = document.querySelector('#answerBtn');
var controlsEl = document.querySelector('#controls');
// var questionEl = document.querySelector('#question');
var clearBtnEl = document.querySelector('#clearBtn');
var minutesDisplayEl = document.querySelector("#minutes");
var secondsDisplayEl = document.querySelector("#seconds");
var contentContainerEl = document.querySelector(".container");
var inputTitleEl = document.querySelector(".inputTitle");
var inputTextEl = document.querySelector(".singleLine");
var submitBtnEl = document.querySelector("#submitBtn");
var highScoreEl = document.querySelector(".highScores");
var highScoreContainerEl = document.querySelector("#highScoreList");
var listScoreEl = document.querySelector(".listScores");


var totalSeconds = 0;
var secondsElapsed = 0;
var interval;
var score = 0;

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
    },
    {
        title: "What is 2 + 2",
        choices: ["-9", "25", "8", "4"],
        answer: 3
    }
]

startBtnEl.addEventListener("click", startQuiz);
submitBtnEl.addEventListener("click", submit);
highScoreEl.addEventListener("click", displayHighScores);
clearBtnEl.addEventListener("click", clearList);

function startQuiz(event) {
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault();
    // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
    // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
    // to know whether this method was ever called (on that event object).
    event.stopPropagation();
    startBtnEl.setAttribute("class", "hide");
    submitBtnEl.setAttribute("class", "hide");
    clearBtnEl.setAttribute("class", "hide");
    highScoreContainerEl.setAttribute("class", "hide");
    minutesDisplayEl.setAttribute("class", "show");
    secondsDisplayEl.setAttribute("class", "show");

    startTimer();
    displayQues(currentQuesIndex);

}

function displayQues(j) {
    var questionEl = document.createElement('div');
    questionEl.setAttribute("class", "questionEl show");
    quesTitle = questions[j].title;
    questionEl.innerText = quesTitle;
    questionContainerEl.appendChild(questionEl);
    console.log(quesTitle);

    for (i = 0; i < questions[j].choices.length; i++) {
        var answerBtnEl = document.createElement('button');
        answerBtnEl.setAttribute("class", "btn answerBtn");
        answerBtnEl.setAttribute("data-index", i);
        quesChoices = questions[j].choices[i];

        answerBtnEl.innerText = quesChoices;
        answerBtnContainerEl.appendChild(answerBtnEl);
        console.log(quesChoices);
    }

    var quesAns = questions[j].answer;
    console.log(quesAns);

    answerBtnContainerEl.addEventListener("click", nextQues);

}


function nextQues(event) {
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault(event);
    // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
    // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
    // to know whether this method was ever called (on that event object).
    event.stopPropagation(event);

    var choiceSelect = event.target.matches("button");
    if (choiceSelect) {
        answerSelect(event);
        questionEl = document.querySelector(".questionEl");
        var lastChoices = document.querySelectorAll(".answerBtn");
        if (currentQuesIndex < questions.length - 1) {
            questionEl.setAttribute("class", "hide");
            for (i = 0; i < questions[currentQuesIndex].choices.length; i++) {
                // console.log("Im trying to hide", lastChoices[i])
                lastChoices[i].setAttribute("class", "hide");
            }
            currentQuesIndex++;
            console.log(lastChoices);
            displayQues(currentQuesIndex);
        }
        else if(secondsElapsed > 120){
            alert("Times Run out!");
            submitBtnEl.setAttribute("class", "show btn");
            inputTitleEl.setAttribute("class", "show col-md-3");
            inputTextEl.setAttribute("class", "show col-md-9");
        }
        else {
            questionEl.setAttribute("class", "hide");
            // for(i = 0; i < questions[currentQuesIndex].choices.length; i++) {
            //   answerBtnContainerEl.remove(lastChoices[i]);
            // }
            lastChoices = document.querySelectorAll(".answerBtn");
            for (i = 0; i < questions[currentQuesIndex].choices.length; i++) {
                // console.log("Im trying to hide", lastChoices[i])
                lastChoices[i].setAttribute("class", "hide");
            }
            currentQuesIndex++;
            console.log(score);
            console.log(secondsElapsed);
            secondsLeft = totalSeconds - secondsElapsed;
            console.log(secondsLeft);
            console.log('Quiz Finished');
            pauseTimer();
            submitBtnEl.setAttribute("class", "show btn");
            inputTitleEl.setAttribute("class", "show col-md-3");
            inputTextEl.setAttribute("class", "show col-md-9");

        }
    }
}

function answerSelect(event) {
    // var btnSelect = document.getElementsByTagName("button");
    var btnSelect = event.target;
    // var data = btnSelect.getAttribute("data-index");
    // console.log(data);
    var currentQuestion = questions[currentQuesIndex];
    var correctAnswerIndex = currentQuestion.answer;
    var answerSelect = btnSelect.getAttribute("data-index");
    console.log(correctAnswerIndex);
    console.log("this is what user clicked " + btnSelect.getAttribute("data-index"));
    if (answerSelect == correctAnswerIndex) {
        // var answerSelectEl = document.querySelector('.resultDisplay');
        // answerSelectEl.textContent = "Correct Answer!";
        console.log("Right answer");
        score += 5;
    }
    else {
        // var answerSelectEl = document.querySelector('.resultDisplay');
        // answerSelectEl.textContent = "Wrong Answer!";
        console.log("Wrong answer");
        secondsElapsed += 10;
    }
}

function submit(event) {
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault(event);
    // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
    // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
    // to know whether this method was ever called (on that event object).
    event.stopPropagation(event);
    console.log("Submit Button clicked!");
    inputTitleEl.setAttribute("class", "hide");
    inputTextEl.setAttribute("class", "hide");
    submitBtnEl.setAttribute("class", "hide");
    startBtn.setAttribute("class", "show btn");

    userInput= inputTextEl.value;
    userInputUppercase = userInput.toUpperCase();
    console.log("Current Initials are: " + userInputUppercase);
    // Check if there is something in storage with user initials
    // check local storage
    var highScoreString = localStorage.getItem("highScores");
    console.log("highScoreString is " + highScoreString);
    // check if string exists, then convert to JSON
    console.log("init JSON.parse(localStorage.getItem(highScores))" + JSON.parse(localStorage.getItem("highScores")));
    if (JSON.parse(localStorage.getItem("highScores")) == null) {
        console.log("CI: " + userInputUppercase);
        console.log("HS:" + score);
        
        var highScoresJSON = [];
        var scores = {
            "name": userInputUppercase,
            "score": score
        }
        highScoresJSON.push(scores);
        localStorage.setItem('highScores', JSON.stringify(highScoresJSON));
        console.log("After running highscoreJSON" + JSON.stringify(highScoresJSON));
    }
    else {
        highScoresJSON = JSON.parse(localStorage.getItem("highScores"));
        scores = {
            "name": userInputUppercase,
            "score": score
        }
        highScoresJSON.push(scores);
        localStorage.setItem('highScores', JSON.stringify(highScoresJSON));
        
        console.log(highScoresJSON);
    }
    console.log("out of all loops" + highScoreString);
    
    totalSeconds = 0;
    secondsElapsed = 0;
    score = 0;
    currentQuesIndex = 0;
    stopTimer();
}

function displayHighScores(event){
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault(event);
    // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
    // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
    // to know whether this method was ever called (on that event object).
    event.stopPropagation(event);
    clearBtnEl.setAttribute("class", "show btn");
    highScoreContainerEl.setAttribute("class", "show");
    // list highscores here listHighScores
    var highScoreString = localStorage.getItem("highScores");
    var highScoresJSON = JSON.parse(highScoreString);
    console.log(highScoresJSON);
    
    for(k = 0; k < highScoresJSON.length; k++){
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-item");
        liEl.textContent = highScoresJSON[k].name + " - " + highScoresJSON[k].score;
        listScoreEl.appendChild(liEl);
    }
}

function clearList(event){
    // This 'preventDefault' method tells the user agent that if the event does not get explicitly
    // handled, its default action should not be taken as it normally would be.
    event.preventDefault(event);
    // The stopPropagation() method stops the bubbling of an event to parent elements, preventing
    // any parent handlers from being notified of the event. You can use the method event.isPropagationStopped()
    // to know whether this method was ever called (on that event object).
    event.stopPropagation(event);
    $(".listScores").empty();
    // localStorage.clear();
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
    var minutes = minutesDisplayEl.value = 2;

    clearInterval(interval);
    totalSeconds = minutes * 60;
}

function renderTime() {
    minutesDisplayEl.textContent = getFormattedMinutes();
    secondsDisplayEl.textContent = getFormattedSeconds();

    if (secondsElapsed >= totalSeconds) {
        stopTimer();
    }
}

function startTimer() {
    setTime();

    interval = setInterval(function () {
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