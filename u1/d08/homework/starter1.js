

console.log('u01d09 hw starter.js linked1');

// var counter = 0


// var allZones = document.querySelectorAll('.zone')

// for(var i=0;i<allZones.length;i++){

//   allZones[i].onmouseover = function(){
//     this.style.backgroundColor ="green"

//   }

//   allZones[i].onmouseout = function(){
//     this.style.backgroundColor = "white"

//   }


// }

// for(var i = 0; i< allZones.length; i++){
//   allZones[i].addEventListener('click', function(){
//     this.style.backgroundColor = "green"
//     this.classList.add("clicked")
//     if(this.style.backgroundColor === "green"){
//       console.log(counter)
//       counter++
//       console.log("counter is now" + counter)

//     }
//     checkIfWon()
//     console.log(this)



//     this.onmouseover = function () {

//     }

//     this.onmouseout = function () {

//     }
//   })

//   }


// function checkIfWon(){
//   if(counter === allZones.length){
//     alert("you won the game")
//   }
// }


// PART 2

var winningArray = ['zone-1', 'zone-2', 'zone-3', 'zone-4']
var arrayChecker =[];

var zoneNow;

var allZonesTwo = document.querySelectorAll('.zone')

var zoneOne = document.querySelector('#zone-1')
var zoneTwo = document.querySelector('#zone-2')
var zoneThree = document.querySelector('#zone-3')
var zoneFour = document.querySelector('#zone-4')

function turnZoneOneGreen() {
  if(winningArray[0] === 'zone-1')


    zoneOne.onmouseover = function(e){
      this.style.backgroundColor = 'green'
    }

    zoneOne.onmouseout = function(){
      this.style.backgroundColor = 'white'
    }

    zoneOne.onclick = function() {
      arrayChecker[0] = winningArray[0]
      console.log(arrayChecker)
      turnZoneTwoGreen()
      this.onmouseout = function () {

      }
    }

    zoneTwo.onmouseover = function(){
      this.style.backgroundColor = 'red'
    }

    zoneTwo.onmouseout = function(){
      this.style.backgroundColor = 'white'
    }

    zoneThree.onmouseover = function(){
      this.style.backgroundColor = 'red'
    }

    zoneThree.onmouseout = function(){
      this.style.backgroundColor = 'white'
    }

    zoneFour.onmouseover = function(){
      this.style.backgroundColor = 'red'
    }

    zoneFour.onmouseout = function(){
      this.style.backgroundColor = 'white'
    }


}

turnZoneOneGreen()

function turnZoneTwoGreen() {
  zoneTwo.onmouseover = function (){
    this.style.backgroundColor = 'green'
  }

  zoneTwo.onclick = function() {
    arrayChecker[1]= winningArray[1]
    console.log(arrayChecker)
    turnZoneThreeGreen()
    this.onmouseout = function() {

    }

  }
}

function turnZoneThreeGreen() {
  zoneThree.onmouseover = function() {
    this.style.backgroundColor = 'green'
  }

  zoneThree.onclick = function() {
    arrayChecker[2] = winningArray[2]
    turnZoneFourGreen()
    this.onmouseout = function() {

    }
  }
}

function turnZoneFourGreen() {
  zoneFour.onmouseover = function() {
    this.style.backgroundColor = 'green'
  }

  zoneFour.onclick = function() {
    arrayChecker[3] = winningArray[3]
    checkToWin()
    this.onmouseout = function(){

    }
  }
}

function checkToWin() {
  if(arrayChecker = winningArray){
  alert("YOU WON!")
  setTimeout(function(){
    for(var i=0; i<allZonesTwo.length;i++){
      allZonesTwo[i].style.backgroundColor = 'yellow'
    }
  }, 1000)

  setTimeout(function(){
    for(var i=0; i<allZonesTwo.length;i++){
      allZonesTwo[i].style.backgroundColor = 'red'
    }
  }, 2000)

  setTimeout(function(){
    for(var i=0; i<allZonesTwo.length;i++){
      allZonesTwo[i].style.backgroundColor = 'white'
    }
  }, 3000)



   setTimeout(turnZoneOneGreen, 3000)

 }

 arrayChecker = []


}








// -------------------------------------------------------3/20/20

// var allZones = document.querySelectorAll('.zone');
//   var zone1Clicked = false
//   var zone2Clicked = false
//   var zone3Clicked = false
//   var zone4Clicked = false

// for (var i = 0; i < allZones.length; i++){
//   allZones[i].onmouseover = function() {
//     this.setAttribute('style', 'background-color: green');
//   };

//   allZones[i].onmouseout = function() {
//     this.setAttribute('style', 'background-color: white');
//   };

//   allZones[i].onclick = function() {
//     this.setAttribute('style', 'background-color: red');

//     this.onmouseover = function() {
//       //do nothing after clicked
//     };

//     this.onmouseout = function() {
//       //do nothing after clicked
//     };
//   }
// };



// function checkIfAllZonesRed () {


//   var zone1 = document.querySelectorAll('.zone')[0]
//   var zone2 = document.querySelectorAll('.zone')[1]
//   var zone3 = document.querySelectorAll('.zone')[2]
//   var zone4 = document.querySelectorAll('.zone')[3]

//   zone1.addEventListener('click', function(){
//     if(zone1Clicked == false){
//       zone1.style.backgroundColor = 'red'
//     zone1Clicked = true
//     console.log(zone1Clicked)
//     checkZonesPart2()


//     } else{ (zone1Clicked == true)
//       zone1.addEventListener('click', function(){
//         zone1.style.backgroundColor = 'purple'
//         zone1Clicked = false
//         console.log(zone1Clicked)
//       })
//     }

//   })
//   zone2.addEventListener('click', function(){
//     zone2Clicked = true
//     console.log(zone2Clicked)
//     checkZonesPart2()
//   })

//   zone3.addEventListener('click', function(){
//     zone3Clicked = true
//     console.log(zone3Clicked)
//     checkZonesPart2()
//   })
//   zone4.addEventListener('click', function(){

//     zone4Clicked = true
//     console.log(zone4Clicked)
//     checkZonesPart2()

//   })






// }
// checkIfAllZonesRed()


// function checkZonesPart2(){
//   if(zone1Clicked == true && zone2Clicked == true && zone3Clicked == true && zone4Clicked == true){
//     alert("YOU WON!")
//   }



// }
// console.log(zone1Clicked)



// --------------------------------------------------------------------



// var allZones = document.querySelectorAll('.zone')
// var clicked = ""

// function styleGreen (e) {
//   e.target.style.backgroundColor = 'green'
//   console.log('styledGreen')
// }

// function styleWhite (e) {
//   e.target.style.backgroundColor = 'white'
//   console.log('styledWhite')
// }

// function styleRed (e) {
//   this.removeEventListener('mouseover', styleGreen)
//   this.removeEventListener('mouseout', styleWhite)

//   this.style.backgroundColor = 'red'
// }



// function turnZoneGreenOnMouseOver () {
//   for(var i = 0; i < allZones.length;i++){
//     allZones[i].addEventListener('mouseover', styleGreen)
//   }
// }

// turnZoneGreenOnMouseOver()

// function turnZoneWhiteOnMouseOut() {
//   for(var i = 0; i < allZones.length; i++){
//     allZones[i].addEventListener('mouseout', styleWhite)
//   }
// }

// turnZoneWhiteOnMouseOut()



// function turnZoneRedOnClick (e) {
//   for(var i =0; i < allZones.length; i++){
//     e.target.addEventListener('click', styleRed)



//   }
// }

// turnZoneRedOnClick()




// function turnZoneBackToGreenOnMouseOver(){
//   // removes click red
//   // adds green on mouseover
//   // adds white on mouseout
// }






// function mouseOverGreen(e){
//   e.target.style.backgroundColor = "green"


// }

// for(var i = 0; i<allZones.length;i++){
//   allZones[i].addEventListener('mouseover', mouseOverGreen)
//  }



// function mouseOutWhite (e){
//   e.target.style.background = "white"



// }

// for(var i = 0; i < allZones.length;i++){
//   allZones[i].addEventListener('mouseout', mouseOutWhite)
//  }







//  for(var i = 0; i < allZones.length;i++){
//   allZones[i].addEventListener('click', function(e){


//     e.target.style.backgroundColor = "red";
//     this.removeEventListener('mouseover', mouseOverGreen)
//     this.removeEventListener('mouseout', mouseOutWhite)

//     if(e.target.style.backgroundColor === "red"){
//       e.target.addEventListener('click', mouseOutWhite)
//     }

//     if(e.target.style.backgroundColor === "white"){
//       console.log("now White")
//     }





//   })
//  }

















// var allBoxes = document.querySelectorAll('.zone')
// var allClicked = 0;

// function changeToGreenAndBack () {
//   for(i=0;i<allBoxes.length;i++){

//     allBoxes[i].onmouseover = function(e) {
//       this.style.backgroundColor = "green";
//       console.log("moused")


//     }

//     allBoxes[i].onmouseout = function(e){
//       this.style.backgroundColor = "white"
//     }

//     allBoxes[i].onclick = function(e) {
//       // why doesnnt clicked variable increment when i place it in here instead of globally


//       this.style.backgroundColor = "green"
//       this.setAttribute('clicked', 'yes')
//       allClicked++
//       console.log(allClicked)

//       this.onmouseover = function () {

//       }

//       this.onmouseout = function () {

//       }
//       if(allClicked === 4) {
//         console.log("you won")
//       }
//     }



//   }

// }



// changeToGreenAndBack()






























// var boxes = document.querySelectorAll('.zone');

// console.log(boxes)



// function boxesToGreen() {
//   for(i=0;i<boxes.length;i++){
//     boxes[i].onmouseover = styleGreen
//     }




//   }

// boxesToGreen()

// function styleGreen(){
//   this.style.backgroundColor = "green"
//   console.log('style green')
// }

// function boxesBackToWhite(){
//   for(i=0;i<boxes.length;i++){
//     boxes[i].onmouseout = styleWhite
//   }
// }

// boxesBackToWhite()

// function styleWhite() {
//       this.style.backgroundColor = "white"
//       console.log('style white')
//     }




// function removeWhiteMouse(){
//   for(i=0;i<boxes.length;i++){
//   boxes[i].onclick = clicked
// }

// }

// removeWhiteMouse()

// function clicked(){

//   this.style.backgroundColor = "green"
//   this.onmouseout=function(){};



// }

// function boxesToGreenPerm(){
//   for(i=0;i<boxes.length;i++){
//     boxes[i].removeEventListener('onmouseover', styleGreen)
//     console.log("greenperm")
//   }
// }







