//CACHE THE DOM
//Caching means storing things for future use.
let userScore = 0;
let computerScore = 0;
//Underscore _ differntiates between normal variables and DOM variables. span denotes that this element is in a span tag in the HTMLdocument.
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoredBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let rand = Math.floor(Math.random() * 3);
  return choices[rand];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "paperrock":
    case "rockscissors":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw();
      break;
  }
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = userChoice + " beats " + computerChoice + " you win!";
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML = computerChoice + " beats " + userChoice + " you lose!";
}

function draw() {
  result_div.innerHTML = "It's a draw!";
}

function main() {
  //add event listeners to buttons.
  rock_div.addEventListener('click', function() {
    game("rock");
  })
  paper_div.addEventListener('click', function() {
    game("paper");
  })
  scissors.addEventListener('click', function() {
    game("scissors");
  })
}

main();
