console.log("script loaded");


var degreesInFahrenheit = prompt("give temperature Fahrenheit and I will convert it to Celsius");

var degreesInCelsius = ((degreesInFahrenheit - 32) * .555 / 9);

alert(degreesInCelsius);

var weightInlbs = prompt("Enter your weight in pounds. Trust me the number appears much lower in Kilograms ;)");

var weightInKg = (weightInlbs / 2.2046);

alert(weightInKg);

var firstSide = prompt("Ok I'm a genius. To ascertain the length of the third side just enter the length of the first side then the second side ok pal! How long is the first side buddy?");

var secondSide = prompt("How long is the second side friend?");

var thirdSide = Math.pow(firstSide, 2) + Math.pow(secondSide, 2);

alert(thirdSide);

/*var statement = prompt("Type something in me. I'll tell you what your longest word was because my master told me to do that.");

var...i think my brain ran out of glucose at this point so i just added a picture of jordan to the pages background instead*/
