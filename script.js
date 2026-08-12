let firstCard;
let secondCard;
let sum;
let hasBlackJack = false;
let isAlive = true;
let message = '';

const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');

function startGame() {
	firstCard = Math.floor(Math.random() * (11 - 2) + 2);
	secondCard = Math.floor(Math.random() * (11 - 2) + 2);
	sum = firstCard + secondCard;
	cardsEl.textContent = `Cards: ${firstCard} ${secondCard}`;
	sumEl.textContent = `Sum: ${sum}`;
	if (sum <= 20) {
		message = 'Do you want to draw a new card?';
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
	console.log(sum);
}

function newCard() {
	console.log('Drawing a new card from the deck!');
	let thirdCard = Math.floor(Math.random() * (11 - 2) + 2);
	sum += thirdCard;
	startGame();
}
