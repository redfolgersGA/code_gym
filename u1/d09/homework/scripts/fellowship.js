console.log("followship.js loaded code_gym redo");


var makeMiddleEarth = function() {
  var middleEarthTag = $('<section id= "middle-earth"></section')
  lands.forEach(function(i){
    middleEarthTag.append('<article class= "land"><h1>' +i+ '</h1></article>')
    $('body div.overlay').append(middleEarthTag)
  })
  setTimeout(makeHobbits, 2000)
}
setTimeout(makeMiddleEarth, 2000)



var makeHobbits = function() {
  var createHobbits = $('<ul id="hobbits"></ul>')
  hobbits.forEach(function(i){
    createHobbits.append('<li class="hobbit">' + i + '</li>')


  })
  $('article.land').first().append(createHobbits)
  setTimeout(keepItSecretKeepItSafe, 2000)

}

var keepItSecretKeepItSafe = function() {
  var createDiv = $('<div id="the-ring"></div>')
  var frodo = $('li.hobbit').eq(0)
  createDiv.addClass("magic-imbued-jewelry");
  createDiv.click(nazgulScreech, frodoFades)

  function frodoFades(){
    frodo.fadeOut(3000, function(){
      frodo.fadeIn()
    })

  }

  $('li.hobbit').first().append(createDiv)
  setTimeout(makeBuddies, 2000)
}

var makeBuddies = function(){
  var createAside = $('<aside></aside>');
  var createUl = $('<ul id="buddies"></ul>')
  createAside.append(createUl)
  buddies.forEach(function(i){
    createUl.append('<li class="buddy">' + i + '</li>')
  })

  $('article.land').eq(1).append(createUl)
  setTimeout(beautifulStranger, 2000)

}

var beautifulStranger = function() {
  var striderBuddy = $('li.buddy').eq(3)
  striderBuddy.text('Aragon')
  striderBuddy.css("color", "green")
  setTimeout(leaveTheShire, 2000)
}

var leaveTheShire = function() {
  var assembledHobbits = $('li.hobbit');
  var rivendell = $('article.land').eq(1)

  rivendell.append(assembledHobbits)
  setTimeout(forgeTheFellowShip, 2000)

}

var forgeTheFellowShip = function(){
  var fellowShipDiv = $('<div id="the-fellowship"></div>')
  var rivendell = $('article.land').eq(1)
  var hobbitsSelected = $('li.hobbit');
  var buddiesSelected = $('li.buddy');

  rivendell.append(fellowShipDiv)

  hobbitsSelected.each(function(){
    $(this).appendTo(fellowShipDiv)
    alert($(this).text() + ' ' + 'has joined the party')

  })

  buddiesSelected.each(function(){
    $(this).appendTo(fellowShipDiv)
    alert($(this).text() + ' ' + 'has joined the party')
  })

  setTimeout(theBalrog, 2000)

}

var theBalrog = function(){
  var gandalf = $('li.buddy').eq(0)
  gandalf.text("Gandalf the White")
  gandalf.css({"border": "3px solid white"})
  setTimeout(hornOfGondor, 2000)
}

var hornOfGondor = function() {
  var boromir = $('li.buddy').eq(4)
  alert("the horn of Gondor has been blown!")
  boromir.css({"text-decoration": "line-through",
                "opacity": "0.3"})
  setTimeout(itsDangerousToGoAlone, 2000)
}

var itsDangerousToGoAlone = function(){
  var mordor = $('article.land').eq(2)
  var frodo = $('li.hobbit').eq(0)
  var sam = $('li.hobbit').eq(1)
  addsFrodoSam()

  function addsFrodoSam (){
    frodo.appendTo(mordor)
    sam.appendTo(mordor)
  }

  var mountDoom = $('<div id="mount-doom"></div>')
  mordor.append(mountDoom)

  setTimeout(weWantsIt, 2000)
}

var weWantsIt = function() {
  var gollumDiv = $('<div id="gollum"></div>')
  var mordor = $('article.land').eq(2)
  var frodoRing = $('div#the-ring')

  mordor.append(gollumDiv)
  gollumDiv.append(frodoRing)

  var mountDoom = $('div#mount-doom')
  mountDoom.append(gollumDiv)
  setTimeout(thereAndBackAgain, 2000)
}

var thereAndBackAgain = function(){
  var gollumDiv = $('div#gollum')
  var frodoRing = $('div#the-ring')
  var theShire = $('article.land').eq(0)
  var theHobbits = $('li.hobbit')
  var mordor = $('article.land').eq(2)

  gollumDiv.remove()

  theHobbits.appendTo(theShire)
  mordor.addClass("collapse")



}


























































