console.log('U01D07 starter.js is connected!');

// DO WORK IN ANY ORDER YOU'D LIKE BELOW, BUT REMEMBER TO HAVE MEANINGFUL VARIABLE NAMES AND CONSOLE.LOG STATEMENTS
var suits = ["S", "H", "D", "C"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var fullSuite = [];
var tracker = 0;


// function cardsTwo () {
//   for(var i = 0; i< values.length; i++){
//     for(var j =0; j< suits.length; j++){

//       fullSuite.push(values[i] + suits[j])
//     }

//   }
//   console.log(fullSuite)

// }

// cardsTwo()

// function fullSuiteRandom (arr) {
//   var randomCard = arr[Math.floor(Math.random() * (fullSuite.length - 1 + 1) + 1)];
//   var randomCardValue = 0;

//   console.log(randomCard)

//   if (randomCard[0] === "J" || randomCard[0] === "Q" || randomCard[0] === "K"){
//     var randomCardValue = 10
//   } else if(randomCard[0] === "A") {
//     var randomCardValue = 11


//   } else {
//     var randomCardValue = parseInt(randomCard)
//   }

//   console.log(randomCardValue)

// }

// fullSuiteRandom(fullSuite)



// function twoRandomCards(arr) {
//   var randomCardOneValue = 0;
//   var randomCardTwoValue = 0;

//   var randomCard = arr[Math.floor(Math.random() * (fullSuite.length - 1 + 1) + 1)];
//   var randomCardTwo = arr[Math.floor(Math.random() * (fullSuite.length - 1 + 1) + 1)];

//   if (randomCard[0] === "J" || randomCard[0] === "Q" || randomCard[0] === "K"){
//     var randomCardOneValue = 10
//   } else if(randomCard[0] === "A") {
//     var randomCardOneValue = 11


//   } else {
//     // in case its a 10 which reads like "1" "0" itll concatnate and turn 10 into a number
//     var randomCardOneValue = parseInt(randomCard)
//   }

//   if (randomCardTwo[0] === "J" || randomCardTwo[0] === "Q" || randomCardTwo[0] === "K"){
//     var randomCardTwoValue = 10
//   } else if(randomCardTwo[0] === "A") {
//     var randomCardTwoValue = 11


//   } else {
//     var randomCardTwoValue = parseInt(randomCardTwo)
//   }


//   console.log(randomCardOneValue, randomCardTwoValue)

//   var totalValueOfCards = randomCardOneValue + randomCardTwoValue
//   console.log(totalValueOfCards)



// }

// twoRandomCards(fullSuite)


var candidates = [
{ name: "Bernie Sanders",
  age: 74
  },
  {
    name: "Hillary Clinton",
    age:68
  },
  {
    name: "Jeb Bush",
    age:62
  },
  {
    name: "Gary Johnson",
    age:63
  },
  {
    name: "Donald Trump",
    age:69
  },
  {
    name: "Frank Underwood",
    age:55
  },
  {
    name: "John Kasich",
    age: 63
  },
  {
    name: "Marco Rubio",
    age: 44
  }

]

var candidateAge = 0;

function youngestCandidate (arr) {
  var counter = 0;


  for(var i = 0; i < arr.length; i++){
    console.log(arr[i])
    console.log(counter)

    if(arr[i].age <= counter){
      counter = arr[i].age
      console.log(counter)

    }

  }




}

youngestCandidate(candidates)












// var cards = function() {

// var suitTracker = 0
// for(var i = 0; i < values.length; i++){

// fullSuite.push(suits[suitTracker] + values[i])



// }
// console.log(fullSuite)
// if(suitTracker === 0){
//   suitTracker++
// }
// console.log(suitTracker)

// for(var i = 0; i < values.length; i++){
//   fullSuite.push(suits[suitTracker] + values[i])
// }

// console.log(fullSuite)

// if(suitTracker === 1){
//   suitTracker++
// }

// console.log(suitTracker)

// for(var i = 0; i < values.length; i++){
//   fullSuite.push(suits[suitTracker] + values[i])
// }

// console.log(fullSuite)

// if(suitTracker === 2){
//   suitTracker++
// }

// console.log(suitTracker)

// for(var i = 0 ; i < values.length; i++){
//   fullSuite.push(suits[suitTracker] + values[i])
// }

// console.log(fullSuite)




// }

// cards()






// var cards = function () {

//   var suitNow = 0;

//   for(var i = 0; i < values.length;)
// }
























// var cards = function () {

// var suitsIndex = 0;

// for(i=0;i<values.length;i++) {
//   fullSuite.push(suits[suitsIndex] + values[i])


// }
//   for(i=0;i<values.length;i++){
//     if(suitsIndex === 0) {
//       suitsIndex++
//     }

//     fullSuite.push(suits[suitsIndex] + values[i])

//   }

//     for(i=0;i<values.length;i++){
//       if(suitsIndex ===1){
//         suitsIndex++
//       }
//       fullSuite.push(suits[suitsIndex] + values[i])
//     }

//       for(i=0;i<values.length;i++){
//         if(suitsIndex === 2){
//           suitsIndex++
//         }
//         fullSuite.push(suits[suitsIndex] + values[i])
//       }

//       console.log(fullSuite)



// }

// cards()


// function cardValue(arr) {

// // returns a random card from the array
// var randomCard = arr[Math.floor(Math.random() * (fullSuite.length - 0 + 1)) + 0]
// console.log(randomCard)




// }

// cardValue(fullSuite)























// function fullSuite(){
//   var cards = [];
//   for(i=0;i<values.length;i++){
//     cards.push(suits[0] + values[i])
//   }
//     for(i=0;i<values.length;i++){
//       cards.push(suits[1] + values[i])
//     }
//       for(i=0;i<values.length;i++){
//         cards.push(suits[2] + values[i])
//       }
//         for(i=0;i<values.length;i++){
//           cards.push(suits[3] + values[i])
//         }


//         console.log(cards)

// }
// fullSuite()

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


