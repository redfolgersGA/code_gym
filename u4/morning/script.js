// 1 Write function that takes an array of numbers as argument and returns
// a new array with only the odd numbers
var numbers = [1,2,3,4,5];

var getOdds = function (arr) {
  return arr.filter(function(n){
    return n % 2 !== 0
  })
}

console.log(getOdds(numbers))


// 2 Write a function that takes an object as an argument and returns
// a new object with only values greater than 10 characters in length
var bagelBites = {
  bagel: "bites",
  pizza: "in the morning, in the evening, at supper time",
  when: "pizza is on a bagel",
  you: "can eat pizza anytime"
};

var getBigBagel = function(obj) {
 var newObj = {};
  for (key in obj) {
    if(obj[key].length > 10) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(getBigBagel(bagelBites))
// 3 Create an function that returns a random number from the number's array
// and uses that number to print each key and value from the bagelBites object
// that number of times

var randNum = Math.floor(Math.Random() * numbers + 1);
console.log(randNum)

function printStuff() {
  var randNum = numbers[Math.floor(Math.random() * numbers.length + 1)]
  while (randNum > 0){
    for (var key in bagelBites){
      console.log(key + ": " + bagelBites[key]);
    }
    randNum --;
  }
}

printStuff();


// 4 Create an object called "bagelBitesWorld". This object should contain the
// numbers array, the bagelBites object, and the function you created in number 3
var bagelBitesWorld = {
  numbers: numbers,
  bagelBites: bagelBites,
  printStuff: printStuff() {
var randNum = numbers[Math.floor(Math.random() * numbers.length + 1)]
  while (randNum > 0){
    for (var key in bagelBites){
      console.log(key + ": " + bagelBites[key]);
    }
    randNum --;
  }
}
}




// 5 Write a constructor function which can make instances of a bagelBite. This constructor
// function should take in a type (pepperoni, cheese, sausage, etc) as an argument when
// creating a new bagelBite. Add the numbers array to this constructor and make each method you made
// in #4 a prototype method.

var bagelConstructor = function(type){
  this.type = type;
  this.numbers = numbers;
  this.bagelBites = bagelBites;

}

bagelConstructor.prototype.printBagels = function() {
  var randNum = thi.numbers[Math.floor(Math.random() * this.numbers.length)];
  while (randNum > 0){
    for (key in obj) {
      console.log(key + ": " + obj[key]);
    }
    randNum --;
  }
}

var pep = new bagelConstructor("pepperoni");
console.log(pep)


