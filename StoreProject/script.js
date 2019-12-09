$(document).ready(function(){
console.log("loaded")
  // MAKE .banner into a countdown for christmas
var banner = $('.banner')
var xmasMonth = 11;
var xmasDay = 25

var d = new Date();

console.log(d.toDateString())

console.log(d.getUTCDate())

if(d.getUTCDate() === xmasDay){
  console.log("its christmas!")
} else{
  console.log('its not christmas')
}










})


