"use strict";
$(document).ready(function()){ //this calls the code
  console.log('loaded.')
    $('body').append('<p>hi</p>');
    $('body').append('<p>hi</p>');
    $('body').append('<p>hi</p>');
    $('body').append('<p>hi</p>');
    $('body').append('<p>hi</p>');

var i = 0
  $('p').each(function(object){
    i++
    this.innerText = "Paragraph: " + i
  })

  //grab first in collection
  $('p').first()

  $('p').last().hide()
  $('p').last().show()
  $removed_item = $('p').las().remove()

  var temp = $('p').last().clone()
  $('body').append($temp)
  $('p').last().tex('Paragraph: 6')

  $('p').css('cursor','pointer')
  $('p').css({
    'cursor':'pointer',
    'color':'red'
  })

var pOver = function(){
  $('p').css('background-color','blue')
}
varpOut = function(){
  $('p').css('background-color','white')
}

$('p').hover(pOver,pOut) //on the paragraph have a hover when it goes over go out
$('p').last().attr('align','center')



}







  })


  })
