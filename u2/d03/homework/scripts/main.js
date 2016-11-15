$(document).ready(function(){
console.log("script unloaded sike")

var getTemperature = function (city) {
$.ajax({
url: "api.openweathermap.org/data/2.5/weather?q=Milwaukee915d4fc5b64b32c0783542d797416aaf",
method: "GET",
success: function(weather){
console.log(weather);
handleResponse(weather);
}
})

}

// $('button').click(funtion(event){
//  event.preventDefault();
//     var userCity = $("input").val();
//     console.log(userCity);
//     getCityWeather(userCity);



// })













});
