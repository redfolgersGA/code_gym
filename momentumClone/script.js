// require('dotenv').config()
// console.log(process.env)

// import os
// from dotenv import load_dotenv
// load_dotenv()

// API_KEY = os.getenv('PROJECT_API_KEY')

const express = require('express');
const app = express()
require('dotenv').config()

console.log(process.env, "is process.env")

app.listen(3000, () => console.log('listening at port 3000'))

app.use(express.static('public'))


console.log("script loaded")

// const time = document.getElementById('time')
// const pTagForQuote = $('#quote')
// let nameInput = $('input#inputName')
// // let nameInputValue = nameInput.val()
// const nameButton = $('#submitName')
// const spanFirstName = $('span#firstName')
// let timeOfDay = ""
// let greetingSpan = $('span#greeting')

// let focusSpan = $('span#focus')
// let inputFocus = $('input#inputFocus')
// let focusButton = $('button#submitFocus')

// let todoDiv = $('div.showTodo')
// let focusLabelTag = $('label#focusLabel')




// $.ajax({
//   type: "GET",
//   url: "https://quotes.rest/qod",
//   method: "GET",
//   success: function(data){
//     console.log(data.contents.quotes[0].quote)
//     pTagForQuote.text(data.contents.quotes[0].quote)
//   }
// })



// function setTime(){
//   let today = new Date()
//   let hours = today.getHours()
//   let minutes = today.getMinutes()
//   let seconds = today.getSeconds()

//   if(seconds <= 9){
//     seconds = "0" + seconds;
//   }

//   if (minutes <= 9){
//     minutes = "0" + minutes
//   }



//   time.textContent = `${hours} ${minutes} ${seconds}`

// }

// setInterval(setTime, 0)




// nameButton.on("click", captureName)

// function captureName(e){
//   e.preventDefault()
//   let today = new Date()
//   let inputNameTag = $('input#inputName')
//   let submitNameButton = $('button#submitName')
//   let nameInputValue = nameInput.val()

//   if(nameInputValue === ""){
//     console.log('its empty dude')
//   } else if(nameInputValue !== "" && today.toLocaleString("en-US").includes('AM')){
//     console.log(nameInputValue)
//     inputNameTag.hide()
//     submitNameButton.hide()
//     greetingSpan.text("Good morning,")
//     spanFirstName.text(nameInputValue + ".")
//   } else if(nameInputValue !== "" && today.toLocaleString("en-US").includes('PM')){
//     inputNameTag.hide()
//     submitNameButton.hide()
//     greetingSpan.text("Good evening,")
//     spanFirstName.text(nameInputValue)
//   }



// }

// focusButton.on('click', captureFocus)

// function captureFocus(e){
//   e.preventDefault()
//   let focusCaptured = inputFocus.val()
//   console.log(focusCaptured, "focus captured")


// // hide focus span and show a div with the main focus displayed as a checklist item
//   focusSpan.hide()
//   inputFocus.hide()
//   focusButton.hide()

//   todoDiv.css('display', 'inline-block')

//   focusLabelTag.text(focusCaptured)



//   $('input[type="checkbox"]'). click(function(){
// if($(this).prop("checked") == true){

//   focusLabelTag.css('text-decoration', 'line-through')
// console.log("Checkbox is checked." );
// } else if($(this).prop("checked") == false){
//   focusLabelTag.css("text-decoration", "")
// }

// })




// }










// SAMPLE OF SERVER
// ----------------------------------------------------------------------------

// //Load HTTP module
// const http = require("http");
// const hostname = '127.0.0.1';
// const port = 3000;

// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {

//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });














