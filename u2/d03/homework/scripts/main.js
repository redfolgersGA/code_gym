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
  url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "{APIKEY}",
  success: function (data){
    var $pForecast = $('p#forecast');


    $pForecast.text("The temperature in " + data.name + " is " + data.main.temp)

  }



})
})



























});
