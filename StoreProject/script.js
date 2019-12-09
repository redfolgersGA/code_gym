$(document).ready(function(){
console.log("loaded")
var d = new Date();
  // MAKE .banner into a countdown for christmas
var banner = $('.banner')
var xmasMonth = 11;
var xmasDay = 25
var daysTillXmas = xmasDay - d.getUTCDate()




console.log(d.toDateString())

console.log(d.getUTCDate())

if(d.getUTCDate() === xmasDay && d.getUTCMonth() === xmasMonth){
  console.log("its christmas!")
} else{
  console.log('its not christmas but it will be in ' + daysTillXmas + ' days')

}

// get banner.text to change '16' dynamically based on how many days left till xmas

banner.text('ONLY' + daysTillXmas + ' DAYS LEFT TO GET YOUR GIFTS!')
banner.css({
      "color": "white",
      "font-weight": "bolder",
      "font-family": "helvetica,arial, sans-serif"
      // "display": "flex",
      // "justify-content": "space-around"

    })








})


