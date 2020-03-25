console.log("fellowship.js loaded code_gym redo");


var body = $('body')

var makeMiddleEarth = function (){
  var sectionTag = $('<section id="middle-earth"></section>')

  for(var i=0;i<lands.length;i++){
    var articleTag = $('<article>' + lands[i] + '</article>')
    articleTag.attr('class', 'land')
    articleTag.html("<h1>" + lands[i] + "</h1>")

    sectionTag.append(articleTag)



  }

  body.append(sectionTag)








}

makeMiddleEarth()

var makeHobbits = function(){
  console.log("makehobbits")
  var theShire = $('article.land').eq(0)
  var ulTagForHobbits = $('<ul></ul>')
  ulTagForHobbits.attr('id', 'hobbits')



  // hobbits.forEach(function(hobbit){

  //   var liTagForHobbit = $('<li>' + hobbit + '</li>')
  //   console.log(liTagForHobbit)
  //   liTagForHobbit.text(hobbit)
  //   liTagForHobbit.attr('class', 'hobbit')

  //   ulTagForHobbits.append(liTagForHobbit.text())

  //   theShire.append(ulTagForHobbits)

  // })

  for(var i=0;i<hobbits.length;i++){
     // var liTagForHobbit = $('<li>' + hobbits[i] + '</li>')
     // liTagForHobbit.attr('class', 'hobbit')

     ulTagForHobbits.append('<li class = "hobbit">' + hobbits[i] + '</li>')


  }

  theShire.append(ulTagForHobbits)



}

// function makeHobbits () {
//   var theShire = $('article.land').eq(0)
//   var hobbitsUl = $('<ul></ul>')
//   hobbitsUl.attr('id', 'hobbits')

//   console.log(hobbitsUl)

//   for(var i =0; i < hobbits.length; i++){
//     hobbitsUl.append('<li class=hobbit>' + hobbits[i] + '</li>')
//   }

//   theShire.append(hobbitsUl)

//   setTimeout(keepItSecretKeepItSafe, 2000)

// }

makeHobbits()






















// 3/25/2020-------------------------------------------------------------------------

// var body = $('body')



// var makeMiddleEarth = function(){
//   var middleEarth = $('<section></section>')
//   middleEarth.attr('id', 'middle-earth')

//   for(var i = 0; i < lands.length; i++){
//     middleEarth.append('<article class ="land"><h1>' + lands[i] + '</h1></article>')



//   }
//   body.append(middleEarth)
//   setTimeout(makeHobbits, 2000)


// }


// makeMiddleEarth()

// function makeHobbits () {
//   var theShire = $('article.land').eq(0)
//   var hobbitsUl = $('<ul></ul>')
//   hobbitsUl.attr('id', 'hobbits')

//   console.log(hobbitsUl)

//   for(var i =0; i < hobbits.length; i++){
//     hobbitsUl.append('<li class=hobbit>' + hobbits[i] + '</li>')
//   }

//   theShire.append(hobbitsUl)

//   setTimeout(keepItSecretKeepItSafe, 2000)

// }


// //   function makeHobbits() {
// //   var theShire = $('article.land').first()
// //   var hobbitUl = $('<ul id=hobbits></ul>')
// //   for(i=0;i<hobbits.length;i++){
// //     hobbitUl.append('<li class="hobbit">' + hobbits[i] + '</li>')

// //   }
// //   theShire.append(hobbitUl)
// //   // setTimeout(keepItSecretKeepItSafe, 2000)
// // }

// var keepItSecretKeepItSafe = function() {
// var body = $('body')
// var clickCounter = 0
// var frodo = $('li.hobbit').eq(0)
// var theRingDiv = $('<div id="the-ring"</div>')
// theRingDiv.attr('class', 'magic-imbued-jewelry')
// theRingDiv.click(function(){
//   clickCounter++
//   if(clickCounter >= 3){

//     body.text('The world is over')
//   }else {
//   nazgulScreech()
//   frodo.fadeOut(1000, function(){
//   frodo.fadeIn(1000)
//   })

//   }
//   console.log(clickCounter)

// })

// frodo.append(theRingDiv)

// setTimeout(makeBuddies, 2000)
// }

// var makeBuddies = function(){
//   var rivendell = $('article.land').eq(1)
//   var asideTagForBuddies = $('<aside></aside>')
//   var ulTagForBuddies = $('<ul></ul>')
//   ulTagForBuddies.attr('id', 'buddies')

//   asideTagForBuddies.append(ulTagForBuddies)
//   console.log(asideTagForBuddies)

//   for(var i =0; i<buddies.length;i++){
//     var buddyLi = $('<li></li>')
//     buddyLi.attr('class', 'buddy')
//     buddyLi.text(buddies[i])

//     ulTagForBuddies.append(buddyLi)
//   }
//   rivendell.append(ulTagForBuddies)

//   setTimeout(beautifulStranger, 2000)
// }

// var beautifulStranger = function(){
//   var green = "green"
//   var strider = $('li.buddy').eq(3)
//   strider.text('Aragorn')
//   strider.css('color', green)

//   setTimeout(leaveTheShire, 2000)

// }

// var leaveTheShire = function(){
//   var hobbits = $('li.hobbit')
//   var rivendell = $('article.land').eq(1)

//   for(var i=0; i < hobbits.length; i++){
//     rivendell.append(hobbits[i])
//     console.log(hobbits[i].innerText + " has arrived!")

//   }

//   setTimeout(forgeTheFellowship, 2000)
// }

// var forgeTheFellowship = function() {
//   var theFellowshipDiv = $('<div id=the-fellowship></div>')
//   var rivendell = $('article.land').eq(1)
//   var hobbits = $('li.hobbit')
//   var buddies = $('li.buddy')

//   rivendell.append(theFellowshipDiv)

//   for(var i = 0; i < hobbits.length; i++){
//     theFellowshipDiv.append(hobbits[i])
//     alert(hobbits[i].innerText + ' has joined the party')
//   }

//   for(var i = 0; i < buddies.length; i++){
//     theFellowshipDiv.append(buddies[i])
//     alert(buddies[i].innerText + ' has joined the party')
//   }

//   setTimeout(theBalrog, 2000)
// }

// var theBalrog = function() {
//   var gandalf = $('li.buddy').eq(0)

//   gandalf.text("Gandlaf the White")
//   gandalf.css("border", "3px solid white")

//   setTimeout(hornOfGondor, 2000)
// }

// var hornOfGondor = function(){
//   alert("The Horn of Gondor has been blown")
//   var boromir = $('li.buddy').eq(4)

//   boromir.css("text-decoration", "line-through")
//   boromir.css("opacity", "0.3")

//   setTimeout(itsDangerousToGoAlone, 2000)
// }

// var itsDangerousToGoAlone = function(){
//   var frodo = $('li.hobbit').eq(0)
//   var mcGee = $('li.hobbit').eq(1)
//   var mordor = $('article.land').eq(2)

//   mordor.append(frodo)
//   mordor.append(mcGee)

//   var mountDoom = $('<div id=mount-doom></div>')

//   mordor.append(mountDoom)

//   setTimeout(weWantsIt, 2000)
// }

// var weWantsIt = function(){
//   var gollum = $('<div id=gollum></div>')
//   var theRing = $('div#the-ring')
//   var mountDoom = $('div#mount-doom').eq(0)

//   gollum.append(theRing)
//   mountDoom.append(gollum)

//   setTimeout(thereAndBackAgain, 2000)
// }

// var thereAndBackAgain = function(){
//   var gollum = $('div#gollum')
//   var theRing = $('div#the-ring')
//   var hobbits = $('li.hobbit')
//   var theShire = $('article.land').eq(0)
//   var mordor = $('article.land').eq(2)

//   gollum.remove()

//   theShire.append(hobbits)
//   mordor.attr('class', 'collapse')

// }



















