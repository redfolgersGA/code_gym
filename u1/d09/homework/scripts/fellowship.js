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
  createDiv.addClass("magic-imbued-jewelry");
  createDiv.click(nazgulScreech)
  createDiv.appendTo('li.hobbit').first()
}





























































