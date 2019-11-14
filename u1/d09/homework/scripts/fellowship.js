console.log("fellowship.js loaded code_gym redo");

var body = $('body')



var makeMiddleEarth = function(){
  var middleEarth = $('<section></section>')
  middleEarth.attr('id', 'middle-earth')

  for(var i = 0; i < lands.length; i++){
    middleEarth.append('<article class ="land"><h1>' + lands[i] + '</h1></article>')



  }
  body.append(middleEarth)
  setTimeout(makeHobbits, 2000)


}


makeMiddleEarth()

function makeHobbits () {
  var theShire = $('article.land').eq(0)
  var hobbitsUl = $('<ul></ul>')
  hobbitsUl.attr('id', 'hobbits')

  console.log(hobbitsUl)

  for(var i =0; i < hobbits.length; i++){
    hobbitsUl.append('<li class=hobbit>' + hobbits[i] + '</li>')
  }

  theShire.append(hobbitsUl)

  setTimeout(keepItSecretKeepItSafe, 2000)

}


//   function makeHobbits() {
//   var theShire = $('article.land').first()
//   var hobbitUl = $('<ul id=hobbits></ul>')
//   for(i=0;i<hobbits.length;i++){
//     hobbitUl.append('<li class="hobbit">' + hobbits[i] + '</li>')

//   }
//   theShire.append(hobbitUl)
//   // setTimeout(keepItSecretKeepItSafe, 2000)
// }

var keepItSecretKeepItSafe = function() {
var frodo = $('li.hobbit').eq(0)
var theRingDiv = $('<div id="the-ring"</div>')
theRingDiv.attr('class', 'magic-imbued-jewelry')
theRingDiv.click(nazgulScreech)
frodo.append(theRingDiv)

setTimeout(makeBuddies, 2000)
}

var makeBuddies = function(){
  var rivendell = $('article.land').eq(1)
  var asideTagForBuddies = $('<aside></aside>')
  var ulTagForBuddies = $('<ul></ul>')
  ulTagForBuddies.attr('id', 'buddies')

  asideTagForBuddies.append(ulTagForBuddies)
  console.log(asideTagForBuddies)

  for(var i =0; i<buddies.length;i++){
    var buddyLi = $('<li></li>')
    buddyLi.attr('class', 'buddy')
    buddyLi.text(buddies[i])

    ulTagForBuddies.append(buddyLi)
  }
  rivendell.append(ulTagForBuddies)

}





















