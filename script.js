let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';

const messageEl = document.getElementById('message-el');
const sumEl = document.getElementById('sum-el');
const cardsEl = document.getElementById('cards-el');

let player = {
	name: 'Leon',
	chips: 200,
};

const playerEl = document.getElementById('player-el');
playerEl.textContent = `${player.name}: ${player.chips} `;

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	sum = firstCard + secondCard;
	cards = [firstCard, secondCard];
	renderGame();
}

function getRandomCard() {
	let rnd = Math.floor(Math.random() * 13 + 1);

	if (rnd > 10) {
		return 10;
	} else if (rnd === 1) {
		return 11;
	} else {
		return rnd;
	}
}

function renderGame() {
	cardsEl.textContent = 'Cards: ';
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += `${cards[i]} `;
	}
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
}

function newCard() {
	if (isAlive && !hasBlackJack) {
		let thirdCard = getRandomCard();
		sum += thirdCard;
		cards.push(thirdCard);
		renderGame();
	}
}
