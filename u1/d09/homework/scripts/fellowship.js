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

























