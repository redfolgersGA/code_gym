console.log("script loaded")

const time = document.getElementById('time')
const pTagForQuote = $('#quote')
let nameInput = $('input#inputName')
// let nameInputValue = nameInput.val()
const nameButton = $('#submitName')
const spanFirstName = $('span#firstName')
let timeOfDay = ""
let greetingSpan = $('span#greeting')

let focusSpan = $('span#focus')
let inputFocus = $('input#inputFocus')
let focusButton = $('button#submitFocus')

let todoDiv = $('div.showTodo')
let focusLabelTag = $('label#focusLabel')




$.ajax({
  type: "GET",
  url: "https://quotes.rest/qod",
  method: "GET",
  success: function(data){
    console.log(data.contents.quotes[0].quote)
    pTagForQuote.text(data.contents.quotes[0].quote)
  }
})



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




nameButton.on("click", captureName)

function captureName(e){
  e.preventDefault()
  let today = new Date()
  let inputNameTag = $('input#inputName')
  let submitNameButton = $('button#submitName')
  let nameInputValue = nameInput.val()

  if(nameInputValue === ""){
    console.log('its empty dude')
  } else if(nameInputValue !== "" && today.toLocaleString("en-US").includes('AM')){
    console.log(nameInputValue)
    inputNameTag.hide()
    submitNameButton.hide()
    greetingSpan.text("Good morning,")
    spanFirstName.text(nameInputValue + ".")
  } else if(nameInputValue !== "" && today.toLocaleString("en-US").includes('PM')){
    inputNameTag.hide()
    submitNameButton.hide()
    greetingSpan.text("Good evening,")
    spanFirstName.text(nameInputValue)
  }



}

focusButton.on('click', captureFocus)

function captureFocus(e){
  e.preventDefault()
  let focusCaptured = inputFocus.val()
  console.log(focusCaptured, "focus captured")


// hide focus span and show a div with the main focus displayed as a checklist item
  focusSpan.hide()
  inputFocus.hide()
  focusButton.hide()

  todoDiv.css('display', 'inline-block')

  focusLabelTag.text(focusCaptured)



  $('input[type="checkbox"]'). click(function(){
if($(this).prop("checked") == true){

  focusLabelTag.css('text-decoration', 'line-through')
console.log("Checkbox is checked." );
} else if($(this).prop("checked") == false){
  focusLabelTag.css("text-decoration", "")
}

})




}















