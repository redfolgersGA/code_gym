// Act I

var hamlets = [
  "Laurence Olivier, 1948",
  "Grigori Kozintsev, 1964",
  "Tony Richardson, 1969",
  "Franco Zeffirelli, 1990",
  "Kenneth Branagh, 1996",
  "Michael Almereyda, 2000"
];

console.log('hammy')
// Scene I

hamlets.forEach(function(hamlet){
  var splitHam = hamlet.split(", ")
  console.log("Oh the venerable " + splitHam[0] + " played hamlet in the year " + splitHam[1])
})


// Scene II

var emptyHam = [];
hamlets.forEach(function(hamlet){

  var splitHam = hamlet.split(", ")

    emptyHam.push(splitHam)

})

console.log(emptyHam)



for(var i =0; i<emptyHam.length;i++){
  emptyHam[i].push(parseInt(emptyHam[i][1]))
  emptyHam[i].splice(1,1)

}

console.log(emptyHam)

// Scene III
function ArrToObj (name, year){
  this.name = name;
  this.year = year;


}

var updatedHamArray = []

for(var i=0;i<emptyHam.length;i++){
var updatedHam = new ArrToObj(emptyHam[i][0], emptyHam[i][1])
updatedHamArray.push(updatedHam)

}


console.log(updatedHamArray)

// Scene IV (maybe use for in or FILTER)
var swinging_hamlets = []

function findSixtiesHamlets(){
  for(var i=0;i<updatedHamArray.length;i++){

  if(updatedHamArray[i].year.toString()[2] === '6'){
    swinging_hamlets.push(updatedHamArray[i])

    }
  }

}

findSixtiesHamlets()


console.log(swinging_hamlets)

// Scene V
var future_hamlets = []

function findFutureHamlets (){
  for(var i=0;i<updatedHamArray.length;i++){

    if(updatedHamArray[i].year.toString()[2] === '0'){
      future_hamlets.push(updatedHamArray[i])
    }
  }
}

findFutureHamlets()

console.log(future_hamlets)


// for(var i =0; i<emptyHam.length;i++){
//   for(var j=0; j<emptyHam[i].length;j++){
//     console.log(emptyHam[i][j])
//   }
// }







// Scene I


// hamlets.forEach(function(hamlet){

//   console.log("O!,The venerable " + hamlet.split(', ')[0] + " played Hamlet in the year " +
//     hamlet.split(', ')[1])
// })

// // Scene II
// // Programatically convert the `hamlets` array into an array of arrays where the
// // first element, name, is a string, and the second element, year, is an integer.

// // var newHam = [];

// // hamlets.forEach(function(hamlet){
// //   newHam.push(hamlet.split(', '))
// //   // console.log(hamlet.split(', ')[1])
// //   console.log(newHam)
// // })

// // for(var i=0;i<newHam.length;i++){
// //   for(var j=0;j<newHam[i].length;j++){
// //     console.log(newHam[i][j].split(', '))
// //   }

// // }

// // Scene III
// // Programatically convert the `hamlets` array of arrays
// // into an array of objects where the keys are `name` and `year`
// var hamletsArrayofArrays = [];

// hamlets.forEach(function(hamlet){
//   hamletsArrayofArrays.push(hamlet.split(', '))


// })

// console.log(hamletsArrayofArrays)

// var obj = Object.assign({hamletsArrayofArrays})

// console.log(obj)

// // The global environment and the global object are our base execution context
// // the global environment creates the global object and the this keyword















// // -----------------------------------------------NEW TRIAL 11/30/19

// // // Scene I

// // hamlets.forEach(function(ham){
// //   var hamSplit = ham.split(', ')
// //   console.log("O the venerable " + hamSplit[0] + " starred as hamlet in " + hamSplit[1])
// // })

// // // Scene II
// // var finalArrayOfArrays;

// // function hamletsArrayofArrays (){
// //   var hamletArrays = [];
// //   var hamStringToInteger = [];
// //   var finalArrayStringAndNumber = [];
// //   hamlets.forEach(function(ham){
// //     var hamsplit = ham.split(', ')
// //     // var stringToInteger = [];
// //     // var stringToInteger = stringToInteger + [parseInt(hamsplit[1])]
// //     hamletArrays.push(hamsplit)





// //     // console.log(hamsplit)
// //   })


// //     hamletArrays.forEach(function(ham){
// //       hamStringToInteger.push(ham[0], parseInt(ham[1]))
// //   })
// //   console.log(hamStringToInteger)
// //   finalArrayStringAndNumber.push(hamStringToInteger)
// //   console.log(finalArrayStringAndNumber)

// //   finalArrayOfArrays = finalArrayStringAndNumber


// // }

// // hamletsArrayofArrays()

// // console.log("-----------------")
// // console.log(finalArrayOfArrays)





// // // Scene III


// // var objFromHamArray = finalArrayOfArrays[0].map(function(item){
// //   var obj = {};
// //   obj.name = item
// //   obj.year = item
// //   return obj

// // })

// // console.log(objFromHamArray)


//                                                           // allNames, name
// // var countedNames = finalArrayOfArrays[0].reduce(function (emptObj, item, index, arr) {
// //   console.log(emptObj)
// //   index = arr[0]
// //   emptObj[index] = item


// //   return emptObj;
// // }, {});

// // console.log(countedNames)

















// // hamlets.forEach(function(hamlet){
// //   console.log("O! the venerable " + hamlet.split(", ")[0] + " starred as Hamlet in the year " + hamlet.split(", ")[1])
// // });












// // hamlet.forEach(hamlet){
// //   var splitHam = hamlet.split(",")

// //   var name = splitHam[0];
// //   var year = splitHam[1];

// //   console.log("O! the venerable" +
// //     name + "starred as Hamlet in " +
// //     year)
// // }

// // // Scene II
// // var numberTwo = hamlets.map(function(ham){
// //   var newHam = ham.split(",");
// //   var innerArray = [
// //   newHam[0],
// //   parseInt(newHam[1])
// // ]
// //   return innerArray;
// // })
// // console.log(numberTwo)
// // // Scene III
// // var hamletObj = numberTwo.map(function(actor){
// //   var obj = { "name": actor[0], "year": actor[1]}
// // return obj;
// // })
// // console.log(hamletObj)

// // // Scene IV
// // var swinging_hamlets = hamletObj.filter(function(actor){
// //   var year = actor.year.toString();
// //   var decade = year[2];
// //   return decade === '6';
// // })
// // console.log(swinging_hamlets);
// // // Scene V
// // var future_hamlets = hamletObj.filter(function(actor){
// //   var year = actor.year.toString();
// //   var decade = year[0];
// //   return decade === '2';
// // })
// // console.log(future_hamlets);

// // Act II

// var quotesArray = [
//   ["To be, or not to be: that is the question", "Hamlet-(Act III,Scene I)."],
//   ["A little more than kin, and less than kind", "Hamlet-(Act I,Scene II)."],
//   ["And it must follow, as the night the day, thou canst not then be false to any man", "Hamlet - (Act I, Scene III)."],
//   ["This is the very ecstasy of love", "Hamlet-(Act II,Scene I)."],
//   ["Brevity is the soul of wit", "Hamlet-(Act II,Scene II)."],
//   ["Do you think I am easier to be played on than a pipe?", "Hamlet-(Act III,Scene II)."],
//   ["Doubt that the sun doth move, doubt truth to be a liar, but never doubt I love", "Hamlet-(Act II,Scene II)."],
//   ["I will speak daggers to her, but use none", "Hamlet-(Act III,Scene II)."],
//   ["In my mind's eye", "Hamlet-(Act I,Scene II)."],
//   ["Neither a borrower nor a lender be; For loan oft loses both itself and friend, and borrowing dulls the edge of husbandry", "Hamlet-(Act I,Scene III)."],
//   ["Rich gifts wax poor when givers prove unkind", "Hamlet-(Act III,Scene I)."],
//   ["That it should come to this!", "Hamlet-(Act I,Scene II)."],
//   ["The lady doth protest too much, methinks", "Hamlet-(Act III,Scene II)."],
//   ["The plays the thing wherein I'll catch the conscience of the king", "Hamlet-(Act II,Scene II)."],
//   ["There is nothing either good or bad, but thinking makes it so", "Hamlet-(Act II,Scene II)."],
//   ["This above all: to thine own self be true", "Hamlet-(Act I,Scene III)."],
//   ["Though this be madness, yet there is method int.", "Hamlet-(Act II,Scene II)."],
//   ["What a piece of work is man! how noble in reason! how infinite in faculty! in form and moving how express and admirable! in action how like an angel! in apprehension how like a god! the beauty of the world, the paragon of animals! ", "Hamlet-(Act II,Scene II)."],
//   ["When sorrows come, they come not single spies, but in battalions", "Hamlet-(Act IV,Scene V)."]
// ];

// // Scene I

// var quotes = [
//     ["To be, or not to be: that is the question", "Hamlet - (Act III, Scene I)."]
// ];




// // var newQuotes = quoteArray.map(function(quote){
// // var line = quote[0];
// // var play = quote[1].split("-")[0];
// // var actScene = quote[1].split("-")[1];
// // var act = actScene.split(", ")[0].replace("(", "");
// // var scene = actScene.split(", ")[1].replace(").", "");
// // var obj = {quote: line, play: play, act: act, scene: scene}
// // return obj;

// // })

// // console.log(newQuotes);

// // var line = quote[0];
// // var play = quote[1].split("-")[0];
// // var actScene = quote[1].split("-")[1];
// // var act = actScene.split(", ")[0].replace("(", "");
// // var scene = actScene.split(", ")[1].replace(").", "");
// // var obj = {quote: line, play: play, act: act, scene: scene}
// // console.log(obj);
// // // console.log(quote, line, play);



