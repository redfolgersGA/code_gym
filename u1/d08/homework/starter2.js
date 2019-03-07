console.log('u01d09 hw starter2.js linked');

//code goes here
var winOrderArray = ['zone-1', 'zone-2', 'zone-3', 'zone-4']

var zoneOne = document.querySelector('#zone-1')
var zoneTwo = document.querySelector('#zone-2')
var zoneThree = document.querySelector('#zone-3')
var zoneFour = document.querySelector('#zone-4')


var winOrderArrayChecker =[]
console.log(winOrderArrayChecker)

function zoneOneTurnGreen () {
  zoneOne.addEventListener('mouseover', function(e){
    if(winOrderArray[0] === 'zone-1'){
    this.style.backgroundColor = 'green'
    winOrderArrayChecker[0] = 'zone-1'
    console.log(winOrderArrayChecker)


    zoneTwo.onmouseover = function () {
      this.style.backgroundColor = 'red'
    zoneTwo.onmouseout = function () {
      this.style.backgroundColor = 'white'
    }


    }
    zoneThree.onmouseover = function () {
      this.style.backgroundColor = 'red'
    zoneThree.onmouseout = function () {
      this.style.backgroundColor = 'white'
    }


    }
    zoneFour.onmouseover = function () {
      this.style.backgroundColor = 'red'
    zoneFour.onmouseout = function () {
      this.style.backgroundColor = 'white'
    }


    }




    setTimeout(zoneTwoTurnGreen)

  } else {
    this.style.backgroundColor = 'red'
  }


  })

}

function zoneTwoTurnGreen () {

    if(winOrderArray[1] === 'zone-2' && winOrderArrayChecker[0] === 'zone-1'){

      zoneTwo.onmouseover = function () {
        zoneTwo.style.backgroundColor = 'green'
        winOrderArrayChecker[1] = 'zone-2'
        console.log(winOrderArrayChecker)
        setTimeout(zoneThreeTurnGreen)
      }
    } else {
      console.log('didnt work')
    }

}

function zoneThreeTurnGreen () {
  if(winOrderArray[2] === 'zone-3' && winOrderArrayChecker[0] === 'zone-1' &&
    winOrderArrayChecker[1] === 'zone-2') {
    zoneThree.onmouseover = function () {
      this.style.backgroundColor = 'green'
      winOrderArrayChecker[2] = 'zone-3'
      console.log(winOrderArrayChecker)
    }
  }
}

zoneOneTurnGreen()

