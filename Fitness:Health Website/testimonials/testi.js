$(document).ready(function() {
console.log("loaded")

var navSlide= function(){
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  var navLinks = document.querySelectorAll('.nav-links li');

  // Toggle Nav
  burger.addEventListener('click',function(){
    nav.classList.toggle('nav-active')


    // Animate Links
      navLinks.forEach(function(link, index){
        if(link.style.animation){
          link.style.animation = ''
        }else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.2}s`


      }
    });
    // Burger Animation
    burger.classList.toggle('toggle')

  });


}

var app = function(){
  navSlide()


}

app()








})




