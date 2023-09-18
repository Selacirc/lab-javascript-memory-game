class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) {
      return undefined;
    }
    for (let i = 0; i < this.cards.length; i++) {
      let random = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[random];
      this.cards[random] = temp;
    }
    return this.cards;
  }
  //  if (!this.cards) return undefined;
  //for (let i = this.cards.length - 1; i > 0; i--) {
  //  const randNum = Math.floor(Math.random() * ( i + 1 ));
  // [this.cards[randNum], this.cards[i]] = [this.cards[i], this.cards[randNum]];
 // }
//  return this.cards;
//}

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    }
    this.pairsClicked++;

    return false;
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }
  }
