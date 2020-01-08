function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove = `kamień`;
let randomNumber = Math.floor(Math.random() * 3 + 1);

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
console.log('Wylosowana liczba to: ' + randomNumber);

let playerMove = 'papier';
let computerMove = 'nieznany ruch';

printMassage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to nożyczki, to wygrywasz!'); 
if(randomNumber == 1){
  computerMove = 'kamień';
}

else if(randomNumber == 2){
	computerMove = 'papier';
}

else if(randomNumber == 3){
	computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove)