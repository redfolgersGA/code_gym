console.log("Linked.");

// Our heros
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];


// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using query selector
var body = document.querySelector('body');

1. body.innerHTML = '<section id="middle-earth">';
"<section id="middle-earth">"

var locate = document.querySelector("section");

var makeMiddleEarth = function() {
  for (var i = 0; i < lands.length; i++) {
  var places = document.createElement('article');
  places.innerHTML = "<h1>"+lands[i]+"</h1>"
  locate.appendChild(places);
}
}

makeMiddleEarth();

2.
var listOfHobbits = document.querySelectorAll('article')[0];

var createListOfHobbits = document.createElement('ul');

for (i = 0; i < hobbits.length; i ++){
    createListOfHobbits.innerHTML += '<li>' + hobbits[i] + '<li>';

    }
  listOfHobbits.appendChild(listOfHobbits);
};
makeHobbits();

3.
var findFrodo = document.querySelectorAll('li')[0];
var keepItSecretKeepItSafe = function(){
    findFro.innerHTML += '<div class = "magic-imbued-jewelry" id = "the-ring"><div>';
};



