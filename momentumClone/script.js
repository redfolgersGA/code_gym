console.log("script loaded")

const time = document.getElementById('time')



function setTime(){
  let today = new Date()
  let hours = today.getHours()
  let minutes = today.getMinutes()
  let seconds = today.getSeconds()

  if(seconds < 9){
    seconds = "0" + seconds;
  }

  if (minutes < 9){
    minutes = "0" + minutes
  }



  time.textContent = `${hours} ${minutes} ${seconds}`


  console.log(minutes)
  console.log(today)

}

setInterval(setTime, 1000)






























// query the DOM for my elements
// const time = $('span#time')
// console.log(time)
// // instantiate Date Object
// const dateNow = new Date();
// const minutes = dateNow.getMinutes()
// let seconds = setInterval(dateNow.getSeconds(), 1000)

// console.log(dateNow.getMinutes())

// function setSeconds(){
//   // let minutes = setInterval(dateNow.getMinutes(), 60000)


//   time.text(`${seconds}`)



// }

// setInterval(setSeconds, 1000)

// function setTime(){
//   setSeconds()

//   console.log('hey')
//   // setTimeout(setTime, 5000)
// }

// // let myTimer = setInterval(setTime, 1000)

// // myTimer()

// var myVar;

// // function callTime() {
// //   myVar = setInterval(setTime, 1000);
// // }

// // // function alertFunc() {
// // //   alert("Hello!");
// // // }

// // callTime()



