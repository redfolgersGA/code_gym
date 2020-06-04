console.log("script loaded")

const time = document.getElementById('time')
const pTagForQuote = $('#quote')
let nameInput = $('input#inputName')
// let nameInputValue = nameInput.val()
const nameButton = $('#submitName')
const spanFirstName = $('span#firstName')
let timeOfDay = ""
let greetingSpan = $('span#greeting')








nameButton.on("click", captureName)

function captureName(e){
  e.preventDefault()
  let today = new Date()
  var nameInputValue = nameInput.val()

  if(nameInputValue === ""){
    console.log('its empty dude')
  } else {
    console.log(nameInputValue)

    spanFirstName.text(nameInputValue)
  }

  if(today.toLocaleString("en-US").includes('AM')){
   greetingSpan.text("Good Morning")
    } else {
      greetingSpan.text("Good Evening")
    }




}




function setTime(){
  let today = new Date()
  let hours = today.getHours()
  let minutes = today.getMinutes()
  let seconds = today.getSeconds()

  if(seconds <= 9){
    seconds = "0" + seconds;
  }

  if (minutes <= 9){
    minutes = "0" + minutes
  }



  time.textContent = `${hours} ${minutes} ${seconds}`

}

setInterval(setTime, 0)






$.ajax({
  type: "GET",
  url: "https://quotes.rest/qod",
  method: "GET",
  success: function(data){
    console.log(data.contents.quotes[0].quote)
    pTagForQuote.text(data.contents.quotes[0].quote)

    // if(data.quote.length < 105){
    //   pTagForQuote.text(data.quote)

    // } else{
    //   console.log("more than 105")
    // }

    // console.log(data.quote.length)
  }
})

// $.ajax({
//   type: "GET",
//   url: "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
//   method: "GET",
//   success: function(data){
//    // const response = JSON.parse(data)
//    console.log(data[2])
//   }

// })


// const settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "https://type.fit/api/quotes",
//   "method": "GET"
// }

// $.ajax(settings).done(function (response) {
//   const data = JSON.parse(response);
//   console.log(data);
// });



























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



