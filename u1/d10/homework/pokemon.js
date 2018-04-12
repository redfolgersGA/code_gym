//"use strict";

$("document").ready(function(){
  console.log("jquery is ready")

var $statusText = $('span#status_text')
var $enemyImage = $('img#enemy_img')
var $enemyName = $('div#enemy p.name')
var $enemyHealth = $('div#enemy p.health')


var $addEnem;



  // comment IN the .ready method for the document to access jquery
  // all we are doing is selecting elements from the DOM and changing them dynamically

	var pokemon = [
		['Voltorb','images/voltorb.png',100],
		['Charizard','images/charizard.png',200],
		['Gyarados','images/gyarados.png',125],
		['Mew','images/mew.png',75],
		['Geodude','images/geodude.png',90],
		['Snorlax','images/snorlax.png',110],
		['Kabutops','images/kabutops.png',95],
		['Eevee','images/eevee.png',60],
		['Beedrill','images/beedrill.png',70],
		['Magikarp','images/magikarp.gif',40],
		['Gastly','images/gastly.png',50]
	];

  function randPoke (){
    var $randPokemon = pokemon[Math.round(Math.random()*pokemon.length)]
    $($enemyImage).attr('src', $randPokemon[1])
    $($statusText).text('A wild ' + $randPokemon[0] + ' appeared')
    $($enemyName).text($randPokemon[0])
    $($enemyHealth).text($randPokemon[2])


attack($randPokemon)
console.log($randPokemon)
}

randPoke()

// attach event listener to attack button which will deplete the p.health number
function attack($randPokemon) {
  var $attackButton = $('p#attack_btn');
  var $enemyHealthStatus = $randPokemon[2]
  var $randomAttckNumber = Math.floor(Math.random() * (31 - 5) + 5)

  $($attackButton).on('click', function(){
    $($enemyHealth).text($enemyHealthStatus+= - $randomAttckNumber)
    $($statusText).text('Attack was successful!! Enemy health was lowered by ???!')
  })

}
// for(i=0;i<pokemon.length;i++){
//    // console.log(pokemon[i])
//       for(j=0;j<[i].length;j++)
//       console.log(pokemon[i][j])
//   }
// console.log(Math.round(Math.random()*pokemon.length))

// This for loop console.logs(array in array index [1] REMEMBER ARRAYS ARE 0 based in JS)

// Grabbing reference to the enemy IMAGE...Now add an image to it from the ARRAY...Then randomize
// the image selection process



// function addEnemyImage() {

// for(i=0;i<pokemon.length;i++){
//    // console.log(pokemon[i])
//       for(j=0;j<pokemon[i].length;j++) {
//        // console.log(pokemon[i][j])


//           }
//           if(j=1){
//             // maybe my Math.random function will go here
//         // $addEnem = pokemon[i][j] this will always give me back the image in the last array in the array which is ghastly b/c of dynamic typing
//         $addEnem = pokemon[Math.round(Math.random()*pokemon.length)][j]
//         $($statusText).text('a wild' + $addEnem.slice(3, 6))

//         console.log($addEnem + "oh snap")
//         $enemyImage.attr('src', $addEnem)




//           if(j=1){
//             break
//           }
//        // console.log(j)
//           }
//       }
// // displayEnemyText($addEnem)

//   }


// setTimeout(addEnemyImage, 1000)

// function displayEnemyText (a){
//   for(i=0;i<pokemon.length;i++){

//     $($statusText).text('a wild' +'appeared')
//     $addEnem.
//   }

// }

/* global variables that can be called in any functions*/

// var $enemyimg = $("#enemy_img");
// var $enemyname = $("#enemy .name");
// var $enemyhealth = $("#enemy .health");
// var $textbox = $("#status_text");

// var chooseEnemy = function() {

// var pokemonIndex = Math.floor(Math.random()*(pokemon.length);
// var selectEnemy = pokemon[pokemonIndex]
// var pickName = selectEnemy[0]
// var pickImage = selectEnemy[1]
// var pickEnemHealth = selectEnemy[2]



// $enemyname.text(pickName" ");
// $($enemyimg).attr('src', battleEnemy[1]);
// $($enemyhealth).text("Health: " + battleEnemy[2]);
// $($textbox).text("A wild " + battleEnemy[0] + " appeared!");
// return battleEnemy;

// };

// var enemy = chooseEnemy ();
// console.log(enemy);

//document.getElementById('enemy_img').innerHTML = pokemon[chooseEnemy];




/*$($'pokemon').each( function (index)) {

var enemyPic = $($chooseEnemy).val()

 $("#enemy_img").val(enemyPic);
});*/

// $("#attack_btn").click(function() {
//   $(this).hide();})it hides forever but you have to make it hide for 3 seconds then reappear

// $("#enemy_img").click(function() {
//   var enemyPic = $(this).val("chooseEnemy");
// })








/*if(pokemon === [0]) {
  alert("Wild Voltorb appeared!");
}*/

/*$("#attack_btn").click(function(event) {
   alert("Your Attack was super effective!");
   });

$("#heal_btn").click(function(event) {
  alert("Purple Drink heals Pikachu...'PIKACHU!!!'");
});*/

      /*if === true) {
      console.log("this is clicked yes")*/






/*var enemyDetails = arr.push(enemyRandNumber); //pushed chooseenemy number into an array
var enemyName = enemyDetails[0];
var enemyLook = enemyDetails[1];
var enemyHealth = enemyDetails[2];
console.log(enemyDetails)

var $enemy = $('<div class="enemyPoke">+enemyName+'</div>'')


};*/

/*You can attack or heal by clicking the buttons.

/*$("#attack_btn").click(function(event) {
   console.log("clicked: " +event.target);
   });

      if("#attack_btn.click" === true) {
      console.log("this is clicked yes")*/




// END END END END
});

