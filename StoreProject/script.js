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










})


