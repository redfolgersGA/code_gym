console.log("Page Loaded");

$(document).ready(function(){
// Students! Write your playful jQuery code here!

// 2. Query the DOM for the h1 and store it in a sensibly named variable.
var $laSucks = $('h1');
// 3. Change the heading's text so that it reads "Inhabitants of Los Angeles (1984)".
$('h1').replaceWith('Los Angeles Sucks in 1984 and Forever');
// 4. Query the DOM for any list items with the class of cop, and store the elements in a variable called cops.
$('li' .cop')
var $cops = $('.cop')

// 5. Make all the cops' names the color of lightskyblue.
$cops.css('color', 'lightskyblue')
// 6. Create a div with the class of terminator, and append it to the div with the id of los-angeles.
var $termin = $('<div></div>')
$('body').append($termin)
$termin.addClass('terminator')
$termin.attr('id', 'los-angles')
// 7. Query the DOM for the element with id of the-one-true-sarah-connor, and save it in a variable called theOneTrueSarahConnor.
var $oneTrue = $('#the-one-true-sarah-connor');
// 8. Give theOneTrueSarahConnor the class of badass.
$oneTrue.addClass('badass');
// 9. Query the DOM for all elements that have the class collateral-damage, and save the elements in a variable called poorSouls.
var $poorSouls = $('.collateral-damage');
// 10. Remove poorSouls from the DOM one by one.
//you need to use your own variable names in place of the ones down here. this is an example

$poorSouls.each(function(i, eachItem) {
  var el = $(li);
  el.delay(500 * i).fadeOut(2000);

});

var $poorSouls = $('.collateral-damage');
$poorSouls.each(function(i, li) {
  console.log(i)
  var el = $(li);
  el.delay(500 * i).fadeOut(200);
  });



