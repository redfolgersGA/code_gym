//"use strict";




$("document").ready(function(){







  console.log("jquery is ready")



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

// random enemy selected
var image = $('img#enemy_img')
var enemyName = $('p.name').eq(1)
var enemyHealth = $('p.health').eq(1)

var randomEnemyImage = []
var randomEnemyName = []
var randomEnemyHealth = []

for(var i =0;i<pokemon.length;i++){

  randomEnemyImage.push(pokemon[i][1])
  randomEnemyName.push(pokemon[i][0])
  randomEnemyHealth.push(pokemon[i][2])

  console.log(pokemon[i].length)


}

console.log(randomEnemyImage)
console.log(randomEnemyName)
console.log(randomEnemyHealth)


var randomPokemonNumber = Math.floor(Math.random() * (pokemon.length - 0)) + 0
var enemyHealthNumber = randomEnemyHealth[randomPokemonNumber]
var theRandomEnemyName = randomEnemyName[randomPokemonNumber]

console.log(enemyHealthNumber + 'is enemyhealth')

image.attr('src', randomEnemyImage[randomPokemonNumber])
enemyName.text(randomEnemyName[randomPokemonNumber])
enemyHealth.text(enemyHealthNumber)


// your pokemon attacks on attckbtn click

var attkButton = $('p#attack_btn')
var enemyHealth = $('p.health').eq(1)

var randomDamage = 0

function assignRandomDamage (){
  randomDamage = Math.floor(Math.random() * (30 - 5)) + 5

}



var chanceOfMissing = 0

attkButton.click(function(){
  chanceOfMissing = Math.floor(Math.random() * (11 - 1)) + 1

  if(chanceOfMissing === 5){
    console.log("Your Attack Has Missed")
  } else {

    assignRandomDamage()
    console.log(randomDamage + "is random Damage")
    console.log("chance of missing is" + chanceOfMissing)
    enemyHealthNumber = enemyHealthNumber - randomDamage
    enemyHealth.text(enemyHealthNumber)

    setTimeout(enemyAttacks, 1000)

  }

})


var myHealth = $('p.health').eq(0)
var theStatus = $('span#status_text')
var enemyChanceOfMissing = 0

var myHealthNowInt = parseInt(myHealth.text())

var enemyRandomDamage = 0



function enemyAttacks() {
  enemyChanceOfMissing = Math.floor(Math.random() * (11 - 1)) + 1

  if(enemyChanceOfMissing === 5){
    theStatus.text(theRandomEnemyName + ' attempted an attack but missed!')
  } else {
    theStatus.text(theRandomEnemyName + ' has attacked!!! ')
    enemyRandomDamage = Math.floor(Math.random() * (30 - 5)) + 5
    console.log(enemyRandomDamage)

    myHealthNowInt = myHealthNowInt - enemyRandomDamage

    myHealth.text(myHealthNowInt)

  }

  if(myHealthNowInt <= 0){
    alert('you lose')
  }

  if(enemyHealthNumber <=0){
    alert('you Win!')

  }

}

































// -------------------------------------------------3/27/2020

//   var urHealthBar = $('p.health').eq(0)
//   var enemyHealthBar = $('p.health').eq(1)
//   var urHealthBarInteger = parseInt(urHealthBar.text())
//   // console.log(parseInt(enemyHealthBar.text()))
//   // var enemyHealthBarInteger = parseInt(enemyHealthBar.textContent)
//   var enemyImageTag = $('img#enemy_img')
//   var enemyNameTag = $('p.name').eq(1)
//   var attackButton = $('p#attack_btn')





//   var randomPokemon = pokemon[Math.floor(Math.random() * (pokemon.length - 0 +1) + 0)]
//   // store enemy attributes from pokemon array into accessible variables
//   var enemyImage = randomPokemon[1]
//   var enemyHealth = randomPokemon[2]
//   var enemyName = randomPokemon[0]

//   // add the pokemon array elements as values on the DOM elements
//   enemyImageTag.attr('src', enemyImage)
//   enemyHealthBar.text(enemyHealth)
//   enemyNameTag.text(enemyName)
//   console.log(enemyImage)

//   console.log(randomPokemon)






//   var attackButton = function() {



//     var attackButton = $('p#attack_btn')

//     attackButton.click(function(){
//       var tenPercentMiss = Math.floor(Math.random() * (11- 1) +1)

//       if(tenPercentMiss === 5){
//         console.log(tenPercentMiss)
//         console.log('ATTACK MISSED')



//       } else {
//       console.log(tenPercentMiss)
//       var enemyHealthBar = $('p.health').eq(1)

//       var enemyHealthBarInteger = parseInt(enemyHealthBar.text())
//       console.log('attackButton clicked')
//       var randomAttackNumber = Math.floor(Math.random() * (30 - 5 + 1)) + 5
//       var enemyHealthNow = enemyHealthBarInteger - randomAttackNumber
//       console.log(enemyHealthBarInteger)
//       var enemyHealthBarInteger = enemyHealthNow
//       enemyHealthBar.text(enemyHealthBarInteger)

//       setTimeout(enemyAttacksYou, 2000)
//       gameOver()


//       }
//     })
//   }

//   attackButton()

//   // var currentNumber = 112

//   // var randomNumber = Math.floor(Math.random() * (35 -5) + 5)

//   // function numberNows() {
//   //   var numberNow = currentNumber - randomNumber
//   //   currentNumber = numberNow
//   //   console.log(currentNumber)
//   // }

//   // setInterval(numberNows, 2000)


// function enemyAttacksYou() {
//   var tenPercentMiss = Math.floor(Math.random() * (11- 1) +1)

//     if(tenPercentMiss === 5){
//       console.log(tenPercentMiss)
//       console.log('ATTACK MISSED')



//     } else {
//       var yourCurrentHealth = $('p.health').eq(0)

//       var yourCurrentHealthInteger = parseInt(yourCurrentHealth.text())
//       console.log(yourCurrentHealthInteger)

//       var randomAttackNumber = Math.floor(Math.random() * (30 - 5) + 5)
//       var yourHealthNow = yourCurrentHealthInteger - randomAttackNumber

//       var yourCurrentHealthInteger = yourHealthNow
//       yourCurrentHealth.text(yourCurrentHealthInteger)
//       console.log("ENEMYATTACKSYOU")
//       healYourPokemon()
//       gameOver()


// }
// }

// function healYourPokemon(){
//   var healButton = $('p#heal_btn')

//   healButton.click(function(){
//     var urHealth = $('p.health').eq(0)
//     var urHealthInteger = parseInt(urHealth.text())

//     var randomHealNumber = Math.floor(Math.random() * (50-25) + 25)

//     var urHealthNow = urHealthInteger + randomHealNumber
//     urHealthInteger = urHealthNow

//     urHealth.text(urHealthInteger)

//     console.log('you healed')
//     setTimeout(enemyAttacksYou, 2000)



//   })
// }

// function gameOver() {
//   var urHealthNow = $('p.health').eq(0)
//   var urHealthNowInteger = parseInt(urHealthNow.text())
//   console.log("gameOver says your health is", urHealthNowInteger)

//   var enemyHealthNow = $('p.health').eq(1)
//   var enemyHealthNowInteger = parseInt(enemyHealthNow.text())

//   // select buttons so you can make them hide
//   var attackButton = $('p#attack_btn')
//   var healButton = $('p#heal_btn')

//   if(urHealthNowInteger <= 0){
//     alert("YOU LOSE")
//     // attackButton.hide()
//     // healButton.hide()
//     location.reload()

//   } else if (enemyHealthNowInteger <= 0){
//     alert("YOU WIN")
//     // attackButton.hide()
//     // healButton.hide()
//     location.reload()
//   }
// }
























// SOLUTION
// ----------------------------------------------------------------------------------------



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

// // module.exports = {
// //   healUrPokemon : healUrPokemon,
// //   urHealthBar: urHealthBar
// // }







// END END END END
});




