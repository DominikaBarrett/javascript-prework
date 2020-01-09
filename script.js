let getMoveName = getMoveName(randomNumber)
let argMoveId =[ 1: kamień, 2: papier ,3:nozyczki]


function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
	else if(argMoveId == 2){
    return 'papier';
  } 
	else if(argMoveId == 3){
    return 'nozyczki'; 
  }

console.log (getMoveName());

 let computerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}
if else( argMoveId ==2){
	return'papier';
}
if else(argMoveId ==3){
	return'nozyczki'
}

let computerMove = 'nieznany ruch';
let userMove = [1: kamień, 2: papier ,3:nozyczki]

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function winner(userMove)
if(randomNumber == 1){
  computerMove = 'kamień';
}

return'REMIS';

else if(randomNumber == 2){
  computerMove = 'papier';
}
return 'Wygral papier!';

if(randomNumber == 3){
  computerMove = 'nozyczki';
}

return  'Wygraly nozyczki!';
}
console.log(winner);


function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}
 if (argComputerMove =='kamień' && argPlayerMove =='nozyczki') {
	return 'wygrywa kamien';{
		else {
			return 'przegrales';
		}
	}
if( argComputerMove == 'kamień' && argPlayerMove == 'kamien'){
    printMessage('TREMIS!!');
  } 