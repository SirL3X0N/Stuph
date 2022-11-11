cards = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']
suits = ['H', 'D', 'C', 'S']
deck = []
theDealtCard = []
playersHand = []

function generateCard(cards, suits) {
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
    cardDigit = cards[getRandomInt(13)]
    cardSuit = suits[getRandomInt(4)]
    card = cardDigit + cardSuit
    return card
}

function shuffleDeck(deck) {
	while (deck.length < 52) {
	    card = generateCard(cards, suits)
	    duplicateCard = false
	
		for (let index = 0; index < deck.length; index++) {
	        if (card == deck[index]) {
	            duplicateCard = true
	        }
	    }
	
	    if (!duplicateCard) {
	        deck.push(card)
	    }
	}
}

function drawCard(deck){
	theDealtCard.push(deck[0])
	deck.splice (0,1)
}

function newGame (theDealtCard,playersHand){
	for (let index = 0; index < 2; index++) {
		drawCard(deck)
		playersHand.push(theDealtCard[0])
		theDealtCard.splice (0,1)
	}
	document.getElementById("playerCard1").src =
	`
	picturesOfCards/${playersHand[0]}.png
	`
	document.getElementById("playerCard2").src =
	`
	picturesOfCards/${playersHand[1]}.png
	`
	console.log (playersHand)
}

function hitPlayer (theDealtCard,playersHand){
	if (playersHand.length <5&&playersHand.length >1){
		drawCard(deck)
		playersHand.push(theDealtCard[0])
		theDealtCard.splice (0,1)
	}
	document.getElementById("playerCard3").src =
		`
	picturesOfCards/${playersHand[2]}.png
	`
	document.getElementById("playerCard4").src =
	`
	picturesOfCards/${playersHand[3]}.png
	`
	document.getElementById("playerCard5").src =
	`
	picturesOfCards/${playersHand[4]}.png
	`
	console.log(playersHand)
}

document.getElementById('dealButton').onclick = function(){
	resetEverything(deck,playersHand)
}

document.getElementById('hitmeButton').onclick = function(){
	hitPlayer (theDealtCard,playersHand)
}

function resetEverything(deck,playersHand){
	document.getElementById('hitmeButton').style.display = "block"
	deck.splice (0,52)
	playersHand.splice (0,52)
	shuffleDeck(deck)
	newGame(theDealtCard,playersHand)
	document.getElementById("playerCard3").src =
	`
	picturesOfCards/${playersHand[2]}.png
	`
	document.getElementById("playerCard4").src =
	`
	picturesOfCards/${playersHand[3]}.png
	`
	document.getElementById("playerCard5").src =
	`
	picturesOfCards/${playersHand[4]}.png
	`
	console.log (playersHand)
}

