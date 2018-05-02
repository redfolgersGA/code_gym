$(document).ready(function(){
console.log("script unloaded sikedd")

// when you press submit the form triggers an ajax request

var $formInput = $('form.pure-form')


$formInput.on("submit", function(event){
  event.preventDefault()
  var city = $('input#city_entered').val()
  console.log(city)
  // grab value of form with value property

  console.log('submit')

  $.ajax({
  type: "GET",
  url: "",
  success: function (data){
    var $pForecast = $('p#forecast');


    $pForecast.text("The weather in " + data.name + " is " + data.main.temp)

  }


})
})



























});
