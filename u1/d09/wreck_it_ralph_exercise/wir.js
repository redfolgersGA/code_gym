"use strict";

(function(){
	$(document).ready(function(){
		// Hey XFiles!
		// --------------
		// Let's have some fun!

	  // I'll do some of the work for you, first I will grab the <body></body>
	  // and I'll create a <div> with the id of ralph.
	  var $body = $('body');
		var $ralph = $('<div id="ralph1"></div>');


	  // 1. Add the class "ralph" to this div. Append $ralph to the page.
    $ralph.addClass('ralph')

    $($body).append($ralph)



	  // 2. Create a .click function on ralph. When you click him, his ID Attribute
	  // should increment by one.
	  // i.e. ralph1 should become ralph2, ralph2 becomes ralph3 and so on...
	  // You'll might into an issue here. Maybe you should log the number you are
	  // incrementing and then look at the class names in the css file. (DEBUG IT!)
   // var counter = 2
   //  $($ralph).click(function(){
   //    $ralph.attr('id', 'ralph' +(counter-1))
   //    $ralph.attr('id', 'ralph' + counter)
   //    console.log(counter)
   //    counter++



    // if(counter== 12){
    //   counter = 1
    // } else if(counter == 6){
    //   var $speech1 = $('<div id="speech1"></div>');
    //   $($body).append($speech1)






})
})
