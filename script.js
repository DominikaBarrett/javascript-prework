



let computerMove = `kamień`;
let randomNumber = Math.floor(Math.random() * 3 + 1);

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
console.log('Wylosowana liczba to: ' + randomNumber);


let computerMove = `kamień`;
let playerMove = 'nieznany ruch';

printMassage('Zagrałem ' + computerMove  + '! Jeśli Twój ruch to nożyczki, to wygrywasz!'); 

if(playerMove == 1){
  computerMove = 'papier';
}
printMassage ( 'Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to przegrywasz!');

else if(playerMove == 2){
	computerMove = 'nożyce';
}

printMassage( 'Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to przegrywasz!');

else if(playerMove == 3){
	computerMove = 'kamień';

}
printMassage ('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to jest REMIS!')



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';
let computerMove ='kamień';

if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove  +'! Jeśli Twój ruch to kamień, to jest REMIS!');

else if (playerInput == '2'){
	playerMove = 'papier';
}
printMessage ( 'Twój ruch to: ' + playerMove  +'! Jeśli Twój ruch to papier, to wygrywasz!')

else if (playerInput == 3){
	playerMove ='nożyce';
}
printMessage ( 'Twój ruch to: '+ playerMove + '!Wygrywasz!')

let playerMove = 'nożyce';
let computerMove = 'nożyce';

printMessage('Zagrałem ' + computerMove + '! REMIS!');
console.log('Wylosowana liczba to: ' + randomNumber);

let playerMove = 'papier';
let computerMove = 'papier';

printMessage('Zagrałem ' + computerMove + '! REMIS!');
console.log('Wylosowana liczba to: ' + randomNumber);


