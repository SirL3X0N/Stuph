cards = [[11,'A'],[2,'2'],[3,'3'],[4,'4'],[5,'5'],[6,'6'],[7,'7'],[8,'8'],[9,'9'],[10,'10'],[10,'J'],[10,'Q'],[10,'K'],]
suits = ['H', 'D', 'C', 'S']
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

playersHand.push (generateCard(cards,suits))
playersHand.push (generateCard(cards,suits))
console.log (playersHand)

for (let i = 0; i < playersHand.length; i++) {
    playersHandValue.push (playersHand[i][0])
}

let thePlayersHandValue = playersHandValue.reduce((a, b) => {
    return a + b;
  });

  console.log (thePlayersHandValue)