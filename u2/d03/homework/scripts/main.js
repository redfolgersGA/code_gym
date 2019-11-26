$(document).ready(function(){
console.log("script unloaded sikedd")

// when you press submit the form triggers an ajax request

var planetEntered = $('input#city_entered')

var button = $('button#submit_button')

button.click(function(e){
e.preventDefault()
var planetEnteredVal = planetEntered.val()
console.log(planetEnteredVal)

$.ajax({
  type: "GET",
  url: "http://swapi.co/api/planets",
  dataType: "json",

  success: function(data) {

    for(var i=0;i<data.results.length;i++){
      console.log(data.results[i])


    }

  },
  error: function(data) {
    console.log("failed")
  }
})

})




// var $formInput = $('form.pure-form')


// $formInput.on("submit", function(event){
//   event.preventDefault()
//   var city = $('input#city_entered').val()
//   console.log(city)
//   // grab value of form with value property

//   console.log('submit')

//   $.ajax({
//   method: "get",
//   url: "http://api.openweathermap.org/data/2.5/weather?q="+ city +",
//   success: function (data){
//     console.log('YASSS')
//     var $pForecast = $('p#forecast');


//     $pForecast.text("The temperature in " + data.name + " is " + data.main.temp)

//   }



// })
// })



























});
