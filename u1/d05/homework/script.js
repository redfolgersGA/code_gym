console.log("script loaded");


var tempPrompt = prompt("Enter temperature in Farenheit please.")

function alertInCels (value){
  alert(value + " is " + (value -32) * 5/9 + " in degrees Celsius" )
}

alertInCels(tempPrompt)

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



























