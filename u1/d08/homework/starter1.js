

console.log('u01d09 hw starter.js linked1');

var allBoxes = document.querySelectorAll('.zone')
var allClicked = 0;

function changeToGreenAndBack () {
  for(i=0;i<allBoxes.length;i++){

    allBoxes[i].onmouseover = function(e) {
      this.style.backgroundColor = "green";
      console.log("moused")


    }

    allBoxes[i].onmouseout = function(e){
      this.style.backgroundColor = "white"
    }

    allBoxes[i].onclick = function(e) {
      // why doesnnt clicked variable increment when i place it in here instead of globally


      this.style.backgroundColor = "green"
      this.setAttribute('clicked', 'yes')
      allClicked++
      console.log(allClicked)

      this.onmouseover = function () {

      }

      this.onmouseout = function () {

      }
      if(allClicked === 4) {
        console.log("you won")
      }
    }



  }

}


function boxClicked () {

  for(i=0;i<allBoxes.length;i++) {
    allBoxes[i].addEventListener('onclick', function(e){

      console.log('clicked')

      this.mouseover = function () {

      }
    })

  }

}

changeToGreenAndBack()
boxClicked()





























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







