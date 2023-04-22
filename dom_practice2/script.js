const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
var question = document.getElementsByName("number");
var message = document.getElementById("message");
var score = document.querySelector(".score");
var scoreValue = parseInt(score.innerText)
var highscore = document.querySelector(".highscore");
var random = Math.floor(Math.random() * 20) + 1;
var gameDiv = document.querySelector(".game")
var winCount = document.createElement("h2");
document.getElementsByClassName("right")[0].append(winCount);

btnCheck.addEventListener("click", () => {
    console.log(random)
    var guessValue = parseInt(document.querySelector(".guess").value);
    if (isNaN(guessValue) || guessValue < 1 || guessValue > 20) {
        message.innerText = "Please input a number between 1 and 20."
    } else {
        if (guessValue < random) {
            message.innerText = "Too low!";
            scoreValue--;
            score.innerText = scoreValue;
            if (scoreValue == 0) {
                message.innerText = "You lose. Game over."
                btnCheck.disabled = true;
                document.querySelector(".guess").disabled = true;
            }
        } else if (guessValue > random) {
            message.innerText = "Too high!";
            scoreValue--;
            score.innerText = scoreValue;
            if (scoreValue == 0) {
                message.innerText = "You lose. Game over."
                btnCheck.disabled = true;
                document.querySelector(".guess").disabled = true;
            }
        } else {
            clearInterval(intervalID)
            message.innerText = "Correct! You win!";
            score.innerText = scoreValue;
            var highscoreValue = parseInt(highscore.innerText);
            if (scoreValue > highscoreValue) {
                 highscore.innerText = scoreValue;
            }
            question[0].innerText = random;
            gameDiv.style.backgroundColor = "Green";
            btnCheck.disabled = true;
            document.querySelector(".guess").disabled = true;
            winCount.append("$")
            setTimeout(() => {
                message.innerText = "Bonus play!"   
                random = Math.floor(Math.random() * 20) + 1;
                question[0].innerText = "?";
                btnCheck.disabled = false;
                document.querySelector(".guess").disabled = false;
                document.querySelector(".guess").value = '';
                gameDiv.style.backgroundColor = '';
                
            }, 3000);
        }
    }
})

btnAgain.addEventListener("click", () => {
    scoreValue = 20;
    score.innerText = scoreValue;
    message.innerText = "Try the Game!"
    random = Math.floor(Math.random() * 20) + 1;
    question[0].innerText = "?";
    gameDiv.style.backgroundColor = '';
    btnCheck.disabled = false;
    document.querySelector(".guess").disabled = false;
    document.querySelector(".guess").value = '';
})

let newCircle = document.createElement('div')
newCircle.style.position = 'fixed'
newCircle.style.top = '0'
newCircle.style.left = '0'
newCircle.style.width = '40px'
newCircle.style.height = '40px'
newCircle.style.borderRadius = '50%'
newCircle.style.backgroundColor = 'purple'
newCircle.style.opacity = '70%'
newCircle.style.pointerEvents = 'none'
newCircle.id = 'targetCircle'
document.body.append(newCircle)

onmousemove = (event) => {
    let targetCircle = document.getElementById('targetCircle')
    let newX = event.x - 35
    let newY = event.y - 30
    targetCircle.style.top = `${newY}px`
    targetCircle.style.left = `${newX}px`
};

var a = 1;
const intervalID = setInterval(() => {
    if (a > 0) {
        a -= .05
    } else {
        a = 1;
    }
    let targetCircle = document.getElementById("targetCircle");
    targetCircle.style.backgroundColor = `rgba(255, 0, 255, ${a})`
}, 110);

