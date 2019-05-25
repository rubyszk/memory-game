var cards = ["queen", "queen", "king", "king", "cardOne", "cardTwo"];
var cardsInPlay = [];
cards.push("queen");

function checkForMatch() {
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay [1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}	
}	

function flipCard(cardId) {
checkForMatch();
console.log("User flipped " + cards[cardId]);
}

flipCard(0);
flipCard(2);

