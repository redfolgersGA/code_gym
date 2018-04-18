$(document).ready(function() {
  console.log('script loaded');

  // json data
var data =  {
  	"people": [
      {
    		"name": "Luke Skywalker",
    		"height": "172",
    		"mass": "77",
    		"hair_color": "blond",
    		"skin_color": "fair",
    		"eye_color": "blue",
    		"birth_year": "19BBY",
    		"gender": "male"
    	}, {
    		"name": "C-3PO",
    		"height": "167",
    		"mass": "75",
    		"hair_color": "n/a",
    		"skin_color": "gold",
    		"eye_color": "yellow",
    		"birth_year": "112BBY",
    		"gender": "oh my"
    	}, {
    		"name": "R2-D2",
    		"height": "96",
    		"mass": "32",
    		"hair_color": "n/a",
    		"skin_color": "white, blue",
    		"eye_color": "red",
    		"birth_year": "33BBY",
    		"gender": "beep boop"
    	}, {
    		"name": "Darth Vader",
    		"height": "202",
    		"mass": "136",
    		"hair_color": "none",
    		"skin_color": "white",
    		"eye_color": "yellow",
    		"birth_year": "41.9BBY",
    		"gender": "male"
    	}, {
    		"name": "Leia Organa",
    		"height": "150",
    		"mass": "49",
    		"hair_color": "brown",
    		"skin_color": "light",
    		"eye_color": "brown",
    		"birth_year": "19BBY",
    		"gender": "female"
  	}]
} // ends var data

1.
  var logData = function() {
    console.log(data)
}
logData();

var logNames = function() {
  for(i=0;i<data.people.length;i++)
    console.log(data.people[i].name)

};
logNames()







// 2.
// var logNames = function() {
//   data.people.forEach(function(person){
//     console.log(person.name)
//   })
// };
// logNames();

// 3.
// var logNameEyes = function () {
//   for(var i=0; i < data.people.length; i++){
//     console.log(data.people[i].name + ", has " + data.people[i]
//       .eye_color + " eyes.")
//   }
// };
// logNameEyes();
// 3. with a foreach loop
// data.people.forEach(function(person){
//   console.log(person.name + ", has " + person.eye_color + "eyes.")

// })

// 4.
// var logByMass = function() {
//   data.people.map(function(person){
//     if(person.mas > 75){
//       console.log(person.name)
//     }
//   })
// }
// logByMass();
// //storing persons with mass > 75 in a variable called heavies
// var heavies = data.people.map(function(person){
//   if(person.mass > 75) {
//     return person.name;
//   }
// })
// console.log(heavies)
// //heavies is storing an array with two objects in it that meet the conditions aka pass the test
// //now if i want to use these two items that pass the test later on i have access to them
// //methods to explore for this question are .map and .filter

// 5.//uses bracket notation instead of dot notation
// var appendCharacterNames = function() {
// var str = " ";
// for( var i=0; i <data.people.length; i++){
//   str = "<p>" + data["people"][i]["name"]+"</p>";
//   $('#characters').append(str);
// }
// }

// 6.
// var appendByMass = function() {
//   data.people.map(function(person){
//   if(person.mass > 75) {
//     $('#characters').append('<p>' + person.name + '</p>');
//   }
//   $('#title').text('Mass > 75')
// };



}); // ends document ready
