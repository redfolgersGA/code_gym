// console.log("linked")

// var detectives = {
//   mulder: {
//     name: "Fox Mulder",
//     actor: "David Duchovny",
//     school: "Oxford",
//     degree: "Pscychology",
//     skills: "kung fu"
//   },
//   scully: {
//     name: "Dana Scully",
//     actor: "Gillian Anderson",
//     school: "University of Maryland",
//     degree: "Physics"
//   }
// };

// console.log(detectives.scully.name)

// for( var property in detectives.mulder){
//   console.log(detectives.mulder[property])
//   console.log("this is the " + property)


// }

// console.log(detectives.mulder.name + " and " + detectives.scully.name +", played by " +
//   detectives.mulder.actor + " and " + detectives.scully.actor + ", are detectives in the X-files")

// var readingList = [
//   {
//     title: "The Happiness Hypothesis",
//     author: "Jonathon Haidt",
//     alreadyRead: true
//   },

//   {
//     title: "The Power of Now",
//     author: "Eckhart Tolle",
//     alreadyRead: false

//   }



// ];

// for(i=0;i<readingList.length;i++){
//   console.log(readingList[i].title + " by " + readingList[i].author)

//   if(readingList[i].alreadyRead === true) {
//     console.log("You already read " + readingList[i].title)
//   } else {
//     console.log("You still need to read " + readingList[i].title)
//   }
// }

// // Create an object to store the following information about your favorite movie: title
// // (a string), director (a string), duration in minutes (a number), release year (a number),
// // and stars (an array of strings).

// var favoriteMovie = {
//   title: "Fight Club",
//   director: "David Fincher",
//   durationInMinutes: 150,
//   releaseYear: 1999,
//   stars: ["Brad Pitt", "Edward Norton", "Helen Bonham Carter"]

// };

// console.log(favoriteMovie.stars[0])

// function logFavoriteMovie (obj) {
//   var starsInMovie = favoriteMovie.stars[0]
//   for(i=1;i<favoriteMovie.stars.length;i++){

//   var starsInMovie = starsInMovie += " " + favoriteMovie.stars[i]
//   console.log(starsInMovie)
// }
//   console.log(obj.title + " directed by " + obj.director +
//     " runs for " + obj.durationInMinutes + " minutes. It was realeased in " +
//     obj.releaseYear + " and stars " + starsInMovie + ".")

// }


// logFavoriteMovie(favoriteMovie)

var aboutMe = {
  firstName: 'Emmanuel',
  lastName: 'Paulino',
  age: 29,
  hometown: 'New York',
  favoriteAnimal: 'Lion',
  printData: function () {

    for(var property in aboutMe){
      var singleString;
      singleString += property + ":" + aboutMe[property]

      console.log(typeof(singleString))


      // var logged = this.firstName + this.lastName + this.age + this.hometown + this.favoriteAnimal
      // console.log(logged)

    }


  }
}

aboutMe.printData()

// `Fox Mulder and Dana Scully, played by David Duchovny and Gillian Anderson, are detectives in the X-Files `

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

// var subtitle = document.getElementById('subtitle');
// console.log(subtitle);

// var clickListItem = document.getElementById('clickListItem');
// clickListItem.onclick = function() {
// console.log("You have clicked the li with the text 'Click Me'")};

// var detectives = {
//   mulder: {
//     name: "Fox Mulder",
//     actor: "David Duchovny",
//     school: "Oxford",
//     degree: "Pscychology"
//   },
//   scully: {
//     name: "Dana Scully",
//     actor: "Gillian Anderson",
//     school: "University of Maryland",
//     degree: "Physics"
//   }
// };

// console.log(detectives.scully.name)
// var string ="";
// for(var property in detectives.mulder){
//   string = string + " " + detectives.mulder[property]


// }

// console.log(string)

// console.log(detectives.mulder.name + ' and ' + detectives.scully.name +
//   ", played by " + detectives.mulder.actor + " and " + detectives.scully.actor +
//   ", are detectives in the X-Files")

// var readingList = [
//   {
//     title: "The Hobbit",
//     author: "J.R.R. Tolkien",
//     alreadyRead: false
//   },
//   {
//     title: "Harry Potter and the Order of the Phoenix",
//     author: "J.K. Rowling",
//     alreadyRead: true
//   }
// ];

// for(i=0;i<readingList.length;i++){
//   if(readingList[i].alreadyRead === true){
//     console.log("You already read " + readingList[i].title +
//       " by " + readingList[i].author)

//   } else {
//     console.log("You still need to read " + readingList[i].title + " by " +
//       readingList[i].author)
//   }

// }

// var alien = {
//   title: "Alien",
//   director: "Ridley Scott",
//   duration: 117,
//   releaseYear: 1979,
//   stars: ["Tom Skerritt", "Sigourney Weaver", "Veronica Cartwright", "Harry Dean Stanton", "John Hurt", "Ian Holm", "Yaphet Kotto"]
// }

// function movieOutput(obj){
//   var buffer = '';
//   buffer += obj.title + ", directed by " +
//     obj.director + " and released in "
//     + obj.releaseYear + " lasts for " +
//     obj.duration + " minutes. Stars: ";

//     for(var i=0; i<obj.stars.length; i++){
//       buffer+= ", " + obj.stars[i]
//     }
//     console.log(buffer)


//     // +
//     // obj.stars.join(', '))
// }

// movieOutput(alien)

// var subtitle = document.getElementById('subtitle');
// console.log(subtitle)

// var clickListItem = document.getElementById('clickListItem')

// // clickListItem.onclick = function() {
// //   console.log("You have clicked the li with the text 'Click Me'")
// // }
// clickListItem.addEventListener("onclick", function(event) {
//   console.log("you have clicke the li tag")
// })

// var printDatum=""
// var aboutMe = {
//   firstName:'Emmanuel',
//   nickName:"Emoney",
//   lastName:"Paulino",
//   age:29,
//   hometown:"New York City",
//   favoriteAnimal:"Dog",
//   printData: function(){
//   var printDatum = "";
//   for(var prop in this) {
//     if (typeof this[prop] !='function') {
//       printDatum += this[prop]
//     }

//   }
//   console.log(printDatum)
//   alert(printDatum)
// }
// }
// aboutMe.printData();

// var hoverListItem = document.getElementById("hoverListItem");
// hoverListItem.addEventListener("mouseover", function(event) {
//   console.log("you hovered")
// })

// hoverListItem.mouseover = function() {
//   console.log("You have hovered over the li with the text 'Hover Over Me'")
// }



