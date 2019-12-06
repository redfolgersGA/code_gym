$(document).ready(function() {
console.log("loaded")

var navSlide= function(){
  var burger = document.querySelector('.burger')
  var nav = document.querySelector('.nav-links')

  burger.addEventListener('click',function(){
    nav.classList.toggle('nav-active')
  })
}

var app = function(){
  navSlide()


}

app()








})




