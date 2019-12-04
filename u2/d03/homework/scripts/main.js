$(document).ready(function(){
console.log("script unloaded sikedd")

// when you press submit the form triggers an ajax request

var planetEntered = $('input#city_entered')
var button = $('button#submit_button')
var forecast = $('div#forecastInformation')
var date = $('p.date')
var imgTag = $('img')


button.click(function(e){
e.preventDefault()
var planetEnteredVal = planetEntered.val()
console.log(planetEnteredVal)

$.ajax({
  type: "GET",
  url: "http://swapi.co/api/planets",
  dataType: "json",

  success: function(data) {

    if(planetEnteredVal.toLowerCase() === "alderaan"){
      console.log(data.results[0])
      imgTag.attr('src', 'img/alderaan.gif')
    } else if(planetEnteredVal.toLowerCase() === "yavin" || planetEnteredVal.toLowerCase() === "yavin iv"){
      imgTag.attr('src', "https://media.giphy.com/media/26BRQjZejh2vgXPJ6/source.gif")
    } else if(planetEnteredVal.toLowerCase() === "hoth"){
      imgTag.attr('src', "https://media.giphy.com/media/SROav5OKGxqUM/source.gif")

    } else if(planetEnteredVal.toLowerCase() === "dagobah"){
      imgTag.attr('src', "img/dagobah.png" )
    } else if(planetEnteredVal.toLowerCase() === "bespin"){
      imgTag.attr('src', "img/dagobah.png")
    }
    console.log(data.results)

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
