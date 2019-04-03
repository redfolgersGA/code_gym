console.log("JS LOADED")

var weatherForm = $('form.weatherForm')

weatherForm.on("submit", function(e){
  e.preventDefault()
  var inputForm = $('#cityEntered').val()
  console.log(inputForm)
  var city = inputForm

  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?q="+ city +"",
    success: function (data) {
      console.log(data)
      console.log('yas')
      var forecastPTag = $('#forecast')
      var forecastImage = $('img')
      // temp retrieved in degrees Kelvin so convert to Imperail (farenheit)
      function kelvinToFah(kelvin){

        return (kelvin - 273) * 9/5 +32

      }

      forecastPTag.text("the temperature in" + data.name + " is " + Math.floor(kelvinToFah(data.main.temp)))

      forecastImage.attr("src", "images/earth.jpg")

    }
  })
})
