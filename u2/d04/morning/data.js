////////////////////////////////////////////////
// Data
////////////////////////////////////////////////

var mulder = [
  "James",
  "Puneet",
  "Xinke",
  "Mazhar",
  "Mariam",
  "Vanice",
  "Justin",
  "Bryan",
  "Glenn",
  "Jennifer",
  "Leslie",
  "Fariha",
  "Daniel",
  "Nick",
  "Marcela",
  "Michael",
  "Robert",
  "Michelle",
  "Marcos",
  "Dom"
];

var scully = [
  "Kasaun",
  "Miko",
  "Connie",
  "Hillary",
  "Kristi",
  "Matt",
  "Malik",
  "Taylor",
  "Wynter",
  "Ta",
  "Emmanuel",
  "Jayan",
  "Justin",
  "Carson",
  "Laura",
  "Bairon",
  "Jonathan"
];

var slips = [
  "Array.map()",
  "Array.filter()",
  "Array.reduce()",
  "JSON.stringify()",
  "this keyword. how does it relate to objects?",
  "AJAX",
  "JSON",
  "NaN - what does it mean? what data type is it?",
  "for in loops with objects",
  "Array.every()",
  "Array.concat()",
  "String.match()",
  "String.endsWith()",
  "String.startsWith()",
  "Constructor Functions",
  "Javscript Ternary Operator",
  "Javscript Date object",
  "CSS Keyframe Animation",
  "Skeleton CSS",
  "jQuery - .text() vs .val()",
  "!= vs. !==",
  "Switch Statement",
  "Callback Functions"
];

////////////////////////////////////////////////
// LOGIC
////////////////////////////////////////////////

// .shuffle
Array.prototype.shuffle = function() {
  for (var i = this.length-1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
}

// .zip
var zip = function(students, values) {
  hashName = {};
  if (students.length !== values.length) {
    console.log("Warning! ARRAYS NOT NOT EQUAL LENGTHS");
  } 

  for (var i = 0; i < students.length; i++) {
    hashName[students[i]] = values[i];
  }
  return hashName;
  
}

////////////////////////////////////////////////
// randomly pair students with slips, and print
////////////////////////////////////////////////

// shuffle students array
var shuffledMulder = mulder.shuffle();
var shuffledScully = scully.shuffle();

// shuffle slips array
var shuffledSlips = slips.shuffle();

// combine students & slips into object
var slippinMulder = function() {
  console.log(zip(shuffledMulder, shuffledSlips));
}
var slippinScully = function() {
  console.log(zip(shuffledScully, shuffledSlips));
}

var classSlips = {scully: slippinScully(), mulder: slippinMulder()}

module.exports = classSlips; 

// to use: run node data.js classSlips.mulder 
