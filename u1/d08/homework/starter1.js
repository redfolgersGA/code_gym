

console.log('u01d09 hw starter.js linked1');

var allBoxes = document.querySelectorAll('.zone')

function changeToGreenAndBack () {
  for(i=0;i<allBoxes.length;i++){

    allBoxes[i].addEventListener("mouseover", function(e) {
      this.style.backgroundColor = "green";


    })

    allBoxes[i].addEventListener('mouseout', function(e){
      this.style.backgroundColor = "white"
    })

  }

}

changeToGreenAndBack()





























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







