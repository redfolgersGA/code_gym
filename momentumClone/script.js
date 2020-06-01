console.log("script loaded")
// query the DOM for my elements
const time = $('span#time')
console.log(time)
// instantiate Date Object
const dateNow = new Date();
const minutes = dateNow.getMinutes()

console.log(dateNow.getMinutes())

function setSeconds(){
  let seconds = setInterval(dateNow.getSeconds(),5000)
  time.text(`${seconds}`)


}

function setTime(){
  setSeconds()

  console.log('hey')
  // setTimeout(setTime, 5000)
}

// let myTimer = setInterval(setTime, 1000)

// myTimer()

var myVar;

function callTime() {
  myVar = setInterval(setTime, 5000);
}

// function alertFunc() {
//   alert("Hello!");
// }

callTime()



