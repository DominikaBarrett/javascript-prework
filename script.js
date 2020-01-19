const playGame = function (playerInput) {
  clearMessages();

 const getMOveName =function (argMoveId) {
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
    return 'papier';
  } else if(argMoveId == 3){
    return 'nozyczki';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

}

let randomNumber = Math.floor(Math.random() * 3 + 1);


console.log('Wylosowana liczba to: ' + randomNumber);

const displayResult =function (argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyczki') {
        printMessage('Wygrałem!');
    } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrałem!');
    } else if (argPlayerMove == 'nożyczki' && argComputerMove == 'papier') {
        printMessage('Wygrałem!');
    } else {
        printMessage('Przegrywasz!');
    }
}

displayResult(computerMove, 'papier');
}



printMessage('wynik:' + displayResult(argComputerMove, argPlayerMove))
  getResult();

  function getResult() {
    document.getElementById('result').innerHTML = 'Gracz:' + playerScore + '<br>' + 'Komputer:' + computerScore;
  }

document.getElementById('play-rock').addEventListener('click', function() {
  playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function() {
  playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function() {
  playGame(3);
  });
