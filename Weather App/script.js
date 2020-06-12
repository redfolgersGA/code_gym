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

function logCityLocation(data){
  $('#locationDescrip').remove()
  let divForDescription = $('<div id="locationDescrip" class="container"></div>')
  let cityNameH2Tag = $('<h2 id="cityName"></h2>')
  let cityCountryH2Tag = $('<h2 id="cityCountry"></h2>')
  let weatherDescriptPTag = $('<p id="weatherIsNow"></p>')

  let cityName = data.city.name
  let cityCountry = data.city.country
  let weatherDescript = data.list[0].weather[0].description

  cityNameH2Tag.text(cityName)
  cityCountryH2Tag.text(cityCountry)
  weatherDescriptPTag.text(weatherDescript)

  divForDescription.append(cityNameH2Tag)
  divForDescription.append(cityCountryH2Tag)
  divForDescription.append(weatherDescript)

  body.append(divForDescription)

  console.log(weatherDescript)

}

// REACH GOAL: this function will display time based on time zone in weather location
// can maybe be done by referencing coordinates long and lat
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

// setInterval(setTime, 0)

function givesDayOfWeekToWeatherDivs() {
  let today = new Date()
  // let dayToday = today.getDay()


  let dayOfWeekDivs = $('.daysWeather')

  let sevenDaysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',]

  // let dayOfWeek = sevenDaysArr[dayToday]

  for(let i=0;i<dayOfWeekDivs.length;i++){
    let dayToday = today.getDay()
    let spanForDayOfWeek = $('<span class="weekDay"></span>')
    dayOfWeekDivs.eq(i).append(spanForDayOfWeek)

    spanForDayOfWeek.text(sevenDaysArr[dayToday])
    dayToday++
    console.log(dayToday)

  }

  let spanToday = $('.weekDay')
  console.log(spanToday)

//   if(dayToday === 5){
//     for(let i=0;i<dayOfWeekDivs.length;i++){
//       let spanForDayOfWeek = $('<span class="weekDay"></span>')
//       dayOfWeekDivs.eq(i).append(spanForDayOfWeek)

//       spanForDayOfWeek.text(tenDaysArr[5])

//       // spanForDayOfWeek.text(tenDaysArr[i])
//     }
//     console.log('Fri')
//   } else if(dayToday === 1){
//     console.log('Mon')
//   }

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
      logCityLocation(data)

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
      givesDayOfWeekToWeatherDivs()



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


          spanForTempNumb.text(celsiusNow)

          // maybe put this variable accessible to my butnToFaren

          if (isDailyCels === false){

            for(let i=0;i<spanForHiOfDay.length;i++){
            let hiTempForDay = spanForHiOfDay.eq(i).text()
            let loTempForDay = spanForLoOfDay.eq(i).text()

            let farenToCelsHiForDay = Math.ceil(convertFarenToCels(hiTempForDay))
            let farenToCelsLoForDay = Math.ceil(convertFarenToCels(loTempForDay))

            spanForHiOfDay.eq(i).text(farenToCelsHiForDay)
            spanForLoOfDay.eq(i).text(farenToCelsLoForDay)

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


          spanForTempNumb.text(farenheitNow)

          for(let i=0;i<spanForHiOfDay.length;i++){
            let hiTempOfDay = spanForHiOfDay.eq(i).text()
            let loTempOfDay = spanForLoOfDay.eq(i).text()

            let celsToFarenHiForDay = Math.floor(convertCelsiusToFarenheit(hiTempOfDay))
            let celsToFarenLoForDay = Math.floor(convertCelsiusToFarenheit(loTempOfDay))



            spanForHiOfDay.eq(i).text(celsToFarenHiForDay)
            spanForLoOfDay.eq(i).text(celsToFarenLoForDay)
          }



          isCelsius = false;
        }

        isDailyCels = false;


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
