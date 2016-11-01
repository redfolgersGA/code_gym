$(function(){
	"use strict";
	/*
	** Declare variables here that use jQuery to grab
	** each of the clock hands
	*/

  //putting these id's into variables to make calling them
  //easier
  var $secondHand = $("#second-hand");

  var $minuteHand = $("#minute-hand");

  var $hourHand = $("#hour-Hand");
//giving my units of time number values that i can use to
//apply degree rotation to. doing it up here for global scope
var seconds= 6;
var minutes = 6;
var hours = 30;
//setInterval function automates a task using a time based
//trigger. In this case the tast of adding 6degrees every
//1 second.
//rotate my #secondHand element 6 degrees ever 1(1000) second
//weird syntax though?
//also .css adds css to the element
setInterval(function(){
$secondHand.css("transform", "rotate("+seconds+"deg)");

//keeps adding 6 degrees to my seconds variable to keep
//the clock in constant rotation
seconds = seconds+6;

}, 1000);

//automate the task of moving my minute hand 6 degrees every
//60 seconds
setInterval(function(){
$minuteHand.css("transform", "rotate("+minutes+"deg)");
  minutes = minutes + 6;

},60000)

setInterval(function() {
  $hourHand.css("transform", "rotate("+hours+"deg)");
hours = hours + 30;
},3600000)



});

//for bonus i think id use date() found that while researching
//but too tired to apply the theory to this clock





