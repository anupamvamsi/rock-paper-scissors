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

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playerPlay(e) {
  playArea.textContent = "";
  console.log(this.id);
  displayPlayerChoice(this.id);
  computerPlay();
}

function computerPlay() {
  let choice = random(0, 2);
  displayComputerChoice(choice);
}

function displayPlayerChoice(choice) {
  let choiceImg = document.createElement("img");

  switch (choice) {
    case "rock":
      console.log("PLAYER CHOICE: ROCKYY");
      choiceImg.src = "./images/nobg_color_rock.svg";
      playArea.appendChild(choiceImg);
      return gameChoices.rock;
    case "paper":
      console.log("PLAYER CHOICE: PYAPER");
      choiceImg.src = "./images/nobg_color_paper.svg";
      playArea.appendChild(choiceImg);
      return gameChoices.paper;
    case "scissors":
      console.log("PLAYER CHOICE: SCIZOR");
      choiceImg.src = "./images/nobg_color_scissors.svg";
      playArea.appendChild(choiceImg);
      return gameChoices.scissors;
  }
}

function displayComputerChoice(choice) {
  let choiceImg = document.createElement("img");

  switch (choice) {
    case gameChoices.rock:
      console.log("COMPUTER CHOICE: rock!");
      choiceImg.src = "./images/nobg_color_rock.svg";
      playArea.appendChild(choiceImg);
      break;
    case gameChoices.paper:
      console.log("COMPUTER CHOICE: paper!");
      choiceImg.src = "./images/nobg_color_paper.svg";
      playArea.appendChild(choiceImg);
      break;
    case gameChoices.scissors:
      console.log("COMPUTER CHOICE: scissors!");
      choiceImg.src = "./images/nobg_color_scissors.svg";
      playArea.appendChild(choiceImg);
      break;
  }
}

function evaluateRound(computerChoice, playerChoice) {
  let eval = computerChoice - playerChoice;

  if (eval == 0) {
    return gameResults.draw;
  } else if (eval == -1 || eval == 2) {
    return gameResults.playerWin;
  } else if (eval == 1 || eval == -2) {
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

function game() {
  let winsComputer = 0;
  let winsPlayer = 0;

  let computerChoice = computerPlay();
  let playerChoice = playerPlay();

  console.log(`func: ${playerChoice}`);

  // console.log(`currentRound: ${currentRound}, winningRounds: ${winningRounds}`);
  // console.log(`Player chose: ${getChoice(playerChoice)}`);
  // console.log(`Computer chose: ${getChoice(computerChoice)}`);

  let roundResult = evaluateRound(computerChoice, playerChoice);

  console.log(`roundResult ${roundResult}`);

  switch (roundResult) {
    case gameResults.playerWin:
      winsPlayer++;
      break;
    case gameResults.computerWin:
      winsComputer++;
      break;
    default:
      console.log("Round is a draw.");
  }

  console.log(winsPlayer, winsComputer);

  // if (currentRound >= winningRounds) {
  //   var gameResult = checkWinner(winsPlayer, winsComputer);

  //   if (winsPlayer >= winningRounds || winsComputer >= winningRounds)
  //     // if someone won => gameResult > 0, since playerWin and computerWin are 1 and 2 respectively
  //     // break;
  // }

  // console.log(typeof gameResult);
  // console.log(evaluateResult(gameResult));
}
// game();
