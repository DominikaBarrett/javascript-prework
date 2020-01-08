



let computerMove = `kamień`;
let randomNumber = Math.floor(Math.random() * 3 + 1);

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
console.log('Wylosowana liczba to: ' + randomNumber);


let computerMove = `kamień`;
let playerMove = 'nieznany ruch';

printMassage('Zagrałem ' + computerMove  + '! Jeśli Twój ruch to nożyczki, to wygrywasz!'); 

if(randomNumber == 1){
  computerMove = 'papier';
}
printMassage ( 'Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to przegrywasz!');

else if(randomNumber == 2){
	computerMove = 'nożyce';
}

printMassage( 'Zagrałem ' + computerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');

else if(randomNumber == 3){
	computerMove = 'kamień';

}
printMassage ('Zagrałem ' + computerMove + '! Jeśli Twój ruch to kamień, to jest REMIS!')
}

// let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

// console.log('Gracz wpisał: ' + playerInput);

// let playerMove = 'nieznany ruch';
// let computerMove =

// if(playerInput == '1'){
//   playerMove = 'kamień';
// }

// else if (playerInput == '2'){
// 	playerMove ='papier';
// }
// else if 9(playerMove ==3){
// 	playerMove ='nożyce';
// }
// printMessage('Twój ruch to: ' + playerMove);

