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
var body = document.querySelector('body')


var makeMiddleEarth = function(){
  var sectionTag = document.createElement('section')
  sectionTag.setAttribute('id', 'middle-earth')
  console.log(sectionTag)

  for(var i=0; i<lands.length;i++){
   var articleTagForLand = document.createElement('article')
   var h1TagForArticle = document.createElement('h1')
   // var body = document.querySelector('body')

   articleTagForLand.appendChild(h1TagForArticle)

   h1TagForArticle.textContent =lands[i]
   console.log(articleTagForLand)
   sectionTag.appendChild(articleTagForLand)
  }
  body.appendChild(sectionTag)
}

makeMiddleEarth()

var makeHobbits = function(){
  var theShire = document.querySelector('article')
  var ulForTheShire = document.createElement('ul')

  theShire.appendChild(ulForTheShire)

  for(var i=0;i<hobbits.length;i++){
    var liForHobbits = document.createElement('li')
    liForHobbits.setAttribute('class', 'hobbit')
    liForHobbits.textContent = hobbits[i]

    ulForTheShire.appendChild(liForHobbits)

  }
}

makeHobbits()

var keepItSecretKeepItSafe = function(){
  var divForRing = document.createElement('div')
  divForRing.setAttribute('id', 'the-ring')
  divForRing.setAttribute('class', 'magic-imbued-jewelry')
  console.log(divForRing)

  var frodo = document.querySelectorAll('.hobbit')[0]
  frodo.appendChild(divForRing)


}

keepItSecretKeepItSafe()

let makeBuddies = () => {
  let rivendell = document.querySelectorAll('article')[1]
  let asideTagForBuddies = document.createElement('aside')
  let ulTagForBuddies = document.createElement('ul')

  asideTagForBuddies.appendChild(ulTagForBuddies)

  for(let i=0;i<buddies.length;i++){
    let liTagForBuddy = document.createElement('li')
    liTagForBuddy.textContent = buddies[i]

    asideTagForBuddies.appendChild(liTagForBuddy)
  }

  rivendell.appendChild(asideTagForBuddies)


}

makeBuddies()


let beautifulStranger = () => {
  let allHobbits = document.querySelectorAll('.hobbit')
  let rivendell = document.querySelectorAll('article')[1]

  for(let i=0;i<allHobbits.length;i++){
    rivendell.appendChild(allHobbits[i])


  }

}

beautifulStranger()

let forgeTheFellowShip = () =>{
  let rivendell = document.querySelectorAll('article')[1]
  let allMembers = document.querySelectorAll('li')

  let theFellowShipDiv = document.createElement('div')
  theFellowShipDiv.setAttribute('id', 'the-fellowship')
  rivendell.appendChild(theFellowShipDiv)

  for(let i=0;i<allMembers.length;i++){
    if(allMembers[i].classList[0] === undefined){
      allMembers[i].setAttribute('class', 'buddy')
    }

    theFellowShipDiv.appendChild(allMembers[i])

    // alert(`${allMembers[i].textContent} has joined the party`)



  }


}

forgeTheFellowShip()



// let theBalrog = () => {
//   let allMembers = document.querySelectorAll('li')
//   let gandalf = allMembers[0];

//   gandalf.textContent = "Gandalf the White"

// }

let theBalrog = () =>{
  let gandalf;
  let allMembers = document.querySelectorAll('li')

  for(let i=0;i<allMembers.length;i++){
    if(allMembers[i].textContent === 'Gandalf the Grey'){
      allMembers[i].textContent = 'Gandalf the White'
      allMembers[i].style.background = 'white'
      allMembers[i].style.border = '5px solid black'


    }

  }


}

theBalrog()

let hornOfGondor = () => {
  alert('the horn of gondor has been blown')
  let allMembers = document.querySelectorAll('li')
  let boromir;

  for(let i=0;i<allMembers.length;i++){
    if(allMembers[i].textContent === 'Boromir'){
      allMembers[i].style.textDecoration = 'line-through'
      boromir = allMembers[i]
    }
  }
  console.log(boromir)

  setTimeout(function(){
    boromir.remove()

  },2000)
}

hornOfGondor()

let itsDangerousToGoAlone = () => {
  let frodo = document.querySelectorAll('li.hobbit')[0];
  let sam = document.querySelectorAll('li.hobbit')[1];
  let mordor = document.querySelectorAll('article')[2];

  let mountDoomDiv = document.createElement('div')
  mountDoomDiv.setAttribute('id', 'mount-doom')
  mordor.appendChild(mountDoomDiv)



  mordor.appendChild(frodo)
  mordor.appendChild(sam)



  // console.log(frodo)
  // console.log(sam)

 }

itsDangerousToGoAlone()

let weWantsIt = () => {
  let gollumDiv = document.createElement('div')
  gollumDiv.setAttribute('id', 'gollum')

  let mordor = document.querySelectorAll('article')[2]
  mordor.appendChild(gollumDiv)

  let theRing = document.querySelector('.magic-imbued-jewelry')
  gollumDiv.appendChild(theRing)

  let mountDoom = document.querySelector('#mount-doom')
  mountDoom.appendChild(gollumDiv)
}

weWantsIt()

let thereAndBackAgain = () => {
  let gollumDiv = document.querySelector('#gollum')
  let theRing = document.querySelector('.magic-imbued-jewelry')
  let buddies = document.querySelectorAll('.buddy')
  let theShire = document.querySelectorAll('article')[0]
  let hobbits = document.querySelectorAll('.hobbit')

  for(let i=0;i<buddies.length;i++){
    buddies[i].remove()
  }

  gollumDiv.remove()
  theRing.remove()

  for(let i=0;i<hobbits.length;i++){
    theShire.appendChild(hobbits[i])


  }

}

thereAndBackAgain()














































// var makeMiddleEarth = function(){
//   var middleEarthSectionTag = document.createElement('section')
//   middleEarthSectionTag.setAttribute('id', 'middle-earth')
//   body.appendChild(middleEarthSectionTag)
//   var middleEarthSection = document.querySelector('#middle-earth')
//   console.log(middleEarthSectionTag)

//   lands.forEach(function(land){
//     var landsArticleTag = document.createElement('article')
//     landsArticleTag.innerHTML= "<h1>" + land + "</h1>"

//     middleEarthSection.appendChild(landsArticleTag)




//   })

//   console.log(middleEarthSection)



// }

// makeMiddleEarth()

// var makeHobbits = function() {
//   var theShire = document.querySelector('article')
//   var ulForHobbitsTag = document.createElement('ul')

//   hobbits.forEach(function(hobbit){
//     var liTagForHobbits = document.createElement('li')
//     liTagForHobbits.innerHTML = hobbit
//     liTagForHobbits.classList.add('hobbit')

//     ulForHobbitsTag.appendChild(liTagForHobbits)





//   })

//   theShire.appendChild(ulForHobbitsTag)

//   console.log(theShire)

// }

// makeHobbits()

// var keepItSecretKeepItSafe = function() {
//   var frodo = document.querySelector('li')
//   var theRingDiv = document.createElement('div')
//   theRingDiv.setAttribute('id', 'the-ring')
//   theRingDiv.classList.add("magic-imbued-jewelry")

//   frodo.appendChild(theRingDiv)

// }

// keepItSecretKeepItSafe()

// var makeBuddies = function(){
//   var rivendell = document.querySelectorAll('article')[1]
//   var asideTagForUl = document.createElement('aside')
//   var ulTagForBuddies = document.createElement('ulTagForBuddies')

//   buddies.forEach(function(buddy){
//     var liTagForBuddy = document.createElement('li')
//     liTagForBuddy.innerHTML = buddy
//     liTagForBuddy.classList.add('buddy')
//     ulTagForBuddies.appendChild(liTagForBuddy)
//   })

//   asideTagForUl.appendChild(ulTagForBuddies)

//   rivendell.appendChild(asideTagForUl)


// }

// makeBuddies()

// var beautifulStranger = function() {
//   var allLis = document.querySelectorAll('li')
//   var allLisArray = Array.from(allLis)

//   console.log(allLisArray)

//   for(var i=0 ; i < allLisArray.length; i++){
//     if(allLisArray[i].textContent === "Strider"){
//       alert('changing strider to aragorn')
//       allLisArray[i].textContent = 'Aragorn'
//     }
//   }

// }


// beautifulStranger()

// var leaveTheShire = function(){
//   var rivendell = document.querySelectorAll('article')[1]




//   var hobbitOne = document.querySelectorAll('li')[0]
//   var hobbitTwo= document.querySelectorAll('li')[1]
//   var hobbitThree = document.querySelectorAll('li')[2]
//   var hobbitFour = document.querySelectorAll('li')[3]


//   rivendell.appendChild(hobbitOne)
//   rivendell.appendChild(hobbitTwo)
//   rivendell.appendChild(hobbitThree)
//   rivendell.appendChild(hobbitFour)






//   // console.log(allHobbits)
// }

// leaveTheShire()

// var forgeTheFellowShip = function() {
//   var theFellowShipDiv = document.createElement('div')
//   var allLis = document.querySelectorAll('li')
//   var rivendell = document.querySelectorAll('article')[1]

//   rivendell.appendChild(theFellowShipDiv)

//   for(var i=0; i < allLis.length; i++){
//     theFellowShipDiv.appendChild(allLis[i])
//     alert(allLis[i].textContent + " has joined the party")

//   }
// }

// forgeTheFellowShip()

// var theBalrog = function(){
//   var allLis = document.querySelectorAll('li')

//   for(var i=0; i<allLis.length;i++){
//     if(allLis[i].textContent === "Gandalf the Grey"){
//       alert("gandalf is white now")
//       allLis[i].textContent = "Gandalf the White"
//       allLis[i].setAttribute("style", "border: 1px solid grey; background: white")

//     }
//   }
// }

// theBalrog()

// var hornOfGondor = function () {
//   alert("the horn of gondor has been blown")
//   alert("boromir has been killed by the uruk hai")

//   var allLis = document.querySelectorAll('li')

//   for(var i=0;i<allLis.length;i++){
//     if(allLis[i].textContent === "Boromir"){
//       allLis[i].setAttribute("style", "text-decoration: line-through")
//     }
//   }


// }

// hornOfGondor()

// var itsDangerousToGoAlone = function(){
//   var allLis = document.querySelectorAll('li')
//   var mordor = document.querySelectorAll('article')[2]

//   for(var i=0; i<allLis.length; i++){
//     if(allLis[i].textContent === "Frodo Baggins" || allLis[i].textContent === 'Samwise \'Sam\' Gamgee'){

//       mordor.appendChild(allLis[i])

//     }
//   }
// }

// itsDangerousToGoAlone()

// var weWantsIt = function(){
//   var gollumDiv = document.createElement('div')
//   gollumDiv.setAttribute('id', 'gollum')
//   var mordor = document.querySelectorAll('article')[2]
//   var frodo = document.querySelectorAll('li')[7]
//   var theRing = document.querySelector('#the-ring')

//   mordor.appendChild(gollumDiv)

//   gollumDiv.appendChild(theRing)
// }

// weWantsIt()

// var thereAndBackAgain = function(){
//   var gollum = document.querySelector('#gollum')
//   var buddies = document.querySelectorAll('.buddy')
//   var hobbits = document.querySelectorAll('.hobbit')
//   var theShire = document.querySelector('article')



//   gollum.remove()

//   for(var i= 0; i<buddies.length; i++){

//     buddies[i].remove()
//   }


//   for(var i=0; i<hobbits.length; i++){

//     theShire.appendChild(hobbits[i])
//   }

// }

// thereAndBackAgain()


// var makeMiddleEarth = function() {
//   var middleEarthSectionTag = document.createElement('section')

//   for(var i = 0; i < lands.length; i++){
//     var landsArticle = document.createElement('article')
//     landsArticle.innerHTML = "<h1>" + lands[i] + "</h1>"
//     middleEarthSectionTag.appendChild(landsArticle)


//   }
//   body.appendChild(middleEarthSectionTag)


// }

// makeMiddleEarth()

// var makeHobbits = function(){
//   var theShire = document.querySelector('h1')
//   var ulForHobbits = document.createElement('ul')
//   theShire.appendChild(ulForHobbits)

//   for(var i =0; i < hobbits.length; i++){
//     var liTag = document.createElement('li')
//     ulForHobbits.appendChild(liTag)

//     liTag.textContent = hobbits[i]
//     liTag.className = "hobbit"


//   }





// }

// makeHobbits()


// var keepItSecretKeepItSafe = function() {
//   var theRingDiv = document.createElement('div')
//   theRingDiv.setAttribute('id', 'the-ring')
//   theRingDiv.className ='magic-imbued-jewelry'
//   var frodo = document.querySelector('li.hobbit')
//   frodo.append(theRingDiv)

// }

// keepItSecretKeepItSafe()

// var makeBuddies = function() {
//   var asideTag = document.createElement('aside')
//   var ulTagForBuddies = document.createElement('ul')
//   var rivendell = document.querySelectorAll('h1')[1]

//   for(var i = 0; i < buddies.length; i++) {
//     var liTagForBuddy = document.createElement('li')
//     liTagForBuddy.textContent = buddies[i]
//     ulTagForBuddies.appendChild(liTagForBuddy)
//     liTagForBuddy.className = "buddy"
//   }
//   rivendell.appendChild(ulTagForBuddies)
// }

// makeBuddies()

// var beautifulStranger = function() {
//   var rivendell = document.querySelectorAll('h1')[1]
//   rivendell.querySelectorAll('li').forEach(function(li){
//     if(li.textContent === "Strider"){li.textContent = "Aragron"}})
// }

// beautifulStranger()

// var leaveTheShire = function(){
//   // grabs a nodelist/array of hobbits
//   var hobbits = document.querySelectorAll('li.hobbit')
//   // grabs the rivendellUL Node

//   var rivendell = document.querySelectorAll('ul')[1]
//   // use for loop to iterate/select each individual hobbit and append it to rivendell Ul
//   for(var i = 0; i < hobbits.length; i++){
//     rivendell.appendChild(hobbits[i])
//   }

// }

// leaveTheShire()


// var forgeTheFellowShip = function() {
//   var theFellowShipDiv = document.createElement('div')
//   var rivendellUl = document.querySelectorAll('ul')[1]
//   rivendellUl.appendChild(theFellowShipDiv)
//   var hobbits = document.querySelectorAll('li.hobbit')
//   var buddies = document.querySelectorAll('li.buddy')

//   for(var i = 0; i < hobbits.length; i++){
//     theFellowShipDiv.appendChild(hobbits[i])
//     // alert(hobbits[i].textContent + " has joined the party")

//   }



//   for(var i = 0; i < buddies.length; i++){
//     theFellowShipDiv.appendChild(buddies[i])
//     // alert(buddies[i].textContent + " has joined the party")
//   }

// }

// forgeTheFellowShip()

// var theBalrog = function() {
//   var buddies = document.querySelectorAll('li.buddy')[0]
//   buddies.textContent = 'Gandlaf the White'
//   buddies.style.background = 'white'
//   buddies.style.border = "thick solid #0000FF"
// }

// theBalrog()

// var hornOfGondor = function() {
//   alert("the horn of Gondor has been BLOWN!")
//   var boromir = document.querySelectorAll('li.buddy')[4]
//   boromir.style.textDecoration = "line-through"
//   boromir.remove()
// }

// hornOfGondor()

// var itsDangerousToGoAlone = function () {
//   var frodo = document.querySelectorAll('li.hobbit')[0]
//   var sam = document.querySelectorAll('li.hobbit')[1]
//   var mordor = document.querySelectorAll('h1')[2]
//   var mountDoomDiv = document.createElement('div')

//   mountDoomDiv.setAttribute('id', 'mount-doom')
//   mordor.appendChild(mountDoomDiv)

//   mordor.appendChild(frodo)
//   mordor.appendChild(sam)
//   console.log(mountDoomDiv)
// }


// itsDangerousToGoAlone()

// var weWantsIt = function(){
//   var gollumDiv = document.createElement('div')

//   var frodo = document.querySelectorAll('li.hobbit')[2]
//   gollumDiv.setAttribute('id', 'gollum')
//   var mordor = document.querySelectorAll('h1')[2]
//   var theRing = document.querySelector('#the-ring')

//   mordor.appendChild(gollumDiv)
//   gollumDiv.appendChild(theRing)
//   console.log(gollumDiv)






// }

// weWantsIt()

// var thereAndBackAgain = function() {
//   var gollum = document.querySelector('#gollum')
//   var theRing = document.querySelector('#the-ring')
//   var buddies = document.querySelectorAll('li.buddy')
//   var hobbits = document.querySelectorAll('li.hobbit')
//   var theShire = document.querySelector('h1')

//   gollum.remove()
//   for(var i = 0; i < buddies.length; i++){
//     buddies[i].remove()
//   }

//   for(var i = 0; i < hobbits.length; i++){
//     theShire.appendChild(hobbits[i])
//   }
// }

// thereAndBackAgain()























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

// var makeMiddleEarth = function() {
//   var body = document.querySelector('body')
//   var overlay = document.querySelector('.overlay')
//   var section = document.createElement('section')
//   section.id = 'middle-earth'
//   console.log(section)

//   for(i=0;i<lands.length;i++) {
//     var landNames = document.createElement('article')
//     landNames.innerHTML += '<h1>' + lands[i] + '</h1>'
//     section.appendChild(landNames)
//     body.insertBefore(section, overlay)

//   }


// }

// makeMiddleEarth();


// var makeHobbits = function() {
//   var theShire = document.getElementsByTagName('article')[0]
//   var ul = document.createElement('ul')
// for(i=0;i<hobbits.length;i++) {
//   var li = document.createElement('li')
//   li.textContent = hobbits[i]
//   ul.appendChild(li)
//   theShire.appendChild(ul)

// }
// }

// makeHobbits();

// var keepItSecretKeepItSafe = function () {
//   var ringDiv = document.createElement('div');
//   ringDiv.id = 'the-ring'
//   ringDiv.className = 'magic-imbued-jewelry'
//   console.log(ringDiv)
//   var frodo = document.querySelector('li')
//   frodo.appendChild(ringDiv)
// }

// keepItSecretKeepItSafe();

// var makeBuddies = function () {
//   var rivendell = document.getElementsByTagName('article')[1]
//   var asideTag = document.createElement('aside')
//   var buddyUl = document.createElement('ul')
//   for(i=0;i<buddies.length;i++){
//     var buddyli = document.createElement('li')
//     buddyli.textContent = buddies[i]
//     buddyUl.appendChild(buddyli)
//     asideTag.appendChild(buddyUl)
//     rivendell.appendChild(asideTag)

//   }

// }

// makeBuddies()

// var beautifulStranger = function () {
//   var aragorn = 'Aragorn'
//   var strider = document.getElementsByTagName('li')[7]
//   strider.textContent = aragorn
// }

// beautifulStranger()

// var leaveTheShire = function () {
//   // select hobbits
//   var hobbits = document.querySelector('article ul')
//   // select buddies ul
//   var buddiesUl = document.querySelector('aside ul')
//   console.log(buddiesUl)
//   buddiesUl.appendChild(hobbits)

// }


// leaveTheShire()

// var forgeTheFellowShip = function() {
//   // create a new div called 'the-fellowship' within rivendell
//   // add each hobbit and buddy one at a time to 'the-fellowship'
//   // after each character is added make an alert that they have joined your party
//   var rivendell = document.querySelectorAll('article')[1]
//   var hobbitsAndBuddies = document.querySelectorAll('aside ul li')

//   var theFellowShipDiv = document.createElement('div')
//   theFellowShipDiv.id = 'the-fellowship'

//   rivendell.appendChild(theFellowShipDiv)

//   for(i=0; i<hobbitsAndBuddies.length;i++){
//     theFellowShipDiv.appendChild(hobbitsAndBuddies[i])
//     // alert(hobbitsAndBuddies[i].textContent + " has joined your party")

//   }




// }

// forgeTheFellowShip()

// var theBalrog = function () {
//   var theFellowShip = document.getElementById('the-fellowship')
//   var gandalf = theFellowShip.querySelectorAll('li')[0]
//   gandalf.textContent = 'Gandalf the White'
//   gandalf.style.cssText = "background: white"
//   gandalf.style.cssText = "border: 1px solid grey"

// }

// theBalrog()

// var hornOfGondor = function () {
//   var boromir = document.getElementsByTagName('li')[4]
//   // alert("the horn of Gondor has been blown")

//   boromir.style.cssText = "text-decoration: line-through"
//   boromir.remove()


// }

// hornOfGondor()

// var itsDangerousToGoAlone = function () {
//   // take Frodo and Sam out of the fellowship and move them to Mordor
//   // add a div with an id of 'mount-doom' to Mordor
//   var frodo = document.querySelectorAll('li')[4]
//   var sam = document.querySelectorAll('li')[5]
//   var mordor = document.querySelectorAll('article')[2]

//   mordor.appendChild(sam)
//   mordor.appendChild(frodo)

//   var mountDoom = document.createElement('div')
//   mountDoom.id = 'mount-doom'
//   mordor.appendChild(mountDoom)

// }

// itsDangerousToGoAlone()

// var weWantsIt = function () {
//   // Create a div with an id of 'gollum' and add it to Mordor
//   // Remove the ring from Frodo and give it to Gollum
//   // Move Gollum into Mount Doom
//   var mordor = document.querySelectorAll('article')[2]
//   var mountDoom = document.querySelector('#mount-doom')
//   var gollumDiv = document.createElement('div')
//   gollumDiv.id = 'gollum'

//   mordor.appendChild(gollumDiv)

// var theRing = document.querySelector('#the-ring')
// gollumDiv.appendChild(theRing)
// mountDoom.appendChild(gollumDiv)



// }

// weWantsIt()

// var thereAndBackAgain = function () {
//   var gollum = document.getElementById('gollum')
//   var theRing = document.querySelector('#the-ring')

//   gollum.remove()
//   theRing.remove()

//   var buddies = document.querySelectorAll('#the-fellowship li')
//   for(i=0;i<4;i++){
//     buddies[i].remove()
//   }

//   var theShire = document.querySelector('article')
//   var hobbits = document.querySelectorAll('#the-fellowship li')
//   var theShireUl = document.createElement('ul')
//   theShire.appendChild(theShireUl)



//   theShire.appendChild(hobbits)

// }

// thereAndBackAgain()

