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

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const gameChoices = {
  'rock': 0,
  'paper': 1,
  'scissors': 2,
};

const gameResults = {
  'draw': 0,
  'playerWin': 1,
  'computerWin': 2
};

function computerPlay() {
  let choice = random(0, 2);
  return choice;
}

function getChoice(choice) {
  switch (choice) {
    case gameChoices.rock:
      return 'ROCK';
    case gameChoices.paper:
      return 'PAPER';
    case gameChoices.scissors:
      return 'SCISSORS';
  }
}

function evaluateRound(computerChoice, playerChoice) {
  let eval = computerChoice - playerChoice;

  if (eval == 0) {
    return gameResults.draw;
  }
  else if (eval == -1 || eval == 2) {
    return gameResults.playerWin;
  }
  else if (eval == 1 || eval == -2) {
    return gameResults.computerWin;
  }
}

function evaluateResult(result) {
  switch (result) {
    case gameResults.draw:
      return 'DRAW!';
    case gameResults.playerWin:
      return 'WIN!';
    case gameResults.computerWin:
      return 'WIN! Oops. I meant, the computer won.';
  }
}

function checkWinner(playerWins, computerWins) {
  if (playerWins > computerWins) {
    return gameResults.playerWin;
  }
  else if (playerWins < computerWins) {
    return gameResults.computerWin;
  }
  else {
    return gameResults.draw;
  }
}

function game() {
  let numRounds = parseInt(prompt('How many rounds do you want to play? Choose between 1, 3, 5, 7.'));

  while (!(numRounds == 1 || numRounds == 3 || numRounds == 5 || numRounds == 7)) {
    console.log(numRounds);
    numRounds = parseInt(prompt('Invalid input, please choose the number of chances. Valid choices: 1, 3, 5, 7.'));
  }

  const winningRounds = parseInt((numRounds) / 2) + 1;
  let winsComputer = 0;
  let winsPlayer = 0;

  for (let currentRound = 1; currentRound <= numRounds; currentRound++) {
    let computerChoice = computerPlay();
    let playerChoice = (parseInt(prompt('Choose between rock (0), paper (1) or scissors (2)')));

    console.log(`currentRound: ${currentRound}, winningRounds: ${winningRounds}`);
    console.log(`Player chose: ${getChoice(playerChoice)}`);
    console.log(`Computer chose: ${getChoice(computerChoice)}`);

    let roundResult = evaluateRound(computerChoice, playerChoice);

    console.log(`roundResult ${roundResult}`)

    switch (roundResult) {
      case gameResults.playerWin:
        winsPlayer++;
        break;
      case gameResults.computerWin:
        winsComputer++;
        break;
      default:
        console.log('Round is a draw.');
    }

    console.log(winsPlayer, winsComputer);

    if (currentRound >= winningRounds) {
      var gameResult = checkWinner(winsPlayer, winsComputer);

      if (winsPlayer >= winningRounds || winsComputer >= winningRounds) // if someone won => gameResult > 0, since playerWin and computerWin are 1 and 2 respectively
        break;

    }
  }

  console.log(typeof gameResult);
  console.log(evaluateResult(gameResult));
}

game();