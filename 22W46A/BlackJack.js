cards = [[11,'A'],[2,'2'],[3,'3'],[4,'4'],[5,'5'],[6,'6'],[7,'7'],[8,'8'],[9,'9'],[10,'10'],[10,'J'],[10,'Q'],[10,'K'],]
suits = ['H', 'D', 'C', 'S']
deck = []
theDealtCard = []
playersHand = []
playersHandValue = []

function generateCard(cards, suits) {
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
    cardDigit = cards[getRandomInt(13)]
    cardSuit = suits[getRandomInt(4)]
    techCard = cardDigit[1] + cardSuit
    cardValue = cardDigit[0]
    card = [cardValue,techCard]
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
	playersHandValue.splice (0,20)
	for (let index = 0; index < 2; index++) {
		drawCard(deck)
		playersHand.push(theDealtCard[0])
		theDealtCard.splice (0,1)
	}
	for (let i = 0; i < playersHand.length; i++) {
		playersHandValue.push (playersHand[i][0])
	}
	thePlayersHandValue = playersHandValue.reduce((a, b) => {
		return a + b;
	  });
	  console.log (thePlayersHandValue)
	  document.getElementById("Value").innerHTML =
	  thePlayersHandValue
	document.getElementById("playerCard1").src =
	`
	picturesOfCards/${playersHand[0][1]}.png
	`
	document.getElementById("playerCard2").src =
	`
	picturesOfCards/${playersHand[1][1]}.png
	`
	console.log (playersHand)
}

function hitPlayer (theDealtCard,playersHand){
	if (playersHand.length <4&&playersHand.length >1){
		drawCard(deck)
		playersHand.push(theDealtCard[0])
		theDealtCard.splice (0,1)
	}
	playersHandValue.splice (0,20)
	for (let i = 0; i < playersHand.length; i++) {
		playersHandValue.push (playersHand[i][0])
	}
	thePlayersHandValue = playersHandValue.reduce((a, b) => {
		return a + b;
	  });
	  console.log (thePlayersHandValue)
	  document.getElementById("Value").innerHTML =
	  thePlayersHandValue
	document.getElementById("playerCard3").src =
		`
	picturesOfCards/${playersHand[2][1]}.png
	`
	document.getElementById("playerCard4").src =
	`
	picturesOfCards/${playersHand[3][1]}.png
	`
	document.getElementById("playerCard5").src =
	`
	picturesOfCards/${playersHand[4][1]}.png
	`
	console.log(playersHand)
}

document.getElementById('dealButton').onclick = function(){
	resetEverything(deck,playersHand)
}

document.getElementById('hitmeButton').onclick = function(){
	hitPlayer (theDealtCard,playersHand)
}

function resetEverything(deck,playersHand,playersHandValue){
	document.getElementById('hitmeButton').style.display = "block"
	deck.splice (0,52)
	playersHand.splice (0,5)
	shuffleDeck(deck)
	newGame(theDealtCard,playersHand)
	document.getElementById("playerCard3").src =
	"picturesOfCards\Undefined.png"
	document.getElementById("playerCard4").src =
	"picturesOfCards\Undefined.png"
	document.getElementById("playerCard5").src =
	"picturesOfCards\Undefined.png"
	console.log (playersHand)
}

