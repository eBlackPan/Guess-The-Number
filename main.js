function checkTotalScore(totalScore) {
    if (totalScore <= 0) {
      console.log("ended dumb");
      return;
    }
  }
function checkHighScore(totalScore,highScore) { 
  if (totalScore>highScore){
    highScoreElement.textContent = totalScore;
    highScore = totalScore;
  }
}



const scoreElement = document.querySelector(".Score");
let totalScore = 20;
const highScoreElement = document.querySelector(".HighScore");
let highScore = 0;
const againElement = document.querySelector(".againButton");
const commentElement = document.querySelector(".comment");



againElement.addEventListener("click" , function ()
{
  totalScore = 20; // Reset total score
  numberToGuess = Math.floor(Math.random() * 20) + 1; // Generate a new number
  scoreElement.textContent = totalScore; // Update score display
  document.querySelector(".guessInput").value = ""; // Clear input field
  console.log("Game reset. New number to guess:", numberToGuess);
  againElement.style.visibility = 'hidden';
});

document.querySelector(".buttons").addEventListener("click", function () {
let numberToGuess = 12;
  const guess = Number(document.querySelector(".guessInput").value);
  if (guess > numberToGuess && guess < 20) { //high
    console.log("too high ningen");
    commentElement.textContent = "Too high!";
    totalScore--;
    scoreElement.textContent = totalScore;
    checkTotalScore(totalScore);

  } else if (guess > 0 && guess < numberToGuess) { //low
    console.log("too low ningen");
    commentElement.textContent = "Too low!";

    totalScore--;
    console.log(totalScore)
    scoreElement.textContent = totalScore;
    checkTotalScore(totalScore,highScore);

  } else if (guess == numberToGuess) { // win
    console.log("nice ningen lmao");
    commentElement.textContent = "Correct!";

    numberToGuess = Math.floor(Math.random() * 20);
    scoreElement.textContent = totalScore;
    checkHighScore(totalScore,highScore);
    againElement.style.visibility = 'visible';

  } else if (isNaN(guess)) { // NULL
    console.log("invalid");
    
  } 

});
