(function(){

console.log("script loaded");

var userName = prompt("What is your name?");
var cat_count = prompt("How many cats do you want? (Maximum: 3)");
var catContainer = document.getElementById('cat_container')

var catDiv = document.createElement('div')
catDiv.className = 'cat'

catContainer.appendChild(catDiv)








// for(i = 0; i <= cat_count; i++){
//   var new_cat = createElement("div");
//   new_cat.className = "cat";
//   new_cat.className = "cat-" + i;
//   var container = querySelector('.cat_container')
//   container.appendChild(new_cat);
// }

})();
