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
// var body = document.querySelector('body');

// 1. body.innerHTML = '<section id="middle-earth">';
// "<section id="middle-earth">"

// var locate = document.querySelector("section");

// var makeMiddleEarth = function() {
//   for (var i = 0; i < lands.length; i++) {
//   var places = document.createElement('article');
//   places.innerHTML = "<h1>"+lands[i]+"</h1>"
//   locate.appendChild(places);
// }
// }

// makeMiddleEarth();

// 2.
// var listOfHobbits = document.querySelectorAll('article')[0];

// var createListOfHobbits = document.createElement('ul');

// for (i = 0; i < hobbits.length; i ++){
//     createListOfHobbits.innerHTML += '<li>' + hobbits[i] + '<li>';

//     }
//   listOfHobbits.appendChild(listOfHobbits);
// };
// makeHobbits();

// 3.
// var findFrodo = document.querySelectorAll('li')[0];
// var keepItSecretKeepItSafe = function(){
//     findFro.innerHTML += '<div class = "magic-imbued-jewelry" id = "the-ring"><div>';
// };

// var makeMiddleEarth = function(){
//   // create a section tag with an id of middle-earth
//   var sectionTag= document.createElement('section')
//   sectionTag.id="middle-earth"
//   var overlay = document.querySelector('.overlay')
//   document.body.insertBefore(sectionTag, overlay)
//   // add each land as an article tag
//   var articleTag1= document.createElement('article')
//   var articleTag2= document.createElement('article')
//   var articleTag3= document.createElement('article')
//   var sectionTagref= document.getElementById('middle-earth')

//   sectionTagref.appendChild(articleTag1)
//   sectionTagref.appendChild(articleTag2)
//   sectionTagref.appendChild(articleTag3)
//   console.log(sectionTagref)
//   // inside each article tag include an h1 with the name of each land
//   var land1H1 = document.createElement('h1');
//   var land2H1 = document.createElement('h1');
//   var land3H1 = document.createElement('h1');

//   var articleTagRef = document.getElementsByTagName('article')
//   console.log(articleTagRef)

//   for( i=0; i<articleTagRef.length; i++) {
//     articleTagRef[i].innerHTML = '<h1></h1>'

//   }

//   var landH1Ref = document.getElementsByTagName('h1');

//   console.log(landH1Ref);

//   landH1Ref[0].textContent= lands[0]
//   landH1Ref[1].textContent= lands[1]
//   landH1Ref[2].textContent= lands[2]

//   // append middle-earth to your document body
//   var middleEarth = document.getElementById('middle-earth')
//   document.body.appendChild(middleEarth)

// }

// makeMiddleEarth()

// var makeHobbits = function(){
//   // display an unordered list of hobbits in the shire (which is the second article tag on the page)
//   var secondArticleTag = document.querySelectorAll('article')[0];
//   console.log(secondArticleTag)
// var hobbits = [
//   'Frodo Baggins',
//   'Samwise \'Sam\' Gamgee',
//   'Meriadoc \'Merry\' Brandybuck',
//   'Peregrin \'Pippin\' Took'
// ];

//     var hobbit1 = document.createElement('li')
//     var hobbit2 = document.createElement('li')
//     var hobbit3 = document.createElement('li')
//     var hobbit4 = document.createElement('li')

//   secondArticleTag.append(hobbit1, hobbit2, hobbit3, hobbit4);



//   // give each hobbit a class of hobbit
//   hobbit1.className ="hobbit"
//   hobbit2.className ="hobbit"
//   hobbit3.className ="hobbit"
//   hobbit4.className ="hobbit"

//   hobbit1.textContent = hobbits[0];
//   hobbit2.textContent = hobbits[1];
//   hobbit3.textContent = hobbits[2];
//   hobbit4.textContent = hobbits[3];
// }
// makeHobbits()

// var keepItSecretKeepItSafe = function(){
//   // create a div with an id of 'the-ring'
//   var divTheRing = document.createElement('div');
//   divTheRing.id='the-ring';

//   // give the div a class of 'magic-imbued-jewelry'
//   divTheRing.className='magic-imbued-jewelry'
//   // add the ring as a child of Frodo
//   var frodo = document.querySelector('li');
//   frodo.appendChild(divTheRing);

// }
// keepItSecretKeepItSafe()

// var makeBuddies = function(){
//   // create an aside tag
//   var asideTag = document.createElement('aside');
//   // attach an unordered list of the 'buddies' in the aside
//   var asideTagUl = document.createElement('ul');
//   asideTag.appendChild(asideTagUl);
//   var buddy1 = document.createElement('li');
//   var buddy2 = document.createElement('li');
//   var buddy3 = document.createElement('li');
//   var buddy4 = document.createElement('li');
//   var buddy5 = document.createElement('li');

//   buddy1.textContent= buddies[0];
//   buddy2.textContent= buddies[1];
//   buddy3.textContent= buddies[2];
//   buddy4.textContent= buddies[3];
//   buddy5.textContent= buddies[4];



//   // asideTagUl.append(buddy1, buddy2, buddy3, buddy4, buddy5);
//   // insert your aside as a child element of rivendell
//   var secondArticleTag = document.getElementsByTagName('article')[1];
//   secondArticleTag.appendChild(asideTag);

//   var asideTagUlRef = document.querySelector('aside ul');
//   asideTagUlRef.append(buddy1, buddy2, buddy3, buddy4, buddy5)



//   // secondArticleTag.append(asideTag);
// }

// makeBuddies()

// var beautifulStranger = function(){
//   // change the 'Strider' textnode to 'Aragorn'
//   var secondArticleTag = document.getElementsByTagName('article')[1];
//   var asideTagUlRef = document.querySelector('aside ul');
//   var thirdLi = asideTagUlRef.querySelectorAll('li')[3];
//   thirdLi.textContent= 'Aragorn'

// }

// beautifulStranger()

// var leaveTheShire = function(){
//   // assemble the hobbits and move them to Rivendell

//   var hobbitsUl = document.querySelectorAll('article li.hobbit');
//   var removeHobbits = hobbitsUl.removeNode('li.hobbit')

//   var rivendellUl = document.querySelector('aside ul');






// }

// leaveTheShire()

var makeMiddleEarth = function() {
  var body = document.querySelector('body')
  var overlay = document.querySelector('.overlay')
  var section = document.createElement('section')
  section.id = 'middle-earth'
  console.log(section)

  for(i=0;i<lands.length;i++) {
    var landNames = document.createElement('article')
    landNames.innerHTML += '<h1>' + lands[i] + '</h1>'
    section.appendChild(landNames)
    body.insertBefore(section, overlay)

  }


}

makeMiddleEarth();


var makeHobbits = function() {
  var theShire = document.getElementsByTagName('article')[0]
  var ul = document.createElement('ul')
for(i=0;i<hobbits.length;i++) {
  var li = document.createElement('li')
  li.textContent = hobbits[i]
  ul.appendChild(li)
  theShire.appendChild(ul)

}
}

makeHobbits()

