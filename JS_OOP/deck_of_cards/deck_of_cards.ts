class Deck{
  cards: Array<string>=[];
  suit: Array<string>=["Spades", "Clubs", "Diamonds", "Hearts"]; 
  value: Array<any>=["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  
  constructor(suit: Array<string>, value: Array<any>){
    this.suit=suit;
    this.value=value;
  }
  reset(){
    this.cards=[];
    
    var i = 0;
    var j = 0;

    
    for(this.suit[i]; i < this.suit.length; i++){
      for(this.value[j]; j < this.value.length; j++){
        var newCard: Deck = new Deck(this.suit, this.value);
        this.cards.push(`${newCard}`)
        console.log(newCard);
        console.log(this.cards);
        return this;
      }
    }
  this.reset();
  }

}
console.log(this.cards)