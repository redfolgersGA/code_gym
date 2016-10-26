/*//1.a) uses dot notation to access an item inside an item inside the variable
console.log(detectives.scully.name);
//1.b) dot notation used to access the object inside the variable then console log it.
for ( x in detectives.mulder) { console.log (detectives.mulder)}
//1.c)
console.log(detectives.mulder.name + ' and ' + detectives.scully.name
  + ', played by ' + detectives.mulder.actor + ' and ' +detectives.scully.actor
  + ', are detectives in the X-Files and Scully is a rebel.');
VM2204:1 Fox Mulder and Dana Scully, played by David Duchovny and Gillian Anderson,
are detectives in the X-Files and Scully is a rebel.


/*2.a and 2.b) an array with two objects in it... when var i is less than
readingList length add 1 to var i until var i is = to or greater than
readingList length...console will pass by each item in the array and
log the properties and titles for the index. the string 'by' is added in
between the readingList title and authors*/
/*for( var i = 0; i < readingList.length; i++) {
console.log(readingList[i].title + ' by '
+ readingList[i].author); }

/*2.c) if the property already read in the reading list === true(value)
 then
console will display that "you already read (insert reading list title)
' by ' (insert reading list author)if already read property in the reading list is not === true(value)
console will display "this book is great why havent you read
reading list title ' by' reading list author"*/

/*if (readingList[i].alreadyRead === true) {
  console.log ('You already read' + readingList[i].title + ' by ' + readingList[i].author);}

else { console.log ('This book is great! Why havent you read ' + readingList[i].title
  + ' by ' + readingList[i].author + ' yet! ');}

/* 3. */


/*var printOut = function (alien) { return (alien.title + ' directed by '
  + alien.director + ' and released in ' + alien.releaseYear
  + ' lasts for ' + alien.duration + ' minutes and stars ' + alien.stars);}

printOut(alien)

for(i=0; i < alien.length; i++) {
    stars += alien.stars[i] + ","
  }
*/

var subtitle = document.getElementById('subtitle');
console.log(subtitle);

var clickListItem = document.getElementById('clickListItem');
clickListItem.onclick = function() {
console.log("You have clicked the li with the text 'Click Me'")};




