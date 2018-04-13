$("document").ready(function(){
  console.log("jquery is loaded")

var $img2 = $('div#img2')
$($img2).hide()

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
    $navBar.show()
  })
  $navBar.hide();

}
navBarHide()





// END END END
});

