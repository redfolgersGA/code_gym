console.log("followship.js loaded");



var makeMiddleEarth = function() {
//adding a section tag via .append to the body of my html document
//the section tag has an id called "middle-earth". this is jquery syntax
var $midEarth = $("<section id = 'middle-earth'></section>")
// Create an article tag for each land in the lands array in characters.js
lands.forEach(function(i){
  $midEarth.append("<article class= 'land'><h1>"+ i +"</h1></article>")

});
$('body div.overlay').append($midEarth)

  // Give each article tag a class of "land"
  // Inside each article tag include an h1 with the name of the land
  // Append each article.land to section#middle-earth
  // Append section#middle-earth to the document body
  // Use setTimeout to delay the execution of the next function (in this case,
  // makeHobbits) by several seconds
  setTimeout(makeHobbits, 2000)

}

var makeHobbits = function() {
  // Create a ul with an id of "hobbits"
  var $hobbitz = $('<ul id="hobbits"></ul>')
  // Create li tags for each Hobbit in the hobbits array in characters.js
  hobbits.forEach(function(i){
    $hobbitz.append("<li class='hobbit'>"+ i +"</li>")
  })

$('article.land').first().append($hobbitz)
  // Give each li tag a class of "hobbit"
  // Set the text of each li.hobbit to one of the Hobbits in the array
  // Append the ul#hobbits to the article.land representing "The Shire"
  // (the first article tag on the page)
  setTimeout(keepItSecretKeepItSafe, 2000);

}

var keepItSecretKeepItSafe = function() {
  // Create a div with an id of 'the-ring'
  var $daRing = $('<div id="the-ring"></div>');
  // Give div#the-ring a class of 'magic-imbued-jewelry'
  $daRing.addClass('magic-imbued-jewelry');
  // Add an event listener so that when a user clicks on the ring,
  // The nazgulScreech function (provided in index.html) is invoked
  $daRing.on("click", nazgulScreech)
  // look up .click() - https://api.jquery.com/click/ in the jQuery docs to see how this works
  // it'll look like target.click(nazgulScreech)
  // bit of a freebie since we're not covering events until tomorrow
  // Add div#the-ring as a child element of the li.hobbit representing "Frodo"
  $('li.hobbit').first().append($daRing)
  // Use setTimeout to delay the execution of the next function
  setTimeout(makeBuddies, 2000);
}

var makeBuddies = function() {
  // Create an aside tag
  var $aSideTag = $('<aside></aside>')
  // Create a ul tag with an id of "buddies" and append it to the aside tag
  var $ulTag = $('<ul id="buddies"></ul>').appendTo($aSideTag)
  // Create li tags for each buddy in the buddies array in characters.js
  buddies.forEach(function(i){
    $($ulTag).append('<li class="buddies">'+ i +'</li>')
  })
  // give each li tag a class of "buddy" and append them to "ul#buddies"
  // Insert the aside tag as a child element of the section.land representing "Rivendell"
  $('article.land').eq(1).append($aSideTag)
  // Use setTimeout to delay the execution of the next function
  setTimeout(beautifulStranger, 2000);
}

var beautifulStranger = function() {
  // Find the li.buddy representing "Strider"
  var $strider = $('li.buddies').eq(3)
  $strider.text('Aragorn').css({color: 'green'})
  // Change the "Strider" textnode to "Aragorn" and make its text green
  // Use setTimeout to delay the execution of the next function
  setTimeout(leaveTheShire, 2000);
}

var leaveTheShire = function() {
  // Assemble the Hobbits and move them to Rivendell
  var $rivendell = $('article.land:nth-child(2) h1')
  $rivendell.after($('ul#hobbits'));
  // Use setTimeout to delay the execution of the next function
  setTimeout(forgeTheFellowShip, 2000)
}

var forgeTheFellowShip = function() {
  // Create a div with an id of 'the-fellowship' within the section.land for "Rivendell"
  var $fellowship = $('<div id="the-fellowship"></div>')
  // Add each hobbit and buddy one at a time to 'div#the-fellowship'
  var $hobbitz = $('ul#hobbits')
  Array.from($hobbitz).forEach(function(i){
    $($fellowship).append($hobbitz+i)

  })

  // After each character is added make an alert that they have joined your party
  // Use setTimeout to delay the execution of the next function by several seconds
}







setTimeout(makeMiddleEarth, 2000)



