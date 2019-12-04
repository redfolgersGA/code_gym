"use strict";
$(document).ready(function(){ //this calls the code
  console.log('loaded.')
    $('body').append('<p>hi</p>');
    $('body').append('<p>hi</p>');
    $('body').append('<p>hi</p>');
    $('body').append('<p>hi</p>');
    $('body').append('<p>hi</p>');

    var $first_p = $('p')[0]

    $($first_p).prepend('<h1>Hi World!</h1>')

    var i = 0;
    $('p').each(function(element){

    })


})
