$("document").ready(function(){
  console.log("jquery is loaded")

var $img2 = $('div#img2')
$($img2).hide()


// return an array of HTML elements....The elements in the array will be associated
// with an image
function switchImage() {
  var $img1 = $('div#img1')
  var $img2 = $('div#img2')
  $($img2).hide()
  $($img1).hide()
  $($img2).show()
  $(img1).attr('src', 'img/Headshot.jpg')
}


setInterval(switchImage, 2000)



function navBarHide() {
  var $navBar = $('nav#header_lis')
  var $h1 = $('div#name h1')
  $h1.on('click', function(){
    $navBar.toggle()

  })


}
navBarHide()




// }
// navBarShow()





// END END END
});

