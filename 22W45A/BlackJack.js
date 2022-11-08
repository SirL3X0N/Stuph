// These are the arrays, they hold the posible cards and suits which will be added to the hand

cards = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']
suits = ['H', 'D', 'C', 'S']
hand = []

// This Gets a random number between 0 and the specified 'max' digit

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// This will get 2 random numbers from getRandomInt and grab a card and suit based off of those
// numbers. It then returns the value of card

function generateCard(cards, suits) {
    cardDigit = cards[getRandomInt(13)]
    cardSuit = suits[getRandomInt(4)]
    card = cardDigit + cardSuit
    return (card)
}

// Checks if the card collected from generateCard already is in the hand. If it is then it generates
// a new card. When the card generated is unuiqe then it is added to the hand and the new hand is displayed

function drawCard(hand) {
	card = generateCard(cards, suits);
	duplicateCard = false;

	// loop through cards in hand to see if any matches the newly generated card
	for (let index = 0; index < hand.length; index++) {
		if (card == hand[index]) {
			duplicateCard = true;
		}
		if (!duplicateCard) {
	        hand.push(card)
			document.getElementById("displayHand").innerHTML=hand
	    }
		
	}
}

// This resets the hand then adds two cards to it using the functions above

function dealMyHandPlease(hand) {
	hand.splice(0,50)
	hand.push(generateCard(cards, suits))
	
	while (hand.length < 2) {
	    drawCard(hand);
	}
}

// When the dealButton is clicked it will activate dealMyHandPlease
document.getElementById('dealButton').onclick = function(){
	dealMyHandPlease(hand)
}
