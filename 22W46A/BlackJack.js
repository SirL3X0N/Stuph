cards = [[11,'A'],[2,'2'],[3,'3'],[4,'4'],[5,'5'],[6,'6'],[7,'7'],[8,'8'],[9,'9'],[10,'10'],[10,'J'],[10,'Q'],[10,'K'],]
suits = ['H', 'D', 'C', 'S']
deck = []
theDealtCard = []
playersHand = []
playersHandValue = []
botHand = []
botHandValue = []

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
	if (thePlayersHandValue > 21){
		document.getElementById("Results").innerHTML = 'You Lose'
	}
	if (thePlayersHandValue < 22&&playersHand.length==5){
		document.getElementById("Results").innerHTML = 'You Win'
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
	        if (card == deck[index]) {
	            duplicateCard = true
	        }
	    }
	
	    if (!duplicateCard) {
	        deck.push(card)
}}}


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
	countMyHand (playersHandValue, playersHand)
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
	if (thePlayersHandValue == 21){
		document.getElementById("Results").innerHTML = 'You Win'
	}
}

function hitPlayer (theDealtCard,playersHand){
	if (playersHand.length <5&&playersHand.length >1){
		drawCard(deck)
		playersHand.push(theDealtCard[0])
		theDealtCard.splice (0,1)
	}
	countMyHand (playersHandValue, playersHand)
	  console.log (thePlayersHandValue)
	  document.getElementById("Value").innerHTML =
	  thePlayersHandValue
	  if (playersHand.length >2){
	document.getElementById("playerCard3").src =
	`
	picturesOfCards/${playersHand[2][1]}.png
	`
	  }
	  if (playersHand.length >3){
	document.getElementById("playerCard4").src =
	`
	picturesOfCards/${playersHand[3][1]}.png
	`
	  }
	  if (playersHand.length >4){
	document.getElementById("playerCard5").src =
	`
	picturesOfCards/${playersHand[4][1]}.png
	`
	  }
	console.log(playersHand)
}

document.getElementById('dealButton').onclick = function(){
	resetEverything(deck,playersHand)
}

document.getElementById('hitmeButton').onclick = function(){
	hitPlayer (theDealtCard,playersHand)
}

function resetEverything(deck,playersHand){
	document.getElementById("Results").innerHTML = ''
	document.getElementById('hitmeButton').style.display = "block"
	deck.splice (0,52)
	playersHand.splice (0,5)
	shuffleDeck(deck)
	newGame(theDealtCard,playersHand)
	document.getElementById("playerCard3").src =
	"picturesOfCards\None.png"
	document.getElementById("playerCard4").src =
	"picturesOfCards\None.png"
	document.getElementById("playerCard5").src =
	"picturesOfCards\None.png"
	console.log (playersHand)
}
