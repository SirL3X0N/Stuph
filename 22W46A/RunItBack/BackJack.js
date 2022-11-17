cards = [[11,'A'],[2,'2'],[3,'3'],[4,'4'],[5,'5'],[6,'6'],[7,'7'],[8,'8'],[9,'9'],[10,'10'],[10,'J'],[10,'Q'],[10,'K'],]
suits = ['H', 'D', 'C', 'S']
deck = []
theDealtCard = []
playersHand = []
playersHandValue = []

function countMyHand (playersHandValue,playersHand){
	playersHandValue.splice(0,50)
	Aces = 0
	for (let i = 0; i < playersHand.length; i++) {
		if (playersHand[i][0]==11){
			Aces++
		}
		playersHandValue.push (playersHand[i][0])
		thePlayersHandValue = playersHandValue.reduce((a, b) => {
			return a + b
		  })
	}
	while (thePlayersHandValue > 21&& Aces >0){
		Aces--
		thePlayersHandValue = (thePlayersHandValue - 10)
	}
}

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
	        if (card[1] == deck[index][1]) {
	            duplicateCard = true
	        }
	    }
	
	    if (!duplicateCard) {
	        deck.push(card)
}}
console.log (deck)
}


function drawCard(deck,theDealtCard){
	theDealtCard.push(deck[0])
	deck.splice (0,1)
}

function newGame (theDealtCard,playersHand){
	playersHandValue.splice (0,20)
	for (let index = 0; index < 2; index++) {
		drawCard(deck,theDealtCard)
		playersHand.push(theDealtCard[0])
		theDealtCard.splice (0,1)
	}
	  countMyHand(playersHandValue,playersHand)
	  console.log (thePlayersHandValue)
	console.log (playersHand)
}

function hitPlayer (theDealtCard){
	if (playersHand.length <5&&playersHand.length >1){
		drawCard(deck,theDealtCard)
		playersHand.push(theDealtCard[0])
		theDealtCard.splice (0,1)
	}
	countMyHand(playersHandValue,playersHand)
	  console.log (thePlayersHandValue)
	console.log(playersHand)
}

function resetEverything(deck,playersHand){
	deck.splice (0,52)
	playersHand.splice (0,5)
	shuffleDeck(deck)
	newGame(theDealtCard,playersHand)
}

resetEverything(deck,playersHand)
hitPlayer (theDealtCard,playersHand)
hitPlayer (theDealtCard,playersHand)
hitPlayer (theDealtCard,playersHand)