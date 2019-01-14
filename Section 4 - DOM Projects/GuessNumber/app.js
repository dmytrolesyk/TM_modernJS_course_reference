/* 
GAME FUNCTION:
 - Player must guess a number between a min and max;
 - Player gets a certain number of guesses;
 - Notify player of guesses remaining;
 - Notify the player of the correct answer if lose;
 - Let player choose to play again;
*/



//Game values
let min = 1, 
	max = 10, 
	winningNum = getRandomNum(min, max),
	guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
	  minNum = document.querySelector('.min-num'),
	  maxNum = document.querySelector('.max-num'),
	  guessBtn = document.querySelector('#guess-btn'),
	  guessInput = document.querySelector('#guess-input'),
	  message = document.querySelector('.message');


//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function(e){
	if(e.target.classList.contains('play-again')) {
		window.location.reload();
	}
});


//Listen for guess
guessBtn.addEventListener('click', function(){

	let guess = parseInt(guessInput.value);

	//Validate
	if(isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
		return;
	}

	//Check if won
	if (guess === winningNum) {
		//Game over - won;
		gameOver(true, `${winningNum} is correct, you win!`);
	} else {
		//Wrong number
		guessesLeft--;
		if (!guessesLeft) {
			//Game over - lost
			gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
		} else {
			//Game continues - answer wrong

			//tell user it's the wrong number
			guessInput.style.borderColor = 'red';
			setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
			guessInput.value = '';
		}
	}
});

function setMessage(msg, color) {
	message.style.color = color;
	message.textContent = msg;
}

function gameOver(won, msg) {

	let color = won === true ? 'green' : 'red';
	//Disable Input
	guessInput.disabled = true;
	//change border color
	guessInput.style.borderColor = color;
	//set message
	setMessage(msg, color);

	// Play again

	guessBtn.value = 'Play Again';
	guessBtn.classList.add('play-again');
}

function getRandomNum(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}