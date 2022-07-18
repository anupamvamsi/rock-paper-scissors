// three choices r p s
// numChances
// winningNum = parseInt(numChances / 2) + 1
// checkWinner() to listen after currentChanceNumber >= winningNum
// to win: if playerWinNum == winningNum or computerWinNum == winningNum

// computer
// computerChoice
// makes random choice between r / p / s

// player
// playerChoice
// makes choice between r / p / s

/*
'rock' = 0, 'paper' = 1, 'scissors' = 2;
So, rock < paper < scissors;

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
COMPUTER     | PLAYER         | WINNER   | COMPUTER - PLAYER == EVAL
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
rock (0)     | paper (1)      | player   |  -1
--------------------------------------------------------------------
paper (1)    | scissors (2)   | player   |  -1
--------------------------------------------------------------------
scissors (2) | rock (0)       | player   |   2
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
r / p / s    | same           | draw     |   0
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
paper (1)    | rock (0)       | computer |   1
--------------------------------------------------------------------
scissors (2) | paper (1)      | computer |   1
--------------------------------------------------------------------
rock (0)     | scissors (2)   | computer |  -2
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

const gameChoices = {
  rock: 0,
  paper: 1,
  scissors: 2,
};

const gameResults = {
  draw: 0,
  playerWin: 1,
  computerWin: 2,
};

const choicesNew = document.querySelectorAll(".choice");
choicesNew.forEach((choice) => choice.addEventListener("click", playerPlay));

const playArea = document.querySelector(".play-area");
const winnerText = document.querySelector(".win-text");

const human = document.querySelector("#human");
const humanOriginalSrc = human.src;
const computer = document.querySelector("#computer");
const computerOriginalSrc = computer.src;

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// this function is triggered on a click event of one of rock, paper and scissors
function playerPlay(e) {
  playArea.textContent = "";
  human.src = humanOriginalSrc;
  computer.src = computerOriginalSrc;
  human.classList.remove("player-lost");
  computer.classList.remove("player-lost");
  game(e); // main game
}

function computerPlay() {
  let choice = random(0, 2);
  displayComputerChoice(choice);
  return choice;
}

// function displayCountdown() {
//   const count = document.createElement("h3");
//   playArea.appendChild(count);
//   let i = 3;
//   let countdown = setInterval(function () {
//     if (i <= 0) {
//       clearInterval(countdown);
//     } else {
//       count.textContent = i;
//     }
//     i--;
//   }, 1000);
//   // playArea.removeChild(count);
// }

function game(e) {
  let playerChoice = displayAndGetPlayerChoice(e.target.id);
  let computerChoice = computerPlay();

  let roundResult = evaluateRound(computerChoice, playerChoice);
  let result = evaluateResult(roundResult);

  // winnerText.textContent = result;
}

function displayAndGetPlayerChoice(choice) {
  let choiceImg = document.createElement("img");

  switch (choice) {
    case "rock":
      choiceImg.src = "./images/nobg_color_rock.svg";
      playArea.appendChild(choiceImg);
      return gameChoices.rock;
    case "paper":
      choiceImg.src = "./images/nobg_color_paper.svg";
      playArea.appendChild(choiceImg);
      return gameChoices.paper;
    case "scissors":
      choiceImg.src = "./images/nobg_color_scissors.svg";
      playArea.appendChild(choiceImg);
      return gameChoices.scissors;
  }
}

function displayComputerChoice(choice) {
  let choiceImg = document.createElement("img");

  switch (choice) {
    case gameChoices.rock:
      choiceImg.src = "./images/nobg_color_rock.svg";
      playArea.appendChild(choiceImg);
      break;
    case gameChoices.paper:
      choiceImg.src = "./images/nobg_color_paper.svg";
      playArea.appendChild(choiceImg);
      break;
    case gameChoices.scissors:
      choiceImg.src = "./images/nobg_color_scissors.svg";
      playArea.appendChild(choiceImg);
      break;
  }
}

function evaluateRound(computerChoice, playerChoice) {
  let eval = computerChoice - playerChoice;

  if (eval == 0) {
    human.src = human.src.replace("images/nobg_", "images/nobg_draw_");
    computer.src = computer.src.replace("images/nobg_", "images/nobg_draw_");
    return gameResults.draw;
  } else if (eval == -1 || eval == 2) {
    human.src = human.src.replace("images/nobg_", "images/nobg_win_");
    computer.src = computer.src.replace("images/nobg_", "images/nobg_lose_");
    computer.classList.add("player-lost");
    return gameResults.playerWin;
  } else if (eval == 1 || eval == -2) {
    computer.src = computer.src.replace("images/nobg_", "images/nobg_win_");
    human.src = human.src.replace("images/nobg_", "images/nobg_lose_");
    human.classList.add("player-lost");
    return gameResults.computerWin;
  }
}

function evaluateResult(result) {
  switch (result) {
    case gameResults.draw:
      return "DRAW!";
    case gameResults.playerWin:
      return "WIN!";
    case gameResults.computerWin:
      return "WIN! Oops. I meant, the computer won.";
  }
}

function checkWinner(playerWins, computerWins) {
  if (playerWins > computerWins) {
    return gameResults.playerWin;
  } else if (playerWins < computerWins) {
    return gameResults.computerWin;
  } else {
    return gameResults.draw;
  }
}
