console.log("JS LOADED")

let body = $('body')
let weatherForm = $('form.weatherForm')




function convertKelvinToFaren(k){
 return k * 9/5 - 459.67;

}

function convertFarenToCels(f){
  return (f - 32) * 5/9
}

function convertCelsiusToFarenheit(c){
  return  (c * 9/5) + 32
}

function inputWeatherEmoji(data){
  // theres a difference btwn jquery objects and vanilla js objects
  let daysWeatherDiv = $('.daysWeather')
  let dayEmoji;

  for(let i =0;i<daysWeatherDiv.length;i++){
    let dayEmoji = data.list[i].weather[0].icon

    daysWeatherDiv.eq(i).append("<img class='weatherPic' src='http://openweathermap.org/img/wn/" + dayEmoji +"@2x.png'>")
  }
}



weatherForm.on("submit", function(e){
  $('p.tempOfDay').remove()
  $('.daysWeather').remove()
  $('button.changeToCels').remove()
  $('button.changeToFaren').remove()
  e.preventDefault()
  let inputForm = $('#cityEntered').val()
  console.log(inputForm, "is inputform value")
  let city = inputForm

  $.ajax({
    type: "GET",
    url: "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=10&appid=" + apiKey,
    success: function(data){

      let mainContainer = $('.mainContain')

      console.log(data)
      for(let i=0;i<data.list.length;i++){
        let divForWeatherOfDay = $('<div class="container daysWeather"></div>')

        let pTagsForHiForecast = $('<p class="hiTempOfDay"></p>')
        let spanTagForHiForecast = $('<span class="hiNumbOfDay"></span>')

        let pTagsForLoForecast = $('<p class="loTempOfDay"></p>')
        let spanTagForLoForecast = $('<span class="loNumbOfDay"></span>')

        pTagsForHiForecast.text(`Hi `)
        spanTagForHiForecast.text(`${Math.floor(convertKelvinToFaren(data.list[i].temp.max))}`)

        pTagsForLoForecast.text(`Lo `)
        spanTagForLoForecast.text(`${Math.floor(convertKelvinToFaren(data.list[i].temp.min))}`)

        divForWeatherOfDay.append(pTagsForHiForecast)
        divForWeatherOfDay.append(spanTagForHiForecast)

        divForWeatherOfDay.append(pTagsForLoForecast)
        divForWeatherOfDay.append(spanTagForLoForecast)

        body.append(divForWeatherOfDay)

      }
      inputWeatherEmoji(data)


      let farenheitTemp = Math.floor(convertKelvinToFaren(data.list[0].feels_like.day))

      let forecastPTag = $('#forecast')
      let spanForTempNumb = $('#spanForTempNumb')
      forecastPTag.text(`The temp in ${inputForm} feels like`)

      spanForTempNumb.text(`${farenheitTemp}`)

      let butnToCels = $('<button type="button" class="btn btn-primary changeToCels"></button>')
      butnToCels.text(`C`)
      mainContainer.append(butnToCels)

      let butnToFaren = $('<button type="button" class="btn btn-primary changeToFaren"></button>')
      butnToFaren.text('F')
      mainContainer.append(butnToFaren)

      // logic for celsius and farenheit conversion buttons
      let isCelsius = false;
      let isDailyCels = false;

      butnToCels.on('click', function(){

        if(isCelsius === false){
          let spanForTempNumb = $('#spanForTempNumb')
          let spanForHiOfDay = $('.hiNumbOfDay')
          let spanForLoOfDay = $('.loNumbOfDay')

          let celsiusNow = Math.ceil(convertFarenToCels(spanForTempNumb.text()))
          console.log(celsiusNow)

          spanForTempNumb.text(celsiusNow)

          // maybe put this variable accessible to my butnToFaren

          if (isDailyCels === false){
            for(let i=0;i<spanForHiOfDay.length;i++){
            let tempForDay = spanForHiOfDay.eq(i).text()
            let farenToCelsForDay = Math.ceil(convertFarenToCels(spanForHiOfDay.eq(i).text()))

            spanForHiOfDay.eq(i).text(farenToCelsForDay)
            console.log(farenToCelsForDay)
            }
          isDailyCels = true;

          }


          isCelsius = true;

        }

      })

      butnToFaren.on('click', function(){

        if(isCelsius === true){
          let spanForTempNumb = $('#spanForTempNumb')
          let spanForHiOfDay = $('.hiNumbOfDay')
          let spanForLoOfDay = $('.loNumbOfDay')

          let farenheitNow = Math.floor(convertCelsiusToFarenheit(spanForTempNumb.text()))
          console.log(farenheitNow)

          spanForTempNumb.text(farenheitNow)

          for(let i=0;i<spanForHiOfDay.length;i++){
            console.log(spanForHiOfDay.eq(i))
          }



          isCelsius = false;
        }


      })






      let weatherDesc = data.list[0].weather[0].main

      if(weatherDesc === "Thunderstorm" || weatherDesc === "Drizzle" ||
        weatherDesc === "Rain" || weatherDesc === "Snow" ){
        let forecastImage = $('#weatherImage')
        let wardrobePTag = $('<p></p>')

        wardrobePTag.text('Take an Umbrella!')
        forecastImage.attr('src', "images/rain.jpg")
        body.append(wardrobePTag)

        console.log("yas clouds")
      } else if(weatherDesc === "Clear"){
        let forecastImage = $('#weatherImage')

        forecastImage.attr('src', "images/sunny.jpg")
      }
    }
  })

  // $.ajax({
  //   type: "GET",
  //   url: "api.openweathermap.org/data/2.5/weather?q=London,uk&callback=test",
  //   success: function (data) {
  //     console.log(data)
  //     console.log('yas')
  //     var forecastPTag = $('#forecast')
  //     var forecastImage = $('img')
  //     // temp retrieved in degrees Kelvin so convert to Imperail (farenheit)
  //     function kelvinToFah(kelvin){

  //       return (kelvin - 273) * 9/5 +32

  //     }

  //     forecastPTag.text("the temperature in" + data.name + " is " + Math.floor(kelvinToFah(data.main.temp)) + " degrees Fahrenheit")

  //     if(data.weather[0].main === "Rain"){
  //       forecastImage.attr("src", "images/rain.jpg")

  //     } else{
  //       forecastImage.attr("src", "images/earth.jpg")

  //     }


  //   }
  // })
})
