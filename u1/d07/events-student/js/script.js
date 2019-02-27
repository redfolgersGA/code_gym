// Example 1 whats going on inside the callback function? displaying the
// value of i then increasing i + one(++)
console.log('file is linked')
var i = 1;

document.getElementById('click-button').addEventListener('click', function(event){
  console.log('i am being clicked.');
    var counter = document.getElementById('click-display');
    counter.innerHTML = 'click count: ' + event.detail;
});


// Example 2
document.getElementById('hover-button').addEventListener('mouseenter', function(e){
    var container = document.getElementById('hover-display');
    container.innerHTML = "status: on"
  });

  document.getElementById('hover-button').addEventListener('mouseleave', function(e){
    var container = document.getElementById('hover-display');
    container.innerHTML = "status: off"
  });

// Example 3

// Example 4

var input = document.getElementById('input-box');

input.addEventListener('keyup', function(e){
  var container = document.getElementById('input-label');
  container.innerHTML = input.value;
});


// document
//   .getElementById('input-box')
//   .addEventListener('keypress', function(event){
//     var inputBox
//   })

