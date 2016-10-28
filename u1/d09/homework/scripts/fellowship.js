console.log("followship.js loaded");

setTimeout(makeMiddleEarth, 2000)

var makeMiddleEarth = function() {
//adding a section tag via .append to the body of my html document
//the section tag has an id called "middle-earth". this is jquery syntax
$('body').append('<section id = "middle-earth"></section>')


//adding an article tag to the body of my html document with a class called
//land. Each land has its own name The class tag will allow me to modify the group of objects called land
//
$('#middle-earth').append('<article class= "land"><h1>'The Shire'</h1></article>')

$('section').append('<article class= "land"><h1>'Rivendell'</h1></article>')

$('section').append('<article class= "land"><h1>'Mordor'</article')











---------------------------------------------------------------------------
<section id="middle-earth">
</section>

<article class="land"><h1>The Shire</h1></article>

<article class="land"><h1>Rivendell</h1></article>

<article class="land"><h1>Mordor</h1></article>



