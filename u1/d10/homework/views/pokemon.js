//"use strict";




// $("document").ready(function(){







//   console.log("jquery is ready")



	var pokemon = [
		['Voltorb','/assets/images/voltorb.png',100],
		['Charizard','/assets/images/charizard.png',200],
		['Gyarados','/assets/images/gyarados.png',125],
		['Mew','/assets/images/mew.png',75],
		['Geodude','/assets/images/geodude.png',90],
		['Snorlax','/assets/images/snorlax.png',110],
		['Kabutops','/assets/images/kabutops.png',95],
		['Eevee','/assets/images/eevee.png',60],
		['Beedrill','/assets/images/beedrill.png',70],
		['Magikarp','/assets/images/magikarp.gif',40],
		['Gastly','/assets/images/gastly.png',50]
	];

// var urHealthBar = $('p.health').eq(0)
// var urHealthBarString = $(urHealthBar).text()
// var urHealthBarInteger = parseInt(urHealthBarString)

// var enemyDiv = $('img#enemy_img')
// var enemyRandNumber = Math.floor(Math.random() * (pokemon.length - 0) + 0)

//     // maybe try iterating inside the arrays that are inside the array pokemon with a for loop
// var randomEnemyName = pokemon[enemyRandNumber][0]
// var nameText = $('p.name').eq(1).text(randomEnemyName)
// var randomEnemyPic = pokemon[enemyRandNumber][1]
// var randomEnemyHealthBar = $('p.health').eq(1).text(pokemon[enemyRandNumber][2])
// var statusText = $('span#status_text')
// var attackButton = $('p#attack_btn')
// var healButton = $('p#heal_btn')
// var enemyHealthBarInteger = parseInt(randomEnemyHealthBar.text())



// enemyDiv.attr("src", randomEnemyPic)








// function attackEnemy() {
//   var attackMissed = 0
//   var attackBtn = $('p#attack_btn')
//   var enemyHealthBarInteger = parseInt(randomEnemyHealthBar.text())


//   attackBtn.click(function(){
//     attackMissed = Math.round(Math.random() * (10 - 1) + 1)
//     if(attackMissed === 5 && enemyHealthBarInteger > 0){

//     statusText.text('ATTACK MISSED')




//     setTimeout(enemyAttacks, 3000)



//     } else if(enemyHealthBarInteger > 0){
//     var randomEnemyPic = $('img#enemy_img')
//     randomEnemyPic.fadeOut().fadeIn()
//     // generate random number btwn 5 and 30 t0 dcrease enemyHealth by
//     var enemyHealthDecrease = Math.floor(Math.random() * (30 - 5) + 5)
//     enemyHealthBarInteger = enemyHealthBarInteger - enemyHealthDecrease

//     randomEnemyHealthBar.text(enemyHealthBarInteger)
//     console.log(typeof(enemyHealthBarInteger), " is data Type")
//     statusText.text("Your attack was effective. You did " + enemyHealthDecrease + " damage.")
//     setTimeout(enemyAttacks, 3000)







//       if(enemyHealthBarInteger <= 0){



//         statusText.text("YOU WIN!!! " + "You defeated " + randomEnemyName)
//         removeButtons()




//     }





//     }



//   })










// }

// attackEnemy()

// function enemyAttacks () {
//   var enemyHealthString = $('p.health').eq(1).text()
//   var enemyHealthNumber = parseInt(enemyHealthString)
//   var urHealthString = $('p.health').eq(0).text()
//   var urHealthNumber = parseInt(urHealthString)



//   if(urHealthNumber > 0 && enemyHealthNumber > 0) {
//     console.log(urHealthNumber)
//     console.log(enemyHealthNumber)
//     var currentHealth = parseInt(urHealthBar.text())
//     var enemyHealthString = $('p.health').eq(1).text()
//     var enemyHealthAsInteger = parseInt(enemyHealthString)


//     var randomAttackNumber = Math.floor(Math.random() * (30 - 5) + 5)
//     var yourHealthDecreaseInteger = parseInt(randomAttackNumber)

//     var pikachuImage = $('img#pikachu_img')
//     pikachuImage.fadeOut().fadeIn()

//     console.log(yourHealthDecreaseInteger, "your health decreased")

//     statusText.text("Oh no! " + randomEnemyName + " attacked you. You lose " +
//       yourHealthDecreaseInteger + " points")

//     var yourHealthDecrease = currentHealth - randomAttackNumber

//     urHealthBar.text(yourHealthDecrease)

//     if(yourHealthDecrease <= 0){
//       var healButton = $('p#heal_btn')
//       var attackButton = $('p#attack_btn')
//       healButton.remove()
//       attackButton.remove()


//       statusText.text("Pikachu fainted! GAMEOVER")


//     }

//     if(enemyHealthAsInteger <= 0){
//       statusText.text("Your enemy fainted! YOU WIN!")
//     }


//     }
//   }

// function healUrPokemon () {
//   var healButton = $('p#heal_btn');
//   var healAmount = Math.floor(Math.random() * (5 - 5) + 5)
//   youLose()

//   healButton.click(function(){
//     var currentHealth = urHealthBar.text()
//     var currentHealthInteger = parseInt(currentHealth)

//     var totalHealthAfterIncrease = currentHealthInteger + healAmount

//     var pikachuImage = $('img#pikachu_img')
//     pikachuImage.slideUp(1000).slideDown()

//     urHealthBar.text(totalHealthAfterIncrease)

//     setTimeout(enemyAttacks, 3000)

//     // if(currentHealthInteger <= 0 || totalHealthAfterIncrease <= 0) {
//     //   var attackButton = $('p#attack_btn')
//     //   var healtButton = $('p#heal_btn')


//     //   attackButton.remove()
//     //   healButton.remove()
//     //   alert("OH NO! Pikachu fainted. GAMEOVER")
//     //   location.reload()
//     // }




//   })
// }

// healUrPokemon()

// function youLose() {
//   var currentHealthAsString = urHealthBar.text()
//   var currentHealthAsInteger = parseInt(currentHealthAsString)
//   console.log("YOULOSE logs current health at" + currentHealthAsInteger)

//   if(currentHealthAsInteger <= 0){
//     var attackButton = $('p#attack_btn')
//     var healtButton = $('p#heal_btn')



//     statusText.text("OH NO! Pikachu fainted! GAMEOVER")
//     removeButtons()
//     // location.reload()


//   }



// }



// function reloadGame () {
//   location.reload()
// }

// function removeButtons () {
//   attackButton.remove()
//   healButton.remove()
// }






// module.exports = {
//   urHealthBar: urHealthBar,
//   attackEnemy: attackEnemy,
//   enemyAttacks: enemyAttacks,
//   healUrPokemon: healUrPokemon,
//   youLose: youLose,
//   reloadGame: reloadGame,
//   removeButtons: removeButtons
// }


// END END END END
// });



