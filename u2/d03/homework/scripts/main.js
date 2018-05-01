$(document).ready(function(){
console.log("script unloaded sike")

// when you press submit the form triggers an ajax request
var $inputBox = $('input#city_entered')

$inputBox.on("submit", submitCity(event))


function submitCity (event){
  event.preventDefault()



$.ajax({
  type: "GET",
  url: "",
  success: function(data){
    console.log(data.main.temp)
  }


})

}













});
