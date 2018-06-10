var Deck = /** @class */ (function () {
    function Deck(cards) {
        this.cards = [];
        this.cards = cards;
    }
    Deck.prototype.reset = function () {
        this.cards = [];
        var suit = ["Spades", "Clubs", "Diamonds", "Hearts"];
        var value = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
        var i = 0;
        var j = 0;
        for (suit[i]; i < suit.length; i++) {
            for (value[j]; j < value.length; j++) {
                this.cards.push(j + " of " + i);
                console.log(this.cards);
                return this;
            }
        }
        this.reset();
    };
    return Deck;
}());
//     for(suit[i]; i < suit.length; i++){
//       for(value[j]; j< value.length; j++){
//         var new = new Deck(this.cards.push(`${j} of ${i}`);
//         console.log(this.cards);
//         return this;
//       }
//     }
//     this.reset()
//   }
// }
// //   const 
// //   constructor(cards:Array<any>, suit:Array<string>, value:Array<any>){
// //     this.cards = cards;
// //     this.suit = suit;
// //     this.value = value;
// //     console.log(suit:Array[0]);
// //   }
// // }
// // // suit: Array<string> = ["Spades", "Clubs", "Diamonds", "Hearts"];
// //   // name: Array<any> = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]
// //   // card_value: Object = {"Ace": [1, 11], "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "Jack": 10, "Queen": 10, "King": 10};
// // //   constructor(card_value:Object, suit:Array<string>){
// // //     this.suit = suit;
// // //     this.name = name;
// // //     this.card_value = card_value;
// // //   } 
// // //   create_card(){
// // //     var temp = "";
// // //     var i = 0;
// // //     var j = 0;
// // //     for(this.suit[i]; i < this.suit.length-1; i++){
// // //       console.log(this.suit[i])
// // //       // for(this.name[j]; j < this.name.length-1; i++){
// // //       //   temp = this.suit[i] + this.name[j];
// // //       //   this.full_deck.push(temp); 
// // //       //   console.log(this.full_deck);
// // //       // }
// // //     }
// // //   var deck1 = new Deck(card_value: Object, suit: string)
// // //   }
// // // }
