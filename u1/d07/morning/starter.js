console.log('U01D07 starter.js is connected!');

// DO WORK IN ANY ORDER YOU'D LIKE BELOW, BUT REMEMBER TO HAVE MEANINGFUL VARIABLE NAMES AND CONSOLE.LOG STATEMENTS
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function fullSuite(){
  var cards = [];
  for(i=0;i<values.length;i++){
    cards.push(suits[0] + values[i])
  }
    for(i=0;i<values.length;i++){
      cards.push(suits[1] + values[i])
    }
      for(i=0;i<values.length;i++){
        cards.push(suits[2] + values[i])
      }
        for(i=0;i<values.length;i++){
          cards.push(suits[3] + values[i])
        }


        console.log(cards)

}
fullSuite()

// var suits = ["S", "H", "D", "C"];
// var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// var DeckCard = [];

// for(var i = 0; i < suits.length; i++){
//   var buffer = [];
//   for(var x = 0; x < values.length; x++)
//   {
//     buffer[x] = values[x] + suits[i];
//   }
//   DeckCard.push(buffer);
// }
// console.log(DeckCard);


