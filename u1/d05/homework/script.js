console.log("script is loaded now")


// FORMULA (32F- 32) * 5/9 = 0C

// var tempInput = prompt("Whats the temperature in Farenheit?")

// var toCels = function(temp){

//   var farToCels = (temp-32) * 5/9
//   alert(tempInput + " degrees Farenheit is " + Math.round(farToCels) + " degrees in Celsius")
// }

// toCels(tempInput)

// var weightInput = prompt("Enter weight in LBS")

// function lbsToKilos(weight){
//   // divide mass value by 2.205
//   var lbsToKilograms = weight / 2.205
//   alert(weight + "lbs is equal to " + lbsToKilograms + "kilograms" )



// }

// lbsToKilos(weightInput)

// // pytahgorean theorem

// var sideOne = prompt("how long is the first side? (inches)")
// var sideTwo = prompt("how long is the second side? (inches)")


// function pythagoras (a,b){

//   alert("The third side is equal to " + a * b)
// }

// pythagoras(sideOne,sideTwo)

// function alertLongestWord (){
//   // captures your string
//   var input = prompt("Say something")
//   // splits string into an array of elements
//   var splitString = input.split(' ')
//   console.log(splitString)
//   // a variable to store the longest word in the array
//   var longestWord = ""
//   var longestWordIndex = 0

//   for(var i = 0; i < splitString.length; i++){
//     if(splitString[i].length > longestWordIndex){
//       longestWord = splitString[i]
//       longestWordIndex = splitString[i].length
//     }

//     console.log(longestWord)


//   }

//   alert("the longest word is " + longestWord)





//   }
// alertLongestWord()

// BONUS




































// var tempPrompt = prompt("Enter temperature in Farenheit please.")

// function alertInCels (value){
//   alert(value + " is " + (value -32) * 5/9 + " in degrees Celsius" )
// }

// alertInCels(tempPrompt)


// var weightInlbs = prompt("What is your weight in lbs")

// var alertInKgs = function (value) {
//   alert(value + " is " + Math.round(value * 1/2.2) + " in kg")
// }

// alertInKgs(weightInlbs)

// function findsPytagoresTheorem () {
//   var sideA = prompt("what is side 1 equal to?")
//   var sideB = prompt("what is side 2 equal to?")

//   var aSquaredPlusBSquared = Math.pow(sideA, 2) + Math.pow(sideB, 2)

//   var cSquaredSqrt = Math.sqrt(aSquaredPlusBSquared)

//   if(isNaN(cSquaredSqrt) ) {
//     alert("You did NOT enter 2 numbers.")

//   } else {
//     alert("the third side is equal to " + cSquaredSqrt)


//   }






// }

// findsPytagoresTheorem()

// var sentencePrompt = prompt("Say something");

// function alertLongestWord (value) {
//   var longWordLength = 0;
//   var longWordNow = "";

//   var sentenceToArray = sentencePrompt.split(' ')
//   for(i = 0; i < sentenceToArray.length ; i++){
//     if(sentenceToArray[i].length >= longWordLength) {
//      var longWordLength = sentenceToArray[i].length
//      var longWordNow = sentenceToArray[i]
//     }
//     console.log(longWordNow)

//     }



//   // maybe use array.filter to compare word lengths and store the longest word into a variable that
//   // will then be alerted to the user


// }

// alertLongestWord(sentencePrompt)



// function camelCaseThePrompt () {
//   var statementPrompt = prompt ("Enter a statement")

//   var statementArr = statementPrompt.split(' ')

//   for(i = 0; i < statementArr.length; i++){

//     var upperCasedArray = statementArr[i][0].toUpperCase() + statementArr[i]
//     // eliminate the second letter in each array item\
//     var slicedUpperCasedArray = upperCasedArray.slice(0) + upperCasedArray.slice(4)
//     console.log(slicedUpperCasedArray)

//   }




// }
// camelCaseThePrompt()
// var degreesInFahrenheit = prompt("give temperature Fahrenheit and I will convert it to Celsius");

// var degreesInCelsius = degreesInFahrenheit + " in Fahrenheit is " + ((degreesInFahrenheit - 32) * 5 / 9) + " in celsius";

// alert(degreesInCelsius);

// var weightInlbs = prompt("Enter your weight in pounds. Trust me the number appears much lower in Kilograms ;)");

// var weightInKg = (weightInlbs / 2.2046);

// alert(weightInKg);

// var firstSide = prompt("Ok I'm a genius. To ascertain the length of the third side just enter the length of the first side then the second side ok pal! How long is the first side buddy?");

// var secondSide = prompt("How long is the second side friend?");

// var thirdSide = Math.sqrt(Math.pow(firstSide, 2) + Math.pow(secondSide, 2));

// alert(thirdSide);

/*var statement = prompt("Type something in me. I'll tell you what your longest word was because my master told me to do that.");

var...i think my brain ran out of glucose at this point so i just added a picture of jordan to the pages background instead*/

// var farenToCel = prompt("Give a temperature in Farenheit");

// var alertCelcius = function() {
//   var conversion = Math.round((Number(farenToCel) - 32) * .5556)
//   alert(farenToCel + " degrees in Farenheit is " + conversion + " in Celsius")
// }


// alertCelcius()

// var lbsToKg = prompt("Give a weight in lbs");

// var alertKg = function(){
//   var conversion = lbsToKg * 0.45359237
//   alert(lbsToKg + " in pounds is " + conversion + " in kilograms");
// }


// alertKg()

// var firstSide = prompt("what is the length of the first side");
// var secondSide = prompt("what is the length of the second side");

// var thirdSide = function() {
//   var thirdSideValue = Math.pow(Number(firstSide), 2) + Math.pow(Number(secondSide), 2);
//   console.log(thirdSideValue)
//   alert("The length of the third side is " + thirdSideValue);
// }

// thirdSide()

// var sentence = prompt("Write a Sentence!");




// function longestWord () {
//   var logLongestWord = 0;
//   var longWordNow = "";
//   // put each string in a pocket in an array
//   var strToArray = sentence.split(" ")
//   console.log(strToArray)
// // ["We", "Are", "Going", "to", "drink", "wine"]
//   for(i=0; i<strToArray.length; i++) {
//     // if array element passes this test then it becomes the new longWordNow variable
//     if(strToArray[i].length >= logLongestWord) {
//       var logLongestWord = strToArray[i].length
//       var longWordNow = strToArray[i]





//     }

//   }
//   alert("the longest word is: " + longWordNow)

// }

// longestWord()
// Take sentence and put it into an array maybe using split()
// loop through Array to find the longest word/index with for loop
// return the longest word in an alert to the user

// function toCamelCase(str){
//   return str.split(' ').map(function(word,index){
//     // If it is the first word make sure to lowercase all the chars.
//     if(index == 0){
//       return word.toLowerCase();
//     }
//     // If it is not the first word only upper case the first char and lowercase the rest.
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   }).join('');
// }

// toCamelCase("foxes are big")































