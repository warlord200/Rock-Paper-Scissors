const result = document.querySelector(".result");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const display = document.querySelector(".display");
let playerScore = 0;
let AIScore = 0;
let match = 0;
result.innerText = `Player Score is ${playerScore}, AI Score is ${AIScore}`;
display.innerText = "AI choose: none";
rock.addEventListener("click", () => {
  playRound("rock", aiChoice());
});
paper.addEventListener("click", () => {
  playRound("paper", aiChoice());
});
scissors.addEventListener("click", () => {
  playRound("scissors", aiChoice());
});

function aiChoice() {
  const result = Math.random() * 100;
  return result < 33.3 ? "rock" : 33.3 < result < 66.67 ? "paper" : "scissors";
}
function playerWon() {
  checkState();
  console.log("player won");
  playerScore++;
  result.innerText = `Player Score is ${playerScore}, AI Score is ${AIScore}`;
}
function AIWon() {
  checkState();
  console.log("AI won");
  AIScore++;
  result.innerText = `Player Score is ${playerScore}, AI Score is ${AIScore}`;
}
function sameScore() {
  result.innerText = `Player Score is ${playerScore}, AI Score is ${AIScore}`;
  checkState();
}

function checkState() {
  if (playerScore === 5) {
    alert("Player Won");
    playerScore = 0;
    AIScore = 0;
  } else if (AIScore === 5) {
    alert("AI won");
    playerScore = 0;
    AIScore = 0;
  }
}

function playRound(player, AI) {
  display.innerText = `AI choose: ${AI}`;
  if (player === "scissors") {
    return AI === "paper" ? playerWon() : AI === "rock" ? AIWon() : sameScore();
  } else if (player === "rock") {
    return AI === "scissors"
      ? playerWon()
      : AI === "paper"
      ? AIWon()
      : sameScore();
  } else if (player === "paper") {
    return AI === "rock"
      ? playerWon()
      : AI === "scissors"
      ? AIWon()
      : sameScore();
  }
}

// const Rock = "rock";
// const Scissors = "scissors";
// const Paper = "paper";
// const won = "won";
// const lost = "lost";
// const same = "same";
// let score = 0;
// let loss = 0;

// function playRound(playerSelection, aiSelection) {
//   if (playerSelection == "rock") {
//     if (aiSelection == "scissors") {
//       return won;
//     } else if (aiSelection == "paper") {
//       return lost;
//     } else {
//       return same;
//     }
//   } else if (playerSelection == "scissors") {
//     if (aiSelection == "paper") {
//       return won;
//     } else if (aiSelection == "rock") {
//       return lost;
//     } else {
//       return same;
//     }
//   } else {
//     if (aiSelection == "rock") {
//       return won;
//     } else if (aiSelection == "scissors") {
//       return lost;
//     } else {
//       return same;
//     }
//   }
// }

// function PCSelection() {
//   let randomInt = Math.floor(Math.random() * 100);
//   if (randomInt <= 33) {
//     return Rock;
//   } else if (randomInt <= 66 && randomInt > 33) {
//     return Scissors;
//   } else {
//     return Paper;
//   }
// }

// while (score < 5 && loss < 5) {
//   let playerSelectionQueue = prompt(
//     "Please enter rock, scissors or paper"
//   ).toLowerCase();
//   if (
//     playerSelectionQueue == "rock" ||
//     playerSelectionQueue == "scissors" ||
//     playerSelectionQueue == "paper"
//   ) {
//     if (playRound(playerSelectionQueue, PCSelection()) == "won") {
//       score++;
//       alert("You won this match, your score is " + score);
//     } else if (playRound(playerSelectionQueue, PCSelection()) == "lost") {
//       loss++;
//       alert("You lost this match, your loss is " + loss);
//     } else {
//       alert("Tied");
//       console.log("tie");
//     }
//   } else {
//     continue;
//   }

// }

// if (score == 5) {
//   alert("You have beat the computer!");
// } else {
//   alert("What a huge loss");
// }
