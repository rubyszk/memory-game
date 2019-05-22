var cards = ["queen", "queen", "king", "king", "cardOne", "cardTwo"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[2];
cardsInPlay.push(cardOne);
console.log("User flipped queen");
cardsInPlay.push(cardTwo);
console.log("User flipped king");
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay [1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
